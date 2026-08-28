// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_s3

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLocationS3Props extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_s3#s3_bucket_arn CcLocationS3#s3_bucket_arn}
    */
    readonly s3BucketArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the AWS IAM role that is used to access an Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_s3#s3_config CcLocationS3#s3_config}
    */
    readonly s3Config: CcLocationS3.S3ConfigProperty;
    /**
    * The Amazon S3 storage class you want to store your files in when this location is used as a task destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_s3#s3_storage_class CcLocationS3#s3_storage_class}
    */
    readonly s3StorageClass?: string;
    /**
    * A subdirectory in the Amazon S3 bucket. This subdirectory in Amazon S3 is used to read data from the S3 source location or write data to the S3 destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_s3#subdirectory CcLocationS3#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_s3#tags CcLocationS3#tags}
    */
    readonly tags?: CcLocationS3.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_s3 awscc_datasync_location_s3}
*/
export class CcLocationS3 extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datasync_location_s3";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLocationS3 resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLocationS3 to import
    * @param importFromId The id of the existing CcLocationS3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_s3#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLocationS3 to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datasync_location_s3", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_s3 awscc_datasync_location_s3} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLocationS3Props
    */
    public constructor(scope: Construct, id: string, config: CcLocationS3Props) {
        super(scope, id, {
            terraformResourceType: 'awscc_datasync_location_s3',
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
        this._s3BucketArn = config.s3BucketArn;
        this._s3Config.internalValue = config.s3Config;
        this._s3StorageClass = config.s3StorageClass;
        this._subdirectory = config.subdirectory;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // location_arn - computed: true, optional: false, required: false
    public get locationArn() {
        return this.getStringAttribute('location_arn');
    }

    // location_uri - computed: true, optional: false, required: false
    public get locationUri() {
        return this.getStringAttribute('location_uri');
    }

    // s3_bucket_arn - computed: true, optional: true, required: false
    private _s3BucketArn?: string; 
    public get s3BucketArn() {
        return this.getStringAttribute('s3_bucket_arn');
    }
    public set s3BucketArn(value: string) {
        this._s3BucketArn = value;
    }
    public resetS3BucketArn() {
        this._s3BucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketArnInput() {
        return this._s3BucketArn;
    }

    // s3_config - computed: false, optional: false, required: true
    private _s3Config = new CcLocationS3.S3ConfigPropertyOutputReference(this, "s3_config");
    public get s3Config() {
        return this._s3Config;
    }
    public putS3Config(value: CcLocationS3.S3ConfigProperty) {
        this._s3Config.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ConfigInput() {
        return this._s3Config.internalValue;
    }

    // s3_storage_class - computed: true, optional: true, required: false
    private _s3StorageClass?: string; 
    public get s3StorageClass() {
        return this.getStringAttribute('s3_storage_class');
    }
    public set s3StorageClass(value: string) {
        this._s3StorageClass = value;
    }
    public resetS3StorageClass() {
        this._s3StorageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3StorageClassInput() {
        return this._s3StorageClass;
    }

    // subdirectory - computed: true, optional: true, required: false
    private _subdirectory?: string; 
    public get subdirectory() {
        return this.getStringAttribute('subdirectory');
    }
    public set subdirectory(value: string) {
        this._subdirectory = value;
    }
    public resetSubdirectory() {
        this._subdirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subdirectoryInput() {
        return this._subdirectory;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLocationS3.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLocationS3.TagProperty[] | cdktn.IResolvable) {
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
            s3_bucket_arn: cdktn.stringToTerraform(this._s3BucketArn),
            s3_config: ccLocationS3S3ConfigPropertyToTerraform(this._s3Config.internalValue),
            s3_storage_class: cdktn.stringToTerraform(this._s3StorageClass),
            subdirectory: cdktn.stringToTerraform(this._subdirectory),
            tags: cdktn.listMapper(ccLocationS3TagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            s3_bucket_arn: {
                value: cdktn.stringToHclTerraform(this._s3BucketArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            s3_config: {
                value: ccLocationS3S3ConfigPropertyToHclTerraform(this._s3Config.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLocationS3.S3ConfigProperty",
            },
            s3_storage_class: {
                value: cdktn.stringToHclTerraform(this._s3StorageClass),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subdirectory: {
                value: cdktn.stringToHclTerraform(this._subdirectory),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLocationS3TagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLocationS3.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLocationS3S3ConfigPropertyToTerraform(struct?: CcLocationS3.S3ConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_access_role_arn: cdktn.stringToTerraform(struct!.bucketAccessRoleArn),
    }
}


export function ccLocationS3S3ConfigPropertyToHclTerraform(struct?: CcLocationS3.S3ConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.bucketAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLocationS3TagPropertyToTerraform(struct?: CcLocationS3.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLocationS3TagPropertyToHclTerraform(struct?: CcLocationS3.TagProperty | cdktn.IResolvable): any {
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


export namespace CcLocationS3 {
export interface S3ConfigProperty {
    /**
    * The ARN of the IAM role of the Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_s3#bucket_access_role_arn CcLocationS3#bucket_access_role_arn}
    */
    readonly bucketAccessRoleArn: string;
}
export class S3ConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3ConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketAccessRoleArn = this._bucketAccessRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3ConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketAccessRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketAccessRoleArn = value.bucketAccessRoleArn;
        }
    }

    // bucket_access_role_arn - computed: false, optional: false, required: true
    private _bucketAccessRoleArn?: string; 
    public get bucketAccessRoleArn() {
        return this.getStringAttribute('bucket_access_role_arn');
    }
    public set bucketAccessRoleArn(value: string) {
        this._bucketAccessRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketAccessRoleArnInput() {
        return this._bucketAccessRoleArn;
    }
}
export interface TagProperty {
    /**
    * The key for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_s3#key CcLocationS3#key}
    */
    readonly key?: string;
    /**
    * The value for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_s3#value CcLocationS3#value}
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
