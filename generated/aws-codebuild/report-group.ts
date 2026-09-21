// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcReportGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group#delete_reports CcReportGroup#delete_reports}
    */
    readonly deleteReports?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group#export_config CcReportGroup#export_config}
    */
    readonly exportConfig: CcReportGroup.ReportExportConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group#name CcReportGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group#tags CcReportGroup#tags}
    */
    readonly tags?: CcReportGroup.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group#type CcReportGroup#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group awscc_codebuild_report_group}
*/
export class CcReportGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_codebuild_report_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcReportGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcReportGroup to import
    * @param importFromId The id of the existing CcReportGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcReportGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codebuild_report_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group awscc_codebuild_report_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcReportGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcReportGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_codebuild_report_group',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.102.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._deleteReports = config.deleteReports;
        this._exportConfig.internalValue = config.exportConfig;
        this._name = config.name;
        this._tags.internalValue = config.tags;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // delete_reports - computed: true, optional: true, required: false
    private _deleteReports?: boolean | cdktn.IResolvable; 
    public get deleteReports() {
        return this.getBooleanAttribute('delete_reports');
    }
    public set deleteReports(value: boolean | cdktn.IResolvable) {
        this._deleteReports = value;
    }
    public resetDeleteReports() {
        this._deleteReports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteReportsInput() {
        return this._deleteReports;
    }

    // export_config - computed: false, optional: false, required: true
    private _exportConfig = new CcReportGroup.ReportExportConfigPropertyOutputReference(this, "export_config");
    public get exportConfig() {
        return this._exportConfig;
    }
    public putExportConfig(value: CcReportGroup.ReportExportConfigProperty) {
        this._exportConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get exportConfigInput() {
        return this._exportConfig.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcReportGroup.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcReportGroup.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            delete_reports: cdktn.booleanToTerraform(this._deleteReports),
            export_config: ccReportGroupReportExportConfigPropertyToTerraform(this._exportConfig.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccReportGroupTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            delete_reports: {
                value: cdktn.booleanToHclTerraform(this._deleteReports),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            export_config: {
                value: ccReportGroupReportExportConfigPropertyToHclTerraform(this._exportConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcReportGroup.ReportExportConfigProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccReportGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcReportGroup.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccReportGroupS3ReportExportConfigPropertyToTerraform(struct?: CcReportGroup.S3ReportExportConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
        encryption_disabled: cdktn.booleanToTerraform(struct!.encryptionDisabled),
        encryption_key: cdktn.stringToTerraform(struct!.encryptionKey),
        packaging: cdktn.stringToTerraform(struct!.packaging),
        path: cdktn.stringToTerraform(struct!.path),
    }
}


export function ccReportGroupS3ReportExportConfigPropertyToHclTerraform(struct?: CcReportGroup.S3ReportExportConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.bucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encryption_disabled: {
            value: cdktn.booleanToHclTerraform(struct!.encryptionDisabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        encryption_key: {
            value: cdktn.stringToHclTerraform(struct!.encryptionKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        packaging: {
            value: cdktn.stringToHclTerraform(struct!.packaging),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReportGroupReportExportConfigPropertyToTerraform(struct?: CcReportGroup.ReportExportConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        export_config_type: cdktn.stringToTerraform(struct!.exportConfigType),
        s3_destination: ccReportGroupS3ReportExportConfigPropertyToTerraform(struct!.s3Destination),
    }
}


export function ccReportGroupReportExportConfigPropertyToHclTerraform(struct?: CcReportGroup.ReportExportConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        export_config_type: {
            value: cdktn.stringToHclTerraform(struct!.exportConfigType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_destination: {
            value: ccReportGroupS3ReportExportConfigPropertyToHclTerraform(struct!.s3Destination),
            isBlock: true,
            type: "struct",
            storageClassType: "S3ReportExportConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReportGroupTagPropertyToTerraform(struct?: CcReportGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccReportGroupTagPropertyToHclTerraform(struct?: CcReportGroup.TagProperty | cdktn.IResolvable): any {
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


export namespace CcReportGroup {
export interface S3ReportExportConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group#bucket CcReportGroup#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group#bucket_owner CcReportGroup#bucket_owner}
    */
    readonly bucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group#encryption_disabled CcReportGroup#encryption_disabled}
    */
    readonly encryptionDisabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group#encryption_key CcReportGroup#encryption_key}
    */
    readonly encryptionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group#packaging CcReportGroup#packaging}
    */
    readonly packaging?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group#path CcReportGroup#path}
    */
    readonly path?: string;
}
export class S3ReportExportConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3ReportExportConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._bucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketOwner = this._bucketOwner;
        }
        if (this._encryptionDisabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionDisabled = this._encryptionDisabled;
        }
        if (this._encryptionKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionKey = this._encryptionKey;
        }
        if (this._packaging !== undefined) {
            hasAnyValues = true;
            internalValueResult.packaging = this._packaging;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3ReportExportConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._bucketOwner = undefined;
            this._encryptionDisabled = undefined;
            this._encryptionKey = undefined;
            this._packaging = undefined;
            this._path = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._bucketOwner = value.bucketOwner;
            this._encryptionDisabled = value.encryptionDisabled;
            this._encryptionKey = value.encryptionKey;
            this._packaging = value.packaging;
            this._path = value.path;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // bucket_owner - computed: true, optional: true, required: false
    private _bucketOwner?: string; 
    public get bucketOwner() {
        return this.getStringAttribute('bucket_owner');
    }
    public set bucketOwner(value: string) {
        this._bucketOwner = value;
    }
    public resetBucketOwner() {
        this._bucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketOwnerInput() {
        return this._bucketOwner;
    }

    // encryption_disabled - computed: true, optional: true, required: false
    private _encryptionDisabled?: boolean | cdktn.IResolvable; 
    public get encryptionDisabled() {
        return this.getBooleanAttribute('encryption_disabled');
    }
    public set encryptionDisabled(value: boolean | cdktn.IResolvable) {
        this._encryptionDisabled = value;
    }
    public resetEncryptionDisabled() {
        this._encryptionDisabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionDisabledInput() {
        return this._encryptionDisabled;
    }

    // encryption_key - computed: true, optional: true, required: false
    private _encryptionKey?: string; 
    public get encryptionKey() {
        return this.getStringAttribute('encryption_key');
    }
    public set encryptionKey(value: string) {
        this._encryptionKey = value;
    }
    public resetEncryptionKey() {
        this._encryptionKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyInput() {
        return this._encryptionKey;
    }

    // packaging - computed: true, optional: true, required: false
    private _packaging?: string; 
    public get packaging() {
        return this.getStringAttribute('packaging');
    }
    public set packaging(value: string) {
        this._packaging = value;
    }
    public resetPackaging() {
        this._packaging = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packagingInput() {
        return this._packaging;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }
}
export interface ReportExportConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group#export_config_type CcReportGroup#export_config_type}
    */
    readonly exportConfigType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group#s3_destination CcReportGroup#s3_destination}
    */
    readonly s3Destination?: S3ReportExportConfigProperty;
}
export class ReportExportConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReportExportConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._exportConfigType !== undefined) {
            hasAnyValues = true;
            internalValueResult.exportConfigType = this._exportConfigType;
        }
        if (this._s3Destination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Destination = this._s3Destination?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReportExportConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exportConfigType = undefined;
            this._s3Destination.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exportConfigType = value.exportConfigType;
            this._s3Destination.internalValue = value.s3Destination;
        }
    }

    // export_config_type - computed: false, optional: false, required: true
    private _exportConfigType?: string; 
    public get exportConfigType() {
        return this.getStringAttribute('export_config_type');
    }
    public set exportConfigType(value: string) {
        this._exportConfigType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get exportConfigTypeInput() {
        return this._exportConfigType;
    }

    // s3_destination - computed: true, optional: true, required: false
    private _s3Destination = new S3ReportExportConfigPropertyOutputReference(this, "s3_destination");
    public get s3Destination() {
        return this._s3Destination;
    }
    public putS3Destination(value: S3ReportExportConfigProperty) {
        this._s3Destination.internalValue = value;
    }
    public resetS3Destination() {
        this._s3Destination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DestinationInput() {
        return this._s3Destination.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group#key CcReportGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/codebuild_report_group#value CcReportGroup#value}
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
