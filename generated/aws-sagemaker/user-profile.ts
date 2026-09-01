// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUserProfileProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the associated Domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#domain_id CcUserProfile#domain_id}
    */
    readonly domainId: string;
    /**
    * A specifier for the type of value specified in SingleSignOnUserValue. Currently, the only supported value is "UserName". If the Domain's AuthMode is SSO, this field is required. If the Domain's AuthMode is not SSO, this field cannot be specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#single_sign_on_user_identifier CcUserProfile#single_sign_on_user_identifier}
    */
    readonly singleSignOnUserIdentifier?: string;
    /**
    * The username of the associated AWS Single Sign-On User for this UserProfile. If the Domain's AuthMode is SSO, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not SSO, this field cannot be specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#single_sign_on_user_value CcUserProfile#single_sign_on_user_value}
    */
    readonly singleSignOnUserValue?: string;
    /**
    * A list of tags to apply to the user profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#tags CcUserProfile#tags}
    */
    readonly tags?: CcUserProfile.TagProperty[] | cdktn.IResolvable;
    /**
    * A name for the UserProfile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#user_profile_name CcUserProfile#user_profile_name}
    */
    readonly userProfileName: string;
    /**
    * A collection of settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#user_settings CcUserProfile#user_settings}
    */
    readonly userSettings?: CcUserProfile.UserSettingsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile awscc_sagemaker_user_profile}
