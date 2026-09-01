// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcBrowserSettingsProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#additional_encryption_context CcBrowserSettings#additional_encryption_context}
    */
    readonly additionalEncryptionContext?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#browser_policy CcBrowserSettings#browser_policy}
    */
    readonly browserPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#customer_managed_key CcBrowserSettings#customer_managed_key}
    */
    readonly customerManagedKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#tags CcBrowserSettings#tags}
    */
    readonly tags?: CcBrowserSettings.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#web_content_filtering_policy CcBrowserSettings#web_content_filtering_policy}
    */
    readonly webContentFilteringPolicy?: CcBrowserSettings.WebContentFilteringPolicyProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings awscc_workspacesweb_browser_settings}
*/
export class CcBrowserSettings extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_workspacesweb_browser_settings";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcBrowserSettings resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcBrowserSettings to import
    * @param importFromId The id of the existing CcBrowserSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcBrowserSettings to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspacesweb_browser_settings", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings awscc_workspacesweb_browser_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcBrowserSettingsProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcBrowserSettingsProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_workspacesweb_browser_settings',
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
        this._browserPolicy = config.browserPolicy;
        this._customerManagedKey = config.customerManagedKey;
        this._tags.internalValue = config.tags;
        this._webContentFilteringPolicy.internalValue = config.webContentFilteringPolicy;
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

    // browser_policy - computed: true, optional: true, required: false
    private _browserPolicy?: string; 
    public get browserPolicy() {
        return this.getStringAttribute('browser_policy');
    }
    public set browserPolicy(value: string) {
        this._browserPolicy = value;
    }
    public resetBrowserPolicy() {
        this._browserPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get browserPolicyInput() {
        return this._browserPolicy;
    }

    // browser_settings_arn - computed: true, optional: false, required: false
    public get browserSettingsArn() {
        return this.getStringAttribute('browser_settings_arn');
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcBrowserSettings.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcBrowserSettings.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // web_content_filtering_policy - computed: true, optional: true, required: false
    private _webContentFilteringPolicy = new CcBrowserSettings.WebContentFilteringPolicyPropertyOutputReference(this, "web_content_filtering_policy");
    public get webContentFilteringPolicy() {
        return this._webContentFilteringPolicy;
    }
    public putWebContentFilteringPolicy(value: CcBrowserSettings.WebContentFilteringPolicyProperty) {
        this._webContentFilteringPolicy.internalValue = value;
    }
    public resetWebContentFilteringPolicy() {
        this._webContentFilteringPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webContentFilteringPolicyInput() {
        return this._webContentFilteringPolicy.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            additional_encryption_context: cdktn.hashMapper(cdktn.stringToTerraform)(this._additionalEncryptionContext),
            browser_policy: cdktn.stringToTerraform(this._browserPolicy),
            customer_managed_key: cdktn.stringToTerraform(this._customerManagedKey),
            tags: cdktn.listMapper(ccBrowserSettingsTagPropertyToTerraform, false)(this._tags.internalValue),
            web_content_filtering_policy: ccBrowserSettingsWebContentFilteringPolicyPropertyToTerraform(this._webContentFilteringPolicy.internalValue),
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
            browser_policy: {
                value: cdktn.stringToHclTerraform(this._browserPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            customer_managed_key: {
                value: cdktn.stringToHclTerraform(this._customerManagedKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccBrowserSettingsTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcBrowserSettings.TagPropertyList",
            },
            web_content_filtering_policy: {
                value: ccBrowserSettingsWebContentFilteringPolicyPropertyToHclTerraform(this._webContentFilteringPolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBrowserSettings.WebContentFilteringPolicyProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccBrowserSettingsTagPropertyToTerraform(struct?: CcBrowserSettings.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBrowserSettingsTagPropertyToHclTerraform(struct?: CcBrowserSettings.TagProperty | cdktn.IResolvable): any {
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


export function ccBrowserSettingsWebContentFilteringPolicyPropertyToTerraform(struct?: CcBrowserSettings.WebContentFilteringPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_urls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedUrls),
        blocked_categories: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.blockedCategories),
        blocked_urls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.blockedUrls),
    }
}


export function ccBrowserSettingsWebContentFilteringPolicyPropertyToHclTerraform(struct?: CcBrowserSettings.WebContentFilteringPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_urls: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedUrls),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        blocked_categories: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.blockedCategories),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        blocked_urls: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.blockedUrls),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcBrowserSettings {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#key CcBrowserSettings#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#value CcBrowserSettings#value}
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
export interface WebContentFilteringPolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#allowed_urls CcBrowserSettings#allowed_urls}
    */
    readonly allowedUrls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#blocked_categories CcBrowserSettings#blocked_categories}
    */
    readonly blockedCategories?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_browser_settings#blocked_urls CcBrowserSettings#blocked_urls}
    */
    readonly blockedUrls?: string[];
}
export class WebContentFilteringPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WebContentFilteringPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedUrls !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedUrls = this._allowedUrls;
        }
        if (this._blockedCategories !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockedCategories = this._blockedCategories;
        }
        if (this._blockedUrls !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockedUrls = this._blockedUrls;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WebContentFilteringPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedUrls = undefined;
            this._blockedCategories = undefined;
            this._blockedUrls = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedUrls = value.allowedUrls;
            this._blockedCategories = value.blockedCategories;
            this._blockedUrls = value.blockedUrls;
        }
    }

    // allowed_urls - computed: true, optional: true, required: false
    private _allowedUrls?: string[]; 
    public get allowedUrls() {
        return this.getListAttribute('allowed_urls');
    }
    public set allowedUrls(value: string[]) {
        this._allowedUrls = value;
    }
    public resetAllowedUrls() {
        this._allowedUrls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedUrlsInput() {
        return this._allowedUrls;
    }

    // blocked_categories - computed: true, optional: true, required: false
    private _blockedCategories?: string[]; 
    public get blockedCategories() {
        return this.getListAttribute('blocked_categories');
    }
    public set blockedCategories(value: string[]) {
        this._blockedCategories = value;
    }
    public resetBlockedCategories() {
        this._blockedCategories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockedCategoriesInput() {
        return this._blockedCategories;
    }

    // blocked_urls - computed: true, optional: true, required: false
    private _blockedUrls?: string[]; 
    public get blockedUrls() {
        return this.getListAttribute('blocked_urls');
    }
    public set blockedUrls(value: string[]) {
        this._blockedUrls = value;
    }
    public resetBlockedUrls() {
        this._blockedUrls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockedUrlsInput() {
        return this._blockedUrls;
    }
}
}
