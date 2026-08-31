// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transcribe_vocabulary_filter

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVocabularyFilterProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transcribe_vocabulary_filter#data_access_role_arn CcVocabularyFilter#data_access_role_arn}
    */
    readonly dataAccessRoleArn?: string;
    /**
    * The language code that represents the language of the entries in your vocabulary filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transcribe_vocabulary_filter#language_code CcVocabularyFilter#language_code}
    */
    readonly languageCode: string;
    /**
    * Tags associated with the vocabulary filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transcribe_vocabulary_filter#tags CcVocabularyFilter#tags}
    */
    readonly tags?: CcVocabularyFilter.TagProperty[] | cdktn.IResolvable;
    /**
    * The Amazon S3 location of the text file that contains your custom vocabulary filter terms.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transcribe_vocabulary_filter#vocabulary_filter_file_uri CcVocabularyFilter#vocabulary_filter_file_uri}
    */
    readonly vocabularyFilterFileUri?: string;
    /**
    * A unique name, chosen by you, for your custom vocabulary filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transcribe_vocabulary_filter#vocabulary_filter_name CcVocabularyFilter#vocabulary_filter_name}
    */
    readonly vocabularyFilterName: string;
    /**
    * Use this parameter if you want to create your custom vocabulary filter by including all desired terms, as comma-separated values, within your request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transcribe_vocabulary_filter#words CcVocabularyFilter#words}
    */
    readonly words?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transcribe_vocabulary_filter awscc_transcribe_vocabulary_filter}
*/
export class CcVocabularyFilter extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_transcribe_vocabulary_filter";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVocabularyFilter resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVocabularyFilter to import
    * @param importFromId The id of the existing CcVocabularyFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transcribe_vocabulary_filter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVocabularyFilter to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_transcribe_vocabulary_filter", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transcribe_vocabulary_filter awscc_transcribe_vocabulary_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVocabularyFilterProps
    */
    public constructor(scope: Construct, id: string, config: CcVocabularyFilterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_transcribe_vocabulary_filter',
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
        this._dataAccessRoleArn = config.dataAccessRoleArn;
        this._languageCode = config.languageCode;
        this._tags.internalValue = config.tags;
        this._vocabularyFilterFileUri = config.vocabularyFilterFileUri;
        this._vocabularyFilterName = config.vocabularyFilterName;
        this._words = config.words;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcVocabularyFilter.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcVocabularyFilter.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vocabulary_filter_file_uri - computed: true, optional: true, required: false
    private _vocabularyFilterFileUri?: string; 
    public get vocabularyFilterFileUri() {
        return this.getStringAttribute('vocabulary_filter_file_uri');
    }
    public set vocabularyFilterFileUri(value: string) {
        this._vocabularyFilterFileUri = value;
    }
    public resetVocabularyFilterFileUri() {
        this._vocabularyFilterFileUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vocabularyFilterFileUriInput() {
        return this._vocabularyFilterFileUri;
    }

    // vocabulary_filter_name - computed: false, optional: false, required: true
    private _vocabularyFilterName?: string; 
    public get vocabularyFilterName() {
        return this.getStringAttribute('vocabulary_filter_name');
    }
    public set vocabularyFilterName(value: string) {
        this._vocabularyFilterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vocabularyFilterNameInput() {
        return this._vocabularyFilterName;
    }

    // words - computed: true, optional: true, required: false
    private _words?: string[]; 
    public get words() {
        return this.getListAttribute('words');
    }
    public set words(value: string[]) {
        this._words = value;
    }
    public resetWords() {
        this._words = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wordsInput() {
        return this._words;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            data_access_role_arn: cdktn.stringToTerraform(this._dataAccessRoleArn),
            language_code: cdktn.stringToTerraform(this._languageCode),
            tags: cdktn.listMapper(ccVocabularyFilterTagPropertyToTerraform, false)(this._tags.internalValue),
            vocabulary_filter_file_uri: cdktn.stringToTerraform(this._vocabularyFilterFileUri),
            vocabulary_filter_name: cdktn.stringToTerraform(this._vocabularyFilterName),
            words: cdktn.listMapper(cdktn.stringToTerraform, false)(this._words),
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
            tags: {
                value: cdktn.listMapperHcl(ccVocabularyFilterTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcVocabularyFilter.TagPropertyList",
            },
            vocabulary_filter_file_uri: {
                value: cdktn.stringToHclTerraform(this._vocabularyFilterFileUri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vocabulary_filter_name: {
                value: cdktn.stringToHclTerraform(this._vocabularyFilterName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            words: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._words),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVocabularyFilterTagPropertyToTerraform(struct?: CcVocabularyFilter.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVocabularyFilterTagPropertyToHclTerraform(struct?: CcVocabularyFilter.TagProperty | cdktn.IResolvable): any {
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


export namespace CcVocabularyFilter {
export interface TagProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transcribe_vocabulary_filter#key CcVocabularyFilter#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transcribe_vocabulary_filter#value CcVocabularyFilter#value}
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