*/
export class CcUserProfile extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_user_profile";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUserProfile resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUserProfile to import
    * @param importFromId The id of the existing CcUserProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUserProfile to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_user_profile", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile awscc_sagemaker_user_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUserProfileProps
    */
    public constructor(scope: Construct, id: string, config: CcUserProfileProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_user_profile',
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
        this._domainId = config.domainId;
        this._singleSignOnUserIdentifier = config.singleSignOnUserIdentifier;
        this._singleSignOnUserValue = config.singleSignOnUserValue;
        this._tags.internalValue = config.tags;
        this._userProfileName = config.userProfileName;
        this._userSettings.internalValue = config.userSettings;
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

    // single_sign_on_user_identifier - computed: true, optional: true, required: false
    private _singleSignOnUserIdentifier?: string; 
    public get singleSignOnUserIdentifier() {
        return this.getStringAttribute('single_sign_on_user_identifier');
    }
    public set singleSignOnUserIdentifier(value: string) {
        this._singleSignOnUserIdentifier = value;
    }
    public resetSingleSignOnUserIdentifier() {
        this._singleSignOnUserIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singleSignOnUserIdentifierInput() {
        return this._singleSignOnUserIdentifier;
    }

    // single_sign_on_user_value - computed: true, optional: true, required: false
    private _singleSignOnUserValue?: string; 
    public get singleSignOnUserValue() {
        return this.getStringAttribute('single_sign_on_user_value');
    }
    public set singleSignOnUserValue(value: string) {
        this._singleSignOnUserValue = value;
    }
    public resetSingleSignOnUserValue() {
        this._singleSignOnUserValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singleSignOnUserValueInput() {
        return this._singleSignOnUserValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcUserProfile.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcUserProfile.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // user_profile_arn - computed: true, optional: false, required: false
    public get userProfileArn() {
        return this.getStringAttribute('user_profile_arn');
    }

    // user_profile_name - computed: false, optional: false, required: true
    private _userProfileName?: string; 
    public get userProfileName() {
        return this.getStringAttribute('user_profile_name');
    }
    public set userProfileName(value: string) {
        this._userProfileName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userProfileNameInput() {
        return this._userProfileName;
    }

    // user_settings - computed: true, optional: true, required: false
    private _userSettings = new CcUserProfile.UserSettingsPropertyOutputReference(this, "user_settings");
    public get userSettings() {
        return this._userSettings;
    }
    public putUserSettings(value: CcUserProfile.UserSettingsProperty) {
        this._userSettings.internalValue = value;
    }
    public resetUserSettings() {
        this._userSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userSettingsInput() {
        return this._userSettings.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            domain_id: cdktn.stringToTerraform(this._domainId),
            single_sign_on_user_identifier: cdktn.stringToTerraform(this._singleSignOnUserIdentifier),
            single_sign_on_user_value: cdktn.stringToTerraform(this._singleSignOnUserValue),
            tags: cdktn.listMapper(ccUserProfileTagPropertyToTerraform, false)(this._tags.internalValue),
            user_profile_name: cdktn.stringToTerraform(this._userProfileName),
            user_settings: ccUserProfileUserSettingsPropertyToTerraform(this._userSettings.internalValue),
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
            single_sign_on_user_identifier: {
                value: cdktn.stringToHclTerraform(this._singleSignOnUserIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            single_sign_on_user_value: {
                value: cdktn.stringToHclTerraform(this._singleSignOnUserValue),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccUserProfileTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcUserProfile.TagPropertyList",
            },
            user_profile_name: {
                value: cdktn.stringToHclTerraform(this._userProfileName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_settings: {
                value: ccUserProfileUserSettingsPropertyToHclTerraform(this._userSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUserProfile.UserSettingsProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccUserProfileTagPropertyToTerraform(struct?: CcUserProfile.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccUserProfileTagPropertyToHclTerraform(struct?: CcUserProfile.TagProperty | cdktn.IResolvable): any {
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


export function ccUserProfileIdleSettingsPropertyToTerraform(struct?: CcUserProfile.IdleSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.idleTimeoutInMinutes),
        lifecycle_management: cdktn.stringToTerraform(struct!.lifecycleManagement),
        max_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.maxIdleTimeoutInMinutes),
        min_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.minIdleTimeoutInMinutes),
    }
}


export function ccUserProfileIdleSettingsPropertyToHclTerraform(struct?: CcUserProfile.IdleSettingsProperty | cdktn.IResolvable): any {
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
        lifecycle_management: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleManagement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_idle_timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.maxIdleTimeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_idle_timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.minIdleTimeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileAppLifecycleManagementPropertyToTerraform(struct?: CcUserProfile.AppLifecycleManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_settings: ccUserProfileIdleSettingsPropertyToTerraform(struct!.idleSettings),
    }
}


export function ccUserProfileAppLifecycleManagementPropertyToHclTerraform(struct?: CcUserProfile.AppLifecycleManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_settings: {
            value: ccUserProfileIdleSettingsPropertyToHclTerraform(struct!.idleSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "IdleSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileCustomImagePropertyToTerraform(struct?: CcUserProfile.CustomImageProperty | cdktn.IResolvable): any {
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


export function ccUserProfileCustomImagePropertyToHclTerraform(struct?: CcUserProfile.CustomImageProperty | cdktn.IResolvable): any {
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


export function ccUserProfileResourceSpecPropertyToTerraform(struct?: CcUserProfile.ResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
        sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
        sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
        training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    }
}


export function ccUserProfileResourceSpecPropertyToHclTerraform(struct?: CcUserProfile.ResourceSpecProperty | cdktn.IResolvable): any {
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
        training_plan_arn: {
            value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileCodeEditorAppSettingsPropertyToTerraform(struct?: CcUserProfile.CodeEditorAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_lifecycle_management: ccUserProfileAppLifecycleManagementPropertyToTerraform(struct!.appLifecycleManagement),
        built_in_lifecycle_config_arn: cdktn.stringToTerraform(struct!.builtInLifecycleConfigArn),
        custom_images: cdktn.listMapper(ccUserProfileCustomImagePropertyToTerraform, false)(struct!.customImages),
        default_resource_spec: ccUserProfileResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
        lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    }
}


export function ccUserProfileCodeEditorAppSettingsPropertyToHclTerraform(struct?: CcUserProfile.CodeEditorAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_lifecycle_management: {
            value: ccUserProfileAppLifecycleManagementPropertyToHclTerraform(struct!.appLifecycleManagement),
            isBlock: true,
            type: "struct",
            storageClassType: "AppLifecycleManagementProperty",
        },
        built_in_lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.builtInLifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_images: {
            value: cdktn.listMapperHcl(ccUserProfileCustomImagePropertyToHclTerraform, false)(struct!.customImages),
            isBlock: true,
            type: "list",
            storageClassType: "CustomImagePropertyList",
        },
        default_resource_spec: {
            value: ccUserProfileResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "ResourceSpecProperty",
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


export function ccUserProfileEFSFileSystemConfigPropertyToTerraform(struct?: CcUserProfile.EFSFileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
        file_system_path: cdktn.stringToTerraform(struct!.fileSystemPath),
    }
}


export function ccUserProfileEFSFileSystemConfigPropertyToHclTerraform(struct?: CcUserProfile.EFSFileSystemConfigProperty | cdktn.IResolvable): any {
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
        file_system_path: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileFSxLustreFileSystemConfigPropertyToTerraform(struct?: CcUserProfile.FSxLustreFileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
        file_system_path: cdktn.stringToTerraform(struct!.fileSystemPath),
    }
}


export function ccUserProfileFSxLustreFileSystemConfigPropertyToHclTerraform(struct?: CcUserProfile.FSxLustreFileSystemConfigProperty | cdktn.IResolvable): any {
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
        file_system_path: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileS3FileSystemConfigPropertyToTerraform(struct?: CcUserProfile.S3FileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mount_path: cdktn.stringToTerraform(struct!.mountPath),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccUserProfileS3FileSystemConfigPropertyToHclTerraform(struct?: CcUserProfile.S3FileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mount_path: {
            value: cdktn.stringToHclTerraform(struct!.mountPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export function ccUserProfileCustomFileSystemConfigPropertyToTerraform(struct?: CcUserProfile.CustomFileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        efs_file_system_config: ccUserProfileEFSFileSystemConfigPropertyToTerraform(struct!.efsFileSystemConfig),
        fsx_lustre_file_system_config: ccUserProfileFSxLustreFileSystemConfigPropertyToTerraform(struct!.fsxLustreFileSystemConfig),
        s3_file_system_config: ccUserProfileS3FileSystemConfigPropertyToTerraform(struct!.s3FileSystemConfig),
    }
}


export function ccUserProfileCustomFileSystemConfigPropertyToHclTerraform(struct?: CcUserProfile.CustomFileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        efs_file_system_config: {
            value: ccUserProfileEFSFileSystemConfigPropertyToHclTerraform(struct!.efsFileSystemConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "EFSFileSystemConfigProperty",
        },
        fsx_lustre_file_system_config: {
            value: ccUserProfileFSxLustreFileSystemConfigPropertyToHclTerraform(struct!.fsxLustreFileSystemConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "FSxLustreFileSystemConfigProperty",
        },
        s3_file_system_config: {
            value: ccUserProfileS3FileSystemConfigPropertyToHclTerraform(struct!.s3FileSystemConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "S3FileSystemConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileCustomPosixUserConfigPropertyToTerraform(struct?: CcUserProfile.CustomPosixUserConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        gid: cdktn.numberToTerraform(struct!.gid),
        uid: cdktn.numberToTerraform(struct!.uid),
    }
}


export function ccUserProfileCustomPosixUserConfigPropertyToHclTerraform(struct?: CcUserProfile.CustomPosixUserConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        gid: {
            value: cdktn.numberToHclTerraform(struct!.gid),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        uid: {
            value: cdktn.numberToHclTerraform(struct!.uid),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToTerraform(struct?: CcUserProfile.UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.idleTimeoutInMinutes),
        lifecycle_management: cdktn.stringToTerraform(struct!.lifecycleManagement),
        max_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.maxIdleTimeoutInMinutes),
        min_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.minIdleTimeoutInMinutes),
    }
}


export function ccUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToHclTerraform(struct?: CcUserProfile.UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty | cdktn.IResolvable): any {
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
        lifecycle_management: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleManagement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_idle_timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.maxIdleTimeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_idle_timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.minIdleTimeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToTerraform(struct?: CcUserProfile.UserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_settings: ccUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToTerraform(struct!.idleSettings),
    }
}


export function ccUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToHclTerraform(struct?: CcUserProfile.UserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_settings: {
            value: ccUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToHclTerraform(struct!.idleSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileCodeRepositoryPropertyToTerraform(struct?: CcUserProfile.CodeRepositoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        repository_url: cdktn.stringToTerraform(struct!.repositoryUrl),
    }
}


export function ccUserProfileCodeRepositoryPropertyToHclTerraform(struct?: CcUserProfile.CodeRepositoryProperty | cdktn.IResolvable): any {
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


export function ccUserProfileUserSettingsJupyterLabAppSettingsCustomImagesPropertyToTerraform(struct?: CcUserProfile.UserSettingsJupyterLabAppSettingsCustomImagesProperty | cdktn.IResolvable): any {
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


export function ccUserProfileUserSettingsJupyterLabAppSettingsCustomImagesPropertyToHclTerraform(struct?: CcUserProfile.UserSettingsJupyterLabAppSettingsCustomImagesProperty | cdktn.IResolvable): any {
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


export function ccUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: CcUserProfile.UserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
        sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
        sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
        training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    }
}


export function ccUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: CcUserProfile.UserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
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
        training_plan_arn: {
            value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileEmrSettingsPropertyToTerraform(struct?: CcUserProfile.EmrSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        assumable_role_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.assumableRoleArns),
        execution_role_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.executionRoleArns),
    }
}


export function ccUserProfileEmrSettingsPropertyToHclTerraform(struct?: CcUserProfile.EmrSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        assumable_role_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.assumableRoleArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        execution_role_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.executionRoleArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileJupyterLabAppSettingsPropertyToTerraform(struct?: CcUserProfile.JupyterLabAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_lifecycle_management: ccUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToTerraform(struct!.appLifecycleManagement),
        built_in_lifecycle_config_arn: cdktn.stringToTerraform(struct!.builtInLifecycleConfigArn),
        code_repositories: cdktn.listMapper(ccUserProfileCodeRepositoryPropertyToTerraform, false)(struct!.codeRepositories),
        custom_images: cdktn.listMapper(ccUserProfileUserSettingsJupyterLabAppSettingsCustomImagesPropertyToTerraform, false)(struct!.customImages),
        default_resource_spec: ccUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
        emr_settings: ccUserProfileEmrSettingsPropertyToTerraform(struct!.emrSettings),
        lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    }
}


export function ccUserProfileJupyterLabAppSettingsPropertyToHclTerraform(struct?: CcUserProfile.JupyterLabAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_lifecycle_management: {
            value: ccUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToHclTerraform(struct!.appLifecycleManagement),
            isBlock: true,
            type: "struct",
            storageClassType: "UserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty",
        },
        built_in_lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.builtInLifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        code_repositories: {
            value: cdktn.listMapperHcl(ccUserProfileCodeRepositoryPropertyToHclTerraform, false)(struct!.codeRepositories),
            isBlock: true,
            type: "list",
            storageClassType: "CodeRepositoryPropertyList",
        },
        custom_images: {
            value: cdktn.listMapperHcl(ccUserProfileUserSettingsJupyterLabAppSettingsCustomImagesPropertyToHclTerraform, false)(struct!.customImages),
            isBlock: true,
            type: "list",
            storageClassType: "UserSettingsJupyterLabAppSettingsCustomImagesPropertyList",
        },
        default_resource_spec: {
            value: ccUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "UserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty",
        },
        emr_settings: {
            value: ccUserProfileEmrSettingsPropertyToHclTerraform(struct!.emrSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "EmrSettingsProperty",
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


export function ccUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: CcUserProfile.UserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
        sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
        sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
        training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    }
}


export function ccUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: CcUserProfile.UserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
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
        training_plan_arn: {
            value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileJupyterServerAppSettingsPropertyToTerraform(struct?: CcUserProfile.JupyterServerAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_resource_spec: ccUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
        lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    }
}


export function ccUserProfileJupyterServerAppSettingsPropertyToHclTerraform(struct?: CcUserProfile.JupyterServerAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_resource_spec: {
            value: ccUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "UserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty",
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


export function ccUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesPropertyToTerraform(struct?: CcUserProfile.UserSettingsKernelGatewayAppSettingsCustomImagesProperty | cdktn.IResolvable): any {
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


export function ccUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesPropertyToHclTerraform(struct?: CcUserProfile.UserSettingsKernelGatewayAppSettingsCustomImagesProperty | cdktn.IResolvable): any {
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


export function ccUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: CcUserProfile.UserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
        sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
        sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
        training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    }
}


export function ccUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: CcUserProfile.UserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
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
        training_plan_arn: {
            value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileKernelGatewayAppSettingsPropertyToTerraform(struct?: CcUserProfile.KernelGatewayAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_images: cdktn.listMapper(ccUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesPropertyToTerraform, false)(struct!.customImages),
        default_resource_spec: ccUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
        lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    }
}


export function ccUserProfileKernelGatewayAppSettingsPropertyToHclTerraform(struct?: CcUserProfile.KernelGatewayAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_images: {
            value: cdktn.listMapperHcl(ccUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesPropertyToHclTerraform, false)(struct!.customImages),
            isBlock: true,
            type: "list",
            storageClassType: "UserSettingsKernelGatewayAppSettingsCustomImagesPropertyList",
        },
        default_resource_spec: {
            value: ccUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "UserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty",
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


export function ccUserProfileRStudioServerProAppSettingsPropertyToTerraform(struct?: CcUserProfile.RStudioServerProAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_status: cdktn.stringToTerraform(struct!.accessStatus),
        user_group: cdktn.stringToTerraform(struct!.userGroup),
    }
}


export function ccUserProfileRStudioServerProAppSettingsPropertyToHclTerraform(struct?: CcUserProfile.RStudioServerProAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_status: {
            value: cdktn.stringToHclTerraform(struct!.accessStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_group: {
            value: cdktn.stringToHclTerraform(struct!.userGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileSharingSettingsPropertyToTerraform(struct?: CcUserProfile.SharingSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        notebook_output_option: cdktn.stringToTerraform(struct!.notebookOutputOption),
        s3_kms_key_id: cdktn.stringToTerraform(struct!.s3KmsKeyId),
        s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
    }
}


export function ccUserProfileSharingSettingsPropertyToHclTerraform(struct?: CcUserProfile.SharingSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        notebook_output_option: {
            value: cdktn.stringToHclTerraform(struct!.notebookOutputOption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.s3KmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_output_path: {
            value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileDefaultEbsStorageSettingsPropertyToTerraform(struct?: CcUserProfile.DefaultEbsStorageSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.defaultEbsVolumeSizeInGb),
        maximum_ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.maximumEbsVolumeSizeInGb),
    }
}


export function ccUserProfileDefaultEbsStorageSettingsPropertyToHclTerraform(struct?: CcUserProfile.DefaultEbsStorageSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_ebs_volume_size_in_gb: {
            value: cdktn.numberToHclTerraform(struct!.defaultEbsVolumeSizeInGb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        maximum_ebs_volume_size_in_gb: {
            value: cdktn.numberToHclTerraform(struct!.maximumEbsVolumeSizeInGb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileDefaultSpaceStorageSettingsPropertyToTerraform(struct?: CcUserProfile.DefaultSpaceStorageSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_ebs_storage_settings: ccUserProfileDefaultEbsStorageSettingsPropertyToTerraform(struct!.defaultEbsStorageSettings),
    }
}


export function ccUserProfileDefaultSpaceStorageSettingsPropertyToHclTerraform(struct?: CcUserProfile.DefaultSpaceStorageSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_ebs_storage_settings: {
            value: ccUserProfileDefaultEbsStorageSettingsPropertyToHclTerraform(struct!.defaultEbsStorageSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultEbsStorageSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileHiddenSageMakerImagePropertyToTerraform(struct?: CcUserProfile.HiddenSageMakerImageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sage_maker_image_name: cdktn.stringToTerraform(struct!.sageMakerImageName),
        version_aliases: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.versionAliases),
    }
}


export function ccUserProfileHiddenSageMakerImagePropertyToHclTerraform(struct?: CcUserProfile.HiddenSageMakerImageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sage_maker_image_name: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version_aliases: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.versionAliases),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileStudioWebPortalSettingsPropertyToTerraform(struct?: CcUserProfile.StudioWebPortalSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hidden_app_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.hiddenAppTypes),
        hidden_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.hiddenInstanceTypes),
        hidden_ml_tools: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.hiddenMlTools),
        hidden_sage_maker_image_version_aliases: cdktn.listMapper(ccUserProfileHiddenSageMakerImagePropertyToTerraform, false)(struct!.hiddenSageMakerImageVersionAliases),
    }
}


export function ccUserProfileStudioWebPortalSettingsPropertyToHclTerraform(struct?: CcUserProfile.StudioWebPortalSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hidden_app_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.hiddenAppTypes),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        hidden_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.hiddenInstanceTypes),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        hidden_ml_tools: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.hiddenMlTools),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        hidden_sage_maker_image_version_aliases: {
            value: cdktn.listMapperHcl(ccUserProfileHiddenSageMakerImagePropertyToHclTerraform, false)(struct!.hiddenSageMakerImageVersionAliases),
            isBlock: true,
            type: "set",
            storageClassType: "HiddenSageMakerImagePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserProfileUserSettingsPropertyToTerraform(struct?: CcUserProfile.UserSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_mount_home_efs: cdktn.stringToTerraform(struct!.autoMountHomeEfs),
        code_editor_app_settings: ccUserProfileCodeEditorAppSettingsPropertyToTerraform(struct!.codeEditorAppSettings),
        custom_file_system_configs: cdktn.listMapper(ccUserProfileCustomFileSystemConfigPropertyToTerraform, false)(struct!.customFileSystemConfigs),
        custom_posix_user_config: ccUserProfileCustomPosixUserConfigPropertyToTerraform(struct!.customPosixUserConfig),
        default_landing_uri: cdktn.stringToTerraform(struct!.defaultLandingUri),
        execution_role: cdktn.stringToTerraform(struct!.executionRole),
        jupyter_lab_app_settings: ccUserProfileJupyterLabAppSettingsPropertyToTerraform(struct!.jupyterLabAppSettings),
        jupyter_server_app_settings: ccUserProfileJupyterServerAppSettingsPropertyToTerraform(struct!.jupyterServerAppSettings),
        kernel_gateway_app_settings: ccUserProfileKernelGatewayAppSettingsPropertyToTerraform(struct!.kernelGatewayAppSettings),
        r_studio_server_pro_app_settings: ccUserProfileRStudioServerProAppSettingsPropertyToTerraform(struct!.rStudioServerProAppSettings),
        security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
        sharing_settings: ccUserProfileSharingSettingsPropertyToTerraform(struct!.sharingSettings),
        space_storage_settings: ccUserProfileDefaultSpaceStorageSettingsPropertyToTerraform(struct!.spaceStorageSettings),
        studio_web_portal: cdktn.stringToTerraform(struct!.studioWebPortal),
        studio_web_portal_settings: ccUserProfileStudioWebPortalSettingsPropertyToTerraform(struct!.studioWebPortalSettings),
    }
}


export function ccUserProfileUserSettingsPropertyToHclTerraform(struct?: CcUserProfile.UserSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_mount_home_efs: {
            value: cdktn.stringToHclTerraform(struct!.autoMountHomeEfs),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        code_editor_app_settings: {
            value: ccUserProfileCodeEditorAppSettingsPropertyToHclTerraform(struct!.codeEditorAppSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "CodeEditorAppSettingsProperty",
        },
        custom_file_system_configs: {
            value: cdktn.listMapperHcl(ccUserProfileCustomFileSystemConfigPropertyToHclTerraform, false)(struct!.customFileSystemConfigs),
            isBlock: true,
            type: "list",
            storageClassType: "CustomFileSystemConfigPropertyList",
        },
        custom_posix_user_config: {
            value: ccUserProfileCustomPosixUserConfigPropertyToHclTerraform(struct!.customPosixUserConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomPosixUserConfigProperty",
        },
        default_landing_uri: {
            value: cdktn.stringToHclTerraform(struct!.defaultLandingUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        execution_role: {
            value: cdktn.stringToHclTerraform(struct!.executionRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        jupyter_lab_app_settings: {
            value: ccUserProfileJupyterLabAppSettingsPropertyToHclTerraform(struct!.jupyterLabAppSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "JupyterLabAppSettingsProperty",
        },
        jupyter_server_app_settings: {
            value: ccUserProfileJupyterServerAppSettingsPropertyToHclTerraform(struct!.jupyterServerAppSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "JupyterServerAppSettingsProperty",
        },
        kernel_gateway_app_settings: {
            value: ccUserProfileKernelGatewayAppSettingsPropertyToHclTerraform(struct!.kernelGatewayAppSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "KernelGatewayAppSettingsProperty",
        },
        r_studio_server_pro_app_settings: {
            value: ccUserProfileRStudioServerProAppSettingsPropertyToHclTerraform(struct!.rStudioServerProAppSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "RStudioServerProAppSettingsProperty",
        },
        security_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        sharing_settings: {
            value: ccUserProfileSharingSettingsPropertyToHclTerraform(struct!.sharingSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "SharingSettingsProperty",
        },
        space_storage_settings: {
            value: ccUserProfileDefaultSpaceStorageSettingsPropertyToHclTerraform(struct!.spaceStorageSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultSpaceStorageSettingsProperty",
        },
        studio_web_portal: {
            value: cdktn.stringToHclTerraform(struct!.studioWebPortal),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        studio_web_portal_settings: {
            value: ccUserProfileStudioWebPortalSettingsPropertyToHclTerraform(struct!.studioWebPortalSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "StudioWebPortalSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcUserProfile {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#key CcUserProfile#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#value CcUserProfile#value}
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
export interface IdleSettingsProperty {
    /**
    * The idle timeout value set in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#idle_timeout_in_minutes CcUserProfile#idle_timeout_in_minutes}
    */
    readonly idleTimeoutInMinutes?: number;
    /**
    * A flag to enable/disable AppLifecycleManagement settings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#lifecycle_management CcUserProfile#lifecycle_management}
    */
    readonly lifecycleManagement?: string;
    /**
    * The maximum idle timeout value set in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#max_idle_timeout_in_minutes CcUserProfile#max_idle_timeout_in_minutes}
    */
    readonly maxIdleTimeoutInMinutes?: number;
    /**
    * The minimum idle timeout value set in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#min_idle_timeout_in_minutes CcUserProfile#min_idle_timeout_in_minutes}
    */
    readonly minIdleTimeoutInMinutes?: number;
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
        if (this._lifecycleManagement !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleManagement = this._lifecycleManagement;
        }
        if (this._maxIdleTimeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxIdleTimeoutInMinutes = this._maxIdleTimeoutInMinutes;
        }
        if (this._minIdleTimeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.minIdleTimeoutInMinutes = this._minIdleTimeoutInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdleSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleTimeoutInMinutes = undefined;
            this._lifecycleManagement = undefined;
            this._maxIdleTimeoutInMinutes = undefined;
            this._minIdleTimeoutInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
            this._lifecycleManagement = value.lifecycleManagement;
            this._maxIdleTimeoutInMinutes = value.maxIdleTimeoutInMinutes;
            this._minIdleTimeoutInMinutes = value.minIdleTimeoutInMinutes;
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

    // lifecycle_management - computed: true, optional: true, required: false
    private _lifecycleManagement?: string; 
    public get lifecycleManagement() {
        return this.getStringAttribute('lifecycle_management');
    }
    public set lifecycleManagement(value: string) {
        this._lifecycleManagement = value;
    }
    public resetLifecycleManagement() {
        this._lifecycleManagement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleManagementInput() {
        return this._lifecycleManagement;
    }

    // max_idle_timeout_in_minutes - computed: true, optional: true, required: false
    private _maxIdleTimeoutInMinutes?: number; 
    public get maxIdleTimeoutInMinutes() {
        return this.getNumberAttribute('max_idle_timeout_in_minutes');
    }
    public set maxIdleTimeoutInMinutes(value: number) {
        this._maxIdleTimeoutInMinutes = value;
    }
    public resetMaxIdleTimeoutInMinutes() {
        this._maxIdleTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxIdleTimeoutInMinutesInput() {
        return this._maxIdleTimeoutInMinutes;
    }

    // min_idle_timeout_in_minutes - computed: true, optional: true, required: false
    private _minIdleTimeoutInMinutes?: number; 
    public get minIdleTimeoutInMinutes() {
        return this.getNumberAttribute('min_idle_timeout_in_minutes');
    }
    public set minIdleTimeoutInMinutes(value: number) {
        this._minIdleTimeoutInMinutes = value;
    }
    public resetMinIdleTimeoutInMinutes() {
        this._minIdleTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minIdleTimeoutInMinutesInput() {
        return this._minIdleTimeoutInMinutes;
    }
}
export interface AppLifecycleManagementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#idle_settings CcUserProfile#idle_settings}
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
export interface CustomImageProperty {
    /**
    * The Name of the AppImageConfig.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#app_image_config_name CcUserProfile#app_image_config_name}
    */
    readonly appImageConfigName?: string;
    /**
    * The name of the CustomImage. Must be unique to your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#image_name CcUserProfile#image_name}
    */
    readonly imageName?: string;
    /**
    * The version number of the CustomImage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#image_version_number CcUserProfile#image_version_number}
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
export interface ResourceSpecProperty {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#instance_type CcUserProfile#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn CcUserProfile#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * The ARN of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn CcUserProfile#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The ARN of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn CcUserProfile#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#training_plan_arn CcUserProfile#training_plan_arn}
    */
    readonly trainingPlanArn?: string;
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
        if (this._trainingPlanArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingPlanArn = this._trainingPlanArn;
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
            this._trainingPlanArn = undefined;
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
            this._trainingPlanArn = value.trainingPlanArn;
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

    // training_plan_arn - computed: true, optional: true, required: false
    private _trainingPlanArn?: string; 
    public get trainingPlanArn() {
        return this.getStringAttribute('training_plan_arn');
    }
    public set trainingPlanArn(value: string) {
        this._trainingPlanArn = value;
    }
    public resetTrainingPlanArn() {
        this._trainingPlanArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingPlanArnInput() {
        return this._trainingPlanArn;
    }
}
export interface CodeEditorAppSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#app_lifecycle_management CcUserProfile#app_lifecycle_management}
    */
    readonly appLifecycleManagement?: AppLifecycleManagementProperty;
    /**
    * The lifecycle configuration that runs before the default lifecycle configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#built_in_lifecycle_config_arn CcUserProfile#built_in_lifecycle_config_arn}
    */
    readonly builtInLifecycleConfigArn?: string;
    /**
    * A list of custom images for use for CodeEditor apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#custom_images CcUserProfile#custom_images}
    */
    readonly customImages?: CustomImageProperty[] | cdktn.IResolvable;
    /**
    * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the CodeEditor app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#default_resource_spec CcUserProfile#default_resource_spec}
    */
    readonly defaultResourceSpec?: ResourceSpecProperty;
    /**
    * A list of LifecycleConfigArns available for use with CodeEditor apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns CcUserProfile#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
}
export class CodeEditorAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CodeEditorAppSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appLifecycleManagement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.appLifecycleManagement = this._appLifecycleManagement?.internalValue;
        }
        if (this._builtInLifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.builtInLifecycleConfigArn = this._builtInLifecycleConfigArn;
        }
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

    public set internalValue(value: CodeEditorAppSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appLifecycleManagement.internalValue = undefined;
            this._builtInLifecycleConfigArn = undefined;
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
            this._appLifecycleManagement.internalValue = value.appLifecycleManagement;
            this._builtInLifecycleConfigArn = value.builtInLifecycleConfigArn;
            this._customImages.internalValue = value.customImages;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
            this._lifecycleConfigArns = value.lifecycleConfigArns;
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

    // built_in_lifecycle_config_arn - computed: true, optional: true, required: false
    private _builtInLifecycleConfigArn?: string; 
    public get builtInLifecycleConfigArn() {
        return this.getStringAttribute('built_in_lifecycle_config_arn');
    }
    public set builtInLifecycleConfigArn(value: string) {
        this._builtInLifecycleConfigArn = value;
    }
    public resetBuiltInLifecycleConfigArn() {
        this._builtInLifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get builtInLifecycleConfigArnInput() {
        return this._builtInLifecycleConfigArn;
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
export interface EFSFileSystemConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#file_system_id CcUserProfile#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#file_system_path CcUserProfile#file_system_path}
    */
    readonly fileSystemPath?: string;
}
export class EFSFileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EFSFileSystemConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fileSystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        if (this._fileSystemPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemPath = this._fileSystemPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EFSFileSystemConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileSystemId = undefined;
            this._fileSystemPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileSystemId = value.fileSystemId;
            this._fileSystemPath = value.fileSystemPath;
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

    // file_system_path - computed: true, optional: true, required: false
    private _fileSystemPath?: string; 
    public get fileSystemPath() {
        return this.getStringAttribute('file_system_path');
    }
    public set fileSystemPath(value: string) {
        this._fileSystemPath = value;
    }
    public resetFileSystemPath() {
        this._fileSystemPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemPathInput() {
        return this._fileSystemPath;
    }
}
export interface FSxLustreFileSystemConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#file_system_id CcUserProfile#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#file_system_path CcUserProfile#file_system_path}
    */
    readonly fileSystemPath?: string;
}
export class FSxLustreFileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FSxLustreFileSystemConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fileSystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        if (this._fileSystemPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemPath = this._fileSystemPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FSxLustreFileSystemConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileSystemId = undefined;
            this._fileSystemPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileSystemId = value.fileSystemId;
            this._fileSystemPath = value.fileSystemPath;
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

    // file_system_path - computed: true, optional: true, required: false
    private _fileSystemPath?: string; 
    public get fileSystemPath() {
        return this.getStringAttribute('file_system_path');
    }
    public set fileSystemPath(value: string) {
        this._fileSystemPath = value;
    }
    public resetFileSystemPath() {
        this._fileSystemPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemPathInput() {
        return this._fileSystemPath;
    }
}
export interface S3FileSystemConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#mount_path CcUserProfile#mount_path}
    */
    readonly mountPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#s3_uri CcUserProfile#s3_uri}
    */
    readonly s3Uri?: string;
}
export class S3FileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3FileSystemConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mountPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountPath = this._mountPath;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3FileSystemConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mountPath = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mountPath = value.mountPath;
            this._s3Uri = value.s3Uri;
        }
    }

    // mount_path - computed: true, optional: true, required: false
    private _mountPath?: string; 
    public get mountPath() {
        return this.getStringAttribute('mount_path');
    }
    public set mountPath(value: string) {
        this._mountPath = value;
    }
    public resetMountPath() {
        this._mountPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountPathInput() {
        return this._mountPath;
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
export interface CustomFileSystemConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#efs_file_system_config CcUserProfile#efs_file_system_config}
    */
    readonly efsFileSystemConfig?: EFSFileSystemConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#fsx_lustre_file_system_config CcUserProfile#fsx_lustre_file_system_config}
    */
    readonly fsxLustreFileSystemConfig?: FSxLustreFileSystemConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#s3_file_system_config CcUserProfile#s3_file_system_config}
    */
    readonly s3FileSystemConfig?: S3FileSystemConfigProperty;
}
export class CustomFileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CustomFileSystemConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._efsFileSystemConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.efsFileSystemConfig = this._efsFileSystemConfig?.internalValue;
        }
        if (this._fsxLustreFileSystemConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fsxLustreFileSystemConfig = this._fsxLustreFileSystemConfig?.internalValue;
        }
        if (this._s3FileSystemConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3FileSystemConfig = this._s3FileSystemConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomFileSystemConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._efsFileSystemConfig.internalValue = undefined;
            this._fsxLustreFileSystemConfig.internalValue = undefined;
            this._s3FileSystemConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._efsFileSystemConfig.internalValue = value.efsFileSystemConfig;
            this._fsxLustreFileSystemConfig.internalValue = value.fsxLustreFileSystemConfig;
            this._s3FileSystemConfig.internalValue = value.s3FileSystemConfig;
        }
    }

    // efs_file_system_config - computed: true, optional: true, required: false
    private _efsFileSystemConfig = new EFSFileSystemConfigPropertyOutputReference(this, "efs_file_system_config");
    public get efsFileSystemConfig() {
        return this._efsFileSystemConfig;
    }
    public putEfsFileSystemConfig(value: EFSFileSystemConfigProperty) {
        this._efsFileSystemConfig.internalValue = value;
    }
    public resetEfsFileSystemConfig() {
        this._efsFileSystemConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get efsFileSystemConfigInput() {
        return this._efsFileSystemConfig.internalValue;
    }

    // fsx_lustre_file_system_config - computed: true, optional: true, required: false
    private _fsxLustreFileSystemConfig = new FSxLustreFileSystemConfigPropertyOutputReference(this, "fsx_lustre_file_system_config");
    public get fsxLustreFileSystemConfig() {
        return this._fsxLustreFileSystemConfig;
    }
    public putFsxLustreFileSystemConfig(value: FSxLustreFileSystemConfigProperty) {
        this._fsxLustreFileSystemConfig.internalValue = value;
    }
    public resetFsxLustreFileSystemConfig() {
        this._fsxLustreFileSystemConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fsxLustreFileSystemConfigInput() {
        return this._fsxLustreFileSystemConfig.internalValue;
    }

    // s3_file_system_config - computed: true, optional: true, required: false
    private _s3FileSystemConfig = new S3FileSystemConfigPropertyOutputReference(this, "s3_file_system_config");
    public get s3FileSystemConfig() {
        return this._s3FileSystemConfig;
    }
    public putS3FileSystemConfig(value: S3FileSystemConfigProperty) {
        this._s3FileSystemConfig.internalValue = value;
    }
    public resetS3FileSystemConfig() {
        this._s3FileSystemConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3FileSystemConfigInput() {
        return this._s3FileSystemConfig.internalValue;
    }
}

export class CustomFileSystemConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : CustomFileSystemConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): CustomFileSystemConfigPropertyOutputReference {
        return new CustomFileSystemConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomPosixUserConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#gid CcUserProfile#gid}
    */
    readonly gid?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#uid CcUserProfile#uid}
    */
    readonly uid?: number;
}
export class CustomPosixUserConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomPosixUserConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._gid !== undefined) {
            hasAnyValues = true;
            internalValueResult.gid = this._gid;
        }
        if (this._uid !== undefined) {
            hasAnyValues = true;
            internalValueResult.uid = this._uid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomPosixUserConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._gid = undefined;
            this._uid = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._gid = value.gid;
            this._uid = value.uid;
        }
    }

    // gid - computed: true, optional: true, required: false
    private _gid?: number; 
    public get gid() {
        return this.getNumberAttribute('gid');
    }
    public set gid(value: number) {
        this._gid = value;
    }
    public resetGid() {
        this._gid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gidInput() {
        return this._gid;
    }

    // uid - computed: true, optional: true, required: false
    private _uid?: number; 
    public get uid() {
        return this.getNumberAttribute('uid');
    }
    public set uid(value: number) {
        this._uid = value;
    }
    public resetUid() {
        this._uid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uidInput() {
        return this._uid;
    }
}
export interface UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty {
    /**
    * The idle timeout value set in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#idle_timeout_in_minutes CcUserProfile#idle_timeout_in_minutes}
    */
    readonly idleTimeoutInMinutes?: number;
    /**
    * A flag to enable/disable AppLifecycleManagement settings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#lifecycle_management CcUserProfile#lifecycle_management}
    */
    readonly lifecycleManagement?: string;
    /**
    * The maximum idle timeout value set in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#max_idle_timeout_in_minutes CcUserProfile#max_idle_timeout_in_minutes}
    */
    readonly maxIdleTimeoutInMinutes?: number;
    /**
    * The minimum idle timeout value set in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#min_idle_timeout_in_minutes CcUserProfile#min_idle_timeout_in_minutes}
    */
    readonly minIdleTimeoutInMinutes?: number;
}
export class UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleTimeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
        }
        if (this._lifecycleManagement !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleManagement = this._lifecycleManagement;
        }
        if (this._maxIdleTimeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxIdleTimeoutInMinutes = this._maxIdleTimeoutInMinutes;
        }
        if (this._minIdleTimeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.minIdleTimeoutInMinutes = this._minIdleTimeoutInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleTimeoutInMinutes = undefined;
            this._lifecycleManagement = undefined;
            this._maxIdleTimeoutInMinutes = undefined;
            this._minIdleTimeoutInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
            this._lifecycleManagement = value.lifecycleManagement;
            this._maxIdleTimeoutInMinutes = value.maxIdleTimeoutInMinutes;
            this._minIdleTimeoutInMinutes = value.minIdleTimeoutInMinutes;
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

    // lifecycle_management - computed: true, optional: true, required: false
    private _lifecycleManagement?: string; 
    public get lifecycleManagement() {
        return this.getStringAttribute('lifecycle_management');
    }
    public set lifecycleManagement(value: string) {
        this._lifecycleManagement = value;
    }
    public resetLifecycleManagement() {
        this._lifecycleManagement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleManagementInput() {
        return this._lifecycleManagement;
    }

    // max_idle_timeout_in_minutes - computed: true, optional: true, required: false
    private _maxIdleTimeoutInMinutes?: number; 
    public get maxIdleTimeoutInMinutes() {
        return this.getNumberAttribute('max_idle_timeout_in_minutes');
    }
    public set maxIdleTimeoutInMinutes(value: number) {
        this._maxIdleTimeoutInMinutes = value;
    }
    public resetMaxIdleTimeoutInMinutes() {
        this._maxIdleTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxIdleTimeoutInMinutesInput() {
        return this._maxIdleTimeoutInMinutes;
    }

    // min_idle_timeout_in_minutes - computed: true, optional: true, required: false
    private _minIdleTimeoutInMinutes?: number; 
    public get minIdleTimeoutInMinutes() {
        return this.getNumberAttribute('min_idle_timeout_in_minutes');
    }
    public set minIdleTimeoutInMinutes(value: number) {
        this._minIdleTimeoutInMinutes = value;
    }
    public resetMinIdleTimeoutInMinutes() {
        this._minIdleTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minIdleTimeoutInMinutesInput() {
        return this._minIdleTimeoutInMinutes;
    }
}
export interface UserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#idle_settings CcUserProfile#idle_settings}
    */
    readonly idleSettings?: UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty;
}
export class UserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: UserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty | cdktn.IResolvable | undefined) {
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
    private _idleSettings = new UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference(this, "idle_settings");
    public get idleSettings() {
        return this._idleSettings;
    }
    public putIdleSettings(value: UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty) {
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#repository_url CcUserProfile#repository_url}
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
export interface UserSettingsJupyterLabAppSettingsCustomImagesProperty {
    /**
    * The Name of the AppImageConfig.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#app_image_config_name CcUserProfile#app_image_config_name}
    */
    readonly appImageConfigName?: string;
    /**
    * The name of the CustomImage. Must be unique to your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#image_name CcUserProfile#image_name}
    */
    readonly imageName?: string;
    /**
    * The version number of the CustomImage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#image_version_number CcUserProfile#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export class UserSettingsJupyterLabAppSettingsCustomImagesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): UserSettingsJupyterLabAppSettingsCustomImagesProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: UserSettingsJupyterLabAppSettingsCustomImagesProperty | cdktn.IResolvable | undefined) {
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

export class UserSettingsJupyterLabAppSettingsCustomImagesPropertyList extends cdktn.ComplexList {
    public internalValue? : UserSettingsJupyterLabAppSettingsCustomImagesProperty[] | cdktn.IResolvable

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
    public get(index: number): UserSettingsJupyterLabAppSettingsCustomImagesPropertyOutputReference {
        return new UserSettingsJupyterLabAppSettingsCustomImagesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface UserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#instance_type CcUserProfile#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn CcUserProfile#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * The ARN of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn CcUserProfile#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The ARN of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn CcUserProfile#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#training_plan_arn CcUserProfile#training_plan_arn}
    */
    readonly trainingPlanArn?: string;
}
export class UserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined {
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
        if (this._trainingPlanArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingPlanArn = this._trainingPlanArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sageMakerImageArn = undefined;
            this._sageMakerImageVersionArn = undefined;
            this._trainingPlanArn = undefined;
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
            this._trainingPlanArn = value.trainingPlanArn;
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

    // training_plan_arn - computed: true, optional: true, required: false
    private _trainingPlanArn?: string; 
    public get trainingPlanArn() {
        return this.getStringAttribute('training_plan_arn');
    }
    public set trainingPlanArn(value: string) {
        this._trainingPlanArn = value;
    }
    public resetTrainingPlanArn() {
        this._trainingPlanArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingPlanArnInput() {
        return this._trainingPlanArn;
    }
}
export interface EmrSettingsProperty {
    /**
    * An array of Amazon Resource Names (ARNs) of the IAM roles that the execution role of SageMaker can assume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#assumable_role_arns CcUserProfile#assumable_role_arns}
    */
    readonly assumableRoleArns?: string[];
    /**
    * An array of ARNs of IAM roles used by EMR cluster instances or job execution environments.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#execution_role_arns CcUserProfile#execution_role_arns}
    */
    readonly executionRoleArns?: string[];
}
export class EmrSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EmrSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._assumableRoleArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.assumableRoleArns = this._assumableRoleArns;
        }
        if (this._executionRoleArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionRoleArns = this._executionRoleArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EmrSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._assumableRoleArns = undefined;
            this._executionRoleArns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._assumableRoleArns = value.assumableRoleArns;
            this._executionRoleArns = value.executionRoleArns;
        }
    }

    // assumable_role_arns - computed: true, optional: true, required: false
    private _assumableRoleArns?: string[]; 
    public get assumableRoleArns() {
        return this.getListAttribute('assumable_role_arns');
    }
    public set assumableRoleArns(value: string[]) {
        this._assumableRoleArns = value;
    }
    public resetAssumableRoleArns() {
        this._assumableRoleArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assumableRoleArnsInput() {
        return this._assumableRoleArns;
    }

    // execution_role_arns - computed: true, optional: true, required: false
    private _executionRoleArns?: string[]; 
    public get executionRoleArns() {
        return this.getListAttribute('execution_role_arns');
    }
    public set executionRoleArns(value: string[]) {
        this._executionRoleArns = value;
    }
    public resetExecutionRoleArns() {
        this._executionRoleArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleArnsInput() {
        return this._executionRoleArns;
    }
}
export interface JupyterLabAppSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#app_lifecycle_management CcUserProfile#app_lifecycle_management}
    */
    readonly appLifecycleManagement?: UserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty;
    /**
    * The lifecycle configuration that runs before the default lifecycle configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#built_in_lifecycle_config_arn CcUserProfile#built_in_lifecycle_config_arn}
    */
    readonly builtInLifecycleConfigArn?: string;
    /**
    * A list of CodeRepositories available for use with JupyterLab apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#code_repositories CcUserProfile#code_repositories}
    */
    readonly codeRepositories?: CodeRepositoryProperty[] | cdktn.IResolvable;
    /**
    * A list of custom images available for use for JupyterLab apps
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#custom_images CcUserProfile#custom_images}
    */
    readonly customImages?: UserSettingsJupyterLabAppSettingsCustomImagesProperty[] | cdktn.IResolvable;
    /**
    * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#default_resource_spec CcUserProfile#default_resource_spec}
    */
    readonly defaultResourceSpec?: UserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty;
    /**
    * The configuration parameters for EMR settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#emr_settings CcUserProfile#emr_settings}
    */
    readonly emrSettings?: EmrSettingsProperty;
    /**
    * A list of LifecycleConfigArns available for use with JupyterLab apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns CcUserProfile#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
}
export class JupyterLabAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JupyterLabAppSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appLifecycleManagement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.appLifecycleManagement = this._appLifecycleManagement?.internalValue;
        }
        if (this._builtInLifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.builtInLifecycleConfigArn = this._builtInLifecycleConfigArn;
        }
        if (this._codeRepositories?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeRepositories = this._codeRepositories?.internalValue;
        }
        if (this._customImages?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customImages = this._customImages?.internalValue;
        }
        if (this._defaultResourceSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        if (this._emrSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emrSettings = this._emrSettings?.internalValue;
        }
        if (this._lifecycleConfigArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JupyterLabAppSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appLifecycleManagement.internalValue = undefined;
            this._builtInLifecycleConfigArn = undefined;
            this._codeRepositories.internalValue = undefined;
            this._customImages.internalValue = undefined;
            this._defaultResourceSpec.internalValue = undefined;
            this._emrSettings.internalValue = undefined;
            this._lifecycleConfigArns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appLifecycleManagement.internalValue = value.appLifecycleManagement;
            this._builtInLifecycleConfigArn = value.builtInLifecycleConfigArn;
            this._codeRepositories.internalValue = value.codeRepositories;
            this._customImages.internalValue = value.customImages;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
            this._emrSettings.internalValue = value.emrSettings;
            this._lifecycleConfigArns = value.lifecycleConfigArns;
        }
    }

    // app_lifecycle_management - computed: true, optional: true, required: false
    private _appLifecycleManagement = new UserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyOutputReference(this, "app_lifecycle_management");
    public get appLifecycleManagement() {
        return this._appLifecycleManagement;
    }
    public putAppLifecycleManagement(value: UserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty) {
        this._appLifecycleManagement.internalValue = value;
    }
    public resetAppLifecycleManagement() {
        this._appLifecycleManagement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appLifecycleManagementInput() {
        return this._appLifecycleManagement.internalValue;
    }

    // built_in_lifecycle_config_arn - computed: true, optional: true, required: false
    private _builtInLifecycleConfigArn?: string; 
    public get builtInLifecycleConfigArn() {
        return this.getStringAttribute('built_in_lifecycle_config_arn');
    }
    public set builtInLifecycleConfigArn(value: string) {
        this._builtInLifecycleConfigArn = value;
    }
    public resetBuiltInLifecycleConfigArn() {
        this._builtInLifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get builtInLifecycleConfigArnInput() {
        return this._builtInLifecycleConfigArn;
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

    // custom_images - computed: true, optional: true, required: false
    private _customImages = new UserSettingsJupyterLabAppSettingsCustomImagesPropertyList(this, "custom_images", false);
    public get customImages() {
        return this._customImages;
    }
    public putCustomImages(value: UserSettingsJupyterLabAppSettingsCustomImagesProperty[] | cdktn.IResolvable) {
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
    private _defaultResourceSpec = new UserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
    public get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    public putDefaultResourceSpec(value: UserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty) {
        this._defaultResourceSpec.internalValue = value;
    }
    public resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }

    // emr_settings - computed: true, optional: true, required: false
    private _emrSettings = new EmrSettingsPropertyOutputReference(this, "emr_settings");
    public get emrSettings() {
        return this._emrSettings;
    }
    public putEmrSettings(value: EmrSettingsProperty) {
        this._emrSettings.internalValue = value;
    }
    public resetEmrSettings() {
        this._emrSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emrSettingsInput() {
        return this._emrSettings.internalValue;
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
export interface UserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#instance_type CcUserProfile#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn CcUserProfile#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * The ARN of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn CcUserProfile#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The ARN of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn CcUserProfile#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#training_plan_arn CcUserProfile#training_plan_arn}
    */
    readonly trainingPlanArn?: string;
}
export class UserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined {
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
        if (this._trainingPlanArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingPlanArn = this._trainingPlanArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sageMakerImageArn = undefined;
            this._sageMakerImageVersionArn = undefined;
            this._trainingPlanArn = undefined;
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
            this._trainingPlanArn = value.trainingPlanArn;
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

    // training_plan_arn - computed: true, optional: true, required: false
    private _trainingPlanArn?: string; 
    public get trainingPlanArn() {
        return this.getStringAttribute('training_plan_arn');
    }
    public set trainingPlanArn(value: string) {
        this._trainingPlanArn = value;
    }
    public resetTrainingPlanArn() {
        this._trainingPlanArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingPlanArnInput() {
        return this._trainingPlanArn;
    }
}
export interface JupyterServerAppSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#default_resource_spec CcUserProfile#default_resource_spec}
    */
    readonly defaultResourceSpec?: UserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty;
    /**
    * A list of LifecycleConfigArns available for use with JupyterServer apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns CcUserProfile#lifecycle_config_arns}
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
    private _defaultResourceSpec = new UserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
    public get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    public putDefaultResourceSpec(value: UserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty) {
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
export interface UserSettingsKernelGatewayAppSettingsCustomImagesProperty {
    /**
    * The Name of the AppImageConfig.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#app_image_config_name CcUserProfile#app_image_config_name}
    */
    readonly appImageConfigName?: string;
    /**
    * The name of the CustomImage. Must be unique to your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#image_name CcUserProfile#image_name}
    */
    readonly imageName?: string;
    /**
    * The version number of the CustomImage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#image_version_number CcUserProfile#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export class UserSettingsKernelGatewayAppSettingsCustomImagesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): UserSettingsKernelGatewayAppSettingsCustomImagesProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: UserSettingsKernelGatewayAppSettingsCustomImagesProperty | cdktn.IResolvable | undefined) {
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

export class UserSettingsKernelGatewayAppSettingsCustomImagesPropertyList extends cdktn.ComplexList {
    public internalValue? : UserSettingsKernelGatewayAppSettingsCustomImagesProperty[] | cdktn.IResolvable

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
    public get(index: number): UserSettingsKernelGatewayAppSettingsCustomImagesPropertyOutputReference {
        return new UserSettingsKernelGatewayAppSettingsCustomImagesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface UserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#instance_type CcUserProfile#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn CcUserProfile#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * The ARN of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn CcUserProfile#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The ARN of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn CcUserProfile#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#training_plan_arn CcUserProfile#training_plan_arn}
    */
    readonly trainingPlanArn?: string;
}
export class UserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined {
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
        if (this._trainingPlanArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingPlanArn = this._trainingPlanArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sageMakerImageArn = undefined;
            this._sageMakerImageVersionArn = undefined;
            this._trainingPlanArn = undefined;
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
            this._trainingPlanArn = value.trainingPlanArn;
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

    // training_plan_arn - computed: true, optional: true, required: false
    private _trainingPlanArn?: string; 
    public get trainingPlanArn() {
        return this.getStringAttribute('training_plan_arn');
    }
    public set trainingPlanArn(value: string) {
        this._trainingPlanArn = value;
    }
    public resetTrainingPlanArn() {
        this._trainingPlanArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingPlanArnInput() {
        return this._trainingPlanArn;
    }
}
export interface KernelGatewayAppSettingsProperty {
    /**
    * A list of custom SageMaker images that are configured to run as a KernelGateway app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#custom_images CcUserProfile#custom_images}
    */
    readonly customImages?: UserSettingsKernelGatewayAppSettingsCustomImagesProperty[] | cdktn.IResolvable;
    /**
    * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#default_resource_spec CcUserProfile#default_resource_spec}
    */
    readonly defaultResourceSpec?: UserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty;
    /**
    * A list of LifecycleConfigArns available for use with KernelGateway apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns CcUserProfile#lifecycle_config_arns}
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
    private _customImages = new UserSettingsKernelGatewayAppSettingsCustomImagesPropertyList(this, "custom_images", false);
    public get customImages() {
        return this._customImages;
    }
    public putCustomImages(value: UserSettingsKernelGatewayAppSettingsCustomImagesProperty[] | cdktn.IResolvable) {
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
    private _defaultResourceSpec = new UserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
    public get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    public putDefaultResourceSpec(value: UserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty) {
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
export interface RStudioServerProAppSettingsProperty {
    /**
    * Indicates whether the current user has access to the RStudioServerPro app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#access_status CcUserProfile#access_status}
    */
    readonly accessStatus?: string;
    /**
    * The level of permissions that the user has within the RStudioServerPro app. This value defaults to User. The Admin value allows the user access to the RStudio Administrative Dashboard.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#user_group CcUserProfile#user_group}
    */
    readonly userGroup?: string;
}
export class RStudioServerProAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RStudioServerProAppSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessStatus = this._accessStatus;
        }
        if (this._userGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.userGroup = this._userGroup;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RStudioServerProAppSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessStatus = undefined;
            this._userGroup = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessStatus = value.accessStatus;
            this._userGroup = value.userGroup;
        }
    }

    // access_status - computed: true, optional: true, required: false
    private _accessStatus?: string; 
    public get accessStatus() {
        return this.getStringAttribute('access_status');
    }
    public set accessStatus(value: string) {
        this._accessStatus = value;
    }
    public resetAccessStatus() {
        this._accessStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessStatusInput() {
        return this._accessStatus;
    }

    // user_group - computed: true, optional: true, required: false
    private _userGroup?: string; 
    public get userGroup() {
        return this.getStringAttribute('user_group');
    }
    public set userGroup(value: string) {
        this._userGroup = value;
    }
    public resetUserGroup() {
        this._userGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userGroupInput() {
        return this._userGroup;
    }
}
export interface SharingSettingsProperty {
    /**
    * Whether to include the notebook cell output when sharing the notebook. The default is Disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#notebook_output_option CcUserProfile#notebook_output_option}
    */
    readonly notebookOutputOption?: string;
    /**
    * When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#s3_kms_key_id CcUserProfile#s3_kms_key_id}
    */
    readonly s3KmsKeyId?: string;
    /**
    * When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#s3_output_path CcUserProfile#s3_output_path}
    */
    readonly s3OutputPath?: string;
}
export class SharingSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SharingSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._notebookOutputOption !== undefined) {
            hasAnyValues = true;
            internalValueResult.notebookOutputOption = this._notebookOutputOption;
        }
        if (this._s3KmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3KmsKeyId = this._s3KmsKeyId;
        }
        if (this._s3OutputPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3OutputPath = this._s3OutputPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SharingSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._notebookOutputOption = undefined;
            this._s3KmsKeyId = undefined;
            this._s3OutputPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._notebookOutputOption = value.notebookOutputOption;
            this._s3KmsKeyId = value.s3KmsKeyId;
            this._s3OutputPath = value.s3OutputPath;
        }
    }

    // notebook_output_option - computed: true, optional: true, required: false
    private _notebookOutputOption?: string; 
    public get notebookOutputOption() {
        return this.getStringAttribute('notebook_output_option');
    }
    public set notebookOutputOption(value: string) {
        this._notebookOutputOption = value;
    }
    public resetNotebookOutputOption() {
        this._notebookOutputOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notebookOutputOptionInput() {
        return this._notebookOutputOption;
    }

    // s3_kms_key_id - computed: true, optional: true, required: false
    private _s3KmsKeyId?: string; 
    public get s3KmsKeyId() {
        return this.getStringAttribute('s3_kms_key_id');
    }
    public set s3KmsKeyId(value: string) {
        this._s3KmsKeyId = value;
    }
    public resetS3KmsKeyId() {
        this._s3KmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KmsKeyIdInput() {
        return this._s3KmsKeyId;
    }

    // s3_output_path - computed: true, optional: true, required: false
    private _s3OutputPath?: string; 
    public get s3OutputPath() {
        return this.getStringAttribute('s3_output_path');
    }
    public set s3OutputPath(value: string) {
        this._s3OutputPath = value;
    }
    public resetS3OutputPath() {
        this._s3OutputPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3OutputPathInput() {
        return this._s3OutputPath;
    }
}
export interface DefaultEbsStorageSettingsProperty {
    /**
    * Default size of the Amazon EBS volume in Gb
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#default_ebs_volume_size_in_gb CcUserProfile#default_ebs_volume_size_in_gb}
    */
    readonly defaultEbsVolumeSizeInGb?: number;
    /**
    * Maximum size of the Amazon EBS volume in Gb. Must be greater than or equal to the DefaultEbsVolumeSizeInGb.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#maximum_ebs_volume_size_in_gb CcUserProfile#maximum_ebs_volume_size_in_gb}
    */
    readonly maximumEbsVolumeSizeInGb?: number;
}
export class DefaultEbsStorageSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultEbsStorageSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultEbsVolumeSizeInGb !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultEbsVolumeSizeInGb = this._defaultEbsVolumeSizeInGb;
        }
        if (this._maximumEbsVolumeSizeInGb !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumEbsVolumeSizeInGb = this._maximumEbsVolumeSizeInGb;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultEbsStorageSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultEbsVolumeSizeInGb = undefined;
            this._maximumEbsVolumeSizeInGb = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultEbsVolumeSizeInGb = value.defaultEbsVolumeSizeInGb;
            this._maximumEbsVolumeSizeInGb = value.maximumEbsVolumeSizeInGb;
        }
    }

    // default_ebs_volume_size_in_gb - computed: true, optional: true, required: false
    private _defaultEbsVolumeSizeInGb?: number; 
    public get defaultEbsVolumeSizeInGb() {
        return this.getNumberAttribute('default_ebs_volume_size_in_gb');
    }
    public set defaultEbsVolumeSizeInGb(value: number) {
        this._defaultEbsVolumeSizeInGb = value;
    }
    public resetDefaultEbsVolumeSizeInGb() {
        this._defaultEbsVolumeSizeInGb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultEbsVolumeSizeInGbInput() {
        return this._defaultEbsVolumeSizeInGb;
    }

    // maximum_ebs_volume_size_in_gb - computed: true, optional: true, required: false
    private _maximumEbsVolumeSizeInGb?: number; 
    public get maximumEbsVolumeSizeInGb() {
        return this.getNumberAttribute('maximum_ebs_volume_size_in_gb');
    }
    public set maximumEbsVolumeSizeInGb(value: number) {
        this._maximumEbsVolumeSizeInGb = value;
    }
    public resetMaximumEbsVolumeSizeInGb() {
        this._maximumEbsVolumeSizeInGb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumEbsVolumeSizeInGbInput() {
        return this._maximumEbsVolumeSizeInGb;
    }
}
export interface DefaultSpaceStorageSettingsProperty {
    /**
    * Properties related to the Amazon Elastic Block Store volume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#default_ebs_storage_settings CcUserProfile#default_ebs_storage_settings}
    */
    readonly defaultEbsStorageSettings?: DefaultEbsStorageSettingsProperty;
}
export class DefaultSpaceStorageSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultSpaceStorageSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultEbsStorageSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultEbsStorageSettings = this._defaultEbsStorageSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultSpaceStorageSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultEbsStorageSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultEbsStorageSettings.internalValue = value.defaultEbsStorageSettings;
        }
    }

    // default_ebs_storage_settings - computed: true, optional: true, required: false
    private _defaultEbsStorageSettings = new DefaultEbsStorageSettingsPropertyOutputReference(this, "default_ebs_storage_settings");
    public get defaultEbsStorageSettings() {
        return this._defaultEbsStorageSettings;
    }
    public putDefaultEbsStorageSettings(value: DefaultEbsStorageSettingsProperty) {
        this._defaultEbsStorageSettings.internalValue = value;
    }
    public resetDefaultEbsStorageSettings() {
        this._defaultEbsStorageSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultEbsStorageSettingsInput() {
        return this._defaultEbsStorageSettings.internalValue;
    }
}
export interface HiddenSageMakerImageProperty {
    /**
    * The SageMaker image name that you are hiding from the Studio user interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#sage_maker_image_name CcUserProfile#sage_maker_image_name}
    */
    readonly sageMakerImageName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#version_aliases CcUserProfile#version_aliases}
    */
    readonly versionAliases?: string[];
}
export class HiddenSageMakerImagePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HiddenSageMakerImageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sageMakerImageName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageName = this._sageMakerImageName;
        }
        if (this._versionAliases !== undefined) {
            hasAnyValues = true;
            internalValueResult.versionAliases = this._versionAliases;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HiddenSageMakerImageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sageMakerImageName = undefined;
            this._versionAliases = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sageMakerImageName = value.sageMakerImageName;
            this._versionAliases = value.versionAliases;
        }
    }

    // sage_maker_image_name - computed: true, optional: true, required: false
    private _sageMakerImageName?: string; 
    public get sageMakerImageName() {
        return this.getStringAttribute('sage_maker_image_name');
    }
    public set sageMakerImageName(value: string) {
        this._sageMakerImageName = value;
    }
    public resetSageMakerImageName() {
        this._sageMakerImageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageNameInput() {
        return this._sageMakerImageName;
    }

    // version_aliases - computed: true, optional: true, required: false
    private _versionAliases?: string[]; 
    public get versionAliases() {
        return this.getListAttribute('version_aliases');
    }
    public set versionAliases(value: string[]) {
        this._versionAliases = value;
    }
    public resetVersionAliases() {
        this._versionAliases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionAliasesInput() {
        return this._versionAliases;
    }
}

export class HiddenSageMakerImagePropertyList extends cdktn.ComplexList {
    public internalValue? : HiddenSageMakerImageProperty[] | cdktn.IResolvable

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
    public get(index: number): HiddenSageMakerImagePropertyOutputReference {
        return new HiddenSageMakerImagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StudioWebPortalSettingsProperty {
    /**
    * Applications supported in Studio that are hidden from the Studio left navigation pane.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#hidden_app_types CcUserProfile#hidden_app_types}
    */
    readonly hiddenAppTypes?: string[];
    /**
    * The instance types you are hiding from the Studio user interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#hidden_instance_types CcUserProfile#hidden_instance_types}
    */
    readonly hiddenInstanceTypes?: string[];
    /**
    * The machine learning tools that are hidden from the Studio left navigation pane.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#hidden_ml_tools CcUserProfile#hidden_ml_tools}
    */
    readonly hiddenMlTools?: string[];
    /**
    * The version aliases you are hiding from the Studio user interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#hidden_sage_maker_image_version_aliases CcUserProfile#hidden_sage_maker_image_version_aliases}
    */
    readonly hiddenSageMakerImageVersionAliases?: HiddenSageMakerImageProperty[] | cdktn.IResolvable;
}
export class StudioWebPortalSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StudioWebPortalSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hiddenAppTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.hiddenAppTypes = this._hiddenAppTypes;
        }
        if (this._hiddenInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.hiddenInstanceTypes = this._hiddenInstanceTypes;
        }
        if (this._hiddenMlTools !== undefined) {
            hasAnyValues = true;
            internalValueResult.hiddenMlTools = this._hiddenMlTools;
        }
        if (this._hiddenSageMakerImageVersionAliases?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hiddenSageMakerImageVersionAliases = this._hiddenSageMakerImageVersionAliases?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StudioWebPortalSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hiddenAppTypes = undefined;
            this._hiddenInstanceTypes = undefined;
            this._hiddenMlTools = undefined;
            this._hiddenSageMakerImageVersionAliases.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hiddenAppTypes = value.hiddenAppTypes;
            this._hiddenInstanceTypes = value.hiddenInstanceTypes;
            this._hiddenMlTools = value.hiddenMlTools;
            this._hiddenSageMakerImageVersionAliases.internalValue = value.hiddenSageMakerImageVersionAliases;
        }
    }

    // hidden_app_types - computed: true, optional: true, required: false
    private _hiddenAppTypes?: string[]; 
    public get hiddenAppTypes() {
        return cdktn.Fn.tolist(this.getListAttribute('hidden_app_types'));
    }
    public set hiddenAppTypes(value: string[]) {
        this._hiddenAppTypes = value;
    }
    public resetHiddenAppTypes() {
        this._hiddenAppTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hiddenAppTypesInput() {
        return this._hiddenAppTypes;
    }

    // hidden_instance_types - computed: true, optional: true, required: false
    private _hiddenInstanceTypes?: string[]; 
    public get hiddenInstanceTypes() {
        return cdktn.Fn.tolist(this.getListAttribute('hidden_instance_types'));
    }
    public set hiddenInstanceTypes(value: string[]) {
        this._hiddenInstanceTypes = value;
    }
    public resetHiddenInstanceTypes() {
        this._hiddenInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hiddenInstanceTypesInput() {
        return this._hiddenInstanceTypes;
    }

    // hidden_ml_tools - computed: true, optional: true, required: false
    private _hiddenMlTools?: string[]; 
    public get hiddenMlTools() {
        return cdktn.Fn.tolist(this.getListAttribute('hidden_ml_tools'));
    }
    public set hiddenMlTools(value: string[]) {
        this._hiddenMlTools = value;
    }
    public resetHiddenMlTools() {
        this._hiddenMlTools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hiddenMlToolsInput() {
        return this._hiddenMlTools;
    }

    // hidden_sage_maker_image_version_aliases - computed: true, optional: true, required: false
    private _hiddenSageMakerImageVersionAliases = new HiddenSageMakerImagePropertyList(this, "hidden_sage_maker_image_version_aliases", true);
    public get hiddenSageMakerImageVersionAliases() {
        return this._hiddenSageMakerImageVersionAliases;
    }
    public putHiddenSageMakerImageVersionAliases(value: HiddenSageMakerImageProperty[] | cdktn.IResolvable) {
        this._hiddenSageMakerImageVersionAliases.internalValue = value;
    }
    public resetHiddenSageMakerImageVersionAliases() {
        this._hiddenSageMakerImageVersionAliases.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hiddenSageMakerImageVersionAliasesInput() {
        return this._hiddenSageMakerImageVersionAliases.internalValue;
    }
}
export interface UserSettingsProperty {
    /**
    * Indicates whether auto-mounting of an EFS volume is supported for the user profile. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#auto_mount_home_efs CcUserProfile#auto_mount_home_efs}
    */
    readonly autoMountHomeEfs?: string;
    /**
    * The CodeEditor app settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#code_editor_app_settings CcUserProfile#code_editor_app_settings}
    */
    readonly codeEditorAppSettings?: CodeEditorAppSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#custom_file_system_configs CcUserProfile#custom_file_system_configs}
    */
    readonly customFileSystemConfigs?: CustomFileSystemConfigProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#custom_posix_user_config CcUserProfile#custom_posix_user_config}
    */
    readonly customPosixUserConfig?: CustomPosixUserConfigProperty;
    /**
    * Defines which Amazon SageMaker application users are directed to by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#default_landing_uri CcUserProfile#default_landing_uri}
    */
    readonly defaultLandingUri?: string;
    /**
    * The user profile Amazon Resource Name (ARN).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#execution_role CcUserProfile#execution_role}
    */
    readonly executionRole?: string;
    /**
    * The JupyterLab app settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#jupyter_lab_app_settings CcUserProfile#jupyter_lab_app_settings}
    */
    readonly jupyterLabAppSettings?: JupyterLabAppSettingsProperty;
    /**
    * The Jupyter server's app settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#jupyter_server_app_settings CcUserProfile#jupyter_server_app_settings}
    */
    readonly jupyterServerAppSettings?: JupyterServerAppSettingsProperty;
    /**
    * The kernel gateway app settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#kernel_gateway_app_settings CcUserProfile#kernel_gateway_app_settings}
    */
    readonly kernelGatewayAppSettings?: KernelGatewayAppSettingsProperty;
    /**
    * A collection of settings that configure user interaction with the RStudioServerPro app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#r_studio_server_pro_app_settings CcUserProfile#r_studio_server_pro_app_settings}
    */
    readonly rStudioServerProAppSettings?: RStudioServerProAppSettingsProperty;
    /**
    * The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#security_groups CcUserProfile#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * The sharing settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#sharing_settings CcUserProfile#sharing_settings}
    */
    readonly sharingSettings?: SharingSettingsProperty;
    /**
    * Default storage settings for a space.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#space_storage_settings CcUserProfile#space_storage_settings}
    */
    readonly spaceStorageSettings?: DefaultSpaceStorageSettingsProperty;
    /**
    * Indicates whether the Studio experience is available to users. If not, users cannot access Studio.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#studio_web_portal CcUserProfile#studio_web_portal}
    */
    readonly studioWebPortal?: string;
    /**
    * Studio settings. If these settings are applied on a user level, they take priority over the settings applied on a domain level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_user_profile#studio_web_portal_settings CcUserProfile#studio_web_portal_settings}
    */
    readonly studioWebPortalSettings?: StudioWebPortalSettingsProperty;
}
export class UserSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UserSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoMountHomeEfs !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoMountHomeEfs = this._autoMountHomeEfs;
        }
        if (this._codeEditorAppSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeEditorAppSettings = this._codeEditorAppSettings?.internalValue;
        }
        if (this._customFileSystemConfigs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customFileSystemConfigs = this._customFileSystemConfigs?.internalValue;
        }
        if (this._customPosixUserConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customPosixUserConfig = this._customPosixUserConfig?.internalValue;
        }
        if (this._defaultLandingUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultLandingUri = this._defaultLandingUri;
        }
        if (this._executionRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionRole = this._executionRole;
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
        if (this._rStudioServerProAppSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rStudioServerProAppSettings = this._rStudioServerProAppSettings?.internalValue;
        }
        if (this._securityGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        if (this._sharingSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sharingSettings = this._sharingSettings?.internalValue;
        }
        if (this._spaceStorageSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.spaceStorageSettings = this._spaceStorageSettings?.internalValue;
        }
        if (this._studioWebPortal !== undefined) {
            hasAnyValues = true;
            internalValueResult.studioWebPortal = this._studioWebPortal;
        }
        if (this._studioWebPortalSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.studioWebPortalSettings = this._studioWebPortalSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoMountHomeEfs = undefined;
            this._codeEditorAppSettings.internalValue = undefined;
            this._customFileSystemConfigs.internalValue = undefined;
            this._customPosixUserConfig.internalValue = undefined;
            this._defaultLandingUri = undefined;
            this._executionRole = undefined;
            this._jupyterLabAppSettings.internalValue = undefined;
            this._jupyterServerAppSettings.internalValue = undefined;
            this._kernelGatewayAppSettings.internalValue = undefined;
            this._rStudioServerProAppSettings.internalValue = undefined;
            this._securityGroups = undefined;
            this._sharingSettings.internalValue = undefined;
            this._spaceStorageSettings.internalValue = undefined;
            this._studioWebPortal = undefined;
            this._studioWebPortalSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoMountHomeEfs = value.autoMountHomeEfs;
            this._codeEditorAppSettings.internalValue = value.codeEditorAppSettings;
            this._customFileSystemConfigs.internalValue = value.customFileSystemConfigs;
            this._customPosixUserConfig.internalValue = value.customPosixUserConfig;
            this._defaultLandingUri = value.defaultLandingUri;
            this._executionRole = value.executionRole;
            this._jupyterLabAppSettings.internalValue = value.jupyterLabAppSettings;
            this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
            this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
            this._rStudioServerProAppSettings.internalValue = value.rStudioServerProAppSettings;
            this._securityGroups = value.securityGroups;
            this._sharingSettings.internalValue = value.sharingSettings;
            this._spaceStorageSettings.internalValue = value.spaceStorageSettings;
            this._studioWebPortal = value.studioWebPortal;
            this._studioWebPortalSettings.internalValue = value.studioWebPortalSettings;
        }
    }

    // auto_mount_home_efs - computed: true, optional: true, required: false
    private _autoMountHomeEfs?: string; 
    public get autoMountHomeEfs() {
        return this.getStringAttribute('auto_mount_home_efs');
    }
    public set autoMountHomeEfs(value: string) {
        this._autoMountHomeEfs = value;
    }
    public resetAutoMountHomeEfs() {
        this._autoMountHomeEfs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoMountHomeEfsInput() {
        return this._autoMountHomeEfs;
    }

    // code_editor_app_settings - computed: true, optional: true, required: false
    private _codeEditorAppSettings = new CodeEditorAppSettingsPropertyOutputReference(this, "code_editor_app_settings");
    public get codeEditorAppSettings() {
        return this._codeEditorAppSettings;
    }
    public putCodeEditorAppSettings(value: CodeEditorAppSettingsProperty) {
        this._codeEditorAppSettings.internalValue = value;
    }
    public resetCodeEditorAppSettings() {
        this._codeEditorAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeEditorAppSettingsInput() {
        return this._codeEditorAppSettings.internalValue;
    }

    // custom_file_system_configs - computed: true, optional: true, required: false
    private _customFileSystemConfigs = new CustomFileSystemConfigPropertyList(this, "custom_file_system_configs", false);
    public get customFileSystemConfigs() {
        return this._customFileSystemConfigs;
    }
    public putCustomFileSystemConfigs(value: CustomFileSystemConfigProperty[] | cdktn.IResolvable) {
        this._customFileSystemConfigs.internalValue = value;
    }
    public resetCustomFileSystemConfigs() {
        this._customFileSystemConfigs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customFileSystemConfigsInput() {
        return this._customFileSystemConfigs.internalValue;
    }

    // custom_posix_user_config - computed: true, optional: true, required: false
    private _customPosixUserConfig = new CustomPosixUserConfigPropertyOutputReference(this, "custom_posix_user_config");
    public get customPosixUserConfig() {
        return this._customPosixUserConfig;
    }
    public putCustomPosixUserConfig(value: CustomPosixUserConfigProperty) {
        this._customPosixUserConfig.internalValue = value;
    }
    public resetCustomPosixUserConfig() {
        this._customPosixUserConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customPosixUserConfigInput() {
        return this._customPosixUserConfig.internalValue;
    }

    // default_landing_uri - computed: true, optional: true, required: false
    private _defaultLandingUri?: string; 
    public get defaultLandingUri() {
        return this.getStringAttribute('default_landing_uri');
    }
    public set defaultLandingUri(value: string) {
        this._defaultLandingUri = value;
    }
    public resetDefaultLandingUri() {
        this._defaultLandingUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultLandingUriInput() {
        return this._defaultLandingUri;
    }

    // execution_role - computed: true, optional: true, required: false
    private _executionRole?: string; 
    public get executionRole() {
        return this.getStringAttribute('execution_role');
    }
    public set executionRole(value: string) {
        this._executionRole = value;
    }
    public resetExecutionRole() {
        this._executionRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleInput() {
        return this._executionRole;
    }

    // jupyter_lab_app_settings - computed: true, optional: true, required: false
    private _jupyterLabAppSettings = new JupyterLabAppSettingsPropertyOutputReference(this, "jupyter_lab_app_settings");
    public get jupyterLabAppSettings() {
        return this._jupyterLabAppSettings;
    }
    public putJupyterLabAppSettings(value: JupyterLabAppSettingsProperty) {
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

    // r_studio_server_pro_app_settings - computed: true, optional: true, required: false
    private _rStudioServerProAppSettings = new RStudioServerProAppSettingsPropertyOutputReference(this, "r_studio_server_pro_app_settings");
    public get rStudioServerProAppSettings() {
        return this._rStudioServerProAppSettings;
    }
    public putRStudioServerProAppSettings(value: RStudioServerProAppSettingsProperty) {
        this._rStudioServerProAppSettings.internalValue = value;
    }
    public resetRStudioServerProAppSettings() {
        this._rStudioServerProAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rStudioServerProAppSettingsInput() {
        return this._rStudioServerProAppSettings.internalValue;
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[]; 
    public get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[]) {
        this._securityGroups = value;
    }
    public resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
        return this._securityGroups;
    }

    // sharing_settings - computed: true, optional: true, required: false
    private _sharingSettings = new SharingSettingsPropertyOutputReference(this, "sharing_settings");
    public get sharingSettings() {
        return this._sharingSettings;
    }
    public putSharingSettings(value: SharingSettingsProperty) {
        this._sharingSettings.internalValue = value;
    }
    public resetSharingSettings() {
        this._sharingSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sharingSettingsInput() {
        return this._sharingSettings.internalValue;
    }

    // space_storage_settings - computed: true, optional: true, required: false
    private _spaceStorageSettings = new DefaultSpaceStorageSettingsPropertyOutputReference(this, "space_storage_settings");
    public get spaceStorageSettings() {
        return this._spaceStorageSettings;
    }
    public putSpaceStorageSettings(value: DefaultSpaceStorageSettingsProperty) {
        this._spaceStorageSettings.internalValue = value;
    }
    public resetSpaceStorageSettings() {
        this._spaceStorageSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spaceStorageSettingsInput() {
        return this._spaceStorageSettings.internalValue;
    }

    // studio_web_portal - computed: true, optional: true, required: false
    private _studioWebPortal?: string; 
    public get studioWebPortal() {
        return this.getStringAttribute('studio_web_portal');
    }
    public set studioWebPortal(value: string) {
        this._studioWebPortal = value;
    }
    public resetStudioWebPortal() {
        this._studioWebPortal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get studioWebPortalInput() {
        return this._studioWebPortal;
    }

    // studio_web_portal_settings - computed: true, optional: true, required: false
    private _studioWebPortalSettings = new StudioWebPortalSettingsPropertyOutputReference(this, "studio_web_portal_settings");
    public get studioWebPortalSettings() {
        return this._studioWebPortalSettings;
    }
    public putStudioWebPortalSettings(value: StudioWebPortalSettingsProperty) {
        this._studioWebPortalSettings.internalValue = value;
    }
    public resetStudioWebPortalSettings() {
        this._studioWebPortalSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get studioWebPortalSettingsInput() {
        return this._studioWebPortalSettings.internalValue;
    }
}
}
