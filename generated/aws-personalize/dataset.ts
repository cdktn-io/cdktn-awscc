// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDatasetProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the dataset group to add the dataset to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#dataset_group_arn CcDataset#dataset_group_arn}
    */
    readonly datasetGroupArn: string;
    /**
    * Initial DatasetImportJob for the created dataset
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#dataset_import_job CcDataset#dataset_import_job}
    */
    readonly datasetImportJob?: CcDataset.DatasetImportJobProperty;
    /**
    * The type of dataset
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#dataset_type CcDataset#dataset_type}
    */
    readonly datasetType: string;
    /**
    * The name for the dataset
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#name CcDataset#name}
    */
    readonly name: string;
    /**
    * The ARN of the schema to associate with the dataset. The schema defines the dataset fields.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#schema_arn CcDataset#schema_arn}
    */
    readonly schemaArn: string;
    /**
    * The tags used to organize, track, or control access for this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#tags CcDataset#tags}
    */
    readonly tags?: CcDataset.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset awscc_personalize_dataset}
*/
export class CcDataset extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_personalize_dataset";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataset resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataset to import
    * @param importFromId The id of the existing CcDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataset to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_personalize_dataset", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset awscc_personalize_dataset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDatasetProps
    */
    public constructor(scope: Construct, id: string, config: CcDatasetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_personalize_dataset',
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
        this._datasetGroupArn = config.datasetGroupArn;
        this._datasetImportJob.internalValue = config.datasetImportJob;
        this._datasetType = config.datasetType;
        this._name = config.name;
        this._schemaArn = config.schemaArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // dataset_arn - computed: true, optional: false, required: false
    public get datasetArn() {
        return this.getStringAttribute('dataset_arn');
    }

    // dataset_group_arn - computed: false, optional: false, required: true
    private _datasetGroupArn?: string; 
    public get datasetGroupArn() {
        return this.getStringAttribute('dataset_group_arn');
    }
    public set datasetGroupArn(value: string) {
        this._datasetGroupArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetGroupArnInput() {
        return this._datasetGroupArn;
    }

    // dataset_import_job - computed: true, optional: true, required: false
    private _datasetImportJob = new CcDataset.DatasetImportJobPropertyOutputReference(this, "dataset_import_job");
    public get datasetImportJob() {
        return this._datasetImportJob;
    }
    public putDatasetImportJob(value: CcDataset.DatasetImportJobProperty) {
        this._datasetImportJob.internalValue = value;
    }
    public resetDatasetImportJob() {
        this._datasetImportJob.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetImportJobInput() {
        return this._datasetImportJob.internalValue;
    }

    // dataset_type - computed: false, optional: false, required: true
    private _datasetType?: string; 
    public get datasetType() {
        return this.getStringAttribute('dataset_type');
    }
    public set datasetType(value: string) {
        this._datasetType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetTypeInput() {
        return this._datasetType;
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

    // schema_arn - computed: false, optional: false, required: true
    private _schemaArn?: string; 
    public get schemaArn() {
        return this.getStringAttribute('schema_arn');
    }
    public set schemaArn(value: string) {
        this._schemaArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaArnInput() {
        return this._schemaArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDataset.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDataset.TagProperty[] | cdktn.IResolvable) {
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
            dataset_group_arn: cdktn.stringToTerraform(this._datasetGroupArn),
            dataset_import_job: ccDatasetDatasetImportJobPropertyToTerraform(this._datasetImportJob.internalValue),
            dataset_type: cdktn.stringToTerraform(this._datasetType),
            name: cdktn.stringToTerraform(this._name),
            schema_arn: cdktn.stringToTerraform(this._schemaArn),
            tags: cdktn.listMapper(ccDatasetTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            dataset_group_arn: {
                value: cdktn.stringToHclTerraform(this._datasetGroupArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dataset_import_job: {
                value: ccDatasetDatasetImportJobPropertyToHclTerraform(this._datasetImportJob.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataset.DatasetImportJobProperty",
            },
            dataset_type: {
                value: cdktn.stringToHclTerraform(this._datasetType),
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
            schema_arn: {
                value: cdktn.stringToHclTerraform(this._schemaArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDatasetTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataset.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDatasetDataSourcePropertyToTerraform(struct?: CcDataset.DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_location: cdktn.stringToTerraform(struct!.dataLocation),
    }
}


export function ccDatasetDataSourcePropertyToHclTerraform(struct?: CcDataset.DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_location: {
            value: cdktn.stringToHclTerraform(struct!.dataLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetDatasetImportJobPropertyToTerraform(struct?: CcDataset.DatasetImportJobProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_source: ccDatasetDataSourcePropertyToTerraform(struct!.dataSource),
        dataset_arn: cdktn.stringToTerraform(struct!.datasetArn),
        dataset_import_job_arn: cdktn.stringToTerraform(struct!.datasetImportJobArn),
        job_name: cdktn.stringToTerraform(struct!.jobName),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccDatasetDatasetImportJobPropertyToHclTerraform(struct?: CcDataset.DatasetImportJobProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_source: {
            value: ccDatasetDataSourcePropertyToHclTerraform(struct!.dataSource),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceProperty",
        },
        dataset_arn: {
            value: cdktn.stringToHclTerraform(struct!.datasetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dataset_import_job_arn: {
            value: cdktn.stringToHclTerraform(struct!.datasetImportJobArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        job_name: {
            value: cdktn.stringToHclTerraform(struct!.jobName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetTagPropertyToTerraform(struct?: CcDataset.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDatasetTagPropertyToHclTerraform(struct?: CcDataset.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDataset {
export interface DataSourceProperty {
    /**
    * The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#data_location CcDataset#data_location}
    */
    readonly dataLocation?: string;
}
export class DataSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataLocation = this._dataLocation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataLocation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataLocation = value.dataLocation;
        }
    }

    // data_location - computed: true, optional: true, required: false
    private _dataLocation?: string; 
    public get dataLocation() {
        return this.getStringAttribute('data_location');
    }
    public set dataLocation(value: string) {
        this._dataLocation = value;
    }
    public resetDataLocation() {
        this._dataLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataLocationInput() {
        return this._dataLocation;
    }
}
export interface DatasetImportJobProperty {
    /**
    * The Amazon S3 bucket that contains the training data to import.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#data_source CcDataset#data_source}
    */
    readonly dataSource?: DataSourceProperty;
    /**
    * The ARN of the dataset that receives the imported data
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#dataset_arn CcDataset#dataset_arn}
    */
    readonly datasetArn?: string;
    /**
    * The ARN of the dataset import job
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#dataset_import_job_arn CcDataset#dataset_import_job_arn}
    */
    readonly datasetImportJobArn?: string;
    /**
    * The name for the dataset import job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#job_name CcDataset#job_name}
    */
    readonly jobName?: string;
    /**
    * The ARN of the IAM role that has permissions to read from the Amazon S3 data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#role_arn CcDataset#role_arn}
    */
    readonly roleArn?: string;
}
export class DatasetImportJobPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatasetImportJobProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSource = this._dataSource?.internalValue;
        }
        if (this._datasetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.datasetArn = this._datasetArn;
        }
        if (this._datasetImportJobArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.datasetImportJobArn = this._datasetImportJobArn;
        }
        if (this._jobName !== undefined) {
            hasAnyValues = true;
            internalValueResult.jobName = this._jobName;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatasetImportJobProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataSource.internalValue = undefined;
            this._datasetArn = undefined;
            this._datasetImportJobArn = undefined;
            this._jobName = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataSource.internalValue = value.dataSource;
            this._datasetArn = value.datasetArn;
            this._datasetImportJobArn = value.datasetImportJobArn;
            this._jobName = value.jobName;
            this._roleArn = value.roleArn;
        }
    }

    // data_source - computed: true, optional: true, required: false
    private _dataSource = new DataSourcePropertyOutputReference(this, "data_source");
    public get dataSource() {
        return this._dataSource;
    }
    public putDataSource(value: DataSourceProperty) {
        this._dataSource.internalValue = value;
    }
    public resetDataSource() {
        this._dataSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceInput() {
        return this._dataSource.internalValue;
    }

    // dataset_arn - computed: true, optional: true, required: false
    private _datasetArn?: string; 
    public get datasetArn() {
        return this.getStringAttribute('dataset_arn');
    }
    public set datasetArn(value: string) {
        this._datasetArn = value;
    }
    public resetDatasetArn() {
        this._datasetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetArnInput() {
        return this._datasetArn;
    }

    // dataset_import_job_arn - computed: true, optional: true, required: false
    private _datasetImportJobArn?: string; 
    public get datasetImportJobArn() {
        return this.getStringAttribute('dataset_import_job_arn');
    }
    public set datasetImportJobArn(value: string) {
        this._datasetImportJobArn = value;
    }
    public resetDatasetImportJobArn() {
        this._datasetImportJobArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetImportJobArnInput() {
        return this._datasetImportJobArn;
    }

    // job_name - computed: true, optional: true, required: false
    private _jobName?: string; 
    public get jobName() {
        return this.getStringAttribute('job_name');
    }
    public set jobName(value: string) {
        this._jobName = value;
    }
    public resetJobName() {
        this._jobName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobNameInput() {
        return this._jobName;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#key CcDataset#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#value CcDataset#value}
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
