// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRetrievalInstructionProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the customer managed KMS key protecting this content, when one was supplied at create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#customer_encryption_key_arn CcRetrievalInstruction#customer_encryption_key_arn}
    */
    readonly customerEncryptionKeyArn?: string;
    /**
    * A description of the retrieval instruction. On a numbered version, the description of that version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#description CcRetrievalInstruction#description}
    */
    readonly description?: string;
    /**
    * The reviewed content this instruction serves ? what AgenticRetrieveStream resolves while status is ACTIVE. Absent until the first create review passes. Always present on a numbered version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#instruction CcRetrievalInstruction#instruction}
    */
    readonly instruction: CcRetrievalInstruction.InstructionProperty;
    /**
    * The name of the retrieval instruction.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#name CcRetrievalInstruction#name}
    */
    readonly name: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#tags CcRetrievalInstruction#tags}
    */
    readonly tags?: CcRetrievalInstruction.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction awscc_bedrock_retrieval_instruction}
*/
export class CcRetrievalInstruction extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrock_retrieval_instruction";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRetrievalInstruction resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRetrievalInstruction to import
    * @param importFromId The id of the existing CcRetrievalInstruction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRetrievalInstruction to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_retrieval_instruction", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction awscc_bedrock_retrieval_instruction} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRetrievalInstructionProps
    */
    public constructor(scope: Construct, id: string, config: CcRetrievalInstructionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrock_retrieval_instruction',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._customerEncryptionKeyArn = config.customerEncryptionKeyArn;
        this._description = config.description;
        this._instruction.internalValue = config.instruction;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instruction - computed: false, optional: false, required: true
    private _instruction = new CcRetrievalInstruction.InstructionPropertyOutputReference(this, "instruction");
    public get instruction() {
        return this._instruction;
    }
    public putInstruction(value: CcRetrievalInstruction.InstructionProperty) {
        this._instruction.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instructionInput() {
        return this._instruction.internalValue;
    }

    // last_transition_status - computed: true, optional: false, required: false
    public get lastTransitionStatus() {
        return this.getStringAttribute('last_transition_status');
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

    // retrieval_instruction_id - computed: true, optional: false, required: false
    public get retrievalInstructionId() {
        return this.getStringAttribute('retrieval_instruction_id');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRetrievalInstruction.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRetrievalInstruction.TagsProperty[] | cdktn.IResolvable) {
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
            customer_encryption_key_arn: cdktn.stringToTerraform(this._customerEncryptionKeyArn),
            description: cdktn.stringToTerraform(this._description),
            instruction: ccRetrievalInstructionInstructionPropertyToTerraform(this._instruction.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccRetrievalInstructionTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
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
            instruction: {
                value: ccRetrievalInstructionInstructionPropertyToHclTerraform(this._instruction.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRetrievalInstruction.InstructionProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRetrievalInstructionTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcRetrievalInstruction.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRetrievalInstructionInstructionPropertyToTerraform(struct?: CcRetrievalInstruction.InstructionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        answer_format: cdktn.stringToTerraform(struct!.answerFormat),
        answer_policy: cdktn.stringToTerraform(struct!.answerPolicy),
        persona: cdktn.stringToTerraform(struct!.persona),
        retrieval_guidance: cdktn.stringToTerraform(struct!.retrievalGuidance),
    }
}


export function ccRetrievalInstructionInstructionPropertyToHclTerraform(struct?: CcRetrievalInstruction.InstructionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        answer_format: {
            value: cdktn.stringToHclTerraform(struct!.answerFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        answer_policy: {
            value: cdktn.stringToHclTerraform(struct!.answerPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        persona: {
            value: cdktn.stringToHclTerraform(struct!.persona),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        retrieval_guidance: {
            value: cdktn.stringToHclTerraform(struct!.retrievalGuidance),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRetrievalInstructionTagsPropertyToTerraform(struct?: CcRetrievalInstruction.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRetrievalInstructionTagsPropertyToHclTerraform(struct?: CcRetrievalInstruction.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcRetrievalInstruction {
export interface InstructionProperty {
    /**
    * How the answer is structured, including how sources are cited.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#answer_format CcRetrievalInstruction#answer_format}
    */
    readonly answerFormat?: string;
    /**
    * Whether and how to answer: how strongly an answer must be supported, and what to do with questions outside scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#answer_policy CcRetrievalInstruction#answer_policy}
    */
    readonly answerPolicy?: string;
    /**
    * Who the assistant is: identity, tone and language.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#persona CcRetrievalInstruction#persona}
    */
    readonly persona?: string;
    /**
    * How to interpret and decompose the question, and what to prioritise when searching.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#retrieval_guidance CcRetrievalInstruction#retrieval_guidance}
    */
    readonly retrievalGuidance?: string;
}
export class InstructionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstructionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._answerFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.answerFormat = this._answerFormat;
        }
        if (this._answerPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.answerPolicy = this._answerPolicy;
        }
        if (this._persona !== undefined) {
            hasAnyValues = true;
            internalValueResult.persona = this._persona;
        }
        if (this._retrievalGuidance !== undefined) {
            hasAnyValues = true;
            internalValueResult.retrievalGuidance = this._retrievalGuidance;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstructionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._answerFormat = undefined;
            this._answerPolicy = undefined;
            this._persona = undefined;
            this._retrievalGuidance = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._answerFormat = value.answerFormat;
            this._answerPolicy = value.answerPolicy;
            this._persona = value.persona;
            this._retrievalGuidance = value.retrievalGuidance;
        }
    }

    // answer_format - computed: true, optional: true, required: false
    private _answerFormat?: string; 
    public get answerFormat() {
        return this.getStringAttribute('answer_format');
    }
    public set answerFormat(value: string) {
        this._answerFormat = value;
    }
    public resetAnswerFormat() {
        this._answerFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get answerFormatInput() {
        return this._answerFormat;
    }

    // answer_policy - computed: true, optional: true, required: false
    private _answerPolicy?: string; 
    public get answerPolicy() {
        return this.getStringAttribute('answer_policy');
    }
    public set answerPolicy(value: string) {
        this._answerPolicy = value;
    }
    public resetAnswerPolicy() {
        this._answerPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get answerPolicyInput() {
        return this._answerPolicy;
    }

    // persona - computed: true, optional: true, required: false
    private _persona?: string; 
    public get persona() {
        return this.getStringAttribute('persona');
    }
    public set persona(value: string) {
        this._persona = value;
    }
    public resetPersona() {
        this._persona = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get personaInput() {
        return this._persona;
    }

    // retrieval_guidance - computed: true, optional: true, required: false
    private _retrievalGuidance?: string; 
    public get retrievalGuidance() {
        return this.getStringAttribute('retrieval_guidance');
    }
    public set retrievalGuidance(value: string) {
        this._retrievalGuidance = value;
    }
    public resetRetrievalGuidance() {
        this._retrievalGuidance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retrievalGuidanceInput() {
        return this._retrievalGuidance;
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#key CcRetrievalInstruction#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#value CcRetrievalInstruction#value}
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
