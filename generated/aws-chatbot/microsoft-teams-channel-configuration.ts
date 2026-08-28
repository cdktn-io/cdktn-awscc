// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_microsoft_teams_channel_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMicrosoftTeamsChannelConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_microsoft_teams_channel_configuration#configuration_name CcMicrosoftTeamsChannelConfiguration#configuration_name}
    */
    readonly configurationName: string;
    /**
    * ARNs of Custom Actions to associate with notifications in the provided chat channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_microsoft_teams_channel_configuration#customization_resource_arns CcMicrosoftTeamsChannelConfiguration#customization_resource_arns}
    */
    readonly customizationResourceArns?: string[];
    /**
    * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_microsoft_teams_channel_configuration#guardrail_policies CcMicrosoftTeamsChannelConfiguration#guardrail_policies}
    */
    readonly guardrailPolicies?: string[];
    /**
    * The ARN of the IAM role that defines the permissions for AWS Chatbot
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_microsoft_teams_channel_configuration#iam_role_arn CcMicrosoftTeamsChannelConfiguration#iam_role_arn}
    */
    readonly iamRoleArn: string;
    /**
    * Specifies the logging level for this configuration:ERROR,INFO or NONE. This property affects the log entries pushed to Amazon CloudWatch logs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_microsoft_teams_channel_configuration#logging_level CcMicrosoftTeamsChannelConfiguration#logging_level}
    */
    readonly loggingLevel?: string;
    /**
    * ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_microsoft_teams_channel_configuration#sns_topic_arns CcMicrosoftTeamsChannelConfiguration#sns_topic_arns}
    */
    readonly snsTopicArns?: string[];
    /**
    * The tags to add to the configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_microsoft_teams_channel_configuration#tags CcMicrosoftTeamsChannelConfiguration#tags}
    */
    readonly tags?: CcMicrosoftTeamsChannelConfiguration.TagProperty[] | cdktn.IResolvable;
    /**
    * The id of the Microsoft Teams team
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_microsoft_teams_channel_configuration#team_id CcMicrosoftTeamsChannelConfiguration#team_id}
    */
    readonly teamId: string;
    /**
    * The id of the Microsoft Teams channel
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_microsoft_teams_channel_configuration#teams_channel_id CcMicrosoftTeamsChannelConfiguration#teams_channel_id}
    */
    readonly teamsChannelId: string;
    /**
    * The name of the Microsoft Teams channel
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_microsoft_teams_channel_configuration#teams_channel_name CcMicrosoftTeamsChannelConfiguration#teams_channel_name}
    */
    readonly teamsChannelName?: string;
    /**
    * The id of the Microsoft Teams tenant
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_microsoft_teams_channel_configuration#teams_tenant_id CcMicrosoftTeamsChannelConfiguration#teams_tenant_id}
    */
    readonly teamsTenantId: string;
    /**
    * Enables use of a user role requirement in your chat configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_microsoft_teams_channel_configuration#user_role_required CcMicrosoftTeamsChannelConfiguration#user_role_required}
    */
    readonly userRoleRequired?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_microsoft_teams_channel_configuration awscc_chatbot_microsoft_teams_channel_configuration}
