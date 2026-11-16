// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain_access_grant_for_organization

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDomainAccessGrantForOrganizationProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the organization domain the grant belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain_access_grant_for_organization#domain_id CcDomainAccessGrantForOrganization#domain_id}
    */
    readonly domainId: string;
    /**
    * A name that identifies the access grant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain_access_grant_for_organization#name CcDomainAccessGrantForOrganization#name}
    */
    readonly name: string;
    /**
    * The permission granted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain_access_grant_for_organization#permission CcDomainAccessGrantForOrganization#permission}
    */
    readonly permission: string;
    /**
    * The principal receiving the grant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal CcDomainAccessGrantForOrganization#principal}
    */
    readonly principal: CcDomainAccessGrantForOrganization.PrincipalProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain_access_grant_for_organization#tags CcDomainAccessGrantForOrganization#tags}
    */
    readonly tags?: CcDomainAccessGrantForOrganization.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain_access_grant_for_organization awscc_cloudwatch_domain_access_grant_for_organization}
*/
export class CcDomainAccessGrantForOrganization extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudwatch_domain_access_grant_for_organization";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDomainAccessGrantForOrganization resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDomainAccessGrantForOrganization to import
    * @param importFromId The id of the existing CcDomainAccessGrantForOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain_access_grant_for_organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDomainAccessGrantForOrganization to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudwatch_domain_access_grant_for_organization", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain_access_grant_for_organization awscc_cloudwatch_domain_access_grant_for_organization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDomainAccessGrantForOrganizationProps
    */
    public constructor(scope: Construct, id: string, config: CcDomainAccessGrantForOrganizationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudwatch_domain_access_grant_for_organization',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.110.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._domainId = config.domainId;
        this._name = config.name;
        this._permission = config.permission;
        this._principal.internalValue = config.principal;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // created_by - computed: true, optional: false, required: false
    public get createdBy() {
        return this.getStringAttribute('created_by');
    }

    // domain_id - computed: false, optional: false, required: true
    private _domainId?: string; 
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }
    public set domainId(value: string) {
        this._domainId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIdInput() {
        return this._domainId;
    }

    // grant_id - computed: true, optional: false, required: false
    public get grantId() {
        return this.getStringAttribute('grant_id');
    }

    // grant_type - computed: true, optional: false, required: false
    public get grantType() {
        return this.getStringAttribute('grant_type');
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

    // permission - computed: false, optional: false, required: true
    private _permission?: string; 
    public get permission() {
        return this.getStringAttribute('permission');
    }
    public set permission(value: string) {
        this._permission = value;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionInput() {
        return this._permission;
    }

    // principal - computed: false, optional: false, required: true
    private _principal = new CcDomainAccessGrantForOrganization.PrincipalPropertyOutputReference(this, "principal");
    public get principal() {
        return this._principal;
    }
    public putPrincipal(value: CcDomainAccessGrantForOrganization.PrincipalProperty) {
        this._principal.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
        return this._principal.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDomainAccessGrantForOrganization.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDomainAccessGrantForOrganization.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            domain_id: cdktn.stringToTerraform(this._domainId),
            name: cdktn.stringToTerraform(this._name),
            permission: cdktn.stringToTerraform(this._permission),
            principal: ccDomainAccessGrantForOrganizationPrincipalPropertyToTerraform(this._principal.internalValue),
            tags: cdktn.listMapper(ccDomainAccessGrantForOrganizationTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            domain_id: {
                value: cdktn.stringToHclTerraform(this._domainId),
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
            permission: {
                value: cdktn.stringToHclTerraform(this._permission),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            principal: {
                value: ccDomainAccessGrantForOrganizationPrincipalPropertyToHclTerraform(this._principal.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomainAccessGrantForOrganization.PrincipalProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDomainAccessGrantForOrganizationTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDomainAccessGrantForOrganization.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDomainAccessGrantForOrganizationPrincipalAttributesPropertyToTerraform(struct?: CcDomainAccessGrantForOrganization.PrincipalAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDomainAccessGrantForOrganizationPrincipalAttributesPropertyToHclTerraform(struct?: CcDomainAccessGrantForOrganization.PrincipalAttributesProperty | cdktn.IResolvable): any {
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


export function ccDomainAccessGrantForOrganizationPrincipalPropertyToTerraform(struct?: CcDomainAccessGrantForOrganization.PrincipalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        principal_attributes: cdktn.listMapper(ccDomainAccessGrantForOrganizationPrincipalAttributesPropertyToTerraform, false)(struct!.principalAttributes),
        principal_id: cdktn.stringToTerraform(struct!.principalId),
        principal_type: cdktn.stringToTerraform(struct!.principalType),
    }
}


export function ccDomainAccessGrantForOrganizationPrincipalPropertyToHclTerraform(struct?: CcDomainAccessGrantForOrganization.PrincipalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        principal_attributes: {
            value: cdktn.listMapperHcl(ccDomainAccessGrantForOrganizationPrincipalAttributesPropertyToHclTerraform, false)(struct!.principalAttributes),
            isBlock: true,
            type: "set",
            storageClassType: "PrincipalAttributesPropertyList",
        },
        principal_id: {
            value: cdktn.stringToHclTerraform(struct!.principalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        principal_type: {
            value: cdktn.stringToHclTerraform(struct!.principalType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainAccessGrantForOrganizationTagsPropertyToTerraform(struct?: CcDomainAccessGrantForOrganization.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDomainAccessGrantForOrganizationTagsPropertyToHclTerraform(struct?: CcDomainAccessGrantForOrganization.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcDomainAccessGrantForOrganization {
export interface PrincipalAttributesProperty {
    /**
    * The attribute name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain_access_grant_for_organization#key CcDomainAccessGrantForOrganization#key}
    */
    readonly key?: string;
    /**
    * The attribute value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain_access_grant_for_organization#value CcDomainAccessGrantForOrganization#value}
    */
    readonly value?: string;
}
export class PrincipalAttributesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PrincipalAttributesProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: PrincipalAttributesProperty | cdktn.IResolvable | undefined) {
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

export class PrincipalAttributesPropertyList extends cdktn.ComplexList {
    public internalValue? : PrincipalAttributesProperty[] | cdktn.IResolvable

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
    public get(index: number): PrincipalAttributesPropertyOutputReference {
        return new PrincipalAttributesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PrincipalProperty {
    /**
    * Attribute key-value pairs that select the principals the grant applies to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal_attributes CcDomainAccessGrantForOrganization#principal_attributes}
    */
    readonly principalAttributes?: PrincipalAttributesProperty[] | cdktn.IResolvable;
    /**
    * The identifier of the principal, such as an IAM role ARN or an Identity Center user ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal_id CcDomainAccessGrantForOrganization#principal_id}
    */
    readonly principalId?: string;
    /**
    * The type of principal the grant is issued to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal_type CcDomainAccessGrantForOrganization#principal_type}
    */
    readonly principalType: string;
}
export class PrincipalPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrincipalProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._principalAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.principalAttributes = this._principalAttributes?.internalValue;
        }
        if (this._principalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.principalId = this._principalId;
        }
        if (this._principalType !== undefined) {
            hasAnyValues = true;
            internalValueResult.principalType = this._principalType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrincipalProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._principalAttributes.internalValue = undefined;
            this._principalId = undefined;
            this._principalType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._principalAttributes.internalValue = value.principalAttributes;
            this._principalId = value.principalId;
            this._principalType = value.principalType;
        }
    }

    // principal_attributes - computed: true, optional: true, required: false
    private _principalAttributes = new PrincipalAttributesPropertyList(this, "principal_attributes", true);
    public get principalAttributes() {
        return this._principalAttributes;
    }
    public putPrincipalAttributes(value: PrincipalAttributesProperty[] | cdktn.IResolvable) {
        this._principalAttributes.internalValue = value;
    }
    public resetPrincipalAttributes() {
        this._principalAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalAttributesInput() {
        return this._principalAttributes.internalValue;
    }

    // principal_id - computed: true, optional: true, required: false
    private _principalId?: string; 
    public get principalId() {
        return this.getStringAttribute('principal_id');
    }
    public set principalId(value: string) {
        this._principalId = value;
    }
    public resetPrincipalId() {
        this._principalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalIdInput() {
        return this._principalId;
    }

    // principal_type - computed: false, optional: false, required: true
    private _principalType?: string; 
    public get principalType() {
        return this.getStringAttribute('principal_type');
    }
    public set principalType(value: string) {
        this._principalType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalTypeInput() {
        return this._principalType;
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain_access_grant_for_organization#key CcDomainAccessGrantForOrganization#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain_access_grant_for_organization#value CcDomainAccessGrantForOrganization#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
