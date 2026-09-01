// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStorageLensProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies the details of Amazon S3 Storage Lens configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#storage_lens_configuration CcStorageLens#storage_lens_configuration}
    */
    readonly storageLensConfiguration: CcStorageLens.StorageLensConfigurationProperty;
    /**
    * A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#tags CcStorageLens#tags}
    */
    readonly tags?: CcStorageLens.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens awscc_s3_storage_lens}
*/
export class CcStorageLens extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_s3_storage_lens";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStorageLens resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStorageLens to import
    * @param importFromId The id of the existing CcStorageLens that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStorageLens to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3_storage_lens", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens awscc_s3_storage_lens} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStorageLensProps
    */
    public constructor(scope: Construct, id: string, config: CcStorageLensProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3_storage_lens',
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
        this._storageLensConfiguration.internalValue = config.storageLensConfiguration;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // storage_lens_configuration - computed: false, optional: false, required: true
    private _storageLensConfiguration = new CcStorageLens.StorageLensConfigurationPropertyOutputReference(this, "storage_lens_configuration");
    public get storageLensConfiguration() {
        return this._storageLensConfiguration;
    }
    public putStorageLensConfiguration(value: CcStorageLens.StorageLensConfigurationProperty) {
        this._storageLensConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get storageLensConfigurationInput() {
        return this._storageLensConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcStorageLens.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcStorageLens.TagProperty[] | cdktn.IResolvable) {
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
            storage_lens_configuration: ccStorageLensStorageLensConfigurationPropertyToTerraform(this._storageLensConfiguration.internalValue),
            tags: cdktn.listMapper(ccStorageLensTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            storage_lens_configuration: {
                value: ccStorageLensStorageLensConfigurationPropertyToHclTerraform(this._storageLensConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStorageLens.StorageLensConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccStorageLensTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcStorageLens.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccStorageLensActivityMetricsPropertyToTerraform(struct?: CcStorageLens.ActivityMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
    }
}


export function ccStorageLensActivityMetricsPropertyToHclTerraform(struct?: CcStorageLens.ActivityMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensAdvancedCostOptimizationMetricsPropertyToTerraform(struct?: CcStorageLens.AdvancedCostOptimizationMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
    }
}


export function ccStorageLensAdvancedCostOptimizationMetricsPropertyToHclTerraform(struct?: CcStorageLens.AdvancedCostOptimizationMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensAdvancedDataProtectionMetricsPropertyToTerraform(struct?: CcStorageLens.AdvancedDataProtectionMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
    }
}


export function ccStorageLensAdvancedDataProtectionMetricsPropertyToHclTerraform(struct?: CcStorageLens.AdvancedDataProtectionMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensAdvancedPerformanceMetricsPropertyToTerraform(struct?: CcStorageLens.AdvancedPerformanceMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
    }
}


export function ccStorageLensAdvancedPerformanceMetricsPropertyToHclTerraform(struct?: CcStorageLens.AdvancedPerformanceMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsPropertyToTerraform(struct?: CcStorageLens.StorageLensConfigurationAccountLevelBucketLevelActivityMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
    }
}


export function ccStorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsPropertyToHclTerraform(struct?: CcStorageLens.StorageLensConfigurationAccountLevelBucketLevelActivityMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsPropertyToTerraform(struct?: CcStorageLens.StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
    }
}


export function ccStorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsPropertyToHclTerraform(struct?: CcStorageLens.StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsPropertyToTerraform(struct?: CcStorageLens.StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
    }
}


export function ccStorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsPropertyToHclTerraform(struct?: CcStorageLens.StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsPropertyToTerraform(struct?: CcStorageLens.StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
    }
}


export function ccStorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsPropertyToHclTerraform(struct?: CcStorageLens.StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensDetailedStatusCodesMetricsPropertyToTerraform(struct?: CcStorageLens.DetailedStatusCodesMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
    }
}


export function ccStorageLensDetailedStatusCodesMetricsPropertyToHclTerraform(struct?: CcStorageLens.DetailedStatusCodesMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensSelectionCriteriaPropertyToTerraform(struct?: CcStorageLens.SelectionCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delimiter: cdktn.stringToTerraform(struct!.delimiter),
        max_depth: cdktn.numberToTerraform(struct!.maxDepth),
        min_storage_bytes_percentage: cdktn.numberToTerraform(struct!.minStorageBytesPercentage),
    }
}


export function ccStorageLensSelectionCriteriaPropertyToHclTerraform(struct?: CcStorageLens.SelectionCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delimiter: {
            value: cdktn.stringToHclTerraform(struct!.delimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_depth: {
            value: cdktn.numberToHclTerraform(struct!.maxDepth),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_storage_bytes_percentage: {
            value: cdktn.numberToHclTerraform(struct!.minStorageBytesPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensPrefixLevelStorageMetricsPropertyToTerraform(struct?: CcStorageLens.PrefixLevelStorageMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
        selection_criteria: ccStorageLensSelectionCriteriaPropertyToTerraform(struct!.selectionCriteria),
    }
}


export function ccStorageLensPrefixLevelStorageMetricsPropertyToHclTerraform(struct?: CcStorageLens.PrefixLevelStorageMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        selection_criteria: {
            value: ccStorageLensSelectionCriteriaPropertyToHclTerraform(struct!.selectionCriteria),
            isBlock: true,
            type: "struct",
            storageClassType: "SelectionCriteriaProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensPrefixLevelPropertyToTerraform(struct?: CcStorageLens.PrefixLevelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        storage_metrics: ccStorageLensPrefixLevelStorageMetricsPropertyToTerraform(struct!.storageMetrics),
    }
}


export function ccStorageLensPrefixLevelPropertyToHclTerraform(struct?: CcStorageLens.PrefixLevelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        storage_metrics: {
            value: ccStorageLensPrefixLevelStorageMetricsPropertyToHclTerraform(struct!.storageMetrics),
            isBlock: true,
            type: "struct",
            storageClassType: "PrefixLevelStorageMetricsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensBucketLevelPropertyToTerraform(struct?: CcStorageLens.BucketLevelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        activity_metrics: ccStorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsPropertyToTerraform(struct!.activityMetrics),
        advanced_cost_optimization_metrics: ccStorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsPropertyToTerraform(struct!.advancedCostOptimizationMetrics),
        advanced_data_protection_metrics: ccStorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsPropertyToTerraform(struct!.advancedDataProtectionMetrics),
        advanced_performance_metrics: ccStorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsPropertyToTerraform(struct!.advancedPerformanceMetrics),
        detailed_status_codes_metrics: ccStorageLensDetailedStatusCodesMetricsPropertyToTerraform(struct!.detailedStatusCodesMetrics),
        prefix_level: ccStorageLensPrefixLevelPropertyToTerraform(struct!.prefixLevel),
    }
}


export function ccStorageLensBucketLevelPropertyToHclTerraform(struct?: CcStorageLens.BucketLevelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        activity_metrics: {
            value: ccStorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsPropertyToHclTerraform(struct!.activityMetrics),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageLensConfigurationAccountLevelBucketLevelActivityMetricsProperty",
        },
        advanced_cost_optimization_metrics: {
            value: ccStorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsPropertyToHclTerraform(struct!.advancedCostOptimizationMetrics),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsProperty",
        },
        advanced_data_protection_metrics: {
            value: ccStorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsPropertyToHclTerraform(struct!.advancedDataProtectionMetrics),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsProperty",
        },
        advanced_performance_metrics: {
            value: ccStorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsPropertyToHclTerraform(struct!.advancedPerformanceMetrics),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsProperty",
        },
        detailed_status_codes_metrics: {
            value: ccStorageLensDetailedStatusCodesMetricsPropertyToHclTerraform(struct!.detailedStatusCodesMetrics),
            isBlock: true,
            type: "struct",
            storageClassType: "DetailedStatusCodesMetricsProperty",
        },
        prefix_level: {
            value: ccStorageLensPrefixLevelPropertyToHclTerraform(struct!.prefixLevel),
            isBlock: true,
            type: "struct",
            storageClassType: "PrefixLevelProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsPropertyToTerraform(struct?: CcStorageLens.StorageLensConfigurationAccountLevelDetailedStatusCodesMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
    }
}


export function ccStorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsPropertyToHclTerraform(struct?: CcStorageLens.StorageLensConfigurationAccountLevelDetailedStatusCodesMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensStorageLensGroupSelectionCriteriaPropertyToTerraform(struct?: CcStorageLens.StorageLensGroupSelectionCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exclude: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclude),
        include: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.include),
    }
}


export function ccStorageLensStorageLensGroupSelectionCriteriaPropertyToHclTerraform(struct?: CcStorageLens.StorageLensGroupSelectionCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exclude: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclude),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        include: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.include),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensStorageLensGroupLevelPropertyToTerraform(struct?: CcStorageLens.StorageLensGroupLevelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        storage_lens_group_selection_criteria: ccStorageLensStorageLensGroupSelectionCriteriaPropertyToTerraform(struct!.storageLensGroupSelectionCriteria),
    }
}


export function ccStorageLensStorageLensGroupLevelPropertyToHclTerraform(struct?: CcStorageLens.StorageLensGroupLevelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        storage_lens_group_selection_criteria: {
            value: ccStorageLensStorageLensGroupSelectionCriteriaPropertyToHclTerraform(struct!.storageLensGroupSelectionCriteria),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageLensGroupSelectionCriteriaProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensAccountLevelPropertyToTerraform(struct?: CcStorageLens.AccountLevelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        activity_metrics: ccStorageLensActivityMetricsPropertyToTerraform(struct!.activityMetrics),
        advanced_cost_optimization_metrics: ccStorageLensAdvancedCostOptimizationMetricsPropertyToTerraform(struct!.advancedCostOptimizationMetrics),
        advanced_data_protection_metrics: ccStorageLensAdvancedDataProtectionMetricsPropertyToTerraform(struct!.advancedDataProtectionMetrics),
        advanced_performance_metrics: ccStorageLensAdvancedPerformanceMetricsPropertyToTerraform(struct!.advancedPerformanceMetrics),
        bucket_level: ccStorageLensBucketLevelPropertyToTerraform(struct!.bucketLevel),
        detailed_status_codes_metrics: ccStorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsPropertyToTerraform(struct!.detailedStatusCodesMetrics),
        storage_lens_group_level: ccStorageLensStorageLensGroupLevelPropertyToTerraform(struct!.storageLensGroupLevel),
    }
}


export function ccStorageLensAccountLevelPropertyToHclTerraform(struct?: CcStorageLens.AccountLevelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        activity_metrics: {
            value: ccStorageLensActivityMetricsPropertyToHclTerraform(struct!.activityMetrics),
            isBlock: true,
            type: "struct",
            storageClassType: "ActivityMetricsProperty",
        },
        advanced_cost_optimization_metrics: {
            value: ccStorageLensAdvancedCostOptimizationMetricsPropertyToHclTerraform(struct!.advancedCostOptimizationMetrics),
            isBlock: true,
            type: "struct",
            storageClassType: "AdvancedCostOptimizationMetricsProperty",
        },
        advanced_data_protection_metrics: {
            value: ccStorageLensAdvancedDataProtectionMetricsPropertyToHclTerraform(struct!.advancedDataProtectionMetrics),
            isBlock: true,
            type: "struct",
            storageClassType: "AdvancedDataProtectionMetricsProperty",
        },
        advanced_performance_metrics: {
            value: ccStorageLensAdvancedPerformanceMetricsPropertyToHclTerraform(struct!.advancedPerformanceMetrics),
            isBlock: true,
            type: "struct",
            storageClassType: "AdvancedPerformanceMetricsProperty",
        },
        bucket_level: {
            value: ccStorageLensBucketLevelPropertyToHclTerraform(struct!.bucketLevel),
            isBlock: true,
            type: "struct",
            storageClassType: "BucketLevelProperty",
        },
        detailed_status_codes_metrics: {
            value: ccStorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsPropertyToHclTerraform(struct!.detailedStatusCodesMetrics),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageLensConfigurationAccountLevelDetailedStatusCodesMetricsProperty",
        },
        storage_lens_group_level: {
            value: ccStorageLensStorageLensGroupLevelPropertyToHclTerraform(struct!.storageLensGroupLevel),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageLensGroupLevelProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensAwsOrgPropertyToTerraform(struct?: CcStorageLens.AwsOrgProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
    }
}


export function ccStorageLensAwsOrgPropertyToHclTerraform(struct?: CcStorageLens.AwsOrgProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensCloudWatchMetricsPropertyToTerraform(struct?: CcStorageLens.CloudWatchMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
    }
}


export function ccStorageLensCloudWatchMetricsPropertyToHclTerraform(struct?: CcStorageLens.CloudWatchMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensSSEKMSPropertyToTerraform(struct?: CcStorageLens.SSEKMSProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_id: cdktn.stringToTerraform(struct!.keyId),
    }
}


export function ccStorageLensSSEKMSPropertyToHclTerraform(struct?: CcStorageLens.SSEKMSProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_id: {
            value: cdktn.stringToHclTerraform(struct!.keyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensEncryptionPropertyToTerraform(struct?: CcStorageLens.EncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ssekms: ccStorageLensSSEKMSPropertyToTerraform(struct!.ssekms),
        sses3: cdktn.stringToTerraform(struct!.sses3),
    }
}


export function ccStorageLensEncryptionPropertyToHclTerraform(struct?: CcStorageLens.EncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ssekms: {
            value: ccStorageLensSSEKMSPropertyToHclTerraform(struct!.ssekms),
            isBlock: true,
            type: "struct",
            storageClassType: "SSEKMSProperty",
        },
        sses3: {
            value: cdktn.stringToHclTerraform(struct!.sses3),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensS3BucketDestinationPropertyToTerraform(struct?: CcStorageLens.S3BucketDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_id: cdktn.stringToTerraform(struct!.accountId),
        arn: cdktn.stringToTerraform(struct!.arn),
        encryption: ccStorageLensEncryptionPropertyToTerraform(struct!.encryption),
        format: cdktn.stringToTerraform(struct!.format),
        output_schema_version: cdktn.stringToTerraform(struct!.outputSchemaVersion),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccStorageLensS3BucketDestinationPropertyToHclTerraform(struct?: CcStorageLens.S3BucketDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_id: {
            value: cdktn.stringToHclTerraform(struct!.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encryption: {
            value: ccStorageLensEncryptionPropertyToHclTerraform(struct!.encryption),
            isBlock: true,
            type: "struct",
            storageClassType: "EncryptionProperty",
        },
        format: {
            value: cdktn.stringToHclTerraform(struct!.format),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_schema_version: {
            value: cdktn.stringToHclTerraform(struct!.outputSchemaVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsPropertyToTerraform(struct?: CcStorageLens.StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_id: cdktn.stringToTerraform(struct!.keyId),
    }
}


export function ccStorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsPropertyToHclTerraform(struct?: CcStorageLens.StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_id: {
            value: cdktn.stringToHclTerraform(struct!.keyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionPropertyToTerraform(struct?: CcStorageLens.StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ssekms: ccStorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsPropertyToTerraform(struct!.ssekms),
        sses3: cdktn.stringToTerraform(struct!.sses3),
    }
}


export function ccStorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionPropertyToHclTerraform(struct?: CcStorageLens.StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ssekms: {
            value: ccStorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsPropertyToHclTerraform(struct!.ssekms),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsProperty",
        },
        sses3: {
            value: cdktn.stringToHclTerraform(struct!.sses3),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensStorageLensTableDestinationPropertyToTerraform(struct?: CcStorageLens.StorageLensTableDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption: ccStorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionPropertyToTerraform(struct!.encryption),
        is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
    }
}


export function ccStorageLensStorageLensTableDestinationPropertyToHclTerraform(struct?: CcStorageLens.StorageLensTableDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption: {
            value: ccStorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionPropertyToHclTerraform(struct!.encryption),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionProperty",
        },
        is_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensDataExportPropertyToTerraform(struct?: CcStorageLens.DataExportProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_metrics: ccStorageLensCloudWatchMetricsPropertyToTerraform(struct!.cloudwatchMetrics),
        s3_bucket_destination: ccStorageLensS3BucketDestinationPropertyToTerraform(struct!.s3BucketDestination),
        storage_lens_table_destination: ccStorageLensStorageLensTableDestinationPropertyToTerraform(struct!.storageLensTableDestination),
    }
}


export function ccStorageLensDataExportPropertyToHclTerraform(struct?: CcStorageLens.DataExportProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_metrics: {
            value: ccStorageLensCloudWatchMetricsPropertyToHclTerraform(struct!.cloudwatchMetrics),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchMetricsProperty",
        },
        s3_bucket_destination: {
            value: ccStorageLensS3BucketDestinationPropertyToHclTerraform(struct!.s3BucketDestination),
            isBlock: true,
            type: "struct",
            storageClassType: "S3BucketDestinationProperty",
        },
        storage_lens_table_destination: {
            value: ccStorageLensStorageLensTableDestinationPropertyToHclTerraform(struct!.storageLensTableDestination),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageLensTableDestinationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensBucketsAndRegionsPropertyToTerraform(struct?: CcStorageLens.BucketsAndRegionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        buckets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.buckets),
        regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
    }
}


export function ccStorageLensBucketsAndRegionsPropertyToHclTerraform(struct?: CcStorageLens.BucketsAndRegionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        buckets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.buckets),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        regions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsPropertyToTerraform(struct?: CcStorageLens.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_id: cdktn.stringToTerraform(struct!.keyId),
    }
}


export function ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsPropertyToHclTerraform(struct?: CcStorageLens.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_id: {
            value: cdktn.stringToHclTerraform(struct!.keyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionPropertyToTerraform(struct?: CcStorageLens.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ssekms: ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsPropertyToTerraform(struct!.ssekms),
        sses3: cdktn.stringToTerraform(struct!.sses3),
    }
}


export function ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionPropertyToHclTerraform(struct?: CcStorageLens.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ssekms: {
            value: ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsPropertyToHclTerraform(struct!.ssekms),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsProperty",
        },
        sses3: {
            value: cdktn.stringToHclTerraform(struct!.sses3),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationPropertyToTerraform(struct?: CcStorageLens.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_id: cdktn.stringToTerraform(struct!.accountId),
        arn: cdktn.stringToTerraform(struct!.arn),
        encryption: ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionPropertyToTerraform(struct!.encryption),
        format: cdktn.stringToTerraform(struct!.format),
        output_schema_version: cdktn.stringToTerraform(struct!.outputSchemaVersion),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationPropertyToHclTerraform(struct?: CcStorageLens.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_id: {
            value: cdktn.stringToHclTerraform(struct!.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encryption: {
            value: ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionPropertyToHclTerraform(struct!.encryption),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionProperty",
        },
        format: {
            value: cdktn.stringToHclTerraform(struct!.format),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_schema_version: {
            value: cdktn.stringToHclTerraform(struct!.outputSchemaVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsPropertyToTerraform(struct?: CcStorageLens.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_id: cdktn.stringToTerraform(struct!.keyId),
    }
}


export function ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsPropertyToHclTerraform(struct?: CcStorageLens.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_id: {
            value: cdktn.stringToHclTerraform(struct!.keyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionPropertyToTerraform(struct?: CcStorageLens.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ssekms: ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsPropertyToTerraform(struct!.ssekms),
        sses3: cdktn.stringToTerraform(struct!.sses3),
    }
}


export function ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionPropertyToHclTerraform(struct?: CcStorageLens.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ssekms: {
            value: ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsPropertyToHclTerraform(struct!.ssekms),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsProperty",
        },
        sses3: {
            value: cdktn.stringToHclTerraform(struct!.sses3),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationPropertyToTerraform(struct?: CcStorageLens.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption: ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionPropertyToTerraform(struct!.encryption),
        is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
    }
}


export function ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationPropertyToHclTerraform(struct?: CcStorageLens.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption: {
            value: ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionPropertyToHclTerraform(struct!.encryption),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionProperty",
        },
        is_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensStorageLensExpandedPrefixesDataExportPropertyToTerraform(struct?: CcStorageLens.StorageLensExpandedPrefixesDataExportProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_bucket_destination: ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationPropertyToTerraform(struct!.s3BucketDestination),
        storage_lens_table_destination: ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationPropertyToTerraform(struct!.storageLensTableDestination),
    }
}


export function ccStorageLensStorageLensExpandedPrefixesDataExportPropertyToHclTerraform(struct?: CcStorageLens.StorageLensExpandedPrefixesDataExportProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_bucket_destination: {
            value: ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationPropertyToHclTerraform(struct!.s3BucketDestination),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationProperty",
        },
        storage_lens_table_destination: {
            value: ccStorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationPropertyToHclTerraform(struct!.storageLensTableDestination),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensIncludePropertyToTerraform(struct?: CcStorageLens.IncludeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        buckets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.buckets),
        regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
    }
}


export function ccStorageLensIncludePropertyToHclTerraform(struct?: CcStorageLens.IncludeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        buckets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.buckets),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        regions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensStorageLensConfigurationPropertyToTerraform(struct?: CcStorageLens.StorageLensConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_level: ccStorageLensAccountLevelPropertyToTerraform(struct!.accountLevel),
        aws_org: ccStorageLensAwsOrgPropertyToTerraform(struct!.awsOrg),
        data_export: ccStorageLensDataExportPropertyToTerraform(struct!.dataExport),
        exclude: ccStorageLensBucketsAndRegionsPropertyToTerraform(struct!.exclude),
        expanded_prefixes_data_export: ccStorageLensStorageLensExpandedPrefixesDataExportPropertyToTerraform(struct!.expandedPrefixesDataExport),
        id: cdktn.stringToTerraform(struct!.id),
        include: ccStorageLensIncludePropertyToTerraform(struct!.include),
        is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
        prefix_delimiter: cdktn.stringToTerraform(struct!.prefixDelimiter),
    }
}


export function ccStorageLensStorageLensConfigurationPropertyToHclTerraform(struct?: CcStorageLens.StorageLensConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_level: {
            value: ccStorageLensAccountLevelPropertyToHclTerraform(struct!.accountLevel),
            isBlock: true,
            type: "struct",
            storageClassType: "AccountLevelProperty",
        },
        aws_org: {
            value: ccStorageLensAwsOrgPropertyToHclTerraform(struct!.awsOrg),
            isBlock: true,
            type: "struct",
            storageClassType: "AwsOrgProperty",
        },
        data_export: {
            value: ccStorageLensDataExportPropertyToHclTerraform(struct!.dataExport),
            isBlock: true,
            type: "struct",
            storageClassType: "DataExportProperty",
        },
        exclude: {
            value: ccStorageLensBucketsAndRegionsPropertyToHclTerraform(struct!.exclude),
            isBlock: true,
            type: "struct",
            storageClassType: "BucketsAndRegionsProperty",
        },
        expanded_prefixes_data_export: {
            value: ccStorageLensStorageLensExpandedPrefixesDataExportPropertyToHclTerraform(struct!.expandedPrefixesDataExport),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageLensExpandedPrefixesDataExportProperty",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        include: {
            value: ccStorageLensIncludePropertyToHclTerraform(struct!.include),
            isBlock: true,
            type: "struct",
            storageClassType: "IncludeProperty",
        },
        is_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        prefix_delimiter: {
            value: cdktn.stringToHclTerraform(struct!.prefixDelimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensTagPropertyToTerraform(struct?: CcStorageLens.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStorageLensTagPropertyToHclTerraform(struct?: CcStorageLens.TagProperty | cdktn.IResolvable): any {
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


export namespace CcStorageLens {
export interface ActivityMetricsProperty {
    /**
    * Specifies whether activity metrics are enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled CcStorageLens#is_enabled}
    */
    readonly isEnabled?: boolean | cdktn.IResolvable;
}
export class ActivityMetricsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ActivityMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isEnabled = this._isEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActivityMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isEnabled = value.isEnabled;
        }
    }

    // is_enabled - computed: true, optional: true, required: false
    private _isEnabled?: boolean | cdktn.IResolvable; 
    public get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktn.IResolvable) {
        this._isEnabled = value;
    }
    public resetIsEnabled() {
        this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
        return this._isEnabled;
    }
}
export interface AdvancedCostOptimizationMetricsProperty {
    /**
    * Specifies whether advanced cost optimization metrics are enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled CcStorageLens#is_enabled}
    */
    readonly isEnabled?: boolean | cdktn.IResolvable;
}
export class AdvancedCostOptimizationMetricsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AdvancedCostOptimizationMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isEnabled = this._isEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdvancedCostOptimizationMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isEnabled = value.isEnabled;
        }
    }

    // is_enabled - computed: true, optional: true, required: false
    private _isEnabled?: boolean | cdktn.IResolvable; 
    public get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktn.IResolvable) {
        this._isEnabled = value;
    }
    public resetIsEnabled() {
        this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
        return this._isEnabled;
    }
}
export interface AdvancedDataProtectionMetricsProperty {
    /**
    * Specifies whether advanced data protection metrics are enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled CcStorageLens#is_enabled}
    */
    readonly isEnabled?: boolean | cdktn.IResolvable;
}
export class AdvancedDataProtectionMetricsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AdvancedDataProtectionMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isEnabled = this._isEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdvancedDataProtectionMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isEnabled = value.isEnabled;
        }
    }

    // is_enabled - computed: true, optional: true, required: false
    private _isEnabled?: boolean | cdktn.IResolvable; 
    public get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktn.IResolvable) {
        this._isEnabled = value;
    }
    public resetIsEnabled() {
        this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
        return this._isEnabled;
    }
}
export interface AdvancedPerformanceMetricsProperty {
    /**
    * Specifies whether the Advanced Performance Metrics is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled CcStorageLens#is_enabled}
    */
    readonly isEnabled?: boolean | cdktn.IResolvable;
}
export class AdvancedPerformanceMetricsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AdvancedPerformanceMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isEnabled = this._isEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdvancedPerformanceMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isEnabled = value.isEnabled;
        }
    }

    // is_enabled - computed: true, optional: true, required: false
    private _isEnabled?: boolean | cdktn.IResolvable; 
    public get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktn.IResolvable) {
        this._isEnabled = value;
    }
    public resetIsEnabled() {
        this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
        return this._isEnabled;
    }
}
export interface StorageLensConfigurationAccountLevelBucketLevelActivityMetricsProperty {
    /**
    * Specifies whether activity metrics are enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled CcStorageLens#is_enabled}
    */
    readonly isEnabled?: boolean | cdktn.IResolvable;
}
export class StorageLensConfigurationAccountLevelBucketLevelActivityMetricsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageLensConfigurationAccountLevelBucketLevelActivityMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isEnabled = this._isEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageLensConfigurationAccountLevelBucketLevelActivityMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isEnabled = value.isEnabled;
        }
    }

    // is_enabled - computed: true, optional: true, required: false
    private _isEnabled?: boolean | cdktn.IResolvable; 
    public get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktn.IResolvable) {
        this._isEnabled = value;
    }
    public resetIsEnabled() {
        this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
        return this._isEnabled;
    }
}
export interface StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsProperty {
    /**
    * Specifies whether advanced cost optimization metrics are enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled CcStorageLens#is_enabled}
    */
    readonly isEnabled?: boolean | cdktn.IResolvable;
}
export class StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isEnabled = this._isEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isEnabled = value.isEnabled;
        }
    }

    // is_enabled - computed: true, optional: true, required: false
    private _isEnabled?: boolean | cdktn.IResolvable; 
    public get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktn.IResolvable) {
        this._isEnabled = value;
    }
    public resetIsEnabled() {
        this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
        return this._isEnabled;
    }
}
export interface StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsProperty {
    /**
    * Specifies whether advanced data protection metrics are enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled CcStorageLens#is_enabled}
    */
    readonly isEnabled?: boolean | cdktn.IResolvable;
}
export class StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isEnabled = this._isEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isEnabled = value.isEnabled;
        }
    }

    // is_enabled - computed: true, optional: true, required: false
    private _isEnabled?: boolean | cdktn.IResolvable; 
    public get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktn.IResolvable) {
        this._isEnabled = value;
    }
    public resetIsEnabled() {
        this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
        return this._isEnabled;
    }
}
export interface StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsProperty {
    /**
    * Specifies whether the Advanced Performance Metrics is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled CcStorageLens#is_enabled}
    */
    readonly isEnabled?: boolean | cdktn.IResolvable;
}
export class StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isEnabled = this._isEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isEnabled = value.isEnabled;
        }
    }

    // is_enabled - computed: true, optional: true, required: false
    private _isEnabled?: boolean | cdktn.IResolvable; 
    public get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktn.IResolvable) {
        this._isEnabled = value;
    }
    public resetIsEnabled() {
        this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
        return this._isEnabled;
    }
}
export interface DetailedStatusCodesMetricsProperty {
    /**
    * Specifies whether detailed status codes metrics are enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled CcStorageLens#is_enabled}
    */
    readonly isEnabled?: boolean | cdktn.IResolvable;
}
export class DetailedStatusCodesMetricsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetailedStatusCodesMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isEnabled = this._isEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetailedStatusCodesMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isEnabled = value.isEnabled;
        }
    }

    // is_enabled - computed: true, optional: true, required: false
    private _isEnabled?: boolean | cdktn.IResolvable; 
    public get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktn.IResolvable) {
        this._isEnabled = value;
    }
    public resetIsEnabled() {
        this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
        return this._isEnabled;
    }
}
export interface SelectionCriteriaProperty {
    /**
    * Delimiter to divide S3 key into hierarchy of prefixes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#delimiter CcStorageLens#delimiter}
    */
    readonly delimiter?: string;
    /**
    * Max depth of prefixes of S3 key that Amazon S3 Storage Lens will analyze.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#max_depth CcStorageLens#max_depth}
    */
    readonly maxDepth?: number;
    /**
    * The minimum storage bytes threshold for the prefixes to be included in the analysis.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#min_storage_bytes_percentage CcStorageLens#min_storage_bytes_percentage}
    */
    readonly minStorageBytesPercentage?: number;
}
export class SelectionCriteriaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SelectionCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._delimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.delimiter = this._delimiter;
        }
        if (this._maxDepth !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxDepth = this._maxDepth;
        }
        if (this._minStorageBytesPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.minStorageBytesPercentage = this._minStorageBytesPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SelectionCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._delimiter = undefined;
            this._maxDepth = undefined;
            this._minStorageBytesPercentage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._delimiter = value.delimiter;
            this._maxDepth = value.maxDepth;
            this._minStorageBytesPercentage = value.minStorageBytesPercentage;
        }
    }

    // delimiter - computed: true, optional: true, required: false
    private _delimiter?: string; 
    public get delimiter() {
        return this.getStringAttribute('delimiter');
    }
    public set delimiter(value: string) {
        this._delimiter = value;
    }
    public resetDelimiter() {
        this._delimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get delimiterInput() {
        return this._delimiter;
    }

    // max_depth - computed: true, optional: true, required: false
    private _maxDepth?: number; 
    public get maxDepth() {
        return this.getNumberAttribute('max_depth');
    }
    public set maxDepth(value: number) {
        this._maxDepth = value;
    }
    public resetMaxDepth() {
        this._maxDepth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxDepthInput() {
        return this._maxDepth;
    }

    // min_storage_bytes_percentage - computed: true, optional: true, required: false
    private _minStorageBytesPercentage?: number; 
    public get minStorageBytesPercentage() {
        return this.getNumberAttribute('min_storage_bytes_percentage');
    }
    public set minStorageBytesPercentage(value: number) {
        this._minStorageBytesPercentage = value;
    }
    public resetMinStorageBytesPercentage() {
        this._minStorageBytesPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minStorageBytesPercentageInput() {
        return this._minStorageBytesPercentage;
    }
}
export interface PrefixLevelStorageMetricsProperty {
    /**
    * Specifies whether prefix-level storage metrics are enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled CcStorageLens#is_enabled}
    */
    readonly isEnabled?: boolean | cdktn.IResolvable;
    /**
    * Selection criteria for prefix-level metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#selection_criteria CcStorageLens#selection_criteria}
    */
    readonly selectionCriteria?: SelectionCriteriaProperty;
}
export class PrefixLevelStorageMetricsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrefixLevelStorageMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isEnabled = this._isEnabled;
        }
        if (this._selectionCriteria?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.selectionCriteria = this._selectionCriteria?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrefixLevelStorageMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isEnabled = undefined;
            this._selectionCriteria.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isEnabled = value.isEnabled;
            this._selectionCriteria.internalValue = value.selectionCriteria;
        }
    }

    // is_enabled - computed: true, optional: true, required: false
    private _isEnabled?: boolean | cdktn.IResolvable; 
    public get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktn.IResolvable) {
        this._isEnabled = value;
    }
    public resetIsEnabled() {
        this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
        return this._isEnabled;
    }

    // selection_criteria - computed: true, optional: true, required: false
    private _selectionCriteria = new SelectionCriteriaPropertyOutputReference(this, "selection_criteria");
    public get selectionCriteria() {
        return this._selectionCriteria;
    }
    public putSelectionCriteria(value: SelectionCriteriaProperty) {
        this._selectionCriteria.internalValue = value;
    }
    public resetSelectionCriteria() {
        this._selectionCriteria.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selectionCriteriaInput() {
        return this._selectionCriteria.internalValue;
    }
}
export interface PrefixLevelProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#storage_metrics CcStorageLens#storage_metrics}
    */
    readonly storageMetrics?: PrefixLevelStorageMetricsProperty;
}
export class PrefixLevelPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrefixLevelProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._storageMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageMetrics = this._storageMetrics?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrefixLevelProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._storageMetrics.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._storageMetrics.internalValue = value.storageMetrics;
        }
    }

    // storage_metrics - computed: true, optional: true, required: false
    private _storageMetrics = new PrefixLevelStorageMetricsPropertyOutputReference(this, "storage_metrics");
    public get storageMetrics() {
        return this._storageMetrics;
    }
    public putStorageMetrics(value: PrefixLevelStorageMetricsProperty) {
        this._storageMetrics.internalValue = value;
    }
    public resetStorageMetrics() {
        this._storageMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageMetricsInput() {
        return this._storageMetrics.internalValue;
    }
}
export interface BucketLevelProperty {
    /**
    * Enables activity metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#activity_metrics CcStorageLens#activity_metrics}
    */
    readonly activityMetrics?: StorageLensConfigurationAccountLevelBucketLevelActivityMetricsProperty;
    /**
    * Enables advanced cost optimization metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#advanced_cost_optimization_metrics CcStorageLens#advanced_cost_optimization_metrics}
    */
    readonly advancedCostOptimizationMetrics?: StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsProperty;
    /**
    * Enables advanced data protection metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#advanced_data_protection_metrics CcStorageLens#advanced_data_protection_metrics}
    */
    readonly advancedDataProtectionMetrics?: StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsProperty;
    /**
    * Advanced Performance Metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#advanced_performance_metrics CcStorageLens#advanced_performance_metrics}
    */
    readonly advancedPerformanceMetrics?: StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsProperty;
    /**
    * Enables detailed status codes metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#detailed_status_codes_metrics CcStorageLens#detailed_status_codes_metrics}
    */
    readonly detailedStatusCodesMetrics?: DetailedStatusCodesMetricsProperty;
    /**
    * Prefix-level metrics configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#prefix_level CcStorageLens#prefix_level}
    */
    readonly prefixLevel?: PrefixLevelProperty;
}
export class BucketLevelPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BucketLevelProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._activityMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.activityMetrics = this._activityMetrics?.internalValue;
        }
        if (this._advancedCostOptimizationMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.advancedCostOptimizationMetrics = this._advancedCostOptimizationMetrics?.internalValue;
        }
        if (this._advancedDataProtectionMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.advancedDataProtectionMetrics = this._advancedDataProtectionMetrics?.internalValue;
        }
        if (this._advancedPerformanceMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.advancedPerformanceMetrics = this._advancedPerformanceMetrics?.internalValue;
        }
        if (this._detailedStatusCodesMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.detailedStatusCodesMetrics = this._detailedStatusCodesMetrics?.internalValue;
        }
        if (this._prefixLevel?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefixLevel = this._prefixLevel?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BucketLevelProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._activityMetrics.internalValue = undefined;
            this._advancedCostOptimizationMetrics.internalValue = undefined;
            this._advancedDataProtectionMetrics.internalValue = undefined;
            this._advancedPerformanceMetrics.internalValue = undefined;
            this._detailedStatusCodesMetrics.internalValue = undefined;
            this._prefixLevel.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._activityMetrics.internalValue = value.activityMetrics;
            this._advancedCostOptimizationMetrics.internalValue = value.advancedCostOptimizationMetrics;
            this._advancedDataProtectionMetrics.internalValue = value.advancedDataProtectionMetrics;
            this._advancedPerformanceMetrics.internalValue = value.advancedPerformanceMetrics;
            this._detailedStatusCodesMetrics.internalValue = value.detailedStatusCodesMetrics;
            this._prefixLevel.internalValue = value.prefixLevel;
        }
    }

    // activity_metrics - computed: true, optional: true, required: false
    private _activityMetrics = new StorageLensConfigurationAccountLevelBucketLevelActivityMetricsPropertyOutputReference(this, "activity_metrics");
    public get activityMetrics() {
        return this._activityMetrics;
    }
    public putActivityMetrics(value: StorageLensConfigurationAccountLevelBucketLevelActivityMetricsProperty) {
        this._activityMetrics.internalValue = value;
    }
    public resetActivityMetrics() {
        this._activityMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activityMetricsInput() {
        return this._activityMetrics.internalValue;
    }

    // advanced_cost_optimization_metrics - computed: true, optional: true, required: false
    private _advancedCostOptimizationMetrics = new StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsPropertyOutputReference(this, "advanced_cost_optimization_metrics");
    public get advancedCostOptimizationMetrics() {
        return this._advancedCostOptimizationMetrics;
    }
    public putAdvancedCostOptimizationMetrics(value: StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsProperty) {
        this._advancedCostOptimizationMetrics.internalValue = value;
    }
    public resetAdvancedCostOptimizationMetrics() {
        this._advancedCostOptimizationMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get advancedCostOptimizationMetricsInput() {
        return this._advancedCostOptimizationMetrics.internalValue;
    }

    // advanced_data_protection_metrics - computed: true, optional: true, required: false
    private _advancedDataProtectionMetrics = new StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsPropertyOutputReference(this, "advanced_data_protection_metrics");
    public get advancedDataProtectionMetrics() {
        return this._advancedDataProtectionMetrics;
    }
    public putAdvancedDataProtectionMetrics(value: StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsProperty) {
        this._advancedDataProtectionMetrics.internalValue = value;
    }
    public resetAdvancedDataProtectionMetrics() {
        this._advancedDataProtectionMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get advancedDataProtectionMetricsInput() {
        return this._advancedDataProtectionMetrics.internalValue;
    }

    // advanced_performance_metrics - computed: true, optional: true, required: false
    private _advancedPerformanceMetrics = new StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsPropertyOutputReference(this, "advanced_performance_metrics");
    public get advancedPerformanceMetrics() {
        return this._advancedPerformanceMetrics;
    }
    public putAdvancedPerformanceMetrics(value: StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsProperty) {
        this._advancedPerformanceMetrics.internalValue = value;
    }
    public resetAdvancedPerformanceMetrics() {
        this._advancedPerformanceMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get advancedPerformanceMetricsInput() {
        return this._advancedPerformanceMetrics.internalValue;
    }

    // detailed_status_codes_metrics - computed: true, optional: true, required: false
    private _detailedStatusCodesMetrics = new DetailedStatusCodesMetricsPropertyOutputReference(this, "detailed_status_codes_metrics");
    public get detailedStatusCodesMetrics() {
        return this._detailedStatusCodesMetrics;
    }
    public putDetailedStatusCodesMetrics(value: DetailedStatusCodesMetricsProperty) {
        this._detailedStatusCodesMetrics.internalValue = value;
    }
    public resetDetailedStatusCodesMetrics() {
        this._detailedStatusCodesMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detailedStatusCodesMetricsInput() {
        return this._detailedStatusCodesMetrics.internalValue;
    }

    // prefix_level - computed: true, optional: true, required: false
    private _prefixLevel = new PrefixLevelPropertyOutputReference(this, "prefix_level");
    public get prefixLevel() {
        return this._prefixLevel;
    }
    public putPrefixLevel(value: PrefixLevelProperty) {
        this._prefixLevel.internalValue = value;
    }
    public resetPrefixLevel() {
        this._prefixLevel.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixLevelInput() {
        return this._prefixLevel.internalValue;
    }
}
export interface StorageLensConfigurationAccountLevelDetailedStatusCodesMetricsProperty {
    /**
    * Specifies whether detailed status codes metrics are enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled CcStorageLens#is_enabled}
    */
    readonly isEnabled?: boolean | cdktn.IResolvable;
}
export class StorageLensConfigurationAccountLevelDetailedStatusCodesMetricsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageLensConfigurationAccountLevelDetailedStatusCodesMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isEnabled = this._isEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageLensConfigurationAccountLevelDetailedStatusCodesMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isEnabled = value.isEnabled;
        }
    }

    // is_enabled - computed: true, optional: true, required: false
    private _isEnabled?: boolean | cdktn.IResolvable; 
    public get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktn.IResolvable) {
        this._isEnabled = value;
    }
    public resetIsEnabled() {
        this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
        return this._isEnabled;
    }
}
export interface StorageLensGroupSelectionCriteriaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#exclude CcStorageLens#exclude}
    */
    readonly exclude?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#include CcStorageLens#include}
    */
    readonly include?: string[];
}
export class StorageLensGroupSelectionCriteriaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageLensGroupSelectionCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._exclude !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclude = this._exclude;
        }
        if (this._include !== undefined) {
            hasAnyValues = true;
            internalValueResult.include = this._include;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageLensGroupSelectionCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exclude = undefined;
            this._include = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exclude = value.exclude;
            this._include = value.include;
        }
    }

    // exclude - computed: true, optional: true, required: false
    private _exclude?: string[]; 
    public get exclude() {
        return cdktn.Fn.tolist(this.getListAttribute('exclude'));
    }
    public set exclude(value: string[]) {
        this._exclude = value;
    }
    public resetExclude() {
        this._exclude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeInput() {
        return this._exclude;
    }

    // include - computed: true, optional: true, required: false
    private _include?: string[]; 
    public get include() {
        return cdktn.Fn.tolist(this.getListAttribute('include'));
    }
    public set include(value: string[]) {
        this._include = value;
    }
    public resetInclude() {
        this._include = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeInput() {
        return this._include;
    }
}
export interface StorageLensGroupLevelProperty {
    /**
    * Selection criteria for Storage Lens Group level metrics
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#storage_lens_group_selection_criteria CcStorageLens#storage_lens_group_selection_criteria}
    */
    readonly storageLensGroupSelectionCriteria?: StorageLensGroupSelectionCriteriaProperty;
}
export class StorageLensGroupLevelPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageLensGroupLevelProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._storageLensGroupSelectionCriteria?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageLensGroupSelectionCriteria = this._storageLensGroupSelectionCriteria?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageLensGroupLevelProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._storageLensGroupSelectionCriteria.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._storageLensGroupSelectionCriteria.internalValue = value.storageLensGroupSelectionCriteria;
        }
    }

    // storage_lens_group_selection_criteria - computed: true, optional: true, required: false
    private _storageLensGroupSelectionCriteria = new StorageLensGroupSelectionCriteriaPropertyOutputReference(this, "storage_lens_group_selection_criteria");
    public get storageLensGroupSelectionCriteria() {
        return this._storageLensGroupSelectionCriteria;
    }
    public putStorageLensGroupSelectionCriteria(value: StorageLensGroupSelectionCriteriaProperty) {
        this._storageLensGroupSelectionCriteria.internalValue = value;
    }
    public resetStorageLensGroupSelectionCriteria() {
        this._storageLensGroupSelectionCriteria.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageLensGroupSelectionCriteriaInput() {
        return this._storageLensGroupSelectionCriteria.internalValue;
    }
}
export interface AccountLevelProperty {
    /**
    * Enables activity metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#activity_metrics CcStorageLens#activity_metrics}
    */
    readonly activityMetrics?: ActivityMetricsProperty;
    /**
    * Enables advanced cost optimization metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#advanced_cost_optimization_metrics CcStorageLens#advanced_cost_optimization_metrics}
    */
    readonly advancedCostOptimizationMetrics?: AdvancedCostOptimizationMetricsProperty;
    /**
    * Enables advanced data protection metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#advanced_data_protection_metrics CcStorageLens#advanced_data_protection_metrics}
    */
    readonly advancedDataProtectionMetrics?: AdvancedDataProtectionMetricsProperty;
    /**
    * Advanced Performance Metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#advanced_performance_metrics CcStorageLens#advanced_performance_metrics}
    */
    readonly advancedPerformanceMetrics?: AdvancedPerformanceMetricsProperty;
    /**
    * Bucket-level metrics configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#bucket_level CcStorageLens#bucket_level}
    */
    readonly bucketLevel: BucketLevelProperty;
    /**
    * Enables detailed status codes metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#detailed_status_codes_metrics CcStorageLens#detailed_status_codes_metrics}
    */
    readonly detailedStatusCodesMetrics?: StorageLensConfigurationAccountLevelDetailedStatusCodesMetricsProperty;
    /**
    * Specifies the details of Amazon S3 Storage Lens Group configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#storage_lens_group_level CcStorageLens#storage_lens_group_level}
    */
    readonly storageLensGroupLevel?: StorageLensGroupLevelProperty;
}
export class AccountLevelPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccountLevelProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._activityMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.activityMetrics = this._activityMetrics?.internalValue;
        }
        if (this._advancedCostOptimizationMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.advancedCostOptimizationMetrics = this._advancedCostOptimizationMetrics?.internalValue;
        }
        if (this._advancedDataProtectionMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.advancedDataProtectionMetrics = this._advancedDataProtectionMetrics?.internalValue;
        }
        if (this._advancedPerformanceMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.advancedPerformanceMetrics = this._advancedPerformanceMetrics?.internalValue;
        }
        if (this._bucketLevel?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketLevel = this._bucketLevel?.internalValue;
        }
        if (this._detailedStatusCodesMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.detailedStatusCodesMetrics = this._detailedStatusCodesMetrics?.internalValue;
        }
        if (this._storageLensGroupLevel?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageLensGroupLevel = this._storageLensGroupLevel?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccountLevelProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._activityMetrics.internalValue = undefined;
            this._advancedCostOptimizationMetrics.internalValue = undefined;
            this._advancedDataProtectionMetrics.internalValue = undefined;
            this._advancedPerformanceMetrics.internalValue = undefined;
            this._bucketLevel.internalValue = undefined;
            this._detailedStatusCodesMetrics.internalValue = undefined;
            this._storageLensGroupLevel.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._activityMetrics.internalValue = value.activityMetrics;
            this._advancedCostOptimizationMetrics.internalValue = value.advancedCostOptimizationMetrics;
            this._advancedDataProtectionMetrics.internalValue = value.advancedDataProtectionMetrics;
            this._advancedPerformanceMetrics.internalValue = value.advancedPerformanceMetrics;
            this._bucketLevel.internalValue = value.bucketLevel;
            this._detailedStatusCodesMetrics.internalValue = value.detailedStatusCodesMetrics;
            this._storageLensGroupLevel.internalValue = value.storageLensGroupLevel;
        }
    }

    // activity_metrics - computed: true, optional: true, required: false
    private _activityMetrics = new ActivityMetricsPropertyOutputReference(this, "activity_metrics");
    public get activityMetrics() {
        return this._activityMetrics;
    }
    public putActivityMetrics(value: ActivityMetricsProperty) {
        this._activityMetrics.internalValue = value;
    }
    public resetActivityMetrics() {
        this._activityMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activityMetricsInput() {
        return this._activityMetrics.internalValue;
    }

    // advanced_cost_optimization_metrics - computed: true, optional: true, required: false
    private _advancedCostOptimizationMetrics = new AdvancedCostOptimizationMetricsPropertyOutputReference(this, "advanced_cost_optimization_metrics");
    public get advancedCostOptimizationMetrics() {
        return this._advancedCostOptimizationMetrics;
    }
    public putAdvancedCostOptimizationMetrics(value: AdvancedCostOptimizationMetricsProperty) {
        this._advancedCostOptimizationMetrics.internalValue = value;
    }
    public resetAdvancedCostOptimizationMetrics() {
        this._advancedCostOptimizationMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get advancedCostOptimizationMetricsInput() {
        return this._advancedCostOptimizationMetrics.internalValue;
    }

    // advanced_data_protection_metrics - computed: true, optional: true, required: false
    private _advancedDataProtectionMetrics = new AdvancedDataProtectionMetricsPropertyOutputReference(this, "advanced_data_protection_metrics");
    public get advancedDataProtectionMetrics() {
        return this._advancedDataProtectionMetrics;
    }
    public putAdvancedDataProtectionMetrics(value: AdvancedDataProtectionMetricsProperty) {
        this._advancedDataProtectionMetrics.internalValue = value;
    }
    public resetAdvancedDataProtectionMetrics() {
        this._advancedDataProtectionMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get advancedDataProtectionMetricsInput() {
        return this._advancedDataProtectionMetrics.internalValue;
    }

    // advanced_performance_metrics - computed: true, optional: true, required: false
    private _advancedPerformanceMetrics = new AdvancedPerformanceMetricsPropertyOutputReference(this, "advanced_performance_metrics");
    public get advancedPerformanceMetrics() {
        return this._advancedPerformanceMetrics;
    }
    public putAdvancedPerformanceMetrics(value: AdvancedPerformanceMetricsProperty) {
        this._advancedPerformanceMetrics.internalValue = value;
    }
    public resetAdvancedPerformanceMetrics() {
        this._advancedPerformanceMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get advancedPerformanceMetricsInput() {
        return this._advancedPerformanceMetrics.internalValue;
    }

    // bucket_level - computed: false, optional: false, required: true
    private _bucketLevel = new BucketLevelPropertyOutputReference(this, "bucket_level");
    public get bucketLevel() {
        return this._bucketLevel;
    }
    public putBucketLevel(value: BucketLevelProperty) {
        this._bucketLevel.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketLevelInput() {
        return this._bucketLevel.internalValue;
    }

    // detailed_status_codes_metrics - computed: true, optional: true, required: false
    private _detailedStatusCodesMetrics = new StorageLensConfigurationAccountLevelDetailedStatusCodesMetricsPropertyOutputReference(this, "detailed_status_codes_metrics");
    public get detailedStatusCodesMetrics() {
        return this._detailedStatusCodesMetrics;
    }
    public putDetailedStatusCodesMetrics(value: StorageLensConfigurationAccountLevelDetailedStatusCodesMetricsProperty) {
        this._detailedStatusCodesMetrics.internalValue = value;
    }
    public resetDetailedStatusCodesMetrics() {
        this._detailedStatusCodesMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detailedStatusCodesMetricsInput() {
        return this._detailedStatusCodesMetrics.internalValue;
    }

    // storage_lens_group_level - computed: true, optional: true, required: false
    private _storageLensGroupLevel = new StorageLensGroupLevelPropertyOutputReference(this, "storage_lens_group_level");
    public get storageLensGroupLevel() {
        return this._storageLensGroupLevel;
    }
    public putStorageLensGroupLevel(value: StorageLensGroupLevelProperty) {
        this._storageLensGroupLevel.internalValue = value;
    }
    public resetStorageLensGroupLevel() {
        this._storageLensGroupLevel.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageLensGroupLevelInput() {
        return this._storageLensGroupLevel.internalValue;
    }
}
export interface AwsOrgProperty {
    /**
    * The Amazon Resource Name (ARN) of the specified resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#arn CcStorageLens#arn}
    */
    readonly arn?: string;
}
export class AwsOrgPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AwsOrgProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AwsOrgProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
        }
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }
}
export interface CloudWatchMetricsProperty {
    /**
    * Specifies whether CloudWatch metrics are enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled CcStorageLens#is_enabled}
    */
    readonly isEnabled?: boolean | cdktn.IResolvable;
}
export class CloudWatchMetricsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudWatchMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isEnabled = this._isEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudWatchMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isEnabled = value.isEnabled;
        }
    }

    // is_enabled - computed: true, optional: true, required: false
    private _isEnabled?: boolean | cdktn.IResolvable; 
    public get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktn.IResolvable) {
        this._isEnabled = value;
    }
    public resetIsEnabled() {
        this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
        return this._isEnabled;
    }
}
export interface SSEKMSProperty {
    /**
    * The ARN of the KMS key to use for encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#key_id CcStorageLens#key_id}
    */
    readonly keyId?: string;
}
export class SSEKMSPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SSEKMSProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyId = this._keyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SSEKMSProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyId = value.keyId;
        }
    }

    // key_id - computed: true, optional: true, required: false
    private _keyId?: string; 
    public get keyId() {
        return this.getStringAttribute('key_id');
    }
    public set keyId(value: string) {
        this._keyId = value;
    }
    public resetKeyId() {
        this._keyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyIdInput() {
        return this._keyId;
    }
}
export interface EncryptionProperty {
    /**
    * AWS KMS server-side encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#ssekms CcStorageLens#ssekms}
    */
    readonly ssekms?: SSEKMSProperty;
    /**
    * S3 default server-side encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#sses3 CcStorageLens#sses3}
    */
    readonly sses3?: string;
}
export class EncryptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ssekms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ssekms = this._ssekms?.internalValue;
        }
        if (this._sses3 !== undefined) {
            hasAnyValues = true;
            internalValueResult.sses3 = this._sses3;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ssekms.internalValue = undefined;
            this._sses3 = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ssekms.internalValue = value.ssekms;
            this._sses3 = value.sses3;
        }
    }

    // ssekms - computed: true, optional: true, required: false
    private _ssekms = new SSEKMSPropertyOutputReference(this, "ssekms");
    public get ssekms() {
        return this._ssekms;
    }
    public putSsekms(value: SSEKMSProperty) {
        this._ssekms.internalValue = value;
    }
    public resetSsekms() {
        this._ssekms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ssekmsInput() {
        return this._ssekms.internalValue;
    }

    // sses3 - computed: true, optional: true, required: false
    private _sses3?: string; 
    public get sses3() {
        return this.getStringAttribute('sses3');
    }
    public set sses3(value: string) {
        this._sses3 = value;
    }
    public resetSses3() {
        this._sses3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sses3Input() {
        return this._sses3;
    }
}
export interface S3BucketDestinationProperty {
    /**
    * The AWS account ID that owns the destination S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#account_id CcStorageLens#account_id}
    */
    readonly accountId?: string;
    /**
    * The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#arn CcStorageLens#arn}
    */
    readonly arn?: string;
    /**
    * Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#encryption CcStorageLens#encryption}
    */
    readonly encryption?: EncryptionProperty;
    /**
    * Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#format CcStorageLens#format}
    */
    readonly format?: string;
    /**
    * The version of the output schema to use when exporting Amazon S3 Storage Lens metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#output_schema_version CcStorageLens#output_schema_version}
    */
    readonly outputSchemaVersion?: string;
    /**
    * The prefix to use for Amazon S3 Storage Lens export.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#prefix CcStorageLens#prefix}
    */
    readonly prefix?: string;
}
export class S3BucketDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3BucketDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._encryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryption = this._encryption?.internalValue;
        }
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._outputSchemaVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputSchemaVersion = this._outputSchemaVersion;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3BucketDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
            this._arn = undefined;
            this._encryption.internalValue = undefined;
            this._format = undefined;
            this._outputSchemaVersion = undefined;
            this._prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountId = value.accountId;
            this._arn = value.arn;
            this._encryption.internalValue = value.encryption;
            this._format = value.format;
            this._outputSchemaVersion = value.outputSchemaVersion;
            this._prefix = value.prefix;
        }
    }

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    public resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }

    // encryption - computed: true, optional: true, required: false
    private _encryption = new EncryptionPropertyOutputReference(this, "encryption");
    public get encryption() {
        return this._encryption;
    }
    public putEncryption(value: EncryptionProperty) {
        this._encryption.internalValue = value;
    }
    public resetEncryption() {
        this._encryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionInput() {
        return this._encryption.internalValue;
    }

    // format - computed: true, optional: true, required: false
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    public resetFormat() {
        this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
    }

    // output_schema_version - computed: true, optional: true, required: false
    private _outputSchemaVersion?: string; 
    public get outputSchemaVersion() {
        return this.getStringAttribute('output_schema_version');
    }
    public set outputSchemaVersion(value: string) {
        this._outputSchemaVersion = value;
    }
    public resetOutputSchemaVersion() {
        this._outputSchemaVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputSchemaVersionInput() {
        return this._outputSchemaVersion;
    }

    // prefix - computed: true, optional: true, required: false
    private _prefix?: string; 
    public get prefix() {
        return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
        this._prefix = value;
    }
    public resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
        return this._prefix;
    }
}
export interface StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsProperty {
    /**
    * The ARN of the KMS key to use for encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#key_id CcStorageLens#key_id}
    */
    readonly keyId?: string;
}
export class StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyId = this._keyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyId = value.keyId;
        }
    }

    // key_id - computed: true, optional: true, required: false
    private _keyId?: string; 
    public get keyId() {
        return this.getStringAttribute('key_id');
    }
    public set keyId(value: string) {
        this._keyId = value;
    }
    public resetKeyId() {
        this._keyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyIdInput() {
        return this._keyId;
    }
}
export interface StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionProperty {
    /**
    * AWS KMS server-side encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#ssekms CcStorageLens#ssekms}
    */
    readonly ssekms?: StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsProperty;
    /**
    * S3 default server-side encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#sses3 CcStorageLens#sses3}
    */
    readonly sses3?: string;
}
export class StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ssekms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ssekms = this._ssekms?.internalValue;
        }
        if (this._sses3 !== undefined) {
            hasAnyValues = true;
            internalValueResult.sses3 = this._sses3;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ssekms.internalValue = undefined;
            this._sses3 = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ssekms.internalValue = value.ssekms;
            this._sses3 = value.sses3;
        }
    }

    // ssekms - computed: true, optional: true, required: false
    private _ssekms = new StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsPropertyOutputReference(this, "ssekms");
    public get ssekms() {
        return this._ssekms;
    }
    public putSsekms(value: StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsProperty) {
        this._ssekms.internalValue = value;
    }
    public resetSsekms() {
        this._ssekms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ssekmsInput() {
        return this._ssekms.internalValue;
    }

    // sses3 - computed: true, optional: true, required: false
    private _sses3?: string; 
    public get sses3() {
        return this.getStringAttribute('sses3');
    }
    public set sses3(value: string) {
        this._sses3 = value;
    }
    public resetSses3() {
        this._sses3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sses3Input() {
        return this._sses3;
    }
}
export interface StorageLensTableDestinationProperty {
    /**
    * Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#encryption CcStorageLens#encryption}
    */
    readonly encryption?: StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionProperty;
    /**
    * Specifies whether the export to S3 Tables is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled CcStorageLens#is_enabled}
    */
    readonly isEnabled?: boolean | cdktn.IResolvable;
}
export class StorageLensTableDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageLensTableDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryption = this._encryption?.internalValue;
        }
        if (this._isEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isEnabled = this._isEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageLensTableDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryption.internalValue = undefined;
            this._isEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryption.internalValue = value.encryption;
            this._isEnabled = value.isEnabled;
        }
    }

    // encryption - computed: true, optional: true, required: false
    private _encryption = new StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionPropertyOutputReference(this, "encryption");
    public get encryption() {
        return this._encryption;
    }
    public putEncryption(value: StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionProperty) {
        this._encryption.internalValue = value;
    }
    public resetEncryption() {
        this._encryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionInput() {
        return this._encryption.internalValue;
    }

    // is_enabled - computed: true, optional: true, required: false
    private _isEnabled?: boolean | cdktn.IResolvable; 
    public get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktn.IResolvable) {
        this._isEnabled = value;
    }
    public resetIsEnabled() {
        this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
        return this._isEnabled;
    }
}
export interface DataExportProperty {
    /**
    * CloudWatch metrics settings for the Amazon S3 Storage Lens metrics export.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#cloudwatch_metrics CcStorageLens#cloudwatch_metrics}
    */
    readonly cloudwatchMetrics?: CloudWatchMetricsProperty;
    /**
    * S3 bucket destination settings for the Amazon S3 Storage Lens metrics export.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#s3_bucket_destination CcStorageLens#s3_bucket_destination}
    */
    readonly s3BucketDestination?: S3BucketDestinationProperty;
    /**
    * S3 Tables destination settings for the Amazon S3 Storage Lens metrics export.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#storage_lens_table_destination CcStorageLens#storage_lens_table_destination}
    */
    readonly storageLensTableDestination?: StorageLensTableDestinationProperty;
}
export class DataExportPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataExportProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchMetrics = this._cloudwatchMetrics?.internalValue;
        }
        if (this._s3BucketDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketDestination = this._s3BucketDestination?.internalValue;
        }
        if (this._storageLensTableDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageLensTableDestination = this._storageLensTableDestination?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataExportProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchMetrics.internalValue = undefined;
            this._s3BucketDestination.internalValue = undefined;
            this._storageLensTableDestination.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchMetrics.internalValue = value.cloudwatchMetrics;
            this._s3BucketDestination.internalValue = value.s3BucketDestination;
            this._storageLensTableDestination.internalValue = value.storageLensTableDestination;
        }
    }

    // cloudwatch_metrics - computed: true, optional: true, required: false
    private _cloudwatchMetrics = new CloudWatchMetricsPropertyOutputReference(this, "cloudwatch_metrics");
    public get cloudwatchMetrics() {
        return this._cloudwatchMetrics;
    }
    public putCloudwatchMetrics(value: CloudWatchMetricsProperty) {
        this._cloudwatchMetrics.internalValue = value;
    }
    public resetCloudwatchMetrics() {
        this._cloudwatchMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchMetricsInput() {
        return this._cloudwatchMetrics.internalValue;
    }

    // s3_bucket_destination - computed: true, optional: true, required: false
    private _s3BucketDestination = new S3BucketDestinationPropertyOutputReference(this, "s3_bucket_destination");
    public get s3BucketDestination() {
        return this._s3BucketDestination;
    }
    public putS3BucketDestination(value: S3BucketDestinationProperty) {
        this._s3BucketDestination.internalValue = value;
    }
    public resetS3BucketDestination() {
        this._s3BucketDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketDestinationInput() {
        return this._s3BucketDestination.internalValue;
    }

    // storage_lens_table_destination - computed: true, optional: true, required: false
    private _storageLensTableDestination = new StorageLensTableDestinationPropertyOutputReference(this, "storage_lens_table_destination");
    public get storageLensTableDestination() {
        return this._storageLensTableDestination;
    }
    public putStorageLensTableDestination(value: StorageLensTableDestinationProperty) {
        this._storageLensTableDestination.internalValue = value;
    }
    public resetStorageLensTableDestination() {
        this._storageLensTableDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageLensTableDestinationInput() {
        return this._storageLensTableDestination.internalValue;
    }
}
export interface BucketsAndRegionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#buckets CcStorageLens#buckets}
    */
    readonly buckets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#regions CcStorageLens#regions}
    */
    readonly regions?: string[];
}
export class BucketsAndRegionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BucketsAndRegionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._buckets !== undefined) {
            hasAnyValues = true;
            internalValueResult.buckets = this._buckets;
        }
        if (this._regions !== undefined) {
            hasAnyValues = true;
            internalValueResult.regions = this._regions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BucketsAndRegionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._buckets = undefined;
            this._regions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._buckets = value.buckets;
            this._regions = value.regions;
        }
    }

    // buckets - computed: true, optional: true, required: false
    private _buckets?: string[]; 
    public get buckets() {
        return cdktn.Fn.tolist(this.getListAttribute('buckets'));
    }
    public set buckets(value: string[]) {
        this._buckets = value;
    }
    public resetBuckets() {
        this._buckets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketsInput() {
        return this._buckets;
    }

    // regions - computed: true, optional: true, required: false
    private _regions?: string[]; 
    public get regions() {
        return cdktn.Fn.tolist(this.getListAttribute('regions'));
    }
    public set regions(value: string[]) {
        this._regions = value;
    }
    public resetRegions() {
        this._regions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionsInput() {
        return this._regions;
    }
}
export interface StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsProperty {
    /**
    * The ARN of the KMS key to use for encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#key_id CcStorageLens#key_id}
    */
    readonly keyId?: string;
}
export class StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyId = this._keyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyId = value.keyId;
        }
    }

    // key_id - computed: true, optional: true, required: false
    private _keyId?: string; 
    public get keyId() {
        return this.getStringAttribute('key_id');
    }
    public set keyId(value: string) {
        this._keyId = value;
    }
    public resetKeyId() {
        this._keyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyIdInput() {
        return this._keyId;
    }
}
export interface StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionProperty {
    /**
    * AWS KMS server-side encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#ssekms CcStorageLens#ssekms}
    */
    readonly ssekms?: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsProperty;
    /**
    * S3 default server-side encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#sses3 CcStorageLens#sses3}
    */
    readonly sses3?: string;
}
export class StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ssekms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ssekms = this._ssekms?.internalValue;
        }
        if (this._sses3 !== undefined) {
            hasAnyValues = true;
            internalValueResult.sses3 = this._sses3;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ssekms.internalValue = undefined;
            this._sses3 = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ssekms.internalValue = value.ssekms;
            this._sses3 = value.sses3;
        }
    }

    // ssekms - computed: true, optional: true, required: false
    private _ssekms = new StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsPropertyOutputReference(this, "ssekms");
    public get ssekms() {
        return this._ssekms;
    }
    public putSsekms(value: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsProperty) {
        this._ssekms.internalValue = value;
    }
    public resetSsekms() {
        this._ssekms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ssekmsInput() {
        return this._ssekms.internalValue;
    }

    // sses3 - computed: true, optional: true, required: false
    private _sses3?: string; 
    public get sses3() {
        return this.getStringAttribute('sses3');
    }
    public set sses3(value: string) {
        this._sses3 = value;
    }
    public resetSses3() {
        this._sses3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sses3Input() {
        return this._sses3;
    }
}
export interface StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationProperty {
    /**
    * The AWS account ID that owns the destination S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#account_id CcStorageLens#account_id}
    */
    readonly accountId?: string;
    /**
    * The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#arn CcStorageLens#arn}
    */
    readonly arn?: string;
    /**
    * Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#encryption CcStorageLens#encryption}
    */
    readonly encryption?: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionProperty;
    /**
    * Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#format CcStorageLens#format}
    */
    readonly format?: string;
    /**
    * The version of the output schema to use when exporting Amazon S3 Storage Lens metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#output_schema_version CcStorageLens#output_schema_version}
    */
    readonly outputSchemaVersion?: string;
    /**
    * The prefix to use for Amazon S3 Storage Lens export.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#prefix CcStorageLens#prefix}
    */
    readonly prefix?: string;
}
export class StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._encryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryption = this._encryption?.internalValue;
        }
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._outputSchemaVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputSchemaVersion = this._outputSchemaVersion;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
            this._arn = undefined;
            this._encryption.internalValue = undefined;
            this._format = undefined;
            this._outputSchemaVersion = undefined;
            this._prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountId = value.accountId;
            this._arn = value.arn;
            this._encryption.internalValue = value.encryption;
            this._format = value.format;
            this._outputSchemaVersion = value.outputSchemaVersion;
            this._prefix = value.prefix;
        }
    }

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    public resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }

    // encryption - computed: true, optional: true, required: false
    private _encryption = new StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionPropertyOutputReference(this, "encryption");
    public get encryption() {
        return this._encryption;
    }
    public putEncryption(value: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionProperty) {
        this._encryption.internalValue = value;
    }
    public resetEncryption() {
        this._encryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionInput() {
        return this._encryption.internalValue;
    }

    // format - computed: true, optional: true, required: false
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    public resetFormat() {
        this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
    }

    // output_schema_version - computed: true, optional: true, required: false
    private _outputSchemaVersion?: string; 
    public get outputSchemaVersion() {
        return this.getStringAttribute('output_schema_version');
    }
    public set outputSchemaVersion(value: string) {
        this._outputSchemaVersion = value;
    }
    public resetOutputSchemaVersion() {
        this._outputSchemaVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputSchemaVersionInput() {
        return this._outputSchemaVersion;
    }

    // prefix - computed: true, optional: true, required: false
    private _prefix?: string; 
    public get prefix() {
        return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
        this._prefix = value;
    }
    public resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
        return this._prefix;
    }
}
export interface StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsProperty {
    /**
    * The ARN of the KMS key to use for encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#key_id CcStorageLens#key_id}
    */
    readonly keyId?: string;
}
export class StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyId = this._keyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyId = value.keyId;
        }
    }

    // key_id - computed: true, optional: true, required: false
    private _keyId?: string; 
    public get keyId() {
        return this.getStringAttribute('key_id');
    }
    public set keyId(value: string) {
        this._keyId = value;
    }
    public resetKeyId() {
        this._keyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyIdInput() {
        return this._keyId;
    }
}
export interface StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionProperty {
    /**
    * AWS KMS server-side encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#ssekms CcStorageLens#ssekms}
    */
    readonly ssekms?: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsProperty;
    /**
    * S3 default server-side encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#sses3 CcStorageLens#sses3}
    */
    readonly sses3?: string;
}
export class StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ssekms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ssekms = this._ssekms?.internalValue;
        }
        if (this._sses3 !== undefined) {
            hasAnyValues = true;
            internalValueResult.sses3 = this._sses3;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ssekms.internalValue = undefined;
            this._sses3 = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ssekms.internalValue = value.ssekms;
            this._sses3 = value.sses3;
        }
    }

    // ssekms - computed: true, optional: true, required: false
    private _ssekms = new StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsPropertyOutputReference(this, "ssekms");
    public get ssekms() {
        return this._ssekms;
    }
    public putSsekms(value: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsProperty) {
        this._ssekms.internalValue = value;
    }
    public resetSsekms() {
        this._ssekms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ssekmsInput() {
        return this._ssekms.internalValue;
    }

    // sses3 - computed: true, optional: true, required: false
    private _sses3?: string; 
    public get sses3() {
        return this.getStringAttribute('sses3');
    }
    public set sses3(value: string) {
        this._sses3 = value;
    }
    public resetSses3() {
        this._sses3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sses3Input() {
        return this._sses3;
    }
}
export interface StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationProperty {
    /**
    * Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#encryption CcStorageLens#encryption}
    */
    readonly encryption?: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionProperty;
    /**
    * Specifies whether the export to S3 Tables is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled CcStorageLens#is_enabled}
    */
    readonly isEnabled?: boolean | cdktn.IResolvable;
}
export class StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryption = this._encryption?.internalValue;
        }
        if (this._isEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isEnabled = this._isEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryption.internalValue = undefined;
            this._isEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryption.internalValue = value.encryption;
            this._isEnabled = value.isEnabled;
        }
    }

    // encryption - computed: true, optional: true, required: false
    private _encryption = new StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionPropertyOutputReference(this, "encryption");
    public get encryption() {
        return this._encryption;
    }
    public putEncryption(value: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionProperty) {
        this._encryption.internalValue = value;
    }
    public resetEncryption() {
        this._encryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionInput() {
        return this._encryption.internalValue;
    }

    // is_enabled - computed: true, optional: true, required: false
    private _isEnabled?: boolean | cdktn.IResolvable; 
    public get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktn.IResolvable) {
        this._isEnabled = value;
    }
    public resetIsEnabled() {
        this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
        return this._isEnabled;
    }
}
export interface StorageLensExpandedPrefixesDataExportProperty {
    /**
    * S3 bucket destination settings for the Amazon S3 Storage Lens metrics export.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#s3_bucket_destination CcStorageLens#s3_bucket_destination}
    */
    readonly s3BucketDestination?: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationProperty;
    /**
    * S3 Tables destination settings for the Amazon S3 Storage Lens metrics export.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#storage_lens_table_destination CcStorageLens#storage_lens_table_destination}
    */
    readonly storageLensTableDestination?: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationProperty;
}
export class StorageLensExpandedPrefixesDataExportPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageLensExpandedPrefixesDataExportProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3BucketDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketDestination = this._s3BucketDestination?.internalValue;
        }
        if (this._storageLensTableDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageLensTableDestination = this._storageLensTableDestination?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageLensExpandedPrefixesDataExportProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3BucketDestination.internalValue = undefined;
            this._storageLensTableDestination.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3BucketDestination.internalValue = value.s3BucketDestination;
            this._storageLensTableDestination.internalValue = value.storageLensTableDestination;
        }
    }

    // s3_bucket_destination - computed: true, optional: true, required: false
    private _s3BucketDestination = new StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationPropertyOutputReference(this, "s3_bucket_destination");
    public get s3BucketDestination() {
        return this._s3BucketDestination;
    }
    public putS3BucketDestination(value: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationProperty) {
        this._s3BucketDestination.internalValue = value;
    }
    public resetS3BucketDestination() {
        this._s3BucketDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketDestinationInput() {
        return this._s3BucketDestination.internalValue;
    }

    // storage_lens_table_destination - computed: true, optional: true, required: false
    private _storageLensTableDestination = new StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationPropertyOutputReference(this, "storage_lens_table_destination");
    public get storageLensTableDestination() {
        return this._storageLensTableDestination;
    }
    public putStorageLensTableDestination(value: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationProperty) {
        this._storageLensTableDestination.internalValue = value;
    }
    public resetStorageLensTableDestination() {
        this._storageLensTableDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageLensTableDestinationInput() {
        return this._storageLensTableDestination.internalValue;
    }
}
export interface IncludeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#buckets CcStorageLens#buckets}
    */
    readonly buckets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#regions CcStorageLens#regions}
    */
    readonly regions?: string[];
}
export class IncludePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IncludeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._buckets !== undefined) {
            hasAnyValues = true;
            internalValueResult.buckets = this._buckets;
        }
        if (this._regions !== undefined) {
            hasAnyValues = true;
            internalValueResult.regions = this._regions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IncludeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._buckets = undefined;
            this._regions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._buckets = value.buckets;
            this._regions = value.regions;
        }
    }

    // buckets - computed: true, optional: true, required: false
    private _buckets?: string[]; 
    public get buckets() {
        return cdktn.Fn.tolist(this.getListAttribute('buckets'));
    }
    public set buckets(value: string[]) {
        this._buckets = value;
    }
    public resetBuckets() {
        this._buckets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketsInput() {
        return this._buckets;
    }

    // regions - computed: true, optional: true, required: false
    private _regions?: string[]; 
    public get regions() {
        return cdktn.Fn.tolist(this.getListAttribute('regions'));
    }
    public set regions(value: string[]) {
        this._regions = value;
    }
    public resetRegions() {
        this._regions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionsInput() {
        return this._regions;
    }
}
export interface StorageLensConfigurationProperty {
    /**
    * Account-level metrics configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#account_level CcStorageLens#account_level}
    */
    readonly accountLevel: AccountLevelProperty;
    /**
    * The AWS Organizations ARN to use in the Amazon S3 Storage Lens configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#aws_org CcStorageLens#aws_org}
    */
    readonly awsOrg?: AwsOrgProperty;
    /**
    * Specifies how Amazon S3 Storage Lens metrics should be exported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#data_export CcStorageLens#data_export}
    */
    readonly dataExport?: DataExportProperty;
    /**
    * S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#exclude CcStorageLens#exclude}
    */
    readonly exclude?: BucketsAndRegionsProperty;
    /**
    * Expanded Prefixes Data Export.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#expanded_prefixes_data_export CcStorageLens#expanded_prefixes_data_export}
    */
    readonly expandedPrefixesDataExport?: StorageLensExpandedPrefixesDataExportProperty;
    /**
    * The ID that identifies the Amazon S3 Storage Lens configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#id CcStorageLens#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#include CcStorageLens#include}
    */
    readonly include?: IncludeProperty;
    /**
    * Specifies whether the Amazon S3 Storage Lens configuration is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled CcStorageLens#is_enabled}
    */
    readonly isEnabled: boolean | cdktn.IResolvable;
    /**
    * The delimiter to divide S3 key into hierarchy of prefixes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#prefix_delimiter CcStorageLens#prefix_delimiter}
    */
    readonly prefixDelimiter?: string;
}
export class StorageLensConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageLensConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountLevel?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountLevel = this._accountLevel?.internalValue;
        }
        if (this._awsOrg?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsOrg = this._awsOrg?.internalValue;
        }
        if (this._dataExport?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataExport = this._dataExport?.internalValue;
        }
        if (this._exclude?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclude = this._exclude?.internalValue;
        }
        if (this._expandedPrefixesDataExport?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.expandedPrefixesDataExport = this._expandedPrefixesDataExport?.internalValue;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._include?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.include = this._include?.internalValue;
        }
        if (this._isEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isEnabled = this._isEnabled;
        }
        if (this._prefixDelimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefixDelimiter = this._prefixDelimiter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageLensConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountLevel.internalValue = undefined;
            this._awsOrg.internalValue = undefined;
            this._dataExport.internalValue = undefined;
            this._exclude.internalValue = undefined;
            this._expandedPrefixesDataExport.internalValue = undefined;
            this._id = undefined;
            this._include.internalValue = undefined;
            this._isEnabled = undefined;
            this._prefixDelimiter = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountLevel.internalValue = value.accountLevel;
            this._awsOrg.internalValue = value.awsOrg;
            this._dataExport.internalValue = value.dataExport;
            this._exclude.internalValue = value.exclude;
            this._expandedPrefixesDataExport.internalValue = value.expandedPrefixesDataExport;
            this._id = value.id;
            this._include.internalValue = value.include;
            this._isEnabled = value.isEnabled;
            this._prefixDelimiter = value.prefixDelimiter;
        }
    }

    // account_level - computed: false, optional: false, required: true
    private _accountLevel = new AccountLevelPropertyOutputReference(this, "account_level");
    public get accountLevel() {
        return this._accountLevel;
    }
    public putAccountLevel(value: AccountLevelProperty) {
        this._accountLevel.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountLevelInput() {
        return this._accountLevel.internalValue;
    }

    // aws_org - computed: true, optional: true, required: false
    private _awsOrg = new AwsOrgPropertyOutputReference(this, "aws_org");
    public get awsOrg() {
        return this._awsOrg;
    }
    public putAwsOrg(value: AwsOrgProperty) {
        this._awsOrg.internalValue = value;
    }
    public resetAwsOrg() {
        this._awsOrg.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsOrgInput() {
        return this._awsOrg.internalValue;
    }

    // data_export - computed: true, optional: true, required: false
    private _dataExport = new DataExportPropertyOutputReference(this, "data_export");
    public get dataExport() {
        return this._dataExport;
    }
    public putDataExport(value: DataExportProperty) {
        this._dataExport.internalValue = value;
    }
    public resetDataExport() {
        this._dataExport.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataExportInput() {
        return this._dataExport.internalValue;
    }

    // exclude - computed: true, optional: true, required: false
    private _exclude = new BucketsAndRegionsPropertyOutputReference(this, "exclude");
    public get exclude() {
        return this._exclude;
    }
    public putExclude(value: BucketsAndRegionsProperty) {
        this._exclude.internalValue = value;
    }
    public resetExclude() {
        this._exclude.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeInput() {
        return this._exclude.internalValue;
    }

    // expanded_prefixes_data_export - computed: true, optional: true, required: false
    private _expandedPrefixesDataExport = new StorageLensExpandedPrefixesDataExportPropertyOutputReference(this, "expanded_prefixes_data_export");
    public get expandedPrefixesDataExport() {
        return this._expandedPrefixesDataExport;
    }
    public putExpandedPrefixesDataExport(value: StorageLensExpandedPrefixesDataExportProperty) {
        this._expandedPrefixesDataExport.internalValue = value;
    }
    public resetExpandedPrefixesDataExport() {
        this._expandedPrefixesDataExport.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expandedPrefixesDataExportInput() {
        return this._expandedPrefixesDataExport.internalValue;
    }

    // id - computed: false, optional: false, required: true
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // include - computed: true, optional: true, required: false
    private _include = new IncludePropertyOutputReference(this, "include");
    public get include() {
        return this._include;
    }
    public putInclude(value: IncludeProperty) {
        this._include.internalValue = value;
    }
    public resetInclude() {
        this._include.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeInput() {
        return this._include.internalValue;
    }

    // is_enabled - computed: false, optional: false, required: true
    private _isEnabled?: boolean | cdktn.IResolvable; 
    public get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktn.IResolvable) {
        this._isEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
        return this._isEnabled;
    }

    // prefix_delimiter - computed: true, optional: true, required: false
    private _prefixDelimiter?: string; 
    public get prefixDelimiter() {
        return this.getStringAttribute('prefix_delimiter');
    }
    public set prefixDelimiter(value: string) {
        this._prefixDelimiter = value;
    }
    public resetPrefixDelimiter() {
        this._prefixDelimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixDelimiterInput() {
        return this._prefixDelimiter;
    }

    // storage_lens_arn - computed: true, optional: false, required: false
    public get storageLensArn() {
        return this.getStringAttribute('storage_lens_arn');
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#key CcStorageLens#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#value CcStorageLens#value}
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
