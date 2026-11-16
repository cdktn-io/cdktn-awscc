// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/personalize_recommender

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRecommenderProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the Domain dataset group that the recommender is created for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/personalize_recommender#dataset_group_arn CcRecommender#dataset_group_arn}
    */
    readonly datasetGroupArn: string;
    /**
    * The name of the recommender.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/personalize_recommender#name CcRecommender#name}
    */
    readonly name: string;
    /**
    * The ARN of the recipe (Domain dataset group use case) that the recommender uses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/personalize_recommender#recipe_arn CcRecommender#recipe_arn}
    */
    readonly recipeArn: string;
    /**
    * The configuration details of the recommender.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/personalize_recommender#recommender_config CcRecommender#recommender_config}
    */
    readonly recommenderConfig?: CcRecommender.RecommenderConfigProperty;
    /**
    * Tags to associate with the recommender.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/personalize_recommender#tags CcRecommender#tags}
    */
    readonly tags?: CcRecommender.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/personalize_recommender awscc_personalize_recommender}
*/
export class CcRecommender extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_personalize_recommender";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRecommender resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRecommender to import
    * @param importFromId The id of the existing CcRecommender that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/personalize_recommender#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRecommender to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_personalize_recommender", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/personalize_recommender awscc_personalize_recommender} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRecommenderProps
    */
    public constructor(scope: Construct, id: string, config: CcRecommenderProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_personalize_recommender',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.110.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._datasetGroupArn = config.datasetGroupArn;
        this._name = config.name;
        this._recipeArn = config.recipeArn;
        this._recommenderConfig.internalValue = config.recommenderConfig;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_date_time - computed: true, optional: false, required: false
    public get creationDateTime() {
        return this.getStringAttribute('creation_date_time');
    }

    // dataset_group_arn - computed: false, optional: false, required: true
    private _datasetGroupArn?: string; 
    public get datasetGroupArn() {
        return this.getStringAttribute('dataset_group_arn');
    }
    public set datasetGroupArn(value: string) {
        this._datasetGroupArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetGroupArnInput() {
        return this._datasetGroupArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_date_time - computed: true, optional: false, required: false
    public get lastUpdatedDateTime() {
        return this.getStringAttribute('last_updated_date_time');
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

    // recipe_arn - computed: false, optional: false, required: true
    private _recipeArn?: string; 
    public get recipeArn() {
        return this.getStringAttribute('recipe_arn');
    }
    public set recipeArn(value: string) {
        this._recipeArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recipeArnInput() {
        return this._recipeArn;
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

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRecommender.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRecommender.TagsProperty[] | cdktn.IResolvable) {
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
            dataset_group_arn: cdktn.stringToTerraform(this._datasetGroupArn),
            name: cdktn.stringToTerraform(this._name),
            recipe_arn: cdktn.stringToTerraform(this._recipeArn),
            recommender_config: ccRecommenderRecommenderConfigPropertyToTerraform(this._recommenderConfig.internalValue),
            tags: cdktn.listMapper(ccRecommenderTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            dataset_group_arn: {
                value: cdktn.stringToHclTerraform(this._datasetGroupArn),
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
            recipe_arn: {
                value: cdktn.stringToHclTerraform(this._recipeArn),
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
            tags: {
                value: cdktn.listMapperHcl(ccRecommenderTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcRecommender.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRecommenderTrainingDataConfigPropertyToTerraform(struct?: CcRecommender.TrainingDataConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        excluded_dataset_columns: cdktn.hashMapper(cdktn.listMapper(cdktn.stringToTerraform, false))(struct!.excludedDatasetColumns),
    }
}


export function ccRecommenderTrainingDataConfigPropertyToHclTerraform(struct?: CcRecommender.TrainingDataConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        excluded_dataset_columns: {
            value: cdktn.hashMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false))(struct!.excludedDatasetColumns),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
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
        enable_metadata_with_recommendations: cdktn.booleanToTerraform(struct!.enableMetadataWithRecommendations),
        item_exploration_config: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.itemExplorationConfig),
        min_recommendation_requests_per_second: cdktn.numberToTerraform(struct!.minRecommendationRequestsPerSecond),
        training_data_config: ccRecommenderTrainingDataConfigPropertyToTerraform(struct!.trainingDataConfig),
    }
}


export function ccRecommenderRecommenderConfigPropertyToHclTerraform(struct?: CcRecommender.RecommenderConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_metadata_with_recommendations: {
            value: cdktn.booleanToHclTerraform(struct!.enableMetadataWithRecommendations),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        item_exploration_config: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.itemExplorationConfig),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        min_recommendation_requests_per_second: {
            value: cdktn.numberToHclTerraform(struct!.minRecommendationRequestsPerSecond),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        training_data_config: {
            value: ccRecommenderTrainingDataConfigPropertyToHclTerraform(struct!.trainingDataConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "TrainingDataConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRecommenderTagsPropertyToTerraform(struct?: CcRecommender.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRecommenderTagsPropertyToHclTerraform(struct?: CcRecommender.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcRecommender {
export interface TrainingDataConfigProperty {
    /**
    * Specifies the columns to exclude from training. Each key is a dataset type, and each value is a list of columns.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/personalize_recommender#excluded_dataset_columns CcRecommender#excluded_dataset_columns}
    */
    readonly excludedDatasetColumns?: { [key: string]: string[] } | cdktn.IResolvable;
}
export class TrainingDataConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TrainingDataConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._excludedDatasetColumns !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludedDatasetColumns = this._excludedDatasetColumns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrainingDataConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._excludedDatasetColumns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._excludedDatasetColumns = value.excludedDatasetColumns;
        }
    }

    // excluded_dataset_columns - computed: true, optional: true, required: false
    private _excludedDatasetColumns?: { [key: string]: string[] } | cdktn.IResolvable; 
    public get excludedDatasetColumns() {
        return this.interpolationForAttribute('excluded_dataset_columns');
    }
    public set excludedDatasetColumns(value: { [key: string]: string[] } | cdktn.IResolvable) {
        this._excludedDatasetColumns = value;
    }
    public resetExcludedDatasetColumns() {
        this._excludedDatasetColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedDatasetColumnsInput() {
        return this._excludedDatasetColumns;
    }
}
export interface RecommenderConfigProperty {
    /**
    * Whether metadata with recommendations is enabled for the recommender.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/personalize_recommender#enable_metadata_with_recommendations CcRecommender#enable_metadata_with_recommendations}
    */
    readonly enableMetadataWithRecommendations?: boolean | cdktn.IResolvable;
    /**
    * Specifies the exploration configuration hyperparameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/personalize_recommender#item_exploration_config CcRecommender#item_exploration_config}
    */
    readonly itemExplorationConfig?: { [key: string]: string };
    /**
    * Specifies the requested minimum provisioned recommendation requests per second.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/personalize_recommender#min_recommendation_requests_per_second CcRecommender#min_recommendation_requests_per_second}
    */
    readonly minRecommendationRequestsPerSecond?: number;
    /**
    * The training data configuration to use when creating a domain recommender.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/personalize_recommender#training_data_config CcRecommender#training_data_config}
    */
    readonly trainingDataConfig?: TrainingDataConfigProperty;
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
        if (this._enableMetadataWithRecommendations !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableMetadataWithRecommendations = this._enableMetadataWithRecommendations;
        }
        if (this._itemExplorationConfig !== undefined) {
            hasAnyValues = true;
            internalValueResult.itemExplorationConfig = this._itemExplorationConfig;
        }
        if (this._minRecommendationRequestsPerSecond !== undefined) {
            hasAnyValues = true;
            internalValueResult.minRecommendationRequestsPerSecond = this._minRecommendationRequestsPerSecond;
        }
        if (this._trainingDataConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingDataConfig = this._trainingDataConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RecommenderConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableMetadataWithRecommendations = undefined;
            this._itemExplorationConfig = undefined;
            this._minRecommendationRequestsPerSecond = undefined;
            this._trainingDataConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableMetadataWithRecommendations = value.enableMetadataWithRecommendations;
            this._itemExplorationConfig = value.itemExplorationConfig;
            this._minRecommendationRequestsPerSecond = value.minRecommendationRequestsPerSecond;
            this._trainingDataConfig.internalValue = value.trainingDataConfig;
        }
    }

    // enable_metadata_with_recommendations - computed: true, optional: true, required: false
    private _enableMetadataWithRecommendations?: boolean | cdktn.IResolvable; 
    public get enableMetadataWithRecommendations() {
        return this.getBooleanAttribute('enable_metadata_with_recommendations');
    }
    public set enableMetadataWithRecommendations(value: boolean | cdktn.IResolvable) {
        this._enableMetadataWithRecommendations = value;
    }
    public resetEnableMetadataWithRecommendations() {
        this._enableMetadataWithRecommendations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableMetadataWithRecommendationsInput() {
        return this._enableMetadataWithRecommendations;
    }

    // item_exploration_config - computed: true, optional: true, required: false
    private _itemExplorationConfig?: { [key: string]: string }; 
    public get itemExplorationConfig() {
        return this.getStringMapAttribute('item_exploration_config');
    }
    public set itemExplorationConfig(value: { [key: string]: string }) {
        this._itemExplorationConfig = value;
    }
    public resetItemExplorationConfig() {
        this._itemExplorationConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get itemExplorationConfigInput() {
        return this._itemExplorationConfig;
    }

    // min_recommendation_requests_per_second - computed: true, optional: true, required: false
    private _minRecommendationRequestsPerSecond?: number; 
    public get minRecommendationRequestsPerSecond() {
        return this.getNumberAttribute('min_recommendation_requests_per_second');
    }
    public set minRecommendationRequestsPerSecond(value: number) {
        this._minRecommendationRequestsPerSecond = value;
    }
    public resetMinRecommendationRequestsPerSecond() {
        this._minRecommendationRequestsPerSecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minRecommendationRequestsPerSecondInput() {
        return this._minRecommendationRequestsPerSecond;
    }

    // training_data_config - computed: true, optional: true, required: false
    private _trainingDataConfig = new TrainingDataConfigPropertyOutputReference(this, "training_data_config");
    public get trainingDataConfig() {
        return this._trainingDataConfig;
    }
    public putTrainingDataConfig(value: TrainingDataConfigProperty) {
        this._trainingDataConfig.internalValue = value;
    }
    public resetTrainingDataConfig() {
        this._trainingDataConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingDataConfigInput() {
        return this._trainingDataConfig.internalValue;
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/personalize_recommender#key CcRecommender#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/personalize_recommender#value CcRecommender#value}
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
