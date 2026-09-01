// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAssetProps extends cdktn.TerraformMetaArguments {
    /**
    * A description for the asset
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#asset_description CcAsset#asset_description}
    */
    readonly assetDescription?: string;
    /**
    * The External ID of the asset
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#asset_external_id CcAsset#asset_external_id}
    */
    readonly assetExternalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#asset_hierarchies CcAsset#asset_hierarchies}
    */
    readonly assetHierarchies?: CcAsset.AssetHierarchyProperty[] | cdktn.IResolvable;
    /**
    * The ID of the asset model from which to create the asset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#asset_model_id CcAsset#asset_model_id}
    */
    readonly assetModelId: string;
    /**
    * A unique, friendly name for the asset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#asset_name CcAsset#asset_name}
    */
    readonly assetName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#asset_properties CcAsset#asset_properties}
    */
    readonly assetProperties?: CcAsset.AssetPropertyProperty[] | cdktn.IResolvable;
    /**
    * A list of key-value pairs that contain metadata for the asset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#tags CcAsset#tags}
    */
    readonly tags?: CcAsset.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset awscc_iotsitewise_asset}
*/
export class CcAsset extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotsitewise_asset";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAsset resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAsset to import
    * @param importFromId The id of the existing CcAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAsset to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotsitewise_asset", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset awscc_iotsitewise_asset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAssetProps
    */
    public constructor(scope: Construct, id: string, config: CcAssetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotsitewise_asset',
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
        this._assetDescription = config.assetDescription;
        this._assetExternalId = config.assetExternalId;
        this._assetHierarchies.internalValue = config.assetHierarchies;
        this._assetModelId = config.assetModelId;
        this._assetName = config.assetName;
        this._assetProperties.internalValue = config.assetProperties;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // asset_arn - computed: true, optional: false, required: false
    public get assetArn() {
        return this.getStringAttribute('asset_arn');
    }

    // asset_description - computed: true, optional: true, required: false
    private _assetDescription?: string; 
    public get assetDescription() {
        return this.getStringAttribute('asset_description');
    }
    public set assetDescription(value: string) {
        this._assetDescription = value;
    }
    public resetAssetDescription() {
        this._assetDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetDescriptionInput() {
        return this._assetDescription;
    }

    // asset_external_id - computed: true, optional: true, required: false
    private _assetExternalId?: string; 
    public get assetExternalId() {
        return this.getStringAttribute('asset_external_id');
    }
    public set assetExternalId(value: string) {
        this._assetExternalId = value;
    }
    public resetAssetExternalId() {
        this._assetExternalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetExternalIdInput() {
        return this._assetExternalId;
    }

    // asset_hierarchies - computed: true, optional: true, required: false
    private _assetHierarchies = new CcAsset.AssetHierarchyPropertyList(this, "asset_hierarchies", false);
    public get assetHierarchies() {
        return this._assetHierarchies;
    }
    public putAssetHierarchies(value: CcAsset.AssetHierarchyProperty[] | cdktn.IResolvable) {
        this._assetHierarchies.internalValue = value;
    }
    public resetAssetHierarchies() {
        this._assetHierarchies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetHierarchiesInput() {
        return this._assetHierarchies.internalValue;
    }

    // asset_id - computed: true, optional: false, required: false
    public get assetId() {
        return this.getStringAttribute('asset_id');
    }

    // asset_model_id - computed: false, optional: false, required: true
    private _assetModelId?: string; 
    public get assetModelId() {
        return this.getStringAttribute('asset_model_id');
    }
    public set assetModelId(value: string) {
        this._assetModelId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get assetModelIdInput() {
        return this._assetModelId;
    }

    // asset_name - computed: false, optional: false, required: true
    private _assetName?: string; 
    public get assetName() {
        return this.getStringAttribute('asset_name');
    }
    public set assetName(value: string) {
        this._assetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get assetNameInput() {
        return this._assetName;
    }

    // asset_properties - computed: true, optional: true, required: false
    private _assetProperties = new CcAsset.AssetPropertyPropertyList(this, "asset_properties", false);
    public get assetProperties() {
        return this._assetProperties;
    }
    public putAssetProperties(value: CcAsset.AssetPropertyProperty[] | cdktn.IResolvable) {
        this._assetProperties.internalValue = value;
    }
    public resetAssetProperties() {
        this._assetProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetPropertiesInput() {
        return this._assetProperties.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAsset.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAsset.TagProperty[] | cdktn.IResolvable) {
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
            asset_description: cdktn.stringToTerraform(this._assetDescription),
            asset_external_id: cdktn.stringToTerraform(this._assetExternalId),
            asset_hierarchies: cdktn.listMapper(ccAssetAssetHierarchyPropertyToTerraform, false)(this._assetHierarchies.internalValue),
            asset_model_id: cdktn.stringToTerraform(this._assetModelId),
            asset_name: cdktn.stringToTerraform(this._assetName),
            asset_properties: cdktn.listMapper(ccAssetAssetPropertyPropertyToTerraform, false)(this._assetProperties.internalValue),
            tags: cdktn.listMapper(ccAssetTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            asset_description: {
                value: cdktn.stringToHclTerraform(this._assetDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            asset_external_id: {
                value: cdktn.stringToHclTerraform(this._assetExternalId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            asset_hierarchies: {
                value: cdktn.listMapperHcl(ccAssetAssetHierarchyPropertyToHclTerraform, false)(this._assetHierarchies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAsset.AssetHierarchyPropertyList",
            },
            asset_model_id: {
                value: cdktn.stringToHclTerraform(this._assetModelId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            asset_name: {
                value: cdktn.stringToHclTerraform(this._assetName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            asset_properties: {
                value: cdktn.listMapperHcl(ccAssetAssetPropertyPropertyToHclTerraform, false)(this._assetProperties.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAsset.AssetPropertyPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAssetTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAsset.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAssetAssetHierarchyPropertyToTerraform(struct?: CcAsset.AssetHierarchyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        child_asset_id: cdktn.stringToTerraform(struct!.childAssetId),
        external_id: cdktn.stringToTerraform(struct!.externalId),
        id: cdktn.stringToTerraform(struct!.id),
        logical_id: cdktn.stringToTerraform(struct!.logicalId),
    }
}


export function ccAssetAssetHierarchyPropertyToHclTerraform(struct?: CcAsset.AssetHierarchyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        child_asset_id: {
            value: cdktn.stringToHclTerraform(struct!.childAssetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        external_id: {
            value: cdktn.stringToHclTerraform(struct!.externalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        logical_id: {
            value: cdktn.stringToHclTerraform(struct!.logicalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetAssetPropertyPropertyToTerraform(struct?: CcAsset.AssetPropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alias: cdktn.stringToTerraform(struct!.alias),
        external_id: cdktn.stringToTerraform(struct!.externalId),
        id: cdktn.stringToTerraform(struct!.id),
        logical_id: cdktn.stringToTerraform(struct!.logicalId),
        notification_state: cdktn.stringToTerraform(struct!.notificationState),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccAssetAssetPropertyPropertyToHclTerraform(struct?: CcAsset.AssetPropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alias: {
            value: cdktn.stringToHclTerraform(struct!.alias),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        external_id: {
            value: cdktn.stringToHclTerraform(struct!.externalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        logical_id: {
            value: cdktn.stringToHclTerraform(struct!.logicalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        notification_state: {
            value: cdktn.stringToHclTerraform(struct!.notificationState),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetTagPropertyToTerraform(struct?: CcAsset.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAssetTagPropertyToHclTerraform(struct?: CcAsset.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAsset {
export interface AssetHierarchyProperty {
    /**
    * The ID of the child asset to be associated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#child_asset_id CcAsset#child_asset_id}
    */
    readonly childAssetId?: string;
    /**
    * String-friendly customer provided external ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#external_id CcAsset#external_id}
    */
    readonly externalId?: string;
    /**
    * Customer provided actual UUID for property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#id CcAsset#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The LogicalID of a hierarchy in the parent asset's model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#logical_id CcAsset#logical_id}
    */
    readonly logicalId?: string;
}
export class AssetHierarchyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssetHierarchyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._childAssetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.childAssetId = this._childAssetId;
        }
        if (this._externalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalId = this._externalId;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._logicalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.logicalId = this._logicalId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetHierarchyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._childAssetId = undefined;
            this._externalId = undefined;
            this._id = undefined;
            this._logicalId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._childAssetId = value.childAssetId;
            this._externalId = value.externalId;
            this._id = value.id;
            this._logicalId = value.logicalId;
        }
    }

    // child_asset_id - computed: true, optional: true, required: false
    private _childAssetId?: string; 
    public get childAssetId() {
        return this.getStringAttribute('child_asset_id');
    }
    public set childAssetId(value: string) {
        this._childAssetId = value;
    }
    public resetChildAssetId() {
        this._childAssetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get childAssetIdInput() {
        return this._childAssetId;
    }

    // external_id - computed: true, optional: true, required: false
    private _externalId?: string; 
    public get externalId() {
        return this.getStringAttribute('external_id');
    }
    public set externalId(value: string) {
        this._externalId = value;
    }
    public resetExternalId() {
        this._externalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get externalIdInput() {
        return this._externalId;
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // logical_id - computed: true, optional: true, required: false
    private _logicalId?: string; 
    public get logicalId() {
        return this.getStringAttribute('logical_id');
    }
    public set logicalId(value: string) {
        this._logicalId = value;
    }
    public resetLogicalId() {
        this._logicalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logicalIdInput() {
        return this._logicalId;
    }
}

export class AssetHierarchyPropertyList extends cdktn.ComplexList {
    public internalValue? : AssetHierarchyProperty[] | cdktn.IResolvable

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
    public get(index: number): AssetHierarchyPropertyOutputReference {
        return new AssetHierarchyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AssetPropertyProperty {
    /**
    * The property alias that identifies the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#alias CcAsset#alias}
    */
    readonly alias?: string;
    /**
    * String-friendly customer provided external ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#external_id CcAsset#external_id}
    */
    readonly externalId?: string;
    /**
    * Customer provided actual UUID for property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#id CcAsset#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Customer provided ID for property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#logical_id CcAsset#logical_id}
    */
    readonly logicalId?: string;
    /**
    * The MQTT notification state (ENABLED or DISABLED) for this asset property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#notification_state CcAsset#notification_state}
    */
    readonly notificationState?: string;
    /**
    * The unit of measure (such as Newtons or RPM) of the asset property. If you don't specify a value for this parameter, the service uses the value of the assetModelProperty in the asset model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#unit CcAsset#unit}
    */
    readonly unit?: string;
}
export class AssetPropertyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssetPropertyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alias !== undefined) {
            hasAnyValues = true;
            internalValueResult.alias = this._alias;
        }
        if (this._externalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalId = this._externalId;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._logicalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.logicalId = this._logicalId;
        }
        if (this._notificationState !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationState = this._notificationState;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetPropertyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alias = undefined;
            this._externalId = undefined;
            this._id = undefined;
            this._logicalId = undefined;
            this._notificationState = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alias = value.alias;
            this._externalId = value.externalId;
            this._id = value.id;
            this._logicalId = value.logicalId;
            this._notificationState = value.notificationState;
            this._unit = value.unit;
        }
    }

    // alias - computed: true, optional: true, required: false
    private _alias?: string; 
    public get alias() {
        return this.getStringAttribute('alias');
    }
    public set alias(value: string) {
        this._alias = value;
    }
    public resetAlias() {
        this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasInput() {
        return this._alias;
    }

    // external_id - computed: true, optional: true, required: false
    private _externalId?: string; 
    public get externalId() {
        return this.getStringAttribute('external_id');
    }
    public set externalId(value: string) {
        this._externalId = value;
    }
    public resetExternalId() {
        this._externalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get externalIdInput() {
        return this._externalId;
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // logical_id - computed: true, optional: true, required: false
    private _logicalId?: string; 
    public get logicalId() {
        return this.getStringAttribute('logical_id');
    }
    public set logicalId(value: string) {
        this._logicalId = value;
    }
    public resetLogicalId() {
        this._logicalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logicalIdInput() {
        return this._logicalId;
    }

    // notification_state - computed: true, optional: true, required: false
    private _notificationState?: string; 
    public get notificationState() {
        return this.getStringAttribute('notification_state');
    }
    public set notificationState(value: string) {
        this._notificationState = value;
    }
    public resetNotificationState() {
        this._notificationState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationStateInput() {
        return this._notificationState;
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }
}

export class AssetPropertyPropertyList extends cdktn.ComplexList {
    public internalValue? : AssetPropertyProperty[] | cdktn.IResolvable

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
    public get(index: number): AssetPropertyPropertyOutputReference {
        return new AssetPropertyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#key CcAsset#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_asset#value CcAsset#value}
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
