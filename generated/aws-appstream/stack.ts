// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStackProps extends cdktn.TerraformMetaArguments {
    /**
    * The list of virtual private cloud (VPC) interface endpoint objects. Users of the stack can connect to AppStream 2.0 only through the specified endpoints.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#access_endpoints CcStack#access_endpoints}
    */
    readonly accessEndpoints?: CcStack.AccessEndpointProperty[] | cdktn.IResolvable;
    /**
    * The configuration for agent access on the stack. If specified, agent access is enabled for the stack.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#agent_access_config CcStack#agent_access_config}
    */
    readonly agentAccessConfig?: CcStack.AgentAccessConfigProperty;
    /**
    * The persistent application settings for users of the stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#application_settings CcStack#application_settings}
    */
    readonly applicationSettings?: CcStack.ApplicationSettingsProperty;
    /**
    * The stack attributes to delete.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#attributes_to_delete CcStack#attributes_to_delete}
    */
    readonly attributesToDelete?: string[];
    /**
    * The content redirection settings for the stack. These settings control URL redirection between the streaming session and the local device.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#content_redirection CcStack#content_redirection}
    */
    readonly contentRedirection?: CcStack.ContentRedirectionProperty;
    /**
    * This parameter has been deprecated. Deletes the storage connectors currently enabled for the stack.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#delete_storage_connectors CcStack#delete_storage_connectors}
    */
    readonly deleteStorageConnectors?: boolean | cdktn.IResolvable;
    /**
    * The description to display.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#description CcStack#description}
    */
    readonly description?: string;
    /**
    * The stack name to display.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#display_name CcStack#display_name}
    */
    readonly displayName?: string;
    /**
    * The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#embed_host_domains CcStack#embed_host_domains}
    */
    readonly embedHostDomains?: string[];
    /**
    * The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#feedback_url CcStack#feedback_url}
    */
    readonly feedbackUrl?: string;
    /**
    * The name of the stack.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#name CcStack#name}
    */
    readonly name?: string;
    /**
    * The URL that users are redirected to after their streaming session ends.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#redirect_url CcStack#redirect_url}
    */
    readonly redirectUrl?: string;
    /**
    * The storage connectors to enable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#storage_connectors CcStack#storage_connectors}
    */
    readonly storageConnectors?: CcStack.StorageConnectorProperty[] | cdktn.IResolvable;
    /**
    * The streaming protocol that you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#streaming_experience_settings CcStack#streaming_experience_settings}
    */
    readonly streamingExperienceSettings?: CcStack.StreamingExperienceSettingsProperty;
    /**
    * An array of key-value pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#tags CcStack#tags}
    */
    readonly tags?: CcStack.TagProperty[] | cdktn.IResolvable;
    /**
    * The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#user_settings CcStack#user_settings}
    */
    readonly userSettings?: CcStack.UserSettingProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack awscc_appstream_stack}
