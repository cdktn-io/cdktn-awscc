// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCustomLineItemProps extends cdktn.TerraformMetaArguments {
    /**
    * The account which this custom line item will be charged to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#account_id CcCustomLineItem#account_id}
    */
    readonly accountId?: string;
    /**
    * Billing Group ARN
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#billing_group_arn CcCustomLineItem#billing_group_arn}
    */
    readonly billingGroupArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#billing_period_range CcCustomLineItem#billing_period_range}
    */
    readonly billingPeriodRange?: CcCustomLineItem.BillingPeriodRangeProperty;
    /**
    * The display settings of the Custom Line Item.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#computation_rule CcCustomLineItem#computation_rule}
    */
    readonly computationRule?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#custom_line_item_charge_details CcCustomLineItem#custom_line_item_charge_details}
    */
    readonly customLineItemChargeDetails?: CcCustomLineItem.CustomLineItemChargeDetailsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#description CcCustomLineItem#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#name CcCustomLineItem#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#presentation_details CcCustomLineItem#presentation_details}
    */
    readonly presentationDetails?: CcCustomLineItem.PresentationDetailsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#tags CcCustomLineItem#tags}
    */
    readonly tags?: CcCustomLineItem.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item awscc_billingconductor_custom_line_item}
*/
export class CcCustomLineItem extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_billingconductor_custom_line_item";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCustomLineItem resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCustomLineItem to import
    * @param importFromId The id of the existing CcCustomLineItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCustomLineItem to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_billingconductor_custom_line_item", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item awscc_billingconductor_custom_line_item} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCustomLineItemProps
    */
    public constructor(scope: Construct, id: string, config: CcCustomLineItemProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_billingconductor_custom_line_item',
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
        this._accountId = config.accountId;
        this._billingGroupArn = config.billingGroupArn;
        this._billingPeriodRange.internalValue = config.billingPeriodRange;
        this._computationRule = config.computationRule;
        this._customLineItemChargeDetails.internalValue = config.customLineItemChargeDetails;
        this._description = config.description;
        this._name = config.name;
        this._presentationDetails.internalValue = config.presentationDetails;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // association_size - computed: true, optional: false, required: false
    public get associationSize() {
        return this.getNumberAttribute('association_size');
    }

    // billing_group_arn - computed: false, optional: false, required: true
    private _billingGroupArn?: string; 
    public get billingGroupArn() {
        return this.getStringAttribute('billing_group_arn');
    }
    public set billingGroupArn(value: string) {
        this._billingGroupArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get billingGroupArnInput() {
        return this._billingGroupArn;
    }

    // billing_period_range - computed: true, optional: true, required: false
    private _billingPeriodRange = new CcCustomLineItem.BillingPeriodRangePropertyOutputReference(this, "billing_period_range");
    public get billingPeriodRange() {
        return this._billingPeriodRange;
    }
    public putBillingPeriodRange(value: CcCustomLineItem.BillingPeriodRangeProperty) {
        this._billingPeriodRange.internalValue = value;
    }
    public resetBillingPeriodRange() {
        this._billingPeriodRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingPeriodRangeInput() {
        return this._billingPeriodRange.internalValue;
    }

    // computation_rule - computed: true, optional: true, required: false
    private _computationRule?: string; 
    public get computationRule() {
        return this.getStringAttribute('computation_rule');
    }
    public set computationRule(value: string) {
        this._computationRule = value;
    }
    public resetComputationRule() {
        this._computationRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computationRuleInput() {
        return this._computationRule;
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getNumberAttribute('creation_time');
    }

    // currency_code - computed: true, optional: false, required: false
    public get currencyCode() {
        return this.getStringAttribute('currency_code');
    }

    // custom_line_item_charge_details - computed: true, optional: true, required: false
    private _customLineItemChargeDetails = new CcCustomLineItem.CustomLineItemChargeDetailsPropertyOutputReference(this, "custom_line_item_charge_details");
    public get customLineItemChargeDetails() {
        return this._customLineItemChargeDetails;
    }
    public putCustomLineItemChargeDetails(value: CcCustomLineItem.CustomLineItemChargeDetailsProperty) {
        this._customLineItemChargeDetails.internalValue = value;
    }
    public resetCustomLineItemChargeDetails() {
        this._customLineItemChargeDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customLineItemChargeDetailsInput() {
        return this._customLineItemChargeDetails.internalValue;
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
        return this.getNumberAttribute('last_modified_time');
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

    // presentation_details - computed: true, optional: true, required: false
    private _presentationDetails = new CcCustomLineItem.PresentationDetailsPropertyOutputReference(this, "presentation_details");
    public get presentationDetails() {
        return this._presentationDetails;
    }
    public putPresentationDetails(value: CcCustomLineItem.PresentationDetailsProperty) {
        this._presentationDetails.internalValue = value;
    }
    public resetPresentationDetails() {
        this._presentationDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get presentationDetailsInput() {
        return this._presentationDetails.internalValue;
    }

    // product_code - computed: true, optional: false, required: false
    public get productCode() {
        return this.getStringAttribute('product_code');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCustomLineItem.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCustomLineItem.TagProperty[] | cdktn.IResolvable) {
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
            account_id: cdktn.stringToTerraform(this._accountId),
            billing_group_arn: cdktn.stringToTerraform(this._billingGroupArn),
            billing_period_range: ccCustomLineItemBillingPeriodRangePropertyToTerraform(this._billingPeriodRange.internalValue),
            computation_rule: cdktn.stringToTerraform(this._computationRule),
            custom_line_item_charge_details: ccCustomLineItemCustomLineItemChargeDetailsPropertyToTerraform(this._customLineItemChargeDetails.internalValue),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            presentation_details: ccCustomLineItemPresentationDetailsPropertyToTerraform(this._presentationDetails.internalValue),
            tags: cdktn.listMapper(ccCustomLineItemTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            account_id: {
                value: cdktn.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            billing_group_arn: {
                value: cdktn.stringToHclTerraform(this._billingGroupArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            billing_period_range: {
                value: ccCustomLineItemBillingPeriodRangePropertyToHclTerraform(this._billingPeriodRange.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCustomLineItem.BillingPeriodRangeProperty",
            },
            computation_rule: {
                value: cdktn.stringToHclTerraform(this._computationRule),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_line_item_charge_details: {
                value: ccCustomLineItemCustomLineItemChargeDetailsPropertyToHclTerraform(this._customLineItemChargeDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCustomLineItem.CustomLineItemChargeDetailsProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
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
            presentation_details: {
                value: ccCustomLineItemPresentationDetailsPropertyToHclTerraform(this._presentationDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCustomLineItem.PresentationDetailsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCustomLineItemTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCustomLineItem.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCustomLineItemBillingPeriodRangePropertyToTerraform(struct?: CcCustomLineItem.BillingPeriodRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exclusive_end_billing_period: cdktn.stringToTerraform(struct!.exclusiveEndBillingPeriod),
        inclusive_start_billing_period: cdktn.stringToTerraform(struct!.inclusiveStartBillingPeriod),
    }
}


export function ccCustomLineItemBillingPeriodRangePropertyToHclTerraform(struct?: CcCustomLineItem.BillingPeriodRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exclusive_end_billing_period: {
            value: cdktn.stringToHclTerraform(struct!.exclusiveEndBillingPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inclusive_start_billing_period: {
            value: cdktn.stringToHclTerraform(struct!.inclusiveStartBillingPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCustomLineItemCustomLineItemFlatChargeDetailsPropertyToTerraform(struct?: CcCustomLineItem.CustomLineItemFlatChargeDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        charge_value: cdktn.numberToTerraform(struct!.chargeValue),
    }
}


export function ccCustomLineItemCustomLineItemFlatChargeDetailsPropertyToHclTerraform(struct?: CcCustomLineItem.CustomLineItemFlatChargeDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        charge_value: {
            value: cdktn.numberToHclTerraform(struct!.chargeValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCustomLineItemLineItemFilterPropertyToTerraform(struct?: CcCustomLineItem.LineItemFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute: cdktn.stringToTerraform(struct!.attribute),
        attribute_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.attributeValues),
        match_option: cdktn.stringToTerraform(struct!.matchOption),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccCustomLineItemLineItemFilterPropertyToHclTerraform(struct?: CcCustomLineItem.LineItemFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attribute: {
            value: cdktn.stringToHclTerraform(struct!.attribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        attribute_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.attributeValues),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        match_option: {
            value: cdktn.stringToHclTerraform(struct!.matchOption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCustomLineItemCustomLineItemPercentageChargeDetailsPropertyToTerraform(struct?: CcCustomLineItem.CustomLineItemPercentageChargeDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        child_associated_resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.childAssociatedResources),
        percentage_value: cdktn.numberToTerraform(struct!.percentageValue),
    }
}


export function ccCustomLineItemCustomLineItemPercentageChargeDetailsPropertyToHclTerraform(struct?: CcCustomLineItem.CustomLineItemPercentageChargeDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        child_associated_resources: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.childAssociatedResources),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        percentage_value: {
            value: cdktn.numberToHclTerraform(struct!.percentageValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCustomLineItemCustomLineItemChargeDetailsPropertyToTerraform(struct?: CcCustomLineItem.CustomLineItemChargeDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        flat: ccCustomLineItemCustomLineItemFlatChargeDetailsPropertyToTerraform(struct!.flat),
        line_item_filters: cdktn.listMapper(ccCustomLineItemLineItemFilterPropertyToTerraform, false)(struct!.lineItemFilters),
        percentage: ccCustomLineItemCustomLineItemPercentageChargeDetailsPropertyToTerraform(struct!.percentage),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccCustomLineItemCustomLineItemChargeDetailsPropertyToHclTerraform(struct?: CcCustomLineItem.CustomLineItemChargeDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        flat: {
            value: ccCustomLineItemCustomLineItemFlatChargeDetailsPropertyToHclTerraform(struct!.flat),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomLineItemFlatChargeDetailsProperty",
        },
        line_item_filters: {
            value: cdktn.listMapperHcl(ccCustomLineItemLineItemFilterPropertyToHclTerraform, false)(struct!.lineItemFilters),
            isBlock: true,
            type: "set",
            storageClassType: "LineItemFilterPropertyList",
        },
        percentage: {
            value: ccCustomLineItemCustomLineItemPercentageChargeDetailsPropertyToHclTerraform(struct!.percentage),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomLineItemPercentageChargeDetailsProperty",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCustomLineItemPresentationDetailsPropertyToTerraform(struct?: CcCustomLineItem.PresentationDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        service: cdktn.stringToTerraform(struct!.service),
    }
}


export function ccCustomLineItemPresentationDetailsPropertyToHclTerraform(struct?: CcCustomLineItem.PresentationDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        service: {
            value: cdktn.stringToHclTerraform(struct!.service),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCustomLineItemTagPropertyToTerraform(struct?: CcCustomLineItem.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCustomLineItemTagPropertyToHclTerraform(struct?: CcCustomLineItem.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCustomLineItem {
export interface BillingPeriodRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#exclusive_end_billing_period CcCustomLineItem#exclusive_end_billing_period}
    */
    readonly exclusiveEndBillingPeriod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#inclusive_start_billing_period CcCustomLineItem#inclusive_start_billing_period}
    */
    readonly inclusiveStartBillingPeriod?: string;
}
export class BillingPeriodRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BillingPeriodRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._exclusiveEndBillingPeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclusiveEndBillingPeriod = this._exclusiveEndBillingPeriod;
        }
        if (this._inclusiveStartBillingPeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.inclusiveStartBillingPeriod = this._inclusiveStartBillingPeriod;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BillingPeriodRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exclusiveEndBillingPeriod = undefined;
            this._inclusiveStartBillingPeriod = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exclusiveEndBillingPeriod = value.exclusiveEndBillingPeriod;
            this._inclusiveStartBillingPeriod = value.inclusiveStartBillingPeriod;
        }
    }

    // exclusive_end_billing_period - computed: true, optional: true, required: false
    private _exclusiveEndBillingPeriod?: string; 
    public get exclusiveEndBillingPeriod() {
        return this.getStringAttribute('exclusive_end_billing_period');
    }
    public set exclusiveEndBillingPeriod(value: string) {
        this._exclusiveEndBillingPeriod = value;
    }
    public resetExclusiveEndBillingPeriod() {
        this._exclusiveEndBillingPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exclusiveEndBillingPeriodInput() {
        return this._exclusiveEndBillingPeriod;
    }

    // inclusive_start_billing_period - computed: true, optional: true, required: false
    private _inclusiveStartBillingPeriod?: string; 
    public get inclusiveStartBillingPeriod() {
        return this.getStringAttribute('inclusive_start_billing_period');
    }
    public set inclusiveStartBillingPeriod(value: string) {
        this._inclusiveStartBillingPeriod = value;
    }
    public resetInclusiveStartBillingPeriod() {
        this._inclusiveStartBillingPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inclusiveStartBillingPeriodInput() {
        return this._inclusiveStartBillingPeriod;
    }
}
export interface CustomLineItemFlatChargeDetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#charge_value CcCustomLineItem#charge_value}
    */
    readonly chargeValue?: number;
}
export class CustomLineItemFlatChargeDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomLineItemFlatChargeDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._chargeValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.chargeValue = this._chargeValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomLineItemFlatChargeDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._chargeValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._chargeValue = value.chargeValue;
        }
    }

    // charge_value - computed: true, optional: true, required: false
    private _chargeValue?: number; 
    public get chargeValue() {
        return this.getNumberAttribute('charge_value');
    }
    public set chargeValue(value: number) {
        this._chargeValue = value;
    }
    public resetChargeValue() {
        this._chargeValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get chargeValueInput() {
        return this._chargeValue;
    }
}
export interface LineItemFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#attribute CcCustomLineItem#attribute}
    */
    readonly attribute?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#attribute_values CcCustomLineItem#attribute_values}
    */
    readonly attributeValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#match_option CcCustomLineItem#match_option}
    */
    readonly matchOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#values CcCustomLineItem#values}
    */
    readonly values?: string[];
}
export class LineItemFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LineItemFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.attribute = this._attribute;
        }
        if (this._attributeValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeValues = this._attributeValues;
        }
        if (this._matchOption !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchOption = this._matchOption;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LineItemFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attribute = undefined;
            this._attributeValues = undefined;
            this._matchOption = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attribute = value.attribute;
            this._attributeValues = value.attributeValues;
            this._matchOption = value.matchOption;
            this._values = value.values;
        }
    }

    // attribute - computed: true, optional: true, required: false
    private _attribute?: string; 
    public get attribute() {
        return this.getStringAttribute('attribute');
    }
    public set attribute(value: string) {
        this._attribute = value;
    }
    public resetAttribute() {
        this._attribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeInput() {
        return this._attribute;
    }

    // attribute_values - computed: true, optional: true, required: false
    private _attributeValues?: string[]; 
    public get attributeValues() {
        return cdktn.Fn.tolist(this.getListAttribute('attribute_values'));
    }
    public set attributeValues(value: string[]) {
        this._attributeValues = value;
    }
    public resetAttributeValues() {
        this._attributeValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeValuesInput() {
        return this._attributeValues;
    }

    // match_option - computed: true, optional: true, required: false
    private _matchOption?: string; 
    public get matchOption() {
        return this.getStringAttribute('match_option');
    }
    public set matchOption(value: string) {
        this._matchOption = value;
    }
    public resetMatchOption() {
        this._matchOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchOptionInput() {
        return this._matchOption;
    }

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return cdktn.Fn.tolist(this.getListAttribute('values'));
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class LineItemFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : LineItemFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): LineItemFilterPropertyOutputReference {
        return new LineItemFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomLineItemPercentageChargeDetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#child_associated_resources CcCustomLineItem#child_associated_resources}
    */
    readonly childAssociatedResources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#percentage_value CcCustomLineItem#percentage_value}
    */
    readonly percentageValue?: number;
}
export class CustomLineItemPercentageChargeDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomLineItemPercentageChargeDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._childAssociatedResources !== undefined) {
            hasAnyValues = true;
            internalValueResult.childAssociatedResources = this._childAssociatedResources;
        }
        if (this._percentageValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.percentageValue = this._percentageValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomLineItemPercentageChargeDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._childAssociatedResources = undefined;
            this._percentageValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._childAssociatedResources = value.childAssociatedResources;
            this._percentageValue = value.percentageValue;
        }
    }

    // child_associated_resources - computed: true, optional: true, required: false
    private _childAssociatedResources?: string[]; 
    public get childAssociatedResources() {
        return cdktn.Fn.tolist(this.getListAttribute('child_associated_resources'));
    }
    public set childAssociatedResources(value: string[]) {
        this._childAssociatedResources = value;
    }
    public resetChildAssociatedResources() {
        this._childAssociatedResources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get childAssociatedResourcesInput() {
        return this._childAssociatedResources;
    }

    // percentage_value - computed: true, optional: true, required: false
    private _percentageValue?: number; 
    public get percentageValue() {
        return this.getNumberAttribute('percentage_value');
    }
    public set percentageValue(value: number) {
        this._percentageValue = value;
    }
    public resetPercentageValue() {
        this._percentageValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get percentageValueInput() {
        return this._percentageValue;
    }
}
export interface CustomLineItemChargeDetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#flat CcCustomLineItem#flat}
    */
    readonly flat?: CustomLineItemFlatChargeDetailsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#line_item_filters CcCustomLineItem#line_item_filters}
    */
    readonly lineItemFilters?: LineItemFilterProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#percentage CcCustomLineItem#percentage}
    */
    readonly percentage?: CustomLineItemPercentageChargeDetailsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#type CcCustomLineItem#type}
    */
    readonly type?: string;
}
export class CustomLineItemChargeDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomLineItemChargeDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._flat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.flat = this._flat?.internalValue;
        }
        if (this._lineItemFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lineItemFilters = this._lineItemFilters?.internalValue;
        }
        if (this._percentage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.percentage = this._percentage?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomLineItemChargeDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._flat.internalValue = undefined;
            this._lineItemFilters.internalValue = undefined;
            this._percentage.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._flat.internalValue = value.flat;
            this._lineItemFilters.internalValue = value.lineItemFilters;
            this._percentage.internalValue = value.percentage;
            this._type = value.type;
        }
    }

    // flat - computed: true, optional: true, required: false
    private _flat = new CustomLineItemFlatChargeDetailsPropertyOutputReference(this, "flat");
    public get flat() {
        return this._flat;
    }
    public putFlat(value: CustomLineItemFlatChargeDetailsProperty) {
        this._flat.internalValue = value;
    }
    public resetFlat() {
        this._flat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flatInput() {
        return this._flat.internalValue;
    }

    // line_item_filters - computed: true, optional: true, required: false
    private _lineItemFilters = new LineItemFilterPropertyList(this, "line_item_filters", true);
    public get lineItemFilters() {
        return this._lineItemFilters;
    }
    public putLineItemFilters(value: LineItemFilterProperty[] | cdktn.IResolvable) {
        this._lineItemFilters.internalValue = value;
    }
    public resetLineItemFilters() {
        this._lineItemFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lineItemFiltersInput() {
        return this._lineItemFilters.internalValue;
    }

    // percentage - computed: true, optional: true, required: false
    private _percentage = new CustomLineItemPercentageChargeDetailsPropertyOutputReference(this, "percentage");
    public get percentage() {
        return this._percentage;
    }
    public putPercentage(value: CustomLineItemPercentageChargeDetailsProperty) {
        this._percentage.internalValue = value;
    }
    public resetPercentage() {
        this._percentage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get percentageInput() {
        return this._percentage.internalValue;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface PresentationDetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#service CcCustomLineItem#service}
    */
    readonly service?: string;
}
export class PresentationDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PresentationDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._service !== undefined) {
            hasAnyValues = true;
            internalValueResult.service = this._service;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PresentationDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._service = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._service = value.service;
        }
    }

    // service - computed: true, optional: true, required: false
    private _service?: string; 
    public get service() {
        return this.getStringAttribute('service');
    }
    public set service(value: string) {
        this._service = value;
    }
    public resetService() {
        this._service = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceInput() {
        return this._service;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#key CcCustomLineItem#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#value CcCustomLineItem#value}
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
