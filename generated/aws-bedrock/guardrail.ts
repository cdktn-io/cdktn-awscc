// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGuardrailProps extends cdktn.TerraformMetaArguments {
    /**
    * Optional configuration for integrating Automated Reasoning policies with the guardrail.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#automated_reasoning_policy_config CcGuardrail#automated_reasoning_policy_config}
    */
    readonly automatedReasoningPolicyConfig?: CcGuardrail.AutomatedReasoningPolicyConfigProperty;
    /**
    * Messaging for when violations are detected in text
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#blocked_input_messaging CcGuardrail#blocked_input_messaging}
    */
    readonly blockedInputMessaging: string;
    /**
    * Messaging for when violations are detected in text
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#blocked_outputs_messaging CcGuardrail#blocked_outputs_messaging}
    */
    readonly blockedOutputsMessaging: string;
    /**
    * Content policy config for a guardrail.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#content_policy_config CcGuardrail#content_policy_config}
    */
    readonly contentPolicyConfig?: CcGuardrail.ContentPolicyConfigProperty;
    /**
    * Contextual grounding policy config for a guardrail.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#contextual_grounding_policy_config CcGuardrail#contextual_grounding_policy_config}
    */
    readonly contextualGroundingPolicyConfig?: CcGuardrail.ContextualGroundingPolicyConfigProperty;
    /**
    * The system-defined guardrail profile that you?re using with your guardrail
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#cross_region_config CcGuardrail#cross_region_config}
    */
    readonly crossRegionConfig?: CcGuardrail.GuardrailCrossRegionConfigProperty;
    /**
    * Description of the guardrail or its version
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#description CcGuardrail#description}
    */
    readonly description?: string;
    /**
    * The KMS key with which the guardrail was encrypted at rest
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#kms_key_arn CcGuardrail#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Name of the guardrail
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#name CcGuardrail#name}
    */
    readonly name: string;
    /**
    * Sensitive information policy config for a guardrail.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#sensitive_information_policy_config CcGuardrail#sensitive_information_policy_config}
    */
    readonly sensitiveInformationPolicyConfig?: CcGuardrail.SensitiveInformationPolicyConfigProperty;
    /**
    * List of Tags
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#tags CcGuardrail#tags}
    */
    readonly tags?: CcGuardrail.TagProperty[] | cdktn.IResolvable;
    /**
    * Topic policy config for a guardrail.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#topic_policy_config CcGuardrail#topic_policy_config}
    */
    readonly topicPolicyConfig?: CcGuardrail.TopicPolicyConfigProperty;
    /**
    * Word policy config for a guardrail.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#word_policy_config CcGuardrail#word_policy_config}
    */
    readonly wordPolicyConfig?: CcGuardrail.WordPolicyConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail awscc_bedrock_guardrail}
