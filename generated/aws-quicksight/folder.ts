// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_folder

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFolderProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_folder#aws_account_id CcFolder#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_folder#folder_id CcFolder#folder_id}
    */
    readonly folderId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_folder#folder_type CcFolder#folder_type}
    */
    readonly folderType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_folder#name CcFolder#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_folder#parent_folder_arn CcFolder#parent_folder_arn}
    */
    readonly parentFolderArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_folder#permissions CcFolder#permissions}
    */
    readonly permissions?: CcFolder.ResourcePermissionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_folder#sharing_model CcFolder#sharing_model}
    */
    readonly sharingModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_folder#tags CcFolder#tags}
    */
    readonly tags?: CcFolder.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_folder awscc_quicksight_folder}
*/
export class CcFolder extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_quicksight_folder";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFolder resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFolder to import
    * @param importFromId The id of the existing CcFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_folder#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFolder to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_folder", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_folder awscc_quicksight_folder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFolderProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcFolderProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_folder',
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
        this._awsAccountId = config.awsAccountId;
        this._folderId = config.folderId;
        this._folderType = config.folderType;
        this._name = config.name;
        this._parentFolderArn = config.parentFolderArn;
        this._permissions.internalValue = config.permissions;
        this._sharingModel = config.sharingModel;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // aws_account_id - computed: true, optional: true, required: false
    private _awsAccountId?: string; 
    public get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }
    public set awsAccountId(value: string) {
        this._awsAccountId = value;
    }
    public resetAwsAccountId() {
        this._awsAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountIdInput() {
        return this._awsAccountId;
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // folder_id - computed: true, optional: true, required: false
    private _folderId?: string; 
    public get folderId() {
        return this.getStringAttribute('folder_id');
    }
    public set folderId(value: string) {
        this._folderId = value;
    }
    public resetFolderId() {
        this._folderId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get folderIdInput() {
        return this._folderId;
    }

    // folder_type - computed: true, optional: true, required: false
    private _folderType?: string; 
    public get folderType() {
        return this.getStringAttribute('folder_type');
    }
    public set folderType(value: string) {
        this._folderType = value;
    }
    public resetFolderType() {
        this._folderType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get folderTypeInput() {
        return this._folderType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
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

    // parent_folder_arn - computed: true, optional: true, required: false
    private _parentFolderArn?: string; 
    public get parentFolderArn() {
        return this.getStringAttribute('parent_folder_arn');
    }
    public set parentFolderArn(value: string) {
        this._parentFolderArn = value;
    }
    public resetParentFolderArn() {
        this._parentFolderArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parentFolderArnInput() {
        return this._parentFolderArn;
    }

    // permissions - computed: true, optional: true, required: false
    private _permissions = new CcFolder.ResourcePermissionPropertyList(this, "permissions", false);
    public get permissions() {
        return this._permissions;
    }
    public putPermissions(value: CcFolder.ResourcePermissionProperty[] | cdktn.IResolvable) {
        this._permissions.internalValue = value;
    }
    public resetPermissions() {
        this._permissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsInput() {
        return this._permissions.internalValue;
    }

    // sharing_model - computed: true, optional: true, required: false
    private _sharingModel?: string; 
    public get sharingModel() {
        return this.getStringAttribute('sharing_model');
    }
    public set sharingModel(value: string) {
        this._sharingModel = value;
    }
    public resetSharingModel() {
        this._sharingModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sharingModelInput() {
        return this._sharingModel;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFolder.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFolder.TagProperty[] | cdktn.IResolvable) {
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
            aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
            folder_id: cdktn.stringToTerraform(this._folderId),
            folder_type: cdktn.stringToTerraform(this._folderType),
            name: cdktn.stringToTerraform(this._name),
            parent_folder_arn: cdktn.stringToTerraform(this._parentFolderArn),
            permissions: cdktn.listMapper(ccFolderResourcePermissionPropertyToTerraform, false)(this._permissions.internalValue),
            sharing_model: cdktn.stringToTerraform(this._sharingModel),
            tags: cdktn.listMapper(ccFolderTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            aws_account_id: {
                value: cdktn.stringToHclTerraform(this._awsAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            folder_id: {
                value: cdktn.stringToHclTerraform(this._folderId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            folder_type: {
                value: cdktn.stringToHclTerraform(this._folderType),
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
            parent_folder_arn: {
                value: cdktn.stringToHclTerraform(this._parentFolderArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            permissions: {
                value: cdktn.listMapperHcl(ccFolderResourcePermissionPropertyToHclTerraform, false)(this._permissions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFolder.ResourcePermissionPropertyList",
            },
            sharing_model: {
                value: cdktn.stringToHclTerraform(this._sharingModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFolderTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFolder.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFolderResourcePermissionPropertyToTerraform(struct?: CcFolder.ResourcePermissionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
        principal: cdktn.stringToTerraform(struct!.principal),
    }
}


export function ccFolderResourcePermissionPropertyToHclTerraform(struct?: CcFolder.ResourcePermissionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        principal: {
            value: cdktn.stringToHclTerraform(struct!.principal),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFolderTagPropertyToTerraform(struct?: CcFolder.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFolderTagPropertyToHclTerraform(struct?: CcFolder.TagProperty | cdktn.IResolvable): any {
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


export namespace CcFolder {
export interface ResourcePermissionProperty {
    /**
    * <p>The IAM action to grant or revoke permissions on.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_folder#actions CcFolder#actions}
    */
    readonly actions?: string[];
    /**
    * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
    *             following:</p>
    *          <ul>
    *             <li>
    *                <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
    *             </li>
    *             <li>
    *                <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
    *             </li>
    *             <li>
    *                <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
    *                     ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
    *                     (This is less common.) </p>
    *             </li>
    *          </ul>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_folder#principal CcFolder#principal}
    */
    readonly principal?: string;
}
export class ResourcePermissionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourcePermissionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions;
        }
        if (this._principal !== undefined) {
            hasAnyValues = true;
            internalValueResult.principal = this._principal;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourcePermissionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions = undefined;
            this._principal = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions = value.actions;
            this._principal = value.principal;
        }
    }

    // actions - computed: true, optional: true, required: false
    private _actions?: string[]; 
    public get actions() {
        return this.getListAttribute('actions');
    }
    public set actions(value: string[]) {
        this._actions = value;
    }
    public resetActions() {
        this._actions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions;
    }

    // principal - computed: true, optional: true, required: false
    private _principal?: string; 
    public get principal() {
        return this.getStringAttribute('principal');
    }
    public set principal(value: string) {
        this._principal = value;
    }
    public resetPrincipal() {
        this._principal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
        return this._principal;
    }
}

export class ResourcePermissionPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourcePermissionProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourcePermissionPropertyOutputReference {
        return new ResourcePermissionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * <p>Tag key.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_folder#key CcFolder#key}
    */
    readonly key?: string;
    /**
    * <p>Tag value.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_folder#value CcFolder#value}
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
