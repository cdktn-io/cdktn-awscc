// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_lustre

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLocationFSxLustreProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) for the FSx for Lustre file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_lustre#fsx_filesystem_arn CcLocationFSxLustre#fsx_filesystem_arn}
    */
    readonly fsxFilesystemArn?: string;
    /**
    * The ARNs of the security groups that are to use to configure the FSx for Lustre file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_lustre#security_group_arns CcLocationFSxLustre#security_group_arns}
    */
    readonly securityGroupArns: string[];
    /**
    * A subdirectory in the location's path.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_lustre#subdirectory CcLocationFSxLustre#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_lustre#tags CcLocationFSxLustre#tags}
    */
    readonly tags?: CcLocationFSxLustre.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_lustre awscc_datasync_location_fsx_lustre}
*/
export class CcLocationFSxLustre extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datasync_location_fsx_lustre";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLocationFSxLustre resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLocationFSxLustre to import
    * @param importFromId The id of the existing CcLocationFSxLustre that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_lustre#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLocationFSxLustre to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datasync_location_fsx_lustre", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_lustre awscc_datasync_location_fsx_lustre} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLocationFSxLustreProps
    */
    public constructor(scope: Construct, id: string, config: CcLocationFSxLustreProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datasync_location_fsx_lustre',
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
        this._fsxFilesystemArn = config.fsxFilesystemArn;
        this._securityGroupArns = config.securityGroupArns;
        this._subdirectory = config.subdirectory;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // fsx_filesystem_arn - computed: true, optional: true, required: false
    private _fsxFilesystemArn?: string; 
    public get fsxFilesystemArn() {
        return this.getStringAttribute('fsx_filesystem_arn');
    }
    public set fsxFilesystemArn(value: string) {
        this._fsxFilesystemArn = value;
    }
    public resetFsxFilesystemArn() {
        this._fsxFilesystemArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fsxFilesystemArnInput() {
        return this._fsxFilesystemArn;
    }

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

    // security_group_arns - computed: false, optional: false, required: true
    private _securityGroupArns?: string[]; 
    public get securityGroupArns() {
        return this.getListAttribute('security_group_arns');
    }
    public set securityGroupArns(value: string[]) {
        this._securityGroupArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupArnsInput() {
        return this._securityGroupArns;
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
    private _tags = new CcLocationFSxLustre.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLocationFSxLustre.TagProperty[] | cdktn.IResolvable) {
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
            fsx_filesystem_arn: cdktn.stringToTerraform(this._fsxFilesystemArn),
            security_group_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupArns),
            subdirectory: cdktn.stringToTerraform(this._subdirectory),
            tags: cdktn.listMapper(ccLocationFSxLustreTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            fsx_filesystem_arn: {
                value: cdktn.stringToHclTerraform(this._fsxFilesystemArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_group_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            subdirectory: {
                value: cdktn.stringToHclTerraform(this._subdirectory),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLocationFSxLustreTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLocationFSxLustre.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLocationFSxLustreTagPropertyToTerraform(struct?: CcLocationFSxLustre.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLocationFSxLustreTagPropertyToHclTerraform(struct?: CcLocationFSxLustre.TagProperty | cdktn.IResolvable): any {
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


export namespace CcLocationFSxLustre {
export interface TagProperty {
    /**
    * The key for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_lustre#key CcLocationFSxLustre#key}
    */
    readonly key?: string;
    /**
    * The value for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_lustre#value CcLocationFSxLustre#value}
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
