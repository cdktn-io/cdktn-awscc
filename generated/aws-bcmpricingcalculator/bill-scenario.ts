// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcBillScenarioProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the cost category group sharing preference
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#cost_category_group_sharing_preference_arn CcBillScenario#cost_category_group_sharing_preference_arn}
    */
    readonly costCategoryGroupSharingPreferenceArn?: string;
    /**
    * The timestamp when the bill scenario expires
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#expires_at CcBillScenario#expires_at}
    */
    readonly expiresAt?: string;
    /**
    * The group sharing preference for the bill scenario
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#group_sharing_preference CcBillScenario#group_sharing_preference}
    */
    readonly groupSharingPreference?: string;
    /**
    * The name of the bill scenario
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#name CcBillScenario#name}
    */
    readonly name?: string;
    /**
    * An array of key-value pairs to apply to this resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#tags CcBillScenario#tags}
    */
    readonly tags?: CcBillScenario.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario awscc_bcmpricingcalculator_bill_scenario}
*/
export class CcBillScenario extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bcmpricingcalculator_bill_scenario";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcBillScenario resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcBillScenario to import
    * @param importFromId The id of the existing CcBillScenario that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcBillScenario to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bcmpricingcalculator_bill_scenario", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario awscc_bcmpricingcalculator_bill_scenario} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcBillScenarioProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcBillScenarioProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_bcmpricingcalculator_bill_scenario',
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
        this._costCategoryGroupSharingPreferenceArn = config.costCategoryGroupSharingPreferenceArn;
        this._expiresAt = config.expiresAt;
        this._groupSharingPreference = config.groupSharingPreference;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // bill_interval - computed: true, optional: false, required: false
    private _billInterval = new CcBillScenario.BillIntervalPropertyOutputReference(this, "bill_interval");
    public get billInterval() {
        return this._billInterval;
    }

    // bill_scenario_id - computed: true, optional: false, required: false
    public get billScenarioId() {
        return this.getStringAttribute('bill_scenario_id');
    }

    // cost_category_group_sharing_preference_arn - computed: true, optional: true, required: false
    private _costCategoryGroupSharingPreferenceArn?: string; 
    public get costCategoryGroupSharingPreferenceArn() {
        return this.getStringAttribute('cost_category_group_sharing_preference_arn');
    }
    public set costCategoryGroupSharingPreferenceArn(value: string) {
        this._costCategoryGroupSharingPreferenceArn = value;
    }
    public resetCostCategoryGroupSharingPreferenceArn() {
        this._costCategoryGroupSharingPreferenceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get costCategoryGroupSharingPreferenceArnInput() {
        return this._costCategoryGroupSharingPreferenceArn;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // expires_at - computed: true, optional: true, required: false
    private _expiresAt?: string; 
    public get expiresAt() {
        return this.getStringAttribute('expires_at');
    }
    public set expiresAt(value: string) {
        this._expiresAt = value;
    }
    public resetExpiresAt() {
        this._expiresAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expiresAtInput() {
        return this._expiresAt;
    }

    // failure_message - computed: true, optional: false, required: false
    public get failureMessage() {
        return this.getStringAttribute('failure_message');
    }

    // group_sharing_preference - computed: true, optional: true, required: false
    private _groupSharingPreference?: string; 
    public get groupSharingPreference() {
        return this.getStringAttribute('group_sharing_preference');
    }
    public set groupSharingPreference(value: string) {
        this._groupSharingPreference = value;
    }
    public resetGroupSharingPreference() {
        this._groupSharingPreference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupSharingPreferenceInput() {
        return this._groupSharingPreference;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcBillScenario.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcBillScenario.TagProperty[] | cdktn.IResolvable) {
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
            cost_category_group_sharing_preference_arn: cdktn.stringToTerraform(this._costCategoryGroupSharingPreferenceArn),
            expires_at: cdktn.stringToTerraform(this._expiresAt),
            group_sharing_preference: cdktn.stringToTerraform(this._groupSharingPreference),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccBillScenarioTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cost_category_group_sharing_preference_arn: {
                value: cdktn.stringToHclTerraform(this._costCategoryGroupSharingPreferenceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            expires_at: {
                value: cdktn.stringToHclTerraform(this._expiresAt),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            group_sharing_preference: {
                value: cdktn.stringToHclTerraform(this._groupSharingPreference),
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
            tags: {
                value: cdktn.listMapperHcl(ccBillScenarioTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcBillScenario.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccBillScenarioBillIntervalPropertyToTerraform(struct?: CcBillScenario.BillIntervalProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccBillScenarioBillIntervalPropertyToHclTerraform(struct?: CcBillScenario.BillIntervalProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccBillScenarioTagPropertyToTerraform(struct?: CcBillScenario.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBillScenarioTagPropertyToHclTerraform(struct?: CcBillScenario.TagProperty | cdktn.IResolvable): any {
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


export namespace CcBillScenario {
export interface BillIntervalProperty {
}
export class BillIntervalPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BillIntervalProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BillIntervalProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // end - computed: true, optional: false, required: false
    public get end() {
        return this.getStringAttribute('end');
    }

    // start - computed: true, optional: false, required: false
    public get start() {
        return this.getStringAttribute('start');
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#key CcBillScenario#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#value CcBillScenario#value}
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
