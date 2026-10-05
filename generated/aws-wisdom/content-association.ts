// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcContentAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The identifier of the associated resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#association CcContentAssociation#association}
    */
    readonly association: CcContentAssociation.AssociationProperty;
    /**
    * The type of association.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#association_type CcContentAssociation#association_type}
    */
    readonly associationType: string;
    /**
    * The identifier of the content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#content_id CcContentAssociation#content_id}
    */
    readonly contentId: string;
    /**
    * The identifier of the knowledge base.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#knowledge_base_id CcContentAssociation#knowledge_base_id}
    */
    readonly knowledgeBaseId: string;
    /**
    * The tags used to organize, track, or control access for this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#tags CcContentAssociation#tags}
    */
    readonly tags?: CcContentAssociation.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association awscc_wisdom_content_association}
*/
export class CcContentAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_wisdom_content_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcContentAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcContentAssociation to import
    * @param importFromId The id of the existing CcContentAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcContentAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_content_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association awscc_wisdom_content_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcContentAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcContentAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_wisdom_content_association',
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
        this._association.internalValue = config.association;
        this._associationType = config.associationType;
        this._contentId = config.contentId;
        this._knowledgeBaseId = config.knowledgeBaseId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // association - computed: false, optional: false, required: true
    private _association = new CcContentAssociation.AssociationPropertyOutputReference(this, "association");
    public get association() {
        return this._association;
    }
    public putAssociation(value: CcContentAssociation.AssociationProperty) {
        this._association.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get associationInput() {
        return this._association.internalValue;
    }

    // association_type - computed: false, optional: false, required: true
    private _associationType?: string; 
    public get associationType() {
        return this.getStringAttribute('association_type');
    }
    public set associationType(value: string) {
        this._associationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get associationTypeInput() {
        return this._associationType;
    }

    // content_arn - computed: true, optional: false, required: false
    public get contentArn() {
        return this.getStringAttribute('content_arn');
    }

    // content_association_arn - computed: true, optional: false, required: false
    public get contentAssociationArn() {
        return this.getStringAttribute('content_association_arn');
    }

    // content_association_id - computed: true, optional: false, required: false
    public get contentAssociationId() {
        return this.getStringAttribute('content_association_id');
    }

    // content_id - computed: false, optional: false, required: true
    private _contentId?: string; 
    public get contentId() {
        return this.getStringAttribute('content_id');
    }
    public set contentId(value: string) {
        this._contentId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentIdInput() {
        return this._contentId;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcContentAssociation.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcContentAssociation.TagsProperty[] | cdktn.IResolvable) {
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
            association: ccContentAssociationAssociationPropertyToTerraform(this._association.internalValue),
            association_type: cdktn.stringToTerraform(this._associationType),
            content_id: cdktn.stringToTerraform(this._contentId),
            knowledge_base_id: cdktn.stringToTerraform(this._knowledgeBaseId),
            tags: cdktn.listMapper(ccContentAssociationTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            association: {
                value: ccContentAssociationAssociationPropertyToHclTerraform(this._association.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcContentAssociation.AssociationProperty",
            },
            association_type: {
                value: cdktn.stringToHclTerraform(this._associationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_id: {
                value: cdktn.stringToHclTerraform(this._contentId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            knowledge_base_id: {
                value: cdktn.stringToHclTerraform(this._knowledgeBaseId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccContentAssociationTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcContentAssociation.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccContentAssociationAmazonConnectGuideAssociationPropertyToTerraform(struct?: CcContentAssociation.AmazonConnectGuideAssociationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        flow_id: cdktn.stringToTerraform(struct!.flowId),
    }
}


export function ccContentAssociationAmazonConnectGuideAssociationPropertyToHclTerraform(struct?: CcContentAssociation.AmazonConnectGuideAssociationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        flow_id: {
            value: cdktn.stringToHclTerraform(struct!.flowId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContentAssociationAssociationPropertyToTerraform(struct?: CcContentAssociation.AssociationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        amazon_connect_guide_association: ccContentAssociationAmazonConnectGuideAssociationPropertyToTerraform(struct!.amazonConnectGuideAssociation),
    }
}


export function ccContentAssociationAssociationPropertyToHclTerraform(struct?: CcContentAssociation.AssociationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        amazon_connect_guide_association: {
            value: ccContentAssociationAmazonConnectGuideAssociationPropertyToHclTerraform(struct!.amazonConnectGuideAssociation),
            isBlock: true,
            type: "struct",
            storageClassType: "AmazonConnectGuideAssociationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContentAssociationTagsPropertyToTerraform(struct?: CcContentAssociation.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccContentAssociationTagsPropertyToHclTerraform(struct?: CcContentAssociation.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcContentAssociation {
export interface AmazonConnectGuideAssociationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#flow_id CcContentAssociation#flow_id}
    */
    readonly flowId?: string;
}
export class AmazonConnectGuideAssociationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AmazonConnectGuideAssociationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._flowId !== undefined) {
            hasAnyValues = true;
            internalValueResult.flowId = this._flowId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AmazonConnectGuideAssociationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._flowId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._flowId = value.flowId;
        }
    }

    // flow_id - computed: true, optional: true, required: false
    private _flowId?: string; 
    public get flowId() {
        return this.getStringAttribute('flow_id');
    }
    public set flowId(value: string) {
        this._flowId = value;
    }
    public resetFlowId() {
        this._flowId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowIdInput() {
        return this._flowId;
    }
}
export interface AssociationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#amazon_connect_guide_association CcContentAssociation#amazon_connect_guide_association}
    */
    readonly amazonConnectGuideAssociation: AmazonConnectGuideAssociationProperty;
}
export class AssociationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AssociationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._amazonConnectGuideAssociation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.amazonConnectGuideAssociation = this._amazonConnectGuideAssociation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssociationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._amazonConnectGuideAssociation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._amazonConnectGuideAssociation.internalValue = value.amazonConnectGuideAssociation;
        }
    }

    // amazon_connect_guide_association - computed: false, optional: false, required: true
    private _amazonConnectGuideAssociation = new AmazonConnectGuideAssociationPropertyOutputReference(this, "amazon_connect_guide_association");
    public get amazonConnectGuideAssociation() {
        return this._amazonConnectGuideAssociation;
    }
    public putAmazonConnectGuideAssociation(value: AmazonConnectGuideAssociationProperty) {
        this._amazonConnectGuideAssociation.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonConnectGuideAssociationInput() {
        return this._amazonConnectGuideAssociation.internalValue;
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#key CcContentAssociation#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#value CcContentAssociation#value}
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
