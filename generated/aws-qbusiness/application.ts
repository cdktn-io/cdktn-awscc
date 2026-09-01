// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApplicationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#attachments_configuration CcApplication#attachments_configuration}
    */
    readonly attachmentsConfiguration?: CcApplication.AttachmentsConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#auto_subscription_configuration CcApplication#auto_subscription_configuration}
    */
    readonly autoSubscriptionConfiguration?: CcApplication.AutoSubscriptionConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#client_ids_for_oidc CcApplication#client_ids_for_oidc}
    */
    readonly clientIdsForOidc?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#description CcApplication#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#display_name CcApplication#display_name}
    */
    readonly displayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#encryption_configuration CcApplication#encryption_configuration}
    */
    readonly encryptionConfiguration?: CcApplication.EncryptionConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#iam_identity_provider_arn CcApplication#iam_identity_provider_arn}
    */
    readonly iamIdentityProviderArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#identity_center_instance_arn CcApplication#identity_center_instance_arn}
    */
    readonly identityCenterInstanceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#identity_type CcApplication#identity_type}
    */
    readonly identityType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#personalization_configuration CcApplication#personalization_configuration}
    */
    readonly personalizationConfiguration?: CcApplication.PersonalizationConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#q_apps_configuration CcApplication#q_apps_configuration}
    */
    readonly qAppsConfiguration?: CcApplication.QAppsConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#quick_sight_configuration CcApplication#quick_sight_configuration}
    */
    readonly quickSightConfiguration?: CcApplication.QuickSightConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#role_arn CcApplication#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#tags CcApplication#tags}
    */
    readonly tags?: CcApplication.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application awscc_qbusiness_application}
