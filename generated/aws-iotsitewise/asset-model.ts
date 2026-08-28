// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAssetModelProps extends cdktn.TerraformMetaArguments {
    /**
    * The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#asset_model_composite_models CcAssetModel#asset_model_composite_models}
    */
    readonly assetModelCompositeModels?: CcAssetModel.AssetModelCompositeModelProperty[] | cdktn.IResolvable;
    /**
    * A description for the asset model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#asset_model_description CcAssetModel#asset_model_description}
    */
    readonly assetModelDescription?: string;
    /**
    * The external ID of the asset model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#asset_model_external_id CcAssetModel#asset_model_external_id}
    */
    readonly assetModelExternalId?: string;
    /**
    * The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. You can specify up to 10 hierarchies per asset model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#asset_model_hierarchies CcAssetModel#asset_model_hierarchies}
    */
    readonly assetModelHierarchies?: CcAssetModel.AssetModelHierarchyProperty[] | cdktn.IResolvable;
    /**
    * A unique, friendly name for the asset model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#asset_model_name CcAssetModel#asset_model_name}
    */
    readonly assetModelName: string;
    /**
    * The property definitions of the asset model. You can specify up to 200 properties per asset model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#asset_model_properties CcAssetModel#asset_model_properties}
    */
    readonly assetModelProperties?: CcAssetModel.AssetModelPropertiesProperty[] | cdktn.IResolvable;
    /**
    * The type of the asset model (ASSET_MODEL OR COMPONENT_MODEL or INTERFACE)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#asset_model_type CcAssetModel#asset_model_type}
    */
    readonly assetModelType?: string;
    /**
    * a list of asset model and interface relationships
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#enforced_asset_model_interface_relationships CcAssetModel#enforced_asset_model_interface_relationships}
    */
    readonly enforcedAssetModelInterfaceRelationships?: CcAssetModel.EnforcedAssetModelInterfaceRelationshipProperty[] | cdktn.IResolvable;
    /**
    * A list of key-value pairs that contain metadata for the asset model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#tags CcAssetModel#tags}
    */
    readonly tags?: CcAssetModel.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model awscc_iotsitewise_asset_model}
