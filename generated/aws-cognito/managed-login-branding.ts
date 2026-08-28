// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_managed_login_branding

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcManagedLoginBrandingProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_managed_login_branding#assets CcManagedLoginBranding#assets}
    */
    readonly assets?: CcManagedLoginBranding.AssetTypeProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_managed_login_branding#client_id CcManagedLoginBranding#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_managed_login_branding#return_merged_resources CcManagedLoginBranding#return_merged_resources}
    */
    readonly returnMergedResources?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_managed_login_branding#settings CcManagedLoginBranding#settings}
    */
    readonly settings?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_managed_login_branding#use_cognito_provided_values CcManagedLoginBranding#use_cognito_provided_values}
    */
    readonly useCognitoProvidedValues?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_managed_login_branding#user_pool_id CcManagedLoginBranding#user_pool_id}
    */
    readonly userPoolId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_managed_login_branding awscc_cognito_managed_login_branding}
*/
export class CcManagedLoginBranding extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cognito_managed_login_branding";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcManagedLoginBranding resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcManagedLoginBranding to import
    * @param importFromId The id of the existing CcManagedLoginBranding that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_managed_login_branding#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcManagedLoginBranding to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_managed_login_branding", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_managed_login_branding awscc_cognito_managed_login_branding} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcManagedLoginBrandingProps
    */
    public constructor(scope: Construct, id: string, config: CcManagedLoginBrandingProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cognito_managed_login_branding',
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
        this._assets.internalValue = config.assets;
        this._clientId = config.clientId;
        this._returnMergedResources = config.returnMergedResources;
        this._settings = config.settings;
        this._useCognitoProvidedValues = config.useCognitoProvidedValues;
        this._userPoolId = config.userPoolId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // assets - computed: true, optional: true, required: false
    private _assets = new CcManagedLoginBranding.AssetTypePropertyList(this, "assets", false);
    public get assets() {
        return this._assets;
    }
    public putAssets(value: CcManagedLoginBranding.AssetTypeProperty[] | cdktn.IResolvable) {
        this._assets.internalValue = value;
    }
    public resetAssets() {
        this._assets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetsInput() {
        return this._assets.internalValue;
    }

    // client_id - computed: true, optional: true, required: false
    private _clientId?: string; 
    public get clientId() {
        return this.getStringAttribute('client_id');
    }
    public set clientId(value: string) {
        this._clientId = value;
    }
    public resetClientId() {
        this._clientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
        return this._clientId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // managed_login_branding_id - computed: true, optional: false, required: false
    public get managedLoginBrandingId() {
        return this.getStringAttribute('managed_login_branding_id');
    }

    // return_merged_resources - computed: true, optional: true, required: false
    private _returnMergedResources?: boolean | cdktn.IResolvable; 
    public get returnMergedResources() {
        return this.getBooleanAttribute('return_merged_resources');
    }
    public set returnMergedResources(value: boolean | cdktn.IResolvable) {
        this._returnMergedResources = value;
    }
    public resetReturnMergedResources() {
        this._returnMergedResources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get returnMergedResourcesInput() {
        return this._returnMergedResources;
    }

    // settings - computed: true, optional: true, required: false
    private _settings?: string; 
    public get settings() {
        return this.getStringAttribute('settings');
    }
    public set settings(value: string) {
        this._settings = value;
    }
    public resetSettings() {
        this._settings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get settingsInput() {
        return this._settings;
    }

    // use_cognito_provided_values - computed: true, optional: true, required: false
    private _useCognitoProvidedValues?: boolean | cdktn.IResolvable; 
    public get useCognitoProvidedValues() {
        return this.getBooleanAttribute('use_cognito_provided_values');
    }
    public set useCognitoProvidedValues(value: boolean | cdktn.IResolvable) {
        this._useCognitoProvidedValues = value;
    }
    public resetUseCognitoProvidedValues() {
        this._useCognitoProvidedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useCognitoProvidedValuesInput() {
        return this._useCognitoProvidedValues;
    }

    // user_pool_id - computed: false, optional: false, required: true
    private _userPoolId?: string; 
    public get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
        this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
        return this._userPoolId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            assets: cdktn.listMapper(ccManagedLoginBrandingAssetTypePropertyToTerraform, false)(this._assets.internalValue),
            client_id: cdktn.stringToTerraform(this._clientId),
            return_merged_resources: cdktn.booleanToTerraform(this._returnMergedResources),
            settings: cdktn.stringToTerraform(this._settings),
            use_cognito_provided_values: cdktn.booleanToTerraform(this._useCognitoProvidedValues),
            user_pool_id: cdktn.stringToTerraform(this._userPoolId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            assets: {
                value: cdktn.listMapperHcl(ccManagedLoginBrandingAssetTypePropertyToHclTerraform, false)(this._assets.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcManagedLoginBranding.AssetTypePropertyList",
            },
            client_id: {
                value: cdktn.stringToHclTerraform(this._clientId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            return_merged_resources: {
                value: cdktn.booleanToHclTerraform(this._returnMergedResources),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            settings: {
                value: cdktn.stringToHclTerraform(this._settings),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            use_cognito_provided_values: {
                value: cdktn.booleanToHclTerraform(this._useCognitoProvidedValues),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            user_pool_id: {
                value: cdktn.stringToHclTerraform(this._userPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccManagedLoginBrandingAssetTypePropertyToTerraform(struct?: CcManagedLoginBranding.AssetTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bytes: cdktn.stringToTerraform(struct!.bytes),
        category: cdktn.stringToTerraform(struct!.category),
        color_mode: cdktn.stringToTerraform(struct!.colorMode),
        extension: cdktn.stringToTerraform(struct!.extension),
        resource_id: cdktn.stringToTerraform(struct!.resourceId),
    }
}


export function ccManagedLoginBrandingAssetTypePropertyToHclTerraform(struct?: CcManagedLoginBranding.AssetTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bytes: {
            value: cdktn.stringToHclTerraform(struct!.bytes),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        category: {
            value: cdktn.stringToHclTerraform(struct!.category),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        color_mode: {
            value: cdktn.stringToHclTerraform(struct!.colorMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        extension: {
            value: cdktn.stringToHclTerraform(struct!.extension),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_id: {
            value: cdktn.stringToHclTerraform(struct!.resourceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcManagedLoginBranding {
export interface AssetTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_managed_login_branding#bytes CcManagedLoginBranding#bytes}
    */
    readonly bytes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_managed_login_branding#category CcManagedLoginBranding#category}
    */
    readonly category?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_managed_login_branding#color_mode CcManagedLoginBranding#color_mode}
    */
    readonly colorMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_managed_login_branding#extension CcManagedLoginBranding#extension}
    */
    readonly extension?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_managed_login_branding#resource_id CcManagedLoginBranding#resource_id}
    */
    readonly resourceId?: string;
}
export class AssetTypePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssetTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bytes !== undefined) {
            hasAnyValues = true;
            internalValueResult.bytes = this._bytes;
        }
        if (this._category !== undefined) {
            hasAnyValues = true;
            internalValueResult.category = this._category;
        }
        if (this._colorMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.colorMode = this._colorMode;
        }
        if (this._extension !== undefined) {
            hasAnyValues = true;
            internalValueResult.extension = this._extension;
        }
        if (this._resourceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceId = this._resourceId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bytes = undefined;
            this._category = undefined;
            this._colorMode = undefined;
            this._extension = undefined;
            this._resourceId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bytes = value.bytes;
            this._category = value.category;
            this._colorMode = value.colorMode;
            this._extension = value.extension;
            this._resourceId = value.resourceId;
        }
    }

    // bytes - computed: true, optional: true, required: false
    private _bytes?: string; 
    public get bytes() {
        return this.getStringAttribute('bytes');
    }
    public set bytes(value: string) {
        this._bytes = value;
    }
    public resetBytes() {
        this._bytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bytesInput() {
        return this._bytes;
    }

    // category - computed: true, optional: true, required: false
    private _category?: string; 
    public get category() {
        return this.getStringAttribute('category');
    }
    public set category(value: string) {
        this._category = value;
    }
    public resetCategory() {
        this._category = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get categoryInput() {
        return this._category;
    }

    // color_mode - computed: true, optional: true, required: false
    private _colorMode?: string; 
    public get colorMode() {
        return this.getStringAttribute('color_mode');
    }
    public set colorMode(value: string) {
        this._colorMode = value;
    }
    public resetColorMode() {
        this._colorMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get colorModeInput() {
        return this._colorMode;
    }

    // extension - computed: true, optional: true, required: false
    private _extension?: string; 
    public get extension() {
        return this.getStringAttribute('extension');
    }
    public set extension(value: string) {
        this._extension = value;
    }
    public resetExtension() {
        this._extension = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extensionInput() {
        return this._extension;
    }

    // resource_id - computed: true, optional: true, required: false
    private _resourceId?: string; 
    public get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
        this._resourceId = value;
    }
    public resetResourceId() {
        this._resourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
        return this._resourceId;
    }
}

export class AssetTypePropertyList extends cdktn.ComplexList {
    public internalValue? : AssetTypeProperty[] | cdktn.IResolvable

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
    public get(index: number): AssetTypePropertyOutputReference {
        return new AssetTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
