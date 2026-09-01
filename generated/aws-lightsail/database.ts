// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDatabaseProps extends cdktn.TerraformMetaArguments {
    /**
    * The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#availability_zone CcDatabase#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * When true, enables automated backup retention for your database. Updates are applied during the next maintenance window because this can result in an outage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#backup_retention CcDatabase#backup_retention}
    */
    readonly backupRetention?: boolean | cdktn.IResolvable;
    /**
    * Indicates the certificate that needs to be associated with the database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#ca_certificate_identifier CcDatabase#ca_certificate_identifier}
    */
    readonly caCertificateIdentifier?: string;
    /**
    * The name of the database to create when the Lightsail database resource is created. For MySQL, if this parameter isn't specified, no database is created in the database resource. For PostgreSQL, if this parameter isn't specified, a database named postgres is created in the database resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#master_database_name CcDatabase#master_database_name}
    */
    readonly masterDatabaseName: string;
    /**
    * The password for the master user. The password can include any printable ASCII character except "/", """, or "@". It cannot contain spaces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#master_user_password CcDatabase#master_user_password}
    */
    readonly masterUserPassword?: string;
    /**
    * The name for the master user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#master_username CcDatabase#master_username}
    */
    readonly masterUsername: string;
    /**
    * The daily time range during which automated backups are created for your new database if automated backups are enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#preferred_backup_window CcDatabase#preferred_backup_window}
    */
    readonly preferredBackupWindow?: string;
    /**
    * The weekly time range during which system maintenance can occur on your new database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#preferred_maintenance_window CcDatabase#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Specifies the accessibility options for your new database. A value of true specifies a database that is available to resources outside of your Lightsail account. A value of false specifies a database that is available only to your Lightsail resources in the same region as your database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#publicly_accessible CcDatabase#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktn.IResolvable;
    /**
    * The blueprint ID for your new database. A blueprint describes the major engine version of a database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#relational_database_blueprint_id CcDatabase#relational_database_blueprint_id}
    */
    readonly relationalDatabaseBlueprintId: string;
    /**
    * The bundle ID for your new database. A bundle describes the performance specifications for your database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#relational_database_bundle_id CcDatabase#relational_database_bundle_id}
    */
    readonly relationalDatabaseBundleId: string;
    /**
    * The name to use for your new Lightsail database resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#relational_database_name CcDatabase#relational_database_name}
    */
    readonly relationalDatabaseName: string;
    /**
    * Update one or more parameters of the relational database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#relational_database_parameters CcDatabase#relational_database_parameters}
    */
    readonly relationalDatabaseParameters?: CcDatabase.RelationalDatabaseParameterProperty[] | cdktn.IResolvable;
    /**
    * When true, the master user password is changed to a new strong password generated by Lightsail. Use the get relational database master user password operation to get the new password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#rotate_master_user_password CcDatabase#rotate_master_user_password}
    */
    readonly rotateMasterUserPassword?: boolean | cdktn.IResolvable;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#tags CcDatabase#tags}
    */
    readonly tags?: CcDatabase.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database awscc_lightsail_database}
