// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUsageLimitProps extends cdktn.TerraformMetaArguments {
    /**
    * The limit amount. If time-based, this amount is in minutes. If data-based, this amount is in terabytes (TB). The value must be a positive number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#amount CcUsageLimit#amount}
    */
    readonly amount: number;
    /**
    * The action that Amazon Redshift takes when the limit is reached. The default is log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#breach_action CcUsageLimit#breach_action}
    */
    readonly breachAction?: string;
    /**
    * The identifier of the cluster that you want to limit usage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#cluster_identifier CcUsageLimit#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * The Amazon Redshift feature that you want to limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#feature_type CcUsageLimit#feature_type}
    */
    readonly featureType: string;
    /**
    * The type of limit. Depending on the feature type, this can be based on a time duration or data size. If FeatureType is spectrum, then LimitType must be data-scanned. If FeatureType is concurrency-scaling, then LimitType must be time. If FeatureType is cross-region-datasharing, then LimitType must be data-scanned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#limit_type CcUsageLimit#limit_type}
    */
    readonly limitType: string;
    /**
    * The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#period CcUsageLimit#period}
    */
    readonly period?: string;
    /**
    * A list of tag instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#tags CcUsageLimit#tags}
    */
    readonly tags?: CcUsageLimit.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit awscc_redshift_usage_limit}
*/
export class CcUsageLimit extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_redshift_usage_limit";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUsageLimit resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUsageLimit to import
    * @param importFromId The id of the existing CcUsageLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUsageLimit to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshift_usage_limit", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit awscc_redshift_usage_limit} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUsageLimitProps
    */
    public constructor(scope: Construct, id: string, config: CcUsageLimitProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_redshift_usage_limit',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.102.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._amount = config.amount;
        this._breachAction = config.breachAction;
        this._clusterIdentifier = config.clusterIdentifier;
        this._featureType = config.featureType;
        this._limitType = config.limitType;
        this._period = config.period;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // amount - computed: false, optional: false, required: true
    private _amount?: number; 
    public get amount() {
        return this.getNumberAttribute('amount');
    }
    public set amount(value: number) {
        this._amount = value;
    }
    // Temporarily expose input value. Use with caution.
    public get amountInput() {
        return this._amount;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // breach_action - computed: true, optional: true, required: false
    private _breachAction?: string; 
    public get breachAction() {
        return this.getStringAttribute('breach_action');
    }
    public set breachAction(value: string) {
        this._breachAction = value;
    }
    public resetBreachAction() {
        this._breachAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get breachActionInput() {
        return this._breachAction;
    }

    // cluster_identifier - computed: false, optional: false, required: true
    private _clusterIdentifier?: string; 
    public get clusterIdentifier() {
        return this.getStringAttribute('cluster_identifier');
    }
    public set clusterIdentifier(value: string) {
        this._clusterIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdentifierInput() {
        return this._clusterIdentifier;
    }

    // feature_type - computed: false, optional: false, required: true
    private _featureType?: string; 
    public get featureType() {
        return this.getStringAttribute('feature_type');
    }
    public set featureType(value: string) {
        this._featureType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get featureTypeInput() {
        return this._featureType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // limit_type - computed: false, optional: false, required: true
    private _limitType?: string; 
    public get limitType() {
        return this.getStringAttribute('limit_type');
    }
    public set limitType(value: string) {
        this._limitType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get limitTypeInput() {
        return this._limitType;
    }

    // period - computed: true, optional: true, required: false
    private _period?: string; 
    public get period() {
        return this.getStringAttribute('period');
    }
    public set period(value: string) {
        this._period = value;
    }
    public resetPeriod() {
        this._period = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodInput() {
        return this._period;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcUsageLimit.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcUsageLimit.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // usage_limit_id - computed: true, optional: false, required: false
    public get usageLimitId() {
        return this.getStringAttribute('usage_limit_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            amount: cdktn.numberToTerraform(this._amount),
            breach_action: cdktn.stringToTerraform(this._breachAction),
            cluster_identifier: cdktn.stringToTerraform(this._clusterIdentifier),
            feature_type: cdktn.stringToTerraform(this._featureType),
            limit_type: cdktn.stringToTerraform(this._limitType),
            period: cdktn.stringToTerraform(this._period),
            tags: cdktn.listMapper(ccUsageLimitTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            amount: {
                value: cdktn.numberToHclTerraform(this._amount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            breach_action: {
                value: cdktn.stringToHclTerraform(this._breachAction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cluster_identifier: {
                value: cdktn.stringToHclTerraform(this._clusterIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            feature_type: {
                value: cdktn.stringToHclTerraform(this._featureType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            limit_type: {
                value: cdktn.stringToHclTerraform(this._limitType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            period: {
                value: cdktn.stringToHclTerraform(this._period),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccUsageLimitTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcUsageLimit.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccUsageLimitTagsPropertyToTerraform(struct?: CcUsageLimit.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccUsageLimitTagsPropertyToHclTerraform(struct?: CcUsageLimit.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcUsageLimit {
export interface TagsProperty {
    /**
    * The key, or name, for the resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#key CcUsageLimit#key}
    */
    readonly key?: string;
    /**
    * The value for the resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#value CcUsageLimit#value}
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
