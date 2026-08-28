// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/location_tracker

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTrackerProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/location_tracker#description CcTracker#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/location_tracker#event_bridge_enabled CcTracker#event_bridge_enabled}
    */
    readonly eventBridgeEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/location_tracker#kms_key_enable_geospatial_queries CcTracker#kms_key_enable_geospatial_queries}
    */
    readonly kmsKeyEnableGeospatialQueries?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/location_tracker#kms_key_id CcTracker#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/location_tracker#position_filtering CcTracker#position_filtering}
    */
    readonly positionFiltering?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/location_tracker#pricing_plan CcTracker#pricing_plan}
    */
    readonly pricingPlan?: string;
    /**
    * This shape is deprecated since 2022-02-01: Deprecated. No longer allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/location_tracker#pricing_plan_data_source CcTracker#pricing_plan_data_source}
    */
    readonly pricingPlanDataSource?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/location_tracker#tags CcTracker#tags}
    */
    readonly tags?: CcTracker.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/location_tracker#tracker_name CcTracker#tracker_name}
    */
    readonly trackerName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/location_tracker awscc_location_tracker}
*/
export class CcTracker extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_location_tracker";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTracker resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTracker to import
    * @param importFromId The id of the existing CcTracker that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/location_tracker#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTracker to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_location_tracker", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/location_tracker awscc_location_tracker} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTrackerProps
    */
    public constructor(scope: Construct, id: string, config: CcTrackerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_location_tracker',
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
        this._eventBridgeEnabled = config.eventBridgeEnabled;
        this._kmsKeyEnableGeospatialQueries = config.kmsKeyEnableGeospatialQueries;
        this._kmsKeyId = config.kmsKeyId;
        this._positionFiltering = config.positionFiltering;
        this._pricingPlan = config.pricingPlan;
        this._pricingPlanDataSource = config.pricingPlanDataSource;
        this._tags.internalValue = config.tags;
        this._trackerName = config.trackerName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // create_time - computed: true, optional: false, required: false
    public get createTime() {
        return this.getStringAttribute('create_time');
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

    // event_bridge_enabled - computed: true, optional: true, required: false
    private _eventBridgeEnabled?: boolean | cdktn.IResolvable; 
    public get eventBridgeEnabled() {
        return this.getBooleanAttribute('event_bridge_enabled');
    }
    public set eventBridgeEnabled(value: boolean | cdktn.IResolvable) {
        this._eventBridgeEnabled = value;
    }
    public resetEventBridgeEnabled() {
        this._eventBridgeEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBridgeEnabledInput() {
        return this._eventBridgeEnabled;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_enable_geospatial_queries - computed: true, optional: true, required: false
    private _kmsKeyEnableGeospatialQueries?: boolean | cdktn.IResolvable; 
    public get kmsKeyEnableGeospatialQueries() {
        return this.getBooleanAttribute('kms_key_enable_geospatial_queries');
    }
    public set kmsKeyEnableGeospatialQueries(value: boolean | cdktn.IResolvable) {
        this._kmsKeyEnableGeospatialQueries = value;
    }
    public resetKmsKeyEnableGeospatialQueries() {
        this._kmsKeyEnableGeospatialQueries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyEnableGeospatialQueriesInput() {
        return this._kmsKeyEnableGeospatialQueries;
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // position_filtering - computed: true, optional: true, required: false
    private _positionFiltering?: string; 
    public get positionFiltering() {
        return this.getStringAttribute('position_filtering');
    }
    public set positionFiltering(value: string) {
        this._positionFiltering = value;
    }
    public resetPositionFiltering() {
        this._positionFiltering = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get positionFilteringInput() {
        return this._positionFiltering;
    }

    // pricing_plan - computed: true, optional: true, required: false
    private _pricingPlan?: string; 
    public get pricingPlan() {
        return this.getStringAttribute('pricing_plan');
    }
    public set pricingPlan(value: string) {
        this._pricingPlan = value;
    }
    public resetPricingPlan() {
        this._pricingPlan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pricingPlanInput() {
        return this._pricingPlan;
    }

    // pricing_plan_data_source - computed: true, optional: true, required: false
    private _pricingPlanDataSource?: string; 
    public get pricingPlanDataSource() {
        return this.getStringAttribute('pricing_plan_data_source');
    }
    public set pricingPlanDataSource(value: string) {
        this._pricingPlanDataSource = value;
    }
    public resetPricingPlanDataSource() {
        this._pricingPlanDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pricingPlanDataSourceInput() {
        return this._pricingPlanDataSource;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTracker.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTracker.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tracker_arn - computed: true, optional: false, required: false
    public get trackerArn() {
        return this.getStringAttribute('tracker_arn');
    }

    // tracker_name - computed: false, optional: false, required: true
    private _trackerName?: string; 
    public get trackerName() {
        return this.getStringAttribute('tracker_name');
    }
    public set trackerName(value: string) {
        this._trackerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trackerNameInput() {
        return this._trackerName;
    }

    // update_time - computed: true, optional: false, required: false
    public get updateTime() {
        return this.getStringAttribute('update_time');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            event_bridge_enabled: cdktn.booleanToTerraform(this._eventBridgeEnabled),
            kms_key_enable_geospatial_queries: cdktn.booleanToTerraform(this._kmsKeyEnableGeospatialQueries),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            position_filtering: cdktn.stringToTerraform(this._positionFiltering),
            pricing_plan: cdktn.stringToTerraform(this._pricingPlan),
            pricing_plan_data_source: cdktn.stringToTerraform(this._pricingPlanDataSource),
            tags: cdktn.listMapper(ccTrackerTagPropertyToTerraform, false)(this._tags.internalValue),
            tracker_name: cdktn.stringToTerraform(this._trackerName),
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
            event_bridge_enabled: {
                value: cdktn.booleanToHclTerraform(this._eventBridgeEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            kms_key_enable_geospatial_queries: {
                value: cdktn.booleanToHclTerraform(this._kmsKeyEnableGeospatialQueries),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            position_filtering: {
                value: cdktn.stringToHclTerraform(this._positionFiltering),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pricing_plan: {
                value: cdktn.stringToHclTerraform(this._pricingPlan),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pricing_plan_data_source: {
                value: cdktn.stringToHclTerraform(this._pricingPlanDataSource),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTrackerTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcTracker.TagPropertyList",
            },
            tracker_name: {
                value: cdktn.stringToHclTerraform(this._trackerName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTrackerTagPropertyToTerraform(struct?: CcTracker.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTrackerTagPropertyToHclTerraform(struct?: CcTracker.TagProperty | cdktn.IResolvable): any {
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


export namespace CcTracker {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/location_tracker#key CcTracker#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/location_tracker#value CcTracker#value}
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
