// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWorkteamProps extends cdktn.TerraformMetaArguments {
    /**
    * A description of the work team.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#description CcWorkteam#description}
    */
    readonly description: string;
    /**
    * A list of MemberDefinition objects that contains objects that identify the workers that make up the work team.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#member_definitions CcWorkteam#member_definitions}
    */
    readonly memberDefinitions: CcWorkteam.MemberDefinitionProperty[] | cdktn.IResolvable;
    /**
    * Configures SNS notifications of available or expiring work items for work teams.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#notification_configuration CcWorkteam#notification_configuration}
    */
    readonly notificationConfiguration?: CcWorkteam.NotificationConfigurationProperty;
    /**
    * An array of key-value pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#tags CcWorkteam#tags}
    */
    readonly tags?: CcWorkteam.TagProperty[] | cdktn.IResolvable;
    /**
    * The name of the Workforce
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#workforce_name CcWorkteam#workforce_name}
    */
    readonly workforceName?: string;
    /**
    * The name of the work team.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#workteam_name CcWorkteam#workteam_name}
    */
    readonly workteamName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam awscc_sagemaker_workteam}
*/
export class CcWorkteam extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_workteam";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWorkteam resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWorkteam to import
    * @param importFromId The id of the existing CcWorkteam that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWorkteam to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_workteam", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam awscc_sagemaker_workteam} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWorkteamProps
    */
    public constructor(scope: Construct, id: string, config: CcWorkteamProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_workteam',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._description = config.description;
        this._memberDefinitions.internalValue = config.memberDefinitions;
        this._notificationConfiguration.internalValue = config.notificationConfiguration;
        this._tags.internalValue = config.tags;
        this._workforceName = config.workforceName;
        this._workteamName = config.workteamName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // description - computed: false, optional: false, required: true
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // member_definitions - computed: false, optional: false, required: true
    private _memberDefinitions = new CcWorkteam.MemberDefinitionPropertyList(this, "member_definitions", false);
    public get memberDefinitions() {
        return this._memberDefinitions;
    }
    public putMemberDefinitions(value: CcWorkteam.MemberDefinitionProperty[] | cdktn.IResolvable) {
        this._memberDefinitions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get memberDefinitionsInput() {
        return this._memberDefinitions.internalValue;
    }

    // notification_configuration - computed: true, optional: true, required: false
    private _notificationConfiguration = new CcWorkteam.NotificationConfigurationPropertyOutputReference(this, "notification_configuration");
    public get notificationConfiguration() {
        return this._notificationConfiguration;
    }
    public putNotificationConfiguration(value: CcWorkteam.NotificationConfigurationProperty) {
        this._notificationConfiguration.internalValue = value;
    }
    public resetNotificationConfiguration() {
        this._notificationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationConfigurationInput() {
        return this._notificationConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcWorkteam.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcWorkteam.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // workforce_name - computed: true, optional: true, required: false
    private _workforceName?: string; 
    public get workforceName() {
        return this.getStringAttribute('workforce_name');
    }
    public set workforceName(value: string) {
        this._workforceName = value;
    }
    public resetWorkforceName() {
        this._workforceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workforceNameInput() {
        return this._workforceName;
    }

    // workteam_arn - computed: true, optional: false, required: false
    public get workteamArn() {
        return this.getStringAttribute('workteam_arn');
    }

    // workteam_name - computed: true, optional: true, required: false
    private _workteamName?: string; 
    public get workteamName() {
        return this.getStringAttribute('workteam_name');
    }
    public set workteamName(value: string) {
        this._workteamName = value;
    }
    public resetWorkteamName() {
        this._workteamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workteamNameInput() {
        return this._workteamName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            member_definitions: cdktn.listMapper(ccWorkteamMemberDefinitionPropertyToTerraform, false)(this._memberDefinitions.internalValue),
            notification_configuration: ccWorkteamNotificationConfigurationPropertyToTerraform(this._notificationConfiguration.internalValue),
            tags: cdktn.listMapper(ccWorkteamTagPropertyToTerraform, false)(this._tags.internalValue),
            workforce_name: cdktn.stringToTerraform(this._workforceName),
            workteam_name: cdktn.stringToTerraform(this._workteamName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            member_definitions: {
                value: cdktn.listMapperHcl(ccWorkteamMemberDefinitionPropertyToHclTerraform, false)(this._memberDefinitions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcWorkteam.MemberDefinitionPropertyList",
            },
            notification_configuration: {
                value: ccWorkteamNotificationConfigurationPropertyToHclTerraform(this._notificationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWorkteam.NotificationConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccWorkteamTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcWorkteam.TagPropertyList",
            },
            workforce_name: {
                value: cdktn.stringToHclTerraform(this._workforceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            workteam_name: {
                value: cdktn.stringToHclTerraform(this._workteamName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccWorkteamCognitoMemberDefinitionPropertyToTerraform(struct?: CcWorkteam.CognitoMemberDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cognito_client_id: cdktn.stringToTerraform(struct!.cognitoClientId),
        cognito_user_group: cdktn.stringToTerraform(struct!.cognitoUserGroup),
        cognito_user_pool: cdktn.stringToTerraform(struct!.cognitoUserPool),
    }
}


export function ccWorkteamCognitoMemberDefinitionPropertyToHclTerraform(struct?: CcWorkteam.CognitoMemberDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cognito_client_id: {
            value: cdktn.stringToHclTerraform(struct!.cognitoClientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cognito_user_group: {
            value: cdktn.stringToHclTerraform(struct!.cognitoUserGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cognito_user_pool: {
            value: cdktn.stringToHclTerraform(struct!.cognitoUserPool),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkteamOidcMemberDefinitionPropertyToTerraform(struct?: CcWorkteam.OidcMemberDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        oidc_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.oidcGroups),
    }
}


export function ccWorkteamOidcMemberDefinitionPropertyToHclTerraform(struct?: CcWorkteam.OidcMemberDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        oidc_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.oidcGroups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkteamMemberDefinitionPropertyToTerraform(struct?: CcWorkteam.MemberDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cognito_member_definition: ccWorkteamCognitoMemberDefinitionPropertyToTerraform(struct!.cognitoMemberDefinition),
        oidc_member_definition: ccWorkteamOidcMemberDefinitionPropertyToTerraform(struct!.oidcMemberDefinition),
    }
}


export function ccWorkteamMemberDefinitionPropertyToHclTerraform(struct?: CcWorkteam.MemberDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cognito_member_definition: {
            value: ccWorkteamCognitoMemberDefinitionPropertyToHclTerraform(struct!.cognitoMemberDefinition),
            isBlock: true,
            type: "struct",
            storageClassType: "CognitoMemberDefinitionProperty",
        },
        oidc_member_definition: {
            value: ccWorkteamOidcMemberDefinitionPropertyToHclTerraform(struct!.oidcMemberDefinition),
            isBlock: true,
            type: "struct",
            storageClassType: "OidcMemberDefinitionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkteamNotificationConfigurationPropertyToTerraform(struct?: CcWorkteam.NotificationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        notification_topic_arn: cdktn.stringToTerraform(struct!.notificationTopicArn),
    }
}


export function ccWorkteamNotificationConfigurationPropertyToHclTerraform(struct?: CcWorkteam.NotificationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        notification_topic_arn: {
            value: cdktn.stringToHclTerraform(struct!.notificationTopicArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkteamTagPropertyToTerraform(struct?: CcWorkteam.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWorkteamTagPropertyToHclTerraform(struct?: CcWorkteam.TagProperty | cdktn.IResolvable): any {
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


export namespace CcWorkteam {
export interface CognitoMemberDefinitionProperty {
    /**
    * An identifier for an application client. You must create the app client ID using Amazon Cognito.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#cognito_client_id CcWorkteam#cognito_client_id}
    */
    readonly cognitoClientId?: string;
    /**
    * An identifier for a user group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#cognito_user_group CcWorkteam#cognito_user_group}
    */
    readonly cognitoUserGroup?: string;
    /**
    * An identifier for a user pool. The user pool must be in the same region as the service that you are calling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#cognito_user_pool CcWorkteam#cognito_user_pool}
    */
    readonly cognitoUserPool?: string;
}
export class CognitoMemberDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CognitoMemberDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cognitoClientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.cognitoClientId = this._cognitoClientId;
        }
        if (this._cognitoUserGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.cognitoUserGroup = this._cognitoUserGroup;
        }
        if (this._cognitoUserPool !== undefined) {
            hasAnyValues = true;
            internalValueResult.cognitoUserPool = this._cognitoUserPool;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CognitoMemberDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cognitoClientId = undefined;
            this._cognitoUserGroup = undefined;
            this._cognitoUserPool = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cognitoClientId = value.cognitoClientId;
            this._cognitoUserGroup = value.cognitoUserGroup;
            this._cognitoUserPool = value.cognitoUserPool;
        }
    }

    // cognito_client_id - computed: true, optional: true, required: false
    private _cognitoClientId?: string; 
    public get cognitoClientId() {
        return this.getStringAttribute('cognito_client_id');
    }
    public set cognitoClientId(value: string) {
        this._cognitoClientId = value;
    }
    public resetCognitoClientId() {
        this._cognitoClientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cognitoClientIdInput() {
        return this._cognitoClientId;
    }

    // cognito_user_group - computed: true, optional: true, required: false
    private _cognitoUserGroup?: string; 
    public get cognitoUserGroup() {
        return this.getStringAttribute('cognito_user_group');
    }
    public set cognitoUserGroup(value: string) {
        this._cognitoUserGroup = value;
    }
    public resetCognitoUserGroup() {
        this._cognitoUserGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cognitoUserGroupInput() {
        return this._cognitoUserGroup;
    }

    // cognito_user_pool - computed: true, optional: true, required: false
    private _cognitoUserPool?: string; 
    public get cognitoUserPool() {
        return this.getStringAttribute('cognito_user_pool');
    }
    public set cognitoUserPool(value: string) {
        this._cognitoUserPool = value;
    }
    public resetCognitoUserPool() {
        this._cognitoUserPool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cognitoUserPoolInput() {
        return this._cognitoUserPool;
    }
}
export interface OidcMemberDefinitionProperty {
    /**
    * A list of OIDC group names whose members will be part of this workteam
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#oidc_groups CcWorkteam#oidc_groups}
    */
    readonly oidcGroups?: string[];
}
export class OidcMemberDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OidcMemberDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._oidcGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.oidcGroups = this._oidcGroups;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OidcMemberDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._oidcGroups = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._oidcGroups = value.oidcGroups;
        }
    }

    // oidc_groups - computed: true, optional: true, required: false
    private _oidcGroups?: string[]; 
    public get oidcGroups() {
        return this.getListAttribute('oidc_groups');
    }
    public set oidcGroups(value: string[]) {
        this._oidcGroups = value;
    }
    public resetOidcGroups() {
        this._oidcGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oidcGroupsInput() {
        return this._oidcGroups;
    }
}
export interface MemberDefinitionProperty {
    /**
    * The Amazon Cognito user group that is part of the work team
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#cognito_member_definition CcWorkteam#cognito_member_definition}
    */
    readonly cognitoMemberDefinition?: CognitoMemberDefinitionProperty;
    /**
    * A list user groups that exist in your OIDC Identity Provider (IdP).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#oidc_member_definition CcWorkteam#oidc_member_definition}
    */
    readonly oidcMemberDefinition?: OidcMemberDefinitionProperty;
}
export class MemberDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MemberDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cognitoMemberDefinition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cognitoMemberDefinition = this._cognitoMemberDefinition?.internalValue;
        }
        if (this._oidcMemberDefinition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oidcMemberDefinition = this._oidcMemberDefinition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemberDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cognitoMemberDefinition.internalValue = undefined;
            this._oidcMemberDefinition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cognitoMemberDefinition.internalValue = value.cognitoMemberDefinition;
            this._oidcMemberDefinition.internalValue = value.oidcMemberDefinition;
        }
    }

    // cognito_member_definition - computed: true, optional: true, required: false
    private _cognitoMemberDefinition = new CognitoMemberDefinitionPropertyOutputReference(this, "cognito_member_definition");
    public get cognitoMemberDefinition() {
        return this._cognitoMemberDefinition;
    }
    public putCognitoMemberDefinition(value: CognitoMemberDefinitionProperty) {
        this._cognitoMemberDefinition.internalValue = value;
    }
    public resetCognitoMemberDefinition() {
        this._cognitoMemberDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cognitoMemberDefinitionInput() {
        return this._cognitoMemberDefinition.internalValue;
    }

    // oidc_member_definition - computed: true, optional: true, required: false
    private _oidcMemberDefinition = new OidcMemberDefinitionPropertyOutputReference(this, "oidc_member_definition");
    public get oidcMemberDefinition() {
        return this._oidcMemberDefinition;
    }
    public putOidcMemberDefinition(value: OidcMemberDefinitionProperty) {
        this._oidcMemberDefinition.internalValue = value;
    }
    public resetOidcMemberDefinition() {
        this._oidcMemberDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oidcMemberDefinitionInput() {
        return this._oidcMemberDefinition.internalValue;
    }
}

export class MemberDefinitionPropertyList extends cdktn.ComplexList {
    public internalValue? : MemberDefinitionProperty[] | cdktn.IResolvable

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
    public get(index: number): MemberDefinitionPropertyOutputReference {
        return new MemberDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NotificationConfigurationProperty {
    /**
    * The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications should be published.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#notification_topic_arn CcWorkteam#notification_topic_arn}
    */
    readonly notificationTopicArn?: string;
}
export class NotificationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NotificationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._notificationTopicArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationTopicArn = this._notificationTopicArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotificationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._notificationTopicArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._notificationTopicArn = value.notificationTopicArn;
        }
    }

    // notification_topic_arn - computed: true, optional: true, required: false
    private _notificationTopicArn?: string; 
    public get notificationTopicArn() {
        return this.getStringAttribute('notification_topic_arn');
    }
    public set notificationTopicArn(value: string) {
        this._notificationTopicArn = value;
    }
    public resetNotificationTopicArn() {
        this._notificationTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationTopicArnInput() {
        return this._notificationTopicArn;
    }
}
export interface TagProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#key CcWorkteam#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#value CcWorkteam#value}
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
