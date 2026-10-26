// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcBrandProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#brand_definition CcBrand#brand_definition}
    */
    readonly brandDefinition?: CcBrand.BrandDefinitionProperty;
    /**
    * The ID of the QuickSight brand.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#brand_id CcBrand#brand_id}
    */
    readonly brandId: string;
    /**
    * The tags for the brand.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#tags CcBrand#tags}
    */
    readonly tags?: CcBrand.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand awscc_quicksight_brand}
*/
export class CcBrand extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_quicksight_brand";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcBrand resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcBrand to import
    * @param importFromId The id of the existing CcBrand that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcBrand to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_brand", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand awscc_quicksight_brand} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcBrandProps
    */
    public constructor(scope: Construct, id: string, config: CcBrandProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_brand',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._brandDefinition.internalValue = config.brandDefinition;
        this._brandId = config.brandId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // aws_account_id - computed: true, optional: false, required: false
    public get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }

    // brand_definition - computed: true, optional: true, required: false
    private _brandDefinition = new CcBrand.BrandDefinitionPropertyOutputReference(this, "brand_definition");
    public get brandDefinition() {
        return this._brandDefinition;
    }
    public putBrandDefinition(value: CcBrand.BrandDefinitionProperty) {
        this._brandDefinition.internalValue = value;
    }
    public resetBrandDefinition() {
        this._brandDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get brandDefinitionInput() {
        return this._brandDefinition.internalValue;
    }

    // brand_id - computed: false, optional: false, required: true
    private _brandId?: string; 
    public get brandId() {
        return this.getStringAttribute('brand_id');
    }
    public set brandId(value: string) {
        this._brandId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get brandIdInput() {
        return this._brandId;
    }

    // brand_status - computed: true, optional: false, required: false
    public get brandStatus() {
        return this.getStringAttribute('brand_status');
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcBrand.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcBrand.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // version_id - computed: true, optional: false, required: false
    public get versionId() {
        return this.getStringAttribute('version_id');
    }

    // version_status - computed: true, optional: false, required: false
    public get versionStatus() {
        return this.getStringAttribute('version_status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            brand_definition: ccBrandBrandDefinitionPropertyToTerraform(this._brandDefinition.internalValue),
            brand_id: cdktn.stringToTerraform(this._brandId),
            tags: cdktn.listMapper(ccBrandTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            brand_definition: {
                value: ccBrandBrandDefinitionPropertyToHclTerraform(this._brandDefinition.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBrand.BrandDefinitionProperty",
            },
            brand_id: {
                value: cdktn.stringToHclTerraform(this._brandId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccBrandTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcBrand.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccBrandAccentPropertyToTerraform(struct?: CcBrand.AccentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        background: cdktn.stringToTerraform(struct!.background),
        foreground: cdktn.stringToTerraform(struct!.foreground),
    }
}


export function ccBrandAccentPropertyToHclTerraform(struct?: CcBrand.AccentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        background: {
            value: cdktn.stringToHclTerraform(struct!.background),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        foreground: {
            value: cdktn.stringToHclTerraform(struct!.foreground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBrandDangerPropertyToTerraform(struct?: CcBrand.DangerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        background: cdktn.stringToTerraform(struct!.background),
        foreground: cdktn.stringToTerraform(struct!.foreground),
    }
}


export function ccBrandDangerPropertyToHclTerraform(struct?: CcBrand.DangerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        background: {
            value: cdktn.stringToHclTerraform(struct!.background),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        foreground: {
            value: cdktn.stringToHclTerraform(struct!.foreground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBrandDimensionPropertyToTerraform(struct?: CcBrand.DimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        background: cdktn.stringToTerraform(struct!.background),
        foreground: cdktn.stringToTerraform(struct!.foreground),
    }
}


export function ccBrandDimensionPropertyToHclTerraform(struct?: CcBrand.DimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        background: {
            value: cdktn.stringToHclTerraform(struct!.background),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        foreground: {
            value: cdktn.stringToHclTerraform(struct!.foreground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBrandInfoPropertyToTerraform(struct?: CcBrand.InfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        background: cdktn.stringToTerraform(struct!.background),
        foreground: cdktn.stringToTerraform(struct!.foreground),
    }
}


export function ccBrandInfoPropertyToHclTerraform(struct?: CcBrand.InfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        background: {
            value: cdktn.stringToHclTerraform(struct!.background),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        foreground: {
            value: cdktn.stringToHclTerraform(struct!.foreground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBrandMeasurePropertyToTerraform(struct?: CcBrand.MeasureProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        background: cdktn.stringToTerraform(struct!.background),
        foreground: cdktn.stringToTerraform(struct!.foreground),
    }
}


export function ccBrandMeasurePropertyToHclTerraform(struct?: CcBrand.MeasureProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        background: {
            value: cdktn.stringToHclTerraform(struct!.background),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        foreground: {
            value: cdktn.stringToHclTerraform(struct!.foreground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBrandPrimaryPropertyToTerraform(struct?: CcBrand.PrimaryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        background: cdktn.stringToTerraform(struct!.background),
        foreground: cdktn.stringToTerraform(struct!.foreground),
    }
}


export function ccBrandPrimaryPropertyToHclTerraform(struct?: CcBrand.PrimaryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        background: {
            value: cdktn.stringToHclTerraform(struct!.background),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        foreground: {
            value: cdktn.stringToHclTerraform(struct!.foreground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBrandSecondaryPropertyToTerraform(struct?: CcBrand.SecondaryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        background: cdktn.stringToTerraform(struct!.background),
        foreground: cdktn.stringToTerraform(struct!.foreground),
    }
}


export function ccBrandSecondaryPropertyToHclTerraform(struct?: CcBrand.SecondaryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        background: {
            value: cdktn.stringToHclTerraform(struct!.background),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        foreground: {
            value: cdktn.stringToHclTerraform(struct!.foreground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBrandSuccessPropertyToTerraform(struct?: CcBrand.SuccessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        background: cdktn.stringToTerraform(struct!.background),
        foreground: cdktn.stringToTerraform(struct!.foreground),
    }
}


export function ccBrandSuccessPropertyToHclTerraform(struct?: CcBrand.SuccessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        background: {
            value: cdktn.stringToHclTerraform(struct!.background),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        foreground: {
            value: cdktn.stringToHclTerraform(struct!.foreground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBrandWarningPropertyToTerraform(struct?: CcBrand.WarningProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        background: cdktn.stringToTerraform(struct!.background),
        foreground: cdktn.stringToTerraform(struct!.foreground),
    }
}


export function ccBrandWarningPropertyToHclTerraform(struct?: CcBrand.WarningProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        background: {
            value: cdktn.stringToHclTerraform(struct!.background),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        foreground: {
            value: cdktn.stringToHclTerraform(struct!.foreground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBrandBrandColorPalettePropertyToTerraform(struct?: CcBrand.BrandColorPaletteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accent: ccBrandAccentPropertyToTerraform(struct!.accent),
        danger: ccBrandDangerPropertyToTerraform(struct!.danger),
        dimension: ccBrandDimensionPropertyToTerraform(struct!.dimension),
        info: ccBrandInfoPropertyToTerraform(struct!.info),
        measure: ccBrandMeasurePropertyToTerraform(struct!.measure),
        primary: ccBrandPrimaryPropertyToTerraform(struct!.primary),
        secondary: ccBrandSecondaryPropertyToTerraform(struct!.secondary),
        success: ccBrandSuccessPropertyToTerraform(struct!.success),
        warning: ccBrandWarningPropertyToTerraform(struct!.warning),
    }
}


export function ccBrandBrandColorPalettePropertyToHclTerraform(struct?: CcBrand.BrandColorPaletteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accent: {
            value: ccBrandAccentPropertyToHclTerraform(struct!.accent),
            isBlock: true,
            type: "struct",
            storageClassType: "AccentProperty",
        },
        danger: {
            value: ccBrandDangerPropertyToHclTerraform(struct!.danger),
            isBlock: true,
            type: "struct",
            storageClassType: "DangerProperty",
        },
        dimension: {
            value: ccBrandDimensionPropertyToHclTerraform(struct!.dimension),
            isBlock: true,
            type: "struct",
            storageClassType: "DimensionProperty",
        },
        info: {
            value: ccBrandInfoPropertyToHclTerraform(struct!.info),
            isBlock: true,
            type: "struct",
            storageClassType: "InfoProperty",
        },
        measure: {
            value: ccBrandMeasurePropertyToHclTerraform(struct!.measure),
            isBlock: true,
            type: "struct",
            storageClassType: "MeasureProperty",
        },
        primary: {
            value: ccBrandPrimaryPropertyToHclTerraform(struct!.primary),
            isBlock: true,
            type: "struct",
            storageClassType: "PrimaryProperty",
        },
        secondary: {
            value: ccBrandSecondaryPropertyToHclTerraform(struct!.secondary),
            isBlock: true,
            type: "struct",
            storageClassType: "SecondaryProperty",
        },
        success: {
            value: ccBrandSuccessPropertyToHclTerraform(struct!.success),
            isBlock: true,
            type: "struct",
            storageClassType: "SuccessProperty",
        },
        warning: {
            value: ccBrandWarningPropertyToHclTerraform(struct!.warning),
            isBlock: true,
            type: "struct",
            storageClassType: "WarningProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBrandContextualNavbarPropertyToTerraform(struct?: CcBrand.ContextualNavbarProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        background: cdktn.stringToTerraform(struct!.background),
        foreground: cdktn.stringToTerraform(struct!.foreground),
    }
}


export function ccBrandContextualNavbarPropertyToHclTerraform(struct?: CcBrand.ContextualNavbarProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        background: {
            value: cdktn.stringToHclTerraform(struct!.background),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        foreground: {
            value: cdktn.stringToHclTerraform(struct!.foreground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBrandGlobalNavbarPropertyToTerraform(struct?: CcBrand.GlobalNavbarProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        background: cdktn.stringToTerraform(struct!.background),
        foreground: cdktn.stringToTerraform(struct!.foreground),
    }
}


export function ccBrandGlobalNavbarPropertyToHclTerraform(struct?: CcBrand.GlobalNavbarProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        background: {
            value: cdktn.stringToHclTerraform(struct!.background),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        foreground: {
            value: cdktn.stringToHclTerraform(struct!.foreground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBrandNavbarStylePropertyToTerraform(struct?: CcBrand.NavbarStyleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        contextual_navbar: ccBrandContextualNavbarPropertyToTerraform(struct!.contextualNavbar),
        global_navbar: ccBrandGlobalNavbarPropertyToTerraform(struct!.globalNavbar),
    }
}


export function ccBrandNavbarStylePropertyToHclTerraform(struct?: CcBrand.NavbarStyleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        contextual_navbar: {
            value: ccBrandContextualNavbarPropertyToHclTerraform(struct!.contextualNavbar),
            isBlock: true,
            type: "struct",
            storageClassType: "ContextualNavbarProperty",
        },
        global_navbar: {
            value: ccBrandGlobalNavbarPropertyToHclTerraform(struct!.globalNavbar),
            isBlock: true,
            type: "struct",
            storageClassType: "GlobalNavbarProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBrandBrandElementStylePropertyToTerraform(struct?: CcBrand.BrandElementStyleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        navbar_style: ccBrandNavbarStylePropertyToTerraform(struct!.navbarStyle),
    }
}


export function ccBrandBrandElementStylePropertyToHclTerraform(struct?: CcBrand.BrandElementStyleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        navbar_style: {
            value: ccBrandNavbarStylePropertyToHclTerraform(struct!.navbarStyle),
            isBlock: true,
            type: "struct",
            storageClassType: "NavbarStyleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBrandApplicationThemePropertyToTerraform(struct?: CcBrand.ApplicationThemeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        brand_color_palette: ccBrandBrandColorPalettePropertyToTerraform(struct!.brandColorPalette),
        brand_element_style: ccBrandBrandElementStylePropertyToTerraform(struct!.brandElementStyle),
    }
}


export function ccBrandApplicationThemePropertyToHclTerraform(struct?: CcBrand.ApplicationThemeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        brand_color_palette: {
            value: ccBrandBrandColorPalettePropertyToHclTerraform(struct!.brandColorPalette),
            isBlock: true,
            type: "struct",
            storageClassType: "BrandColorPaletteProperty",
        },
        brand_element_style: {
            value: ccBrandBrandElementStylePropertyToHclTerraform(struct!.brandElementStyle),
            isBlock: true,
            type: "struct",
            storageClassType: "BrandElementStyleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBrandBrandDefinitionPropertyToTerraform(struct?: CcBrand.BrandDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        application_theme: ccBrandApplicationThemePropertyToTerraform(struct!.applicationTheme),
        brand_name: cdktn.stringToTerraform(struct!.brandName),
        description: cdktn.stringToTerraform(struct!.description),
    }
}


export function ccBrandBrandDefinitionPropertyToHclTerraform(struct?: CcBrand.BrandDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        application_theme: {
            value: ccBrandApplicationThemePropertyToHclTerraform(struct!.applicationTheme),
            isBlock: true,
            type: "struct",
            storageClassType: "ApplicationThemeProperty",
        },
        brand_name: {
            value: cdktn.stringToHclTerraform(struct!.brandName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBrandTagsPropertyToTerraform(struct?: CcBrand.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBrandTagsPropertyToHclTerraform(struct?: CcBrand.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcBrand {
export interface AccentProperty {
    /**
    * The background color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background CcBrand#background}
    */
    readonly background?: string;
    /**
    * The foreground color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground CcBrand#foreground}
    */
    readonly foreground?: string;
}
export class AccentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._background !== undefined) {
            hasAnyValues = true;
            internalValueResult.background = this._background;
        }
        if (this._foreground !== undefined) {
            hasAnyValues = true;
            internalValueResult.foreground = this._foreground;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._background = undefined;
            this._foreground = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._background = value.background;
            this._foreground = value.foreground;
        }
    }

    // background - computed: true, optional: true, required: false
    private _background?: string; 
    public get background() {
        return this.getStringAttribute('background');
    }
    public set background(value: string) {
        this._background = value;
    }
    public resetBackground() {
        this._background = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backgroundInput() {
        return this._background;
    }

    // foreground - computed: true, optional: true, required: false
    private _foreground?: string; 
    public get foreground() {
        return this.getStringAttribute('foreground');
    }
    public set foreground(value: string) {
        this._foreground = value;
    }
    public resetForeground() {
        this._foreground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get foregroundInput() {
        return this._foreground;
    }
}
export interface DangerProperty {
    /**
    * The background color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background CcBrand#background}
    */
    readonly background?: string;
    /**
    * The foreground color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground CcBrand#foreground}
    */
    readonly foreground?: string;
}
export class DangerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DangerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._background !== undefined) {
            hasAnyValues = true;
            internalValueResult.background = this._background;
        }
        if (this._foreground !== undefined) {
            hasAnyValues = true;
            internalValueResult.foreground = this._foreground;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DangerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._background = undefined;
            this._foreground = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._background = value.background;
            this._foreground = value.foreground;
        }
    }

    // background - computed: true, optional: true, required: false
    private _background?: string; 
    public get background() {
        return this.getStringAttribute('background');
    }
    public set background(value: string) {
        this._background = value;
    }
    public resetBackground() {
        this._background = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backgroundInput() {
        return this._background;
    }

    // foreground - computed: true, optional: true, required: false
    private _foreground?: string; 
    public get foreground() {
        return this.getStringAttribute('foreground');
    }
    public set foreground(value: string) {
        this._foreground = value;
    }
    public resetForeground() {
        this._foreground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get foregroundInput() {
        return this._foreground;
    }
}
export interface DimensionProperty {
    /**
    * The background color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background CcBrand#background}
    */
    readonly background?: string;
    /**
    * The foreground color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground CcBrand#foreground}
    */
    readonly foreground?: string;
}
export class DimensionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DimensionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._background !== undefined) {
            hasAnyValues = true;
            internalValueResult.background = this._background;
        }
        if (this._foreground !== undefined) {
            hasAnyValues = true;
            internalValueResult.foreground = this._foreground;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DimensionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._background = undefined;
            this._foreground = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._background = value.background;
            this._foreground = value.foreground;
        }
    }

    // background - computed: true, optional: true, required: false
    private _background?: string; 
    public get background() {
        return this.getStringAttribute('background');
    }
    public set background(value: string) {
        this._background = value;
    }
    public resetBackground() {
        this._background = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backgroundInput() {
        return this._background;
    }

    // foreground - computed: true, optional: true, required: false
    private _foreground?: string; 
    public get foreground() {
        return this.getStringAttribute('foreground');
    }
    public set foreground(value: string) {
        this._foreground = value;
    }
    public resetForeground() {
        this._foreground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get foregroundInput() {
        return this._foreground;
    }
}
export interface InfoProperty {
    /**
    * The background color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background CcBrand#background}
    */
    readonly background?: string;
    /**
    * The foreground color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground CcBrand#foreground}
    */
    readonly foreground?: string;
}
export class InfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._background !== undefined) {
            hasAnyValues = true;
            internalValueResult.background = this._background;
        }
        if (this._foreground !== undefined) {
            hasAnyValues = true;
            internalValueResult.foreground = this._foreground;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._background = undefined;
            this._foreground = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._background = value.background;
            this._foreground = value.foreground;
        }
    }

    // background - computed: true, optional: true, required: false
    private _background?: string; 
    public get background() {
        return this.getStringAttribute('background');
    }
    public set background(value: string) {
        this._background = value;
    }
    public resetBackground() {
        this._background = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backgroundInput() {
        return this._background;
    }

    // foreground - computed: true, optional: true, required: false
    private _foreground?: string; 
    public get foreground() {
        return this.getStringAttribute('foreground');
    }
    public set foreground(value: string) {
        this._foreground = value;
    }
    public resetForeground() {
        this._foreground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get foregroundInput() {
        return this._foreground;
    }
}
export interface MeasureProperty {
    /**
    * The background color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background CcBrand#background}
    */
    readonly background?: string;
    /**
    * The foreground color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground CcBrand#foreground}
    */
    readonly foreground?: string;
}
export class MeasurePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MeasureProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._background !== undefined) {
            hasAnyValues = true;
            internalValueResult.background = this._background;
        }
        if (this._foreground !== undefined) {
            hasAnyValues = true;
            internalValueResult.foreground = this._foreground;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MeasureProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._background = undefined;
            this._foreground = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._background = value.background;
            this._foreground = value.foreground;
        }
    }

    // background - computed: true, optional: true, required: false
    private _background?: string; 
    public get background() {
        return this.getStringAttribute('background');
    }
    public set background(value: string) {
        this._background = value;
    }
    public resetBackground() {
        this._background = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backgroundInput() {
        return this._background;
    }

    // foreground - computed: true, optional: true, required: false
    private _foreground?: string; 
    public get foreground() {
        return this.getStringAttribute('foreground');
    }
    public set foreground(value: string) {
        this._foreground = value;
    }
    public resetForeground() {
        this._foreground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get foregroundInput() {
        return this._foreground;
    }
}
export interface PrimaryProperty {
    /**
    * The background color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background CcBrand#background}
    */
    readonly background?: string;
    /**
    * The foreground color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground CcBrand#foreground}
    */
    readonly foreground?: string;
}
export class PrimaryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrimaryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._background !== undefined) {
            hasAnyValues = true;
            internalValueResult.background = this._background;
        }
        if (this._foreground !== undefined) {
            hasAnyValues = true;
            internalValueResult.foreground = this._foreground;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrimaryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._background = undefined;
            this._foreground = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._background = value.background;
            this._foreground = value.foreground;
        }
    }

    // background - computed: true, optional: true, required: false
    private _background?: string; 
    public get background() {
        return this.getStringAttribute('background');
    }
    public set background(value: string) {
        this._background = value;
    }
    public resetBackground() {
        this._background = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backgroundInput() {
        return this._background;
    }

    // foreground - computed: true, optional: true, required: false
    private _foreground?: string; 
    public get foreground() {
        return this.getStringAttribute('foreground');
    }
    public set foreground(value: string) {
        this._foreground = value;
    }
    public resetForeground() {
        this._foreground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get foregroundInput() {
        return this._foreground;
    }
}
export interface SecondaryProperty {
    /**
    * The background color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background CcBrand#background}
    */
    readonly background?: string;
    /**
    * The foreground color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground CcBrand#foreground}
    */
    readonly foreground?: string;
}
export class SecondaryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SecondaryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._background !== undefined) {
            hasAnyValues = true;
            internalValueResult.background = this._background;
        }
        if (this._foreground !== undefined) {
            hasAnyValues = true;
            internalValueResult.foreground = this._foreground;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SecondaryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._background = undefined;
            this._foreground = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._background = value.background;
            this._foreground = value.foreground;
        }
    }

    // background - computed: true, optional: true, required: false
    private _background?: string; 
    public get background() {
        return this.getStringAttribute('background');
    }
    public set background(value: string) {
        this._background = value;
    }
    public resetBackground() {
        this._background = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backgroundInput() {
        return this._background;
    }

    // foreground - computed: true, optional: true, required: false
    private _foreground?: string; 
    public get foreground() {
        return this.getStringAttribute('foreground');
    }
    public set foreground(value: string) {
        this._foreground = value;
    }
    public resetForeground() {
        this._foreground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get foregroundInput() {
        return this._foreground;
    }
}
export interface SuccessProperty {
    /**
    * The background color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background CcBrand#background}
    */
    readonly background?: string;
    /**
    * The foreground color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground CcBrand#foreground}
    */
    readonly foreground?: string;
}
export class SuccessPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SuccessProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._background !== undefined) {
            hasAnyValues = true;
            internalValueResult.background = this._background;
        }
        if (this._foreground !== undefined) {
            hasAnyValues = true;
            internalValueResult.foreground = this._foreground;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SuccessProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._background = undefined;
            this._foreground = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._background = value.background;
            this._foreground = value.foreground;
        }
    }

    // background - computed: true, optional: true, required: false
    private _background?: string; 
    public get background() {
        return this.getStringAttribute('background');
    }
    public set background(value: string) {
        this._background = value;
    }
    public resetBackground() {
        this._background = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backgroundInput() {
        return this._background;
    }

    // foreground - computed: true, optional: true, required: false
    private _foreground?: string; 
    public get foreground() {
        return this.getStringAttribute('foreground');
    }
    public set foreground(value: string) {
        this._foreground = value;
    }
    public resetForeground() {
        this._foreground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get foregroundInput() {
        return this._foreground;
    }
}
export interface WarningProperty {
    /**
    * The background color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background CcBrand#background}
    */
    readonly background?: string;
    /**
    * The foreground color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground CcBrand#foreground}
    */
    readonly foreground?: string;
}
export class WarningPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WarningProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._background !== undefined) {
            hasAnyValues = true;
            internalValueResult.background = this._background;
        }
        if (this._foreground !== undefined) {
            hasAnyValues = true;
            internalValueResult.foreground = this._foreground;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WarningProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._background = undefined;
            this._foreground = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._background = value.background;
            this._foreground = value.foreground;
        }
    }

    // background - computed: true, optional: true, required: false
    private _background?: string; 
    public get background() {
        return this.getStringAttribute('background');
    }
    public set background(value: string) {
        this._background = value;
    }
    public resetBackground() {
        this._background = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backgroundInput() {
        return this._background;
    }

    // foreground - computed: true, optional: true, required: false
    private _foreground?: string; 
    public get foreground() {
        return this.getStringAttribute('foreground');
    }
    public set foreground(value: string) {
        this._foreground = value;
    }
    public resetForeground() {
        this._foreground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get foregroundInput() {
        return this._foreground;
    }
}
export interface BrandColorPaletteProperty {
    /**
    * The palette colors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#accent CcBrand#accent}
    */
    readonly accent?: AccentProperty;
    /**
    * The palette colors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#danger CcBrand#danger}
    */
    readonly danger?: DangerProperty;
    /**
    * The palette colors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#dimension CcBrand#dimension}
    */
    readonly dimension?: DimensionProperty;
    /**
    * The palette colors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#info CcBrand#info}
    */
    readonly info?: InfoProperty;
    /**
    * The palette colors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#measure CcBrand#measure}
    */
    readonly measure?: MeasureProperty;
    /**
    * The palette colors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#primary CcBrand#primary}
    */
    readonly primary?: PrimaryProperty;
    /**
    * The palette colors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#secondary CcBrand#secondary}
    */
    readonly secondary?: SecondaryProperty;
    /**
    * The palette colors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#success CcBrand#success}
    */
    readonly success?: SuccessProperty;
    /**
    * The palette colors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#warning CcBrand#warning}
    */
    readonly warning?: WarningProperty;
}
export class BrandColorPalettePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BrandColorPaletteProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accent?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accent = this._accent?.internalValue;
        }
        if (this._danger?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.danger = this._danger?.internalValue;
        }
        if (this._dimension?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimension = this._dimension?.internalValue;
        }
        if (this._info?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.info = this._info?.internalValue;
        }
        if (this._measure?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.measure = this._measure?.internalValue;
        }
        if (this._primary?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.primary = this._primary?.internalValue;
        }
        if (this._secondary?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.secondary = this._secondary?.internalValue;
        }
        if (this._success?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.success = this._success?.internalValue;
        }
        if (this._warning?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.warning = this._warning?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BrandColorPaletteProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accent.internalValue = undefined;
            this._danger.internalValue = undefined;
            this._dimension.internalValue = undefined;
            this._info.internalValue = undefined;
            this._measure.internalValue = undefined;
            this._primary.internalValue = undefined;
            this._secondary.internalValue = undefined;
            this._success.internalValue = undefined;
            this._warning.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accent.internalValue = value.accent;
            this._danger.internalValue = value.danger;
            this._dimension.internalValue = value.dimension;
            this._info.internalValue = value.info;
            this._measure.internalValue = value.measure;
            this._primary.internalValue = value.primary;
            this._secondary.internalValue = value.secondary;
            this._success.internalValue = value.success;
            this._warning.internalValue = value.warning;
        }
    }

    // accent - computed: true, optional: true, required: false
    private _accent = new AccentPropertyOutputReference(this, "accent");
    public get accent() {
        return this._accent;
    }
    public putAccent(value: AccentProperty) {
        this._accent.internalValue = value;
    }
    public resetAccent() {
        this._accent.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accentInput() {
        return this._accent.internalValue;
    }

    // danger - computed: true, optional: true, required: false
    private _danger = new DangerPropertyOutputReference(this, "danger");
    public get danger() {
        return this._danger;
    }
    public putDanger(value: DangerProperty) {
        this._danger.internalValue = value;
    }
    public resetDanger() {
        this._danger.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dangerInput() {
        return this._danger.internalValue;
    }

    // dimension - computed: true, optional: true, required: false
    private _dimension = new DimensionPropertyOutputReference(this, "dimension");
    public get dimension() {
        return this._dimension;
    }
    public putDimension(value: DimensionProperty) {
        this._dimension.internalValue = value;
    }
    public resetDimension() {
        this._dimension.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionInput() {
        return this._dimension.internalValue;
    }

    // info - computed: true, optional: true, required: false
    private _info = new InfoPropertyOutputReference(this, "info");
    public get info() {
        return this._info;
    }
    public putInfo(value: InfoProperty) {
        this._info.internalValue = value;
    }
    public resetInfo() {
        this._info.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get infoInput() {
        return this._info.internalValue;
    }

    // measure - computed: true, optional: true, required: false
    private _measure = new MeasurePropertyOutputReference(this, "measure");
    public get measure() {
        return this._measure;
    }
    public putMeasure(value: MeasureProperty) {
        this._measure.internalValue = value;
    }
    public resetMeasure() {
        this._measure.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get measureInput() {
        return this._measure.internalValue;
    }

    // primary - computed: true, optional: true, required: false
    private _primary = new PrimaryPropertyOutputReference(this, "primary");
    public get primary() {
        return this._primary;
    }
    public putPrimary(value: PrimaryProperty) {
        this._primary.internalValue = value;
    }
    public resetPrimary() {
        this._primary.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryInput() {
        return this._primary.internalValue;
    }

    // secondary - computed: true, optional: true, required: false
    private _secondary = new SecondaryPropertyOutputReference(this, "secondary");
    public get secondary() {
        return this._secondary;
    }
    public putSecondary(value: SecondaryProperty) {
        this._secondary.internalValue = value;
    }
    public resetSecondary() {
        this._secondary.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryInput() {
        return this._secondary.internalValue;
    }

    // success - computed: true, optional: true, required: false
    private _success = new SuccessPropertyOutputReference(this, "success");
    public get success() {
        return this._success;
    }
    public putSuccess(value: SuccessProperty) {
        this._success.internalValue = value;
    }
    public resetSuccess() {
        this._success.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get successInput() {
        return this._success.internalValue;
    }

    // warning - computed: true, optional: true, required: false
    private _warning = new WarningPropertyOutputReference(this, "warning");
    public get warning() {
        return this._warning;
    }
    public putWarning(value: WarningProperty) {
        this._warning.internalValue = value;
    }
    public resetWarning() {
        this._warning.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warningInput() {
        return this._warning.internalValue;
    }
}
export interface ContextualNavbarProperty {
    /**
    * The background color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background CcBrand#background}
    */
    readonly background?: string;
    /**
    * The foreground color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground CcBrand#foreground}
    */
    readonly foreground?: string;
}
export class ContextualNavbarPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContextualNavbarProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._background !== undefined) {
            hasAnyValues = true;
            internalValueResult.background = this._background;
        }
        if (this._foreground !== undefined) {
            hasAnyValues = true;
            internalValueResult.foreground = this._foreground;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContextualNavbarProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._background = undefined;
            this._foreground = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._background = value.background;
            this._foreground = value.foreground;
        }
    }

    // background - computed: true, optional: true, required: false
    private _background?: string; 
    public get background() {
        return this.getStringAttribute('background');
    }
    public set background(value: string) {
        this._background = value;
    }
    public resetBackground() {
        this._background = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backgroundInput() {
        return this._background;
    }

    // foreground - computed: true, optional: true, required: false
    private _foreground?: string; 
    public get foreground() {
        return this.getStringAttribute('foreground');
    }
    public set foreground(value: string) {
        this._foreground = value;
    }
    public resetForeground() {
        this._foreground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get foregroundInput() {
        return this._foreground;
    }
}
export interface GlobalNavbarProperty {
    /**
    * The background color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#background CcBrand#background}
    */
    readonly background?: string;
    /**
    * The foreground color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#foreground CcBrand#foreground}
    */
    readonly foreground?: string;
}
export class GlobalNavbarPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GlobalNavbarProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._background !== undefined) {
            hasAnyValues = true;
            internalValueResult.background = this._background;
        }
        if (this._foreground !== undefined) {
            hasAnyValues = true;
            internalValueResult.foreground = this._foreground;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlobalNavbarProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._background = undefined;
            this._foreground = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._background = value.background;
            this._foreground = value.foreground;
        }
    }

    // background - computed: true, optional: true, required: false
    private _background?: string; 
    public get background() {
        return this.getStringAttribute('background');
    }
    public set background(value: string) {
        this._background = value;
    }
    public resetBackground() {
        this._background = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backgroundInput() {
        return this._background;
    }

    // foreground - computed: true, optional: true, required: false
    private _foreground?: string; 
    public get foreground() {
        return this.getStringAttribute('foreground');
    }
    public set foreground(value: string) {
        this._foreground = value;
    }
    public resetForeground() {
        this._foreground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get foregroundInput() {
        return this._foreground;
    }
}
export interface NavbarStyleProperty {
    /**
    * The palette colors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#contextual_navbar CcBrand#contextual_navbar}
    */
    readonly contextualNavbar?: ContextualNavbarProperty;
    /**
    * The palette colors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#global_navbar CcBrand#global_navbar}
    */
    readonly globalNavbar?: GlobalNavbarProperty;
}
export class NavbarStylePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NavbarStyleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contextualNavbar?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contextualNavbar = this._contextualNavbar?.internalValue;
        }
        if (this._globalNavbar?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.globalNavbar = this._globalNavbar?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NavbarStyleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contextualNavbar.internalValue = undefined;
            this._globalNavbar.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contextualNavbar.internalValue = value.contextualNavbar;
            this._globalNavbar.internalValue = value.globalNavbar;
        }
    }

    // contextual_navbar - computed: true, optional: true, required: false
    private _contextualNavbar = new ContextualNavbarPropertyOutputReference(this, "contextual_navbar");
    public get contextualNavbar() {
        return this._contextualNavbar;
    }
    public putContextualNavbar(value: ContextualNavbarProperty) {
        this._contextualNavbar.internalValue = value;
    }
    public resetContextualNavbar() {
        this._contextualNavbar.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contextualNavbarInput() {
        return this._contextualNavbar.internalValue;
    }

    // global_navbar - computed: true, optional: true, required: false
    private _globalNavbar = new GlobalNavbarPropertyOutputReference(this, "global_navbar");
    public get globalNavbar() {
        return this._globalNavbar;
    }
    public putGlobalNavbar(value: GlobalNavbarProperty) {
        this._globalNavbar.internalValue = value;
    }
    public resetGlobalNavbar() {
        this._globalNavbar.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalNavbarInput() {
        return this._globalNavbar.internalValue;
    }
}
export interface BrandElementStyleProperty {
    /**
    * The navigation bar style.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#navbar_style CcBrand#navbar_style}
    */
    readonly navbarStyle?: NavbarStyleProperty;
}
export class BrandElementStylePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BrandElementStyleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._navbarStyle?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.navbarStyle = this._navbarStyle?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BrandElementStyleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._navbarStyle.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._navbarStyle.internalValue = value.navbarStyle;
        }
    }

    // navbar_style - computed: true, optional: true, required: false
    private _navbarStyle = new NavbarStylePropertyOutputReference(this, "navbar_style");
    public get navbarStyle() {
        return this._navbarStyle;
    }
    public putNavbarStyle(value: NavbarStyleProperty) {
        this._navbarStyle.internalValue = value;
    }
    public resetNavbarStyle() {
        this._navbarStyle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get navbarStyleInput() {
        return this._navbarStyle.internalValue;
    }
}
export interface ApplicationThemeProperty {
    /**
    * The color palette.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#brand_color_palette CcBrand#brand_color_palette}
    */
    readonly brandColorPalette?: BrandColorPaletteProperty;
    /**
    * The element style.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#brand_element_style CcBrand#brand_element_style}
    */
    readonly brandElementStyle?: BrandElementStyleProperty;
}
export class ApplicationThemePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApplicationThemeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._brandColorPalette?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.brandColorPalette = this._brandColorPalette?.internalValue;
        }
        if (this._brandElementStyle?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.brandElementStyle = this._brandElementStyle?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApplicationThemeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._brandColorPalette.internalValue = undefined;
            this._brandElementStyle.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._brandColorPalette.internalValue = value.brandColorPalette;
            this._brandElementStyle.internalValue = value.brandElementStyle;
        }
    }

    // brand_color_palette - computed: true, optional: true, required: false
    private _brandColorPalette = new BrandColorPalettePropertyOutputReference(this, "brand_color_palette");
    public get brandColorPalette() {
        return this._brandColorPalette;
    }
    public putBrandColorPalette(value: BrandColorPaletteProperty) {
        this._brandColorPalette.internalValue = value;
    }
    public resetBrandColorPalette() {
        this._brandColorPalette.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get brandColorPaletteInput() {
        return this._brandColorPalette.internalValue;
    }

    // brand_element_style - computed: true, optional: true, required: false
    private _brandElementStyle = new BrandElementStylePropertyOutputReference(this, "brand_element_style");
    public get brandElementStyle() {
        return this._brandElementStyle;
    }
    public putBrandElementStyle(value: BrandElementStyleProperty) {
        this._brandElementStyle.internalValue = value;
    }
    public resetBrandElementStyle() {
        this._brandElementStyle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get brandElementStyleInput() {
        return this._brandElementStyle.internalValue;
    }
}
export interface BrandDefinitionProperty {
    /**
    * The application theme.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#application_theme CcBrand#application_theme}
    */
    readonly applicationTheme?: ApplicationThemeProperty;
    /**
    * The name of the brand.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#brand_name CcBrand#brand_name}
    */
    readonly brandName?: string;
    /**
    * The description of the brand.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#description CcBrand#description}
    */
    readonly description?: string;
}
export class BrandDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BrandDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applicationTheme?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationTheme = this._applicationTheme?.internalValue;
        }
        if (this._brandName !== undefined) {
            hasAnyValues = true;
            internalValueResult.brandName = this._brandName;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BrandDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applicationTheme.internalValue = undefined;
            this._brandName = undefined;
            this._description = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applicationTheme.internalValue = value.applicationTheme;
            this._brandName = value.brandName;
            this._description = value.description;
        }
    }

    // application_theme - computed: true, optional: true, required: false
    private _applicationTheme = new ApplicationThemePropertyOutputReference(this, "application_theme");
    public get applicationTheme() {
        return this._applicationTheme;
    }
    public putApplicationTheme(value: ApplicationThemeProperty) {
        this._applicationTheme.internalValue = value;
    }
    public resetApplicationTheme() {
        this._applicationTheme.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationThemeInput() {
        return this._applicationTheme.internalValue;
    }

    // brand_name - computed: true, optional: true, required: false
    private _brandName?: string; 
    public get brandName() {
        return this.getStringAttribute('brand_name');
    }
    public set brandName(value: string) {
        this._brandName = value;
    }
    public resetBrandName() {
        this._brandName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get brandNameInput() {
        return this._brandName;
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
}
export interface TagsProperty {
    /**
    * Tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#key CcBrand#key}
    */
    readonly key?: string;
    /**
    * Tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_brand#value CcBrand#value}
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
