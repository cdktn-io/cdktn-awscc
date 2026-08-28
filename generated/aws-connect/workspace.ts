// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWorkspaceProps extends cdktn.TerraformMetaArguments {
    /**
    * The resource ARNs associated with the workspace
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#associations CcWorkspace#associations}
    */
    readonly associations?: string[];
    /**
    * The description of the workspace
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#description CcWorkspace#description}
    */
    readonly description?: string;
    /**
    * The identifier of the Amazon Connect instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#instance_arn CcWorkspace#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * The media items for the workspace
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#media CcWorkspace#media}
    */
    readonly media?: CcWorkspace.MediaItemProperty[] | cdktn.IResolvable;
    /**
    * The name of the workspace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#name CcWorkspace#name}
    */
    readonly name: string;
    /**
    * The pages associated with the workspace
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#pages CcWorkspace#pages}
    */
    readonly pages?: CcWorkspace.WorkspacePageProperty[] | cdktn.IResolvable;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#tags CcWorkspace#tags}
    */
    readonly tags?: CcWorkspace.TagProperty[] | cdktn.IResolvable;
    /**
    * The theme configuration for the workspace
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#theme CcWorkspace#theme}
    */
    readonly theme?: CcWorkspace.WorkspaceThemeProperty;
    /**
    * The title of the workspace
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#title CcWorkspace#title}
    */
    readonly title?: string;
    /**
    * The visibility of the workspace. Will always be set to ASSIGNED oninitial creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#visibility CcWorkspace#visibility}
    */
    readonly visibility?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace awscc_connect_workspace}
