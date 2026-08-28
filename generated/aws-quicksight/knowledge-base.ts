// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcKnowledgeBaseProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#access_control_configuration CcKnowledgeBase#access_control_configuration}
    */
    readonly accessControlConfiguration?: CcKnowledgeBase.AccessControlConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#aws_account_id CcKnowledgeBase#aws_account_id}
    */
    readonly awsAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#data_source_arn CcKnowledgeBase#data_source_arn}
    */
    readonly dataSourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#description CcKnowledgeBase#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#is_email_notification_opted_for_ingestion_failures CcKnowledgeBase#is_email_notification_opted_for_ingestion_failures}
    */
    readonly isEmailNotificationOptedForIngestionFailures?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#knowledge_base_configuration CcKnowledgeBase#knowledge_base_configuration}
    */
    readonly knowledgeBaseConfiguration: CcKnowledgeBase.KnowledgeBaseConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#knowledge_base_id CcKnowledgeBase#knowledge_base_id}
    */
    readonly knowledgeBaseId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#media_extraction_configuration CcKnowledgeBase#media_extraction_configuration}
    */
    readonly mediaExtractionConfiguration?: CcKnowledgeBase.MediaExtractionConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#name CcKnowledgeBase#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#permissions CcKnowledgeBase#permissions}
    */
    readonly permissions?: CcKnowledgeBase.ResourcePermissionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#primary_owner_arn CcKnowledgeBase#primary_owner_arn}
    */
    readonly primaryOwnerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#tags CcKnowledgeBase#tags}
    */
    readonly tags?: CcKnowledgeBase.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base awscc_quicksight_knowledge_base}
