// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEvaluatorProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the evaluator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#description CcEvaluator#description}
    */
    readonly description?: string;
    /**
    * The configuration for the evaluator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#evaluator_config CcEvaluator#evaluator_config}
    */
    readonly evaluatorConfig: CcEvaluator.EvaluatorConfigProperty;
    /**
    * The name of the evaluator. Must be unique within your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#evaluator_name CcEvaluator#evaluator_name}
    */
    readonly evaluatorName: string;
    /**
    * The ARN of the KMS key used to encrypt evaluator data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#kms_key_arn CcEvaluator#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * The evaluation level that determines the scope of evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#level CcEvaluator#level}
    */
    readonly level: string;
    /**
    * A list of tags to assign to the evaluator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#tags CcEvaluator#tags}
    */
    readonly tags?: CcEvaluator.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator awscc_bedrockagentcore_evaluator}
*/
export class CcEvaluator extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrockagentcore_evaluator";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEvaluator resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEvaluator to import
    * @param importFromId The id of the existing CcEvaluator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEvaluator to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_evaluator", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator awscc_bedrockagentcore_evaluator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEvaluatorProps
    */
    public constructor(scope: Construct, id: string, config: CcEvaluatorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrockagentcore_evaluator',
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
        this._description = config.description;
        this._evaluatorConfig.internalValue = config.evaluatorConfig;
        this._evaluatorName = config.evaluatorName;
        this._kmsKeyArn = config.kmsKeyArn;
        this._level = config.level;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // evaluator_arn - computed: true, optional: false, required: false
    public get evaluatorArn() {
        return this.getStringAttribute('evaluator_arn');
    }

    // evaluator_config - computed: false, optional: false, required: true
    private _evaluatorConfig = new CcEvaluator.EvaluatorConfigPropertyOutputReference(this, "evaluator_config");
    public get evaluatorConfig() {
        return this._evaluatorConfig;
    }
    public putEvaluatorConfig(value: CcEvaluator.EvaluatorConfigProperty) {
        this._evaluatorConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluatorConfigInput() {
        return this._evaluatorConfig.internalValue;
    }

    // evaluator_id - computed: true, optional: false, required: false
    public get evaluatorId() {
        return this.getStringAttribute('evaluator_id');
    }

    // evaluator_name - computed: false, optional: false, required: true
    private _evaluatorName?: string; 
    public get evaluatorName() {
        return this.getStringAttribute('evaluator_name');
    }
    public set evaluatorName(value: string) {
        this._evaluatorName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluatorNameInput() {
        return this._evaluatorName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }

    // level - computed: false, optional: false, required: true
    private _level?: string; 
    public get level() {
        return this.getStringAttribute('level');
    }
    public set level(value: string) {
        this._level = value;
    }
    // Temporarily expose input value. Use with caution.
    public get levelInput() {
        return this._level;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEvaluator.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEvaluator.TagProperty[] | cdktn.IResolvable) {
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
            description: cdktn.stringToTerraform(this._description),
            evaluator_config: ccEvaluatorEvaluatorConfigPropertyToTerraform(this._evaluatorConfig.internalValue),
            evaluator_name: cdktn.stringToTerraform(this._evaluatorName),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            level: cdktn.stringToTerraform(this._level),
            tags: cdktn.listMapper(ccEvaluatorTagPropertyToTerraform, false)(this._tags.internalValue),
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
            evaluator_config: {
                value: ccEvaluatorEvaluatorConfigPropertyToHclTerraform(this._evaluatorConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEvaluator.EvaluatorConfigProperty",
            },
            evaluator_name: {
                value: cdktn.stringToHclTerraform(this._evaluatorName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            level: {
                value: cdktn.stringToHclTerraform(this._level),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEvaluatorTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEvaluator.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEvaluatorLambdaEvaluatorConfigPropertyToTerraform(struct?: CcEvaluator.LambdaEvaluatorConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
        lambda_timeout_in_seconds: cdktn.numberToTerraform(struct!.lambdaTimeoutInSeconds),
    }
}


export function ccEvaluatorLambdaEvaluatorConfigPropertyToHclTerraform(struct?: CcEvaluator.LambdaEvaluatorConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lambda_arn: {
            value: cdktn.stringToHclTerraform(struct!.lambdaArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lambda_timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.lambdaTimeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEvaluatorCodeBasedEvaluatorConfigPropertyToTerraform(struct?: CcEvaluator.CodeBasedEvaluatorConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lambda_config: ccEvaluatorLambdaEvaluatorConfigPropertyToTerraform(struct!.lambdaConfig),
    }
}


export function ccEvaluatorCodeBasedEvaluatorConfigPropertyToHclTerraform(struct?: CcEvaluator.CodeBasedEvaluatorConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lambda_config: {
            value: ccEvaluatorLambdaEvaluatorConfigPropertyToHclTerraform(struct!.lambdaConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "LambdaEvaluatorConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEvaluatorInferenceConfigurationPropertyToTerraform(struct?: CcEvaluator.InferenceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
        temperature: cdktn.numberToTerraform(struct!.temperature),
        top_p: cdktn.numberToTerraform(struct!.topP),
    }
}


export function ccEvaluatorInferenceConfigurationPropertyToHclTerraform(struct?: CcEvaluator.InferenceConfigurationProperty | cdktn.IResolvable): any {
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


export function ccEvaluatorBedrockEvaluatorModelConfigPropertyToTerraform(struct?: CcEvaluator.BedrockEvaluatorModelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_model_request_fields: cdktn.stringToTerraform(struct!.additionalModelRequestFields),
        inference_config: ccEvaluatorInferenceConfigurationPropertyToTerraform(struct!.inferenceConfig),
        model_id: cdktn.stringToTerraform(struct!.modelId),
    }
}


export function ccEvaluatorBedrockEvaluatorModelConfigPropertyToHclTerraform(struct?: CcEvaluator.BedrockEvaluatorModelConfigProperty | cdktn.IResolvable): any {
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
        inference_config: {
            value: ccEvaluatorInferenceConfigurationPropertyToHclTerraform(struct!.inferenceConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "InferenceConfigurationProperty",
        },
        model_id: {
            value: cdktn.stringToHclTerraform(struct!.modelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEvaluatorReasoningConfigurationPropertyToTerraform(struct?: CcEvaluator.ReasoningConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        effort: cdktn.stringToTerraform(struct!.effort),
    }
}


export function ccEvaluatorReasoningConfigurationPropertyToHclTerraform(struct?: CcEvaluator.ReasoningConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        effort: {
            value: cdktn.stringToHclTerraform(struct!.effort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEvaluatorOpenResponsesEvaluatorModelConfigPropertyToTerraform(struct?: CcEvaluator.OpenResponsesEvaluatorModelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_output_tokens: cdktn.numberToTerraform(struct!.maxOutputTokens),
        model_id: cdktn.stringToTerraform(struct!.modelId),
        reasoning: ccEvaluatorReasoningConfigurationPropertyToTerraform(struct!.reasoning),
        temperature: cdktn.numberToTerraform(struct!.temperature),
        top_p: cdktn.numberToTerraform(struct!.topP),
    }
}


export function ccEvaluatorOpenResponsesEvaluatorModelConfigPropertyToHclTerraform(struct?: CcEvaluator.OpenResponsesEvaluatorModelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_output_tokens: {
            value: cdktn.numberToHclTerraform(struct!.maxOutputTokens),
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
        reasoning: {
            value: ccEvaluatorReasoningConfigurationPropertyToHclTerraform(struct!.reasoning),
            isBlock: true,
            type: "struct",
            storageClassType: "ReasoningConfigurationProperty",
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


export function ccEvaluatorEvaluatorModelConfigPropertyToTerraform(struct?: CcEvaluator.EvaluatorModelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bedrock_evaluator_model_config: ccEvaluatorBedrockEvaluatorModelConfigPropertyToTerraform(struct!.bedrockEvaluatorModelConfig),
        responses_evaluator_model_config: ccEvaluatorOpenResponsesEvaluatorModelConfigPropertyToTerraform(struct!.responsesEvaluatorModelConfig),
    }
}


export function ccEvaluatorEvaluatorModelConfigPropertyToHclTerraform(struct?: CcEvaluator.EvaluatorModelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bedrock_evaluator_model_config: {
            value: ccEvaluatorBedrockEvaluatorModelConfigPropertyToHclTerraform(struct!.bedrockEvaluatorModelConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "BedrockEvaluatorModelConfigProperty",
        },
        responses_evaluator_model_config: {
            value: ccEvaluatorOpenResponsesEvaluatorModelConfigPropertyToHclTerraform(struct!.responsesEvaluatorModelConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "OpenResponsesEvaluatorModelConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEvaluatorCategoricalScaleDefinitionPropertyToTerraform(struct?: CcEvaluator.CategoricalScaleDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        definition: cdktn.stringToTerraform(struct!.definition),
        label: cdktn.stringToTerraform(struct!.label),
    }
}


export function ccEvaluatorCategoricalScaleDefinitionPropertyToHclTerraform(struct?: CcEvaluator.CategoricalScaleDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        definition: {
            value: cdktn.stringToHclTerraform(struct!.definition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        label: {
            value: cdktn.stringToHclTerraform(struct!.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEvaluatorNumericalScaleDefinitionPropertyToTerraform(struct?: CcEvaluator.NumericalScaleDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        definition: cdktn.stringToTerraform(struct!.definition),
        label: cdktn.stringToTerraform(struct!.label),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccEvaluatorNumericalScaleDefinitionPropertyToHclTerraform(struct?: CcEvaluator.NumericalScaleDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        definition: {
            value: cdktn.stringToHclTerraform(struct!.definition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        label: {
            value: cdktn.stringToHclTerraform(struct!.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEvaluatorRatingScalePropertyToTerraform(struct?: CcEvaluator.RatingScaleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        categorical: cdktn.listMapper(ccEvaluatorCategoricalScaleDefinitionPropertyToTerraform, false)(struct!.categorical),
        numerical: cdktn.listMapper(ccEvaluatorNumericalScaleDefinitionPropertyToTerraform, false)(struct!.numerical),
    }
}


export function ccEvaluatorRatingScalePropertyToHclTerraform(struct?: CcEvaluator.RatingScaleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        categorical: {
            value: cdktn.listMapperHcl(ccEvaluatorCategoricalScaleDefinitionPropertyToHclTerraform, false)(struct!.categorical),
            isBlock: true,
            type: "list",
            storageClassType: "CategoricalScaleDefinitionPropertyList",
        },
        numerical: {
            value: cdktn.listMapperHcl(ccEvaluatorNumericalScaleDefinitionPropertyToHclTerraform, false)(struct!.numerical),
            isBlock: true,
            type: "list",
            storageClassType: "NumericalScaleDefinitionPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEvaluatorLlmAsAJudgeEvaluatorConfigPropertyToTerraform(struct?: CcEvaluator.LlmAsAJudgeEvaluatorConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instructions: cdktn.stringToTerraform(struct!.instructions),
        model_config: ccEvaluatorEvaluatorModelConfigPropertyToTerraform(struct!.modelConfig),
        rating_scale: ccEvaluatorRatingScalePropertyToTerraform(struct!.ratingScale),
    }
}


export function ccEvaluatorLlmAsAJudgeEvaluatorConfigPropertyToHclTerraform(struct?: CcEvaluator.LlmAsAJudgeEvaluatorConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instructions: {
            value: cdktn.stringToHclTerraform(struct!.instructions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_config: {
            value: ccEvaluatorEvaluatorModelConfigPropertyToHclTerraform(struct!.modelConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "EvaluatorModelConfigProperty",
        },
        rating_scale: {
            value: ccEvaluatorRatingScalePropertyToHclTerraform(struct!.ratingScale),
            isBlock: true,
            type: "struct",
            storageClassType: "RatingScaleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEvaluatorEvaluatorConfigPropertyToTerraform(struct?: CcEvaluator.EvaluatorConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        code_based: ccEvaluatorCodeBasedEvaluatorConfigPropertyToTerraform(struct!.codeBased),
        llm_as_a_judge: ccEvaluatorLlmAsAJudgeEvaluatorConfigPropertyToTerraform(struct!.llmAsAJudge),
    }
}


export function ccEvaluatorEvaluatorConfigPropertyToHclTerraform(struct?: CcEvaluator.EvaluatorConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        code_based: {
            value: ccEvaluatorCodeBasedEvaluatorConfigPropertyToHclTerraform(struct!.codeBased),
            isBlock: true,
            type: "struct",
            storageClassType: "CodeBasedEvaluatorConfigProperty",
        },
        llm_as_a_judge: {
            value: ccEvaluatorLlmAsAJudgeEvaluatorConfigPropertyToHclTerraform(struct!.llmAsAJudge),
            isBlock: true,
            type: "struct",
            storageClassType: "LlmAsAJudgeEvaluatorConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEvaluatorTagPropertyToTerraform(struct?: CcEvaluator.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEvaluatorTagPropertyToHclTerraform(struct?: CcEvaluator.TagProperty | cdktn.IResolvable): any {
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


export namespace CcEvaluator {
export interface LambdaEvaluatorConfigProperty {
    /**
    * The ARN of the Lambda function used for evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#lambda_arn CcEvaluator#lambda_arn}
    */
    readonly lambdaArn?: string;
    /**
    * The timeout in seconds for the Lambda function invocation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#lambda_timeout_in_seconds CcEvaluator#lambda_timeout_in_seconds}
    */
    readonly lambdaTimeoutInSeconds?: number;
}
export class LambdaEvaluatorConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaEvaluatorConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lambdaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaArn = this._lambdaArn;
        }
        if (this._lambdaTimeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaTimeoutInSeconds = this._lambdaTimeoutInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaEvaluatorConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lambdaArn = undefined;
            this._lambdaTimeoutInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lambdaArn = value.lambdaArn;
            this._lambdaTimeoutInSeconds = value.lambdaTimeoutInSeconds;
        }
    }

    // lambda_arn - computed: true, optional: true, required: false
    private _lambdaArn?: string; 
    public get lambdaArn() {
        return this.getStringAttribute('lambda_arn');
    }
    public set lambdaArn(value: string) {
        this._lambdaArn = value;
    }
    public resetLambdaArn() {
        this._lambdaArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaArnInput() {
        return this._lambdaArn;
    }

    // lambda_timeout_in_seconds - computed: true, optional: true, required: false
    private _lambdaTimeoutInSeconds?: number; 
    public get lambdaTimeoutInSeconds() {
        return this.getNumberAttribute('lambda_timeout_in_seconds');
    }
    public set lambdaTimeoutInSeconds(value: number) {
        this._lambdaTimeoutInSeconds = value;
    }
    public resetLambdaTimeoutInSeconds() {
        this._lambdaTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaTimeoutInSecondsInput() {
        return this._lambdaTimeoutInSeconds;
    }
}
export interface CodeBasedEvaluatorConfigProperty {
    /**
    * The Lambda function configuration for code-based evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#lambda_config CcEvaluator#lambda_config}
    */
    readonly lambdaConfig?: LambdaEvaluatorConfigProperty;
}
export class CodeBasedEvaluatorConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CodeBasedEvaluatorConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lambdaConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaConfig = this._lambdaConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeBasedEvaluatorConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lambdaConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lambdaConfig.internalValue = value.lambdaConfig;
        }
    }

    // lambda_config - computed: true, optional: true, required: false
    private _lambdaConfig = new LambdaEvaluatorConfigPropertyOutputReference(this, "lambda_config");
    public get lambdaConfig() {
        return this._lambdaConfig;
    }
    public putLambdaConfig(value: LambdaEvaluatorConfigProperty) {
        this._lambdaConfig.internalValue = value;
    }
    public resetLambdaConfig() {
        this._lambdaConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaConfigInput() {
        return this._lambdaConfig.internalValue;
    }
}
export interface InferenceConfigurationProperty {
    /**
    * The maximum number of tokens to generate in the model response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#max_tokens CcEvaluator#max_tokens}
    */
    readonly maxTokens?: number;
    /**
    * The temperature value that controls randomness in the model's responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#temperature CcEvaluator#temperature}
    */
    readonly temperature?: number;
    /**
    * The top-p sampling parameter that controls the diversity of the model's responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#top_p CcEvaluator#top_p}
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
        if (this._maxTokens !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxTokens = this._maxTokens;
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

    public set internalValue(value: InferenceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxTokens = undefined;
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
export interface BedrockEvaluatorModelConfigProperty {
    /**
    * Additional model-specific request fields.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#additional_model_request_fields CcEvaluator#additional_model_request_fields}
    */
    readonly additionalModelRequestFields?: string;
    /**
    * The inference configuration parameters that control model behavior during evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#inference_config CcEvaluator#inference_config}
    */
    readonly inferenceConfig?: InferenceConfigurationProperty;
    /**
    * The identifier of the Amazon Bedrock model to use for evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#model_id CcEvaluator#model_id}
    */
    readonly modelId?: string;
}
export class BedrockEvaluatorModelConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BedrockEvaluatorModelConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalModelRequestFields !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalModelRequestFields = this._additionalModelRequestFields;
        }
        if (this._inferenceConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inferenceConfig = this._inferenceConfig?.internalValue;
        }
        if (this._modelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelId = this._modelId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BedrockEvaluatorModelConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalModelRequestFields = undefined;
            this._inferenceConfig.internalValue = undefined;
            this._modelId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalModelRequestFields = value.additionalModelRequestFields;
            this._inferenceConfig.internalValue = value.inferenceConfig;
            this._modelId = value.modelId;
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

    // inference_config - computed: true, optional: true, required: false
    private _inferenceConfig = new InferenceConfigurationPropertyOutputReference(this, "inference_config");
    public get inferenceConfig() {
        return this._inferenceConfig;
    }
    public putInferenceConfig(value: InferenceConfigurationProperty) {
        this._inferenceConfig.internalValue = value;
    }
    public resetInferenceConfig() {
        this._inferenceConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceConfigInput() {
        return this._inferenceConfig.internalValue;
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
}
export interface ReasoningConfigurationProperty {
    /**
    * The level of reasoning effort the model applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#effort CcEvaluator#effort}
    */
    readonly effort?: string;
}
export class ReasoningConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReasoningConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._effort !== undefined) {
            hasAnyValues = true;
            internalValueResult.effort = this._effort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReasoningConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._effort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._effort = value.effort;
        }
    }

    // effort - computed: true, optional: true, required: false
    private _effort?: string; 
    public get effort() {
        return this.getStringAttribute('effort');
    }
    public set effort(value: string) {
        this._effort = value;
    }
    public resetEffort() {
        this._effort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get effortInput() {
        return this._effort;
    }
}
export interface OpenResponsesEvaluatorModelConfigProperty {
    /**
    * The maximum number of output tokens to generate, including visible output and reasoning tokens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#max_output_tokens CcEvaluator#max_output_tokens}
    */
    readonly maxOutputTokens?: number;
    /**
    * The identifier of the model to use for evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#model_id CcEvaluator#model_id}
    */
    readonly modelId?: string;
    /**
    * The reasoning configuration for reasoning models.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#reasoning CcEvaluator#reasoning}
    */
    readonly reasoning?: ReasoningConfigurationProperty;
    /**
    * The sampling temperature between 0 and 2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#temperature CcEvaluator#temperature}
    */
    readonly temperature?: number;
    /**
    * The nucleus sampling probability mass between 0 and 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#top_p CcEvaluator#top_p}
    */
    readonly topP?: number;
}
export class OpenResponsesEvaluatorModelConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenResponsesEvaluatorModelConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxOutputTokens !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxOutputTokens = this._maxOutputTokens;
        }
        if (this._modelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelId = this._modelId;
        }
        if (this._reasoning?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.reasoning = this._reasoning?.internalValue;
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

    public set internalValue(value: OpenResponsesEvaluatorModelConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxOutputTokens = undefined;
            this._modelId = undefined;
            this._reasoning.internalValue = undefined;
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
            this._maxOutputTokens = value.maxOutputTokens;
            this._modelId = value.modelId;
            this._reasoning.internalValue = value.reasoning;
            this._temperature = value.temperature;
            this._topP = value.topP;
        }
    }

    // max_output_tokens - computed: true, optional: true, required: false
    private _maxOutputTokens?: number; 
    public get maxOutputTokens() {
        return this.getNumberAttribute('max_output_tokens');
    }
    public set maxOutputTokens(value: number) {
        this._maxOutputTokens = value;
    }
    public resetMaxOutputTokens() {
        this._maxOutputTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxOutputTokensInput() {
        return this._maxOutputTokens;
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

    // reasoning - computed: true, optional: true, required: false
    private _reasoning = new ReasoningConfigurationPropertyOutputReference(this, "reasoning");
    public get reasoning() {
        return this._reasoning;
    }
    public putReasoning(value: ReasoningConfigurationProperty) {
        this._reasoning.internalValue = value;
    }
    public resetReasoning() {
        this._reasoning.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reasoningInput() {
        return this._reasoning.internalValue;
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
export interface EvaluatorModelConfigProperty {
    /**
    * The configuration for using Amazon Bedrock models in evaluator assessments.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#bedrock_evaluator_model_config CcEvaluator#bedrock_evaluator_model_config}
    */
    readonly bedrockEvaluatorModelConfig?: BedrockEvaluatorModelConfigProperty;
    /**
    * The configuration for using OpenResponses-compatible models in evaluator assessments.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#responses_evaluator_model_config CcEvaluator#responses_evaluator_model_config}
    */
    readonly responsesEvaluatorModelConfig?: OpenResponsesEvaluatorModelConfigProperty;
}
export class EvaluatorModelConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EvaluatorModelConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bedrockEvaluatorModelConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bedrockEvaluatorModelConfig = this._bedrockEvaluatorModelConfig?.internalValue;
        }
        if (this._responsesEvaluatorModelConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.responsesEvaluatorModelConfig = this._responsesEvaluatorModelConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EvaluatorModelConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bedrockEvaluatorModelConfig.internalValue = undefined;
            this._responsesEvaluatorModelConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bedrockEvaluatorModelConfig.internalValue = value.bedrockEvaluatorModelConfig;
            this._responsesEvaluatorModelConfig.internalValue = value.responsesEvaluatorModelConfig;
        }
    }

    // bedrock_evaluator_model_config - computed: true, optional: true, required: false
    private _bedrockEvaluatorModelConfig = new BedrockEvaluatorModelConfigPropertyOutputReference(this, "bedrock_evaluator_model_config");
    public get bedrockEvaluatorModelConfig() {
        return this._bedrockEvaluatorModelConfig;
    }
    public putBedrockEvaluatorModelConfig(value: BedrockEvaluatorModelConfigProperty) {
        this._bedrockEvaluatorModelConfig.internalValue = value;
    }
    public resetBedrockEvaluatorModelConfig() {
        this._bedrockEvaluatorModelConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bedrockEvaluatorModelConfigInput() {
        return this._bedrockEvaluatorModelConfig.internalValue;
    }

    // responses_evaluator_model_config - computed: true, optional: true, required: false
    private _responsesEvaluatorModelConfig = new OpenResponsesEvaluatorModelConfigPropertyOutputReference(this, "responses_evaluator_model_config");
    public get responsesEvaluatorModelConfig() {
        return this._responsesEvaluatorModelConfig;
    }
    public putResponsesEvaluatorModelConfig(value: OpenResponsesEvaluatorModelConfigProperty) {
        this._responsesEvaluatorModelConfig.internalValue = value;
    }
    public resetResponsesEvaluatorModelConfig() {
        this._responsesEvaluatorModelConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responsesEvaluatorModelConfigInput() {
        return this._responsesEvaluatorModelConfig.internalValue;
    }
}
export interface CategoricalScaleDefinitionProperty {
    /**
    * The description that explains what this categorical rating represents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#definition CcEvaluator#definition}
    */
    readonly definition?: string;
    /**
    * The label of this categorical rating option.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#label CcEvaluator#label}
    */
    readonly label?: string;
}
export class CategoricalScaleDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CategoricalScaleDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._definition !== undefined) {
            hasAnyValues = true;
            internalValueResult.definition = this._definition;
        }
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CategoricalScaleDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._definition = undefined;
            this._label = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._definition = value.definition;
            this._label = value.label;
        }
    }

    // definition - computed: true, optional: true, required: false
    private _definition?: string; 
    public get definition() {
        return this.getStringAttribute('definition');
    }
    public set definition(value: string) {
        this._definition = value;
    }
    public resetDefinition() {
        this._definition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
        return this._definition;
    }

    // label - computed: true, optional: true, required: false
    private _label?: string; 
    public get label() {
        return this.getStringAttribute('label');
    }
    public set label(value: string) {
        this._label = value;
    }
    public resetLabel() {
        this._label = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelInput() {
        return this._label;
    }
}

export class CategoricalScaleDefinitionPropertyList extends cdktn.ComplexList {
    public internalValue? : CategoricalScaleDefinitionProperty[] | cdktn.IResolvable

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
    public get(index: number): CategoricalScaleDefinitionPropertyOutputReference {
        return new CategoricalScaleDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NumericalScaleDefinitionProperty {
    /**
    * The description that explains what this numerical rating represents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#definition CcEvaluator#definition}
    */
    readonly definition?: string;
    /**
    * The label that describes this numerical rating option.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#label CcEvaluator#label}
    */
    readonly label?: string;
    /**
    * The numerical value for this rating scale option.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#value CcEvaluator#value}
    */
    readonly value?: number;
}
export class NumericalScaleDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NumericalScaleDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._definition !== undefined) {
            hasAnyValues = true;
            internalValueResult.definition = this._definition;
        }
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NumericalScaleDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._definition = undefined;
            this._label = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._definition = value.definition;
            this._label = value.label;
            this._value = value.value;
        }
    }

    // definition - computed: true, optional: true, required: false
    private _definition?: string; 
    public get definition() {
        return this.getStringAttribute('definition');
    }
    public set definition(value: string) {
        this._definition = value;
    }
    public resetDefinition() {
        this._definition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
        return this._definition;
    }

    // label - computed: true, optional: true, required: false
    private _label?: string; 
    public get label() {
        return this.getStringAttribute('label');
    }
    public set label(value: string) {
        this._label = value;
    }
    public resetLabel() {
        this._label = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelInput() {
        return this._label;
    }

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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

export class NumericalScaleDefinitionPropertyList extends cdktn.ComplexList {
    public internalValue? : NumericalScaleDefinitionProperty[] | cdktn.IResolvable

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
    public get(index: number): NumericalScaleDefinitionPropertyOutputReference {
        return new NumericalScaleDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RatingScaleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#categorical CcEvaluator#categorical}
    */
    readonly categorical?: CategoricalScaleDefinitionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#numerical CcEvaluator#numerical}
    */
    readonly numerical?: NumericalScaleDefinitionProperty[] | cdktn.IResolvable;
}
export class RatingScalePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RatingScaleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._categorical?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.categorical = this._categorical?.internalValue;
        }
        if (this._numerical?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.numerical = this._numerical?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RatingScaleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._categorical.internalValue = undefined;
            this._numerical.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._categorical.internalValue = value.categorical;
            this._numerical.internalValue = value.numerical;
        }
    }

    // categorical - computed: true, optional: true, required: false
    private _categorical = new CategoricalScaleDefinitionPropertyList(this, "categorical", false);
    public get categorical() {
        return this._categorical;
    }
    public putCategorical(value: CategoricalScaleDefinitionProperty[] | cdktn.IResolvable) {
        this._categorical.internalValue = value;
    }
    public resetCategorical() {
        this._categorical.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get categoricalInput() {
        return this._categorical.internalValue;
    }

    // numerical - computed: true, optional: true, required: false
    private _numerical = new NumericalScaleDefinitionPropertyList(this, "numerical", false);
    public get numerical() {
        return this._numerical;
    }
    public putNumerical(value: NumericalScaleDefinitionProperty[] | cdktn.IResolvable) {
        this._numerical.internalValue = value;
    }
    public resetNumerical() {
        this._numerical.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numericalInput() {
        return this._numerical.internalValue;
    }
}
export interface LlmAsAJudgeEvaluatorConfigProperty {
    /**
    * The evaluation instructions that guide the language model in assessing agent performance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#instructions CcEvaluator#instructions}
    */
    readonly instructions?: string;
    /**
    * The model configuration that specifies which foundation model to use for evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#model_config CcEvaluator#model_config}
    */
    readonly modelConfig?: EvaluatorModelConfigProperty;
    /**
    * The rating scale that defines how evaluators should score agent performance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#rating_scale CcEvaluator#rating_scale}
    */
    readonly ratingScale?: RatingScaleProperty;
}
export class LlmAsAJudgeEvaluatorConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LlmAsAJudgeEvaluatorConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instructions !== undefined) {
            hasAnyValues = true;
            internalValueResult.instructions = this._instructions;
        }
        if (this._modelConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelConfig = this._modelConfig?.internalValue;
        }
        if (this._ratingScale?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ratingScale = this._ratingScale?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LlmAsAJudgeEvaluatorConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instructions = undefined;
            this._modelConfig.internalValue = undefined;
            this._ratingScale.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instructions = value.instructions;
            this._modelConfig.internalValue = value.modelConfig;
            this._ratingScale.internalValue = value.ratingScale;
        }
    }

    // instructions - computed: true, optional: true, required: false
    private _instructions?: string; 
    public get instructions() {
        return this.getStringAttribute('instructions');
    }
    public set instructions(value: string) {
        this._instructions = value;
    }
    public resetInstructions() {
        this._instructions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instructionsInput() {
        return this._instructions;
    }

    // model_config - computed: true, optional: true, required: false
    private _modelConfig = new EvaluatorModelConfigPropertyOutputReference(this, "model_config");
    public get modelConfig() {
        return this._modelConfig;
    }
    public putModelConfig(value: EvaluatorModelConfigProperty) {
        this._modelConfig.internalValue = value;
    }
    public resetModelConfig() {
        this._modelConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelConfigInput() {
        return this._modelConfig.internalValue;
    }

    // rating_scale - computed: true, optional: true, required: false
    private _ratingScale = new RatingScalePropertyOutputReference(this, "rating_scale");
    public get ratingScale() {
        return this._ratingScale;
    }
    public putRatingScale(value: RatingScaleProperty) {
        this._ratingScale.internalValue = value;
    }
    public resetRatingScale() {
        this._ratingScale.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ratingScaleInput() {
        return this._ratingScale.internalValue;
    }
}
export interface EvaluatorConfigProperty {
    /**
    * The configuration for code-based evaluation using a Lambda function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#code_based CcEvaluator#code_based}
    */
    readonly codeBased?: CodeBasedEvaluatorConfigProperty;
    /**
    * The configuration for LLM-as-a-Judge evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#llm_as_a_judge CcEvaluator#llm_as_a_judge}
    */
    readonly llmAsAJudge?: LlmAsAJudgeEvaluatorConfigProperty;
}
export class EvaluatorConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EvaluatorConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._codeBased?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeBased = this._codeBased?.internalValue;
        }
        if (this._llmAsAJudge?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.llmAsAJudge = this._llmAsAJudge?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EvaluatorConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._codeBased.internalValue = undefined;
            this._llmAsAJudge.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._codeBased.internalValue = value.codeBased;
            this._llmAsAJudge.internalValue = value.llmAsAJudge;
        }
    }

    // code_based - computed: true, optional: true, required: false
    private _codeBased = new CodeBasedEvaluatorConfigPropertyOutputReference(this, "code_based");
    public get codeBased() {
        return this._codeBased;
    }
    public putCodeBased(value: CodeBasedEvaluatorConfigProperty) {
        this._codeBased.internalValue = value;
    }
    public resetCodeBased() {
        this._codeBased.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeBasedInput() {
        return this._codeBased.internalValue;
    }

    // llm_as_a_judge - computed: true, optional: true, required: false
    private _llmAsAJudge = new LlmAsAJudgeEvaluatorConfigPropertyOutputReference(this, "llm_as_a_judge");
    public get llmAsAJudge() {
        return this._llmAsAJudge;
    }
    public putLlmAsAJudge(value: LlmAsAJudgeEvaluatorConfigProperty) {
        this._llmAsAJudge.internalValue = value;
    }
    public resetLlmAsAJudge() {
        this._llmAsAJudge.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get llmAsAJudgeInput() {
        return this._llmAsAJudge.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#key CcEvaluator#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_evaluator#value CcEvaluator#value}
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
