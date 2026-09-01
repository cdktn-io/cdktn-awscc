// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAIAgentProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#assistant_id CcAIAgent#assistant_id}
    */
    readonly assistantId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#configuration CcAIAgent#configuration}
    */
    readonly configuration: CcAIAgent.AIAgentConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#description CcAIAgent#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#name CcAIAgent#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#tags CcAIAgent#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#type CcAIAgent#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent awscc_wisdom_ai_agent}
*/
export class CcAIAgent extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_wisdom_ai_agent";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAIAgent resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAIAgent to import
    * @param importFromId The id of the existing CcAIAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAIAgent to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_ai_agent", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent awscc_wisdom_ai_agent} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAIAgentProps
    */
    public constructor(scope: Construct, id: string, config: CcAIAgentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_wisdom_ai_agent',
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
        this._assistantId = config.assistantId;
        this._configuration.internalValue = config.configuration;
        this._description = config.description;
        this._name = config.name;
        this._tags = config.tags;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ai_agent_arn - computed: true, optional: false, required: false
    public get aiAgentArn() {
        return this.getStringAttribute('ai_agent_arn');
    }

    // ai_agent_id - computed: true, optional: false, required: false
    public get aiAgentId() {
        return this.getStringAttribute('ai_agent_id');
    }

    // assistant_arn - computed: true, optional: false, required: false
    public get assistantArn() {
        return this.getStringAttribute('assistant_arn');
    }

    // assistant_id - computed: false, optional: false, required: true
    private _assistantId?: string; 
    public get assistantId() {
        return this.getStringAttribute('assistant_id');
    }
    public set assistantId(value: string) {
        this._assistantId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get assistantIdInput() {
        return this._assistantId;
    }

    // configuration - computed: false, optional: false, required: true
    private _configuration = new CcAIAgent.AIAgentConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcAIAgent.AIAgentConfigurationProperty) {
        this._configuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
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

    // modified_time_seconds - computed: true, optional: false, required: false
    public get modifiedTimeSeconds() {
        return this.getNumberAttribute('modified_time_seconds');
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

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            assistant_id: cdktn.stringToTerraform(this._assistantId),
            configuration: ccAIAgentAIAgentConfigurationPropertyToTerraform(this._configuration.internalValue),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            assistant_id: {
                value: cdktn.stringToHclTerraform(this._assistantId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configuration: {
                value: ccAIAgentAIAgentConfigurationPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAIAgent.AIAgentConfigurationProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
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
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAIAgentTagConditionPropertyToTerraform(struct?: CcAIAgent.TagConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentTagConditionPropertyToHclTerraform(struct?: CcAIAgent.TagConditionProperty | cdktn.IResolvable): any {
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


export function ccAIAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToTerraform(struct?: CcAIAgent.ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable): any {
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


export function ccAIAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToTerraform(struct?: CcAIAgent.ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable): any {
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


export function ccAIAgentOrConditionPropertyToTerraform(struct?: CcAIAgent.OrConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        and_conditions: cdktn.listMapper(ccAIAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToTerraform, false)(struct!.andConditions),
        tag_condition: ccAIAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToTerraform(struct!.tagCondition),
    }
}


export function ccAIAgentOrConditionPropertyToHclTerraform(struct?: CcAIAgent.OrConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        and_conditions: {
            value: cdktn.listMapperHcl(ccAIAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToHclTerraform, false)(struct!.andConditions),
            isBlock: true,
            type: "list",
            storageClassType: "ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyList",
        },
        tag_condition: {
            value: ccAIAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToHclTerraform(struct!.tagCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToTerraform(struct?: CcAIAgent.ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable): any {
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


export function ccAIAgentTagFilterPropertyToTerraform(struct?: CcAIAgent.TagFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        and_conditions: cdktn.listMapper(ccAIAgentTagConditionPropertyToTerraform, false)(struct!.andConditions),
        or_conditions: cdktn.listMapper(ccAIAgentOrConditionPropertyToTerraform, false)(struct!.orConditions),
        tag_condition: ccAIAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToTerraform(struct!.tagCondition),
    }
}


export function ccAIAgentTagFilterPropertyToHclTerraform(struct?: CcAIAgent.TagFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        and_conditions: {
            value: cdktn.listMapperHcl(ccAIAgentTagConditionPropertyToHclTerraform, false)(struct!.andConditions),
            isBlock: true,
            type: "list",
            storageClassType: "TagConditionPropertyList",
        },
        or_conditions: {
            value: cdktn.listMapperHcl(ccAIAgentOrConditionPropertyToHclTerraform, false)(struct!.orConditions),
            isBlock: true,
            type: "list",
            storageClassType: "OrConditionPropertyList",
        },
        tag_condition: {
            value: ccAIAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToHclTerraform(struct!.tagCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentKnowledgeBaseAssociationConfigurationDataPropertyToTerraform(struct?: CcAIAgent.KnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_tag_filter: ccAIAgentTagFilterPropertyToTerraform(struct!.contentTagFilter),
        max_results: cdktn.numberToTerraform(struct!.maxResults),
        override_knowledge_base_search_type: cdktn.stringToTerraform(struct!.overrideKnowledgeBaseSearchType),
    }
}


export function ccAIAgentKnowledgeBaseAssociationConfigurationDataPropertyToHclTerraform(struct?: CcAIAgent.KnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_tag_filter: {
            value: ccAIAgentTagFilterPropertyToHclTerraform(struct!.contentTagFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "TagFilterProperty",
        },
        max_results: {
            value: cdktn.numberToHclTerraform(struct!.maxResults),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        override_knowledge_base_search_type: {
            value: cdktn.stringToHclTerraform(struct!.overrideKnowledgeBaseSearchType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentAssociationConfigurationDataPropertyToTerraform(struct?: CcAIAgent.AssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        knowledge_base_association_configuration_data: ccAIAgentKnowledgeBaseAssociationConfigurationDataPropertyToTerraform(struct!.knowledgeBaseAssociationConfigurationData),
    }
}


export function ccAIAgentAssociationConfigurationDataPropertyToHclTerraform(struct?: CcAIAgent.AssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        knowledge_base_association_configuration_data: {
            value: ccAIAgentKnowledgeBaseAssociationConfigurationDataPropertyToHclTerraform(struct!.knowledgeBaseAssociationConfigurationData),
            isBlock: true,
            type: "struct",
            storageClassType: "KnowledgeBaseAssociationConfigurationDataProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentAssociationConfigurationPropertyToTerraform(struct?: CcAIAgent.AssociationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        association_configuration_data: ccAIAgentAssociationConfigurationDataPropertyToTerraform(struct!.associationConfigurationData),
        association_id: cdktn.stringToTerraform(struct!.associationId),
        association_type: cdktn.stringToTerraform(struct!.associationType),
    }
}


export function ccAIAgentAssociationConfigurationPropertyToHclTerraform(struct?: CcAIAgent.AssociationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        association_configuration_data: {
            value: ccAIAgentAssociationConfigurationDataPropertyToHclTerraform(struct!.associationConfigurationData),
            isBlock: true,
            type: "struct",
            storageClassType: "AssociationConfigurationDataProperty",
        },
        association_id: {
            value: cdktn.stringToHclTerraform(struct!.associationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        association_type: {
            value: cdktn.stringToHclTerraform(struct!.associationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentAnswerRecommendationAIAgentConfigurationPropertyToTerraform(struct?: CcAIAgent.AnswerRecommendationAIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        answer_generation_ai_guardrail_id: cdktn.stringToTerraform(struct!.answerGenerationAiGuardrailId),
        answer_generation_ai_prompt_id: cdktn.stringToTerraform(struct!.answerGenerationAiPromptId),
        association_configurations: cdktn.listMapper(ccAIAgentAssociationConfigurationPropertyToTerraform, false)(struct!.associationConfigurations),
        intent_labeling_generation_ai_prompt_id: cdktn.stringToTerraform(struct!.intentLabelingGenerationAiPromptId),
        locale: cdktn.stringToTerraform(struct!.locale),
        query_reformulation_ai_prompt_id: cdktn.stringToTerraform(struct!.queryReformulationAiPromptId),
    }
}


export function ccAIAgentAnswerRecommendationAIAgentConfigurationPropertyToHclTerraform(struct?: CcAIAgent.AnswerRecommendationAIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        answer_generation_ai_guardrail_id: {
            value: cdktn.stringToHclTerraform(struct!.answerGenerationAiGuardrailId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        answer_generation_ai_prompt_id: {
            value: cdktn.stringToHclTerraform(struct!.answerGenerationAiPromptId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        association_configurations: {
            value: cdktn.listMapperHcl(ccAIAgentAssociationConfigurationPropertyToHclTerraform, false)(struct!.associationConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "AssociationConfigurationPropertyList",
        },
        intent_labeling_generation_ai_prompt_id: {
            value: cdktn.stringToHclTerraform(struct!.intentLabelingGenerationAiPromptId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        locale: {
            value: cdktn.stringToHclTerraform(struct!.locale),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        query_reformulation_ai_prompt_id: {
            value: cdktn.stringToHclTerraform(struct!.queryReformulationAiPromptId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentCaseSummarizationAIAgentConfigurationPropertyToTerraform(struct?: CcAIAgent.CaseSummarizationAIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        case_summarization_ai_guardrail_id: cdktn.stringToTerraform(struct!.caseSummarizationAiGuardrailId),
        case_summarization_ai_prompt_id: cdktn.stringToTerraform(struct!.caseSummarizationAiPromptId),
        locale: cdktn.stringToTerraform(struct!.locale),
    }
}


export function ccAIAgentCaseSummarizationAIAgentConfigurationPropertyToHclTerraform(struct?: CcAIAgent.CaseSummarizationAIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        case_summarization_ai_guardrail_id: {
            value: cdktn.stringToHclTerraform(struct!.caseSummarizationAiGuardrailId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        case_summarization_ai_prompt_id: {
            value: cdktn.stringToHclTerraform(struct!.caseSummarizationAiPromptId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        locale: {
            value: cdktn.stringToHclTerraform(struct!.locale),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyToTerraform(struct?: CcAIAgent.ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty | cdktn.IResolvable): any {
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


export function ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToTerraform(struct?: CcAIAgent.ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable): any {
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


export function ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToTerraform(struct?: CcAIAgent.ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable): any {
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


export function ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyToTerraform(struct?: CcAIAgent.ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        and_conditions: cdktn.listMapper(ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToTerraform, false)(struct!.andConditions),
        tag_condition: ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToTerraform(struct!.tagCondition),
    }
}


export function ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        and_conditions: {
            value: cdktn.listMapperHcl(ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToHclTerraform, false)(struct!.andConditions),
            isBlock: true,
            type: "list",
            storageClassType: "ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyList",
        },
        tag_condition: {
            value: ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToHclTerraform(struct!.tagCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToTerraform(struct?: CcAIAgent.ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable): any {
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


export function ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyToTerraform(struct?: CcAIAgent.ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        and_conditions: cdktn.listMapper(ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyToTerraform, false)(struct!.andConditions),
        or_conditions: cdktn.listMapper(ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyToTerraform, false)(struct!.orConditions),
        tag_condition: ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToTerraform(struct!.tagCondition),
    }
}


export function ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        and_conditions: {
            value: cdktn.listMapperHcl(ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyToHclTerraform, false)(struct!.andConditions),
            isBlock: true,
            type: "list",
            storageClassType: "ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyList",
        },
        or_conditions: {
            value: cdktn.listMapperHcl(ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyToHclTerraform, false)(struct!.orConditions),
            isBlock: true,
            type: "list",
            storageClassType: "ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyList",
        },
        tag_condition: {
            value: ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToHclTerraform(struct!.tagCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyToTerraform(struct?: CcAIAgent.ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_tag_filter: ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyToTerraform(struct!.contentTagFilter),
        max_results: cdktn.numberToTerraform(struct!.maxResults),
        override_knowledge_base_search_type: cdktn.stringToTerraform(struct!.overrideKnowledgeBaseSearchType),
    }
}


export function ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_tag_filter: {
            value: ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyToHclTerraform(struct!.contentTagFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty",
        },
        max_results: {
            value: cdktn.numberToHclTerraform(struct!.maxResults),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        override_knowledge_base_search_type: {
            value: cdktn.stringToHclTerraform(struct!.overrideKnowledgeBaseSearchType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyToTerraform(struct?: CcAIAgent.ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        knowledge_base_association_configuration_data: ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyToTerraform(struct!.knowledgeBaseAssociationConfigurationData),
    }
}


export function ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        knowledge_base_association_configuration_data: {
            value: ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyToHclTerraform(struct!.knowledgeBaseAssociationConfigurationData),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsPropertyToTerraform(struct?: CcAIAgent.ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        association_configuration_data: ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyToTerraform(struct!.associationConfigurationData),
        association_id: cdktn.stringToTerraform(struct!.associationId),
        association_type: cdktn.stringToTerraform(struct!.associationType),
    }
}


export function ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        association_configuration_data: {
            value: ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyToHclTerraform(struct!.associationConfigurationData),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty",
        },
        association_id: {
            value: cdktn.stringToHclTerraform(struct!.associationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        association_type: {
            value: cdktn.stringToHclTerraform(struct!.associationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentEmailGenerativeAnswerAIAgentConfigurationPropertyToTerraform(struct?: CcAIAgent.EmailGenerativeAnswerAIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        association_configurations: cdktn.listMapper(ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsPropertyToTerraform, false)(struct!.associationConfigurations),
        email_generative_answer_ai_prompt_id: cdktn.stringToTerraform(struct!.emailGenerativeAnswerAiPromptId),
        email_query_reformulation_ai_prompt_id: cdktn.stringToTerraform(struct!.emailQueryReformulationAiPromptId),
        locale: cdktn.stringToTerraform(struct!.locale),
    }
}


export function ccAIAgentEmailGenerativeAnswerAIAgentConfigurationPropertyToHclTerraform(struct?: CcAIAgent.EmailGenerativeAnswerAIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        association_configurations: {
            value: cdktn.listMapperHcl(ccAIAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsPropertyToHclTerraform, false)(struct!.associationConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsPropertyList",
        },
        email_generative_answer_ai_prompt_id: {
            value: cdktn.stringToHclTerraform(struct!.emailGenerativeAnswerAiPromptId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        email_query_reformulation_ai_prompt_id: {
            value: cdktn.stringToHclTerraform(struct!.emailQueryReformulationAiPromptId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        locale: {
            value: cdktn.stringToHclTerraform(struct!.locale),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentEmailOverviewAIAgentConfigurationPropertyToTerraform(struct?: CcAIAgent.EmailOverviewAIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        email_overview_ai_prompt_id: cdktn.stringToTerraform(struct!.emailOverviewAiPromptId),
        locale: cdktn.stringToTerraform(struct!.locale),
    }
}


export function ccAIAgentEmailOverviewAIAgentConfigurationPropertyToHclTerraform(struct?: CcAIAgent.EmailOverviewAIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        email_overview_ai_prompt_id: {
            value: cdktn.stringToHclTerraform(struct!.emailOverviewAiPromptId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        locale: {
            value: cdktn.stringToHclTerraform(struct!.locale),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyToTerraform(struct?: CcAIAgent.ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty | cdktn.IResolvable): any {
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


export function ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToTerraform(struct?: CcAIAgent.ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable): any {
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


export function ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToTerraform(struct?: CcAIAgent.ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable): any {
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


export function ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyToTerraform(struct?: CcAIAgent.ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        and_conditions: cdktn.listMapper(ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToTerraform, false)(struct!.andConditions),
        tag_condition: ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToTerraform(struct!.tagCondition),
    }
}


export function ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        and_conditions: {
            value: cdktn.listMapperHcl(ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToHclTerraform, false)(struct!.andConditions),
            isBlock: true,
            type: "list",
            storageClassType: "ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyList",
        },
        tag_condition: {
            value: ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToHclTerraform(struct!.tagCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToTerraform(struct?: CcAIAgent.ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable): any {
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


export function ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyToTerraform(struct?: CcAIAgent.ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        and_conditions: cdktn.listMapper(ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyToTerraform, false)(struct!.andConditions),
        or_conditions: cdktn.listMapper(ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyToTerraform, false)(struct!.orConditions),
        tag_condition: ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToTerraform(struct!.tagCondition),
    }
}


export function ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        and_conditions: {
            value: cdktn.listMapperHcl(ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyToHclTerraform, false)(struct!.andConditions),
            isBlock: true,
            type: "list",
            storageClassType: "ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyList",
        },
        or_conditions: {
            value: cdktn.listMapperHcl(ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyToHclTerraform, false)(struct!.orConditions),
            isBlock: true,
            type: "list",
            storageClassType: "ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyList",
        },
        tag_condition: {
            value: ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToHclTerraform(struct!.tagCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyToTerraform(struct?: CcAIAgent.ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_tag_filter: ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyToTerraform(struct!.contentTagFilter),
        max_results: cdktn.numberToTerraform(struct!.maxResults),
        override_knowledge_base_search_type: cdktn.stringToTerraform(struct!.overrideKnowledgeBaseSearchType),
    }
}


export function ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_tag_filter: {
            value: ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyToHclTerraform(struct!.contentTagFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty",
        },
        max_results: {
            value: cdktn.numberToHclTerraform(struct!.maxResults),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        override_knowledge_base_search_type: {
            value: cdktn.stringToHclTerraform(struct!.overrideKnowledgeBaseSearchType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyToTerraform(struct?: CcAIAgent.ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        knowledge_base_association_configuration_data: ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyToTerraform(struct!.knowledgeBaseAssociationConfigurationData),
    }
}


export function ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        knowledge_base_association_configuration_data: {
            value: ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyToHclTerraform(struct!.knowledgeBaseAssociationConfigurationData),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsPropertyToTerraform(struct?: CcAIAgent.ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        association_configuration_data: ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyToTerraform(struct!.associationConfigurationData),
        association_id: cdktn.stringToTerraform(struct!.associationId),
        association_type: cdktn.stringToTerraform(struct!.associationType),
    }
}


export function ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        association_configuration_data: {
            value: ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyToHclTerraform(struct!.associationConfigurationData),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty",
        },
        association_id: {
            value: cdktn.stringToHclTerraform(struct!.associationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        association_type: {
            value: cdktn.stringToHclTerraform(struct!.associationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentEmailResponseAIAgentConfigurationPropertyToTerraform(struct?: CcAIAgent.EmailResponseAIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        association_configurations: cdktn.listMapper(ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsPropertyToTerraform, false)(struct!.associationConfigurations),
        email_query_reformulation_ai_prompt_id: cdktn.stringToTerraform(struct!.emailQueryReformulationAiPromptId),
        email_response_ai_prompt_id: cdktn.stringToTerraform(struct!.emailResponseAiPromptId),
        locale: cdktn.stringToTerraform(struct!.locale),
    }
}


export function ccAIAgentEmailResponseAIAgentConfigurationPropertyToHclTerraform(struct?: CcAIAgent.EmailResponseAIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        association_configurations: {
            value: cdktn.listMapperHcl(ccAIAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsPropertyToHclTerraform, false)(struct!.associationConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsPropertyList",
        },
        email_query_reformulation_ai_prompt_id: {
            value: cdktn.stringToHclTerraform(struct!.emailQueryReformulationAiPromptId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        email_response_ai_prompt_id: {
            value: cdktn.stringToHclTerraform(struct!.emailResponseAiPromptId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        locale: {
            value: cdktn.stringToHclTerraform(struct!.locale),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyToTerraform(struct?: CcAIAgent.ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty | cdktn.IResolvable): any {
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


export function ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToTerraform(struct?: CcAIAgent.ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable): any {
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


export function ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToTerraform(struct?: CcAIAgent.ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable): any {
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


export function ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyToTerraform(struct?: CcAIAgent.ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        and_conditions: cdktn.listMapper(ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToTerraform, false)(struct!.andConditions),
        tag_condition: ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToTerraform(struct!.tagCondition),
    }
}


export function ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        and_conditions: {
            value: cdktn.listMapperHcl(ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToHclTerraform, false)(struct!.andConditions),
            isBlock: true,
            type: "list",
            storageClassType: "ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyList",
        },
        tag_condition: {
            value: ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToHclTerraform(struct!.tagCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToTerraform(struct?: CcAIAgent.ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable): any {
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


export function ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyToTerraform(struct?: CcAIAgent.ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        and_conditions: cdktn.listMapper(ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyToTerraform, false)(struct!.andConditions),
        or_conditions: cdktn.listMapper(ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyToTerraform, false)(struct!.orConditions),
        tag_condition: ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToTerraform(struct!.tagCondition),
    }
}


export function ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        and_conditions: {
            value: cdktn.listMapperHcl(ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyToHclTerraform, false)(struct!.andConditions),
            isBlock: true,
            type: "list",
            storageClassType: "ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyList",
        },
        or_conditions: {
            value: cdktn.listMapperHcl(ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyToHclTerraform, false)(struct!.orConditions),
            isBlock: true,
            type: "list",
            storageClassType: "ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyList",
        },
        tag_condition: {
            value: ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToHclTerraform(struct!.tagCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyToTerraform(struct?: CcAIAgent.ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_tag_filter: ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyToTerraform(struct!.contentTagFilter),
        max_results: cdktn.numberToTerraform(struct!.maxResults),
        override_knowledge_base_search_type: cdktn.stringToTerraform(struct!.overrideKnowledgeBaseSearchType),
    }
}


export function ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_tag_filter: {
            value: ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyToHclTerraform(struct!.contentTagFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty",
        },
        max_results: {
            value: cdktn.numberToHclTerraform(struct!.maxResults),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        override_knowledge_base_search_type: {
            value: cdktn.stringToHclTerraform(struct!.overrideKnowledgeBaseSearchType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyToTerraform(struct?: CcAIAgent.ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        knowledge_base_association_configuration_data: ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyToTerraform(struct!.knowledgeBaseAssociationConfigurationData),
    }
}


export function ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        knowledge_base_association_configuration_data: {
            value: ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyToHclTerraform(struct!.knowledgeBaseAssociationConfigurationData),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsPropertyToTerraform(struct?: CcAIAgent.ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        association_configuration_data: ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyToTerraform(struct!.associationConfigurationData),
        association_id: cdktn.stringToTerraform(struct!.associationId),
        association_type: cdktn.stringToTerraform(struct!.associationType),
    }
}


export function ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        association_configuration_data: {
            value: ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyToHclTerraform(struct!.associationConfigurationData),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty",
        },
        association_id: {
            value: cdktn.stringToHclTerraform(struct!.associationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        association_type: {
            value: cdktn.stringToHclTerraform(struct!.associationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentManualSearchAIAgentConfigurationPropertyToTerraform(struct?: CcAIAgent.ManualSearchAIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        answer_generation_ai_guardrail_id: cdktn.stringToTerraform(struct!.answerGenerationAiGuardrailId),
        answer_generation_ai_prompt_id: cdktn.stringToTerraform(struct!.answerGenerationAiPromptId),
        association_configurations: cdktn.listMapper(ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsPropertyToTerraform, false)(struct!.associationConfigurations),
        locale: cdktn.stringToTerraform(struct!.locale),
    }
}


export function ccAIAgentManualSearchAIAgentConfigurationPropertyToHclTerraform(struct?: CcAIAgent.ManualSearchAIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        answer_generation_ai_guardrail_id: {
            value: cdktn.stringToHclTerraform(struct!.answerGenerationAiGuardrailId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        answer_generation_ai_prompt_id: {
            value: cdktn.stringToHclTerraform(struct!.answerGenerationAiPromptId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        association_configurations: {
            value: cdktn.listMapperHcl(ccAIAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsPropertyToHclTerraform, false)(struct!.associationConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsPropertyList",
        },
        locale: {
            value: cdktn.stringToHclTerraform(struct!.locale),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentNoteTakingAIAgentConfigurationPropertyToTerraform(struct?: CcAIAgent.NoteTakingAIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        locale: cdktn.stringToTerraform(struct!.locale),
        note_taking_ai_guardrail_id: cdktn.stringToTerraform(struct!.noteTakingAiGuardrailId),
        note_taking_ai_prompt_id: cdktn.stringToTerraform(struct!.noteTakingAiPromptId),
    }
}


export function ccAIAgentNoteTakingAIAgentConfigurationPropertyToHclTerraform(struct?: CcAIAgent.NoteTakingAIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        locale: {
            value: cdktn.stringToHclTerraform(struct!.locale),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        note_taking_ai_guardrail_id: {
            value: cdktn.stringToHclTerraform(struct!.noteTakingAiGuardrailId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        note_taking_ai_prompt_id: {
            value: cdktn.stringToHclTerraform(struct!.noteTakingAiPromptId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentToolInstructionPropertyToTerraform(struct?: CcAIAgent.ToolInstructionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        examples: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.examples),
        instruction: cdktn.stringToTerraform(struct!.instruction),
    }
}


export function ccAIAgentToolInstructionPropertyToHclTerraform(struct?: CcAIAgent.ToolInstructionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        examples: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.examples),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        instruction: {
            value: cdktn.stringToHclTerraform(struct!.instruction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentToolOutputConfigurationPropertyToTerraform(struct?: CcAIAgent.ToolOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        output_variable_name_override: cdktn.stringToTerraform(struct!.outputVariableNameOverride),
        session_data_namespace: cdktn.stringToTerraform(struct!.sessionDataNamespace),
    }
}


export function ccAIAgentToolOutputConfigurationPropertyToHclTerraform(struct?: CcAIAgent.ToolOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        output_variable_name_override: {
            value: cdktn.stringToHclTerraform(struct!.outputVariableNameOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_data_namespace: {
            value: cdktn.stringToHclTerraform(struct!.sessionDataNamespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentToolOutputFilterPropertyToTerraform(struct?: CcAIAgent.ToolOutputFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_path: cdktn.stringToTerraform(struct!.jsonPath),
        output_configuration: ccAIAgentToolOutputConfigurationPropertyToTerraform(struct!.outputConfiguration),
    }
}


export function ccAIAgentToolOutputFilterPropertyToHclTerraform(struct?: CcAIAgent.ToolOutputFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        json_path: {
            value: cdktn.stringToHclTerraform(struct!.jsonPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_configuration: {
            value: ccAIAgentToolOutputConfigurationPropertyToHclTerraform(struct!.outputConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ToolOutputConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentToolOverrideConstantInputValuePropertyToTerraform(struct?: CcAIAgent.ToolOverrideConstantInputValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentToolOverrideConstantInputValuePropertyToHclTerraform(struct?: CcAIAgent.ToolOverrideConstantInputValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
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


export function ccAIAgentToolOverrideInputValueConfigurationPropertyToTerraform(struct?: CcAIAgent.ToolOverrideInputValueConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        constant: ccAIAgentToolOverrideConstantInputValuePropertyToTerraform(struct!.constant),
    }
}


export function ccAIAgentToolOverrideInputValueConfigurationPropertyToHclTerraform(struct?: CcAIAgent.ToolOverrideInputValueConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        constant: {
            value: ccAIAgentToolOverrideConstantInputValuePropertyToHclTerraform(struct!.constant),
            isBlock: true,
            type: "struct",
            storageClassType: "ToolOverrideConstantInputValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentToolOverrideInputValuePropertyToTerraform(struct?: CcAIAgent.ToolOverrideInputValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_path: cdktn.stringToTerraform(struct!.jsonPath),
        value: ccAIAgentToolOverrideInputValueConfigurationPropertyToTerraform(struct!.value),
    }
}


export function ccAIAgentToolOverrideInputValuePropertyToHclTerraform(struct?: CcAIAgent.ToolOverrideInputValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        json_path: {
            value: cdktn.stringToHclTerraform(struct!.jsonPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: ccAIAgentToolOverrideInputValueConfigurationPropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "ToolOverrideInputValueConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentUserInteractionConfigurationPropertyToTerraform(struct?: CcAIAgent.UserInteractionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_user_confirmation_required: cdktn.booleanToTerraform(struct!.isUserConfirmationRequired),
    }
}


export function ccAIAgentUserInteractionConfigurationPropertyToHclTerraform(struct?: CcAIAgent.UserInteractionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_user_confirmation_required: {
            value: cdktn.booleanToHclTerraform(struct!.isUserConfirmationRequired),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentToolConfigurationPropertyToTerraform(struct?: CcAIAgent.ToolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        annotations: cdktn.stringToTerraform(struct!.annotations),
        description: cdktn.stringToTerraform(struct!.description),
        input_schema: cdktn.stringToTerraform(struct!.inputSchema),
        instruction: ccAIAgentToolInstructionPropertyToTerraform(struct!.instruction),
        output_filters: cdktn.listMapper(ccAIAgentToolOutputFilterPropertyToTerraform, false)(struct!.outputFilters),
        output_schema: cdktn.stringToTerraform(struct!.outputSchema),
        override_input_values: cdktn.listMapper(ccAIAgentToolOverrideInputValuePropertyToTerraform, false)(struct!.overrideInputValues),
        title: cdktn.stringToTerraform(struct!.title),
        tool_id: cdktn.stringToTerraform(struct!.toolId),
        tool_name: cdktn.stringToTerraform(struct!.toolName),
        tool_type: cdktn.stringToTerraform(struct!.toolType),
        user_interaction_configuration: ccAIAgentUserInteractionConfigurationPropertyToTerraform(struct!.userInteractionConfiguration),
    }
}


export function ccAIAgentToolConfigurationPropertyToHclTerraform(struct?: CcAIAgent.ToolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        annotations: {
            value: cdktn.stringToHclTerraform(struct!.annotations),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_schema: {
            value: cdktn.stringToHclTerraform(struct!.inputSchema),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instruction: {
            value: ccAIAgentToolInstructionPropertyToHclTerraform(struct!.instruction),
            isBlock: true,
            type: "struct",
            storageClassType: "ToolInstructionProperty",
        },
        output_filters: {
            value: cdktn.listMapperHcl(ccAIAgentToolOutputFilterPropertyToHclTerraform, false)(struct!.outputFilters),
            isBlock: true,
            type: "list",
            storageClassType: "ToolOutputFilterPropertyList",
        },
        output_schema: {
            value: cdktn.stringToHclTerraform(struct!.outputSchema),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        override_input_values: {
            value: cdktn.listMapperHcl(ccAIAgentToolOverrideInputValuePropertyToHclTerraform, false)(struct!.overrideInputValues),
            isBlock: true,
            type: "list",
            storageClassType: "ToolOverrideInputValuePropertyList",
        },
        title: {
            value: cdktn.stringToHclTerraform(struct!.title),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tool_id: {
            value: cdktn.stringToHclTerraform(struct!.toolId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tool_name: {
            value: cdktn.stringToHclTerraform(struct!.toolName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tool_type: {
            value: cdktn.stringToHclTerraform(struct!.toolType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_interaction_configuration: {
            value: ccAIAgentUserInteractionConfigurationPropertyToHclTerraform(struct!.userInteractionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "UserInteractionConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentOrchestrationAIAgentConfigurationPropertyToTerraform(struct?: CcAIAgent.OrchestrationAIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connect_instance_arn: cdktn.stringToTerraform(struct!.connectInstanceArn),
        locale: cdktn.stringToTerraform(struct!.locale),
        orchestration_ai_guardrail_id: cdktn.stringToTerraform(struct!.orchestrationAiGuardrailId),
        orchestration_ai_prompt_id: cdktn.stringToTerraform(struct!.orchestrationAiPromptId),
        tool_configurations: cdktn.listMapper(ccAIAgentToolConfigurationPropertyToTerraform, false)(struct!.toolConfigurations),
    }
}


export function ccAIAgentOrchestrationAIAgentConfigurationPropertyToHclTerraform(struct?: CcAIAgent.OrchestrationAIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connect_instance_arn: {
            value: cdktn.stringToHclTerraform(struct!.connectInstanceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        locale: {
            value: cdktn.stringToHclTerraform(struct!.locale),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        orchestration_ai_guardrail_id: {
            value: cdktn.stringToHclTerraform(struct!.orchestrationAiGuardrailId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        orchestration_ai_prompt_id: {
            value: cdktn.stringToHclTerraform(struct!.orchestrationAiPromptId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tool_configurations: {
            value: cdktn.listMapperHcl(ccAIAgentToolConfigurationPropertyToHclTerraform, false)(struct!.toolConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "ToolConfigurationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyToTerraform(struct?: CcAIAgent.ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty | cdktn.IResolvable): any {
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


export function ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToTerraform(struct?: CcAIAgent.ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable): any {
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


export function ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToTerraform(struct?: CcAIAgent.ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable): any {
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


export function ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyToTerraform(struct?: CcAIAgent.ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        and_conditions: cdktn.listMapper(ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToTerraform, false)(struct!.andConditions),
        tag_condition: ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToTerraform(struct!.tagCondition),
    }
}


export function ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        and_conditions: {
            value: cdktn.listMapperHcl(ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyToHclTerraform, false)(struct!.andConditions),
            isBlock: true,
            type: "list",
            storageClassType: "ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyList",
        },
        tag_condition: {
            value: ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyToHclTerraform(struct!.tagCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToTerraform(struct?: CcAIAgent.ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable): any {
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


export function ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyToTerraform(struct?: CcAIAgent.ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        and_conditions: cdktn.listMapper(ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyToTerraform, false)(struct!.andConditions),
        or_conditions: cdktn.listMapper(ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyToTerraform, false)(struct!.orConditions),
        tag_condition: ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToTerraform(struct!.tagCondition),
    }
}


export function ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        and_conditions: {
            value: cdktn.listMapperHcl(ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyToHclTerraform, false)(struct!.andConditions),
            isBlock: true,
            type: "list",
            storageClassType: "ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyList",
        },
        or_conditions: {
            value: cdktn.listMapperHcl(ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyToHclTerraform, false)(struct!.orConditions),
            isBlock: true,
            type: "list",
            storageClassType: "ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyList",
        },
        tag_condition: {
            value: ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyToHclTerraform(struct!.tagCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyToTerraform(struct?: CcAIAgent.ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_tag_filter: ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyToTerraform(struct!.contentTagFilter),
        max_results: cdktn.numberToTerraform(struct!.maxResults),
        override_knowledge_base_search_type: cdktn.stringToTerraform(struct!.overrideKnowledgeBaseSearchType),
    }
}


export function ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_tag_filter: {
            value: ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyToHclTerraform(struct!.contentTagFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty",
        },
        max_results: {
            value: cdktn.numberToHclTerraform(struct!.maxResults),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        override_knowledge_base_search_type: {
            value: cdktn.stringToHclTerraform(struct!.overrideKnowledgeBaseSearchType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyToTerraform(struct?: CcAIAgent.ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        knowledge_base_association_configuration_data: ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyToTerraform(struct!.knowledgeBaseAssociationConfigurationData),
    }
}


export function ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        knowledge_base_association_configuration_data: {
            value: ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyToHclTerraform(struct!.knowledgeBaseAssociationConfigurationData),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsPropertyToTerraform(struct?: CcAIAgent.ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        association_configuration_data: ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyToTerraform(struct!.associationConfigurationData),
        association_id: cdktn.stringToTerraform(struct!.associationId),
        association_type: cdktn.stringToTerraform(struct!.associationType),
    }
}


export function ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsPropertyToHclTerraform(struct?: CcAIAgent.ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        association_configuration_data: {
            value: ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyToHclTerraform(struct!.associationConfigurationData),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty",
        },
        association_id: {
            value: cdktn.stringToHclTerraform(struct!.associationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        association_type: {
            value: cdktn.stringToHclTerraform(struct!.associationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentSelfServiceAIAgentConfigurationPropertyToTerraform(struct?: CcAIAgent.SelfServiceAIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        association_configurations: cdktn.listMapper(ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsPropertyToTerraform, false)(struct!.associationConfigurations),
        self_service_ai_guardrail_id: cdktn.stringToTerraform(struct!.selfServiceAiGuardrailId),
        self_service_answer_generation_ai_prompt_id: cdktn.stringToTerraform(struct!.selfServiceAnswerGenerationAiPromptId),
        self_service_pre_processing_ai_prompt_id: cdktn.stringToTerraform(struct!.selfServicePreProcessingAiPromptId),
    }
}


export function ccAIAgentSelfServiceAIAgentConfigurationPropertyToHclTerraform(struct?: CcAIAgent.SelfServiceAIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        association_configurations: {
            value: cdktn.listMapperHcl(ccAIAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsPropertyToHclTerraform, false)(struct!.associationConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsPropertyList",
        },
        self_service_ai_guardrail_id: {
            value: cdktn.stringToHclTerraform(struct!.selfServiceAiGuardrailId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        self_service_answer_generation_ai_prompt_id: {
            value: cdktn.stringToHclTerraform(struct!.selfServiceAnswerGenerationAiPromptId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        self_service_pre_processing_ai_prompt_id: {
            value: cdktn.stringToHclTerraform(struct!.selfServicePreProcessingAiPromptId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAIAgentAIAgentConfigurationPropertyToTerraform(struct?: CcAIAgent.AIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        answer_recommendation_ai_agent_configuration: ccAIAgentAnswerRecommendationAIAgentConfigurationPropertyToTerraform(struct!.answerRecommendationAiAgentConfiguration),
        case_summarization_ai_agent_configuration: ccAIAgentCaseSummarizationAIAgentConfigurationPropertyToTerraform(struct!.caseSummarizationAiAgentConfiguration),
        email_generative_answer_ai_agent_configuration: ccAIAgentEmailGenerativeAnswerAIAgentConfigurationPropertyToTerraform(struct!.emailGenerativeAnswerAiAgentConfiguration),
        email_overview_ai_agent_configuration: ccAIAgentEmailOverviewAIAgentConfigurationPropertyToTerraform(struct!.emailOverviewAiAgentConfiguration),
        email_response_ai_agent_configuration: ccAIAgentEmailResponseAIAgentConfigurationPropertyToTerraform(struct!.emailResponseAiAgentConfiguration),
        manual_search_ai_agent_configuration: ccAIAgentManualSearchAIAgentConfigurationPropertyToTerraform(struct!.manualSearchAiAgentConfiguration),
        note_taking_ai_agent_configuration: ccAIAgentNoteTakingAIAgentConfigurationPropertyToTerraform(struct!.noteTakingAiAgentConfiguration),
        orchestration_ai_agent_configuration: ccAIAgentOrchestrationAIAgentConfigurationPropertyToTerraform(struct!.orchestrationAiAgentConfiguration),
        self_service_ai_agent_configuration: ccAIAgentSelfServiceAIAgentConfigurationPropertyToTerraform(struct!.selfServiceAiAgentConfiguration),
    }
}


export function ccAIAgentAIAgentConfigurationPropertyToHclTerraform(struct?: CcAIAgent.AIAgentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        answer_recommendation_ai_agent_configuration: {
            value: ccAIAgentAnswerRecommendationAIAgentConfigurationPropertyToHclTerraform(struct!.answerRecommendationAiAgentConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AnswerRecommendationAIAgentConfigurationProperty",
        },
        case_summarization_ai_agent_configuration: {
            value: ccAIAgentCaseSummarizationAIAgentConfigurationPropertyToHclTerraform(struct!.caseSummarizationAiAgentConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "CaseSummarizationAIAgentConfigurationProperty",
        },
        email_generative_answer_ai_agent_configuration: {
            value: ccAIAgentEmailGenerativeAnswerAIAgentConfigurationPropertyToHclTerraform(struct!.emailGenerativeAnswerAiAgentConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EmailGenerativeAnswerAIAgentConfigurationProperty",
        },
        email_overview_ai_agent_configuration: {
            value: ccAIAgentEmailOverviewAIAgentConfigurationPropertyToHclTerraform(struct!.emailOverviewAiAgentConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EmailOverviewAIAgentConfigurationProperty",
        },
        email_response_ai_agent_configuration: {
            value: ccAIAgentEmailResponseAIAgentConfigurationPropertyToHclTerraform(struct!.emailResponseAiAgentConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EmailResponseAIAgentConfigurationProperty",
        },
        manual_search_ai_agent_configuration: {
            value: ccAIAgentManualSearchAIAgentConfigurationPropertyToHclTerraform(struct!.manualSearchAiAgentConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ManualSearchAIAgentConfigurationProperty",
        },
        note_taking_ai_agent_configuration: {
            value: ccAIAgentNoteTakingAIAgentConfigurationPropertyToHclTerraform(struct!.noteTakingAiAgentConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "NoteTakingAIAgentConfigurationProperty",
        },
        orchestration_ai_agent_configuration: {
            value: ccAIAgentOrchestrationAIAgentConfigurationPropertyToHclTerraform(struct!.orchestrationAiAgentConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "OrchestrationAIAgentConfigurationProperty",
        },
        self_service_ai_agent_configuration: {
            value: ccAIAgentSelfServiceAIAgentConfigurationPropertyToHclTerraform(struct!.selfServiceAiAgentConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SelfServiceAIAgentConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAIAgent {
export interface TagConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class TagConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagConditionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagConditionProperty | cdktn.IResolvable | undefined) {
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

export class TagConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : TagConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): TagConditionPropertyOutputReference {
        return new TagConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable | undefined) {
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

export class ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyOutputReference {
        return new ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable | undefined) {
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
export interface OrConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#and_conditions CcAIAgent#and_conditions}
    */
    readonly andConditions?: ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#tag_condition CcAIAgent#tag_condition}
    */
    readonly tagCondition?: ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty;
}
export class OrConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): OrConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._andConditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.andConditions = this._andConditions?.internalValue;
        }
        if (this._tagCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagCondition = this._tagCondition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OrConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = undefined;
            this._tagCondition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = value.andConditions;
            this._tagCondition.internalValue = value.tagCondition;
        }
    }

    // and_conditions - computed: true, optional: true, required: false
    private _andConditions = new ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyList(this, "and_conditions", false);
    public get andConditions() {
        return this._andConditions;
    }
    public putAndConditions(value: ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty[] | cdktn.IResolvable) {
        this._andConditions.internalValue = value;
    }
    public resetAndConditions() {
        this._andConditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get andConditionsInput() {
        return this._andConditions.internalValue;
    }

    // tag_condition - computed: true, optional: true, required: false
    private _tagCondition = new ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyOutputReference(this, "tag_condition");
    public get tagCondition() {
        return this._tagCondition;
    }
    public putTagCondition(value: ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty) {
        this._tagCondition.internalValue = value;
    }
    public resetTagCondition() {
        this._tagCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagConditionInput() {
        return this._tagCondition.internalValue;
    }
}

export class OrConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : OrConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): OrConditionPropertyOutputReference {
        return new OrConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable | undefined) {
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
export interface TagFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#and_conditions CcAIAgent#and_conditions}
    */
    readonly andConditions?: TagConditionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#or_conditions CcAIAgent#or_conditions}
    */
    readonly orConditions?: OrConditionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#tag_condition CcAIAgent#tag_condition}
    */
    readonly tagCondition?: ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty;
}
export class TagFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TagFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._andConditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.andConditions = this._andConditions?.internalValue;
        }
        if (this._orConditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.orConditions = this._orConditions?.internalValue;
        }
        if (this._tagCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagCondition = this._tagCondition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = undefined;
            this._orConditions.internalValue = undefined;
            this._tagCondition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = value.andConditions;
            this._orConditions.internalValue = value.orConditions;
            this._tagCondition.internalValue = value.tagCondition;
        }
    }

    // and_conditions - computed: true, optional: true, required: false
    private _andConditions = new TagConditionPropertyList(this, "and_conditions", false);
    public get andConditions() {
        return this._andConditions;
    }
    public putAndConditions(value: TagConditionProperty[] | cdktn.IResolvable) {
        this._andConditions.internalValue = value;
    }
    public resetAndConditions() {
        this._andConditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get andConditionsInput() {
        return this._andConditions.internalValue;
    }

    // or_conditions - computed: true, optional: true, required: false
    private _orConditions = new OrConditionPropertyList(this, "or_conditions", false);
    public get orConditions() {
        return this._orConditions;
    }
    public putOrConditions(value: OrConditionProperty[] | cdktn.IResolvable) {
        this._orConditions.internalValue = value;
    }
    public resetOrConditions() {
        this._orConditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orConditionsInput() {
        return this._orConditions.internalValue;
    }

    // tag_condition - computed: true, optional: true, required: false
    private _tagCondition = new ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyOutputReference(this, "tag_condition");
    public get tagCondition() {
        return this._tagCondition;
    }
    public putTagCondition(value: ConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty) {
        this._tagCondition.internalValue = value;
    }
    public resetTagCondition() {
        this._tagCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagConditionInput() {
        return this._tagCondition.internalValue;
    }
}
export interface KnowledgeBaseAssociationConfigurationDataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#content_tag_filter CcAIAgent#content_tag_filter}
    */
    readonly contentTagFilter?: TagFilterProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#max_results CcAIAgent#max_results}
    */
    readonly maxResults?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#override_knowledge_base_search_type CcAIAgent#override_knowledge_base_search_type}
    */
    readonly overrideKnowledgeBaseSearchType?: string;
}
export class KnowledgeBaseAssociationConfigurationDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentTagFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentTagFilter = this._contentTagFilter?.internalValue;
        }
        if (this._maxResults !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxResults = this._maxResults;
        }
        if (this._overrideKnowledgeBaseSearchType !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrideKnowledgeBaseSearchType = this._overrideKnowledgeBaseSearchType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentTagFilter.internalValue = undefined;
            this._maxResults = undefined;
            this._overrideKnowledgeBaseSearchType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentTagFilter.internalValue = value.contentTagFilter;
            this._maxResults = value.maxResults;
            this._overrideKnowledgeBaseSearchType = value.overrideKnowledgeBaseSearchType;
        }
    }

    // content_tag_filter - computed: true, optional: true, required: false
    private _contentTagFilter = new TagFilterPropertyOutputReference(this, "content_tag_filter");
    public get contentTagFilter() {
        return this._contentTagFilter;
    }
    public putContentTagFilter(value: TagFilterProperty) {
        this._contentTagFilter.internalValue = value;
    }
    public resetContentTagFilter() {
        this._contentTagFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTagFilterInput() {
        return this._contentTagFilter.internalValue;
    }

    // max_results - computed: true, optional: true, required: false
    private _maxResults?: number; 
    public get maxResults() {
        return this.getNumberAttribute('max_results');
    }
    public set maxResults(value: number) {
        this._maxResults = value;
    }
    public resetMaxResults() {
        this._maxResults = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxResultsInput() {
        return this._maxResults;
    }

    // override_knowledge_base_search_type - computed: true, optional: true, required: false
    private _overrideKnowledgeBaseSearchType?: string; 
    public get overrideKnowledgeBaseSearchType() {
        return this.getStringAttribute('override_knowledge_base_search_type');
    }
    public set overrideKnowledgeBaseSearchType(value: string) {
        this._overrideKnowledgeBaseSearchType = value;
    }
    public resetOverrideKnowledgeBaseSearchType() {
        this._overrideKnowledgeBaseSearchType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideKnowledgeBaseSearchTypeInput() {
        return this._overrideKnowledgeBaseSearchType;
    }
}
export interface AssociationConfigurationDataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#knowledge_base_association_configuration_data CcAIAgent#knowledge_base_association_configuration_data}
    */
    readonly knowledgeBaseAssociationConfigurationData?: KnowledgeBaseAssociationConfigurationDataProperty;
}
export class AssociationConfigurationDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AssociationConfigurationDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._knowledgeBaseAssociationConfigurationData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.knowledgeBaseAssociationConfigurationData = this._knowledgeBaseAssociationConfigurationData?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssociationConfigurationDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._knowledgeBaseAssociationConfigurationData.internalValue = value.knowledgeBaseAssociationConfigurationData;
        }
    }

    // knowledge_base_association_configuration_data - computed: true, optional: true, required: false
    private _knowledgeBaseAssociationConfigurationData = new KnowledgeBaseAssociationConfigurationDataPropertyOutputReference(this, "knowledge_base_association_configuration_data");
    public get knowledgeBaseAssociationConfigurationData() {
        return this._knowledgeBaseAssociationConfigurationData;
    }
    public putKnowledgeBaseAssociationConfigurationData(value: KnowledgeBaseAssociationConfigurationDataProperty) {
        this._knowledgeBaseAssociationConfigurationData.internalValue = value;
    }
    public resetKnowledgeBaseAssociationConfigurationData() {
        this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get knowledgeBaseAssociationConfigurationDataInput() {
        return this._knowledgeBaseAssociationConfigurationData.internalValue;
    }
}
export interface AssociationConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_configuration_data CcAIAgent#association_configuration_data}
    */
    readonly associationConfigurationData?: AssociationConfigurationDataProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_id CcAIAgent#association_id}
    */
    readonly associationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_type CcAIAgent#association_type}
    */
    readonly associationType?: string;
}
export class AssociationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssociationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._associationConfigurationData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationConfigurationData = this._associationConfigurationData?.internalValue;
        }
        if (this._associationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationId = this._associationId;
        }
        if (this._associationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationType = this._associationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssociationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._associationConfigurationData.internalValue = undefined;
            this._associationId = undefined;
            this._associationType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._associationConfigurationData.internalValue = value.associationConfigurationData;
            this._associationId = value.associationId;
            this._associationType = value.associationType;
        }
    }

    // association_configuration_data - computed: true, optional: true, required: false
    private _associationConfigurationData = new AssociationConfigurationDataPropertyOutputReference(this, "association_configuration_data");
    public get associationConfigurationData() {
        return this._associationConfigurationData;
    }
    public putAssociationConfigurationData(value: AssociationConfigurationDataProperty) {
        this._associationConfigurationData.internalValue = value;
    }
    public resetAssociationConfigurationData() {
        this._associationConfigurationData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationConfigurationDataInput() {
        return this._associationConfigurationData.internalValue;
    }

    // association_id - computed: true, optional: true, required: false
    private _associationId?: string; 
    public get associationId() {
        return this.getStringAttribute('association_id');
    }
    public set associationId(value: string) {
        this._associationId = value;
    }
    public resetAssociationId() {
        this._associationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationIdInput() {
        return this._associationId;
    }

    // association_type - computed: true, optional: true, required: false
    private _associationType?: string; 
    public get associationType() {
        return this.getStringAttribute('association_type');
    }
    public set associationType(value: string) {
        this._associationType = value;
    }
    public resetAssociationType() {
        this._associationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationTypeInput() {
        return this._associationType;
    }
}

export class AssociationConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : AssociationConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): AssociationConfigurationPropertyOutputReference {
        return new AssociationConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AnswerRecommendationAIAgentConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#answer_generation_ai_guardrail_id CcAIAgent#answer_generation_ai_guardrail_id}
    */
    readonly answerGenerationAiGuardrailId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#answer_generation_ai_prompt_id CcAIAgent#answer_generation_ai_prompt_id}
    */
    readonly answerGenerationAiPromptId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_configurations CcAIAgent#association_configurations}
    */
    readonly associationConfigurations?: AssociationConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#intent_labeling_generation_ai_prompt_id CcAIAgent#intent_labeling_generation_ai_prompt_id}
    */
    readonly intentLabelingGenerationAiPromptId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#locale CcAIAgent#locale}
    */
    readonly locale?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#query_reformulation_ai_prompt_id CcAIAgent#query_reformulation_ai_prompt_id}
    */
    readonly queryReformulationAiPromptId?: string;
}
export class AnswerRecommendationAIAgentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AnswerRecommendationAIAgentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._answerGenerationAiGuardrailId !== undefined) {
            hasAnyValues = true;
            internalValueResult.answerGenerationAiGuardrailId = this._answerGenerationAiGuardrailId;
        }
        if (this._answerGenerationAiPromptId !== undefined) {
            hasAnyValues = true;
            internalValueResult.answerGenerationAiPromptId = this._answerGenerationAiPromptId;
        }
        if (this._associationConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationConfigurations = this._associationConfigurations?.internalValue;
        }
        if (this._intentLabelingGenerationAiPromptId !== undefined) {
            hasAnyValues = true;
            internalValueResult.intentLabelingGenerationAiPromptId = this._intentLabelingGenerationAiPromptId;
        }
        if (this._locale !== undefined) {
            hasAnyValues = true;
            internalValueResult.locale = this._locale;
        }
        if (this._queryReformulationAiPromptId !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryReformulationAiPromptId = this._queryReformulationAiPromptId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnswerRecommendationAIAgentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._answerGenerationAiGuardrailId = undefined;
            this._answerGenerationAiPromptId = undefined;
            this._associationConfigurations.internalValue = undefined;
            this._intentLabelingGenerationAiPromptId = undefined;
            this._locale = undefined;
            this._queryReformulationAiPromptId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._answerGenerationAiGuardrailId = value.answerGenerationAiGuardrailId;
            this._answerGenerationAiPromptId = value.answerGenerationAiPromptId;
            this._associationConfigurations.internalValue = value.associationConfigurations;
            this._intentLabelingGenerationAiPromptId = value.intentLabelingGenerationAiPromptId;
            this._locale = value.locale;
            this._queryReformulationAiPromptId = value.queryReformulationAiPromptId;
        }
    }

    // answer_generation_ai_guardrail_id - computed: true, optional: true, required: false
    private _answerGenerationAiGuardrailId?: string; 
    public get answerGenerationAiGuardrailId() {
        return this.getStringAttribute('answer_generation_ai_guardrail_id');
    }
    public set answerGenerationAiGuardrailId(value: string) {
        this._answerGenerationAiGuardrailId = value;
    }
    public resetAnswerGenerationAiGuardrailId() {
        this._answerGenerationAiGuardrailId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get answerGenerationAiGuardrailIdInput() {
        return this._answerGenerationAiGuardrailId;
    }

    // answer_generation_ai_prompt_id - computed: true, optional: true, required: false
    private _answerGenerationAiPromptId?: string; 
    public get answerGenerationAiPromptId() {
        return this.getStringAttribute('answer_generation_ai_prompt_id');
    }
    public set answerGenerationAiPromptId(value: string) {
        this._answerGenerationAiPromptId = value;
    }
    public resetAnswerGenerationAiPromptId() {
        this._answerGenerationAiPromptId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get answerGenerationAiPromptIdInput() {
        return this._answerGenerationAiPromptId;
    }

    // association_configurations - computed: true, optional: true, required: false
    private _associationConfigurations = new AssociationConfigurationPropertyList(this, "association_configurations", false);
    public get associationConfigurations() {
        return this._associationConfigurations;
    }
    public putAssociationConfigurations(value: AssociationConfigurationProperty[] | cdktn.IResolvable) {
        this._associationConfigurations.internalValue = value;
    }
    public resetAssociationConfigurations() {
        this._associationConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationConfigurationsInput() {
        return this._associationConfigurations.internalValue;
    }

    // intent_labeling_generation_ai_prompt_id - computed: true, optional: true, required: false
    private _intentLabelingGenerationAiPromptId?: string; 
    public get intentLabelingGenerationAiPromptId() {
        return this.getStringAttribute('intent_labeling_generation_ai_prompt_id');
    }
    public set intentLabelingGenerationAiPromptId(value: string) {
        this._intentLabelingGenerationAiPromptId = value;
    }
    public resetIntentLabelingGenerationAiPromptId() {
        this._intentLabelingGenerationAiPromptId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intentLabelingGenerationAiPromptIdInput() {
        return this._intentLabelingGenerationAiPromptId;
    }

    // locale - computed: true, optional: true, required: false
    private _locale?: string; 
    public get locale() {
        return this.getStringAttribute('locale');
    }
    public set locale(value: string) {
        this._locale = value;
    }
    public resetLocale() {
        this._locale = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localeInput() {
        return this._locale;
    }

    // query_reformulation_ai_prompt_id - computed: true, optional: true, required: false
    private _queryReformulationAiPromptId?: string; 
    public get queryReformulationAiPromptId() {
        return this.getStringAttribute('query_reformulation_ai_prompt_id');
    }
    public set queryReformulationAiPromptId(value: string) {
        this._queryReformulationAiPromptId = value;
    }
    public resetQueryReformulationAiPromptId() {
        this._queryReformulationAiPromptId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryReformulationAiPromptIdInput() {
        return this._queryReformulationAiPromptId;
    }
}
export interface CaseSummarizationAIAgentConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#case_summarization_ai_guardrail_id CcAIAgent#case_summarization_ai_guardrail_id}
    */
    readonly caseSummarizationAiGuardrailId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#case_summarization_ai_prompt_id CcAIAgent#case_summarization_ai_prompt_id}
    */
    readonly caseSummarizationAiPromptId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#locale CcAIAgent#locale}
    */
    readonly locale?: string;
}
export class CaseSummarizationAIAgentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CaseSummarizationAIAgentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._caseSummarizationAiGuardrailId !== undefined) {
            hasAnyValues = true;
            internalValueResult.caseSummarizationAiGuardrailId = this._caseSummarizationAiGuardrailId;
        }
        if (this._caseSummarizationAiPromptId !== undefined) {
            hasAnyValues = true;
            internalValueResult.caseSummarizationAiPromptId = this._caseSummarizationAiPromptId;
        }
        if (this._locale !== undefined) {
            hasAnyValues = true;
            internalValueResult.locale = this._locale;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CaseSummarizationAIAgentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._caseSummarizationAiGuardrailId = undefined;
            this._caseSummarizationAiPromptId = undefined;
            this._locale = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._caseSummarizationAiGuardrailId = value.caseSummarizationAiGuardrailId;
            this._caseSummarizationAiPromptId = value.caseSummarizationAiPromptId;
            this._locale = value.locale;
        }
    }

    // case_summarization_ai_guardrail_id - computed: true, optional: true, required: false
    private _caseSummarizationAiGuardrailId?: string; 
    public get caseSummarizationAiGuardrailId() {
        return this.getStringAttribute('case_summarization_ai_guardrail_id');
    }
    public set caseSummarizationAiGuardrailId(value: string) {
        this._caseSummarizationAiGuardrailId = value;
    }
    public resetCaseSummarizationAiGuardrailId() {
        this._caseSummarizationAiGuardrailId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caseSummarizationAiGuardrailIdInput() {
        return this._caseSummarizationAiGuardrailId;
    }

    // case_summarization_ai_prompt_id - computed: true, optional: true, required: false
    private _caseSummarizationAiPromptId?: string; 
    public get caseSummarizationAiPromptId() {
        return this.getStringAttribute('case_summarization_ai_prompt_id');
    }
    public set caseSummarizationAiPromptId(value: string) {
        this._caseSummarizationAiPromptId = value;
    }
    public resetCaseSummarizationAiPromptId() {
        this._caseSummarizationAiPromptId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caseSummarizationAiPromptIdInput() {
        return this._caseSummarizationAiPromptId;
    }

    // locale - computed: true, optional: true, required: false
    private _locale?: string; 
    public get locale() {
        return this.getStringAttribute('locale');
    }
    public set locale(value: string) {
        this._locale = value;
    }
    public resetLocale() {
        this._locale = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localeInput() {
        return this._locale;
    }
}
export interface ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty | cdktn.IResolvable | undefined) {
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

export class ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyOutputReference {
        return new ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable | undefined) {
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

export class ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyOutputReference {
        return new ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable | undefined) {
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
export interface ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#and_conditions CcAIAgent#and_conditions}
    */
    readonly andConditions?: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#tag_condition CcAIAgent#tag_condition}
    */
    readonly tagCondition?: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty;
}
export class ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._andConditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.andConditions = this._andConditions?.internalValue;
        }
        if (this._tagCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagCondition = this._tagCondition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = undefined;
            this._tagCondition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = value.andConditions;
            this._tagCondition.internalValue = value.tagCondition;
        }
    }

    // and_conditions - computed: true, optional: true, required: false
    private _andConditions = new ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyList(this, "and_conditions", false);
    public get andConditions() {
        return this._andConditions;
    }
    public putAndConditions(value: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty[] | cdktn.IResolvable) {
        this._andConditions.internalValue = value;
    }
    public resetAndConditions() {
        this._andConditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get andConditionsInput() {
        return this._andConditions.internalValue;
    }

    // tag_condition - computed: true, optional: true, required: false
    private _tagCondition = new ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyOutputReference(this, "tag_condition");
    public get tagCondition() {
        return this._tagCondition;
    }
    public putTagCondition(value: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty) {
        this._tagCondition.internalValue = value;
    }
    public resetTagCondition() {
        this._tagCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagConditionInput() {
        return this._tagCondition.internalValue;
    }
}

export class ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyOutputReference {
        return new ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable | undefined) {
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
export interface ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#and_conditions CcAIAgent#and_conditions}
    */
    readonly andConditions?: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#or_conditions CcAIAgent#or_conditions}
    */
    readonly orConditions?: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#tag_condition CcAIAgent#tag_condition}
    */
    readonly tagCondition?: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty;
}
export class ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._andConditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.andConditions = this._andConditions?.internalValue;
        }
        if (this._orConditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.orConditions = this._orConditions?.internalValue;
        }
        if (this._tagCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagCondition = this._tagCondition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = undefined;
            this._orConditions.internalValue = undefined;
            this._tagCondition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = value.andConditions;
            this._orConditions.internalValue = value.orConditions;
            this._tagCondition.internalValue = value.tagCondition;
        }
    }

    // and_conditions - computed: true, optional: true, required: false
    private _andConditions = new ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyList(this, "and_conditions", false);
    public get andConditions() {
        return this._andConditions;
    }
    public putAndConditions(value: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty[] | cdktn.IResolvable) {
        this._andConditions.internalValue = value;
    }
    public resetAndConditions() {
        this._andConditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get andConditionsInput() {
        return this._andConditions.internalValue;
    }

    // or_conditions - computed: true, optional: true, required: false
    private _orConditions = new ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyList(this, "or_conditions", false);
    public get orConditions() {
        return this._orConditions;
    }
    public putOrConditions(value: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty[] | cdktn.IResolvable) {
        this._orConditions.internalValue = value;
    }
    public resetOrConditions() {
        this._orConditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orConditionsInput() {
        return this._orConditions.internalValue;
    }

    // tag_condition - computed: true, optional: true, required: false
    private _tagCondition = new ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyOutputReference(this, "tag_condition");
    public get tagCondition() {
        return this._tagCondition;
    }
    public putTagCondition(value: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty) {
        this._tagCondition.internalValue = value;
    }
    public resetTagCondition() {
        this._tagCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagConditionInput() {
        return this._tagCondition.internalValue;
    }
}
export interface ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#content_tag_filter CcAIAgent#content_tag_filter}
    */
    readonly contentTagFilter?: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#max_results CcAIAgent#max_results}
    */
    readonly maxResults?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#override_knowledge_base_search_type CcAIAgent#override_knowledge_base_search_type}
    */
    readonly overrideKnowledgeBaseSearchType?: string;
}
export class ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentTagFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentTagFilter = this._contentTagFilter?.internalValue;
        }
        if (this._maxResults !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxResults = this._maxResults;
        }
        if (this._overrideKnowledgeBaseSearchType !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrideKnowledgeBaseSearchType = this._overrideKnowledgeBaseSearchType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentTagFilter.internalValue = undefined;
            this._maxResults = undefined;
            this._overrideKnowledgeBaseSearchType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentTagFilter.internalValue = value.contentTagFilter;
            this._maxResults = value.maxResults;
            this._overrideKnowledgeBaseSearchType = value.overrideKnowledgeBaseSearchType;
        }
    }

    // content_tag_filter - computed: true, optional: true, required: false
    private _contentTagFilter = new ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyOutputReference(this, "content_tag_filter");
    public get contentTagFilter() {
        return this._contentTagFilter;
    }
    public putContentTagFilter(value: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty) {
        this._contentTagFilter.internalValue = value;
    }
    public resetContentTagFilter() {
        this._contentTagFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTagFilterInput() {
        return this._contentTagFilter.internalValue;
    }

    // max_results - computed: true, optional: true, required: false
    private _maxResults?: number; 
    public get maxResults() {
        return this.getNumberAttribute('max_results');
    }
    public set maxResults(value: number) {
        this._maxResults = value;
    }
    public resetMaxResults() {
        this._maxResults = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxResultsInput() {
        return this._maxResults;
    }

    // override_knowledge_base_search_type - computed: true, optional: true, required: false
    private _overrideKnowledgeBaseSearchType?: string; 
    public get overrideKnowledgeBaseSearchType() {
        return this.getStringAttribute('override_knowledge_base_search_type');
    }
    public set overrideKnowledgeBaseSearchType(value: string) {
        this._overrideKnowledgeBaseSearchType = value;
    }
    public resetOverrideKnowledgeBaseSearchType() {
        this._overrideKnowledgeBaseSearchType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideKnowledgeBaseSearchTypeInput() {
        return this._overrideKnowledgeBaseSearchType;
    }
}
export interface ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#knowledge_base_association_configuration_data CcAIAgent#knowledge_base_association_configuration_data}
    */
    readonly knowledgeBaseAssociationConfigurationData?: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty;
}
export class ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._knowledgeBaseAssociationConfigurationData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.knowledgeBaseAssociationConfigurationData = this._knowledgeBaseAssociationConfigurationData?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._knowledgeBaseAssociationConfigurationData.internalValue = value.knowledgeBaseAssociationConfigurationData;
        }
    }

    // knowledge_base_association_configuration_data - computed: true, optional: true, required: false
    private _knowledgeBaseAssociationConfigurationData = new ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyOutputReference(this, "knowledge_base_association_configuration_data");
    public get knowledgeBaseAssociationConfigurationData() {
        return this._knowledgeBaseAssociationConfigurationData;
    }
    public putKnowledgeBaseAssociationConfigurationData(value: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty) {
        this._knowledgeBaseAssociationConfigurationData.internalValue = value;
    }
    public resetKnowledgeBaseAssociationConfigurationData() {
        this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get knowledgeBaseAssociationConfigurationDataInput() {
        return this._knowledgeBaseAssociationConfigurationData.internalValue;
    }
}
export interface ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_configuration_data CcAIAgent#association_configuration_data}
    */
    readonly associationConfigurationData?: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_id CcAIAgent#association_id}
    */
    readonly associationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_type CcAIAgent#association_type}
    */
    readonly associationType?: string;
}
export class ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._associationConfigurationData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationConfigurationData = this._associationConfigurationData?.internalValue;
        }
        if (this._associationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationId = this._associationId;
        }
        if (this._associationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationType = this._associationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._associationConfigurationData.internalValue = undefined;
            this._associationId = undefined;
            this._associationType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._associationConfigurationData.internalValue = value.associationConfigurationData;
            this._associationId = value.associationId;
            this._associationType = value.associationType;
        }
    }

    // association_configuration_data - computed: true, optional: true, required: false
    private _associationConfigurationData = new ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyOutputReference(this, "association_configuration_data");
    public get associationConfigurationData() {
        return this._associationConfigurationData;
    }
    public putAssociationConfigurationData(value: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty) {
        this._associationConfigurationData.internalValue = value;
    }
    public resetAssociationConfigurationData() {
        this._associationConfigurationData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationConfigurationDataInput() {
        return this._associationConfigurationData.internalValue;
    }

    // association_id - computed: true, optional: true, required: false
    private _associationId?: string; 
    public get associationId() {
        return this.getStringAttribute('association_id');
    }
    public set associationId(value: string) {
        this._associationId = value;
    }
    public resetAssociationId() {
        this._associationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationIdInput() {
        return this._associationId;
    }

    // association_type - computed: true, optional: true, required: false
    private _associationType?: string; 
    public get associationType() {
        return this.getStringAttribute('association_type');
    }
    public set associationType(value: string) {
        this._associationType = value;
    }
    public resetAssociationType() {
        this._associationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationTypeInput() {
        return this._associationType;
    }
}

export class ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsPropertyOutputReference {
        return new ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EmailGenerativeAnswerAIAgentConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_configurations CcAIAgent#association_configurations}
    */
    readonly associationConfigurations?: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#email_generative_answer_ai_prompt_id CcAIAgent#email_generative_answer_ai_prompt_id}
    */
    readonly emailGenerativeAnswerAiPromptId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#email_query_reformulation_ai_prompt_id CcAIAgent#email_query_reformulation_ai_prompt_id}
    */
    readonly emailQueryReformulationAiPromptId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#locale CcAIAgent#locale}
    */
    readonly locale?: string;
}
export class EmailGenerativeAnswerAIAgentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EmailGenerativeAnswerAIAgentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._associationConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationConfigurations = this._associationConfigurations?.internalValue;
        }
        if (this._emailGenerativeAnswerAiPromptId !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailGenerativeAnswerAiPromptId = this._emailGenerativeAnswerAiPromptId;
        }
        if (this._emailQueryReformulationAiPromptId !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailQueryReformulationAiPromptId = this._emailQueryReformulationAiPromptId;
        }
        if (this._locale !== undefined) {
            hasAnyValues = true;
            internalValueResult.locale = this._locale;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EmailGenerativeAnswerAIAgentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._associationConfigurations.internalValue = undefined;
            this._emailGenerativeAnswerAiPromptId = undefined;
            this._emailQueryReformulationAiPromptId = undefined;
            this._locale = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._associationConfigurations.internalValue = value.associationConfigurations;
            this._emailGenerativeAnswerAiPromptId = value.emailGenerativeAnswerAiPromptId;
            this._emailQueryReformulationAiPromptId = value.emailQueryReformulationAiPromptId;
            this._locale = value.locale;
        }
    }

    // association_configurations - computed: true, optional: true, required: false
    private _associationConfigurations = new ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsPropertyList(this, "association_configurations", false);
    public get associationConfigurations() {
        return this._associationConfigurations;
    }
    public putAssociationConfigurations(value: ConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsProperty[] | cdktn.IResolvable) {
        this._associationConfigurations.internalValue = value;
    }
    public resetAssociationConfigurations() {
        this._associationConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationConfigurationsInput() {
        return this._associationConfigurations.internalValue;
    }

    // email_generative_answer_ai_prompt_id - computed: true, optional: true, required: false
    private _emailGenerativeAnswerAiPromptId?: string; 
    public get emailGenerativeAnswerAiPromptId() {
        return this.getStringAttribute('email_generative_answer_ai_prompt_id');
    }
    public set emailGenerativeAnswerAiPromptId(value: string) {
        this._emailGenerativeAnswerAiPromptId = value;
    }
    public resetEmailGenerativeAnswerAiPromptId() {
        this._emailGenerativeAnswerAiPromptId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailGenerativeAnswerAiPromptIdInput() {
        return this._emailGenerativeAnswerAiPromptId;
    }

    // email_query_reformulation_ai_prompt_id - computed: true, optional: true, required: false
    private _emailQueryReformulationAiPromptId?: string; 
    public get emailQueryReformulationAiPromptId() {
        return this.getStringAttribute('email_query_reformulation_ai_prompt_id');
    }
    public set emailQueryReformulationAiPromptId(value: string) {
        this._emailQueryReformulationAiPromptId = value;
    }
    public resetEmailQueryReformulationAiPromptId() {
        this._emailQueryReformulationAiPromptId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailQueryReformulationAiPromptIdInput() {
        return this._emailQueryReformulationAiPromptId;
    }

    // locale - computed: true, optional: true, required: false
    private _locale?: string; 
    public get locale() {
        return this.getStringAttribute('locale');
    }
    public set locale(value: string) {
        this._locale = value;
    }
    public resetLocale() {
        this._locale = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localeInput() {
        return this._locale;
    }
}
export interface EmailOverviewAIAgentConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#email_overview_ai_prompt_id CcAIAgent#email_overview_ai_prompt_id}
    */
    readonly emailOverviewAiPromptId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#locale CcAIAgent#locale}
    */
    readonly locale?: string;
}
export class EmailOverviewAIAgentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EmailOverviewAIAgentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._emailOverviewAiPromptId !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailOverviewAiPromptId = this._emailOverviewAiPromptId;
        }
        if (this._locale !== undefined) {
            hasAnyValues = true;
            internalValueResult.locale = this._locale;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EmailOverviewAIAgentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._emailOverviewAiPromptId = undefined;
            this._locale = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._emailOverviewAiPromptId = value.emailOverviewAiPromptId;
            this._locale = value.locale;
        }
    }

    // email_overview_ai_prompt_id - computed: true, optional: true, required: false
    private _emailOverviewAiPromptId?: string; 
    public get emailOverviewAiPromptId() {
        return this.getStringAttribute('email_overview_ai_prompt_id');
    }
    public set emailOverviewAiPromptId(value: string) {
        this._emailOverviewAiPromptId = value;
    }
    public resetEmailOverviewAiPromptId() {
        this._emailOverviewAiPromptId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailOverviewAiPromptIdInput() {
        return this._emailOverviewAiPromptId;
    }

    // locale - computed: true, optional: true, required: false
    private _locale?: string; 
    public get locale() {
        return this.getStringAttribute('locale');
    }
    public set locale(value: string) {
        this._locale = value;
    }
    public resetLocale() {
        this._locale = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localeInput() {
        return this._locale;
    }
}
export interface ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty | cdktn.IResolvable | undefined) {
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

export class ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyOutputReference {
        return new ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable | undefined) {
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

export class ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyOutputReference {
        return new ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable | undefined) {
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
export interface ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#and_conditions CcAIAgent#and_conditions}
    */
    readonly andConditions?: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#tag_condition CcAIAgent#tag_condition}
    */
    readonly tagCondition?: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty;
}
export class ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._andConditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.andConditions = this._andConditions?.internalValue;
        }
        if (this._tagCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagCondition = this._tagCondition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = undefined;
            this._tagCondition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = value.andConditions;
            this._tagCondition.internalValue = value.tagCondition;
        }
    }

    // and_conditions - computed: true, optional: true, required: false
    private _andConditions = new ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyList(this, "and_conditions", false);
    public get andConditions() {
        return this._andConditions;
    }
    public putAndConditions(value: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty[] | cdktn.IResolvable) {
        this._andConditions.internalValue = value;
    }
    public resetAndConditions() {
        this._andConditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get andConditionsInput() {
        return this._andConditions.internalValue;
    }

    // tag_condition - computed: true, optional: true, required: false
    private _tagCondition = new ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyOutputReference(this, "tag_condition");
    public get tagCondition() {
        return this._tagCondition;
    }
    public putTagCondition(value: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty) {
        this._tagCondition.internalValue = value;
    }
    public resetTagCondition() {
        this._tagCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagConditionInput() {
        return this._tagCondition.internalValue;
    }
}

export class ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyOutputReference {
        return new ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable | undefined) {
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
export interface ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#and_conditions CcAIAgent#and_conditions}
    */
    readonly andConditions?: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#or_conditions CcAIAgent#or_conditions}
    */
    readonly orConditions?: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#tag_condition CcAIAgent#tag_condition}
    */
    readonly tagCondition?: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty;
}
export class ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._andConditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.andConditions = this._andConditions?.internalValue;
        }
        if (this._orConditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.orConditions = this._orConditions?.internalValue;
        }
        if (this._tagCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagCondition = this._tagCondition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = undefined;
            this._orConditions.internalValue = undefined;
            this._tagCondition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = value.andConditions;
            this._orConditions.internalValue = value.orConditions;
            this._tagCondition.internalValue = value.tagCondition;
        }
    }

    // and_conditions - computed: true, optional: true, required: false
    private _andConditions = new ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyList(this, "and_conditions", false);
    public get andConditions() {
        return this._andConditions;
    }
    public putAndConditions(value: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty[] | cdktn.IResolvable) {
        this._andConditions.internalValue = value;
    }
    public resetAndConditions() {
        this._andConditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get andConditionsInput() {
        return this._andConditions.internalValue;
    }

    // or_conditions - computed: true, optional: true, required: false
    private _orConditions = new ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyList(this, "or_conditions", false);
    public get orConditions() {
        return this._orConditions;
    }
    public putOrConditions(value: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty[] | cdktn.IResolvable) {
        this._orConditions.internalValue = value;
    }
    public resetOrConditions() {
        this._orConditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orConditionsInput() {
        return this._orConditions.internalValue;
    }

    // tag_condition - computed: true, optional: true, required: false
    private _tagCondition = new ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyOutputReference(this, "tag_condition");
    public get tagCondition() {
        return this._tagCondition;
    }
    public putTagCondition(value: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty) {
        this._tagCondition.internalValue = value;
    }
    public resetTagCondition() {
        this._tagCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagConditionInput() {
        return this._tagCondition.internalValue;
    }
}
export interface ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#content_tag_filter CcAIAgent#content_tag_filter}
    */
    readonly contentTagFilter?: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#max_results CcAIAgent#max_results}
    */
    readonly maxResults?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#override_knowledge_base_search_type CcAIAgent#override_knowledge_base_search_type}
    */
    readonly overrideKnowledgeBaseSearchType?: string;
}
export class ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentTagFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentTagFilter = this._contentTagFilter?.internalValue;
        }
        if (this._maxResults !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxResults = this._maxResults;
        }
        if (this._overrideKnowledgeBaseSearchType !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrideKnowledgeBaseSearchType = this._overrideKnowledgeBaseSearchType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentTagFilter.internalValue = undefined;
            this._maxResults = undefined;
            this._overrideKnowledgeBaseSearchType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentTagFilter.internalValue = value.contentTagFilter;
            this._maxResults = value.maxResults;
            this._overrideKnowledgeBaseSearchType = value.overrideKnowledgeBaseSearchType;
        }
    }

    // content_tag_filter - computed: true, optional: true, required: false
    private _contentTagFilter = new ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyOutputReference(this, "content_tag_filter");
    public get contentTagFilter() {
        return this._contentTagFilter;
    }
    public putContentTagFilter(value: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty) {
        this._contentTagFilter.internalValue = value;
    }
    public resetContentTagFilter() {
        this._contentTagFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTagFilterInput() {
        return this._contentTagFilter.internalValue;
    }

    // max_results - computed: true, optional: true, required: false
    private _maxResults?: number; 
    public get maxResults() {
        return this.getNumberAttribute('max_results');
    }
    public set maxResults(value: number) {
        this._maxResults = value;
    }
    public resetMaxResults() {
        this._maxResults = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxResultsInput() {
        return this._maxResults;
    }

    // override_knowledge_base_search_type - computed: true, optional: true, required: false
    private _overrideKnowledgeBaseSearchType?: string; 
    public get overrideKnowledgeBaseSearchType() {
        return this.getStringAttribute('override_knowledge_base_search_type');
    }
    public set overrideKnowledgeBaseSearchType(value: string) {
        this._overrideKnowledgeBaseSearchType = value;
    }
    public resetOverrideKnowledgeBaseSearchType() {
        this._overrideKnowledgeBaseSearchType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideKnowledgeBaseSearchTypeInput() {
        return this._overrideKnowledgeBaseSearchType;
    }
}
export interface ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#knowledge_base_association_configuration_data CcAIAgent#knowledge_base_association_configuration_data}
    */
    readonly knowledgeBaseAssociationConfigurationData?: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty;
}
export class ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._knowledgeBaseAssociationConfigurationData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.knowledgeBaseAssociationConfigurationData = this._knowledgeBaseAssociationConfigurationData?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._knowledgeBaseAssociationConfigurationData.internalValue = value.knowledgeBaseAssociationConfigurationData;
        }
    }

    // knowledge_base_association_configuration_data - computed: true, optional: true, required: false
    private _knowledgeBaseAssociationConfigurationData = new ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyOutputReference(this, "knowledge_base_association_configuration_data");
    public get knowledgeBaseAssociationConfigurationData() {
        return this._knowledgeBaseAssociationConfigurationData;
    }
    public putKnowledgeBaseAssociationConfigurationData(value: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty) {
        this._knowledgeBaseAssociationConfigurationData.internalValue = value;
    }
    public resetKnowledgeBaseAssociationConfigurationData() {
        this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get knowledgeBaseAssociationConfigurationDataInput() {
        return this._knowledgeBaseAssociationConfigurationData.internalValue;
    }
}
export interface ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_configuration_data CcAIAgent#association_configuration_data}
    */
    readonly associationConfigurationData?: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_id CcAIAgent#association_id}
    */
    readonly associationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_type CcAIAgent#association_type}
    */
    readonly associationType?: string;
}
export class ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._associationConfigurationData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationConfigurationData = this._associationConfigurationData?.internalValue;
        }
        if (this._associationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationId = this._associationId;
        }
        if (this._associationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationType = this._associationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._associationConfigurationData.internalValue = undefined;
            this._associationId = undefined;
            this._associationType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._associationConfigurationData.internalValue = value.associationConfigurationData;
            this._associationId = value.associationId;
            this._associationType = value.associationType;
        }
    }

    // association_configuration_data - computed: true, optional: true, required: false
    private _associationConfigurationData = new ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyOutputReference(this, "association_configuration_data");
    public get associationConfigurationData() {
        return this._associationConfigurationData;
    }
    public putAssociationConfigurationData(value: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty) {
        this._associationConfigurationData.internalValue = value;
    }
    public resetAssociationConfigurationData() {
        this._associationConfigurationData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationConfigurationDataInput() {
        return this._associationConfigurationData.internalValue;
    }

    // association_id - computed: true, optional: true, required: false
    private _associationId?: string; 
    public get associationId() {
        return this.getStringAttribute('association_id');
    }
    public set associationId(value: string) {
        this._associationId = value;
    }
    public resetAssociationId() {
        this._associationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationIdInput() {
        return this._associationId;
    }

    // association_type - computed: true, optional: true, required: false
    private _associationType?: string; 
    public get associationType() {
        return this.getStringAttribute('association_type');
    }
    public set associationType(value: string) {
        this._associationType = value;
    }
    public resetAssociationType() {
        this._associationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationTypeInput() {
        return this._associationType;
    }
}

export class ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsPropertyOutputReference {
        return new ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EmailResponseAIAgentConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_configurations CcAIAgent#association_configurations}
    */
    readonly associationConfigurations?: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#email_query_reformulation_ai_prompt_id CcAIAgent#email_query_reformulation_ai_prompt_id}
    */
    readonly emailQueryReformulationAiPromptId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#email_response_ai_prompt_id CcAIAgent#email_response_ai_prompt_id}
    */
    readonly emailResponseAiPromptId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#locale CcAIAgent#locale}
    */
    readonly locale?: string;
}
export class EmailResponseAIAgentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EmailResponseAIAgentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._associationConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationConfigurations = this._associationConfigurations?.internalValue;
        }
        if (this._emailQueryReformulationAiPromptId !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailQueryReformulationAiPromptId = this._emailQueryReformulationAiPromptId;
        }
        if (this._emailResponseAiPromptId !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailResponseAiPromptId = this._emailResponseAiPromptId;
        }
        if (this._locale !== undefined) {
            hasAnyValues = true;
            internalValueResult.locale = this._locale;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EmailResponseAIAgentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._associationConfigurations.internalValue = undefined;
            this._emailQueryReformulationAiPromptId = undefined;
            this._emailResponseAiPromptId = undefined;
            this._locale = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._associationConfigurations.internalValue = value.associationConfigurations;
            this._emailQueryReformulationAiPromptId = value.emailQueryReformulationAiPromptId;
            this._emailResponseAiPromptId = value.emailResponseAiPromptId;
            this._locale = value.locale;
        }
    }

    // association_configurations - computed: true, optional: true, required: false
    private _associationConfigurations = new ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsPropertyList(this, "association_configurations", false);
    public get associationConfigurations() {
        return this._associationConfigurations;
    }
    public putAssociationConfigurations(value: ConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsProperty[] | cdktn.IResolvable) {
        this._associationConfigurations.internalValue = value;
    }
    public resetAssociationConfigurations() {
        this._associationConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationConfigurationsInput() {
        return this._associationConfigurations.internalValue;
    }

    // email_query_reformulation_ai_prompt_id - computed: true, optional: true, required: false
    private _emailQueryReformulationAiPromptId?: string; 
    public get emailQueryReformulationAiPromptId() {
        return this.getStringAttribute('email_query_reformulation_ai_prompt_id');
    }
    public set emailQueryReformulationAiPromptId(value: string) {
        this._emailQueryReformulationAiPromptId = value;
    }
    public resetEmailQueryReformulationAiPromptId() {
        this._emailQueryReformulationAiPromptId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailQueryReformulationAiPromptIdInput() {
        return this._emailQueryReformulationAiPromptId;
    }

    // email_response_ai_prompt_id - computed: true, optional: true, required: false
    private _emailResponseAiPromptId?: string; 
    public get emailResponseAiPromptId() {
        return this.getStringAttribute('email_response_ai_prompt_id');
    }
    public set emailResponseAiPromptId(value: string) {
        this._emailResponseAiPromptId = value;
    }
    public resetEmailResponseAiPromptId() {
        this._emailResponseAiPromptId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailResponseAiPromptIdInput() {
        return this._emailResponseAiPromptId;
    }

    // locale - computed: true, optional: true, required: false
    private _locale?: string; 
    public get locale() {
        return this.getStringAttribute('locale');
    }
    public set locale(value: string) {
        this._locale = value;
    }
    public resetLocale() {
        this._locale = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localeInput() {
        return this._locale;
    }
}
export interface ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty | cdktn.IResolvable | undefined) {
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

export class ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyOutputReference {
        return new ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable | undefined) {
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

export class ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyOutputReference {
        return new ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable | undefined) {
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
export interface ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#and_conditions CcAIAgent#and_conditions}
    */
    readonly andConditions?: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#tag_condition CcAIAgent#tag_condition}
    */
    readonly tagCondition?: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty;
}
export class ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._andConditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.andConditions = this._andConditions?.internalValue;
        }
        if (this._tagCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagCondition = this._tagCondition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = undefined;
            this._tagCondition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = value.andConditions;
            this._tagCondition.internalValue = value.tagCondition;
        }
    }

    // and_conditions - computed: true, optional: true, required: false
    private _andConditions = new ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyList(this, "and_conditions", false);
    public get andConditions() {
        return this._andConditions;
    }
    public putAndConditions(value: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty[] | cdktn.IResolvable) {
        this._andConditions.internalValue = value;
    }
    public resetAndConditions() {
        this._andConditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get andConditionsInput() {
        return this._andConditions.internalValue;
    }

    // tag_condition - computed: true, optional: true, required: false
    private _tagCondition = new ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyOutputReference(this, "tag_condition");
    public get tagCondition() {
        return this._tagCondition;
    }
    public putTagCondition(value: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty) {
        this._tagCondition.internalValue = value;
    }
    public resetTagCondition() {
        this._tagCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagConditionInput() {
        return this._tagCondition.internalValue;
    }
}

export class ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyOutputReference {
        return new ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable | undefined) {
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
export interface ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#and_conditions CcAIAgent#and_conditions}
    */
    readonly andConditions?: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#or_conditions CcAIAgent#or_conditions}
    */
    readonly orConditions?: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#tag_condition CcAIAgent#tag_condition}
    */
    readonly tagCondition?: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty;
}
export class ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._andConditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.andConditions = this._andConditions?.internalValue;
        }
        if (this._orConditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.orConditions = this._orConditions?.internalValue;
        }
        if (this._tagCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagCondition = this._tagCondition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = undefined;
            this._orConditions.internalValue = undefined;
            this._tagCondition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = value.andConditions;
            this._orConditions.internalValue = value.orConditions;
            this._tagCondition.internalValue = value.tagCondition;
        }
    }

    // and_conditions - computed: true, optional: true, required: false
    private _andConditions = new ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyList(this, "and_conditions", false);
    public get andConditions() {
        return this._andConditions;
    }
    public putAndConditions(value: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty[] | cdktn.IResolvable) {
        this._andConditions.internalValue = value;
    }
    public resetAndConditions() {
        this._andConditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get andConditionsInput() {
        return this._andConditions.internalValue;
    }

    // or_conditions - computed: true, optional: true, required: false
    private _orConditions = new ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyList(this, "or_conditions", false);
    public get orConditions() {
        return this._orConditions;
    }
    public putOrConditions(value: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty[] | cdktn.IResolvable) {
        this._orConditions.internalValue = value;
    }
    public resetOrConditions() {
        this._orConditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orConditionsInput() {
        return this._orConditions.internalValue;
    }

    // tag_condition - computed: true, optional: true, required: false
    private _tagCondition = new ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyOutputReference(this, "tag_condition");
    public get tagCondition() {
        return this._tagCondition;
    }
    public putTagCondition(value: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty) {
        this._tagCondition.internalValue = value;
    }
    public resetTagCondition() {
        this._tagCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagConditionInput() {
        return this._tagCondition.internalValue;
    }
}
export interface ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#content_tag_filter CcAIAgent#content_tag_filter}
    */
    readonly contentTagFilter?: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#max_results CcAIAgent#max_results}
    */
    readonly maxResults?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#override_knowledge_base_search_type CcAIAgent#override_knowledge_base_search_type}
    */
    readonly overrideKnowledgeBaseSearchType?: string;
}
export class ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentTagFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentTagFilter = this._contentTagFilter?.internalValue;
        }
        if (this._maxResults !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxResults = this._maxResults;
        }
        if (this._overrideKnowledgeBaseSearchType !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrideKnowledgeBaseSearchType = this._overrideKnowledgeBaseSearchType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentTagFilter.internalValue = undefined;
            this._maxResults = undefined;
            this._overrideKnowledgeBaseSearchType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentTagFilter.internalValue = value.contentTagFilter;
            this._maxResults = value.maxResults;
            this._overrideKnowledgeBaseSearchType = value.overrideKnowledgeBaseSearchType;
        }
    }

    // content_tag_filter - computed: true, optional: true, required: false
    private _contentTagFilter = new ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyOutputReference(this, "content_tag_filter");
    public get contentTagFilter() {
        return this._contentTagFilter;
    }
    public putContentTagFilter(value: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty) {
        this._contentTagFilter.internalValue = value;
    }
    public resetContentTagFilter() {
        this._contentTagFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTagFilterInput() {
        return this._contentTagFilter.internalValue;
    }

    // max_results - computed: true, optional: true, required: false
    private _maxResults?: number; 
    public get maxResults() {
        return this.getNumberAttribute('max_results');
    }
    public set maxResults(value: number) {
        this._maxResults = value;
    }
    public resetMaxResults() {
        this._maxResults = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxResultsInput() {
        return this._maxResults;
    }

    // override_knowledge_base_search_type - computed: true, optional: true, required: false
    private _overrideKnowledgeBaseSearchType?: string; 
    public get overrideKnowledgeBaseSearchType() {
        return this.getStringAttribute('override_knowledge_base_search_type');
    }
    public set overrideKnowledgeBaseSearchType(value: string) {
        this._overrideKnowledgeBaseSearchType = value;
    }
    public resetOverrideKnowledgeBaseSearchType() {
        this._overrideKnowledgeBaseSearchType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideKnowledgeBaseSearchTypeInput() {
        return this._overrideKnowledgeBaseSearchType;
    }
}
export interface ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#knowledge_base_association_configuration_data CcAIAgent#knowledge_base_association_configuration_data}
    */
    readonly knowledgeBaseAssociationConfigurationData?: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty;
}
export class ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._knowledgeBaseAssociationConfigurationData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.knowledgeBaseAssociationConfigurationData = this._knowledgeBaseAssociationConfigurationData?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._knowledgeBaseAssociationConfigurationData.internalValue = value.knowledgeBaseAssociationConfigurationData;
        }
    }

    // knowledge_base_association_configuration_data - computed: true, optional: true, required: false
    private _knowledgeBaseAssociationConfigurationData = new ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyOutputReference(this, "knowledge_base_association_configuration_data");
    public get knowledgeBaseAssociationConfigurationData() {
        return this._knowledgeBaseAssociationConfigurationData;
    }
    public putKnowledgeBaseAssociationConfigurationData(value: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty) {
        this._knowledgeBaseAssociationConfigurationData.internalValue = value;
    }
    public resetKnowledgeBaseAssociationConfigurationData() {
        this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get knowledgeBaseAssociationConfigurationDataInput() {
        return this._knowledgeBaseAssociationConfigurationData.internalValue;
    }
}
export interface ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_configuration_data CcAIAgent#association_configuration_data}
    */
    readonly associationConfigurationData?: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_id CcAIAgent#association_id}
    */
    readonly associationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_type CcAIAgent#association_type}
    */
    readonly associationType?: string;
}
export class ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._associationConfigurationData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationConfigurationData = this._associationConfigurationData?.internalValue;
        }
        if (this._associationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationId = this._associationId;
        }
        if (this._associationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationType = this._associationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._associationConfigurationData.internalValue = undefined;
            this._associationId = undefined;
            this._associationType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._associationConfigurationData.internalValue = value.associationConfigurationData;
            this._associationId = value.associationId;
            this._associationType = value.associationType;
        }
    }

    // association_configuration_data - computed: true, optional: true, required: false
    private _associationConfigurationData = new ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyOutputReference(this, "association_configuration_data");
    public get associationConfigurationData() {
        return this._associationConfigurationData;
    }
    public putAssociationConfigurationData(value: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty) {
        this._associationConfigurationData.internalValue = value;
    }
    public resetAssociationConfigurationData() {
        this._associationConfigurationData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationConfigurationDataInput() {
        return this._associationConfigurationData.internalValue;
    }

    // association_id - computed: true, optional: true, required: false
    private _associationId?: string; 
    public get associationId() {
        return this.getStringAttribute('association_id');
    }
    public set associationId(value: string) {
        this._associationId = value;
    }
    public resetAssociationId() {
        this._associationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationIdInput() {
        return this._associationId;
    }

    // association_type - computed: true, optional: true, required: false
    private _associationType?: string; 
    public get associationType() {
        return this.getStringAttribute('association_type');
    }
    public set associationType(value: string) {
        this._associationType = value;
    }
    public resetAssociationType() {
        this._associationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationTypeInput() {
        return this._associationType;
    }
}

export class ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsPropertyOutputReference {
        return new ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ManualSearchAIAgentConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#answer_generation_ai_guardrail_id CcAIAgent#answer_generation_ai_guardrail_id}
    */
    readonly answerGenerationAiGuardrailId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#answer_generation_ai_prompt_id CcAIAgent#answer_generation_ai_prompt_id}
    */
    readonly answerGenerationAiPromptId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_configurations CcAIAgent#association_configurations}
    */
    readonly associationConfigurations?: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#locale CcAIAgent#locale}
    */
    readonly locale?: string;
}
export class ManualSearchAIAgentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManualSearchAIAgentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._answerGenerationAiGuardrailId !== undefined) {
            hasAnyValues = true;
            internalValueResult.answerGenerationAiGuardrailId = this._answerGenerationAiGuardrailId;
        }
        if (this._answerGenerationAiPromptId !== undefined) {
            hasAnyValues = true;
            internalValueResult.answerGenerationAiPromptId = this._answerGenerationAiPromptId;
        }
        if (this._associationConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationConfigurations = this._associationConfigurations?.internalValue;
        }
        if (this._locale !== undefined) {
            hasAnyValues = true;
            internalValueResult.locale = this._locale;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManualSearchAIAgentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._answerGenerationAiGuardrailId = undefined;
            this._answerGenerationAiPromptId = undefined;
            this._associationConfigurations.internalValue = undefined;
            this._locale = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._answerGenerationAiGuardrailId = value.answerGenerationAiGuardrailId;
            this._answerGenerationAiPromptId = value.answerGenerationAiPromptId;
            this._associationConfigurations.internalValue = value.associationConfigurations;
            this._locale = value.locale;
        }
    }

    // answer_generation_ai_guardrail_id - computed: true, optional: true, required: false
    private _answerGenerationAiGuardrailId?: string; 
    public get answerGenerationAiGuardrailId() {
        return this.getStringAttribute('answer_generation_ai_guardrail_id');
    }
    public set answerGenerationAiGuardrailId(value: string) {
        this._answerGenerationAiGuardrailId = value;
    }
    public resetAnswerGenerationAiGuardrailId() {
        this._answerGenerationAiGuardrailId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get answerGenerationAiGuardrailIdInput() {
        return this._answerGenerationAiGuardrailId;
    }

    // answer_generation_ai_prompt_id - computed: true, optional: true, required: false
    private _answerGenerationAiPromptId?: string; 
    public get answerGenerationAiPromptId() {
        return this.getStringAttribute('answer_generation_ai_prompt_id');
    }
    public set answerGenerationAiPromptId(value: string) {
        this._answerGenerationAiPromptId = value;
    }
    public resetAnswerGenerationAiPromptId() {
        this._answerGenerationAiPromptId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get answerGenerationAiPromptIdInput() {
        return this._answerGenerationAiPromptId;
    }

    // association_configurations - computed: true, optional: true, required: false
    private _associationConfigurations = new ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsPropertyList(this, "association_configurations", false);
    public get associationConfigurations() {
        return this._associationConfigurations;
    }
    public putAssociationConfigurations(value: ConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsProperty[] | cdktn.IResolvable) {
        this._associationConfigurations.internalValue = value;
    }
    public resetAssociationConfigurations() {
        this._associationConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationConfigurationsInput() {
        return this._associationConfigurations.internalValue;
    }

    // locale - computed: true, optional: true, required: false
    private _locale?: string; 
    public get locale() {
        return this.getStringAttribute('locale');
    }
    public set locale(value: string) {
        this._locale = value;
    }
    public resetLocale() {
        this._locale = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localeInput() {
        return this._locale;
    }
}
export interface NoteTakingAIAgentConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#locale CcAIAgent#locale}
    */
    readonly locale?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#note_taking_ai_guardrail_id CcAIAgent#note_taking_ai_guardrail_id}
    */
    readonly noteTakingAiGuardrailId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#note_taking_ai_prompt_id CcAIAgent#note_taking_ai_prompt_id}
    */
    readonly noteTakingAiPromptId?: string;
}
export class NoteTakingAIAgentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NoteTakingAIAgentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._locale !== undefined) {
            hasAnyValues = true;
            internalValueResult.locale = this._locale;
        }
        if (this._noteTakingAiGuardrailId !== undefined) {
            hasAnyValues = true;
            internalValueResult.noteTakingAiGuardrailId = this._noteTakingAiGuardrailId;
        }
        if (this._noteTakingAiPromptId !== undefined) {
            hasAnyValues = true;
            internalValueResult.noteTakingAiPromptId = this._noteTakingAiPromptId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NoteTakingAIAgentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._locale = undefined;
            this._noteTakingAiGuardrailId = undefined;
            this._noteTakingAiPromptId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._locale = value.locale;
            this._noteTakingAiGuardrailId = value.noteTakingAiGuardrailId;
            this._noteTakingAiPromptId = value.noteTakingAiPromptId;
        }
    }

    // locale - computed: true, optional: true, required: false
    private _locale?: string; 
    public get locale() {
        return this.getStringAttribute('locale');
    }
    public set locale(value: string) {
        this._locale = value;
    }
    public resetLocale() {
        this._locale = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localeInput() {
        return this._locale;
    }

    // note_taking_ai_guardrail_id - computed: true, optional: true, required: false
    private _noteTakingAiGuardrailId?: string; 
    public get noteTakingAiGuardrailId() {
        return this.getStringAttribute('note_taking_ai_guardrail_id');
    }
    public set noteTakingAiGuardrailId(value: string) {
        this._noteTakingAiGuardrailId = value;
    }
    public resetNoteTakingAiGuardrailId() {
        this._noteTakingAiGuardrailId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noteTakingAiGuardrailIdInput() {
        return this._noteTakingAiGuardrailId;
    }

    // note_taking_ai_prompt_id - computed: true, optional: true, required: false
    private _noteTakingAiPromptId?: string; 
    public get noteTakingAiPromptId() {
        return this.getStringAttribute('note_taking_ai_prompt_id');
    }
    public set noteTakingAiPromptId(value: string) {
        this._noteTakingAiPromptId = value;
    }
    public resetNoteTakingAiPromptId() {
        this._noteTakingAiPromptId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noteTakingAiPromptIdInput() {
        return this._noteTakingAiPromptId;
    }
}
export interface ToolInstructionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#examples CcAIAgent#examples}
    */
    readonly examples?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#instruction CcAIAgent#instruction}
    */
    readonly instruction?: string;
}
export class ToolInstructionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ToolInstructionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._examples !== undefined) {
            hasAnyValues = true;
            internalValueResult.examples = this._examples;
        }
        if (this._instruction !== undefined) {
            hasAnyValues = true;
            internalValueResult.instruction = this._instruction;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ToolInstructionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._examples = undefined;
            this._instruction = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._examples = value.examples;
            this._instruction = value.instruction;
        }
    }

    // examples - computed: true, optional: true, required: false
    private _examples?: string[]; 
    public get examples() {
        return this.getListAttribute('examples');
    }
    public set examples(value: string[]) {
        this._examples = value;
    }
    public resetExamples() {
        this._examples = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get examplesInput() {
        return this._examples;
    }

    // instruction - computed: true, optional: true, required: false
    private _instruction?: string; 
    public get instruction() {
        return this.getStringAttribute('instruction');
    }
    public set instruction(value: string) {
        this._instruction = value;
    }
    public resetInstruction() {
        this._instruction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instructionInput() {
        return this._instruction;
    }
}
export interface ToolOutputConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#output_variable_name_override CcAIAgent#output_variable_name_override}
    */
    readonly outputVariableNameOverride?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#session_data_namespace CcAIAgent#session_data_namespace}
    */
    readonly sessionDataNamespace?: string;
}
export class ToolOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ToolOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._outputVariableNameOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputVariableNameOverride = this._outputVariableNameOverride;
        }
        if (this._sessionDataNamespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionDataNamespace = this._sessionDataNamespace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ToolOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._outputVariableNameOverride = undefined;
            this._sessionDataNamespace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._outputVariableNameOverride = value.outputVariableNameOverride;
            this._sessionDataNamespace = value.sessionDataNamespace;
        }
    }

    // output_variable_name_override - computed: true, optional: true, required: false
    private _outputVariableNameOverride?: string; 
    public get outputVariableNameOverride() {
        return this.getStringAttribute('output_variable_name_override');
    }
    public set outputVariableNameOverride(value: string) {
        this._outputVariableNameOverride = value;
    }
    public resetOutputVariableNameOverride() {
        this._outputVariableNameOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputVariableNameOverrideInput() {
        return this._outputVariableNameOverride;
    }

    // session_data_namespace - computed: true, optional: true, required: false
    private _sessionDataNamespace?: string; 
    public get sessionDataNamespace() {
        return this.getStringAttribute('session_data_namespace');
    }
    public set sessionDataNamespace(value: string) {
        this._sessionDataNamespace = value;
    }
    public resetSessionDataNamespace() {
        this._sessionDataNamespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionDataNamespaceInput() {
        return this._sessionDataNamespace;
    }
}
export interface ToolOutputFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#json_path CcAIAgent#json_path}
    */
    readonly jsonPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#output_configuration CcAIAgent#output_configuration}
    */
    readonly outputConfiguration?: ToolOutputConfigurationProperty;
}
export class ToolOutputFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ToolOutputFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jsonPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonPath = this._jsonPath;
        }
        if (this._outputConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputConfiguration = this._outputConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ToolOutputFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jsonPath = undefined;
            this._outputConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jsonPath = value.jsonPath;
            this._outputConfiguration.internalValue = value.outputConfiguration;
        }
    }

    // json_path - computed: true, optional: true, required: false
    private _jsonPath?: string; 
    public get jsonPath() {
        return this.getStringAttribute('json_path');
    }
    public set jsonPath(value: string) {
        this._jsonPath = value;
    }
    public resetJsonPath() {
        this._jsonPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonPathInput() {
        return this._jsonPath;
    }

    // output_configuration - computed: true, optional: true, required: false
    private _outputConfiguration = new ToolOutputConfigurationPropertyOutputReference(this, "output_configuration");
    public get outputConfiguration() {
        return this._outputConfiguration;
    }
    public putOutputConfiguration(value: ToolOutputConfigurationProperty) {
        this._outputConfiguration.internalValue = value;
    }
    public resetOutputConfiguration() {
        this._outputConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputConfigurationInput() {
        return this._outputConfiguration.internalValue;
    }
}

export class ToolOutputFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : ToolOutputFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): ToolOutputFilterPropertyOutputReference {
        return new ToolOutputFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ToolOverrideConstantInputValueProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#type CcAIAgent#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ToolOverrideConstantInputValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ToolOverrideConstantInputValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ToolOverrideConstantInputValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
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
export interface ToolOverrideInputValueConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#constant CcAIAgent#constant}
    */
    readonly constant?: ToolOverrideConstantInputValueProperty;
}
export class ToolOverrideInputValueConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ToolOverrideInputValueConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._constant?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.constant = this._constant?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ToolOverrideInputValueConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._constant.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._constant.internalValue = value.constant;
        }
    }

    // constant - computed: true, optional: true, required: false
    private _constant = new ToolOverrideConstantInputValuePropertyOutputReference(this, "constant");
    public get constant() {
        return this._constant;
    }
    public putConstant(value: ToolOverrideConstantInputValueProperty) {
        this._constant.internalValue = value;
    }
    public resetConstant() {
        this._constant.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constantInput() {
        return this._constant.internalValue;
    }
}
export interface ToolOverrideInputValueProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#json_path CcAIAgent#json_path}
    */
    readonly jsonPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: ToolOverrideInputValueConfigurationProperty;
}
export class ToolOverrideInputValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ToolOverrideInputValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jsonPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonPath = this._jsonPath;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ToolOverrideInputValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jsonPath = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jsonPath = value.jsonPath;
            this._value.internalValue = value.value;
        }
    }

    // json_path - computed: true, optional: true, required: false
    private _jsonPath?: string; 
    public get jsonPath() {
        return this.getStringAttribute('json_path');
    }
    public set jsonPath(value: string) {
        this._jsonPath = value;
    }
    public resetJsonPath() {
        this._jsonPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonPathInput() {
        return this._jsonPath;
    }

    // value - computed: true, optional: true, required: false
    private _value = new ToolOverrideInputValueConfigurationPropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: ToolOverrideInputValueConfigurationProperty) {
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

export class ToolOverrideInputValuePropertyList extends cdktn.ComplexList {
    public internalValue? : ToolOverrideInputValueProperty[] | cdktn.IResolvable

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
    public get(index: number): ToolOverrideInputValuePropertyOutputReference {
        return new ToolOverrideInputValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface UserInteractionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#is_user_confirmation_required CcAIAgent#is_user_confirmation_required}
    */
    readonly isUserConfirmationRequired?: boolean | cdktn.IResolvable;
}
export class UserInteractionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UserInteractionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isUserConfirmationRequired !== undefined) {
            hasAnyValues = true;
            internalValueResult.isUserConfirmationRequired = this._isUserConfirmationRequired;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserInteractionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isUserConfirmationRequired = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isUserConfirmationRequired = value.isUserConfirmationRequired;
        }
    }

    // is_user_confirmation_required - computed: true, optional: true, required: false
    private _isUserConfirmationRequired?: boolean | cdktn.IResolvable; 
    public get isUserConfirmationRequired() {
        return this.getBooleanAttribute('is_user_confirmation_required');
    }
    public set isUserConfirmationRequired(value: boolean | cdktn.IResolvable) {
        this._isUserConfirmationRequired = value;
    }
    public resetIsUserConfirmationRequired() {
        this._isUserConfirmationRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isUserConfirmationRequiredInput() {
        return this._isUserConfirmationRequired;
    }
}
export interface ToolConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#annotations CcAIAgent#annotations}
    */
    readonly annotations?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#description CcAIAgent#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#input_schema CcAIAgent#input_schema}
    */
    readonly inputSchema?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#instruction CcAIAgent#instruction}
    */
    readonly instruction?: ToolInstructionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#output_filters CcAIAgent#output_filters}
    */
    readonly outputFilters?: ToolOutputFilterProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#output_schema CcAIAgent#output_schema}
    */
    readonly outputSchema?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#override_input_values CcAIAgent#override_input_values}
    */
    readonly overrideInputValues?: ToolOverrideInputValueProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#title CcAIAgent#title}
    */
    readonly title?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#tool_id CcAIAgent#tool_id}
    */
    readonly toolId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#tool_name CcAIAgent#tool_name}
    */
    readonly toolName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#tool_type CcAIAgent#tool_type}
    */
    readonly toolType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#user_interaction_configuration CcAIAgent#user_interaction_configuration}
    */
    readonly userInteractionConfiguration?: UserInteractionConfigurationProperty;
}
export class ToolConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ToolConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._annotations !== undefined) {
            hasAnyValues = true;
            internalValueResult.annotations = this._annotations;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._inputSchema !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputSchema = this._inputSchema;
        }
        if (this._instruction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instruction = this._instruction?.internalValue;
        }
        if (this._outputFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputFilters = this._outputFilters?.internalValue;
        }
        if (this._outputSchema !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputSchema = this._outputSchema;
        }
        if (this._overrideInputValues?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrideInputValues = this._overrideInputValues?.internalValue;
        }
        if (this._title !== undefined) {
            hasAnyValues = true;
            internalValueResult.title = this._title;
        }
        if (this._toolId !== undefined) {
            hasAnyValues = true;
            internalValueResult.toolId = this._toolId;
        }
        if (this._toolName !== undefined) {
            hasAnyValues = true;
            internalValueResult.toolName = this._toolName;
        }
        if (this._toolType !== undefined) {
            hasAnyValues = true;
            internalValueResult.toolType = this._toolType;
        }
        if (this._userInteractionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.userInteractionConfiguration = this._userInteractionConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ToolConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._annotations = undefined;
            this._description = undefined;
            this._inputSchema = undefined;
            this._instruction.internalValue = undefined;
            this._outputFilters.internalValue = undefined;
            this._outputSchema = undefined;
            this._overrideInputValues.internalValue = undefined;
            this._title = undefined;
            this._toolId = undefined;
            this._toolName = undefined;
            this._toolType = undefined;
            this._userInteractionConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._annotations = value.annotations;
            this._description = value.description;
            this._inputSchema = value.inputSchema;
            this._instruction.internalValue = value.instruction;
            this._outputFilters.internalValue = value.outputFilters;
            this._outputSchema = value.outputSchema;
            this._overrideInputValues.internalValue = value.overrideInputValues;
            this._title = value.title;
            this._toolId = value.toolId;
            this._toolName = value.toolName;
            this._toolType = value.toolType;
            this._userInteractionConfiguration.internalValue = value.userInteractionConfiguration;
        }
    }

    // annotations - computed: true, optional: true, required: false
    private _annotations?: string; 
    public get annotations() {
        return this.getStringAttribute('annotations');
    }
    public set annotations(value: string) {
        this._annotations = value;
    }
    public resetAnnotations() {
        this._annotations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get annotationsInput() {
        return this._annotations;
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

    // input_schema - computed: true, optional: true, required: false
    private _inputSchema?: string; 
    public get inputSchema() {
        return this.getStringAttribute('input_schema');
    }
    public set inputSchema(value: string) {
        this._inputSchema = value;
    }
    public resetInputSchema() {
        this._inputSchema = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputSchemaInput() {
        return this._inputSchema;
    }

    // instruction - computed: true, optional: true, required: false
    private _instruction = new ToolInstructionPropertyOutputReference(this, "instruction");
    public get instruction() {
        return this._instruction;
    }
    public putInstruction(value: ToolInstructionProperty) {
        this._instruction.internalValue = value;
    }
    public resetInstruction() {
        this._instruction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instructionInput() {
        return this._instruction.internalValue;
    }

    // output_filters - computed: true, optional: true, required: false
    private _outputFilters = new ToolOutputFilterPropertyList(this, "output_filters", false);
    public get outputFilters() {
        return this._outputFilters;
    }
    public putOutputFilters(value: ToolOutputFilterProperty[] | cdktn.IResolvable) {
        this._outputFilters.internalValue = value;
    }
    public resetOutputFilters() {
        this._outputFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputFiltersInput() {
        return this._outputFilters.internalValue;
    }

    // output_schema - computed: true, optional: true, required: false
    private _outputSchema?: string; 
    public get outputSchema() {
        return this.getStringAttribute('output_schema');
    }
    public set outputSchema(value: string) {
        this._outputSchema = value;
    }
    public resetOutputSchema() {
        this._outputSchema = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputSchemaInput() {
        return this._outputSchema;
    }

    // override_input_values - computed: true, optional: true, required: false
    private _overrideInputValues = new ToolOverrideInputValuePropertyList(this, "override_input_values", false);
    public get overrideInputValues() {
        return this._overrideInputValues;
    }
    public putOverrideInputValues(value: ToolOverrideInputValueProperty[] | cdktn.IResolvable) {
        this._overrideInputValues.internalValue = value;
    }
    public resetOverrideInputValues() {
        this._overrideInputValues.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideInputValuesInput() {
        return this._overrideInputValues.internalValue;
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

    // tool_id - computed: true, optional: true, required: false
    private _toolId?: string; 
    public get toolId() {
        return this.getStringAttribute('tool_id');
    }
    public set toolId(value: string) {
        this._toolId = value;
    }
    public resetToolId() {
        this._toolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toolIdInput() {
        return this._toolId;
    }

    // tool_name - computed: true, optional: true, required: false
    private _toolName?: string; 
    public get toolName() {
        return this.getStringAttribute('tool_name');
    }
    public set toolName(value: string) {
        this._toolName = value;
    }
    public resetToolName() {
        this._toolName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toolNameInput() {
        return this._toolName;
    }

    // tool_type - computed: true, optional: true, required: false
    private _toolType?: string; 
    public get toolType() {
        return this.getStringAttribute('tool_type');
    }
    public set toolType(value: string) {
        this._toolType = value;
    }
    public resetToolType() {
        this._toolType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toolTypeInput() {
        return this._toolType;
    }

    // user_interaction_configuration - computed: true, optional: true, required: false
    private _userInteractionConfiguration = new UserInteractionConfigurationPropertyOutputReference(this, "user_interaction_configuration");
    public get userInteractionConfiguration() {
        return this._userInteractionConfiguration;
    }
    public putUserInteractionConfiguration(value: UserInteractionConfigurationProperty) {
        this._userInteractionConfiguration.internalValue = value;
    }
    public resetUserInteractionConfiguration() {
        this._userInteractionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userInteractionConfigurationInput() {
        return this._userInteractionConfiguration.internalValue;
    }
}

export class ToolConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : ToolConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): ToolConfigurationPropertyOutputReference {
        return new ToolConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OrchestrationAIAgentConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#connect_instance_arn CcAIAgent#connect_instance_arn}
    */
    readonly connectInstanceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#locale CcAIAgent#locale}
    */
    readonly locale?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#orchestration_ai_guardrail_id CcAIAgent#orchestration_ai_guardrail_id}
    */
    readonly orchestrationAiGuardrailId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#orchestration_ai_prompt_id CcAIAgent#orchestration_ai_prompt_id}
    */
    readonly orchestrationAiPromptId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#tool_configurations CcAIAgent#tool_configurations}
    */
    readonly toolConfigurations?: ToolConfigurationProperty[] | cdktn.IResolvable;
}
export class OrchestrationAIAgentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OrchestrationAIAgentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectInstanceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectInstanceArn = this._connectInstanceArn;
        }
        if (this._locale !== undefined) {
            hasAnyValues = true;
            internalValueResult.locale = this._locale;
        }
        if (this._orchestrationAiGuardrailId !== undefined) {
            hasAnyValues = true;
            internalValueResult.orchestrationAiGuardrailId = this._orchestrationAiGuardrailId;
        }
        if (this._orchestrationAiPromptId !== undefined) {
            hasAnyValues = true;
            internalValueResult.orchestrationAiPromptId = this._orchestrationAiPromptId;
        }
        if (this._toolConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.toolConfigurations = this._toolConfigurations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OrchestrationAIAgentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectInstanceArn = undefined;
            this._locale = undefined;
            this._orchestrationAiGuardrailId = undefined;
            this._orchestrationAiPromptId = undefined;
            this._toolConfigurations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectInstanceArn = value.connectInstanceArn;
            this._locale = value.locale;
            this._orchestrationAiGuardrailId = value.orchestrationAiGuardrailId;
            this._orchestrationAiPromptId = value.orchestrationAiPromptId;
            this._toolConfigurations.internalValue = value.toolConfigurations;
        }
    }

    // connect_instance_arn - computed: true, optional: true, required: false
    private _connectInstanceArn?: string; 
    public get connectInstanceArn() {
        return this.getStringAttribute('connect_instance_arn');
    }
    public set connectInstanceArn(value: string) {
        this._connectInstanceArn = value;
    }
    public resetConnectInstanceArn() {
        this._connectInstanceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectInstanceArnInput() {
        return this._connectInstanceArn;
    }

    // locale - computed: true, optional: true, required: false
    private _locale?: string; 
    public get locale() {
        return this.getStringAttribute('locale');
    }
    public set locale(value: string) {
        this._locale = value;
    }
    public resetLocale() {
        this._locale = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localeInput() {
        return this._locale;
    }

    // orchestration_ai_guardrail_id - computed: true, optional: true, required: false
    private _orchestrationAiGuardrailId?: string; 
    public get orchestrationAiGuardrailId() {
        return this.getStringAttribute('orchestration_ai_guardrail_id');
    }
    public set orchestrationAiGuardrailId(value: string) {
        this._orchestrationAiGuardrailId = value;
    }
    public resetOrchestrationAiGuardrailId() {
        this._orchestrationAiGuardrailId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orchestrationAiGuardrailIdInput() {
        return this._orchestrationAiGuardrailId;
    }

    // orchestration_ai_prompt_id - computed: true, optional: true, required: false
    private _orchestrationAiPromptId?: string; 
    public get orchestrationAiPromptId() {
        return this.getStringAttribute('orchestration_ai_prompt_id');
    }
    public set orchestrationAiPromptId(value: string) {
        this._orchestrationAiPromptId = value;
    }
    public resetOrchestrationAiPromptId() {
        this._orchestrationAiPromptId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orchestrationAiPromptIdInput() {
        return this._orchestrationAiPromptId;
    }

    // tool_configurations - computed: true, optional: true, required: false
    private _toolConfigurations = new ToolConfigurationPropertyList(this, "tool_configurations", false);
    public get toolConfigurations() {
        return this._toolConfigurations;
    }
    public putToolConfigurations(value: ToolConfigurationProperty[] | cdktn.IResolvable) {
        this._toolConfigurations.internalValue = value;
    }
    public resetToolConfigurations() {
        this._toolConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toolConfigurationsInput() {
        return this._toolConfigurations.internalValue;
    }
}
export interface ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty | cdktn.IResolvable | undefined) {
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

export class ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyOutputReference {
        return new ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty | cdktn.IResolvable | undefined) {
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

export class ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyOutputReference {
        return new ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty | cdktn.IResolvable | undefined) {
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
export interface ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#and_conditions CcAIAgent#and_conditions}
    */
    readonly andConditions?: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#tag_condition CcAIAgent#tag_condition}
    */
    readonly tagCondition?: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty;
}
export class ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._andConditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.andConditions = this._andConditions?.internalValue;
        }
        if (this._tagCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagCondition = this._tagCondition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = undefined;
            this._tagCondition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = value.andConditions;
            this._tagCondition.internalValue = value.tagCondition;
        }
    }

    // and_conditions - computed: true, optional: true, required: false
    private _andConditions = new ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsPropertyList(this, "and_conditions", false);
    public get andConditions() {
        return this._andConditions;
    }
    public putAndConditions(value: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsProperty[] | cdktn.IResolvable) {
        this._andConditions.internalValue = value;
    }
    public resetAndConditions() {
        this._andConditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get andConditionsInput() {
        return this._andConditions.internalValue;
    }

    // tag_condition - computed: true, optional: true, required: false
    private _tagCondition = new ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionPropertyOutputReference(this, "tag_condition");
    public get tagCondition() {
        return this._tagCondition;
    }
    public putTagCondition(value: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionProperty) {
        this._tagCondition.internalValue = value;
    }
    public resetTagCondition() {
        this._tagCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagConditionInput() {
        return this._tagCondition.internalValue;
    }
}

export class ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyOutputReference {
        return new ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#key CcAIAgent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#value CcAIAgent#value}
    */
    readonly value?: string;
}
export class ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty | cdktn.IResolvable | undefined) {
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
export interface ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#and_conditions CcAIAgent#and_conditions}
    */
    readonly andConditions?: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#or_conditions CcAIAgent#or_conditions}
    */
    readonly orConditions?: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#tag_condition CcAIAgent#tag_condition}
    */
    readonly tagCondition?: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty;
}
export class ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._andConditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.andConditions = this._andConditions?.internalValue;
        }
        if (this._orConditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.orConditions = this._orConditions?.internalValue;
        }
        if (this._tagCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagCondition = this._tagCondition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = undefined;
            this._orConditions.internalValue = undefined;
            this._tagCondition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._andConditions.internalValue = value.andConditions;
            this._orConditions.internalValue = value.orConditions;
            this._tagCondition.internalValue = value.tagCondition;
        }
    }

    // and_conditions - computed: true, optional: true, required: false
    private _andConditions = new ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsPropertyList(this, "and_conditions", false);
    public get andConditions() {
        return this._andConditions;
    }
    public putAndConditions(value: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsProperty[] | cdktn.IResolvable) {
        this._andConditions.internalValue = value;
    }
    public resetAndConditions() {
        this._andConditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get andConditionsInput() {
        return this._andConditions.internalValue;
    }

    // or_conditions - computed: true, optional: true, required: false
    private _orConditions = new ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsPropertyList(this, "or_conditions", false);
    public get orConditions() {
        return this._orConditions;
    }
    public putOrConditions(value: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsProperty[] | cdktn.IResolvable) {
        this._orConditions.internalValue = value;
    }
    public resetOrConditions() {
        this._orConditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orConditionsInput() {
        return this._orConditions.internalValue;
    }

    // tag_condition - computed: true, optional: true, required: false
    private _tagCondition = new ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionPropertyOutputReference(this, "tag_condition");
    public get tagCondition() {
        return this._tagCondition;
    }
    public putTagCondition(value: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionProperty) {
        this._tagCondition.internalValue = value;
    }
    public resetTagCondition() {
        this._tagCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagConditionInput() {
        return this._tagCondition.internalValue;
    }
}
export interface ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#content_tag_filter CcAIAgent#content_tag_filter}
    */
    readonly contentTagFilter?: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#max_results CcAIAgent#max_results}
    */
    readonly maxResults?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#override_knowledge_base_search_type CcAIAgent#override_knowledge_base_search_type}
    */
    readonly overrideKnowledgeBaseSearchType?: string;
}
export class ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentTagFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentTagFilter = this._contentTagFilter?.internalValue;
        }
        if (this._maxResults !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxResults = this._maxResults;
        }
        if (this._overrideKnowledgeBaseSearchType !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrideKnowledgeBaseSearchType = this._overrideKnowledgeBaseSearchType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentTagFilter.internalValue = undefined;
            this._maxResults = undefined;
            this._overrideKnowledgeBaseSearchType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentTagFilter.internalValue = value.contentTagFilter;
            this._maxResults = value.maxResults;
            this._overrideKnowledgeBaseSearchType = value.overrideKnowledgeBaseSearchType;
        }
    }

    // content_tag_filter - computed: true, optional: true, required: false
    private _contentTagFilter = new ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterPropertyOutputReference(this, "content_tag_filter");
    public get contentTagFilter() {
        return this._contentTagFilter;
    }
    public putContentTagFilter(value: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterProperty) {
        this._contentTagFilter.internalValue = value;
    }
    public resetContentTagFilter() {
        this._contentTagFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTagFilterInput() {
        return this._contentTagFilter.internalValue;
    }

    // max_results - computed: true, optional: true, required: false
    private _maxResults?: number; 
    public get maxResults() {
        return this.getNumberAttribute('max_results');
    }
    public set maxResults(value: number) {
        this._maxResults = value;
    }
    public resetMaxResults() {
        this._maxResults = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxResultsInput() {
        return this._maxResults;
    }

    // override_knowledge_base_search_type - computed: true, optional: true, required: false
    private _overrideKnowledgeBaseSearchType?: string; 
    public get overrideKnowledgeBaseSearchType() {
        return this.getStringAttribute('override_knowledge_base_search_type');
    }
    public set overrideKnowledgeBaseSearchType(value: string) {
        this._overrideKnowledgeBaseSearchType = value;
    }
    public resetOverrideKnowledgeBaseSearchType() {
        this._overrideKnowledgeBaseSearchType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideKnowledgeBaseSearchTypeInput() {
        return this._overrideKnowledgeBaseSearchType;
    }
}
export interface ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#knowledge_base_association_configuration_data CcAIAgent#knowledge_base_association_configuration_data}
    */
    readonly knowledgeBaseAssociationConfigurationData?: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty;
}
export class ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._knowledgeBaseAssociationConfigurationData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.knowledgeBaseAssociationConfigurationData = this._knowledgeBaseAssociationConfigurationData?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._knowledgeBaseAssociationConfigurationData.internalValue = value.knowledgeBaseAssociationConfigurationData;
        }
    }

    // knowledge_base_association_configuration_data - computed: true, optional: true, required: false
    private _knowledgeBaseAssociationConfigurationData = new ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataPropertyOutputReference(this, "knowledge_base_association_configuration_data");
    public get knowledgeBaseAssociationConfigurationData() {
        return this._knowledgeBaseAssociationConfigurationData;
    }
    public putKnowledgeBaseAssociationConfigurationData(value: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataProperty) {
        this._knowledgeBaseAssociationConfigurationData.internalValue = value;
    }
    public resetKnowledgeBaseAssociationConfigurationData() {
        this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get knowledgeBaseAssociationConfigurationDataInput() {
        return this._knowledgeBaseAssociationConfigurationData.internalValue;
    }
}
export interface ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_configuration_data CcAIAgent#association_configuration_data}
    */
    readonly associationConfigurationData?: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_id CcAIAgent#association_id}
    */
    readonly associationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_type CcAIAgent#association_type}
    */
    readonly associationType?: string;
}
export class ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._associationConfigurationData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationConfigurationData = this._associationConfigurationData?.internalValue;
        }
        if (this._associationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationId = this._associationId;
        }
        if (this._associationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationType = this._associationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._associationConfigurationData.internalValue = undefined;
            this._associationId = undefined;
            this._associationType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._associationConfigurationData.internalValue = value.associationConfigurationData;
            this._associationId = value.associationId;
            this._associationType = value.associationType;
        }
    }

    // association_configuration_data - computed: true, optional: true, required: false
    private _associationConfigurationData = new ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataPropertyOutputReference(this, "association_configuration_data");
    public get associationConfigurationData() {
        return this._associationConfigurationData;
    }
    public putAssociationConfigurationData(value: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataProperty) {
        this._associationConfigurationData.internalValue = value;
    }
    public resetAssociationConfigurationData() {
        this._associationConfigurationData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationConfigurationDataInput() {
        return this._associationConfigurationData.internalValue;
    }

    // association_id - computed: true, optional: true, required: false
    private _associationId?: string; 
    public get associationId() {
        return this.getStringAttribute('association_id');
    }
    public set associationId(value: string) {
        this._associationId = value;
    }
    public resetAssociationId() {
        this._associationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationIdInput() {
        return this._associationId;
    }

    // association_type - computed: true, optional: true, required: false
    private _associationType?: string; 
    public get associationType() {
        return this.getStringAttribute('association_type');
    }
    public set associationType(value: string) {
        this._associationType = value;
    }
    public resetAssociationType() {
        this._associationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationTypeInput() {
        return this._associationType;
    }
}

export class ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsPropertyOutputReference {
        return new ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SelfServiceAIAgentConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#association_configurations CcAIAgent#association_configurations}
    */
    readonly associationConfigurations?: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#self_service_ai_guardrail_id CcAIAgent#self_service_ai_guardrail_id}
    */
    readonly selfServiceAiGuardrailId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#self_service_answer_generation_ai_prompt_id CcAIAgent#self_service_answer_generation_ai_prompt_id}
    */
    readonly selfServiceAnswerGenerationAiPromptId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#self_service_pre_processing_ai_prompt_id CcAIAgent#self_service_pre_processing_ai_prompt_id}
    */
    readonly selfServicePreProcessingAiPromptId?: string;
}
export class SelfServiceAIAgentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SelfServiceAIAgentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._associationConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationConfigurations = this._associationConfigurations?.internalValue;
        }
        if (this._selfServiceAiGuardrailId !== undefined) {
            hasAnyValues = true;
            internalValueResult.selfServiceAiGuardrailId = this._selfServiceAiGuardrailId;
        }
        if (this._selfServiceAnswerGenerationAiPromptId !== undefined) {
            hasAnyValues = true;
            internalValueResult.selfServiceAnswerGenerationAiPromptId = this._selfServiceAnswerGenerationAiPromptId;
        }
        if (this._selfServicePreProcessingAiPromptId !== undefined) {
            hasAnyValues = true;
            internalValueResult.selfServicePreProcessingAiPromptId = this._selfServicePreProcessingAiPromptId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SelfServiceAIAgentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._associationConfigurations.internalValue = undefined;
            this._selfServiceAiGuardrailId = undefined;
            this._selfServiceAnswerGenerationAiPromptId = undefined;
            this._selfServicePreProcessingAiPromptId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._associationConfigurations.internalValue = value.associationConfigurations;
            this._selfServiceAiGuardrailId = value.selfServiceAiGuardrailId;
            this._selfServiceAnswerGenerationAiPromptId = value.selfServiceAnswerGenerationAiPromptId;
            this._selfServicePreProcessingAiPromptId = value.selfServicePreProcessingAiPromptId;
        }
    }

    // association_configurations - computed: true, optional: true, required: false
    private _associationConfigurations = new ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsPropertyList(this, "association_configurations", false);
    public get associationConfigurations() {
        return this._associationConfigurations;
    }
    public putAssociationConfigurations(value: ConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsProperty[] | cdktn.IResolvable) {
        this._associationConfigurations.internalValue = value;
    }
    public resetAssociationConfigurations() {
        this._associationConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationConfigurationsInput() {
        return this._associationConfigurations.internalValue;
    }

    // self_service_ai_guardrail_id - computed: true, optional: true, required: false
    private _selfServiceAiGuardrailId?: string; 
    public get selfServiceAiGuardrailId() {
        return this.getStringAttribute('self_service_ai_guardrail_id');
    }
    public set selfServiceAiGuardrailId(value: string) {
        this._selfServiceAiGuardrailId = value;
    }
    public resetSelfServiceAiGuardrailId() {
        this._selfServiceAiGuardrailId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfServiceAiGuardrailIdInput() {
        return this._selfServiceAiGuardrailId;
    }

    // self_service_answer_generation_ai_prompt_id - computed: true, optional: true, required: false
    private _selfServiceAnswerGenerationAiPromptId?: string; 
    public get selfServiceAnswerGenerationAiPromptId() {
        return this.getStringAttribute('self_service_answer_generation_ai_prompt_id');
    }
    public set selfServiceAnswerGenerationAiPromptId(value: string) {
        this._selfServiceAnswerGenerationAiPromptId = value;
    }
    public resetSelfServiceAnswerGenerationAiPromptId() {
        this._selfServiceAnswerGenerationAiPromptId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfServiceAnswerGenerationAiPromptIdInput() {
        return this._selfServiceAnswerGenerationAiPromptId;
    }

    // self_service_pre_processing_ai_prompt_id - computed: true, optional: true, required: false
    private _selfServicePreProcessingAiPromptId?: string; 
    public get selfServicePreProcessingAiPromptId() {
        return this.getStringAttribute('self_service_pre_processing_ai_prompt_id');
    }
    public set selfServicePreProcessingAiPromptId(value: string) {
        this._selfServicePreProcessingAiPromptId = value;
    }
    public resetSelfServicePreProcessingAiPromptId() {
        this._selfServicePreProcessingAiPromptId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfServicePreProcessingAiPromptIdInput() {
        return this._selfServicePreProcessingAiPromptId;
    }
}
export interface AIAgentConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#answer_recommendation_ai_agent_configuration CcAIAgent#answer_recommendation_ai_agent_configuration}
    */
    readonly answerRecommendationAiAgentConfiguration?: AnswerRecommendationAIAgentConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#case_summarization_ai_agent_configuration CcAIAgent#case_summarization_ai_agent_configuration}
    */
    readonly caseSummarizationAiAgentConfiguration?: CaseSummarizationAIAgentConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#email_generative_answer_ai_agent_configuration CcAIAgent#email_generative_answer_ai_agent_configuration}
    */
    readonly emailGenerativeAnswerAiAgentConfiguration?: EmailGenerativeAnswerAIAgentConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#email_overview_ai_agent_configuration CcAIAgent#email_overview_ai_agent_configuration}
    */
    readonly emailOverviewAiAgentConfiguration?: EmailOverviewAIAgentConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#email_response_ai_agent_configuration CcAIAgent#email_response_ai_agent_configuration}
    */
    readonly emailResponseAiAgentConfiguration?: EmailResponseAIAgentConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#manual_search_ai_agent_configuration CcAIAgent#manual_search_ai_agent_configuration}
    */
    readonly manualSearchAiAgentConfiguration?: ManualSearchAIAgentConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#note_taking_ai_agent_configuration CcAIAgent#note_taking_ai_agent_configuration}
    */
    readonly noteTakingAiAgentConfiguration?: NoteTakingAIAgentConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#orchestration_ai_agent_configuration CcAIAgent#orchestration_ai_agent_configuration}
    */
    readonly orchestrationAiAgentConfiguration?: OrchestrationAIAgentConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent#self_service_ai_agent_configuration CcAIAgent#self_service_ai_agent_configuration}
    */
    readonly selfServiceAiAgentConfiguration?: SelfServiceAIAgentConfigurationProperty;
}
export class AIAgentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AIAgentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._answerRecommendationAiAgentConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.answerRecommendationAiAgentConfiguration = this._answerRecommendationAiAgentConfiguration?.internalValue;
        }
        if (this._caseSummarizationAiAgentConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.caseSummarizationAiAgentConfiguration = this._caseSummarizationAiAgentConfiguration?.internalValue;
        }
        if (this._emailGenerativeAnswerAiAgentConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailGenerativeAnswerAiAgentConfiguration = this._emailGenerativeAnswerAiAgentConfiguration?.internalValue;
        }
        if (this._emailOverviewAiAgentConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailOverviewAiAgentConfiguration = this._emailOverviewAiAgentConfiguration?.internalValue;
        }
        if (this._emailResponseAiAgentConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailResponseAiAgentConfiguration = this._emailResponseAiAgentConfiguration?.internalValue;
        }
        if (this._manualSearchAiAgentConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.manualSearchAiAgentConfiguration = this._manualSearchAiAgentConfiguration?.internalValue;
        }
        if (this._noteTakingAiAgentConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.noteTakingAiAgentConfiguration = this._noteTakingAiAgentConfiguration?.internalValue;
        }
        if (this._orchestrationAiAgentConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.orchestrationAiAgentConfiguration = this._orchestrationAiAgentConfiguration?.internalValue;
        }
        if (this._selfServiceAiAgentConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.selfServiceAiAgentConfiguration = this._selfServiceAiAgentConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AIAgentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._answerRecommendationAiAgentConfiguration.internalValue = undefined;
            this._caseSummarizationAiAgentConfiguration.internalValue = undefined;
            this._emailGenerativeAnswerAiAgentConfiguration.internalValue = undefined;
            this._emailOverviewAiAgentConfiguration.internalValue = undefined;
            this._emailResponseAiAgentConfiguration.internalValue = undefined;
            this._manualSearchAiAgentConfiguration.internalValue = undefined;
            this._noteTakingAiAgentConfiguration.internalValue = undefined;
            this._orchestrationAiAgentConfiguration.internalValue = undefined;
            this._selfServiceAiAgentConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._answerRecommendationAiAgentConfiguration.internalValue = value.answerRecommendationAiAgentConfiguration;
            this._caseSummarizationAiAgentConfiguration.internalValue = value.caseSummarizationAiAgentConfiguration;
            this._emailGenerativeAnswerAiAgentConfiguration.internalValue = value.emailGenerativeAnswerAiAgentConfiguration;
            this._emailOverviewAiAgentConfiguration.internalValue = value.emailOverviewAiAgentConfiguration;
            this._emailResponseAiAgentConfiguration.internalValue = value.emailResponseAiAgentConfiguration;
            this._manualSearchAiAgentConfiguration.internalValue = value.manualSearchAiAgentConfiguration;
            this._noteTakingAiAgentConfiguration.internalValue = value.noteTakingAiAgentConfiguration;
            this._orchestrationAiAgentConfiguration.internalValue = value.orchestrationAiAgentConfiguration;
            this._selfServiceAiAgentConfiguration.internalValue = value.selfServiceAiAgentConfiguration;
        }
    }

    // answer_recommendation_ai_agent_configuration - computed: true, optional: true, required: false
    private _answerRecommendationAiAgentConfiguration = new AnswerRecommendationAIAgentConfigurationPropertyOutputReference(this, "answer_recommendation_ai_agent_configuration");
    public get answerRecommendationAiAgentConfiguration() {
        return this._answerRecommendationAiAgentConfiguration;
    }
    public putAnswerRecommendationAiAgentConfiguration(value: AnswerRecommendationAIAgentConfigurationProperty) {
        this._answerRecommendationAiAgentConfiguration.internalValue = value;
    }
    public resetAnswerRecommendationAiAgentConfiguration() {
        this._answerRecommendationAiAgentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get answerRecommendationAiAgentConfigurationInput() {
        return this._answerRecommendationAiAgentConfiguration.internalValue;
    }

    // case_summarization_ai_agent_configuration - computed: true, optional: true, required: false
    private _caseSummarizationAiAgentConfiguration = new CaseSummarizationAIAgentConfigurationPropertyOutputReference(this, "case_summarization_ai_agent_configuration");
    public get caseSummarizationAiAgentConfiguration() {
        return this._caseSummarizationAiAgentConfiguration;
    }
    public putCaseSummarizationAiAgentConfiguration(value: CaseSummarizationAIAgentConfigurationProperty) {
        this._caseSummarizationAiAgentConfiguration.internalValue = value;
    }
    public resetCaseSummarizationAiAgentConfiguration() {
        this._caseSummarizationAiAgentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caseSummarizationAiAgentConfigurationInput() {
        return this._caseSummarizationAiAgentConfiguration.internalValue;
    }

    // email_generative_answer_ai_agent_configuration - computed: true, optional: true, required: false
    private _emailGenerativeAnswerAiAgentConfiguration = new EmailGenerativeAnswerAIAgentConfigurationPropertyOutputReference(this, "email_generative_answer_ai_agent_configuration");
    public get emailGenerativeAnswerAiAgentConfiguration() {
        return this._emailGenerativeAnswerAiAgentConfiguration;
    }
    public putEmailGenerativeAnswerAiAgentConfiguration(value: EmailGenerativeAnswerAIAgentConfigurationProperty) {
        this._emailGenerativeAnswerAiAgentConfiguration.internalValue = value;
    }
    public resetEmailGenerativeAnswerAiAgentConfiguration() {
        this._emailGenerativeAnswerAiAgentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailGenerativeAnswerAiAgentConfigurationInput() {
        return this._emailGenerativeAnswerAiAgentConfiguration.internalValue;
    }

    // email_overview_ai_agent_configuration - computed: true, optional: true, required: false
    private _emailOverviewAiAgentConfiguration = new EmailOverviewAIAgentConfigurationPropertyOutputReference(this, "email_overview_ai_agent_configuration");
    public get emailOverviewAiAgentConfiguration() {
        return this._emailOverviewAiAgentConfiguration;
    }
    public putEmailOverviewAiAgentConfiguration(value: EmailOverviewAIAgentConfigurationProperty) {
        this._emailOverviewAiAgentConfiguration.internalValue = value;
    }
    public resetEmailOverviewAiAgentConfiguration() {
        this._emailOverviewAiAgentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailOverviewAiAgentConfigurationInput() {
        return this._emailOverviewAiAgentConfiguration.internalValue;
    }

    // email_response_ai_agent_configuration - computed: true, optional: true, required: false
    private _emailResponseAiAgentConfiguration = new EmailResponseAIAgentConfigurationPropertyOutputReference(this, "email_response_ai_agent_configuration");
    public get emailResponseAiAgentConfiguration() {
        return this._emailResponseAiAgentConfiguration;
    }
    public putEmailResponseAiAgentConfiguration(value: EmailResponseAIAgentConfigurationProperty) {
        this._emailResponseAiAgentConfiguration.internalValue = value;
    }
    public resetEmailResponseAiAgentConfiguration() {
        this._emailResponseAiAgentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailResponseAiAgentConfigurationInput() {
        return this._emailResponseAiAgentConfiguration.internalValue;
    }

    // manual_search_ai_agent_configuration - computed: true, optional: true, required: false
    private _manualSearchAiAgentConfiguration = new ManualSearchAIAgentConfigurationPropertyOutputReference(this, "manual_search_ai_agent_configuration");
    public get manualSearchAiAgentConfiguration() {
        return this._manualSearchAiAgentConfiguration;
    }
    public putManualSearchAiAgentConfiguration(value: ManualSearchAIAgentConfigurationProperty) {
        this._manualSearchAiAgentConfiguration.internalValue = value;
    }
    public resetManualSearchAiAgentConfiguration() {
        this._manualSearchAiAgentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manualSearchAiAgentConfigurationInput() {
        return this._manualSearchAiAgentConfiguration.internalValue;
    }

    // note_taking_ai_agent_configuration - computed: true, optional: true, required: false
    private _noteTakingAiAgentConfiguration = new NoteTakingAIAgentConfigurationPropertyOutputReference(this, "note_taking_ai_agent_configuration");
    public get noteTakingAiAgentConfiguration() {
        return this._noteTakingAiAgentConfiguration;
    }
    public putNoteTakingAiAgentConfiguration(value: NoteTakingAIAgentConfigurationProperty) {
        this._noteTakingAiAgentConfiguration.internalValue = value;
    }
    public resetNoteTakingAiAgentConfiguration() {
        this._noteTakingAiAgentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noteTakingAiAgentConfigurationInput() {
        return this._noteTakingAiAgentConfiguration.internalValue;
    }

    // orchestration_ai_agent_configuration - computed: true, optional: true, required: false
    private _orchestrationAiAgentConfiguration = new OrchestrationAIAgentConfigurationPropertyOutputReference(this, "orchestration_ai_agent_configuration");
    public get orchestrationAiAgentConfiguration() {
        return this._orchestrationAiAgentConfiguration;
    }
    public putOrchestrationAiAgentConfiguration(value: OrchestrationAIAgentConfigurationProperty) {
        this._orchestrationAiAgentConfiguration.internalValue = value;
    }
    public resetOrchestrationAiAgentConfiguration() {
        this._orchestrationAiAgentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orchestrationAiAgentConfigurationInput() {
        return this._orchestrationAiAgentConfiguration.internalValue;
    }

    // self_service_ai_agent_configuration - computed: true, optional: true, required: false
    private _selfServiceAiAgentConfiguration = new SelfServiceAIAgentConfigurationPropertyOutputReference(this, "self_service_ai_agent_configuration");
    public get selfServiceAiAgentConfiguration() {
        return this._selfServiceAiAgentConfiguration;
    }
    public putSelfServiceAiAgentConfiguration(value: SelfServiceAIAgentConfigurationProperty) {
        this._selfServiceAiAgentConfiguration.internalValue = value;
    }
    public resetSelfServiceAiAgentConfiguration() {
        this._selfServiceAiAgentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfServiceAiAgentConfigurationInput() {
        return this._selfServiceAiAgentConfiguration.internalValue;
    }
}
}
