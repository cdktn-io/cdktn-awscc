// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMLTransformProps extends cdktn.TerraformMetaArguments {
    /**
    * A user-defined, long-form description text for the machine learning transform.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#description CcMLTransform#description}
    */
    readonly description?: string;
    /**
    * The version of AWS Glue this machine learning transform is compatible with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#glue_version CcMLTransform#glue_version}
    */
    readonly glueVersion?: string;
    /**
    * A list of AWS Glue table definitions used by the transform.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#input_record_tables CcMLTransform#input_record_tables}
    */
    readonly inputRecordTables: CcMLTransform.InputRecordTablesProperty;
    /**
    * The number of AWS Glue DPUs allocated to task runs for this transform.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#max_capacity CcMLTransform#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * The maximum number of times to retry after an MLTaskRun fails.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#max_retries CcMLTransform#max_retries}
    */
    readonly maxRetries?: number;
    /**
    * A user-defined name for the machine learning transform.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#name CcMLTransform#name}
    */
    readonly name?: string;
    /**
    * The number of workers of a defined workerType that are allocated when a task runs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#number_of_workers CcMLTransform#number_of_workers}
    */
    readonly numberOfWorkers?: number;
    /**
    * The name or ARN of the IAM role with the required permissions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#role CcMLTransform#role}
    */
    readonly role: string;
    /**
    * The tags to use with this machine learning transform.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#tags CcMLTransform#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * The timeout in minutes of the machine learning transform.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#timeout CcMLTransform#timeout}
    */
    readonly timeout?: number;
    /**
    * The encryption-at-rest settings of the transform.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#transform_encryption CcMLTransform#transform_encryption}
    */
    readonly transformEncryption?: CcMLTransform.TransformEncryptionProperty;
    /**
    * The algorithm-specific parameters that are associated with the machine learning transform.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#transform_parameters CcMLTransform#transform_parameters}
    */
    readonly transformParameters: CcMLTransform.TransformParametersProperty;
    /**
    * The type of predefined worker that is allocated when a task runs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#worker_type CcMLTransform#worker_type}
    */
    readonly workerType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform awscc_glue_ml_transform}
