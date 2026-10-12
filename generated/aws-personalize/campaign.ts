// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCampaignProps extends cdktn.TerraformMetaArguments {
    /**
    * The configuration details of a campaign.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#campaign_config CcCampaign#campaign_config}
    */
    readonly campaignConfig?: CcCampaign.CampaignConfigProperty;
    /**
    * Specifies the requested minimum provisioned transactions per second.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#min_provisioned_tps CcCampaign#min_provisioned_tps}
    */
    readonly minProvisionedTps?: number;
    /**
    * The name of the campaign.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#name CcCampaign#name}
    */
    readonly name: string;
    /**
    * The ARN of the solution version to deploy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#solution_version_arn CcCampaign#solution_version_arn}
    */
    readonly solutionVersionArn: string;
    /**
    * Tags to associate with the campaign.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#tags CcCampaign#tags}
    */
    readonly tags?: CcCampaign.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign awscc_personalize_campaign}
*/
export class CcCampaign extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_personalize_campaign";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCampaign resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCampaign to import
    * @param importFromId The id of the existing CcCampaign that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCampaign to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_personalize_campaign", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign awscc_personalize_campaign} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCampaignProps
    */
    public constructor(scope: Construct, id: string, config: CcCampaignProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_personalize_campaign',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.105.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._campaignConfig.internalValue = config.campaignConfig;
        this._minProvisionedTps = config.minProvisionedTps;
        this._name = config.name;
        this._solutionVersionArn = config.solutionVersionArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // campaign_arn - computed: true, optional: false, required: false
    public get campaignArn() {
        return this.getStringAttribute('campaign_arn');
    }

    // campaign_config - computed: true, optional: true, required: false
    private _campaignConfig = new CcCampaign.CampaignConfigPropertyOutputReference(this, "campaign_config");
    public get campaignConfig() {
        return this._campaignConfig;
    }
    public putCampaignConfig(value: CcCampaign.CampaignConfigProperty) {
        this._campaignConfig.internalValue = value;
    }
    public resetCampaignConfig() {
        this._campaignConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get campaignConfigInput() {
        return this._campaignConfig.internalValue;
    }

    // creation_date_time - computed: true, optional: false, required: false
    public get creationDateTime() {
        return this.getStringAttribute('creation_date_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_date_time - computed: true, optional: false, required: false
    public get lastUpdatedDateTime() {
        return this.getStringAttribute('last_updated_date_time');
    }

    // min_provisioned_tps - computed: true, optional: true, required: false
    private _minProvisionedTps?: number; 
    public get minProvisionedTps() {
        return this.getNumberAttribute('min_provisioned_tps');
    }
    public set minProvisionedTps(value: number) {
        this._minProvisionedTps = value;
    }
    public resetMinProvisionedTps() {
        this._minProvisionedTps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minProvisionedTpsInput() {
        return this._minProvisionedTps;
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

    // solution_version_arn - computed: false, optional: false, required: true
    private _solutionVersionArn?: string; 
    public get solutionVersionArn() {
        return this.getStringAttribute('solution_version_arn');
    }
    public set solutionVersionArn(value: string) {
        this._solutionVersionArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get solutionVersionArnInput() {
        return this._solutionVersionArn;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCampaign.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCampaign.TagsProperty[] | cdktn.IResolvable) {
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
            campaign_config: ccCampaignCampaignConfigPropertyToTerraform(this._campaignConfig.internalValue),
            min_provisioned_tps: cdktn.numberToTerraform(this._minProvisionedTps),
            name: cdktn.stringToTerraform(this._name),
            solution_version_arn: cdktn.stringToTerraform(this._solutionVersionArn),
            tags: cdktn.listMapper(ccCampaignTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            campaign_config: {
                value: ccCampaignCampaignConfigPropertyToHclTerraform(this._campaignConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCampaign.CampaignConfigProperty",
            },
            min_provisioned_tps: {
                value: cdktn.numberToHclTerraform(this._minProvisionedTps),
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
            solution_version_arn: {
                value: cdktn.stringToHclTerraform(this._solutionVersionArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCampaignTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCampaign.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCampaignCampaignConfigPropertyToTerraform(struct?: CcCampaign.CampaignConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_metadata_with_recommendations: cdktn.booleanToTerraform(struct!.enableMetadataWithRecommendations),
        item_exploration_config: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.itemExplorationConfig),
        ranking_influence: cdktn.hashMapper(cdktn.numberToTerraform)(struct!.rankingInfluence),
        sync_with_latest_solution_version: cdktn.booleanToTerraform(struct!.syncWithLatestSolutionVersion),
    }
}


export function ccCampaignCampaignConfigPropertyToHclTerraform(struct?: CcCampaign.CampaignConfigProperty | cdktn.IResolvable): any {
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
        ranking_influence: {
            value: cdktn.hashMapperHcl(cdktn.numberToHclTerraform)(struct!.rankingInfluence),
            isBlock: false,
            type: "map",
            storageClassType: "numberMap",
        },
        sync_with_latest_solution_version: {
            value: cdktn.booleanToHclTerraform(struct!.syncWithLatestSolutionVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignTagsPropertyToTerraform(struct?: CcCampaign.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCampaignTagsPropertyToHclTerraform(struct?: CcCampaign.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcCampaign {
export interface CampaignConfigProperty {
    /**
    * Whether metadata with recommendations is enabled for the campaign.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#enable_metadata_with_recommendations CcCampaign#enable_metadata_with_recommendations}
    */
    readonly enableMetadataWithRecommendations?: boolean | cdktn.IResolvable;
    /**
    * Specifies the exploration configuration hyperparameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#item_exploration_config CcCampaign#item_exploration_config}
    */
    readonly itemExplorationConfig?: { [key: string]: string };
    /**
    * A map of ranking influence values for POPULARITY and FRESHNESS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#ranking_influence CcCampaign#ranking_influence}
    */
    readonly rankingInfluence?: { [key: string]: number };
    /**
    * Whether the campaign automatically updates to use the latest solution version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#sync_with_latest_solution_version CcCampaign#sync_with_latest_solution_version}
    */
    readonly syncWithLatestSolutionVersion?: boolean | cdktn.IResolvable;
}
export class CampaignConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CampaignConfigProperty | cdktn.IResolvable | undefined {
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
        if (this._rankingInfluence !== undefined) {
            hasAnyValues = true;
            internalValueResult.rankingInfluence = this._rankingInfluence;
        }
        if (this._syncWithLatestSolutionVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.syncWithLatestSolutionVersion = this._syncWithLatestSolutionVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CampaignConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableMetadataWithRecommendations = undefined;
            this._itemExplorationConfig = undefined;
            this._rankingInfluence = undefined;
            this._syncWithLatestSolutionVersion = undefined;
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
            this._rankingInfluence = value.rankingInfluence;
            this._syncWithLatestSolutionVersion = value.syncWithLatestSolutionVersion;
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

    // ranking_influence - computed: true, optional: true, required: false
    private _rankingInfluence?: { [key: string]: number }; 
    public get rankingInfluence() {
        return this.getNumberMapAttribute('ranking_influence');
    }
    public set rankingInfluence(value: { [key: string]: number }) {
        this._rankingInfluence = value;
    }
    public resetRankingInfluence() {
        this._rankingInfluence = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rankingInfluenceInput() {
        return this._rankingInfluence;
    }

    // sync_with_latest_solution_version - computed: true, optional: true, required: false
    private _syncWithLatestSolutionVersion?: boolean | cdktn.IResolvable; 
    public get syncWithLatestSolutionVersion() {
        return this.getBooleanAttribute('sync_with_latest_solution_version');
    }
    public set syncWithLatestSolutionVersion(value: boolean | cdktn.IResolvable) {
        this._syncWithLatestSolutionVersion = value;
    }
    public resetSyncWithLatestSolutionVersion() {
        this._syncWithLatestSolutionVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get syncWithLatestSolutionVersionInput() {
        return this._syncWithLatestSolutionVersion;
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#key CcCampaign#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#value CcCampaign#value}
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
