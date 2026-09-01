// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_custom_data_identifier

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCustomDataIdentifierProps extends cdktn.TerraformMetaArguments {
    /**
    * Description of custom data identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_custom_data_identifier#description CcCustomDataIdentifier#description}
    */
    readonly description?: string;
    /**
    * Words to be ignored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_custom_data_identifier#ignore_words CcCustomDataIdentifier#ignore_words}
    */
    readonly ignoreWords?: string[];
    /**
    * Keywords to be matched against.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_custom_data_identifier#keywords CcCustomDataIdentifier#keywords}
    */
    readonly keywords?: string[];
    /**
    * Maximum match distance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_custom_data_identifier#maximum_match_distance CcCustomDataIdentifier#maximum_match_distance}
    */
    readonly maximumMatchDistance?: number;
    /**
    * Name of custom data identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_custom_data_identifier#name CcCustomDataIdentifier#name}
    */
    readonly name: string;
    /**
    * Regular expression for custom data identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_custom_data_identifier#regex CcCustomDataIdentifier#regex}
    */
    readonly regex: string;
    /**
    * A collection of tags associated with a resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_custom_data_identifier#tags CcCustomDataIdentifier#tags}
    */
    readonly tags?: CcCustomDataIdentifier.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_custom_data_identifier awscc_macie_custom_data_identifier}
*/
export class CcCustomDataIdentifier extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_macie_custom_data_identifier";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCustomDataIdentifier resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCustomDataIdentifier to import
    * @param importFromId The id of the existing CcCustomDataIdentifier that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_custom_data_identifier#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCustomDataIdentifier to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_macie_custom_data_identifier", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_custom_data_identifier awscc_macie_custom_data_identifier} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCustomDataIdentifierProps
    */
    public constructor(scope: Construct, id: string, config: CcCustomDataIdentifierProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_macie_custom_data_identifier',
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
        this._description = config.description;
        this._ignoreWords = config.ignoreWords;
        this._keywords = config.keywords;
        this._maximumMatchDistance = config.maximumMatchDistance;
        this._name = config.name;
        this._regex = config.regex;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // custom_data_identifier_id - computed: true, optional: false, required: false
    public get customDataIdentifierId() {
        return this.getStringAttribute('custom_data_identifier_id');
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

    // ignore_words - computed: true, optional: true, required: false
    private _ignoreWords?: string[]; 
    public get ignoreWords() {
        return this.getListAttribute('ignore_words');
    }
    public set ignoreWords(value: string[]) {
        this._ignoreWords = value;
    }
    public resetIgnoreWords() {
        this._ignoreWords = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ignoreWordsInput() {
        return this._ignoreWords;
    }

    // keywords - computed: true, optional: true, required: false
    private _keywords?: string[]; 
    public get keywords() {
        return this.getListAttribute('keywords');
    }
    public set keywords(value: string[]) {
        this._keywords = value;
    }
    public resetKeywords() {
        this._keywords = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keywordsInput() {
        return this._keywords;
    }

    // maximum_match_distance - computed: true, optional: true, required: false
    private _maximumMatchDistance?: number; 
    public get maximumMatchDistance() {
        return this.getNumberAttribute('maximum_match_distance');
    }
    public set maximumMatchDistance(value: number) {
        this._maximumMatchDistance = value;
    }
    public resetMaximumMatchDistance() {
        this._maximumMatchDistance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumMatchDistanceInput() {
        return this._maximumMatchDistance;
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

    // regex - computed: false, optional: false, required: true
    private _regex?: string; 
    public get regex() {
        return this.getStringAttribute('regex');
    }
    public set regex(value: string) {
        this._regex = value;
    }
    // Temporarily expose input value. Use with caution.
    public get regexInput() {
        return this._regex;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCustomDataIdentifier.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCustomDataIdentifier.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            ignore_words: cdktn.listMapper(cdktn.stringToTerraform, false)(this._ignoreWords),
            keywords: cdktn.listMapper(cdktn.stringToTerraform, false)(this._keywords),
            maximum_match_distance: cdktn.numberToTerraform(this._maximumMatchDistance),
            name: cdktn.stringToTerraform(this._name),
            regex: cdktn.stringToTerraform(this._regex),
            tags: cdktn.listMapper(ccCustomDataIdentifierTagPropertyToTerraform, false)(this._tags.internalValue),
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
            ignore_words: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._ignoreWords),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            keywords: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._keywords),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            maximum_match_distance: {
                value: cdktn.numberToHclTerraform(this._maximumMatchDistance),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            regex: {
                value: cdktn.stringToHclTerraform(this._regex),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCustomDataIdentifierTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCustomDataIdentifier.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCustomDataIdentifierTagPropertyToTerraform(struct?: CcCustomDataIdentifier.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCustomDataIdentifierTagPropertyToHclTerraform(struct?: CcCustomDataIdentifier.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCustomDataIdentifier {
export interface TagProperty {
    /**
    * The tag's key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_custom_data_identifier#key CcCustomDataIdentifier#key}
    */
    readonly key?: string;
    /**
    * The tag's value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_custom_data_identifier#value CcCustomDataIdentifier#value}
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
