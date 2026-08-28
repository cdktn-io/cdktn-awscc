// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAgentProps extends cdktn.TerraformMetaArguments {
    /**
    * List of ActionGroups
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#action_groups CcAgent#action_groups}
    */
    readonly actionGroups?: CcAgent.AgentActionGroupProperty[] | cdktn.IResolvable;
    /**
    * Agent collaboration state
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#agent_collaboration CcAgent#agent_collaboration}
    */
    readonly agentCollaboration?: string;
    /**
    * List of Agent Collaborators
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#agent_collaborators CcAgent#agent_collaborators}
    */
    readonly agentCollaborators?: CcAgent.AgentCollaboratorProperty[] | cdktn.IResolvable;
    /**
    * Name for a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#agent_name CcAgent#agent_name}
    */
    readonly agentName: string;
    /**
    * ARN of a IAM role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#agent_resource_role_arn CcAgent#agent_resource_role_arn}
    */
    readonly agentResourceRoleArn?: string;
    /**
    * Specifies whether to automatically prepare after creating or updating the agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#auto_prepare CcAgent#auto_prepare}
    */
    readonly autoPrepare?: boolean | cdktn.IResolvable;
    /**
    * Structure for custom orchestration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#custom_orchestration CcAgent#custom_orchestration}
    */
    readonly customOrchestration?: CcAgent.CustomOrchestrationProperty;
    /**
    * A KMS key ARN
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#customer_encryption_key_arn CcAgent#customer_encryption_key_arn}
    */
    readonly customerEncryptionKeyArn?: string;
    /**
    * Description of the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#description CcAgent#description}
    */
    readonly description?: string;
    /**
    * ARN or name of a Bedrock model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#foundation_model CcAgent#foundation_model}
    */
    readonly foundationModel?: string;
    /**
    * Configuration for a guardrail.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#guardrail_configuration CcAgent#guardrail_configuration}
    */
    readonly guardrailConfiguration?: CcAgent.GuardrailConfigurationProperty;
    /**
    * Max Session Time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#idle_session_ttl_in_seconds CcAgent#idle_session_ttl_in_seconds}
    */
    readonly idleSessionTtlInSeconds?: number;
    /**
    * Instruction for the agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#instruction CcAgent#instruction}
    */
    readonly instruction?: string;
    /**
    * List of Agent Knowledge Bases
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#knowledge_bases CcAgent#knowledge_bases}
    */
    readonly knowledgeBases?: CcAgent.AgentKnowledgeBaseProperty[] | cdktn.IResolvable;
    /**
    * Configuration for memory storage
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#memory_configuration CcAgent#memory_configuration}
    */
    readonly memoryConfiguration?: CcAgent.MemoryConfigurationProperty;
    /**
    * Types of orchestration strategy for agents
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#orchestration_type CcAgent#orchestration_type}
    */
    readonly orchestrationType?: string;
    /**
    * Configuration for prompt override.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#prompt_override_configuration CcAgent#prompt_override_configuration}
    */
    readonly promptOverrideConfiguration?: CcAgent.PromptOverrideConfigurationProperty;
    /**
    * Specifies whether to allow deleting agent while it is in use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#skip_resource_in_use_check_on_delete CcAgent#skip_resource_in_use_check_on_delete}
    */
    readonly skipResourceInUseCheckOnDelete?: boolean | cdktn.IResolvable;
    /**
    * A map of tag keys and values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#tags CcAgent#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * A map of tag keys and values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#test_alias_tags CcAgent#test_alias_tags}
    */
    readonly testAliasTags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent awscc_bedrock_agent}