*/
export class CcKnowledgeBase extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_quicksight_knowledge_base";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcKnowledgeBase resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcKnowledgeBase to import
    * @param importFromId The id of the existing CcKnowledgeBase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcKnowledgeBase to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_knowledge_base", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base awscc_quicksight_knowledge_base} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcKnowledgeBaseProps
    */
    public constructor(scope: Construct, id: string, config: CcKnowledgeBaseProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_knowledge_base',
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
        this._accessControlConfiguration.internalValue = config.accessControlConfiguration;
        this._awsAccountId = config.awsAccountId;
        this._dataSourceArn = config.dataSourceArn;
        this._description = config.description;
        this._isEmailNotificationOptedForIngestionFailures = config.isEmailNotificationOptedForIngestionFailures;
        this._knowledgeBaseConfiguration.internalValue = config.knowledgeBaseConfiguration;
        this._knowledgeBaseId = config.knowledgeBaseId;
        this._mediaExtractionConfiguration.internalValue = config.mediaExtractionConfiguration;
        this._name = config.name;
        this._permissions.internalValue = config.permissions;
        this._primaryOwnerArn = config.primaryOwnerArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_control_configuration - computed: true, optional: true, required: false
    private _accessControlConfiguration = new CcKnowledgeBase.AccessControlConfigurationPropertyOutputReference(this, "access_control_configuration");
    public get accessControlConfiguration() {
        return this._accessControlConfiguration;
    }
    public putAccessControlConfiguration(value: CcKnowledgeBase.AccessControlConfigurationProperty) {
        this._accessControlConfiguration.internalValue = value;
    }
    public resetAccessControlConfiguration() {
        this._accessControlConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessControlConfigurationInput() {
        return this._accessControlConfiguration.internalValue;
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

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // data_source_arn - computed: false, optional: false, required: true
    private _dataSourceArn?: string; 
    public get dataSourceArn() {
        return this.getStringAttribute('data_source_arn');
    }
    public set dataSourceArn(value: string) {
        this._dataSourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceArnInput() {
        return this._dataSourceArn;
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

    // document_count - computed: true, optional: false, required: false
    public get documentCount() {
        return this.getNumberAttribute('document_count');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // is_email_notification_opted_for_ingestion_failures - computed: true, optional: true, required: false
    private _isEmailNotificationOptedForIngestionFailures?: boolean | cdktn.IResolvable; 
    public get isEmailNotificationOptedForIngestionFailures() {
        return this.getBooleanAttribute('is_email_notification_opted_for_ingestion_failures');
    }
    public set isEmailNotificationOptedForIngestionFailures(value: boolean | cdktn.IResolvable) {
        this._isEmailNotificationOptedForIngestionFailures = value;
    }
    public resetIsEmailNotificationOptedForIngestionFailures() {
        this._isEmailNotificationOptedForIngestionFailures = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEmailNotificationOptedForIngestionFailuresInput() {
        return this._isEmailNotificationOptedForIngestionFailures;
    }

    // knowledge_base_arn - computed: true, optional: false, required: false
    public get knowledgeBaseArn() {
        return this.getStringAttribute('knowledge_base_arn');
    }

    // knowledge_base_configuration - computed: false, optional: false, required: true
    private _knowledgeBaseConfiguration = new CcKnowledgeBase.KnowledgeBaseConfigurationPropertyOutputReference(this, "knowledge_base_configuration");
    public get knowledgeBaseConfiguration() {
        return this._knowledgeBaseConfiguration;
    }
    public putKnowledgeBaseConfiguration(value: CcKnowledgeBase.KnowledgeBaseConfigurationProperty) {
        this._knowledgeBaseConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get knowledgeBaseConfigurationInput() {
        return this._knowledgeBaseConfiguration.internalValue;
    }

    // knowledge_base_id - computed: false, optional: false, required: true
    private _knowledgeBaseId?: string; 
    public get knowledgeBaseId() {
        return this.getStringAttribute('knowledge_base_id');
    }
    public set knowledgeBaseId(value: string) {
        this._knowledgeBaseId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get knowledgeBaseIdInput() {
        return this._knowledgeBaseId;
    }

    // knowledge_base_size_bytes - computed: true, optional: false, required: false
    public get knowledgeBaseSizeBytes() {
        return this.getNumberAttribute('knowledge_base_size_bytes');
    }

    // media_extraction_configuration - computed: true, optional: true, required: false
    private _mediaExtractionConfiguration = new CcKnowledgeBase.MediaExtractionConfigurationPropertyOutputReference(this, "media_extraction_configuration");
    public get mediaExtractionConfiguration() {
        return this._mediaExtractionConfiguration;
    }
    public putMediaExtractionConfiguration(value: CcKnowledgeBase.MediaExtractionConfigurationProperty) {
        this._mediaExtractionConfiguration.internalValue = value;
    }
    public resetMediaExtractionConfiguration() {
        this._mediaExtractionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaExtractionConfigurationInput() {
        return this._mediaExtractionConfiguration.internalValue;
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
    private _permissions = new CcKnowledgeBase.ResourcePermissionPropertyList(this, "permissions", false);
    public get permissions() {
        return this._permissions;
    }
    public putPermissions(value: CcKnowledgeBase.ResourcePermissionProperty[] | cdktn.IResolvable) {
        this._permissions.internalValue = value;
    }
    public resetPermissions() {
        this._permissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsInput() {
        return this._permissions.internalValue;
    }

    // primary_owner_arn - computed: true, optional: true, required: false
    private _primaryOwnerArn?: string; 
    public get primaryOwnerArn() {
        return this.getStringAttribute('primary_owner_arn');
    }
    public set primaryOwnerArn(value: string) {
        this._primaryOwnerArn = value;
    }
    public resetPrimaryOwnerArn() {
        this._primaryOwnerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryOwnerArnInput() {
        return this._primaryOwnerArn;
    }

    // primary_owner_username - computed: true, optional: false, required: false
    public get primaryOwnerUsername() {
        return this.getStringAttribute('primary_owner_username');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcKnowledgeBase.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcKnowledgeBase.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
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
            access_control_configuration: ccKnowledgeBaseAccessControlConfigurationPropertyToTerraform(this._accessControlConfiguration.internalValue),
            aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
            data_source_arn: cdktn.stringToTerraform(this._dataSourceArn),
            description: cdktn.stringToTerraform(this._description),
            is_email_notification_opted_for_ingestion_failures: cdktn.booleanToTerraform(this._isEmailNotificationOptedForIngestionFailures),
            knowledge_base_configuration: ccKnowledgeBaseKnowledgeBaseConfigurationPropertyToTerraform(this._knowledgeBaseConfiguration.internalValue),
            knowledge_base_id: cdktn.stringToTerraform(this._knowledgeBaseId),
            media_extraction_configuration: ccKnowledgeBaseMediaExtractionConfigurationPropertyToTerraform(this._mediaExtractionConfiguration.internalValue),
            name: cdktn.stringToTerraform(this._name),
            permissions: cdktn.listMapper(ccKnowledgeBaseResourcePermissionPropertyToTerraform, false)(this._permissions.internalValue),
            primary_owner_arn: cdktn.stringToTerraform(this._primaryOwnerArn),
            tags: cdktn.listMapper(ccKnowledgeBaseTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_control_configuration: {
                value: ccKnowledgeBaseAccessControlConfigurationPropertyToHclTerraform(this._accessControlConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcKnowledgeBase.AccessControlConfigurationProperty",
            },
            aws_account_id: {
                value: cdktn.stringToHclTerraform(this._awsAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data_source_arn: {
                value: cdktn.stringToHclTerraform(this._dataSourceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_email_notification_opted_for_ingestion_failures: {
                value: cdktn.booleanToHclTerraform(this._isEmailNotificationOptedForIngestionFailures),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            knowledge_base_configuration: {
                value: ccKnowledgeBaseKnowledgeBaseConfigurationPropertyToHclTerraform(this._knowledgeBaseConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcKnowledgeBase.KnowledgeBaseConfigurationProperty",
            },
            knowledge_base_id: {
                value: cdktn.stringToHclTerraform(this._knowledgeBaseId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            media_extraction_configuration: {
                value: ccKnowledgeBaseMediaExtractionConfigurationPropertyToHclTerraform(this._mediaExtractionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcKnowledgeBase.MediaExtractionConfigurationProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            permissions: {
                value: cdktn.listMapperHcl(ccKnowledgeBaseResourcePermissionPropertyToHclTerraform, false)(this._permissions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcKnowledgeBase.ResourcePermissionPropertyList",
            },
            primary_owner_arn: {
                value: cdktn.stringToHclTerraform(this._primaryOwnerArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccKnowledgeBaseTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcKnowledgeBase.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccKnowledgeBaseAccessControlConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.AccessControlConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_acl_enabled: cdktn.booleanToTerraform(struct!.isAclEnabled),
    }
}


export function ccKnowledgeBaseAccessControlConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.AccessControlConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_acl_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isAclEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseKbTemplateConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.KbTemplateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        template: cdktn.stringToTerraform(struct!.template),
    }
}


export function ccKnowledgeBaseKbTemplateConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.KbTemplateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        template: {
            value: cdktn.stringToHclTerraform(struct!.template),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseKnowledgeBaseConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.KnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        template_configuration: ccKnowledgeBaseKbTemplateConfigurationPropertyToTerraform(struct!.templateConfiguration),
    }
}


export function ccKnowledgeBaseKnowledgeBaseConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.KnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        template_configuration: {
            value: ccKnowledgeBaseKbTemplateConfigurationPropertyToHclTerraform(struct!.templateConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "KbTemplateConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseAudioExtractionConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.AudioExtractionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        audio_extraction_status: cdktn.stringToTerraform(struct!.audioExtractionStatus),
    }
}


export function ccKnowledgeBaseAudioExtractionConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.AudioExtractionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        audio_extraction_status: {
            value: cdktn.stringToHclTerraform(struct!.audioExtractionStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseImageExtractionConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.ImageExtractionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        image_extraction_status: cdktn.stringToTerraform(struct!.imageExtractionStatus),
    }
}


export function ccKnowledgeBaseImageExtractionConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.ImageExtractionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        image_extraction_status: {
            value: cdktn.stringToHclTerraform(struct!.imageExtractionStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseVideoExtractionConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.VideoExtractionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        video_extraction_status: cdktn.stringToTerraform(struct!.videoExtractionStatus),
        video_extraction_type: cdktn.stringToTerraform(struct!.videoExtractionType),
    }
}


export function ccKnowledgeBaseVideoExtractionConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.VideoExtractionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        video_extraction_status: {
            value: cdktn.stringToHclTerraform(struct!.videoExtractionStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        video_extraction_type: {
            value: cdktn.stringToHclTerraform(struct!.videoExtractionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseMediaExtractionConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.MediaExtractionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        audio_extraction_configuration: ccKnowledgeBaseAudioExtractionConfigurationPropertyToTerraform(struct!.audioExtractionConfiguration),
        image_extraction_configuration: ccKnowledgeBaseImageExtractionConfigurationPropertyToTerraform(struct!.imageExtractionConfiguration),
        video_extraction_configuration: ccKnowledgeBaseVideoExtractionConfigurationPropertyToTerraform(struct!.videoExtractionConfiguration),
    }
}


export function ccKnowledgeBaseMediaExtractionConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.MediaExtractionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        audio_extraction_configuration: {
            value: ccKnowledgeBaseAudioExtractionConfigurationPropertyToHclTerraform(struct!.audioExtractionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AudioExtractionConfigurationProperty",
        },
        image_extraction_configuration: {
            value: ccKnowledgeBaseImageExtractionConfigurationPropertyToHclTerraform(struct!.imageExtractionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ImageExtractionConfigurationProperty",
        },
        video_extraction_configuration: {
            value: ccKnowledgeBaseVideoExtractionConfigurationPropertyToHclTerraform(struct!.videoExtractionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "VideoExtractionConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseResourcePermissionPropertyToTerraform(struct?: CcKnowledgeBase.ResourcePermissionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
        principal: cdktn.stringToTerraform(struct!.principal),
        resource: cdktn.stringToTerraform(struct!.resource),
    }
}


export function ccKnowledgeBaseResourcePermissionPropertyToHclTerraform(struct?: CcKnowledgeBase.ResourcePermissionProperty | cdktn.IResolvable): any {
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
        resource: {
            value: cdktn.stringToHclTerraform(struct!.resource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseTagPropertyToTerraform(struct?: CcKnowledgeBase.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccKnowledgeBaseTagPropertyToHclTerraform(struct?: CcKnowledgeBase.TagProperty | cdktn.IResolvable): any {
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


export namespace CcKnowledgeBase {
export interface AccessControlConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#is_acl_enabled CcKnowledgeBase#is_acl_enabled}
    */
    readonly isAclEnabled?: boolean | cdktn.IResolvable;
}
export class AccessControlConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccessControlConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isAclEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isAclEnabled = this._isAclEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessControlConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isAclEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isAclEnabled = value.isAclEnabled;
        }
    }

    // is_acl_enabled - computed: true, optional: true, required: false
    private _isAclEnabled?: boolean | cdktn.IResolvable; 
    public get isAclEnabled() {
        return this.getBooleanAttribute('is_acl_enabled');
    }
    public set isAclEnabled(value: boolean | cdktn.IResolvable) {
        this._isAclEnabled = value;
    }
    public resetIsAclEnabled() {
        this._isAclEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isAclEnabledInput() {
        return this._isAclEnabled;
    }
}
export interface KbTemplateConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#template CcKnowledgeBase#template}
    */
    readonly template?: string;
}
export class KbTemplateConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KbTemplateConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._template !== undefined) {
            hasAnyValues = true;
            internalValueResult.template = this._template;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KbTemplateConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._template = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._template = value.template;
        }
    }

    // template - computed: true, optional: true, required: false
    private _template?: string; 
    public get template() {
        return this.getStringAttribute('template');
    }
    public set template(value: string) {
        this._template = value;
    }
    public resetTemplate() {
        this._template = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateInput() {
        return this._template;
    }
}
export interface KnowledgeBaseConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#template_configuration CcKnowledgeBase#template_configuration}
    */
    readonly templateConfiguration?: KbTemplateConfigurationProperty;
}
export class KnowledgeBaseConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._templateConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateConfiguration = this._templateConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._templateConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._templateConfiguration.internalValue = value.templateConfiguration;
        }
    }

    // template_configuration - computed: true, optional: true, required: false
    private _templateConfiguration = new KbTemplateConfigurationPropertyOutputReference(this, "template_configuration");
    public get templateConfiguration() {
        return this._templateConfiguration;
    }
    public putTemplateConfiguration(value: KbTemplateConfigurationProperty) {
        this._templateConfiguration.internalValue = value;
    }
    public resetTemplateConfiguration() {
        this._templateConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateConfigurationInput() {
        return this._templateConfiguration.internalValue;
    }
}
export interface AudioExtractionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#audio_extraction_status CcKnowledgeBase#audio_extraction_status}
    */
    readonly audioExtractionStatus?: string;
}
export class AudioExtractionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AudioExtractionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._audioExtractionStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.audioExtractionStatus = this._audioExtractionStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudioExtractionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._audioExtractionStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._audioExtractionStatus = value.audioExtractionStatus;
        }
    }

    // audio_extraction_status - computed: true, optional: true, required: false
    private _audioExtractionStatus?: string; 
    public get audioExtractionStatus() {
        return this.getStringAttribute('audio_extraction_status');
    }
    public set audioExtractionStatus(value: string) {
        this._audioExtractionStatus = value;
    }
    public resetAudioExtractionStatus() {
        this._audioExtractionStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audioExtractionStatusInput() {
        return this._audioExtractionStatus;
    }
}
export interface ImageExtractionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#image_extraction_status CcKnowledgeBase#image_extraction_status}
    */
    readonly imageExtractionStatus?: string;
}
export class ImageExtractionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageExtractionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._imageExtractionStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageExtractionStatus = this._imageExtractionStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageExtractionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._imageExtractionStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._imageExtractionStatus = value.imageExtractionStatus;
        }
    }

    // image_extraction_status - computed: true, optional: true, required: false
    private _imageExtractionStatus?: string; 
    public get imageExtractionStatus() {
        return this.getStringAttribute('image_extraction_status');
    }
    public set imageExtractionStatus(value: string) {
        this._imageExtractionStatus = value;
    }
    public resetImageExtractionStatus() {
        this._imageExtractionStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageExtractionStatusInput() {
        return this._imageExtractionStatus;
    }
}
export interface VideoExtractionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#video_extraction_status CcKnowledgeBase#video_extraction_status}
    */
    readonly videoExtractionStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#video_extraction_type CcKnowledgeBase#video_extraction_type}
    */
    readonly videoExtractionType?: string;
}
export class VideoExtractionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VideoExtractionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._videoExtractionStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.videoExtractionStatus = this._videoExtractionStatus;
        }
        if (this._videoExtractionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.videoExtractionType = this._videoExtractionType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VideoExtractionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._videoExtractionStatus = undefined;
            this._videoExtractionType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._videoExtractionStatus = value.videoExtractionStatus;
            this._videoExtractionType = value.videoExtractionType;
        }
    }

    // video_extraction_status - computed: true, optional: true, required: false
    private _videoExtractionStatus?: string; 
    public get videoExtractionStatus() {
        return this.getStringAttribute('video_extraction_status');
    }
    public set videoExtractionStatus(value: string) {
        this._videoExtractionStatus = value;
    }
    public resetVideoExtractionStatus() {
        this._videoExtractionStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get videoExtractionStatusInput() {
        return this._videoExtractionStatus;
    }

    // video_extraction_type - computed: true, optional: true, required: false
    private _videoExtractionType?: string; 
    public get videoExtractionType() {
        return this.getStringAttribute('video_extraction_type');
    }
    public set videoExtractionType(value: string) {
        this._videoExtractionType = value;
    }
    public resetVideoExtractionType() {
        this._videoExtractionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get videoExtractionTypeInput() {
        return this._videoExtractionType;
    }
}
export interface MediaExtractionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#audio_extraction_configuration CcKnowledgeBase#audio_extraction_configuration}
    */
    readonly audioExtractionConfiguration?: AudioExtractionConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#image_extraction_configuration CcKnowledgeBase#image_extraction_configuration}
    */
    readonly imageExtractionConfiguration?: ImageExtractionConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#video_extraction_configuration CcKnowledgeBase#video_extraction_configuration}
    */
    readonly videoExtractionConfiguration?: VideoExtractionConfigurationProperty;
}
export class MediaExtractionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MediaExtractionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._audioExtractionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.audioExtractionConfiguration = this._audioExtractionConfiguration?.internalValue;
        }
        if (this._imageExtractionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageExtractionConfiguration = this._imageExtractionConfiguration?.internalValue;
        }
        if (this._videoExtractionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.videoExtractionConfiguration = this._videoExtractionConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MediaExtractionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._audioExtractionConfiguration.internalValue = undefined;
            this._imageExtractionConfiguration.internalValue = undefined;
            this._videoExtractionConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._audioExtractionConfiguration.internalValue = value.audioExtractionConfiguration;
            this._imageExtractionConfiguration.internalValue = value.imageExtractionConfiguration;
            this._videoExtractionConfiguration.internalValue = value.videoExtractionConfiguration;
        }
    }

    // audio_extraction_configuration - computed: true, optional: true, required: false
    private _audioExtractionConfiguration = new AudioExtractionConfigurationPropertyOutputReference(this, "audio_extraction_configuration");
    public get audioExtractionConfiguration() {
        return this._audioExtractionConfiguration;
    }
    public putAudioExtractionConfiguration(value: AudioExtractionConfigurationProperty) {
        this._audioExtractionConfiguration.internalValue = value;
    }
    public resetAudioExtractionConfiguration() {
        this._audioExtractionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audioExtractionConfigurationInput() {
        return this._audioExtractionConfiguration.internalValue;
    }

    // image_extraction_configuration - computed: true, optional: true, required: false
    private _imageExtractionConfiguration = new ImageExtractionConfigurationPropertyOutputReference(this, "image_extraction_configuration");
    public get imageExtractionConfiguration() {
        return this._imageExtractionConfiguration;
    }
    public putImageExtractionConfiguration(value: ImageExtractionConfigurationProperty) {
        this._imageExtractionConfiguration.internalValue = value;
    }
    public resetImageExtractionConfiguration() {
        this._imageExtractionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageExtractionConfigurationInput() {
        return this._imageExtractionConfiguration.internalValue;
    }

    // video_extraction_configuration - computed: true, optional: true, required: false
    private _videoExtractionConfiguration = new VideoExtractionConfigurationPropertyOutputReference(this, "video_extraction_configuration");
    public get videoExtractionConfiguration() {
        return this._videoExtractionConfiguration;
    }
    public putVideoExtractionConfiguration(value: VideoExtractionConfigurationProperty) {
        this._videoExtractionConfiguration.internalValue = value;
    }
    public resetVideoExtractionConfiguration() {
        this._videoExtractionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get videoExtractionConfigurationInput() {
        return this._videoExtractionConfiguration.internalValue;
    }
}
export interface ResourcePermissionProperty {
    /**
    * <p>The IAM action to grant or revoke permissions on.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#actions CcKnowledgeBase#actions}
    */
    readonly actions?: string[];
    /**
    * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
    *             following:</p>
    *          <ul>
    *             <li>
    *                <p>The ARN of an Amazon Quick user or group associated with a data source or dataset. (This is common.)</p>
    *             </li>
    *             <li>
    *                <p>The ARN of an Amazon Quick user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
    *             </li>
    *             <li>
    *                <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
    *                     ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
    *                     (This is less common.) </p>
    *             </li>
    *          </ul>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#principal CcKnowledgeBase#principal}
    */
    readonly principal?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#resource CcKnowledgeBase#resource}
    */
    readonly resource?: string;
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
        if (this._resource !== undefined) {
            hasAnyValues = true;
            internalValueResult.resource = this._resource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourcePermissionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions = undefined;
            this._principal = undefined;
            this._resource = undefined;
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
            this._resource = value.resource;
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

    // resource - computed: true, optional: true, required: false
    private _resource?: string; 
    public get resource() {
        return this.getStringAttribute('resource');
    }
    public set resource(value: string) {
        this._resource = value;
    }
    public resetResource() {
        this._resource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceInput() {
        return this._resource;
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#key CcKnowledgeBase#key}
    */
    readonly key?: string;
    /**
    * <p>Tag value.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_knowledge_base#value CcKnowledgeBase#value}
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