*/
export class CcDatabase extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lightsail_database";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDatabase resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDatabase to import
    * @param importFromId The id of the existing CcDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDatabase to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lightsail_database", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database awscc_lightsail_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDatabaseProps
    */
    public constructor(scope: Construct, id: string, config: CcDatabaseProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lightsail_database',
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
        this._availabilityZone = config.availabilityZone;
        this._backupRetention = config.backupRetention;
        this._caCertificateIdentifier = config.caCertificateIdentifier;
        this._masterDatabaseName = config.masterDatabaseName;
        this._masterUserPassword = config.masterUserPassword;
        this._masterUsername = config.masterUsername;
        this._preferredBackupWindow = config.preferredBackupWindow;
        this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        this._publiclyAccessible = config.publiclyAccessible;
        this._relationalDatabaseBlueprintId = config.relationalDatabaseBlueprintId;
        this._relationalDatabaseBundleId = config.relationalDatabaseBundleId;
        this._relationalDatabaseName = config.relationalDatabaseName;
        this._relationalDatabaseParameters.internalValue = config.relationalDatabaseParameters;
        this._rotateMasterUserPassword = config.rotateMasterUserPassword;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string; 
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
        this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
        return this._availabilityZone;
    }

    // backup_retention - computed: true, optional: true, required: false
    private _backupRetention?: boolean | cdktn.IResolvable; 
    public get backupRetention() {
        return this.getBooleanAttribute('backup_retention');
    }
    public set backupRetention(value: boolean | cdktn.IResolvable) {
        this._backupRetention = value;
    }
    public resetBackupRetention() {
        this._backupRetention = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupRetentionInput() {
        return this._backupRetention;
    }

    // ca_certificate_identifier - computed: true, optional: true, required: false
    private _caCertificateIdentifier?: string; 
    public get caCertificateIdentifier() {
        return this.getStringAttribute('ca_certificate_identifier');
    }
    public set caCertificateIdentifier(value: string) {
        this._caCertificateIdentifier = value;
    }
    public resetCaCertificateIdentifier() {
        this._caCertificateIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caCertificateIdentifierInput() {
        return this._caCertificateIdentifier;
    }

    // database_arn - computed: true, optional: false, required: false
    public get databaseArn() {
        return this.getStringAttribute('database_arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // master_database_name - computed: false, optional: false, required: true
    private _masterDatabaseName?: string; 
    public get masterDatabaseName() {
        return this.getStringAttribute('master_database_name');
    }
    public set masterDatabaseName(value: string) {
        this._masterDatabaseName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get masterDatabaseNameInput() {
        return this._masterDatabaseName;
    }

    // master_user_password - computed: true, optional: true, required: false
    private _masterUserPassword?: string; 
    public get masterUserPassword() {
        return this.getStringAttribute('master_user_password');
    }
    public set masterUserPassword(value: string) {
        this._masterUserPassword = value;
    }
    public resetMasterUserPassword() {
        this._masterUserPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUserPasswordInput() {
        return this._masterUserPassword;
    }

    // master_username - computed: false, optional: false, required: true
    private _masterUsername?: string; 
    public get masterUsername() {
        return this.getStringAttribute('master_username');
    }
    public set masterUsername(value: string) {
        this._masterUsername = value;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUsernameInput() {
        return this._masterUsername;
    }

    // preferred_backup_window - computed: true, optional: true, required: false
    private _preferredBackupWindow?: string; 
    public get preferredBackupWindow() {
        return this.getStringAttribute('preferred_backup_window');
    }
    public set preferredBackupWindow(value: string) {
        this._preferredBackupWindow = value;
    }
    public resetPreferredBackupWindow() {
        this._preferredBackupWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredBackupWindowInput() {
        return this._preferredBackupWindow;
    }

    // preferred_maintenance_window - computed: true, optional: true, required: false
    private _preferredMaintenanceWindow?: string; 
    public get preferredMaintenanceWindow() {
        return this.getStringAttribute('preferred_maintenance_window');
    }
    public set preferredMaintenanceWindow(value: string) {
        this._preferredMaintenanceWindow = value;
    }
    public resetPreferredMaintenanceWindow() {
        this._preferredMaintenanceWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredMaintenanceWindowInput() {
        return this._preferredMaintenanceWindow;
    }

    // publicly_accessible - computed: true, optional: true, required: false
    private _publiclyAccessible?: boolean | cdktn.IResolvable; 
    public get publiclyAccessible() {
        return this.getBooleanAttribute('publicly_accessible');
    }
    public set publiclyAccessible(value: boolean | cdktn.IResolvable) {
        this._publiclyAccessible = value;
    }
    public resetPubliclyAccessible() {
        this._publiclyAccessible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publiclyAccessibleInput() {
        return this._publiclyAccessible;
    }

    // relational_database_blueprint_id - computed: false, optional: false, required: true
    private _relationalDatabaseBlueprintId?: string; 
    public get relationalDatabaseBlueprintId() {
        return this.getStringAttribute('relational_database_blueprint_id');
    }
    public set relationalDatabaseBlueprintId(value: string) {
        this._relationalDatabaseBlueprintId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get relationalDatabaseBlueprintIdInput() {
        return this._relationalDatabaseBlueprintId;
    }

    // relational_database_bundle_id - computed: false, optional: false, required: true
    private _relationalDatabaseBundleId?: string; 
    public get relationalDatabaseBundleId() {
        return this.getStringAttribute('relational_database_bundle_id');
    }
    public set relationalDatabaseBundleId(value: string) {
        this._relationalDatabaseBundleId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get relationalDatabaseBundleIdInput() {
        return this._relationalDatabaseBundleId;
    }

    // relational_database_name - computed: false, optional: false, required: true
    private _relationalDatabaseName?: string; 
    public get relationalDatabaseName() {
        return this.getStringAttribute('relational_database_name');
    }
    public set relationalDatabaseName(value: string) {
        this._relationalDatabaseName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get relationalDatabaseNameInput() {
        return this._relationalDatabaseName;
    }

    // relational_database_parameters - computed: true, optional: true, required: false
    private _relationalDatabaseParameters = new CcDatabase.RelationalDatabaseParameterPropertyList(this, "relational_database_parameters", true);
    public get relationalDatabaseParameters() {
        return this._relationalDatabaseParameters;
    }
    public putRelationalDatabaseParameters(value: CcDatabase.RelationalDatabaseParameterProperty[] | cdktn.IResolvable) {
        this._relationalDatabaseParameters.internalValue = value;
    }
    public resetRelationalDatabaseParameters() {
        this._relationalDatabaseParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relationalDatabaseParametersInput() {
        return this._relationalDatabaseParameters.internalValue;
    }

    // rotate_master_user_password - computed: true, optional: true, required: false
    private _rotateMasterUserPassword?: boolean | cdktn.IResolvable; 
    public get rotateMasterUserPassword() {
        return this.getBooleanAttribute('rotate_master_user_password');
    }
    public set rotateMasterUserPassword(value: boolean | cdktn.IResolvable) {
        this._rotateMasterUserPassword = value;
    }
    public resetRotateMasterUserPassword() {
        this._rotateMasterUserPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rotateMasterUserPasswordInput() {
        return this._rotateMasterUserPassword;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDatabase.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDatabase.TagProperty[] | cdktn.IResolvable) {
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
            availability_zone: cdktn.stringToTerraform(this._availabilityZone),
            backup_retention: cdktn.booleanToTerraform(this._backupRetention),
            ca_certificate_identifier: cdktn.stringToTerraform(this._caCertificateIdentifier),
            master_database_name: cdktn.stringToTerraform(this._masterDatabaseName),
            master_user_password: cdktn.stringToTerraform(this._masterUserPassword),
            master_username: cdktn.stringToTerraform(this._masterUsername),
            preferred_backup_window: cdktn.stringToTerraform(this._preferredBackupWindow),
            preferred_maintenance_window: cdktn.stringToTerraform(this._preferredMaintenanceWindow),
            publicly_accessible: cdktn.booleanToTerraform(this._publiclyAccessible),
            relational_database_blueprint_id: cdktn.stringToTerraform(this._relationalDatabaseBlueprintId),
            relational_database_bundle_id: cdktn.stringToTerraform(this._relationalDatabaseBundleId),
            relational_database_name: cdktn.stringToTerraform(this._relationalDatabaseName),
            relational_database_parameters: cdktn.listMapper(ccDatabaseRelationalDatabaseParameterPropertyToTerraform, false)(this._relationalDatabaseParameters.internalValue),
            rotate_master_user_password: cdktn.booleanToTerraform(this._rotateMasterUserPassword),
            tags: cdktn.listMapper(ccDatabaseTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            availability_zone: {
                value: cdktn.stringToHclTerraform(this._availabilityZone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            backup_retention: {
                value: cdktn.booleanToHclTerraform(this._backupRetention),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ca_certificate_identifier: {
                value: cdktn.stringToHclTerraform(this._caCertificateIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            master_database_name: {
                value: cdktn.stringToHclTerraform(this._masterDatabaseName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            master_user_password: {
                value: cdktn.stringToHclTerraform(this._masterUserPassword),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            master_username: {
                value: cdktn.stringToHclTerraform(this._masterUsername),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            preferred_backup_window: {
                value: cdktn.stringToHclTerraform(this._preferredBackupWindow),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            preferred_maintenance_window: {
                value: cdktn.stringToHclTerraform(this._preferredMaintenanceWindow),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            publicly_accessible: {
                value: cdktn.booleanToHclTerraform(this._publiclyAccessible),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            relational_database_blueprint_id: {
                value: cdktn.stringToHclTerraform(this._relationalDatabaseBlueprintId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            relational_database_bundle_id: {
                value: cdktn.stringToHclTerraform(this._relationalDatabaseBundleId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            relational_database_name: {
                value: cdktn.stringToHclTerraform(this._relationalDatabaseName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            relational_database_parameters: {
                value: cdktn.listMapperHcl(ccDatabaseRelationalDatabaseParameterPropertyToHclTerraform, false)(this._relationalDatabaseParameters.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDatabase.RelationalDatabaseParameterPropertyList",
            },
            rotate_master_user_password: {
                value: cdktn.booleanToHclTerraform(this._rotateMasterUserPassword),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDatabaseTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDatabase.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDatabaseRelationalDatabaseParameterPropertyToTerraform(struct?: CcDatabase.RelationalDatabaseParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.stringToTerraform(struct!.allowedValues),
        apply_method: cdktn.stringToTerraform(struct!.applyMethod),
        apply_type: cdktn.stringToTerraform(struct!.applyType),
        data_type: cdktn.stringToTerraform(struct!.dataType),
        description: cdktn.stringToTerraform(struct!.description),
        is_modifiable: cdktn.booleanToTerraform(struct!.isModifiable),
        parameter_name: cdktn.stringToTerraform(struct!.parameterName),
        parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
    }
}


export function ccDatabaseRelationalDatabaseParameterPropertyToHclTerraform(struct?: CcDatabase.RelationalDatabaseParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.stringToHclTerraform(struct!.allowedValues),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        apply_method: {
            value: cdktn.stringToHclTerraform(struct!.applyMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        apply_type: {
            value: cdktn.stringToHclTerraform(struct!.applyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_type: {
            value: cdktn.stringToHclTerraform(struct!.dataType),
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
        is_modifiable: {
            value: cdktn.booleanToHclTerraform(struct!.isModifiable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        parameter_name: {
            value: cdktn.stringToHclTerraform(struct!.parameterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameter_value: {
            value: cdktn.stringToHclTerraform(struct!.parameterValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatabaseTagPropertyToTerraform(struct?: CcDatabase.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDatabaseTagPropertyToHclTerraform(struct?: CcDatabase.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDatabase {
export interface RelationalDatabaseParameterProperty {
    /**
    * Specifies the valid range of values for the parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#allowed_values CcDatabase#allowed_values}
    */
    readonly allowedValues?: string;
    /**
    * Indicates when parameter updates are applied. Can be immediate or pending-reboot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#apply_method CcDatabase#apply_method}
    */
    readonly applyMethod?: string;
    /**
    * Specifies the engine-specific parameter type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#apply_type CcDatabase#apply_type}
    */
    readonly applyType?: string;
    /**
    * Specifies the valid data type for the parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#data_type CcDatabase#data_type}
    */
    readonly dataType?: string;
    /**
    * Provides a description of the parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#description CcDatabase#description}
    */
    readonly description?: string;
    /**
    * A Boolean value indicating whether the parameter can be modified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#is_modifiable CcDatabase#is_modifiable}
    */
    readonly isModifiable?: boolean | cdktn.IResolvable;
    /**
    * Specifies the name of the parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#parameter_name CcDatabase#parameter_name}
    */
    readonly parameterName?: string;
    /**
    * Specifies the value of the parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#parameter_value CcDatabase#parameter_value}
    */
    readonly parameterValue?: string;
}
export class RelationalDatabaseParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RelationalDatabaseParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._applyMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.applyMethod = this._applyMethod;
        }
        if (this._applyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.applyType = this._applyType;
        }
        if (this._dataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataType = this._dataType;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._isModifiable !== undefined) {
            hasAnyValues = true;
            internalValueResult.isModifiable = this._isModifiable;
        }
        if (this._parameterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterName = this._parameterName;
        }
        if (this._parameterValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterValue = this._parameterValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RelationalDatabaseParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._applyMethod = undefined;
            this._applyType = undefined;
            this._dataType = undefined;
            this._description = undefined;
            this._isModifiable = undefined;
            this._parameterName = undefined;
            this._parameterValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._applyMethod = value.applyMethod;
            this._applyType = value.applyType;
            this._dataType = value.dataType;
            this._description = value.description;
            this._isModifiable = value.isModifiable;
            this._parameterName = value.parameterName;
            this._parameterValue = value.parameterValue;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string; 
    public get allowedValues() {
        return this.getStringAttribute('allowed_values');
    }
    public set allowedValues(value: string) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // apply_method - computed: true, optional: true, required: false
    private _applyMethod?: string; 
    public get applyMethod() {
        return this.getStringAttribute('apply_method');
    }
    public set applyMethod(value: string) {
        this._applyMethod = value;
    }
    public resetApplyMethod() {
        this._applyMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applyMethodInput() {
        return this._applyMethod;
    }

    // apply_type - computed: true, optional: true, required: false
    private _applyType?: string; 
    public get applyType() {
        return this.getStringAttribute('apply_type');
    }
    public set applyType(value: string) {
        this._applyType = value;
    }
    public resetApplyType() {
        this._applyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applyTypeInput() {
        return this._applyType;
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

    // is_modifiable - computed: true, optional: true, required: false
    private _isModifiable?: boolean | cdktn.IResolvable; 
    public get isModifiable() {
        return this.getBooleanAttribute('is_modifiable');
    }
    public set isModifiable(value: boolean | cdktn.IResolvable) {
        this._isModifiable = value;
    }
    public resetIsModifiable() {
        this._isModifiable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isModifiableInput() {
        return this._isModifiable;
    }

    // parameter_name - computed: true, optional: true, required: false
    private _parameterName?: string; 
    public get parameterName() {
        return this.getStringAttribute('parameter_name');
    }
    public set parameterName(value: string) {
        this._parameterName = value;
    }
    public resetParameterName() {
        this._parameterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterNameInput() {
        return this._parameterName;
    }

    // parameter_value - computed: true, optional: true, required: false
    private _parameterValue?: string; 
    public get parameterValue() {
        return this.getStringAttribute('parameter_value');
    }
    public set parameterValue(value: string) {
        this._parameterValue = value;
    }
    public resetParameterValue() {
        this._parameterValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterValueInput() {
        return this._parameterValue;
    }
}

export class RelationalDatabaseParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : RelationalDatabaseParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): RelationalDatabaseParameterPropertyOutputReference {
        return new RelationalDatabaseParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#key CcDatabase#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_database#value CcDatabase#value}
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
