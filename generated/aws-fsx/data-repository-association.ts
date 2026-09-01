// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_data_repository_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataRepositoryAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * A boolean flag indicating whether an import data repository task to import metadata should run after the data repository association is created. The task runs if this flag is set to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_data_repository_association#batch_import_meta_data_on_create CcDataRepositoryAssociation#batch_import_meta_data_on_create}
    */
    readonly batchImportMetaDataOnCreate?: boolean | cdktn.IResolvable;
    /**
    * The path to the Amazon S3 data repository that will be linked to the file system. The path can be an S3 bucket or prefix in the format s3://myBucket/myPrefix/ . This path specifies where in the S3 data repository files will be imported from or exported to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_data_repository_association#data_repository_path CcDataRepositoryAssociation#data_repository_path}
    */
    readonly dataRepositoryPath: string;
    /**
    * The globally unique ID of the file system, assigned by Amazon FSx.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_data_repository_association#file_system_id CcDataRepositoryAssociation#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * This path specifies where in your file system files will be exported from or imported to. This file system directory can be linked to only one Amazon S3 bucket, and no other S3 bucket can be linked to the directory.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_data_repository_association#file_system_path CcDataRepositoryAssociation#file_system_path}
    */
    readonly fileSystemPath: string;
    /**
    * For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_data_repository_association#imported_file_chunk_size CcDataRepositoryAssociation#imported_file_chunk_size}
    */
    readonly importedFileChunkSize?: number;
    /**
    * The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_data_repository_association#s3 CcDataRepositoryAssociation#s3}
    */
    readonly s3?: CcDataRepositoryAssociation.S3Property;
    /**
    * A list of Tag values, with a maximum of 50 elements.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_data_repository_association#tags CcDataRepositoryAssociation#tags}
    */
    readonly tags?: CcDataRepositoryAssociation.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_data_repository_association awscc_fsx_data_repository_association}
