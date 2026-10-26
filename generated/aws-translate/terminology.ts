// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/translate_terminology

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTerminologyProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the custom terminology.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/translate_terminology#description CcTerminology#description}
    */
    readonly description?: string;
    /**
    * The encryption key for the custom terminology.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/translate_terminology#encryption_key CcTerminology#encryption_key}
    */
    readonly encryptionKey?: CcTerminology.EncryptionKeyProperty;
    /**
    * The merge strategy for the custom terminology. Currently only OVERWRITE is supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/translate_terminology#merge_strategy CcTerminology#merge_strategy}
    */
    readonly mergeStrategy?: string;
    /**
    * The name of the custom terminology.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/translate_terminology#name CcTerminology#name}
    */
    readonly name: string;
    /**
    * Tags associated with the terminology.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/translate_terminology#tags CcTerminology#tags}
    */
    readonly tags?: CcTerminology.TagsProperty[] | cdktn.IResolvable;
    /**
    * The terminology data for the custom terminology being imported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/translate_terminology#terminology_data CcTerminology#terminology_data}
    */
    readonly terminologyData?: CcTerminology.TerminologyDataProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/translate_terminology awscc_translate_terminology}
*/
export class CcTerminology extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_translate_terminology";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTerminology resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTerminology to import
    * @param importFromId The id of the existing CcTerminology that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/translate_terminology#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTerminology to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_translate_terminology", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/translate_terminology awscc_translate_terminology} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTerminologyProps
    */
    public constructor(scope: Construct, id: string, config: CcTerminologyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_translate_terminology',
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
        this._description = config.description;
        this._encryptionKey.internalValue = config.encryptionKey;
        this._mergeStrategy = config.mergeStrategy;
        this._name = config.name;
        this._tags.internalValue = config.tags;
        this._terminologyData.internalValue = config.terminologyData;
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

    // directionality - computed: true, optional: false, required: false
    public get directionality() {
        return this.getStringAttribute('directionality');
    }

    // encryption_key - computed: true, optional: true, required: false
    private _encryptionKey = new CcTerminology.EncryptionKeyPropertyOutputReference(this, "encryption_key");
    public get encryptionKey() {
        return this._encryptionKey;
    }
    public putEncryptionKey(value: CcTerminology.EncryptionKeyProperty) {
        this._encryptionKey.internalValue = value;
    }
    public resetEncryptionKey() {
        this._encryptionKey.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyInput() {
        return this._encryptionKey.internalValue;
    }

    // format - computed: true, optional: false, required: false
    public get format() {
        return this.getStringAttribute('format');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_at - computed: true, optional: false, required: false
    public get lastUpdatedAt() {
        return this.getStringAttribute('last_updated_at');
    }

    // merge_strategy - computed: true, optional: true, required: false
    private _mergeStrategy?: string; 
    public get mergeStrategy() {
        return this.getStringAttribute('merge_strategy');
    }
    public set mergeStrategy(value: string) {
        this._mergeStrategy = value;
    }
    public resetMergeStrategy() {
        this._mergeStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mergeStrategyInput() {
        return this._mergeStrategy;
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

    // size_bytes - computed: true, optional: false, required: false
    public get sizeBytes() {
        return this.getNumberAttribute('size_bytes');
    }

    // source_language_code - computed: true, optional: false, required: false
    public get sourceLanguageCode() {
        return this.getStringAttribute('source_language_code');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTerminology.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTerminology.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_language_codes - computed: true, optional: false, required: false
    public get targetLanguageCodes() {
        return this.getListAttribute('target_language_codes');
    }

    // term_count - computed: true, optional: false, required: false
    public get termCount() {
        return this.getNumberAttribute('term_count');
    }

    // terminology_data - computed: true, optional: true, required: false
    private _terminologyData = new CcTerminology.TerminologyDataPropertyOutputReference(this, "terminology_data");
    public get terminologyData() {
        return this._terminologyData;
    }
    public putTerminologyData(value: CcTerminology.TerminologyDataProperty) {
        this._terminologyData.internalValue = value;
    }
    public resetTerminologyData() {
        this._terminologyData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminologyDataInput() {
        return this._terminologyData.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            encryption_key: ccTerminologyEncryptionKeyPropertyToTerraform(this._encryptionKey.internalValue),
            merge_strategy: cdktn.stringToTerraform(this._mergeStrategy),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccTerminologyTagsPropertyToTerraform, false)(this._tags.internalValue),
            terminology_data: ccTerminologyTerminologyDataPropertyToTerraform(this._terminologyData.internalValue),
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
            encryption_key: {
                value: ccTerminologyEncryptionKeyPropertyToHclTerraform(this._encryptionKey.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTerminology.EncryptionKeyProperty",
            },
            merge_strategy: {
                value: cdktn.stringToHclTerraform(this._mergeStrategy),
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
                value: cdktn.listMapperHcl(ccTerminologyTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTerminology.TagsPropertyList",
            },
            terminology_data: {
                value: ccTerminologyTerminologyDataPropertyToHclTerraform(this._terminologyData.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTerminology.TerminologyDataProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTerminologyEncryptionKeyPropertyToTerraform(struct?: CcTerminology.EncryptionKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        id: cdktn.stringToTerraform(struct!.id),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccTerminologyEncryptionKeyPropertyToHclTerraform(struct?: CcTerminology.EncryptionKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
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


export function ccTerminologyTagsPropertyToTerraform(struct?: CcTerminology.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTerminologyTagsPropertyToHclTerraform(struct?: CcTerminology.TagsProperty | cdktn.IResolvable): any {
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


export function ccTerminologyTerminologyDataPropertyToTerraform(struct?: CcTerminology.TerminologyDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        directionality: cdktn.stringToTerraform(struct!.directionality),
        file: cdktn.stringToTerraform(struct!.file),
        format: cdktn.stringToTerraform(struct!.format),
    }
}


export function ccTerminologyTerminologyDataPropertyToHclTerraform(struct?: CcTerminology.TerminologyDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        directionality: {
            value: cdktn.stringToHclTerraform(struct!.directionality),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file: {
            value: cdktn.stringToHclTerraform(struct!.file),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        format: {
            value: cdktn.stringToHclTerraform(struct!.format),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTerminology {
export interface EncryptionKeyProperty {
    /**
    * The Amazon Resource Name (ARN) of the encryption key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/translate_terminology#id CcTerminology#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The type of encryption key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/translate_terminology#type CcTerminology#type}
    */
    readonly type?: string;
}
export class EncryptionKeyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionKeyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionKeyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._type = value.type;
        }
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
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
export interface TagsProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/translate_terminology#key CcTerminology#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/translate_terminology#value CcTerminology#value}
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
export interface TerminologyDataProperty {
    /**
    * The directionality of the terminology resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/translate_terminology#directionality CcTerminology#directionality}
    */
    readonly directionality?: string;
    /**
    * The file containing the custom terminology data, base64-encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/translate_terminology#file CcTerminology#file}
    */
    readonly file?: string;
    /**
    * The data format of the custom terminology.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/translate_terminology#format CcTerminology#format}
    */
    readonly format?: string;
}
export class TerminologyDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TerminologyDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._directionality !== undefined) {
            hasAnyValues = true;
            internalValueResult.directionality = this._directionality;
        }
        if (this._file !== undefined) {
            hasAnyValues = true;
            internalValueResult.file = this._file;
        }
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TerminologyDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._directionality = undefined;
            this._file = undefined;
            this._format = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._directionality = value.directionality;
            this._file = value.file;
            this._format = value.format;
        }
    }

    // directionality - computed: true, optional: true, required: false
    private _directionality?: string; 
    public get directionality() {
        return this.getStringAttribute('directionality');
    }
    public set directionality(value: string) {
        this._directionality = value;
    }
    public resetDirectionality() {
        this._directionality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directionalityInput() {
        return this._directionality;
    }

    // file - computed: true, optional: true, required: false
    private _file?: string; 
    public get file() {
        return this.getStringAttribute('file');
    }
    public set file(value: string) {
        this._file = value;
    }
    public resetFile() {
        this._file = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileInput() {
        return this._file;
    }

    // format - computed: true, optional: true, required: false
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    public resetFormat() {
        this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
    }
}
}
