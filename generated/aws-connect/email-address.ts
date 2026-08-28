// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_email_address

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEmailAddressProps extends cdktn.TerraformMetaArguments {
    /**
    * List of alias configurations for the email address
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_email_address#alias_configurations CcEmailAddress#alias_configurations}
    */
    readonly aliasConfigurations?: CcEmailAddress.AliasConfigurationProperty[] | cdktn.IResolvable;
    /**
    * A description for the email address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_email_address#description CcEmailAddress#description}
    */
    readonly description?: string;
    /**
    * The display name for the email address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_email_address#display_name CcEmailAddress#display_name}
    */
    readonly displayName?: string;
    /**
    * Email address to be created for this instance
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_email_address#email_address CcEmailAddress#email_address}
    */
    readonly emailAddress: string;
    /**
    * The identifier of the Amazon Connect instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_email_address#instance_arn CcEmailAddress#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * One or more tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_email_address#tags CcEmailAddress#tags}
    */
    readonly tags?: CcEmailAddress.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_email_address awscc_connect_email_address}
*/
export class CcEmailAddress extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_email_address";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEmailAddress resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEmailAddress to import
    * @param importFromId The id of the existing CcEmailAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_email_address#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEmailAddress to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_email_address", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_email_address awscc_connect_email_address} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEmailAddressProps
    */
    public constructor(scope: Construct, id: string, config: CcEmailAddressProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_email_address',
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
        this._aliasConfigurations.internalValue = config.aliasConfigurations;
        this._description = config.description;
        this._displayName = config.displayName;
        this._emailAddress = config.emailAddress;
        this._instanceArn = config.instanceArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias_configurations - computed: true, optional: true, required: false
    private _aliasConfigurations = new CcEmailAddress.AliasConfigurationPropertyList(this, "alias_configurations", false);
    public get aliasConfigurations() {
        return this._aliasConfigurations;
    }
    public putAliasConfigurations(value: CcEmailAddress.AliasConfigurationProperty[] | cdktn.IResolvable) {
        this._aliasConfigurations.internalValue = value;
    }
    public resetAliasConfigurations() {
        this._aliasConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasConfigurationsInput() {
        return this._aliasConfigurations.internalValue;
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

    // email_address - computed: false, optional: false, required: true
    private _emailAddress?: string; 
    public get emailAddress() {
        return this.getStringAttribute('email_address');
    }
    public set emailAddress(value: string) {
        this._emailAddress = value;
    }
    // Temporarily expose input value. Use with caution.
    public get emailAddressInput() {
        return this._emailAddress;
    }

    // email_address_arn - computed: true, optional: false, required: false
    public get emailAddressArn() {
        return this.getStringAttribute('email_address_arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_arn - computed: false, optional: false, required: true
    private _instanceArn?: string; 
    public get instanceArn() {
        return this.getStringAttribute('instance_arn');
    }
    public set instanceArn(value: string) {
        this._instanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceArnInput() {
        return this._instanceArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEmailAddress.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEmailAddress.TagProperty[] | cdktn.IResolvable) {
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
            alias_configurations: cdktn.listMapper(ccEmailAddressAliasConfigurationPropertyToTerraform, false)(this._aliasConfigurations.internalValue),
            description: cdktn.stringToTerraform(this._description),
            display_name: cdktn.stringToTerraform(this._displayName),
            email_address: cdktn.stringToTerraform(this._emailAddress),
            instance_arn: cdktn.stringToTerraform(this._instanceArn),
            tags: cdktn.listMapper(ccEmailAddressTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            alias_configurations: {
                value: cdktn.listMapperHcl(ccEmailAddressAliasConfigurationPropertyToHclTerraform, false)(this._aliasConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEmailAddress.AliasConfigurationPropertyList",
            },
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
            email_address: {
                value: cdktn.stringToHclTerraform(this._emailAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_arn: {
                value: cdktn.stringToHclTerraform(this._instanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEmailAddressTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcEmailAddress.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEmailAddressAliasConfigurationPropertyToTerraform(struct?: CcEmailAddress.AliasConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        email_address_arn: cdktn.stringToTerraform(struct!.emailAddressArn),
    }
}


export function ccEmailAddressAliasConfigurationPropertyToHclTerraform(struct?: CcEmailAddress.AliasConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        email_address_arn: {
            value: cdktn.stringToHclTerraform(struct!.emailAddressArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEmailAddressTagPropertyToTerraform(struct?: CcEmailAddress.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEmailAddressTagPropertyToHclTerraform(struct?: CcEmailAddress.TagProperty | cdktn.IResolvable): any {
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


export namespace CcEmailAddress {
export interface AliasConfigurationProperty {
    /**
    * The identifier of the email address alias
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_email_address#email_address_arn CcEmailAddress#email_address_arn}
    */
    readonly emailAddressArn?: string;
}
export class AliasConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AliasConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._emailAddressArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailAddressArn = this._emailAddressArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AliasConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._emailAddressArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._emailAddressArn = value.emailAddressArn;
        }
    }

    // email_address_arn - computed: true, optional: true, required: false
    private _emailAddressArn?: string; 
    public get emailAddressArn() {
        return this.getStringAttribute('email_address_arn');
    }
    public set emailAddressArn(value: string) {
        this._emailAddressArn = value;
    }
    public resetEmailAddressArn() {
        this._emailAddressArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailAddressArnInput() {
        return this._emailAddressArn;
    }
}

export class AliasConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : AliasConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): AliasConfigurationPropertyOutputReference {
        return new AliasConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_email_address#key CcEmailAddress#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_email_address#value CcEmailAddress#value}
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
