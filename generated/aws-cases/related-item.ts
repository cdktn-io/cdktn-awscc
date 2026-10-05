// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cases_related_item

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRelatedItemProps extends cdktn.TerraformMetaArguments {
    /**
    * A unique identifier of the case.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cases_related_item#case_id CcRelatedItem#case_id}
    */
    readonly caseId: string;
    /**
    * The content of a related item to be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cases_related_item#content CcRelatedItem#content}
    */
    readonly content: CcRelatedItem.ContentProperty;
    /**
    * The unique identifier of the Cases domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cases_related_item#domain_id CcRelatedItem#domain_id}
    */
    readonly domainId: string;
    /**
    * A list of tags on the related item.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cases_related_item#tags CcRelatedItem#tags}
    */
    readonly tags?: CcRelatedItem.TagsProperty[] | cdktn.IResolvable;
    /**
    * The type of a related item.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cases_related_item#type CcRelatedItem#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cases_related_item awscc_cases_related_item}
*/
export class CcRelatedItem extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cases_related_item";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRelatedItem resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRelatedItem to import
    * @param importFromId The id of the existing CcRelatedItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cases_related_item#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRelatedItem to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cases_related_item", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cases_related_item awscc_cases_related_item} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRelatedItemProps
    */
    public constructor(scope: Construct, id: string, config: CcRelatedItemProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cases_related_item',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._caseId = config.caseId;
        this._content.internalValue = config.content;
        this._domainId = config.domainId;
        this._tags.internalValue = config.tags;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // case_id - computed: false, optional: false, required: true
    private _caseId?: string; 
    public get caseId() {
        return this.getStringAttribute('case_id');
    }
    public set caseId(value: string) {
        this._caseId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get caseIdInput() {
        return this._caseId;
    }

    // content - computed: false, optional: false, required: true
    private _content = new CcRelatedItem.ContentPropertyOutputReference(this, "content");
    public get content() {
        return this._content;
    }
    public putContent(value: CcRelatedItem.ContentProperty) {
        this._content.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
        return this._content.internalValue;
    }

    // domain_id - computed: false, optional: false, required: true
    private _domainId?: string; 
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }
    public set domainId(value: string) {
        this._domainId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIdInput() {
        return this._domainId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // related_item_arn - computed: true, optional: false, required: false
    public get relatedItemArn() {
        return this.getStringAttribute('related_item_arn');
    }

    // related_item_id - computed: true, optional: false, required: false
    public get relatedItemId() {
        return this.getStringAttribute('related_item_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRelatedItem.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRelatedItem.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            case_id: cdktn.stringToTerraform(this._caseId),
            content: ccRelatedItemContentPropertyToTerraform(this._content.internalValue),
            domain_id: cdktn.stringToTerraform(this._domainId),
            tags: cdktn.listMapper(ccRelatedItemTagsPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            case_id: {
                value: cdktn.stringToHclTerraform(this._caseId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content: {
                value: ccRelatedItemContentPropertyToHclTerraform(this._content.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRelatedItem.ContentProperty",
            },
            domain_id: {
                value: cdktn.stringToHclTerraform(this._domainId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRelatedItemTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRelatedItem.TagsPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRelatedItemCommentPropertyToTerraform(struct?: CcRelatedItem.CommentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        body: cdktn.stringToTerraform(struct!.body),
        content_type: cdktn.stringToTerraform(struct!.contentType),
    }
}


export function ccRelatedItemCommentPropertyToHclTerraform(struct?: CcRelatedItem.CommentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        body: {
            value: cdktn.stringToHclTerraform(struct!.body),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRelatedItemContentPropertyToTerraform(struct?: CcRelatedItem.ContentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comment: ccRelatedItemCommentPropertyToTerraform(struct!.comment),
    }
}


export function ccRelatedItemContentPropertyToHclTerraform(struct?: CcRelatedItem.ContentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comment: {
            value: ccRelatedItemCommentPropertyToHclTerraform(struct!.comment),
            isBlock: true,
            type: "struct",
            storageClassType: "CommentProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRelatedItemTagsPropertyToTerraform(struct?: CcRelatedItem.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRelatedItemTagsPropertyToHclTerraform(struct?: CcRelatedItem.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcRelatedItem {
export interface CommentProperty {
    /**
    * Text in the body of a comment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cases_related_item#body CcRelatedItem#body}
    */
    readonly body?: string;
    /**
    * Type of the text in the comment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cases_related_item#content_type CcRelatedItem#content_type}
    */
    readonly contentType?: string;
}
export class CommentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CommentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._body !== undefined) {
            hasAnyValues = true;
            internalValueResult.body = this._body;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._body = undefined;
            this._contentType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._body = value.body;
            this._contentType = value.contentType;
        }
    }

    // body - computed: true, optional: true, required: false
    private _body?: string; 
    public get body() {
        return this.getStringAttribute('body');
    }
    public set body(value: string) {
        this._body = value;
    }
    public resetBody() {
        this._body = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bodyInput() {
        return this._body;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }
}
export interface ContentProperty {
    /**
    * Represents a comment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cases_related_item#comment CcRelatedItem#comment}
    */
    readonly comment?: CommentProperty;
}
export class ContentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comment?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.comment = this._comment?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comment.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comment.internalValue = value.comment;
        }
    }

    // comment - computed: true, optional: true, required: false
    private _comment = new CommentPropertyOutputReference(this, "comment");
    public get comment() {
        return this._comment;
    }
    public putComment(value: CommentProperty) {
        this._comment.internalValue = value;
    }
    public resetComment() {
        this._comment.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
        return this._comment.internalValue;
    }
}
export interface TagsProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cases_related_item#key CcRelatedItem#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cases_related_item#value CcRelatedItem#value}
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