*/
export class CcGuardrail extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrock_guardrail";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGuardrail resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGuardrail to import
    * @param importFromId The id of the existing CcGuardrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGuardrail to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_guardrail", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail awscc_bedrock_guardrail} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGuardrailProps
    */
    public constructor(scope: Construct, id: string, config: CcGuardrailProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrock_guardrail',
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
        this._automatedReasoningPolicyConfig.internalValue = config.automatedReasoningPolicyConfig;
        this._blockedInputMessaging = config.blockedInputMessaging;
        this._blockedOutputsMessaging = config.blockedOutputsMessaging;
        this._contentPolicyConfig.internalValue = config.contentPolicyConfig;
        this._contextualGroundingPolicyConfig.internalValue = config.contextualGroundingPolicyConfig;
        this._crossRegionConfig.internalValue = config.crossRegionConfig;
        this._description = config.description;
        this._kmsKeyArn = config.kmsKeyArn;
        this._name = config.name;
        this._sensitiveInformationPolicyConfig.internalValue = config.sensitiveInformationPolicyConfig;
        this._tags.internalValue = config.tags;
        this._topicPolicyConfig.internalValue = config.topicPolicyConfig;
        this._wordPolicyConfig.internalValue = config.wordPolicyConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // automated_reasoning_policy_config - computed: true, optional: true, required: false
    private _automatedReasoningPolicyConfig = new CcGuardrail.AutomatedReasoningPolicyConfigPropertyOutputReference(this, "automated_reasoning_policy_config");
    public get automatedReasoningPolicyConfig() {
        return this._automatedReasoningPolicyConfig;
    }
    public putAutomatedReasoningPolicyConfig(value: CcGuardrail.AutomatedReasoningPolicyConfigProperty) {
        this._automatedReasoningPolicyConfig.internalValue = value;
    }
    public resetAutomatedReasoningPolicyConfig() {
        this._automatedReasoningPolicyConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automatedReasoningPolicyConfigInput() {
        return this._automatedReasoningPolicyConfig.internalValue;
    }

    // blocked_input_messaging - computed: false, optional: false, required: true
    private _blockedInputMessaging?: string; 
    public get blockedInputMessaging() {
        return this.getStringAttribute('blocked_input_messaging');
    }
    public set blockedInputMessaging(value: string) {
        this._blockedInputMessaging = value;
    }
    // Temporarily expose input value. Use with caution.
    public get blockedInputMessagingInput() {
        return this._blockedInputMessaging;
    }

    // blocked_outputs_messaging - computed: false, optional: false, required: true
    private _blockedOutputsMessaging?: string; 
    public get blockedOutputsMessaging() {
        return this.getStringAttribute('blocked_outputs_messaging');
    }
    public set blockedOutputsMessaging(value: string) {
        this._blockedOutputsMessaging = value;
    }
    // Temporarily expose input value. Use with caution.
    public get blockedOutputsMessagingInput() {
        return this._blockedOutputsMessaging;
    }

    // content_policy_config - computed: true, optional: true, required: false
    private _contentPolicyConfig = new CcGuardrail.ContentPolicyConfigPropertyOutputReference(this, "content_policy_config");
    public get contentPolicyConfig() {
        return this._contentPolicyConfig;
    }
    public putContentPolicyConfig(value: CcGuardrail.ContentPolicyConfigProperty) {
        this._contentPolicyConfig.internalValue = value;
    }
    public resetContentPolicyConfig() {
        this._contentPolicyConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentPolicyConfigInput() {
        return this._contentPolicyConfig.internalValue;
    }

    // contextual_grounding_policy_config - computed: true, optional: true, required: false
    private _contextualGroundingPolicyConfig = new CcGuardrail.ContextualGroundingPolicyConfigPropertyOutputReference(this, "contextual_grounding_policy_config");
    public get contextualGroundingPolicyConfig() {
        return this._contextualGroundingPolicyConfig;
    }
    public putContextualGroundingPolicyConfig(value: CcGuardrail.ContextualGroundingPolicyConfigProperty) {
        this._contextualGroundingPolicyConfig.internalValue = value;
    }
    public resetContextualGroundingPolicyConfig() {
        this._contextualGroundingPolicyConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contextualGroundingPolicyConfigInput() {
        return this._contextualGroundingPolicyConfig.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // cross_region_config - computed: true, optional: true, required: false
    private _crossRegionConfig = new CcGuardrail.GuardrailCrossRegionConfigPropertyOutputReference(this, "cross_region_config");
    public get crossRegionConfig() {
        return this._crossRegionConfig;
    }
    public putCrossRegionConfig(value: CcGuardrail.GuardrailCrossRegionConfigProperty) {
        this._crossRegionConfig.internalValue = value;
    }
    public resetCrossRegionConfig() {
        this._crossRegionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crossRegionConfigInput() {
        return this._crossRegionConfig.internalValue;
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

    // failure_recommendations - computed: true, optional: false, required: false
    public get failureRecommendations() {
        return this.getListAttribute('failure_recommendations');
    }

    // guardrail_arn - computed: true, optional: false, required: false
    public get guardrailArn() {
        return this.getStringAttribute('guardrail_arn');
    }

    // guardrail_id - computed: true, optional: false, required: false
    public get guardrailId() {
        return this.getStringAttribute('guardrail_id');
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

    // sensitive_information_policy_config - computed: true, optional: true, required: false
    private _sensitiveInformationPolicyConfig = new CcGuardrail.SensitiveInformationPolicyConfigPropertyOutputReference(this, "sensitive_information_policy_config");
    public get sensitiveInformationPolicyConfig() {
        return this._sensitiveInformationPolicyConfig;
    }
    public putSensitiveInformationPolicyConfig(value: CcGuardrail.SensitiveInformationPolicyConfigProperty) {
        this._sensitiveInformationPolicyConfig.internalValue = value;
    }
    public resetSensitiveInformationPolicyConfig() {
        this._sensitiveInformationPolicyConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sensitiveInformationPolicyConfigInput() {
        return this._sensitiveInformationPolicyConfig.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // status_reasons - computed: true, optional: false, required: false
    public get statusReasons() {
        return this.getListAttribute('status_reasons');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcGuardrail.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcGuardrail.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // topic_policy_config - computed: true, optional: true, required: false
    private _topicPolicyConfig = new CcGuardrail.TopicPolicyConfigPropertyOutputReference(this, "topic_policy_config");
    public get topicPolicyConfig() {
        return this._topicPolicyConfig;
    }
    public putTopicPolicyConfig(value: CcGuardrail.TopicPolicyConfigProperty) {
        this._topicPolicyConfig.internalValue = value;
    }
    public resetTopicPolicyConfig() {
        this._topicPolicyConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicPolicyConfigInput() {
        return this._topicPolicyConfig.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // version - computed: true, optional: false, required: false
    public get version() {
        return this.getStringAttribute('version');
    }

    // word_policy_config - computed: true, optional: true, required: false
    private _wordPolicyConfig = new CcGuardrail.WordPolicyConfigPropertyOutputReference(this, "word_policy_config");
    public get wordPolicyConfig() {
        return this._wordPolicyConfig;
    }
    public putWordPolicyConfig(value: CcGuardrail.WordPolicyConfigProperty) {
        this._wordPolicyConfig.internalValue = value;
    }
    public resetWordPolicyConfig() {
        this._wordPolicyConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wordPolicyConfigInput() {
        return this._wordPolicyConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            automated_reasoning_policy_config: ccGuardrailAutomatedReasoningPolicyConfigPropertyToTerraform(this._automatedReasoningPolicyConfig.internalValue),
            blocked_input_messaging: cdktn.stringToTerraform(this._blockedInputMessaging),
            blocked_outputs_messaging: cdktn.stringToTerraform(this._blockedOutputsMessaging),
            content_policy_config: ccGuardrailContentPolicyConfigPropertyToTerraform(this._contentPolicyConfig.internalValue),
            contextual_grounding_policy_config: ccGuardrailContextualGroundingPolicyConfigPropertyToTerraform(this._contextualGroundingPolicyConfig.internalValue),
            cross_region_config: ccGuardrailGuardrailCrossRegionConfigPropertyToTerraform(this._crossRegionConfig.internalValue),
            description: cdktn.stringToTerraform(this._description),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            name: cdktn.stringToTerraform(this._name),
            sensitive_information_policy_config: ccGuardrailSensitiveInformationPolicyConfigPropertyToTerraform(this._sensitiveInformationPolicyConfig.internalValue),
            tags: cdktn.listMapper(ccGuardrailTagPropertyToTerraform, false)(this._tags.internalValue),
            topic_policy_config: ccGuardrailTopicPolicyConfigPropertyToTerraform(this._topicPolicyConfig.internalValue),
            word_policy_config: ccGuardrailWordPolicyConfigPropertyToTerraform(this._wordPolicyConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            automated_reasoning_policy_config: {
                value: ccGuardrailAutomatedReasoningPolicyConfigPropertyToHclTerraform(this._automatedReasoningPolicyConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGuardrail.AutomatedReasoningPolicyConfigProperty",
            },
            blocked_input_messaging: {
                value: cdktn.stringToHclTerraform(this._blockedInputMessaging),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            blocked_outputs_messaging: {
                value: cdktn.stringToHclTerraform(this._blockedOutputsMessaging),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_policy_config: {
                value: ccGuardrailContentPolicyConfigPropertyToHclTerraform(this._contentPolicyConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGuardrail.ContentPolicyConfigProperty",
            },
            contextual_grounding_policy_config: {
                value: ccGuardrailContextualGroundingPolicyConfigPropertyToHclTerraform(this._contextualGroundingPolicyConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGuardrail.ContextualGroundingPolicyConfigProperty",
            },
            cross_region_config: {
                value: ccGuardrailGuardrailCrossRegionConfigPropertyToHclTerraform(this._crossRegionConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGuardrail.GuardrailCrossRegionConfigProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sensitive_information_policy_config: {
                value: ccGuardrailSensitiveInformationPolicyConfigPropertyToHclTerraform(this._sensitiveInformationPolicyConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGuardrail.SensitiveInformationPolicyConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccGuardrailTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcGuardrail.TagPropertyList",
            },
            topic_policy_config: {
                value: ccGuardrailTopicPolicyConfigPropertyToHclTerraform(this._topicPolicyConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGuardrail.TopicPolicyConfigProperty",
            },
            word_policy_config: {
                value: ccGuardrailWordPolicyConfigPropertyToHclTerraform(this._wordPolicyConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGuardrail.WordPolicyConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccGuardrailAutomatedReasoningPolicyConfigPropertyToTerraform(struct?: CcGuardrail.AutomatedReasoningPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        confidence_threshold: cdktn.numberToTerraform(struct!.confidenceThreshold),
        policies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.policies),
    }
}


export function ccGuardrailAutomatedReasoningPolicyConfigPropertyToHclTerraform(struct?: CcGuardrail.AutomatedReasoningPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        confidence_threshold: {
            value: cdktn.numberToHclTerraform(struct!.confidenceThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        policies: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.policies),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGuardrailContentFiltersTierConfigPropertyToTerraform(struct?: CcGuardrail.ContentFiltersTierConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        tier_name: cdktn.stringToTerraform(struct!.tierName),
    }
}


export function ccGuardrailContentFiltersTierConfigPropertyToHclTerraform(struct?: CcGuardrail.ContentFiltersTierConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        tier_name: {
            value: cdktn.stringToHclTerraform(struct!.tierName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGuardrailContentFilterConfigPropertyToTerraform(struct?: CcGuardrail.ContentFilterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_action: cdktn.stringToTerraform(struct!.inputAction),
        input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
        input_modalities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inputModalities),
        input_strength: cdktn.stringToTerraform(struct!.inputStrength),
        output_action: cdktn.stringToTerraform(struct!.outputAction),
        output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
        output_modalities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.outputModalities),
        output_strength: cdktn.stringToTerraform(struct!.outputStrength),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccGuardrailContentFilterConfigPropertyToHclTerraform(struct?: CcGuardrail.ContentFilterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_action: {
            value: cdktn.stringToHclTerraform(struct!.inputAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        input_modalities: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inputModalities),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        input_strength: {
            value: cdktn.stringToHclTerraform(struct!.inputStrength),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_action: {
            value: cdktn.stringToHclTerraform(struct!.outputAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        output_modalities: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.outputModalities),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        output_strength: {
            value: cdktn.stringToHclTerraform(struct!.outputStrength),
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


export function ccGuardrailContentPolicyConfigPropertyToTerraform(struct?: CcGuardrail.ContentPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_filters_tier_config: ccGuardrailContentFiltersTierConfigPropertyToTerraform(struct!.contentFiltersTierConfig),
        filters_config: cdktn.listMapper(ccGuardrailContentFilterConfigPropertyToTerraform, false)(struct!.filtersConfig),
    }
}


export function ccGuardrailContentPolicyConfigPropertyToHclTerraform(struct?: CcGuardrail.ContentPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_filters_tier_config: {
            value: ccGuardrailContentFiltersTierConfigPropertyToHclTerraform(struct!.contentFiltersTierConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ContentFiltersTierConfigProperty",
        },
        filters_config: {
            value: cdktn.listMapperHcl(ccGuardrailContentFilterConfigPropertyToHclTerraform, false)(struct!.filtersConfig),
            isBlock: true,
            type: "list",
            storageClassType: "ContentFilterConfigPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGuardrailContextualGroundingFilterConfigPropertyToTerraform(struct?: CcGuardrail.ContextualGroundingFilterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        threshold: cdktn.numberToTerraform(struct!.threshold),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccGuardrailContextualGroundingFilterConfigPropertyToHclTerraform(struct?: CcGuardrail.ContextualGroundingFilterConfigProperty | cdktn.IResolvable): any {
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
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        threshold: {
            value: cdktn.numberToHclTerraform(struct!.threshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccGuardrailContextualGroundingPolicyConfigPropertyToTerraform(struct?: CcGuardrail.ContextualGroundingPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filters_config: cdktn.listMapper(ccGuardrailContextualGroundingFilterConfigPropertyToTerraform, false)(struct!.filtersConfig),
    }
}


export function ccGuardrailContextualGroundingPolicyConfigPropertyToHclTerraform(struct?: CcGuardrail.ContextualGroundingPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filters_config: {
            value: cdktn.listMapperHcl(ccGuardrailContextualGroundingFilterConfigPropertyToHclTerraform, false)(struct!.filtersConfig),
            isBlock: true,
            type: "list",
            storageClassType: "ContextualGroundingFilterConfigPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGuardrailGuardrailCrossRegionConfigPropertyToTerraform(struct?: CcGuardrail.GuardrailCrossRegionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        guardrail_profile_arn: cdktn.stringToTerraform(struct!.guardrailProfileArn),
    }
}


export function ccGuardrailGuardrailCrossRegionConfigPropertyToHclTerraform(struct?: CcGuardrail.GuardrailCrossRegionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        guardrail_profile_arn: {
            value: cdktn.stringToHclTerraform(struct!.guardrailProfileArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGuardrailPiiEntityConfigPropertyToTerraform(struct?: CcGuardrail.PiiEntityConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
        input_action: cdktn.stringToTerraform(struct!.inputAction),
        input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
        output_action: cdktn.stringToTerraform(struct!.outputAction),
        output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccGuardrailPiiEntityConfigPropertyToHclTerraform(struct?: CcGuardrail.PiiEntityConfigProperty | cdktn.IResolvable): any {
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
        input_action: {
            value: cdktn.stringToHclTerraform(struct!.inputAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        output_action: {
            value: cdktn.stringToHclTerraform(struct!.outputAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
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


export function ccGuardrailRegexConfigPropertyToTerraform(struct?: CcGuardrail.RegexConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
        description: cdktn.stringToTerraform(struct!.description),
        input_action: cdktn.stringToTerraform(struct!.inputAction),
        input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
        name: cdktn.stringToTerraform(struct!.name),
        output_action: cdktn.stringToTerraform(struct!.outputAction),
        output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
        pattern: cdktn.stringToTerraform(struct!.pattern),
    }
}


export function ccGuardrailRegexConfigPropertyToHclTerraform(struct?: CcGuardrail.RegexConfigProperty | cdktn.IResolvable): any {
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
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_action: {
            value: cdktn.stringToHclTerraform(struct!.inputAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_action: {
            value: cdktn.stringToHclTerraform(struct!.outputAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        pattern: {
            value: cdktn.stringToHclTerraform(struct!.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGuardrailSensitiveInformationPolicyConfigPropertyToTerraform(struct?: CcGuardrail.SensitiveInformationPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pii_entities_config: cdktn.listMapper(ccGuardrailPiiEntityConfigPropertyToTerraform, false)(struct!.piiEntitiesConfig),
        regexes_config: cdktn.listMapper(ccGuardrailRegexConfigPropertyToTerraform, false)(struct!.regexesConfig),
    }
}


export function ccGuardrailSensitiveInformationPolicyConfigPropertyToHclTerraform(struct?: CcGuardrail.SensitiveInformationPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pii_entities_config: {
            value: cdktn.listMapperHcl(ccGuardrailPiiEntityConfigPropertyToHclTerraform, false)(struct!.piiEntitiesConfig),
            isBlock: true,
            type: "list",
            storageClassType: "PiiEntityConfigPropertyList",
        },
        regexes_config: {
            value: cdktn.listMapperHcl(ccGuardrailRegexConfigPropertyToHclTerraform, false)(struct!.regexesConfig),
            isBlock: true,
            type: "list",
            storageClassType: "RegexConfigPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGuardrailTagPropertyToTerraform(struct?: CcGuardrail.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccGuardrailTagPropertyToHclTerraform(struct?: CcGuardrail.TagProperty | cdktn.IResolvable): any {
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


export function ccGuardrailTopicConfigPropertyToTerraform(struct?: CcGuardrail.TopicConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        definition: cdktn.stringToTerraform(struct!.definition),
        examples: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.examples),
        input_action: cdktn.stringToTerraform(struct!.inputAction),
        input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
        name: cdktn.stringToTerraform(struct!.name),
        output_action: cdktn.stringToTerraform(struct!.outputAction),
        output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccGuardrailTopicConfigPropertyToHclTerraform(struct?: CcGuardrail.TopicConfigProperty | cdktn.IResolvable): any {
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
        examples: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.examples),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        input_action: {
            value: cdktn.stringToHclTerraform(struct!.inputAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_action: {
            value: cdktn.stringToHclTerraform(struct!.outputAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
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


export function ccGuardrailTopicsTierConfigPropertyToTerraform(struct?: CcGuardrail.TopicsTierConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        tier_name: cdktn.stringToTerraform(struct!.tierName),
    }
}


export function ccGuardrailTopicsTierConfigPropertyToHclTerraform(struct?: CcGuardrail.TopicsTierConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        tier_name: {
            value: cdktn.stringToHclTerraform(struct!.tierName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGuardrailTopicPolicyConfigPropertyToTerraform(struct?: CcGuardrail.TopicPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        topics_config: cdktn.listMapper(ccGuardrailTopicConfigPropertyToTerraform, false)(struct!.topicsConfig),
        topics_tier_config: ccGuardrailTopicsTierConfigPropertyToTerraform(struct!.topicsTierConfig),
    }
}


export function ccGuardrailTopicPolicyConfigPropertyToHclTerraform(struct?: CcGuardrail.TopicPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        topics_config: {
            value: cdktn.listMapperHcl(ccGuardrailTopicConfigPropertyToHclTerraform, false)(struct!.topicsConfig),
            isBlock: true,
            type: "list",
            storageClassType: "TopicConfigPropertyList",
        },
        topics_tier_config: {
            value: ccGuardrailTopicsTierConfigPropertyToHclTerraform(struct!.topicsTierConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "TopicsTierConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGuardrailManagedWordsConfigPropertyToTerraform(struct?: CcGuardrail.ManagedWordsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_action: cdktn.stringToTerraform(struct!.inputAction),
        input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
        output_action: cdktn.stringToTerraform(struct!.outputAction),
        output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccGuardrailManagedWordsConfigPropertyToHclTerraform(struct?: CcGuardrail.ManagedWordsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_action: {
            value: cdktn.stringToHclTerraform(struct!.inputAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        output_action: {
            value: cdktn.stringToHclTerraform(struct!.outputAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
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


export function ccGuardrailWordConfigPropertyToTerraform(struct?: CcGuardrail.WordConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_action: cdktn.stringToTerraform(struct!.inputAction),
        input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
        output_action: cdktn.stringToTerraform(struct!.outputAction),
        output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
        text: cdktn.stringToTerraform(struct!.text),
    }
}


export function ccGuardrailWordConfigPropertyToHclTerraform(struct?: CcGuardrail.WordConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_action: {
            value: cdktn.stringToHclTerraform(struct!.inputAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        output_action: {
            value: cdktn.stringToHclTerraform(struct!.outputAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
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


export function ccGuardrailWordPolicyConfigPropertyToTerraform(struct?: CcGuardrail.WordPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        managed_word_lists_config: cdktn.listMapper(ccGuardrailManagedWordsConfigPropertyToTerraform, false)(struct!.managedWordListsConfig),
        words_config: cdktn.listMapper(ccGuardrailWordConfigPropertyToTerraform, false)(struct!.wordsConfig),
    }
}


export function ccGuardrailWordPolicyConfigPropertyToHclTerraform(struct?: CcGuardrail.WordPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        managed_word_lists_config: {
            value: cdktn.listMapperHcl(ccGuardrailManagedWordsConfigPropertyToHclTerraform, false)(struct!.managedWordListsConfig),
            isBlock: true,
            type: "list",
            storageClassType: "ManagedWordsConfigPropertyList",
        },
        words_config: {
            value: cdktn.listMapperHcl(ccGuardrailWordConfigPropertyToHclTerraform, false)(struct!.wordsConfig),
            isBlock: true,
            type: "list",
            storageClassType: "WordConfigPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcGuardrail {
export interface AutomatedReasoningPolicyConfigProperty {
    /**
    * The confidence threshold for triggering guardrail actions based on Automated Reasoning policy violations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#confidence_threshold CcGuardrail#confidence_threshold}
    */
    readonly confidenceThreshold?: number;
    /**
    * The list of Automated Reasoning policy ARNs to include in the guardrail configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#policies CcGuardrail#policies}
    */
    readonly policies?: string[];
}
export class AutomatedReasoningPolicyConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutomatedReasoningPolicyConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._confidenceThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.confidenceThreshold = this._confidenceThreshold;
        }
        if (this._policies !== undefined) {
            hasAnyValues = true;
            internalValueResult.policies = this._policies;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutomatedReasoningPolicyConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._confidenceThreshold = undefined;
            this._policies = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._confidenceThreshold = value.confidenceThreshold;
            this._policies = value.policies;
        }
    }

    // confidence_threshold - computed: true, optional: true, required: false
    private _confidenceThreshold?: number; 
    public get confidenceThreshold() {
        return this.getNumberAttribute('confidence_threshold');
    }
    public set confidenceThreshold(value: number) {
        this._confidenceThreshold = value;
    }
    public resetConfidenceThreshold() {
        this._confidenceThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get confidenceThresholdInput() {
        return this._confidenceThreshold;
    }

    // policies - computed: true, optional: true, required: false
    private _policies?: string[]; 
    public get policies() {
        return this.getListAttribute('policies');
    }
    public set policies(value: string[]) {
        this._policies = value;
    }
    public resetPolicies() {
        this._policies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policiesInput() {
        return this._policies;
    }
}
export interface ContentFiltersTierConfigProperty {
    /**
    * Tier name for tier configuration in content filters policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#tier_name CcGuardrail#tier_name}
    */
    readonly tierName?: string;
}
export class ContentFiltersTierConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContentFiltersTierConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tierName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tierName = this._tierName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentFiltersTierConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tierName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tierName = value.tierName;
        }
    }

    // tier_name - computed: true, optional: true, required: false
    private _tierName?: string; 
    public get tierName() {
        return this.getStringAttribute('tier_name');
    }
    public set tierName(value: string) {
        this._tierName = value;
    }
    public resetTierName() {
        this._tierName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tierNameInput() {
        return this._tierName;
    }
}
export interface ContentFilterConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#input_action CcGuardrail#input_action}
    */
    readonly inputAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#input_enabled CcGuardrail#input_enabled}
    */
    readonly inputEnabled?: boolean | cdktn.IResolvable;
    /**
    * List of modalities
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#input_modalities CcGuardrail#input_modalities}
    */
    readonly inputModalities?: string[];
    /**
    * Strength for filters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#input_strength CcGuardrail#input_strength}
    */
    readonly inputStrength?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#output_action CcGuardrail#output_action}
    */
    readonly outputAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#output_enabled CcGuardrail#output_enabled}
    */
    readonly outputEnabled?: boolean | cdktn.IResolvable;
    /**
    * List of modalities
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#output_modalities CcGuardrail#output_modalities}
    */
    readonly outputModalities?: string[];
    /**
    * Strength for filters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#output_strength CcGuardrail#output_strength}
    */
    readonly outputStrength?: string;
    /**
    * Type of filter in content policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#type CcGuardrail#type}
    */
    readonly type?: string;
}
export class ContentFilterConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ContentFilterConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inputAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputAction = this._inputAction;
        }
        if (this._inputEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputEnabled = this._inputEnabled;
        }
        if (this._inputModalities !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputModalities = this._inputModalities;
        }
        if (this._inputStrength !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputStrength = this._inputStrength;
        }
        if (this._outputAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputAction = this._outputAction;
        }
        if (this._outputEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputEnabled = this._outputEnabled;
        }
        if (this._outputModalities !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputModalities = this._outputModalities;
        }
        if (this._outputStrength !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputStrength = this._outputStrength;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentFilterConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputAction = undefined;
            this._inputEnabled = undefined;
            this._inputModalities = undefined;
            this._inputStrength = undefined;
            this._outputAction = undefined;
            this._outputEnabled = undefined;
            this._outputModalities = undefined;
            this._outputStrength = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputAction = value.inputAction;
            this._inputEnabled = value.inputEnabled;
            this._inputModalities = value.inputModalities;
            this._inputStrength = value.inputStrength;
            this._outputAction = value.outputAction;
            this._outputEnabled = value.outputEnabled;
            this._outputModalities = value.outputModalities;
            this._outputStrength = value.outputStrength;
            this._type = value.type;
        }
    }

    // input_action - computed: true, optional: true, required: false
    private _inputAction?: string; 
    public get inputAction() {
        return this.getStringAttribute('input_action');
    }
    public set inputAction(value: string) {
        this._inputAction = value;
    }
    public resetInputAction() {
        this._inputAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputActionInput() {
        return this._inputAction;
    }

    // input_enabled - computed: true, optional: true, required: false
    private _inputEnabled?: boolean | cdktn.IResolvable; 
    public get inputEnabled() {
        return this.getBooleanAttribute('input_enabled');
    }
    public set inputEnabled(value: boolean | cdktn.IResolvable) {
        this._inputEnabled = value;
    }
    public resetInputEnabled() {
        this._inputEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputEnabledInput() {
        return this._inputEnabled;
    }

    // input_modalities - computed: true, optional: true, required: false
    private _inputModalities?: string[]; 
    public get inputModalities() {
        return this.getListAttribute('input_modalities');
    }
    public set inputModalities(value: string[]) {
        this._inputModalities = value;
    }
    public resetInputModalities() {
        this._inputModalities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputModalitiesInput() {
        return this._inputModalities;
    }

    // input_strength - computed: true, optional: true, required: false
    private _inputStrength?: string; 
    public get inputStrength() {
        return this.getStringAttribute('input_strength');
    }
    public set inputStrength(value: string) {
        this._inputStrength = value;
    }
    public resetInputStrength() {
        this._inputStrength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputStrengthInput() {
        return this._inputStrength;
    }

    // output_action - computed: true, optional: true, required: false
    private _outputAction?: string; 
    public get outputAction() {
        return this.getStringAttribute('output_action');
    }
    public set outputAction(value: string) {
        this._outputAction = value;
    }
    public resetOutputAction() {
        this._outputAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputActionInput() {
        return this._outputAction;
    }

    // output_enabled - computed: true, optional: true, required: false
    private _outputEnabled?: boolean | cdktn.IResolvable; 
    public get outputEnabled() {
        return this.getBooleanAttribute('output_enabled');
    }
    public set outputEnabled(value: boolean | cdktn.IResolvable) {
        this._outputEnabled = value;
    }
    public resetOutputEnabled() {
        this._outputEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputEnabledInput() {
        return this._outputEnabled;
    }

    // output_modalities - computed: true, optional: true, required: false
    private _outputModalities?: string[]; 
    public get outputModalities() {
        return this.getListAttribute('output_modalities');
    }
    public set outputModalities(value: string[]) {
        this._outputModalities = value;
    }
    public resetOutputModalities() {
        this._outputModalities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputModalitiesInput() {
        return this._outputModalities;
    }

    // output_strength - computed: true, optional: true, required: false
    private _outputStrength?: string; 
    public get outputStrength() {
        return this.getStringAttribute('output_strength');
    }
    public set outputStrength(value: string) {
        this._outputStrength = value;
    }
    public resetOutputStrength() {
        this._outputStrength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputStrengthInput() {
        return this._outputStrength;
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

export class ContentFilterConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : ContentFilterConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): ContentFilterConfigPropertyOutputReference {
        return new ContentFilterConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ContentPolicyConfigProperty {
    /**
    * Guardrail tier config for content policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#content_filters_tier_config CcGuardrail#content_filters_tier_config}
    */
    readonly contentFiltersTierConfig?: ContentFiltersTierConfigProperty;
    /**
    * List of content filter configs in content policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#filters_config CcGuardrail#filters_config}
    */
    readonly filtersConfig?: ContentFilterConfigProperty[] | cdktn.IResolvable;
}
export class ContentPolicyConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContentPolicyConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentFiltersTierConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentFiltersTierConfig = this._contentFiltersTierConfig?.internalValue;
        }
        if (this._filtersConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filtersConfig = this._filtersConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentPolicyConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentFiltersTierConfig.internalValue = undefined;
            this._filtersConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentFiltersTierConfig.internalValue = value.contentFiltersTierConfig;
            this._filtersConfig.internalValue = value.filtersConfig;
        }
    }

    // content_filters_tier_config - computed: true, optional: true, required: false
    private _contentFiltersTierConfig = new ContentFiltersTierConfigPropertyOutputReference(this, "content_filters_tier_config");
    public get contentFiltersTierConfig() {
        return this._contentFiltersTierConfig;
    }
    public putContentFiltersTierConfig(value: ContentFiltersTierConfigProperty) {
        this._contentFiltersTierConfig.internalValue = value;
    }
    public resetContentFiltersTierConfig() {
        this._contentFiltersTierConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentFiltersTierConfigInput() {
        return this._contentFiltersTierConfig.internalValue;
    }

    // filters_config - computed: true, optional: true, required: false
    private _filtersConfig = new ContentFilterConfigPropertyList(this, "filters_config", false);
    public get filtersConfig() {
        return this._filtersConfig;
    }
    public putFiltersConfig(value: ContentFilterConfigProperty[] | cdktn.IResolvable) {
        this._filtersConfig.internalValue = value;
    }
    public resetFiltersConfig() {
        this._filtersConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filtersConfigInput() {
        return this._filtersConfig.internalValue;
    }
}
export interface ContextualGroundingFilterConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#action CcGuardrail#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#enabled CcGuardrail#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The threshold for this filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#threshold CcGuardrail#threshold}
    */
    readonly threshold?: number;
    /**
    * Type of contextual grounding filter
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#type CcGuardrail#type}
    */
    readonly type?: string;
}
export class ContextualGroundingFilterConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ContextualGroundingFilterConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._threshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.threshold = this._threshold;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContextualGroundingFilterConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._enabled = undefined;
            this._threshold = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._enabled = value.enabled;
            this._threshold = value.threshold;
            this._type = value.type;
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

    // threshold - computed: true, optional: true, required: false
    private _threshold?: number; 
    public get threshold() {
        return this.getNumberAttribute('threshold');
    }
    public set threshold(value: number) {
        this._threshold = value;
    }
    public resetThreshold() {
        this._threshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdInput() {
        return this._threshold;
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

export class ContextualGroundingFilterConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : ContextualGroundingFilterConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): ContextualGroundingFilterConfigPropertyOutputReference {
        return new ContextualGroundingFilterConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ContextualGroundingPolicyConfigProperty {
    /**
    * List of contextual grounding filter configs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#filters_config CcGuardrail#filters_config}
    */
    readonly filtersConfig?: ContextualGroundingFilterConfigProperty[] | cdktn.IResolvable;
}
export class ContextualGroundingPolicyConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContextualGroundingPolicyConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filtersConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filtersConfig = this._filtersConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContextualGroundingPolicyConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filtersConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filtersConfig.internalValue = value.filtersConfig;
        }
    }

    // filters_config - computed: true, optional: true, required: false
    private _filtersConfig = new ContextualGroundingFilterConfigPropertyList(this, "filters_config", false);
    public get filtersConfig() {
        return this._filtersConfig;
    }
    public putFiltersConfig(value: ContextualGroundingFilterConfigProperty[] | cdktn.IResolvable) {
        this._filtersConfig.internalValue = value;
    }
    public resetFiltersConfig() {
        this._filtersConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filtersConfigInput() {
        return this._filtersConfig.internalValue;
    }
}
export interface GuardrailCrossRegionConfigProperty {
    /**
    * The Amazon Resource Name (ARN) of the guardrail profile
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#guardrail_profile_arn CcGuardrail#guardrail_profile_arn}
    */
    readonly guardrailProfileArn?: string;
}
export class GuardrailCrossRegionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GuardrailCrossRegionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._guardrailProfileArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.guardrailProfileArn = this._guardrailProfileArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GuardrailCrossRegionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._guardrailProfileArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._guardrailProfileArn = value.guardrailProfileArn;
        }
    }

    // guardrail_profile_arn - computed: true, optional: true, required: false
    private _guardrailProfileArn?: string; 
    public get guardrailProfileArn() {
        return this.getStringAttribute('guardrail_profile_arn');
    }
    public set guardrailProfileArn(value: string) {
        this._guardrailProfileArn = value;
    }
    public resetGuardrailProfileArn() {
        this._guardrailProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get guardrailProfileArnInput() {
        return this._guardrailProfileArn;
    }
}
export interface PiiEntityConfigProperty {
    /**
    * Options for sensitive information action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#action CcGuardrail#action}
    */
    readonly action?: string;
    /**
    * Options for sensitive information action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#input_action CcGuardrail#input_action}
    */
    readonly inputAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#input_enabled CcGuardrail#input_enabled}
    */
    readonly inputEnabled?: boolean | cdktn.IResolvable;
    /**
    * Options for sensitive information action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#output_action CcGuardrail#output_action}
    */
    readonly outputAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#output_enabled CcGuardrail#output_enabled}
    */
    readonly outputEnabled?: boolean | cdktn.IResolvable;
    /**
    * The currently supported PII entities
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#type CcGuardrail#type}
    */
    readonly type?: string;
}
export class PiiEntityConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PiiEntityConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._inputAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputAction = this._inputAction;
        }
        if (this._inputEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputEnabled = this._inputEnabled;
        }
        if (this._outputAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputAction = this._outputAction;
        }
        if (this._outputEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputEnabled = this._outputEnabled;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PiiEntityConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._inputAction = undefined;
            this._inputEnabled = undefined;
            this._outputAction = undefined;
            this._outputEnabled = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._inputAction = value.inputAction;
            this._inputEnabled = value.inputEnabled;
            this._outputAction = value.outputAction;
            this._outputEnabled = value.outputEnabled;
            this._type = value.type;
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

    // input_action - computed: true, optional: true, required: false
    private _inputAction?: string; 
    public get inputAction() {
        return this.getStringAttribute('input_action');
    }
    public set inputAction(value: string) {
        this._inputAction = value;
    }
    public resetInputAction() {
        this._inputAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputActionInput() {
        return this._inputAction;
    }

    // input_enabled - computed: true, optional: true, required: false
    private _inputEnabled?: boolean | cdktn.IResolvable; 
    public get inputEnabled() {
        return this.getBooleanAttribute('input_enabled');
    }
    public set inputEnabled(value: boolean | cdktn.IResolvable) {
        this._inputEnabled = value;
    }
    public resetInputEnabled() {
        this._inputEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputEnabledInput() {
        return this._inputEnabled;
    }

    // output_action - computed: true, optional: true, required: false
    private _outputAction?: string; 
    public get outputAction() {
        return this.getStringAttribute('output_action');
    }
    public set outputAction(value: string) {
        this._outputAction = value;
    }
    public resetOutputAction() {
        this._outputAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputActionInput() {
        return this._outputAction;
    }

    // output_enabled - computed: true, optional: true, required: false
    private _outputEnabled?: boolean | cdktn.IResolvable; 
    public get outputEnabled() {
        return this.getBooleanAttribute('output_enabled');
    }
    public set outputEnabled(value: boolean | cdktn.IResolvable) {
        this._outputEnabled = value;
    }
    public resetOutputEnabled() {
        this._outputEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputEnabledInput() {
        return this._outputEnabled;
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

export class PiiEntityConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : PiiEntityConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): PiiEntityConfigPropertyOutputReference {
        return new PiiEntityConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RegexConfigProperty {
    /**
    * Options for sensitive information action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#action CcGuardrail#action}
    */
    readonly action?: string;
    /**
    * The regex description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#description CcGuardrail#description}
    */
    readonly description?: string;
    /**
    * Options for sensitive information action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#input_action CcGuardrail#input_action}
    */
    readonly inputAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#input_enabled CcGuardrail#input_enabled}
    */
    readonly inputEnabled?: boolean | cdktn.IResolvable;
    /**
    * The regex name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#name CcGuardrail#name}
    */
    readonly name?: string;
    /**
    * Options for sensitive information action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#output_action CcGuardrail#output_action}
    */
    readonly outputAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#output_enabled CcGuardrail#output_enabled}
    */
    readonly outputEnabled?: boolean | cdktn.IResolvable;
    /**
    * The regex pattern.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#pattern CcGuardrail#pattern}
    */
    readonly pattern?: string;
}
export class RegexConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RegexConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._inputAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputAction = this._inputAction;
        }
        if (this._inputEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputEnabled = this._inputEnabled;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._outputAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputAction = this._outputAction;
        }
        if (this._outputEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputEnabled = this._outputEnabled;
        }
        if (this._pattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.pattern = this._pattern;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RegexConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._description = undefined;
            this._inputAction = undefined;
            this._inputEnabled = undefined;
            this._name = undefined;
            this._outputAction = undefined;
            this._outputEnabled = undefined;
            this._pattern = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._description = value.description;
            this._inputAction = value.inputAction;
            this._inputEnabled = value.inputEnabled;
            this._name = value.name;
            this._outputAction = value.outputAction;
            this._outputEnabled = value.outputEnabled;
            this._pattern = value.pattern;
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

    // input_action - computed: true, optional: true, required: false
    private _inputAction?: string; 
    public get inputAction() {
        return this.getStringAttribute('input_action');
    }
    public set inputAction(value: string) {
        this._inputAction = value;
    }
    public resetInputAction() {
        this._inputAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputActionInput() {
        return this._inputAction;
    }

    // input_enabled - computed: true, optional: true, required: false
    private _inputEnabled?: boolean | cdktn.IResolvable; 
    public get inputEnabled() {
        return this.getBooleanAttribute('input_enabled');
    }
    public set inputEnabled(value: boolean | cdktn.IResolvable) {
        this._inputEnabled = value;
    }
    public resetInputEnabled() {
        this._inputEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputEnabledInput() {
        return this._inputEnabled;
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

    // output_action - computed: true, optional: true, required: false
    private _outputAction?: string; 
    public get outputAction() {
        return this.getStringAttribute('output_action');
    }
    public set outputAction(value: string) {
        this._outputAction = value;
    }
    public resetOutputAction() {
        this._outputAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputActionInput() {
        return this._outputAction;
    }

    // output_enabled - computed: true, optional: true, required: false
    private _outputEnabled?: boolean | cdktn.IResolvable; 
    public get outputEnabled() {
        return this.getBooleanAttribute('output_enabled');
    }
    public set outputEnabled(value: boolean | cdktn.IResolvable) {
        this._outputEnabled = value;
    }
    public resetOutputEnabled() {
        this._outputEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputEnabledInput() {
        return this._outputEnabled;
    }

    // pattern - computed: true, optional: true, required: false
    private _pattern?: string; 
    public get pattern() {
        return this.getStringAttribute('pattern');
    }
    public set pattern(value: string) {
        this._pattern = value;
    }
    public resetPattern() {
        this._pattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternInput() {
        return this._pattern;
    }
}

export class RegexConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : RegexConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): RegexConfigPropertyOutputReference {
        return new RegexConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SensitiveInformationPolicyConfigProperty {
    /**
    * List of entities.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#pii_entities_config CcGuardrail#pii_entities_config}
    */
    readonly piiEntitiesConfig?: PiiEntityConfigProperty[] | cdktn.IResolvable;
    /**
    * List of regex.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#regexes_config CcGuardrail#regexes_config}
    */
    readonly regexesConfig?: RegexConfigProperty[] | cdktn.IResolvable;
}
export class SensitiveInformationPolicyConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SensitiveInformationPolicyConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._piiEntitiesConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.piiEntitiesConfig = this._piiEntitiesConfig?.internalValue;
        }
        if (this._regexesConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.regexesConfig = this._regexesConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SensitiveInformationPolicyConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._piiEntitiesConfig.internalValue = undefined;
            this._regexesConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._piiEntitiesConfig.internalValue = value.piiEntitiesConfig;
            this._regexesConfig.internalValue = value.regexesConfig;
        }
    }

    // pii_entities_config - computed: true, optional: true, required: false
    private _piiEntitiesConfig = new PiiEntityConfigPropertyList(this, "pii_entities_config", false);
    public get piiEntitiesConfig() {
        return this._piiEntitiesConfig;
    }
    public putPiiEntitiesConfig(value: PiiEntityConfigProperty[] | cdktn.IResolvable) {
        this._piiEntitiesConfig.internalValue = value;
    }
    public resetPiiEntitiesConfig() {
        this._piiEntitiesConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get piiEntitiesConfigInput() {
        return this._piiEntitiesConfig.internalValue;
    }

    // regexes_config - computed: true, optional: true, required: false
    private _regexesConfig = new RegexConfigPropertyList(this, "regexes_config", false);
    public get regexesConfig() {
        return this._regexesConfig;
    }
    public putRegexesConfig(value: RegexConfigProperty[] | cdktn.IResolvable) {
        this._regexesConfig.internalValue = value;
    }
    public resetRegexesConfig() {
        this._regexesConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexesConfigInput() {
        return this._regexesConfig.internalValue;
    }
}
export interface TagProperty {
    /**
    * Tag Key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#key CcGuardrail#key}
    */
    readonly key?: string;
    /**
    * Tag Value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#value CcGuardrail#value}
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
export interface TopicConfigProperty {
    /**
    * Definition of topic in topic policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#definition CcGuardrail#definition}
    */
    readonly definition?: string;
    /**
    * List of text examples
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#examples CcGuardrail#examples}
    */
    readonly examples?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#input_action CcGuardrail#input_action}
    */
    readonly inputAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#input_enabled CcGuardrail#input_enabled}
    */
    readonly inputEnabled?: boolean | cdktn.IResolvable;
    /**
    * Name of topic in topic policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#name CcGuardrail#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#output_action CcGuardrail#output_action}
    */
    readonly outputAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#output_enabled CcGuardrail#output_enabled}
    */
    readonly outputEnabled?: boolean | cdktn.IResolvable;
    /**
    * Type of topic in a policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#type CcGuardrail#type}
    */
    readonly type?: string;
}
export class TopicConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TopicConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._definition !== undefined) {
            hasAnyValues = true;
            internalValueResult.definition = this._definition;
        }
        if (this._examples !== undefined) {
            hasAnyValues = true;
            internalValueResult.examples = this._examples;
        }
        if (this._inputAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputAction = this._inputAction;
        }
        if (this._inputEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputEnabled = this._inputEnabled;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._outputAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputAction = this._outputAction;
        }
        if (this._outputEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputEnabled = this._outputEnabled;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TopicConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._definition = undefined;
            this._examples = undefined;
            this._inputAction = undefined;
            this._inputEnabled = undefined;
            this._name = undefined;
            this._outputAction = undefined;
            this._outputEnabled = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._definition = value.definition;
            this._examples = value.examples;
            this._inputAction = value.inputAction;
            this._inputEnabled = value.inputEnabled;
            this._name = value.name;
            this._outputAction = value.outputAction;
            this._outputEnabled = value.outputEnabled;
            this._type = value.type;
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

    // input_action - computed: true, optional: true, required: false
    private _inputAction?: string; 
    public get inputAction() {
        return this.getStringAttribute('input_action');
    }
    public set inputAction(value: string) {
        this._inputAction = value;
    }
    public resetInputAction() {
        this._inputAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputActionInput() {
        return this._inputAction;
    }

    // input_enabled - computed: true, optional: true, required: false
    private _inputEnabled?: boolean | cdktn.IResolvable; 
    public get inputEnabled() {
        return this.getBooleanAttribute('input_enabled');
    }
    public set inputEnabled(value: boolean | cdktn.IResolvable) {
        this._inputEnabled = value;
    }
    public resetInputEnabled() {
        this._inputEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputEnabledInput() {
        return this._inputEnabled;
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

    // output_action - computed: true, optional: true, required: false
    private _outputAction?: string; 
    public get outputAction() {
        return this.getStringAttribute('output_action');
    }
    public set outputAction(value: string) {
        this._outputAction = value;
    }
    public resetOutputAction() {
        this._outputAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputActionInput() {
        return this._outputAction;
    }

    // output_enabled - computed: true, optional: true, required: false
    private _outputEnabled?: boolean | cdktn.IResolvable; 
    public get outputEnabled() {
        return this.getBooleanAttribute('output_enabled');
    }
    public set outputEnabled(value: boolean | cdktn.IResolvable) {
        this._outputEnabled = value;
    }
    public resetOutputEnabled() {
        this._outputEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputEnabledInput() {
        return this._outputEnabled;
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

export class TopicConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : TopicConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): TopicConfigPropertyOutputReference {
        return new TopicConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TopicsTierConfigProperty {
    /**
    * Tier name for tier configuration in topic policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#tier_name CcGuardrail#tier_name}
    */
    readonly tierName?: string;
}
export class TopicsTierConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TopicsTierConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tierName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tierName = this._tierName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TopicsTierConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tierName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tierName = value.tierName;
        }
    }

    // tier_name - computed: true, optional: true, required: false
    private _tierName?: string; 
    public get tierName() {
        return this.getStringAttribute('tier_name');
    }
    public set tierName(value: string) {
        this._tierName = value;
    }
    public resetTierName() {
        this._tierName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tierNameInput() {
        return this._tierName;
    }
}
export interface TopicPolicyConfigProperty {
    /**
    * List of topic configs in topic policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#topics_config CcGuardrail#topics_config}
    */
    readonly topicsConfig?: TopicConfigProperty[] | cdktn.IResolvable;
    /**
    * Guardrail tier config for topic policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#topics_tier_config CcGuardrail#topics_tier_config}
    */
    readonly topicsTierConfig?: TopicsTierConfigProperty;
}
export class TopicPolicyConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TopicPolicyConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._topicsConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.topicsConfig = this._topicsConfig?.internalValue;
        }
        if (this._topicsTierConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.topicsTierConfig = this._topicsTierConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TopicPolicyConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._topicsConfig.internalValue = undefined;
            this._topicsTierConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._topicsConfig.internalValue = value.topicsConfig;
            this._topicsTierConfig.internalValue = value.topicsTierConfig;
        }
    }

    // topics_config - computed: true, optional: true, required: false
    private _topicsConfig = new TopicConfigPropertyList(this, "topics_config", false);
    public get topicsConfig() {
        return this._topicsConfig;
    }
    public putTopicsConfig(value: TopicConfigProperty[] | cdktn.IResolvable) {
        this._topicsConfig.internalValue = value;
    }
    public resetTopicsConfig() {
        this._topicsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicsConfigInput() {
        return this._topicsConfig.internalValue;
    }

    // topics_tier_config - computed: true, optional: true, required: false
    private _topicsTierConfig = new TopicsTierConfigPropertyOutputReference(this, "topics_tier_config");
    public get topicsTierConfig() {
        return this._topicsTierConfig;
    }
    public putTopicsTierConfig(value: TopicsTierConfigProperty) {
        this._topicsTierConfig.internalValue = value;
    }
    public resetTopicsTierConfig() {
        this._topicsTierConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicsTierConfigInput() {
        return this._topicsTierConfig.internalValue;
    }
}
export interface ManagedWordsConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#input_action CcGuardrail#input_action}
    */
    readonly inputAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#input_enabled CcGuardrail#input_enabled}
    */
    readonly inputEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#output_action CcGuardrail#output_action}
    */
    readonly outputAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#output_enabled CcGuardrail#output_enabled}
    */
    readonly outputEnabled?: boolean | cdktn.IResolvable;
    /**
    * Options for managed words.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#type CcGuardrail#type}
    */
    readonly type?: string;
}
export class ManagedWordsConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ManagedWordsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inputAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputAction = this._inputAction;
        }
        if (this._inputEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputEnabled = this._inputEnabled;
        }
        if (this._outputAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputAction = this._outputAction;
        }
        if (this._outputEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputEnabled = this._outputEnabled;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedWordsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputAction = undefined;
            this._inputEnabled = undefined;
            this._outputAction = undefined;
            this._outputEnabled = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputAction = value.inputAction;
            this._inputEnabled = value.inputEnabled;
            this._outputAction = value.outputAction;
            this._outputEnabled = value.outputEnabled;
            this._type = value.type;
        }
    }

    // input_action - computed: true, optional: true, required: false
    private _inputAction?: string; 
    public get inputAction() {
        return this.getStringAttribute('input_action');
    }
    public set inputAction(value: string) {
        this._inputAction = value;
    }
    public resetInputAction() {
        this._inputAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputActionInput() {
        return this._inputAction;
    }

    // input_enabled - computed: true, optional: true, required: false
    private _inputEnabled?: boolean | cdktn.IResolvable; 
    public get inputEnabled() {
        return this.getBooleanAttribute('input_enabled');
    }
    public set inputEnabled(value: boolean | cdktn.IResolvable) {
        this._inputEnabled = value;
    }
    public resetInputEnabled() {
        this._inputEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputEnabledInput() {
        return this._inputEnabled;
    }

    // output_action - computed: true, optional: true, required: false
    private _outputAction?: string; 
    public get outputAction() {
        return this.getStringAttribute('output_action');
    }
    public set outputAction(value: string) {
        this._outputAction = value;
    }
    public resetOutputAction() {
        this._outputAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputActionInput() {
        return this._outputAction;
    }

    // output_enabled - computed: true, optional: true, required: false
    private _outputEnabled?: boolean | cdktn.IResolvable; 
    public get outputEnabled() {
        return this.getBooleanAttribute('output_enabled');
    }
    public set outputEnabled(value: boolean | cdktn.IResolvable) {
        this._outputEnabled = value;
    }
    public resetOutputEnabled() {
        this._outputEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputEnabledInput() {
        return this._outputEnabled;
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

export class ManagedWordsConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : ManagedWordsConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): ManagedWordsConfigPropertyOutputReference {
        return new ManagedWordsConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface WordConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#input_action CcGuardrail#input_action}
    */
    readonly inputAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#input_enabled CcGuardrail#input_enabled}
    */
    readonly inputEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#output_action CcGuardrail#output_action}
    */
    readonly outputAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#output_enabled CcGuardrail#output_enabled}
    */
    readonly outputEnabled?: boolean | cdktn.IResolvable;
    /**
    * The custom word text.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#text CcGuardrail#text}
    */
    readonly text?: string;
}
export class WordConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): WordConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inputAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputAction = this._inputAction;
        }
        if (this._inputEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputEnabled = this._inputEnabled;
        }
        if (this._outputAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputAction = this._outputAction;
        }
        if (this._outputEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputEnabled = this._outputEnabled;
        }
        if (this._text !== undefined) {
            hasAnyValues = true;
            internalValueResult.text = this._text;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WordConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputAction = undefined;
            this._inputEnabled = undefined;
            this._outputAction = undefined;
            this._outputEnabled = undefined;
            this._text = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputAction = value.inputAction;
            this._inputEnabled = value.inputEnabled;
            this._outputAction = value.outputAction;
            this._outputEnabled = value.outputEnabled;
            this._text = value.text;
        }
    }

    // input_action - computed: true, optional: true, required: false
    private _inputAction?: string; 
    public get inputAction() {
        return this.getStringAttribute('input_action');
    }
    public set inputAction(value: string) {
        this._inputAction = value;
    }
    public resetInputAction() {
        this._inputAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputActionInput() {
        return this._inputAction;
    }

    // input_enabled - computed: true, optional: true, required: false
    private _inputEnabled?: boolean | cdktn.IResolvable; 
    public get inputEnabled() {
        return this.getBooleanAttribute('input_enabled');
    }
    public set inputEnabled(value: boolean | cdktn.IResolvable) {
        this._inputEnabled = value;
    }
    public resetInputEnabled() {
        this._inputEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputEnabledInput() {
        return this._inputEnabled;
    }

    // output_action - computed: true, optional: true, required: false
    private _outputAction?: string; 
    public get outputAction() {
        return this.getStringAttribute('output_action');
    }
    public set outputAction(value: string) {
        this._outputAction = value;
    }
    public resetOutputAction() {
        this._outputAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputActionInput() {
        return this._outputAction;
    }

    // output_enabled - computed: true, optional: true, required: false
    private _outputEnabled?: boolean | cdktn.IResolvable; 
    public get outputEnabled() {
        return this.getBooleanAttribute('output_enabled');
    }
    public set outputEnabled(value: boolean | cdktn.IResolvable) {
        this._outputEnabled = value;
    }
    public resetOutputEnabled() {
        this._outputEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputEnabledInput() {
        return this._outputEnabled;
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

export class WordConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : WordConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): WordConfigPropertyOutputReference {
        return new WordConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface WordPolicyConfigProperty {
    /**
    * A config for the list of managed words.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#managed_word_lists_config CcGuardrail#managed_word_lists_config}
    */
    readonly managedWordListsConfig?: ManagedWordsConfigProperty[] | cdktn.IResolvable;
    /**
    * List of custom word configs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail#words_config CcGuardrail#words_config}
    */
    readonly wordsConfig?: WordConfigProperty[] | cdktn.IResolvable;
}
export class WordPolicyConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WordPolicyConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._managedWordListsConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedWordListsConfig = this._managedWordListsConfig?.internalValue;
        }
        if (this._wordsConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.wordsConfig = this._wordsConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WordPolicyConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._managedWordListsConfig.internalValue = undefined;
            this._wordsConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._managedWordListsConfig.internalValue = value.managedWordListsConfig;
            this._wordsConfig.internalValue = value.wordsConfig;
        }
    }

    // managed_word_lists_config - computed: true, optional: true, required: false
    private _managedWordListsConfig = new ManagedWordsConfigPropertyList(this, "managed_word_lists_config", false);
    public get managedWordListsConfig() {
        return this._managedWordListsConfig;
    }
    public putManagedWordListsConfig(value: ManagedWordsConfigProperty[] | cdktn.IResolvable) {
        this._managedWordListsConfig.internalValue = value;
    }
    public resetManagedWordListsConfig() {
        this._managedWordListsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedWordListsConfigInput() {
        return this._managedWordListsConfig.internalValue;
    }

    // words_config - computed: true, optional: true, required: false
    private _wordsConfig = new WordConfigPropertyList(this, "words_config", false);
    public get wordsConfig() {
        return this._wordsConfig;
    }
    public putWordsConfig(value: WordConfigProperty[] | cdktn.IResolvable) {
        this._wordsConfig.internalValue = value;
    }
    public resetWordsConfig() {
        this._wordsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wordsConfigInput() {
        return this._wordsConfig.internalValue;
    }
}
}
