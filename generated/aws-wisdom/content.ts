// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcContentProps extends cdktn.TerraformMetaArguments {
    /**
    * The identifier of the knowledge base.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content#knowledge_base_id CcContent#knowledge_base_id}
    */
    readonly knowledgeBaseId: string;
    /**
    * A key/value map to store attributes without affecting tagging or recommendations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content#metadata CcContent#metadata}
    */
    readonly metadata?: { [key: string]: string };
    /**
    * The name of the content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content#name CcContent#name}
    */
    readonly name: string;
    /**
    * The URI you want to use for the article.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content#override_link_out_uri CcContent#override_link_out_uri}
    */
    readonly overrideLinkOutUri?: string;
    /**
    * The tags used to organize, track, or control access for this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content#tags CcContent#tags}
    */
    readonly tags?: CcContent.TagsProperty[] | cdktn.IResolvable;
    /**
    * The title of the content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content#title CcContent#title}
    */
    readonly title?: string;
    /**
    * A pointer to the uploaded asset. This value is returned by StartContentUpload.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content#upload_id CcContent#upload_id}
    */
    readonly uploadId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content awscc_wisdom_content}
*/
export class CcContent extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_wisdom_content";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcContent resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcContent to import
    * @param importFromId The id of the existing CcContent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcContent to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_content", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content awscc_wisdom_content} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcContentProps
    */
    public constructor(scope: Construct, id: string, config: CcContentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_wisdom_content',
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
        this._knowledgeBaseId = config.knowledgeBaseId;
        this._metadata = config.metadata;
        this._name = config.name;
        this._overrideLinkOutUri = config.overrideLinkOutUri;
        this._tags.internalValue = config.tags;
        this._title = config.title;
        this._uploadId = config.uploadId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // content_arn - computed: true, optional: false, required: false
    public get contentArn() {
        return this.getStringAttribute('content_arn');
    }

    // content_id - computed: true, optional: false, required: false
    public get contentId() {
        return this.getStringAttribute('content_id');
    }

    // content_type - computed: true, optional: false, required: false
    public get contentType() {
        return this.getStringAttribute('content_type');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // knowledge_base_arn - computed: true, optional: false, required: false
    public get knowledgeBaseArn() {
        return this.getStringAttribute('knowledge_base_arn');
    }

    // knowledge_base_id - computed: false, optional: false, required: true
    private _knowledgeBaseId?: string; 
    public get knowledgeBaseId() {
        return this.getStringAttribute('knowledge_base_id');
    }
    public set knowledgeBaseId(value: string) {
        this._knowledgeBaseId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get knowledgeBaseIdInput() {
        return this._knowledgeBaseId;
    }

    // link_out_uri - computed: true, optional: false, required: false
    public get linkOutUri() {
        return this.getStringAttribute('link_out_uri');
    }

    // metadata - computed: true, optional: true, required: false
    private _metadata?: { [key: string]: string }; 
    public get metadata() {
        return this.getStringMapAttribute('metadata');
    }
    public set metadata(value: { [key: string]: string }) {
        this._metadata = value;
    }
    public resetMetadata() {
        this._metadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataInput() {
        return this._metadata;
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

    // override_link_out_uri - computed: true, optional: true, required: false
    private _overrideLinkOutUri?: string; 
    public get overrideLinkOutUri() {
        return this.getStringAttribute('override_link_out_uri');
    }
    public set overrideLinkOutUri(value: string) {
        this._overrideLinkOutUri = value;
    }
    public resetOverrideLinkOutUri() {
        this._overrideLinkOutUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideLinkOutUriInput() {
        return this._overrideLinkOutUri;
    }

    // revision_id - computed: true, optional: false, required: false
    public get revisionId() {
        return this.getStringAttribute('revision_id');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcContent.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcContent.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // title - computed: true, optional: true, required: false
    private _title?: string; 
    public get title() {
        return this.getStringAttribute('title');
    }
    public set title(value: string) {
        this._title = value;
    }
    public resetTitle() {
        this._title = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get titleInput() {
        return this._title;
    }

    // upload_id - computed: true, optional: true, required: false
    private _uploadId?: string; 
    public get uploadId() {
        return this.getStringAttribute('upload_id');
    }
    public set uploadId(value: string) {
        this._uploadId = value;
    }
    public resetUploadId() {
        this._uploadId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uploadIdInput() {
        return this._uploadId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            knowledge_base_id: cdktn.stringToTerraform(this._knowledgeBaseId),
            metadata: cdktn.hashMapper(cdktn.stringToTerraform)(this._metadata),
            name: cdktn.stringToTerraform(this._name),
            override_link_out_uri: cdktn.stringToTerraform(this._overrideLinkOutUri),
            tags: cdktn.listMapper(ccContentTagsPropertyToTerraform, false)(this._tags.internalValue),
            title: cdktn.stringToTerraform(this._title),
            upload_id: cdktn.stringToTerraform(this._uploadId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            knowledge_base_id: {
                value: cdktn.stringToHclTerraform(this._knowledgeBaseId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metadata: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._metadata),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            override_link_out_uri: {
                value: cdktn.stringToHclTerraform(this._overrideLinkOutUri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccContentTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcContent.TagsPropertyList",
            },
            title: {
                value: cdktn.stringToHclTerraform(this._title),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            upload_id: {
                value: cdktn.stringToHclTerraform(this._uploadId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccContentTagsPropertyToTerraform(struct?: CcContent.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccContentTagsPropertyToHclTerraform(struct?: CcContent.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcContent {
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content#key CcContent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content#value CcContent#value}
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
