// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_review_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcReviewTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * The review template description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_review_template#description CcReviewTemplate#description}
    */
    readonly description: string;
    /**
    * The lenses applied to the review template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_review_template#lenses CcReviewTemplate#lenses}
    */
    readonly lenses: string[];
    /**
    * The notes associated with the review template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_review_template#notes CcReviewTemplate#notes}
    */
    readonly notes?: string;
    /**
    * The tags assigned to the review template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_review_template#tags CcReviewTemplate#tags}
    */
    readonly tags?: CcReviewTemplate.TagsItemsProperty[] | cdktn.IResolvable;
    /**
    * The name of the review template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_review_template#template_name CcReviewTemplate#template_name}
    */
    readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_review_template awscc_wellarchitected_review_template}
*/
export class CcReviewTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_wellarchitected_review_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcReviewTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcReviewTemplate to import
    * @param importFromId The id of the existing CcReviewTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_review_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcReviewTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wellarchitected_review_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_review_template awscc_wellarchitected_review_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcReviewTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcReviewTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_wellarchitected_review_template',
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
        this._lenses = config.lenses;
        this._notes = config.notes;
        this._tags.internalValue = config.tags;
        this._templateName = config.templateName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // description - computed: false, optional: false, required: true
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // lenses - computed: false, optional: false, required: true
    private _lenses?: string[]; 
    public get lenses() {
        return this.getListAttribute('lenses');
    }
    public set lenses(value: string[]) {
        this._lenses = value;
    }
    // Temporarily expose input value. Use with caution.
    public get lensesInput() {
        return this._lenses;
    }

    // notes - computed: true, optional: true, required: false
    private _notes?: string; 
    public get notes() {
        return this.getStringAttribute('notes');
    }
    public set notes(value: string) {
        this._notes = value;
    }
    public resetNotes() {
        this._notes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notesInput() {
        return this._notes;
    }

    // owner - computed: true, optional: false, required: false
    public get owner() {
        return this.getStringAttribute('owner');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcReviewTemplate.TagsItemsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcReviewTemplate.TagsItemsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // template_arn - computed: true, optional: false, required: false
    public get templateArn() {
        return this.getStringAttribute('template_arn');
    }

    // template_name - computed: false, optional: false, required: true
    private _templateName?: string; 
    public get templateName() {
        return this.getStringAttribute('template_name');
    }
    public set templateName(value: string) {
        this._templateName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get templateNameInput() {
        return this._templateName;
    }

    // update_status - computed: true, optional: false, required: false
    public get updateStatus() {
        return this.getStringAttribute('update_status');
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
            lenses: cdktn.listMapper(cdktn.stringToTerraform, false)(this._lenses),
            notes: cdktn.stringToTerraform(this._notes),
            tags: cdktn.listMapper(ccReviewTemplateTagsItemsPropertyToTerraform, false)(this._tags.internalValue),
            template_name: cdktn.stringToTerraform(this._templateName),
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
            lenses: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._lenses),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            notes: {
                value: cdktn.stringToHclTerraform(this._notes),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccReviewTemplateTagsItemsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcReviewTemplate.TagsItemsPropertyList",
            },
            template_name: {
                value: cdktn.stringToHclTerraform(this._templateName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccReviewTemplateTagsItemsPropertyToTerraform(struct?: CcReviewTemplate.TagsItemsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccReviewTemplateTagsItemsPropertyToHclTerraform(struct?: CcReviewTemplate.TagsItemsProperty | cdktn.IResolvable): any {
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


export namespace CcReviewTemplate {
export interface TagsItemsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_review_template#key CcReviewTemplate#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_review_template#value CcReviewTemplate#value}
    */
    readonly value?: string;
}
export class TagsItemsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsItemsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsItemsProperty | cdktn.IResolvable | undefined) {
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

export class TagsItemsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsItemsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsItemsPropertyOutputReference {
        return new TagsItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
