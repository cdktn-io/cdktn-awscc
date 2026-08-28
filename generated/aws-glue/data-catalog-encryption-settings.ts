// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_data_catalog_encryption_settings

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataCatalogEncryptionSettingsProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the Data Catalog in which the settings are created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_data_catalog_encryption_settings#catalog_id CcDataCatalogEncryptionSettings#catalog_id}
    */
    readonly catalogId: string;
    /**
    * Contains configuration information for maintaining Data Catalog security.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_data_catalog_encryption_settings#data_catalog_encryption_settings CcDataCatalogEncryptionSettings#data_catalog_encryption_settings}
    */
    readonly dataCatalogEncryptionSettings: CcDataCatalogEncryptionSettings.DataCatalogEncryptionSettingsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_data_catalog_encryption_settings awscc_glue_data_catalog_encryption_settings}
*/
export class CcDataCatalogEncryptionSettings extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_data_catalog_encryption_settings";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataCatalogEncryptionSettings resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataCatalogEncryptionSettings to import
    * @param importFromId The id of the existing CcDataCatalogEncryptionSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_data_catalog_encryption_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataCatalogEncryptionSettings to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_data_catalog_encryption_settings", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_data_catalog_encryption_settings awscc_glue_data_catalog_encryption_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataCatalogEncryptionSettingsProps
    */
    public constructor(scope: Construct, id: string, config: CcDataCatalogEncryptionSettingsProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_data_catalog_encryption_settings',
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
        this._catalogId = config.catalogId;
        this._dataCatalogEncryptionSettings.internalValue = config.dataCatalogEncryptionSettings;
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

    // data_catalog_encryption_settings - computed: false, optional: false, required: true
    private _dataCatalogEncryptionSettings = new CcDataCatalogEncryptionSettings.DataCatalogEncryptionSettingsPropertyOutputReference(this, "data_catalog_encryption_settings");
    public get dataCatalogEncryptionSettings() {
        return this._dataCatalogEncryptionSettings;
    }
    public putDataCatalogEncryptionSettings(value: CcDataCatalogEncryptionSettings.DataCatalogEncryptionSettingsProperty) {
        this._dataCatalogEncryptionSettings.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataCatalogEncryptionSettingsInput() {
        return this._dataCatalogEncryptionSettings.internalValue;
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
            data_catalog_encryption_settings: ccDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsPropertyToTerraform(this._dataCatalogEncryptionSettings.internalValue),
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
            data_catalog_encryption_settings: {
                value: ccDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsPropertyToHclTerraform(this._dataCatalogEncryptionSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataCatalogEncryptionSettings.DataCatalogEncryptionSettingsProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataCatalogEncryptionSettingsConnectionPasswordEncryptionPropertyToTerraform(struct?: CcDataCatalogEncryptionSettings.ConnectionPasswordEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        return_connection_password_encrypted: cdktn.booleanToTerraform(struct!.returnConnectionPasswordEncrypted),
    }
}


export function ccDataCatalogEncryptionSettingsConnectionPasswordEncryptionPropertyToHclTerraform(struct?: CcDataCatalogEncryptionSettings.ConnectionPasswordEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        return_connection_password_encrypted: {
            value: cdktn.booleanToHclTerraform(struct!.returnConnectionPasswordEncrypted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataCatalogEncryptionSettingsEncryptionAtRestPropertyToTerraform(struct?: CcDataCatalogEncryptionSettings.EncryptionAtRestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog_encryption_mode: cdktn.stringToTerraform(struct!.catalogEncryptionMode),
        catalog_encryption_service_role: cdktn.stringToTerraform(struct!.catalogEncryptionServiceRole),
        sse_aws_kms_key_id: cdktn.stringToTerraform(struct!.sseAwsKmsKeyId),
    }
}


export function ccDataCatalogEncryptionSettingsEncryptionAtRestPropertyToHclTerraform(struct?: CcDataCatalogEncryptionSettings.EncryptionAtRestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog_encryption_mode: {
            value: cdktn.stringToHclTerraform(struct!.catalogEncryptionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        catalog_encryption_service_role: {
            value: cdktn.stringToHclTerraform(struct!.catalogEncryptionServiceRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sse_aws_kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.sseAwsKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsPropertyToTerraform(struct?: CcDataCatalogEncryptionSettings.DataCatalogEncryptionSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connection_password_encryption: ccDataCatalogEncryptionSettingsConnectionPasswordEncryptionPropertyToTerraform(struct!.connectionPasswordEncryption),
        encryption_at_rest: ccDataCatalogEncryptionSettingsEncryptionAtRestPropertyToTerraform(struct!.encryptionAtRest),
    }
}


export function ccDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsPropertyToHclTerraform(struct?: CcDataCatalogEncryptionSettings.DataCatalogEncryptionSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connection_password_encryption: {
            value: ccDataCatalogEncryptionSettingsConnectionPasswordEncryptionPropertyToHclTerraform(struct!.connectionPasswordEncryption),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectionPasswordEncryptionProperty",
        },
        encryption_at_rest: {
            value: ccDataCatalogEncryptionSettingsEncryptionAtRestPropertyToHclTerraform(struct!.encryptionAtRest),
            isBlock: true,
            type: "struct",
            storageClassType: "EncryptionAtRestProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDataCatalogEncryptionSettings {
export interface ConnectionPasswordEncryptionProperty {
    /**
    * An AWS KMS key that is used to encrypt the connection password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_data_catalog_encryption_settings#kms_key_id CcDataCatalogEncryptionSettings#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * When the ReturnConnectionPasswordEncrypted flag is set to 'true', passwords remain encrypted in the responses of GetConnection and GetConnections. This encryption takes effect independently from catalog encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_data_catalog_encryption_settings#return_connection_password_encrypted CcDataCatalogEncryptionSettings#return_connection_password_encrypted}
    */
    readonly returnConnectionPasswordEncrypted?: boolean | cdktn.IResolvable;
}
export class ConnectionPasswordEncryptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectionPasswordEncryptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._returnConnectionPasswordEncrypted !== undefined) {
            hasAnyValues = true;
            internalValueResult.returnConnectionPasswordEncrypted = this._returnConnectionPasswordEncrypted;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectionPasswordEncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyId = undefined;
            this._returnConnectionPasswordEncrypted = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyId = value.kmsKeyId;
            this._returnConnectionPasswordEncrypted = value.returnConnectionPasswordEncrypted;
        }
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // return_connection_password_encrypted - computed: true, optional: true, required: false
    private _returnConnectionPasswordEncrypted?: boolean | cdktn.IResolvable; 
    public get returnConnectionPasswordEncrypted() {
        return this.getBooleanAttribute('return_connection_password_encrypted');
    }
    public set returnConnectionPasswordEncrypted(value: boolean | cdktn.IResolvable) {
        this._returnConnectionPasswordEncrypted = value;
    }
    public resetReturnConnectionPasswordEncrypted() {
        this._returnConnectionPasswordEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get returnConnectionPasswordEncryptedInput() {
        return this._returnConnectionPasswordEncrypted;
    }
}
export interface EncryptionAtRestProperty {
    /**
    * The encryption-at-rest mode for encrypting Data Catalog data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_data_catalog_encryption_settings#catalog_encryption_mode CcDataCatalogEncryptionSettings#catalog_encryption_mode}
    */
    readonly catalogEncryptionMode?: string;
    /**
    * The role that AWS Glue assumes to encrypt and decrypt the Data Catalog objects on the caller's behalf.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_data_catalog_encryption_settings#catalog_encryption_service_role CcDataCatalogEncryptionSettings#catalog_encryption_service_role}
    */
    readonly catalogEncryptionServiceRole?: string;
    /**
    * The ID of the AWS KMS key to use for encryption at rest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_data_catalog_encryption_settings#sse_aws_kms_key_id CcDataCatalogEncryptionSettings#sse_aws_kms_key_id}
    */
    readonly sseAwsKmsKeyId?: string;
}
export class EncryptionAtRestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionAtRestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalogEncryptionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalogEncryptionMode = this._catalogEncryptionMode;
        }
        if (this._catalogEncryptionServiceRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalogEncryptionServiceRole = this._catalogEncryptionServiceRole;
        }
        if (this._sseAwsKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.sseAwsKmsKeyId = this._sseAwsKmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionAtRestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalogEncryptionMode = undefined;
            this._catalogEncryptionServiceRole = undefined;
            this._sseAwsKmsKeyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalogEncryptionMode = value.catalogEncryptionMode;
            this._catalogEncryptionServiceRole = value.catalogEncryptionServiceRole;
            this._sseAwsKmsKeyId = value.sseAwsKmsKeyId;
        }
    }

    // catalog_encryption_mode - computed: true, optional: true, required: false
    private _catalogEncryptionMode?: string; 
    public get catalogEncryptionMode() {
        return this.getStringAttribute('catalog_encryption_mode');
    }
    public set catalogEncryptionMode(value: string) {
        this._catalogEncryptionMode = value;
    }
    public resetCatalogEncryptionMode() {
        this._catalogEncryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogEncryptionModeInput() {
        return this._catalogEncryptionMode;
    }

    // catalog_encryption_service_role - computed: true, optional: true, required: false
    private _catalogEncryptionServiceRole?: string; 
    public get catalogEncryptionServiceRole() {
        return this.getStringAttribute('catalog_encryption_service_role');
    }
    public set catalogEncryptionServiceRole(value: string) {
        this._catalogEncryptionServiceRole = value;
    }
    public resetCatalogEncryptionServiceRole() {
        this._catalogEncryptionServiceRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogEncryptionServiceRoleInput() {
        return this._catalogEncryptionServiceRole;
    }

    // sse_aws_kms_key_id - computed: true, optional: true, required: false
    private _sseAwsKmsKeyId?: string; 
    public get sseAwsKmsKeyId() {
        return this.getStringAttribute('sse_aws_kms_key_id');
    }
    public set sseAwsKmsKeyId(value: string) {
        this._sseAwsKmsKeyId = value;
    }
    public resetSseAwsKmsKeyId() {
        this._sseAwsKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseAwsKmsKeyIdInput() {
        return this._sseAwsKmsKeyId;
    }
}
export interface DataCatalogEncryptionSettingsProperty {
    /**
    * When connection password protection is enabled, the Data Catalog uses a customer-provided key to encrypt the password as part of CreateConnection or UpdateConnection and store it in the ENCRYPTED_PASSWORD field in the connection properties. You can enable catalog encryption or only password encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_data_catalog_encryption_settings#connection_password_encryption CcDataCatalogEncryptionSettings#connection_password_encryption}
    */
    readonly connectionPasswordEncryption?: ConnectionPasswordEncryptionProperty;
    /**
    * Specifies the encryption-at-rest configuration for the Data Catalog.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_data_catalog_encryption_settings#encryption_at_rest CcDataCatalogEncryptionSettings#encryption_at_rest}
    */
    readonly encryptionAtRest?: EncryptionAtRestProperty;
}
export class DataCatalogEncryptionSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataCatalogEncryptionSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectionPasswordEncryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionPasswordEncryption = this._connectionPasswordEncryption?.internalValue;
        }
        if (this._encryptionAtRest?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionAtRest = this._encryptionAtRest?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataCatalogEncryptionSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectionPasswordEncryption.internalValue = undefined;
            this._encryptionAtRest.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectionPasswordEncryption.internalValue = value.connectionPasswordEncryption;
            this._encryptionAtRest.internalValue = value.encryptionAtRest;
        }
    }

    // connection_password_encryption - computed: true, optional: true, required: false
    private _connectionPasswordEncryption = new ConnectionPasswordEncryptionPropertyOutputReference(this, "connection_password_encryption");
    public get connectionPasswordEncryption() {
        return this._connectionPasswordEncryption;
    }
    public putConnectionPasswordEncryption(value: ConnectionPasswordEncryptionProperty) {
        this._connectionPasswordEncryption.internalValue = value;
    }
    public resetConnectionPasswordEncryption() {
        this._connectionPasswordEncryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionPasswordEncryptionInput() {
        return this._connectionPasswordEncryption.internalValue;
    }

    // encryption_at_rest - computed: true, optional: true, required: false
    private _encryptionAtRest = new EncryptionAtRestPropertyOutputReference(this, "encryption_at_rest");
    public get encryptionAtRest() {
        return this._encryptionAtRest;
    }
    public putEncryptionAtRest(value: EncryptionAtRestProperty) {
        this._encryptionAtRest.internalValue = value;
    }
    public resetEncryptionAtRest() {
        this._encryptionAtRest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionAtRestInput() {
        return this._encryptionAtRest.internalValue;
    }
}
}
