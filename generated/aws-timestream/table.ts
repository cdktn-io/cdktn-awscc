// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTableProps extends cdktn.TerraformMetaArguments {
    /**
    * The name for the database which the table to be created belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#database_name CcTable#database_name}
    */
    readonly databaseName: string;
    /**
    * The properties that determine whether magnetic store writes are enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#magnetic_store_write_properties CcTable#magnetic_store_write_properties}
    */
    readonly magneticStoreWriteProperties?: CcTable.MagneticStoreWritePropertiesProperty;
    /**
    * The retention duration of the memory store and the magnetic store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#retention_properties CcTable#retention_properties}
    */
    readonly retentionProperties?: CcTable.RetentionPropertiesProperty;
    /**
    * A Schema specifies the expected data model of the table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#schema CcTable#schema}
    */
    readonly schema?: CcTable.SchemaProperty;
    /**
    * The name for the table. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#table_name CcTable#table_name}
    */
    readonly tableName?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#tags CcTable#tags}
    */
    readonly tags?: CcTable.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table awscc_timestream_table}
*/
export class CcTable extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_timestream_table";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTable resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTable to import
    * @param importFromId The id of the existing CcTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTable to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_timestream_table", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table awscc_timestream_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTableProps
    */
    public constructor(scope: Construct, id: string, config: CcTableProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_timestream_table',
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
        this._databaseName = config.databaseName;
        this._magneticStoreWriteProperties.internalValue = config.magneticStoreWriteProperties;
        this._retentionProperties.internalValue = config.retentionProperties;
        this._schema.internalValue = config.schema;
        this._tableName = config.tableName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // magnetic_store_write_properties - computed: true, optional: true, required: false
    private _magneticStoreWriteProperties = new CcTable.MagneticStoreWritePropertiesPropertyOutputReference(this, "magnetic_store_write_properties");
    public get magneticStoreWriteProperties() {
        return this._magneticStoreWriteProperties;
    }
    public putMagneticStoreWriteProperties(value: CcTable.MagneticStoreWritePropertiesProperty) {
        this._magneticStoreWriteProperties.internalValue = value;
    }
    public resetMagneticStoreWriteProperties() {
        this._magneticStoreWriteProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get magneticStoreWritePropertiesInput() {
        return this._magneticStoreWriteProperties.internalValue;
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // retention_properties - computed: true, optional: true, required: false
    private _retentionProperties = new CcTable.RetentionPropertiesPropertyOutputReference(this, "retention_properties");
    public get retentionProperties() {
        return this._retentionProperties;
    }
    public putRetentionProperties(value: CcTable.RetentionPropertiesProperty) {
        this._retentionProperties.internalValue = value;
    }
    public resetRetentionProperties() {
        this._retentionProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionPropertiesInput() {
        return this._retentionProperties.internalValue;
    }

    // schema - computed: true, optional: true, required: false
    private _schema = new CcTable.SchemaPropertyOutputReference(this, "schema");
    public get schema() {
        return this._schema;
    }
    public putSchema(value: CcTable.SchemaProperty) {
        this._schema.internalValue = value;
    }
    public resetSchema() {
        this._schema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaInput() {
        return this._schema.internalValue;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTable.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTable.TagProperty[] | cdktn.IResolvable) {
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
            database_name: cdktn.stringToTerraform(this._databaseName),
            magnetic_store_write_properties: ccTableMagneticStoreWritePropertiesPropertyToTerraform(this._magneticStoreWriteProperties.internalValue),
            retention_properties: ccTableRetentionPropertiesPropertyToTerraform(this._retentionProperties.internalValue),
            schema: ccTableSchemaPropertyToTerraform(this._schema.internalValue),
            table_name: cdktn.stringToTerraform(this._tableName),
            tags: cdktn.listMapper(ccTableTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            database_name: {
                value: cdktn.stringToHclTerraform(this._databaseName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            magnetic_store_write_properties: {
                value: ccTableMagneticStoreWritePropertiesPropertyToHclTerraform(this._magneticStoreWriteProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.MagneticStoreWritePropertiesProperty",
            },
            retention_properties: {
                value: ccTableRetentionPropertiesPropertyToHclTerraform(this._retentionProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.RetentionPropertiesProperty",
            },
            schema: {
                value: ccTableSchemaPropertyToHclTerraform(this._schema.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.SchemaProperty",
            },
            table_name: {
                value: cdktn.stringToHclTerraform(this._tableName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTableTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTable.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTableS3ConfigurationPropertyToTerraform(struct?: CcTable.S3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        encryption_option: cdktn.stringToTerraform(struct!.encryptionOption),
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        object_key_prefix: cdktn.stringToTerraform(struct!.objectKeyPrefix),
    }
}


export function ccTableS3ConfigurationPropertyToHclTerraform(struct?: CcTable.S3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encryption_option: {
            value: cdktn.stringToHclTerraform(struct!.encryptionOption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        object_key_prefix: {
            value: cdktn.stringToHclTerraform(struct!.objectKeyPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableMagneticStoreRejectedDataLocationPropertyToTerraform(struct?: CcTable.MagneticStoreRejectedDataLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_configuration: ccTableS3ConfigurationPropertyToTerraform(struct!.s3Configuration),
    }
}


export function ccTableMagneticStoreRejectedDataLocationPropertyToHclTerraform(struct?: CcTable.MagneticStoreRejectedDataLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_configuration: {
            value: ccTableS3ConfigurationPropertyToHclTerraform(struct!.s3Configuration),
            isBlock: true,
            type: "struct",
            storageClassType: "S3ConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableMagneticStoreWritePropertiesPropertyToTerraform(struct?: CcTable.MagneticStoreWritePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_magnetic_store_writes: cdktn.booleanToTerraform(struct!.enableMagneticStoreWrites),
        magnetic_store_rejected_data_location: ccTableMagneticStoreRejectedDataLocationPropertyToTerraform(struct!.magneticStoreRejectedDataLocation),
    }
}


export function ccTableMagneticStoreWritePropertiesPropertyToHclTerraform(struct?: CcTable.MagneticStoreWritePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_magnetic_store_writes: {
            value: cdktn.booleanToHclTerraform(struct!.enableMagneticStoreWrites),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        magnetic_store_rejected_data_location: {
            value: ccTableMagneticStoreRejectedDataLocationPropertyToHclTerraform(struct!.magneticStoreRejectedDataLocation),
            isBlock: true,
            type: "struct",
            storageClassType: "MagneticStoreRejectedDataLocationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableRetentionPropertiesPropertyToTerraform(struct?: CcTable.RetentionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        magnetic_store_retention_period_in_days: cdktn.stringToTerraform(struct!.magneticStoreRetentionPeriodInDays),
        memory_store_retention_period_in_hours: cdktn.stringToTerraform(struct!.memoryStoreRetentionPeriodInHours),
    }
}


export function ccTableRetentionPropertiesPropertyToHclTerraform(struct?: CcTable.RetentionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        magnetic_store_retention_period_in_days: {
            value: cdktn.stringToHclTerraform(struct!.magneticStoreRetentionPeriodInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        memory_store_retention_period_in_hours: {
            value: cdktn.stringToHclTerraform(struct!.memoryStoreRetentionPeriodInHours),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTablePartitionKeyPropertyToTerraform(struct?: CcTable.PartitionKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enforcement_in_record: cdktn.stringToTerraform(struct!.enforcementInRecord),
        name: cdktn.stringToTerraform(struct!.name),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccTablePartitionKeyPropertyToHclTerraform(struct?: CcTable.PartitionKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enforcement_in_record: {
            value: cdktn.stringToHclTerraform(struct!.enforcementInRecord),
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


export function ccTableSchemaPropertyToTerraform(struct?: CcTable.SchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        composite_partition_key: cdktn.listMapper(ccTablePartitionKeyPropertyToTerraform, false)(struct!.compositePartitionKey),
    }
}


export function ccTableSchemaPropertyToHclTerraform(struct?: CcTable.SchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        composite_partition_key: {
            value: cdktn.listMapperHcl(ccTablePartitionKeyPropertyToHclTerraform, false)(struct!.compositePartitionKey),
            isBlock: true,
            type: "list",
            storageClassType: "PartitionKeyPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableTagPropertyToTerraform(struct?: CcTable.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTableTagPropertyToHclTerraform(struct?: CcTable.TagProperty | cdktn.IResolvable): any {
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


export namespace CcTable {
export interface S3ConfigurationProperty {
    /**
    * The bucket name used to store the data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#bucket_name CcTable#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Either SSE_KMS or SSE_S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#encryption_option CcTable#encryption_option}
    */
    readonly encryptionOption?: string;
    /**
    * Must be provided if SSE_KMS is specified as the encryption option
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#kms_key_id CcTable#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * String used to prefix all data in the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#object_key_prefix CcTable#object_key_prefix}
    */
    readonly objectKeyPrefix?: string;
}
export class S3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3ConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._encryptionOption !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionOption = this._encryptionOption;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._objectKeyPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectKeyPrefix = this._objectKeyPrefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3ConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._encryptionOption = undefined;
            this._kmsKeyId = undefined;
            this._objectKeyPrefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._encryptionOption = value.encryptionOption;
            this._kmsKeyId = value.kmsKeyId;
            this._objectKeyPrefix = value.objectKeyPrefix;
        }
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // encryption_option - computed: true, optional: true, required: false
    private _encryptionOption?: string; 
    public get encryptionOption() {
        return this.getStringAttribute('encryption_option');
    }
    public set encryptionOption(value: string) {
        this._encryptionOption = value;
    }
    public resetEncryptionOption() {
        this._encryptionOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionOptionInput() {
        return this._encryptionOption;
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

    // object_key_prefix - computed: true, optional: true, required: false
    private _objectKeyPrefix?: string; 
    public get objectKeyPrefix() {
        return this.getStringAttribute('object_key_prefix');
    }
    public set objectKeyPrefix(value: string) {
        this._objectKeyPrefix = value;
    }
    public resetObjectKeyPrefix() {
        this._objectKeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectKeyPrefixInput() {
        return this._objectKeyPrefix;
    }
}
export interface MagneticStoreRejectedDataLocationProperty {
    /**
    * S3 configuration for location to store rejections from magnetic store writes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#s3_configuration CcTable#s3_configuration}
    */
    readonly s3Configuration?: S3ConfigurationProperty;
}
export class MagneticStoreRejectedDataLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MagneticStoreRejectedDataLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Configuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MagneticStoreRejectedDataLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Configuration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Configuration.internalValue = value.s3Configuration;
        }
    }

    // s3_configuration - computed: true, optional: true, required: false
    private _s3Configuration = new S3ConfigurationPropertyOutputReference(this, "s3_configuration");
    public get s3Configuration() {
        return this._s3Configuration;
    }
    public putS3Configuration(value: S3ConfigurationProperty) {
        this._s3Configuration.internalValue = value;
    }
    public resetS3Configuration() {
        this._s3Configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ConfigurationInput() {
        return this._s3Configuration.internalValue;
    }
}
export interface MagneticStoreWritePropertiesProperty {
    /**
    * Boolean flag indicating whether magnetic store writes are enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#enable_magnetic_store_writes CcTable#enable_magnetic_store_writes}
    */
    readonly enableMagneticStoreWrites?: boolean | cdktn.IResolvable;
    /**
    * Location to store information about records that were asynchronously rejected during magnetic store writes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#magnetic_store_rejected_data_location CcTable#magnetic_store_rejected_data_location}
    */
    readonly magneticStoreRejectedDataLocation?: MagneticStoreRejectedDataLocationProperty;
}
export class MagneticStoreWritePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MagneticStoreWritePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableMagneticStoreWrites !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableMagneticStoreWrites = this._enableMagneticStoreWrites;
        }
        if (this._magneticStoreRejectedDataLocation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.magneticStoreRejectedDataLocation = this._magneticStoreRejectedDataLocation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MagneticStoreWritePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableMagneticStoreWrites = undefined;
            this._magneticStoreRejectedDataLocation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableMagneticStoreWrites = value.enableMagneticStoreWrites;
            this._magneticStoreRejectedDataLocation.internalValue = value.magneticStoreRejectedDataLocation;
        }
    }

    // enable_magnetic_store_writes - computed: true, optional: true, required: false
    private _enableMagneticStoreWrites?: boolean | cdktn.IResolvable; 
    public get enableMagneticStoreWrites() {
        return this.getBooleanAttribute('enable_magnetic_store_writes');
    }
    public set enableMagneticStoreWrites(value: boolean | cdktn.IResolvable) {
        this._enableMagneticStoreWrites = value;
    }
    public resetEnableMagneticStoreWrites() {
        this._enableMagneticStoreWrites = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableMagneticStoreWritesInput() {
        return this._enableMagneticStoreWrites;
    }

    // magnetic_store_rejected_data_location - computed: true, optional: true, required: false
    private _magneticStoreRejectedDataLocation = new MagneticStoreRejectedDataLocationPropertyOutputReference(this, "magnetic_store_rejected_data_location");
    public get magneticStoreRejectedDataLocation() {
        return this._magneticStoreRejectedDataLocation;
    }
    public putMagneticStoreRejectedDataLocation(value: MagneticStoreRejectedDataLocationProperty) {
        this._magneticStoreRejectedDataLocation.internalValue = value;
    }
    public resetMagneticStoreRejectedDataLocation() {
        this._magneticStoreRejectedDataLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get magneticStoreRejectedDataLocationInput() {
        return this._magneticStoreRejectedDataLocation.internalValue;
    }
}
export interface RetentionPropertiesProperty {
    /**
    * The duration for which data must be stored in the magnetic store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#magnetic_store_retention_period_in_days CcTable#magnetic_store_retention_period_in_days}
    */
    readonly magneticStoreRetentionPeriodInDays?: string;
    /**
    * The duration for which data must be stored in the memory store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#memory_store_retention_period_in_hours CcTable#memory_store_retention_period_in_hours}
    */
    readonly memoryStoreRetentionPeriodInHours?: string;
}
export class RetentionPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RetentionPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._magneticStoreRetentionPeriodInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.magneticStoreRetentionPeriodInDays = this._magneticStoreRetentionPeriodInDays;
        }
        if (this._memoryStoreRetentionPeriodInHours !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryStoreRetentionPeriodInHours = this._memoryStoreRetentionPeriodInHours;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RetentionPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._magneticStoreRetentionPeriodInDays = undefined;
            this._memoryStoreRetentionPeriodInHours = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._magneticStoreRetentionPeriodInDays = value.magneticStoreRetentionPeriodInDays;
            this._memoryStoreRetentionPeriodInHours = value.memoryStoreRetentionPeriodInHours;
        }
    }

    // magnetic_store_retention_period_in_days - computed: true, optional: true, required: false
    private _magneticStoreRetentionPeriodInDays?: string; 
    public get magneticStoreRetentionPeriodInDays() {
        return this.getStringAttribute('magnetic_store_retention_period_in_days');
    }
    public set magneticStoreRetentionPeriodInDays(value: string) {
        this._magneticStoreRetentionPeriodInDays = value;
    }
    public resetMagneticStoreRetentionPeriodInDays() {
        this._magneticStoreRetentionPeriodInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get magneticStoreRetentionPeriodInDaysInput() {
        return this._magneticStoreRetentionPeriodInDays;
    }

    // memory_store_retention_period_in_hours - computed: true, optional: true, required: false
    private _memoryStoreRetentionPeriodInHours?: string; 
    public get memoryStoreRetentionPeriodInHours() {
        return this.getStringAttribute('memory_store_retention_period_in_hours');
    }
    public set memoryStoreRetentionPeriodInHours(value: string) {
        this._memoryStoreRetentionPeriodInHours = value;
    }
    public resetMemoryStoreRetentionPeriodInHours() {
        this._memoryStoreRetentionPeriodInHours = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryStoreRetentionPeriodInHoursInput() {
        return this._memoryStoreRetentionPeriodInHours;
    }
}
export interface PartitionKeyProperty {
    /**
    * The level of enforcement for the specification of a dimension key in ingested records. Options are REQUIRED (dimension key must be specified) and OPTIONAL (dimension key does not have to be specified).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#enforcement_in_record CcTable#enforcement_in_record}
    */
    readonly enforcementInRecord?: string;
    /**
    * The name of the attribute used for a dimension key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#name CcTable#name}
    */
    readonly name?: string;
    /**
    * The type of the partition key. Options are DIMENSION (dimension key) and MEASURE (measure key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#type CcTable#type}
    */
    readonly type?: string;
}
export class PartitionKeyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PartitionKeyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enforcementInRecord !== undefined) {
            hasAnyValues = true;
            internalValueResult.enforcementInRecord = this._enforcementInRecord;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PartitionKeyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enforcementInRecord = undefined;
            this._name = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enforcementInRecord = value.enforcementInRecord;
            this._name = value.name;
            this._type = value.type;
        }
    }

    // enforcement_in_record - computed: true, optional: true, required: false
    private _enforcementInRecord?: string; 
    public get enforcementInRecord() {
        return this.getStringAttribute('enforcement_in_record');
    }
    public set enforcementInRecord(value: string) {
        this._enforcementInRecord = value;
    }
    public resetEnforcementInRecord() {
        this._enforcementInRecord = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforcementInRecordInput() {
        return this._enforcementInRecord;
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

export class PartitionKeyPropertyList extends cdktn.ComplexList {
    public internalValue? : PartitionKeyProperty[] | cdktn.IResolvable

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
    public get(index: number): PartitionKeyPropertyOutputReference {
        return new PartitionKeyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SchemaProperty {
    /**
    * A list of partition keys defining the attributes used to partition the table data. The order of the list determines the partition hierarchy. The name and type of each partition key as well as the partition key order cannot be changed after the table is created. However, the enforcement level of each partition key can be changed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#composite_partition_key CcTable#composite_partition_key}
    */
    readonly compositePartitionKey?: PartitionKeyProperty[] | cdktn.IResolvable;
}
export class SchemaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._compositePartitionKey?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.compositePartitionKey = this._compositePartitionKey?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compositePartitionKey.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compositePartitionKey.internalValue = value.compositePartitionKey;
        }
    }

    // composite_partition_key - computed: true, optional: true, required: false
    private _compositePartitionKey = new PartitionKeyPropertyList(this, "composite_partition_key", false);
    public get compositePartitionKey() {
        return this._compositePartitionKey;
    }
    public putCompositePartitionKey(value: PartitionKeyProperty[] | cdktn.IResolvable) {
        this._compositePartitionKey.internalValue = value;
    }
    public resetCompositePartitionKey() {
        this._compositePartitionKey.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compositePartitionKeyInput() {
        return this._compositePartitionKey.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#key CcTable#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/timestream_table#value CcTable#value}
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
