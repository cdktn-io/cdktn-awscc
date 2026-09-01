// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcBillingGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#account_grouping CcBillingGroup#account_grouping}
    */
    readonly accountGrouping: CcBillingGroup.AccountGroupingProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#computation_preference CcBillingGroup#computation_preference}
    */
    readonly computationPreference: CcBillingGroup.ComputationPreferenceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#description CcBillingGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#name CcBillingGroup#name}
    */
    readonly name: string;
    /**
    * This account will act as a virtual payer account of the billing group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#primary_account_id CcBillingGroup#primary_account_id}
    */
    readonly primaryAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#tags CcBillingGroup#tags}
    */
    readonly tags?: CcBillingGroup.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group awscc_billingconductor_billing_group}
*/
export class CcBillingGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_billingconductor_billing_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcBillingGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcBillingGroup to import
    * @param importFromId The id of the existing CcBillingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcBillingGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_billingconductor_billing_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group awscc_billingconductor_billing_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcBillingGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcBillingGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_billingconductor_billing_group',
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
        this._accountGrouping.internalValue = config.accountGrouping;
        this._computationPreference.internalValue = config.computationPreference;
        this._description = config.description;
        this._name = config.name;
        this._primaryAccountId = config.primaryAccountId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_grouping - computed: false, optional: false, required: true
    private _accountGrouping = new CcBillingGroup.AccountGroupingPropertyOutputReference(this, "account_grouping");
    public get accountGrouping() {
        return this._accountGrouping;
    }
    public putAccountGrouping(value: CcBillingGroup.AccountGroupingProperty) {
        this._accountGrouping.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountGroupingInput() {
        return this._accountGrouping.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // computation_preference - computed: false, optional: false, required: true
    private _computationPreference = new CcBillingGroup.ComputationPreferencePropertyOutputReference(this, "computation_preference");
    public get computationPreference() {
        return this._computationPreference;
    }
    public putComputationPreference(value: CcBillingGroup.ComputationPreferenceProperty) {
        this._computationPreference.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get computationPreferenceInput() {
        return this._computationPreference.internalValue;
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getNumberAttribute('creation_time');
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

    // primary_account_id - computed: true, optional: true, required: false
    private _primaryAccountId?: string; 
    public get primaryAccountId() {
        return this.getStringAttribute('primary_account_id');
    }
    public set primaryAccountId(value: string) {
        this._primaryAccountId = value;
    }
    public resetPrimaryAccountId() {
        this._primaryAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryAccountIdInput() {
        return this._primaryAccountId;
    }

    // size - computed: true, optional: false, required: false
    public get size() {
        return this.getNumberAttribute('size');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // status_reason - computed: true, optional: false, required: false
    public get statusReason() {
        return this.getStringAttribute('status_reason');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcBillingGroup.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcBillingGroup.TagProperty[] | cdktn.IResolvable) {
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
            account_grouping: ccBillingGroupAccountGroupingPropertyToTerraform(this._accountGrouping.internalValue),
            computation_preference: ccBillingGroupComputationPreferencePropertyToTerraform(this._computationPreference.internalValue),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            primary_account_id: cdktn.stringToTerraform(this._primaryAccountId),
            tags: cdktn.listMapper(ccBillingGroupTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            account_grouping: {
                value: ccBillingGroupAccountGroupingPropertyToHclTerraform(this._accountGrouping.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBillingGroup.AccountGroupingProperty",
            },
            computation_preference: {
                value: ccBillingGroupComputationPreferencePropertyToHclTerraform(this._computationPreference.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBillingGroup.ComputationPreferenceProperty",
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
            primary_account_id: {
                value: cdktn.stringToHclTerraform(this._primaryAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccBillingGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcBillingGroup.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccBillingGroupAccountGroupingPropertyToTerraform(struct?: CcBillingGroup.AccountGroupingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_associate: cdktn.booleanToTerraform(struct!.autoAssociate),
        linked_account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.linkedAccountIds),
        responsibility_transfer_arn: cdktn.stringToTerraform(struct!.responsibilityTransferArn),
    }
}


export function ccBillingGroupAccountGroupingPropertyToHclTerraform(struct?: CcBillingGroup.AccountGroupingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_associate: {
            value: cdktn.booleanToHclTerraform(struct!.autoAssociate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        linked_account_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.linkedAccountIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        responsibility_transfer_arn: {
            value: cdktn.stringToHclTerraform(struct!.responsibilityTransferArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBillingGroupComputationPreferencePropertyToTerraform(struct?: CcBillingGroup.ComputationPreferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pricing_plan_arn: cdktn.stringToTerraform(struct!.pricingPlanArn),
    }
}


export function ccBillingGroupComputationPreferencePropertyToHclTerraform(struct?: CcBillingGroup.ComputationPreferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pricing_plan_arn: {
            value: cdktn.stringToHclTerraform(struct!.pricingPlanArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBillingGroupTagPropertyToTerraform(struct?: CcBillingGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBillingGroupTagPropertyToHclTerraform(struct?: CcBillingGroup.TagProperty | cdktn.IResolvable): any {
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


export namespace CcBillingGroup {
export interface AccountGroupingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#auto_associate CcBillingGroup#auto_associate}
    */
    readonly autoAssociate?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#linked_account_ids CcBillingGroup#linked_account_ids}
    */
    readonly linkedAccountIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#responsibility_transfer_arn CcBillingGroup#responsibility_transfer_arn}
    */
    readonly responsibilityTransferArn?: string;
}
export class AccountGroupingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccountGroupingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoAssociate !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoAssociate = this._autoAssociate;
        }
        if (this._linkedAccountIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.linkedAccountIds = this._linkedAccountIds;
        }
        if (this._responsibilityTransferArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.responsibilityTransferArn = this._responsibilityTransferArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccountGroupingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoAssociate = undefined;
            this._linkedAccountIds = undefined;
            this._responsibilityTransferArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoAssociate = value.autoAssociate;
            this._linkedAccountIds = value.linkedAccountIds;
            this._responsibilityTransferArn = value.responsibilityTransferArn;
        }
    }

    // auto_associate - computed: true, optional: true, required: false
    private _autoAssociate?: boolean | cdktn.IResolvable; 
    public get autoAssociate() {
        return this.getBooleanAttribute('auto_associate');
    }
    public set autoAssociate(value: boolean | cdktn.IResolvable) {
        this._autoAssociate = value;
    }
    public resetAutoAssociate() {
        this._autoAssociate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssociateInput() {
        return this._autoAssociate;
    }

    // linked_account_ids - computed: true, optional: true, required: false
    private _linkedAccountIds?: string[]; 
    public get linkedAccountIds() {
        return cdktn.Fn.tolist(this.getListAttribute('linked_account_ids'));
    }
    public set linkedAccountIds(value: string[]) {
        this._linkedAccountIds = value;
    }
    public resetLinkedAccountIds() {
        this._linkedAccountIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linkedAccountIdsInput() {
        return this._linkedAccountIds;
    }

    // responsibility_transfer_arn - computed: true, optional: true, required: false
    private _responsibilityTransferArn?: string; 
    public get responsibilityTransferArn() {
        return this.getStringAttribute('responsibility_transfer_arn');
    }
    public set responsibilityTransferArn(value: string) {
        this._responsibilityTransferArn = value;
    }
    public resetResponsibilityTransferArn() {
        this._responsibilityTransferArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responsibilityTransferArnInput() {
        return this._responsibilityTransferArn;
    }
}
export interface ComputationPreferenceProperty {
    /**
    * ARN of the attached pricing plan
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#pricing_plan_arn CcBillingGroup#pricing_plan_arn}
    */
    readonly pricingPlanArn: string;
}
export class ComputationPreferencePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComputationPreferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._pricingPlanArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.pricingPlanArn = this._pricingPlanArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComputationPreferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._pricingPlanArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._pricingPlanArn = value.pricingPlanArn;
        }
    }

    // pricing_plan_arn - computed: false, optional: false, required: true
    private _pricingPlanArn?: string; 
    public get pricingPlanArn() {
        return this.getStringAttribute('pricing_plan_arn');
    }
    public set pricingPlanArn(value: string) {
        this._pricingPlanArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get pricingPlanArnInput() {
        return this._pricingPlanArn;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#key CcBillingGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#value CcBillingGroup#value}
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
