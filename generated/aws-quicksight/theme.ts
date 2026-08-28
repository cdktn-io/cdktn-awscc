// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcThemeProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#aws_account_id CcTheme#aws_account_id}
    */
    readonly awsAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#base_theme_id CcTheme#base_theme_id}
    */
    readonly baseThemeId: string;
    /**
    * <p>The theme configuration. This configuration contains all of the display properties for
    *             a theme.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#configuration CcTheme#configuration}
    */
    readonly configuration: CcTheme.ThemeConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#name CcTheme#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#permissions CcTheme#permissions}
    */
    readonly permissions?: CcTheme.ResourcePermissionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#tags CcTheme#tags}
    */
    readonly tags?: CcTheme.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#theme_id CcTheme#theme_id}
    */
    readonly themeId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#version_description CcTheme#version_description}
    */
    readonly versionDescription?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme awscc_quicksight_theme}
*/
export class CcTheme extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_quicksight_theme";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTheme resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTheme to import
    * @param importFromId The id of the existing CcTheme that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTheme to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_theme", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme awscc_quicksight_theme} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcThemeProps
    */
    public constructor(scope: Construct, id: string, config: CcThemeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_theme',
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
        this._awsAccountId = config.awsAccountId;
        this._baseThemeId = config.baseThemeId;
        this._configuration.internalValue = config.configuration;
        this._name = config.name;
        this._permissions.internalValue = config.permissions;
        this._tags.internalValue = config.tags;
        this._themeId = config.themeId;
        this._versionDescription = config.versionDescription;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // aws_account_id - computed: false, optional: false, required: true
    private _awsAccountId?: string; 
    public get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }
    public set awsAccountId(value: string) {
        this._awsAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountIdInput() {
        return this._awsAccountId;
    }

    // base_theme_id - computed: false, optional: false, required: true
    private _baseThemeId?: string; 
    public get baseThemeId() {
        return this.getStringAttribute('base_theme_id');
    }
    public set baseThemeId(value: string) {
        this._baseThemeId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get baseThemeIdInput() {
        return this._baseThemeId;
    }

    // configuration - computed: false, optional: false, required: true
    private _configuration = new CcTheme.ThemeConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcTheme.ThemeConfigurationProperty) {
        this._configuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
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

    // permissions - computed: true, optional: true, required: false
    private _permissions = new CcTheme.ResourcePermissionPropertyList(this, "permissions", false);
    public get permissions() {
        return this._permissions;
    }
    public putPermissions(value: CcTheme.ResourcePermissionProperty[] | cdktn.IResolvable) {
        this._permissions.internalValue = value;
    }
    public resetPermissions() {
        this._permissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsInput() {
        return this._permissions.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTheme.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTheme.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // theme_id - computed: false, optional: false, required: true
    private _themeId?: string; 
    public get themeId() {
        return this.getStringAttribute('theme_id');
    }
    public set themeId(value: string) {
        this._themeId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get themeIdInput() {
        return this._themeId;
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }

    // version - computed: true, optional: false, required: false
    private _version = new CcTheme.VersionPropertyOutputReference(this, "version");
    public get version() {
        return this._version;
    }

    // version_description - computed: true, optional: true, required: false
    private _versionDescription?: string; 
    public get versionDescription() {
        return this.getStringAttribute('version_description');
    }
    public set versionDescription(value: string) {
        this._versionDescription = value;
    }
    public resetVersionDescription() {
        this._versionDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionDescriptionInput() {
        return this._versionDescription;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
            base_theme_id: cdktn.stringToTerraform(this._baseThemeId),
            configuration: ccThemeThemeConfigurationPropertyToTerraform(this._configuration.internalValue),
            name: cdktn.stringToTerraform(this._name),
            permissions: cdktn.listMapper(ccThemeResourcePermissionPropertyToTerraform, false)(this._permissions.internalValue),
            tags: cdktn.listMapper(ccThemeTagPropertyToTerraform, false)(this._tags.internalValue),
            theme_id: cdktn.stringToTerraform(this._themeId),
            version_description: cdktn.stringToTerraform(this._versionDescription),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            aws_account_id: {
                value: cdktn.stringToHclTerraform(this._awsAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            base_theme_id: {
                value: cdktn.stringToHclTerraform(this._baseThemeId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configuration: {
                value: ccThemeThemeConfigurationPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTheme.ThemeConfigurationProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            permissions: {
                value: cdktn.listMapperHcl(ccThemeResourcePermissionPropertyToHclTerraform, false)(this._permissions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTheme.ResourcePermissionPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccThemeTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTheme.TagPropertyList",
            },
            theme_id: {
                value: cdktn.stringToHclTerraform(this._themeId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            version_description: {
                value: cdktn.stringToHclTerraform(this._versionDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccThemeDataColorPalettePropertyToTerraform(struct?: CcTheme.DataColorPaletteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        colors: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.colors),
        empty_fill_color: cdktn.stringToTerraform(struct!.emptyFillColor),
        min_max_gradient: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.minMaxGradient),
    }
}


export function ccThemeDataColorPalettePropertyToHclTerraform(struct?: CcTheme.DataColorPaletteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        colors: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.colors),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        empty_fill_color: {
            value: cdktn.stringToHclTerraform(struct!.emptyFillColor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        min_max_gradient: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.minMaxGradient),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccThemeBorderStylePropertyToTerraform(struct?: CcTheme.BorderStyleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        show: cdktn.booleanToTerraform(struct!.show),
    }
}


export function ccThemeBorderStylePropertyToHclTerraform(struct?: CcTheme.BorderStyleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        show: {
            value: cdktn.booleanToHclTerraform(struct!.show),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccThemeTileStylePropertyToTerraform(struct?: CcTheme.TileStyleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        border: ccThemeBorderStylePropertyToTerraform(struct!.border),
    }
}


export function ccThemeTileStylePropertyToHclTerraform(struct?: CcTheme.TileStyleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        border: {
            value: ccThemeBorderStylePropertyToHclTerraform(struct!.border),
            isBlock: true,
            type: "struct",
            storageClassType: "BorderStyleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccThemeGutterStylePropertyToTerraform(struct?: CcTheme.GutterStyleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        show: cdktn.booleanToTerraform(struct!.show),
    }
}


export function ccThemeGutterStylePropertyToHclTerraform(struct?: CcTheme.GutterStyleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        show: {
            value: cdktn.booleanToHclTerraform(struct!.show),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccThemeMarginStylePropertyToTerraform(struct?: CcTheme.MarginStyleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        show: cdktn.booleanToTerraform(struct!.show),
    }
}


export function ccThemeMarginStylePropertyToHclTerraform(struct?: CcTheme.MarginStyleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        show: {
            value: cdktn.booleanToHclTerraform(struct!.show),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccThemeTileLayoutStylePropertyToTerraform(struct?: CcTheme.TileLayoutStyleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        gutter: ccThemeGutterStylePropertyToTerraform(struct!.gutter),
        margin: ccThemeMarginStylePropertyToTerraform(struct!.margin),
    }
}


export function ccThemeTileLayoutStylePropertyToHclTerraform(struct?: CcTheme.TileLayoutStyleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        gutter: {
            value: ccThemeGutterStylePropertyToHclTerraform(struct!.gutter),
            isBlock: true,
            type: "struct",
            storageClassType: "GutterStyleProperty",
        },
        margin: {
            value: ccThemeMarginStylePropertyToHclTerraform(struct!.margin),
            isBlock: true,
            type: "struct",
            storageClassType: "MarginStyleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccThemeSheetStylePropertyToTerraform(struct?: CcTheme.SheetStyleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        tile: ccThemeTileStylePropertyToTerraform(struct!.tile),
        tile_layout: ccThemeTileLayoutStylePropertyToTerraform(struct!.tileLayout),
    }
}


export function ccThemeSheetStylePropertyToHclTerraform(struct?: CcTheme.SheetStyleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        tile: {
            value: ccThemeTileStylePropertyToHclTerraform(struct!.tile),
            isBlock: true,
            type: "struct",
            storageClassType: "TileStyleProperty",
        },
        tile_layout: {
            value: ccThemeTileLayoutStylePropertyToHclTerraform(struct!.tileLayout),
            isBlock: true,
            type: "struct",
            storageClassType: "TileLayoutStyleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccThemeFontPropertyToTerraform(struct?: CcTheme.FontProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        font_family: cdktn.stringToTerraform(struct!.fontFamily),
    }
}


export function ccThemeFontPropertyToHclTerraform(struct?: CcTheme.FontProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        font_family: {
            value: cdktn.stringToHclTerraform(struct!.fontFamily),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccThemeTypographyPropertyToTerraform(struct?: CcTheme.TypographyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        font_families: cdktn.listMapper(ccThemeFontPropertyToTerraform, false)(struct!.fontFamilies),
    }
}


export function ccThemeTypographyPropertyToHclTerraform(struct?: CcTheme.TypographyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        font_families: {
            value: cdktn.listMapperHcl(ccThemeFontPropertyToHclTerraform, false)(struct!.fontFamilies),
            isBlock: true,
            type: "list",
            storageClassType: "FontPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccThemeUIColorPalettePropertyToTerraform(struct?: CcTheme.UIColorPaletteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accent: cdktn.stringToTerraform(struct!.accent),
        accent_foreground: cdktn.stringToTerraform(struct!.accentForeground),
        danger: cdktn.stringToTerraform(struct!.danger),
        danger_foreground: cdktn.stringToTerraform(struct!.dangerForeground),
        dimension: cdktn.stringToTerraform(struct!.dimension),
        dimension_foreground: cdktn.stringToTerraform(struct!.dimensionForeground),
        measure: cdktn.stringToTerraform(struct!.measure),
        measure_foreground: cdktn.stringToTerraform(struct!.measureForeground),
        primary_background: cdktn.stringToTerraform(struct!.primaryBackground),
        primary_foreground: cdktn.stringToTerraform(struct!.primaryForeground),
        secondary_background: cdktn.stringToTerraform(struct!.secondaryBackground),
        secondary_foreground: cdktn.stringToTerraform(struct!.secondaryForeground),
        success: cdktn.stringToTerraform(struct!.success),
        success_foreground: cdktn.stringToTerraform(struct!.successForeground),
        warning: cdktn.stringToTerraform(struct!.warning),
        warning_foreground: cdktn.stringToTerraform(struct!.warningForeground),
    }
}


export function ccThemeUIColorPalettePropertyToHclTerraform(struct?: CcTheme.UIColorPaletteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accent: {
            value: cdktn.stringToHclTerraform(struct!.accent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        accent_foreground: {
            value: cdktn.stringToHclTerraform(struct!.accentForeground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        danger: {
            value: cdktn.stringToHclTerraform(struct!.danger),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        danger_foreground: {
            value: cdktn.stringToHclTerraform(struct!.dangerForeground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dimension: {
            value: cdktn.stringToHclTerraform(struct!.dimension),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dimension_foreground: {
            value: cdktn.stringToHclTerraform(struct!.dimensionForeground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        measure: {
            value: cdktn.stringToHclTerraform(struct!.measure),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        measure_foreground: {
            value: cdktn.stringToHclTerraform(struct!.measureForeground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        primary_background: {
            value: cdktn.stringToHclTerraform(struct!.primaryBackground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        primary_foreground: {
            value: cdktn.stringToHclTerraform(struct!.primaryForeground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secondary_background: {
            value: cdktn.stringToHclTerraform(struct!.secondaryBackground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secondary_foreground: {
            value: cdktn.stringToHclTerraform(struct!.secondaryForeground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        success: {
            value: cdktn.stringToHclTerraform(struct!.success),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        success_foreground: {
            value: cdktn.stringToHclTerraform(struct!.successForeground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        warning: {
            value: cdktn.stringToHclTerraform(struct!.warning),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        warning_foreground: {
            value: cdktn.stringToHclTerraform(struct!.warningForeground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccThemeThemeConfigurationPropertyToTerraform(struct?: CcTheme.ThemeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_color_palette: ccThemeDataColorPalettePropertyToTerraform(struct!.dataColorPalette),
        sheet: ccThemeSheetStylePropertyToTerraform(struct!.sheet),
        typography: ccThemeTypographyPropertyToTerraform(struct!.typography),
        ui_color_palette: ccThemeUIColorPalettePropertyToTerraform(struct!.uiColorPalette),
    }
}


export function ccThemeThemeConfigurationPropertyToHclTerraform(struct?: CcTheme.ThemeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_color_palette: {
            value: ccThemeDataColorPalettePropertyToHclTerraform(struct!.dataColorPalette),
            isBlock: true,
            type: "struct",
            storageClassType: "DataColorPaletteProperty",
        },
        sheet: {
            value: ccThemeSheetStylePropertyToHclTerraform(struct!.sheet),
            isBlock: true,
            type: "struct",
            storageClassType: "SheetStyleProperty",
        },
        typography: {
            value: ccThemeTypographyPropertyToHclTerraform(struct!.typography),
            isBlock: true,
            type: "struct",
            storageClassType: "TypographyProperty",
        },
        ui_color_palette: {
            value: ccThemeUIColorPalettePropertyToHclTerraform(struct!.uiColorPalette),
            isBlock: true,
            type: "struct",
            storageClassType: "UIColorPaletteProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccThemeResourcePermissionPropertyToTerraform(struct?: CcTheme.ResourcePermissionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
        principal: cdktn.stringToTerraform(struct!.principal),
    }
}


export function ccThemeResourcePermissionPropertyToHclTerraform(struct?: CcTheme.ResourcePermissionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        principal: {
            value: cdktn.stringToHclTerraform(struct!.principal),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccThemeTagPropertyToTerraform(struct?: CcTheme.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccThemeTagPropertyToHclTerraform(struct?: CcTheme.TagProperty | cdktn.IResolvable): any {
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


export function ccThemeVersionConfigurationDataColorPalettePropertyToTerraform(struct?: CcTheme.VersionConfigurationDataColorPaletteProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccThemeVersionConfigurationDataColorPalettePropertyToHclTerraform(struct?: CcTheme.VersionConfigurationDataColorPaletteProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccThemeBorderPropertyToTerraform(struct?: CcTheme.BorderProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccThemeBorderPropertyToHclTerraform(struct?: CcTheme.BorderProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccThemeTilePropertyToTerraform(struct?: CcTheme.TileProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccThemeTilePropertyToHclTerraform(struct?: CcTheme.TileProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccThemeGutterPropertyToTerraform(struct?: CcTheme.GutterProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccThemeGutterPropertyToHclTerraform(struct?: CcTheme.GutterProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccThemeMarginPropertyToTerraform(struct?: CcTheme.MarginProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccThemeMarginPropertyToHclTerraform(struct?: CcTheme.MarginProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccThemeTileLayoutPropertyToTerraform(struct?: CcTheme.TileLayoutProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccThemeTileLayoutPropertyToHclTerraform(struct?: CcTheme.TileLayoutProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccThemeSheetPropertyToTerraform(struct?: CcTheme.SheetProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccThemeSheetPropertyToHclTerraform(struct?: CcTheme.SheetProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccThemeFontFamiliesPropertyToTerraform(struct?: CcTheme.FontFamiliesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccThemeFontFamiliesPropertyToHclTerraform(struct?: CcTheme.FontFamiliesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccThemeVersionConfigurationTypographyPropertyToTerraform(struct?: CcTheme.VersionConfigurationTypographyProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccThemeVersionConfigurationTypographyPropertyToHclTerraform(struct?: CcTheme.VersionConfigurationTypographyProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccThemeUiColorPalettePropertyToTerraform(struct?: CcTheme.UiColorPaletteProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccThemeUiColorPalettePropertyToHclTerraform(struct?: CcTheme.UiColorPaletteProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccThemeConfigurationPropertyToTerraform(struct?: CcTheme.ConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccThemeConfigurationPropertyToHclTerraform(struct?: CcTheme.ConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccThemeErrorsPropertyToTerraform(struct?: CcTheme.ErrorsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccThemeErrorsPropertyToHclTerraform(struct?: CcTheme.ErrorsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccThemeVersionPropertyToTerraform(struct?: CcTheme.VersionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccThemeVersionPropertyToHclTerraform(struct?: CcTheme.VersionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcTheme {
export interface DataColorPaletteProperty {
    /**
    * <p>The hexadecimal codes for the colors.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#colors CcTheme#colors}
    */
    readonly colors?: string[];
    /**
    * <p>The hexadecimal code of a color that applies to charts where a lack of data is
    *             highlighted.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#empty_fill_color CcTheme#empty_fill_color}
    */
    readonly emptyFillColor?: string;
    /**
    * <p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#min_max_gradient CcTheme#min_max_gradient}
    */
    readonly minMaxGradient?: string[];
}
export class DataColorPalettePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataColorPaletteProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._colors !== undefined) {
            hasAnyValues = true;
            internalValueResult.colors = this._colors;
        }
        if (this._emptyFillColor !== undefined) {
            hasAnyValues = true;
            internalValueResult.emptyFillColor = this._emptyFillColor;
        }
        if (this._minMaxGradient !== undefined) {
            hasAnyValues = true;
            internalValueResult.minMaxGradient = this._minMaxGradient;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataColorPaletteProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._colors = undefined;
            this._emptyFillColor = undefined;
            this._minMaxGradient = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._colors = value.colors;
            this._emptyFillColor = value.emptyFillColor;
            this._minMaxGradient = value.minMaxGradient;
        }
    }

    // colors - computed: true, optional: true, required: false
    private _colors?: string[]; 
    public get colors() {
        return this.getListAttribute('colors');
    }
    public set colors(value: string[]) {
        this._colors = value;
    }
    public resetColors() {
        this._colors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get colorsInput() {
        return this._colors;
    }

    // empty_fill_color - computed: true, optional: true, required: false
    private _emptyFillColor?: string; 
    public get emptyFillColor() {
        return this.getStringAttribute('empty_fill_color');
    }
    public set emptyFillColor(value: string) {
        this._emptyFillColor = value;
    }
    public resetEmptyFillColor() {
        this._emptyFillColor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emptyFillColorInput() {
        return this._emptyFillColor;
    }

    // min_max_gradient - computed: true, optional: true, required: false
    private _minMaxGradient?: string[]; 
    public get minMaxGradient() {
        return this.getListAttribute('min_max_gradient');
    }
    public set minMaxGradient(value: string[]) {
        this._minMaxGradient = value;
    }
    public resetMinMaxGradient() {
        this._minMaxGradient = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minMaxGradientInput() {
        return this._minMaxGradient;
    }
}
export interface BorderStyleProperty {
    /**
    * <p>The option to enable display of borders for visuals.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#show CcTheme#show}
    */
    readonly show?: boolean | cdktn.IResolvable;
}
export class BorderStylePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BorderStyleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._show !== undefined) {
            hasAnyValues = true;
            internalValueResult.show = this._show;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BorderStyleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._show = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._show = value.show;
        }
    }

    // show - computed: true, optional: true, required: false
    private _show?: boolean | cdktn.IResolvable; 
    public get show() {
        return this.getBooleanAttribute('show');
    }
    public set show(value: boolean | cdktn.IResolvable) {
        this._show = value;
    }
    public resetShow() {
        this._show = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get showInput() {
        return this._show;
    }
}
export interface TileStyleProperty {
    /**
    * <p>The display options for tile borders for visuals.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#border CcTheme#border}
    */
    readonly border?: BorderStyleProperty;
}
export class TileStylePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TileStyleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._border?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.border = this._border?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TileStyleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._border.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._border.internalValue = value.border;
        }
    }

    // border - computed: true, optional: true, required: false
    private _border = new BorderStylePropertyOutputReference(this, "border");
    public get border() {
        return this._border;
    }
    public putBorder(value: BorderStyleProperty) {
        this._border.internalValue = value;
    }
    public resetBorder() {
        this._border.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get borderInput() {
        return this._border.internalValue;
    }
}
export interface GutterStyleProperty {
    /**
    * <p>This Boolean value controls whether to display a gutter space between sheet tiles.
    *         </p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#show CcTheme#show}
    */
    readonly show?: boolean | cdktn.IResolvable;
}
export class GutterStylePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GutterStyleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._show !== undefined) {
            hasAnyValues = true;
            internalValueResult.show = this._show;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GutterStyleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._show = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._show = value.show;
        }
    }

    // show - computed: true, optional: true, required: false
    private _show?: boolean | cdktn.IResolvable; 
    public get show() {
        return this.getBooleanAttribute('show');
    }
    public set show(value: boolean | cdktn.IResolvable) {
        this._show = value;
    }
    public resetShow() {
        this._show = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get showInput() {
        return this._show;
    }
}
export interface MarginStyleProperty {
    /**
    * <p>This Boolean value controls whether to display sheet margins.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#show CcTheme#show}
    */
    readonly show?: boolean | cdktn.IResolvable;
}
export class MarginStylePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MarginStyleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._show !== undefined) {
            hasAnyValues = true;
            internalValueResult.show = this._show;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MarginStyleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._show = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._show = value.show;
        }
    }

    // show - computed: true, optional: true, required: false
    private _show?: boolean | cdktn.IResolvable; 
    public get show() {
        return this.getBooleanAttribute('show');
    }
    public set show(value: boolean | cdktn.IResolvable) {
        this._show = value;
    }
    public resetShow() {
        this._show = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get showInput() {
        return this._show;
    }
}
export interface TileLayoutStyleProperty {
    /**
    * <p>The display options for gutter spacing between tiles on a sheet.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#gutter CcTheme#gutter}
    */
    readonly gutter?: GutterStyleProperty;
    /**
    * <p>The display options for margins around the outside edge of sheets.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#margin CcTheme#margin}
    */
    readonly margin?: MarginStyleProperty;
}
export class TileLayoutStylePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TileLayoutStyleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._gutter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gutter = this._gutter?.internalValue;
        }
        if (this._margin?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.margin = this._margin?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TileLayoutStyleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._gutter.internalValue = undefined;
            this._margin.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._gutter.internalValue = value.gutter;
            this._margin.internalValue = value.margin;
        }
    }

    // gutter - computed: true, optional: true, required: false
    private _gutter = new GutterStylePropertyOutputReference(this, "gutter");
    public get gutter() {
        return this._gutter;
    }
    public putGutter(value: GutterStyleProperty) {
        this._gutter.internalValue = value;
    }
    public resetGutter() {
        this._gutter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gutterInput() {
        return this._gutter.internalValue;
    }

    // margin - computed: true, optional: true, required: false
    private _margin = new MarginStylePropertyOutputReference(this, "margin");
    public get margin() {
        return this._margin;
    }
    public putMargin(value: MarginStyleProperty) {
        this._margin.internalValue = value;
    }
    public resetMargin() {
        this._margin.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get marginInput() {
        return this._margin.internalValue;
    }
}
export interface SheetStyleProperty {
    /**
    * <p>Display options related to tiles on a sheet.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#tile CcTheme#tile}
    */
    readonly tile?: TileStyleProperty;
    /**
    * <p>The display options for the layout of tiles on a sheet.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#tile_layout CcTheme#tile_layout}
    */
    readonly tileLayout?: TileLayoutStyleProperty;
}
export class SheetStylePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SheetStyleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tile?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tile = this._tile?.internalValue;
        }
        if (this._tileLayout?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tileLayout = this._tileLayout?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SheetStyleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tile.internalValue = undefined;
            this._tileLayout.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tile.internalValue = value.tile;
            this._tileLayout.internalValue = value.tileLayout;
        }
    }

    // tile - computed: true, optional: true, required: false
    private _tile = new TileStylePropertyOutputReference(this, "tile");
    public get tile() {
        return this._tile;
    }
    public putTile(value: TileStyleProperty) {
        this._tile.internalValue = value;
    }
    public resetTile() {
        this._tile.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tileInput() {
        return this._tile.internalValue;
    }

    // tile_layout - computed: true, optional: true, required: false
    private _tileLayout = new TileLayoutStylePropertyOutputReference(this, "tile_layout");
    public get tileLayout() {
        return this._tileLayout;
    }
    public putTileLayout(value: TileLayoutStyleProperty) {
        this._tileLayout.internalValue = value;
    }
    public resetTileLayout() {
        this._tileLayout.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tileLayoutInput() {
        return this._tileLayout.internalValue;
    }
}
export interface FontProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#font_family CcTheme#font_family}
    */
    readonly fontFamily?: string;
}
export class FontPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FontProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fontFamily !== undefined) {
            hasAnyValues = true;
            internalValueResult.fontFamily = this._fontFamily;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FontProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fontFamily = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fontFamily = value.fontFamily;
        }
    }

    // font_family - computed: true, optional: true, required: false
    private _fontFamily?: string; 
    public get fontFamily() {
        return this.getStringAttribute('font_family');
    }
    public set fontFamily(value: string) {
        this._fontFamily = value;
    }
    public resetFontFamily() {
        this._fontFamily = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fontFamilyInput() {
        return this._fontFamily;
    }
}

export class FontPropertyList extends cdktn.ComplexList {
    public internalValue? : FontProperty[] | cdktn.IResolvable

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
    public get(index: number): FontPropertyOutputReference {
        return new FontPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TypographyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#font_families CcTheme#font_families}
    */
    readonly fontFamilies?: FontProperty[] | cdktn.IResolvable;
}
export class TypographyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TypographyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fontFamilies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fontFamilies = this._fontFamilies?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TypographyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fontFamilies.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fontFamilies.internalValue = value.fontFamilies;
        }
    }

    // font_families - computed: true, optional: true, required: false
    private _fontFamilies = new FontPropertyList(this, "font_families", false);
    public get fontFamilies() {
        return this._fontFamilies;
    }
    public putFontFamilies(value: FontProperty[] | cdktn.IResolvable) {
        this._fontFamilies.internalValue = value;
    }
    public resetFontFamilies() {
        this._fontFamilies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fontFamiliesInput() {
        return this._fontFamilies.internalValue;
    }
}
export interface UIColorPaletteProperty {
    /**
    * <p>This color is that applies to selected states and buttons.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#accent CcTheme#accent}
    */
    readonly accent?: string;
    /**
    * <p>The foreground color that applies to any text or other elements that appear over the
    *             accent color.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#accent_foreground CcTheme#accent_foreground}
    */
    readonly accentForeground?: string;
    /**
    * <p>The color that applies to error messages.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#danger CcTheme#danger}
    */
    readonly danger?: string;
    /**
    * <p>The foreground color that applies to any text or other elements that appear over the
    *             error color.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#danger_foreground CcTheme#danger_foreground}
    */
    readonly dangerForeground?: string;
    /**
    * <p>The color that applies to the names of fields that are identified as
    *             dimensions.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#dimension CcTheme#dimension}
    */
    readonly dimension?: string;
    /**
    * <p>The foreground color that applies to any text or other elements that appear over the
    *             dimension color.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#dimension_foreground CcTheme#dimension_foreground}
    */
    readonly dimensionForeground?: string;
    /**
    * <p>The color that applies to the names of fields that are identified as measures.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#measure CcTheme#measure}
    */
    readonly measure?: string;
    /**
    * <p>The foreground color that applies to any text or other elements that appear over the
    *             measure color.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#measure_foreground CcTheme#measure_foreground}
    */
    readonly measureForeground?: string;
    /**
    * <p>The background color that applies to visuals and other high emphasis UI.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#primary_background CcTheme#primary_background}
    */
    readonly primaryBackground?: string;
    /**
    * <p>The color of text and other foreground elements that appear over the primary
    *             background regions, such as grid lines, borders, table banding, icons, and so on.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#primary_foreground CcTheme#primary_foreground}
    */
    readonly primaryForeground?: string;
    /**
    * <p>The background color that applies to the sheet background and sheet controls.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#secondary_background CcTheme#secondary_background}
    */
    readonly secondaryBackground?: string;
    /**
    * <p>The foreground color that applies to any sheet title, sheet control text, or UI that
    *             appears over the secondary background.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#secondary_foreground CcTheme#secondary_foreground}
    */
    readonly secondaryForeground?: string;
    /**
    * <p>The color that applies to success messages, for example the check mark for a
    *             successful download.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#success CcTheme#success}
    */
    readonly success?: string;
    /**
    * <p>The foreground color that applies to any text or other elements that appear over the
    *             success color.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#success_foreground CcTheme#success_foreground}
    */
    readonly successForeground?: string;
    /**
    * <p>This color that applies to warning and informational messages.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#warning CcTheme#warning}
    */
    readonly warning?: string;
    /**
    * <p>The foreground color that applies to any text or other elements that appear over the
    *             warning color.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#warning_foreground CcTheme#warning_foreground}
    */
    readonly warningForeground?: string;
}
export class UIColorPalettePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UIColorPaletteProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accent !== undefined) {
            hasAnyValues = true;
            internalValueResult.accent = this._accent;
        }
        if (this._accentForeground !== undefined) {
            hasAnyValues = true;
            internalValueResult.accentForeground = this._accentForeground;
        }
        if (this._danger !== undefined) {
            hasAnyValues = true;
            internalValueResult.danger = this._danger;
        }
        if (this._dangerForeground !== undefined) {
            hasAnyValues = true;
            internalValueResult.dangerForeground = this._dangerForeground;
        }
        if (this._dimension !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimension = this._dimension;
        }
        if (this._dimensionForeground !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensionForeground = this._dimensionForeground;
        }
        if (this._measure !== undefined) {
            hasAnyValues = true;
            internalValueResult.measure = this._measure;
        }
        if (this._measureForeground !== undefined) {
            hasAnyValues = true;
            internalValueResult.measureForeground = this._measureForeground;
        }
        if (this._primaryBackground !== undefined) {
            hasAnyValues = true;
            internalValueResult.primaryBackground = this._primaryBackground;
        }
        if (this._primaryForeground !== undefined) {
            hasAnyValues = true;
            internalValueResult.primaryForeground = this._primaryForeground;
        }
        if (this._secondaryBackground !== undefined) {
            hasAnyValues = true;
            internalValueResult.secondaryBackground = this._secondaryBackground;
        }
        if (this._secondaryForeground !== undefined) {
            hasAnyValues = true;
            internalValueResult.secondaryForeground = this._secondaryForeground;
        }
        if (this._success !== undefined) {
            hasAnyValues = true;
            internalValueResult.success = this._success;
        }
        if (this._successForeground !== undefined) {
            hasAnyValues = true;
            internalValueResult.successForeground = this._successForeground;
        }
        if (this._warning !== undefined) {
            hasAnyValues = true;
            internalValueResult.warning = this._warning;
        }
        if (this._warningForeground !== undefined) {
            hasAnyValues = true;
            internalValueResult.warningForeground = this._warningForeground;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UIColorPaletteProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accent = undefined;
            this._accentForeground = undefined;
            this._danger = undefined;
            this._dangerForeground = undefined;
            this._dimension = undefined;
            this._dimensionForeground = undefined;
            this._measure = undefined;
            this._measureForeground = undefined;
            this._primaryBackground = undefined;
            this._primaryForeground = undefined;
            this._secondaryBackground = undefined;
            this._secondaryForeground = undefined;
            this._success = undefined;
            this._successForeground = undefined;
            this._warning = undefined;
            this._warningForeground = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accent = value.accent;
            this._accentForeground = value.accentForeground;
            this._danger = value.danger;
            this._dangerForeground = value.dangerForeground;
            this._dimension = value.dimension;
            this._dimensionForeground = value.dimensionForeground;
            this._measure = value.measure;
            this._measureForeground = value.measureForeground;
            this._primaryBackground = value.primaryBackground;
            this._primaryForeground = value.primaryForeground;
            this._secondaryBackground = value.secondaryBackground;
            this._secondaryForeground = value.secondaryForeground;
            this._success = value.success;
            this._successForeground = value.successForeground;
            this._warning = value.warning;
            this._warningForeground = value.warningForeground;
        }
    }

    // accent - computed: true, optional: true, required: false
    private _accent?: string; 
    public get accent() {
        return this.getStringAttribute('accent');
    }
    public set accent(value: string) {
        this._accent = value;
    }
    public resetAccent() {
        this._accent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accentInput() {
        return this._accent;
    }

    // accent_foreground - computed: true, optional: true, required: false
    private _accentForeground?: string; 
    public get accentForeground() {
        return this.getStringAttribute('accent_foreground');
    }
    public set accentForeground(value: string) {
        this._accentForeground = value;
    }
    public resetAccentForeground() {
        this._accentForeground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accentForegroundInput() {
        return this._accentForeground;
    }

    // danger - computed: true, optional: true, required: false
    private _danger?: string; 
    public get danger() {
        return this.getStringAttribute('danger');
    }
    public set danger(value: string) {
        this._danger = value;
    }
    public resetDanger() {
        this._danger = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dangerInput() {
        return this._danger;
    }

    // danger_foreground - computed: true, optional: true, required: false
    private _dangerForeground?: string; 
    public get dangerForeground() {
        return this.getStringAttribute('danger_foreground');
    }
    public set dangerForeground(value: string) {
        this._dangerForeground = value;
    }
    public resetDangerForeground() {
        this._dangerForeground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dangerForegroundInput() {
        return this._dangerForeground;
    }

    // dimension - computed: true, optional: true, required: false
    private _dimension?: string; 
    public get dimension() {
        return this.getStringAttribute('dimension');
    }
    public set dimension(value: string) {
        this._dimension = value;
    }
    public resetDimension() {
        this._dimension = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionInput() {
        return this._dimension;
    }

    // dimension_foreground - computed: true, optional: true, required: false
    private _dimensionForeground?: string; 
    public get dimensionForeground() {
        return this.getStringAttribute('dimension_foreground');
    }
    public set dimensionForeground(value: string) {
        this._dimensionForeground = value;
    }
    public resetDimensionForeground() {
        this._dimensionForeground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionForegroundInput() {
        return this._dimensionForeground;
    }

    // measure - computed: true, optional: true, required: false
    private _measure?: string; 
    public get measure() {
        return this.getStringAttribute('measure');
    }
    public set measure(value: string) {
        this._measure = value;
    }
    public resetMeasure() {
        this._measure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get measureInput() {
        return this._measure;
    }

    // measure_foreground - computed: true, optional: true, required: false
    private _measureForeground?: string; 
    public get measureForeground() {
        return this.getStringAttribute('measure_foreground');
    }
    public set measureForeground(value: string) {
        this._measureForeground = value;
    }
    public resetMeasureForeground() {
        this._measureForeground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get measureForegroundInput() {
        return this._measureForeground;
    }

    // primary_background - computed: true, optional: true, required: false
    private _primaryBackground?: string; 
    public get primaryBackground() {
        return this.getStringAttribute('primary_background');
    }
    public set primaryBackground(value: string) {
        this._primaryBackground = value;
    }
    public resetPrimaryBackground() {
        this._primaryBackground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryBackgroundInput() {
        return this._primaryBackground;
    }

    // primary_foreground - computed: true, optional: true, required: false
    private _primaryForeground?: string; 
    public get primaryForeground() {
        return this.getStringAttribute('primary_foreground');
    }
    public set primaryForeground(value: string) {
        this._primaryForeground = value;
    }
    public resetPrimaryForeground() {
        this._primaryForeground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryForegroundInput() {
        return this._primaryForeground;
    }

    // secondary_background - computed: true, optional: true, required: false
    private _secondaryBackground?: string; 
    public get secondaryBackground() {
        return this.getStringAttribute('secondary_background');
    }
    public set secondaryBackground(value: string) {
        this._secondaryBackground = value;
    }
    public resetSecondaryBackground() {
        this._secondaryBackground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryBackgroundInput() {
        return this._secondaryBackground;
    }

    // secondary_foreground - computed: true, optional: true, required: false
    private _secondaryForeground?: string; 
    public get secondaryForeground() {
        return this.getStringAttribute('secondary_foreground');
    }
    public set secondaryForeground(value: string) {
        this._secondaryForeground = value;
    }
    public resetSecondaryForeground() {
        this._secondaryForeground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryForegroundInput() {
        return this._secondaryForeground;
    }

    // success - computed: true, optional: true, required: false
    private _success?: string; 
    public get success() {
        return this.getStringAttribute('success');
    }
    public set success(value: string) {
        this._success = value;
    }
    public resetSuccess() {
        this._success = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get successInput() {
        return this._success;
    }

    // success_foreground - computed: true, optional: true, required: false
    private _successForeground?: string; 
    public get successForeground() {
        return this.getStringAttribute('success_foreground');
    }
    public set successForeground(value: string) {
        this._successForeground = value;
    }
    public resetSuccessForeground() {
        this._successForeground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get successForegroundInput() {
        return this._successForeground;
    }

    // warning - computed: true, optional: true, required: false
    private _warning?: string; 
    public get warning() {
        return this.getStringAttribute('warning');
    }
    public set warning(value: string) {
        this._warning = value;
    }
    public resetWarning() {
        this._warning = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warningInput() {
        return this._warning;
    }

    // warning_foreground - computed: true, optional: true, required: false
    private _warningForeground?: string; 
    public get warningForeground() {
        return this.getStringAttribute('warning_foreground');
    }
    public set warningForeground(value: string) {
        this._warningForeground = value;
    }
    public resetWarningForeground() {
        this._warningForeground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warningForegroundInput() {
        return this._warningForeground;
    }
}
export interface ThemeConfigurationProperty {
    /**
    * <p>The theme colors that are used for data colors in charts. The colors description is a
    *             hexadecimal color code that consists of six alphanumerical characters, prefixed with
    *                 <code>#</code>, for example #37BFF5. </p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#data_color_palette CcTheme#data_color_palette}
    */
    readonly dataColorPalette?: DataColorPaletteProperty;
    /**
    * <p>The theme display options for sheets. </p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#sheet CcTheme#sheet}
    */
    readonly sheet?: SheetStyleProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#typography CcTheme#typography}
    */
    readonly typography?: TypographyProperty;
    /**
    * <p>The theme colors that apply to UI and to charts, excluding data colors. The colors
    *             description is a hexadecimal color code that consists of six alphanumerical characters,
    *             prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User
    *                 Guide.</i>
    *          </p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#ui_color_palette CcTheme#ui_color_palette}
    */
    readonly uiColorPalette?: UIColorPaletteProperty;
}
export class ThemeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ThemeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataColorPalette?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataColorPalette = this._dataColorPalette?.internalValue;
        }
        if (this._sheet?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sheet = this._sheet?.internalValue;
        }
        if (this._typography?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.typography = this._typography?.internalValue;
        }
        if (this._uiColorPalette?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.uiColorPalette = this._uiColorPalette?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ThemeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataColorPalette.internalValue = undefined;
            this._sheet.internalValue = undefined;
            this._typography.internalValue = undefined;
            this._uiColorPalette.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataColorPalette.internalValue = value.dataColorPalette;
            this._sheet.internalValue = value.sheet;
            this._typography.internalValue = value.typography;
            this._uiColorPalette.internalValue = value.uiColorPalette;
        }
    }

    // data_color_palette - computed: true, optional: true, required: false
    private _dataColorPalette = new DataColorPalettePropertyOutputReference(this, "data_color_palette");
    public get dataColorPalette() {
        return this._dataColorPalette;
    }
    public putDataColorPalette(value: DataColorPaletteProperty) {
        this._dataColorPalette.internalValue = value;
    }
    public resetDataColorPalette() {
        this._dataColorPalette.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataColorPaletteInput() {
        return this._dataColorPalette.internalValue;
    }

    // sheet - computed: true, optional: true, required: false
    private _sheet = new SheetStylePropertyOutputReference(this, "sheet");
    public get sheet() {
        return this._sheet;
    }
    public putSheet(value: SheetStyleProperty) {
        this._sheet.internalValue = value;
    }
    public resetSheet() {
        this._sheet.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sheetInput() {
        return this._sheet.internalValue;
    }

    // typography - computed: true, optional: true, required: false
    private _typography = new TypographyPropertyOutputReference(this, "typography");
    public get typography() {
        return this._typography;
    }
    public putTypography(value: TypographyProperty) {
        this._typography.internalValue = value;
    }
    public resetTypography() {
        this._typography.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typographyInput() {
        return this._typography.internalValue;
    }

    // ui_color_palette - computed: true, optional: true, required: false
    private _uiColorPalette = new UIColorPalettePropertyOutputReference(this, "ui_color_palette");
    public get uiColorPalette() {
        return this._uiColorPalette;
    }
    public putUiColorPalette(value: UIColorPaletteProperty) {
        this._uiColorPalette.internalValue = value;
    }
    public resetUiColorPalette() {
        this._uiColorPalette.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uiColorPaletteInput() {
        return this._uiColorPalette.internalValue;
    }
}
export interface ResourcePermissionProperty {
    /**
    * <p>The IAM action to grant or revoke permissions on.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#actions CcTheme#actions}
    */
    readonly actions?: string[];
    /**
    * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
    *             following:</p>
    *          <ul>
    *             <li>
    *                <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
    *             </li>
    *             <li>
    *                <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
    *             </li>
    *             <li>
    *                <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
    *                     ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
    *                     (This is less common.) </p>
    *             </li>
    *          </ul>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#principal CcTheme#principal}
    */
    readonly principal?: string;
}
export class ResourcePermissionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourcePermissionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions;
        }
        if (this._principal !== undefined) {
            hasAnyValues = true;
            internalValueResult.principal = this._principal;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourcePermissionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions = undefined;
            this._principal = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions = value.actions;
            this._principal = value.principal;
        }
    }

    // actions - computed: true, optional: true, required: false
    private _actions?: string[]; 
    public get actions() {
        return this.getListAttribute('actions');
    }
    public set actions(value: string[]) {
        this._actions = value;
    }
    public resetActions() {
        this._actions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions;
    }

    // principal - computed: true, optional: true, required: false
    private _principal?: string; 
    public get principal() {
        return this.getStringAttribute('principal');
    }
    public set principal(value: string) {
        this._principal = value;
    }
    public resetPrincipal() {
        this._principal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
        return this._principal;
    }
}

export class ResourcePermissionPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourcePermissionProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourcePermissionPropertyOutputReference {
        return new ResourcePermissionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * <p>Tag key.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#key CcTheme#key}
    */
    readonly key?: string;
    /**
    * <p>Tag value.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_theme#value CcTheme#value}
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
export interface VersionConfigurationDataColorPaletteProperty {
}
export class VersionConfigurationDataColorPalettePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VersionConfigurationDataColorPaletteProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VersionConfigurationDataColorPaletteProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // colors - computed: true, optional: false, required: false
    public get colors() {
        return this.getListAttribute('colors');
    }

    // empty_fill_color - computed: true, optional: false, required: false
    public get emptyFillColor() {
        return this.getStringAttribute('empty_fill_color');
    }

    // min_max_gradient - computed: true, optional: false, required: false
    public get minMaxGradient() {
        return this.getListAttribute('min_max_gradient');
    }
}
export interface BorderProperty {
}
export class BorderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BorderProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BorderProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // show - computed: true, optional: false, required: false
    public get show() {
        return this.getBooleanAttribute('show');
    }
}
export interface TileProperty {
}
export class TilePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TileProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TileProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // border - computed: true, optional: false, required: false
    private _border = new BorderPropertyOutputReference(this, "border");
    public get border() {
        return this._border;
    }
}
export interface GutterProperty {
}
export class GutterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GutterProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GutterProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // show - computed: true, optional: false, required: false
    public get show() {
        return this.getBooleanAttribute('show');
    }
}
export interface MarginProperty {
}
export class MarginPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MarginProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MarginProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // show - computed: true, optional: false, required: false
    public get show() {
        return this.getBooleanAttribute('show');
    }
}
export interface TileLayoutProperty {
}
export class TileLayoutPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TileLayoutProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TileLayoutProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // gutter - computed: true, optional: false, required: false
    private _gutter = new GutterPropertyOutputReference(this, "gutter");
    public get gutter() {
        return this._gutter;
    }

    // margin - computed: true, optional: false, required: false
    private _margin = new MarginPropertyOutputReference(this, "margin");
    public get margin() {
        return this._margin;
    }
}
export interface SheetProperty {
}
export class SheetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SheetProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SheetProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // tile - computed: true, optional: false, required: false
    private _tile = new TilePropertyOutputReference(this, "tile");
    public get tile() {
        return this._tile;
    }

    // tile_layout - computed: true, optional: false, required: false
    private _tileLayout = new TileLayoutPropertyOutputReference(this, "tile_layout");
    public get tileLayout() {
        return this._tileLayout;
    }
}
export interface FontFamiliesProperty {
}
export class FontFamiliesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): FontFamiliesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FontFamiliesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // font_family - computed: true, optional: false, required: false
    public get fontFamily() {
        return this.getStringAttribute('font_family');
    }
}

export class FontFamiliesPropertyList extends cdktn.ComplexList {

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
    public get(index: number): FontFamiliesPropertyOutputReference {
        return new FontFamiliesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VersionConfigurationTypographyProperty {
}
export class VersionConfigurationTypographyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VersionConfigurationTypographyProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VersionConfigurationTypographyProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // font_families - computed: true, optional: false, required: false
    private _fontFamilies = new FontFamiliesPropertyList(this, "font_families", false);
    public get fontFamilies() {
        return this._fontFamilies;
    }
}
export interface UiColorPaletteProperty {
}
export class UiColorPalettePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UiColorPaletteProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UiColorPaletteProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // accent - computed: true, optional: false, required: false
    public get accent() {
        return this.getStringAttribute('accent');
    }

    // accent_foreground - computed: true, optional: false, required: false
    public get accentForeground() {
        return this.getStringAttribute('accent_foreground');
    }

    // danger - computed: true, optional: false, required: false
    public get danger() {
        return this.getStringAttribute('danger');
    }

    // danger_foreground - computed: true, optional: false, required: false
    public get dangerForeground() {
        return this.getStringAttribute('danger_foreground');
    }

    // dimension - computed: true, optional: false, required: false
    public get dimension() {
        return this.getStringAttribute('dimension');
    }

    // dimension_foreground - computed: true, optional: false, required: false
    public get dimensionForeground() {
        return this.getStringAttribute('dimension_foreground');
    }

    // measure - computed: true, optional: false, required: false
    public get measure() {
        return this.getStringAttribute('measure');
    }

    // measure_foreground - computed: true, optional: false, required: false
    public get measureForeground() {
        return this.getStringAttribute('measure_foreground');
    }

    // primary_background - computed: true, optional: false, required: false
    public get primaryBackground() {
        return this.getStringAttribute('primary_background');
    }

    // primary_foreground - computed: true, optional: false, required: false
    public get primaryForeground() {
        return this.getStringAttribute('primary_foreground');
    }

    // secondary_background - computed: true, optional: false, required: false
    public get secondaryBackground() {
        return this.getStringAttribute('secondary_background');
    }

    // secondary_foreground - computed: true, optional: false, required: false
    public get secondaryForeground() {
        return this.getStringAttribute('secondary_foreground');
    }

    // success - computed: true, optional: false, required: false
    public get success() {
        return this.getStringAttribute('success');
    }

    // success_foreground - computed: true, optional: false, required: false
    public get successForeground() {
        return this.getStringAttribute('success_foreground');
    }

    // warning - computed: true, optional: false, required: false
    public get warning() {
        return this.getStringAttribute('warning');
    }

    // warning_foreground - computed: true, optional: false, required: false
    public get warningForeground() {
        return this.getStringAttribute('warning_foreground');
    }
}
export interface ConfigurationProperty {
}
export class ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // data_color_palette - computed: true, optional: false, required: false
    private _dataColorPalette = new VersionConfigurationDataColorPalettePropertyOutputReference(this, "data_color_palette");
    public get dataColorPalette() {
        return this._dataColorPalette;
    }

    // sheet - computed: true, optional: false, required: false
    private _sheet = new SheetPropertyOutputReference(this, "sheet");
    public get sheet() {
        return this._sheet;
    }

    // typography - computed: true, optional: false, required: false
    private _typography = new VersionConfigurationTypographyPropertyOutputReference(this, "typography");
    public get typography() {
        return this._typography;
    }

    // ui_color_palette - computed: true, optional: false, required: false
    private _uiColorPalette = new UiColorPalettePropertyOutputReference(this, "ui_color_palette");
    public get uiColorPalette() {
        return this._uiColorPalette;
    }
}
export interface ErrorsProperty {
}
export class ErrorsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ErrorsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ErrorsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // message - computed: true, optional: false, required: false
    public get message() {
        return this.getStringAttribute('message');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }
}

export class ErrorsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ErrorsPropertyOutputReference {
        return new ErrorsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VersionProperty {
}
export class VersionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VersionProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VersionProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // base_theme_id - computed: true, optional: false, required: false
    public get baseThemeId() {
        return this.getStringAttribute('base_theme_id');
    }

    // configuration - computed: true, optional: false, required: false
    private _configuration = new ConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
        return this.getStringAttribute('description');
    }

    // errors - computed: true, optional: false, required: false
    private _errors = new ErrorsPropertyList(this, "errors", false);
    public get errors() {
        return this._errors;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // version_number - computed: true, optional: false, required: false
    public get versionNumber() {
        return this.getNumberAttribute('version_number');
    }
}
}
