// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAPIKeyProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#description CcAPIKey#description}
    */
    readonly description?: string;
    /**
    * The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#expire_time CcAPIKey#expire_time}
    */
    readonly expireTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#force_delete CcAPIKey#force_delete}
    */
    readonly forceDelete?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#force_update CcAPIKey#force_update}
    */
    readonly forceUpdate?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#key_name CcAPIKey#key_name}
    */
    readonly keyName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#no_expiry CcAPIKey#no_expiry}
    */
    readonly noExpiry?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#restrictions CcAPIKey#restrictions}
    */
    readonly restrictions: CcAPIKey.ApiKeyRestrictionsProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#tags CcAPIKey#tags}
    */
    readonly tags?: CcAPIKey.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key awscc_location_api_key}
*/
export class CcAPIKey extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_location_api_key";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAPIKey resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAPIKey to import
    * @param importFromId The id of the existing CcAPIKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAPIKey to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_location_api_key", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key awscc_location_api_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAPIKeyProps
    */
    public constructor(scope: Construct, id: string, config: CcAPIKeyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_location_api_key',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._description = config.description;
        this._expireTime = config.expireTime;
        this._forceDelete = config.forceDelete;
        this._forceUpdate = config.forceUpdate;
        this._keyName = config.keyName;
        this._noExpiry = config.noExpiry;
        this._restrictions.internalValue = config.restrictions;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // create_time - computed: true, optional: false, required: false
    public get createTime() {
        return this.getStringAttribute('create_time');
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

    // expire_time - computed: true, optional: true, required: false
    private _expireTime?: string; 
    public get expireTime() {
        return this.getStringAttribute('expire_time');
    }
    public set expireTime(value: string) {
        this._expireTime = value;
    }
    public resetExpireTime() {
        this._expireTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expireTimeInput() {
        return this._expireTime;
    }

    // force_delete - computed: true, optional: true, required: false
    private _forceDelete?: boolean | cdktn.IResolvable; 
    public get forceDelete() {
        return this.getBooleanAttribute('force_delete');
    }
    public set forceDelete(value: boolean | cdktn.IResolvable) {
        this._forceDelete = value;
    }
    public resetForceDelete() {
        this._forceDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceDeleteInput() {
        return this._forceDelete;
    }

    // force_update - computed: true, optional: true, required: false
    private _forceUpdate?: boolean | cdktn.IResolvable; 
    public get forceUpdate() {
        return this.getBooleanAttribute('force_update');
    }
    public set forceUpdate(value: boolean | cdktn.IResolvable) {
        this._forceUpdate = value;
    }
    public resetForceUpdate() {
        this._forceUpdate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceUpdateInput() {
        return this._forceUpdate;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // key_arn - computed: true, optional: false, required: false
    public get keyArn() {
        return this.getStringAttribute('key_arn');
    }

    // key_name - computed: false, optional: false, required: true
    private _keyName?: string; 
    public get keyName() {
        return this.getStringAttribute('key_name');
    }
    public set keyName(value: string) {
        this._keyName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyNameInput() {
        return this._keyName;
    }

    // no_expiry - computed: true, optional: true, required: false
    private _noExpiry?: boolean | cdktn.IResolvable; 
    public get noExpiry() {
        return this.getBooleanAttribute('no_expiry');
    }
    public set noExpiry(value: boolean | cdktn.IResolvable) {
        this._noExpiry = value;
    }
    public resetNoExpiry() {
        this._noExpiry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noExpiryInput() {
        return this._noExpiry;
    }

    // restrictions - computed: false, optional: false, required: true
    private _restrictions = new CcAPIKey.ApiKeyRestrictionsPropertyOutputReference(this, "restrictions");
    public get restrictions() {
        return this._restrictions;
    }
    public putRestrictions(value: CcAPIKey.ApiKeyRestrictionsProperty) {
        this._restrictions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictionsInput() {
        return this._restrictions.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAPIKey.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAPIKey.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // update_time - computed: true, optional: false, required: false
    public get updateTime() {
        return this.getStringAttribute('update_time');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            expire_time: cdktn.stringToTerraform(this._expireTime),
            force_delete: cdktn.booleanToTerraform(this._forceDelete),
            force_update: cdktn.booleanToTerraform(this._forceUpdate),
            key_name: cdktn.stringToTerraform(this._keyName),
            no_expiry: cdktn.booleanToTerraform(this._noExpiry),
            restrictions: ccAPIKeyApiKeyRestrictionsPropertyToTerraform(this._restrictions.internalValue),
            tags: cdktn.listMapper(ccAPIKeyTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            expire_time: {
                value: cdktn.stringToHclTerraform(this._expireTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            force_delete: {
                value: cdktn.booleanToHclTerraform(this._forceDelete),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            force_update: {
                value: cdktn.booleanToHclTerraform(this._forceUpdate),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            key_name: {
                value: cdktn.stringToHclTerraform(this._keyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            no_expiry: {
                value: cdktn.booleanToHclTerraform(this._noExpiry),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            restrictions: {
                value: ccAPIKeyApiKeyRestrictionsPropertyToHclTerraform(this._restrictions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAPIKey.ApiKeyRestrictionsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAPIKeyTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAPIKey.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAPIKeyAndroidAppPropertyToTerraform(struct?: CcAPIKey.AndroidAppProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_fingerprint: cdktn.stringToTerraform(struct!.certificateFingerprint),
        package: cdktn.stringToTerraform(struct!.package),
    }
}


export function ccAPIKeyAndroidAppPropertyToHclTerraform(struct?: CcAPIKey.AndroidAppProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_fingerprint: {
            value: cdktn.stringToHclTerraform(struct!.certificateFingerprint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        package: {
            value: cdktn.stringToHclTerraform(struct!.package),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAPIKeyAppleAppPropertyToTerraform(struct?: CcAPIKey.AppleAppProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bundle_id: cdktn.stringToTerraform(struct!.bundleId),
    }
}


export function ccAPIKeyAppleAppPropertyToHclTerraform(struct?: CcAPIKey.AppleAppProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bundle_id: {
            value: cdktn.stringToHclTerraform(struct!.bundleId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAPIKeyApiKeyRestrictionsPropertyToTerraform(struct?: CcAPIKey.ApiKeyRestrictionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allow_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowActions),
        allow_android_apps: cdktn.listMapper(ccAPIKeyAndroidAppPropertyToTerraform, false)(struct!.allowAndroidApps),
        allow_apple_apps: cdktn.listMapper(ccAPIKeyAppleAppPropertyToTerraform, false)(struct!.allowAppleApps),
        allow_referers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowReferers),
        allow_resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowResources),
    }
}


export function ccAPIKeyApiKeyRestrictionsPropertyToHclTerraform(struct?: CcAPIKey.ApiKeyRestrictionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allow_actions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowActions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allow_android_apps: {
            value: cdktn.listMapperHcl(ccAPIKeyAndroidAppPropertyToHclTerraform, false)(struct!.allowAndroidApps),
            isBlock: true,
            type: "list",
            storageClassType: "AndroidAppPropertyList",
        },
        allow_apple_apps: {
            value: cdktn.listMapperHcl(ccAPIKeyAppleAppPropertyToHclTerraform, false)(struct!.allowAppleApps),
            isBlock: true,
            type: "list",
            storageClassType: "AppleAppPropertyList",
        },
        allow_referers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowReferers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allow_resources: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowResources),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAPIKeyTagPropertyToTerraform(struct?: CcAPIKey.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAPIKeyTagPropertyToHclTerraform(struct?: CcAPIKey.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAPIKey {
export interface AndroidAppProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#certificate_fingerprint CcAPIKey#certificate_fingerprint}
    */
    readonly certificateFingerprint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#package CcAPIKey#package}
    */
    readonly package?: string;
}
export class AndroidAppPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AndroidAppProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateFingerprint !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateFingerprint = this._certificateFingerprint;
        }
        if (this._package !== undefined) {
            hasAnyValues = true;
            internalValueResult.package = this._package;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AndroidAppProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateFingerprint = undefined;
            this._package = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateFingerprint = value.certificateFingerprint;
            this._package = value.package;
        }
    }

    // certificate_fingerprint - computed: true, optional: true, required: false
    private _certificateFingerprint?: string; 
    public get certificateFingerprint() {
        return this.getStringAttribute('certificate_fingerprint');
    }
    public set certificateFingerprint(value: string) {
        this._certificateFingerprint = value;
    }
    public resetCertificateFingerprint() {
        this._certificateFingerprint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateFingerprintInput() {
        return this._certificateFingerprint;
    }

    // package - computed: true, optional: true, required: false
    private _package?: string; 
    public get package() {
        return this.getStringAttribute('package');
    }
    public set package(value: string) {
        this._package = value;
    }
    public resetPackage() {
        this._package = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packageInput() {
        return this._package;
    }
}

export class AndroidAppPropertyList extends cdktn.ComplexList {
    public internalValue? : AndroidAppProperty[] | cdktn.IResolvable

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
    public get(index: number): AndroidAppPropertyOutputReference {
        return new AndroidAppPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AppleAppProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#bundle_id CcAPIKey#bundle_id}
    */
    readonly bundleId?: string;
}
export class AppleAppPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AppleAppProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bundleId !== undefined) {
            hasAnyValues = true;
            internalValueResult.bundleId = this._bundleId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AppleAppProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bundleId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bundleId = value.bundleId;
        }
    }

    // bundle_id - computed: true, optional: true, required: false
    private _bundleId?: string; 
    public get bundleId() {
        return this.getStringAttribute('bundle_id');
    }
    public set bundleId(value: string) {
        this._bundleId = value;
    }
    public resetBundleId() {
        this._bundleId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bundleIdInput() {
        return this._bundleId;
    }
}

export class AppleAppPropertyList extends cdktn.ComplexList {
    public internalValue? : AppleAppProperty[] | cdktn.IResolvable

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
    public get(index: number): AppleAppPropertyOutputReference {
        return new AppleAppPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ApiKeyRestrictionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#allow_actions CcAPIKey#allow_actions}
    */
    readonly allowActions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#allow_android_apps CcAPIKey#allow_android_apps}
    */
    readonly allowAndroidApps?: AndroidAppProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#allow_apple_apps CcAPIKey#allow_apple_apps}
    */
    readonly allowAppleApps?: AppleAppProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#allow_referers CcAPIKey#allow_referers}
    */
    readonly allowReferers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#allow_resources CcAPIKey#allow_resources}
    */
    readonly allowResources: string[];
}
export class ApiKeyRestrictionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApiKeyRestrictionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowActions !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowActions = this._allowActions;
        }
        if (this._allowAndroidApps?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowAndroidApps = this._allowAndroidApps?.internalValue;
        }
        if (this._allowAppleApps?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowAppleApps = this._allowAppleApps?.internalValue;
        }
        if (this._allowReferers !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowReferers = this._allowReferers;
        }
        if (this._allowResources !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowResources = this._allowResources;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApiKeyRestrictionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowActions = undefined;
            this._allowAndroidApps.internalValue = undefined;
            this._allowAppleApps.internalValue = undefined;
            this._allowReferers = undefined;
            this._allowResources = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowActions = value.allowActions;
            this._allowAndroidApps.internalValue = value.allowAndroidApps;
            this._allowAppleApps.internalValue = value.allowAppleApps;
            this._allowReferers = value.allowReferers;
            this._allowResources = value.allowResources;
        }
    }

    // allow_actions - computed: false, optional: false, required: true
    private _allowActions?: string[]; 
    public get allowActions() {
        return this.getListAttribute('allow_actions');
    }
    public set allowActions(value: string[]) {
        this._allowActions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get allowActionsInput() {
        return this._allowActions;
    }

    // allow_android_apps - computed: true, optional: true, required: false
    private _allowAndroidApps = new AndroidAppPropertyList(this, "allow_android_apps", false);
    public get allowAndroidApps() {
        return this._allowAndroidApps;
    }
    public putAllowAndroidApps(value: AndroidAppProperty[] | cdktn.IResolvable) {
        this._allowAndroidApps.internalValue = value;
    }
    public resetAllowAndroidApps() {
        this._allowAndroidApps.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowAndroidAppsInput() {
        return this._allowAndroidApps.internalValue;
    }

    // allow_apple_apps - computed: true, optional: true, required: false
    private _allowAppleApps = new AppleAppPropertyList(this, "allow_apple_apps", false);
    public get allowAppleApps() {
        return this._allowAppleApps;
    }
    public putAllowAppleApps(value: AppleAppProperty[] | cdktn.IResolvable) {
        this._allowAppleApps.internalValue = value;
    }
    public resetAllowAppleApps() {
        this._allowAppleApps.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowAppleAppsInput() {
        return this._allowAppleApps.internalValue;
    }

    // allow_referers - computed: true, optional: true, required: false
    private _allowReferers?: string[]; 
    public get allowReferers() {
        return this.getListAttribute('allow_referers');
    }
    public set allowReferers(value: string[]) {
        this._allowReferers = value;
    }
    public resetAllowReferers() {
        this._allowReferers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowReferersInput() {
        return this._allowReferers;
    }

    // allow_resources - computed: false, optional: false, required: true
    private _allowResources?: string[]; 
    public get allowResources() {
        return this.getListAttribute('allow_resources');
    }
    public set allowResources(value: string[]) {
        this._allowResources = value;
    }
    // Temporarily expose input value. Use with caution.
    public get allowResourcesInput() {
        return this._allowResources;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#key CcAPIKey#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_api_key#value CcAPIKey#value}
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