*/
export class CcMicrosoftTeamsChannelConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_chatbot_microsoft_teams_channel_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMicrosoftTeamsChannelConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMicrosoftTeamsChannelConfiguration to import
    * @param importFromId The id of the existing CcMicrosoftTeamsChannelConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_microsoft_teams_channel_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMicrosoftTeamsChannelConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_chatbot_microsoft_teams_channel_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_microsoft_teams_channel_configuration awscc_chatbot_microsoft_teams_channel_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMicrosoftTeamsChannelConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcMicrosoftTeamsChannelConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_chatbot_microsoft_teams_channel_configuration',
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
        this._configurationName = config.configurationName;
        this._customizationResourceArns = config.customizationResourceArns;
        this._guardrailPolicies = config.guardrailPolicies;
        this._iamRoleArn = config.iamRoleArn;
        this._loggingLevel = config.loggingLevel;
        this._snsTopicArns = config.snsTopicArns;
        this._tags.internalValue = config.tags;
        this._teamId = config.teamId;
        this._teamsChannelId = config.teamsChannelId;
        this._teamsChannelName = config.teamsChannelName;
        this._teamsTenantId = config.teamsTenantId;
        this._userRoleRequired = config.userRoleRequired;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // configuration_name - computed: false, optional: false, required: true
    private _configurationName?: string; 
    public get configurationName() {
        return this.getStringAttribute('configuration_name');
    }
    public set configurationName(value: string) {
        this._configurationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationNameInput() {
        return this._configurationName;
    }

    // customization_resource_arns - computed: true, optional: true, required: false
    private _customizationResourceArns?: string[]; 
    public get customizationResourceArns() {
        return this.getListAttribute('customization_resource_arns');
    }
    public set customizationResourceArns(value: string[]) {
        this._customizationResourceArns = value;
    }
    public resetCustomizationResourceArns() {
        this._customizationResourceArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customizationResourceArnsInput() {
        return this._customizationResourceArns;
    }

    // guardrail_policies - computed: true, optional: true, required: false
    private _guardrailPolicies?: string[]; 
    public get guardrailPolicies() {
        return this.getListAttribute('guardrail_policies');
    }
    public set guardrailPolicies(value: string[]) {
        this._guardrailPolicies = value;
    }
    public resetGuardrailPolicies() {
        this._guardrailPolicies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get guardrailPoliciesInput() {
        return this._guardrailPolicies;
    }

    // iam_role_arn - computed: false, optional: false, required: true
    private _iamRoleArn?: string; 
    public get iamRoleArn() {
        return this.getStringAttribute('iam_role_arn');
    }
    public set iamRoleArn(value: string) {
        this._iamRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleArnInput() {
        return this._iamRoleArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // logging_level - computed: true, optional: true, required: false
    private _loggingLevel?: string; 
    public get loggingLevel() {
        return this.getStringAttribute('logging_level');
    }
    public set loggingLevel(value: string) {
        this._loggingLevel = value;
    }
    public resetLoggingLevel() {
        this._loggingLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingLevelInput() {
        return this._loggingLevel;
    }

    // sns_topic_arns - computed: true, optional: true, required: false
    private _snsTopicArns?: string[]; 
    public get snsTopicArns() {
        return this.getListAttribute('sns_topic_arns');
    }
    public set snsTopicArns(value: string[]) {
        this._snsTopicArns = value;
    }
    public resetSnsTopicArns() {
        this._snsTopicArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsTopicArnsInput() {
        return this._snsTopicArns;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcMicrosoftTeamsChannelConfiguration.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcMicrosoftTeamsChannelConfiguration.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // team_id - computed: false, optional: false, required: true
    private _teamId?: string; 
    public get teamId() {
        return this.getStringAttribute('team_id');
    }
    public set teamId(value: string) {
        this._teamId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get teamIdInput() {
        return this._teamId;
    }

    // teams_channel_id - computed: false, optional: false, required: true
    private _teamsChannelId?: string; 
    public get teamsChannelId() {
        return this.getStringAttribute('teams_channel_id');
    }
    public set teamsChannelId(value: string) {
        this._teamsChannelId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get teamsChannelIdInput() {
        return this._teamsChannelId;
    }

    // teams_channel_name - computed: true, optional: true, required: false
    private _teamsChannelName?: string; 
    public get teamsChannelName() {
        return this.getStringAttribute('teams_channel_name');
    }
    public set teamsChannelName(value: string) {
        this._teamsChannelName = value;
    }
    public resetTeamsChannelName() {
        this._teamsChannelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get teamsChannelNameInput() {
        return this._teamsChannelName;
    }

    // teams_tenant_id - computed: false, optional: false, required: true
    private _teamsTenantId?: string; 
    public get teamsTenantId() {
        return this.getStringAttribute('teams_tenant_id');
    }
    public set teamsTenantId(value: string) {
        this._teamsTenantId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get teamsTenantIdInput() {
        return this._teamsTenantId;
    }

    // user_role_required - computed: true, optional: true, required: false
    private _userRoleRequired?: boolean | cdktn.IResolvable; 
    public get userRoleRequired() {
        return this.getBooleanAttribute('user_role_required');
    }
    public set userRoleRequired(value: boolean | cdktn.IResolvable) {
        this._userRoleRequired = value;
    }
    public resetUserRoleRequired() {
        this._userRoleRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userRoleRequiredInput() {
        return this._userRoleRequired;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            configuration_name: cdktn.stringToTerraform(this._configurationName),
            customization_resource_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._customizationResourceArns),
            guardrail_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(this._guardrailPolicies),
            iam_role_arn: cdktn.stringToTerraform(this._iamRoleArn),
            logging_level: cdktn.stringToTerraform(this._loggingLevel),
            sns_topic_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._snsTopicArns),
            tags: cdktn.listMapper(ccMicrosoftTeamsChannelConfigurationTagPropertyToTerraform, false)(this._tags.internalValue),
            team_id: cdktn.stringToTerraform(this._teamId),
            teams_channel_id: cdktn.stringToTerraform(this._teamsChannelId),
            teams_channel_name: cdktn.stringToTerraform(this._teamsChannelName),
            teams_tenant_id: cdktn.stringToTerraform(this._teamsTenantId),
            user_role_required: cdktn.booleanToTerraform(this._userRoleRequired),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            configuration_name: {
                value: cdktn.stringToHclTerraform(this._configurationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            customization_resource_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._customizationResourceArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            guardrail_policies: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._guardrailPolicies),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            iam_role_arn: {
                value: cdktn.stringToHclTerraform(this._iamRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logging_level: {
                value: cdktn.stringToHclTerraform(this._loggingLevel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sns_topic_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._snsTopicArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccMicrosoftTeamsChannelConfigurationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMicrosoftTeamsChannelConfiguration.TagPropertyList",
            },
            team_id: {
                value: cdktn.stringToHclTerraform(this._teamId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            teams_channel_id: {
                value: cdktn.stringToHclTerraform(this._teamsChannelId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            teams_channel_name: {
                value: cdktn.stringToHclTerraform(this._teamsChannelName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            teams_tenant_id: {
                value: cdktn.stringToHclTerraform(this._teamsTenantId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_role_required: {
                value: cdktn.booleanToHclTerraform(this._userRoleRequired),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMicrosoftTeamsChannelConfigurationTagPropertyToTerraform(struct?: CcMicrosoftTeamsChannelConfiguration.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMicrosoftTeamsChannelConfigurationTagPropertyToHclTerraform(struct?: CcMicrosoftTeamsChannelConfiguration.TagProperty | cdktn.IResolvable): any {
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


export namespace CcMicrosoftTeamsChannelConfiguration {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_microsoft_teams_channel_configuration#key CcMicrosoftTeamsChannelConfiguration#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_microsoft_teams_channel_configuration#value CcMicrosoftTeamsChannelConfiguration#value}
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
