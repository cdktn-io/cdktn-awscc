// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/organizations_account

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAccountProps extends cdktn.TerraformMetaArguments {
    /**
    * The friendly name of the member account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/organizations_account#account_name CcAccount#account_name}
    */
    readonly accountName: string;
    /**
    * The email address of the owner to assign to the new member account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/organizations_account#email CcAccount#email}
    */
    readonly email: string;
    /**
    * List of parent nodes for the member account. Currently only one parent at a time is supported. Default is root.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/organizations_account#parent_ids CcAccount#parent_ids}
    */
    readonly parentIds?: string[];
    /**
    * The name of an IAM role that AWS Organizations automatically preconfigures in the new member account. Default name is OrganizationAccountAccessRole if not specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/organizations_account#role_name CcAccount#role_name}
    */
    readonly roleName?: string;
    /**
    * A list of tags that you want to attach to the newly created account. For each tag in the list, you must specify both a tag key and a value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/organizations_account#tags CcAccount#tags}
    */
    readonly tags?: CcAccount.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/organizations_account awscc_organizations_account}
*/
export class CcAccount extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_organizations_account";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAccount resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAccount to import
    * @param importFromId The id of the existing CcAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/organizations_account#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAccount to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_organizations_account", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/organizations_account awscc_organizations_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAccountProps
    */
    public constructor(scope: Construct, id: string, config: CcAccountProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_organizations_account',
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
        this._accountName = config.accountName;
        this._email = config.email;
        this._parentIds = config.parentIds;
        this._roleName = config.roleName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: false, required: false
    public get accountId() {
        return this.getStringAttribute('account_id');
    }

    // account_name - computed: false, optional: false, required: true
    private _accountName?: string; 
    public get accountName() {
        return this.getStringAttribute('account_name');
    }
    public set accountName(value: string) {
        this._accountName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountNameInput() {
        return this._accountName;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // email - computed: false, optional: false, required: true
    private _email?: string; 
    public get email() {
        return this.getStringAttribute('email');
    }
    public set email(value: string) {
        this._email = value;
    }
    // Temporarily expose input value. Use with caution.
    public get emailInput() {
        return this._email;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // joined_method - computed: true, optional: false, required: false
    public get joinedMethod() {
        return this.getStringAttribute('joined_method');
    }

    // joined_timestamp - computed: true, optional: false, required: false
    public get joinedTimestamp() {
        return this.getStringAttribute('joined_timestamp');
    }

    // parent_ids - computed: true, optional: true, required: false
    private _parentIds?: string[]; 
    public get parentIds() {
        return cdktn.Fn.tolist(this.getListAttribute('parent_ids'));
    }
    public set parentIds(value: string[]) {
        this._parentIds = value;
    }
    public resetParentIds() {
        this._parentIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parentIdsInput() {
        return this._parentIds;
    }

    // paths - computed: true, optional: false, required: false
    public get paths() {
        return this.getListAttribute('paths');
    }

    // role_name - computed: true, optional: true, required: false
    private _roleName?: string; 
    public get roleName() {
        return this.getStringAttribute('role_name');
    }
    public set roleName(value: string) {
        this._roleName = value;
    }
    public resetRoleName() {
        this._roleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleNameInput() {
        return this._roleName;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAccount.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAccount.TagProperty[] | cdktn.IResolvable) {
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
            account_name: cdktn.stringToTerraform(this._accountName),
            email: cdktn.stringToTerraform(this._email),
            parent_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._parentIds),
            role_name: cdktn.stringToTerraform(this._roleName),
            tags: cdktn.listMapper(ccAccountTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            account_name: {
                value: cdktn.stringToHclTerraform(this._accountName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            email: {
                value: cdktn.stringToHclTerraform(this._email),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parent_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._parentIds),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            role_name: {
                value: cdktn.stringToHclTerraform(this._roleName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAccountTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAccount.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAccountTagPropertyToTerraform(struct?: CcAccount.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAccountTagPropertyToHclTerraform(struct?: CcAccount.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAccount {
export interface TagProperty {
    /**
    * The key identifier, or name, of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/organizations_account#key CcAccount#key}
    */
    readonly key?: string;
    /**
    * The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/organizations_account#value CcAccount#value}
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
