// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResponsePlanProps extends cdktn.TerraformMetaArguments {
    /**
    * The list of actions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#actions CcResponsePlan#actions}
    */
    readonly actions?: CcResponsePlan.ActionProperty[] | cdktn.IResolvable;
    /**
    * The chat channel configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#chat_channel CcResponsePlan#chat_channel}
    */
    readonly chatChannel?: CcResponsePlan.ChatChannelProperty;
    /**
    * The display name of the response plan.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#display_name CcResponsePlan#display_name}
    */
    readonly displayName?: string;
    /**
    * The list of engagements to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#engagements CcResponsePlan#engagements}
    */
    readonly engagements?: string[];
    /**
    * The incident template configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#incident_template CcResponsePlan#incident_template}
    */
    readonly incidentTemplate: CcResponsePlan.IncidentTemplateProperty;
    /**
    * The list of integrations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#integrations CcResponsePlan#integrations}
    */
    readonly integrations?: CcResponsePlan.IntegrationProperty[] | cdktn.IResolvable;
    /**
    * The name of the response plan.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#name CcResponsePlan#name}
    */
    readonly name: string;
    /**
    * The tags to apply to the response plan.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#tags CcResponsePlan#tags}
    */
    readonly tags?: CcResponsePlan.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan awscc_ssmincidents_response_plan}
