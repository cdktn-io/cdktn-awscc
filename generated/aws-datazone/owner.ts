// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcOwnerProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the domain in which you want to add the entity owner.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#domain_identifier CcOwner#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * The ID of the entity to which you want to add an owner.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#entity_identifier CcOwner#entity_identifier}
    */
    readonly entityIdentifier: string;
    /**
    * The type of an entity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#entity_type CcOwner#entity_type}
    */
    readonly entityType: string;
    /**
    * The owner that you want to add to the entity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#owner CcOwner#owner}
    */
    readonly owner: CcOwner.OwnerPropertiesProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner awscc_datazone_owner}
*/
export class CcOwner extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datazone_owner";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcOwner resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcOwner to import
    * @param importFromId The id of the existing CcOwner that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcOwner to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_owner", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner awscc_datazone_owner} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcOwnerProps
    */
    public constructor(scope: Construct, id: string, config: CcOwnerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datazone_owner',
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
        this._domainIdentifier = config.domainIdentifier;
        this._entityIdentifier = config.entityIdentifier;
        this._entityType = config.entityType;
        this._owner.internalValue = config.owner;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // domain_identifier - computed: false, optional: false, required: true
    private _domainIdentifier?: string; 
    public get domainIdentifier() {
        return this.getStringAttribute('domain_identifier');
    }
    public set domainIdentifier(value: string) {
        this._domainIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIdentifierInput() {
        return this._domainIdentifier;
    }

    // entity_identifier - computed: false, optional: false, required: true
    private _entityIdentifier?: string; 
    public get entityIdentifier() {
        return this.getStringAttribute('entity_identifier');
    }
    public set entityIdentifier(value: string) {
        this._entityIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get entityIdentifierInput() {
        return this._entityIdentifier;
    }

    // entity_type - computed: false, optional: false, required: true
    private _entityType?: string; 
    public get entityType() {
        return this.getStringAttribute('entity_type');
    }
    public set entityType(value: string) {
        this._entityType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get entityTypeInput() {
        return this._entityType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // owner - computed: false, optional: false, required: true
    private _owner = new CcOwner.OwnerPropertiesPropertyOutputReference(this, "owner");
    public get owner() {
        return this._owner;
    }
    public putOwner(value: CcOwner.OwnerPropertiesProperty) {
        this._owner.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInput() {
        return this._owner.internalValue;
    }

    // owner_identifier - computed: true, optional: false, required: false
    public get ownerIdentifier() {
        return this.getStringAttribute('owner_identifier');
    }

    // owner_type - computed: true, optional: false, required: false
    public get ownerType() {
        return this.getStringAttribute('owner_type');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
            entity_identifier: cdktn.stringToTerraform(this._entityIdentifier),
            entity_type: cdktn.stringToTerraform(this._entityType),
            owner: ccOwnerOwnerPropertiesPropertyToTerraform(this._owner.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            domain_identifier: {
                value: cdktn.stringToHclTerraform(this._domainIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            entity_identifier: {
                value: cdktn.stringToHclTerraform(this._entityIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            entity_type: {
                value: cdktn.stringToHclTerraform(this._entityType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            owner: {
                value: ccOwnerOwnerPropertiesPropertyToHclTerraform(this._owner.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcOwner.OwnerPropertiesProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccOwnerOwnerGroupPropertiesPropertyToTerraform(struct?: CcOwner.OwnerGroupPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        group_identifier: cdktn.stringToTerraform(struct!.groupIdentifier),
    }
}


export function ccOwnerOwnerGroupPropertiesPropertyToHclTerraform(struct?: CcOwner.OwnerGroupPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        group_identifier: {
            value: cdktn.stringToHclTerraform(struct!.groupIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOwnerOwnerUserPropertiesPropertyToTerraform(struct?: CcOwner.OwnerUserPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        user_identifier: cdktn.stringToTerraform(struct!.userIdentifier),
    }
}


export function ccOwnerOwnerUserPropertiesPropertyToHclTerraform(struct?: CcOwner.OwnerUserPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        user_identifier: {
            value: cdktn.stringToHclTerraform(struct!.userIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOwnerOwnerPropertiesPropertyToTerraform(struct?: CcOwner.OwnerPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        group: ccOwnerOwnerGroupPropertiesPropertyToTerraform(struct!.group),
        user: ccOwnerOwnerUserPropertiesPropertyToTerraform(struct!.user),
    }
}


export function ccOwnerOwnerPropertiesPropertyToHclTerraform(struct?: CcOwner.OwnerPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        group: {
            value: ccOwnerOwnerGroupPropertiesPropertyToHclTerraform(struct!.group),
            isBlock: true,
            type: "struct",
            storageClassType: "OwnerGroupPropertiesProperty",
        },
        user: {
            value: ccOwnerOwnerUserPropertiesPropertyToHclTerraform(struct!.user),
            isBlock: true,
            type: "struct",
            storageClassType: "OwnerUserPropertiesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcOwner {
export interface OwnerGroupPropertiesProperty {
    /**
    * The ID of the domain unit owners group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#group_identifier CcOwner#group_identifier}
    */
    readonly groupIdentifier?: string;
}
export class OwnerGroupPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OwnerGroupPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._groupIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupIdentifier = this._groupIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OwnerGroupPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._groupIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._groupIdentifier = value.groupIdentifier;
        }
    }

    // group_identifier - computed: true, optional: true, required: false
    private _groupIdentifier?: string; 
    public get groupIdentifier() {
        return this.getStringAttribute('group_identifier');
    }
    public set groupIdentifier(value: string) {
        this._groupIdentifier = value;
    }
    public resetGroupIdentifier() {
        this._groupIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupIdentifierInput() {
        return this._groupIdentifier;
    }
}
export interface OwnerUserPropertiesProperty {
    /**
    * The ID of the owner user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#user_identifier CcOwner#user_identifier}
    */
    readonly userIdentifier?: string;
}
export class OwnerUserPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OwnerUserPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._userIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.userIdentifier = this._userIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OwnerUserPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._userIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._userIdentifier = value.userIdentifier;
        }
    }

    // user_identifier - computed: true, optional: true, required: false
    private _userIdentifier?: string; 
    public get userIdentifier() {
        return this.getStringAttribute('user_identifier');
    }
    public set userIdentifier(value: string) {
        this._userIdentifier = value;
    }
    public resetUserIdentifier() {
        this._userIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userIdentifierInput() {
        return this._userIdentifier;
    }
}
export interface OwnerPropertiesProperty {
    /**
    * The properties of the domain unit owners group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#group CcOwner#group}
    */
    readonly group?: OwnerGroupPropertiesProperty;
    /**
    * The properties of the owner user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#user CcOwner#user}
    */
    readonly user?: OwnerUserPropertiesProperty;
}
export class OwnerPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OwnerPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._group?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.group = this._group?.internalValue;
        }
        if (this._user?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.user = this._user?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OwnerPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._group.internalValue = undefined;
            this._user.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._group.internalValue = value.group;
            this._user.internalValue = value.user;
        }
    }

    // group - computed: true, optional: true, required: false
    private _group = new OwnerGroupPropertiesPropertyOutputReference(this, "group");
    public get group() {
        return this._group;
    }
    public putGroup(value: OwnerGroupPropertiesProperty) {
        this._group.internalValue = value;
    }
    public resetGroup() {
        this._group.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupInput() {
        return this._group.internalValue;
    }

    // user - computed: true, optional: true, required: false
    private _user = new OwnerUserPropertiesPropertyOutputReference(this, "user");
    public get user() {
        return this._user;
    }
    public putUser(value: OwnerUserPropertiesProperty) {
        this._user.internalValue = value;
    }
    public resetUser() {
        this._user.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userInput() {
        return this._user.internalValue;
    }
}
}
