// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAgentProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of ActionConnector ARNs (max 10) attached to the agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#action_connectors CcAgent#action_connectors}
    */
    readonly actionConnectors?: string[];
    /**
    * The unique identifier for the agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#agent_id CcAgent#agent_id}
    */
    readonly agentId: string;
    /**
    * The lifecycle stage of the agent. PREVIEW or PUBLISHED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#agent_lifecycle CcAgent#agent_lifecycle}
    */
    readonly agentLifecycle?: string;
    /**
    * The ID of the Amazon Web Services account where the agent is being created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#aws_account_id CcAgent#aws_account_id}
    */
    readonly awsAccountId: string;
    /**
    * Custom prompt configuration. Specify either ExistingPrompt or NewPrompt.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#custom_prompt_input CcAgent#custom_prompt_input}
    */
    readonly customPromptInput?: CcAgent.CustomPromptInputProperty;
    /**
    * A description of the agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#description CcAgent#description}
    */
    readonly description?: string;
    /**
    * The icon identifier for the agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#icon_id CcAgent#icon_id}
    */
    readonly iconId?: string;
    /**
    * The display name of the agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#name CcAgent#name}
    */
    readonly name: string;
    /**
    * A list of Space ARNs (max 10) attached to the agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#spaces CcAgent#spaces}
    */
    readonly spaces?: string[];
    /**
    * A list of up to 3 starter prompts displayed to users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#starter_prompts CcAgent#starter_prompts}
    */
    readonly starterPrompts?: string[];
    /**
    * A list of key-value pairs to associate with the agent resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#tags CcAgent#tags}
    */
    readonly tags?: CcAgent.AgentTagProperty[] | cdktn.IResolvable;
    /**
    * The welcome message displayed when a user opens the agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#welcome_message CcAgent#welcome_message}
    */
    readonly welcomeMessage?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent awscc_quicksight_agent}