*/
export class CcResponsePlan extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ssmincidents_response_plan";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResponsePlan resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResponsePlan to import
    * @param importFromId The id of the existing CcResponsePlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResponsePlan to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssmincidents_response_plan", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan awscc_ssmincidents_response_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResponsePlanProps
    */
    public constructor(scope: Construct, id: string, config: CcResponsePlanProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ssmincidents_response_plan',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._actions.internalValue = config.actions;
        this._chatChannel.internalValue = config.chatChannel;
        this._displayName = config.displayName;
        this._engagements = config.engagements;
        this._incidentTemplate.internalValue = config.incidentTemplate;
        this._integrations.internalValue = config.integrations;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // actions - computed: true, optional: true, required: false
    private _actions = new CcResponsePlan.ActionPropertyList(this, "actions", false);
    public get actions() {
        return this._actions;
    }
    public putActions(value: CcResponsePlan.ActionProperty[] | cdktn.IResolvable) {
        this._actions.internalValue = value;
    }
    public resetActions() {
        this._actions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // chat_channel - computed: true, optional: true, required: false
    private _chatChannel = new CcResponsePlan.ChatChannelPropertyOutputReference(this, "chat_channel");
    public get chatChannel() {
        return this._chatChannel;
    }
    public putChatChannel(value: CcResponsePlan.ChatChannelProperty) {
        this._chatChannel.internalValue = value;
    }
    public resetChatChannel() {
        this._chatChannel.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get chatChannelInput() {
        return this._chatChannel.internalValue;
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

    // engagements - computed: true, optional: true, required: false
    private _engagements?: string[]; 
    public get engagements() {
        return cdktn.Fn.tolist(this.getListAttribute('engagements'));
    }
    public set engagements(value: string[]) {
        this._engagements = value;
    }
    public resetEngagements() {
        this._engagements = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engagementsInput() {
        return this._engagements;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // incident_template - computed: false, optional: false, required: true
    private _incidentTemplate = new CcResponsePlan.IncidentTemplatePropertyOutputReference(this, "incident_template");
    public get incidentTemplate() {
        return this._incidentTemplate;
    }
    public putIncidentTemplate(value: CcResponsePlan.IncidentTemplateProperty) {
        this._incidentTemplate.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get incidentTemplateInput() {
        return this._incidentTemplate.internalValue;
    }

    // integrations - computed: true, optional: true, required: false
    private _integrations = new CcResponsePlan.IntegrationPropertyList(this, "integrations", false);
    public get integrations() {
        return this._integrations;
    }
    public putIntegrations(value: CcResponsePlan.IntegrationProperty[] | cdktn.IResolvable) {
        this._integrations.internalValue = value;
    }
    public resetIntegrations() {
        this._integrations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationsInput() {
        return this._integrations.internalValue;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcResponsePlan.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcResponsePlan.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            actions: cdktn.listMapper(ccResponsePlanActionPropertyToTerraform, false)(this._actions.internalValue),
            chat_channel: ccResponsePlanChatChannelPropertyToTerraform(this._chatChannel.internalValue),
            display_name: cdktn.stringToTerraform(this._displayName),
            engagements: cdktn.listMapper(cdktn.stringToTerraform, false)(this._engagements),
            incident_template: ccResponsePlanIncidentTemplatePropertyToTerraform(this._incidentTemplate.internalValue),
            integrations: cdktn.listMapper(ccResponsePlanIntegrationPropertyToTerraform, false)(this._integrations.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccResponsePlanTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            actions: {
                value: cdktn.listMapperHcl(ccResponsePlanActionPropertyToHclTerraform, false)(this._actions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcResponsePlan.ActionPropertyList",
            },
            chat_channel: {
                value: ccResponsePlanChatChannelPropertyToHclTerraform(this._chatChannel.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcResponsePlan.ChatChannelProperty",
            },
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engagements: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._engagements),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            incident_template: {
                value: ccResponsePlanIncidentTemplatePropertyToHclTerraform(this._incidentTemplate.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcResponsePlan.IncidentTemplateProperty",
            },
            integrations: {
                value: cdktn.listMapperHcl(ccResponsePlanIntegrationPropertyToHclTerraform, false)(this._integrations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcResponsePlan.IntegrationPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccResponsePlanTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcResponsePlan.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccResponsePlanDynamicSsmParameterValuePropertyToTerraform(struct?: CcResponsePlan.DynamicSsmParameterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        variable: cdktn.stringToTerraform(struct!.variable),
    }
}


export function ccResponsePlanDynamicSsmParameterValuePropertyToHclTerraform(struct?: CcResponsePlan.DynamicSsmParameterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        variable: {
            value: cdktn.stringToHclTerraform(struct!.variable),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponsePlanDynamicSsmParameterPropertyToTerraform(struct?: CcResponsePlan.DynamicSsmParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: ccResponsePlanDynamicSsmParameterValuePropertyToTerraform(struct!.value),
    }
}


export function ccResponsePlanDynamicSsmParameterPropertyToHclTerraform(struct?: CcResponsePlan.DynamicSsmParameterProperty | cdktn.IResolvable): any {
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
            value: ccResponsePlanDynamicSsmParameterValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamicSsmParameterValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponsePlanSsmParameterPropertyToTerraform(struct?: CcResponsePlan.SsmParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccResponsePlanSsmParameterPropertyToHclTerraform(struct?: CcResponsePlan.SsmParameterProperty | cdktn.IResolvable): any {
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
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponsePlanSsmAutomationPropertyToTerraform(struct?: CcResponsePlan.SsmAutomationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        document_name: cdktn.stringToTerraform(struct!.documentName),
        document_version: cdktn.stringToTerraform(struct!.documentVersion),
        dynamic_parameters: cdktn.listMapper(ccResponsePlanDynamicSsmParameterPropertyToTerraform, false)(struct!.dynamicParameters),
        parameters: cdktn.listMapper(ccResponsePlanSsmParameterPropertyToTerraform, false)(struct!.parameters),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        target_account: cdktn.stringToTerraform(struct!.targetAccount),
    }
}


export function ccResponsePlanSsmAutomationPropertyToHclTerraform(struct?: CcResponsePlan.SsmAutomationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        document_name: {
            value: cdktn.stringToHclTerraform(struct!.documentName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        document_version: {
            value: cdktn.stringToHclTerraform(struct!.documentVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dynamic_parameters: {
            value: cdktn.listMapperHcl(ccResponsePlanDynamicSsmParameterPropertyToHclTerraform, false)(struct!.dynamicParameters),
            isBlock: true,
            type: "set",
            storageClassType: "DynamicSsmParameterPropertyList",
        },
        parameters: {
            value: cdktn.listMapperHcl(ccResponsePlanSsmParameterPropertyToHclTerraform, false)(struct!.parameters),
            isBlock: true,
            type: "set",
            storageClassType: "SsmParameterPropertyList",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_account: {
            value: cdktn.stringToHclTerraform(struct!.targetAccount),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponsePlanActionPropertyToTerraform(struct?: CcResponsePlan.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ssm_automation: ccResponsePlanSsmAutomationPropertyToTerraform(struct!.ssmAutomation),
    }
}


export function ccResponsePlanActionPropertyToHclTerraform(struct?: CcResponsePlan.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ssm_automation: {
            value: ccResponsePlanSsmAutomationPropertyToHclTerraform(struct!.ssmAutomation),
            isBlock: true,
            type: "struct",
            storageClassType: "SsmAutomationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponsePlanChatChannelPropertyToTerraform(struct?: CcResponsePlan.ChatChannelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        chatbot_sns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.chatbotSns),
    }
}


export function ccResponsePlanChatChannelPropertyToHclTerraform(struct?: CcResponsePlan.ChatChannelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        chatbot_sns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.chatbotSns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponsePlanTagPropertyToTerraform(struct?: CcResponsePlan.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccResponsePlanTagPropertyToHclTerraform(struct?: CcResponsePlan.TagProperty | cdktn.IResolvable): any {
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


export function ccResponsePlanNotificationTargetItemPropertyToTerraform(struct?: CcResponsePlan.NotificationTargetItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sns_topic_arn: cdktn.stringToTerraform(struct!.snsTopicArn),
    }
}


export function ccResponsePlanNotificationTargetItemPropertyToHclTerraform(struct?: CcResponsePlan.NotificationTargetItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sns_topic_arn: {
            value: cdktn.stringToHclTerraform(struct!.snsTopicArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponsePlanIncidentTemplatePropertyToTerraform(struct?: CcResponsePlan.IncidentTemplateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dedupe_string: cdktn.stringToTerraform(struct!.dedupeString),
        impact: cdktn.numberToTerraform(struct!.impact),
        incident_tags: cdktn.listMapper(ccResponsePlanTagPropertyToTerraform, false)(struct!.incidentTags),
        notification_targets: cdktn.listMapper(ccResponsePlanNotificationTargetItemPropertyToTerraform, false)(struct!.notificationTargets),
        summary: cdktn.stringToTerraform(struct!.summary),
        title: cdktn.stringToTerraform(struct!.title),
    }
}


export function ccResponsePlanIncidentTemplatePropertyToHclTerraform(struct?: CcResponsePlan.IncidentTemplateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dedupe_string: {
            value: cdktn.stringToHclTerraform(struct!.dedupeString),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        impact: {
            value: cdktn.numberToHclTerraform(struct!.impact),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        incident_tags: {
            value: cdktn.listMapperHcl(ccResponsePlanTagPropertyToHclTerraform, false)(struct!.incidentTags),
            isBlock: true,
            type: "set",
            storageClassType: "TagPropertyList",
        },
        notification_targets: {
            value: cdktn.listMapperHcl(ccResponsePlanNotificationTargetItemPropertyToHclTerraform, false)(struct!.notificationTargets),
            isBlock: true,
            type: "list",
            storageClassType: "NotificationTargetItemPropertyList",
        },
        summary: {
            value: cdktn.stringToHclTerraform(struct!.summary),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        title: {
            value: cdktn.stringToHclTerraform(struct!.title),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponsePlanPagerDutyIncidentConfigurationPropertyToTerraform(struct?: CcResponsePlan.PagerDutyIncidentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        service_id: cdktn.stringToTerraform(struct!.serviceId),
    }
}


export function ccResponsePlanPagerDutyIncidentConfigurationPropertyToHclTerraform(struct?: CcResponsePlan.PagerDutyIncidentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        service_id: {
            value: cdktn.stringToHclTerraform(struct!.serviceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponsePlanPagerDutyConfigurationPropertyToTerraform(struct?: CcResponsePlan.PagerDutyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        pager_duty_incident_configuration: ccResponsePlanPagerDutyIncidentConfigurationPropertyToTerraform(struct!.pagerDutyIncidentConfiguration),
        secret_id: cdktn.stringToTerraform(struct!.secretId),
    }
}


export function ccResponsePlanPagerDutyConfigurationPropertyToHclTerraform(struct?: CcResponsePlan.PagerDutyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pager_duty_incident_configuration: {
            value: ccResponsePlanPagerDutyIncidentConfigurationPropertyToHclTerraform(struct!.pagerDutyIncidentConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "PagerDutyIncidentConfigurationProperty",
        },
        secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponsePlanIntegrationPropertyToTerraform(struct?: CcResponsePlan.IntegrationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pager_duty_configuration: ccResponsePlanPagerDutyConfigurationPropertyToTerraform(struct!.pagerDutyConfiguration),
    }
}


export function ccResponsePlanIntegrationPropertyToHclTerraform(struct?: CcResponsePlan.IntegrationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pager_duty_configuration: {
            value: ccResponsePlanPagerDutyConfigurationPropertyToHclTerraform(struct!.pagerDutyConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "PagerDutyConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponsePlanTagsPropertyToTerraform(struct?: CcResponsePlan.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccResponsePlanTagsPropertyToHclTerraform(struct?: CcResponsePlan.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcResponsePlan {
export interface DynamicSsmParameterValueProperty {
    /**
    * The variable types used as dynamic parameter value when starting the SSM automation document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#variable CcResponsePlan#variable}
    */
    readonly variable?: string;
}
export class DynamicSsmParameterValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DynamicSsmParameterValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._variable !== undefined) {
            hasAnyValues = true;
            internalValueResult.variable = this._variable;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynamicSsmParameterValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._variable = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._variable = value.variable;
        }
    }

    // variable - computed: true, optional: true, required: false
    private _variable?: string; 
    public get variable() {
        return this.getStringAttribute('variable');
    }
    public set variable(value: string) {
        this._variable = value;
    }
    public resetVariable() {
        this._variable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variableInput() {
        return this._variable;
    }
}
export interface DynamicSsmParameterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#key CcResponsePlan#key}
    */
    readonly key?: string;
    /**
    * Value of the dynamic parameter to set when starting the SSM automation document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#value CcResponsePlan#value}
    */
    readonly value?: DynamicSsmParameterValueProperty;
}
export class DynamicSsmParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DynamicSsmParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynamicSsmParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value.internalValue = value.value;
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
    private _value = new DynamicSsmParameterValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: DynamicSsmParameterValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}

export class DynamicSsmParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : DynamicSsmParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): DynamicSsmParameterPropertyOutputReference {
        return new DynamicSsmParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SsmParameterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#key CcResponsePlan#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#values CcResponsePlan#values}
    */
    readonly values?: string[];
}
export class SsmParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SsmParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SsmParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._values = value.values;
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

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class SsmParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : SsmParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): SsmParameterPropertyOutputReference {
        return new SsmParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SsmAutomationProperty {
    /**
    * The document name to use when starting the SSM automation document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#document_name CcResponsePlan#document_name}
    */
    readonly documentName?: string;
    /**
    * The version of the document to use when starting the SSM automation document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#document_version CcResponsePlan#document_version}
    */
    readonly documentVersion?: string;
    /**
    * The parameters with dynamic values to set when starting the SSM automation document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#dynamic_parameters CcResponsePlan#dynamic_parameters}
    */
    readonly dynamicParameters?: DynamicSsmParameterProperty[] | cdktn.IResolvable;
    /**
    * The parameters to set when starting the SSM automation document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#parameters CcResponsePlan#parameters}
    */
    readonly parameters?: SsmParameterProperty[] | cdktn.IResolvable;
    /**
    * The role ARN to use when starting the SSM automation document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#role_arn CcResponsePlan#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The account type to use when starting the SSM automation document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#target_account CcResponsePlan#target_account}
    */
    readonly targetAccount?: string;
}
export class SsmAutomationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SsmAutomationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._documentName !== undefined) {
            hasAnyValues = true;
            internalValueResult.documentName = this._documentName;
        }
        if (this._documentVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.documentVersion = this._documentVersion;
        }
        if (this._dynamicParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamicParameters = this._dynamicParameters?.internalValue;
        }
        if (this._parameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._targetAccount !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetAccount = this._targetAccount;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SsmAutomationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._documentName = undefined;
            this._documentVersion = undefined;
            this._dynamicParameters.internalValue = undefined;
            this._parameters.internalValue = undefined;
            this._roleArn = undefined;
            this._targetAccount = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._documentName = value.documentName;
            this._documentVersion = value.documentVersion;
            this._dynamicParameters.internalValue = value.dynamicParameters;
            this._parameters.internalValue = value.parameters;
            this._roleArn = value.roleArn;
            this._targetAccount = value.targetAccount;
        }
    }

    // document_name - computed: true, optional: true, required: false
    private _documentName?: string; 
    public get documentName() {
        return this.getStringAttribute('document_name');
    }
    public set documentName(value: string) {
        this._documentName = value;
    }
    public resetDocumentName() {
        this._documentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentNameInput() {
        return this._documentName;
    }

    // document_version - computed: true, optional: true, required: false
    private _documentVersion?: string; 
    public get documentVersion() {
        return this.getStringAttribute('document_version');
    }
    public set documentVersion(value: string) {
        this._documentVersion = value;
    }
    public resetDocumentVersion() {
        this._documentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentVersionInput() {
        return this._documentVersion;
    }

    // dynamic_parameters - computed: true, optional: true, required: false
    private _dynamicParameters = new DynamicSsmParameterPropertyList(this, "dynamic_parameters", true);
    public get dynamicParameters() {
        return this._dynamicParameters;
    }
    public putDynamicParameters(value: DynamicSsmParameterProperty[] | cdktn.IResolvable) {
        this._dynamicParameters.internalValue = value;
    }
    public resetDynamicParameters() {
        this._dynamicParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamicParametersInput() {
        return this._dynamicParameters.internalValue;
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters = new SsmParameterPropertyList(this, "parameters", true);
    public get parameters() {
        return this._parameters;
    }
    public putParameters(value: SsmParameterProperty[] | cdktn.IResolvable) {
        this._parameters.internalValue = value;
    }
    public resetParameters() {
        this._parameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters.internalValue;
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

    // target_account - computed: true, optional: true, required: false
    private _targetAccount?: string; 
    public get targetAccount() {
        return this.getStringAttribute('target_account');
    }
    public set targetAccount(value: string) {
        this._targetAccount = value;
    }
    public resetTargetAccount() {
        this._targetAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetAccountInput() {
        return this._targetAccount;
    }
}
export interface ActionProperty {
    /**
    * The configuration to use when starting the SSM automation document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#ssm_automation CcResponsePlan#ssm_automation}
    */
    readonly ssmAutomation?: SsmAutomationProperty;
}
export class ActionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ssmAutomation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ssmAutomation = this._ssmAutomation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ssmAutomation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ssmAutomation.internalValue = value.ssmAutomation;
        }
    }

    // ssm_automation - computed: true, optional: true, required: false
    private _ssmAutomation = new SsmAutomationPropertyOutputReference(this, "ssm_automation");
    public get ssmAutomation() {
        return this._ssmAutomation;
    }
    public putSsmAutomation(value: SsmAutomationProperty) {
        this._ssmAutomation.internalValue = value;
    }
    public resetSsmAutomation() {
        this._ssmAutomation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ssmAutomationInput() {
        return this._ssmAutomation.internalValue;
    }
}

export class ActionPropertyList extends cdktn.ComplexList {
    public internalValue? : ActionProperty[] | cdktn.IResolvable

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
    public get(index: number): ActionPropertyOutputReference {
        return new ActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ChatChannelProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#chatbot_sns CcResponsePlan#chatbot_sns}
    */
    readonly chatbotSns?: string[];
}
export class ChatChannelPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ChatChannelProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._chatbotSns !== undefined) {
            hasAnyValues = true;
            internalValueResult.chatbotSns = this._chatbotSns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ChatChannelProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._chatbotSns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._chatbotSns = value.chatbotSns;
        }
    }

    // chatbot_sns - computed: true, optional: true, required: false
    private _chatbotSns?: string[]; 
    public get chatbotSns() {
        return this.getListAttribute('chatbot_sns');
    }
    public set chatbotSns(value: string[]) {
        this._chatbotSns = value;
    }
    public resetChatbotSns() {
        this._chatbotSns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get chatbotSnsInput() {
        return this._chatbotSns;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#key CcResponsePlan#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#value CcResponsePlan#value}
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
export interface NotificationTargetItemProperty {
    /**
    * The ARN of the Chatbot SNS topic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#sns_topic_arn CcResponsePlan#sns_topic_arn}
    */
    readonly snsTopicArn?: string;
}
export class NotificationTargetItemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NotificationTargetItemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._snsTopicArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.snsTopicArn = this._snsTopicArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotificationTargetItemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._snsTopicArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._snsTopicArn = value.snsTopicArn;
        }
    }

    // sns_topic_arn - computed: true, optional: true, required: false
    private _snsTopicArn?: string; 
    public get snsTopicArn() {
        return this.getStringAttribute('sns_topic_arn');
    }
    public set snsTopicArn(value: string) {
        this._snsTopicArn = value;
    }
    public resetSnsTopicArn() {
        this._snsTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsTopicArnInput() {
        return this._snsTopicArn;
    }
}

export class NotificationTargetItemPropertyList extends cdktn.ComplexList {
    public internalValue? : NotificationTargetItemProperty[] | cdktn.IResolvable

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
    public get(index: number): NotificationTargetItemPropertyOutputReference {
        return new NotificationTargetItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IncidentTemplateProperty {
    /**
    * The deduplication string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#dedupe_string CcResponsePlan#dedupe_string}
    */
    readonly dedupeString?: string;
    /**
    * The impact value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#impact CcResponsePlan#impact}
    */
    readonly impact: number;
    /**
    * Tags that get applied to incidents created by the StartIncident API action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#incident_tags CcResponsePlan#incident_tags}
    */
    readonly incidentTags?: TagProperty[] | cdktn.IResolvable;
    /**
    * The list of notification targets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#notification_targets CcResponsePlan#notification_targets}
    */
    readonly notificationTargets?: NotificationTargetItemProperty[] | cdktn.IResolvable;
    /**
    * The summary string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#summary CcResponsePlan#summary}
    */
    readonly summary?: string;
    /**
    * The title string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#title CcResponsePlan#title}
    */
    readonly title: string;
}
export class IncidentTemplatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IncidentTemplateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dedupeString !== undefined) {
            hasAnyValues = true;
            internalValueResult.dedupeString = this._dedupeString;
        }
        if (this._impact !== undefined) {
            hasAnyValues = true;
            internalValueResult.impact = this._impact;
        }
        if (this._incidentTags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.incidentTags = this._incidentTags?.internalValue;
        }
        if (this._notificationTargets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationTargets = this._notificationTargets?.internalValue;
        }
        if (this._summary !== undefined) {
            hasAnyValues = true;
            internalValueResult.summary = this._summary;
        }
        if (this._title !== undefined) {
            hasAnyValues = true;
            internalValueResult.title = this._title;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IncidentTemplateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dedupeString = undefined;
            this._impact = undefined;
            this._incidentTags.internalValue = undefined;
            this._notificationTargets.internalValue = undefined;
            this._summary = undefined;
            this._title = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dedupeString = value.dedupeString;
            this._impact = value.impact;
            this._incidentTags.internalValue = value.incidentTags;
            this._notificationTargets.internalValue = value.notificationTargets;
            this._summary = value.summary;
            this._title = value.title;
        }
    }

    // dedupe_string - computed: true, optional: true, required: false
    private _dedupeString?: string; 
    public get dedupeString() {
        return this.getStringAttribute('dedupe_string');
    }
    public set dedupeString(value: string) {
        this._dedupeString = value;
    }
    public resetDedupeString() {
        this._dedupeString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dedupeStringInput() {
        return this._dedupeString;
    }

    // impact - computed: false, optional: false, required: true
    private _impact?: number; 
    public get impact() {
        return this.getNumberAttribute('impact');
    }
    public set impact(value: number) {
        this._impact = value;
    }
    // Temporarily expose input value. Use with caution.
    public get impactInput() {
        return this._impact;
    }

    // incident_tags - computed: true, optional: true, required: false
    private _incidentTags = new TagPropertyList(this, "incident_tags", true);
    public get incidentTags() {
        return this._incidentTags;
    }
    public putIncidentTags(value: TagProperty[] | cdktn.IResolvable) {
        this._incidentTags.internalValue = value;
    }
    public resetIncidentTags() {
        this._incidentTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get incidentTagsInput() {
        return this._incidentTags.internalValue;
    }

    // notification_targets - computed: true, optional: true, required: false
    private _notificationTargets = new NotificationTargetItemPropertyList(this, "notification_targets", false);
    public get notificationTargets() {
        return this._notificationTargets;
    }
    public putNotificationTargets(value: NotificationTargetItemProperty[] | cdktn.IResolvable) {
        this._notificationTargets.internalValue = value;
    }
    public resetNotificationTargets() {
        this._notificationTargets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationTargetsInput() {
        return this._notificationTargets.internalValue;
    }

    // summary - computed: true, optional: true, required: false
    private _summary?: string; 
    public get summary() {
        return this.getStringAttribute('summary');
    }
    public set summary(value: string) {
        this._summary = value;
    }
    public resetSummary() {
        this._summary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get summaryInput() {
        return this._summary;
    }

    // title - computed: false, optional: false, required: true
    private _title?: string; 
    public get title() {
        return this.getStringAttribute('title');
    }
    public set title(value: string) {
        this._title = value;
    }
    // Temporarily expose input value. Use with caution.
    public get titleInput() {
        return this._title;
    }
}
export interface PagerDutyIncidentConfigurationProperty {
    /**
    * The pagerDuty serviceId.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#service_id CcResponsePlan#service_id}
    */
    readonly serviceId?: string;
}
export class PagerDutyIncidentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PagerDutyIncidentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._serviceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceId = this._serviceId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PagerDutyIncidentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._serviceId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._serviceId = value.serviceId;
        }
    }

    // service_id - computed: true, optional: true, required: false
    private _serviceId?: string; 
    public get serviceId() {
        return this.getStringAttribute('service_id');
    }
    public set serviceId(value: string) {
        this._serviceId = value;
    }
    public resetServiceId() {
        this._serviceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceIdInput() {
        return this._serviceId;
    }
}
export interface PagerDutyConfigurationProperty {
    /**
    * The name of the pagerDuty configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#name CcResponsePlan#name}
    */
    readonly name?: string;
    /**
    * The pagerDuty incident configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#pager_duty_incident_configuration CcResponsePlan#pager_duty_incident_configuration}
    */
    readonly pagerDutyIncidentConfiguration?: PagerDutyIncidentConfigurationProperty;
    /**
    * The AWS secrets manager secretId storing the pagerDuty token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#secret_id CcResponsePlan#secret_id}
    */
    readonly secretId?: string;
}
export class PagerDutyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PagerDutyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._pagerDutyIncidentConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pagerDutyIncidentConfiguration = this._pagerDutyIncidentConfiguration?.internalValue;
        }
        if (this._secretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretId = this._secretId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PagerDutyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._pagerDutyIncidentConfiguration.internalValue = undefined;
            this._secretId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._pagerDutyIncidentConfiguration.internalValue = value.pagerDutyIncidentConfiguration;
            this._secretId = value.secretId;
        }
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

    // pager_duty_incident_configuration - computed: true, optional: true, required: false
    private _pagerDutyIncidentConfiguration = new PagerDutyIncidentConfigurationPropertyOutputReference(this, "pager_duty_incident_configuration");
    public get pagerDutyIncidentConfiguration() {
        return this._pagerDutyIncidentConfiguration;
    }
    public putPagerDutyIncidentConfiguration(value: PagerDutyIncidentConfigurationProperty) {
        this._pagerDutyIncidentConfiguration.internalValue = value;
    }
    public resetPagerDutyIncidentConfiguration() {
        this._pagerDutyIncidentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pagerDutyIncidentConfigurationInput() {
        return this._pagerDutyIncidentConfiguration.internalValue;
    }

    // secret_id - computed: true, optional: true, required: false
    private _secretId?: string; 
    public get secretId() {
        return this.getStringAttribute('secret_id');
    }
    public set secretId(value: string) {
        this._secretId = value;
    }
    public resetSecretId() {
        this._secretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretIdInput() {
        return this._secretId;
    }
}
export interface IntegrationProperty {
    /**
    * The pagerDuty configuration to use when starting the incident.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#pager_duty_configuration CcResponsePlan#pager_duty_configuration}
    */
    readonly pagerDutyConfiguration?: PagerDutyConfigurationProperty;
}
export class IntegrationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IntegrationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._pagerDutyConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pagerDutyConfiguration = this._pagerDutyConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntegrationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._pagerDutyConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._pagerDutyConfiguration.internalValue = value.pagerDutyConfiguration;
        }
    }

    // pager_duty_configuration - computed: true, optional: true, required: false
    private _pagerDutyConfiguration = new PagerDutyConfigurationPropertyOutputReference(this, "pager_duty_configuration");
    public get pagerDutyConfiguration() {
        return this._pagerDutyConfiguration;
    }
    public putPagerDutyConfiguration(value: PagerDutyConfigurationProperty) {
        this._pagerDutyConfiguration.internalValue = value;
    }
    public resetPagerDutyConfiguration() {
        this._pagerDutyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pagerDutyConfigurationInput() {
        return this._pagerDutyConfiguration.internalValue;
    }
}

export class IntegrationPropertyList extends cdktn.ComplexList {
    public internalValue? : IntegrationProperty[] | cdktn.IResolvable

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
    public get(index: number): IntegrationPropertyOutputReference {
        return new IntegrationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#key CcResponsePlan#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmincidents_response_plan#value CcResponsePlan#value}
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
