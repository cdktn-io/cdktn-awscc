// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_recommender

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRecommenderProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the recommender.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_recommender#description CcRecommender#description}
    */
    readonly description?: string;
    /**
    * The name of the domain for which the recommender will be created
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_recommender#domain_name CcRecommender#domain_name}
    */
    readonly domainName: string;
    /**
    * Configuration for the recommender
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_recommender#recommender_config CcRecommender#recommender_config}
    */
    readonly recommenderConfig?: CcRecommender.RecommenderConfigProperty;
    /**
    * The name of the recommender
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_recommender#recommender_name CcRecommender#recommender_name}
    */
    readonly recommenderName: string;
    /**
    * The name of the recommender recipe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_recommender#recommender_recipe_name CcRecommender#recommender_recipe_name}
    */
    readonly recommenderRecipeName: string;
    /**
    * The tags used to organize, track, or control access for this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_recommender#tags CcRecommender#tags}
    */
    readonly tags?: CcRecommender.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_recommender awscc_customerprofiles_recommender}
*/
export class CcRecommender extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_customerprofiles_recommender";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRecommender resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRecommender to import
    * @param importFromId The id of the existing CcRecommender that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_recommender#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRecommender to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_customerprofiles_recommender", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_recommender awscc_customerprofiles_recommender} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRecommenderProps
    */
    public constructor(scope: Construct, id: string, config: CcRecommenderProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_customerprofiles_recommender',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
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
        this._domainName = config.domainName;
        this._recommenderConfig.internalValue = config.recommenderConfig;
        this._recommenderName = config.recommenderName;
        this._recommenderRecipeName = config.recommenderRecipeName;
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

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
        return this._domainName;
    }

    // failure_reason - computed: true, optional: false, required: false
    public get failureReason() {
        return this.getStringAttribute('failure_reason');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_at - computed: true, optional: false, required: false
    public get lastUpdatedAt() {
        return this.getStringAttribute('last_updated_at');
    }

    // latest_recommender_update - computed: true, optional: false, required: false
    private _latestRecommenderUpdate = new CcRecommender.LatestRecommenderUpdatePropertyOutputReference(this, "latest_recommender_update");
    public get latestRecommenderUpdate() {
        return this._latestRecommenderUpdate;
    }

    // recommender_arn - computed: true, optional: false, required: false
    public get recommenderArn() {
        return this.getStringAttribute('recommender_arn');
    }

    // recommender_config - computed: true, optional: true, required: false
    private _recommenderConfig = new CcRecommender.RecommenderConfigPropertyOutputReference(this, "recommender_config");
    public get recommenderConfig() {
        return this._recommenderConfig;
    }
    public putRecommenderConfig(value: CcRecommender.RecommenderConfigProperty) {
        this._recommenderConfig.internalValue = value;
    }
    public resetRecommenderConfig() {
        this._recommenderConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recommenderConfigInput() {
        return this._recommenderConfig.internalValue;
    }

    // recommender_name - computed: false, optional: false, required: true
    private _recommenderName?: string; 
    public get recommenderName() {
        return this.getStringAttribute('recommender_name');
    }
    public set recommenderName(value: string) {
        this._recommenderName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recommenderNameInput() {
        return this._recommenderName;
    }

    // recommender_recipe_name - computed: false, optional: false, required: true
    private _recommenderRecipeName?: string; 
    public get recommenderRecipeName() {
        return this.getStringAttribute('recommender_recipe_name');
    }
    public set recommenderRecipeName(value: string) {
        this._recommenderRecipeName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recommenderRecipeNameInput() {
        return this._recommenderRecipeName;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRecommender.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRecommender.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // training_metrics - computed: true, optional: false, required: false
    private _trainingMetrics = new CcRecommender.TrainingMetricsPropertyList(this, "training_metrics", false);
    public get trainingMetrics() {
        return this._trainingMetrics;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            domain_name: cdktn.stringToTerraform(this._domainName),
            recommender_config: ccRecommenderRecommenderConfigPropertyToTerraform(this._recommenderConfig.internalValue),
            recommender_name: cdktn.stringToTerraform(this._recommenderName),
            recommender_recipe_name: cdktn.stringToTerraform(this._recommenderRecipeName),
            tags: cdktn.listMapper(ccRecommenderTagPropertyToTerraform, false)(this._tags.internalValue),
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
            domain_name: {
                value: cdktn.stringToHclTerraform(this._domainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            recommender_config: {
                value: ccRecommenderRecommenderConfigPropertyToHclTerraform(this._recommenderConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRecommender.RecommenderConfigProperty",
            },
            recommender_name: {
                value: cdktn.stringToHclTerraform(this._recommenderName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            recommender_recipe_name: {
                value: cdktn.stringToHclTerraform(this._recommenderRecipeName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRecommenderTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRecommender.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRecommenderEventParametersListPropertyToTerraform(struct?: CcRecommender.EventParametersListProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccRecommenderEventParametersListPropertyToHclTerraform(struct?: CcRecommender.EventParametersListProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigPropertyToTerraform(struct?: CcRecommender.LatestRecommenderUpdateRecommenderConfigEventsConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigPropertyToHclTerraform(struct?: CcRecommender.LatestRecommenderUpdateRecommenderConfigEventsConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccRecommenderLatestRecommenderUpdateRecommenderConfigPropertyToTerraform(struct?: CcRecommender.LatestRecommenderUpdateRecommenderConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccRecommenderLatestRecommenderUpdateRecommenderConfigPropertyToHclTerraform(struct?: CcRecommender.LatestRecommenderUpdateRecommenderConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccRecommenderLatestRecommenderUpdatePropertyToTerraform(struct?: CcRecommender.LatestRecommenderUpdateProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccRecommenderLatestRecommenderUpdatePropertyToHclTerraform(struct?: CcRecommender.LatestRecommenderUpdateProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccRecommenderEventParametersPropertyToTerraform(struct?: CcRecommender.EventParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_type: cdktn.stringToTerraform(struct!.eventType),
        event_value_threshold: cdktn.numberToTerraform(struct!.eventValueThreshold),
    }
}


export function ccRecommenderEventParametersPropertyToHclTerraform(struct?: CcRecommender.EventParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_type: {
            value: cdktn.stringToHclTerraform(struct!.eventType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        event_value_threshold: {
            value: cdktn.numberToHclTerraform(struct!.eventValueThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRecommenderEventsConfigPropertyToTerraform(struct?: CcRecommender.EventsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_parameters_list: cdktn.listMapper(ccRecommenderEventParametersPropertyToTerraform, false)(struct!.eventParametersList),
    }
}


export function ccRecommenderEventsConfigPropertyToHclTerraform(struct?: CcRecommender.EventsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_parameters_list: {
            value: cdktn.listMapperHcl(ccRecommenderEventParametersPropertyToHclTerraform, false)(struct!.eventParametersList),
            isBlock: true,
            type: "list",
            storageClassType: "EventParametersPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRecommenderRecommenderConfigPropertyToTerraform(struct?: CcRecommender.RecommenderConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        events_config: ccRecommenderEventsConfigPropertyToTerraform(struct!.eventsConfig),
    }
}


export function ccRecommenderRecommenderConfigPropertyToHclTerraform(struct?: CcRecommender.RecommenderConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        events_config: {
            value: ccRecommenderEventsConfigPropertyToHclTerraform(struct!.eventsConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "EventsConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRecommenderTagPropertyToTerraform(struct?: CcRecommender.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRecommenderTagPropertyToHclTerraform(struct?: CcRecommender.TagProperty | cdktn.IResolvable): any {
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


export function ccRecommenderMetricsPropertyToTerraform(struct?: CcRecommender.MetricsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccRecommenderMetricsPropertyToHclTerraform(struct?: CcRecommender.MetricsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccRecommenderTrainingMetricsPropertyToTerraform(struct?: CcRecommender.TrainingMetricsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccRecommenderTrainingMetricsPropertyToHclTerraform(struct?: CcRecommender.TrainingMetricsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcRecommender {
export interface EventParametersListProperty {
}
export class EventParametersListPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): EventParametersListProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventParametersListProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // event_type - computed: true, optional: false, required: false
    public get eventType() {
        return this.getStringAttribute('event_type');
    }

    // event_value_threshold - computed: true, optional: false, required: false
    public get eventValueThreshold() {
        return this.getNumberAttribute('event_value_threshold');
    }
}

export class EventParametersListPropertyList extends cdktn.ComplexList {

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
    public get(index: number): EventParametersListPropertyOutputReference {
        return new EventParametersListPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LatestRecommenderUpdateRecommenderConfigEventsConfigProperty {
}
export class LatestRecommenderUpdateRecommenderConfigEventsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LatestRecommenderUpdateRecommenderConfigEventsConfigProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LatestRecommenderUpdateRecommenderConfigEventsConfigProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // event_parameters_list - computed: true, optional: false, required: false
    private _eventParametersList = new EventParametersListPropertyList(this, "event_parameters_list", false);
    public get eventParametersList() {
        return this._eventParametersList;
    }
}
export interface LatestRecommenderUpdateRecommenderConfigProperty {
}
export class LatestRecommenderUpdateRecommenderConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LatestRecommenderUpdateRecommenderConfigProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LatestRecommenderUpdateRecommenderConfigProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // events_config - computed: true, optional: false, required: false
    private _eventsConfig = new LatestRecommenderUpdateRecommenderConfigEventsConfigPropertyOutputReference(this, "events_config");
    public get eventsConfig() {
        return this._eventsConfig;
    }
}
export interface LatestRecommenderUpdateProperty {
}
export class LatestRecommenderUpdatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LatestRecommenderUpdateProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LatestRecommenderUpdateProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // creation_date_time - computed: true, optional: false, required: false
    public get creationDateTime() {
        return this.getStringAttribute('creation_date_time');
    }

    // failure_reason - computed: true, optional: false, required: false
    public get failureReason() {
        return this.getStringAttribute('failure_reason');
    }

    // last_updated_date_time - computed: true, optional: false, required: false
    public get lastUpdatedDateTime() {
        return this.getStringAttribute('last_updated_date_time');
    }

    // recommender_config - computed: true, optional: false, required: false
    private _recommenderConfig = new LatestRecommenderUpdateRecommenderConfigPropertyOutputReference(this, "recommender_config");
    public get recommenderConfig() {
        return this._recommenderConfig;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }
}
export interface EventParametersProperty {
    /**
    * The type of event
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_recommender#event_type CcRecommender#event_type}
    */
    readonly eventType?: string;
    /**
    * The threshold of the event type. Only events with a value greater or equal to this threshold will be considered for solution creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_recommender#event_value_threshold CcRecommender#event_value_threshold}
    */
    readonly eventValueThreshold?: number;
}
export class EventParametersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EventParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventType !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventType = this._eventType;
        }
        if (this._eventValueThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventValueThreshold = this._eventValueThreshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventType = undefined;
            this._eventValueThreshold = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventType = value.eventType;
            this._eventValueThreshold = value.eventValueThreshold;
        }
    }

    // event_type - computed: true, optional: true, required: false
    private _eventType?: string; 
    public get eventType() {
        return this.getStringAttribute('event_type');
    }
    public set eventType(value: string) {
        this._eventType = value;
    }
    public resetEventType() {
        this._eventType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventTypeInput() {
        return this._eventType;
    }

    // event_value_threshold - computed: true, optional: true, required: false
    private _eventValueThreshold?: number; 
    public get eventValueThreshold() {
        return this.getNumberAttribute('event_value_threshold');
    }
    public set eventValueThreshold(value: number) {
        this._eventValueThreshold = value;
    }
    public resetEventValueThreshold() {
        this._eventValueThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventValueThresholdInput() {
        return this._eventValueThreshold;
    }
}

export class EventParametersPropertyList extends cdktn.ComplexList {
    public internalValue? : EventParametersProperty[] | cdktn.IResolvable

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
    public get(index: number): EventParametersPropertyOutputReference {
        return new EventParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EventsConfigProperty {
    /**
    * List of event parameters with their value thresholds
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_recommender#event_parameters_list CcRecommender#event_parameters_list}
    */
    readonly eventParametersList?: EventParametersProperty[] | cdktn.IResolvable;
}
export class EventsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EventsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventParametersList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventParametersList = this._eventParametersList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventParametersList.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventParametersList.internalValue = value.eventParametersList;
        }
    }

    // event_parameters_list - computed: true, optional: true, required: false
    private _eventParametersList = new EventParametersPropertyList(this, "event_parameters_list", false);
    public get eventParametersList() {
        return this._eventParametersList;
    }
    public putEventParametersList(value: EventParametersProperty[] | cdktn.IResolvable) {
        this._eventParametersList.internalValue = value;
    }
    public resetEventParametersList() {
        this._eventParametersList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventParametersListInput() {
        return this._eventParametersList.internalValue;
    }
}
export interface RecommenderConfigProperty {
    /**
    * Configuration for events used in the recommender
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_recommender#events_config CcRecommender#events_config}
    */
    readonly eventsConfig?: EventsConfigProperty;
}
export class RecommenderConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RecommenderConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventsConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventsConfig = this._eventsConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RecommenderConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventsConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventsConfig.internalValue = value.eventsConfig;
        }
    }

    // events_config - computed: true, optional: true, required: false
    private _eventsConfig = new EventsConfigPropertyOutputReference(this, "events_config");
    public get eventsConfig() {
        return this._eventsConfig;
    }
    public putEventsConfig(value: EventsConfigProperty) {
        this._eventsConfig.internalValue = value;
    }
    public resetEventsConfig() {
        this._eventsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventsConfigInput() {
        return this._eventsConfig.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_recommender#key CcRecommender#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_recommender#value CcRecommender#value}
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
export interface MetricsProperty {
}
export class MetricsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // coverage - computed: true, optional: false, required: false
    public get coverage() {
        return this.getNumberAttribute('coverage');
    }

    // freshness - computed: true, optional: false, required: false
    public get freshness() {
        return this.getNumberAttribute('freshness');
    }

    // hit - computed: true, optional: false, required: false
    public get hit() {
        return this.getNumberAttribute('hit');
    }

    // popularity - computed: true, optional: false, required: false
    public get popularity() {
        return this.getNumberAttribute('popularity');
    }

    // recall - computed: true, optional: false, required: false
    public get recall() {
        return this.getNumberAttribute('recall');
    }

    // similarity - computed: true, optional: false, required: false
    public get similarity() {
        return this.getNumberAttribute('similarity');
    }
}
export interface TrainingMetricsProperty {
}
export class TrainingMetricsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TrainingMetricsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrainingMetricsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // metrics - computed: true, optional: false, required: false
    private _metrics = new MetricsPropertyOutputReference(this, "metrics");
    public get metrics() {
        return this._metrics;
    }

    // time - computed: true, optional: false, required: false
    public get time() {
        return this.getStringAttribute('time');
    }
}

export class TrainingMetricsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): TrainingMetricsPropertyOutputReference {
        return new TrainingMetricsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
