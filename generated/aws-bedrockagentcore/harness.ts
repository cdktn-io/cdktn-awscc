// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcHarnessProps extends cdktn.TerraformMetaArguments {
    /**
    * The tools that the agent is allowed to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#allowed_tools CcHarness#allowed_tools}
    */
    readonly allowedTools?: string[];
    /**
    * The inbound authorization configuration for authenticating incoming requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#authorizer_configuration CcHarness#authorizer_configuration}
    */
    readonly authorizerConfiguration?: CcHarness.AuthorizerConfigurationProperty;
    /**
    * The compute environment configuration for the harness, including underlying runtime information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#environment CcHarness#environment}
    */
    readonly environment?: CcHarness.HarnessEnvironmentProviderProperty;
    /**
    * The environment artifact for the harness, such as a custom container image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#environment_artifact CcHarness#environment_artifact}
    */
    readonly environmentArtifact?: CcHarness.HarnessEnvironmentArtifactProperty;
    /**
    * Environment variables to set in the harness runtime environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#environment_variables CcHarness#environment_variables}
    */
    readonly environmentVariables?: { [key: string]: string };
    /**
    * The ARN of the IAM role that the harness assumes when running.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#execution_role_arn CcHarness#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * The name of the harness.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#harness_name CcHarness#harness_name}
    */
    readonly harnessName: string;
    /**
    * The maximum number of iterations the agent loop can execute per invocation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#max_iterations CcHarness#max_iterations}
    */
    readonly maxIterations?: number;
    /**
    * The maximum number of tokens the agent can generate per iteration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#max_tokens CcHarness#max_tokens}
    */
    readonly maxTokens?: number;
    /**
    * The AgentCore Memory configuration for persisting conversation context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#memory CcHarness#memory}
    */
    readonly memory?: CcHarness.HarnessMemoryConfigurationProperty;
    /**
    * The model configuration for the harness.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#model CcHarness#model}
    */
    readonly model: CcHarness.HarnessModelConfigurationProperty;
    /**
    * The skills available to the agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#skills CcHarness#skills}
    */
    readonly skills?: CcHarness.HarnessSkillProperty[] | cdktn.IResolvable;
    /**
    * The system prompt that defines the agent's behavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#system_prompt CcHarness#system_prompt}
    */
    readonly systemPrompt?: CcHarness.HarnessSystemContentBlockProperty[] | cdktn.IResolvable;
    /**
    * Tags to apply to the harness resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#tags CcHarness#tags}
    */
    readonly tags?: CcHarness.TagProperty[] | cdktn.IResolvable;
    /**
    * The maximum duration in seconds for the agent loop execution per invocation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#timeout_seconds CcHarness#timeout_seconds}
    */
    readonly timeoutSeconds?: number;
    /**
    * The tools available to the agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#tools CcHarness#tools}
    */
    readonly tools?: CcHarness.HarnessToolProperty[] | cdktn.IResolvable;
    /**
    * The truncation configuration for managing conversation context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#truncation CcHarness#truncation}
    */
    readonly truncation?: CcHarness.HarnessTruncationConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness awscc_bedrockagentcore_harness}
