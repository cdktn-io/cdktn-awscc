// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVocabularyProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#data_access_role_arn CcVocabulary#data_access_role_arn}
    */
    readonly dataAccessRoleArn?: string;
    /**
    * The language code that represents the language of the entries in your custom vocabulary. Each custom vocabulary must contain terms in only one language.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#language_code CcVocabulary#language_code}
    */
    readonly languageCode: string;
    /**
    * Use this parameter if you want to create your custom vocabulary by including all desired terms, as comma-separated values, within your request. You cannot use this parameter together with VocabularyFileUri.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#phrases CcVocabulary#phrases}
    */
    readonly phrases?: string[];
    /**
    * Adds one or more custom tags, each in the form of a key:value pair, to the custom vocabulary.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#tags CcVocabulary#tags}
    */
    readonly tags?: CcVocabulary.TagsProperty[] | cdktn.IResolvable;
    /**
    * The Amazon S3 location of the text file that contains your custom vocabulary. You cannot use this parameter together with Phrases.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#vocabulary_file_uri CcVocabulary#vocabulary_file_uri}
    */
    readonly vocabularyFileUri?: string;
    /**
    * A unique name, chosen by you, for your custom vocabulary. This name is case sensitive, cannot contain spaces, and must be unique within an AWS account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#vocabulary_name CcVocabulary#vocabulary_name}
    */
    readonly vocabularyName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary awscc_transcribe_vocabulary}
*/
export class CcVocabulary extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_transcribe_vocabulary";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVocabulary resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVocabulary to import
    * @param importFromId The id of the existing CcVocabulary that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVocabulary to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_transcribe_vocabulary", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary awscc_transcribe_vocabulary} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVocabularyProps
    */
    public constructor(scope: Construct, id: string, config: CcVocabularyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_transcribe_vocabulary',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.102.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._dataAccessRoleArn = config.dataAccessRoleArn;
        this._languageCode = config.languageCode;
        this._phrases = config.phrases;
        this._tags.internalValue = config.tags;
        this._vocabularyFileUri = config.vocabularyFileUri;
        this._vocabularyName = config.vocabularyName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // data_access_role_arn - computed: true, optional: true, required: false
    private _dataAccessRoleArn?: string; 
    public get dataAccessRoleArn() {
        return this.getStringAttribute('data_access_role_arn');
    }
    public set dataAccessRoleArn(value: string) {
        this._dataAccessRoleArn = value;
    }
    public resetDataAccessRoleArn() {
        this._dataAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataAccessRoleArnInput() {
        return this._dataAccessRoleArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // language_code - computed: false, optional: false, required: true
    private _languageCode?: string; 
    public get languageCode() {
        return this.getStringAttribute('language_code');
    }
    public set languageCode(value: string) {
        this._languageCode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get languageCodeInput() {
        return this._languageCode;
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // phrases - computed: true, optional: true, required: false
    private _phrases?: string[]; 
    public get phrases() {
        return this.getListAttribute('phrases');
    }
    public set phrases(value: string[]) {
        this._phrases = value;
    }
    public resetPhrases() {
        this._phrases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get phrasesInput() {
        return this._phrases;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcVocabulary.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcVocabulary.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vocabulary_file_uri - computed: true, optional: true, required: false
    private _vocabularyFileUri?: string; 
    public get vocabularyFileUri() {
        return this.getStringAttribute('vocabulary_file_uri');
    }
    public set vocabularyFileUri(value: string) {
        this._vocabularyFileUri = value;
    }
    public resetVocabularyFileUri() {
        this._vocabularyFileUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vocabularyFileUriInput() {
        return this._vocabularyFileUri;
    }

    // vocabulary_name - computed: false, optional: false, required: true
    private _vocabularyName?: string; 
    public get vocabularyName() {
        return this.getStringAttribute('vocabulary_name');
    }
    public set vocabularyName(value: string) {
        this._vocabularyName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vocabularyNameInput() {
        return this._vocabularyName;
    }

    // vocabulary_state - computed: true, optional: false, required: false
    public get vocabularyState() {
        return this.getStringAttribute('vocabulary_state');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            data_access_role_arn: cdktn.stringToTerraform(this._dataAccessRoleArn),
            language_code: cdktn.stringToTerraform(this._languageCode),
            phrases: cdktn.listMapper(cdktn.stringToTerraform, false)(this._phrases),
            tags: cdktn.listMapper(ccVocabularyTagsPropertyToTerraform, false)(this._tags.internalValue),
            vocabulary_file_uri: cdktn.stringToTerraform(this._vocabularyFileUri),
            vocabulary_name: cdktn.stringToTerraform(this._vocabularyName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            data_access_role_arn: {
                value: cdktn.stringToHclTerraform(this._dataAccessRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            language_code: {
                value: cdktn.stringToHclTerraform(this._languageCode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            phrases: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._phrases),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccVocabularyTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcVocabulary.TagsPropertyList",
            },
            vocabulary_file_uri: {
                value: cdktn.stringToHclTerraform(this._vocabularyFileUri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vocabulary_name: {
                value: cdktn.stringToHclTerraform(this._vocabularyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVocabularyTagsPropertyToTerraform(struct?: CcVocabulary.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVocabularyTagsPropertyToHclTerraform(struct?: CcVocabulary.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcVocabulary {
export interface TagsProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#key CcVocabulary#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_vocabulary#value CcVocabulary#value}
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