*/
export class CcAssetModel extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotsitewise_asset_model";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAssetModel resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAssetModel to import
    * @param importFromId The id of the existing CcAssetModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAssetModel to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotsitewise_asset_model", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model awscc_iotsitewise_asset_model} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAssetModelProps
    */
    public constructor(scope: Construct, id: string, config: CcAssetModelProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotsitewise_asset_model',
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
        this._assetModelCompositeModels.internalValue = config.assetModelCompositeModels;
        this._assetModelDescription = config.assetModelDescription;
        this._assetModelExternalId = config.assetModelExternalId;
        this._assetModelHierarchies.internalValue = config.assetModelHierarchies;
        this._assetModelName = config.assetModelName;
        this._assetModelProperties.internalValue = config.assetModelProperties;
        this._assetModelType = config.assetModelType;
        this._enforcedAssetModelInterfaceRelationships.internalValue = config.enforcedAssetModelInterfaceRelationships;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // asset_model_arn - computed: true, optional: false, required: false
    public get assetModelArn() {
        return this.getStringAttribute('asset_model_arn');
    }

    // asset_model_composite_models - computed: true, optional: true, required: false
    private _assetModelCompositeModels = new CcAssetModel.AssetModelCompositeModelPropertyList(this, "asset_model_composite_models", false);
    public get assetModelCompositeModels() {
        return this._assetModelCompositeModels;
    }
    public putAssetModelCompositeModels(value: CcAssetModel.AssetModelCompositeModelProperty[] | cdktn.IResolvable) {
        this._assetModelCompositeModels.internalValue = value;
    }
    public resetAssetModelCompositeModels() {
        this._assetModelCompositeModels.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetModelCompositeModelsInput() {
        return this._assetModelCompositeModels.internalValue;
    }

    // asset_model_description - computed: true, optional: true, required: false
    private _assetModelDescription?: string; 
    public get assetModelDescription() {
        return this.getStringAttribute('asset_model_description');
    }
    public set assetModelDescription(value: string) {
        this._assetModelDescription = value;
    }
    public resetAssetModelDescription() {
        this._assetModelDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetModelDescriptionInput() {
        return this._assetModelDescription;
    }

    // asset_model_external_id - computed: true, optional: true, required: false
    private _assetModelExternalId?: string; 
    public get assetModelExternalId() {
        return this.getStringAttribute('asset_model_external_id');
    }
    public set assetModelExternalId(value: string) {
        this._assetModelExternalId = value;
    }
    public resetAssetModelExternalId() {
        this._assetModelExternalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetModelExternalIdInput() {
        return this._assetModelExternalId;
    }

    // asset_model_hierarchies - computed: true, optional: true, required: false
    private _assetModelHierarchies = new CcAssetModel.AssetModelHierarchyPropertyList(this, "asset_model_hierarchies", false);
    public get assetModelHierarchies() {
        return this._assetModelHierarchies;
    }
    public putAssetModelHierarchies(value: CcAssetModel.AssetModelHierarchyProperty[] | cdktn.IResolvable) {
        this._assetModelHierarchies.internalValue = value;
    }
    public resetAssetModelHierarchies() {
        this._assetModelHierarchies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetModelHierarchiesInput() {
        return this._assetModelHierarchies.internalValue;
    }

    // asset_model_id - computed: true, optional: false, required: false
    public get assetModelId() {
        return this.getStringAttribute('asset_model_id');
    }

    // asset_model_name - computed: false, optional: false, required: true
    private _assetModelName?: string; 
    public get assetModelName() {
        return this.getStringAttribute('asset_model_name');
    }
    public set assetModelName(value: string) {
        this._assetModelName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get assetModelNameInput() {
        return this._assetModelName;
    }

    // asset_model_properties - computed: true, optional: true, required: false
    private _assetModelProperties = new CcAssetModel.AssetModelPropertiesPropertyList(this, "asset_model_properties", false);
    public get assetModelProperties() {
        return this._assetModelProperties;
    }
    public putAssetModelProperties(value: CcAssetModel.AssetModelPropertiesProperty[] | cdktn.IResolvable) {
        this._assetModelProperties.internalValue = value;
    }
    public resetAssetModelProperties() {
        this._assetModelProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetModelPropertiesInput() {
        return this._assetModelProperties.internalValue;
    }

    // asset_model_type - computed: true, optional: true, required: false
    private _assetModelType?: string; 
    public get assetModelType() {
        return this.getStringAttribute('asset_model_type');
    }
    public set assetModelType(value: string) {
        this._assetModelType = value;
    }
    public resetAssetModelType() {
        this._assetModelType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetModelTypeInput() {
        return this._assetModelType;
    }

    // enforced_asset_model_interface_relationships - computed: true, optional: true, required: false
    private _enforcedAssetModelInterfaceRelationships = new CcAssetModel.EnforcedAssetModelInterfaceRelationshipPropertyList(this, "enforced_asset_model_interface_relationships", false);
    public get enforcedAssetModelInterfaceRelationships() {
        return this._enforcedAssetModelInterfaceRelationships;
    }
    public putEnforcedAssetModelInterfaceRelationships(value: CcAssetModel.EnforcedAssetModelInterfaceRelationshipProperty[] | cdktn.IResolvable) {
        this._enforcedAssetModelInterfaceRelationships.internalValue = value;
    }
    public resetEnforcedAssetModelInterfaceRelationships() {
        this._enforcedAssetModelInterfaceRelationships.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforcedAssetModelInterfaceRelationshipsInput() {
        return this._enforcedAssetModelInterfaceRelationships.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAssetModel.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAssetModel.TagProperty[] | cdktn.IResolvable) {
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
            asset_model_composite_models: cdktn.listMapper(ccAssetModelAssetModelCompositeModelPropertyToTerraform, false)(this._assetModelCompositeModels.internalValue),
            asset_model_description: cdktn.stringToTerraform(this._assetModelDescription),
            asset_model_external_id: cdktn.stringToTerraform(this._assetModelExternalId),
            asset_model_hierarchies: cdktn.listMapper(ccAssetModelAssetModelHierarchyPropertyToTerraform, false)(this._assetModelHierarchies.internalValue),
            asset_model_name: cdktn.stringToTerraform(this._assetModelName),
            asset_model_properties: cdktn.listMapper(ccAssetModelAssetModelPropertiesPropertyToTerraform, false)(this._assetModelProperties.internalValue),
            asset_model_type: cdktn.stringToTerraform(this._assetModelType),
            enforced_asset_model_interface_relationships: cdktn.listMapper(ccAssetModelEnforcedAssetModelInterfaceRelationshipPropertyToTerraform, false)(this._enforcedAssetModelInterfaceRelationships.internalValue),
            tags: cdktn.listMapper(ccAssetModelTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            asset_model_composite_models: {
                value: cdktn.listMapperHcl(ccAssetModelAssetModelCompositeModelPropertyToHclTerraform, false)(this._assetModelCompositeModels.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAssetModel.AssetModelCompositeModelPropertyList",
            },
            asset_model_description: {
                value: cdktn.stringToHclTerraform(this._assetModelDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            asset_model_external_id: {
                value: cdktn.stringToHclTerraform(this._assetModelExternalId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            asset_model_hierarchies: {
                value: cdktn.listMapperHcl(ccAssetModelAssetModelHierarchyPropertyToHclTerraform, false)(this._assetModelHierarchies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAssetModel.AssetModelHierarchyPropertyList",
            },
            asset_model_name: {
                value: cdktn.stringToHclTerraform(this._assetModelName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            asset_model_properties: {
                value: cdktn.listMapperHcl(ccAssetModelAssetModelPropertiesPropertyToHclTerraform, false)(this._assetModelProperties.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAssetModel.AssetModelPropertiesPropertyList",
            },
            asset_model_type: {
                value: cdktn.stringToHclTerraform(this._assetModelType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enforced_asset_model_interface_relationships: {
                value: cdktn.listMapperHcl(ccAssetModelEnforcedAssetModelInterfaceRelationshipPropertyToHclTerraform, false)(this._enforcedAssetModelInterfaceRelationships.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAssetModel.EnforcedAssetModelInterfaceRelationshipPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAssetModelTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAssetModel.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAssetModelAttributePropertyToTerraform(struct?: CcAssetModel.AttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
    }
}


export function ccAssetModelAttributePropertyToHclTerraform(struct?: CcAssetModel.AttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelPropertyPathDefinitionPropertyToTerraform(struct?: CcAssetModel.PropertyPathDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccAssetModelPropertyPathDefinitionPropertyToHclTerraform(struct?: CcAssetModel.PropertyPathDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelVariableValuePropertyToTerraform(struct?: CcAssetModel.VariableValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hierarchy_external_id: cdktn.stringToTerraform(struct!.hierarchyExternalId),
        hierarchy_id: cdktn.stringToTerraform(struct!.hierarchyId),
        hierarchy_logical_id: cdktn.stringToTerraform(struct!.hierarchyLogicalId),
        property_external_id: cdktn.stringToTerraform(struct!.propertyExternalId),
        property_id: cdktn.stringToTerraform(struct!.propertyId),
        property_logical_id: cdktn.stringToTerraform(struct!.propertyLogicalId),
        property_path: cdktn.listMapper(ccAssetModelPropertyPathDefinitionPropertyToTerraform, false)(struct!.propertyPath),
    }
}


export function ccAssetModelVariableValuePropertyToHclTerraform(struct?: CcAssetModel.VariableValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hierarchy_external_id: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyExternalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hierarchy_id: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hierarchy_logical_id: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyLogicalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_external_id: {
            value: cdktn.stringToHclTerraform(struct!.propertyExternalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_id: {
            value: cdktn.stringToHclTerraform(struct!.propertyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_logical_id: {
            value: cdktn.stringToHclTerraform(struct!.propertyLogicalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_path: {
            value: cdktn.listMapperHcl(ccAssetModelPropertyPathDefinitionPropertyToHclTerraform, false)(struct!.propertyPath),
            isBlock: true,
            type: "list",
            storageClassType: "PropertyPathDefinitionPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelExpressionVariablePropertyToTerraform(struct?: CcAssetModel.ExpressionVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: ccAssetModelVariableValuePropertyToTerraform(struct!.value),
    }
}


export function ccAssetModelExpressionVariablePropertyToHclTerraform(struct?: CcAssetModel.ExpressionVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: ccAssetModelVariableValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "VariableValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelTumblingWindowPropertyToTerraform(struct?: CcAssetModel.TumblingWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        interval: cdktn.stringToTerraform(struct!.interval),
        offset: cdktn.stringToTerraform(struct!.offset),
    }
}


export function ccAssetModelTumblingWindowPropertyToHclTerraform(struct?: CcAssetModel.TumblingWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        interval: {
            value: cdktn.stringToHclTerraform(struct!.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        offset: {
            value: cdktn.stringToHclTerraform(struct!.offset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelMetricWindowPropertyToTerraform(struct?: CcAssetModel.MetricWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        tumbling: ccAssetModelTumblingWindowPropertyToTerraform(struct!.tumbling),
    }
}


export function ccAssetModelMetricWindowPropertyToHclTerraform(struct?: CcAssetModel.MetricWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        tumbling: {
            value: ccAssetModelTumblingWindowPropertyToHclTerraform(struct!.tumbling),
            isBlock: true,
            type: "struct",
            storageClassType: "TumblingWindowProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelMetricPropertyToTerraform(struct?: CcAssetModel.MetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        variables: cdktn.listMapper(ccAssetModelExpressionVariablePropertyToTerraform, false)(struct!.variables),
        window: ccAssetModelMetricWindowPropertyToTerraform(struct!.window),
    }
}


export function ccAssetModelMetricPropertyToHclTerraform(struct?: CcAssetModel.MetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        variables: {
            value: cdktn.listMapperHcl(ccAssetModelExpressionVariablePropertyToHclTerraform, false)(struct!.variables),
            isBlock: true,
            type: "list",
            storageClassType: "ExpressionVariablePropertyList",
        },
        window: {
            value: ccAssetModelMetricWindowPropertyToHclTerraform(struct!.window),
            isBlock: true,
            type: "struct",
            storageClassType: "MetricWindowProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathPropertyToTerraform(struct?: CcAssetModel.AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathPropertyToHclTerraform(struct?: CcAssetModel.AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyToTerraform(struct?: CcAssetModel.AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hierarchy_external_id: cdktn.stringToTerraform(struct!.hierarchyExternalId),
        hierarchy_id: cdktn.stringToTerraform(struct!.hierarchyId),
        hierarchy_logical_id: cdktn.stringToTerraform(struct!.hierarchyLogicalId),
        property_external_id: cdktn.stringToTerraform(struct!.propertyExternalId),
        property_id: cdktn.stringToTerraform(struct!.propertyId),
        property_logical_id: cdktn.stringToTerraform(struct!.propertyLogicalId),
        property_path: cdktn.listMapper(ccAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathPropertyToTerraform, false)(struct!.propertyPath),
    }
}


export function ccAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyToHclTerraform(struct?: CcAssetModel.AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hierarchy_external_id: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyExternalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hierarchy_id: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hierarchy_logical_id: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyLogicalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_external_id: {
            value: cdktn.stringToHclTerraform(struct!.propertyExternalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_id: {
            value: cdktn.stringToHclTerraform(struct!.propertyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_logical_id: {
            value: cdktn.stringToHclTerraform(struct!.propertyLogicalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_path: {
            value: cdktn.listMapperHcl(ccAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathPropertyToHclTerraform, false)(struct!.propertyPath),
            isBlock: true,
            type: "list",
            storageClassType: "AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesPropertyToTerraform(struct?: CcAssetModel.AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: ccAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyToTerraform(struct!.value),
    }
}


export function ccAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesPropertyToHclTerraform(struct?: CcAssetModel.AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: ccAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelTransformPropertyToTerraform(struct?: CcAssetModel.TransformProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        variables: cdktn.listMapper(ccAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesPropertyToTerraform, false)(struct!.variables),
    }
}


export function ccAssetModelTransformPropertyToHclTerraform(struct?: CcAssetModel.TransformProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        variables: {
            value: cdktn.listMapperHcl(ccAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesPropertyToHclTerraform, false)(struct!.variables),
            isBlock: true,
            type: "list",
            storageClassType: "AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelPropertyTypePropertyToTerraform(struct?: CcAssetModel.PropertyTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute: ccAssetModelAttributePropertyToTerraform(struct!.attribute),
        metric: ccAssetModelMetricPropertyToTerraform(struct!.metric),
        transform: ccAssetModelTransformPropertyToTerraform(struct!.transform),
        type_name: cdktn.stringToTerraform(struct!.typeName),
    }
}


export function ccAssetModelPropertyTypePropertyToHclTerraform(struct?: CcAssetModel.PropertyTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attribute: {
            value: ccAssetModelAttributePropertyToHclTerraform(struct!.attribute),
            isBlock: true,
            type: "struct",
            storageClassType: "AttributeProperty",
        },
        metric: {
            value: ccAssetModelMetricPropertyToHclTerraform(struct!.metric),
            isBlock: true,
            type: "struct",
            storageClassType: "MetricProperty",
        },
        transform: {
            value: ccAssetModelTransformPropertyToHclTerraform(struct!.transform),
            isBlock: true,
            type: "struct",
            storageClassType: "TransformProperty",
        },
        type_name: {
            value: cdktn.stringToHclTerraform(struct!.typeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelAssetModelPropertyPropertyToTerraform(struct?: CcAssetModel.AssetModelPropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_type: cdktn.stringToTerraform(struct!.dataType),
        data_type_spec: cdktn.stringToTerraform(struct!.dataTypeSpec),
        external_id: cdktn.stringToTerraform(struct!.externalId),
        id: cdktn.stringToTerraform(struct!.id),
        logical_id: cdktn.stringToTerraform(struct!.logicalId),
        name: cdktn.stringToTerraform(struct!.name),
        type: ccAssetModelPropertyTypePropertyToTerraform(struct!.type),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccAssetModelAssetModelPropertyPropertyToHclTerraform(struct?: CcAssetModel.AssetModelPropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_type: {
            value: cdktn.stringToHclTerraform(struct!.dataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_type_spec: {
            value: cdktn.stringToHclTerraform(struct!.dataTypeSpec),
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
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: ccAssetModelPropertyTypePropertyToHclTerraform(struct!.type),
            isBlock: true,
            type: "struct",
            storageClassType: "PropertyTypeProperty",
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


export function ccAssetModelAssetModelCompositeModelPropertyToTerraform(struct?: CcAssetModel.AssetModelCompositeModelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        composed_asset_model_id: cdktn.stringToTerraform(struct!.composedAssetModelId),
        composite_model_properties: cdktn.listMapper(ccAssetModelAssetModelPropertyPropertyToTerraform, false)(struct!.compositeModelProperties),
        description: cdktn.stringToTerraform(struct!.description),
        external_id: cdktn.stringToTerraform(struct!.externalId),
        id: cdktn.stringToTerraform(struct!.id),
        name: cdktn.stringToTerraform(struct!.name),
        parent_asset_model_composite_model_external_id: cdktn.stringToTerraform(struct!.parentAssetModelCompositeModelExternalId),
        path: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.path),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccAssetModelAssetModelCompositeModelPropertyToHclTerraform(struct?: CcAssetModel.AssetModelCompositeModelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        composed_asset_model_id: {
            value: cdktn.stringToHclTerraform(struct!.composedAssetModelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        composite_model_properties: {
            value: cdktn.listMapperHcl(ccAssetModelAssetModelPropertyPropertyToHclTerraform, false)(struct!.compositeModelProperties),
            isBlock: true,
            type: "list",
            storageClassType: "AssetModelPropertyPropertyList",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
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
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parent_asset_model_composite_model_external_id: {
            value: cdktn.stringToHclTerraform(struct!.parentAssetModelCompositeModelExternalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.path),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelAssetModelHierarchyPropertyToTerraform(struct?: CcAssetModel.AssetModelHierarchyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        child_asset_model_id: cdktn.stringToTerraform(struct!.childAssetModelId),
        external_id: cdktn.stringToTerraform(struct!.externalId),
        id: cdktn.stringToTerraform(struct!.id),
        logical_id: cdktn.stringToTerraform(struct!.logicalId),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccAssetModelAssetModelHierarchyPropertyToHclTerraform(struct?: CcAssetModel.AssetModelHierarchyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        child_asset_model_id: {
            value: cdktn.stringToHclTerraform(struct!.childAssetModelId),
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
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelAssetModelPropertiesTypeAttributePropertyToTerraform(struct?: CcAssetModel.AssetModelPropertiesTypeAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
    }
}


export function ccAssetModelAssetModelPropertiesTypeAttributePropertyToHclTerraform(struct?: CcAssetModel.AssetModelPropertiesTypeAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathPropertyToTerraform(struct?: CcAssetModel.AssetModelPropertiesTypeMetricVariablesValuePropertyPathProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathPropertyToHclTerraform(struct?: CcAssetModel.AssetModelPropertiesTypeMetricVariablesValuePropertyPathProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyToTerraform(struct?: CcAssetModel.AssetModelPropertiesTypeMetricVariablesValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hierarchy_external_id: cdktn.stringToTerraform(struct!.hierarchyExternalId),
        hierarchy_id: cdktn.stringToTerraform(struct!.hierarchyId),
        hierarchy_logical_id: cdktn.stringToTerraform(struct!.hierarchyLogicalId),
        property_external_id: cdktn.stringToTerraform(struct!.propertyExternalId),
        property_id: cdktn.stringToTerraform(struct!.propertyId),
        property_logical_id: cdktn.stringToTerraform(struct!.propertyLogicalId),
        property_path: cdktn.listMapper(ccAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathPropertyToTerraform, false)(struct!.propertyPath),
    }
}


export function ccAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyToHclTerraform(struct?: CcAssetModel.AssetModelPropertiesTypeMetricVariablesValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hierarchy_external_id: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyExternalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hierarchy_id: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hierarchy_logical_id: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyLogicalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_external_id: {
            value: cdktn.stringToHclTerraform(struct!.propertyExternalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_id: {
            value: cdktn.stringToHclTerraform(struct!.propertyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_logical_id: {
            value: cdktn.stringToHclTerraform(struct!.propertyLogicalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_path: {
            value: cdktn.listMapperHcl(ccAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathPropertyToHclTerraform, false)(struct!.propertyPath),
            isBlock: true,
            type: "list",
            storageClassType: "AssetModelPropertiesTypeMetricVariablesValuePropertyPathPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelAssetModelPropertiesTypeMetricVariablesPropertyToTerraform(struct?: CcAssetModel.AssetModelPropertiesTypeMetricVariablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: ccAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyToTerraform(struct!.value),
    }
}


export function ccAssetModelAssetModelPropertiesTypeMetricVariablesPropertyToHclTerraform(struct?: CcAssetModel.AssetModelPropertiesTypeMetricVariablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: ccAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "AssetModelPropertiesTypeMetricVariablesValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelTumblingPropertyToTerraform(struct?: CcAssetModel.TumblingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        interval: cdktn.stringToTerraform(struct!.interval),
        offset: cdktn.stringToTerraform(struct!.offset),
    }
}


export function ccAssetModelTumblingPropertyToHclTerraform(struct?: CcAssetModel.TumblingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        interval: {
            value: cdktn.stringToHclTerraform(struct!.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        offset: {
            value: cdktn.stringToHclTerraform(struct!.offset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelWindowPropertyToTerraform(struct?: CcAssetModel.WindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        tumbling: ccAssetModelTumblingPropertyToTerraform(struct!.tumbling),
    }
}


export function ccAssetModelWindowPropertyToHclTerraform(struct?: CcAssetModel.WindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        tumbling: {
            value: ccAssetModelTumblingPropertyToHclTerraform(struct!.tumbling),
            isBlock: true,
            type: "struct",
            storageClassType: "TumblingProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelAssetModelPropertiesTypeMetricPropertyToTerraform(struct?: CcAssetModel.AssetModelPropertiesTypeMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        variables: cdktn.listMapper(ccAssetModelAssetModelPropertiesTypeMetricVariablesPropertyToTerraform, false)(struct!.variables),
        window: ccAssetModelWindowPropertyToTerraform(struct!.window),
    }
}


export function ccAssetModelAssetModelPropertiesTypeMetricPropertyToHclTerraform(struct?: CcAssetModel.AssetModelPropertiesTypeMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        variables: {
            value: cdktn.listMapperHcl(ccAssetModelAssetModelPropertiesTypeMetricVariablesPropertyToHclTerraform, false)(struct!.variables),
            isBlock: true,
            type: "list",
            storageClassType: "AssetModelPropertiesTypeMetricVariablesPropertyList",
        },
        window: {
            value: ccAssetModelWindowPropertyToHclTerraform(struct!.window),
            isBlock: true,
            type: "struct",
            storageClassType: "WindowProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathPropertyToTerraform(struct?: CcAssetModel.AssetModelPropertiesTypeTransformVariablesValuePropertyPathProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathPropertyToHclTerraform(struct?: CcAssetModel.AssetModelPropertiesTypeTransformVariablesValuePropertyPathProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyToTerraform(struct?: CcAssetModel.AssetModelPropertiesTypeTransformVariablesValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hierarchy_external_id: cdktn.stringToTerraform(struct!.hierarchyExternalId),
        hierarchy_id: cdktn.stringToTerraform(struct!.hierarchyId),
        hierarchy_logical_id: cdktn.stringToTerraform(struct!.hierarchyLogicalId),
        property_external_id: cdktn.stringToTerraform(struct!.propertyExternalId),
        property_id: cdktn.stringToTerraform(struct!.propertyId),
        property_logical_id: cdktn.stringToTerraform(struct!.propertyLogicalId),
        property_path: cdktn.listMapper(ccAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathPropertyToTerraform, false)(struct!.propertyPath),
    }
}


export function ccAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyToHclTerraform(struct?: CcAssetModel.AssetModelPropertiesTypeTransformVariablesValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hierarchy_external_id: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyExternalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hierarchy_id: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hierarchy_logical_id: {
            value: cdktn.stringToHclTerraform(struct!.hierarchyLogicalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_external_id: {
            value: cdktn.stringToHclTerraform(struct!.propertyExternalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_id: {
            value: cdktn.stringToHclTerraform(struct!.propertyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_logical_id: {
            value: cdktn.stringToHclTerraform(struct!.propertyLogicalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_path: {
            value: cdktn.listMapperHcl(ccAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathPropertyToHclTerraform, false)(struct!.propertyPath),
            isBlock: true,
            type: "list",
            storageClassType: "AssetModelPropertiesTypeTransformVariablesValuePropertyPathPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelAssetModelPropertiesTypeTransformVariablesPropertyToTerraform(struct?: CcAssetModel.AssetModelPropertiesTypeTransformVariablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: ccAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyToTerraform(struct!.value),
    }
}


export function ccAssetModelAssetModelPropertiesTypeTransformVariablesPropertyToHclTerraform(struct?: CcAssetModel.AssetModelPropertiesTypeTransformVariablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: ccAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "AssetModelPropertiesTypeTransformVariablesValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelAssetModelPropertiesTypeTransformPropertyToTerraform(struct?: CcAssetModel.AssetModelPropertiesTypeTransformProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        variables: cdktn.listMapper(ccAssetModelAssetModelPropertiesTypeTransformVariablesPropertyToTerraform, false)(struct!.variables),
    }
}


export function ccAssetModelAssetModelPropertiesTypeTransformPropertyToHclTerraform(struct?: CcAssetModel.AssetModelPropertiesTypeTransformProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        variables: {
            value: cdktn.listMapperHcl(ccAssetModelAssetModelPropertiesTypeTransformVariablesPropertyToHclTerraform, false)(struct!.variables),
            isBlock: true,
            type: "list",
            storageClassType: "AssetModelPropertiesTypeTransformVariablesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelTypePropertyToTerraform(struct?: CcAssetModel.TypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute: ccAssetModelAssetModelPropertiesTypeAttributePropertyToTerraform(struct!.attribute),
        metric: ccAssetModelAssetModelPropertiesTypeMetricPropertyToTerraform(struct!.metric),
        transform: ccAssetModelAssetModelPropertiesTypeTransformPropertyToTerraform(struct!.transform),
        type_name: cdktn.stringToTerraform(struct!.typeName),
    }
}


export function ccAssetModelTypePropertyToHclTerraform(struct?: CcAssetModel.TypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attribute: {
            value: ccAssetModelAssetModelPropertiesTypeAttributePropertyToHclTerraform(struct!.attribute),
            isBlock: true,
            type: "struct",
            storageClassType: "AssetModelPropertiesTypeAttributeProperty",
        },
        metric: {
            value: ccAssetModelAssetModelPropertiesTypeMetricPropertyToHclTerraform(struct!.metric),
            isBlock: true,
            type: "struct",
            storageClassType: "AssetModelPropertiesTypeMetricProperty",
        },
        transform: {
            value: ccAssetModelAssetModelPropertiesTypeTransformPropertyToHclTerraform(struct!.transform),
            isBlock: true,
            type: "struct",
            storageClassType: "AssetModelPropertiesTypeTransformProperty",
        },
        type_name: {
            value: cdktn.stringToHclTerraform(struct!.typeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelAssetModelPropertiesPropertyToTerraform(struct?: CcAssetModel.AssetModelPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_type: cdktn.stringToTerraform(struct!.dataType),
        data_type_spec: cdktn.stringToTerraform(struct!.dataTypeSpec),
        external_id: cdktn.stringToTerraform(struct!.externalId),
        id: cdktn.stringToTerraform(struct!.id),
        logical_id: cdktn.stringToTerraform(struct!.logicalId),
        name: cdktn.stringToTerraform(struct!.name),
        type: ccAssetModelTypePropertyToTerraform(struct!.type),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccAssetModelAssetModelPropertiesPropertyToHclTerraform(struct?: CcAssetModel.AssetModelPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_type: {
            value: cdktn.stringToHclTerraform(struct!.dataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_type_spec: {
            value: cdktn.stringToHclTerraform(struct!.dataTypeSpec),
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
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: ccAssetModelTypePropertyToHclTerraform(struct!.type),
            isBlock: true,
            type: "struct",
            storageClassType: "TypeProperty",
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


export function ccAssetModelEnforcedAssetModelInterfacePropertyMappingPropertyToTerraform(struct?: CcAssetModel.EnforcedAssetModelInterfacePropertyMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        asset_model_property_external_id: cdktn.stringToTerraform(struct!.assetModelPropertyExternalId),
        asset_model_property_logical_id: cdktn.stringToTerraform(struct!.assetModelPropertyLogicalId),
        interface_asset_model_property_external_id: cdktn.stringToTerraform(struct!.interfaceAssetModelPropertyExternalId),
    }
}


export function ccAssetModelEnforcedAssetModelInterfacePropertyMappingPropertyToHclTerraform(struct?: CcAssetModel.EnforcedAssetModelInterfacePropertyMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        asset_model_property_external_id: {
            value: cdktn.stringToHclTerraform(struct!.assetModelPropertyExternalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        asset_model_property_logical_id: {
            value: cdktn.stringToHclTerraform(struct!.assetModelPropertyLogicalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        interface_asset_model_property_external_id: {
            value: cdktn.stringToHclTerraform(struct!.interfaceAssetModelPropertyExternalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelEnforcedAssetModelInterfaceRelationshipPropertyToTerraform(struct?: CcAssetModel.EnforcedAssetModelInterfaceRelationshipProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        interface_asset_model_id: cdktn.stringToTerraform(struct!.interfaceAssetModelId),
        property_mappings: cdktn.listMapper(ccAssetModelEnforcedAssetModelInterfacePropertyMappingPropertyToTerraform, false)(struct!.propertyMappings),
    }
}


export function ccAssetModelEnforcedAssetModelInterfaceRelationshipPropertyToHclTerraform(struct?: CcAssetModel.EnforcedAssetModelInterfaceRelationshipProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        interface_asset_model_id: {
            value: cdktn.stringToHclTerraform(struct!.interfaceAssetModelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_mappings: {
            value: cdktn.listMapperHcl(ccAssetModelEnforcedAssetModelInterfacePropertyMappingPropertyToHclTerraform, false)(struct!.propertyMappings),
            isBlock: true,
            type: "list",
            storageClassType: "EnforcedAssetModelInterfacePropertyMappingPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetModelTagPropertyToTerraform(struct?: CcAssetModel.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAssetModelTagPropertyToHclTerraform(struct?: CcAssetModel.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAssetModel {
export interface AttributeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#default_value CcAssetModel#default_value}
    */
    readonly defaultValue?: string;
}
export class AttributePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AttributeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AttributeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultValue = value.defaultValue;
        }
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }
}
export interface PropertyPathDefinitionProperty {
    /**
    * The name of the property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#name CcAssetModel#name}
    */
    readonly name?: string;
}
export class PropertyPathDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PropertyPathDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PropertyPathDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
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
}

export class PropertyPathDefinitionPropertyList extends cdktn.ComplexList {
    public internalValue? : PropertyPathDefinitionProperty[] | cdktn.IResolvable

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
    public get(index: number): PropertyPathDefinitionPropertyOutputReference {
        return new PropertyPathDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VariableValueProperty {
    /**
    * The External ID of the hierarchy that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#hierarchy_external_id CcAssetModel#hierarchy_external_id}
    */
    readonly hierarchyExternalId?: string;
    /**
    * The ID of the hierarchy that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#hierarchy_id CcAssetModel#hierarchy_id}
    */
    readonly hierarchyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#hierarchy_logical_id CcAssetModel#hierarchy_logical_id}
    */
    readonly hierarchyLogicalId?: string;
    /**
    * The External ID of the property that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#property_external_id CcAssetModel#property_external_id}
    */
    readonly propertyExternalId?: string;
    /**
    * The ID of the property that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#property_id CcAssetModel#property_id}
    */
    readonly propertyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#property_logical_id CcAssetModel#property_logical_id}
    */
    readonly propertyLogicalId?: string;
    /**
    * The path of the property that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#property_path CcAssetModel#property_path}
    */
    readonly propertyPath?: PropertyPathDefinitionProperty[] | cdktn.IResolvable;
}
export class VariableValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VariableValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hierarchyExternalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyExternalId = this._hierarchyExternalId;
        }
        if (this._hierarchyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyId = this._hierarchyId;
        }
        if (this._hierarchyLogicalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyLogicalId = this._hierarchyLogicalId;
        }
        if (this._propertyExternalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyExternalId = this._propertyExternalId;
        }
        if (this._propertyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyId = this._propertyId;
        }
        if (this._propertyLogicalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLogicalId = this._propertyLogicalId;
        }
        if (this._propertyPath?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyPath = this._propertyPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VariableValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hierarchyExternalId = undefined;
            this._hierarchyId = undefined;
            this._hierarchyLogicalId = undefined;
            this._propertyExternalId = undefined;
            this._propertyId = undefined;
            this._propertyLogicalId = undefined;
            this._propertyPath.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hierarchyExternalId = value.hierarchyExternalId;
            this._hierarchyId = value.hierarchyId;
            this._hierarchyLogicalId = value.hierarchyLogicalId;
            this._propertyExternalId = value.propertyExternalId;
            this._propertyId = value.propertyId;
            this._propertyLogicalId = value.propertyLogicalId;
            this._propertyPath.internalValue = value.propertyPath;
        }
    }

    // hierarchy_external_id - computed: true, optional: true, required: false
    private _hierarchyExternalId?: string; 
    public get hierarchyExternalId() {
        return this.getStringAttribute('hierarchy_external_id');
    }
    public set hierarchyExternalId(value: string) {
        this._hierarchyExternalId = value;
    }
    public resetHierarchyExternalId() {
        this._hierarchyExternalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyExternalIdInput() {
        return this._hierarchyExternalId;
    }

    // hierarchy_id - computed: true, optional: true, required: false
    private _hierarchyId?: string; 
    public get hierarchyId() {
        return this.getStringAttribute('hierarchy_id');
    }
    public set hierarchyId(value: string) {
        this._hierarchyId = value;
    }
    public resetHierarchyId() {
        this._hierarchyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyIdInput() {
        return this._hierarchyId;
    }

    // hierarchy_logical_id - computed: true, optional: true, required: false
    private _hierarchyLogicalId?: string; 
    public get hierarchyLogicalId() {
        return this.getStringAttribute('hierarchy_logical_id');
    }
    public set hierarchyLogicalId(value: string) {
        this._hierarchyLogicalId = value;
    }
    public resetHierarchyLogicalId() {
        this._hierarchyLogicalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyLogicalIdInput() {
        return this._hierarchyLogicalId;
    }

    // property_external_id - computed: true, optional: true, required: false
    private _propertyExternalId?: string; 
    public get propertyExternalId() {
        return this.getStringAttribute('property_external_id');
    }
    public set propertyExternalId(value: string) {
        this._propertyExternalId = value;
    }
    public resetPropertyExternalId() {
        this._propertyExternalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyExternalIdInput() {
        return this._propertyExternalId;
    }

    // property_id - computed: true, optional: true, required: false
    private _propertyId?: string; 
    public get propertyId() {
        return this.getStringAttribute('property_id');
    }
    public set propertyId(value: string) {
        this._propertyId = value;
    }
    public resetPropertyId() {
        this._propertyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyIdInput() {
        return this._propertyId;
    }

    // property_logical_id - computed: true, optional: true, required: false
    private _propertyLogicalId?: string; 
    public get propertyLogicalId() {
        return this.getStringAttribute('property_logical_id');
    }
    public set propertyLogicalId(value: string) {
        this._propertyLogicalId = value;
    }
    public resetPropertyLogicalId() {
        this._propertyLogicalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLogicalIdInput() {
        return this._propertyLogicalId;
    }

    // property_path - computed: true, optional: true, required: false
    private _propertyPath = new PropertyPathDefinitionPropertyList(this, "property_path", false);
    public get propertyPath() {
        return this._propertyPath;
    }
    public putPropertyPath(value: PropertyPathDefinitionProperty[] | cdktn.IResolvable) {
        this._propertyPath.internalValue = value;
    }
    public resetPropertyPath() {
        this._propertyPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyPathInput() {
        return this._propertyPath.internalValue;
    }
}
export interface ExpressionVariableProperty {
    /**
    * The friendly name of the variable to be used in the expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#name CcAssetModel#name}
    */
    readonly name?: string;
    /**
    * The variable that identifies an asset property from which to use values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#value CcAssetModel#value}
    */
    readonly value?: VariableValueProperty;
}
export class ExpressionVariablePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ExpressionVariableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExpressionVariableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value.internalValue = value.value;
        }
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

    // value - computed: true, optional: true, required: false
    private _value = new VariableValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: VariableValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}

export class ExpressionVariablePropertyList extends cdktn.ComplexList {
    public internalValue? : ExpressionVariableProperty[] | cdktn.IResolvable

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
    public get(index: number): ExpressionVariablePropertyOutputReference {
        return new ExpressionVariablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TumblingWindowProperty {
    /**
    * The time interval for the tumbling window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#interval CcAssetModel#interval}
    */
    readonly interval?: string;
    /**
    * The shift or reference point on timeline for the contiguous time intervals.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#offset CcAssetModel#offset}
    */
    readonly offset?: string;
}
export class TumblingWindowPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TumblingWindowProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._offset !== undefined) {
            hasAnyValues = true;
            internalValueResult.offset = this._offset;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TumblingWindowProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._interval = undefined;
            this._offset = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._interval = value.interval;
            this._offset = value.offset;
        }
    }

    // interval - computed: true, optional: true, required: false
    private _interval?: string; 
    public get interval() {
        return this.getStringAttribute('interval');
    }
    public set interval(value: string) {
        this._interval = value;
    }
    public resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval;
    }

    // offset - computed: true, optional: true, required: false
    private _offset?: string; 
    public get offset() {
        return this.getStringAttribute('offset');
    }
    public set offset(value: string) {
        this._offset = value;
    }
    public resetOffset() {
        this._offset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offsetInput() {
        return this._offset;
    }
}
export interface MetricWindowProperty {
    /**
    * Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. This window is used in metric and aggregation computations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#tumbling CcAssetModel#tumbling}
    */
    readonly tumbling?: TumblingWindowProperty;
}
export class MetricWindowPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricWindowProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tumbling?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tumbling = this._tumbling?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricWindowProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tumbling.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tumbling.internalValue = value.tumbling;
        }
    }

    // tumbling - computed: true, optional: true, required: false
    private _tumbling = new TumblingWindowPropertyOutputReference(this, "tumbling");
    public get tumbling() {
        return this._tumbling;
    }
    public putTumbling(value: TumblingWindowProperty) {
        this._tumbling.internalValue = value;
    }
    public resetTumbling() {
        this._tumbling.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tumblingInput() {
        return this._tumbling.internalValue;
    }
}
export interface MetricProperty {
    /**
    * The mathematical expression that defines the metric aggregation function. You can specify up to 10 functions per expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#expression CcAssetModel#expression}
    */
    readonly expression?: string;
    /**
    * The list of variables used in the expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#variables CcAssetModel#variables}
    */
    readonly variables?: ExpressionVariableProperty[] | cdktn.IResolvable;
    /**
    * The window (time interval) over which AWS IoT SiteWise computes the metric's aggregation expression
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#window CcAssetModel#window}
    */
    readonly window?: MetricWindowProperty;
}
export class MetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._variables?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.variables = this._variables?.internalValue;
        }
        if (this._window?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.window = this._window?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._variables.internalValue = undefined;
            this._window.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._variables.internalValue = value.variables;
            this._window.internalValue = value.window;
        }
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }

    // variables - computed: true, optional: true, required: false
    private _variables = new ExpressionVariablePropertyList(this, "variables", false);
    public get variables() {
        return this._variables;
    }
    public putVariables(value: ExpressionVariableProperty[] | cdktn.IResolvable) {
        this._variables.internalValue = value;
    }
    public resetVariables() {
        this._variables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variablesInput() {
        return this._variables.internalValue;
    }

    // window - computed: true, optional: true, required: false
    private _window = new MetricWindowPropertyOutputReference(this, "window");
    public get window() {
        return this._window;
    }
    public putWindow(value: MetricWindowProperty) {
        this._window.internalValue = value;
    }
    public resetWindow() {
        this._window.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get windowInput() {
        return this._window.internalValue;
    }
}
export interface AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathProperty {
    /**
    * The name of the property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#name CcAssetModel#name}
    */
    readonly name?: string;
}
export class AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
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
}

export class AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathPropertyList extends cdktn.ComplexList {
    public internalValue? : AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathProperty[] | cdktn.IResolvable

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
    public get(index: number): AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathPropertyOutputReference {
        return new AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueProperty {
    /**
    * The External ID of the hierarchy that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#hierarchy_external_id CcAssetModel#hierarchy_external_id}
    */
    readonly hierarchyExternalId?: string;
    /**
    * The ID of the hierarchy that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#hierarchy_id CcAssetModel#hierarchy_id}
    */
    readonly hierarchyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#hierarchy_logical_id CcAssetModel#hierarchy_logical_id}
    */
    readonly hierarchyLogicalId?: string;
    /**
    * The External ID of the property that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#property_external_id CcAssetModel#property_external_id}
    */
    readonly propertyExternalId?: string;
    /**
    * The ID of the property that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#property_id CcAssetModel#property_id}
    */
    readonly propertyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#property_logical_id CcAssetModel#property_logical_id}
    */
    readonly propertyLogicalId?: string;
    /**
    * The path of the property that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#property_path CcAssetModel#property_path}
    */
    readonly propertyPath?: AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathProperty[] | cdktn.IResolvable;
}
export class AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hierarchyExternalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyExternalId = this._hierarchyExternalId;
        }
        if (this._hierarchyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyId = this._hierarchyId;
        }
        if (this._hierarchyLogicalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyLogicalId = this._hierarchyLogicalId;
        }
        if (this._propertyExternalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyExternalId = this._propertyExternalId;
        }
        if (this._propertyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyId = this._propertyId;
        }
        if (this._propertyLogicalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLogicalId = this._propertyLogicalId;
        }
        if (this._propertyPath?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyPath = this._propertyPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hierarchyExternalId = undefined;
            this._hierarchyId = undefined;
            this._hierarchyLogicalId = undefined;
            this._propertyExternalId = undefined;
            this._propertyId = undefined;
            this._propertyLogicalId = undefined;
            this._propertyPath.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hierarchyExternalId = value.hierarchyExternalId;
            this._hierarchyId = value.hierarchyId;
            this._hierarchyLogicalId = value.hierarchyLogicalId;
            this._propertyExternalId = value.propertyExternalId;
            this._propertyId = value.propertyId;
            this._propertyLogicalId = value.propertyLogicalId;
            this._propertyPath.internalValue = value.propertyPath;
        }
    }

    // hierarchy_external_id - computed: true, optional: true, required: false
    private _hierarchyExternalId?: string; 
    public get hierarchyExternalId() {
        return this.getStringAttribute('hierarchy_external_id');
    }
    public set hierarchyExternalId(value: string) {
        this._hierarchyExternalId = value;
    }
    public resetHierarchyExternalId() {
        this._hierarchyExternalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyExternalIdInput() {
        return this._hierarchyExternalId;
    }

    // hierarchy_id - computed: true, optional: true, required: false
    private _hierarchyId?: string; 
    public get hierarchyId() {
        return this.getStringAttribute('hierarchy_id');
    }
    public set hierarchyId(value: string) {
        this._hierarchyId = value;
    }
    public resetHierarchyId() {
        this._hierarchyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyIdInput() {
        return this._hierarchyId;
    }

    // hierarchy_logical_id - computed: true, optional: true, required: false
    private _hierarchyLogicalId?: string; 
    public get hierarchyLogicalId() {
        return this.getStringAttribute('hierarchy_logical_id');
    }
    public set hierarchyLogicalId(value: string) {
        this._hierarchyLogicalId = value;
    }
    public resetHierarchyLogicalId() {
        this._hierarchyLogicalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyLogicalIdInput() {
        return this._hierarchyLogicalId;
    }

    // property_external_id - computed: true, optional: true, required: false
    private _propertyExternalId?: string; 
    public get propertyExternalId() {
        return this.getStringAttribute('property_external_id');
    }
    public set propertyExternalId(value: string) {
        this._propertyExternalId = value;
    }
    public resetPropertyExternalId() {
        this._propertyExternalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyExternalIdInput() {
        return this._propertyExternalId;
    }

    // property_id - computed: true, optional: true, required: false
    private _propertyId?: string; 
    public get propertyId() {
        return this.getStringAttribute('property_id');
    }
    public set propertyId(value: string) {
        this._propertyId = value;
    }
    public resetPropertyId() {
        this._propertyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyIdInput() {
        return this._propertyId;
    }

    // property_logical_id - computed: true, optional: true, required: false
    private _propertyLogicalId?: string; 
    public get propertyLogicalId() {
        return this.getStringAttribute('property_logical_id');
    }
    public set propertyLogicalId(value: string) {
        this._propertyLogicalId = value;
    }
    public resetPropertyLogicalId() {
        this._propertyLogicalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLogicalIdInput() {
        return this._propertyLogicalId;
    }

    // property_path - computed: true, optional: true, required: false
    private _propertyPath = new AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathPropertyList(this, "property_path", false);
    public get propertyPath() {
        return this._propertyPath;
    }
    public putPropertyPath(value: AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathProperty[] | cdktn.IResolvable) {
        this._propertyPath.internalValue = value;
    }
    public resetPropertyPath() {
        this._propertyPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyPathInput() {
        return this._propertyPath.internalValue;
    }
}
export interface AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesProperty {
    /**
    * The friendly name of the variable to be used in the expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#name CcAssetModel#name}
    */
    readonly name?: string;
    /**
    * The variable that identifies an asset property from which to use values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#value CcAssetModel#value}
    */
    readonly value?: AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueProperty;
}
export class AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value.internalValue = value.value;
        }
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

    // value - computed: true, optional: true, required: false
    private _value = new AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}

export class AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesPropertyList extends cdktn.ComplexList {
    public internalValue? : AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesProperty[] | cdktn.IResolvable

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
    public get(index: number): AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesPropertyOutputReference {
        return new AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TransformProperty {
    /**
    * The mathematical expression that defines the transformation function. You can specify up to 10 functions per expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#expression CcAssetModel#expression}
    */
    readonly expression?: string;
    /**
    * The list of variables used in the expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#variables CcAssetModel#variables}
    */
    readonly variables?: AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesProperty[] | cdktn.IResolvable;
}
export class TransformPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TransformProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._variables?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.variables = this._variables?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransformProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._variables.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._variables.internalValue = value.variables;
        }
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }

    // variables - computed: true, optional: true, required: false
    private _variables = new AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesPropertyList(this, "variables", false);
    public get variables() {
        return this._variables;
    }
    public putVariables(value: AssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesProperty[] | cdktn.IResolvable) {
        this._variables.internalValue = value;
    }
    public resetVariables() {
        this._variables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variablesInput() {
        return this._variables.internalValue;
    }
}
export interface PropertyTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#attribute CcAssetModel#attribute}
    */
    readonly attribute?: AttributeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#metric CcAssetModel#metric}
    */
    readonly metric?: MetricProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#transform CcAssetModel#transform}
    */
    readonly transform?: TransformProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#type_name CcAssetModel#type_name}
    */
    readonly typeName?: string;
}
export class PropertyTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PropertyTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attribute?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.attribute = this._attribute?.internalValue;
        }
        if (this._metric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metric = this._metric?.internalValue;
        }
        if (this._transform?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transform = this._transform?.internalValue;
        }
        if (this._typeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.typeName = this._typeName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PropertyTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attribute.internalValue = undefined;
            this._metric.internalValue = undefined;
            this._transform.internalValue = undefined;
            this._typeName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attribute.internalValue = value.attribute;
            this._metric.internalValue = value.metric;
            this._transform.internalValue = value.transform;
            this._typeName = value.typeName;
        }
    }

    // attribute - computed: true, optional: true, required: false
    private _attribute = new AttributePropertyOutputReference(this, "attribute");
    public get attribute() {
        return this._attribute;
    }
    public putAttribute(value: AttributeProperty) {
        this._attribute.internalValue = value;
    }
    public resetAttribute() {
        this._attribute.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeInput() {
        return this._attribute.internalValue;
    }

    // metric - computed: true, optional: true, required: false
    private _metric = new MetricPropertyOutputReference(this, "metric");
    public get metric() {
        return this._metric;
    }
    public putMetric(value: MetricProperty) {
        this._metric.internalValue = value;
    }
    public resetMetric() {
        this._metric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricInput() {
        return this._metric.internalValue;
    }

    // transform - computed: true, optional: true, required: false
    private _transform = new TransformPropertyOutputReference(this, "transform");
    public get transform() {
        return this._transform;
    }
    public putTransform(value: TransformProperty) {
        this._transform.internalValue = value;
    }
    public resetTransform() {
        this._transform.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transformInput() {
        return this._transform.internalValue;
    }

    // type_name - computed: true, optional: true, required: false
    private _typeName?: string; 
    public get typeName() {
        return this.getStringAttribute('type_name');
    }
    public set typeName(value: string) {
        this._typeName = value;
    }
    public resetTypeName() {
        this._typeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeNameInput() {
        return this._typeName;
    }
}
export interface AssetModelPropertyProperty {
    /**
    * The data type of the asset model property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#data_type CcAssetModel#data_type}
    */
    readonly dataType?: string;
    /**
    * The data type of the structure for this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#data_type_spec CcAssetModel#data_type_spec}
    */
    readonly dataTypeSpec?: string;
    /**
    * The External ID of the Asset Model Property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#external_id CcAssetModel#external_id}
    */
    readonly externalId?: string;
    /**
    * The ID of the Asset Model Property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#id CcAssetModel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Customer provided Logical ID for property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#logical_id CcAssetModel#logical_id}
    */
    readonly logicalId?: string;
    /**
    * The name of the asset model property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#name CcAssetModel#name}
    */
    readonly name?: string;
    /**
    * The property type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#type CcAssetModel#type}
    */
    readonly type?: PropertyTypeProperty;
    /**
    * The unit of the asset model property, such as Newtons or RPM.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#unit CcAssetModel#unit}
    */
    readonly unit?: string;
}
export class AssetModelPropertyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssetModelPropertyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataType = this._dataType;
        }
        if (this._dataTypeSpec !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataTypeSpec = this._dataTypeSpec;
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._type?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type?.internalValue;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetModelPropertyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataType = undefined;
            this._dataTypeSpec = undefined;
            this._externalId = undefined;
            this._id = undefined;
            this._logicalId = undefined;
            this._name = undefined;
            this._type.internalValue = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataType = value.dataType;
            this._dataTypeSpec = value.dataTypeSpec;
            this._externalId = value.externalId;
            this._id = value.id;
            this._logicalId = value.logicalId;
            this._name = value.name;
            this._type.internalValue = value.type;
            this._unit = value.unit;
        }
    }

    // data_type - computed: true, optional: true, required: false
    private _dataType?: string; 
    public get dataType() {
        return this.getStringAttribute('data_type');
    }
    public set dataType(value: string) {
        this._dataType = value;
    }
    public resetDataType() {
        this._dataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTypeInput() {
        return this._dataType;
    }

    // data_type_spec - computed: true, optional: true, required: false
    private _dataTypeSpec?: string; 
    public get dataTypeSpec() {
        return this.getStringAttribute('data_type_spec');
    }
    public set dataTypeSpec(value: string) {
        this._dataTypeSpec = value;
    }
    public resetDataTypeSpec() {
        this._dataTypeSpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTypeSpecInput() {
        return this._dataTypeSpec;
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

    // type - computed: true, optional: true, required: false
    private _type = new PropertyTypePropertyOutputReference(this, "type");
    public get type() {
        return this._type;
    }
    public putType(value: PropertyTypeProperty) {
        this._type.internalValue = value;
    }
    public resetType() {
        this._type.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type.internalValue;
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

export class AssetModelPropertyPropertyList extends cdktn.ComplexList {
    public internalValue? : AssetModelPropertyProperty[] | cdktn.IResolvable

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
    public get(index: number): AssetModelPropertyPropertyOutputReference {
        return new AssetModelPropertyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AssetModelCompositeModelProperty {
    /**
    * The component model ID for which the composite model is composed of
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#composed_asset_model_id CcAssetModel#composed_asset_model_id}
    */
    readonly composedAssetModelId?: string;
    /**
    * The property definitions of the asset model. You can specify up to 200 properties per asset model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#composite_model_properties CcAssetModel#composite_model_properties}
    */
    readonly compositeModelProperties?: AssetModelPropertyProperty[] | cdktn.IResolvable;
    /**
    * A description for the asset composite model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#description CcAssetModel#description}
    */
    readonly description?: string;
    /**
    * The External ID of the composite model
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#external_id CcAssetModel#external_id}
    */
    readonly externalId?: string;
    /**
    * The Actual ID of the composite model
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#id CcAssetModel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * A unique, friendly name for the asset composite model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#name CcAssetModel#name}
    */
    readonly name?: string;
    /**
    * The parent composite model External ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#parent_asset_model_composite_model_external_id CcAssetModel#parent_asset_model_composite_model_external_id}
    */
    readonly parentAssetModelCompositeModelExternalId?: string;
    /**
    * The path of the composite model. This is only for derived composite models
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#path CcAssetModel#path}
    */
    readonly path?: string[];
    /**
    * The type of the composite model. For alarm composite models, this type is AWS/ALARM
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#type CcAssetModel#type}
    */
    readonly type?: string;
}
export class AssetModelCompositeModelPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssetModelCompositeModelProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._composedAssetModelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.composedAssetModelId = this._composedAssetModelId;
        }
        if (this._compositeModelProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.compositeModelProperties = this._compositeModelProperties?.internalValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._externalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalId = this._externalId;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._parentAssetModelCompositeModelExternalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.parentAssetModelCompositeModelExternalId = this._parentAssetModelCompositeModelExternalId;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetModelCompositeModelProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._composedAssetModelId = undefined;
            this._compositeModelProperties.internalValue = undefined;
            this._description = undefined;
            this._externalId = undefined;
            this._id = undefined;
            this._name = undefined;
            this._parentAssetModelCompositeModelExternalId = undefined;
            this._path = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._composedAssetModelId = value.composedAssetModelId;
            this._compositeModelProperties.internalValue = value.compositeModelProperties;
            this._description = value.description;
            this._externalId = value.externalId;
            this._id = value.id;
            this._name = value.name;
            this._parentAssetModelCompositeModelExternalId = value.parentAssetModelCompositeModelExternalId;
            this._path = value.path;
            this._type = value.type;
        }
    }

    // composed_asset_model_id - computed: true, optional: true, required: false
    private _composedAssetModelId?: string; 
    public get composedAssetModelId() {
        return this.getStringAttribute('composed_asset_model_id');
    }
    public set composedAssetModelId(value: string) {
        this._composedAssetModelId = value;
    }
    public resetComposedAssetModelId() {
        this._composedAssetModelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get composedAssetModelIdInput() {
        return this._composedAssetModelId;
    }

    // composite_model_properties - computed: true, optional: true, required: false
    private _compositeModelProperties = new AssetModelPropertyPropertyList(this, "composite_model_properties", false);
    public get compositeModelProperties() {
        return this._compositeModelProperties;
    }
    public putCompositeModelProperties(value: AssetModelPropertyProperty[] | cdktn.IResolvable) {
        this._compositeModelProperties.internalValue = value;
    }
    public resetCompositeModelProperties() {
        this._compositeModelProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compositeModelPropertiesInput() {
        return this._compositeModelProperties.internalValue;
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

    // parent_asset_model_composite_model_external_id - computed: true, optional: true, required: false
    private _parentAssetModelCompositeModelExternalId?: string; 
    public get parentAssetModelCompositeModelExternalId() {
        return this.getStringAttribute('parent_asset_model_composite_model_external_id');
    }
    public set parentAssetModelCompositeModelExternalId(value: string) {
        this._parentAssetModelCompositeModelExternalId = value;
    }
    public resetParentAssetModelCompositeModelExternalId() {
        this._parentAssetModelCompositeModelExternalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parentAssetModelCompositeModelExternalIdInput() {
        return this._parentAssetModelCompositeModelExternalId;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string[]; 
    public get path() {
        return this.getListAttribute('path');
    }
    public set path(value: string[]) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class AssetModelCompositeModelPropertyList extends cdktn.ComplexList {
    public internalValue? : AssetModelCompositeModelProperty[] | cdktn.IResolvable

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
    public get(index: number): AssetModelCompositeModelPropertyOutputReference {
        return new AssetModelCompositeModelPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AssetModelHierarchyProperty {
    /**
    * The ID of the asset model. All assets in this hierarchy must be instances of the child AssetModelId asset model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#child_asset_model_id CcAssetModel#child_asset_model_id}
    */
    readonly childAssetModelId?: string;
    /**
    * Customer provided external ID for hierarchy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#external_id CcAssetModel#external_id}
    */
    readonly externalId?: string;
    /**
    * Customer provided actual ID for hierarchy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#id CcAssetModel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Customer provided logical ID for hierarchy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#logical_id CcAssetModel#logical_id}
    */
    readonly logicalId?: string;
    /**
    * The name of the asset model hierarchy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#name CcAssetModel#name}
    */
    readonly name?: string;
}
export class AssetModelHierarchyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssetModelHierarchyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._childAssetModelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.childAssetModelId = this._childAssetModelId;
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetModelHierarchyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._childAssetModelId = undefined;
            this._externalId = undefined;
            this._id = undefined;
            this._logicalId = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._childAssetModelId = value.childAssetModelId;
            this._externalId = value.externalId;
            this._id = value.id;
            this._logicalId = value.logicalId;
            this._name = value.name;
        }
    }

    // child_asset_model_id - computed: true, optional: true, required: false
    private _childAssetModelId?: string; 
    public get childAssetModelId() {
        return this.getStringAttribute('child_asset_model_id');
    }
    public set childAssetModelId(value: string) {
        this._childAssetModelId = value;
    }
    public resetChildAssetModelId() {
        this._childAssetModelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get childAssetModelIdInput() {
        return this._childAssetModelId;
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
}

export class AssetModelHierarchyPropertyList extends cdktn.ComplexList {
    public internalValue? : AssetModelHierarchyProperty[] | cdktn.IResolvable

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
    public get(index: number): AssetModelHierarchyPropertyOutputReference {
        return new AssetModelHierarchyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AssetModelPropertiesTypeAttributeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#default_value CcAssetModel#default_value}
    */
    readonly defaultValue?: string;
}
export class AssetModelPropertiesTypeAttributePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AssetModelPropertiesTypeAttributeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetModelPropertiesTypeAttributeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultValue = value.defaultValue;
        }
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }
}
export interface AssetModelPropertiesTypeMetricVariablesValuePropertyPathProperty {
    /**
    * The name of the property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#name CcAssetModel#name}
    */
    readonly name?: string;
}
export class AssetModelPropertiesTypeMetricVariablesValuePropertyPathPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssetModelPropertiesTypeMetricVariablesValuePropertyPathProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetModelPropertiesTypeMetricVariablesValuePropertyPathProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
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
}

export class AssetModelPropertiesTypeMetricVariablesValuePropertyPathPropertyList extends cdktn.ComplexList {
    public internalValue? : AssetModelPropertiesTypeMetricVariablesValuePropertyPathProperty[] | cdktn.IResolvable

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
    public get(index: number): AssetModelPropertiesTypeMetricVariablesValuePropertyPathPropertyOutputReference {
        return new AssetModelPropertiesTypeMetricVariablesValuePropertyPathPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AssetModelPropertiesTypeMetricVariablesValueProperty {
    /**
    * The External ID of the hierarchy that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#hierarchy_external_id CcAssetModel#hierarchy_external_id}
    */
    readonly hierarchyExternalId?: string;
    /**
    * The ID of the hierarchy that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#hierarchy_id CcAssetModel#hierarchy_id}
    */
    readonly hierarchyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#hierarchy_logical_id CcAssetModel#hierarchy_logical_id}
    */
    readonly hierarchyLogicalId?: string;
    /**
    * The External ID of the property that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#property_external_id CcAssetModel#property_external_id}
    */
    readonly propertyExternalId?: string;
    /**
    * The ID of the property that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#property_id CcAssetModel#property_id}
    */
    readonly propertyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#property_logical_id CcAssetModel#property_logical_id}
    */
    readonly propertyLogicalId?: string;
    /**
    * The path of the property that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#property_path CcAssetModel#property_path}
    */
    readonly propertyPath?: AssetModelPropertiesTypeMetricVariablesValuePropertyPathProperty[] | cdktn.IResolvable;
}
export class AssetModelPropertiesTypeMetricVariablesValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AssetModelPropertiesTypeMetricVariablesValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hierarchyExternalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyExternalId = this._hierarchyExternalId;
        }
        if (this._hierarchyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyId = this._hierarchyId;
        }
        if (this._hierarchyLogicalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyLogicalId = this._hierarchyLogicalId;
        }
        if (this._propertyExternalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyExternalId = this._propertyExternalId;
        }
        if (this._propertyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyId = this._propertyId;
        }
        if (this._propertyLogicalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLogicalId = this._propertyLogicalId;
        }
        if (this._propertyPath?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyPath = this._propertyPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetModelPropertiesTypeMetricVariablesValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hierarchyExternalId = undefined;
            this._hierarchyId = undefined;
            this._hierarchyLogicalId = undefined;
            this._propertyExternalId = undefined;
            this._propertyId = undefined;
            this._propertyLogicalId = undefined;
            this._propertyPath.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hierarchyExternalId = value.hierarchyExternalId;
            this._hierarchyId = value.hierarchyId;
            this._hierarchyLogicalId = value.hierarchyLogicalId;
            this._propertyExternalId = value.propertyExternalId;
            this._propertyId = value.propertyId;
            this._propertyLogicalId = value.propertyLogicalId;
            this._propertyPath.internalValue = value.propertyPath;
        }
    }

    // hierarchy_external_id - computed: true, optional: true, required: false
    private _hierarchyExternalId?: string; 
    public get hierarchyExternalId() {
        return this.getStringAttribute('hierarchy_external_id');
    }
    public set hierarchyExternalId(value: string) {
        this._hierarchyExternalId = value;
    }
    public resetHierarchyExternalId() {
        this._hierarchyExternalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyExternalIdInput() {
        return this._hierarchyExternalId;
    }

    // hierarchy_id - computed: true, optional: true, required: false
    private _hierarchyId?: string; 
    public get hierarchyId() {
        return this.getStringAttribute('hierarchy_id');
    }
    public set hierarchyId(value: string) {
        this._hierarchyId = value;
    }
    public resetHierarchyId() {
        this._hierarchyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyIdInput() {
        return this._hierarchyId;
    }

    // hierarchy_logical_id - computed: true, optional: true, required: false
    private _hierarchyLogicalId?: string; 
    public get hierarchyLogicalId() {
        return this.getStringAttribute('hierarchy_logical_id');
    }
    public set hierarchyLogicalId(value: string) {
        this._hierarchyLogicalId = value;
    }
    public resetHierarchyLogicalId() {
        this._hierarchyLogicalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyLogicalIdInput() {
        return this._hierarchyLogicalId;
    }

    // property_external_id - computed: true, optional: true, required: false
    private _propertyExternalId?: string; 
    public get propertyExternalId() {
        return this.getStringAttribute('property_external_id');
    }
    public set propertyExternalId(value: string) {
        this._propertyExternalId = value;
    }
    public resetPropertyExternalId() {
        this._propertyExternalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyExternalIdInput() {
        return this._propertyExternalId;
    }

    // property_id - computed: true, optional: true, required: false
    private _propertyId?: string; 
    public get propertyId() {
        return this.getStringAttribute('property_id');
    }
    public set propertyId(value: string) {
        this._propertyId = value;
    }
    public resetPropertyId() {
        this._propertyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyIdInput() {
        return this._propertyId;
    }

    // property_logical_id - computed: true, optional: true, required: false
    private _propertyLogicalId?: string; 
    public get propertyLogicalId() {
        return this.getStringAttribute('property_logical_id');
    }
    public set propertyLogicalId(value: string) {
        this._propertyLogicalId = value;
    }
    public resetPropertyLogicalId() {
        this._propertyLogicalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLogicalIdInput() {
        return this._propertyLogicalId;
    }

    // property_path - computed: true, optional: true, required: false
    private _propertyPath = new AssetModelPropertiesTypeMetricVariablesValuePropertyPathPropertyList(this, "property_path", false);
    public get propertyPath() {
        return this._propertyPath;
    }
    public putPropertyPath(value: AssetModelPropertiesTypeMetricVariablesValuePropertyPathProperty[] | cdktn.IResolvable) {
        this._propertyPath.internalValue = value;
    }
    public resetPropertyPath() {
        this._propertyPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyPathInput() {
        return this._propertyPath.internalValue;
    }
}
export interface AssetModelPropertiesTypeMetricVariablesProperty {
    /**
    * The friendly name of the variable to be used in the expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#name CcAssetModel#name}
    */
    readonly name?: string;
    /**
    * The variable that identifies an asset property from which to use values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#value CcAssetModel#value}
    */
    readonly value?: AssetModelPropertiesTypeMetricVariablesValueProperty;
}
export class AssetModelPropertiesTypeMetricVariablesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssetModelPropertiesTypeMetricVariablesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetModelPropertiesTypeMetricVariablesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value.internalValue = value.value;
        }
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

    // value - computed: true, optional: true, required: false
    private _value = new AssetModelPropertiesTypeMetricVariablesValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: AssetModelPropertiesTypeMetricVariablesValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}

export class AssetModelPropertiesTypeMetricVariablesPropertyList extends cdktn.ComplexList {
    public internalValue? : AssetModelPropertiesTypeMetricVariablesProperty[] | cdktn.IResolvable

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
    public get(index: number): AssetModelPropertiesTypeMetricVariablesPropertyOutputReference {
        return new AssetModelPropertiesTypeMetricVariablesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TumblingProperty {
    /**
    * The time interval for the tumbling window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#interval CcAssetModel#interval}
    */
    readonly interval?: string;
    /**
    * The shift or reference point on timeline for the contiguous time intervals.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#offset CcAssetModel#offset}
    */
    readonly offset?: string;
}
export class TumblingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TumblingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._offset !== undefined) {
            hasAnyValues = true;
            internalValueResult.offset = this._offset;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TumblingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._interval = undefined;
            this._offset = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._interval = value.interval;
            this._offset = value.offset;
        }
    }

    // interval - computed: true, optional: true, required: false
    private _interval?: string; 
    public get interval() {
        return this.getStringAttribute('interval');
    }
    public set interval(value: string) {
        this._interval = value;
    }
    public resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval;
    }

    // offset - computed: true, optional: true, required: false
    private _offset?: string; 
    public get offset() {
        return this.getStringAttribute('offset');
    }
    public set offset(value: string) {
        this._offset = value;
    }
    public resetOffset() {
        this._offset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offsetInput() {
        return this._offset;
    }
}
export interface WindowProperty {
    /**
    * Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. This window is used in metric and aggregation computations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#tumbling CcAssetModel#tumbling}
    */
    readonly tumbling?: TumblingProperty;
}
export class WindowPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WindowProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tumbling?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tumbling = this._tumbling?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WindowProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tumbling.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tumbling.internalValue = value.tumbling;
        }
    }

    // tumbling - computed: true, optional: true, required: false
    private _tumbling = new TumblingPropertyOutputReference(this, "tumbling");
    public get tumbling() {
        return this._tumbling;
    }
    public putTumbling(value: TumblingProperty) {
        this._tumbling.internalValue = value;
    }
    public resetTumbling() {
        this._tumbling.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tumblingInput() {
        return this._tumbling.internalValue;
    }
}
export interface AssetModelPropertiesTypeMetricProperty {
    /**
    * The mathematical expression that defines the metric aggregation function. You can specify up to 10 functions per expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#expression CcAssetModel#expression}
    */
    readonly expression?: string;
    /**
    * The list of variables used in the expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#variables CcAssetModel#variables}
    */
    readonly variables?: AssetModelPropertiesTypeMetricVariablesProperty[] | cdktn.IResolvable;
    /**
    * The window (time interval) over which AWS IoT SiteWise computes the metric's aggregation expression
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#window CcAssetModel#window}
    */
    readonly window?: WindowProperty;
}
export class AssetModelPropertiesTypeMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AssetModelPropertiesTypeMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._variables?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.variables = this._variables?.internalValue;
        }
        if (this._window?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.window = this._window?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetModelPropertiesTypeMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._variables.internalValue = undefined;
            this._window.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._variables.internalValue = value.variables;
            this._window.internalValue = value.window;
        }
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }

    // variables - computed: true, optional: true, required: false
    private _variables = new AssetModelPropertiesTypeMetricVariablesPropertyList(this, "variables", false);
    public get variables() {
        return this._variables;
    }
    public putVariables(value: AssetModelPropertiesTypeMetricVariablesProperty[] | cdktn.IResolvable) {
        this._variables.internalValue = value;
    }
    public resetVariables() {
        this._variables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variablesInput() {
        return this._variables.internalValue;
    }

    // window - computed: true, optional: true, required: false
    private _window = new WindowPropertyOutputReference(this, "window");
    public get window() {
        return this._window;
    }
    public putWindow(value: WindowProperty) {
        this._window.internalValue = value;
    }
    public resetWindow() {
        this._window.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get windowInput() {
        return this._window.internalValue;
    }
}
export interface AssetModelPropertiesTypeTransformVariablesValuePropertyPathProperty {
    /**
    * The name of the property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#name CcAssetModel#name}
    */
    readonly name?: string;
}
export class AssetModelPropertiesTypeTransformVariablesValuePropertyPathPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssetModelPropertiesTypeTransformVariablesValuePropertyPathProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetModelPropertiesTypeTransformVariablesValuePropertyPathProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
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
}

export class AssetModelPropertiesTypeTransformVariablesValuePropertyPathPropertyList extends cdktn.ComplexList {
    public internalValue? : AssetModelPropertiesTypeTransformVariablesValuePropertyPathProperty[] | cdktn.IResolvable

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
    public get(index: number): AssetModelPropertiesTypeTransformVariablesValuePropertyPathPropertyOutputReference {
        return new AssetModelPropertiesTypeTransformVariablesValuePropertyPathPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AssetModelPropertiesTypeTransformVariablesValueProperty {
    /**
    * The External ID of the hierarchy that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#hierarchy_external_id CcAssetModel#hierarchy_external_id}
    */
    readonly hierarchyExternalId?: string;
    /**
    * The ID of the hierarchy that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#hierarchy_id CcAssetModel#hierarchy_id}
    */
    readonly hierarchyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#hierarchy_logical_id CcAssetModel#hierarchy_logical_id}
    */
    readonly hierarchyLogicalId?: string;
    /**
    * The External ID of the property that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#property_external_id CcAssetModel#property_external_id}
    */
    readonly propertyExternalId?: string;
    /**
    * The ID of the property that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#property_id CcAssetModel#property_id}
    */
    readonly propertyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#property_logical_id CcAssetModel#property_logical_id}
    */
    readonly propertyLogicalId?: string;
    /**
    * The path of the property that is trying to be referenced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#property_path CcAssetModel#property_path}
    */
    readonly propertyPath?: AssetModelPropertiesTypeTransformVariablesValuePropertyPathProperty[] | cdktn.IResolvable;
}
export class AssetModelPropertiesTypeTransformVariablesValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AssetModelPropertiesTypeTransformVariablesValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hierarchyExternalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyExternalId = this._hierarchyExternalId;
        }
        if (this._hierarchyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyId = this._hierarchyId;
        }
        if (this._hierarchyLogicalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchyLogicalId = this._hierarchyLogicalId;
        }
        if (this._propertyExternalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyExternalId = this._propertyExternalId;
        }
        if (this._propertyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyId = this._propertyId;
        }
        if (this._propertyLogicalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLogicalId = this._propertyLogicalId;
        }
        if (this._propertyPath?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyPath = this._propertyPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetModelPropertiesTypeTransformVariablesValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hierarchyExternalId = undefined;
            this._hierarchyId = undefined;
            this._hierarchyLogicalId = undefined;
            this._propertyExternalId = undefined;
            this._propertyId = undefined;
            this._propertyLogicalId = undefined;
            this._propertyPath.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hierarchyExternalId = value.hierarchyExternalId;
            this._hierarchyId = value.hierarchyId;
            this._hierarchyLogicalId = value.hierarchyLogicalId;
            this._propertyExternalId = value.propertyExternalId;
            this._propertyId = value.propertyId;
            this._propertyLogicalId = value.propertyLogicalId;
            this._propertyPath.internalValue = value.propertyPath;
        }
    }

    // hierarchy_external_id - computed: true, optional: true, required: false
    private _hierarchyExternalId?: string; 
    public get hierarchyExternalId() {
        return this.getStringAttribute('hierarchy_external_id');
    }
    public set hierarchyExternalId(value: string) {
        this._hierarchyExternalId = value;
    }
    public resetHierarchyExternalId() {
        this._hierarchyExternalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyExternalIdInput() {
        return this._hierarchyExternalId;
    }

    // hierarchy_id - computed: true, optional: true, required: false
    private _hierarchyId?: string; 
    public get hierarchyId() {
        return this.getStringAttribute('hierarchy_id');
    }
    public set hierarchyId(value: string) {
        this._hierarchyId = value;
    }
    public resetHierarchyId() {
        this._hierarchyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyIdInput() {
        return this._hierarchyId;
    }

    // hierarchy_logical_id - computed: true, optional: true, required: false
    private _hierarchyLogicalId?: string; 
    public get hierarchyLogicalId() {
        return this.getStringAttribute('hierarchy_logical_id');
    }
    public set hierarchyLogicalId(value: string) {
        this._hierarchyLogicalId = value;
    }
    public resetHierarchyLogicalId() {
        this._hierarchyLogicalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchyLogicalIdInput() {
        return this._hierarchyLogicalId;
    }

    // property_external_id - computed: true, optional: true, required: false
    private _propertyExternalId?: string; 
    public get propertyExternalId() {
        return this.getStringAttribute('property_external_id');
    }
    public set propertyExternalId(value: string) {
        this._propertyExternalId = value;
    }
    public resetPropertyExternalId() {
        this._propertyExternalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyExternalIdInput() {
        return this._propertyExternalId;
    }

    // property_id - computed: true, optional: true, required: false
    private _propertyId?: string; 
    public get propertyId() {
        return this.getStringAttribute('property_id');
    }
    public set propertyId(value: string) {
        this._propertyId = value;
    }
    public resetPropertyId() {
        this._propertyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyIdInput() {
        return this._propertyId;
    }

    // property_logical_id - computed: true, optional: true, required: false
    private _propertyLogicalId?: string; 
    public get propertyLogicalId() {
        return this.getStringAttribute('property_logical_id');
    }
    public set propertyLogicalId(value: string) {
        this._propertyLogicalId = value;
    }
    public resetPropertyLogicalId() {
        this._propertyLogicalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLogicalIdInput() {
        return this._propertyLogicalId;
    }

    // property_path - computed: true, optional: true, required: false
    private _propertyPath = new AssetModelPropertiesTypeTransformVariablesValuePropertyPathPropertyList(this, "property_path", false);
    public get propertyPath() {
        return this._propertyPath;
    }
    public putPropertyPath(value: AssetModelPropertiesTypeTransformVariablesValuePropertyPathProperty[] | cdktn.IResolvable) {
        this._propertyPath.internalValue = value;
    }
    public resetPropertyPath() {
        this._propertyPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyPathInput() {
        return this._propertyPath.internalValue;
    }
}
export interface AssetModelPropertiesTypeTransformVariablesProperty {
    /**
    * The friendly name of the variable to be used in the expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#name CcAssetModel#name}
    */
    readonly name?: string;
    /**
    * The variable that identifies an asset property from which to use values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#value CcAssetModel#value}
    */
    readonly value?: AssetModelPropertiesTypeTransformVariablesValueProperty;
}
export class AssetModelPropertiesTypeTransformVariablesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssetModelPropertiesTypeTransformVariablesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetModelPropertiesTypeTransformVariablesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value.internalValue = value.value;
        }
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

    // value - computed: true, optional: true, required: false
    private _value = new AssetModelPropertiesTypeTransformVariablesValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: AssetModelPropertiesTypeTransformVariablesValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}

export class AssetModelPropertiesTypeTransformVariablesPropertyList extends cdktn.ComplexList {
    public internalValue? : AssetModelPropertiesTypeTransformVariablesProperty[] | cdktn.IResolvable

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
    public get(index: number): AssetModelPropertiesTypeTransformVariablesPropertyOutputReference {
        return new AssetModelPropertiesTypeTransformVariablesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AssetModelPropertiesTypeTransformProperty {
    /**
    * The mathematical expression that defines the transformation function. You can specify up to 10 functions per expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#expression CcAssetModel#expression}
    */
    readonly expression?: string;
    /**
    * The list of variables used in the expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#variables CcAssetModel#variables}
    */
    readonly variables?: AssetModelPropertiesTypeTransformVariablesProperty[] | cdktn.IResolvable;
}
export class AssetModelPropertiesTypeTransformPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AssetModelPropertiesTypeTransformProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._variables?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.variables = this._variables?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetModelPropertiesTypeTransformProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._variables.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._variables.internalValue = value.variables;
        }
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }

    // variables - computed: true, optional: true, required: false
    private _variables = new AssetModelPropertiesTypeTransformVariablesPropertyList(this, "variables", false);
    public get variables() {
        return this._variables;
    }
    public putVariables(value: AssetModelPropertiesTypeTransformVariablesProperty[] | cdktn.IResolvable) {
        this._variables.internalValue = value;
    }
    public resetVariables() {
        this._variables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variablesInput() {
        return this._variables.internalValue;
    }
}
export interface TypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#attribute CcAssetModel#attribute}
    */
    readonly attribute?: AssetModelPropertiesTypeAttributeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#metric CcAssetModel#metric}
    */
    readonly metric?: AssetModelPropertiesTypeMetricProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#transform CcAssetModel#transform}
    */
    readonly transform?: AssetModelPropertiesTypeTransformProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#type_name CcAssetModel#type_name}
    */
    readonly typeName?: string;
}
export class TypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attribute?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.attribute = this._attribute?.internalValue;
        }
        if (this._metric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metric = this._metric?.internalValue;
        }
        if (this._transform?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transform = this._transform?.internalValue;
        }
        if (this._typeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.typeName = this._typeName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attribute.internalValue = undefined;
            this._metric.internalValue = undefined;
            this._transform.internalValue = undefined;
            this._typeName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attribute.internalValue = value.attribute;
            this._metric.internalValue = value.metric;
            this._transform.internalValue = value.transform;
            this._typeName = value.typeName;
        }
    }

    // attribute - computed: true, optional: true, required: false
    private _attribute = new AssetModelPropertiesTypeAttributePropertyOutputReference(this, "attribute");
    public get attribute() {
        return this._attribute;
    }
    public putAttribute(value: AssetModelPropertiesTypeAttributeProperty) {
        this._attribute.internalValue = value;
    }
    public resetAttribute() {
        this._attribute.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeInput() {
        return this._attribute.internalValue;
    }

    // metric - computed: true, optional: true, required: false
    private _metric = new AssetModelPropertiesTypeMetricPropertyOutputReference(this, "metric");
    public get metric() {
        return this._metric;
    }
    public putMetric(value: AssetModelPropertiesTypeMetricProperty) {
        this._metric.internalValue = value;
    }
    public resetMetric() {
        this._metric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricInput() {
        return this._metric.internalValue;
    }

    // transform - computed: true, optional: true, required: false
    private _transform = new AssetModelPropertiesTypeTransformPropertyOutputReference(this, "transform");
    public get transform() {
        return this._transform;
    }
    public putTransform(value: AssetModelPropertiesTypeTransformProperty) {
        this._transform.internalValue = value;
    }
    public resetTransform() {
        this._transform.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transformInput() {
        return this._transform.internalValue;
    }

    // type_name - computed: true, optional: true, required: false
    private _typeName?: string; 
    public get typeName() {
        return this.getStringAttribute('type_name');
    }
    public set typeName(value: string) {
        this._typeName = value;
    }
    public resetTypeName() {
        this._typeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeNameInput() {
        return this._typeName;
    }
}
export interface AssetModelPropertiesProperty {
    /**
    * The data type of the asset model property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#data_type CcAssetModel#data_type}
    */
    readonly dataType?: string;
    /**
    * The data type of the structure for this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#data_type_spec CcAssetModel#data_type_spec}
    */
    readonly dataTypeSpec?: string;
    /**
    * The External ID of the Asset Model Property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#external_id CcAssetModel#external_id}
    */
    readonly externalId?: string;
    /**
    * The ID of the Asset Model Property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#id CcAssetModel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Customer provided Logical ID for property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#logical_id CcAssetModel#logical_id}
    */
    readonly logicalId?: string;
    /**
    * The name of the asset model property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#name CcAssetModel#name}
    */
    readonly name?: string;
    /**
    * The property type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#type CcAssetModel#type}
    */
    readonly type?: TypeProperty;
    /**
    * The unit of the asset model property, such as Newtons or RPM.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#unit CcAssetModel#unit}
    */
    readonly unit?: string;
}
export class AssetModelPropertiesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssetModelPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataType = this._dataType;
        }
        if (this._dataTypeSpec !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataTypeSpec = this._dataTypeSpec;
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._type?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type?.internalValue;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetModelPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataType = undefined;
            this._dataTypeSpec = undefined;
            this._externalId = undefined;
            this._id = undefined;
            this._logicalId = undefined;
            this._name = undefined;
            this._type.internalValue = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataType = value.dataType;
            this._dataTypeSpec = value.dataTypeSpec;
            this._externalId = value.externalId;
            this._id = value.id;
            this._logicalId = value.logicalId;
            this._name = value.name;
            this._type.internalValue = value.type;
            this._unit = value.unit;
        }
    }

    // data_type - computed: true, optional: true, required: false
    private _dataType?: string; 
    public get dataType() {
        return this.getStringAttribute('data_type');
    }
    public set dataType(value: string) {
        this._dataType = value;
    }
    public resetDataType() {
        this._dataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTypeInput() {
        return this._dataType;
    }

    // data_type_spec - computed: true, optional: true, required: false
    private _dataTypeSpec?: string; 
    public get dataTypeSpec() {
        return this.getStringAttribute('data_type_spec');
    }
    public set dataTypeSpec(value: string) {
        this._dataTypeSpec = value;
    }
    public resetDataTypeSpec() {
        this._dataTypeSpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTypeSpecInput() {
        return this._dataTypeSpec;
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

    // type - computed: true, optional: true, required: false
    private _type = new TypePropertyOutputReference(this, "type");
    public get type() {
        return this._type;
    }
    public putType(value: TypeProperty) {
        this._type.internalValue = value;
    }
    public resetType() {
        this._type.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type.internalValue;
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

export class AssetModelPropertiesPropertyList extends cdktn.ComplexList {
    public internalValue? : AssetModelPropertiesProperty[] | cdktn.IResolvable

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
    public get(index: number): AssetModelPropertiesPropertyOutputReference {
        return new AssetModelPropertiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EnforcedAssetModelInterfacePropertyMappingProperty {
    /**
    * The external ID of the enforced asset model property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#asset_model_property_external_id CcAssetModel#asset_model_property_external_id}
    */
    readonly assetModelPropertyExternalId?: string;
    /**
    * The logical ID of the enforced asset model property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#asset_model_property_logical_id CcAssetModel#asset_model_property_logical_id}
    */
    readonly assetModelPropertyLogicalId?: string;
    /**
    * The external ID of the enforced interface property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#interface_asset_model_property_external_id CcAssetModel#interface_asset_model_property_external_id}
    */
    readonly interfaceAssetModelPropertyExternalId?: string;
}
export class EnforcedAssetModelInterfacePropertyMappingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EnforcedAssetModelInterfacePropertyMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._assetModelPropertyExternalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.assetModelPropertyExternalId = this._assetModelPropertyExternalId;
        }
        if (this._assetModelPropertyLogicalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.assetModelPropertyLogicalId = this._assetModelPropertyLogicalId;
        }
        if (this._interfaceAssetModelPropertyExternalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.interfaceAssetModelPropertyExternalId = this._interfaceAssetModelPropertyExternalId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EnforcedAssetModelInterfacePropertyMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._assetModelPropertyExternalId = undefined;
            this._assetModelPropertyLogicalId = undefined;
            this._interfaceAssetModelPropertyExternalId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._assetModelPropertyExternalId = value.assetModelPropertyExternalId;
            this._assetModelPropertyLogicalId = value.assetModelPropertyLogicalId;
            this._interfaceAssetModelPropertyExternalId = value.interfaceAssetModelPropertyExternalId;
        }
    }

    // asset_model_property_external_id - computed: true, optional: true, required: false
    private _assetModelPropertyExternalId?: string; 
    public get assetModelPropertyExternalId() {
        return this.getStringAttribute('asset_model_property_external_id');
    }
    public set assetModelPropertyExternalId(value: string) {
        this._assetModelPropertyExternalId = value;
    }
    public resetAssetModelPropertyExternalId() {
        this._assetModelPropertyExternalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetModelPropertyExternalIdInput() {
        return this._assetModelPropertyExternalId;
    }

    // asset_model_property_logical_id - computed: true, optional: true, required: false
    private _assetModelPropertyLogicalId?: string; 
    public get assetModelPropertyLogicalId() {
        return this.getStringAttribute('asset_model_property_logical_id');
    }
    public set assetModelPropertyLogicalId(value: string) {
        this._assetModelPropertyLogicalId = value;
    }
    public resetAssetModelPropertyLogicalId() {
        this._assetModelPropertyLogicalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetModelPropertyLogicalIdInput() {
        return this._assetModelPropertyLogicalId;
    }

    // interface_asset_model_property_external_id - computed: true, optional: true, required: false
    private _interfaceAssetModelPropertyExternalId?: string; 
    public get interfaceAssetModelPropertyExternalId() {
        return this.getStringAttribute('interface_asset_model_property_external_id');
    }
    public set interfaceAssetModelPropertyExternalId(value: string) {
        this._interfaceAssetModelPropertyExternalId = value;
    }
    public resetInterfaceAssetModelPropertyExternalId() {
        this._interfaceAssetModelPropertyExternalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get interfaceAssetModelPropertyExternalIdInput() {
        return this._interfaceAssetModelPropertyExternalId;
    }
}

export class EnforcedAssetModelInterfacePropertyMappingPropertyList extends cdktn.ComplexList {
    public internalValue? : EnforcedAssetModelInterfacePropertyMappingProperty[] | cdktn.IResolvable

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
    public get(index: number): EnforcedAssetModelInterfacePropertyMappingPropertyOutputReference {
        return new EnforcedAssetModelInterfacePropertyMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EnforcedAssetModelInterfaceRelationshipProperty {
    /**
    * The ID of the interface that is enforced to the asset model
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#interface_asset_model_id CcAssetModel#interface_asset_model_id}
    */
    readonly interfaceAssetModelId?: string;
    /**
    * Contains information about enforced interface property and asset model property
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#property_mappings CcAssetModel#property_mappings}
    */
    readonly propertyMappings?: EnforcedAssetModelInterfacePropertyMappingProperty[] | cdktn.IResolvable;
}
export class EnforcedAssetModelInterfaceRelationshipPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EnforcedAssetModelInterfaceRelationshipProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._interfaceAssetModelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.interfaceAssetModelId = this._interfaceAssetModelId;
        }
        if (this._propertyMappings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyMappings = this._propertyMappings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EnforcedAssetModelInterfaceRelationshipProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._interfaceAssetModelId = undefined;
            this._propertyMappings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._interfaceAssetModelId = value.interfaceAssetModelId;
            this._propertyMappings.internalValue = value.propertyMappings;
        }
    }

    // interface_asset_model_id - computed: true, optional: true, required: false
    private _interfaceAssetModelId?: string; 
    public get interfaceAssetModelId() {
        return this.getStringAttribute('interface_asset_model_id');
    }
    public set interfaceAssetModelId(value: string) {
        this._interfaceAssetModelId = value;
    }
    public resetInterfaceAssetModelId() {
        this._interfaceAssetModelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get interfaceAssetModelIdInput() {
        return this._interfaceAssetModelId;
    }

    // property_mappings - computed: true, optional: true, required: false
    private _propertyMappings = new EnforcedAssetModelInterfacePropertyMappingPropertyList(this, "property_mappings", false);
    public get propertyMappings() {
        return this._propertyMappings;
    }
    public putPropertyMappings(value: EnforcedAssetModelInterfacePropertyMappingProperty[] | cdktn.IResolvable) {
        this._propertyMappings.internalValue = value;
    }
    public resetPropertyMappings() {
        this._propertyMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyMappingsInput() {
        return this._propertyMappings.internalValue;
    }
}

export class EnforcedAssetModelInterfaceRelationshipPropertyList extends cdktn.ComplexList {
    public internalValue? : EnforcedAssetModelInterfaceRelationshipProperty[] | cdktn.IResolvable

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
    public get(index: number): EnforcedAssetModelInterfaceRelationshipPropertyOutputReference {
        return new EnforcedAssetModelInterfaceRelationshipPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#key CcAssetModel#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_asset_model#value CcAssetModel#value}
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