*/
export class CcDataRepositoryAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_fsx_data_repository_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataRepositoryAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataRepositoryAssociation to import
    * @param importFromId The id of the existing CcDataRepositoryAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_data_repository_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataRepositoryAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_fsx_data_repository_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_data_repository_association awscc_fsx_data_repository_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataRepositoryAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcDataRepositoryAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_fsx_data_repository_association',
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
        this._batchImportMetaDataOnCreate = config.batchImportMetaDataOnCreate;
        this._dataRepositoryPath = config.dataRepositoryPath;
        this._fileSystemId = config.fileSystemId;
        this._fileSystemPath = config.fileSystemPath;
        this._importedFileChunkSize = config.importedFileChunkSize;
        this._s3.internalValue = config.s3;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // association_id - computed: true, optional: false, required: false
    public get associationId() {
        return this.getStringAttribute('association_id');
    }

    // batch_import_meta_data_on_create - computed: true, optional: true, required: false
    private _batchImportMetaDataOnCreate?: boolean | cdktn.IResolvable; 
    public get batchImportMetaDataOnCreate() {
        return this.getBooleanAttribute('batch_import_meta_data_on_create');
    }
    public set batchImportMetaDataOnCreate(value: boolean | cdktn.IResolvable) {
        this._batchImportMetaDataOnCreate = value;
    }
    public resetBatchImportMetaDataOnCreate() {
        this._batchImportMetaDataOnCreate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchImportMetaDataOnCreateInput() {
        return this._batchImportMetaDataOnCreate;
    }

    // data_repository_path - computed: false, optional: false, required: true
    private _dataRepositoryPath?: string; 
    public get dataRepositoryPath() {
        return this.getStringAttribute('data_repository_path');
    }
    public set dataRepositoryPath(value: string) {
        this._dataRepositoryPath = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataRepositoryPathInput() {
        return this._dataRepositoryPath;
    }

    // file_system_id - computed: false, optional: false, required: true
    private _fileSystemId?: string; 
    public get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
        this._fileSystemId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
        return this._fileSystemId;
    }

    // file_system_path - computed: false, optional: false, required: true
    private _fileSystemPath?: string; 
    public get fileSystemPath() {
        return this.getStringAttribute('file_system_path');
    }
    public set fileSystemPath(value: string) {
        this._fileSystemPath = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemPathInput() {
        return this._fileSystemPath;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // imported_file_chunk_size - computed: true, optional: true, required: false
    private _importedFileChunkSize?: number; 
    public get importedFileChunkSize() {
        return this.getNumberAttribute('imported_file_chunk_size');
    }
    public set importedFileChunkSize(value: number) {
        this._importedFileChunkSize = value;
    }
    public resetImportedFileChunkSize() {
        this._importedFileChunkSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get importedFileChunkSizeInput() {
        return this._importedFileChunkSize;
    }

    // resource_arn - computed: true, optional: false, required: false
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }

    // s3 - computed: true, optional: true, required: false
    private _s3 = new CcDataRepositoryAssociation.S3PropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: CcDataRepositoryAssociation.S3Property) {
        this._s3.internalValue = value;
    }
    public resetS3() {
        this._s3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
        return this._s3.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDataRepositoryAssociation.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDataRepositoryAssociation.TagProperty[] | cdktn.IResolvable) {
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
            batch_import_meta_data_on_create: cdktn.booleanToTerraform(this._batchImportMetaDataOnCreate),
            data_repository_path: cdktn.stringToTerraform(this._dataRepositoryPath),
            file_system_id: cdktn.stringToTerraform(this._fileSystemId),
            file_system_path: cdktn.stringToTerraform(this._fileSystemPath),
            imported_file_chunk_size: cdktn.numberToTerraform(this._importedFileChunkSize),
            s3: ccDataRepositoryAssociationS3PropertyToTerraform(this._s3.internalValue),
            tags: cdktn.listMapper(ccDataRepositoryAssociationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            batch_import_meta_data_on_create: {
                value: cdktn.booleanToHclTerraform(this._batchImportMetaDataOnCreate),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            data_repository_path: {
                value: cdktn.stringToHclTerraform(this._dataRepositoryPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            file_system_id: {
                value: cdktn.stringToHclTerraform(this._fileSystemId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            file_system_path: {
                value: cdktn.stringToHclTerraform(this._fileSystemPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            imported_file_chunk_size: {
                value: cdktn.numberToHclTerraform(this._importedFileChunkSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            s3: {
                value: ccDataRepositoryAssociationS3PropertyToHclTerraform(this._s3.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataRepositoryAssociation.S3Property",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDataRepositoryAssociationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataRepositoryAssociation.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataRepositoryAssociationAutoExportPolicyPropertyToTerraform(struct?: CcDataRepositoryAssociation.AutoExportPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.events),
    }
}


export function ccDataRepositoryAssociationAutoExportPolicyPropertyToHclTerraform(struct?: CcDataRepositoryAssociation.AutoExportPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        events: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.events),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataRepositoryAssociationAutoImportPolicyPropertyToTerraform(struct?: CcDataRepositoryAssociation.AutoImportPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.events),
    }
}


export function ccDataRepositoryAssociationAutoImportPolicyPropertyToHclTerraform(struct?: CcDataRepositoryAssociation.AutoImportPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        events: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.events),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataRepositoryAssociationS3PropertyToTerraform(struct?: CcDataRepositoryAssociation.S3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_export_policy: ccDataRepositoryAssociationAutoExportPolicyPropertyToTerraform(struct!.autoExportPolicy),
        auto_import_policy: ccDataRepositoryAssociationAutoImportPolicyPropertyToTerraform(struct!.autoImportPolicy),
    }
}


export function ccDataRepositoryAssociationS3PropertyToHclTerraform(struct?: CcDataRepositoryAssociation.S3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_export_policy: {
            value: ccDataRepositoryAssociationAutoExportPolicyPropertyToHclTerraform(struct!.autoExportPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "AutoExportPolicyProperty",
        },
        auto_import_policy: {
            value: ccDataRepositoryAssociationAutoImportPolicyPropertyToHclTerraform(struct!.autoImportPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "AutoImportPolicyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataRepositoryAssociationTagPropertyToTerraform(struct?: CcDataRepositoryAssociation.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDataRepositoryAssociationTagPropertyToHclTerraform(struct?: CcDataRepositoryAssociation.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDataRepositoryAssociation {
export interface AutoExportPolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_data_repository_association#events CcDataRepositoryAssociation#events}
    */
    readonly events?: string[];
}
export class AutoExportPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoExportPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._events !== undefined) {
            hasAnyValues = true;
            internalValueResult.events = this._events;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoExportPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._events = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._events = value.events;
        }
    }

    // events - computed: true, optional: true, required: false
    private _events?: string[]; 
    public get events() {
        return cdktn.Fn.tolist(this.getListAttribute('events'));
    }
    public set events(value: string[]) {
        this._events = value;
    }
    public resetEvents() {
        this._events = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventsInput() {
        return this._events;
    }
}
export interface AutoImportPolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_data_repository_association#events CcDataRepositoryAssociation#events}
    */
    readonly events?: string[];
}
export class AutoImportPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoImportPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._events !== undefined) {
            hasAnyValues = true;
            internalValueResult.events = this._events;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoImportPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._events = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._events = value.events;
        }
    }

    // events - computed: true, optional: true, required: false
    private _events?: string[]; 
    public get events() {
        return cdktn.Fn.tolist(this.getListAttribute('events'));
    }
    public set events(value: string[]) {
        this._events = value;
    }
    public resetEvents() {
        this._events = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventsInput() {
        return this._events;
    }
}
export interface S3Property {
    /**
    * Specifies the type of updated objects (new, changed, deleted) that will be automatically exported from your file system to the linked S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_data_repository_association#auto_export_policy CcDataRepositoryAssociation#auto_export_policy}
    */
    readonly autoExportPolicy?: AutoExportPolicyProperty;
    /**
    * Specifies the type of updated objects (new, changed, deleted) that will be automatically imported from the linked S3 bucket to your file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_data_repository_association#auto_import_policy CcDataRepositoryAssociation#auto_import_policy}
    */
    readonly autoImportPolicy?: AutoImportPolicyProperty;
}
export class S3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoExportPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoExportPolicy = this._autoExportPolicy?.internalValue;
        }
        if (this._autoImportPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoImportPolicy = this._autoImportPolicy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoExportPolicy.internalValue = undefined;
            this._autoImportPolicy.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoExportPolicy.internalValue = value.autoExportPolicy;
            this._autoImportPolicy.internalValue = value.autoImportPolicy;
        }
    }

    // auto_export_policy - computed: true, optional: true, required: false
    private _autoExportPolicy = new AutoExportPolicyPropertyOutputReference(this, "auto_export_policy");
    public get autoExportPolicy() {
        return this._autoExportPolicy;
    }
    public putAutoExportPolicy(value: AutoExportPolicyProperty) {
        this._autoExportPolicy.internalValue = value;
    }
    public resetAutoExportPolicy() {
        this._autoExportPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoExportPolicyInput() {
        return this._autoExportPolicy.internalValue;
    }

    // auto_import_policy - computed: true, optional: true, required: false
    private _autoImportPolicy = new AutoImportPolicyPropertyOutputReference(this, "auto_import_policy");
    public get autoImportPolicy() {
        return this._autoImportPolicy;
    }
    public putAutoImportPolicy(value: AutoImportPolicyProperty) {
        this._autoImportPolicy.internalValue = value;
    }
    public resetAutoImportPolicy() {
        this._autoImportPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoImportPolicyInput() {
        return this._autoImportPolicy.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_data_repository_association#key CcDataRepositoryAssociation#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_data_repository_association#value CcDataRepositoryAssociation#value}
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