*/
export class CcAgent extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrock_agent";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAgent resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAgent to import
    * @param importFromId The id of the existing CcAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAgent to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_agent", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent awscc_bedrock_agent} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAgentProps
    */
    public constructor(scope: Construct, id: string, config: CcAgentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrock_agent',
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
        this._actionGroups.internalValue = config.actionGroups;
        this._agentCollaboration = config.agentCollaboration;
        this._agentCollaborators.internalValue = config.agentCollaborators;
        this._agentName = config.agentName;
        this._agentResourceRoleArn = config.agentResourceRoleArn;
        this._autoPrepare = config.autoPrepare;
        this._customOrchestration.internalValue = config.customOrchestration;
        this._customerEncryptionKeyArn = config.customerEncryptionKeyArn;
        this._description = config.description;
        this._foundationModel = config.foundationModel;
        this._guardrailConfiguration.internalValue = config.guardrailConfiguration;
        this._idleSessionTtlInSeconds = config.idleSessionTtlInSeconds;
        this._instruction = config.instruction;
        this._knowledgeBases.internalValue = config.knowledgeBases;
        this._memoryConfiguration.internalValue = config.memoryConfiguration;
        this._orchestrationType = config.orchestrationType;
        this._promptOverrideConfiguration.internalValue = config.promptOverrideConfiguration;
        this._skipResourceInUseCheckOnDelete = config.skipResourceInUseCheckOnDelete;
        this._tags = config.tags;
        this._testAliasTags = config.testAliasTags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action_groups - computed: true, optional: true, required: false
    private _actionGroups = new CcAgent.AgentActionGroupPropertyList(this, "action_groups", false);
    public get actionGroups() {
        return this._actionGroups;
    }
    public putActionGroups(value: CcAgent.AgentActionGroupProperty[] | cdktn.IResolvable) {
        this._actionGroups.internalValue = value;
    }
    public resetActionGroups() {
        this._actionGroups.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionGroupsInput() {
        return this._actionGroups.internalValue;
    }

    // agent_arn - computed: true, optional: false, required: false
    public get agentArn() {
        return this.getStringAttribute('agent_arn');
    }

    // agent_collaboration - computed: true, optional: true, required: false
    private _agentCollaboration?: string; 
    public get agentCollaboration() {
        return this.getStringAttribute('agent_collaboration');
    }
    public set agentCollaboration(value: string) {
        this._agentCollaboration = value;
    }
    public resetAgentCollaboration() {
        this._agentCollaboration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentCollaborationInput() {
        return this._agentCollaboration;
    }

    // agent_collaborators - computed: true, optional: true, required: false
    private _agentCollaborators = new CcAgent.AgentCollaboratorPropertyList(this, "agent_collaborators", false);
    public get agentCollaborators() {
        return this._agentCollaborators;
    }
    public putAgentCollaborators(value: CcAgent.AgentCollaboratorProperty[] | cdktn.IResolvable) {
        this._agentCollaborators.internalValue = value;
    }
    public resetAgentCollaborators() {
        this._agentCollaborators.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentCollaboratorsInput() {
        return this._agentCollaborators.internalValue;
    }

    // agent_id - computed: true, optional: false, required: false
    public get agentId() {
        return this.getStringAttribute('agent_id');
    }

    // agent_name - computed: false, optional: false, required: true
    private _agentName?: string; 
    public get agentName() {
        return this.getStringAttribute('agent_name');
    }
    public set agentName(value: string) {
        this._agentName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get agentNameInput() {
        return this._agentName;
    }

    // agent_resource_role_arn - computed: true, optional: true, required: false
    private _agentResourceRoleArn?: string; 
    public get agentResourceRoleArn() {
        return this.getStringAttribute('agent_resource_role_arn');
    }
    public set agentResourceRoleArn(value: string) {
        this._agentResourceRoleArn = value;
    }
    public resetAgentResourceRoleArn() {
        this._agentResourceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentResourceRoleArnInput() {
        return this._agentResourceRoleArn;
    }

    // agent_status - computed: true, optional: false, required: false
    public get agentStatus() {
        return this.getStringAttribute('agent_status');
    }

    // agent_version - computed: true, optional: false, required: false
    public get agentVersion() {
        return this.getStringAttribute('agent_version');
    }

    // auto_prepare - computed: true, optional: true, required: false
    private _autoPrepare?: boolean | cdktn.IResolvable; 
    public get autoPrepare() {
        return this.getBooleanAttribute('auto_prepare');
    }
    public set autoPrepare(value: boolean | cdktn.IResolvable) {
        this._autoPrepare = value;
    }
    public resetAutoPrepare() {
        this._autoPrepare = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoPrepareInput() {
        return this._autoPrepare;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // custom_orchestration - computed: true, optional: true, required: false
    private _customOrchestration = new CcAgent.CustomOrchestrationPropertyOutputReference(this, "custom_orchestration");
    public get customOrchestration() {
        return this._customOrchestration;
    }
    public putCustomOrchestration(value: CcAgent.CustomOrchestrationProperty) {
        this._customOrchestration.internalValue = value;
    }
    public resetCustomOrchestration() {
        this._customOrchestration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customOrchestrationInput() {
        return this._customOrchestration.internalValue;
    }

    // customer_encryption_key_arn - computed: true, optional: true, required: false
    private _customerEncryptionKeyArn?: string; 
    public get customerEncryptionKeyArn() {
        return this.getStringAttribute('customer_encryption_key_arn');
    }
    public set customerEncryptionKeyArn(value: string) {
        this._customerEncryptionKeyArn = value;
    }
    public resetCustomerEncryptionKeyArn() {
        this._customerEncryptionKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerEncryptionKeyArnInput() {
        return this._customerEncryptionKeyArn;
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

    // failure_reasons - computed: true, optional: false, required: false
    public get failureReasons() {
        return this.getListAttribute('failure_reasons');
    }

    // foundation_model - computed: true, optional: true, required: false
    private _foundationModel?: string; 
    public get foundationModel() {
        return this.getStringAttribute('foundation_model');
    }
    public set foundationModel(value: string) {
        this._foundationModel = value;
    }
    public resetFoundationModel() {
        this._foundationModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get foundationModelInput() {
        return this._foundationModel;
    }

    // guardrail_configuration - computed: true, optional: true, required: false
    private _guardrailConfiguration = new CcAgent.GuardrailConfigurationPropertyOutputReference(this, "guardrail_configuration");
    public get guardrailConfiguration() {
        return this._guardrailConfiguration;
    }
    public putGuardrailConfiguration(value: CcAgent.GuardrailConfigurationProperty) {
        this._guardrailConfiguration.internalValue = value;
    }
    public resetGuardrailConfiguration() {
        this._guardrailConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get guardrailConfigurationInput() {
        return this._guardrailConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // idle_session_ttl_in_seconds - computed: true, optional: true, required: false
    private _idleSessionTtlInSeconds?: number; 
    public get idleSessionTtlInSeconds() {
        return this.getNumberAttribute('idle_session_ttl_in_seconds');
    }
    public set idleSessionTtlInSeconds(value: number) {
        this._idleSessionTtlInSeconds = value;
    }
    public resetIdleSessionTtlInSeconds() {
        this._idleSessionTtlInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleSessionTtlInSecondsInput() {
        return this._idleSessionTtlInSeconds;
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

    // knowledge_bases - computed: true, optional: true, required: false
    private _knowledgeBases = new CcAgent.AgentKnowledgeBasePropertyList(this, "knowledge_bases", false);
    public get knowledgeBases() {
        return this._knowledgeBases;
    }
    public putKnowledgeBases(value: CcAgent.AgentKnowledgeBaseProperty[] | cdktn.IResolvable) {
        this._knowledgeBases.internalValue = value;
    }
    public resetKnowledgeBases() {
        this._knowledgeBases.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get knowledgeBasesInput() {
        return this._knowledgeBases.internalValue;
    }

    // memory_configuration - computed: true, optional: true, required: false
    private _memoryConfiguration = new CcAgent.MemoryConfigurationPropertyOutputReference(this, "memory_configuration");
    public get memoryConfiguration() {
        return this._memoryConfiguration;
    }
    public putMemoryConfiguration(value: CcAgent.MemoryConfigurationProperty) {
        this._memoryConfiguration.internalValue = value;
    }
    public resetMemoryConfiguration() {
        this._memoryConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryConfigurationInput() {
        return this._memoryConfiguration.internalValue;
    }

    // orchestration_type - computed: true, optional: true, required: false
    private _orchestrationType?: string; 
    public get orchestrationType() {
        return this.getStringAttribute('orchestration_type');
    }
    public set orchestrationType(value: string) {
        this._orchestrationType = value;
    }
    public resetOrchestrationType() {
        this._orchestrationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orchestrationTypeInput() {
        return this._orchestrationType;
    }

    // prepared_at - computed: true, optional: false, required: false
    public get preparedAt() {
        return this.getStringAttribute('prepared_at');
    }

    // prompt_override_configuration - computed: true, optional: true, required: false
    private _promptOverrideConfiguration = new CcAgent.PromptOverrideConfigurationPropertyOutputReference(this, "prompt_override_configuration");
    public get promptOverrideConfiguration() {
        return this._promptOverrideConfiguration;
    }
    public putPromptOverrideConfiguration(value: CcAgent.PromptOverrideConfigurationProperty) {
        this._promptOverrideConfiguration.internalValue = value;
    }
    public resetPromptOverrideConfiguration() {
        this._promptOverrideConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get promptOverrideConfigurationInput() {
        return this._promptOverrideConfiguration.internalValue;
    }

    // recommended_actions - computed: true, optional: false, required: false
    public get recommendedActions() {
        return this.getListAttribute('recommended_actions');
    }

    // skip_resource_in_use_check_on_delete - computed: true, optional: true, required: false
    private _skipResourceInUseCheckOnDelete?: boolean | cdktn.IResolvable; 
    public get skipResourceInUseCheckOnDelete() {
        return this.getBooleanAttribute('skip_resource_in_use_check_on_delete');
    }
    public set skipResourceInUseCheckOnDelete(value: boolean | cdktn.IResolvable) {
        this._skipResourceInUseCheckOnDelete = value;
    }
    public resetSkipResourceInUseCheckOnDelete() {
        this._skipResourceInUseCheckOnDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skipResourceInUseCheckOnDeleteInput() {
        return this._skipResourceInUseCheckOnDelete;
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

    // test_alias_tags - computed: true, optional: true, required: false
    private _testAliasTags?: { [key: string]: string }; 
    public get testAliasTags() {
        return this.getStringMapAttribute('test_alias_tags');
    }
    public set testAliasTags(value: { [key: string]: string }) {
        this._testAliasTags = value;
    }
    public resetTestAliasTags() {
        this._testAliasTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get testAliasTagsInput() {
        return this._testAliasTags;
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
            action_groups: cdktn.listMapper(ccAgentAgentActionGroupPropertyToTerraform, false)(this._actionGroups.internalValue),
            agent_collaboration: cdktn.stringToTerraform(this._agentCollaboration),
            agent_collaborators: cdktn.listMapper(ccAgentAgentCollaboratorPropertyToTerraform, false)(this._agentCollaborators.internalValue),
            agent_name: cdktn.stringToTerraform(this._agentName),
            agent_resource_role_arn: cdktn.stringToTerraform(this._agentResourceRoleArn),
            auto_prepare: cdktn.booleanToTerraform(this._autoPrepare),
            custom_orchestration: ccAgentCustomOrchestrationPropertyToTerraform(this._customOrchestration.internalValue),
            customer_encryption_key_arn: cdktn.stringToTerraform(this._customerEncryptionKeyArn),
            description: cdktn.stringToTerraform(this._description),
            foundation_model: cdktn.stringToTerraform(this._foundationModel),
            guardrail_configuration: ccAgentGuardrailConfigurationPropertyToTerraform(this._guardrailConfiguration.internalValue),
            idle_session_ttl_in_seconds: cdktn.numberToTerraform(this._idleSessionTtlInSeconds),
            instruction: cdktn.stringToTerraform(this._instruction),
            knowledge_bases: cdktn.listMapper(ccAgentAgentKnowledgeBasePropertyToTerraform, false)(this._knowledgeBases.internalValue),
            memory_configuration: ccAgentMemoryConfigurationPropertyToTerraform(this._memoryConfiguration.internalValue),
            orchestration_type: cdktn.stringToTerraform(this._orchestrationType),
            prompt_override_configuration: ccAgentPromptOverrideConfigurationPropertyToTerraform(this._promptOverrideConfiguration.internalValue),
            skip_resource_in_use_check_on_delete: cdktn.booleanToTerraform(this._skipResourceInUseCheckOnDelete),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            test_alias_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._testAliasTags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action_groups: {
                value: cdktn.listMapperHcl(ccAgentAgentActionGroupPropertyToHclTerraform, false)(this._actionGroups.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAgent.AgentActionGroupPropertyList",
            },
            agent_collaboration: {
                value: cdktn.stringToHclTerraform(this._agentCollaboration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            agent_collaborators: {
                value: cdktn.listMapperHcl(ccAgentAgentCollaboratorPropertyToHclTerraform, false)(this._agentCollaborators.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAgent.AgentCollaboratorPropertyList",
            },
            agent_name: {
                value: cdktn.stringToHclTerraform(this._agentName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            agent_resource_role_arn: {
                value: cdktn.stringToHclTerraform(this._agentResourceRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auto_prepare: {
                value: cdktn.booleanToHclTerraform(this._autoPrepare),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            custom_orchestration: {
                value: ccAgentCustomOrchestrationPropertyToHclTerraform(this._customOrchestration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAgent.CustomOrchestrationProperty",
            },
            customer_encryption_key_arn: {
                value: cdktn.stringToHclTerraform(this._customerEncryptionKeyArn),
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
            foundation_model: {
                value: cdktn.stringToHclTerraform(this._foundationModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            guardrail_configuration: {
                value: ccAgentGuardrailConfigurationPropertyToHclTerraform(this._guardrailConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAgent.GuardrailConfigurationProperty",
            },
            idle_session_ttl_in_seconds: {
                value: cdktn.numberToHclTerraform(this._idleSessionTtlInSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            instruction: {
                value: cdktn.stringToHclTerraform(this._instruction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            knowledge_bases: {
                value: cdktn.listMapperHcl(ccAgentAgentKnowledgeBasePropertyToHclTerraform, false)(this._knowledgeBases.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAgent.AgentKnowledgeBasePropertyList",
            },
            memory_configuration: {
                value: ccAgentMemoryConfigurationPropertyToHclTerraform(this._memoryConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAgent.MemoryConfigurationProperty",
            },
            orchestration_type: {
                value: cdktn.stringToHclTerraform(this._orchestrationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            prompt_override_configuration: {
                value: ccAgentPromptOverrideConfigurationPropertyToHclTerraform(this._promptOverrideConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAgent.PromptOverrideConfigurationProperty",
            },
            skip_resource_in_use_check_on_delete: {
                value: cdktn.booleanToHclTerraform(this._skipResourceInUseCheckOnDelete),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            test_alias_tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._testAliasTags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAgentActionGroupExecutorPropertyToTerraform(struct?: CcAgent.ActionGroupExecutorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_control: cdktn.stringToTerraform(struct!.customControl),
        lambda: cdktn.stringToTerraform(struct!.lambda),
    }
}


export function ccAgentActionGroupExecutorPropertyToHclTerraform(struct?: CcAgent.ActionGroupExecutorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_control: {
            value: cdktn.stringToHclTerraform(struct!.customControl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lambda: {
            value: cdktn.stringToHclTerraform(struct!.lambda),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentS3IdentifierPropertyToTerraform(struct?: CcAgent.S3IdentifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_bucket_name: cdktn.stringToTerraform(struct!.s3BucketName),
        s3_object_key: cdktn.stringToTerraform(struct!.s3ObjectKey),
    }
}


export function ccAgentS3IdentifierPropertyToHclTerraform(struct?: CcAgent.S3IdentifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.s3BucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_object_key: {
            value: cdktn.stringToHclTerraform(struct!.s3ObjectKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentAPISchemaPropertyToTerraform(struct?: CcAgent.APISchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload: cdktn.stringToTerraform(struct!.payload),
        s3: ccAgentS3IdentifierPropertyToTerraform(struct!.s3),
    }
}


export function ccAgentAPISchemaPropertyToHclTerraform(struct?: CcAgent.APISchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload: {
            value: cdktn.stringToHclTerraform(struct!.payload),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3: {
            value: ccAgentS3IdentifierPropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "S3IdentifierProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentParameterDetailPropertyToTerraform(struct?: CcAgent.ParameterDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        required: cdktn.booleanToTerraform(struct!.required),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccAgentParameterDetailPropertyToHclTerraform(struct?: CcAgent.ParameterDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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


export function ccAgentFunctionPropertyToTerraform(struct?: CcAgent.FunctionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        name: cdktn.stringToTerraform(struct!.name),
        parameters: cdktn.hashMapper(ccAgentParameterDetailPropertyToTerraform)(struct!.parameters),
        require_confirmation: cdktn.stringToTerraform(struct!.requireConfirmation),
    }
}


export function ccAgentFunctionPropertyToHclTerraform(struct?: CcAgent.FunctionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameters: {
            value: cdktn.hashMapperHcl(ccAgentParameterDetailPropertyToHclTerraform)(struct!.parameters),
            isBlock: true,
            type: "map",
            storageClassType: "ParameterDetailPropertyMap",
        },
        require_confirmation: {
            value: cdktn.stringToHclTerraform(struct!.requireConfirmation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentFunctionSchemaPropertyToTerraform(struct?: CcAgent.FunctionSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        functions: cdktn.listMapper(ccAgentFunctionPropertyToTerraform, false)(struct!.functions),
    }
}


export function ccAgentFunctionSchemaPropertyToHclTerraform(struct?: CcAgent.FunctionSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        functions: {
            value: cdktn.listMapperHcl(ccAgentFunctionPropertyToHclTerraform, false)(struct!.functions),
            isBlock: true,
            type: "list",
            storageClassType: "FunctionPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentAgentActionGroupPropertyToTerraform(struct?: CcAgent.AgentActionGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action_group_executor: ccAgentActionGroupExecutorPropertyToTerraform(struct!.actionGroupExecutor),
        action_group_name: cdktn.stringToTerraform(struct!.actionGroupName),
        action_group_state: cdktn.stringToTerraform(struct!.actionGroupState),
        api_schema: ccAgentAPISchemaPropertyToTerraform(struct!.apiSchema),
        description: cdktn.stringToTerraform(struct!.description),
        function_schema: ccAgentFunctionSchemaPropertyToTerraform(struct!.functionSchema),
        parent_action_group_signature: cdktn.stringToTerraform(struct!.parentActionGroupSignature),
        skip_resource_in_use_check_on_delete: cdktn.booleanToTerraform(struct!.skipResourceInUseCheckOnDelete),
    }
}


export function ccAgentAgentActionGroupPropertyToHclTerraform(struct?: CcAgent.AgentActionGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action_group_executor: {
            value: ccAgentActionGroupExecutorPropertyToHclTerraform(struct!.actionGroupExecutor),
            isBlock: true,
            type: "struct",
            storageClassType: "ActionGroupExecutorProperty",
        },
        action_group_name: {
            value: cdktn.stringToHclTerraform(struct!.actionGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        action_group_state: {
            value: cdktn.stringToHclTerraform(struct!.actionGroupState),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        api_schema: {
            value: ccAgentAPISchemaPropertyToHclTerraform(struct!.apiSchema),
            isBlock: true,
            type: "struct",
            storageClassType: "APISchemaProperty",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        function_schema: {
            value: ccAgentFunctionSchemaPropertyToHclTerraform(struct!.functionSchema),
            isBlock: true,
            type: "struct",
            storageClassType: "FunctionSchemaProperty",
        },
        parent_action_group_signature: {
            value: cdktn.stringToHclTerraform(struct!.parentActionGroupSignature),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        skip_resource_in_use_check_on_delete: {
            value: cdktn.booleanToHclTerraform(struct!.skipResourceInUseCheckOnDelete),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentAgentDescriptorPropertyToTerraform(struct?: CcAgent.AgentDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alias_arn: cdktn.stringToTerraform(struct!.aliasArn),
    }
}


export function ccAgentAgentDescriptorPropertyToHclTerraform(struct?: CcAgent.AgentDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alias_arn: {
            value: cdktn.stringToHclTerraform(struct!.aliasArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentAgentCollaboratorPropertyToTerraform(struct?: CcAgent.AgentCollaboratorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agent_descriptor: ccAgentAgentDescriptorPropertyToTerraform(struct!.agentDescriptor),
        collaboration_instruction: cdktn.stringToTerraform(struct!.collaborationInstruction),
        collaborator_name: cdktn.stringToTerraform(struct!.collaboratorName),
        relay_conversation_history: cdktn.stringToTerraform(struct!.relayConversationHistory),
    }
}


export function ccAgentAgentCollaboratorPropertyToHclTerraform(struct?: CcAgent.AgentCollaboratorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agent_descriptor: {
            value: ccAgentAgentDescriptorPropertyToHclTerraform(struct!.agentDescriptor),
            isBlock: true,
            type: "struct",
            storageClassType: "AgentDescriptorProperty",
        },
        collaboration_instruction: {
            value: cdktn.stringToHclTerraform(struct!.collaborationInstruction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        collaborator_name: {
            value: cdktn.stringToHclTerraform(struct!.collaboratorName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        relay_conversation_history: {
            value: cdktn.stringToHclTerraform(struct!.relayConversationHistory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentOrchestrationExecutorPropertyToTerraform(struct?: CcAgent.OrchestrationExecutorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lambda: cdktn.stringToTerraform(struct!.lambda),
    }
}


export function ccAgentOrchestrationExecutorPropertyToHclTerraform(struct?: CcAgent.OrchestrationExecutorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lambda: {
            value: cdktn.stringToHclTerraform(struct!.lambda),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentCustomOrchestrationPropertyToTerraform(struct?: CcAgent.CustomOrchestrationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        executor: ccAgentOrchestrationExecutorPropertyToTerraform(struct!.executor),
    }
}


export function ccAgentCustomOrchestrationPropertyToHclTerraform(struct?: CcAgent.CustomOrchestrationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        executor: {
            value: ccAgentOrchestrationExecutorPropertyToHclTerraform(struct!.executor),
            isBlock: true,
            type: "struct",
            storageClassType: "OrchestrationExecutorProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentGuardrailConfigurationPropertyToTerraform(struct?: CcAgent.GuardrailConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        guardrail_identifier: cdktn.stringToTerraform(struct!.guardrailIdentifier),
        guardrail_version: cdktn.stringToTerraform(struct!.guardrailVersion),
    }
}


export function ccAgentGuardrailConfigurationPropertyToHclTerraform(struct?: CcAgent.GuardrailConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        guardrail_identifier: {
            value: cdktn.stringToHclTerraform(struct!.guardrailIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        guardrail_version: {
            value: cdktn.stringToHclTerraform(struct!.guardrailVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentAgentKnowledgeBasePropertyToTerraform(struct?: CcAgent.AgentKnowledgeBaseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        knowledge_base_id: cdktn.stringToTerraform(struct!.knowledgeBaseId),
        knowledge_base_state: cdktn.stringToTerraform(struct!.knowledgeBaseState),
    }
}


export function ccAgentAgentKnowledgeBasePropertyToHclTerraform(struct?: CcAgent.AgentKnowledgeBaseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        knowledge_base_id: {
            value: cdktn.stringToHclTerraform(struct!.knowledgeBaseId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        knowledge_base_state: {
            value: cdktn.stringToHclTerraform(struct!.knowledgeBaseState),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentSessionSummaryConfigurationPropertyToTerraform(struct?: CcAgent.SessionSummaryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_recent_sessions: cdktn.numberToTerraform(struct!.maxRecentSessions),
    }
}


export function ccAgentSessionSummaryConfigurationPropertyToHclTerraform(struct?: CcAgent.SessionSummaryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_recent_sessions: {
            value: cdktn.numberToHclTerraform(struct!.maxRecentSessions),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentMemoryConfigurationPropertyToTerraform(struct?: CcAgent.MemoryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled_memory_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enabledMemoryTypes),
        session_summary_configuration: ccAgentSessionSummaryConfigurationPropertyToTerraform(struct!.sessionSummaryConfiguration),
        storage_days: cdktn.numberToTerraform(struct!.storageDays),
    }
}


export function ccAgentMemoryConfigurationPropertyToHclTerraform(struct?: CcAgent.MemoryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled_memory_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enabledMemoryTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        session_summary_configuration: {
            value: ccAgentSessionSummaryConfigurationPropertyToHclTerraform(struct!.sessionSummaryConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SessionSummaryConfigurationProperty",
        },
        storage_days: {
            value: cdktn.numberToHclTerraform(struct!.storageDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentInferenceConfigurationPropertyToTerraform(struct?: CcAgent.InferenceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        maximum_length: cdktn.numberToTerraform(struct!.maximumLength),
        stop_sequences: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stopSequences),
        temperature: cdktn.numberToTerraform(struct!.temperature),
        top_k: cdktn.numberToTerraform(struct!.topK),
        top_p: cdktn.numberToTerraform(struct!.topP),
    }
}


export function ccAgentInferenceConfigurationPropertyToHclTerraform(struct?: CcAgent.InferenceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        maximum_length: {
            value: cdktn.numberToHclTerraform(struct!.maximumLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        stop_sequences: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stopSequences),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        temperature: {
            value: cdktn.numberToHclTerraform(struct!.temperature),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        top_k: {
            value: cdktn.numberToHclTerraform(struct!.topK),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        top_p: {
            value: cdktn.numberToHclTerraform(struct!.topP),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentPromptConfigurationPropertyToTerraform(struct?: CcAgent.PromptConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_model_request_fields: cdktn.stringToTerraform(struct!.additionalModelRequestFields),
        base_prompt_template: cdktn.stringToTerraform(struct!.basePromptTemplate),
        foundation_model: cdktn.stringToTerraform(struct!.foundationModel),
        inference_configuration: ccAgentInferenceConfigurationPropertyToTerraform(struct!.inferenceConfiguration),
        parser_mode: cdktn.stringToTerraform(struct!.parserMode),
        prompt_creation_mode: cdktn.stringToTerraform(struct!.promptCreationMode),
        prompt_state: cdktn.stringToTerraform(struct!.promptState),
        prompt_type: cdktn.stringToTerraform(struct!.promptType),
    }
}


export function ccAgentPromptConfigurationPropertyToHclTerraform(struct?: CcAgent.PromptConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_model_request_fields: {
            value: cdktn.stringToHclTerraform(struct!.additionalModelRequestFields),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        base_prompt_template: {
            value: cdktn.stringToHclTerraform(struct!.basePromptTemplate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        foundation_model: {
            value: cdktn.stringToHclTerraform(struct!.foundationModel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inference_configuration: {
            value: ccAgentInferenceConfigurationPropertyToHclTerraform(struct!.inferenceConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "InferenceConfigurationProperty",
        },
        parser_mode: {
            value: cdktn.stringToHclTerraform(struct!.parserMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prompt_creation_mode: {
            value: cdktn.stringToHclTerraform(struct!.promptCreationMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prompt_state: {
            value: cdktn.stringToHclTerraform(struct!.promptState),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prompt_type: {
            value: cdktn.stringToHclTerraform(struct!.promptType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentPromptOverrideConfigurationPropertyToTerraform(struct?: CcAgent.PromptOverrideConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        override_lambda: cdktn.stringToTerraform(struct!.overrideLambda),
        prompt_configurations: cdktn.listMapper(ccAgentPromptConfigurationPropertyToTerraform, false)(struct!.promptConfigurations),
    }
}


export function ccAgentPromptOverrideConfigurationPropertyToHclTerraform(struct?: CcAgent.PromptOverrideConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        override_lambda: {
            value: cdktn.stringToHclTerraform(struct!.overrideLambda),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prompt_configurations: {
            value: cdktn.listMapperHcl(ccAgentPromptConfigurationPropertyToHclTerraform, false)(struct!.promptConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "PromptConfigurationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAgent {
export interface ActionGroupExecutorProperty {
    /**
    * Custom control of action execution
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#custom_control CcAgent#custom_control}
    */
    readonly customControl?: string;
    /**
    * ARN of a Lambda.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#lambda CcAgent#lambda}
    */
    readonly lambda?: string;
}
export class ActionGroupExecutorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ActionGroupExecutorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customControl !== undefined) {
            hasAnyValues = true;
            internalValueResult.customControl = this._customControl;
        }
        if (this._lambda !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambda = this._lambda;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionGroupExecutorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customControl = undefined;
            this._lambda = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customControl = value.customControl;
            this._lambda = value.lambda;
        }
    }

    // custom_control - computed: true, optional: true, required: false
    private _customControl?: string; 
    public get customControl() {
        return this.getStringAttribute('custom_control');
    }
    public set customControl(value: string) {
        this._customControl = value;
    }
    public resetCustomControl() {
        this._customControl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customControlInput() {
        return this._customControl;
    }

    // lambda - computed: true, optional: true, required: false
    private _lambda?: string; 
    public get lambda() {
        return this.getStringAttribute('lambda');
    }
    public set lambda(value: string) {
        this._lambda = value;
    }
    public resetLambda() {
        this._lambda = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaInput() {
        return this._lambda;
    }
}
export interface S3IdentifierProperty {
    /**
    * A bucket in S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#s3_bucket_name CcAgent#s3_bucket_name}
    */
    readonly s3BucketName?: string;
    /**
    * A object key in S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#s3_object_key CcAgent#s3_object_key}
    */
    readonly s3ObjectKey?: string;
}
export class S3IdentifierPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3IdentifierProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3BucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketName = this._s3BucketName;
        }
        if (this._s3ObjectKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3ObjectKey = this._s3ObjectKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3IdentifierProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3BucketName = undefined;
            this._s3ObjectKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3BucketName = value.s3BucketName;
            this._s3ObjectKey = value.s3ObjectKey;
        }
    }

    // s3_bucket_name - computed: true, optional: true, required: false
    private _s3BucketName?: string; 
    public get s3BucketName() {
        return this.getStringAttribute('s3_bucket_name');
    }
    public set s3BucketName(value: string) {
        this._s3BucketName = value;
    }
    public resetS3BucketName() {
        this._s3BucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketNameInput() {
        return this._s3BucketName;
    }

    // s3_object_key - computed: true, optional: true, required: false
    private _s3ObjectKey?: string; 
    public get s3ObjectKey() {
        return this.getStringAttribute('s3_object_key');
    }
    public set s3ObjectKey(value: string) {
        this._s3ObjectKey = value;
    }
    public resetS3ObjectKey() {
        this._s3ObjectKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ObjectKeyInput() {
        return this._s3ObjectKey;
    }
}
export interface APISchemaProperty {
    /**
    * String OpenAPI Payload
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#payload CcAgent#payload}
    */
    readonly payload?: string;
    /**
    * The identifier for the S3 resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#s3 CcAgent#s3}
    */
    readonly s3?: S3IdentifierProperty;
}
export class APISchemaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): APISchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._payload !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload;
        }
        if (this._s3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3 = this._s3?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: APISchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payload = undefined;
            this._s3.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payload = value.payload;
            this._s3.internalValue = value.s3;
        }
    }

    // payload - computed: true, optional: true, required: false
    private _payload?: string; 
    public get payload() {
        return this.getStringAttribute('payload');
    }
    public set payload(value: string) {
        this._payload = value;
    }
    public resetPayload() {
        this._payload = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload;
    }

    // s3 - computed: true, optional: true, required: false
    private _s3 = new S3IdentifierPropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: S3IdentifierProperty) {
        this._s3.internalValue = value;
    }
    public resetS3() {
        this._s3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
        return this._s3.internalValue;
    }
}
export interface ParameterDetailProperty {
    /**
    * Description of function parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#description CcAgent#description}
    */
    readonly description?: string;
    /**
    * Information about if a parameter is required for function call. Default to false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#required CcAgent#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
    /**
    * Parameter Type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#type CcAgent#type}
    */
    readonly type?: string;
}
export class ParameterDetailPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): ParameterDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParameterDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._required = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._required = value.required;
            this._type = value.type;
        }
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

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
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

export class ParameterDetailPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: ParameterDetailProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): ParameterDetailPropertyOutputReference {
        return new ParameterDetailPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface FunctionProperty {
    /**
    * Description of function
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#description CcAgent#description}
    */
    readonly description?: string;
    /**
    * Name for a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#name CcAgent#name}
    */
    readonly name?: string;
    /**
    * A map of parameter name and detail
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#parameters CcAgent#parameters}
    */
    readonly parameters?: { [key: string]: ParameterDetailProperty } | cdktn.IResolvable;
    /**
    * ENUM to check if action requires user confirmation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#require_confirmation CcAgent#require_confirmation}
    */
    readonly requireConfirmation?: string;
}
export class FunctionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FunctionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._parameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters?.internalValue;
        }
        if (this._requireConfirmation !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireConfirmation = this._requireConfirmation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FunctionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._name = undefined;
            this._parameters.internalValue = undefined;
            this._requireConfirmation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._name = value.name;
            this._parameters.internalValue = value.parameters;
            this._requireConfirmation = value.requireConfirmation;
        }
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

    // parameters - computed: true, optional: true, required: false
    private _parameters = new ParameterDetailPropertyMap(this, "parameters");
    public get parameters() {
        return this._parameters;
    }
    public putParameters(value: { [key: string]: ParameterDetailProperty } | cdktn.IResolvable) {
        this._parameters.internalValue = value;
    }
    public resetParameters() {
        this._parameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters.internalValue;
    }

    // require_confirmation - computed: true, optional: true, required: false
    private _requireConfirmation?: string; 
    public get requireConfirmation() {
        return this.getStringAttribute('require_confirmation');
    }
    public set requireConfirmation(value: string) {
        this._requireConfirmation = value;
    }
    public resetRequireConfirmation() {
        this._requireConfirmation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireConfirmationInput() {
        return this._requireConfirmation;
    }
}

export class FunctionPropertyList extends cdktn.ComplexList {
    public internalValue? : FunctionProperty[] | cdktn.IResolvable

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
    public get(index: number): FunctionPropertyOutputReference {
        return new FunctionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FunctionSchemaProperty {
    /**
    * List of Function definitions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#functions CcAgent#functions}
    */
    readonly functions?: FunctionProperty[] | cdktn.IResolvable;
}
export class FunctionSchemaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FunctionSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._functions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.functions = this._functions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FunctionSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._functions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._functions.internalValue = value.functions;
        }
    }

    // functions - computed: true, optional: true, required: false
    private _functions = new FunctionPropertyList(this, "functions", false);
    public get functions() {
        return this._functions;
    }
    public putFunctions(value: FunctionProperty[] | cdktn.IResolvable) {
        this._functions.internalValue = value;
    }
    public resetFunctions() {
        this._functions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionsInput() {
        return this._functions.internalValue;
    }
}
export interface AgentActionGroupProperty {
    /**
    * Type of Executors for an Action Group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#action_group_executor CcAgent#action_group_executor}
    */
    readonly actionGroupExecutor?: ActionGroupExecutorProperty;
    /**
    * Name of the action group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#action_group_name CcAgent#action_group_name}
    */
    readonly actionGroupName?: string;
    /**
    * State of the action group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#action_group_state CcAgent#action_group_state}
    */
    readonly actionGroupState?: string;
    /**
    * Contains information about the API Schema for the Action Group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#api_schema CcAgent#api_schema}
    */
    readonly apiSchema?: APISchemaProperty;
    /**
    * Description of action group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#description CcAgent#description}
    */
    readonly description?: string;
    /**
    * Schema of Functions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#function_schema CcAgent#function_schema}
    */
    readonly functionSchema?: FunctionSchemaProperty;
    /**
    * Action Group Signature for a BuiltIn Action
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#parent_action_group_signature CcAgent#parent_action_group_signature}
    */
    readonly parentActionGroupSignature?: string;
    /**
    * Specifies whether to allow deleting action group while it is in use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#skip_resource_in_use_check_on_delete CcAgent#skip_resource_in_use_check_on_delete}
    */
    readonly skipResourceInUseCheckOnDelete?: boolean | cdktn.IResolvable;
}
export class AgentActionGroupPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AgentActionGroupProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actionGroupExecutor?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionGroupExecutor = this._actionGroupExecutor?.internalValue;
        }
        if (this._actionGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionGroupName = this._actionGroupName;
        }
        if (this._actionGroupState !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionGroupState = this._actionGroupState;
        }
        if (this._apiSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiSchema = this._apiSchema?.internalValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._functionSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.functionSchema = this._functionSchema?.internalValue;
        }
        if (this._parentActionGroupSignature !== undefined) {
            hasAnyValues = true;
            internalValueResult.parentActionGroupSignature = this._parentActionGroupSignature;
        }
        if (this._skipResourceInUseCheckOnDelete !== undefined) {
            hasAnyValues = true;
            internalValueResult.skipResourceInUseCheckOnDelete = this._skipResourceInUseCheckOnDelete;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AgentActionGroupProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionGroupExecutor.internalValue = undefined;
            this._actionGroupName = undefined;
            this._actionGroupState = undefined;
            this._apiSchema.internalValue = undefined;
            this._description = undefined;
            this._functionSchema.internalValue = undefined;
            this._parentActionGroupSignature = undefined;
            this._skipResourceInUseCheckOnDelete = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionGroupExecutor.internalValue = value.actionGroupExecutor;
            this._actionGroupName = value.actionGroupName;
            this._actionGroupState = value.actionGroupState;
            this._apiSchema.internalValue = value.apiSchema;
            this._description = value.description;
            this._functionSchema.internalValue = value.functionSchema;
            this._parentActionGroupSignature = value.parentActionGroupSignature;
            this._skipResourceInUseCheckOnDelete = value.skipResourceInUseCheckOnDelete;
        }
    }

    // action_group_executor - computed: true, optional: true, required: false
    private _actionGroupExecutor = new ActionGroupExecutorPropertyOutputReference(this, "action_group_executor");
    public get actionGroupExecutor() {
        return this._actionGroupExecutor;
    }
    public putActionGroupExecutor(value: ActionGroupExecutorProperty) {
        this._actionGroupExecutor.internalValue = value;
    }
    public resetActionGroupExecutor() {
        this._actionGroupExecutor.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionGroupExecutorInput() {
        return this._actionGroupExecutor.internalValue;
    }

    // action_group_name - computed: true, optional: true, required: false
    private _actionGroupName?: string; 
    public get actionGroupName() {
        return this.getStringAttribute('action_group_name');
    }
    public set actionGroupName(value: string) {
        this._actionGroupName = value;
    }
    public resetActionGroupName() {
        this._actionGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionGroupNameInput() {
        return this._actionGroupName;
    }

    // action_group_state - computed: true, optional: true, required: false
    private _actionGroupState?: string; 
    public get actionGroupState() {
        return this.getStringAttribute('action_group_state');
    }
    public set actionGroupState(value: string) {
        this._actionGroupState = value;
    }
    public resetActionGroupState() {
        this._actionGroupState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionGroupStateInput() {
        return this._actionGroupState;
    }

    // api_schema - computed: true, optional: true, required: false
    private _apiSchema = new APISchemaPropertyOutputReference(this, "api_schema");
    public get apiSchema() {
        return this._apiSchema;
    }
    public putApiSchema(value: APISchemaProperty) {
        this._apiSchema.internalValue = value;
    }
    public resetApiSchema() {
        this._apiSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiSchemaInput() {
        return this._apiSchema.internalValue;
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

    // function_schema - computed: true, optional: true, required: false
    private _functionSchema = new FunctionSchemaPropertyOutputReference(this, "function_schema");
    public get functionSchema() {
        return this._functionSchema;
    }
    public putFunctionSchema(value: FunctionSchemaProperty) {
        this._functionSchema.internalValue = value;
    }
    public resetFunctionSchema() {
        this._functionSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionSchemaInput() {
        return this._functionSchema.internalValue;
    }

    // parent_action_group_signature - computed: true, optional: true, required: false
    private _parentActionGroupSignature?: string; 
    public get parentActionGroupSignature() {
        return this.getStringAttribute('parent_action_group_signature');
    }
    public set parentActionGroupSignature(value: string) {
        this._parentActionGroupSignature = value;
    }
    public resetParentActionGroupSignature() {
        this._parentActionGroupSignature = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parentActionGroupSignatureInput() {
        return this._parentActionGroupSignature;
    }

    // skip_resource_in_use_check_on_delete - computed: true, optional: true, required: false
    private _skipResourceInUseCheckOnDelete?: boolean | cdktn.IResolvable; 
    public get skipResourceInUseCheckOnDelete() {
        return this.getBooleanAttribute('skip_resource_in_use_check_on_delete');
    }
    public set skipResourceInUseCheckOnDelete(value: boolean | cdktn.IResolvable) {
        this._skipResourceInUseCheckOnDelete = value;
    }
    public resetSkipResourceInUseCheckOnDelete() {
        this._skipResourceInUseCheckOnDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skipResourceInUseCheckOnDeleteInput() {
        return this._skipResourceInUseCheckOnDelete;
    }
}

export class AgentActionGroupPropertyList extends cdktn.ComplexList {
    public internalValue? : AgentActionGroupProperty[] | cdktn.IResolvable

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
    public get(index: number): AgentActionGroupPropertyOutputReference {
        return new AgentActionGroupPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AgentDescriptorProperty {
    /**
    * Alias ARN for agent descriptor
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#alias_arn CcAgent#alias_arn}
    */
    readonly aliasArn?: string;
}
export class AgentDescriptorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AgentDescriptorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._aliasArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.aliasArn = this._aliasArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AgentDescriptorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aliasArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aliasArn = value.aliasArn;
        }
    }

    // alias_arn - computed: true, optional: true, required: false
    private _aliasArn?: string; 
    public get aliasArn() {
        return this.getStringAttribute('alias_arn');
    }
    public set aliasArn(value: string) {
        this._aliasArn = value;
    }
    public resetAliasArn() {
        this._aliasArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasArnInput() {
        return this._aliasArn;
    }
}
export interface AgentCollaboratorProperty {
    /**
    * Agent descriptor for agent collaborator
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#agent_descriptor CcAgent#agent_descriptor}
    */
    readonly agentDescriptor?: AgentDescriptorProperty;
    /**
    * Agent collaborator instruction
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#collaboration_instruction CcAgent#collaboration_instruction}
    */
    readonly collaborationInstruction?: string;
    /**
    * Agent collaborator name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#collaborator_name CcAgent#collaborator_name}
    */
    readonly collaboratorName?: string;
    /**
    * Relay conversation history state
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#relay_conversation_history CcAgent#relay_conversation_history}
    */
    readonly relayConversationHistory?: string;
}
export class AgentCollaboratorPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AgentCollaboratorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentDescriptor?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentDescriptor = this._agentDescriptor?.internalValue;
        }
        if (this._collaborationInstruction !== undefined) {
            hasAnyValues = true;
            internalValueResult.collaborationInstruction = this._collaborationInstruction;
        }
        if (this._collaboratorName !== undefined) {
            hasAnyValues = true;
            internalValueResult.collaboratorName = this._collaboratorName;
        }
        if (this._relayConversationHistory !== undefined) {
            hasAnyValues = true;
            internalValueResult.relayConversationHistory = this._relayConversationHistory;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AgentCollaboratorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentDescriptor.internalValue = undefined;
            this._collaborationInstruction = undefined;
            this._collaboratorName = undefined;
            this._relayConversationHistory = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentDescriptor.internalValue = value.agentDescriptor;
            this._collaborationInstruction = value.collaborationInstruction;
            this._collaboratorName = value.collaboratorName;
            this._relayConversationHistory = value.relayConversationHistory;
        }
    }

    // agent_descriptor - computed: true, optional: true, required: false
    private _agentDescriptor = new AgentDescriptorPropertyOutputReference(this, "agent_descriptor");
    public get agentDescriptor() {
        return this._agentDescriptor;
    }
    public putAgentDescriptor(value: AgentDescriptorProperty) {
        this._agentDescriptor.internalValue = value;
    }
    public resetAgentDescriptor() {
        this._agentDescriptor.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentDescriptorInput() {
        return this._agentDescriptor.internalValue;
    }

    // collaboration_instruction - computed: true, optional: true, required: false
    private _collaborationInstruction?: string; 
    public get collaborationInstruction() {
        return this.getStringAttribute('collaboration_instruction');
    }
    public set collaborationInstruction(value: string) {
        this._collaborationInstruction = value;
    }
    public resetCollaborationInstruction() {
        this._collaborationInstruction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get collaborationInstructionInput() {
        return this._collaborationInstruction;
    }

    // collaborator_name - computed: true, optional: true, required: false
    private _collaboratorName?: string; 
    public get collaboratorName() {
        return this.getStringAttribute('collaborator_name');
    }
    public set collaboratorName(value: string) {
        this._collaboratorName = value;
    }
    public resetCollaboratorName() {
        this._collaboratorName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get collaboratorNameInput() {
        return this._collaboratorName;
    }

    // relay_conversation_history - computed: true, optional: true, required: false
    private _relayConversationHistory?: string; 
    public get relayConversationHistory() {
        return this.getStringAttribute('relay_conversation_history');
    }
    public set relayConversationHistory(value: string) {
        this._relayConversationHistory = value;
    }
    public resetRelayConversationHistory() {
        this._relayConversationHistory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relayConversationHistoryInput() {
        return this._relayConversationHistory;
    }
}

export class AgentCollaboratorPropertyList extends cdktn.ComplexList {
    public internalValue? : AgentCollaboratorProperty[] | cdktn.IResolvable

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
    public get(index: number): AgentCollaboratorPropertyOutputReference {
        return new AgentCollaboratorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OrchestrationExecutorProperty {
    /**
    * ARN of a Lambda.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#lambda CcAgent#lambda}
    */
    readonly lambda?: string;
}
export class OrchestrationExecutorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OrchestrationExecutorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lambda !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambda = this._lambda;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OrchestrationExecutorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lambda = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lambda = value.lambda;
        }
    }

    // lambda - computed: true, optional: true, required: false
    private _lambda?: string; 
    public get lambda() {
        return this.getStringAttribute('lambda');
    }
    public set lambda(value: string) {
        this._lambda = value;
    }
    public resetLambda() {
        this._lambda = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaInput() {
        return this._lambda;
    }
}
export interface CustomOrchestrationProperty {
    /**
    * Types of executors for custom orchestration strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#executor CcAgent#executor}
    */
    readonly executor?: OrchestrationExecutorProperty;
}
export class CustomOrchestrationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomOrchestrationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._executor?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.executor = this._executor?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomOrchestrationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._executor.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._executor.internalValue = value.executor;
        }
    }

    // executor - computed: true, optional: true, required: false
    private _executor = new OrchestrationExecutorPropertyOutputReference(this, "executor");
    public get executor() {
        return this._executor;
    }
    public putExecutor(value: OrchestrationExecutorProperty) {
        this._executor.internalValue = value;
    }
    public resetExecutor() {
        this._executor.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executorInput() {
        return this._executor.internalValue;
    }
}
export interface GuardrailConfigurationProperty {
    /**
    * Identifier for the guardrail, could be the id or the arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#guardrail_identifier CcAgent#guardrail_identifier}
    */
    readonly guardrailIdentifier?: string;
    /**
    * Version of the guardrail
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#guardrail_version CcAgent#guardrail_version}
    */
    readonly guardrailVersion?: string;
}
export class GuardrailConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GuardrailConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._guardrailIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.guardrailIdentifier = this._guardrailIdentifier;
        }
        if (this._guardrailVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.guardrailVersion = this._guardrailVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GuardrailConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._guardrailIdentifier = undefined;
            this._guardrailVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._guardrailIdentifier = value.guardrailIdentifier;
            this._guardrailVersion = value.guardrailVersion;
        }
    }

    // guardrail_identifier - computed: true, optional: true, required: false
    private _guardrailIdentifier?: string; 
    public get guardrailIdentifier() {
        return this.getStringAttribute('guardrail_identifier');
    }
    public set guardrailIdentifier(value: string) {
        this._guardrailIdentifier = value;
    }
    public resetGuardrailIdentifier() {
        this._guardrailIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get guardrailIdentifierInput() {
        return this._guardrailIdentifier;
    }

    // guardrail_version - computed: true, optional: true, required: false
    private _guardrailVersion?: string; 
    public get guardrailVersion() {
        return this.getStringAttribute('guardrail_version');
    }
    public set guardrailVersion(value: string) {
        this._guardrailVersion = value;
    }
    public resetGuardrailVersion() {
        this._guardrailVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get guardrailVersionInput() {
        return this._guardrailVersion;
    }
}
export interface AgentKnowledgeBaseProperty {
    /**
    * Description of the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#description CcAgent#description}
    */
    readonly description?: string;
    /**
    * Identifier for a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#knowledge_base_id CcAgent#knowledge_base_id}
    */
    readonly knowledgeBaseId?: string;
    /**
    * State of the knowledge base; whether it is enabled or disabled
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#knowledge_base_state CcAgent#knowledge_base_state}
    */
    readonly knowledgeBaseState?: string;
}
export class AgentKnowledgeBasePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AgentKnowledgeBaseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._knowledgeBaseId !== undefined) {
            hasAnyValues = true;
            internalValueResult.knowledgeBaseId = this._knowledgeBaseId;
        }
        if (this._knowledgeBaseState !== undefined) {
            hasAnyValues = true;
            internalValueResult.knowledgeBaseState = this._knowledgeBaseState;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AgentKnowledgeBaseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._knowledgeBaseId = undefined;
            this._knowledgeBaseState = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._knowledgeBaseId = value.knowledgeBaseId;
            this._knowledgeBaseState = value.knowledgeBaseState;
        }
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

    // knowledge_base_id - computed: true, optional: true, required: false
    private _knowledgeBaseId?: string; 
    public get knowledgeBaseId() {
        return this.getStringAttribute('knowledge_base_id');
    }
    public set knowledgeBaseId(value: string) {
        this._knowledgeBaseId = value;
    }
    public resetKnowledgeBaseId() {
        this._knowledgeBaseId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get knowledgeBaseIdInput() {
        return this._knowledgeBaseId;
    }

    // knowledge_base_state - computed: true, optional: true, required: false
    private _knowledgeBaseState?: string; 
    public get knowledgeBaseState() {
        return this.getStringAttribute('knowledge_base_state');
    }
    public set knowledgeBaseState(value: string) {
        this._knowledgeBaseState = value;
    }
    public resetKnowledgeBaseState() {
        this._knowledgeBaseState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get knowledgeBaseStateInput() {
        return this._knowledgeBaseState;
    }
}

export class AgentKnowledgeBasePropertyList extends cdktn.ComplexList {
    public internalValue? : AgentKnowledgeBaseProperty[] | cdktn.IResolvable

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
    public get(index: number): AgentKnowledgeBasePropertyOutputReference {
        return new AgentKnowledgeBasePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SessionSummaryConfigurationProperty {
    /**
    * Maximum number of Sessions to Summarize
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#max_recent_sessions CcAgent#max_recent_sessions}
    */
    readonly maxRecentSessions?: number;
}
export class SessionSummaryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SessionSummaryConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxRecentSessions !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxRecentSessions = this._maxRecentSessions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SessionSummaryConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxRecentSessions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxRecentSessions = value.maxRecentSessions;
        }
    }

    // max_recent_sessions - computed: true, optional: true, required: false
    private _maxRecentSessions?: number; 
    public get maxRecentSessions() {
        return this.getNumberAttribute('max_recent_sessions');
    }
    public set maxRecentSessions(value: number) {
        this._maxRecentSessions = value;
    }
    public resetMaxRecentSessions() {
        this._maxRecentSessions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRecentSessionsInput() {
        return this._maxRecentSessions;
    }
}
export interface MemoryConfigurationProperty {
    /**
    * Types of session storage persisted in memory
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#enabled_memory_types CcAgent#enabled_memory_types}
    */
    readonly enabledMemoryTypes?: string[];
    /**
    * Configuration for Session Summarization
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#session_summary_configuration CcAgent#session_summary_configuration}
    */
    readonly sessionSummaryConfiguration?: SessionSummaryConfigurationProperty;
    /**
    * Maximum number of days to store session details
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#storage_days CcAgent#storage_days}
    */
    readonly storageDays?: number;
}
export class MemoryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabledMemoryTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabledMemoryTypes = this._enabledMemoryTypes;
        }
        if (this._sessionSummaryConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionSummaryConfiguration = this._sessionSummaryConfiguration?.internalValue;
        }
        if (this._storageDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageDays = this._storageDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabledMemoryTypes = undefined;
            this._sessionSummaryConfiguration.internalValue = undefined;
            this._storageDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabledMemoryTypes = value.enabledMemoryTypes;
            this._sessionSummaryConfiguration.internalValue = value.sessionSummaryConfiguration;
            this._storageDays = value.storageDays;
        }
    }

    // enabled_memory_types - computed: true, optional: true, required: false
    private _enabledMemoryTypes?: string[]; 
    public get enabledMemoryTypes() {
        return this.getListAttribute('enabled_memory_types');
    }
    public set enabledMemoryTypes(value: string[]) {
        this._enabledMemoryTypes = value;
    }
    public resetEnabledMemoryTypes() {
        this._enabledMemoryTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledMemoryTypesInput() {
        return this._enabledMemoryTypes;
    }

    // session_summary_configuration - computed: true, optional: true, required: false
    private _sessionSummaryConfiguration = new SessionSummaryConfigurationPropertyOutputReference(this, "session_summary_configuration");
    public get sessionSummaryConfiguration() {
        return this._sessionSummaryConfiguration;
    }
    public putSessionSummaryConfiguration(value: SessionSummaryConfigurationProperty) {
        this._sessionSummaryConfiguration.internalValue = value;
    }
    public resetSessionSummaryConfiguration() {
        this._sessionSummaryConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionSummaryConfigurationInput() {
        return this._sessionSummaryConfiguration.internalValue;
    }

    // storage_days - computed: true, optional: true, required: false
    private _storageDays?: number; 
    public get storageDays() {
        return this.getNumberAttribute('storage_days');
    }
    public set storageDays(value: number) {
        this._storageDays = value;
    }
    public resetStorageDays() {
        this._storageDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageDaysInput() {
        return this._storageDays;
    }
}
export interface InferenceConfigurationProperty {
    /**
    * Maximum length of output
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#maximum_length CcAgent#maximum_length}
    */
    readonly maximumLength?: number;
    /**
    * List of stop sequences
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#stop_sequences CcAgent#stop_sequences}
    */
    readonly stopSequences?: string[];
    /**
    * Controls randomness, higher values increase diversity
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#temperature CcAgent#temperature}
    */
    readonly temperature?: number;
    /**
    * Sample from the k most likely next tokens
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#top_k CcAgent#top_k}
    */
    readonly topK?: number;
    /**
    * Cumulative probability cutoff for token selection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#top_p CcAgent#top_p}
    */
    readonly topP?: number;
}
export class InferenceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maximumLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumLength = this._maximumLength;
        }
        if (this._stopSequences !== undefined) {
            hasAnyValues = true;
            internalValueResult.stopSequences = this._stopSequences;
        }
        if (this._temperature !== undefined) {
            hasAnyValues = true;
            internalValueResult.temperature = this._temperature;
        }
        if (this._topK !== undefined) {
            hasAnyValues = true;
            internalValueResult.topK = this._topK;
        }
        if (this._topP !== undefined) {
            hasAnyValues = true;
            internalValueResult.topP = this._topP;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maximumLength = undefined;
            this._stopSequences = undefined;
            this._temperature = undefined;
            this._topK = undefined;
            this._topP = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maximumLength = value.maximumLength;
            this._stopSequences = value.stopSequences;
            this._temperature = value.temperature;
            this._topK = value.topK;
            this._topP = value.topP;
        }
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

    // stop_sequences - computed: true, optional: true, required: false
    private _stopSequences?: string[]; 
    public get stopSequences() {
        return this.getListAttribute('stop_sequences');
    }
    public set stopSequences(value: string[]) {
        this._stopSequences = value;
    }
    public resetStopSequences() {
        this._stopSequences = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stopSequencesInput() {
        return this._stopSequences;
    }

    // temperature - computed: true, optional: true, required: false
    private _temperature?: number; 
    public get temperature() {
        return this.getNumberAttribute('temperature');
    }
    public set temperature(value: number) {
        this._temperature = value;
    }
    public resetTemperature() {
        this._temperature = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get temperatureInput() {
        return this._temperature;
    }

    // top_k - computed: true, optional: true, required: false
    private _topK?: number; 
    public get topK() {
        return this.getNumberAttribute('top_k');
    }
    public set topK(value: number) {
        this._topK = value;
    }
    public resetTopK() {
        this._topK = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topKInput() {
        return this._topK;
    }

    // top_p - computed: true, optional: true, required: false
    private _topP?: number; 
    public get topP() {
        return this.getNumberAttribute('top_p');
    }
    public set topP(value: number) {
        this._topP = value;
    }
    public resetTopP() {
        this._topP = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topPInput() {
        return this._topP;
    }
}
export interface PromptConfigurationProperty {
    /**
    * Additional Model Request Fields for Prompt Configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#additional_model_request_fields CcAgent#additional_model_request_fields}
    */
    readonly additionalModelRequestFields?: string;
    /**
    * Base Prompt Template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#base_prompt_template CcAgent#base_prompt_template}
    */
    readonly basePromptTemplate?: string;
    /**
    * ARN or name of a Bedrock model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#foundation_model CcAgent#foundation_model}
    */
    readonly foundationModel?: string;
    /**
    * Configuration for inference in prompt configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#inference_configuration CcAgent#inference_configuration}
    */
    readonly inferenceConfiguration?: InferenceConfigurationProperty;
    /**
    * Creation Mode for Prompt Configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#parser_mode CcAgent#parser_mode}
    */
    readonly parserMode?: string;
    /**
    * Creation Mode for Prompt Configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#prompt_creation_mode CcAgent#prompt_creation_mode}
    */
    readonly promptCreationMode?: string;
    /**
    * Prompt State.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#prompt_state CcAgent#prompt_state}
    */
    readonly promptState?: string;
    /**
    * Prompt Type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#prompt_type CcAgent#prompt_type}
    */
    readonly promptType?: string;
}
export class PromptConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PromptConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalModelRequestFields !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalModelRequestFields = this._additionalModelRequestFields;
        }
        if (this._basePromptTemplate !== undefined) {
            hasAnyValues = true;
            internalValueResult.basePromptTemplate = this._basePromptTemplate;
        }
        if (this._foundationModel !== undefined) {
            hasAnyValues = true;
            internalValueResult.foundationModel = this._foundationModel;
        }
        if (this._inferenceConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inferenceConfiguration = this._inferenceConfiguration?.internalValue;
        }
        if (this._parserMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.parserMode = this._parserMode;
        }
        if (this._promptCreationMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.promptCreationMode = this._promptCreationMode;
        }
        if (this._promptState !== undefined) {
            hasAnyValues = true;
            internalValueResult.promptState = this._promptState;
        }
        if (this._promptType !== undefined) {
            hasAnyValues = true;
            internalValueResult.promptType = this._promptType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PromptConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalModelRequestFields = undefined;
            this._basePromptTemplate = undefined;
            this._foundationModel = undefined;
            this._inferenceConfiguration.internalValue = undefined;
            this._parserMode = undefined;
            this._promptCreationMode = undefined;
            this._promptState = undefined;
            this._promptType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalModelRequestFields = value.additionalModelRequestFields;
            this._basePromptTemplate = value.basePromptTemplate;
            this._foundationModel = value.foundationModel;
            this._inferenceConfiguration.internalValue = value.inferenceConfiguration;
            this._parserMode = value.parserMode;
            this._promptCreationMode = value.promptCreationMode;
            this._promptState = value.promptState;
            this._promptType = value.promptType;
        }
    }

    // additional_model_request_fields - computed: true, optional: true, required: false
    private _additionalModelRequestFields?: string; 
    public get additionalModelRequestFields() {
        return this.getStringAttribute('additional_model_request_fields');
    }
    public set additionalModelRequestFields(value: string) {
        this._additionalModelRequestFields = value;
    }
    public resetAdditionalModelRequestFields() {
        this._additionalModelRequestFields = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalModelRequestFieldsInput() {
        return this._additionalModelRequestFields;
    }

    // base_prompt_template - computed: true, optional: true, required: false
    private _basePromptTemplate?: string; 
    public get basePromptTemplate() {
        return this.getStringAttribute('base_prompt_template');
    }
    public set basePromptTemplate(value: string) {
        this._basePromptTemplate = value;
    }
    public resetBasePromptTemplate() {
        this._basePromptTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basePromptTemplateInput() {
        return this._basePromptTemplate;
    }

    // foundation_model - computed: true, optional: true, required: false
    private _foundationModel?: string; 
    public get foundationModel() {
        return this.getStringAttribute('foundation_model');
    }
    public set foundationModel(value: string) {
        this._foundationModel = value;
    }
    public resetFoundationModel() {
        this._foundationModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get foundationModelInput() {
        return this._foundationModel;
    }

    // inference_configuration - computed: true, optional: true, required: false
    private _inferenceConfiguration = new InferenceConfigurationPropertyOutputReference(this, "inference_configuration");
    public get inferenceConfiguration() {
        return this._inferenceConfiguration;
    }
    public putInferenceConfiguration(value: InferenceConfigurationProperty) {
        this._inferenceConfiguration.internalValue = value;
    }
    public resetInferenceConfiguration() {
        this._inferenceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceConfigurationInput() {
        return this._inferenceConfiguration.internalValue;
    }

    // parser_mode - computed: true, optional: true, required: false
    private _parserMode?: string; 
    public get parserMode() {
        return this.getStringAttribute('parser_mode');
    }
    public set parserMode(value: string) {
        this._parserMode = value;
    }
    public resetParserMode() {
        this._parserMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parserModeInput() {
        return this._parserMode;
    }

    // prompt_creation_mode - computed: true, optional: true, required: false
    private _promptCreationMode?: string; 
    public get promptCreationMode() {
        return this.getStringAttribute('prompt_creation_mode');
    }
    public set promptCreationMode(value: string) {
        this._promptCreationMode = value;
    }
    public resetPromptCreationMode() {
        this._promptCreationMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get promptCreationModeInput() {
        return this._promptCreationMode;
    }

    // prompt_state - computed: true, optional: true, required: false
    private _promptState?: string; 
    public get promptState() {
        return this.getStringAttribute('prompt_state');
    }
    public set promptState(value: string) {
        this._promptState = value;
    }
    public resetPromptState() {
        this._promptState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get promptStateInput() {
        return this._promptState;
    }

    // prompt_type - computed: true, optional: true, required: false
    private _promptType?: string; 
    public get promptType() {
        return this.getStringAttribute('prompt_type');
    }
    public set promptType(value: string) {
        this._promptType = value;
    }
    public resetPromptType() {
        this._promptType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get promptTypeInput() {
        return this._promptType;
    }
}

export class PromptConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : PromptConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): PromptConfigurationPropertyOutputReference {
        return new PromptConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PromptOverrideConfigurationProperty {
    /**
    * ARN of a Lambda.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#override_lambda CcAgent#override_lambda}
    */
    readonly overrideLambda?: string;
    /**
    * List of BasePromptConfiguration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_agent#prompt_configurations CcAgent#prompt_configurations}
    */
    readonly promptConfigurations?: PromptConfigurationProperty[] | cdktn.IResolvable;
}
export class PromptOverrideConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PromptOverrideConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._overrideLambda !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrideLambda = this._overrideLambda;
        }
        if (this._promptConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.promptConfigurations = this._promptConfigurations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PromptOverrideConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._overrideLambda = undefined;
            this._promptConfigurations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._overrideLambda = value.overrideLambda;
            this._promptConfigurations.internalValue = value.promptConfigurations;
        }
    }

    // override_lambda - computed: true, optional: true, required: false
    private _overrideLambda?: string; 
    public get overrideLambda() {
        return this.getStringAttribute('override_lambda');
    }
    public set overrideLambda(value: string) {
        this._overrideLambda = value;
    }
    public resetOverrideLambda() {
        this._overrideLambda = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideLambdaInput() {
        return this._overrideLambda;
    }

    // prompt_configurations - computed: true, optional: true, required: false
    private _promptConfigurations = new PromptConfigurationPropertyList(this, "prompt_configurations", false);
    public get promptConfigurations() {
        return this._promptConfigurations;
    }
    public putPromptConfigurations(value: PromptConfigurationProperty[] | cdktn.IResolvable) {
        this._promptConfigurations.internalValue = value;
    }
    public resetPromptConfigurations() {
        this._promptConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get promptConfigurationsInput() {
        return this._promptConfigurations.internalValue;
    }
}
}