*/
export class CcApplication extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_qbusiness_application";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApplication resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApplication to import
    * @param importFromId The id of the existing CcApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApplication to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_qbusiness_application", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application awscc_qbusiness_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApplicationProps
    */
    public constructor(scope: Construct, id: string, config: CcApplicationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_qbusiness_application',
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
        this._attachmentsConfiguration.internalValue = config.attachmentsConfiguration;
        this._autoSubscriptionConfiguration.internalValue = config.autoSubscriptionConfiguration;
        this._clientIdsForOidc = config.clientIdsForOidc;
        this._description = config.description;
        this._displayName = config.displayName;
        this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
        this._iamIdentityProviderArn = config.iamIdentityProviderArn;
        this._identityCenterInstanceArn = config.identityCenterInstanceArn;
        this._identityType = config.identityType;
        this._personalizationConfiguration.internalValue = config.personalizationConfiguration;
        this._qAppsConfiguration.internalValue = config.qAppsConfiguration;
        this._quickSightConfiguration.internalValue = config.quickSightConfiguration;
        this._roleArn = config.roleArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_arn - computed: true, optional: false, required: false
    public get applicationArn() {
        return this.getStringAttribute('application_arn');
    }

    // application_id - computed: true, optional: false, required: false
    public get applicationId() {
        return this.getStringAttribute('application_id');
    }

    // attachments_configuration - computed: true, optional: true, required: false
    private _attachmentsConfiguration = new CcApplication.AttachmentsConfigurationPropertyOutputReference(this, "attachments_configuration");
    public get attachmentsConfiguration() {
        return this._attachmentsConfiguration;
    }
    public putAttachmentsConfiguration(value: CcApplication.AttachmentsConfigurationProperty) {
        this._attachmentsConfiguration.internalValue = value;
    }
    public resetAttachmentsConfiguration() {
        this._attachmentsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attachmentsConfigurationInput() {
        return this._attachmentsConfiguration.internalValue;
    }

    // auto_subscription_configuration - computed: true, optional: true, required: false
    private _autoSubscriptionConfiguration = new CcApplication.AutoSubscriptionConfigurationPropertyOutputReference(this, "auto_subscription_configuration");
    public get autoSubscriptionConfiguration() {
        return this._autoSubscriptionConfiguration;
    }
    public putAutoSubscriptionConfiguration(value: CcApplication.AutoSubscriptionConfigurationProperty) {
        this._autoSubscriptionConfiguration.internalValue = value;
    }
    public resetAutoSubscriptionConfiguration() {
        this._autoSubscriptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoSubscriptionConfigurationInput() {
        return this._autoSubscriptionConfiguration.internalValue;
    }

    // client_ids_for_oidc - computed: true, optional: true, required: false
    private _clientIdsForOidc?: string[]; 
    public get clientIdsForOidc() {
        return this.getListAttribute('client_ids_for_oidc');
    }
    public set clientIdsForOidc(value: string[]) {
        this._clientIdsForOidc = value;
    }
    public resetClientIdsForOidc() {
        this._clientIdsForOidc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdsForOidcInput() {
        return this._clientIdsForOidc;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // display_name - computed: false, optional: false, required: true
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // encryption_configuration - computed: true, optional: true, required: false
    private _encryptionConfiguration = new CcApplication.EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
    public get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    public putEncryptionConfiguration(value: CcApplication.EncryptionConfigurationProperty) {
        this._encryptionConfiguration.internalValue = value;
    }
    public resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }

    // iam_identity_provider_arn - computed: true, optional: true, required: false
    private _iamIdentityProviderArn?: string; 
    public get iamIdentityProviderArn() {
        return this.getStringAttribute('iam_identity_provider_arn');
    }
    public set iamIdentityProviderArn(value: string) {
        this._iamIdentityProviderArn = value;
    }
    public resetIamIdentityProviderArn() {
        this._iamIdentityProviderArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamIdentityProviderArnInput() {
        return this._iamIdentityProviderArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_center_application_arn - computed: true, optional: false, required: false
    public get identityCenterApplicationArn() {
        return this.getStringAttribute('identity_center_application_arn');
    }

    // identity_center_instance_arn - computed: true, optional: true, required: false
    private _identityCenterInstanceArn?: string; 
    public get identityCenterInstanceArn() {
        return this.getStringAttribute('identity_center_instance_arn');
    }
    public set identityCenterInstanceArn(value: string) {
        this._identityCenterInstanceArn = value;
    }
    public resetIdentityCenterInstanceArn() {
        this._identityCenterInstanceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityCenterInstanceArnInput() {
        return this._identityCenterInstanceArn;
    }

    // identity_type - computed: true, optional: true, required: false
    private _identityType?: string; 
    public get identityType() {
        return this.getStringAttribute('identity_type');
    }
    public set identityType(value: string) {
        this._identityType = value;
    }
    public resetIdentityType() {
        this._identityType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityTypeInput() {
        return this._identityType;
    }

    // personalization_configuration - computed: true, optional: true, required: false
    private _personalizationConfiguration = new CcApplication.PersonalizationConfigurationPropertyOutputReference(this, "personalization_configuration");
    public get personalizationConfiguration() {
        return this._personalizationConfiguration;
    }
    public putPersonalizationConfiguration(value: CcApplication.PersonalizationConfigurationProperty) {
        this._personalizationConfiguration.internalValue = value;
    }
    public resetPersonalizationConfiguration() {
        this._personalizationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get personalizationConfigurationInput() {
        return this._personalizationConfiguration.internalValue;
    }

    // q_apps_configuration - computed: true, optional: true, required: false
    private _qAppsConfiguration = new CcApplication.QAppsConfigurationPropertyOutputReference(this, "q_apps_configuration");
    public get qAppsConfiguration() {
        return this._qAppsConfiguration;
    }
    public putQAppsConfiguration(value: CcApplication.QAppsConfigurationProperty) {
        this._qAppsConfiguration.internalValue = value;
    }
    public resetQAppsConfiguration() {
        this._qAppsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qAppsConfigurationInput() {
        return this._qAppsConfiguration.internalValue;
    }

    // quick_sight_configuration - computed: true, optional: true, required: false
    private _quickSightConfiguration = new CcApplication.QuickSightConfigurationPropertyOutputReference(this, "quick_sight_configuration");
    public get quickSightConfiguration() {
        return this._quickSightConfiguration;
    }
    public putQuickSightConfiguration(value: CcApplication.QuickSightConfigurationProperty) {
        this._quickSightConfiguration.internalValue = value;
    }
    public resetQuickSightConfiguration() {
        this._quickSightConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get quickSightConfigurationInput() {
        return this._quickSightConfiguration.internalValue;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcApplication.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcApplication.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            attachments_configuration: ccApplicationAttachmentsConfigurationPropertyToTerraform(this._attachmentsConfiguration.internalValue),
            auto_subscription_configuration: ccApplicationAutoSubscriptionConfigurationPropertyToTerraform(this._autoSubscriptionConfiguration.internalValue),
            client_ids_for_oidc: cdktn.listMapper(cdktn.stringToTerraform, false)(this._clientIdsForOidc),
            description: cdktn.stringToTerraform(this._description),
            display_name: cdktn.stringToTerraform(this._displayName),
            encryption_configuration: ccApplicationEncryptionConfigurationPropertyToTerraform(this._encryptionConfiguration.internalValue),
            iam_identity_provider_arn: cdktn.stringToTerraform(this._iamIdentityProviderArn),
            identity_center_instance_arn: cdktn.stringToTerraform(this._identityCenterInstanceArn),
            identity_type: cdktn.stringToTerraform(this._identityType),
            personalization_configuration: ccApplicationPersonalizationConfigurationPropertyToTerraform(this._personalizationConfiguration.internalValue),
            q_apps_configuration: ccApplicationQAppsConfigurationPropertyToTerraform(this._qAppsConfiguration.internalValue),
            quick_sight_configuration: ccApplicationQuickSightConfigurationPropertyToTerraform(this._quickSightConfiguration.internalValue),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.listMapper(ccApplicationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            attachments_configuration: {
                value: ccApplicationAttachmentsConfigurationPropertyToHclTerraform(this._attachmentsConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplication.AttachmentsConfigurationProperty",
            },
            auto_subscription_configuration: {
                value: ccApplicationAutoSubscriptionConfigurationPropertyToHclTerraform(this._autoSubscriptionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplication.AutoSubscriptionConfigurationProperty",
            },
            client_ids_for_oidc: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._clientIdsForOidc),
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
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption_configuration: {
                value: ccApplicationEncryptionConfigurationPropertyToHclTerraform(this._encryptionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplication.EncryptionConfigurationProperty",
            },
            iam_identity_provider_arn: {
                value: cdktn.stringToHclTerraform(this._iamIdentityProviderArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_center_instance_arn: {
                value: cdktn.stringToHclTerraform(this._identityCenterInstanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_type: {
                value: cdktn.stringToHclTerraform(this._identityType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            personalization_configuration: {
                value: ccApplicationPersonalizationConfigurationPropertyToHclTerraform(this._personalizationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplication.PersonalizationConfigurationProperty",
            },
            q_apps_configuration: {
                value: ccApplicationQAppsConfigurationPropertyToHclTerraform(this._qAppsConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplication.QAppsConfigurationProperty",
            },
            quick_sight_configuration: {
                value: ccApplicationQuickSightConfigurationPropertyToHclTerraform(this._quickSightConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplication.QuickSightConfigurationProperty",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccApplicationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcApplication.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccApplicationAttachmentsConfigurationPropertyToTerraform(struct?: CcApplication.AttachmentsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attachments_control_mode: cdktn.stringToTerraform(struct!.attachmentsControlMode),
    }
}


export function ccApplicationAttachmentsConfigurationPropertyToHclTerraform(struct?: CcApplication.AttachmentsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attachments_control_mode: {
            value: cdktn.stringToHclTerraform(struct!.attachmentsControlMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationAutoSubscriptionConfigurationPropertyToTerraform(struct?: CcApplication.AutoSubscriptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_subscribe: cdktn.stringToTerraform(struct!.autoSubscribe),
        default_subscription_type: cdktn.stringToTerraform(struct!.defaultSubscriptionType),
    }
}


export function ccApplicationAutoSubscriptionConfigurationPropertyToHclTerraform(struct?: CcApplication.AutoSubscriptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_subscribe: {
            value: cdktn.stringToHclTerraform(struct!.autoSubscribe),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        default_subscription_type: {
            value: cdktn.stringToHclTerraform(struct!.defaultSubscriptionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationEncryptionConfigurationPropertyToTerraform(struct?: CcApplication.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    }
}


export function ccApplicationEncryptionConfigurationPropertyToHclTerraform(struct?: CcApplication.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationPersonalizationConfigurationPropertyToTerraform(struct?: CcApplication.PersonalizationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        personalization_control_mode: cdktn.stringToTerraform(struct!.personalizationControlMode),
    }
}


export function ccApplicationPersonalizationConfigurationPropertyToHclTerraform(struct?: CcApplication.PersonalizationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        personalization_control_mode: {
            value: cdktn.stringToHclTerraform(struct!.personalizationControlMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationQAppsConfigurationPropertyToTerraform(struct?: CcApplication.QAppsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        q_apps_control_mode: cdktn.stringToTerraform(struct!.qAppsControlMode),
    }
}


export function ccApplicationQAppsConfigurationPropertyToHclTerraform(struct?: CcApplication.QAppsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        q_apps_control_mode: {
            value: cdktn.stringToHclTerraform(struct!.qAppsControlMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationQuickSightConfigurationPropertyToTerraform(struct?: CcApplication.QuickSightConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_namespace: cdktn.stringToTerraform(struct!.clientNamespace),
    }
}


export function ccApplicationQuickSightConfigurationPropertyToHclTerraform(struct?: CcApplication.QuickSightConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_namespace: {
            value: cdktn.stringToHclTerraform(struct!.clientNamespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationTagPropertyToTerraform(struct?: CcApplication.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccApplicationTagPropertyToHclTerraform(struct?: CcApplication.TagProperty | cdktn.IResolvable): any {
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


export namespace CcApplication {
export interface AttachmentsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#attachments_control_mode CcApplication#attachments_control_mode}
    */
    readonly attachmentsControlMode?: string;
}
export class AttachmentsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AttachmentsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attachmentsControlMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.attachmentsControlMode = this._attachmentsControlMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AttachmentsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attachmentsControlMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attachmentsControlMode = value.attachmentsControlMode;
        }
    }

    // attachments_control_mode - computed: true, optional: true, required: false
    private _attachmentsControlMode?: string; 
    public get attachmentsControlMode() {
        return this.getStringAttribute('attachments_control_mode');
    }
    public set attachmentsControlMode(value: string) {
        this._attachmentsControlMode = value;
    }
    public resetAttachmentsControlMode() {
        this._attachmentsControlMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attachmentsControlModeInput() {
        return this._attachmentsControlMode;
    }
}
export interface AutoSubscriptionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#auto_subscribe CcApplication#auto_subscribe}
    */
    readonly autoSubscribe?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#default_subscription_type CcApplication#default_subscription_type}
    */
    readonly defaultSubscriptionType?: string;
}
export class AutoSubscriptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoSubscriptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoSubscribe !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoSubscribe = this._autoSubscribe;
        }
        if (this._defaultSubscriptionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultSubscriptionType = this._defaultSubscriptionType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoSubscriptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoSubscribe = undefined;
            this._defaultSubscriptionType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoSubscribe = value.autoSubscribe;
            this._defaultSubscriptionType = value.defaultSubscriptionType;
        }
    }

    // auto_subscribe - computed: true, optional: true, required: false
    private _autoSubscribe?: string; 
    public get autoSubscribe() {
        return this.getStringAttribute('auto_subscribe');
    }
    public set autoSubscribe(value: string) {
        this._autoSubscribe = value;
    }
    public resetAutoSubscribe() {
        this._autoSubscribe = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoSubscribeInput() {
        return this._autoSubscribe;
    }

    // default_subscription_type - computed: true, optional: true, required: false
    private _defaultSubscriptionType?: string; 
    public get defaultSubscriptionType() {
        return this.getStringAttribute('default_subscription_type');
    }
    public set defaultSubscriptionType(value: string) {
        this._defaultSubscriptionType = value;
    }
    public resetDefaultSubscriptionType() {
        this._defaultSubscriptionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultSubscriptionTypeInput() {
        return this._defaultSubscriptionType;
    }
}
export interface EncryptionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#kms_key_id CcApplication#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export class EncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyId = value.kmsKeyId;
        }
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }
}
export interface PersonalizationConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#personalization_control_mode CcApplication#personalization_control_mode}
    */
    readonly personalizationControlMode?: string;
}
export class PersonalizationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PersonalizationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._personalizationControlMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.personalizationControlMode = this._personalizationControlMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PersonalizationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._personalizationControlMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._personalizationControlMode = value.personalizationControlMode;
        }
    }

    // personalization_control_mode - computed: true, optional: true, required: false
    private _personalizationControlMode?: string; 
    public get personalizationControlMode() {
        return this.getStringAttribute('personalization_control_mode');
    }
    public set personalizationControlMode(value: string) {
        this._personalizationControlMode = value;
    }
    public resetPersonalizationControlMode() {
        this._personalizationControlMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get personalizationControlModeInput() {
        return this._personalizationControlMode;
    }
}
export interface QAppsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#q_apps_control_mode CcApplication#q_apps_control_mode}
    */
    readonly qAppsControlMode?: string;
}
export class QAppsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QAppsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._qAppsControlMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.qAppsControlMode = this._qAppsControlMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QAppsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._qAppsControlMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._qAppsControlMode = value.qAppsControlMode;
        }
    }

    // q_apps_control_mode - computed: true, optional: true, required: false
    private _qAppsControlMode?: string; 
    public get qAppsControlMode() {
        return this.getStringAttribute('q_apps_control_mode');
    }
    public set qAppsControlMode(value: string) {
        this._qAppsControlMode = value;
    }
    public resetQAppsControlMode() {
        this._qAppsControlMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qAppsControlModeInput() {
        return this._qAppsControlMode;
    }
}
export interface QuickSightConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#client_namespace CcApplication#client_namespace}
    */
    readonly clientNamespace?: string;
}
export class QuickSightConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QuickSightConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientNamespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientNamespace = this._clientNamespace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QuickSightConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientNamespace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientNamespace = value.clientNamespace;
        }
    }

    // client_namespace - computed: true, optional: true, required: false
    private _clientNamespace?: string; 
    public get clientNamespace() {
        return this.getStringAttribute('client_namespace');
    }
    public set clientNamespace(value: string) {
        this._clientNamespace = value;
    }
    public resetClientNamespace() {
        this._clientNamespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientNamespaceInput() {
        return this._clientNamespace;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#key CcApplication#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_application#value CcApplication#value}
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
