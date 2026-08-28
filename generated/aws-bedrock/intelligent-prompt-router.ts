// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_intelligent_prompt_router

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIntelligentPromptRouterProps extends cdktn.TerraformMetaArguments {
    /**
    * Description of the Prompt Router.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_intelligent_prompt_router#description CcIntelligentPromptRouter#description}
    */
    readonly description?: string;
    /**
    * Model configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_intelligent_prompt_router#fallback_model CcIntelligentPromptRouter#fallback_model}
    */
    readonly fallbackModel: CcIntelligentPromptRouter.PromptRouterTargetModelProperty;
    /**
    * List of model configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_intelligent_prompt_router#models CcIntelligentPromptRouter#models}
    */
    readonly models: CcIntelligentPromptRouter.ModelsProperty[] | cdktn.IResolvable;
    /**
    * Name of the Prompt Router.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_intelligent_prompt_router#prompt_router_name CcIntelligentPromptRouter#prompt_router_name}
    */
    readonly promptRouterName: string;
    /**
    * Represents the criteria used for routing requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_intelligent_prompt_router#routing_criteria CcIntelligentPromptRouter#routing_criteria}
    */
    readonly routingCriteria: CcIntelligentPromptRouter.RoutingCriteriaProperty;
    /**
    * List of Tags
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_intelligent_prompt_router#tags CcIntelligentPromptRouter#tags}
    */
    readonly tags?: CcIntelligentPromptRouter.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_intelligent_prompt_router awscc_bedrock_intelligent_prompt_router}
