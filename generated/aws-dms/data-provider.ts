// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataProviderProps extends cdktn.TerraformMetaArguments {
    /**
    * The property describes an identifier for the data provider. It is used for describing/deleting/modifying can be name/arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#data_provider_identifier CcDataProvider#data_provider_identifier}
    */
    readonly dataProviderIdentifier?: string;
    /**
    * The property describes a name to identify the data provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#data_provider_name CcDataProvider#data_provider_name}
    */
    readonly dataProviderName?: string;
    /**
    * The optional description of the data provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#description CcDataProvider#description}
    */
    readonly description?: string;
    /**
    * The property describes a data engine for the data provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#engine CcDataProvider#engine}
    */
    readonly engine: string;
    /**
    * The property describes the exact settings which can be modified
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#exact_settings CcDataProvider#exact_settings}
    */
    readonly exactSettings?: boolean | cdktn.IResolvable;
    /**
    * The property identifies the exact type of settings for the data provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#settings CcDataProvider#settings}
    */
    readonly settings?: CcDataProvider.SettingsProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#tags CcDataProvider#tags}
    */
    readonly tags?: CcDataProvider.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider awscc_dms_data_provider}
*/
export class CcDataProvider extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_dms_data_provider";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataProvider resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataProvider to import
    * @param importFromId The id of the existing CcDataProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataProvider to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dms_data_provider", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider awscc_dms_data_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataProviderProps
    */
    public constructor(scope: Construct, id: string, config: CcDataProviderProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_dms_data_provider',
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
        this._dataProviderIdentifier = config.dataProviderIdentifier;
        this._dataProviderName = config.dataProviderName;
        this._description = config.description;
        this._engine = config.engine;
        this._exactSettings = config.exactSettings;
        this._settings.internalValue = config.settings;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // data_provider_arn - computed: true, optional: false, required: false
    public get dataProviderArn() {
        return this.getStringAttribute('data_provider_arn');
    }

    // data_provider_creation_time - computed: true, optional: false, required: false
    public get dataProviderCreationTime() {
        return this.getStringAttribute('data_provider_creation_time');
    }

    // data_provider_identifier - computed: true, optional: true, required: false
    private _dataProviderIdentifier?: string; 
    public get dataProviderIdentifier() {
        return this.getStringAttribute('data_provider_identifier');
    }
    public set dataProviderIdentifier(value: string) {
        this._dataProviderIdentifier = value;
    }
    public resetDataProviderIdentifier() {
        this._dataProviderIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataProviderIdentifierInput() {
        return this._dataProviderIdentifier;
    }

    // data_provider_name - computed: true, optional: true, required: false
    private _dataProviderName?: string; 
    public get dataProviderName() {
        return this.getStringAttribute('data_provider_name');
    }
    public set dataProviderName(value: string) {
        this._dataProviderName = value;
    }
    public resetDataProviderName() {
        this._dataProviderName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataProviderNameInput() {
        return this._dataProviderName;
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

    // engine - computed: false, optional: false, required: true
    private _engine?: string; 
    public get engine() {
        return this.getStringAttribute('engine');
    }
    public set engine(value: string) {
        this._engine = value;
    }
    // Temporarily expose input value. Use with caution.
    public get engineInput() {
        return this._engine;
    }

    // exact_settings - computed: true, optional: true, required: false
    private _exactSettings?: boolean | cdktn.IResolvable; 
    public get exactSettings() {
        return this.getBooleanAttribute('exact_settings');
    }
    public set exactSettings(value: boolean | cdktn.IResolvable) {
        this._exactSettings = value;
    }
    public resetExactSettings() {
        this._exactSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exactSettingsInput() {
        return this._exactSettings;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // settings - computed: true, optional: true, required: false
    private _settings = new CcDataProvider.SettingsPropertyOutputReference(this, "settings");
    public get settings() {
        return this._settings;
    }
    public putSettings(value: CcDataProvider.SettingsProperty) {
        this._settings.internalValue = value;
    }
    public resetSettings() {
        this._settings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get settingsInput() {
        return this._settings.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDataProvider.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDataProvider.TagProperty[] | cdktn.IResolvable) {
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
            data_provider_identifier: cdktn.stringToTerraform(this._dataProviderIdentifier),
            data_provider_name: cdktn.stringToTerraform(this._dataProviderName),
            description: cdktn.stringToTerraform(this._description),
            engine: cdktn.stringToTerraform(this._engine),
            exact_settings: cdktn.booleanToTerraform(this._exactSettings),
            settings: ccDataProviderSettingsPropertyToTerraform(this._settings.internalValue),
            tags: cdktn.listMapper(ccDataProviderTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            data_provider_identifier: {
                value: cdktn.stringToHclTerraform(this._dataProviderIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data_provider_name: {
                value: cdktn.stringToHclTerraform(this._dataProviderName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine: {
                value: cdktn.stringToHclTerraform(this._engine),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            exact_settings: {
                value: cdktn.booleanToHclTerraform(this._exactSettings),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            settings: {
                value: ccDataProviderSettingsPropertyToHclTerraform(this._settings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataProvider.SettingsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDataProviderTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDataProvider.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataProviderDocDbSettingsPropertyToTerraform(struct?: CcDataProvider.DocDbSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        port: cdktn.numberToTerraform(struct!.port),
        server_name: cdktn.stringToTerraform(struct!.serverName),
        ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
    }
}


export function ccDataProviderDocDbSettingsPropertyToHclTerraform(struct?: CcDataProvider.DocDbSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.certificateArn),
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
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        server_name: {
            value: cdktn.stringToHclTerraform(struct!.serverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_mode: {
            value: cdktn.stringToHclTerraform(struct!.sslMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataProviderIbmDb2LuwSettingsPropertyToTerraform(struct?: CcDataProvider.IbmDb2LuwSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        port: cdktn.numberToTerraform(struct!.port),
        server_name: cdktn.stringToTerraform(struct!.serverName),
        ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
    }
}


export function ccDataProviderIbmDb2LuwSettingsPropertyToHclTerraform(struct?: CcDataProvider.IbmDb2LuwSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.certificateArn),
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
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        server_name: {
            value: cdktn.stringToHclTerraform(struct!.serverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_mode: {
            value: cdktn.stringToHclTerraform(struct!.sslMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataProviderIbmDb2zOsSettingsPropertyToTerraform(struct?: CcDataProvider.IbmDb2zOsSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        port: cdktn.numberToTerraform(struct!.port),
        server_name: cdktn.stringToTerraform(struct!.serverName),
        ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
    }
}


export function ccDataProviderIbmDb2zOsSettingsPropertyToHclTerraform(struct?: CcDataProvider.IbmDb2zOsSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.certificateArn),
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
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        server_name: {
            value: cdktn.stringToHclTerraform(struct!.serverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_mode: {
            value: cdktn.stringToHclTerraform(struct!.sslMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataProviderMariaDbSettingsPropertyToTerraform(struct?: CcDataProvider.MariaDbSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
        port: cdktn.numberToTerraform(struct!.port),
        server_name: cdktn.stringToTerraform(struct!.serverName),
        ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
    }
}


export function ccDataProviderMariaDbSettingsPropertyToHclTerraform(struct?: CcDataProvider.MariaDbSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.certificateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        server_name: {
            value: cdktn.stringToHclTerraform(struct!.serverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_mode: {
            value: cdktn.stringToHclTerraform(struct!.sslMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataProviderMicrosoftSqlServerSettingsPropertyToTerraform(struct?: CcDataProvider.MicrosoftSqlServerSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        port: cdktn.numberToTerraform(struct!.port),
        server_name: cdktn.stringToTerraform(struct!.serverName),
        ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
    }
}


export function ccDataProviderMicrosoftSqlServerSettingsPropertyToHclTerraform(struct?: CcDataProvider.MicrosoftSqlServerSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.certificateArn),
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
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        server_name: {
            value: cdktn.stringToHclTerraform(struct!.serverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_mode: {
            value: cdktn.stringToHclTerraform(struct!.sslMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataProviderMongoDbSettingsPropertyToTerraform(struct?: CcDataProvider.MongoDbSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_mechanism: cdktn.stringToTerraform(struct!.authMechanism),
        auth_source: cdktn.stringToTerraform(struct!.authSource),
        auth_type: cdktn.stringToTerraform(struct!.authType),
        certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        port: cdktn.numberToTerraform(struct!.port),
        server_name: cdktn.stringToTerraform(struct!.serverName),
        ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
    }
}


export function ccDataProviderMongoDbSettingsPropertyToHclTerraform(struct?: CcDataProvider.MongoDbSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_mechanism: {
            value: cdktn.stringToHclTerraform(struct!.authMechanism),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auth_source: {
            value: cdktn.stringToHclTerraform(struct!.authSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auth_type: {
            value: cdktn.stringToHclTerraform(struct!.authType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.certificateArn),
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
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        server_name: {
            value: cdktn.stringToHclTerraform(struct!.serverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_mode: {
            value: cdktn.stringToHclTerraform(struct!.sslMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataProviderMySqlSettingsPropertyToTerraform(struct?: CcDataProvider.MySqlSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
        port: cdktn.numberToTerraform(struct!.port),
        server_name: cdktn.stringToTerraform(struct!.serverName),
        ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
    }
}


export function ccDataProviderMySqlSettingsPropertyToHclTerraform(struct?: CcDataProvider.MySqlSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.certificateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        server_name: {
            value: cdktn.stringToHclTerraform(struct!.serverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_mode: {
            value: cdktn.stringToHclTerraform(struct!.sslMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataProviderOracleSettingsPropertyToTerraform(struct?: CcDataProvider.OracleSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        asm_server: cdktn.stringToTerraform(struct!.asmServer),
        certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        port: cdktn.numberToTerraform(struct!.port),
        secrets_manager_oracle_asm_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerOracleAsmAccessRoleArn),
        secrets_manager_oracle_asm_secret_id: cdktn.stringToTerraform(struct!.secretsManagerOracleAsmSecretId),
        secrets_manager_security_db_encryption_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerSecurityDbEncryptionAccessRoleArn),
        secrets_manager_security_db_encryption_secret_id: cdktn.stringToTerraform(struct!.secretsManagerSecurityDbEncryptionSecretId),
        server_name: cdktn.stringToTerraform(struct!.serverName),
        ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
    }
}


export function ccDataProviderOracleSettingsPropertyToHclTerraform(struct?: CcDataProvider.OracleSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        asm_server: {
            value: cdktn.stringToHclTerraform(struct!.asmServer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.certificateArn),
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
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        secrets_manager_oracle_asm_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerOracleAsmAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_oracle_asm_secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerOracleAsmSecretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_security_db_encryption_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerSecurityDbEncryptionAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_security_db_encryption_secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerSecurityDbEncryptionSecretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        server_name: {
            value: cdktn.stringToHclTerraform(struct!.serverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_mode: {
            value: cdktn.stringToHclTerraform(struct!.sslMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataProviderPostgreSqlSettingsPropertyToTerraform(struct?: CcDataProvider.PostgreSqlSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        port: cdktn.numberToTerraform(struct!.port),
        server_name: cdktn.stringToTerraform(struct!.serverName),
        ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
    }
}


export function ccDataProviderPostgreSqlSettingsPropertyToHclTerraform(struct?: CcDataProvider.PostgreSqlSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.certificateArn),
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
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        server_name: {
            value: cdktn.stringToHclTerraform(struct!.serverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_mode: {
            value: cdktn.stringToHclTerraform(struct!.sslMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataProviderRedshiftSettingsPropertyToTerraform(struct?: CcDataProvider.RedshiftSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        port: cdktn.numberToTerraform(struct!.port),
        server_name: cdktn.stringToTerraform(struct!.serverName),
    }
}


export function ccDataProviderRedshiftSettingsPropertyToHclTerraform(struct?: CcDataProvider.RedshiftSettingsProperty | cdktn.IResolvable): any {
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
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        server_name: {
            value: cdktn.stringToHclTerraform(struct!.serverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataProviderSybaseAseSettingsPropertyToTerraform(struct?: CcDataProvider.SybaseAseSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        encrypt_password: cdktn.booleanToTerraform(struct!.encryptPassword),
        port: cdktn.numberToTerraform(struct!.port),
        server_name: cdktn.stringToTerraform(struct!.serverName),
        ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
    }
}


export function ccDataProviderSybaseAseSettingsPropertyToHclTerraform(struct?: CcDataProvider.SybaseAseSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.certificateArn),
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
        encrypt_password: {
            value: cdktn.booleanToHclTerraform(struct!.encryptPassword),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        server_name: {
            value: cdktn.stringToHclTerraform(struct!.serverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_mode: {
            value: cdktn.stringToHclTerraform(struct!.sslMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataProviderSettingsPropertyToTerraform(struct?: CcDataProvider.SettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        doc_db_settings: ccDataProviderDocDbSettingsPropertyToTerraform(struct!.docDbSettings),
        ibm_db_2_luw_settings: ccDataProviderIbmDb2LuwSettingsPropertyToTerraform(struct!.ibmDb2LuwSettings),
        ibm_db_2_z_os_settings: ccDataProviderIbmDb2zOsSettingsPropertyToTerraform(struct!.ibmDb2ZOsSettings),
        maria_db_settings: ccDataProviderMariaDbSettingsPropertyToTerraform(struct!.mariaDbSettings),
        microsoft_sql_server_settings: ccDataProviderMicrosoftSqlServerSettingsPropertyToTerraform(struct!.microsoftSqlServerSettings),
        mongo_db_settings: ccDataProviderMongoDbSettingsPropertyToTerraform(struct!.mongoDbSettings),
        my_sql_settings: ccDataProviderMySqlSettingsPropertyToTerraform(struct!.mySqlSettings),
        oracle_settings: ccDataProviderOracleSettingsPropertyToTerraform(struct!.oracleSettings),
        postgre_sql_settings: ccDataProviderPostgreSqlSettingsPropertyToTerraform(struct!.postgreSqlSettings),
        redshift_settings: ccDataProviderRedshiftSettingsPropertyToTerraform(struct!.redshiftSettings),
        sybase_ase_settings: ccDataProviderSybaseAseSettingsPropertyToTerraform(struct!.sybaseAseSettings),
    }
}


export function ccDataProviderSettingsPropertyToHclTerraform(struct?: CcDataProvider.SettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        doc_db_settings: {
            value: ccDataProviderDocDbSettingsPropertyToHclTerraform(struct!.docDbSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "DocDbSettingsProperty",
        },
        ibm_db_2_luw_settings: {
            value: ccDataProviderIbmDb2LuwSettingsPropertyToHclTerraform(struct!.ibmDb2LuwSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "IbmDb2LuwSettingsProperty",
        },
        ibm_db_2_z_os_settings: {
            value: ccDataProviderIbmDb2zOsSettingsPropertyToHclTerraform(struct!.ibmDb2ZOsSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "IbmDb2zOsSettingsProperty",
        },
        maria_db_settings: {
            value: ccDataProviderMariaDbSettingsPropertyToHclTerraform(struct!.mariaDbSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "MariaDbSettingsProperty",
        },
        microsoft_sql_server_settings: {
            value: ccDataProviderMicrosoftSqlServerSettingsPropertyToHclTerraform(struct!.microsoftSqlServerSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "MicrosoftSqlServerSettingsProperty",
        },
        mongo_db_settings: {
            value: ccDataProviderMongoDbSettingsPropertyToHclTerraform(struct!.mongoDbSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "MongoDbSettingsProperty",
        },
        my_sql_settings: {
            value: ccDataProviderMySqlSettingsPropertyToHclTerraform(struct!.mySqlSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "MySqlSettingsProperty",
        },
        oracle_settings: {
            value: ccDataProviderOracleSettingsPropertyToHclTerraform(struct!.oracleSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "OracleSettingsProperty",
        },
        postgre_sql_settings: {
            value: ccDataProviderPostgreSqlSettingsPropertyToHclTerraform(struct!.postgreSqlSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "PostgreSqlSettingsProperty",
        },
        redshift_settings: {
            value: ccDataProviderRedshiftSettingsPropertyToHclTerraform(struct!.redshiftSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftSettingsProperty",
        },
        sybase_ase_settings: {
            value: ccDataProviderSybaseAseSettingsPropertyToHclTerraform(struct!.sybaseAseSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "SybaseAseSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataProviderTagPropertyToTerraform(struct?: CcDataProvider.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDataProviderTagPropertyToHclTerraform(struct?: CcDataProvider.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDataProvider {
export interface DocDbSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#certificate_arn CcDataProvider#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#database_name CcDataProvider#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#port CcDataProvider#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#server_name CcDataProvider#server_name}
    */
    readonly serverName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#ssl_mode CcDataProvider#ssl_mode}
    */
    readonly sslMode?: string;
}
export class DocDbSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocDbSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateArn = this._certificateArn;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._serverName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverName = this._serverName;
        }
        if (this._sslMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslMode = this._sslMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocDbSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateArn = undefined;
            this._databaseName = undefined;
            this._port = undefined;
            this._serverName = undefined;
            this._sslMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateArn = value.certificateArn;
            this._databaseName = value.databaseName;
            this._port = value.port;
            this._serverName = value.serverName;
            this._sslMode = value.sslMode;
        }
    }

    // certificate_arn - computed: true, optional: true, required: false
    private _certificateArn?: string; 
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
        this._certificateArn = value;
    }
    public resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
        return this._certificateArn;
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

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // server_name - computed: true, optional: true, required: false
    private _serverName?: string; 
    public get serverName() {
        return this.getStringAttribute('server_name');
    }
    public set serverName(value: string) {
        this._serverName = value;
    }
    public resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
        return this._serverName;
    }

    // ssl_mode - computed: true, optional: true, required: false
    private _sslMode?: string; 
    public get sslMode() {
        return this.getStringAttribute('ssl_mode');
    }
    public set sslMode(value: string) {
        this._sslMode = value;
    }
    public resetSslMode() {
        this._sslMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslModeInput() {
        return this._sslMode;
    }
}
export interface IbmDb2LuwSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#certificate_arn CcDataProvider#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#database_name CcDataProvider#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#port CcDataProvider#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#server_name CcDataProvider#server_name}
    */
    readonly serverName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#ssl_mode CcDataProvider#ssl_mode}
    */
    readonly sslMode?: string;
}
export class IbmDb2LuwSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IbmDb2LuwSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateArn = this._certificateArn;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._serverName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverName = this._serverName;
        }
        if (this._sslMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslMode = this._sslMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IbmDb2LuwSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateArn = undefined;
            this._databaseName = undefined;
            this._port = undefined;
            this._serverName = undefined;
            this._sslMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateArn = value.certificateArn;
            this._databaseName = value.databaseName;
            this._port = value.port;
            this._serverName = value.serverName;
            this._sslMode = value.sslMode;
        }
    }

    // certificate_arn - computed: true, optional: true, required: false
    private _certificateArn?: string; 
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
        this._certificateArn = value;
    }
    public resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
        return this._certificateArn;
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

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // server_name - computed: true, optional: true, required: false
    private _serverName?: string; 
    public get serverName() {
        return this.getStringAttribute('server_name');
    }
    public set serverName(value: string) {
        this._serverName = value;
    }
    public resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
        return this._serverName;
    }

    // ssl_mode - computed: true, optional: true, required: false
    private _sslMode?: string; 
    public get sslMode() {
        return this.getStringAttribute('ssl_mode');
    }
    public set sslMode(value: string) {
        this._sslMode = value;
    }
    public resetSslMode() {
        this._sslMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslModeInput() {
        return this._sslMode;
    }
}
export interface IbmDb2zOsSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#certificate_arn CcDataProvider#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#database_name CcDataProvider#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#port CcDataProvider#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#server_name CcDataProvider#server_name}
    */
    readonly serverName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#ssl_mode CcDataProvider#ssl_mode}
    */
    readonly sslMode?: string;
}
export class IbmDb2zOsSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IbmDb2zOsSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateArn = this._certificateArn;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._serverName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverName = this._serverName;
        }
        if (this._sslMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslMode = this._sslMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IbmDb2zOsSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateArn = undefined;
            this._databaseName = undefined;
            this._port = undefined;
            this._serverName = undefined;
            this._sslMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateArn = value.certificateArn;
            this._databaseName = value.databaseName;
            this._port = value.port;
            this._serverName = value.serverName;
            this._sslMode = value.sslMode;
        }
    }

    // certificate_arn - computed: true, optional: true, required: false
    private _certificateArn?: string; 
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
        this._certificateArn = value;
    }
    public resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
        return this._certificateArn;
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

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // server_name - computed: true, optional: true, required: false
    private _serverName?: string; 
    public get serverName() {
        return this.getStringAttribute('server_name');
    }
    public set serverName(value: string) {
        this._serverName = value;
    }
    public resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
        return this._serverName;
    }

    // ssl_mode - computed: true, optional: true, required: false
    private _sslMode?: string; 
    public get sslMode() {
        return this.getStringAttribute('ssl_mode');
    }
    public set sslMode(value: string) {
        this._sslMode = value;
    }
    public resetSslMode() {
        this._sslMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslModeInput() {
        return this._sslMode;
    }
}
export interface MariaDbSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#certificate_arn CcDataProvider#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#port CcDataProvider#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#server_name CcDataProvider#server_name}
    */
    readonly serverName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#ssl_mode CcDataProvider#ssl_mode}
    */
    readonly sslMode?: string;
}
export class MariaDbSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MariaDbSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateArn = this._certificateArn;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._serverName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverName = this._serverName;
        }
        if (this._sslMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslMode = this._sslMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MariaDbSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateArn = undefined;
            this._port = undefined;
            this._serverName = undefined;
            this._sslMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateArn = value.certificateArn;
            this._port = value.port;
            this._serverName = value.serverName;
            this._sslMode = value.sslMode;
        }
    }

    // certificate_arn - computed: true, optional: true, required: false
    private _certificateArn?: string; 
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
        this._certificateArn = value;
    }
    public resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
        return this._certificateArn;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // server_name - computed: true, optional: true, required: false
    private _serverName?: string; 
    public get serverName() {
        return this.getStringAttribute('server_name');
    }
    public set serverName(value: string) {
        this._serverName = value;
    }
    public resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
        return this._serverName;
    }

    // ssl_mode - computed: true, optional: true, required: false
    private _sslMode?: string; 
    public get sslMode() {
        return this.getStringAttribute('ssl_mode');
    }
    public set sslMode(value: string) {
        this._sslMode = value;
    }
    public resetSslMode() {
        this._sslMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslModeInput() {
        return this._sslMode;
    }
}
export interface MicrosoftSqlServerSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#certificate_arn CcDataProvider#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#database_name CcDataProvider#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#port CcDataProvider#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#server_name CcDataProvider#server_name}
    */
    readonly serverName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#ssl_mode CcDataProvider#ssl_mode}
    */
    readonly sslMode?: string;
}
export class MicrosoftSqlServerSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MicrosoftSqlServerSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateArn = this._certificateArn;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._serverName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverName = this._serverName;
        }
        if (this._sslMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslMode = this._sslMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MicrosoftSqlServerSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateArn = undefined;
            this._databaseName = undefined;
            this._port = undefined;
            this._serverName = undefined;
            this._sslMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateArn = value.certificateArn;
            this._databaseName = value.databaseName;
            this._port = value.port;
            this._serverName = value.serverName;
            this._sslMode = value.sslMode;
        }
    }

    // certificate_arn - computed: true, optional: true, required: false
    private _certificateArn?: string; 
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
        this._certificateArn = value;
    }
    public resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
        return this._certificateArn;
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

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // server_name - computed: true, optional: true, required: false
    private _serverName?: string; 
    public get serverName() {
        return this.getStringAttribute('server_name');
    }
    public set serverName(value: string) {
        this._serverName = value;
    }
    public resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
        return this._serverName;
    }

    // ssl_mode - computed: true, optional: true, required: false
    private _sslMode?: string; 
    public get sslMode() {
        return this.getStringAttribute('ssl_mode');
    }
    public set sslMode(value: string) {
        this._sslMode = value;
    }
    public resetSslMode() {
        this._sslMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslModeInput() {
        return this._sslMode;
    }
}
export interface MongoDbSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#auth_mechanism CcDataProvider#auth_mechanism}
    */
    readonly authMechanism?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#auth_source CcDataProvider#auth_source}
    */
    readonly authSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#auth_type CcDataProvider#auth_type}
    */
    readonly authType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#certificate_arn CcDataProvider#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#database_name CcDataProvider#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#port CcDataProvider#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#server_name CcDataProvider#server_name}
    */
    readonly serverName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#ssl_mode CcDataProvider#ssl_mode}
    */
    readonly sslMode?: string;
}
export class MongoDbSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MongoDbSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authMechanism !== undefined) {
            hasAnyValues = true;
            internalValueResult.authMechanism = this._authMechanism;
        }
        if (this._authSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.authSource = this._authSource;
        }
        if (this._authType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authType = this._authType;
        }
        if (this._certificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateArn = this._certificateArn;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._serverName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverName = this._serverName;
        }
        if (this._sslMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslMode = this._sslMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MongoDbSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authMechanism = undefined;
            this._authSource = undefined;
            this._authType = undefined;
            this._certificateArn = undefined;
            this._databaseName = undefined;
            this._port = undefined;
            this._serverName = undefined;
            this._sslMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authMechanism = value.authMechanism;
            this._authSource = value.authSource;
            this._authType = value.authType;
            this._certificateArn = value.certificateArn;
            this._databaseName = value.databaseName;
            this._port = value.port;
            this._serverName = value.serverName;
            this._sslMode = value.sslMode;
        }
    }

    // auth_mechanism - computed: true, optional: true, required: false
    private _authMechanism?: string; 
    public get authMechanism() {
        return this.getStringAttribute('auth_mechanism');
    }
    public set authMechanism(value: string) {
        this._authMechanism = value;
    }
    public resetAuthMechanism() {
        this._authMechanism = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authMechanismInput() {
        return this._authMechanism;
    }

    // auth_source - computed: true, optional: true, required: false
    private _authSource?: string; 
    public get authSource() {
        return this.getStringAttribute('auth_source');
    }
    public set authSource(value: string) {
        this._authSource = value;
    }
    public resetAuthSource() {
        this._authSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authSourceInput() {
        return this._authSource;
    }

    // auth_type - computed: true, optional: true, required: false
    private _authType?: string; 
    public get authType() {
        return this.getStringAttribute('auth_type');
    }
    public set authType(value: string) {
        this._authType = value;
    }
    public resetAuthType() {
        this._authType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authTypeInput() {
        return this._authType;
    }

    // certificate_arn - computed: true, optional: true, required: false
    private _certificateArn?: string; 
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
        this._certificateArn = value;
    }
    public resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
        return this._certificateArn;
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

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // server_name - computed: true, optional: true, required: false
    private _serverName?: string; 
    public get serverName() {
        return this.getStringAttribute('server_name');
    }
    public set serverName(value: string) {
        this._serverName = value;
    }
    public resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
        return this._serverName;
    }

    // ssl_mode - computed: true, optional: true, required: false
    private _sslMode?: string; 
    public get sslMode() {
        return this.getStringAttribute('ssl_mode');
    }
    public set sslMode(value: string) {
        this._sslMode = value;
    }
    public resetSslMode() {
        this._sslMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslModeInput() {
        return this._sslMode;
    }
}
export interface MySqlSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#certificate_arn CcDataProvider#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#port CcDataProvider#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#server_name CcDataProvider#server_name}
    */
    readonly serverName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#ssl_mode CcDataProvider#ssl_mode}
    */
    readonly sslMode?: string;
}
export class MySqlSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MySqlSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateArn = this._certificateArn;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._serverName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverName = this._serverName;
        }
        if (this._sslMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslMode = this._sslMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MySqlSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateArn = undefined;
            this._port = undefined;
            this._serverName = undefined;
            this._sslMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateArn = value.certificateArn;
            this._port = value.port;
            this._serverName = value.serverName;
            this._sslMode = value.sslMode;
        }
    }

    // certificate_arn - computed: true, optional: true, required: false
    private _certificateArn?: string; 
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
        this._certificateArn = value;
    }
    public resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
        return this._certificateArn;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // server_name - computed: true, optional: true, required: false
    private _serverName?: string; 
    public get serverName() {
        return this.getStringAttribute('server_name');
    }
    public set serverName(value: string) {
        this._serverName = value;
    }
    public resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
        return this._serverName;
    }

    // ssl_mode - computed: true, optional: true, required: false
    private _sslMode?: string; 
    public get sslMode() {
        return this.getStringAttribute('ssl_mode');
    }
    public set sslMode(value: string) {
        this._sslMode = value;
    }
    public resetSslMode() {
        this._sslMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslModeInput() {
        return this._sslMode;
    }
}
export interface OracleSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#asm_server CcDataProvider#asm_server}
    */
    readonly asmServer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#certificate_arn CcDataProvider#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#database_name CcDataProvider#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#port CcDataProvider#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_access_role_arn CcDataProvider#secrets_manager_oracle_asm_access_role_arn}
    */
    readonly secretsManagerOracleAsmAccessRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_secret_id CcDataProvider#secrets_manager_oracle_asm_secret_id}
    */
    readonly secretsManagerOracleAsmSecretId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_access_role_arn CcDataProvider#secrets_manager_security_db_encryption_access_role_arn}
    */
    readonly secretsManagerSecurityDbEncryptionAccessRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_secret_id CcDataProvider#secrets_manager_security_db_encryption_secret_id}
    */
    readonly secretsManagerSecurityDbEncryptionSecretId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#server_name CcDataProvider#server_name}
    */
    readonly serverName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#ssl_mode CcDataProvider#ssl_mode}
    */
    readonly sslMode?: string;
}
export class OracleSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OracleSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._asmServer !== undefined) {
            hasAnyValues = true;
            internalValueResult.asmServer = this._asmServer;
        }
        if (this._certificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateArn = this._certificateArn;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._secretsManagerOracleAsmAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerOracleAsmAccessRoleArn = this._secretsManagerOracleAsmAccessRoleArn;
        }
        if (this._secretsManagerOracleAsmSecretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerOracleAsmSecretId = this._secretsManagerOracleAsmSecretId;
        }
        if (this._secretsManagerSecurityDbEncryptionAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerSecurityDbEncryptionAccessRoleArn = this._secretsManagerSecurityDbEncryptionAccessRoleArn;
        }
        if (this._secretsManagerSecurityDbEncryptionSecretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerSecurityDbEncryptionSecretId = this._secretsManagerSecurityDbEncryptionSecretId;
        }
        if (this._serverName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverName = this._serverName;
        }
        if (this._sslMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslMode = this._sslMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OracleSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._asmServer = undefined;
            this._certificateArn = undefined;
            this._databaseName = undefined;
            this._port = undefined;
            this._secretsManagerOracleAsmAccessRoleArn = undefined;
            this._secretsManagerOracleAsmSecretId = undefined;
            this._secretsManagerSecurityDbEncryptionAccessRoleArn = undefined;
            this._secretsManagerSecurityDbEncryptionSecretId = undefined;
            this._serverName = undefined;
            this._sslMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._asmServer = value.asmServer;
            this._certificateArn = value.certificateArn;
            this._databaseName = value.databaseName;
            this._port = value.port;
            this._secretsManagerOracleAsmAccessRoleArn = value.secretsManagerOracleAsmAccessRoleArn;
            this._secretsManagerOracleAsmSecretId = value.secretsManagerOracleAsmSecretId;
            this._secretsManagerSecurityDbEncryptionAccessRoleArn = value.secretsManagerSecurityDbEncryptionAccessRoleArn;
            this._secretsManagerSecurityDbEncryptionSecretId = value.secretsManagerSecurityDbEncryptionSecretId;
            this._serverName = value.serverName;
            this._sslMode = value.sslMode;
        }
    }

    // asm_server - computed: true, optional: true, required: false
    private _asmServer?: string; 
    public get asmServer() {
        return this.getStringAttribute('asm_server');
    }
    public set asmServer(value: string) {
        this._asmServer = value;
    }
    public resetAsmServer() {
        this._asmServer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get asmServerInput() {
        return this._asmServer;
    }

    // certificate_arn - computed: true, optional: true, required: false
    private _certificateArn?: string; 
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
        this._certificateArn = value;
    }
    public resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
        return this._certificateArn;
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

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // secrets_manager_oracle_asm_access_role_arn - computed: true, optional: true, required: false
    private _secretsManagerOracleAsmAccessRoleArn?: string; 
    public get secretsManagerOracleAsmAccessRoleArn() {
        return this.getStringAttribute('secrets_manager_oracle_asm_access_role_arn');
    }
    public set secretsManagerOracleAsmAccessRoleArn(value: string) {
        this._secretsManagerOracleAsmAccessRoleArn = value;
    }
    public resetSecretsManagerOracleAsmAccessRoleArn() {
        this._secretsManagerOracleAsmAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerOracleAsmAccessRoleArnInput() {
        return this._secretsManagerOracleAsmAccessRoleArn;
    }

    // secrets_manager_oracle_asm_secret_id - computed: true, optional: true, required: false
    private _secretsManagerOracleAsmSecretId?: string; 
    public get secretsManagerOracleAsmSecretId() {
        return this.getStringAttribute('secrets_manager_oracle_asm_secret_id');
    }
    public set secretsManagerOracleAsmSecretId(value: string) {
        this._secretsManagerOracleAsmSecretId = value;
    }
    public resetSecretsManagerOracleAsmSecretId() {
        this._secretsManagerOracleAsmSecretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerOracleAsmSecretIdInput() {
        return this._secretsManagerOracleAsmSecretId;
    }

    // secrets_manager_security_db_encryption_access_role_arn - computed: true, optional: true, required: false
    private _secretsManagerSecurityDbEncryptionAccessRoleArn?: string; 
    public get secretsManagerSecurityDbEncryptionAccessRoleArn() {
        return this.getStringAttribute('secrets_manager_security_db_encryption_access_role_arn');
    }
    public set secretsManagerSecurityDbEncryptionAccessRoleArn(value: string) {
        this._secretsManagerSecurityDbEncryptionAccessRoleArn = value;
    }
    public resetSecretsManagerSecurityDbEncryptionAccessRoleArn() {
        this._secretsManagerSecurityDbEncryptionAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerSecurityDbEncryptionAccessRoleArnInput() {
        return this._secretsManagerSecurityDbEncryptionAccessRoleArn;
    }

    // secrets_manager_security_db_encryption_secret_id - computed: true, optional: true, required: false
    private _secretsManagerSecurityDbEncryptionSecretId?: string; 
    public get secretsManagerSecurityDbEncryptionSecretId() {
        return this.getStringAttribute('secrets_manager_security_db_encryption_secret_id');
    }
    public set secretsManagerSecurityDbEncryptionSecretId(value: string) {
        this._secretsManagerSecurityDbEncryptionSecretId = value;
    }
    public resetSecretsManagerSecurityDbEncryptionSecretId() {
        this._secretsManagerSecurityDbEncryptionSecretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerSecurityDbEncryptionSecretIdInput() {
        return this._secretsManagerSecurityDbEncryptionSecretId;
    }

    // server_name - computed: true, optional: true, required: false
    private _serverName?: string; 
    public get serverName() {
        return this.getStringAttribute('server_name');
    }
    public set serverName(value: string) {
        this._serverName = value;
    }
    public resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
        return this._serverName;
    }

    // ssl_mode - computed: true, optional: true, required: false
    private _sslMode?: string; 
    public get sslMode() {
        return this.getStringAttribute('ssl_mode');
    }
    public set sslMode(value: string) {
        this._sslMode = value;
    }
    public resetSslMode() {
        this._sslMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslModeInput() {
        return this._sslMode;
    }
}
export interface PostgreSqlSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#certificate_arn CcDataProvider#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#database_name CcDataProvider#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#port CcDataProvider#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#server_name CcDataProvider#server_name}
    */
    readonly serverName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#ssl_mode CcDataProvider#ssl_mode}
    */
    readonly sslMode?: string;
}
export class PostgreSqlSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PostgreSqlSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateArn = this._certificateArn;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._serverName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverName = this._serverName;
        }
        if (this._sslMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslMode = this._sslMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PostgreSqlSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateArn = undefined;
            this._databaseName = undefined;
            this._port = undefined;
            this._serverName = undefined;
            this._sslMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateArn = value.certificateArn;
            this._databaseName = value.databaseName;
            this._port = value.port;
            this._serverName = value.serverName;
            this._sslMode = value.sslMode;
        }
    }

    // certificate_arn - computed: true, optional: true, required: false
    private _certificateArn?: string; 
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
        this._certificateArn = value;
    }
    public resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
        return this._certificateArn;
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

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // server_name - computed: true, optional: true, required: false
    private _serverName?: string; 
    public get serverName() {
        return this.getStringAttribute('server_name');
    }
    public set serverName(value: string) {
        this._serverName = value;
    }
    public resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
        return this._serverName;
    }

    // ssl_mode - computed: true, optional: true, required: false
    private _sslMode?: string; 
    public get sslMode() {
        return this.getStringAttribute('ssl_mode');
    }
    public set sslMode(value: string) {
        this._sslMode = value;
    }
    public resetSslMode() {
        this._sslMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslModeInput() {
        return this._sslMode;
    }
}
export interface RedshiftSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#database_name CcDataProvider#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#port CcDataProvider#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#server_name CcDataProvider#server_name}
    */
    readonly serverName?: string;
}
export class RedshiftSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._serverName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverName = this._serverName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._databaseName = undefined;
            this._port = undefined;
            this._serverName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._databaseName = value.databaseName;
            this._port = value.port;
            this._serverName = value.serverName;
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

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // server_name - computed: true, optional: true, required: false
    private _serverName?: string; 
    public get serverName() {
        return this.getStringAttribute('server_name');
    }
    public set serverName(value: string) {
        this._serverName = value;
    }
    public resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
        return this._serverName;
    }
}
export interface SybaseAseSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#certificate_arn CcDataProvider#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#database_name CcDataProvider#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#encrypt_password CcDataProvider#encrypt_password}
    */
    readonly encryptPassword?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#port CcDataProvider#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#server_name CcDataProvider#server_name}
    */
    readonly serverName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#ssl_mode CcDataProvider#ssl_mode}
    */
    readonly sslMode?: string;
}
export class SybaseAseSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SybaseAseSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateArn = this._certificateArn;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._encryptPassword !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptPassword = this._encryptPassword;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._serverName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverName = this._serverName;
        }
        if (this._sslMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslMode = this._sslMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SybaseAseSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateArn = undefined;
            this._databaseName = undefined;
            this._encryptPassword = undefined;
            this._port = undefined;
            this._serverName = undefined;
            this._sslMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateArn = value.certificateArn;
            this._databaseName = value.databaseName;
            this._encryptPassword = value.encryptPassword;
            this._port = value.port;
            this._serverName = value.serverName;
            this._sslMode = value.sslMode;
        }
    }

    // certificate_arn - computed: true, optional: true, required: false
    private _certificateArn?: string; 
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
        this._certificateArn = value;
    }
    public resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
        return this._certificateArn;
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

    // encrypt_password - computed: true, optional: true, required: false
    private _encryptPassword?: boolean | cdktn.IResolvable; 
    public get encryptPassword() {
        return this.getBooleanAttribute('encrypt_password');
    }
    public set encryptPassword(value: boolean | cdktn.IResolvable) {
        this._encryptPassword = value;
    }
    public resetEncryptPassword() {
        this._encryptPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptPasswordInput() {
        return this._encryptPassword;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // server_name - computed: true, optional: true, required: false
    private _serverName?: string; 
    public get serverName() {
        return this.getStringAttribute('server_name');
    }
    public set serverName(value: string) {
        this._serverName = value;
    }
    public resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
        return this._serverName;
    }

    // ssl_mode - computed: true, optional: true, required: false
    private _sslMode?: string; 
    public get sslMode() {
        return this.getStringAttribute('ssl_mode');
    }
    public set sslMode(value: string) {
        this._sslMode = value;
    }
    public resetSslMode() {
        this._sslMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslModeInput() {
        return this._sslMode;
    }
}
export interface SettingsProperty {
    /**
    * DocDbSettings property identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#doc_db_settings CcDataProvider#doc_db_settings}
    */
    readonly docDbSettings?: DocDbSettingsProperty;
    /**
    * IbmDb2LuwSettings property identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#ibm_db_2_luw_settings CcDataProvider#ibm_db_2_luw_settings}
    */
    readonly ibmDb2LuwSettings?: IbmDb2LuwSettingsProperty;
    /**
    * IbmDb2zOsSettings property identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#ibm_db_2_z_os_settings CcDataProvider#ibm_db_2_z_os_settings}
    */
    readonly ibmDb2ZOsSettings?: IbmDb2zOsSettingsProperty;
    /**
    * MariaDbSettings property identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#maria_db_settings CcDataProvider#maria_db_settings}
    */
    readonly mariaDbSettings?: MariaDbSettingsProperty;
    /**
    * MicrosoftSqlServerSettings property identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#microsoft_sql_server_settings CcDataProvider#microsoft_sql_server_settings}
    */
    readonly microsoftSqlServerSettings?: MicrosoftSqlServerSettingsProperty;
    /**
    * MongoDbSettings property identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#mongo_db_settings CcDataProvider#mongo_db_settings}
    */
    readonly mongoDbSettings?: MongoDbSettingsProperty;
    /**
    * MySqlSettings property identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#my_sql_settings CcDataProvider#my_sql_settings}
    */
    readonly mySqlSettings?: MySqlSettingsProperty;
    /**
    * OracleSettings property identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#oracle_settings CcDataProvider#oracle_settings}
    */
    readonly oracleSettings?: OracleSettingsProperty;
    /**
    * PostgreSqlSettings property identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#postgre_sql_settings CcDataProvider#postgre_sql_settings}
    */
    readonly postgreSqlSettings?: PostgreSqlSettingsProperty;
    /**
    * RedshiftSettings property identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#redshift_settings CcDataProvider#redshift_settings}
    */
    readonly redshiftSettings?: RedshiftSettingsProperty;
    /**
    * SybaseAseSettings property identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#sybase_ase_settings CcDataProvider#sybase_ase_settings}
    */
    readonly sybaseAseSettings?: SybaseAseSettingsProperty;
}
export class SettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._docDbSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.docDbSettings = this._docDbSettings?.internalValue;
        }
        if (this._ibmDb2LuwSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ibmDb2LuwSettings = this._ibmDb2LuwSettings?.internalValue;
        }
        if (this._ibmDb2ZOsSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ibmDb2ZOsSettings = this._ibmDb2ZOsSettings?.internalValue;
        }
        if (this._mariaDbSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mariaDbSettings = this._mariaDbSettings?.internalValue;
        }
        if (this._microsoftSqlServerSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.microsoftSqlServerSettings = this._microsoftSqlServerSettings?.internalValue;
        }
        if (this._mongoDbSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mongoDbSettings = this._mongoDbSettings?.internalValue;
        }
        if (this._mySqlSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mySqlSettings = this._mySqlSettings?.internalValue;
        }
        if (this._oracleSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oracleSettings = this._oracleSettings?.internalValue;
        }
        if (this._postgreSqlSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.postgreSqlSettings = this._postgreSqlSettings?.internalValue;
        }
        if (this._redshiftSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshiftSettings = this._redshiftSettings?.internalValue;
        }
        if (this._sybaseAseSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sybaseAseSettings = this._sybaseAseSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._docDbSettings.internalValue = undefined;
            this._ibmDb2LuwSettings.internalValue = undefined;
            this._ibmDb2ZOsSettings.internalValue = undefined;
            this._mariaDbSettings.internalValue = undefined;
            this._microsoftSqlServerSettings.internalValue = undefined;
            this._mongoDbSettings.internalValue = undefined;
            this._mySqlSettings.internalValue = undefined;
            this._oracleSettings.internalValue = undefined;
            this._postgreSqlSettings.internalValue = undefined;
            this._redshiftSettings.internalValue = undefined;
            this._sybaseAseSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._docDbSettings.internalValue = value.docDbSettings;
            this._ibmDb2LuwSettings.internalValue = value.ibmDb2LuwSettings;
            this._ibmDb2ZOsSettings.internalValue = value.ibmDb2ZOsSettings;
            this._mariaDbSettings.internalValue = value.mariaDbSettings;
            this._microsoftSqlServerSettings.internalValue = value.microsoftSqlServerSettings;
            this._mongoDbSettings.internalValue = value.mongoDbSettings;
            this._mySqlSettings.internalValue = value.mySqlSettings;
            this._oracleSettings.internalValue = value.oracleSettings;
            this._postgreSqlSettings.internalValue = value.postgreSqlSettings;
            this._redshiftSettings.internalValue = value.redshiftSettings;
            this._sybaseAseSettings.internalValue = value.sybaseAseSettings;
        }
    }

    // doc_db_settings - computed: true, optional: true, required: false
    private _docDbSettings = new DocDbSettingsPropertyOutputReference(this, "doc_db_settings");
    public get docDbSettings() {
        return this._docDbSettings;
    }
    public putDocDbSettings(value: DocDbSettingsProperty) {
        this._docDbSettings.internalValue = value;
    }
    public resetDocDbSettings() {
        this._docDbSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get docDbSettingsInput() {
        return this._docDbSettings.internalValue;
    }

    // ibm_db_2_luw_settings - computed: true, optional: true, required: false
    private _ibmDb2LuwSettings = new IbmDb2LuwSettingsPropertyOutputReference(this, "ibm_db_2_luw_settings");
    public get ibmDb2LuwSettings() {
        return this._ibmDb2LuwSettings;
    }
    public putIbmDb2LuwSettings(value: IbmDb2LuwSettingsProperty) {
        this._ibmDb2LuwSettings.internalValue = value;
    }
    public resetIbmDb2LuwSettings() {
        this._ibmDb2LuwSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ibmDb2LuwSettingsInput() {
        return this._ibmDb2LuwSettings.internalValue;
    }

    // ibm_db_2_z_os_settings - computed: true, optional: true, required: false
    private _ibmDb2ZOsSettings = new IbmDb2zOsSettingsPropertyOutputReference(this, "ibm_db_2_z_os_settings");
    public get ibmDb2ZOsSettings() {
        return this._ibmDb2ZOsSettings;
    }
    public putIbmDb2ZOsSettings(value: IbmDb2zOsSettingsProperty) {
        this._ibmDb2ZOsSettings.internalValue = value;
    }
    public resetIbmDb2ZOsSettings() {
        this._ibmDb2ZOsSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ibmDb2ZOsSettingsInput() {
        return this._ibmDb2ZOsSettings.internalValue;
    }

    // maria_db_settings - computed: true, optional: true, required: false
    private _mariaDbSettings = new MariaDbSettingsPropertyOutputReference(this, "maria_db_settings");
    public get mariaDbSettings() {
        return this._mariaDbSettings;
    }
    public putMariaDbSettings(value: MariaDbSettingsProperty) {
        this._mariaDbSettings.internalValue = value;
    }
    public resetMariaDbSettings() {
        this._mariaDbSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mariaDbSettingsInput() {
        return this._mariaDbSettings.internalValue;
    }

    // microsoft_sql_server_settings - computed: true, optional: true, required: false
    private _microsoftSqlServerSettings = new MicrosoftSqlServerSettingsPropertyOutputReference(this, "microsoft_sql_server_settings");
    public get microsoftSqlServerSettings() {
        return this._microsoftSqlServerSettings;
    }
    public putMicrosoftSqlServerSettings(value: MicrosoftSqlServerSettingsProperty) {
        this._microsoftSqlServerSettings.internalValue = value;
    }
    public resetMicrosoftSqlServerSettings() {
        this._microsoftSqlServerSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get microsoftSqlServerSettingsInput() {
        return this._microsoftSqlServerSettings.internalValue;
    }

    // mongo_db_settings - computed: true, optional: true, required: false
    private _mongoDbSettings = new MongoDbSettingsPropertyOutputReference(this, "mongo_db_settings");
    public get mongoDbSettings() {
        return this._mongoDbSettings;
    }
    public putMongoDbSettings(value: MongoDbSettingsProperty) {
        this._mongoDbSettings.internalValue = value;
    }
    public resetMongoDbSettings() {
        this._mongoDbSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mongoDbSettingsInput() {
        return this._mongoDbSettings.internalValue;
    }

    // my_sql_settings - computed: true, optional: true, required: false
    private _mySqlSettings = new MySqlSettingsPropertyOutputReference(this, "my_sql_settings");
    public get mySqlSettings() {
        return this._mySqlSettings;
    }
    public putMySqlSettings(value: MySqlSettingsProperty) {
        this._mySqlSettings.internalValue = value;
    }
    public resetMySqlSettings() {
        this._mySqlSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mySqlSettingsInput() {
        return this._mySqlSettings.internalValue;
    }

    // oracle_settings - computed: true, optional: true, required: false
    private _oracleSettings = new OracleSettingsPropertyOutputReference(this, "oracle_settings");
    public get oracleSettings() {
        return this._oracleSettings;
    }
    public putOracleSettings(value: OracleSettingsProperty) {
        this._oracleSettings.internalValue = value;
    }
    public resetOracleSettings() {
        this._oracleSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oracleSettingsInput() {
        return this._oracleSettings.internalValue;
    }

    // postgre_sql_settings - computed: true, optional: true, required: false
    private _postgreSqlSettings = new PostgreSqlSettingsPropertyOutputReference(this, "postgre_sql_settings");
    public get postgreSqlSettings() {
        return this._postgreSqlSettings;
    }
    public putPostgreSqlSettings(value: PostgreSqlSettingsProperty) {
        this._postgreSqlSettings.internalValue = value;
    }
    public resetPostgreSqlSettings() {
        this._postgreSqlSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postgreSqlSettingsInput() {
        return this._postgreSqlSettings.internalValue;
    }

    // redshift_settings - computed: true, optional: true, required: false
    private _redshiftSettings = new RedshiftSettingsPropertyOutputReference(this, "redshift_settings");
    public get redshiftSettings() {
        return this._redshiftSettings;
    }
    public putRedshiftSettings(value: RedshiftSettingsProperty) {
        this._redshiftSettings.internalValue = value;
    }
    public resetRedshiftSettings() {
        this._redshiftSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftSettingsInput() {
        return this._redshiftSettings.internalValue;
    }

    // sybase_ase_settings - computed: true, optional: true, required: false
    private _sybaseAseSettings = new SybaseAseSettingsPropertyOutputReference(this, "sybase_ase_settings");
    public get sybaseAseSettings() {
        return this._sybaseAseSettings;
    }
    public putSybaseAseSettings(value: SybaseAseSettingsProperty) {
        this._sybaseAseSettings.internalValue = value;
    }
    public resetSybaseAseSettings() {
        this._sybaseAseSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sybaseAseSettingsInput() {
        return this._sybaseAseSettings.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#key CcDataProvider#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_provider#value CcDataProvider#value}
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
