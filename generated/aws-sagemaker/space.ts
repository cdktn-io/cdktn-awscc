// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSpaceProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the associated Domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#domain_id CcSpace#domain_id}
    */
    readonly domainId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#ownership_settings CcSpace#ownership_settings}
    */
    readonly ownershipSettings?: CcSpace.OwnershipSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#space_display_name CcSpace#space_display_name}
    */
    readonly spaceDisplayName?: string;
    /**
    * A name for the Space.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#space_name CcSpace#space_name}
    */
    readonly spaceName: string;
    /**
    * A collection of settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#space_settings CcSpace#space_settings}
    */
    readonly spaceSettings?: CcSpace.SpaceSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#space_sharing_settings CcSpace#space_sharing_settings}
    */
    readonly spaceSharingSettings?: CcSpace.SpaceSharingSettingsProperty;
    /**
    * A list of tags to apply to the space.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#tags CcSpace#tags}
    */
    readonly tags?: CcSpace.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space awscc_sagemaker_space}
*/
export class CcSpace extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_space";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSpace resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSpace to import
    * @param importFromId The id of the existing CcSpace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSpace to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_space", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space awscc_sagemaker_space} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSpaceProps
    */
    public constructor(scope: Construct, id: string, config: CcSpaceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_space',
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
        this._domainId = config.domainId;
        this._ownershipSettings.internalValue = config.ownershipSettings;
        this._spaceDisplayName = config.spaceDisplayName;
        this._spaceName = config.spaceName;
        this._spaceSettings.internalValue = config.spaceSettings;
        this._spaceSharingSettings.internalValue = config.spaceSharingSettings;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // domain_id - computed: false, optional: false, required: true
    private _domainId?: string; 
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }
    public set domainId(value: string) {
        this._domainId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIdInput() {
        return this._domainId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ownership_settings - computed: true, optional: true, required: false
    private _ownershipSettings = new CcSpace.OwnershipSettingsPropertyOutputReference(this, "ownership_settings");
    public get ownershipSettings() {
        return this._ownershipSettings;
    }
    public putOwnershipSettings(value: CcSpace.OwnershipSettingsProperty) {
        this._ownershipSettings.internalValue = value;
    }
    public resetOwnershipSettings() {
        this._ownershipSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownershipSettingsInput() {
        return this._ownershipSettings.internalValue;
    }

    // space_arn - computed: true, optional: false, required: false
    public get spaceArn() {
        return this.getStringAttribute('space_arn');
    }

    // space_display_name - computed: true, optional: true, required: false
    private _spaceDisplayName?: string; 
    public get spaceDisplayName() {
        return this.getStringAttribute('space_display_name');
    }
    public set spaceDisplayName(value: string) {
        this._spaceDisplayName = value;
    }
    public resetSpaceDisplayName() {
        this._spaceDisplayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spaceDisplayNameInput() {
        return this._spaceDisplayName;
    }

    // space_name - computed: false, optional: false, required: true
    private _spaceName?: string; 
    public get spaceName() {
        return this.getStringAttribute('space_name');
    }
    public set spaceName(value: string) {
        this._spaceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get spaceNameInput() {
        return this._spaceName;
    }

    // space_settings - computed: true, optional: true, required: false
    private _spaceSettings = new CcSpace.SpaceSettingsPropertyOutputReference(this, "space_settings");
    public get spaceSettings() {
        return this._spaceSettings;
    }
    public putSpaceSettings(value: CcSpace.SpaceSettingsProperty) {
        this._spaceSettings.internalValue = value;
    }
    public resetSpaceSettings() {
        this._spaceSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spaceSettingsInput() {
        return this._spaceSettings.internalValue;
    }

    // space_sharing_settings - computed: true, optional: true, required: false
    private _spaceSharingSettings = new CcSpace.SpaceSharingSettingsPropertyOutputReference(this, "space_sharing_settings");
    public get spaceSharingSettings() {
        return this._spaceSharingSettings;
    }
    public putSpaceSharingSettings(value: CcSpace.SpaceSharingSettingsProperty) {
        this._spaceSharingSettings.internalValue = value;
    }
    public resetSpaceSharingSettings() {
        this._spaceSharingSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spaceSharingSettingsInput() {
        return this._spaceSharingSettings.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSpace.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSpace.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // url - computed: true, optional: false, required: false
    public get url() {
        return this.getStringAttribute('url');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            domain_id: cdktn.stringToTerraform(this._domainId),
            ownership_settings: ccSpaceOwnershipSettingsPropertyToTerraform(this._ownershipSettings.internalValue),
            space_display_name: cdktn.stringToTerraform(this._spaceDisplayName),
            space_name: cdktn.stringToTerraform(this._spaceName),
            space_settings: ccSpaceSpaceSettingsPropertyToTerraform(this._spaceSettings.internalValue),
            space_sharing_settings: ccSpaceSpaceSharingSettingsPropertyToTerraform(this._spaceSharingSettings.internalValue),
            tags: cdktn.listMapper(ccSpaceTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            domain_id: {
                value: cdktn.stringToHclTerraform(this._domainId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ownership_settings: {
                value: ccSpaceOwnershipSettingsPropertyToHclTerraform(this._ownershipSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSpace.OwnershipSettingsProperty",
            },
            space_display_name: {
                value: cdktn.stringToHclTerraform(this._spaceDisplayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            space_name: {
                value: cdktn.stringToHclTerraform(this._spaceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            space_settings: {
                value: ccSpaceSpaceSettingsPropertyToHclTerraform(this._spaceSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSpace.SpaceSettingsProperty",
            },
            space_sharing_settings: {
                value: ccSpaceSpaceSharingSettingsPropertyToHclTerraform(this._spaceSharingSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSpace.SpaceSharingSettingsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSpaceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSpace.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSpaceOwnershipSettingsPropertyToTerraform(struct?: CcSpace.OwnershipSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        owner_user_profile_name: cdktn.stringToTerraform(struct!.ownerUserProfileName),
    }
}


export function ccSpaceOwnershipSettingsPropertyToHclTerraform(struct?: CcSpace.OwnershipSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        owner_user_profile_name: {
            value: cdktn.stringToHclTerraform(struct!.ownerUserProfileName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceSpaceIdleSettingsPropertyToTerraform(struct?: CcSpace.SpaceIdleSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.idleTimeoutInMinutes),
    }
}


export function ccSpaceSpaceIdleSettingsPropertyToHclTerraform(struct?: CcSpace.SpaceIdleSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.idleTimeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceSpaceAppLifecycleManagementPropertyToTerraform(struct?: CcSpace.SpaceAppLifecycleManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_settings: ccSpaceSpaceIdleSettingsPropertyToTerraform(struct!.idleSettings),
    }
}


export function ccSpaceSpaceAppLifecycleManagementPropertyToHclTerraform(struct?: CcSpace.SpaceAppLifecycleManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_settings: {
            value: ccSpaceSpaceIdleSettingsPropertyToHclTerraform(struct!.idleSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "SpaceIdleSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceResourceSpecPropertyToTerraform(struct?: CcSpace.ResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
        sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
        sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
    }
}


export function ccSpaceResourceSpecPropertyToHclTerraform(struct?: CcSpace.ResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_version_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceSpaceCodeEditorAppSettingsPropertyToTerraform(struct?: CcSpace.SpaceCodeEditorAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_lifecycle_management: ccSpaceSpaceAppLifecycleManagementPropertyToTerraform(struct!.appLifecycleManagement),
        default_resource_spec: ccSpaceResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
    }
}


export function ccSpaceSpaceCodeEditorAppSettingsPropertyToHclTerraform(struct?: CcSpace.SpaceCodeEditorAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_lifecycle_management: {
            value: ccSpaceSpaceAppLifecycleManagementPropertyToHclTerraform(struct!.appLifecycleManagement),
            isBlock: true,
            type: "struct",
            storageClassType: "SpaceAppLifecycleManagementProperty",
        },
        default_resource_spec: {
            value: ccSpaceResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "ResourceSpecProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceEFSFileSystemPropertyToTerraform(struct?: CcSpace.EFSFileSystemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    }
}


export function ccSpaceEFSFileSystemPropertyToHclTerraform(struct?: CcSpace.EFSFileSystemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        file_system_id: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceFSxLustreFileSystemPropertyToTerraform(struct?: CcSpace.FSxLustreFileSystemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    }
}


export function ccSpaceFSxLustreFileSystemPropertyToHclTerraform(struct?: CcSpace.FSxLustreFileSystemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        file_system_id: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceS3FileSystemPropertyToTerraform(struct?: CcSpace.S3FileSystemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccSpaceS3FileSystemPropertyToHclTerraform(struct?: CcSpace.S3FileSystemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceCustomFileSystemPropertyToTerraform(struct?: CcSpace.CustomFileSystemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        efs_file_system: ccSpaceEFSFileSystemPropertyToTerraform(struct!.efsFileSystem),
        fsx_lustre_file_system: ccSpaceFSxLustreFileSystemPropertyToTerraform(struct!.fsxLustreFileSystem),
        s3_file_system: ccSpaceS3FileSystemPropertyToTerraform(struct!.s3FileSystem),
    }
}


export function ccSpaceCustomFileSystemPropertyToHclTerraform(struct?: CcSpace.CustomFileSystemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        efs_file_system: {
            value: ccSpaceEFSFileSystemPropertyToHclTerraform(struct!.efsFileSystem),
            isBlock: true,
            type: "struct",
            storageClassType: "EFSFileSystemProperty",
        },
        fsx_lustre_file_system: {
            value: ccSpaceFSxLustreFileSystemPropertyToHclTerraform(struct!.fsxLustreFileSystem),
            isBlock: true,
            type: "struct",
            storageClassType: "FSxLustreFileSystemProperty",
        },
        s3_file_system: {
            value: ccSpaceS3FileSystemPropertyToHclTerraform(struct!.s3FileSystem),
            isBlock: true,
            type: "struct",
            storageClassType: "S3FileSystemProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceIdleSettingsPropertyToTerraform(struct?: CcSpace.IdleSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.idleTimeoutInMinutes),
    }
}


export function ccSpaceIdleSettingsPropertyToHclTerraform(struct?: CcSpace.IdleSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.idleTimeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceAppLifecycleManagementPropertyToTerraform(struct?: CcSpace.AppLifecycleManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_settings: ccSpaceIdleSettingsPropertyToTerraform(struct!.idleSettings),
    }
}


export function ccSpaceAppLifecycleManagementPropertyToHclTerraform(struct?: CcSpace.AppLifecycleManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_settings: {
            value: ccSpaceIdleSettingsPropertyToHclTerraform(struct!.idleSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "IdleSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceCodeRepositoryPropertyToTerraform(struct?: CcSpace.CodeRepositoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        repository_url: cdktn.stringToTerraform(struct!.repositoryUrl),
    }
}


export function ccSpaceCodeRepositoryPropertyToHclTerraform(struct?: CcSpace.CodeRepositoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        repository_url: {
            value: cdktn.stringToHclTerraform(struct!.repositoryUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: CcSpace.SpaceSettingsJupyterLabAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
        sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
        sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
    }
}


export function ccSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: CcSpace.SpaceSettingsJupyterLabAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_version_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceSpaceJupyterLabAppSettingsPropertyToTerraform(struct?: CcSpace.SpaceJupyterLabAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_lifecycle_management: ccSpaceAppLifecycleManagementPropertyToTerraform(struct!.appLifecycleManagement),
        code_repositories: cdktn.listMapper(ccSpaceCodeRepositoryPropertyToTerraform, false)(struct!.codeRepositories),
        default_resource_spec: ccSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
    }
}


export function ccSpaceSpaceJupyterLabAppSettingsPropertyToHclTerraform(struct?: CcSpace.SpaceJupyterLabAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_lifecycle_management: {
            value: ccSpaceAppLifecycleManagementPropertyToHclTerraform(struct!.appLifecycleManagement),
            isBlock: true,
            type: "struct",
            storageClassType: "AppLifecycleManagementProperty",
        },
        code_repositories: {
            value: cdktn.listMapperHcl(ccSpaceCodeRepositoryPropertyToHclTerraform, false)(struct!.codeRepositories),
            isBlock: true,
            type: "list",
            storageClassType: "CodeRepositoryPropertyList",
        },
        default_resource_spec: {
            value: ccSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "SpaceSettingsJupyterLabAppSettingsDefaultResourceSpecProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: CcSpace.SpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
        sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
        sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
    }
}


export function ccSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: CcSpace.SpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_version_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceJupyterServerAppSettingsPropertyToTerraform(struct?: CcSpace.JupyterServerAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_resource_spec: ccSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
        lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    }
}


export function ccSpaceJupyterServerAppSettingsPropertyToHclTerraform(struct?: CcSpace.JupyterServerAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_resource_spec: {
            value: ccSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "SpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty",
        },
        lifecycle_config_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceCustomImagePropertyToTerraform(struct?: CcSpace.CustomImageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_image_config_name: cdktn.stringToTerraform(struct!.appImageConfigName),
        image_name: cdktn.stringToTerraform(struct!.imageName),
        image_version_number: cdktn.numberToTerraform(struct!.imageVersionNumber),
    }
}


export function ccSpaceCustomImagePropertyToHclTerraform(struct?: CcSpace.CustomImageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_image_config_name: {
            value: cdktn.stringToHclTerraform(struct!.appImageConfigName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_name: {
            value: cdktn.stringToHclTerraform(struct!.imageName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_version_number: {
            value: cdktn.numberToHclTerraform(struct!.imageVersionNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: CcSpace.SpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
        sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
        sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
    }
}


export function ccSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: CcSpace.SpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_version_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceKernelGatewayAppSettingsPropertyToTerraform(struct?: CcSpace.KernelGatewayAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_images: cdktn.listMapper(ccSpaceCustomImagePropertyToTerraform, false)(struct!.customImages),
        default_resource_spec: ccSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
        lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    }
}


export function ccSpaceKernelGatewayAppSettingsPropertyToHclTerraform(struct?: CcSpace.KernelGatewayAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_images: {
            value: cdktn.listMapperHcl(ccSpaceCustomImagePropertyToHclTerraform, false)(struct!.customImages),
            isBlock: true,
            type: "list",
            storageClassType: "CustomImagePropertyList",
        },
        default_resource_spec: {
            value: ccSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "SpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty",
        },
        lifecycle_config_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceEbsStorageSettingsPropertyToTerraform(struct?: CcSpace.EbsStorageSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.ebsVolumeSizeInGb),
    }
}


export function ccSpaceEbsStorageSettingsPropertyToHclTerraform(struct?: CcSpace.EbsStorageSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ebs_volume_size_in_gb: {
            value: cdktn.numberToHclTerraform(struct!.ebsVolumeSizeInGb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceSpaceStorageSettingsPropertyToTerraform(struct?: CcSpace.SpaceStorageSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ebs_storage_settings: ccSpaceEbsStorageSettingsPropertyToTerraform(struct!.ebsStorageSettings),
    }
}


export function ccSpaceSpaceStorageSettingsPropertyToHclTerraform(struct?: CcSpace.SpaceStorageSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ebs_storage_settings: {
            value: ccSpaceEbsStorageSettingsPropertyToHclTerraform(struct!.ebsStorageSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "EbsStorageSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceSpaceSettingsPropertyToTerraform(struct?: CcSpace.SpaceSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_type: cdktn.stringToTerraform(struct!.appType),
        code_editor_app_settings: ccSpaceSpaceCodeEditorAppSettingsPropertyToTerraform(struct!.codeEditorAppSettings),
        custom_file_systems: cdktn.listMapper(ccSpaceCustomFileSystemPropertyToTerraform, false)(struct!.customFileSystems),
        jupyter_lab_app_settings: ccSpaceSpaceJupyterLabAppSettingsPropertyToTerraform(struct!.jupyterLabAppSettings),
        jupyter_server_app_settings: ccSpaceJupyterServerAppSettingsPropertyToTerraform(struct!.jupyterServerAppSettings),
        kernel_gateway_app_settings: ccSpaceKernelGatewayAppSettingsPropertyToTerraform(struct!.kernelGatewayAppSettings),
        remote_access: cdktn.stringToTerraform(struct!.remoteAccess),
        space_managed_resources: cdktn.stringToTerraform(struct!.spaceManagedResources),
        space_storage_settings: ccSpaceSpaceStorageSettingsPropertyToTerraform(struct!.spaceStorageSettings),
    }
}


export function ccSpaceSpaceSettingsPropertyToHclTerraform(struct?: CcSpace.SpaceSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_type: {
            value: cdktn.stringToHclTerraform(struct!.appType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        code_editor_app_settings: {
            value: ccSpaceSpaceCodeEditorAppSettingsPropertyToHclTerraform(struct!.codeEditorAppSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "SpaceCodeEditorAppSettingsProperty",
        },
        custom_file_systems: {
            value: cdktn.listMapperHcl(ccSpaceCustomFileSystemPropertyToHclTerraform, false)(struct!.customFileSystems),
            isBlock: true,
            type: "list",
            storageClassType: "CustomFileSystemPropertyList",
        },
        jupyter_lab_app_settings: {
            value: ccSpaceSpaceJupyterLabAppSettingsPropertyToHclTerraform(struct!.jupyterLabAppSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "SpaceJupyterLabAppSettingsProperty",
        },
        jupyter_server_app_settings: {
            value: ccSpaceJupyterServerAppSettingsPropertyToHclTerraform(struct!.jupyterServerAppSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "JupyterServerAppSettingsProperty",
        },
        kernel_gateway_app_settings: {
            value: ccSpaceKernelGatewayAppSettingsPropertyToHclTerraform(struct!.kernelGatewayAppSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "KernelGatewayAppSettingsProperty",
        },
        remote_access: {
            value: cdktn.stringToHclTerraform(struct!.remoteAccess),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        space_managed_resources: {
            value: cdktn.stringToHclTerraform(struct!.spaceManagedResources),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        space_storage_settings: {
            value: ccSpaceSpaceStorageSettingsPropertyToHclTerraform(struct!.spaceStorageSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "SpaceStorageSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceSpaceSharingSettingsPropertyToTerraform(struct?: CcSpace.SpaceSharingSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sharing_type: cdktn.stringToTerraform(struct!.sharingType),
    }
}


export function ccSpaceSpaceSharingSettingsPropertyToHclTerraform(struct?: CcSpace.SpaceSharingSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sharing_type: {
            value: cdktn.stringToHclTerraform(struct!.sharingType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpaceTagPropertyToTerraform(struct?: CcSpace.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSpaceTagPropertyToHclTerraform(struct?: CcSpace.TagProperty | cdktn.IResolvable): any {
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


export namespace CcSpace {
export interface OwnershipSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#owner_user_profile_name CcSpace#owner_user_profile_name}
    */
    readonly ownerUserProfileName?: string;
}
export class OwnershipSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OwnershipSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ownerUserProfileName !== undefined) {
            hasAnyValues = true;
            internalValueResult.ownerUserProfileName = this._ownerUserProfileName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OwnershipSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ownerUserProfileName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ownerUserProfileName = value.ownerUserProfileName;
        }
    }

    // owner_user_profile_name - computed: true, optional: true, required: false
    private _ownerUserProfileName?: string; 
    public get ownerUserProfileName() {
        return this.getStringAttribute('owner_user_profile_name');
    }
    public set ownerUserProfileName(value: string) {
        this._ownerUserProfileName = value;
    }
    public resetOwnerUserProfileName() {
        this._ownerUserProfileName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerUserProfileNameInput() {
        return this._ownerUserProfileName;
    }
}
export interface SpaceIdleSettingsProperty {
    /**
    * The space idle timeout value set in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#idle_timeout_in_minutes CcSpace#idle_timeout_in_minutes}
    */
    readonly idleTimeoutInMinutes?: number;
}
export class SpaceIdleSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpaceIdleSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleTimeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpaceIdleSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleTimeoutInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
        }
    }

    // idle_timeout_in_minutes - computed: true, optional: true, required: false
    private _idleTimeoutInMinutes?: number; 
    public get idleTimeoutInMinutes() {
        return this.getNumberAttribute('idle_timeout_in_minutes');
    }
    public set idleTimeoutInMinutes(value: number) {
        this._idleTimeoutInMinutes = value;
    }
    public resetIdleTimeoutInMinutes() {
        this._idleTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleTimeoutInMinutesInput() {
        return this._idleTimeoutInMinutes;
    }
}
export interface SpaceAppLifecycleManagementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#idle_settings CcSpace#idle_settings}
    */
    readonly idleSettings?: SpaceIdleSettingsProperty;
}
export class SpaceAppLifecycleManagementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpaceAppLifecycleManagementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleSettings = this._idleSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpaceAppLifecycleManagementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleSettings.internalValue = value.idleSettings;
        }
    }

    // idle_settings - computed: true, optional: true, required: false
    private _idleSettings = new SpaceIdleSettingsPropertyOutputReference(this, "idle_settings");
    public get idleSettings() {
        return this._idleSettings;
    }
    public putIdleSettings(value: SpaceIdleSettingsProperty) {
        this._idleSettings.internalValue = value;
    }
    public resetIdleSettings() {
        this._idleSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleSettingsInput() {
        return this._idleSettings.internalValue;
    }
}
export interface ResourceSpecProperty {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#instance_type CcSpace#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#lifecycle_config_arn CcSpace#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * The ARN of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#sage_maker_image_arn CcSpace#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The ARN of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#sage_maker_image_version_arn CcSpace#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
}
export class ResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourceSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._lifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
        }
        if (this._sageMakerImageArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
        }
        if (this._sageMakerImageVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sageMakerImageArn = undefined;
            this._sageMakerImageVersionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceType = value.instanceType;
            this._lifecycleConfigArn = value.lifecycleConfigArn;
            this._sageMakerImageArn = value.sageMakerImageArn;
            this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
        }
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // lifecycle_config_arn - computed: true, optional: true, required: false
    private _lifecycleConfigArn?: string; 
    public get lifecycleConfigArn() {
        return this.getStringAttribute('lifecycle_config_arn');
    }
    public set lifecycleConfigArn(value: string) {
        this._lifecycleConfigArn = value;
    }
    public resetLifecycleConfigArn() {
        this._lifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnInput() {
        return this._lifecycleConfigArn;
    }

    // sage_maker_image_arn - computed: true, optional: true, required: false
    private _sageMakerImageArn?: string; 
    public get sageMakerImageArn() {
        return this.getStringAttribute('sage_maker_image_arn');
    }
    public set sageMakerImageArn(value: string) {
        this._sageMakerImageArn = value;
    }
    public resetSageMakerImageArn() {
        this._sageMakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageArnInput() {
        return this._sageMakerImageArn;
    }

    // sage_maker_image_version_arn - computed: true, optional: true, required: false
    private _sageMakerImageVersionArn?: string; 
    public get sageMakerImageVersionArn() {
        return this.getStringAttribute('sage_maker_image_version_arn');
    }
    public set sageMakerImageVersionArn(value: string) {
        this._sageMakerImageVersionArn = value;
    }
    public resetSageMakerImageVersionArn() {
        this._sageMakerImageVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageVersionArnInput() {
        return this._sageMakerImageVersionArn;
    }
}
export interface SpaceCodeEditorAppSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#app_lifecycle_management CcSpace#app_lifecycle_management}
    */
    readonly appLifecycleManagement?: SpaceAppLifecycleManagementProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#default_resource_spec CcSpace#default_resource_spec}
    */
    readonly defaultResourceSpec?: ResourceSpecProperty;
}
export class SpaceCodeEditorAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpaceCodeEditorAppSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appLifecycleManagement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.appLifecycleManagement = this._appLifecycleManagement?.internalValue;
        }
        if (this._defaultResourceSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpaceCodeEditorAppSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appLifecycleManagement.internalValue = undefined;
            this._defaultResourceSpec.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appLifecycleManagement.internalValue = value.appLifecycleManagement;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
        }
    }

    // app_lifecycle_management - computed: true, optional: true, required: false
    private _appLifecycleManagement = new SpaceAppLifecycleManagementPropertyOutputReference(this, "app_lifecycle_management");
    public get appLifecycleManagement() {
        return this._appLifecycleManagement;
    }
    public putAppLifecycleManagement(value: SpaceAppLifecycleManagementProperty) {
        this._appLifecycleManagement.internalValue = value;
    }
    public resetAppLifecycleManagement() {
        this._appLifecycleManagement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appLifecycleManagementInput() {
        return this._appLifecycleManagement.internalValue;
    }

    // default_resource_spec - computed: true, optional: true, required: false
    private _defaultResourceSpec = new ResourceSpecPropertyOutputReference(this, "default_resource_spec");
    public get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    public putDefaultResourceSpec(value: ResourceSpecProperty) {
        this._defaultResourceSpec.internalValue = value;
    }
    public resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }
}
export interface EFSFileSystemProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#file_system_id CcSpace#file_system_id}
    */
    readonly fileSystemId?: string;
}
export class EFSFileSystemPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EFSFileSystemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fileSystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EFSFileSystemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileSystemId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileSystemId = value.fileSystemId;
        }
    }

    // file_system_id - computed: true, optional: true, required: false
    private _fileSystemId?: string; 
    public get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
        this._fileSystemId = value;
    }
    public resetFileSystemId() {
        this._fileSystemId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
        return this._fileSystemId;
    }
}
export interface FSxLustreFileSystemProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#file_system_id CcSpace#file_system_id}
    */
    readonly fileSystemId?: string;
}
export class FSxLustreFileSystemPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FSxLustreFileSystemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fileSystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FSxLustreFileSystemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileSystemId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileSystemId = value.fileSystemId;
        }
    }

    // file_system_id - computed: true, optional: true, required: false
    private _fileSystemId?: string; 
    public get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
        this._fileSystemId = value;
    }
    public resetFileSystemId() {
        this._fileSystemId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
        return this._fileSystemId;
    }
}
export interface S3FileSystemProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#s3_uri CcSpace#s3_uri}
    */
    readonly s3Uri?: string;
}
export class S3FileSystemPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3FileSystemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3FileSystemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Uri = value.s3Uri;
        }
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface CustomFileSystemProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#efs_file_system CcSpace#efs_file_system}
    */
    readonly efsFileSystem?: EFSFileSystemProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#fsx_lustre_file_system CcSpace#fsx_lustre_file_system}
    */
    readonly fsxLustreFileSystem?: FSxLustreFileSystemProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#s3_file_system CcSpace#s3_file_system}
    */
    readonly s3FileSystem?: S3FileSystemProperty;
}
export class CustomFileSystemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CustomFileSystemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._efsFileSystem?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.efsFileSystem = this._efsFileSystem?.internalValue;
        }
        if (this._fsxLustreFileSystem?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fsxLustreFileSystem = this._fsxLustreFileSystem?.internalValue;
        }
        if (this._s3FileSystem?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3FileSystem = this._s3FileSystem?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomFileSystemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._efsFileSystem.internalValue = undefined;
            this._fsxLustreFileSystem.internalValue = undefined;
            this._s3FileSystem.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._efsFileSystem.internalValue = value.efsFileSystem;
            this._fsxLustreFileSystem.internalValue = value.fsxLustreFileSystem;
            this._s3FileSystem.internalValue = value.s3FileSystem;
        }
    }

    // efs_file_system - computed: true, optional: true, required: false
    private _efsFileSystem = new EFSFileSystemPropertyOutputReference(this, "efs_file_system");
    public get efsFileSystem() {
        return this._efsFileSystem;
    }
    public putEfsFileSystem(value: EFSFileSystemProperty) {
        this._efsFileSystem.internalValue = value;
    }
    public resetEfsFileSystem() {
        this._efsFileSystem.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get efsFileSystemInput() {
        return this._efsFileSystem.internalValue;
    }

    // fsx_lustre_file_system - computed: true, optional: true, required: false
    private _fsxLustreFileSystem = new FSxLustreFileSystemPropertyOutputReference(this, "fsx_lustre_file_system");
    public get fsxLustreFileSystem() {
        return this._fsxLustreFileSystem;
    }
    public putFsxLustreFileSystem(value: FSxLustreFileSystemProperty) {
        this._fsxLustreFileSystem.internalValue = value;
    }
    public resetFsxLustreFileSystem() {
        this._fsxLustreFileSystem.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fsxLustreFileSystemInput() {
        return this._fsxLustreFileSystem.internalValue;
    }

    // s3_file_system - computed: true, optional: true, required: false
    private _s3FileSystem = new S3FileSystemPropertyOutputReference(this, "s3_file_system");
    public get s3FileSystem() {
        return this._s3FileSystem;
    }
    public putS3FileSystem(value: S3FileSystemProperty) {
        this._s3FileSystem.internalValue = value;
    }
    public resetS3FileSystem() {
        this._s3FileSystem.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3FileSystemInput() {
        return this._s3FileSystem.internalValue;
    }
}

export class CustomFileSystemPropertyList extends cdktn.ComplexList {
    public internalValue? : CustomFileSystemProperty[] | cdktn.IResolvable

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
    public get(index: number): CustomFileSystemPropertyOutputReference {
        return new CustomFileSystemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IdleSettingsProperty {
    /**
    * The space idle timeout value set in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#idle_timeout_in_minutes CcSpace#idle_timeout_in_minutes}
    */
    readonly idleTimeoutInMinutes?: number;
}
export class IdleSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IdleSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleTimeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdleSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleTimeoutInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
        }
    }

    // idle_timeout_in_minutes - computed: true, optional: true, required: false
    private _idleTimeoutInMinutes?: number; 
    public get idleTimeoutInMinutes() {
        return this.getNumberAttribute('idle_timeout_in_minutes');
    }
    public set idleTimeoutInMinutes(value: number) {
        this._idleTimeoutInMinutes = value;
    }
    public resetIdleTimeoutInMinutes() {
        this._idleTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleTimeoutInMinutesInput() {
        return this._idleTimeoutInMinutes;
    }
}
export interface AppLifecycleManagementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#idle_settings CcSpace#idle_settings}
    */
    readonly idleSettings?: IdleSettingsProperty;
}
export class AppLifecycleManagementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AppLifecycleManagementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleSettings = this._idleSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AppLifecycleManagementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleSettings.internalValue = value.idleSettings;
        }
    }

    // idle_settings - computed: true, optional: true, required: false
    private _idleSettings = new IdleSettingsPropertyOutputReference(this, "idle_settings");
    public get idleSettings() {
        return this._idleSettings;
    }
    public putIdleSettings(value: IdleSettingsProperty) {
        this._idleSettings.internalValue = value;
    }
    public resetIdleSettings() {
        this._idleSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleSettingsInput() {
        return this._idleSettings.internalValue;
    }
}
export interface CodeRepositoryProperty {
    /**
    * A CodeRepository (valid URL) to be used within Jupyter's Git extension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#repository_url CcSpace#repository_url}
    */
    readonly repositoryUrl?: string;
}
export class CodeRepositoryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CodeRepositoryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._repositoryUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryUrl = this._repositoryUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeRepositoryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._repositoryUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._repositoryUrl = value.repositoryUrl;
        }
    }

    // repository_url - computed: true, optional: true, required: false
    private _repositoryUrl?: string; 
    public get repositoryUrl() {
        return this.getStringAttribute('repository_url');
    }
    public set repositoryUrl(value: string) {
        this._repositoryUrl = value;
    }
    public resetRepositoryUrl() {
        this._repositoryUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryUrlInput() {
        return this._repositoryUrl;
    }
}

export class CodeRepositoryPropertyList extends cdktn.ComplexList {
    public internalValue? : CodeRepositoryProperty[] | cdktn.IResolvable

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
    public get(index: number): CodeRepositoryPropertyOutputReference {
        return new CodeRepositoryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SpaceSettingsJupyterLabAppSettingsDefaultResourceSpecProperty {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#instance_type CcSpace#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#lifecycle_config_arn CcSpace#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * The ARN of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#sage_maker_image_arn CcSpace#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The ARN of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#sage_maker_image_version_arn CcSpace#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
}
export class SpaceSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpaceSettingsJupyterLabAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._lifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
        }
        if (this._sageMakerImageArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
        }
        if (this._sageMakerImageVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpaceSettingsJupyterLabAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sageMakerImageArn = undefined;
            this._sageMakerImageVersionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceType = value.instanceType;
            this._lifecycleConfigArn = value.lifecycleConfigArn;
            this._sageMakerImageArn = value.sageMakerImageArn;
            this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
        }
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // lifecycle_config_arn - computed: true, optional: true, required: false
    private _lifecycleConfigArn?: string; 
    public get lifecycleConfigArn() {
        return this.getStringAttribute('lifecycle_config_arn');
    }
    public set lifecycleConfigArn(value: string) {
        this._lifecycleConfigArn = value;
    }
    public resetLifecycleConfigArn() {
        this._lifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnInput() {
        return this._lifecycleConfigArn;
    }

    // sage_maker_image_arn - computed: true, optional: true, required: false
    private _sageMakerImageArn?: string; 
    public get sageMakerImageArn() {
        return this.getStringAttribute('sage_maker_image_arn');
    }
    public set sageMakerImageArn(value: string) {
        this._sageMakerImageArn = value;
    }
    public resetSageMakerImageArn() {
        this._sageMakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageArnInput() {
        return this._sageMakerImageArn;
    }

    // sage_maker_image_version_arn - computed: true, optional: true, required: false
    private _sageMakerImageVersionArn?: string; 
    public get sageMakerImageVersionArn() {
        return this.getStringAttribute('sage_maker_image_version_arn');
    }
    public set sageMakerImageVersionArn(value: string) {
        this._sageMakerImageVersionArn = value;
    }
    public resetSageMakerImageVersionArn() {
        this._sageMakerImageVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageVersionArnInput() {
        return this._sageMakerImageVersionArn;
    }
}
export interface SpaceJupyterLabAppSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#app_lifecycle_management CcSpace#app_lifecycle_management}
    */
    readonly appLifecycleManagement?: AppLifecycleManagementProperty;
    /**
    * A list of CodeRepositories available for use with JupyterLab apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#code_repositories CcSpace#code_repositories}
    */
    readonly codeRepositories?: CodeRepositoryProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#default_resource_spec CcSpace#default_resource_spec}
    */
    readonly defaultResourceSpec?: SpaceSettingsJupyterLabAppSettingsDefaultResourceSpecProperty;
}
export class SpaceJupyterLabAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpaceJupyterLabAppSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appLifecycleManagement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.appLifecycleManagement = this._appLifecycleManagement?.internalValue;
        }
        if (this._codeRepositories?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeRepositories = this._codeRepositories?.internalValue;
        }
        if (this._defaultResourceSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpaceJupyterLabAppSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appLifecycleManagement.internalValue = undefined;
            this._codeRepositories.internalValue = undefined;
            this._defaultResourceSpec.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appLifecycleManagement.internalValue = value.appLifecycleManagement;
            this._codeRepositories.internalValue = value.codeRepositories;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
        }
    }

    // app_lifecycle_management - computed: true, optional: true, required: false
    private _appLifecycleManagement = new AppLifecycleManagementPropertyOutputReference(this, "app_lifecycle_management");
    public get appLifecycleManagement() {
        return this._appLifecycleManagement;
    }
    public putAppLifecycleManagement(value: AppLifecycleManagementProperty) {
        this._appLifecycleManagement.internalValue = value;
    }
    public resetAppLifecycleManagement() {
        this._appLifecycleManagement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appLifecycleManagementInput() {
        return this._appLifecycleManagement.internalValue;
    }

    // code_repositories - computed: true, optional: true, required: false
    private _codeRepositories = new CodeRepositoryPropertyList(this, "code_repositories", false);
    public get codeRepositories() {
        return this._codeRepositories;
    }
    public putCodeRepositories(value: CodeRepositoryProperty[] | cdktn.IResolvable) {
        this._codeRepositories.internalValue = value;
    }
    public resetCodeRepositories() {
        this._codeRepositories.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeRepositoriesInput() {
        return this._codeRepositories.internalValue;
    }

    // default_resource_spec - computed: true, optional: true, required: false
    private _defaultResourceSpec = new SpaceSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
    public get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    public putDefaultResourceSpec(value: SpaceSettingsJupyterLabAppSettingsDefaultResourceSpecProperty) {
        this._defaultResourceSpec.internalValue = value;
    }
    public resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }
}
export interface SpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#instance_type CcSpace#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#lifecycle_config_arn CcSpace#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * The ARN of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#sage_maker_image_arn CcSpace#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The ARN of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#sage_maker_image_version_arn CcSpace#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
}
export class SpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._lifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
        }
        if (this._sageMakerImageArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
        }
        if (this._sageMakerImageVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sageMakerImageArn = undefined;
            this._sageMakerImageVersionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceType = value.instanceType;
            this._lifecycleConfigArn = value.lifecycleConfigArn;
            this._sageMakerImageArn = value.sageMakerImageArn;
            this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
        }
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // lifecycle_config_arn - computed: true, optional: true, required: false
    private _lifecycleConfigArn?: string; 
    public get lifecycleConfigArn() {
        return this.getStringAttribute('lifecycle_config_arn');
    }
    public set lifecycleConfigArn(value: string) {
        this._lifecycleConfigArn = value;
    }
    public resetLifecycleConfigArn() {
        this._lifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnInput() {
        return this._lifecycleConfigArn;
    }

    // sage_maker_image_arn - computed: true, optional: true, required: false
    private _sageMakerImageArn?: string; 
    public get sageMakerImageArn() {
        return this.getStringAttribute('sage_maker_image_arn');
    }
    public set sageMakerImageArn(value: string) {
        this._sageMakerImageArn = value;
    }
    public resetSageMakerImageArn() {
        this._sageMakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageArnInput() {
        return this._sageMakerImageArn;
    }

    // sage_maker_image_version_arn - computed: true, optional: true, required: false
    private _sageMakerImageVersionArn?: string; 
    public get sageMakerImageVersionArn() {
        return this.getStringAttribute('sage_maker_image_version_arn');
    }
    public set sageMakerImageVersionArn(value: string) {
        this._sageMakerImageVersionArn = value;
    }
    public resetSageMakerImageVersionArn() {
        this._sageMakerImageVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageVersionArnInput() {
        return this._sageMakerImageVersionArn;
    }
}
export interface JupyterServerAppSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#default_resource_spec CcSpace#default_resource_spec}
    */
    readonly defaultResourceSpec?: SpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty;
    /**
    * A list of LifecycleConfigArns available for use with JupyterServer apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#lifecycle_config_arns CcSpace#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
}
export class JupyterServerAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JupyterServerAppSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultResourceSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        if (this._lifecycleConfigArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JupyterServerAppSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultResourceSpec.internalValue = undefined;
            this._lifecycleConfigArns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
            this._lifecycleConfigArns = value.lifecycleConfigArns;
        }
    }

    // default_resource_spec - computed: true, optional: true, required: false
    private _defaultResourceSpec = new SpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
    public get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    public putDefaultResourceSpec(value: SpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty) {
        this._defaultResourceSpec.internalValue = value;
    }
    public resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }

    // lifecycle_config_arns - computed: true, optional: true, required: false
    private _lifecycleConfigArns?: string[]; 
    public get lifecycleConfigArns() {
        return this.getListAttribute('lifecycle_config_arns');
    }
    public set lifecycleConfigArns(value: string[]) {
        this._lifecycleConfigArns = value;
    }
    public resetLifecycleConfigArns() {
        this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnsInput() {
        return this._lifecycleConfigArns;
    }
}
export interface CustomImageProperty {
    /**
    * The Name of the AppImageConfig.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#app_image_config_name CcSpace#app_image_config_name}
    */
    readonly appImageConfigName?: string;
    /**
    * The name of the CustomImage. Must be unique to your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#image_name CcSpace#image_name}
    */
    readonly imageName?: string;
    /**
    * The version number of the CustomImage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#image_version_number CcSpace#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export class CustomImagePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CustomImageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appImageConfigName !== undefined) {
            hasAnyValues = true;
            internalValueResult.appImageConfigName = this._appImageConfigName;
        }
        if (this._imageName !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageName = this._imageName;
        }
        if (this._imageVersionNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageVersionNumber = this._imageVersionNumber;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomImageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appImageConfigName = undefined;
            this._imageName = undefined;
            this._imageVersionNumber = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appImageConfigName = value.appImageConfigName;
            this._imageName = value.imageName;
            this._imageVersionNumber = value.imageVersionNumber;
        }
    }

    // app_image_config_name - computed: true, optional: true, required: false
    private _appImageConfigName?: string; 
    public get appImageConfigName() {
        return this.getStringAttribute('app_image_config_name');
    }
    public set appImageConfigName(value: string) {
        this._appImageConfigName = value;
    }
    public resetAppImageConfigName() {
        this._appImageConfigName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appImageConfigNameInput() {
        return this._appImageConfigName;
    }

    // image_name - computed: true, optional: true, required: false
    private _imageName?: string; 
    public get imageName() {
        return this.getStringAttribute('image_name');
    }
    public set imageName(value: string) {
        this._imageName = value;
    }
    public resetImageName() {
        this._imageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageNameInput() {
        return this._imageName;
    }

    // image_version_number - computed: true, optional: true, required: false
    private _imageVersionNumber?: number; 
    public get imageVersionNumber() {
        return this.getNumberAttribute('image_version_number');
    }
    public set imageVersionNumber(value: number) {
        this._imageVersionNumber = value;
    }
    public resetImageVersionNumber() {
        this._imageVersionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageVersionNumberInput() {
        return this._imageVersionNumber;
    }
}

export class CustomImagePropertyList extends cdktn.ComplexList {
    public internalValue? : CustomImageProperty[] | cdktn.IResolvable

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
    public get(index: number): CustomImagePropertyOutputReference {
        return new CustomImagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#instance_type CcSpace#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#lifecycle_config_arn CcSpace#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * The ARN of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#sage_maker_image_arn CcSpace#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The ARN of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#sage_maker_image_version_arn CcSpace#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
}
export class SpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._lifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
        }
        if (this._sageMakerImageArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
        }
        if (this._sageMakerImageVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sageMakerImageArn = undefined;
            this._sageMakerImageVersionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceType = value.instanceType;
            this._lifecycleConfigArn = value.lifecycleConfigArn;
            this._sageMakerImageArn = value.sageMakerImageArn;
            this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
        }
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // lifecycle_config_arn - computed: true, optional: true, required: false
    private _lifecycleConfigArn?: string; 
    public get lifecycleConfigArn() {
        return this.getStringAttribute('lifecycle_config_arn');
    }
    public set lifecycleConfigArn(value: string) {
        this._lifecycleConfigArn = value;
    }
    public resetLifecycleConfigArn() {
        this._lifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnInput() {
        return this._lifecycleConfigArn;
    }

    // sage_maker_image_arn - computed: true, optional: true, required: false
    private _sageMakerImageArn?: string; 
    public get sageMakerImageArn() {
        return this.getStringAttribute('sage_maker_image_arn');
    }
    public set sageMakerImageArn(value: string) {
        this._sageMakerImageArn = value;
    }
    public resetSageMakerImageArn() {
        this._sageMakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageArnInput() {
        return this._sageMakerImageArn;
    }

    // sage_maker_image_version_arn - computed: true, optional: true, required: false
    private _sageMakerImageVersionArn?: string; 
    public get sageMakerImageVersionArn() {
        return this.getStringAttribute('sage_maker_image_version_arn');
    }
    public set sageMakerImageVersionArn(value: string) {
        this._sageMakerImageVersionArn = value;
    }
    public resetSageMakerImageVersionArn() {
        this._sageMakerImageVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageVersionArnInput() {
        return this._sageMakerImageVersionArn;
    }
}
export interface KernelGatewayAppSettingsProperty {
    /**
    * A list of custom SageMaker images that are configured to run as a KernelGateway app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#custom_images CcSpace#custom_images}
    */
    readonly customImages?: CustomImageProperty[] | cdktn.IResolvable;
    /**
    * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#default_resource_spec CcSpace#default_resource_spec}
    */
    readonly defaultResourceSpec?: SpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty;
    /**
    * A list of LifecycleConfigArns available for use with KernelGateway apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#lifecycle_config_arns CcSpace#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
}
export class KernelGatewayAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KernelGatewayAppSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customImages?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customImages = this._customImages?.internalValue;
        }
        if (this._defaultResourceSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        if (this._lifecycleConfigArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KernelGatewayAppSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customImages.internalValue = undefined;
            this._defaultResourceSpec.internalValue = undefined;
            this._lifecycleConfigArns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customImages.internalValue = value.customImages;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
            this._lifecycleConfigArns = value.lifecycleConfigArns;
        }
    }

    // custom_images - computed: true, optional: true, required: false
    private _customImages = new CustomImagePropertyList(this, "custom_images", false);
    public get customImages() {
        return this._customImages;
    }
    public putCustomImages(value: CustomImageProperty[] | cdktn.IResolvable) {
        this._customImages.internalValue = value;
    }
    public resetCustomImages() {
        this._customImages.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customImagesInput() {
        return this._customImages.internalValue;
    }

    // default_resource_spec - computed: true, optional: true, required: false
    private _defaultResourceSpec = new SpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
    public get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    public putDefaultResourceSpec(value: SpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty) {
        this._defaultResourceSpec.internalValue = value;
    }
    public resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }

    // lifecycle_config_arns - computed: true, optional: true, required: false
    private _lifecycleConfigArns?: string[]; 
    public get lifecycleConfigArns() {
        return this.getListAttribute('lifecycle_config_arns');
    }
    public set lifecycleConfigArns(value: string[]) {
        this._lifecycleConfigArns = value;
    }
    public resetLifecycleConfigArns() {
        this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnsInput() {
        return this._lifecycleConfigArns;
    }
}
export interface EbsStorageSettingsProperty {
    /**
    * Size of the Amazon EBS volume in Gb
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#ebs_volume_size_in_gb CcSpace#ebs_volume_size_in_gb}
    */
    readonly ebsVolumeSizeInGb?: number;
}
export class EbsStorageSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EbsStorageSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ebsVolumeSizeInGb !== undefined) {
            hasAnyValues = true;
            internalValueResult.ebsVolumeSizeInGb = this._ebsVolumeSizeInGb;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EbsStorageSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ebsVolumeSizeInGb = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ebsVolumeSizeInGb = value.ebsVolumeSizeInGb;
        }
    }

    // ebs_volume_size_in_gb - computed: true, optional: true, required: false
    private _ebsVolumeSizeInGb?: number; 
    public get ebsVolumeSizeInGb() {
        return this.getNumberAttribute('ebs_volume_size_in_gb');
    }
    public set ebsVolumeSizeInGb(value: number) {
        this._ebsVolumeSizeInGb = value;
    }
    public resetEbsVolumeSizeInGb() {
        this._ebsVolumeSizeInGb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsVolumeSizeInGbInput() {
        return this._ebsVolumeSizeInGb;
    }
}
export interface SpaceStorageSettingsProperty {
    /**
    * Properties related to the space's Amazon Elastic Block Store volume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#ebs_storage_settings CcSpace#ebs_storage_settings}
    */
    readonly ebsStorageSettings?: EbsStorageSettingsProperty;
}
export class SpaceStorageSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpaceStorageSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ebsStorageSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ebsStorageSettings = this._ebsStorageSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpaceStorageSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ebsStorageSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ebsStorageSettings.internalValue = value.ebsStorageSettings;
        }
    }

    // ebs_storage_settings - computed: true, optional: true, required: false
    private _ebsStorageSettings = new EbsStorageSettingsPropertyOutputReference(this, "ebs_storage_settings");
    public get ebsStorageSettings() {
        return this._ebsStorageSettings;
    }
    public putEbsStorageSettings(value: EbsStorageSettingsProperty) {
        this._ebsStorageSettings.internalValue = value;
    }
    public resetEbsStorageSettings() {
        this._ebsStorageSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsStorageSettingsInput() {
        return this._ebsStorageSettings.internalValue;
    }
}
export interface SpaceSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#app_type CcSpace#app_type}
    */
    readonly appType?: string;
    /**
    * The CodeEditor app settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#code_editor_app_settings CcSpace#code_editor_app_settings}
    */
    readonly codeEditorAppSettings?: SpaceCodeEditorAppSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#custom_file_systems CcSpace#custom_file_systems}
    */
    readonly customFileSystems?: CustomFileSystemProperty[] | cdktn.IResolvable;
    /**
    * The JupyterLab app settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#jupyter_lab_app_settings CcSpace#jupyter_lab_app_settings}
    */
    readonly jupyterLabAppSettings?: SpaceJupyterLabAppSettingsProperty;
    /**
    * The Jupyter server's app settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#jupyter_server_app_settings CcSpace#jupyter_server_app_settings}
    */
    readonly jupyterServerAppSettings?: JupyterServerAppSettingsProperty;
    /**
    * The kernel gateway app settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#kernel_gateway_app_settings CcSpace#kernel_gateway_app_settings}
    */
    readonly kernelGatewayAppSettings?: KernelGatewayAppSettingsProperty;
    /**
    * This is a flag used to indicate if remote access is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#remote_access CcSpace#remote_access}
    */
    readonly remoteAccess?: string;
    /**
    * This is a flag used to indicate if space managed resources needs to be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#space_managed_resources CcSpace#space_managed_resources}
    */
    readonly spaceManagedResources?: string;
    /**
    * Default storage settings for a space.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#space_storage_settings CcSpace#space_storage_settings}
    */
    readonly spaceStorageSettings?: SpaceStorageSettingsProperty;
}
export class SpaceSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpaceSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appType !== undefined) {
            hasAnyValues = true;
            internalValueResult.appType = this._appType;
        }
        if (this._codeEditorAppSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeEditorAppSettings = this._codeEditorAppSettings?.internalValue;
        }
        if (this._customFileSystems?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customFileSystems = this._customFileSystems?.internalValue;
        }
        if (this._jupyterLabAppSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jupyterLabAppSettings = this._jupyterLabAppSettings?.internalValue;
        }
        if (this._jupyterServerAppSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jupyterServerAppSettings = this._jupyterServerAppSettings?.internalValue;
        }
        if (this._kernelGatewayAppSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kernelGatewayAppSettings = this._kernelGatewayAppSettings?.internalValue;
        }
        if (this._remoteAccess !== undefined) {
            hasAnyValues = true;
            internalValueResult.remoteAccess = this._remoteAccess;
        }
        if (this._spaceManagedResources !== undefined) {
            hasAnyValues = true;
            internalValueResult.spaceManagedResources = this._spaceManagedResources;
        }
        if (this._spaceStorageSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.spaceStorageSettings = this._spaceStorageSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpaceSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appType = undefined;
            this._codeEditorAppSettings.internalValue = undefined;
            this._customFileSystems.internalValue = undefined;
            this._jupyterLabAppSettings.internalValue = undefined;
            this._jupyterServerAppSettings.internalValue = undefined;
            this._kernelGatewayAppSettings.internalValue = undefined;
            this._remoteAccess = undefined;
            this._spaceManagedResources = undefined;
            this._spaceStorageSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appType = value.appType;
            this._codeEditorAppSettings.internalValue = value.codeEditorAppSettings;
            this._customFileSystems.internalValue = value.customFileSystems;
            this._jupyterLabAppSettings.internalValue = value.jupyterLabAppSettings;
            this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
            this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
            this._remoteAccess = value.remoteAccess;
            this._spaceManagedResources = value.spaceManagedResources;
            this._spaceStorageSettings.internalValue = value.spaceStorageSettings;
        }
    }

    // app_type - computed: true, optional: true, required: false
    private _appType?: string; 
    public get appType() {
        return this.getStringAttribute('app_type');
    }
    public set appType(value: string) {
        this._appType = value;
    }
    public resetAppType() {
        this._appType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appTypeInput() {
        return this._appType;
    }

    // code_editor_app_settings - computed: true, optional: true, required: false
    private _codeEditorAppSettings = new SpaceCodeEditorAppSettingsPropertyOutputReference(this, "code_editor_app_settings");
    public get codeEditorAppSettings() {
        return this._codeEditorAppSettings;
    }
    public putCodeEditorAppSettings(value: SpaceCodeEditorAppSettingsProperty) {
        this._codeEditorAppSettings.internalValue = value;
    }
    public resetCodeEditorAppSettings() {
        this._codeEditorAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeEditorAppSettingsInput() {
        return this._codeEditorAppSettings.internalValue;
    }

    // custom_file_systems - computed: true, optional: true, required: false
    private _customFileSystems = new CustomFileSystemPropertyList(this, "custom_file_systems", false);
    public get customFileSystems() {
        return this._customFileSystems;
    }
    public putCustomFileSystems(value: CustomFileSystemProperty[] | cdktn.IResolvable) {
        this._customFileSystems.internalValue = value;
    }
    public resetCustomFileSystems() {
        this._customFileSystems.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customFileSystemsInput() {
        return this._customFileSystems.internalValue;
    }

    // jupyter_lab_app_settings - computed: true, optional: true, required: false
    private _jupyterLabAppSettings = new SpaceJupyterLabAppSettingsPropertyOutputReference(this, "jupyter_lab_app_settings");
    public get jupyterLabAppSettings() {
        return this._jupyterLabAppSettings;
    }
    public putJupyterLabAppSettings(value: SpaceJupyterLabAppSettingsProperty) {
        this._jupyterLabAppSettings.internalValue = value;
    }
    public resetJupyterLabAppSettings() {
        this._jupyterLabAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jupyterLabAppSettingsInput() {
        return this._jupyterLabAppSettings.internalValue;
    }

    // jupyter_server_app_settings - computed: true, optional: true, required: false
    private _jupyterServerAppSettings = new JupyterServerAppSettingsPropertyOutputReference(this, "jupyter_server_app_settings");
    public get jupyterServerAppSettings() {
        return this._jupyterServerAppSettings;
    }
    public putJupyterServerAppSettings(value: JupyterServerAppSettingsProperty) {
        this._jupyterServerAppSettings.internalValue = value;
    }
    public resetJupyterServerAppSettings() {
        this._jupyterServerAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jupyterServerAppSettingsInput() {
        return this._jupyterServerAppSettings.internalValue;
    }

    // kernel_gateway_app_settings - computed: true, optional: true, required: false
    private _kernelGatewayAppSettings = new KernelGatewayAppSettingsPropertyOutputReference(this, "kernel_gateway_app_settings");
    public get kernelGatewayAppSettings() {
        return this._kernelGatewayAppSettings;
    }
    public putKernelGatewayAppSettings(value: KernelGatewayAppSettingsProperty) {
        this._kernelGatewayAppSettings.internalValue = value;
    }
    public resetKernelGatewayAppSettings() {
        this._kernelGatewayAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kernelGatewayAppSettingsInput() {
        return this._kernelGatewayAppSettings.internalValue;
    }

    // remote_access - computed: true, optional: true, required: false
    private _remoteAccess?: string; 
    public get remoteAccess() {
        return this.getStringAttribute('remote_access');
    }
    public set remoteAccess(value: string) {
        this._remoteAccess = value;
    }
    public resetRemoteAccess() {
        this._remoteAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remoteAccessInput() {
        return this._remoteAccess;
    }

    // space_managed_resources - computed: true, optional: true, required: false
    private _spaceManagedResources?: string; 
    public get spaceManagedResources() {
        return this.getStringAttribute('space_managed_resources');
    }
    public set spaceManagedResources(value: string) {
        this._spaceManagedResources = value;
    }
    public resetSpaceManagedResources() {
        this._spaceManagedResources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spaceManagedResourcesInput() {
        return this._spaceManagedResources;
    }

    // space_storage_settings - computed: true, optional: true, required: false
    private _spaceStorageSettings = new SpaceStorageSettingsPropertyOutputReference(this, "space_storage_settings");
    public get spaceStorageSettings() {
        return this._spaceStorageSettings;
    }
    public putSpaceStorageSettings(value: SpaceStorageSettingsProperty) {
        this._spaceStorageSettings.internalValue = value;
    }
    public resetSpaceStorageSettings() {
        this._spaceStorageSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spaceStorageSettingsInput() {
        return this._spaceStorageSettings.internalValue;
    }
}
export interface SpaceSharingSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#sharing_type CcSpace#sharing_type}
    */
    readonly sharingType?: string;
}
export class SpaceSharingSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpaceSharingSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sharingType !== undefined) {
            hasAnyValues = true;
            internalValueResult.sharingType = this._sharingType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpaceSharingSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sharingType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sharingType = value.sharingType;
        }
    }

    // sharing_type - computed: true, optional: true, required: false
    private _sharingType?: string; 
    public get sharingType() {
        return this.getStringAttribute('sharing_type');
    }
    public set sharingType(value: string) {
        this._sharingType = value;
    }
    public resetSharingType() {
        this._sharingType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sharingTypeInput() {
        return this._sharingType;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#key CcSpace#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_space#value CcSpace#value}
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
