// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_context

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcContextProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the context. Must be unique to your account in an AWS Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_context#context_name CcContext#context_name}
    */
    readonly contextName: string;
    /**
    * The context type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_context#context_type CcContext#context_type}
    */
    readonly contextType: string;
    /**
    * The description of the context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_context#description CcContext#description}
    */
    readonly description?: string;
    /**
    * A list of properties to add to the context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_context#properties CcContext#properties}
    */
    readonly properties?: { [key: string]: string };
    /**
    * The source type, ID, and URI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_context#source CcContext#source}
    */
    readonly source: CcContext.SourceProperty;
    /**
    * A list of tags to apply to the context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_context#tags CcContext#tags}
    */
    readonly tags?: CcContext.TagsItemsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_context awscc_sagemaker_context}
*/
export class CcContext extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_context";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcContext resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcContext to import
    * @param importFromId The id of the existing CcContext that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_context#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcContext to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_context", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_context awscc_sagemaker_context} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcContextProps
    */
    public constructor(scope: Construct, id: string, config: CcContextProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_context',
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
        this._contextName = config.contextName;
        this._contextType = config.contextType;
        this._description = config.description;
        this._properties = config.properties;
        this._source.internalValue = config.source;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // context_name - computed: false, optional: false, required: true
    private _contextName?: string; 
    public get contextName() {
        return this.getStringAttribute('context_name');
    }
    public set contextName(value: string) {
        this._contextName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contextNameInput() {
        return this._contextName;
    }

    // context_type - computed: false, optional: false, required: true
    private _contextType?: string; 
    public get contextType() {
        return this.getStringAttribute('context_type');
    }
    public set contextType(value: string) {
        this._contextType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contextTypeInput() {
        return this._contextType;
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
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

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // properties - computed: true, optional: true, required: false
    private _properties?: { [key: string]: string }; 
    public get properties() {
        return this.getStringMapAttribute('properties');
    }
    public set properties(value: { [key: string]: string }) {
        this._properties = value;
    }
    public resetProperties() {
        this._properties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertiesInput() {
        return this._properties;
    }

    // source - computed: false, optional: false, required: true
    private _source = new CcContext.SourcePropertyOutputReference(this, "source");
    public get source() {
        return this._source;
    }
    public putSource(value: CcContext.SourceProperty) {
        this._source.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcContext.TagsItemsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcContext.TagsItemsProperty[] | cdktn.IResolvable) {
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
            context_name: cdktn.stringToTerraform(this._contextName),
            context_type: cdktn.stringToTerraform(this._contextType),
            description: cdktn.stringToTerraform(this._description),
            properties: cdktn.hashMapper(cdktn.stringToTerraform)(this._properties),
            source: ccContextSourcePropertyToTerraform(this._source.internalValue),
            tags: cdktn.listMapper(ccContextTagsItemsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            context_name: {
                value: cdktn.stringToHclTerraform(this._contextName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            context_type: {
                value: cdktn.stringToHclTerraform(this._contextType),
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
            properties: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._properties),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            source: {
                value: ccContextSourcePropertyToHclTerraform(this._source.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcContext.SourceProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccContextTagsItemsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcContext.TagsItemsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccContextSourcePropertyToTerraform(struct?: CcContext.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_id: cdktn.stringToTerraform(struct!.sourceId),
        source_type: cdktn.stringToTerraform(struct!.sourceType),
        source_uri: cdktn.stringToTerraform(struct!.sourceUri),
    }
}


export function ccContextSourcePropertyToHclTerraform(struct?: CcContext.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source_id: {
            value: cdktn.stringToHclTerraform(struct!.sourceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_type: {
            value: cdktn.stringToHclTerraform(struct!.sourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_uri: {
            value: cdktn.stringToHclTerraform(struct!.sourceUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContextTagsItemsPropertyToTerraform(struct?: CcContext.TagsItemsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccContextTagsItemsPropertyToHclTerraform(struct?: CcContext.TagsItemsProperty | cdktn.IResolvable): any {
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


export namespace CcContext {
export interface SourceProperty {
    /**
    * The ID of the source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_context#source_id CcContext#source_id}
    */
    readonly sourceId?: string;
    /**
    * The type of the source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_context#source_type CcContext#source_type}
    */
    readonly sourceType?: string;
    /**
    * The URI of the source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_context#source_uri CcContext#source_uri}
    */
    readonly sourceUri: string;
}
export class SourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sourceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceId = this._sourceId;
        }
        if (this._sourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceType = this._sourceType;
        }
        if (this._sourceUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceUri = this._sourceUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sourceId = undefined;
            this._sourceType = undefined;
            this._sourceUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sourceId = value.sourceId;
            this._sourceType = value.sourceType;
            this._sourceUri = value.sourceUri;
        }
    }

    // source_id - computed: true, optional: true, required: false
    private _sourceId?: string; 
    public get sourceId() {
        return this.getStringAttribute('source_id');
    }
    public set sourceId(value: string) {
        this._sourceId = value;
    }
    public resetSourceId() {
        this._sourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceIdInput() {
        return this._sourceId;
    }

    // source_type - computed: true, optional: true, required: false
    private _sourceType?: string; 
    public get sourceType() {
        return this.getStringAttribute('source_type');
    }
    public set sourceType(value: string) {
        this._sourceType = value;
    }
    public resetSourceType() {
        this._sourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceTypeInput() {
        return this._sourceType;
    }

    // source_uri - computed: false, optional: false, required: true
    private _sourceUri?: string; 
    public get sourceUri() {
        return this.getStringAttribute('source_uri');
    }
    public set sourceUri(value: string) {
        this._sourceUri = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceUriInput() {
        return this._sourceUri;
    }
}
export interface TagsItemsProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_context#key CcContext#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_context#value CcContext#value}
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