*/
export class CcAgent extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_quicksight_agent";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAgent resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAgent to import
    * @param importFromId The id of the existing CcAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAgent to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_agent", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent awscc_quicksight_agent} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAgentProps
    */
    public constructor(scope: Construct, id: string, config: CcAgentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_agent',
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
        this._actionConnectors = config.actionConnectors;
        this._agentId = config.agentId;
        this._agentLifecycle = config.agentLifecycle;
        this._awsAccountId = config.awsAccountId;
        this._customPromptInput.internalValue = config.customPromptInput;
        this._description = config.description;
        this._iconId = config.iconId;
        this._name = config.name;
        this._spaces = config.spaces;
        this._starterPrompts = config.starterPrompts;
        this._tags.internalValue = config.tags;
        this._welcomeMessage = config.welcomeMessage;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action_connectors - computed: true, optional: true, required: false
    private _actionConnectors?: string[]; 
    public get actionConnectors() {
        return this.getListAttribute('action_connectors');
    }
    public set actionConnectors(value: string[]) {
        this._actionConnectors = value;
    }
    public resetActionConnectors() {
        this._actionConnectors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionConnectorsInput() {
        return this._actionConnectors;
    }

    // agent_id - computed: false, optional: false, required: true
    private _agentId?: string; 
    public get agentId() {
        return this.getStringAttribute('agent_id');
    }
    public set agentId(value: string) {
        this._agentId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get agentIdInput() {
        return this._agentId;
    }

    // agent_lifecycle - computed: true, optional: true, required: false
    private _agentLifecycle?: string; 
    public get agentLifecycle() {
        return this.getStringAttribute('agent_lifecycle');
    }
    public set agentLifecycle(value: string) {
        this._agentLifecycle = value;
    }
    public resetAgentLifecycle() {
        this._agentLifecycle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentLifecycleInput() {
        return this._agentLifecycle;
    }

    // agent_status - computed: true, optional: false, required: false
    public get agentStatus() {
        return this.getStringAttribute('agent_status');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // creator - computed: true, optional: false, required: false
    public get creator() {
        return this.getStringAttribute('creator');
    }

    // custom_prompt_input - computed: true, optional: true, required: false
    private _customPromptInput = new CcAgent.CustomPromptInputPropertyOutputReference(this, "custom_prompt_input");
    public get customPromptInput() {
        return this._customPromptInput;
    }
    public putCustomPromptInput(value: CcAgent.CustomPromptInputProperty) {
        this._customPromptInput.internalValue = value;
    }
    public resetCustomPromptInput() {
        this._customPromptInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customPromptInputInput() {
        return this._customPromptInput.internalValue;
    }

    // custom_prompt_interface - computed: true, optional: false, required: false
    private _customPromptInterface = new CcAgent.CustomPromptInterfacePropertyOutputReference(this, "custom_prompt_interface");
    public get customPromptInterface() {
        return this._customPromptInterface;
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

    // error_message - computed: true, optional: false, required: false
    public get errorMessage() {
        return this.getStringAttribute('error_message');
    }

    // icon_id - computed: true, optional: true, required: false
    private _iconId?: string; 
    public get iconId() {
        return this.getStringAttribute('icon_id');
    }
    public set iconId(value: string) {
        this._iconId = value;
    }
    public resetIconId() {
        this._iconId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iconIdInput() {
        return this._iconId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // spaces - computed: true, optional: true, required: false
    private _spaces?: string[]; 
    public get spaces() {
        return this.getListAttribute('spaces');
    }
    public set spaces(value: string[]) {
        this._spaces = value;
    }
    public resetSpaces() {
        this._spaces = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spacesInput() {
        return this._spaces;
    }

    // starter_prompts - computed: true, optional: true, required: false
    private _starterPrompts?: string[]; 
    public get starterPrompts() {
        return this.getListAttribute('starter_prompts');
    }
    public set starterPrompts(value: string[]) {
        this._starterPrompts = value;
    }
    public resetStarterPrompts() {
        this._starterPrompts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get starterPromptsInput() {
        return this._starterPrompts;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAgent.AgentTagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAgent.AgentTagProperty[] | cdktn.IResolvable) {
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

    // welcome_message - computed: true, optional: true, required: false
    private _welcomeMessage?: string; 
    public get welcomeMessage() {
        return this.getStringAttribute('welcome_message');
    }
    public set welcomeMessage(value: string) {
        this._welcomeMessage = value;
    }
    public resetWelcomeMessage() {
        this._welcomeMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get welcomeMessageInput() {
        return this._welcomeMessage;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            action_connectors: cdktn.listMapper(cdktn.stringToTerraform, false)(this._actionConnectors),
            agent_id: cdktn.stringToTerraform(this._agentId),
            agent_lifecycle: cdktn.stringToTerraform(this._agentLifecycle),
            aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
            custom_prompt_input: ccAgentCustomPromptInputPropertyToTerraform(this._customPromptInput.internalValue),
            description: cdktn.stringToTerraform(this._description),
            icon_id: cdktn.stringToTerraform(this._iconId),
            name: cdktn.stringToTerraform(this._name),
            spaces: cdktn.listMapper(cdktn.stringToTerraform, false)(this._spaces),
            starter_prompts: cdktn.listMapper(cdktn.stringToTerraform, false)(this._starterPrompts),
            tags: cdktn.listMapper(ccAgentAgentTagPropertyToTerraform, false)(this._tags.internalValue),
            welcome_message: cdktn.stringToTerraform(this._welcomeMessage),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action_connectors: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._actionConnectors),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            agent_id: {
                value: cdktn.stringToHclTerraform(this._agentId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            agent_lifecycle: {
                value: cdktn.stringToHclTerraform(this._agentLifecycle),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            aws_account_id: {
                value: cdktn.stringToHclTerraform(this._awsAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_prompt_input: {
                value: ccAgentCustomPromptInputPropertyToHclTerraform(this._customPromptInput.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAgent.CustomPromptInputProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            icon_id: {
                value: cdktn.stringToHclTerraform(this._iconId),
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
            spaces: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._spaces),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            starter_prompts: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._starterPrompts),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAgentAgentTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAgent.AgentTagPropertyList",
            },
            welcome_message: {
                value: cdktn.stringToHclTerraform(this._welcomeMessage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAgentCustomPromptProfilePropertyToTerraform(struct?: CcAgent.CustomPromptProfileProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        model_profile_id: cdktn.stringToTerraform(struct!.modelProfileId),
        qbs_aws_account_id: cdktn.stringToTerraform(struct!.qbsAwsAccountId),
        subscription_id: cdktn.stringToTerraform(struct!.subscriptionId),
    }
}


export function ccAgentCustomPromptProfilePropertyToHclTerraform(struct?: CcAgent.CustomPromptProfileProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        model_profile_id: {
            value: cdktn.stringToHclTerraform(struct!.modelProfileId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        qbs_aws_account_id: {
            value: cdktn.stringToHclTerraform(struct!.qbsAwsAccountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subscription_id: {
            value: cdktn.stringToHclTerraform(struct!.subscriptionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentCustomPromptInputParametersPropertyToTerraform(struct?: CcAgent.CustomPromptInputParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_instructions: cdktn.stringToTerraform(struct!.customInstructions),
        identity: cdktn.stringToTerraform(struct!.identity),
        output_style: cdktn.stringToTerraform(struct!.outputStyle),
        response_length: cdktn.stringToTerraform(struct!.responseLength),
        tone: cdktn.stringToTerraform(struct!.tone),
    }
}


export function ccAgentCustomPromptInputParametersPropertyToHclTerraform(struct?: CcAgent.CustomPromptInputParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_instructions: {
            value: cdktn.stringToHclTerraform(struct!.customInstructions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity: {
            value: cdktn.stringToHclTerraform(struct!.identity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_style: {
            value: cdktn.stringToHclTerraform(struct!.outputStyle),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        response_length: {
            value: cdktn.stringToHclTerraform(struct!.responseLength),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tone: {
            value: cdktn.stringToHclTerraform(struct!.tone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentCustomPromptInputPropertyToTerraform(struct?: CcAgent.CustomPromptInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        existing_prompt: ccAgentCustomPromptProfilePropertyToTerraform(struct!.existingPrompt),
        new_prompt: ccAgentCustomPromptInputParametersPropertyToTerraform(struct!.newPrompt),
    }
}


export function ccAgentCustomPromptInputPropertyToHclTerraform(struct?: CcAgent.CustomPromptInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        existing_prompt: {
            value: ccAgentCustomPromptProfilePropertyToHclTerraform(struct!.existingPrompt),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomPromptProfileProperty",
        },
        new_prompt: {
            value: ccAgentCustomPromptInputParametersPropertyToHclTerraform(struct!.newPrompt),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomPromptInputParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentCustomPromptInterfacePropertyToTerraform(struct?: CcAgent.CustomPromptInterfaceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccAgentCustomPromptInterfacePropertyToHclTerraform(struct?: CcAgent.CustomPromptInterfaceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccAgentAgentTagPropertyToTerraform(struct?: CcAgent.AgentTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAgentAgentTagPropertyToHclTerraform(struct?: CcAgent.AgentTagProperty | cdktn.IResolvable): any {
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


export namespace CcAgent {
export interface CustomPromptProfileProperty {
    /**
    * The identifier of the model profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#model_profile_id CcAgent#model_profile_id}
    */
    readonly modelProfileId?: string;
    /**
    * The QBS AWS account identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#qbs_aws_account_id CcAgent#qbs_aws_account_id}
    */
    readonly qbsAwsAccountId?: string;
    /**
    * The subscription identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#subscription_id CcAgent#subscription_id}
    */
    readonly subscriptionId?: string;
}
export class CustomPromptProfilePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomPromptProfileProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._modelProfileId !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelProfileId = this._modelProfileId;
        }
        if (this._qbsAwsAccountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.qbsAwsAccountId = this._qbsAwsAccountId;
        }
        if (this._subscriptionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.subscriptionId = this._subscriptionId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomPromptProfileProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._modelProfileId = undefined;
            this._qbsAwsAccountId = undefined;
            this._subscriptionId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._modelProfileId = value.modelProfileId;
            this._qbsAwsAccountId = value.qbsAwsAccountId;
            this._subscriptionId = value.subscriptionId;
        }
    }

    // model_profile_id - computed: true, optional: true, required: false
    private _modelProfileId?: string; 
    public get modelProfileId() {
        return this.getStringAttribute('model_profile_id');
    }
    public set modelProfileId(value: string) {
        this._modelProfileId = value;
    }
    public resetModelProfileId() {
        this._modelProfileId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelProfileIdInput() {
        return this._modelProfileId;
    }

    // qbs_aws_account_id - computed: true, optional: true, required: false
    private _qbsAwsAccountId?: string; 
    public get qbsAwsAccountId() {
        return this.getStringAttribute('qbs_aws_account_id');
    }
    public set qbsAwsAccountId(value: string) {
        this._qbsAwsAccountId = value;
    }
    public resetQbsAwsAccountId() {
        this._qbsAwsAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qbsAwsAccountIdInput() {
        return this._qbsAwsAccountId;
    }

    // subscription_id - computed: true, optional: true, required: false
    private _subscriptionId?: string; 
    public get subscriptionId() {
        return this.getStringAttribute('subscription_id');
    }
    public set subscriptionId(value: string) {
        this._subscriptionId = value;
    }
    public resetSubscriptionId() {
        this._subscriptionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subscriptionIdInput() {
        return this._subscriptionId;
    }
}
export interface CustomPromptInputParametersProperty {
    /**
    * Custom instructions for the agent behavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#custom_instructions CcAgent#custom_instructions}
    */
    readonly customInstructions?: string;
    /**
    * The identity or persona of the agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#identity CcAgent#identity}
    */
    readonly identity?: string;
    /**
    * The output style for the agent responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#output_style CcAgent#output_style}
    */
    readonly outputStyle?: string;
    /**
    * The desired response length for the agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#response_length CcAgent#response_length}
    */
    readonly responseLength?: string;
    /**
    * The tone used in agent responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#tone CcAgent#tone}
    */
    readonly tone?: string;
}
export class CustomPromptInputParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomPromptInputParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customInstructions !== undefined) {
            hasAnyValues = true;
            internalValueResult.customInstructions = this._customInstructions;
        }
        if (this._identity !== undefined) {
            hasAnyValues = true;
            internalValueResult.identity = this._identity;
        }
        if (this._outputStyle !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputStyle = this._outputStyle;
        }
        if (this._responseLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.responseLength = this._responseLength;
        }
        if (this._tone !== undefined) {
            hasAnyValues = true;
            internalValueResult.tone = this._tone;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomPromptInputParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customInstructions = undefined;
            this._identity = undefined;
            this._outputStyle = undefined;
            this._responseLength = undefined;
            this._tone = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customInstructions = value.customInstructions;
            this._identity = value.identity;
            this._outputStyle = value.outputStyle;
            this._responseLength = value.responseLength;
            this._tone = value.tone;
        }
    }

    // custom_instructions - computed: true, optional: true, required: false
    private _customInstructions?: string; 
    public get customInstructions() {
        return this.getStringAttribute('custom_instructions');
    }
    public set customInstructions(value: string) {
        this._customInstructions = value;
    }
    public resetCustomInstructions() {
        this._customInstructions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customInstructionsInput() {
        return this._customInstructions;
    }

    // identity - computed: true, optional: true, required: false
    private _identity?: string; 
    public get identity() {
        return this.getStringAttribute('identity');
    }
    public set identity(value: string) {
        this._identity = value;
    }
    public resetIdentity() {
        this._identity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityInput() {
        return this._identity;
    }

    // output_style - computed: true, optional: true, required: false
    private _outputStyle?: string; 
    public get outputStyle() {
        return this.getStringAttribute('output_style');
    }
    public set outputStyle(value: string) {
        this._outputStyle = value;
    }
    public resetOutputStyle() {
        this._outputStyle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputStyleInput() {
        return this._outputStyle;
    }

    // response_length - computed: true, optional: true, required: false
    private _responseLength?: string; 
    public get responseLength() {
        return this.getStringAttribute('response_length');
    }
    public set responseLength(value: string) {
        this._responseLength = value;
    }
    public resetResponseLength() {
        this._responseLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseLengthInput() {
        return this._responseLength;
    }

    // tone - computed: true, optional: true, required: false
    private _tone?: string; 
    public get tone() {
        return this.getStringAttribute('tone');
    }
    public set tone(value: string) {
        this._tone = value;
    }
    public resetTone() {
        this._tone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toneInput() {
        return this._tone;
    }
}
export interface CustomPromptInputProperty {
    /**
    * Reference to an existing custom prompt profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#existing_prompt CcAgent#existing_prompt}
    */
    readonly existingPrompt?: CustomPromptProfileProperty;
    /**
    * Parameters for creating a new custom prompt configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#new_prompt CcAgent#new_prompt}
    */
    readonly newPrompt?: CustomPromptInputParametersProperty;
}
export class CustomPromptInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomPromptInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._existingPrompt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.existingPrompt = this._existingPrompt?.internalValue;
        }
        if (this._newPrompt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.newPrompt = this._newPrompt?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomPromptInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._existingPrompt.internalValue = undefined;
            this._newPrompt.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._existingPrompt.internalValue = value.existingPrompt;
            this._newPrompt.internalValue = value.newPrompt;
        }
    }

    // existing_prompt - computed: true, optional: true, required: false
    private _existingPrompt = new CustomPromptProfilePropertyOutputReference(this, "existing_prompt");
    public get existingPrompt() {
        return this._existingPrompt;
    }
    public putExistingPrompt(value: CustomPromptProfileProperty) {
        this._existingPrompt.internalValue = value;
    }
    public resetExistingPrompt() {
        this._existingPrompt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get existingPromptInput() {
        return this._existingPrompt.internalValue;
    }

    // new_prompt - computed: true, optional: true, required: false
    private _newPrompt = new CustomPromptInputParametersPropertyOutputReference(this, "new_prompt");
    public get newPrompt() {
        return this._newPrompt;
    }
    public putNewPrompt(value: CustomPromptInputParametersProperty) {
        this._newPrompt.internalValue = value;
    }
    public resetNewPrompt() {
        this._newPrompt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get newPromptInput() {
        return this._newPrompt.internalValue;
    }
}
export interface CustomPromptInterfaceProperty {
}
export class CustomPromptInterfacePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomPromptInterfaceProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomPromptInterfaceProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // custom_instructions - computed: true, optional: false, required: false
    public get customInstructions() {
        return this.getStringAttribute('custom_instructions');
    }

    // identity - computed: true, optional: false, required: false
    public get identity() {
        return this.getStringAttribute('identity');
    }

    // model_profile_id - computed: true, optional: false, required: false
    public get modelProfileId() {
        return this.getStringAttribute('model_profile_id');
    }

    // output_style - computed: true, optional: false, required: false
    public get outputStyle() {
        return this.getStringAttribute('output_style');
    }

    // prompt_summary - computed: true, optional: false, required: false
    public get promptSummary() {
        return this.getStringAttribute('prompt_summary');
    }

    // qbs_aws_account_id - computed: true, optional: false, required: false
    public get qbsAwsAccountId() {
        return this.getStringAttribute('qbs_aws_account_id');
    }

    // response_length - computed: true, optional: false, required: false
    public get responseLength() {
        return this.getStringAttribute('response_length');
    }

    // subscription_id - computed: true, optional: false, required: false
    public get subscriptionId() {
        return this.getStringAttribute('subscription_id');
    }

    // tone - computed: true, optional: false, required: false
    public get tone() {
        return this.getStringAttribute('tone');
    }
}
export interface AgentTagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#key CcAgent#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_agent#value CcAgent#value}
    */
    readonly value?: string;
}
export class AgentTagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AgentTagProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: AgentTagProperty | cdktn.IResolvable | undefined) {
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

export class AgentTagPropertyList extends cdktn.ComplexList {
    public internalValue? : AgentTagProperty[] | cdktn.IResolvable

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
    public get(index: number): AgentTagPropertyOutputReference {
        return new AgentTagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
