// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codegurureviewer_repository_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRepositoryAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the S3 bucket associated with an associated S3 repository. It must start with `codeguru-reviewer-`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codegurureviewer_repository_association#bucket_name CcRepositoryAssociation#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codegurureviewer_repository_association#connection_arn CcRepositoryAssociation#connection_arn}
    */
    readonly connectionArn?: string;
    /**
    * Name of the repository to be associated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codegurureviewer_repository_association#name CcRepositoryAssociation#name}
    */
    readonly name: string;
    /**
    * The owner of the repository. For a Bitbucket repository, this is the username for the account that owns the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codegurureviewer_repository_association#owner CcRepositoryAssociation#owner}
    */
    readonly owner?: string;
    /**
    * The tags associated with a repository association.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codegurureviewer_repository_association#tags CcRepositoryAssociation#tags}
    */
    readonly tags?: CcRepositoryAssociation.TagProperty[] | cdktn.IResolvable;
    /**
    * The type of repository to be associated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codegurureviewer_repository_association#type CcRepositoryAssociation#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codegurureviewer_repository_association awscc_codegurureviewer_repository_association}
*/
export class CcRepositoryAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_codegurureviewer_repository_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRepositoryAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRepositoryAssociation to import
    * @param importFromId The id of the existing CcRepositoryAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codegurureviewer_repository_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRepositoryAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codegurureviewer_repository_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codegurureviewer_repository_association awscc_codegurureviewer_repository_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRepositoryAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcRepositoryAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_codegurureviewer_repository_association',
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
        this._bucketName = config.bucketName;
        this._connectionArn = config.connectionArn;
        this._name = config.name;
        this._owner = config.owner;
        this._tags.internalValue = config.tags;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // association_arn - computed: true, optional: false, required: false
    public get associationArn() {
        return this.getStringAttribute('association_arn');
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

    // connection_arn - computed: true, optional: true, required: false
    private _connectionArn?: string; 
    public get connectionArn() {
        return this.getStringAttribute('connection_arn');
    }
    public set connectionArn(value: string) {
        this._connectionArn = value;
    }
    public resetConnectionArn() {
        this._connectionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionArnInput() {
        return this._connectionArn;
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

    // owner - computed: true, optional: true, required: false
    private _owner?: string; 
    public get owner() {
        return this.getStringAttribute('owner');
    }
    public set owner(value: string) {
        this._owner = value;
    }
    public resetOwner() {
        this._owner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInput() {
        return this._owner;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRepositoryAssociation.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRepositoryAssociation.TagProperty[] | cdktn.IResolvable) {
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
            bucket_name: cdktn.stringToTerraform(this._bucketName),
            connection_arn: cdktn.stringToTerraform(this._connectionArn),
            name: cdktn.stringToTerraform(this._name),
            owner: cdktn.stringToTerraform(this._owner),
            tags: cdktn.listMapper(ccRepositoryAssociationTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            bucket_name: {
                value: cdktn.stringToHclTerraform(this._bucketName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            connection_arn: {
                value: cdktn.stringToHclTerraform(this._connectionArn),
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
            owner: {
                value: cdktn.stringToHclTerraform(this._owner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRepositoryAssociationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRepositoryAssociation.TagPropertyList",
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

export function ccRepositoryAssociationTagPropertyToTerraform(struct?: CcRepositoryAssociation.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRepositoryAssociationTagPropertyToHclTerraform(struct?: CcRepositoryAssociation.TagProperty | cdktn.IResolvable): any {
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


export namespace CcRepositoryAssociation {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codegurureviewer_repository_association#key CcRepositoryAssociation#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codegurureviewer_repository_association#value CcRepositoryAssociation#value}
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
