// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_profile

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcProfileProps extends cdktn.TerraformMetaArguments {
    /**
    * The profile description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_profile#profile_description CcProfile#profile_description}
    */
    readonly profileDescription: string;
    /**
    * The name of the profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_profile#profile_name CcProfile#profile_name}
    */
    readonly profileName: string;
    /**
    * The profile questions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_profile#profile_questions CcProfile#profile_questions}
    */
    readonly profileQuestions: CcProfile.ProfileQuestionUpdateProperty[] | cdktn.IResolvable;
    /**
    * The tags assigned to the profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_profile#tags CcProfile#tags}
    */
    readonly tags?: CcProfile.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_profile awscc_wellarchitected_profile}
*/
export class CcProfile extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_wellarchitected_profile";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcProfile resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcProfile to import
    * @param importFromId The id of the existing CcProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcProfile to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wellarchitected_profile", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_profile awscc_wellarchitected_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcProfileProps
    */
    public constructor(scope: Construct, id: string, config: CcProfileProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_wellarchitected_profile',
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
        this._profileDescription = config.profileDescription;
        this._profileName = config.profileName;
        this._profileQuestions.internalValue = config.profileQuestions;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // owner - computed: true, optional: false, required: false
    public get owner() {
        return this.getStringAttribute('owner');
    }

    // profile_arn - computed: true, optional: false, required: false
    public get profileArn() {
        return this.getStringAttribute('profile_arn');
    }

    // profile_description - computed: false, optional: false, required: true
    private _profileDescription?: string; 
    public get profileDescription() {
        return this.getStringAttribute('profile_description');
    }
    public set profileDescription(value: string) {
        this._profileDescription = value;
    }
    // Temporarily expose input value. Use with caution.
    public get profileDescriptionInput() {
        return this._profileDescription;
    }

    // profile_name - computed: false, optional: false, required: true
    private _profileName?: string; 
    public get profileName() {
        return this.getStringAttribute('profile_name');
    }
    public set profileName(value: string) {
        this._profileName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get profileNameInput() {
        return this._profileName;
    }

    // profile_questions - computed: false, optional: false, required: true
    private _profileQuestions = new CcProfile.ProfileQuestionUpdatePropertyList(this, "profile_questions", false);
    public get profileQuestions() {
        return this._profileQuestions;
    }
    public putProfileQuestions(value: CcProfile.ProfileQuestionUpdateProperty[] | cdktn.IResolvable) {
        this._profileQuestions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get profileQuestionsInput() {
        return this._profileQuestions.internalValue;
    }

    // profile_version - computed: true, optional: false, required: false
    public get profileVersion() {
        return this.getStringAttribute('profile_version');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcProfile.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcProfile.TagProperty[] | cdktn.IResolvable) {
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
            profile_description: cdktn.stringToTerraform(this._profileDescription),
            profile_name: cdktn.stringToTerraform(this._profileName),
            profile_questions: cdktn.listMapper(ccProfileProfileQuestionUpdatePropertyToTerraform, false)(this._profileQuestions.internalValue),
            tags: cdktn.listMapper(ccProfileTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            profile_description: {
                value: cdktn.stringToHclTerraform(this._profileDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            profile_name: {
                value: cdktn.stringToHclTerraform(this._profileName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            profile_questions: {
                value: cdktn.listMapperHcl(ccProfileProfileQuestionUpdatePropertyToHclTerraform, false)(this._profileQuestions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcProfile.ProfileQuestionUpdatePropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccProfileTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcProfile.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccProfileProfileQuestionUpdatePropertyToTerraform(struct?: CcProfile.ProfileQuestionUpdateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        question_id: cdktn.stringToTerraform(struct!.questionId),
        selected_choice_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.selectedChoiceIds),
    }
}


export function ccProfileProfileQuestionUpdatePropertyToHclTerraform(struct?: CcProfile.ProfileQuestionUpdateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        question_id: {
            value: cdktn.stringToHclTerraform(struct!.questionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        selected_choice_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.selectedChoiceIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProfileTagPropertyToTerraform(struct?: CcProfile.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccProfileTagPropertyToHclTerraform(struct?: CcProfile.TagProperty | cdktn.IResolvable): any {
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


export namespace CcProfile {
export interface ProfileQuestionUpdateProperty {
    /**
    * The ID of the question.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_profile#question_id CcProfile#question_id}
    */
    readonly questionId?: string;
    /**
    * The selected choices.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_profile#selected_choice_ids CcProfile#selected_choice_ids}
    */
    readonly selectedChoiceIds?: string[];
}
export class ProfileQuestionUpdatePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProfileQuestionUpdateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._questionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.questionId = this._questionId;
        }
        if (this._selectedChoiceIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.selectedChoiceIds = this._selectedChoiceIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProfileQuestionUpdateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._questionId = undefined;
            this._selectedChoiceIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._questionId = value.questionId;
            this._selectedChoiceIds = value.selectedChoiceIds;
        }
    }

    // question_id - computed: true, optional: true, required: false
    private _questionId?: string; 
    public get questionId() {
        return this.getStringAttribute('question_id');
    }
    public set questionId(value: string) {
        this._questionId = value;
    }
    public resetQuestionId() {
        this._questionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get questionIdInput() {
        return this._questionId;
    }

    // selected_choice_ids - computed: true, optional: true, required: false
    private _selectedChoiceIds?: string[]; 
    public get selectedChoiceIds() {
        return this.getListAttribute('selected_choice_ids');
    }
    public set selectedChoiceIds(value: string[]) {
        this._selectedChoiceIds = value;
    }
    public resetSelectedChoiceIds() {
        this._selectedChoiceIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selectedChoiceIdsInput() {
        return this._selectedChoiceIds;
    }
}

export class ProfileQuestionUpdatePropertyList extends cdktn.ComplexList {
    public internalValue? : ProfileQuestionUpdateProperty[] | cdktn.IResolvable

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
    public get(index: number): ProfileQuestionUpdatePropertyOutputReference {
        return new ProfileQuestionUpdatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_profile#key CcProfile#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_profile#value CcProfile#value}
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
