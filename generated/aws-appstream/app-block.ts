// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAppBlockProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#description CcAppBlock#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#display_name CcAppBlock#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#name CcAppBlock#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#packaging_type CcAppBlock#packaging_type}
    */
    readonly packagingType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#post_setup_script_details CcAppBlock#post_setup_script_details}
    */
    readonly postSetupScriptDetails?: CcAppBlock.ScriptDetailsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#setup_script_details CcAppBlock#setup_script_details}
    */
    readonly setupScriptDetails?: CcAppBlock.SetupScriptDetailsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#source_s3_location CcAppBlock#source_s3_location}
    */
    readonly sourceS3Location: CcAppBlock.SourceS3LocationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#tags CcAppBlock#tags}
    */
    readonly tags?: CcAppBlock.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block awscc_appstream_app_block}
*/
export class CcAppBlock extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appstream_app_block";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAppBlock resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAppBlock to import
    * @param importFromId The id of the existing CcAppBlock that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAppBlock to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appstream_app_block", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block awscc_appstream_app_block} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAppBlockProps
    */
    public constructor(scope: Construct, id: string, config: CcAppBlockProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appstream_app_block',
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
        this._displayName = config.displayName;
        this._name = config.name;
        this._packagingType = config.packagingType;
        this._postSetupScriptDetails.internalValue = config.postSetupScriptDetails;
        this._setupScriptDetails.internalValue = config.setupScriptDetails;
        this._sourceS3Location.internalValue = config.sourceS3Location;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
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

    // display_name - computed: true, optional: true, required: false
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    public resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
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

    // packaging_type - computed: true, optional: true, required: false
    private _packagingType?: string; 
    public get packagingType() {
        return this.getStringAttribute('packaging_type');
    }
    public set packagingType(value: string) {
        this._packagingType = value;
    }
    public resetPackagingType() {
        this._packagingType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packagingTypeInput() {
        return this._packagingType;
    }

    // post_setup_script_details - computed: true, optional: true, required: false
    private _postSetupScriptDetails = new CcAppBlock.ScriptDetailsPropertyOutputReference(this, "post_setup_script_details");
    public get postSetupScriptDetails() {
        return this._postSetupScriptDetails;
    }
    public putPostSetupScriptDetails(value: CcAppBlock.ScriptDetailsProperty) {
        this._postSetupScriptDetails.internalValue = value;
    }
    public resetPostSetupScriptDetails() {
        this._postSetupScriptDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postSetupScriptDetailsInput() {
        return this._postSetupScriptDetails.internalValue;
    }

    // setup_script_details - computed: true, optional: true, required: false
    private _setupScriptDetails = new CcAppBlock.SetupScriptDetailsPropertyOutputReference(this, "setup_script_details");
    public get setupScriptDetails() {
        return this._setupScriptDetails;
    }
    public putSetupScriptDetails(value: CcAppBlock.SetupScriptDetailsProperty) {
        this._setupScriptDetails.internalValue = value;
    }
    public resetSetupScriptDetails() {
        this._setupScriptDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get setupScriptDetailsInput() {
        return this._setupScriptDetails.internalValue;
    }

    // source_s3_location - computed: false, optional: false, required: true
    private _sourceS3Location = new CcAppBlock.SourceS3LocationPropertyOutputReference(this, "source_s3_location");
    public get sourceS3Location() {
        return this._sourceS3Location;
    }
    public putSourceS3Location(value: CcAppBlock.SourceS3LocationProperty) {
        this._sourceS3Location.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceS3LocationInput() {
        return this._sourceS3Location.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAppBlock.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAppBlock.TagProperty[] | cdktn.IResolvable) {
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
            description: cdktn.stringToTerraform(this._description),
            display_name: cdktn.stringToTerraform(this._displayName),
            name: cdktn.stringToTerraform(this._name),
            packaging_type: cdktn.stringToTerraform(this._packagingType),
            post_setup_script_details: ccAppBlockScriptDetailsPropertyToTerraform(this._postSetupScriptDetails.internalValue),
            setup_script_details: ccAppBlockSetupScriptDetailsPropertyToTerraform(this._setupScriptDetails.internalValue),
            source_s3_location: ccAppBlockSourceS3LocationPropertyToTerraform(this._sourceS3Location.internalValue),
            tags: cdktn.listMapper(ccAppBlockTagPropertyToTerraform, false)(this._tags.internalValue),
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
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
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
            packaging_type: {
                value: cdktn.stringToHclTerraform(this._packagingType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            post_setup_script_details: {
                value: ccAppBlockScriptDetailsPropertyToHclTerraform(this._postSetupScriptDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAppBlock.ScriptDetailsProperty",
            },
            setup_script_details: {
                value: ccAppBlockSetupScriptDetailsPropertyToHclTerraform(this._setupScriptDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAppBlock.SetupScriptDetailsProperty",
            },
            source_s3_location: {
                value: ccAppBlockSourceS3LocationPropertyToHclTerraform(this._sourceS3Location.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAppBlock.SourceS3LocationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAppBlockTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAppBlock.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAppBlockS3LocationPropertyToTerraform(struct?: CcAppBlock.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
        s3_key: cdktn.stringToTerraform(struct!.s3Key),
    }
}


export function ccAppBlockS3LocationPropertyToHclTerraform(struct?: CcAppBlock.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_bucket: {
            value: cdktn.stringToHclTerraform(struct!.s3Bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_key: {
            value: cdktn.stringToHclTerraform(struct!.s3Key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppBlockScriptDetailsPropertyToTerraform(struct?: CcAppBlock.ScriptDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        executable_parameters: cdktn.stringToTerraform(struct!.executableParameters),
        executable_path: cdktn.stringToTerraform(struct!.executablePath),
        script_s3_location: ccAppBlockS3LocationPropertyToTerraform(struct!.scriptS3Location),
        timeout_in_seconds: cdktn.numberToTerraform(struct!.timeoutInSeconds),
    }
}


export function ccAppBlockScriptDetailsPropertyToHclTerraform(struct?: CcAppBlock.ScriptDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        executable_parameters: {
            value: cdktn.stringToHclTerraform(struct!.executableParameters),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        executable_path: {
            value: cdktn.stringToHclTerraform(struct!.executablePath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        script_s3_location: {
            value: ccAppBlockS3LocationPropertyToHclTerraform(struct!.scriptS3Location),
            isBlock: true,
            type: "struct",
            storageClassType: "S3LocationProperty",
        },
        timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.timeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppBlockScriptS3LocationPropertyToTerraform(struct?: CcAppBlock.ScriptS3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
        s3_key: cdktn.stringToTerraform(struct!.s3Key),
    }
}


export function ccAppBlockScriptS3LocationPropertyToHclTerraform(struct?: CcAppBlock.ScriptS3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_bucket: {
            value: cdktn.stringToHclTerraform(struct!.s3Bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_key: {
            value: cdktn.stringToHclTerraform(struct!.s3Key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppBlockSetupScriptDetailsPropertyToTerraform(struct?: CcAppBlock.SetupScriptDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        executable_parameters: cdktn.stringToTerraform(struct!.executableParameters),
        executable_path: cdktn.stringToTerraform(struct!.executablePath),
        script_s3_location: ccAppBlockScriptS3LocationPropertyToTerraform(struct!.scriptS3Location),
        timeout_in_seconds: cdktn.numberToTerraform(struct!.timeoutInSeconds),
    }
}


export function ccAppBlockSetupScriptDetailsPropertyToHclTerraform(struct?: CcAppBlock.SetupScriptDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        executable_parameters: {
            value: cdktn.stringToHclTerraform(struct!.executableParameters),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        executable_path: {
            value: cdktn.stringToHclTerraform(struct!.executablePath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        script_s3_location: {
            value: ccAppBlockScriptS3LocationPropertyToHclTerraform(struct!.scriptS3Location),
            isBlock: true,
            type: "struct",
            storageClassType: "ScriptS3LocationProperty",
        },
        timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.timeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppBlockSourceS3LocationPropertyToTerraform(struct?: CcAppBlock.SourceS3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
        s3_key: cdktn.stringToTerraform(struct!.s3Key),
    }
}


export function ccAppBlockSourceS3LocationPropertyToHclTerraform(struct?: CcAppBlock.SourceS3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_bucket: {
            value: cdktn.stringToHclTerraform(struct!.s3Bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_key: {
            value: cdktn.stringToHclTerraform(struct!.s3Key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppBlockTagPropertyToTerraform(struct?: CcAppBlock.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        tag_key: cdktn.stringToTerraform(struct!.tagKey),
        tag_value: cdktn.stringToTerraform(struct!.tagValue),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAppBlockTagPropertyToHclTerraform(struct?: CcAppBlock.TagProperty | cdktn.IResolvable): any {
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
        tag_key: {
            value: cdktn.stringToHclTerraform(struct!.tagKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_value: {
            value: cdktn.stringToHclTerraform(struct!.tagValue),
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


export namespace CcAppBlock {
export interface S3LocationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_bucket CcAppBlock#s3_bucket}
    */
    readonly s3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_key CcAppBlock#s3_key}
    */
    readonly s3Key?: string;
}
export class S3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Bucket = this._s3Bucket;
        }
        if (this._s3Key !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Key = this._s3Key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Bucket = undefined;
            this._s3Key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Bucket = value.s3Bucket;
            this._s3Key = value.s3Key;
        }
    }

    // s3_bucket - computed: true, optional: true, required: false
    private _s3Bucket?: string; 
    public get s3Bucket() {
        return this.getStringAttribute('s3_bucket');
    }
    public set s3Bucket(value: string) {
        this._s3Bucket = value;
    }
    public resetS3Bucket() {
        this._s3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketInput() {
        return this._s3Bucket;
    }

    // s3_key - computed: true, optional: true, required: false
    private _s3Key?: string; 
    public get s3Key() {
        return this.getStringAttribute('s3_key');
    }
    public set s3Key(value: string) {
        this._s3Key = value;
    }
    public resetS3Key() {
        this._s3Key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyInput() {
        return this._s3Key;
    }
}
export interface ScriptDetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_parameters CcAppBlock#executable_parameters}
    */
    readonly executableParameters?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_path CcAppBlock#executable_path}
    */
    readonly executablePath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#script_s3_location CcAppBlock#script_s3_location}
    */
    readonly scriptS3Location?: S3LocationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#timeout_in_seconds CcAppBlock#timeout_in_seconds}
    */
    readonly timeoutInSeconds?: number;
}
export class ScriptDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScriptDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._executableParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.executableParameters = this._executableParameters;
        }
        if (this._executablePath !== undefined) {
            hasAnyValues = true;
            internalValueResult.executablePath = this._executablePath;
        }
        if (this._scriptS3Location?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scriptS3Location = this._scriptS3Location?.internalValue;
        }
        if (this._timeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScriptDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._executableParameters = undefined;
            this._executablePath = undefined;
            this._scriptS3Location.internalValue = undefined;
            this._timeoutInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._executableParameters = value.executableParameters;
            this._executablePath = value.executablePath;
            this._scriptS3Location.internalValue = value.scriptS3Location;
            this._timeoutInSeconds = value.timeoutInSeconds;
        }
    }

    // executable_parameters - computed: true, optional: true, required: false
    private _executableParameters?: string; 
    public get executableParameters() {
        return this.getStringAttribute('executable_parameters');
    }
    public set executableParameters(value: string) {
        this._executableParameters = value;
    }
    public resetExecutableParameters() {
        this._executableParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executableParametersInput() {
        return this._executableParameters;
    }

    // executable_path - computed: true, optional: true, required: false
    private _executablePath?: string; 
    public get executablePath() {
        return this.getStringAttribute('executable_path');
    }
    public set executablePath(value: string) {
        this._executablePath = value;
    }
    public resetExecutablePath() {
        this._executablePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executablePathInput() {
        return this._executablePath;
    }

    // script_s3_location - computed: true, optional: true, required: false
    private _scriptS3Location = new S3LocationPropertyOutputReference(this, "script_s3_location");
    public get scriptS3Location() {
        return this._scriptS3Location;
    }
    public putScriptS3Location(value: S3LocationProperty) {
        this._scriptS3Location.internalValue = value;
    }
    public resetScriptS3Location() {
        this._scriptS3Location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scriptS3LocationInput() {
        return this._scriptS3Location.internalValue;
    }

    // timeout_in_seconds - computed: true, optional: true, required: false
    private _timeoutInSeconds?: number; 
    public get timeoutInSeconds() {
        return this.getNumberAttribute('timeout_in_seconds');
    }
    public set timeoutInSeconds(value: number) {
        this._timeoutInSeconds = value;
    }
    public resetTimeoutInSeconds() {
        this._timeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInSecondsInput() {
        return this._timeoutInSeconds;
    }
}
export interface ScriptS3LocationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_bucket CcAppBlock#s3_bucket}
    */
    readonly s3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_key CcAppBlock#s3_key}
    */
    readonly s3Key?: string;
}
export class ScriptS3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScriptS3LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Bucket = this._s3Bucket;
        }
        if (this._s3Key !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Key = this._s3Key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScriptS3LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Bucket = undefined;
            this._s3Key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Bucket = value.s3Bucket;
            this._s3Key = value.s3Key;
        }
    }

    // s3_bucket - computed: true, optional: true, required: false
    private _s3Bucket?: string; 
    public get s3Bucket() {
        return this.getStringAttribute('s3_bucket');
    }
    public set s3Bucket(value: string) {
        this._s3Bucket = value;
    }
    public resetS3Bucket() {
        this._s3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketInput() {
        return this._s3Bucket;
    }

    // s3_key - computed: true, optional: true, required: false
    private _s3Key?: string; 
    public get s3Key() {
        return this.getStringAttribute('s3_key');
    }
    public set s3Key(value: string) {
        this._s3Key = value;
    }
    public resetS3Key() {
        this._s3Key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyInput() {
        return this._s3Key;
    }
}
export interface SetupScriptDetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_parameters CcAppBlock#executable_parameters}
    */
    readonly executableParameters?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_path CcAppBlock#executable_path}
    */
    readonly executablePath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#script_s3_location CcAppBlock#script_s3_location}
    */
    readonly scriptS3Location?: ScriptS3LocationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#timeout_in_seconds CcAppBlock#timeout_in_seconds}
    */
    readonly timeoutInSeconds?: number;
}
export class SetupScriptDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SetupScriptDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._executableParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.executableParameters = this._executableParameters;
        }
        if (this._executablePath !== undefined) {
            hasAnyValues = true;
            internalValueResult.executablePath = this._executablePath;
        }
        if (this._scriptS3Location?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scriptS3Location = this._scriptS3Location?.internalValue;
        }
        if (this._timeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SetupScriptDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._executableParameters = undefined;
            this._executablePath = undefined;
            this._scriptS3Location.internalValue = undefined;
            this._timeoutInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._executableParameters = value.executableParameters;
            this._executablePath = value.executablePath;
            this._scriptS3Location.internalValue = value.scriptS3Location;
            this._timeoutInSeconds = value.timeoutInSeconds;
        }
    }

    // executable_parameters - computed: true, optional: true, required: false
    private _executableParameters?: string; 
    public get executableParameters() {
        return this.getStringAttribute('executable_parameters');
    }
    public set executableParameters(value: string) {
        this._executableParameters = value;
    }
    public resetExecutableParameters() {
        this._executableParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executableParametersInput() {
        return this._executableParameters;
    }

    // executable_path - computed: true, optional: true, required: false
    private _executablePath?: string; 
    public get executablePath() {
        return this.getStringAttribute('executable_path');
    }
    public set executablePath(value: string) {
        this._executablePath = value;
    }
    public resetExecutablePath() {
        this._executablePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executablePathInput() {
        return this._executablePath;
    }

    // script_s3_location - computed: true, optional: true, required: false
    private _scriptS3Location = new ScriptS3LocationPropertyOutputReference(this, "script_s3_location");
    public get scriptS3Location() {
        return this._scriptS3Location;
    }
    public putScriptS3Location(value: ScriptS3LocationProperty) {
        this._scriptS3Location.internalValue = value;
    }
    public resetScriptS3Location() {
        this._scriptS3Location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scriptS3LocationInput() {
        return this._scriptS3Location.internalValue;
    }

    // timeout_in_seconds - computed: true, optional: true, required: false
    private _timeoutInSeconds?: number; 
    public get timeoutInSeconds() {
        return this.getNumberAttribute('timeout_in_seconds');
    }
    public set timeoutInSeconds(value: number) {
        this._timeoutInSeconds = value;
    }
    public resetTimeoutInSeconds() {
        this._timeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInSecondsInput() {
        return this._timeoutInSeconds;
    }
}
export interface SourceS3LocationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_bucket CcAppBlock#s3_bucket}
    */
    readonly s3Bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_key CcAppBlock#s3_key}
    */
    readonly s3Key?: string;
}
export class SourceS3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceS3LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Bucket = this._s3Bucket;
        }
        if (this._s3Key !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Key = this._s3Key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceS3LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Bucket = undefined;
            this._s3Key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Bucket = value.s3Bucket;
            this._s3Key = value.s3Key;
        }
    }

    // s3_bucket - computed: false, optional: false, required: true
    private _s3Bucket?: string; 
    public get s3Bucket() {
        return this.getStringAttribute('s3_bucket');
    }
    public set s3Bucket(value: string) {
        this._s3Bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketInput() {
        return this._s3Bucket;
    }

    // s3_key - computed: true, optional: true, required: false
    private _s3Key?: string; 
    public get s3Key() {
        return this.getStringAttribute('s3_key');
    }
    public set s3Key(value: string) {
        this._s3Key = value;
    }
    public resetS3Key() {
        this._s3Key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyInput() {
        return this._s3Key;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#key CcAppBlock#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#tag_key CcAppBlock#tag_key}
    */
    readonly tagKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#tag_value CcAppBlock#tag_value}
    */
    readonly tagValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#value CcAppBlock#value}
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
        if (this._tagKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagKey = this._tagKey;
        }
        if (this._tagValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagValue = this._tagValue;
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
            this._tagKey = undefined;
            this._tagValue = undefined;
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
            this._tagKey = value.tagKey;
            this._tagValue = value.tagValue;
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

    // tag_value - computed: true, optional: true, required: false
    private _tagValue?: string; 
    public get tagValue() {
        return this.getStringAttribute('tag_value');
    }
    public set tagValue(value: string) {
        this._tagValue = value;
    }
    public resetTagValue() {
        this._tagValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagValueInput() {
        return this._tagValue;
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
