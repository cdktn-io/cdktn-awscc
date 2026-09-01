// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_ip_access_settings

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIpAccessSettingsProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context CcIpAccessSettings#additional_encryption_context}
    */
    readonly additionalEncryptionContext?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key CcIpAccessSettings#customer_managed_key}
    */
    readonly customerManagedKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_ip_access_settings#description CcIpAccessSettings#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_ip_access_settings#display_name CcIpAccessSettings#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_ip_access_settings#ip_rules CcIpAccessSettings#ip_rules}
    */
    readonly ipRules: CcIpAccessSettings.IpRuleProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_ip_access_settings#tags CcIpAccessSettings#tags}
    */
    readonly tags?: CcIpAccessSettings.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_ip_access_settings awscc_workspacesweb_ip_access_settings}
*/
export class CcIpAccessSettings extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_workspacesweb_ip_access_settings";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIpAccessSettings resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIpAccessSettings to import
    * @param importFromId The id of the existing CcIpAccessSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_ip_access_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIpAccessSettings to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspacesweb_ip_access_settings", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_ip_access_settings awscc_workspacesweb_ip_access_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIpAccessSettingsProps
    */
    public constructor(scope: Construct, id: string, config: CcIpAccessSettingsProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_workspacesweb_ip_access_settings',
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
        this._additionalEncryptionContext = config.additionalEncryptionContext;
        this._customerManagedKey = config.customerManagedKey;
        this._description = config.description;
        this._displayName = config.displayName;
        this._ipRules.internalValue = config.ipRules;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // additional_encryption_context - computed: true, optional: true, required: false
    private _additionalEncryptionContext?: { [key: string]: string }; 
    public get additionalEncryptionContext() {
        return this.getStringMapAttribute('additional_encryption_context');
    }
    public set additionalEncryptionContext(value: { [key: string]: string }) {
        this._additionalEncryptionContext = value;
    }
    public resetAdditionalEncryptionContext() {
        this._additionalEncryptionContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalEncryptionContextInput() {
        return this._additionalEncryptionContext;
    }

    // associated_portal_arns - computed: true, optional: false, required: false
    public get associatedPortalArns() {
        return this.getListAttribute('associated_portal_arns');
    }

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
        return this.getStringAttribute('creation_date');
    }

    // customer_managed_key - computed: true, optional: true, required: false
    private _customerManagedKey?: string; 
    public get customerManagedKey() {
        return this.getStringAttribute('customer_managed_key');
    }
    public set customerManagedKey(value: string) {
        this._customerManagedKey = value;
    }
    public resetCustomerManagedKey() {
        this._customerManagedKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerManagedKeyInput() {
        return this._customerManagedKey;
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

    // ip_access_settings_arn - computed: true, optional: false, required: false
    public get ipAccessSettingsArn() {
        return this.getStringAttribute('ip_access_settings_arn');
    }

    // ip_rules - computed: false, optional: false, required: true
    private _ipRules = new CcIpAccessSettings.IpRulePropertyList(this, "ip_rules", false);
    public get ipRules() {
        return this._ipRules;
    }
    public putIpRules(value: CcIpAccessSettings.IpRuleProperty[] | cdktn.IResolvable) {
        this._ipRules.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ipRulesInput() {
        return this._ipRules.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIpAccessSettings.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIpAccessSettings.TagProperty[] | cdktn.IResolvable) {
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
            additional_encryption_context: cdktn.hashMapper(cdktn.stringToTerraform)(this._additionalEncryptionContext),
            customer_managed_key: cdktn.stringToTerraform(this._customerManagedKey),
            description: cdktn.stringToTerraform(this._description),
            display_name: cdktn.stringToTerraform(this._displayName),
            ip_rules: cdktn.listMapper(ccIpAccessSettingsIpRulePropertyToTerraform, false)(this._ipRules.internalValue),
            tags: cdktn.listMapper(ccIpAccessSettingsTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            additional_encryption_context: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._additionalEncryptionContext),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            customer_managed_key: {
                value: cdktn.stringToHclTerraform(this._customerManagedKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
            ip_rules: {
                value: cdktn.listMapperHcl(ccIpAccessSettingsIpRulePropertyToHclTerraform, false)(this._ipRules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcIpAccessSettings.IpRulePropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIpAccessSettingsTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcIpAccessSettings.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIpAccessSettingsIpRulePropertyToTerraform(struct?: CcIpAccessSettings.IpRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        ip_range: cdktn.stringToTerraform(struct!.ipRange),
    }
}


export function ccIpAccessSettingsIpRulePropertyToHclTerraform(struct?: CcIpAccessSettings.IpRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_range: {
            value: cdktn.stringToHclTerraform(struct!.ipRange),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIpAccessSettingsTagPropertyToTerraform(struct?: CcIpAccessSettings.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIpAccessSettingsTagPropertyToHclTerraform(struct?: CcIpAccessSettings.TagProperty | cdktn.IResolvable): any {
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


export namespace CcIpAccessSettings {
export interface IpRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_ip_access_settings#description CcIpAccessSettings#description}
    */
    readonly description?: string;
    /**
    * A single IP address or an IP address range in CIDR notation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_ip_access_settings#ip_range CcIpAccessSettings#ip_range}
    */
    readonly ipRange: string;
}
export class IpRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IpRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._ipRange !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipRange = this._ipRange;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IpRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._ipRange = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._ipRange = value.ipRange;
        }
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

    // ip_range - computed: false, optional: false, required: true
    private _ipRange?: string; 
    public get ipRange() {
        return this.getStringAttribute('ip_range');
    }
    public set ipRange(value: string) {
        this._ipRange = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ipRangeInput() {
        return this._ipRange;
    }
}

export class IpRulePropertyList extends cdktn.ComplexList {
    public internalValue? : IpRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): IpRulePropertyOutputReference {
        return new IpRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_ip_access_settings#key CcIpAccessSettings#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_ip_access_settings#value CcIpAccessSettings#value}
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