*/
export class CcIntelligentPromptRouter extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrock_intelligent_prompt_router";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIntelligentPromptRouter resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIntelligentPromptRouter to import
    * @param importFromId The id of the existing CcIntelligentPromptRouter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_intelligent_prompt_router#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIntelligentPromptRouter to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_intelligent_prompt_router", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_intelligent_prompt_router awscc_bedrock_intelligent_prompt_router} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIntelligentPromptRouterProps
    */
    public constructor(scope: Construct, id: string, config: CcIntelligentPromptRouterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrock_intelligent_prompt_router',
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
        this._description = config.description;
        this._fallbackModel.internalValue = config.fallbackModel;
        this._models.internalValue = config.models;
        this._promptRouterName = config.promptRouterName;
        this._routingCriteria.internalValue = config.routingCriteria;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // fallback_model - computed: false, optional: false, required: true
    private _fallbackModel = new CcIntelligentPromptRouter.PromptRouterTargetModelPropertyOutputReference(this, "fallback_model");
    public get fallbackModel() {
        return this._fallbackModel;
    }
    public putFallbackModel(value: CcIntelligentPromptRouter.PromptRouterTargetModelProperty) {
        this._fallbackModel.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fallbackModelInput() {
        return this._fallbackModel.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // models - computed: false, optional: false, required: true
    private _models = new CcIntelligentPromptRouter.ModelsPropertyList(this, "models", false);
    public get models() {
        return this._models;
    }
    public putModels(value: CcIntelligentPromptRouter.ModelsProperty[] | cdktn.IResolvable) {
        this._models.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modelsInput() {
        return this._models.internalValue;
    }

    // prompt_router_arn - computed: true, optional: false, required: false
    public get promptRouterArn() {
        return this.getStringAttribute('prompt_router_arn');
    }

    // prompt_router_name - computed: false, optional: false, required: true
    private _promptRouterName?: string; 
    public get promptRouterName() {
        return this.getStringAttribute('prompt_router_name');
    }
    public set promptRouterName(value: string) {
        this._promptRouterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get promptRouterNameInput() {
        return this._promptRouterName;
    }

    // routing_criteria - computed: false, optional: false, required: true
    private _routingCriteria = new CcIntelligentPromptRouter.RoutingCriteriaPropertyOutputReference(this, "routing_criteria");
    public get routingCriteria() {
        return this._routingCriteria;
    }
    public putRoutingCriteria(value: CcIntelligentPromptRouter.RoutingCriteriaProperty) {
        this._routingCriteria.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routingCriteriaInput() {
        return this._routingCriteria.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIntelligentPromptRouter.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIntelligentPromptRouter.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
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
            fallback_model: ccIntelligentPromptRouterPromptRouterTargetModelPropertyToTerraform(this._fallbackModel.internalValue),
            models: cdktn.listMapper(ccIntelligentPromptRouterModelsPropertyToTerraform, false)(this._models.internalValue),
            prompt_router_name: cdktn.stringToTerraform(this._promptRouterName),
            routing_criteria: ccIntelligentPromptRouterRoutingCriteriaPropertyToTerraform(this._routingCriteria.internalValue),
            tags: cdktn.listMapper(ccIntelligentPromptRouterTagPropertyToTerraform, false)(this._tags.internalValue),
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
            fallback_model: {
                value: ccIntelligentPromptRouterPromptRouterTargetModelPropertyToHclTerraform(this._fallbackModel.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIntelligentPromptRouter.PromptRouterTargetModelProperty",
            },
            models: {
                value: cdktn.listMapperHcl(ccIntelligentPromptRouterModelsPropertyToHclTerraform, false)(this._models.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcIntelligentPromptRouter.ModelsPropertyList",
            },
            prompt_router_name: {
                value: cdktn.stringToHclTerraform(this._promptRouterName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            routing_criteria: {
                value: ccIntelligentPromptRouterRoutingCriteriaPropertyToHclTerraform(this._routingCriteria.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIntelligentPromptRouter.RoutingCriteriaProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIntelligentPromptRouterTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcIntelligentPromptRouter.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIntelligentPromptRouterPromptRouterTargetModelPropertyToTerraform(struct?: CcIntelligentPromptRouter.PromptRouterTargetModelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        model_arn: cdktn.stringToTerraform(struct!.modelArn),
    }
}


export function ccIntelligentPromptRouterPromptRouterTargetModelPropertyToHclTerraform(struct?: CcIntelligentPromptRouter.PromptRouterTargetModelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        model_arn: {
            value: cdktn.stringToHclTerraform(struct!.modelArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntelligentPromptRouterModelsPropertyToTerraform(struct?: CcIntelligentPromptRouter.ModelsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        model_arn: cdktn.stringToTerraform(struct!.modelArn),
    }
}


export function ccIntelligentPromptRouterModelsPropertyToHclTerraform(struct?: CcIntelligentPromptRouter.ModelsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        model_arn: {
            value: cdktn.stringToHclTerraform(struct!.modelArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntelligentPromptRouterRoutingCriteriaPropertyToTerraform(struct?: CcIntelligentPromptRouter.RoutingCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        response_quality_difference: cdktn.numberToTerraform(struct!.responseQualityDifference),
    }
}


export function ccIntelligentPromptRouterRoutingCriteriaPropertyToHclTerraform(struct?: CcIntelligentPromptRouter.RoutingCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        response_quality_difference: {
            value: cdktn.numberToHclTerraform(struct!.responseQualityDifference),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntelligentPromptRouterTagPropertyToTerraform(struct?: CcIntelligentPromptRouter.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIntelligentPromptRouterTagPropertyToHclTerraform(struct?: CcIntelligentPromptRouter.TagProperty | cdktn.IResolvable): any {
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


export namespace CcIntelligentPromptRouter {
export interface PromptRouterTargetModelProperty {
    /**
    * Arn of underlying model which are added in the Prompt Router.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_intelligent_prompt_router#model_arn CcIntelligentPromptRouter#model_arn}
    */
    readonly modelArn: string;
}
export class PromptRouterTargetModelPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PromptRouterTargetModelProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._modelArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelArn = this._modelArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PromptRouterTargetModelProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._modelArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._modelArn = value.modelArn;
        }
    }

    // model_arn - computed: false, optional: false, required: true
    private _modelArn?: string; 
    public get modelArn() {
        return this.getStringAttribute('model_arn');
    }
    public set modelArn(value: string) {
        this._modelArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modelArnInput() {
        return this._modelArn;
    }
}
export interface ModelsProperty {
    /**
    * Arn of underlying model which are added in the Prompt Router.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_intelligent_prompt_router#model_arn CcIntelligentPromptRouter#model_arn}
    */
    readonly modelArn: string;
}
export class ModelsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ModelsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._modelArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelArn = this._modelArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._modelArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._modelArn = value.modelArn;
        }
    }

    // model_arn - computed: false, optional: false, required: true
    private _modelArn?: string; 
    public get modelArn() {
        return this.getStringAttribute('model_arn');
    }
    public set modelArn(value: string) {
        this._modelArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modelArnInput() {
        return this._modelArn;
    }
}

export class ModelsPropertyList extends cdktn.ComplexList {
    public internalValue? : ModelsProperty[] | cdktn.IResolvable

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
    public get(index: number): ModelsPropertyOutputReference {
        return new ModelsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RoutingCriteriaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_intelligent_prompt_router#response_quality_difference CcIntelligentPromptRouter#response_quality_difference}
    */
    readonly responseQualityDifference: number;
}
export class RoutingCriteriaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RoutingCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._responseQualityDifference !== undefined) {
            hasAnyValues = true;
            internalValueResult.responseQualityDifference = this._responseQualityDifference;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RoutingCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._responseQualityDifference = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._responseQualityDifference = value.responseQualityDifference;
        }
    }

    // response_quality_difference - computed: false, optional: false, required: true
    private _responseQualityDifference?: number; 
    public get responseQualityDifference() {
        return this.getNumberAttribute('response_quality_difference');
    }
    public set responseQualityDifference(value: number) {
        this._responseQualityDifference = value;
    }
    // Temporarily expose input value. Use with caution.
    public get responseQualityDifferenceInput() {
        return this._responseQualityDifference;
    }
}
export interface TagProperty {
    /**
    * Tag Key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_intelligent_prompt_router#key CcIntelligentPromptRouter#key}
    */
    readonly key?: string;
    /**
    * Tag Value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_intelligent_prompt_router#value CcIntelligentPromptRouter#value}
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