*/
export class CcStack extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appstream_stack";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStack resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStack to import
    * @param importFromId The id of the existing CcStack that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStack to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appstream_stack", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack awscc_appstream_stack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStackProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcStackProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_appstream_stack',
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
        this._accessEndpoints.internalValue = config.accessEndpoints;
        this._agentAccessConfig.internalValue = config.agentAccessConfig;
        this._applicationSettings.internalValue = config.applicationSettings;
        this._attributesToDelete = config.attributesToDelete;
        this._contentRedirection.internalValue = config.contentRedirection;
        this._deleteStorageConnectors = config.deleteStorageConnectors;
        this._description = config.description;
        this._displayName = config.displayName;
        this._embedHostDomains = config.embedHostDomains;
        this._feedbackUrl = config.feedbackUrl;
        this._name = config.name;
        this._redirectUrl = config.redirectUrl;
        this._storageConnectors.internalValue = config.storageConnectors;
        this._streamingExperienceSettings.internalValue = config.streamingExperienceSettings;
        this._tags.internalValue = config.tags;
        this._userSettings.internalValue = config.userSettings;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_endpoints - computed: true, optional: true, required: false
    private _accessEndpoints = new CcStack.AccessEndpointPropertyList(this, "access_endpoints", false);
    public get accessEndpoints() {
        return this._accessEndpoints;
    }
    public putAccessEndpoints(value: CcStack.AccessEndpointProperty[] | cdktn.IResolvable) {
        this._accessEndpoints.internalValue = value;
    }
    public resetAccessEndpoints() {
        this._accessEndpoints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessEndpointsInput() {
        return this._accessEndpoints.internalValue;
    }

    // agent_access_config - computed: true, optional: true, required: false
    private _agentAccessConfig = new CcStack.AgentAccessConfigPropertyOutputReference(this, "agent_access_config");
    public get agentAccessConfig() {
        return this._agentAccessConfig;
    }
    public putAgentAccessConfig(value: CcStack.AgentAccessConfigProperty) {
        this._agentAccessConfig.internalValue = value;
    }
    public resetAgentAccessConfig() {
        this._agentAccessConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentAccessConfigInput() {
        return this._agentAccessConfig.internalValue;
    }

    // application_settings - computed: true, optional: true, required: false
    private _applicationSettings = new CcStack.ApplicationSettingsPropertyOutputReference(this, "application_settings");
    public get applicationSettings() {
        return this._applicationSettings;
    }
    public putApplicationSettings(value: CcStack.ApplicationSettingsProperty) {
        this._applicationSettings.internalValue = value;
    }
    public resetApplicationSettings() {
        this._applicationSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationSettingsInput() {
        return this._applicationSettings.internalValue;
    }

    // attributes_to_delete - computed: true, optional: true, required: false
    private _attributesToDelete?: string[]; 
    public get attributesToDelete() {
        return this.getListAttribute('attributes_to_delete');
    }
    public set attributesToDelete(value: string[]) {
        this._attributesToDelete = value;
    }
    public resetAttributesToDelete() {
        this._attributesToDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesToDeleteInput() {
        return this._attributesToDelete;
    }

    // content_redirection - computed: true, optional: true, required: false
    private _contentRedirection = new CcStack.ContentRedirectionPropertyOutputReference(this, "content_redirection");
    public get contentRedirection() {
        return this._contentRedirection;
    }
    public putContentRedirection(value: CcStack.ContentRedirectionProperty) {
        this._contentRedirection.internalValue = value;
    }
    public resetContentRedirection() {
        this._contentRedirection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentRedirectionInput() {
        return this._contentRedirection.internalValue;
    }

    // delete_storage_connectors - computed: true, optional: true, required: false
    private _deleteStorageConnectors?: boolean | cdktn.IResolvable; 
    public get deleteStorageConnectors() {
        return this.getBooleanAttribute('delete_storage_connectors');
    }
    public set deleteStorageConnectors(value: boolean | cdktn.IResolvable) {
        this._deleteStorageConnectors = value;
    }
    public resetDeleteStorageConnectors() {
        this._deleteStorageConnectors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteStorageConnectorsInput() {
        return this._deleteStorageConnectors;
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

    // display_name - computed: true, optional: true, required: false
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    public resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // embed_host_domains - computed: true, optional: true, required: false
    private _embedHostDomains?: string[]; 
    public get embedHostDomains() {
        return this.getListAttribute('embed_host_domains');
    }
    public set embedHostDomains(value: string[]) {
        this._embedHostDomains = value;
    }
    public resetEmbedHostDomains() {
        this._embedHostDomains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get embedHostDomainsInput() {
        return this._embedHostDomains;
    }

    // feedback_url - computed: true, optional: true, required: false
    private _feedbackUrl?: string; 
    public get feedbackUrl() {
        return this.getStringAttribute('feedback_url');
    }
    public set feedbackUrl(value: string) {
        this._feedbackUrl = value;
    }
    public resetFeedbackUrl() {
        this._feedbackUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get feedbackUrlInput() {
        return this._feedbackUrl;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // redirect_url - computed: true, optional: true, required: false
    private _redirectUrl?: string; 
    public get redirectUrl() {
        return this.getStringAttribute('redirect_url');
    }
    public set redirectUrl(value: string) {
        this._redirectUrl = value;
    }
    public resetRedirectUrl() {
        this._redirectUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redirectUrlInput() {
        return this._redirectUrl;
    }

    // storage_connectors - computed: true, optional: true, required: false
    private _storageConnectors = new CcStack.StorageConnectorPropertyList(this, "storage_connectors", false);
    public get storageConnectors() {
        return this._storageConnectors;
    }
    public putStorageConnectors(value: CcStack.StorageConnectorProperty[] | cdktn.IResolvable) {
        this._storageConnectors.internalValue = value;
    }
    public resetStorageConnectors() {
        this._storageConnectors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageConnectorsInput() {
        return this._storageConnectors.internalValue;
    }

    // streaming_experience_settings - computed: true, optional: true, required: false
    private _streamingExperienceSettings = new CcStack.StreamingExperienceSettingsPropertyOutputReference(this, "streaming_experience_settings");
    public get streamingExperienceSettings() {
        return this._streamingExperienceSettings;
    }
    public putStreamingExperienceSettings(value: CcStack.StreamingExperienceSettingsProperty) {
        this._streamingExperienceSettings.internalValue = value;
    }
    public resetStreamingExperienceSettings() {
        this._streamingExperienceSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamingExperienceSettingsInput() {
        return this._streamingExperienceSettings.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcStack.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcStack.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // user_settings - computed: true, optional: true, required: false
    private _userSettings = new CcStack.UserSettingPropertyList(this, "user_settings", false);
    public get userSettings() {
        return this._userSettings;
    }
    public putUserSettings(value: CcStack.UserSettingProperty[] | cdktn.IResolvable) {
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
            access_endpoints: cdktn.listMapper(ccStackAccessEndpointPropertyToTerraform, false)(this._accessEndpoints.internalValue),
            agent_access_config: ccStackAgentAccessConfigPropertyToTerraform(this._agentAccessConfig.internalValue),
            application_settings: ccStackApplicationSettingsPropertyToTerraform(this._applicationSettings.internalValue),
            attributes_to_delete: cdktn.listMapper(cdktn.stringToTerraform, false)(this._attributesToDelete),
            content_redirection: ccStackContentRedirectionPropertyToTerraform(this._contentRedirection.internalValue),
            delete_storage_connectors: cdktn.booleanToTerraform(this._deleteStorageConnectors),
            description: cdktn.stringToTerraform(this._description),
            display_name: cdktn.stringToTerraform(this._displayName),
            embed_host_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(this._embedHostDomains),
            feedback_url: cdktn.stringToTerraform(this._feedbackUrl),
            name: cdktn.stringToTerraform(this._name),
            redirect_url: cdktn.stringToTerraform(this._redirectUrl),
            storage_connectors: cdktn.listMapper(ccStackStorageConnectorPropertyToTerraform, false)(this._storageConnectors.internalValue),
            streaming_experience_settings: ccStackStreamingExperienceSettingsPropertyToTerraform(this._streamingExperienceSettings.internalValue),
            tags: cdktn.listMapper(ccStackTagPropertyToTerraform, false)(this._tags.internalValue),
            user_settings: cdktn.listMapper(ccStackUserSettingPropertyToTerraform, false)(this._userSettings.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_endpoints: {
                value: cdktn.listMapperHcl(ccStackAccessEndpointPropertyToHclTerraform, false)(this._accessEndpoints.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcStack.AccessEndpointPropertyList",
            },
            agent_access_config: {
                value: ccStackAgentAccessConfigPropertyToHclTerraform(this._agentAccessConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStack.AgentAccessConfigProperty",
            },
            application_settings: {
                value: ccStackApplicationSettingsPropertyToHclTerraform(this._applicationSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStack.ApplicationSettingsProperty",
            },
            attributes_to_delete: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._attributesToDelete),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            content_redirection: {
                value: ccStackContentRedirectionPropertyToHclTerraform(this._contentRedirection.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStack.ContentRedirectionProperty",
            },
            delete_storage_connectors: {
                value: cdktn.booleanToHclTerraform(this._deleteStorageConnectors),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
            embed_host_domains: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._embedHostDomains),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            feedback_url: {
                value: cdktn.stringToHclTerraform(this._feedbackUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            redirect_url: {
                value: cdktn.stringToHclTerraform(this._redirectUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            storage_connectors: {
                value: cdktn.listMapperHcl(ccStackStorageConnectorPropertyToHclTerraform, false)(this._storageConnectors.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcStack.StorageConnectorPropertyList",
            },
            streaming_experience_settings: {
                value: ccStackStreamingExperienceSettingsPropertyToHclTerraform(this._streamingExperienceSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStack.StreamingExperienceSettingsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccStackTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcStack.TagPropertyList",
            },
            user_settings: {
                value: cdktn.listMapperHcl(ccStackUserSettingPropertyToHclTerraform, false)(this._userSettings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcStack.UserSettingPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccStackAccessEndpointPropertyToTerraform(struct?: CcStack.AccessEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint_type: cdktn.stringToTerraform(struct!.endpointType),
        vpce_id: cdktn.stringToTerraform(struct!.vpceId),
    }
}


export function ccStackAccessEndpointPropertyToHclTerraform(struct?: CcStack.AccessEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        endpoint_type: {
            value: cdktn.stringToHclTerraform(struct!.endpointType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpce_id: {
            value: cdktn.stringToHclTerraform(struct!.vpceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStackAgentAccessSettingPropertyToTerraform(struct?: CcStack.AgentAccessSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agent_action: cdktn.stringToTerraform(struct!.agentAction),
        permission: cdktn.stringToTerraform(struct!.permission),
    }
}


export function ccStackAgentAccessSettingPropertyToHclTerraform(struct?: CcStack.AgentAccessSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agent_action: {
            value: cdktn.stringToHclTerraform(struct!.agentAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permission: {
            value: cdktn.stringToHclTerraform(struct!.permission),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStackAgentAccessConfigPropertyToTerraform(struct?: CcStack.AgentAccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_bucket_arn: cdktn.stringToTerraform(struct!.s3BucketArn),
        screen_image_format: cdktn.stringToTerraform(struct!.screenImageFormat),
        screen_resolution: cdktn.stringToTerraform(struct!.screenResolution),
        screenshots_upload_enabled: cdktn.booleanToTerraform(struct!.screenshotsUploadEnabled),
        settings: cdktn.listMapper(ccStackAgentAccessSettingPropertyToTerraform, false)(struct!.settings),
        user_control_mode: cdktn.stringToTerraform(struct!.userControlMode),
    }
}


export function ccStackAgentAccessConfigPropertyToHclTerraform(struct?: CcStack.AgentAccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.s3BucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        screen_image_format: {
            value: cdktn.stringToHclTerraform(struct!.screenImageFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        screen_resolution: {
            value: cdktn.stringToHclTerraform(struct!.screenResolution),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        screenshots_upload_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.screenshotsUploadEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        settings: {
            value: cdktn.listMapperHcl(ccStackAgentAccessSettingPropertyToHclTerraform, false)(struct!.settings),
            isBlock: true,
            type: "list",
            storageClassType: "AgentAccessSettingPropertyList",
        },
        user_control_mode: {
            value: cdktn.stringToHclTerraform(struct!.userControlMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStackApplicationSettingsPropertyToTerraform(struct?: CcStack.ApplicationSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        settings_group: cdktn.stringToTerraform(struct!.settingsGroup),
    }
}


export function ccStackApplicationSettingsPropertyToHclTerraform(struct?: CcStack.ApplicationSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        settings_group: {
            value: cdktn.stringToHclTerraform(struct!.settingsGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStackUrlRedirectionConfigPropertyToTerraform(struct?: CcStack.UrlRedirectionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_urls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedUrls),
        denied_urls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.deniedUrls),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccStackUrlRedirectionConfigPropertyToHclTerraform(struct?: CcStack.UrlRedirectionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_urls: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedUrls),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        denied_urls: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.deniedUrls),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStackContentRedirectionPropertyToTerraform(struct?: CcStack.ContentRedirectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        host_to_client: ccStackUrlRedirectionConfigPropertyToTerraform(struct!.hostToClient),
    }
}


export function ccStackContentRedirectionPropertyToHclTerraform(struct?: CcStack.ContentRedirectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        host_to_client: {
            value: ccStackUrlRedirectionConfigPropertyToHclTerraform(struct!.hostToClient),
            isBlock: true,
            type: "struct",
            storageClassType: "UrlRedirectionConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStackStorageConnectorPropertyToTerraform(struct?: CcStack.StorageConnectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connector_type: cdktn.stringToTerraform(struct!.connectorType),
        domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.domains),
        resource_identifier: cdktn.stringToTerraform(struct!.resourceIdentifier),
    }
}


export function ccStackStorageConnectorPropertyToHclTerraform(struct?: CcStack.StorageConnectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connector_type: {
            value: cdktn.stringToHclTerraform(struct!.connectorType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        domains: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.domains),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        resource_identifier: {
            value: cdktn.stringToHclTerraform(struct!.resourceIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStackStreamingExperienceSettingsPropertyToTerraform(struct?: CcStack.StreamingExperienceSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        preferred_protocol: cdktn.stringToTerraform(struct!.preferredProtocol),
    }
}


export function ccStackStreamingExperienceSettingsPropertyToHclTerraform(struct?: CcStack.StreamingExperienceSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        preferred_protocol: {
            value: cdktn.stringToHclTerraform(struct!.preferredProtocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStackTagPropertyToTerraform(struct?: CcStack.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStackTagPropertyToHclTerraform(struct?: CcStack.TagProperty | cdktn.IResolvable): any {
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


export function ccStackUserSettingPropertyToTerraform(struct?: CcStack.UserSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
        maximum_length: cdktn.numberToTerraform(struct!.maximumLength),
        permission: cdktn.stringToTerraform(struct!.permission),
    }
}


export function ccStackUserSettingPropertyToHclTerraform(struct?: CcStack.UserSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action: {
            value: cdktn.stringToHclTerraform(struct!.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        maximum_length: {
            value: cdktn.numberToHclTerraform(struct!.maximumLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        permission: {
            value: cdktn.stringToHclTerraform(struct!.permission),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcStack {
export interface AccessEndpointProperty {
    /**
    * The type of interface endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#endpoint_type CcStack#endpoint_type}
    */
    readonly endpointType?: string;
    /**
    * The identifier (ID) of the VPC in which the interface endpoint is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#vpce_id CcStack#vpce_id}
    */
    readonly vpceId?: string;
}
export class AccessEndpointPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AccessEndpointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpointType !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointType = this._endpointType;
        }
        if (this._vpceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpceId = this._vpceId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessEndpointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpointType = undefined;
            this._vpceId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpointType = value.endpointType;
            this._vpceId = value.vpceId;
        }
    }

    // endpoint_type - computed: true, optional: true, required: false
    private _endpointType?: string; 
    public get endpointType() {
        return this.getStringAttribute('endpoint_type');
    }
    public set endpointType(value: string) {
        this._endpointType = value;
    }
    public resetEndpointType() {
        this._endpointType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointTypeInput() {
        return this._endpointType;
    }

    // vpce_id - computed: true, optional: true, required: false
    private _vpceId?: string; 
    public get vpceId() {
        return this.getStringAttribute('vpce_id');
    }
    public set vpceId(value: string) {
        this._vpceId = value;
    }
    public resetVpceId() {
        this._vpceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpceIdInput() {
        return this._vpceId;
    }
}

export class AccessEndpointPropertyList extends cdktn.ComplexList {
    public internalValue? : AccessEndpointProperty[] | cdktn.IResolvable

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
    public get(index: number): AccessEndpointPropertyOutputReference {
        return new AccessEndpointPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AgentAccessSettingProperty {
    /**
    * The agent action to configure. Valid values are COMPUTER_VISION, COMPUTER_INPUT, and FORWARD_MCP_TOOLS. COMPUTER_VISION allows agents to take screenshots of the desktop. COMPUTER_INPUT allows agents to click, type, and scroll on the desktop and requires COMPUTER_VISION to also be enabled. FORWARD_MCP_TOOLS allows agents to interact with applications and the desktop operating system through direct MCP calls rather than using computer use tools. Forwards MCP tools configured on the WorkSpaces application session to the agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#agent_action CcStack#agent_action}
    */
    readonly agentAction?: string;
    /**
    * Whether the agent action is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#permission CcStack#permission}
    */
    readonly permission?: string;
}
export class AgentAccessSettingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AgentAccessSettingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentAction = this._agentAction;
        }
        if (this._permission !== undefined) {
            hasAnyValues = true;
            internalValueResult.permission = this._permission;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AgentAccessSettingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentAction = undefined;
            this._permission = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentAction = value.agentAction;
            this._permission = value.permission;
        }
    }

    // agent_action - computed: true, optional: true, required: false
    private _agentAction?: string; 
    public get agentAction() {
        return this.getStringAttribute('agent_action');
    }
    public set agentAction(value: string) {
        this._agentAction = value;
    }
    public resetAgentAction() {
        this._agentAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentActionInput() {
        return this._agentAction;
    }

    // permission - computed: true, optional: true, required: false
    private _permission?: string; 
    public get permission() {
        return this.getStringAttribute('permission');
    }
    public set permission(value: string) {
        this._permission = value;
    }
    public resetPermission() {
        this._permission = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionInput() {
        return this._permission;
    }
}

export class AgentAccessSettingPropertyList extends cdktn.ComplexList {
    public internalValue? : AgentAccessSettingProperty[] | cdktn.IResolvable

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
    public get(index: number): AgentAccessSettingPropertyOutputReference {
        return new AgentAccessSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AgentAccessConfigProperty {
    /**
    * The Amazon Resource Name (ARN) of the Amazon S3 bucket where agent screenshots are stored. Required when ScreenshotsUploadEnabled is true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#s3_bucket_arn CcStack#s3_bucket_arn}
    */
    readonly s3BucketArn?: string;
    /**
    * The image format for agent screen captures.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#screen_image_format CcStack#screen_image_format}
    */
    readonly screenImageFormat?: string;
    /**
    * The screen resolution for the agent streaming environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#screen_resolution CcStack#screen_resolution}
    */
    readonly screenResolution?: string;
    /**
    * Indicates whether screenshot uploads to Amazon S3 are enabled for agent sessions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#screenshots_upload_enabled CcStack#screenshots_upload_enabled}
    */
    readonly screenshotsUploadEnabled?: boolean | cdktn.IResolvable;
    /**
    * The list of agent access settings that define permissions for each agent action. You must specify at least one setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#settings CcStack#settings}
    */
    readonly settings?: AgentAccessSettingProperty[] | cdktn.IResolvable;
    /**
    * The user control mode for agent sessions. This setting determines how users can interact with agent sessions. Valid values are VIEW_ONLY, VIEW_STOP, and DISABLED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#user_control_mode CcStack#user_control_mode}
    */
    readonly userControlMode?: string;
}
export class AgentAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AgentAccessConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3BucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketArn = this._s3BucketArn;
        }
        if (this._screenImageFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.screenImageFormat = this._screenImageFormat;
        }
        if (this._screenResolution !== undefined) {
            hasAnyValues = true;
            internalValueResult.screenResolution = this._screenResolution;
        }
        if (this._screenshotsUploadEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.screenshotsUploadEnabled = this._screenshotsUploadEnabled;
        }
        if (this._settings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.settings = this._settings?.internalValue;
        }
        if (this._userControlMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.userControlMode = this._userControlMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AgentAccessConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3BucketArn = undefined;
            this._screenImageFormat = undefined;
            this._screenResolution = undefined;
            this._screenshotsUploadEnabled = undefined;
            this._settings.internalValue = undefined;
            this._userControlMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3BucketArn = value.s3BucketArn;
            this._screenImageFormat = value.screenImageFormat;
            this._screenResolution = value.screenResolution;
            this._screenshotsUploadEnabled = value.screenshotsUploadEnabled;
            this._settings.internalValue = value.settings;
            this._userControlMode = value.userControlMode;
        }
    }

    // s3_bucket_arn - computed: true, optional: true, required: false
    private _s3BucketArn?: string; 
    public get s3BucketArn() {
        return this.getStringAttribute('s3_bucket_arn');
    }
    public set s3BucketArn(value: string) {
        this._s3BucketArn = value;
    }
    public resetS3BucketArn() {
        this._s3BucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketArnInput() {
        return this._s3BucketArn;
    }

    // screen_image_format - computed: true, optional: true, required: false
    private _screenImageFormat?: string; 
    public get screenImageFormat() {
        return this.getStringAttribute('screen_image_format');
    }
    public set screenImageFormat(value: string) {
        this._screenImageFormat = value;
    }
    public resetScreenImageFormat() {
        this._screenImageFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get screenImageFormatInput() {
        return this._screenImageFormat;
    }

    // screen_resolution - computed: true, optional: true, required: false
    private _screenResolution?: string; 
    public get screenResolution() {
        return this.getStringAttribute('screen_resolution');
    }
    public set screenResolution(value: string) {
        this._screenResolution = value;
    }
    public resetScreenResolution() {
        this._screenResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get screenResolutionInput() {
        return this._screenResolution;
    }

    // screenshots_upload_enabled - computed: true, optional: true, required: false
    private _screenshotsUploadEnabled?: boolean | cdktn.IResolvable; 
    public get screenshotsUploadEnabled() {
        return this.getBooleanAttribute('screenshots_upload_enabled');
    }
    public set screenshotsUploadEnabled(value: boolean | cdktn.IResolvable) {
        this._screenshotsUploadEnabled = value;
    }
    public resetScreenshotsUploadEnabled() {
        this._screenshotsUploadEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get screenshotsUploadEnabledInput() {
        return this._screenshotsUploadEnabled;
    }

    // settings - computed: true, optional: true, required: false
    private _settings = new AgentAccessSettingPropertyList(this, "settings", false);
    public get settings() {
        return this._settings;
    }
    public putSettings(value: AgentAccessSettingProperty[] | cdktn.IResolvable) {
        this._settings.internalValue = value;
    }
    public resetSettings() {
        this._settings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get settingsInput() {
        return this._settings.internalValue;
    }

    // user_control_mode - computed: true, optional: true, required: false
    private _userControlMode?: string; 
    public get userControlMode() {
        return this.getStringAttribute('user_control_mode');
    }
    public set userControlMode(value: string) {
        this._userControlMode = value;
    }
    public resetUserControlMode() {
        this._userControlMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userControlModeInput() {
        return this._userControlMode;
    }
}
export interface ApplicationSettingsProperty {
    /**
    * Enables or disables persistent application settings for users during their streaming sessions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#enabled CcStack#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The path prefix for the S3 bucket where users' persistent application settings are stored. You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#settings_group CcStack#settings_group}
    */
    readonly settingsGroup?: string;
}
export class ApplicationSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApplicationSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._settingsGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.settingsGroup = this._settingsGroup;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApplicationSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._settingsGroup = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._settingsGroup = value.settingsGroup;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // settings_group - computed: true, optional: true, required: false
    private _settingsGroup?: string; 
    public get settingsGroup() {
        return this.getStringAttribute('settings_group');
    }
    public set settingsGroup(value: string) {
        this._settingsGroup = value;
    }
    public resetSettingsGroup() {
        this._settingsGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get settingsGroupInput() {
        return this._settingsGroup;
    }
}
export interface UrlRedirectionConfigProperty {
    /**
    * The URLs that are allowed for redirection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#allowed_urls CcStack#allowed_urls}
    */
    readonly allowedUrls?: string[];
    /**
    * The URLs that are denied for redirection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#denied_urls CcStack#denied_urls}
    */
    readonly deniedUrls?: string[];
    /**
    * Specifies whether URL redirection is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#enabled CcStack#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class UrlRedirectionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UrlRedirectionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedUrls !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedUrls = this._allowedUrls;
        }
        if (this._deniedUrls !== undefined) {
            hasAnyValues = true;
            internalValueResult.deniedUrls = this._deniedUrls;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UrlRedirectionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedUrls = undefined;
            this._deniedUrls = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedUrls = value.allowedUrls;
            this._deniedUrls = value.deniedUrls;
            this._enabled = value.enabled;
        }
    }

    // allowed_urls - computed: true, optional: true, required: false
    private _allowedUrls?: string[]; 
    public get allowedUrls() {
        return this.getListAttribute('allowed_urls');
    }
    public set allowedUrls(value: string[]) {
        this._allowedUrls = value;
    }
    public resetAllowedUrls() {
        this._allowedUrls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedUrlsInput() {
        return this._allowedUrls;
    }

    // denied_urls - computed: true, optional: true, required: false
    private _deniedUrls?: string[]; 
    public get deniedUrls() {
        return this.getListAttribute('denied_urls');
    }
    public set deniedUrls(value: string[]) {
        this._deniedUrls = value;
    }
    public resetDeniedUrls() {
        this._deniedUrls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deniedUrlsInput() {
        return this._deniedUrls;
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface ContentRedirectionProperty {
    /**
    * The URL redirection configuration from the streaming session host to the client.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#host_to_client CcStack#host_to_client}
    */
    readonly hostToClient?: UrlRedirectionConfigProperty;
}
export class ContentRedirectionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContentRedirectionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hostToClient?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostToClient = this._hostToClient?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentRedirectionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hostToClient.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hostToClient.internalValue = value.hostToClient;
        }
    }

    // host_to_client - computed: true, optional: true, required: false
    private _hostToClient = new UrlRedirectionConfigPropertyOutputReference(this, "host_to_client");
    public get hostToClient() {
        return this._hostToClient;
    }
    public putHostToClient(value: UrlRedirectionConfigProperty) {
        this._hostToClient.internalValue = value;
    }
    public resetHostToClient() {
        this._hostToClient.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostToClientInput() {
        return this._hostToClient.internalValue;
    }
}
export interface StorageConnectorProperty {
    /**
    * The type of storage connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#connector_type CcStack#connector_type}
    */
    readonly connectorType?: string;
    /**
    * The names of the domains for the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#domains CcStack#domains}
    */
    readonly domains?: string[];
    /**
    * The ARN of the storage connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#resource_identifier CcStack#resource_identifier}
    */
    readonly resourceIdentifier?: string;
}
export class StorageConnectorPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StorageConnectorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectorType !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectorType = this._connectorType;
        }
        if (this._domains !== undefined) {
            hasAnyValues = true;
            internalValueResult.domains = this._domains;
        }
        if (this._resourceIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceIdentifier = this._resourceIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageConnectorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectorType = undefined;
            this._domains = undefined;
            this._resourceIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectorType = value.connectorType;
            this._domains = value.domains;
            this._resourceIdentifier = value.resourceIdentifier;
        }
    }

    // connector_type - computed: true, optional: true, required: false
    private _connectorType?: string; 
    public get connectorType() {
        return this.getStringAttribute('connector_type');
    }
    public set connectorType(value: string) {
        this._connectorType = value;
    }
    public resetConnectorType() {
        this._connectorType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorTypeInput() {
        return this._connectorType;
    }

    // domains - computed: true, optional: true, required: false
    private _domains?: string[]; 
    public get domains() {
        return this.getListAttribute('domains');
    }
    public set domains(value: string[]) {
        this._domains = value;
    }
    public resetDomains() {
        this._domains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainsInput() {
        return this._domains;
    }

    // resource_identifier - computed: true, optional: true, required: false
    private _resourceIdentifier?: string; 
    public get resourceIdentifier() {
        return this.getStringAttribute('resource_identifier');
    }
    public set resourceIdentifier(value: string) {
        this._resourceIdentifier = value;
    }
    public resetResourceIdentifier() {
        this._resourceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdentifierInput() {
        return this._resourceIdentifier;
    }
}

export class StorageConnectorPropertyList extends cdktn.ComplexList {
    public internalValue? : StorageConnectorProperty[] | cdktn.IResolvable

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
    public get(index: number): StorageConnectorPropertyOutputReference {
        return new StorageConnectorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StreamingExperienceSettingsProperty {
    /**
    * The preferred protocol that you want to use while streaming your application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#preferred_protocol CcStack#preferred_protocol}
    */
    readonly preferredProtocol?: string;
}
export class StreamingExperienceSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StreamingExperienceSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._preferredProtocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.preferredProtocol = this._preferredProtocol;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StreamingExperienceSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._preferredProtocol = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._preferredProtocol = value.preferredProtocol;
        }
    }

    // preferred_protocol - computed: true, optional: true, required: false
    private _preferredProtocol?: string; 
    public get preferredProtocol() {
        return this.getStringAttribute('preferred_protocol');
    }
    public set preferredProtocol(value: string) {
        this._preferredProtocol = value;
    }
    public resetPreferredProtocol() {
        this._preferredProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredProtocolInput() {
        return this._preferredProtocol;
    }
}
export interface TagProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#key CcStack#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#value CcStack#value}
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
export interface UserSettingProperty {
    /**
    * The action that is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#action CcStack#action}
    */
    readonly action?: string;
    /**
    * Specifies the number of characters that can be copied by end users from the local device to the remote session, and to the local device from the remote session. This can be specified only for the CLIPBOARD_COPY_FROM_LOCAL_DEVICE and CLIPBOARD_COPY_TO_LOCAL_DEVICE actions. This defaults to 20,971,520 (20 MB) when unspecified and the permission is ENABLED. This can't be specified when the permission is DISABLED. The value can be between 1 and 20,971,520 (20 MB).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#maximum_length CcStack#maximum_length}
    */
    readonly maximumLength?: number;
    /**
    * Indicates whether the action is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack#permission CcStack#permission}
    */
    readonly permission?: string;
}
export class UserSettingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): UserSettingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._maximumLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumLength = this._maximumLength;
        }
        if (this._permission !== undefined) {
            hasAnyValues = true;
            internalValueResult.permission = this._permission;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserSettingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._maximumLength = undefined;
            this._permission = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._maximumLength = value.maximumLength;
            this._permission = value.permission;
        }
    }

    // action - computed: true, optional: true, required: false
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    public resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }

    // maximum_length - computed: true, optional: true, required: false
    private _maximumLength?: number; 
    public get maximumLength() {
        return this.getNumberAttribute('maximum_length');
    }
    public set maximumLength(value: number) {
        this._maximumLength = value;
    }
    public resetMaximumLength() {
        this._maximumLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumLengthInput() {
        return this._maximumLength;
    }

    // permission - computed: true, optional: true, required: false
    private _permission?: string; 
    public get permission() {
        return this.getStringAttribute('permission');
    }
    public set permission(value: string) {
        this._permission = value;
    }
    public resetPermission() {
        this._permission = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionInput() {
        return this._permission;
    }
}

export class UserSettingPropertyList extends cdktn.ComplexList {
    public internalValue? : UserSettingProperty[] | cdktn.IResolvable

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
    public get(index: number): UserSettingPropertyOutputReference {
        return new UserSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