*/
export class CcMLTransform extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_ml_transform";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMLTransform resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMLTransform to import
    * @param importFromId The id of the existing CcMLTransform that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMLTransform to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_ml_transform", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform awscc_glue_ml_transform} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMLTransformProps
    */
    public constructor(scope: Construct, id: string, config: CcMLTransformProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_ml_transform',
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
        this._description = config.description;
        this._glueVersion = config.glueVersion;
        this._inputRecordTables.internalValue = config.inputRecordTables;
        this._maxCapacity = config.maxCapacity;
        this._maxRetries = config.maxRetries;
        this._name = config.name;
        this._numberOfWorkers = config.numberOfWorkers;
        this._role = config.role;
        this._tags = config.tags;
        this._timeout = config.timeout;
        this._transformEncryption.internalValue = config.transformEncryption;
        this._transformParameters.internalValue = config.transformParameters;
        this._workerType = config.workerType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // glue_version - computed: true, optional: true, required: false
    private _glueVersion?: string; 
    public get glueVersion() {
        return this.getStringAttribute('glue_version');
    }
    public set glueVersion(value: string) {
        this._glueVersion = value;
    }
    public resetGlueVersion() {
        this._glueVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glueVersionInput() {
        return this._glueVersion;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // input_record_tables - computed: false, optional: false, required: true
    private _inputRecordTables = new CcMLTransform.InputRecordTablesPropertyOutputReference(this, "input_record_tables");
    public get inputRecordTables() {
        return this._inputRecordTables;
    }
    public putInputRecordTables(value: CcMLTransform.InputRecordTablesProperty) {
        this._inputRecordTables.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inputRecordTablesInput() {
        return this._inputRecordTables.internalValue;
    }

    // max_capacity - computed: true, optional: true, required: false
    private _maxCapacity?: number; 
    public get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    public set maxCapacity(value: number) {
        this._maxCapacity = value;
    }
    public resetMaxCapacity() {
        this._maxCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityInput() {
        return this._maxCapacity;
    }

    // max_retries - computed: true, optional: true, required: false
    private _maxRetries?: number; 
    public get maxRetries() {
        return this.getNumberAttribute('max_retries');
    }
    public set maxRetries(value: number) {
        this._maxRetries = value;
    }
    public resetMaxRetries() {
        this._maxRetries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRetriesInput() {
        return this._maxRetries;
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

    // number_of_workers - computed: true, optional: true, required: false
    private _numberOfWorkers?: number; 
    public get numberOfWorkers() {
        return this.getNumberAttribute('number_of_workers');
    }
    public set numberOfWorkers(value: number) {
        this._numberOfWorkers = value;
    }
    public resetNumberOfWorkers() {
        this._numberOfWorkers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfWorkersInput() {
        return this._numberOfWorkers;
    }

    // role - computed: false, optional: false, required: true
    private _role?: string; 
    public get role() {
        return this.getStringAttribute('role');
    }
    public set role(value: string) {
        this._role = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
        return this._role;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // timeout - computed: true, optional: true, required: false
    private _timeout?: number; 
    public get timeout() {
        return this.getNumberAttribute('timeout');
    }
    public set timeout(value: number) {
        this._timeout = value;
    }
    public resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
        return this._timeout;
    }

    // transform_encryption - computed: true, optional: true, required: false
    private _transformEncryption = new CcMLTransform.TransformEncryptionPropertyOutputReference(this, "transform_encryption");
    public get transformEncryption() {
        return this._transformEncryption;
    }
    public putTransformEncryption(value: CcMLTransform.TransformEncryptionProperty) {
        this._transformEncryption.internalValue = value;
    }
    public resetTransformEncryption() {
        this._transformEncryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transformEncryptionInput() {
        return this._transformEncryption.internalValue;
    }

    // transform_id - computed: true, optional: false, required: false
    public get transformId() {
        return this.getStringAttribute('transform_id');
    }

    // transform_parameters - computed: false, optional: false, required: true
    private _transformParameters = new CcMLTransform.TransformParametersPropertyOutputReference(this, "transform_parameters");
    public get transformParameters() {
        return this._transformParameters;
    }
    public putTransformParameters(value: CcMLTransform.TransformParametersProperty) {
        this._transformParameters.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transformParametersInput() {
        return this._transformParameters.internalValue;
    }

    // worker_type - computed: true, optional: true, required: false
    private _workerType?: string; 
    public get workerType() {
        return this.getStringAttribute('worker_type');
    }
    public set workerType(value: string) {
        this._workerType = value;
    }
    public resetWorkerType() {
        this._workerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerTypeInput() {
        return this._workerType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            glue_version: cdktn.stringToTerraform(this._glueVersion),
            input_record_tables: ccMLTransformInputRecordTablesPropertyToTerraform(this._inputRecordTables.internalValue),
            max_capacity: cdktn.numberToTerraform(this._maxCapacity),
            max_retries: cdktn.numberToTerraform(this._maxRetries),
            name: cdktn.stringToTerraform(this._name),
            number_of_workers: cdktn.numberToTerraform(this._numberOfWorkers),
            role: cdktn.stringToTerraform(this._role),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            timeout: cdktn.numberToTerraform(this._timeout),
            transform_encryption: ccMLTransformTransformEncryptionPropertyToTerraform(this._transformEncryption.internalValue),
            transform_parameters: ccMLTransformTransformParametersPropertyToTerraform(this._transformParameters.internalValue),
            worker_type: cdktn.stringToTerraform(this._workerType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            glue_version: {
                value: cdktn.stringToHclTerraform(this._glueVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            input_record_tables: {
                value: ccMLTransformInputRecordTablesPropertyToHclTerraform(this._inputRecordTables.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMLTransform.InputRecordTablesProperty",
            },
            max_capacity: {
                value: cdktn.numberToHclTerraform(this._maxCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_retries: {
                value: cdktn.numberToHclTerraform(this._maxRetries),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            number_of_workers: {
                value: cdktn.numberToHclTerraform(this._numberOfWorkers),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            role: {
                value: cdktn.stringToHclTerraform(this._role),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            timeout: {
                value: cdktn.numberToHclTerraform(this._timeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            transform_encryption: {
                value: ccMLTransformTransformEncryptionPropertyToHclTerraform(this._transformEncryption.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMLTransform.TransformEncryptionProperty",
            },
            transform_parameters: {
                value: ccMLTransformTransformParametersPropertyToHclTerraform(this._transformParameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMLTransform.TransformParametersProperty",
            },
            worker_type: {
                value: cdktn.stringToHclTerraform(this._workerType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMLTransformGlueTablesPropertyToTerraform(struct?: CcMLTransform.GlueTablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog_id: cdktn.stringToTerraform(struct!.catalogId),
        connection_name: cdktn.stringToTerraform(struct!.connectionName),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccMLTransformGlueTablesPropertyToHclTerraform(struct?: CcMLTransform.GlueTablesProperty | cdktn.IResolvable): any {
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
        connection_name: {
            value: cdktn.stringToHclTerraform(struct!.connectionName),
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


export function ccMLTransformInputRecordTablesPropertyToTerraform(struct?: CcMLTransform.InputRecordTablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        glue_tables: cdktn.listMapper(ccMLTransformGlueTablesPropertyToTerraform, false)(struct!.glueTables),
    }
}


export function ccMLTransformInputRecordTablesPropertyToHclTerraform(struct?: CcMLTransform.InputRecordTablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        glue_tables: {
            value: cdktn.listMapperHcl(ccMLTransformGlueTablesPropertyToHclTerraform, false)(struct!.glueTables),
            isBlock: true,
            type: "list",
            storageClassType: "GlueTablesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMLTransformMLUserDataEncryptionPropertyToTerraform(struct?: CcMLTransform.MLUserDataEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        ml_user_data_encryption_mode: cdktn.stringToTerraform(struct!.mlUserDataEncryptionMode),
    }
}


export function ccMLTransformMLUserDataEncryptionPropertyToHclTerraform(struct?: CcMLTransform.MLUserDataEncryptionProperty | cdktn.IResolvable): any {
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
        ml_user_data_encryption_mode: {
            value: cdktn.stringToHclTerraform(struct!.mlUserDataEncryptionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMLTransformTransformEncryptionPropertyToTerraform(struct?: CcMLTransform.TransformEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ml_user_data_encryption: ccMLTransformMLUserDataEncryptionPropertyToTerraform(struct!.mlUserDataEncryption),
        task_run_security_configuration_name: cdktn.stringToTerraform(struct!.taskRunSecurityConfigurationName),
    }
}


export function ccMLTransformTransformEncryptionPropertyToHclTerraform(struct?: CcMLTransform.TransformEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ml_user_data_encryption: {
            value: ccMLTransformMLUserDataEncryptionPropertyToHclTerraform(struct!.mlUserDataEncryption),
            isBlock: true,
            type: "struct",
            storageClassType: "MLUserDataEncryptionProperty",
        },
        task_run_security_configuration_name: {
            value: cdktn.stringToHclTerraform(struct!.taskRunSecurityConfigurationName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMLTransformFindMatchesParametersPropertyToTerraform(struct?: CcMLTransform.FindMatchesParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accuracy_cost_tradeoff: cdktn.numberToTerraform(struct!.accuracyCostTradeoff),
        enforce_provided_labels: cdktn.booleanToTerraform(struct!.enforceProvidedLabels),
        precision_recall_tradeoff: cdktn.numberToTerraform(struct!.precisionRecallTradeoff),
        primary_key_column_name: cdktn.stringToTerraform(struct!.primaryKeyColumnName),
    }
}


export function ccMLTransformFindMatchesParametersPropertyToHclTerraform(struct?: CcMLTransform.FindMatchesParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accuracy_cost_tradeoff: {
            value: cdktn.numberToHclTerraform(struct!.accuracyCostTradeoff),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        enforce_provided_labels: {
            value: cdktn.booleanToHclTerraform(struct!.enforceProvidedLabels),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        precision_recall_tradeoff: {
            value: cdktn.numberToHclTerraform(struct!.precisionRecallTradeoff),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        primary_key_column_name: {
            value: cdktn.stringToHclTerraform(struct!.primaryKeyColumnName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMLTransformTransformParametersPropertyToTerraform(struct?: CcMLTransform.TransformParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        find_matches_parameters: ccMLTransformFindMatchesParametersPropertyToTerraform(struct!.findMatchesParameters),
        transform_type: cdktn.stringToTerraform(struct!.transformType),
    }
}


export function ccMLTransformTransformParametersPropertyToHclTerraform(struct?: CcMLTransform.TransformParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        find_matches_parameters: {
            value: ccMLTransformFindMatchesParametersPropertyToHclTerraform(struct!.findMatchesParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "FindMatchesParametersProperty",
        },
        transform_type: {
            value: cdktn.stringToHclTerraform(struct!.transformType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcMLTransform {
export interface GlueTablesProperty {
    /**
    * A unique identifier for the AWS Glue Data Catalog.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#catalog_id CcMLTransform#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * The name of the connection to the AWS Glue Data Catalog.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#connection_name CcMLTransform#connection_name}
    */
    readonly connectionName?: string;
    /**
    * A database name in the AWS Glue Data Catalog.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#database_name CcMLTransform#database_name}
    */
    readonly databaseName?: string;
    /**
    * A table name in the AWS Glue Data Catalog.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#table_name CcMLTransform#table_name}
    */
    readonly tableName?: string;
}
export class GlueTablesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): GlueTablesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalogId !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalogId = this._catalogId;
        }
        if (this._connectionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionName = this._connectionName;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlueTablesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalogId = undefined;
            this._connectionName = undefined;
            this._databaseName = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalogId = value.catalogId;
            this._connectionName = value.connectionName;
            this._databaseName = value.databaseName;
            this._tableName = value.tableName;
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

export class GlueTablesPropertyList extends cdktn.ComplexList {
    public internalValue? : GlueTablesProperty[] | cdktn.IResolvable

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
    public get(index: number): GlueTablesPropertyOutputReference {
        return new GlueTablesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InputRecordTablesProperty {
    /**
    * The database and table in the AWS Glue Data Catalog that is used for input or output data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#glue_tables CcMLTransform#glue_tables}
    */
    readonly glueTables?: GlueTablesProperty[] | cdktn.IResolvable;
}
export class InputRecordTablesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InputRecordTablesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._glueTables?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.glueTables = this._glueTables?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputRecordTablesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._glueTables.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._glueTables.internalValue = value.glueTables;
        }
    }

    // glue_tables - computed: true, optional: true, required: false
    private _glueTables = new GlueTablesPropertyList(this, "glue_tables", false);
    public get glueTables() {
        return this._glueTables;
    }
    public putGlueTables(value: GlueTablesProperty[] | cdktn.IResolvable) {
        this._glueTables.internalValue = value;
    }
    public resetGlueTables() {
        this._glueTables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glueTablesInput() {
        return this._glueTables.internalValue;
    }
}
export interface MLUserDataEncryptionProperty {
    /**
    * The ID for the customer-provided KMS key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#kms_key_id CcMLTransform#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The encryption mode applied to user data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#ml_user_data_encryption_mode CcMLTransform#ml_user_data_encryption_mode}
    */
    readonly mlUserDataEncryptionMode?: string;
}
export class MLUserDataEncryptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MLUserDataEncryptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._mlUserDataEncryptionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mlUserDataEncryptionMode = this._mlUserDataEncryptionMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MLUserDataEncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyId = undefined;
            this._mlUserDataEncryptionMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyId = value.kmsKeyId;
            this._mlUserDataEncryptionMode = value.mlUserDataEncryptionMode;
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

    // ml_user_data_encryption_mode - computed: true, optional: true, required: false
    private _mlUserDataEncryptionMode?: string; 
    public get mlUserDataEncryptionMode() {
        return this.getStringAttribute('ml_user_data_encryption_mode');
    }
    public set mlUserDataEncryptionMode(value: string) {
        this._mlUserDataEncryptionMode = value;
    }
    public resetMlUserDataEncryptionMode() {
        this._mlUserDataEncryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mlUserDataEncryptionModeInput() {
        return this._mlUserDataEncryptionMode;
    }
}
export interface TransformEncryptionProperty {
    /**
    * The encryption-at-rest settings of the transform that apply to accessing user data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#ml_user_data_encryption CcMLTransform#ml_user_data_encryption}
    */
    readonly mlUserDataEncryption?: MLUserDataEncryptionProperty;
    /**
    * The name of the security configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#task_run_security_configuration_name CcMLTransform#task_run_security_configuration_name}
    */
    readonly taskRunSecurityConfigurationName?: string;
}
export class TransformEncryptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TransformEncryptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mlUserDataEncryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mlUserDataEncryption = this._mlUserDataEncryption?.internalValue;
        }
        if (this._taskRunSecurityConfigurationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskRunSecurityConfigurationName = this._taskRunSecurityConfigurationName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransformEncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mlUserDataEncryption.internalValue = undefined;
            this._taskRunSecurityConfigurationName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mlUserDataEncryption.internalValue = value.mlUserDataEncryption;
            this._taskRunSecurityConfigurationName = value.taskRunSecurityConfigurationName;
        }
    }

    // ml_user_data_encryption - computed: true, optional: true, required: false
    private _mlUserDataEncryption = new MLUserDataEncryptionPropertyOutputReference(this, "ml_user_data_encryption");
    public get mlUserDataEncryption() {
        return this._mlUserDataEncryption;
    }
    public putMlUserDataEncryption(value: MLUserDataEncryptionProperty) {
        this._mlUserDataEncryption.internalValue = value;
    }
    public resetMlUserDataEncryption() {
        this._mlUserDataEncryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mlUserDataEncryptionInput() {
        return this._mlUserDataEncryption.internalValue;
    }

    // task_run_security_configuration_name - computed: true, optional: true, required: false
    private _taskRunSecurityConfigurationName?: string; 
    public get taskRunSecurityConfigurationName() {
        return this.getStringAttribute('task_run_security_configuration_name');
    }
    public set taskRunSecurityConfigurationName(value: string) {
        this._taskRunSecurityConfigurationName = value;
    }
    public resetTaskRunSecurityConfigurationName() {
        this._taskRunSecurityConfigurationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskRunSecurityConfigurationNameInput() {
        return this._taskRunSecurityConfigurationName;
    }
}
export interface FindMatchesParametersProperty {
    /**
    * The value for accuracy and cost tradeoff. A value of 0.5 means balance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#accuracy_cost_tradeoff CcMLTransform#accuracy_cost_tradeoff}
    */
    readonly accuracyCostTradeoff?: number;
    /**
    * If true, forces the output to match the provided labels.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#enforce_provided_labels CcMLTransform#enforce_provided_labels}
    */
    readonly enforceProvidedLabels?: boolean | cdktn.IResolvable;
    /**
    * The value for precision and recall tradeoff. A value of 0.5 means no preference.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#precision_recall_tradeoff CcMLTransform#precision_recall_tradeoff}
    */
    readonly precisionRecallTradeoff?: number;
    /**
    * The name of a column that uniquely identifies rows in the source table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#primary_key_column_name CcMLTransform#primary_key_column_name}
    */
    readonly primaryKeyColumnName?: string;
}
export class FindMatchesParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FindMatchesParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accuracyCostTradeoff !== undefined) {
            hasAnyValues = true;
            internalValueResult.accuracyCostTradeoff = this._accuracyCostTradeoff;
        }
        if (this._enforceProvidedLabels !== undefined) {
            hasAnyValues = true;
            internalValueResult.enforceProvidedLabels = this._enforceProvidedLabels;
        }
        if (this._precisionRecallTradeoff !== undefined) {
            hasAnyValues = true;
            internalValueResult.precisionRecallTradeoff = this._precisionRecallTradeoff;
        }
        if (this._primaryKeyColumnName !== undefined) {
            hasAnyValues = true;
            internalValueResult.primaryKeyColumnName = this._primaryKeyColumnName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FindMatchesParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accuracyCostTradeoff = undefined;
            this._enforceProvidedLabels = undefined;
            this._precisionRecallTradeoff = undefined;
            this._primaryKeyColumnName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accuracyCostTradeoff = value.accuracyCostTradeoff;
            this._enforceProvidedLabels = value.enforceProvidedLabels;
            this._precisionRecallTradeoff = value.precisionRecallTradeoff;
            this._primaryKeyColumnName = value.primaryKeyColumnName;
        }
    }

    // accuracy_cost_tradeoff - computed: true, optional: true, required: false
    private _accuracyCostTradeoff?: number; 
    public get accuracyCostTradeoff() {
        return this.getNumberAttribute('accuracy_cost_tradeoff');
    }
    public set accuracyCostTradeoff(value: number) {
        this._accuracyCostTradeoff = value;
    }
    public resetAccuracyCostTradeoff() {
        this._accuracyCostTradeoff = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accuracyCostTradeoffInput() {
        return this._accuracyCostTradeoff;
    }

    // enforce_provided_labels - computed: true, optional: true, required: false
    private _enforceProvidedLabels?: boolean | cdktn.IResolvable; 
    public get enforceProvidedLabels() {
        return this.getBooleanAttribute('enforce_provided_labels');
    }
    public set enforceProvidedLabels(value: boolean | cdktn.IResolvable) {
        this._enforceProvidedLabels = value;
    }
    public resetEnforceProvidedLabels() {
        this._enforceProvidedLabels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforceProvidedLabelsInput() {
        return this._enforceProvidedLabels;
    }

    // precision_recall_tradeoff - computed: true, optional: true, required: false
    private _precisionRecallTradeoff?: number; 
    public get precisionRecallTradeoff() {
        return this.getNumberAttribute('precision_recall_tradeoff');
    }
    public set precisionRecallTradeoff(value: number) {
        this._precisionRecallTradeoff = value;
    }
    public resetPrecisionRecallTradeoff() {
        this._precisionRecallTradeoff = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get precisionRecallTradeoffInput() {
        return this._precisionRecallTradeoff;
    }

    // primary_key_column_name - computed: true, optional: true, required: false
    private _primaryKeyColumnName?: string; 
    public get primaryKeyColumnName() {
        return this.getStringAttribute('primary_key_column_name');
    }
    public set primaryKeyColumnName(value: string) {
        this._primaryKeyColumnName = value;
    }
    public resetPrimaryKeyColumnName() {
        this._primaryKeyColumnName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryKeyColumnNameInput() {
        return this._primaryKeyColumnName;
    }
}
export interface TransformParametersProperty {
    /**
    * The parameters to configure the find matches transform.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#find_matches_parameters CcMLTransform#find_matches_parameters}
    */
    readonly findMatchesParameters?: FindMatchesParametersProperty;
    /**
    * The type of machine learning transform.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#transform_type CcMLTransform#transform_type}
    */
    readonly transformType: string;
}
export class TransformParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TransformParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._findMatchesParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.findMatchesParameters = this._findMatchesParameters?.internalValue;
        }
        if (this._transformType !== undefined) {
            hasAnyValues = true;
            internalValueResult.transformType = this._transformType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransformParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._findMatchesParameters.internalValue = undefined;
            this._transformType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._findMatchesParameters.internalValue = value.findMatchesParameters;
            this._transformType = value.transformType;
        }
    }

    // find_matches_parameters - computed: true, optional: true, required: false
    private _findMatchesParameters = new FindMatchesParametersPropertyOutputReference(this, "find_matches_parameters");
    public get findMatchesParameters() {
        return this._findMatchesParameters;
    }
    public putFindMatchesParameters(value: FindMatchesParametersProperty) {
        this._findMatchesParameters.internalValue = value;
    }
    public resetFindMatchesParameters() {
        this._findMatchesParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get findMatchesParametersInput() {
        return this._findMatchesParameters.internalValue;
    }

    // transform_type - computed: false, optional: false, required: true
    private _transformType?: string; 
    public get transformType() {
        return this.getStringAttribute('transform_type');
    }
    public set transformType(value: string) {
        this._transformType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transformTypeInput() {
        return this._transformType;
    }
}
}