*/
export class CcWorkspace extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_workspace";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWorkspace resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWorkspace to import
    * @param importFromId The id of the existing CcWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWorkspace to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_workspace", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace awscc_connect_workspace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWorkspaceProps
    */
    public constructor(scope: Construct, id: string, config: CcWorkspaceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_workspace',
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
        this._associations = config.associations;
        this._description = config.description;
        this._instanceArn = config.instanceArn;
        this._media.internalValue = config.media;
        this._name = config.name;
        this._pages.internalValue = config.pages;
        this._tags.internalValue = config.tags;
        this._theme.internalValue = config.theme;
        this._title = config.title;
        this._visibility = config.visibility;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // associations - computed: true, optional: true, required: false
    private _associations?: string[]; 
    public get associations() {
        return this.getListAttribute('associations');
    }
    public set associations(value: string[]) {
        this._associations = value;
    }
    public resetAssociations() {
        this._associations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationsInput() {
        return this._associations;
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

    // media - computed: true, optional: true, required: false
    private _media = new CcWorkspace.MediaItemPropertyList(this, "media", false);
    public get media() {
        return this._media;
    }
    public putMedia(value: CcWorkspace.MediaItemProperty[] | cdktn.IResolvable) {
        this._media.internalValue = value;
    }
    public resetMedia() {
        this._media.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaInput() {
        return this._media.internalValue;
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

    // pages - computed: true, optional: true, required: false
    private _pages = new CcWorkspace.WorkspacePagePropertyList(this, "pages", false);
    public get pages() {
        return this._pages;
    }
    public putPages(value: CcWorkspace.WorkspacePageProperty[] | cdktn.IResolvable) {
        this._pages.internalValue = value;
    }
    public resetPages() {
        this._pages.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pagesInput() {
        return this._pages.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcWorkspace.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcWorkspace.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // theme - computed: true, optional: true, required: false
    private _theme = new CcWorkspace.WorkspaceThemePropertyOutputReference(this, "theme");
    public get theme() {
        return this._theme;
    }
    public putTheme(value: CcWorkspace.WorkspaceThemeProperty) {
        this._theme.internalValue = value;
    }
    public resetTheme() {
        this._theme.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get themeInput() {
        return this._theme.internalValue;
    }

    // title - computed: true, optional: true, required: false
    private _title?: string; 
    public get title() {
        return this.getStringAttribute('title');
    }
    public set title(value: string) {
        this._title = value;
    }
    public resetTitle() {
        this._title = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get titleInput() {
        return this._title;
    }

    // visibility - computed: true, optional: true, required: false
    private _visibility?: string; 
    public get visibility() {
        return this.getStringAttribute('visibility');
    }
    public set visibility(value: string) {
        this._visibility = value;
    }
    public resetVisibility() {
        this._visibility = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get visibilityInput() {
        return this._visibility;
    }

    // workspace_id - computed: true, optional: false, required: false
    public get workspaceId() {
        return this.getStringAttribute('workspace_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            associations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._associations),
            description: cdktn.stringToTerraform(this._description),
            instance_arn: cdktn.stringToTerraform(this._instanceArn),
            media: cdktn.listMapper(ccWorkspaceMediaItemPropertyToTerraform, false)(this._media.internalValue),
            name: cdktn.stringToTerraform(this._name),
            pages: cdktn.listMapper(ccWorkspaceWorkspacePagePropertyToTerraform, false)(this._pages.internalValue),
            tags: cdktn.listMapper(ccWorkspaceTagPropertyToTerraform, false)(this._tags.internalValue),
            theme: ccWorkspaceWorkspaceThemePropertyToTerraform(this._theme.internalValue),
            title: cdktn.stringToTerraform(this._title),
            visibility: cdktn.stringToTerraform(this._visibility),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            associations: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._associations),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
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
            media: {
                value: cdktn.listMapperHcl(ccWorkspaceMediaItemPropertyToHclTerraform, false)(this._media.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcWorkspace.MediaItemPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pages: {
                value: cdktn.listMapperHcl(ccWorkspaceWorkspacePagePropertyToHclTerraform, false)(this._pages.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcWorkspace.WorkspacePagePropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccWorkspaceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcWorkspace.TagPropertyList",
            },
            theme: {
                value: ccWorkspaceWorkspaceThemePropertyToHclTerraform(this._theme.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWorkspace.WorkspaceThemeProperty",
            },
            title: {
                value: cdktn.stringToHclTerraform(this._title),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            visibility: {
                value: cdktn.stringToHclTerraform(this._visibility),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccWorkspaceMediaItemPropertyToTerraform(struct?: CcWorkspace.MediaItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source: cdktn.stringToTerraform(struct!.source),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccWorkspaceMediaItemPropertyToHclTerraform(struct?: CcWorkspace.MediaItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source: {
            value: cdktn.stringToHclTerraform(struct!.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccWorkspaceWorkspacePagePropertyToTerraform(struct?: CcWorkspace.WorkspacePageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_data: cdktn.stringToTerraform(struct!.inputData),
        page: cdktn.stringToTerraform(struct!.page),
        resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
        slug: cdktn.stringToTerraform(struct!.slug),
    }
}


export function ccWorkspaceWorkspacePagePropertyToHclTerraform(struct?: CcWorkspace.WorkspacePageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_data: {
            value: cdktn.stringToHclTerraform(struct!.inputData),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        page: {
            value: cdktn.stringToHclTerraform(struct!.page),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_arn: {
            value: cdktn.stringToHclTerraform(struct!.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        slug: {
            value: cdktn.stringToHclTerraform(struct!.slug),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceTagPropertyToTerraform(struct?: CcWorkspace.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWorkspaceTagPropertyToHclTerraform(struct?: CcWorkspace.TagProperty | cdktn.IResolvable): any {
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


export function ccWorkspacePaletteCanvasPropertyToTerraform(struct?: CcWorkspace.PaletteCanvasProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        active_background: cdktn.stringToTerraform(struct!.activeBackground),
        container_background: cdktn.stringToTerraform(struct!.containerBackground),
        page_background: cdktn.stringToTerraform(struct!.pageBackground),
    }
}


export function ccWorkspacePaletteCanvasPropertyToHclTerraform(struct?: CcWorkspace.PaletteCanvasProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        active_background: {
            value: cdktn.stringToHclTerraform(struct!.activeBackground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        container_background: {
            value: cdktn.stringToHclTerraform(struct!.containerBackground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        page_background: {
            value: cdktn.stringToHclTerraform(struct!.pageBackground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspacePaletteHeaderPropertyToTerraform(struct?: CcWorkspace.PaletteHeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        background: cdktn.stringToTerraform(struct!.background),
        invert_actions_colors: cdktn.booleanToTerraform(struct!.invertActionsColors),
        text: cdktn.stringToTerraform(struct!.text),
        text_hover: cdktn.stringToTerraform(struct!.textHover),
    }
}


export function ccWorkspacePaletteHeaderPropertyToHclTerraform(struct?: CcWorkspace.PaletteHeaderProperty | cdktn.IResolvable): any {
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
        invert_actions_colors: {
            value: cdktn.booleanToHclTerraform(struct!.invertActionsColors),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        text: {
            value: cdktn.stringToHclTerraform(struct!.text),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_hover: {
            value: cdktn.stringToHclTerraform(struct!.textHover),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspacePaletteNavigationPropertyToTerraform(struct?: CcWorkspace.PaletteNavigationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        background: cdktn.stringToTerraform(struct!.background),
        invert_actions_colors: cdktn.booleanToTerraform(struct!.invertActionsColors),
        text: cdktn.stringToTerraform(struct!.text),
        text_active: cdktn.stringToTerraform(struct!.textActive),
        text_background_active: cdktn.stringToTerraform(struct!.textBackgroundActive),
        text_background_hover: cdktn.stringToTerraform(struct!.textBackgroundHover),
        text_hover: cdktn.stringToTerraform(struct!.textHover),
    }
}


export function ccWorkspacePaletteNavigationPropertyToHclTerraform(struct?: CcWorkspace.PaletteNavigationProperty | cdktn.IResolvable): any {
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
        invert_actions_colors: {
            value: cdktn.booleanToHclTerraform(struct!.invertActionsColors),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        text: {
            value: cdktn.stringToHclTerraform(struct!.text),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_active: {
            value: cdktn.stringToHclTerraform(struct!.textActive),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_background_active: {
            value: cdktn.stringToHclTerraform(struct!.textBackgroundActive),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_background_hover: {
            value: cdktn.stringToHclTerraform(struct!.textBackgroundHover),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_hover: {
            value: cdktn.stringToHclTerraform(struct!.textHover),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspacePalettePrimaryPropertyToTerraform(struct?: CcWorkspace.PalettePrimaryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        active: cdktn.stringToTerraform(struct!.active),
        contrast_text: cdktn.stringToTerraform(struct!.contrastText),
        default: cdktn.stringToTerraform(struct!.default),
    }
}


export function ccWorkspacePalettePrimaryPropertyToHclTerraform(struct?: CcWorkspace.PalettePrimaryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        active: {
            value: cdktn.stringToHclTerraform(struct!.active),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        contrast_text: {
            value: cdktn.stringToHclTerraform(struct!.contrastText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        default: {
            value: cdktn.stringToHclTerraform(struct!.default),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceWorkspaceThemePalettePropertyToTerraform(struct?: CcWorkspace.WorkspaceThemePaletteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        canvas: ccWorkspacePaletteCanvasPropertyToTerraform(struct!.canvas),
        header: ccWorkspacePaletteHeaderPropertyToTerraform(struct!.header),
        navigation: ccWorkspacePaletteNavigationPropertyToTerraform(struct!.navigation),
        primary: ccWorkspacePalettePrimaryPropertyToTerraform(struct!.primary),
    }
}


export function ccWorkspaceWorkspaceThemePalettePropertyToHclTerraform(struct?: CcWorkspace.WorkspaceThemePaletteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        canvas: {
            value: ccWorkspacePaletteCanvasPropertyToHclTerraform(struct!.canvas),
            isBlock: true,
            type: "struct",
            storageClassType: "PaletteCanvasProperty",
        },
        header: {
            value: ccWorkspacePaletteHeaderPropertyToHclTerraform(struct!.header),
            isBlock: true,
            type: "struct",
            storageClassType: "PaletteHeaderProperty",
        },
        navigation: {
            value: ccWorkspacePaletteNavigationPropertyToHclTerraform(struct!.navigation),
            isBlock: true,
            type: "struct",
            storageClassType: "PaletteNavigationProperty",
        },
        primary: {
            value: ccWorkspacePalettePrimaryPropertyToHclTerraform(struct!.primary),
            isBlock: true,
            type: "struct",
            storageClassType: "PalettePrimaryProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceFontFamilyPropertyToTerraform(struct?: CcWorkspace.FontFamilyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default: cdktn.stringToTerraform(struct!.default),
    }
}


export function ccWorkspaceFontFamilyPropertyToHclTerraform(struct?: CcWorkspace.FontFamilyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default: {
            value: cdktn.stringToHclTerraform(struct!.default),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceWorkspaceThemeTypographyPropertyToTerraform(struct?: CcWorkspace.WorkspaceThemeTypographyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        font_family: ccWorkspaceFontFamilyPropertyToTerraform(struct!.fontFamily),
    }
}


export function ccWorkspaceWorkspaceThemeTypographyPropertyToHclTerraform(struct?: CcWorkspace.WorkspaceThemeTypographyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        font_family: {
            value: ccWorkspaceFontFamilyPropertyToHclTerraform(struct!.fontFamily),
            isBlock: true,
            type: "struct",
            storageClassType: "FontFamilyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceWorkspaceThemeConfigPropertyToTerraform(struct?: CcWorkspace.WorkspaceThemeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        palette: ccWorkspaceWorkspaceThemePalettePropertyToTerraform(struct!.palette),
        typography: ccWorkspaceWorkspaceThemeTypographyPropertyToTerraform(struct!.typography),
    }
}


export function ccWorkspaceWorkspaceThemeConfigPropertyToHclTerraform(struct?: CcWorkspace.WorkspaceThemeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        palette: {
            value: ccWorkspaceWorkspaceThemePalettePropertyToHclTerraform(struct!.palette),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkspaceThemePaletteProperty",
        },
        typography: {
            value: ccWorkspaceWorkspaceThemeTypographyPropertyToHclTerraform(struct!.typography),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkspaceThemeTypographyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceCanvasPropertyToTerraform(struct?: CcWorkspace.CanvasProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        active_background: cdktn.stringToTerraform(struct!.activeBackground),
        container_background: cdktn.stringToTerraform(struct!.containerBackground),
        page_background: cdktn.stringToTerraform(struct!.pageBackground),
    }
}


export function ccWorkspaceCanvasPropertyToHclTerraform(struct?: CcWorkspace.CanvasProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        active_background: {
            value: cdktn.stringToHclTerraform(struct!.activeBackground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        container_background: {
            value: cdktn.stringToHclTerraform(struct!.containerBackground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        page_background: {
            value: cdktn.stringToHclTerraform(struct!.pageBackground),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceHeaderPropertyToTerraform(struct?: CcWorkspace.HeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        background: cdktn.stringToTerraform(struct!.background),
        invert_actions_colors: cdktn.booleanToTerraform(struct!.invertActionsColors),
        text: cdktn.stringToTerraform(struct!.text),
        text_hover: cdktn.stringToTerraform(struct!.textHover),
    }
}


export function ccWorkspaceHeaderPropertyToHclTerraform(struct?: CcWorkspace.HeaderProperty | cdktn.IResolvable): any {
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
        invert_actions_colors: {
            value: cdktn.booleanToHclTerraform(struct!.invertActionsColors),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        text: {
            value: cdktn.stringToHclTerraform(struct!.text),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_hover: {
            value: cdktn.stringToHclTerraform(struct!.textHover),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceNavigationPropertyToTerraform(struct?: CcWorkspace.NavigationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        background: cdktn.stringToTerraform(struct!.background),
        invert_actions_colors: cdktn.booleanToTerraform(struct!.invertActionsColors),
        text: cdktn.stringToTerraform(struct!.text),
        text_active: cdktn.stringToTerraform(struct!.textActive),
        text_background_active: cdktn.stringToTerraform(struct!.textBackgroundActive),
        text_background_hover: cdktn.stringToTerraform(struct!.textBackgroundHover),
        text_hover: cdktn.stringToTerraform(struct!.textHover),
    }
}


export function ccWorkspaceNavigationPropertyToHclTerraform(struct?: CcWorkspace.NavigationProperty | cdktn.IResolvable): any {
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
        invert_actions_colors: {
            value: cdktn.booleanToHclTerraform(struct!.invertActionsColors),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        text: {
            value: cdktn.stringToHclTerraform(struct!.text),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_active: {
            value: cdktn.stringToHclTerraform(struct!.textActive),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_background_active: {
            value: cdktn.stringToHclTerraform(struct!.textBackgroundActive),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_background_hover: {
            value: cdktn.stringToHclTerraform(struct!.textBackgroundHover),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_hover: {
            value: cdktn.stringToHclTerraform(struct!.textHover),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspacePrimaryPropertyToTerraform(struct?: CcWorkspace.PrimaryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        active: cdktn.stringToTerraform(struct!.active),
        contrast_text: cdktn.stringToTerraform(struct!.contrastText),
        default: cdktn.stringToTerraform(struct!.default),
    }
}


export function ccWorkspacePrimaryPropertyToHclTerraform(struct?: CcWorkspace.PrimaryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        active: {
            value: cdktn.stringToHclTerraform(struct!.active),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        contrast_text: {
            value: cdktn.stringToHclTerraform(struct!.contrastText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        default: {
            value: cdktn.stringToHclTerraform(struct!.default),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspacePalettePropertyToTerraform(struct?: CcWorkspace.PaletteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        canvas: ccWorkspaceCanvasPropertyToTerraform(struct!.canvas),
        header: ccWorkspaceHeaderPropertyToTerraform(struct!.header),
        navigation: ccWorkspaceNavigationPropertyToTerraform(struct!.navigation),
        primary: ccWorkspacePrimaryPropertyToTerraform(struct!.primary),
    }
}


export function ccWorkspacePalettePropertyToHclTerraform(struct?: CcWorkspace.PaletteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        canvas: {
            value: ccWorkspaceCanvasPropertyToHclTerraform(struct!.canvas),
            isBlock: true,
            type: "struct",
            storageClassType: "CanvasProperty",
        },
        header: {
            value: ccWorkspaceHeaderPropertyToHclTerraform(struct!.header),
            isBlock: true,
            type: "struct",
            storageClassType: "HeaderProperty",
        },
        navigation: {
            value: ccWorkspaceNavigationPropertyToHclTerraform(struct!.navigation),
            isBlock: true,
            type: "struct",
            storageClassType: "NavigationProperty",
        },
        primary: {
            value: ccWorkspacePrimaryPropertyToHclTerraform(struct!.primary),
            isBlock: true,
            type: "struct",
            storageClassType: "PrimaryProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceThemeLightTypographyFontFamilyPropertyToTerraform(struct?: CcWorkspace.ThemeLightTypographyFontFamilyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default: cdktn.stringToTerraform(struct!.default),
    }
}


export function ccWorkspaceThemeLightTypographyFontFamilyPropertyToHclTerraform(struct?: CcWorkspace.ThemeLightTypographyFontFamilyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default: {
            value: cdktn.stringToHclTerraform(struct!.default),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceTypographyPropertyToTerraform(struct?: CcWorkspace.TypographyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        font_family: ccWorkspaceThemeLightTypographyFontFamilyPropertyToTerraform(struct!.fontFamily),
    }
}


export function ccWorkspaceTypographyPropertyToHclTerraform(struct?: CcWorkspace.TypographyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        font_family: {
            value: ccWorkspaceThemeLightTypographyFontFamilyPropertyToHclTerraform(struct!.fontFamily),
            isBlock: true,
            type: "struct",
            storageClassType: "ThemeLightTypographyFontFamilyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceLightPropertyToTerraform(struct?: CcWorkspace.LightProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        palette: ccWorkspacePalettePropertyToTerraform(struct!.palette),
        typography: ccWorkspaceTypographyPropertyToTerraform(struct!.typography),
    }
}


export function ccWorkspaceLightPropertyToHclTerraform(struct?: CcWorkspace.LightProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        palette: {
            value: ccWorkspacePalettePropertyToHclTerraform(struct!.palette),
            isBlock: true,
            type: "struct",
            storageClassType: "PaletteProperty",
        },
        typography: {
            value: ccWorkspaceTypographyPropertyToHclTerraform(struct!.typography),
            isBlock: true,
            type: "struct",
            storageClassType: "TypographyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceWorkspaceThemePropertyToTerraform(struct?: CcWorkspace.WorkspaceThemeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dark: ccWorkspaceWorkspaceThemeConfigPropertyToTerraform(struct!.dark),
        light: ccWorkspaceLightPropertyToTerraform(struct!.light),
    }
}


export function ccWorkspaceWorkspaceThemePropertyToHclTerraform(struct?: CcWorkspace.WorkspaceThemeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dark: {
            value: ccWorkspaceWorkspaceThemeConfigPropertyToHclTerraform(struct!.dark),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkspaceThemeConfigProperty",
        },
        light: {
            value: ccWorkspaceLightPropertyToHclTerraform(struct!.light),
            isBlock: true,
            type: "struct",
            storageClassType: "LightProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcWorkspace {
export interface MediaItemProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#source CcWorkspace#source}
    */
    readonly source?: string;
    /**
    * The type of media
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#type CcWorkspace#type}
    */
    readonly type?: string;
}
export class MediaItemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MediaItemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MediaItemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._source = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._source = value.source;
            this._type = value.type;
        }
    }

    // source - computed: true, optional: true, required: false
    private _source?: string; 
    public get source() {
        return this.getStringAttribute('source');
    }
    public set source(value: string) {
        this._source = value;
    }
    public resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source;
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

export class MediaItemPropertyList extends cdktn.ComplexList {
    public internalValue? : MediaItemProperty[] | cdktn.IResolvable

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
    public get(index: number): MediaItemPropertyOutputReference {
        return new MediaItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface WorkspacePageProperty {
    /**
    * The input data for the page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#input_data CcWorkspace#input_data}
    */
    readonly inputData?: string;
    /**
    * The page identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#page CcWorkspace#page}
    */
    readonly page?: string;
    /**
    * The Amazon Resource Name (ARN) of the resource associated with the page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#resource_arn CcWorkspace#resource_arn}
    */
    readonly resourceArn?: string;
    /**
    * The slug for the page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#slug CcWorkspace#slug}
    */
    readonly slug?: string;
}
export class WorkspacePagePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): WorkspacePageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inputData !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputData = this._inputData;
        }
        if (this._page !== undefined) {
            hasAnyValues = true;
            internalValueResult.page = this._page;
        }
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        if (this._slug !== undefined) {
            hasAnyValues = true;
            internalValueResult.slug = this._slug;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkspacePageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputData = undefined;
            this._page = undefined;
            this._resourceArn = undefined;
            this._slug = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputData = value.inputData;
            this._page = value.page;
            this._resourceArn = value.resourceArn;
            this._slug = value.slug;
        }
    }

    // input_data - computed: true, optional: true, required: false
    private _inputData?: string; 
    public get inputData() {
        return this.getStringAttribute('input_data');
    }
    public set inputData(value: string) {
        this._inputData = value;
    }
    public resetInputData() {
        this._inputData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputDataInput() {
        return this._inputData;
    }

    // page - computed: true, optional: true, required: false
    private _page?: string; 
    public get page() {
        return this.getStringAttribute('page');
    }
    public set page(value: string) {
        this._page = value;
    }
    public resetPage() {
        this._page = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pageInput() {
        return this._page;
    }

    // resource_arn - computed: true, optional: true, required: false
    private _resourceArn?: string; 
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
        this._resourceArn = value;
    }
    public resetResourceArn() {
        this._resourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
        return this._resourceArn;
    }

    // slug - computed: true, optional: true, required: false
    private _slug?: string; 
    public get slug() {
        return this.getStringAttribute('slug');
    }
    public set slug(value: string) {
        this._slug = value;
    }
    public resetSlug() {
        this._slug = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slugInput() {
        return this._slug;
    }
}

export class WorkspacePagePropertyList extends cdktn.ComplexList {
    public internalValue? : WorkspacePageProperty[] | cdktn.IResolvable

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
    public get(index: number): WorkspacePagePropertyOutputReference {
        return new WorkspacePagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#key CcWorkspace#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#value CcWorkspace#value}
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
export interface PaletteCanvasProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#active_background CcWorkspace#active_background}
    */
    readonly activeBackground?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#container_background CcWorkspace#container_background}
    */
    readonly containerBackground?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#page_background CcWorkspace#page_background}
    */
    readonly pageBackground?: string;
}
export class PaletteCanvasPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PaletteCanvasProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._activeBackground !== undefined) {
            hasAnyValues = true;
            internalValueResult.activeBackground = this._activeBackground;
        }
        if (this._containerBackground !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerBackground = this._containerBackground;
        }
        if (this._pageBackground !== undefined) {
            hasAnyValues = true;
            internalValueResult.pageBackground = this._pageBackground;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PaletteCanvasProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._activeBackground = undefined;
            this._containerBackground = undefined;
            this._pageBackground = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._activeBackground = value.activeBackground;
            this._containerBackground = value.containerBackground;
            this._pageBackground = value.pageBackground;
        }
    }

    // active_background - computed: true, optional: true, required: false
    private _activeBackground?: string; 
    public get activeBackground() {
        return this.getStringAttribute('active_background');
    }
    public set activeBackground(value: string) {
        this._activeBackground = value;
    }
    public resetActiveBackground() {
        this._activeBackground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activeBackgroundInput() {
        return this._activeBackground;
    }

    // container_background - computed: true, optional: true, required: false
    private _containerBackground?: string; 
    public get containerBackground() {
        return this.getStringAttribute('container_background');
    }
    public set containerBackground(value: string) {
        this._containerBackground = value;
    }
    public resetContainerBackground() {
        this._containerBackground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerBackgroundInput() {
        return this._containerBackground;
    }

    // page_background - computed: true, optional: true, required: false
    private _pageBackground?: string; 
    public get pageBackground() {
        return this.getStringAttribute('page_background');
    }
    public set pageBackground(value: string) {
        this._pageBackground = value;
    }
    public resetPageBackground() {
        this._pageBackground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pageBackgroundInput() {
        return this._pageBackground;
    }
}
export interface PaletteHeaderProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#background CcWorkspace#background}
    */
    readonly background?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#invert_actions_colors CcWorkspace#invert_actions_colors}
    */
    readonly invertActionsColors?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#text CcWorkspace#text}
    */
    readonly text?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#text_hover CcWorkspace#text_hover}
    */
    readonly textHover?: string;
}
export class PaletteHeaderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PaletteHeaderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._background !== undefined) {
            hasAnyValues = true;
            internalValueResult.background = this._background;
        }
        if (this._invertActionsColors !== undefined) {
            hasAnyValues = true;
            internalValueResult.invertActionsColors = this._invertActionsColors;
        }
        if (this._text !== undefined) {
            hasAnyValues = true;
            internalValueResult.text = this._text;
        }
        if (this._textHover !== undefined) {
            hasAnyValues = true;
            internalValueResult.textHover = this._textHover;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PaletteHeaderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._background = undefined;
            this._invertActionsColors = undefined;
            this._text = undefined;
            this._textHover = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._background = value.background;
            this._invertActionsColors = value.invertActionsColors;
            this._text = value.text;
            this._textHover = value.textHover;
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

    // invert_actions_colors - computed: true, optional: true, required: false
    private _invertActionsColors?: boolean | cdktn.IResolvable; 
    public get invertActionsColors() {
        return this.getBooleanAttribute('invert_actions_colors');
    }
    public set invertActionsColors(value: boolean | cdktn.IResolvable) {
        this._invertActionsColors = value;
    }
    public resetInvertActionsColors() {
        this._invertActionsColors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invertActionsColorsInput() {
        return this._invertActionsColors;
    }

    // text - computed: true, optional: true, required: false
    private _text?: string; 
    public get text() {
        return this.getStringAttribute('text');
    }
    public set text(value: string) {
        this._text = value;
    }
    public resetText() {
        this._text = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textInput() {
        return this._text;
    }

    // text_hover - computed: true, optional: true, required: false
    private _textHover?: string; 
    public get textHover() {
        return this.getStringAttribute('text_hover');
    }
    public set textHover(value: string) {
        this._textHover = value;
    }
    public resetTextHover() {
        this._textHover = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textHoverInput() {
        return this._textHover;
    }
}
export interface PaletteNavigationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#background CcWorkspace#background}
    */
    readonly background?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#invert_actions_colors CcWorkspace#invert_actions_colors}
    */
    readonly invertActionsColors?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#text CcWorkspace#text}
    */
    readonly text?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#text_active CcWorkspace#text_active}
    */
    readonly textActive?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#text_background_active CcWorkspace#text_background_active}
    */
    readonly textBackgroundActive?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#text_background_hover CcWorkspace#text_background_hover}
    */
    readonly textBackgroundHover?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#text_hover CcWorkspace#text_hover}
    */
    readonly textHover?: string;
}
export class PaletteNavigationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PaletteNavigationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._background !== undefined) {
            hasAnyValues = true;
            internalValueResult.background = this._background;
        }
        if (this._invertActionsColors !== undefined) {
            hasAnyValues = true;
            internalValueResult.invertActionsColors = this._invertActionsColors;
        }
        if (this._text !== undefined) {
            hasAnyValues = true;
            internalValueResult.text = this._text;
        }
        if (this._textActive !== undefined) {
            hasAnyValues = true;
            internalValueResult.textActive = this._textActive;
        }
        if (this._textBackgroundActive !== undefined) {
            hasAnyValues = true;
            internalValueResult.textBackgroundActive = this._textBackgroundActive;
        }
        if (this._textBackgroundHover !== undefined) {
            hasAnyValues = true;
            internalValueResult.textBackgroundHover = this._textBackgroundHover;
        }
        if (this._textHover !== undefined) {
            hasAnyValues = true;
            internalValueResult.textHover = this._textHover;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PaletteNavigationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._background = undefined;
            this._invertActionsColors = undefined;
            this._text = undefined;
            this._textActive = undefined;
            this._textBackgroundActive = undefined;
            this._textBackgroundHover = undefined;
            this._textHover = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._background = value.background;
            this._invertActionsColors = value.invertActionsColors;
            this._text = value.text;
            this._textActive = value.textActive;
            this._textBackgroundActive = value.textBackgroundActive;
            this._textBackgroundHover = value.textBackgroundHover;
            this._textHover = value.textHover;
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

    // invert_actions_colors - computed: true, optional: true, required: false
    private _invertActionsColors?: boolean | cdktn.IResolvable; 
    public get invertActionsColors() {
        return this.getBooleanAttribute('invert_actions_colors');
    }
    public set invertActionsColors(value: boolean | cdktn.IResolvable) {
        this._invertActionsColors = value;
    }
    public resetInvertActionsColors() {
        this._invertActionsColors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invertActionsColorsInput() {
        return this._invertActionsColors;
    }

    // text - computed: true, optional: true, required: false
    private _text?: string; 
    public get text() {
        return this.getStringAttribute('text');
    }
    public set text(value: string) {
        this._text = value;
    }
    public resetText() {
        this._text = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textInput() {
        return this._text;
    }

    // text_active - computed: true, optional: true, required: false
    private _textActive?: string; 
    public get textActive() {
        return this.getStringAttribute('text_active');
    }
    public set textActive(value: string) {
        this._textActive = value;
    }
    public resetTextActive() {
        this._textActive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textActiveInput() {
        return this._textActive;
    }

    // text_background_active - computed: true, optional: true, required: false
    private _textBackgroundActive?: string; 
    public get textBackgroundActive() {
        return this.getStringAttribute('text_background_active');
    }
    public set textBackgroundActive(value: string) {
        this._textBackgroundActive = value;
    }
    public resetTextBackgroundActive() {
        this._textBackgroundActive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textBackgroundActiveInput() {
        return this._textBackgroundActive;
    }

    // text_background_hover - computed: true, optional: true, required: false
    private _textBackgroundHover?: string; 
    public get textBackgroundHover() {
        return this.getStringAttribute('text_background_hover');
    }
    public set textBackgroundHover(value: string) {
        this._textBackgroundHover = value;
    }
    public resetTextBackgroundHover() {
        this._textBackgroundHover = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textBackgroundHoverInput() {
        return this._textBackgroundHover;
    }

    // text_hover - computed: true, optional: true, required: false
    private _textHover?: string; 
    public get textHover() {
        return this.getStringAttribute('text_hover');
    }
    public set textHover(value: string) {
        this._textHover = value;
    }
    public resetTextHover() {
        this._textHover = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textHoverInput() {
        return this._textHover;
    }
}
export interface PalettePrimaryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#active CcWorkspace#active}
    */
    readonly active?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#contrast_text CcWorkspace#contrast_text}
    */
    readonly contrastText?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#default CcWorkspace#default}
    */
    readonly default?: string;
}
export class PalettePrimaryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PalettePrimaryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._active !== undefined) {
            hasAnyValues = true;
            internalValueResult.active = this._active;
        }
        if (this._contrastText !== undefined) {
            hasAnyValues = true;
            internalValueResult.contrastText = this._contrastText;
        }
        if (this._default !== undefined) {
            hasAnyValues = true;
            internalValueResult.default = this._default;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PalettePrimaryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._active = undefined;
            this._contrastText = undefined;
            this._default = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._active = value.active;
            this._contrastText = value.contrastText;
            this._default = value.default;
        }
    }

    // active - computed: true, optional: true, required: false
    private _active?: string; 
    public get active() {
        return this.getStringAttribute('active');
    }
    public set active(value: string) {
        this._active = value;
    }
    public resetActive() {
        this._active = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activeInput() {
        return this._active;
    }

    // contrast_text - computed: true, optional: true, required: false
    private _contrastText?: string; 
    public get contrastText() {
        return this.getStringAttribute('contrast_text');
    }
    public set contrastText(value: string) {
        this._contrastText = value;
    }
    public resetContrastText() {
        this._contrastText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contrastTextInput() {
        return this._contrastText;
    }

    // default - computed: true, optional: true, required: false
    private _default?: string; 
    public get default() {
        return this.getStringAttribute('default');
    }
    public set default(value: string) {
        this._default = value;
    }
    public resetDefault() {
        this._default = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultInput() {
        return this._default;
    }
}
export interface WorkspaceThemePaletteProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#canvas CcWorkspace#canvas}
    */
    readonly canvas?: PaletteCanvasProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#header CcWorkspace#header}
    */
    readonly header?: PaletteHeaderProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#navigation CcWorkspace#navigation}
    */
    readonly navigation?: PaletteNavigationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#primary CcWorkspace#primary}
    */
    readonly primary?: PalettePrimaryProperty;
}
export class WorkspaceThemePalettePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkspaceThemePaletteProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._canvas?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.canvas = this._canvas?.internalValue;
        }
        if (this._header?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header?.internalValue;
        }
        if (this._navigation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.navigation = this._navigation?.internalValue;
        }
        if (this._primary?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.primary = this._primary?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkspaceThemePaletteProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._canvas.internalValue = undefined;
            this._header.internalValue = undefined;
            this._navigation.internalValue = undefined;
            this._primary.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._canvas.internalValue = value.canvas;
            this._header.internalValue = value.header;
            this._navigation.internalValue = value.navigation;
            this._primary.internalValue = value.primary;
        }
    }

    // canvas - computed: true, optional: true, required: false
    private _canvas = new PaletteCanvasPropertyOutputReference(this, "canvas");
    public get canvas() {
        return this._canvas;
    }
    public putCanvas(value: PaletteCanvasProperty) {
        this._canvas.internalValue = value;
    }
    public resetCanvas() {
        this._canvas.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get canvasInput() {
        return this._canvas.internalValue;
    }

    // header - computed: true, optional: true, required: false
    private _header = new PaletteHeaderPropertyOutputReference(this, "header");
    public get header() {
        return this._header;
    }
    public putHeader(value: PaletteHeaderProperty) {
        this._header.internalValue = value;
    }
    public resetHeader() {
        this._header.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
        return this._header.internalValue;
    }

    // navigation - computed: true, optional: true, required: false
    private _navigation = new PaletteNavigationPropertyOutputReference(this, "navigation");
    public get navigation() {
        return this._navigation;
    }
    public putNavigation(value: PaletteNavigationProperty) {
        this._navigation.internalValue = value;
    }
    public resetNavigation() {
        this._navigation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get navigationInput() {
        return this._navigation.internalValue;
    }

    // primary - computed: true, optional: true, required: false
    private _primary = new PalettePrimaryPropertyOutputReference(this, "primary");
    public get primary() {
        return this._primary;
    }
    public putPrimary(value: PalettePrimaryProperty) {
        this._primary.internalValue = value;
    }
    public resetPrimary() {
        this._primary.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryInput() {
        return this._primary.internalValue;
    }
}
export interface FontFamilyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#default CcWorkspace#default}
    */
    readonly default?: string;
}
export class FontFamilyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FontFamilyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._default !== undefined) {
            hasAnyValues = true;
            internalValueResult.default = this._default;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FontFamilyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._default = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._default = value.default;
        }
    }

    // default - computed: true, optional: true, required: false
    private _default?: string; 
    public get default() {
        return this.getStringAttribute('default');
    }
    public set default(value: string) {
        this._default = value;
    }
    public resetDefault() {
        this._default = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultInput() {
        return this._default;
    }
}
export interface WorkspaceThemeTypographyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#font_family CcWorkspace#font_family}
    */
    readonly fontFamily?: FontFamilyProperty;
}
export class WorkspaceThemeTypographyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkspaceThemeTypographyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fontFamily?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fontFamily = this._fontFamily?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkspaceThemeTypographyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fontFamily.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fontFamily.internalValue = value.fontFamily;
        }
    }

    // font_family - computed: true, optional: true, required: false
    private _fontFamily = new FontFamilyPropertyOutputReference(this, "font_family");
    public get fontFamily() {
        return this._fontFamily;
    }
    public putFontFamily(value: FontFamilyProperty) {
        this._fontFamily.internalValue = value;
    }
    public resetFontFamily() {
        this._fontFamily.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fontFamilyInput() {
        return this._fontFamily.internalValue;
    }
}
export interface WorkspaceThemeConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#palette CcWorkspace#palette}
    */
    readonly palette?: WorkspaceThemePaletteProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#typography CcWorkspace#typography}
    */
    readonly typography?: WorkspaceThemeTypographyProperty;
}
export class WorkspaceThemeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkspaceThemeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._palette?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.palette = this._palette?.internalValue;
        }
        if (this._typography?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.typography = this._typography?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkspaceThemeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._palette.internalValue = undefined;
            this._typography.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._palette.internalValue = value.palette;
            this._typography.internalValue = value.typography;
        }
    }

    // palette - computed: true, optional: true, required: false
    private _palette = new WorkspaceThemePalettePropertyOutputReference(this, "palette");
    public get palette() {
        return this._palette;
    }
    public putPalette(value: WorkspaceThemePaletteProperty) {
        this._palette.internalValue = value;
    }
    public resetPalette() {
        this._palette.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get paletteInput() {
        return this._palette.internalValue;
    }

    // typography - computed: true, optional: true, required: false
    private _typography = new WorkspaceThemeTypographyPropertyOutputReference(this, "typography");
    public get typography() {
        return this._typography;
    }
    public putTypography(value: WorkspaceThemeTypographyProperty) {
        this._typography.internalValue = value;
    }
    public resetTypography() {
        this._typography.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typographyInput() {
        return this._typography.internalValue;
    }
}
export interface CanvasProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#active_background CcWorkspace#active_background}
    */
    readonly activeBackground?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#container_background CcWorkspace#container_background}
    */
    readonly containerBackground?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#page_background CcWorkspace#page_background}
    */
    readonly pageBackground?: string;
}
export class CanvasPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CanvasProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._activeBackground !== undefined) {
            hasAnyValues = true;
            internalValueResult.activeBackground = this._activeBackground;
        }
        if (this._containerBackground !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerBackground = this._containerBackground;
        }
        if (this._pageBackground !== undefined) {
            hasAnyValues = true;
            internalValueResult.pageBackground = this._pageBackground;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CanvasProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._activeBackground = undefined;
            this._containerBackground = undefined;
            this._pageBackground = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._activeBackground = value.activeBackground;
            this._containerBackground = value.containerBackground;
            this._pageBackground = value.pageBackground;
        }
    }

    // active_background - computed: true, optional: true, required: false
    private _activeBackground?: string; 
    public get activeBackground() {
        return this.getStringAttribute('active_background');
    }
    public set activeBackground(value: string) {
        this._activeBackground = value;
    }
    public resetActiveBackground() {
        this._activeBackground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activeBackgroundInput() {
        return this._activeBackground;
    }

    // container_background - computed: true, optional: true, required: false
    private _containerBackground?: string; 
    public get containerBackground() {
        return this.getStringAttribute('container_background');
    }
    public set containerBackground(value: string) {
        this._containerBackground = value;
    }
    public resetContainerBackground() {
        this._containerBackground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerBackgroundInput() {
        return this._containerBackground;
    }

    // page_background - computed: true, optional: true, required: false
    private _pageBackground?: string; 
    public get pageBackground() {
        return this.getStringAttribute('page_background');
    }
    public set pageBackground(value: string) {
        this._pageBackground = value;
    }
    public resetPageBackground() {
        this._pageBackground = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pageBackgroundInput() {
        return this._pageBackground;
    }
}
export interface HeaderProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#background CcWorkspace#background}
    */
    readonly background?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#invert_actions_colors CcWorkspace#invert_actions_colors}
    */
    readonly invertActionsColors?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#text CcWorkspace#text}
    */
    readonly text?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#text_hover CcWorkspace#text_hover}
    */
    readonly textHover?: string;
}
export class HeaderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HeaderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._background !== undefined) {
            hasAnyValues = true;
            internalValueResult.background = this._background;
        }
        if (this._invertActionsColors !== undefined) {
            hasAnyValues = true;
            internalValueResult.invertActionsColors = this._invertActionsColors;
        }
        if (this._text !== undefined) {
            hasAnyValues = true;
            internalValueResult.text = this._text;
        }
        if (this._textHover !== undefined) {
            hasAnyValues = true;
            internalValueResult.textHover = this._textHover;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HeaderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._background = undefined;
            this._invertActionsColors = undefined;
            this._text = undefined;
            this._textHover = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._background = value.background;
            this._invertActionsColors = value.invertActionsColors;
            this._text = value.text;
            this._textHover = value.textHover;
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

    // invert_actions_colors - computed: true, optional: true, required: false
    private _invertActionsColors?: boolean | cdktn.IResolvable; 
    public get invertActionsColors() {
        return this.getBooleanAttribute('invert_actions_colors');
    }
    public set invertActionsColors(value: boolean | cdktn.IResolvable) {
        this._invertActionsColors = value;
    }
    public resetInvertActionsColors() {
        this._invertActionsColors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invertActionsColorsInput() {
        return this._invertActionsColors;
    }

    // text - computed: true, optional: true, required: false
    private _text?: string; 
    public get text() {
        return this.getStringAttribute('text');
    }
    public set text(value: string) {
        this._text = value;
    }
    public resetText() {
        this._text = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textInput() {
        return this._text;
    }

    // text_hover - computed: true, optional: true, required: false
    private _textHover?: string; 
    public get textHover() {
        return this.getStringAttribute('text_hover');
    }
    public set textHover(value: string) {
        this._textHover = value;
    }
    public resetTextHover() {
        this._textHover = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textHoverInput() {
        return this._textHover;
    }
}
export interface NavigationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#background CcWorkspace#background}
    */
    readonly background?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#invert_actions_colors CcWorkspace#invert_actions_colors}
    */
    readonly invertActionsColors?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#text CcWorkspace#text}
    */
    readonly text?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#text_active CcWorkspace#text_active}
    */
    readonly textActive?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#text_background_active CcWorkspace#text_background_active}
    */
    readonly textBackgroundActive?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#text_background_hover CcWorkspace#text_background_hover}
    */
    readonly textBackgroundHover?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#text_hover CcWorkspace#text_hover}
    */
    readonly textHover?: string;
}
export class NavigationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NavigationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._background !== undefined) {
            hasAnyValues = true;
            internalValueResult.background = this._background;
        }
        if (this._invertActionsColors !== undefined) {
            hasAnyValues = true;
            internalValueResult.invertActionsColors = this._invertActionsColors;
        }
        if (this._text !== undefined) {
            hasAnyValues = true;
            internalValueResult.text = this._text;
        }
        if (this._textActive !== undefined) {
            hasAnyValues = true;
            internalValueResult.textActive = this._textActive;
        }
        if (this._textBackgroundActive !== undefined) {
            hasAnyValues = true;
            internalValueResult.textBackgroundActive = this._textBackgroundActive;
        }
        if (this._textBackgroundHover !== undefined) {
            hasAnyValues = true;
            internalValueResult.textBackgroundHover = this._textBackgroundHover;
        }
        if (this._textHover !== undefined) {
            hasAnyValues = true;
            internalValueResult.textHover = this._textHover;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NavigationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._background = undefined;
            this._invertActionsColors = undefined;
            this._text = undefined;
            this._textActive = undefined;
            this._textBackgroundActive = undefined;
            this._textBackgroundHover = undefined;
            this._textHover = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._background = value.background;
            this._invertActionsColors = value.invertActionsColors;
            this._text = value.text;
            this._textActive = value.textActive;
            this._textBackgroundActive = value.textBackgroundActive;
            this._textBackgroundHover = value.textBackgroundHover;
            this._textHover = value.textHover;
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

    // invert_actions_colors - computed: true, optional: true, required: false
    private _invertActionsColors?: boolean | cdktn.IResolvable; 
    public get invertActionsColors() {
        return this.getBooleanAttribute('invert_actions_colors');
    }
    public set invertActionsColors(value: boolean | cdktn.IResolvable) {
        this._invertActionsColors = value;
    }
    public resetInvertActionsColors() {
        this._invertActionsColors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invertActionsColorsInput() {
        return this._invertActionsColors;
    }

    // text - computed: true, optional: true, required: false
    private _text?: string; 
    public get text() {
        return this.getStringAttribute('text');
    }
    public set text(value: string) {
        this._text = value;
    }
    public resetText() {
        this._text = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textInput() {
        return this._text;
    }

    // text_active - computed: true, optional: true, required: false
    private _textActive?: string; 
    public get textActive() {
        return this.getStringAttribute('text_active');
    }
    public set textActive(value: string) {
        this._textActive = value;
    }
    public resetTextActive() {
        this._textActive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textActiveInput() {
        return this._textActive;
    }

    // text_background_active - computed: true, optional: true, required: false
    private _textBackgroundActive?: string; 
    public get textBackgroundActive() {
        return this.getStringAttribute('text_background_active');
    }
    public set textBackgroundActive(value: string) {
        this._textBackgroundActive = value;
    }
    public resetTextBackgroundActive() {
        this._textBackgroundActive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textBackgroundActiveInput() {
        return this._textBackgroundActive;
    }

    // text_background_hover - computed: true, optional: true, required: false
    private _textBackgroundHover?: string; 
    public get textBackgroundHover() {
        return this.getStringAttribute('text_background_hover');
    }
    public set textBackgroundHover(value: string) {
        this._textBackgroundHover = value;
    }
    public resetTextBackgroundHover() {
        this._textBackgroundHover = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textBackgroundHoverInput() {
        return this._textBackgroundHover;
    }

    // text_hover - computed: true, optional: true, required: false
    private _textHover?: string; 
    public get textHover() {
        return this.getStringAttribute('text_hover');
    }
    public set textHover(value: string) {
        this._textHover = value;
    }
    public resetTextHover() {
        this._textHover = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textHoverInput() {
        return this._textHover;
    }
}
export interface PrimaryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#active CcWorkspace#active}
    */
    readonly active?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#contrast_text CcWorkspace#contrast_text}
    */
    readonly contrastText?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#default CcWorkspace#default}
    */
    readonly default?: string;
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
        if (this._active !== undefined) {
            hasAnyValues = true;
            internalValueResult.active = this._active;
        }
        if (this._contrastText !== undefined) {
            hasAnyValues = true;
            internalValueResult.contrastText = this._contrastText;
        }
        if (this._default !== undefined) {
            hasAnyValues = true;
            internalValueResult.default = this._default;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrimaryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._active = undefined;
            this._contrastText = undefined;
            this._default = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._active = value.active;
            this._contrastText = value.contrastText;
            this._default = value.default;
        }
    }

    // active - computed: true, optional: true, required: false
    private _active?: string; 
    public get active() {
        return this.getStringAttribute('active');
    }
    public set active(value: string) {
        this._active = value;
    }
    public resetActive() {
        this._active = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activeInput() {
        return this._active;
    }

    // contrast_text - computed: true, optional: true, required: false
    private _contrastText?: string; 
    public get contrastText() {
        return this.getStringAttribute('contrast_text');
    }
    public set contrastText(value: string) {
        this._contrastText = value;
    }
    public resetContrastText() {
        this._contrastText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contrastTextInput() {
        return this._contrastText;
    }

    // default - computed: true, optional: true, required: false
    private _default?: string; 
    public get default() {
        return this.getStringAttribute('default');
    }
    public set default(value: string) {
        this._default = value;
    }
    public resetDefault() {
        this._default = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultInput() {
        return this._default;
    }
}
export interface PaletteProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#canvas CcWorkspace#canvas}
    */
    readonly canvas?: CanvasProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#header CcWorkspace#header}
    */
    readonly header?: HeaderProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#navigation CcWorkspace#navigation}
    */
    readonly navigation?: NavigationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#primary CcWorkspace#primary}
    */
    readonly primary?: PrimaryProperty;
}
export class PalettePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PaletteProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._canvas?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.canvas = this._canvas?.internalValue;
        }
        if (this._header?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header?.internalValue;
        }
        if (this._navigation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.navigation = this._navigation?.internalValue;
        }
        if (this._primary?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.primary = this._primary?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PaletteProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._canvas.internalValue = undefined;
            this._header.internalValue = undefined;
            this._navigation.internalValue = undefined;
            this._primary.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._canvas.internalValue = value.canvas;
            this._header.internalValue = value.header;
            this._navigation.internalValue = value.navigation;
            this._primary.internalValue = value.primary;
        }
    }

    // canvas - computed: true, optional: true, required: false
    private _canvas = new CanvasPropertyOutputReference(this, "canvas");
    public get canvas() {
        return this._canvas;
    }
    public putCanvas(value: CanvasProperty) {
        this._canvas.internalValue = value;
    }
    public resetCanvas() {
        this._canvas.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get canvasInput() {
        return this._canvas.internalValue;
    }

    // header - computed: true, optional: true, required: false
    private _header = new HeaderPropertyOutputReference(this, "header");
    public get header() {
        return this._header;
    }
    public putHeader(value: HeaderProperty) {
        this._header.internalValue = value;
    }
    public resetHeader() {
        this._header.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
        return this._header.internalValue;
    }

    // navigation - computed: true, optional: true, required: false
    private _navigation = new NavigationPropertyOutputReference(this, "navigation");
    public get navigation() {
        return this._navigation;
    }
    public putNavigation(value: NavigationProperty) {
        this._navigation.internalValue = value;
    }
    public resetNavigation() {
        this._navigation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get navigationInput() {
        return this._navigation.internalValue;
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
}
export interface ThemeLightTypographyFontFamilyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#default CcWorkspace#default}
    */
    readonly default?: string;
}
export class ThemeLightTypographyFontFamilyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ThemeLightTypographyFontFamilyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._default !== undefined) {
            hasAnyValues = true;
            internalValueResult.default = this._default;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ThemeLightTypographyFontFamilyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._default = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._default = value.default;
        }
    }

    // default - computed: true, optional: true, required: false
    private _default?: string; 
    public get default() {
        return this.getStringAttribute('default');
    }
    public set default(value: string) {
        this._default = value;
    }
    public resetDefault() {
        this._default = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultInput() {
        return this._default;
    }
}
export interface TypographyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#font_family CcWorkspace#font_family}
    */
    readonly fontFamily?: ThemeLightTypographyFontFamilyProperty;
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
        if (this._fontFamily?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fontFamily = this._fontFamily?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TypographyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fontFamily.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fontFamily.internalValue = value.fontFamily;
        }
    }

    // font_family - computed: true, optional: true, required: false
    private _fontFamily = new ThemeLightTypographyFontFamilyPropertyOutputReference(this, "font_family");
    public get fontFamily() {
        return this._fontFamily;
    }
    public putFontFamily(value: ThemeLightTypographyFontFamilyProperty) {
        this._fontFamily.internalValue = value;
    }
    public resetFontFamily() {
        this._fontFamily.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fontFamilyInput() {
        return this._fontFamily.internalValue;
    }
}
export interface LightProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#palette CcWorkspace#palette}
    */
    readonly palette?: PaletteProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#typography CcWorkspace#typography}
    */
    readonly typography?: TypographyProperty;
}
export class LightPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LightProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._palette?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.palette = this._palette?.internalValue;
        }
        if (this._typography?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.typography = this._typography?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LightProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._palette.internalValue = undefined;
            this._typography.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._palette.internalValue = value.palette;
            this._typography.internalValue = value.typography;
        }
    }

    // palette - computed: true, optional: true, required: false
    private _palette = new PalettePropertyOutputReference(this, "palette");
    public get palette() {
        return this._palette;
    }
    public putPalette(value: PaletteProperty) {
        this._palette.internalValue = value;
    }
    public resetPalette() {
        this._palette.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get paletteInput() {
        return this._palette.internalValue;
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
}
export interface WorkspaceThemeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#dark CcWorkspace#dark}
    */
    readonly dark?: WorkspaceThemeConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_workspace#light CcWorkspace#light}
    */
    readonly light?: LightProperty;
}
export class WorkspaceThemePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkspaceThemeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dark?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dark = this._dark?.internalValue;
        }
        if (this._light?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.light = this._light?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkspaceThemeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dark.internalValue = undefined;
            this._light.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dark.internalValue = value.dark;
            this._light.internalValue = value.light;
        }
    }

    // dark - computed: true, optional: true, required: false
    private _dark = new WorkspaceThemeConfigPropertyOutputReference(this, "dark");
    public get dark() {
        return this._dark;
    }
    public putDark(value: WorkspaceThemeConfigProperty) {
        this._dark.internalValue = value;
    }
    public resetDark() {
        this._dark.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get darkInput() {
        return this._dark.internalValue;
    }

    // light - computed: true, optional: true, required: false
    private _light = new LightPropertyOutputReference(this, "light");
    public get light() {
        return this._light;
    }
    public putLight(value: LightProperty) {
        this._light.internalValue = value;
    }
    public resetLight() {
        this._light.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lightInput() {
        return this._light.internalValue;
    }
}
}
