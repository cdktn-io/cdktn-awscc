// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/braket_spending_limit

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSpendingLimitProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the quantum device to apply the spending limit to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/braket_spending_limit#device_arn CcSpendingLimit#device_arn}
    */
    readonly deviceArn: string;
    /**
    * The maximum amount that can be spent on the specified device, in USD.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/braket_spending_limit#spending_limit CcSpendingLimit#spending_limit}
    */
    readonly spendingLimit: string;
    /**
    * The tags to apply to the spending limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/braket_spending_limit#tags CcSpendingLimit#tags}
    */
    readonly tags?: CcSpendingLimit.TagProperty[] | cdktn.IResolvable;
    /**
    * Defines a time range for spending limits, specifying when the limit is active.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/braket_spending_limit#time_period CcSpendingLimit#time_period}
    */
    readonly timePeriod?: CcSpendingLimit.TimePeriodProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/braket_spending_limit awscc_braket_spending_limit}
*/
export class CcSpendingLimit extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_braket_spending_limit";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSpendingLimit resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSpendingLimit to import
    * @param importFromId The id of the existing CcSpendingLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/braket_spending_limit#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSpendingLimit to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_braket_spending_limit", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/braket_spending_limit awscc_braket_spending_limit} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSpendingLimitProps
    */
    public constructor(scope: Construct, id: string, config: CcSpendingLimitProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_braket_spending_limit',
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
        this._deviceArn = config.deviceArn;
        this._spendingLimit = config.spendingLimit;
        this._tags.internalValue = config.tags;
        this._timePeriod.internalValue = config.timePeriod;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // device_arn - computed: false, optional: false, required: true
    private _deviceArn?: string; 
    public get deviceArn() {
        return this.getStringAttribute('device_arn');
    }
    public set deviceArn(value: string) {
        this._deviceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceArnInput() {
        return this._deviceArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // queued_spend - computed: true, optional: false, required: false
    public get queuedSpend() {
        return this.getStringAttribute('queued_spend');
    }

    // spending_limit - computed: false, optional: false, required: true
    private _spendingLimit?: string; 
    public get spendingLimit() {
        return this.getStringAttribute('spending_limit');
    }
    public set spendingLimit(value: string) {
        this._spendingLimit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get spendingLimitInput() {
        return this._spendingLimit;
    }

    // spending_limit_arn - computed: true, optional: false, required: false
    public get spendingLimitArn() {
        return this.getStringAttribute('spending_limit_arn');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSpendingLimit.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSpendingLimit.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // time_period - computed: true, optional: true, required: false
    private _timePeriod = new CcSpendingLimit.TimePeriodPropertyOutputReference(this, "time_period");
    public get timePeriod() {
        return this._timePeriod;
    }
    public putTimePeriod(value: CcSpendingLimit.TimePeriodProperty) {
        this._timePeriod.internalValue = value;
    }
    public resetTimePeriod() {
        this._timePeriod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timePeriodInput() {
        return this._timePeriod.internalValue;
    }

    // total_spend - computed: true, optional: false, required: false
    public get totalSpend() {
        return this.getStringAttribute('total_spend');
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
            device_arn: cdktn.stringToTerraform(this._deviceArn),
            spending_limit: cdktn.stringToTerraform(this._spendingLimit),
            tags: cdktn.listMapper(ccSpendingLimitTagPropertyToTerraform, false)(this._tags.internalValue),
            time_period: ccSpendingLimitTimePeriodPropertyToTerraform(this._timePeriod.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            device_arn: {
                value: cdktn.stringToHclTerraform(this._deviceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            spending_limit: {
                value: cdktn.stringToHclTerraform(this._spendingLimit),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSpendingLimitTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcSpendingLimit.TagPropertyList",
            },
            time_period: {
                value: ccSpendingLimitTimePeriodPropertyToHclTerraform(this._timePeriod.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSpendingLimit.TimePeriodProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSpendingLimitTagPropertyToTerraform(struct?: CcSpendingLimit.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSpendingLimitTagPropertyToHclTerraform(struct?: CcSpendingLimit.TagProperty | cdktn.IResolvable): any {
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


export function ccSpendingLimitTimePeriodPropertyToTerraform(struct?: CcSpendingLimit.TimePeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_at: cdktn.stringToTerraform(struct!.endAt),
        start_at: cdktn.stringToTerraform(struct!.startAt),
    }
}


export function ccSpendingLimitTimePeriodPropertyToHclTerraform(struct?: CcSpendingLimit.TimePeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_at: {
            value: cdktn.stringToHclTerraform(struct!.endAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_at: {
            value: cdktn.stringToHclTerraform(struct!.startAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcSpendingLimit {
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/braket_spending_limit#key CcSpendingLimit#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/braket_spending_limit#value CcSpendingLimit#value}
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
export interface TimePeriodProperty {
    /**
    * The end date and time for the spending limit period, in ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/braket_spending_limit#end_at CcSpendingLimit#end_at}
    */
    readonly endAt?: string;
    /**
    * The start date and time for the spending limit period, in ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/braket_spending_limit#start_at CcSpendingLimit#start_at}
    */
    readonly startAt?: string;
}
export class TimePeriodPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimePeriodProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.endAt = this._endAt;
        }
        if (this._startAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.startAt = this._startAt;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimePeriodProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endAt = undefined;
            this._startAt = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endAt = value.endAt;
            this._startAt = value.startAt;
        }
    }

    // end_at - computed: true, optional: true, required: false
    private _endAt?: string; 
    public get endAt() {
        return this.getStringAttribute('end_at');
    }
    public set endAt(value: string) {
        this._endAt = value;
    }
    public resetEndAt() {
        this._endAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endAtInput() {
        return this._endAt;
    }

    // start_at - computed: true, optional: true, required: false
    private _startAt?: string; 
    public get startAt() {
        return this.getStringAttribute('start_at');
    }
    public set startAt(value: string) {
        this._startAt = value;
    }
    public resetStartAt() {
        this._startAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startAtInput() {
        return this._startAt;
    }
}
}