*/
export class CcHarness extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrockagentcore_harness";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcHarness resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcHarness to import
    * @param importFromId The id of the existing CcHarness that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcHarness to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_harness", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness awscc_bedrockagentcore_harness} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcHarnessProps
    */
    public constructor(scope: Construct, id: string, config: CcHarnessProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrockagentcore_harness',
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
        this._allowedTools = config.allowedTools;
        this._authorizerConfiguration.internalValue = config.authorizerConfiguration;
        this._environment.internalValue = config.environment;
        this._environmentArtifact.internalValue = config.environmentArtifact;
        this._environmentVariables = config.environmentVariables;
        this._executionRoleArn = config.executionRoleArn;
        this._harnessName = config.harnessName;
        this._maxIterations = config.maxIterations;
        this._maxTokens = config.maxTokens;
        this._memory.internalValue = config.memory;
        this._model.internalValue = config.model;
        this._skills.internalValue = config.skills;
        this._systemPrompt.internalValue = config.systemPrompt;
        this._tags.internalValue = config.tags;
        this._timeoutSeconds = config.timeoutSeconds;
        this._tools.internalValue = config.tools;
        this._truncation.internalValue = config.truncation;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allowed_tools - computed: true, optional: true, required: false
    private _allowedTools?: string[]; 
    public get allowedTools() {
        return this.getListAttribute('allowed_tools');
    }
    public set allowedTools(value: string[]) {
        this._allowedTools = value;
    }
    public resetAllowedTools() {
        this._allowedTools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedToolsInput() {
        return this._allowedTools;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // authorizer_configuration - computed: true, optional: true, required: false
    private _authorizerConfiguration = new CcHarness.AuthorizerConfigurationPropertyOutputReference(this, "authorizer_configuration");
    public get authorizerConfiguration() {
        return this._authorizerConfiguration;
    }
    public putAuthorizerConfiguration(value: CcHarness.AuthorizerConfigurationProperty) {
        this._authorizerConfiguration.internalValue = value;
    }
    public resetAuthorizerConfiguration() {
        this._authorizerConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerConfigurationInput() {
        return this._authorizerConfiguration.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // environment - computed: true, optional: true, required: false
    private _environment = new CcHarness.HarnessEnvironmentProviderPropertyOutputReference(this, "environment");
    public get environment() {
        return this._environment;
    }
    public putEnvironment(value: CcHarness.HarnessEnvironmentProviderProperty) {
        this._environment.internalValue = value;
    }
    public resetEnvironment() {
        this._environment.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
        return this._environment.internalValue;
    }

    // environment_artifact - computed: true, optional: true, required: false
    private _environmentArtifact = new CcHarness.HarnessEnvironmentArtifactPropertyOutputReference(this, "environment_artifact");
    public get environmentArtifact() {
        return this._environmentArtifact;
    }
    public putEnvironmentArtifact(value: CcHarness.HarnessEnvironmentArtifactProperty) {
        this._environmentArtifact.internalValue = value;
    }
    public resetEnvironmentArtifact() {
        this._environmentArtifact.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentArtifactInput() {
        return this._environmentArtifact.internalValue;
    }

    // environment_variables - computed: true, optional: true, required: false
    private _environmentVariables?: { [key: string]: string }; 
    public get environmentVariables() {
        return this.getStringMapAttribute('environment_variables');
    }
    public set environmentVariables(value: { [key: string]: string }) {
        this._environmentVariables = value;
    }
    public resetEnvironmentVariables() {
        this._environmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentVariablesInput() {
        return this._environmentVariables;
    }

    // execution_role_arn - computed: false, optional: false, required: true
    private _executionRoleArn?: string; 
    public get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    public set executionRoleArn(value: string) {
        this._executionRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleArnInput() {
        return this._executionRoleArn;
    }

    // harness_id - computed: true, optional: false, required: false
    public get harnessId() {
        return this.getStringAttribute('harness_id');
    }

    // harness_name - computed: false, optional: false, required: true
    private _harnessName?: string; 
    public get harnessName() {
        return this.getStringAttribute('harness_name');
    }
    public set harnessName(value: string) {
        this._harnessName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get harnessNameInput() {
        return this._harnessName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // max_iterations - computed: true, optional: true, required: false
    private _maxIterations?: number; 
    public get maxIterations() {
        return this.getNumberAttribute('max_iterations');
    }
    public set maxIterations(value: number) {
        this._maxIterations = value;
    }
    public resetMaxIterations() {
        this._maxIterations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxIterationsInput() {
        return this._maxIterations;
    }

    // max_tokens - computed: true, optional: true, required: false
    private _maxTokens?: number; 
    public get maxTokens() {
        return this.getNumberAttribute('max_tokens');
    }
    public set maxTokens(value: number) {
        this._maxTokens = value;
    }
    public resetMaxTokens() {
        this._maxTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxTokensInput() {
        return this._maxTokens;
    }

    // memory - computed: true, optional: true, required: false
    private _memory = new CcHarness.HarnessMemoryConfigurationPropertyOutputReference(this, "memory");
    public get memory() {
        return this._memory;
    }
    public putMemory(value: CcHarness.HarnessMemoryConfigurationProperty) {
        this._memory.internalValue = value;
    }
    public resetMemory() {
        this._memory.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryInput() {
        return this._memory.internalValue;
    }

    // model - computed: false, optional: false, required: true
    private _model = new CcHarness.HarnessModelConfigurationPropertyOutputReference(this, "model");
    public get model() {
        return this._model;
    }
    public putModel(value: CcHarness.HarnessModelConfigurationProperty) {
        this._model.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modelInput() {
        return this._model.internalValue;
    }

    // skills - computed: true, optional: true, required: false
    private _skills = new CcHarness.HarnessSkillPropertyList(this, "skills", false);
    public get skills() {
        return this._skills;
    }
    public putSkills(value: CcHarness.HarnessSkillProperty[] | cdktn.IResolvable) {
        this._skills.internalValue = value;
    }
    public resetSkills() {
        this._skills.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skillsInput() {
        return this._skills.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // system_prompt - computed: true, optional: true, required: false
    private _systemPrompt = new CcHarness.HarnessSystemContentBlockPropertyList(this, "system_prompt", false);
    public get systemPrompt() {
        return this._systemPrompt;
    }
    public putSystemPrompt(value: CcHarness.HarnessSystemContentBlockProperty[] | cdktn.IResolvable) {
        this._systemPrompt.internalValue = value;
    }
    public resetSystemPrompt() {
        this._systemPrompt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemPromptInput() {
        return this._systemPrompt.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcHarness.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcHarness.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // timeout_seconds - computed: true, optional: true, required: false
    private _timeoutSeconds?: number; 
    public get timeoutSeconds() {
        return this.getNumberAttribute('timeout_seconds');
    }
    public set timeoutSeconds(value: number) {
        this._timeoutSeconds = value;
    }
    public resetTimeoutSeconds() {
        this._timeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutSecondsInput() {
        return this._timeoutSeconds;
    }

    // tools - computed: true, optional: true, required: false
    private _tools = new CcHarness.HarnessToolPropertyList(this, "tools", false);
    public get tools() {
        return this._tools;
    }
    public putTools(value: CcHarness.HarnessToolProperty[] | cdktn.IResolvable) {
        this._tools.internalValue = value;
    }
    public resetTools() {
        this._tools.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toolsInput() {
        return this._tools.internalValue;
    }

    // truncation - computed: true, optional: true, required: false
    private _truncation = new CcHarness.HarnessTruncationConfigurationPropertyOutputReference(this, "truncation");
    public get truncation() {
        return this._truncation;
    }
    public putTruncation(value: CcHarness.HarnessTruncationConfigurationProperty) {
        this._truncation.internalValue = value;
    }
    public resetTruncation() {
        this._truncation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get truncationInput() {
        return this._truncation.internalValue;
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
            allowed_tools: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedTools),
            authorizer_configuration: ccHarnessAuthorizerConfigurationPropertyToTerraform(this._authorizerConfiguration.internalValue),
            environment: ccHarnessHarnessEnvironmentProviderPropertyToTerraform(this._environment.internalValue),
            environment_artifact: ccHarnessHarnessEnvironmentArtifactPropertyToTerraform(this._environmentArtifact.internalValue),
            environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(this._environmentVariables),
            execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
            harness_name: cdktn.stringToTerraform(this._harnessName),
            max_iterations: cdktn.numberToTerraform(this._maxIterations),
            max_tokens: cdktn.numberToTerraform(this._maxTokens),
            memory: ccHarnessHarnessMemoryConfigurationPropertyToTerraform(this._memory.internalValue),
            model: ccHarnessHarnessModelConfigurationPropertyToTerraform(this._model.internalValue),
            skills: cdktn.listMapper(ccHarnessHarnessSkillPropertyToTerraform, false)(this._skills.internalValue),
            system_prompt: cdktn.listMapper(ccHarnessHarnessSystemContentBlockPropertyToTerraform, false)(this._systemPrompt.internalValue),
            tags: cdktn.listMapper(ccHarnessTagPropertyToTerraform, false)(this._tags.internalValue),
            timeout_seconds: cdktn.numberToTerraform(this._timeoutSeconds),
            tools: cdktn.listMapper(ccHarnessHarnessToolPropertyToTerraform, false)(this._tools.internalValue),
            truncation: ccHarnessHarnessTruncationConfigurationPropertyToTerraform(this._truncation.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allowed_tools: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedTools),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            authorizer_configuration: {
                value: ccHarnessAuthorizerConfigurationPropertyToHclTerraform(this._authorizerConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcHarness.AuthorizerConfigurationProperty",
            },
            environment: {
                value: ccHarnessHarnessEnvironmentProviderPropertyToHclTerraform(this._environment.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcHarness.HarnessEnvironmentProviderProperty",
            },
            environment_artifact: {
                value: ccHarnessHarnessEnvironmentArtifactPropertyToHclTerraform(this._environmentArtifact.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcHarness.HarnessEnvironmentArtifactProperty",
            },
            environment_variables: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._environmentVariables),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            execution_role_arn: {
                value: cdktn.stringToHclTerraform(this._executionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            harness_name: {
                value: cdktn.stringToHclTerraform(this._harnessName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_iterations: {
                value: cdktn.numberToHclTerraform(this._maxIterations),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_tokens: {
                value: cdktn.numberToHclTerraform(this._maxTokens),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            memory: {
                value: ccHarnessHarnessMemoryConfigurationPropertyToHclTerraform(this._memory.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcHarness.HarnessMemoryConfigurationProperty",
            },
            model: {
                value: ccHarnessHarnessModelConfigurationPropertyToHclTerraform(this._model.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcHarness.HarnessModelConfigurationProperty",
            },
            skills: {
                value: cdktn.listMapperHcl(ccHarnessHarnessSkillPropertyToHclTerraform, false)(this._skills.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcHarness.HarnessSkillPropertyList",
            },
            system_prompt: {
                value: cdktn.listMapperHcl(ccHarnessHarnessSystemContentBlockPropertyToHclTerraform, false)(this._systemPrompt.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcHarness.HarnessSystemContentBlockPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccHarnessTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcHarness.TagPropertyList",
            },
            timeout_seconds: {
                value: cdktn.numberToHclTerraform(this._timeoutSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tools: {
                value: cdktn.listMapperHcl(ccHarnessHarnessToolPropertyToHclTerraform, false)(this._tools.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcHarness.HarnessToolPropertyList",
            },
            truncation: {
                value: ccHarnessHarnessTruncationConfigurationPropertyToHclTerraform(this._truncation.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcHarness.HarnessTruncationConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccHarnessClaimMatchValueTypePropertyToTerraform(struct?: CcHarness.ClaimMatchValueTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        match_value_string: cdktn.stringToTerraform(struct!.matchValueString),
        match_value_string_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchValueStringList),
    }
}


export function ccHarnessClaimMatchValueTypePropertyToHclTerraform(struct?: CcHarness.ClaimMatchValueTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        match_value_string: {
            value: cdktn.stringToHclTerraform(struct!.matchValueString),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        match_value_string_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchValueStringList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessAuthorizingClaimMatchValueTypePropertyToTerraform(struct?: CcHarness.AuthorizingClaimMatchValueTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        claim_match_operator: cdktn.stringToTerraform(struct!.claimMatchOperator),
        claim_match_value: ccHarnessClaimMatchValueTypePropertyToTerraform(struct!.claimMatchValue),
    }
}


export function ccHarnessAuthorizingClaimMatchValueTypePropertyToHclTerraform(struct?: CcHarness.AuthorizingClaimMatchValueTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        claim_match_operator: {
            value: cdktn.stringToHclTerraform(struct!.claimMatchOperator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        claim_match_value: {
            value: ccHarnessClaimMatchValueTypePropertyToHclTerraform(struct!.claimMatchValue),
            isBlock: true,
            type: "struct",
            storageClassType: "ClaimMatchValueTypeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessCustomClaimValidationTypePropertyToTerraform(struct?: CcHarness.CustomClaimValidationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorizing_claim_match_value: ccHarnessAuthorizingClaimMatchValueTypePropertyToTerraform(struct!.authorizingClaimMatchValue),
        inbound_token_claim_name: cdktn.stringToTerraform(struct!.inboundTokenClaimName),
        inbound_token_claim_value_type: cdktn.stringToTerraform(struct!.inboundTokenClaimValueType),
    }
}


export function ccHarnessCustomClaimValidationTypePropertyToHclTerraform(struct?: CcHarness.CustomClaimValidationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorizing_claim_match_value: {
            value: ccHarnessAuthorizingClaimMatchValueTypePropertyToHclTerraform(struct!.authorizingClaimMatchValue),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthorizingClaimMatchValueTypeProperty",
        },
        inbound_token_claim_name: {
            value: cdktn.stringToHclTerraform(struct!.inboundTokenClaimName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inbound_token_claim_value_type: {
            value: cdktn.stringToHclTerraform(struct!.inboundTokenClaimValueType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessCustomJWTAuthorizerConfigurationPropertyToTerraform(struct?: CcHarness.CustomJWTAuthorizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_audience: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAudience),
        allowed_clients: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedClients),
        allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
        custom_claims: cdktn.listMapper(ccHarnessCustomClaimValidationTypePropertyToTerraform, false)(struct!.customClaims),
        discovery_url: cdktn.stringToTerraform(struct!.discoveryUrl),
    }
}


export function ccHarnessCustomJWTAuthorizerConfigurationPropertyToHclTerraform(struct?: CcHarness.CustomJWTAuthorizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_audience: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAudience),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_clients: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedClients),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_scopes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedScopes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        custom_claims: {
            value: cdktn.listMapperHcl(ccHarnessCustomClaimValidationTypePropertyToHclTerraform, false)(struct!.customClaims),
            isBlock: true,
            type: "list",
            storageClassType: "CustomClaimValidationTypePropertyList",
        },
        discovery_url: {
            value: cdktn.stringToHclTerraform(struct!.discoveryUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessAuthorizerConfigurationPropertyToTerraform(struct?: CcHarness.AuthorizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_jwt_authorizer: ccHarnessCustomJWTAuthorizerConfigurationPropertyToTerraform(struct!.customJwtAuthorizer),
    }
}


export function ccHarnessAuthorizerConfigurationPropertyToHclTerraform(struct?: CcHarness.AuthorizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_jwt_authorizer: {
            value: ccHarnessCustomJWTAuthorizerConfigurationPropertyToHclTerraform(struct!.customJwtAuthorizer),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomJWTAuthorizerConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessSessionStorageConfigurationPropertyToTerraform(struct?: CcHarness.SessionStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mount_path: cdktn.stringToTerraform(struct!.mountPath),
    }
}


export function ccHarnessSessionStorageConfigurationPropertyToHclTerraform(struct?: CcHarness.SessionStorageConfigurationProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessFilesystemConfigurationPropertyToTerraform(struct?: CcHarness.FilesystemConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        session_storage: ccHarnessSessionStorageConfigurationPropertyToTerraform(struct!.sessionStorage),
    }
}


export function ccHarnessFilesystemConfigurationPropertyToHclTerraform(struct?: CcHarness.FilesystemConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        session_storage: {
            value: ccHarnessSessionStorageConfigurationPropertyToHclTerraform(struct!.sessionStorage),
            isBlock: true,
            type: "struct",
            storageClassType: "SessionStorageConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessLifecycleConfigurationPropertyToTerraform(struct?: CcHarness.LifecycleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_runtime_session_timeout: cdktn.numberToTerraform(struct!.idleRuntimeSessionTimeout),
        max_lifetime: cdktn.numberToTerraform(struct!.maxLifetime),
    }
}


export function ccHarnessLifecycleConfigurationPropertyToHclTerraform(struct?: CcHarness.LifecycleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_runtime_session_timeout: {
            value: cdktn.numberToHclTerraform(struct!.idleRuntimeSessionTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_lifetime: {
            value: cdktn.numberToHclTerraform(struct!.maxLifetime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessVpcConfigPropertyToTerraform(struct?: CcHarness.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccHarnessVpcConfigPropertyToHclTerraform(struct?: CcHarness.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessNetworkConfigurationPropertyToTerraform(struct?: CcHarness.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        network_mode: cdktn.stringToTerraform(struct!.networkMode),
        network_mode_config: ccHarnessVpcConfigPropertyToTerraform(struct!.networkModeConfig),
    }
}


export function ccHarnessNetworkConfigurationPropertyToHclTerraform(struct?: CcHarness.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        network_mode: {
            value: cdktn.stringToHclTerraform(struct!.networkMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network_mode_config: {
            value: ccHarnessVpcConfigPropertyToHclTerraform(struct!.networkModeConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessAgentCoreRuntimeEnvironmentPropertyToTerraform(struct?: CcHarness.HarnessAgentCoreRuntimeEnvironmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filesystem_configurations: cdktn.listMapper(ccHarnessFilesystemConfigurationPropertyToTerraform, false)(struct!.filesystemConfigurations),
        lifecycle_configuration: ccHarnessLifecycleConfigurationPropertyToTerraform(struct!.lifecycleConfiguration),
        network_configuration: ccHarnessNetworkConfigurationPropertyToTerraform(struct!.networkConfiguration),
    }
}


export function ccHarnessHarnessAgentCoreRuntimeEnvironmentPropertyToHclTerraform(struct?: CcHarness.HarnessAgentCoreRuntimeEnvironmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filesystem_configurations: {
            value: cdktn.listMapperHcl(ccHarnessFilesystemConfigurationPropertyToHclTerraform, false)(struct!.filesystemConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "FilesystemConfigurationPropertyList",
        },
        lifecycle_configuration: {
            value: ccHarnessLifecycleConfigurationPropertyToHclTerraform(struct!.lifecycleConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "LifecycleConfigurationProperty",
        },
        network_configuration: {
            value: ccHarnessNetworkConfigurationPropertyToHclTerraform(struct!.networkConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessEnvironmentProviderPropertyToTerraform(struct?: CcHarness.HarnessEnvironmentProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agent_core_runtime_environment: ccHarnessHarnessAgentCoreRuntimeEnvironmentPropertyToTerraform(struct!.agentCoreRuntimeEnvironment),
    }
}


export function ccHarnessHarnessEnvironmentProviderPropertyToHclTerraform(struct?: CcHarness.HarnessEnvironmentProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agent_core_runtime_environment: {
            value: ccHarnessHarnessAgentCoreRuntimeEnvironmentPropertyToHclTerraform(struct!.agentCoreRuntimeEnvironment),
            isBlock: true,
            type: "struct",
            storageClassType: "HarnessAgentCoreRuntimeEnvironmentProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessContainerConfigurationPropertyToTerraform(struct?: CcHarness.ContainerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_uri: cdktn.stringToTerraform(struct!.containerUri),
    }
}


export function ccHarnessContainerConfigurationPropertyToHclTerraform(struct?: CcHarness.ContainerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_uri: {
            value: cdktn.stringToHclTerraform(struct!.containerUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessEnvironmentArtifactPropertyToTerraform(struct?: CcHarness.HarnessEnvironmentArtifactProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_configuration: ccHarnessContainerConfigurationPropertyToTerraform(struct!.containerConfiguration),
    }
}


export function ccHarnessHarnessEnvironmentArtifactPropertyToHclTerraform(struct?: CcHarness.HarnessEnvironmentArtifactProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_configuration: {
            value: ccHarnessContainerConfigurationPropertyToHclTerraform(struct!.containerConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ContainerConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessAgentCoreMemoryRetrievalConfigPropertyToTerraform(struct?: CcHarness.HarnessAgentCoreMemoryRetrievalConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        relevance_score: cdktn.numberToTerraform(struct!.relevanceScore),
        strategy_id: cdktn.stringToTerraform(struct!.strategyId),
        top_k: cdktn.numberToTerraform(struct!.topK),
    }
}


export function ccHarnessHarnessAgentCoreMemoryRetrievalConfigPropertyToHclTerraform(struct?: CcHarness.HarnessAgentCoreMemoryRetrievalConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        relevance_score: {
            value: cdktn.numberToHclTerraform(struct!.relevanceScore),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        strategy_id: {
            value: cdktn.stringToHclTerraform(struct!.strategyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        top_k: {
            value: cdktn.numberToHclTerraform(struct!.topK),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessAgentCoreMemoryConfigurationPropertyToTerraform(struct?: CcHarness.HarnessAgentCoreMemoryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actor_id: cdktn.stringToTerraform(struct!.actorId),
        arn: cdktn.stringToTerraform(struct!.arn),
        messages_count: cdktn.numberToTerraform(struct!.messagesCount),
        retrieval_config: cdktn.hashMapper(ccHarnessHarnessAgentCoreMemoryRetrievalConfigPropertyToTerraform)(struct!.retrievalConfig),
    }
}


export function ccHarnessHarnessAgentCoreMemoryConfigurationPropertyToHclTerraform(struct?: CcHarness.HarnessAgentCoreMemoryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actor_id: {
            value: cdktn.stringToHclTerraform(struct!.actorId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        messages_count: {
            value: cdktn.numberToHclTerraform(struct!.messagesCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        retrieval_config: {
            value: cdktn.hashMapperHcl(ccHarnessHarnessAgentCoreMemoryRetrievalConfigPropertyToHclTerraform)(struct!.retrievalConfig),
            isBlock: true,
            type: "map",
            storageClassType: "HarnessAgentCoreMemoryRetrievalConfigPropertyMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessMemoryConfigurationPropertyToTerraform(struct?: CcHarness.HarnessMemoryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agent_core_memory_configuration: ccHarnessHarnessAgentCoreMemoryConfigurationPropertyToTerraform(struct!.agentCoreMemoryConfiguration),
    }
}


export function ccHarnessHarnessMemoryConfigurationPropertyToHclTerraform(struct?: CcHarness.HarnessMemoryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agent_core_memory_configuration: {
            value: ccHarnessHarnessAgentCoreMemoryConfigurationPropertyToHclTerraform(struct!.agentCoreMemoryConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "HarnessAgentCoreMemoryConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessBedrockModelConfigPropertyToTerraform(struct?: CcHarness.HarnessBedrockModelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
        model_id: cdktn.stringToTerraform(struct!.modelId),
        temperature: cdktn.numberToTerraform(struct!.temperature),
        top_p: cdktn.numberToTerraform(struct!.topP),
    }
}


export function ccHarnessHarnessBedrockModelConfigPropertyToHclTerraform(struct?: CcHarness.HarnessBedrockModelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_tokens: {
            value: cdktn.numberToHclTerraform(struct!.maxTokens),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        model_id: {
            value: cdktn.stringToHclTerraform(struct!.modelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        temperature: {
            value: cdktn.numberToHclTerraform(struct!.temperature),
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


export function ccHarnessHarnessGeminiModelConfigPropertyToTerraform(struct?: CcHarness.HarnessGeminiModelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_key_arn: cdktn.stringToTerraform(struct!.apiKeyArn),
        max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
        model_id: cdktn.stringToTerraform(struct!.modelId),
        temperature: cdktn.numberToTerraform(struct!.temperature),
        top_k: cdktn.numberToTerraform(struct!.topK),
        top_p: cdktn.numberToTerraform(struct!.topP),
    }
}


export function ccHarnessHarnessGeminiModelConfigPropertyToHclTerraform(struct?: CcHarness.HarnessGeminiModelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        api_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.apiKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_tokens: {
            value: cdktn.numberToHclTerraform(struct!.maxTokens),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        model_id: {
            value: cdktn.stringToHclTerraform(struct!.modelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccHarnessHarnessOpenAiModelConfigPropertyToTerraform(struct?: CcHarness.HarnessOpenAiModelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_key_arn: cdktn.stringToTerraform(struct!.apiKeyArn),
        max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
        model_id: cdktn.stringToTerraform(struct!.modelId),
        temperature: cdktn.numberToTerraform(struct!.temperature),
        top_p: cdktn.numberToTerraform(struct!.topP),
    }
}


export function ccHarnessHarnessOpenAiModelConfigPropertyToHclTerraform(struct?: CcHarness.HarnessOpenAiModelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        api_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.apiKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_tokens: {
            value: cdktn.numberToHclTerraform(struct!.maxTokens),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        model_id: {
            value: cdktn.stringToHclTerraform(struct!.modelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        temperature: {
            value: cdktn.numberToHclTerraform(struct!.temperature),
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


export function ccHarnessHarnessModelConfigurationPropertyToTerraform(struct?: CcHarness.HarnessModelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bedrock_model_config: ccHarnessHarnessBedrockModelConfigPropertyToTerraform(struct!.bedrockModelConfig),
        gemini_model_config: ccHarnessHarnessGeminiModelConfigPropertyToTerraform(struct!.geminiModelConfig),
        open_ai_model_config: ccHarnessHarnessOpenAiModelConfigPropertyToTerraform(struct!.openAiModelConfig),
    }
}


export function ccHarnessHarnessModelConfigurationPropertyToHclTerraform(struct?: CcHarness.HarnessModelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bedrock_model_config: {
            value: ccHarnessHarnessBedrockModelConfigPropertyToHclTerraform(struct!.bedrockModelConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "HarnessBedrockModelConfigProperty",
        },
        gemini_model_config: {
            value: ccHarnessHarnessGeminiModelConfigPropertyToHclTerraform(struct!.geminiModelConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "HarnessGeminiModelConfigProperty",
        },
        open_ai_model_config: {
            value: ccHarnessHarnessOpenAiModelConfigPropertyToHclTerraform(struct!.openAiModelConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "HarnessOpenAiModelConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessSkillPropertyToTerraform(struct?: CcHarness.HarnessSkillProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        path: cdktn.stringToTerraform(struct!.path),
    }
}


export function ccHarnessHarnessSkillPropertyToHclTerraform(struct?: CcHarness.HarnessSkillProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessSystemContentBlockPropertyToTerraform(struct?: CcHarness.HarnessSystemContentBlockProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        text: cdktn.stringToTerraform(struct!.text),
    }
}


export function ccHarnessHarnessSystemContentBlockPropertyToHclTerraform(struct?: CcHarness.HarnessSystemContentBlockProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        text: {
            value: cdktn.stringToHclTerraform(struct!.text),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessTagPropertyToTerraform(struct?: CcHarness.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccHarnessTagPropertyToHclTerraform(struct?: CcHarness.TagProperty | cdktn.IResolvable): any {
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


export function ccHarnessHarnessAgentCoreBrowserConfigPropertyToTerraform(struct?: CcHarness.HarnessAgentCoreBrowserConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        browser_arn: cdktn.stringToTerraform(struct!.browserArn),
    }
}


export function ccHarnessHarnessAgentCoreBrowserConfigPropertyToHclTerraform(struct?: CcHarness.HarnessAgentCoreBrowserConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        browser_arn: {
            value: cdktn.stringToHclTerraform(struct!.browserArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessAgentCoreCodeInterpreterConfigPropertyToTerraform(struct?: CcHarness.HarnessAgentCoreCodeInterpreterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        code_interpreter_arn: cdktn.stringToTerraform(struct!.codeInterpreterArn),
    }
}


export function ccHarnessHarnessAgentCoreCodeInterpreterConfigPropertyToHclTerraform(struct?: CcHarness.HarnessAgentCoreCodeInterpreterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        code_interpreter_arn: {
            value: cdktn.stringToHclTerraform(struct!.codeInterpreterArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessOAuthCredentialProviderPropertyToTerraform(struct?: CcHarness.OAuthCredentialProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customParameters),
        default_return_url: cdktn.stringToTerraform(struct!.defaultReturnUrl),
        grant_type: cdktn.stringToTerraform(struct!.grantType),
        provider_arn: cdktn.stringToTerraform(struct!.providerArn),
        scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
    }
}


export function ccHarnessOAuthCredentialProviderPropertyToHclTerraform(struct?: CcHarness.OAuthCredentialProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customParameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        default_return_url: {
            value: cdktn.stringToHclTerraform(struct!.defaultReturnUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        grant_type: {
            value: cdktn.stringToHclTerraform(struct!.grantType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        provider_arn: {
            value: cdktn.stringToHclTerraform(struct!.providerArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scopes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessGatewayOutboundAuthPropertyToTerraform(struct?: CcHarness.HarnessGatewayOutboundAuthProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_iam: cdktn.stringToTerraform(struct!.awsIam),
        none: cdktn.stringToTerraform(struct!.none),
        oauth: ccHarnessOAuthCredentialProviderPropertyToTerraform(struct!.oauth),
    }
}


export function ccHarnessHarnessGatewayOutboundAuthPropertyToHclTerraform(struct?: CcHarness.HarnessGatewayOutboundAuthProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_iam: {
            value: cdktn.stringToHclTerraform(struct!.awsIam),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        none: {
            value: cdktn.stringToHclTerraform(struct!.none),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        oauth: {
            value: ccHarnessOAuthCredentialProviderPropertyToHclTerraform(struct!.oauth),
            isBlock: true,
            type: "struct",
            storageClassType: "OAuthCredentialProviderProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessAgentCoreGatewayConfigPropertyToTerraform(struct?: CcHarness.HarnessAgentCoreGatewayConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        gateway_arn: cdktn.stringToTerraform(struct!.gatewayArn),
        outbound_auth: ccHarnessHarnessGatewayOutboundAuthPropertyToTerraform(struct!.outboundAuth),
    }
}


export function ccHarnessHarnessAgentCoreGatewayConfigPropertyToHclTerraform(struct?: CcHarness.HarnessAgentCoreGatewayConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        gateway_arn: {
            value: cdktn.stringToHclTerraform(struct!.gatewayArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        outbound_auth: {
            value: ccHarnessHarnessGatewayOutboundAuthPropertyToHclTerraform(struct!.outboundAuth),
            isBlock: true,
            type: "struct",
            storageClassType: "HarnessGatewayOutboundAuthProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessInlineFunctionConfigPropertyToTerraform(struct?: CcHarness.HarnessInlineFunctionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        input_schema: cdktn.stringToTerraform(struct!.inputSchema),
    }
}


export function ccHarnessHarnessInlineFunctionConfigPropertyToHclTerraform(struct?: CcHarness.HarnessInlineFunctionConfigProperty | cdktn.IResolvable): any {
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
        input_schema: {
            value: cdktn.stringToHclTerraform(struct!.inputSchema),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessRemoteMcpConfigPropertyToTerraform(struct?: CcHarness.HarnessRemoteMcpConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        headers: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.headers),
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccHarnessHarnessRemoteMcpConfigPropertyToHclTerraform(struct?: CcHarness.HarnessRemoteMcpConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        headers: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.headers),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        url: {
            value: cdktn.stringToHclTerraform(struct!.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessToolConfigurationPropertyToTerraform(struct?: CcHarness.HarnessToolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agent_core_browser: ccHarnessHarnessAgentCoreBrowserConfigPropertyToTerraform(struct!.agentCoreBrowser),
        agent_core_code_interpreter: ccHarnessHarnessAgentCoreCodeInterpreterConfigPropertyToTerraform(struct!.agentCoreCodeInterpreter),
        agent_core_gateway: ccHarnessHarnessAgentCoreGatewayConfigPropertyToTerraform(struct!.agentCoreGateway),
        inline_function: ccHarnessHarnessInlineFunctionConfigPropertyToTerraform(struct!.inlineFunction),
        remote_mcp: ccHarnessHarnessRemoteMcpConfigPropertyToTerraform(struct!.remoteMcp),
    }
}


export function ccHarnessHarnessToolConfigurationPropertyToHclTerraform(struct?: CcHarness.HarnessToolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agent_core_browser: {
            value: ccHarnessHarnessAgentCoreBrowserConfigPropertyToHclTerraform(struct!.agentCoreBrowser),
            isBlock: true,
            type: "struct",
            storageClassType: "HarnessAgentCoreBrowserConfigProperty",
        },
        agent_core_code_interpreter: {
            value: ccHarnessHarnessAgentCoreCodeInterpreterConfigPropertyToHclTerraform(struct!.agentCoreCodeInterpreter),
            isBlock: true,
            type: "struct",
            storageClassType: "HarnessAgentCoreCodeInterpreterConfigProperty",
        },
        agent_core_gateway: {
            value: ccHarnessHarnessAgentCoreGatewayConfigPropertyToHclTerraform(struct!.agentCoreGateway),
            isBlock: true,
            type: "struct",
            storageClassType: "HarnessAgentCoreGatewayConfigProperty",
        },
        inline_function: {
            value: ccHarnessHarnessInlineFunctionConfigPropertyToHclTerraform(struct!.inlineFunction),
            isBlock: true,
            type: "struct",
            storageClassType: "HarnessInlineFunctionConfigProperty",
        },
        remote_mcp: {
            value: ccHarnessHarnessRemoteMcpConfigPropertyToHclTerraform(struct!.remoteMcp),
            isBlock: true,
            type: "struct",
            storageClassType: "HarnessRemoteMcpConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessToolPropertyToTerraform(struct?: CcHarness.HarnessToolProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        config: ccHarnessHarnessToolConfigurationPropertyToTerraform(struct!.config),
        name: cdktn.stringToTerraform(struct!.name),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccHarnessHarnessToolPropertyToHclTerraform(struct?: CcHarness.HarnessToolProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        config: {
            value: ccHarnessHarnessToolConfigurationPropertyToHclTerraform(struct!.config),
            isBlock: true,
            type: "struct",
            storageClassType: "HarnessToolConfigurationProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccHarnessHarnessSlidingWindowConfigurationPropertyToTerraform(struct?: CcHarness.HarnessSlidingWindowConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        messages_count: cdktn.numberToTerraform(struct!.messagesCount),
    }
}


export function ccHarnessHarnessSlidingWindowConfigurationPropertyToHclTerraform(struct?: CcHarness.HarnessSlidingWindowConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        messages_count: {
            value: cdktn.numberToHclTerraform(struct!.messagesCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessSummarizationConfigurationPropertyToTerraform(struct?: CcHarness.HarnessSummarizationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        preserve_recent_messages: cdktn.numberToTerraform(struct!.preserveRecentMessages),
        summarization_system_prompt: cdktn.stringToTerraform(struct!.summarizationSystemPrompt),
        summary_ratio: cdktn.numberToTerraform(struct!.summaryRatio),
    }
}


export function ccHarnessHarnessSummarizationConfigurationPropertyToHclTerraform(struct?: CcHarness.HarnessSummarizationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        preserve_recent_messages: {
            value: cdktn.numberToHclTerraform(struct!.preserveRecentMessages),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        summarization_system_prompt: {
            value: cdktn.stringToHclTerraform(struct!.summarizationSystemPrompt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        summary_ratio: {
            value: cdktn.numberToHclTerraform(struct!.summaryRatio),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessTruncationStrategyConfigurationPropertyToTerraform(struct?: CcHarness.HarnessTruncationStrategyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sliding_window: ccHarnessHarnessSlidingWindowConfigurationPropertyToTerraform(struct!.slidingWindow),
        summarization: ccHarnessHarnessSummarizationConfigurationPropertyToTerraform(struct!.summarization),
    }
}


export function ccHarnessHarnessTruncationStrategyConfigurationPropertyToHclTerraform(struct?: CcHarness.HarnessTruncationStrategyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sliding_window: {
            value: ccHarnessHarnessSlidingWindowConfigurationPropertyToHclTerraform(struct!.slidingWindow),
            isBlock: true,
            type: "struct",
            storageClassType: "HarnessSlidingWindowConfigurationProperty",
        },
        summarization: {
            value: ccHarnessHarnessSummarizationConfigurationPropertyToHclTerraform(struct!.summarization),
            isBlock: true,
            type: "struct",
            storageClassType: "HarnessSummarizationConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHarnessHarnessTruncationConfigurationPropertyToTerraform(struct?: CcHarness.HarnessTruncationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        config: ccHarnessHarnessTruncationStrategyConfigurationPropertyToTerraform(struct!.config),
        strategy: cdktn.stringToTerraform(struct!.strategy),
    }
}


export function ccHarnessHarnessTruncationConfigurationPropertyToHclTerraform(struct?: CcHarness.HarnessTruncationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        config: {
            value: ccHarnessHarnessTruncationStrategyConfigurationPropertyToHclTerraform(struct!.config),
            isBlock: true,
            type: "struct",
            storageClassType: "HarnessTruncationStrategyConfigurationProperty",
        },
        strategy: {
            value: cdktn.stringToHclTerraform(struct!.strategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcHarness {
export interface ClaimMatchValueTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#match_value_string CcHarness#match_value_string}
    */
    readonly matchValueString?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#match_value_string_list CcHarness#match_value_string_list}
    */
    readonly matchValueStringList?: string[];
}
export class ClaimMatchValueTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClaimMatchValueTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._matchValueString !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchValueString = this._matchValueString;
        }
        if (this._matchValueStringList !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchValueStringList = this._matchValueStringList;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClaimMatchValueTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._matchValueString = undefined;
            this._matchValueStringList = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._matchValueString = value.matchValueString;
            this._matchValueStringList = value.matchValueStringList;
        }
    }

    // match_value_string - computed: true, optional: true, required: false
    private _matchValueString?: string; 
    public get matchValueString() {
        return this.getStringAttribute('match_value_string');
    }
    public set matchValueString(value: string) {
        this._matchValueString = value;
    }
    public resetMatchValueString() {
        this._matchValueString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchValueStringInput() {
        return this._matchValueString;
    }

    // match_value_string_list - computed: true, optional: true, required: false
    private _matchValueStringList?: string[]; 
    public get matchValueStringList() {
        return this.getListAttribute('match_value_string_list');
    }
    public set matchValueStringList(value: string[]) {
        this._matchValueStringList = value;
    }
    public resetMatchValueStringList() {
        this._matchValueStringList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchValueStringListInput() {
        return this._matchValueStringList;
    }
}
export interface AuthorizingClaimMatchValueTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#claim_match_operator CcHarness#claim_match_operator}
    */
    readonly claimMatchOperator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#claim_match_value CcHarness#claim_match_value}
    */
    readonly claimMatchValue?: ClaimMatchValueTypeProperty;
}
export class AuthorizingClaimMatchValueTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizingClaimMatchValueTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._claimMatchOperator !== undefined) {
            hasAnyValues = true;
            internalValueResult.claimMatchOperator = this._claimMatchOperator;
        }
        if (this._claimMatchValue?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.claimMatchValue = this._claimMatchValue?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizingClaimMatchValueTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._claimMatchOperator = undefined;
            this._claimMatchValue.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._claimMatchOperator = value.claimMatchOperator;
            this._claimMatchValue.internalValue = value.claimMatchValue;
        }
    }

    // claim_match_operator - computed: true, optional: true, required: false
    private _claimMatchOperator?: string; 
    public get claimMatchOperator() {
        return this.getStringAttribute('claim_match_operator');
    }
    public set claimMatchOperator(value: string) {
        this._claimMatchOperator = value;
    }
    public resetClaimMatchOperator() {
        this._claimMatchOperator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get claimMatchOperatorInput() {
        return this._claimMatchOperator;
    }

    // claim_match_value - computed: true, optional: true, required: false
    private _claimMatchValue = new ClaimMatchValueTypePropertyOutputReference(this, "claim_match_value");
    public get claimMatchValue() {
        return this._claimMatchValue;
    }
    public putClaimMatchValue(value: ClaimMatchValueTypeProperty) {
        this._claimMatchValue.internalValue = value;
    }
    public resetClaimMatchValue() {
        this._claimMatchValue.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get claimMatchValueInput() {
        return this._claimMatchValue.internalValue;
    }
}
export interface CustomClaimValidationTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#authorizing_claim_match_value CcHarness#authorizing_claim_match_value}
    */
    readonly authorizingClaimMatchValue?: AuthorizingClaimMatchValueTypeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#inbound_token_claim_name CcHarness#inbound_token_claim_name}
    */
    readonly inboundTokenClaimName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#inbound_token_claim_value_type CcHarness#inbound_token_claim_value_type}
    */
    readonly inboundTokenClaimValueType?: string;
}
export class CustomClaimValidationTypePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CustomClaimValidationTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizingClaimMatchValue?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizingClaimMatchValue = this._authorizingClaimMatchValue?.internalValue;
        }
        if (this._inboundTokenClaimName !== undefined) {
            hasAnyValues = true;
            internalValueResult.inboundTokenClaimName = this._inboundTokenClaimName;
        }
        if (this._inboundTokenClaimValueType !== undefined) {
            hasAnyValues = true;
            internalValueResult.inboundTokenClaimValueType = this._inboundTokenClaimValueType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomClaimValidationTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizingClaimMatchValue.internalValue = undefined;
            this._inboundTokenClaimName = undefined;
            this._inboundTokenClaimValueType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizingClaimMatchValue.internalValue = value.authorizingClaimMatchValue;
            this._inboundTokenClaimName = value.inboundTokenClaimName;
            this._inboundTokenClaimValueType = value.inboundTokenClaimValueType;
        }
    }

    // authorizing_claim_match_value - computed: true, optional: true, required: false
    private _authorizingClaimMatchValue = new AuthorizingClaimMatchValueTypePropertyOutputReference(this, "authorizing_claim_match_value");
    public get authorizingClaimMatchValue() {
        return this._authorizingClaimMatchValue;
    }
    public putAuthorizingClaimMatchValue(value: AuthorizingClaimMatchValueTypeProperty) {
        this._authorizingClaimMatchValue.internalValue = value;
    }
    public resetAuthorizingClaimMatchValue() {
        this._authorizingClaimMatchValue.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizingClaimMatchValueInput() {
        return this._authorizingClaimMatchValue.internalValue;
    }

    // inbound_token_claim_name - computed: true, optional: true, required: false
    private _inboundTokenClaimName?: string; 
    public get inboundTokenClaimName() {
        return this.getStringAttribute('inbound_token_claim_name');
    }
    public set inboundTokenClaimName(value: string) {
        this._inboundTokenClaimName = value;
    }
    public resetInboundTokenClaimName() {
        this._inboundTokenClaimName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inboundTokenClaimNameInput() {
        return this._inboundTokenClaimName;
    }

    // inbound_token_claim_value_type - computed: true, optional: true, required: false
    private _inboundTokenClaimValueType?: string; 
    public get inboundTokenClaimValueType() {
        return this.getStringAttribute('inbound_token_claim_value_type');
    }
    public set inboundTokenClaimValueType(value: string) {
        this._inboundTokenClaimValueType = value;
    }
    public resetInboundTokenClaimValueType() {
        this._inboundTokenClaimValueType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inboundTokenClaimValueTypeInput() {
        return this._inboundTokenClaimValueType;
    }
}

export class CustomClaimValidationTypePropertyList extends cdktn.ComplexList {
    public internalValue? : CustomClaimValidationTypeProperty[] | cdktn.IResolvable

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
    public get(index: number): CustomClaimValidationTypePropertyOutputReference {
        return new CustomClaimValidationTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomJWTAuthorizerConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#allowed_audience CcHarness#allowed_audience}
    */
    readonly allowedAudience?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#allowed_clients CcHarness#allowed_clients}
    */
    readonly allowedClients?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#allowed_scopes CcHarness#allowed_scopes}
    */
    readonly allowedScopes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#custom_claims CcHarness#custom_claims}
    */
    readonly customClaims?: CustomClaimValidationTypeProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#discovery_url CcHarness#discovery_url}
    */
    readonly discoveryUrl?: string;
}
export class CustomJWTAuthorizerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomJWTAuthorizerConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedAudience !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedAudience = this._allowedAudience;
        }
        if (this._allowedClients !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedClients = this._allowedClients;
        }
        if (this._allowedScopes !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedScopes = this._allowedScopes;
        }
        if (this._customClaims?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customClaims = this._customClaims?.internalValue;
        }
        if (this._discoveryUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.discoveryUrl = this._discoveryUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomJWTAuthorizerConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedAudience = undefined;
            this._allowedClients = undefined;
            this._allowedScopes = undefined;
            this._customClaims.internalValue = undefined;
            this._discoveryUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedAudience = value.allowedAudience;
            this._allowedClients = value.allowedClients;
            this._allowedScopes = value.allowedScopes;
            this._customClaims.internalValue = value.customClaims;
            this._discoveryUrl = value.discoveryUrl;
        }
    }

    // allowed_audience - computed: true, optional: true, required: false
    private _allowedAudience?: string[]; 
    public get allowedAudience() {
        return this.getListAttribute('allowed_audience');
    }
    public set allowedAudience(value: string[]) {
        this._allowedAudience = value;
    }
    public resetAllowedAudience() {
        this._allowedAudience = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedAudienceInput() {
        return this._allowedAudience;
    }

    // allowed_clients - computed: true, optional: true, required: false
    private _allowedClients?: string[]; 
    public get allowedClients() {
        return this.getListAttribute('allowed_clients');
    }
    public set allowedClients(value: string[]) {
        this._allowedClients = value;
    }
    public resetAllowedClients() {
        this._allowedClients = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedClientsInput() {
        return this._allowedClients;
    }

    // allowed_scopes - computed: true, optional: true, required: false
    private _allowedScopes?: string[]; 
    public get allowedScopes() {
        return this.getListAttribute('allowed_scopes');
    }
    public set allowedScopes(value: string[]) {
        this._allowedScopes = value;
    }
    public resetAllowedScopes() {
        this._allowedScopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedScopesInput() {
        return this._allowedScopes;
    }

    // custom_claims - computed: true, optional: true, required: false
    private _customClaims = new CustomClaimValidationTypePropertyList(this, "custom_claims", false);
    public get customClaims() {
        return this._customClaims;
    }
    public putCustomClaims(value: CustomClaimValidationTypeProperty[] | cdktn.IResolvable) {
        this._customClaims.internalValue = value;
    }
    public resetCustomClaims() {
        this._customClaims.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customClaimsInput() {
        return this._customClaims.internalValue;
    }

    // discovery_url - computed: true, optional: true, required: false
    private _discoveryUrl?: string; 
    public get discoveryUrl() {
        return this.getStringAttribute('discovery_url');
    }
    public set discoveryUrl(value: string) {
        this._discoveryUrl = value;
    }
    public resetDiscoveryUrl() {
        this._discoveryUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get discoveryUrlInput() {
        return this._discoveryUrl;
    }
}
export interface AuthorizerConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#custom_jwt_authorizer CcHarness#custom_jwt_authorizer}
    */
    readonly customJwtAuthorizer?: CustomJWTAuthorizerConfigurationProperty;
}
export class AuthorizerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizerConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customJwtAuthorizer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customJwtAuthorizer = this._customJwtAuthorizer?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizerConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customJwtAuthorizer.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customJwtAuthorizer.internalValue = value.customJwtAuthorizer;
        }
    }

    // custom_jwt_authorizer - computed: true, optional: true, required: false
    private _customJwtAuthorizer = new CustomJWTAuthorizerConfigurationPropertyOutputReference(this, "custom_jwt_authorizer");
    public get customJwtAuthorizer() {
        return this._customJwtAuthorizer;
    }
    public putCustomJwtAuthorizer(value: CustomJWTAuthorizerConfigurationProperty) {
        this._customJwtAuthorizer.internalValue = value;
    }
    public resetCustomJwtAuthorizer() {
        this._customJwtAuthorizer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customJwtAuthorizerInput() {
        return this._customJwtAuthorizer.internalValue;
    }
}
export interface SessionStorageConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#mount_path CcHarness#mount_path}
    */
    readonly mountPath?: string;
}
export class SessionStorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SessionStorageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mountPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountPath = this._mountPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SessionStorageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mountPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mountPath = value.mountPath;
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
}
export interface FilesystemConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#session_storage CcHarness#session_storage}
    */
    readonly sessionStorage?: SessionStorageConfigurationProperty;
}
export class FilesystemConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FilesystemConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sessionStorage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionStorage = this._sessionStorage?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilesystemConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sessionStorage.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sessionStorage.internalValue = value.sessionStorage;
        }
    }

    // session_storage - computed: true, optional: true, required: false
    private _sessionStorage = new SessionStorageConfigurationPropertyOutputReference(this, "session_storage");
    public get sessionStorage() {
        return this._sessionStorage;
    }
    public putSessionStorage(value: SessionStorageConfigurationProperty) {
        this._sessionStorage.internalValue = value;
    }
    public resetSessionStorage() {
        this._sessionStorage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionStorageInput() {
        return this._sessionStorage.internalValue;
    }
}

export class FilesystemConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : FilesystemConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): FilesystemConfigurationPropertyOutputReference {
        return new FilesystemConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LifecycleConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#idle_runtime_session_timeout CcHarness#idle_runtime_session_timeout}
    */
    readonly idleRuntimeSessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#max_lifetime CcHarness#max_lifetime}
    */
    readonly maxLifetime?: number;
}
export class LifecycleConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LifecycleConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleRuntimeSessionTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleRuntimeSessionTimeout = this._idleRuntimeSessionTimeout;
        }
        if (this._maxLifetime !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxLifetime = this._maxLifetime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LifecycleConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleRuntimeSessionTimeout = undefined;
            this._maxLifetime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleRuntimeSessionTimeout = value.idleRuntimeSessionTimeout;
            this._maxLifetime = value.maxLifetime;
        }
    }

    // idle_runtime_session_timeout - computed: true, optional: true, required: false
    private _idleRuntimeSessionTimeout?: number; 
    public get idleRuntimeSessionTimeout() {
        return this.getNumberAttribute('idle_runtime_session_timeout');
    }
    public set idleRuntimeSessionTimeout(value: number) {
        this._idleRuntimeSessionTimeout = value;
    }
    public resetIdleRuntimeSessionTimeout() {
        this._idleRuntimeSessionTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleRuntimeSessionTimeoutInput() {
        return this._idleRuntimeSessionTimeout;
    }

    // max_lifetime - computed: true, optional: true, required: false
    private _maxLifetime?: number; 
    public get maxLifetime() {
        return this.getNumberAttribute('max_lifetime');
    }
    public set maxLifetime(value: number) {
        this._maxLifetime = value;
    }
    public resetMaxLifetime() {
        this._maxLifetime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxLifetimeInput() {
        return this._maxLifetime;
    }
}
export interface VpcConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#security_groups CcHarness#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#subnets CcHarness#subnets}
    */
    readonly subnets?: string[];
}
export class VpcConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroups = undefined;
            this._subnets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroups = value.securityGroups;
            this._subnets = value.subnets;
        }
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

    // subnets - computed: true, optional: true, required: false
    private _subnets?: string[]; 
    public get subnets() {
        return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    public resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }
}
export interface NetworkConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#network_mode CcHarness#network_mode}
    */
    readonly networkMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#network_mode_config CcHarness#network_mode_config}
    */
    readonly networkModeConfig?: VpcConfigProperty;
}
export class NetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._networkMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkMode = this._networkMode;
        }
        if (this._networkModeConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkModeConfig = this._networkModeConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._networkMode = undefined;
            this._networkModeConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._networkMode = value.networkMode;
            this._networkModeConfig.internalValue = value.networkModeConfig;
        }
    }

    // network_mode - computed: true, optional: true, required: false
    private _networkMode?: string; 
    public get networkMode() {
        return this.getStringAttribute('network_mode');
    }
    public set networkMode(value: string) {
        this._networkMode = value;
    }
    public resetNetworkMode() {
        this._networkMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkModeInput() {
        return this._networkMode;
    }

    // network_mode_config - computed: true, optional: true, required: false
    private _networkModeConfig = new VpcConfigPropertyOutputReference(this, "network_mode_config");
    public get networkModeConfig() {
        return this._networkModeConfig;
    }
    public putNetworkModeConfig(value: VpcConfigProperty) {
        this._networkModeConfig.internalValue = value;
    }
    public resetNetworkModeConfig() {
        this._networkModeConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkModeConfigInput() {
        return this._networkModeConfig.internalValue;
    }
}
export interface HarnessAgentCoreRuntimeEnvironmentProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#filesystem_configurations CcHarness#filesystem_configurations}
    */
    readonly filesystemConfigurations?: FilesystemConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#lifecycle_configuration CcHarness#lifecycle_configuration}
    */
    readonly lifecycleConfiguration?: LifecycleConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#network_configuration CcHarness#network_configuration}
    */
    readonly networkConfiguration?: NetworkConfigurationProperty;
}
export class HarnessAgentCoreRuntimeEnvironmentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessAgentCoreRuntimeEnvironmentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filesystemConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filesystemConfigurations = this._filesystemConfigurations?.internalValue;
        }
        if (this._lifecycleConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfiguration = this._lifecycleConfiguration?.internalValue;
        }
        if (this._networkConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessAgentCoreRuntimeEnvironmentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filesystemConfigurations.internalValue = undefined;
            this._lifecycleConfiguration.internalValue = undefined;
            this._networkConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filesystemConfigurations.internalValue = value.filesystemConfigurations;
            this._lifecycleConfiguration.internalValue = value.lifecycleConfiguration;
            this._networkConfiguration.internalValue = value.networkConfiguration;
        }
    }

    // agent_runtime_arn - computed: true, optional: false, required: false
    public get agentRuntimeArn() {
        return this.getStringAttribute('agent_runtime_arn');
    }

    // agent_runtime_id - computed: true, optional: false, required: false
    public get agentRuntimeId() {
        return this.getStringAttribute('agent_runtime_id');
    }

    // agent_runtime_name - computed: true, optional: false, required: false
    public get agentRuntimeName() {
        return this.getStringAttribute('agent_runtime_name');
    }

    // filesystem_configurations - computed: true, optional: true, required: false
    private _filesystemConfigurations = new FilesystemConfigurationPropertyList(this, "filesystem_configurations", false);
    public get filesystemConfigurations() {
        return this._filesystemConfigurations;
    }
    public putFilesystemConfigurations(value: FilesystemConfigurationProperty[] | cdktn.IResolvable) {
        this._filesystemConfigurations.internalValue = value;
    }
    public resetFilesystemConfigurations() {
        this._filesystemConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filesystemConfigurationsInput() {
        return this._filesystemConfigurations.internalValue;
    }

    // lifecycle_configuration - computed: true, optional: true, required: false
    private _lifecycleConfiguration = new LifecycleConfigurationPropertyOutputReference(this, "lifecycle_configuration");
    public get lifecycleConfiguration() {
        return this._lifecycleConfiguration;
    }
    public putLifecycleConfiguration(value: LifecycleConfigurationProperty) {
        this._lifecycleConfiguration.internalValue = value;
    }
    public resetLifecycleConfiguration() {
        this._lifecycleConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigurationInput() {
        return this._lifecycleConfiguration.internalValue;
    }

    // network_configuration - computed: true, optional: true, required: false
    private _networkConfiguration = new NetworkConfigurationPropertyOutputReference(this, "network_configuration");
    public get networkConfiguration() {
        return this._networkConfiguration;
    }
    public putNetworkConfiguration(value: NetworkConfigurationProperty) {
        this._networkConfiguration.internalValue = value;
    }
    public resetNetworkConfiguration() {
        this._networkConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkConfigurationInput() {
        return this._networkConfiguration.internalValue;
    }
}
export interface HarnessEnvironmentProviderProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#agent_core_runtime_environment CcHarness#agent_core_runtime_environment}
    */
    readonly agentCoreRuntimeEnvironment?: HarnessAgentCoreRuntimeEnvironmentProperty;
}
export class HarnessEnvironmentProviderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessEnvironmentProviderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentCoreRuntimeEnvironment?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentCoreRuntimeEnvironment = this._agentCoreRuntimeEnvironment?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessEnvironmentProviderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentCoreRuntimeEnvironment.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentCoreRuntimeEnvironment.internalValue = value.agentCoreRuntimeEnvironment;
        }
    }

    // agent_core_runtime_environment - computed: true, optional: true, required: false
    private _agentCoreRuntimeEnvironment = new HarnessAgentCoreRuntimeEnvironmentPropertyOutputReference(this, "agent_core_runtime_environment");
    public get agentCoreRuntimeEnvironment() {
        return this._agentCoreRuntimeEnvironment;
    }
    public putAgentCoreRuntimeEnvironment(value: HarnessAgentCoreRuntimeEnvironmentProperty) {
        this._agentCoreRuntimeEnvironment.internalValue = value;
    }
    public resetAgentCoreRuntimeEnvironment() {
        this._agentCoreRuntimeEnvironment.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentCoreRuntimeEnvironmentInput() {
        return this._agentCoreRuntimeEnvironment.internalValue;
    }
}
export interface ContainerConfigurationProperty {
    /**
    * The ECR URI of the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#container_uri CcHarness#container_uri}
    */
    readonly containerUri?: string;
}
export class ContainerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContainerConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerUri = this._containerUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContainerConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerUri = value.containerUri;
        }
    }

    // container_uri - computed: true, optional: true, required: false
    private _containerUri?: string; 
    public get containerUri() {
        return this.getStringAttribute('container_uri');
    }
    public set containerUri(value: string) {
        this._containerUri = value;
    }
    public resetContainerUri() {
        this._containerUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerUriInput() {
        return this._containerUri;
    }
}
export interface HarnessEnvironmentArtifactProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#container_configuration CcHarness#container_configuration}
    */
    readonly containerConfiguration?: ContainerConfigurationProperty;
}
export class HarnessEnvironmentArtifactPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessEnvironmentArtifactProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerConfiguration = this._containerConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessEnvironmentArtifactProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerConfiguration.internalValue = value.containerConfiguration;
        }
    }

    // container_configuration - computed: true, optional: true, required: false
    private _containerConfiguration = new ContainerConfigurationPropertyOutputReference(this, "container_configuration");
    public get containerConfiguration() {
        return this._containerConfiguration;
    }
    public putContainerConfiguration(value: ContainerConfigurationProperty) {
        this._containerConfiguration.internalValue = value;
    }
    public resetContainerConfiguration() {
        this._containerConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerConfigurationInput() {
        return this._containerConfiguration.internalValue;
    }
}
export interface HarnessAgentCoreMemoryRetrievalConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#relevance_score CcHarness#relevance_score}
    */
    readonly relevanceScore?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#strategy_id CcHarness#strategy_id}
    */
    readonly strategyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#top_k CcHarness#top_k}
    */
    readonly topK?: number;
}
export class HarnessAgentCoreMemoryRetrievalConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HarnessAgentCoreMemoryRetrievalConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._relevanceScore !== undefined) {
            hasAnyValues = true;
            internalValueResult.relevanceScore = this._relevanceScore;
        }
        if (this._strategyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.strategyId = this._strategyId;
        }
        if (this._topK !== undefined) {
            hasAnyValues = true;
            internalValueResult.topK = this._topK;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessAgentCoreMemoryRetrievalConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._relevanceScore = undefined;
            this._strategyId = undefined;
            this._topK = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._relevanceScore = value.relevanceScore;
            this._strategyId = value.strategyId;
            this._topK = value.topK;
        }
    }

    // relevance_score - computed: true, optional: true, required: false
    private _relevanceScore?: number; 
    public get relevanceScore() {
        return this.getNumberAttribute('relevance_score');
    }
    public set relevanceScore(value: number) {
        this._relevanceScore = value;
    }
    public resetRelevanceScore() {
        this._relevanceScore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relevanceScoreInput() {
        return this._relevanceScore;
    }

    // strategy_id - computed: true, optional: true, required: false
    private _strategyId?: string; 
    public get strategyId() {
        return this.getStringAttribute('strategy_id');
    }
    public set strategyId(value: string) {
        this._strategyId = value;
    }
    public resetStrategyId() {
        this._strategyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get strategyIdInput() {
        return this._strategyId;
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
}

export class HarnessAgentCoreMemoryRetrievalConfigPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: HarnessAgentCoreMemoryRetrievalConfigProperty } | cdktn.IResolvable

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
    public get(key: string): HarnessAgentCoreMemoryRetrievalConfigPropertyOutputReference {
        return new HarnessAgentCoreMemoryRetrievalConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface HarnessAgentCoreMemoryConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#actor_id CcHarness#actor_id}
    */
    readonly actorId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#arn CcHarness#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#messages_count CcHarness#messages_count}
    */
    readonly messagesCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#retrieval_config CcHarness#retrieval_config}
    */
    readonly retrievalConfig?: { [key: string]: HarnessAgentCoreMemoryRetrievalConfigProperty } | cdktn.IResolvable;
}
export class HarnessAgentCoreMemoryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessAgentCoreMemoryConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actorId !== undefined) {
            hasAnyValues = true;
            internalValueResult.actorId = this._actorId;
        }
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._messagesCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.messagesCount = this._messagesCount;
        }
        if (this._retrievalConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.retrievalConfig = this._retrievalConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessAgentCoreMemoryConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actorId = undefined;
            this._arn = undefined;
            this._messagesCount = undefined;
            this._retrievalConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actorId = value.actorId;
            this._arn = value.arn;
            this._messagesCount = value.messagesCount;
            this._retrievalConfig.internalValue = value.retrievalConfig;
        }
    }

    // actor_id - computed: true, optional: true, required: false
    private _actorId?: string; 
    public get actorId() {
        return this.getStringAttribute('actor_id');
    }
    public set actorId(value: string) {
        this._actorId = value;
    }
    public resetActorId() {
        this._actorId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actorIdInput() {
        return this._actorId;
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }

    // messages_count - computed: true, optional: true, required: false
    private _messagesCount?: number; 
    public get messagesCount() {
        return this.getNumberAttribute('messages_count');
    }
    public set messagesCount(value: number) {
        this._messagesCount = value;
    }
    public resetMessagesCount() {
        this._messagesCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messagesCountInput() {
        return this._messagesCount;
    }

    // retrieval_config - computed: true, optional: true, required: false
    private _retrievalConfig = new HarnessAgentCoreMemoryRetrievalConfigPropertyMap(this, "retrieval_config");
    public get retrievalConfig() {
        return this._retrievalConfig;
    }
    public putRetrievalConfig(value: { [key: string]: HarnessAgentCoreMemoryRetrievalConfigProperty } | cdktn.IResolvable) {
        this._retrievalConfig.internalValue = value;
    }
    public resetRetrievalConfig() {
        this._retrievalConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retrievalConfigInput() {
        return this._retrievalConfig.internalValue;
    }
}
export interface HarnessMemoryConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#agent_core_memory_configuration CcHarness#agent_core_memory_configuration}
    */
    readonly agentCoreMemoryConfiguration?: HarnessAgentCoreMemoryConfigurationProperty;
}
export class HarnessMemoryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessMemoryConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentCoreMemoryConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentCoreMemoryConfiguration = this._agentCoreMemoryConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessMemoryConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentCoreMemoryConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentCoreMemoryConfiguration.internalValue = value.agentCoreMemoryConfiguration;
        }
    }

    // agent_core_memory_configuration - computed: true, optional: true, required: false
    private _agentCoreMemoryConfiguration = new HarnessAgentCoreMemoryConfigurationPropertyOutputReference(this, "agent_core_memory_configuration");
    public get agentCoreMemoryConfiguration() {
        return this._agentCoreMemoryConfiguration;
    }
    public putAgentCoreMemoryConfiguration(value: HarnessAgentCoreMemoryConfigurationProperty) {
        this._agentCoreMemoryConfiguration.internalValue = value;
    }
    public resetAgentCoreMemoryConfiguration() {
        this._agentCoreMemoryConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentCoreMemoryConfigurationInput() {
        return this._agentCoreMemoryConfiguration.internalValue;
    }
}
export interface HarnessBedrockModelConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#max_tokens CcHarness#max_tokens}
    */
    readonly maxTokens?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#model_id CcHarness#model_id}
    */
    readonly modelId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#temperature CcHarness#temperature}
    */
    readonly temperature?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#top_p CcHarness#top_p}
    */
    readonly topP?: number;
}
export class HarnessBedrockModelConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessBedrockModelConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxTokens !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxTokens = this._maxTokens;
        }
        if (this._modelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelId = this._modelId;
        }
        if (this._temperature !== undefined) {
            hasAnyValues = true;
            internalValueResult.temperature = this._temperature;
        }
        if (this._topP !== undefined) {
            hasAnyValues = true;
            internalValueResult.topP = this._topP;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessBedrockModelConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxTokens = undefined;
            this._modelId = undefined;
            this._temperature = undefined;
            this._topP = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxTokens = value.maxTokens;
            this._modelId = value.modelId;
            this._temperature = value.temperature;
            this._topP = value.topP;
        }
    }

    // max_tokens - computed: true, optional: true, required: false
    private _maxTokens?: number; 
    public get maxTokens() {
        return this.getNumberAttribute('max_tokens');
    }
    public set maxTokens(value: number) {
        this._maxTokens = value;
    }
    public resetMaxTokens() {
        this._maxTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxTokensInput() {
        return this._maxTokens;
    }

    // model_id - computed: true, optional: true, required: false
    private _modelId?: string; 
    public get modelId() {
        return this.getStringAttribute('model_id');
    }
    public set modelId(value: string) {
        this._modelId = value;
    }
    public resetModelId() {
        this._modelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelIdInput() {
        return this._modelId;
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
export interface HarnessGeminiModelConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#api_key_arn CcHarness#api_key_arn}
    */
    readonly apiKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#max_tokens CcHarness#max_tokens}
    */
    readonly maxTokens?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#model_id CcHarness#model_id}
    */
    readonly modelId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#temperature CcHarness#temperature}
    */
    readonly temperature?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#top_k CcHarness#top_k}
    */
    readonly topK?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#top_p CcHarness#top_p}
    */
    readonly topP?: number;
}
export class HarnessGeminiModelConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessGeminiModelConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKeyArn = this._apiKeyArn;
        }
        if (this._maxTokens !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxTokens = this._maxTokens;
        }
        if (this._modelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelId = this._modelId;
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

    public set internalValue(value: HarnessGeminiModelConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiKeyArn = undefined;
            this._maxTokens = undefined;
            this._modelId = undefined;
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
            this._apiKeyArn = value.apiKeyArn;
            this._maxTokens = value.maxTokens;
            this._modelId = value.modelId;
            this._temperature = value.temperature;
            this._topK = value.topK;
            this._topP = value.topP;
        }
    }

    // api_key_arn - computed: true, optional: true, required: false
    private _apiKeyArn?: string; 
    public get apiKeyArn() {
        return this.getStringAttribute('api_key_arn');
    }
    public set apiKeyArn(value: string) {
        this._apiKeyArn = value;
    }
    public resetApiKeyArn() {
        this._apiKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyArnInput() {
        return this._apiKeyArn;
    }

    // max_tokens - computed: true, optional: true, required: false
    private _maxTokens?: number; 
    public get maxTokens() {
        return this.getNumberAttribute('max_tokens');
    }
    public set maxTokens(value: number) {
        this._maxTokens = value;
    }
    public resetMaxTokens() {
        this._maxTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxTokensInput() {
        return this._maxTokens;
    }

    // model_id - computed: true, optional: true, required: false
    private _modelId?: string; 
    public get modelId() {
        return this.getStringAttribute('model_id');
    }
    public set modelId(value: string) {
        this._modelId = value;
    }
    public resetModelId() {
        this._modelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelIdInput() {
        return this._modelId;
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
export interface HarnessOpenAiModelConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#api_key_arn CcHarness#api_key_arn}
    */
    readonly apiKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#max_tokens CcHarness#max_tokens}
    */
    readonly maxTokens?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#model_id CcHarness#model_id}
    */
    readonly modelId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#temperature CcHarness#temperature}
    */
    readonly temperature?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#top_p CcHarness#top_p}
    */
    readonly topP?: number;
}
export class HarnessOpenAiModelConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessOpenAiModelConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKeyArn = this._apiKeyArn;
        }
        if (this._maxTokens !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxTokens = this._maxTokens;
        }
        if (this._modelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelId = this._modelId;
        }
        if (this._temperature !== undefined) {
            hasAnyValues = true;
            internalValueResult.temperature = this._temperature;
        }
        if (this._topP !== undefined) {
            hasAnyValues = true;
            internalValueResult.topP = this._topP;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessOpenAiModelConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiKeyArn = undefined;
            this._maxTokens = undefined;
            this._modelId = undefined;
            this._temperature = undefined;
            this._topP = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiKeyArn = value.apiKeyArn;
            this._maxTokens = value.maxTokens;
            this._modelId = value.modelId;
            this._temperature = value.temperature;
            this._topP = value.topP;
        }
    }

    // api_key_arn - computed: true, optional: true, required: false
    private _apiKeyArn?: string; 
    public get apiKeyArn() {
        return this.getStringAttribute('api_key_arn');
    }
    public set apiKeyArn(value: string) {
        this._apiKeyArn = value;
    }
    public resetApiKeyArn() {
        this._apiKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyArnInput() {
        return this._apiKeyArn;
    }

    // max_tokens - computed: true, optional: true, required: false
    private _maxTokens?: number; 
    public get maxTokens() {
        return this.getNumberAttribute('max_tokens');
    }
    public set maxTokens(value: number) {
        this._maxTokens = value;
    }
    public resetMaxTokens() {
        this._maxTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxTokensInput() {
        return this._maxTokens;
    }

    // model_id - computed: true, optional: true, required: false
    private _modelId?: string; 
    public get modelId() {
        return this.getStringAttribute('model_id');
    }
    public set modelId(value: string) {
        this._modelId = value;
    }
    public resetModelId() {
        this._modelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelIdInput() {
        return this._modelId;
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
export interface HarnessModelConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#bedrock_model_config CcHarness#bedrock_model_config}
    */
    readonly bedrockModelConfig?: HarnessBedrockModelConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#gemini_model_config CcHarness#gemini_model_config}
    */
    readonly geminiModelConfig?: HarnessGeminiModelConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#open_ai_model_config CcHarness#open_ai_model_config}
    */
    readonly openAiModelConfig?: HarnessOpenAiModelConfigProperty;
}
export class HarnessModelConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessModelConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bedrockModelConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bedrockModelConfig = this._bedrockModelConfig?.internalValue;
        }
        if (this._geminiModelConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.geminiModelConfig = this._geminiModelConfig?.internalValue;
        }
        if (this._openAiModelConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.openAiModelConfig = this._openAiModelConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessModelConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bedrockModelConfig.internalValue = undefined;
            this._geminiModelConfig.internalValue = undefined;
            this._openAiModelConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bedrockModelConfig.internalValue = value.bedrockModelConfig;
            this._geminiModelConfig.internalValue = value.geminiModelConfig;
            this._openAiModelConfig.internalValue = value.openAiModelConfig;
        }
    }

    // bedrock_model_config - computed: true, optional: true, required: false
    private _bedrockModelConfig = new HarnessBedrockModelConfigPropertyOutputReference(this, "bedrock_model_config");
    public get bedrockModelConfig() {
        return this._bedrockModelConfig;
    }
    public putBedrockModelConfig(value: HarnessBedrockModelConfigProperty) {
        this._bedrockModelConfig.internalValue = value;
    }
    public resetBedrockModelConfig() {
        this._bedrockModelConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bedrockModelConfigInput() {
        return this._bedrockModelConfig.internalValue;
    }

    // gemini_model_config - computed: true, optional: true, required: false
    private _geminiModelConfig = new HarnessGeminiModelConfigPropertyOutputReference(this, "gemini_model_config");
    public get geminiModelConfig() {
        return this._geminiModelConfig;
    }
    public putGeminiModelConfig(value: HarnessGeminiModelConfigProperty) {
        this._geminiModelConfig.internalValue = value;
    }
    public resetGeminiModelConfig() {
        this._geminiModelConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get geminiModelConfigInput() {
        return this._geminiModelConfig.internalValue;
    }

    // open_ai_model_config - computed: true, optional: true, required: false
    private _openAiModelConfig = new HarnessOpenAiModelConfigPropertyOutputReference(this, "open_ai_model_config");
    public get openAiModelConfig() {
        return this._openAiModelConfig;
    }
    public putOpenAiModelConfig(value: HarnessOpenAiModelConfigProperty) {
        this._openAiModelConfig.internalValue = value;
    }
    public resetOpenAiModelConfig() {
        this._openAiModelConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openAiModelConfigInput() {
        return this._openAiModelConfig.internalValue;
    }
}
export interface HarnessSkillProperty {
    /**
    * The filesystem path to the skill definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#path CcHarness#path}
    */
    readonly path?: string;
}
export class HarnessSkillPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HarnessSkillProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessSkillProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._path = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._path = value.path;
        }
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }
}

export class HarnessSkillPropertyList extends cdktn.ComplexList {
    public internalValue? : HarnessSkillProperty[] | cdktn.IResolvable

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
    public get(index: number): HarnessSkillPropertyOutputReference {
        return new HarnessSkillPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface HarnessSystemContentBlockProperty {
    /**
    * The text content of the system prompt block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#text CcHarness#text}
    */
    readonly text?: string;
}
export class HarnessSystemContentBlockPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HarnessSystemContentBlockProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._text !== undefined) {
            hasAnyValues = true;
            internalValueResult.text = this._text;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessSystemContentBlockProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._text = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._text = value.text;
        }
    }

    // text - computed: true, optional: true, required: false
    private _text?: string; 
    public get text() {
        return this.getStringAttribute('text');
    }
    public set text(value: string) {
        this._text = value;
    }
    public resetText() {
        this._text = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textInput() {
        return this._text;
    }
}

export class HarnessSystemContentBlockPropertyList extends cdktn.ComplexList {
    public internalValue? : HarnessSystemContentBlockProperty[] | cdktn.IResolvable

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
    public get(index: number): HarnessSystemContentBlockPropertyOutputReference {
        return new HarnessSystemContentBlockPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#key CcHarness#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#value CcHarness#value}
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
export interface HarnessAgentCoreBrowserConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#browser_arn CcHarness#browser_arn}
    */
    readonly browserArn?: string;
}
export class HarnessAgentCoreBrowserConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessAgentCoreBrowserConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._browserArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.browserArn = this._browserArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessAgentCoreBrowserConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._browserArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._browserArn = value.browserArn;
        }
    }

    // browser_arn - computed: true, optional: true, required: false
    private _browserArn?: string; 
    public get browserArn() {
        return this.getStringAttribute('browser_arn');
    }
    public set browserArn(value: string) {
        this._browserArn = value;
    }
    public resetBrowserArn() {
        this._browserArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get browserArnInput() {
        return this._browserArn;
    }
}
export interface HarnessAgentCoreCodeInterpreterConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#code_interpreter_arn CcHarness#code_interpreter_arn}
    */
    readonly codeInterpreterArn?: string;
}
export class HarnessAgentCoreCodeInterpreterConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessAgentCoreCodeInterpreterConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._codeInterpreterArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeInterpreterArn = this._codeInterpreterArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessAgentCoreCodeInterpreterConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._codeInterpreterArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._codeInterpreterArn = value.codeInterpreterArn;
        }
    }

    // code_interpreter_arn - computed: true, optional: true, required: false
    private _codeInterpreterArn?: string; 
    public get codeInterpreterArn() {
        return this.getStringAttribute('code_interpreter_arn');
    }
    public set codeInterpreterArn(value: string) {
        this._codeInterpreterArn = value;
    }
    public resetCodeInterpreterArn() {
        this._codeInterpreterArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeInterpreterArnInput() {
        return this._codeInterpreterArn;
    }
}
export interface OAuthCredentialProviderProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#custom_parameters CcHarness#custom_parameters}
    */
    readonly customParameters?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#default_return_url CcHarness#default_return_url}
    */
    readonly defaultReturnUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#grant_type CcHarness#grant_type}
    */
    readonly grantType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#provider_arn CcHarness#provider_arn}
    */
    readonly providerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#scopes CcHarness#scopes}
    */
    readonly scopes?: string[];
}
export class OAuthCredentialProviderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OAuthCredentialProviderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.customParameters = this._customParameters;
        }
        if (this._defaultReturnUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultReturnUrl = this._defaultReturnUrl;
        }
        if (this._grantType !== undefined) {
            hasAnyValues = true;
            internalValueResult.grantType = this._grantType;
        }
        if (this._providerArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.providerArn = this._providerArn;
        }
        if (this._scopes !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopes = this._scopes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OAuthCredentialProviderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customParameters = undefined;
            this._defaultReturnUrl = undefined;
            this._grantType = undefined;
            this._providerArn = undefined;
            this._scopes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customParameters = value.customParameters;
            this._defaultReturnUrl = value.defaultReturnUrl;
            this._grantType = value.grantType;
            this._providerArn = value.providerArn;
            this._scopes = value.scopes;
        }
    }

    // custom_parameters - computed: true, optional: true, required: false
    private _customParameters?: { [key: string]: string }; 
    public get customParameters() {
        return this.getStringMapAttribute('custom_parameters');
    }
    public set customParameters(value: { [key: string]: string }) {
        this._customParameters = value;
    }
    public resetCustomParameters() {
        this._customParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customParametersInput() {
        return this._customParameters;
    }

    // default_return_url - computed: true, optional: true, required: false
    private _defaultReturnUrl?: string; 
    public get defaultReturnUrl() {
        return this.getStringAttribute('default_return_url');
    }
    public set defaultReturnUrl(value: string) {
        this._defaultReturnUrl = value;
    }
    public resetDefaultReturnUrl() {
        this._defaultReturnUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultReturnUrlInput() {
        return this._defaultReturnUrl;
    }

    // grant_type - computed: true, optional: true, required: false
    private _grantType?: string; 
    public get grantType() {
        return this.getStringAttribute('grant_type');
    }
    public set grantType(value: string) {
        this._grantType = value;
    }
    public resetGrantType() {
        this._grantType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grantTypeInput() {
        return this._grantType;
    }

    // provider_arn - computed: true, optional: true, required: false
    private _providerArn?: string; 
    public get providerArn() {
        return this.getStringAttribute('provider_arn');
    }
    public set providerArn(value: string) {
        this._providerArn = value;
    }
    public resetProviderArn() {
        this._providerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerArnInput() {
        return this._providerArn;
    }

    // scopes - computed: true, optional: true, required: false
    private _scopes?: string[]; 
    public get scopes() {
        return this.getListAttribute('scopes');
    }
    public set scopes(value: string[]) {
        this._scopes = value;
    }
    public resetScopes() {
        this._scopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopesInput() {
        return this._scopes;
    }
}
export interface HarnessGatewayOutboundAuthProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#aws_iam CcHarness#aws_iam}
    */
    readonly awsIam?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#none CcHarness#none}
    */
    readonly none?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#oauth CcHarness#oauth}
    */
    readonly oauth?: OAuthCredentialProviderProperty;
}
export class HarnessGatewayOutboundAuthPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessGatewayOutboundAuthProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsIam !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsIam = this._awsIam;
        }
        if (this._none !== undefined) {
            hasAnyValues = true;
            internalValueResult.none = this._none;
        }
        if (this._oauth?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oauth = this._oauth?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessGatewayOutboundAuthProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsIam = undefined;
            this._none = undefined;
            this._oauth.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsIam = value.awsIam;
            this._none = value.none;
            this._oauth.internalValue = value.oauth;
        }
    }

    // aws_iam - computed: true, optional: true, required: false
    private _awsIam?: string; 
    public get awsIam() {
        return this.getStringAttribute('aws_iam');
    }
    public set awsIam(value: string) {
        this._awsIam = value;
    }
    public resetAwsIam() {
        this._awsIam = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsIamInput() {
        return this._awsIam;
    }

    // none - computed: true, optional: true, required: false
    private _none?: string; 
    public get none() {
        return this.getStringAttribute('none');
    }
    public set none(value: string) {
        this._none = value;
    }
    public resetNone() {
        this._none = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noneInput() {
        return this._none;
    }

    // oauth - computed: true, optional: true, required: false
    private _oauth = new OAuthCredentialProviderPropertyOutputReference(this, "oauth");
    public get oauth() {
        return this._oauth;
    }
    public putOauth(value: OAuthCredentialProviderProperty) {
        this._oauth.internalValue = value;
    }
    public resetOauth() {
        this._oauth.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oauthInput() {
        return this._oauth.internalValue;
    }
}
export interface HarnessAgentCoreGatewayConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#gateway_arn CcHarness#gateway_arn}
    */
    readonly gatewayArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#outbound_auth CcHarness#outbound_auth}
    */
    readonly outboundAuth?: HarnessGatewayOutboundAuthProperty;
}
export class HarnessAgentCoreGatewayConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessAgentCoreGatewayConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._gatewayArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.gatewayArn = this._gatewayArn;
        }
        if (this._outboundAuth?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.outboundAuth = this._outboundAuth?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessAgentCoreGatewayConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._gatewayArn = undefined;
            this._outboundAuth.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._gatewayArn = value.gatewayArn;
            this._outboundAuth.internalValue = value.outboundAuth;
        }
    }

    // gateway_arn - computed: true, optional: true, required: false
    private _gatewayArn?: string; 
    public get gatewayArn() {
        return this.getStringAttribute('gateway_arn');
    }
    public set gatewayArn(value: string) {
        this._gatewayArn = value;
    }
    public resetGatewayArn() {
        this._gatewayArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayArnInput() {
        return this._gatewayArn;
    }

    // outbound_auth - computed: true, optional: true, required: false
    private _outboundAuth = new HarnessGatewayOutboundAuthPropertyOutputReference(this, "outbound_auth");
    public get outboundAuth() {
        return this._outboundAuth;
    }
    public putOutboundAuth(value: HarnessGatewayOutboundAuthProperty) {
        this._outboundAuth.internalValue = value;
    }
    public resetOutboundAuth() {
        this._outboundAuth.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outboundAuthInput() {
        return this._outboundAuth.internalValue;
    }
}
export interface HarnessInlineFunctionConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#description CcHarness#description}
    */
    readonly description?: string;
    /**
    * JSON Schema describing the tool's input parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#input_schema CcHarness#input_schema}
    */
    readonly inputSchema?: string;
}
export class HarnessInlineFunctionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessInlineFunctionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._inputSchema !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputSchema = this._inputSchema;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessInlineFunctionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._inputSchema = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._inputSchema = value.inputSchema;
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
}
export interface HarnessRemoteMcpConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#headers CcHarness#headers}
    */
    readonly headers?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#url CcHarness#url}
    */
    readonly url?: string;
}
export class HarnessRemoteMcpConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessRemoteMcpConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._headers !== undefined) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessRemoteMcpConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._headers = undefined;
            this._url = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._headers = value.headers;
            this._url = value.url;
        }
    }

    // headers - computed: true, optional: true, required: false
    private _headers?: { [key: string]: string }; 
    public get headers() {
        return this.getStringMapAttribute('headers');
    }
    public set headers(value: { [key: string]: string }) {
        this._headers = value;
    }
    public resetHeaders() {
        this._headers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headersInput() {
        return this._headers;
    }

    // url - computed: true, optional: true, required: false
    private _url?: string; 
    public get url() {
        return this.getStringAttribute('url');
    }
    public set url(value: string) {
        this._url = value;
    }
    public resetUrl() {
        this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
        return this._url;
    }
}
export interface HarnessToolConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#agent_core_browser CcHarness#agent_core_browser}
    */
    readonly agentCoreBrowser?: HarnessAgentCoreBrowserConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#agent_core_code_interpreter CcHarness#agent_core_code_interpreter}
    */
    readonly agentCoreCodeInterpreter?: HarnessAgentCoreCodeInterpreterConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#agent_core_gateway CcHarness#agent_core_gateway}
    */
    readonly agentCoreGateway?: HarnessAgentCoreGatewayConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#inline_function CcHarness#inline_function}
    */
    readonly inlineFunction?: HarnessInlineFunctionConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#remote_mcp CcHarness#remote_mcp}
    */
    readonly remoteMcp?: HarnessRemoteMcpConfigProperty;
}
export class HarnessToolConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessToolConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentCoreBrowser?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentCoreBrowser = this._agentCoreBrowser?.internalValue;
        }
        if (this._agentCoreCodeInterpreter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentCoreCodeInterpreter = this._agentCoreCodeInterpreter?.internalValue;
        }
        if (this._agentCoreGateway?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentCoreGateway = this._agentCoreGateway?.internalValue;
        }
        if (this._inlineFunction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inlineFunction = this._inlineFunction?.internalValue;
        }
        if (this._remoteMcp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.remoteMcp = this._remoteMcp?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessToolConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentCoreBrowser.internalValue = undefined;
            this._agentCoreCodeInterpreter.internalValue = undefined;
            this._agentCoreGateway.internalValue = undefined;
            this._inlineFunction.internalValue = undefined;
            this._remoteMcp.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentCoreBrowser.internalValue = value.agentCoreBrowser;
            this._agentCoreCodeInterpreter.internalValue = value.agentCoreCodeInterpreter;
            this._agentCoreGateway.internalValue = value.agentCoreGateway;
            this._inlineFunction.internalValue = value.inlineFunction;
            this._remoteMcp.internalValue = value.remoteMcp;
        }
    }

    // agent_core_browser - computed: true, optional: true, required: false
    private _agentCoreBrowser = new HarnessAgentCoreBrowserConfigPropertyOutputReference(this, "agent_core_browser");
    public get agentCoreBrowser() {
        return this._agentCoreBrowser;
    }
    public putAgentCoreBrowser(value: HarnessAgentCoreBrowserConfigProperty) {
        this._agentCoreBrowser.internalValue = value;
    }
    public resetAgentCoreBrowser() {
        this._agentCoreBrowser.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentCoreBrowserInput() {
        return this._agentCoreBrowser.internalValue;
    }

    // agent_core_code_interpreter - computed: true, optional: true, required: false
    private _agentCoreCodeInterpreter = new HarnessAgentCoreCodeInterpreterConfigPropertyOutputReference(this, "agent_core_code_interpreter");
    public get agentCoreCodeInterpreter() {
        return this._agentCoreCodeInterpreter;
    }
    public putAgentCoreCodeInterpreter(value: HarnessAgentCoreCodeInterpreterConfigProperty) {
        this._agentCoreCodeInterpreter.internalValue = value;
    }
    public resetAgentCoreCodeInterpreter() {
        this._agentCoreCodeInterpreter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentCoreCodeInterpreterInput() {
        return this._agentCoreCodeInterpreter.internalValue;
    }

    // agent_core_gateway - computed: true, optional: true, required: false
    private _agentCoreGateway = new HarnessAgentCoreGatewayConfigPropertyOutputReference(this, "agent_core_gateway");
    public get agentCoreGateway() {
        return this._agentCoreGateway;
    }
    public putAgentCoreGateway(value: HarnessAgentCoreGatewayConfigProperty) {
        this._agentCoreGateway.internalValue = value;
    }
    public resetAgentCoreGateway() {
        this._agentCoreGateway.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentCoreGatewayInput() {
        return this._agentCoreGateway.internalValue;
    }

    // inline_function - computed: true, optional: true, required: false
    private _inlineFunction = new HarnessInlineFunctionConfigPropertyOutputReference(this, "inline_function");
    public get inlineFunction() {
        return this._inlineFunction;
    }
    public putInlineFunction(value: HarnessInlineFunctionConfigProperty) {
        this._inlineFunction.internalValue = value;
    }
    public resetInlineFunction() {
        this._inlineFunction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inlineFunctionInput() {
        return this._inlineFunction.internalValue;
    }

    // remote_mcp - computed: true, optional: true, required: false
    private _remoteMcp = new HarnessRemoteMcpConfigPropertyOutputReference(this, "remote_mcp");
    public get remoteMcp() {
        return this._remoteMcp;
    }
    public putRemoteMcp(value: HarnessRemoteMcpConfigProperty) {
        this._remoteMcp.internalValue = value;
    }
    public resetRemoteMcp() {
        this._remoteMcp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remoteMcpInput() {
        return this._remoteMcp.internalValue;
    }
}
export interface HarnessToolProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#config CcHarness#config}
    */
    readonly config?: HarnessToolConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#name CcHarness#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#type CcHarness#type}
    */
    readonly type?: string;
}
export class HarnessToolPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HarnessToolProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._config?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.config = this._config?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessToolProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._config.internalValue = undefined;
            this._name = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._config.internalValue = value.config;
            this._name = value.name;
            this._type = value.type;
        }
    }

    // config - computed: true, optional: true, required: false
    private _config = new HarnessToolConfigurationPropertyOutputReference(this, "config");
    public get config() {
        return this._config;
    }
    public putConfig(value: HarnessToolConfigurationProperty) {
        this._config.internalValue = value;
    }
    public resetConfig() {
        this._config.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configInput() {
        return this._config.internalValue;
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

export class HarnessToolPropertyList extends cdktn.ComplexList {
    public internalValue? : HarnessToolProperty[] | cdktn.IResolvable

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
    public get(index: number): HarnessToolPropertyOutputReference {
        return new HarnessToolPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface HarnessSlidingWindowConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#messages_count CcHarness#messages_count}
    */
    readonly messagesCount?: number;
}
export class HarnessSlidingWindowConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessSlidingWindowConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._messagesCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.messagesCount = this._messagesCount;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessSlidingWindowConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._messagesCount = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._messagesCount = value.messagesCount;
        }
    }

    // messages_count - computed: true, optional: true, required: false
    private _messagesCount?: number; 
    public get messagesCount() {
        return this.getNumberAttribute('messages_count');
    }
    public set messagesCount(value: number) {
        this._messagesCount = value;
    }
    public resetMessagesCount() {
        this._messagesCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messagesCountInput() {
        return this._messagesCount;
    }
}
export interface HarnessSummarizationConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#preserve_recent_messages CcHarness#preserve_recent_messages}
    */
    readonly preserveRecentMessages?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#summarization_system_prompt CcHarness#summarization_system_prompt}
    */
    readonly summarizationSystemPrompt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#summary_ratio CcHarness#summary_ratio}
    */
    readonly summaryRatio?: number;
}
export class HarnessSummarizationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessSummarizationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._preserveRecentMessages !== undefined) {
            hasAnyValues = true;
            internalValueResult.preserveRecentMessages = this._preserveRecentMessages;
        }
        if (this._summarizationSystemPrompt !== undefined) {
            hasAnyValues = true;
            internalValueResult.summarizationSystemPrompt = this._summarizationSystemPrompt;
        }
        if (this._summaryRatio !== undefined) {
            hasAnyValues = true;
            internalValueResult.summaryRatio = this._summaryRatio;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessSummarizationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._preserveRecentMessages = undefined;
            this._summarizationSystemPrompt = undefined;
            this._summaryRatio = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._preserveRecentMessages = value.preserveRecentMessages;
            this._summarizationSystemPrompt = value.summarizationSystemPrompt;
            this._summaryRatio = value.summaryRatio;
        }
    }

    // preserve_recent_messages - computed: true, optional: true, required: false
    private _preserveRecentMessages?: number; 
    public get preserveRecentMessages() {
        return this.getNumberAttribute('preserve_recent_messages');
    }
    public set preserveRecentMessages(value: number) {
        this._preserveRecentMessages = value;
    }
    public resetPreserveRecentMessages() {
        this._preserveRecentMessages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preserveRecentMessagesInput() {
        return this._preserveRecentMessages;
    }

    // summarization_system_prompt - computed: true, optional: true, required: false
    private _summarizationSystemPrompt?: string; 
    public get summarizationSystemPrompt() {
        return this.getStringAttribute('summarization_system_prompt');
    }
    public set summarizationSystemPrompt(value: string) {
        this._summarizationSystemPrompt = value;
    }
    public resetSummarizationSystemPrompt() {
        this._summarizationSystemPrompt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get summarizationSystemPromptInput() {
        return this._summarizationSystemPrompt;
    }

    // summary_ratio - computed: true, optional: true, required: false
    private _summaryRatio?: number; 
    public get summaryRatio() {
        return this.getNumberAttribute('summary_ratio');
    }
    public set summaryRatio(value: number) {
        this._summaryRatio = value;
    }
    public resetSummaryRatio() {
        this._summaryRatio = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get summaryRatioInput() {
        return this._summaryRatio;
    }
}
export interface HarnessTruncationStrategyConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#sliding_window CcHarness#sliding_window}
    */
    readonly slidingWindow?: HarnessSlidingWindowConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#summarization CcHarness#summarization}
    */
    readonly summarization?: HarnessSummarizationConfigurationProperty;
}
export class HarnessTruncationStrategyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessTruncationStrategyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._slidingWindow?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.slidingWindow = this._slidingWindow?.internalValue;
        }
        if (this._summarization?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.summarization = this._summarization?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessTruncationStrategyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._slidingWindow.internalValue = undefined;
            this._summarization.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._slidingWindow.internalValue = value.slidingWindow;
            this._summarization.internalValue = value.summarization;
        }
    }

    // sliding_window - computed: true, optional: true, required: false
    private _slidingWindow = new HarnessSlidingWindowConfigurationPropertyOutputReference(this, "sliding_window");
    public get slidingWindow() {
        return this._slidingWindow;
    }
    public putSlidingWindow(value: HarnessSlidingWindowConfigurationProperty) {
        this._slidingWindow.internalValue = value;
    }
    public resetSlidingWindow() {
        this._slidingWindow.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slidingWindowInput() {
        return this._slidingWindow.internalValue;
    }

    // summarization - computed: true, optional: true, required: false
    private _summarization = new HarnessSummarizationConfigurationPropertyOutputReference(this, "summarization");
    public get summarization() {
        return this._summarization;
    }
    public putSummarization(value: HarnessSummarizationConfigurationProperty) {
        this._summarization.internalValue = value;
    }
    public resetSummarization() {
        this._summarization.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get summarizationInput() {
        return this._summarization.internalValue;
    }
}
export interface HarnessTruncationConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#config CcHarness#config}
    */
    readonly config?: HarnessTruncationStrategyConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#strategy CcHarness#strategy}
    */
    readonly strategy?: string;
}
export class HarnessTruncationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HarnessTruncationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._config?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.config = this._config?.internalValue;
        }
        if (this._strategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.strategy = this._strategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HarnessTruncationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._config.internalValue = undefined;
            this._strategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._config.internalValue = value.config;
            this._strategy = value.strategy;
        }
    }

    // config - computed: true, optional: true, required: false
    private _config = new HarnessTruncationStrategyConfigurationPropertyOutputReference(this, "config");
    public get config() {
        return this._config;
    }
    public putConfig(value: HarnessTruncationStrategyConfigurationProperty) {
        this._config.internalValue = value;
    }
    public resetConfig() {
        this._config.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configInput() {
        return this._config.internalValue;
    }

    // strategy - computed: true, optional: true, required: false
    private _strategy?: string; 
    public get strategy() {
        return this.getStringAttribute('strategy');
    }
    public set strategy(value: string) {
        this._strategy = value;
    }
    public resetStrategy() {
        this._strategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get strategyInput() {
        return this._strategy;
    }
}
}
