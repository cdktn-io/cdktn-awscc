// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPricingRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces. Supported billing entities are AWS, AWS Marketplace, and AISPL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#billing_entity CcPricingRule#billing_entity}
    */
    readonly billingEntity?: string;
    /**
    * Pricing rule description
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#description CcPricingRule#description}
    */
    readonly description?: string;
    /**
    * Pricing rule modifier percentage
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#modifier_percentage CcPricingRule#modifier_percentage}
    */
    readonly modifierPercentage?: number;
    /**
    * Pricing rule name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#name CcPricingRule#name}
    */
    readonly name: string;
    /**
    * The Operation which a SKU pricing rule is modifying
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#operation CcPricingRule#operation}
    */
    readonly operation?: string;
    /**
    * A term used to categorize the granularity of a Pricing Rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#scope CcPricingRule#scope}
    */
    readonly scope: string;
    /**
    * The service which a pricing rule is applied on
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#service CcPricingRule#service}
    */
    readonly service?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#tags CcPricingRule#tags}
    */
    readonly tags?: CcPricingRule.TagProperty[] | cdktn.IResolvable;
    /**
    * The set of tiering configurations for the pricing rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#tiering CcPricingRule#tiering}
    */
    readonly tiering?: CcPricingRule.TieringProperty;
    /**
    * One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#type CcPricingRule#type}
    */
    readonly type: string;
    /**
    * The UsageType which a SKU pricing rule is modifying
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#usage_type CcPricingRule#usage_type}
    */
    readonly usageType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule awscc_billingconductor_pricing_rule}
*/
export class CcPricingRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_billingconductor_pricing_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPricingRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPricingRule to import
    * @param importFromId The id of the existing CcPricingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPricingRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_billingconductor_pricing_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule awscc_billingconductor_pricing_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPricingRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcPricingRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_billingconductor_pricing_rule',
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
        this._billingEntity = config.billingEntity;
        this._description = config.description;
        this._modifierPercentage = config.modifierPercentage;
        this._name = config.name;
        this._operation = config.operation;
        this._scope = config.scope;
        this._service = config.service;
        this._tags.internalValue = config.tags;
        this._tiering.internalValue = config.tiering;
        this._type = config.type;
        this._usageType = config.usageType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // associated_pricing_plan_count - computed: true, optional: false, required: false
    public get associatedPricingPlanCount() {
        return this.getNumberAttribute('associated_pricing_plan_count');
    }

    // billing_entity - computed: true, optional: true, required: false
    private _billingEntity?: string; 
    public get billingEntity() {
        return this.getStringAttribute('billing_entity');
    }
    public set billingEntity(value: string) {
        this._billingEntity = value;
    }
    public resetBillingEntity() {
        this._billingEntity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingEntityInput() {
        return this._billingEntity;
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

    // modifier_percentage - computed: true, optional: true, required: false
    private _modifierPercentage?: number; 
    public get modifierPercentage() {
        return this.getNumberAttribute('modifier_percentage');
    }
    public set modifierPercentage(value: number) {
        this._modifierPercentage = value;
    }
    public resetModifierPercentage() {
        this._modifierPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modifierPercentageInput() {
        return this._modifierPercentage;
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

    // operation - computed: true, optional: true, required: false
    private _operation?: string; 
    public get operation() {
        return this.getStringAttribute('operation');
    }
    public set operation(value: string) {
        this._operation = value;
    }
    public resetOperation() {
        this._operation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operationInput() {
        return this._operation;
    }

    // scope - computed: false, optional: false, required: true
    private _scope?: string; 
    public get scope() {
        return this.getStringAttribute('scope');
    }
    public set scope(value: string) {
        this._scope = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
        return this._scope;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPricingRule.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPricingRule.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tiering - computed: true, optional: true, required: false
    private _tiering = new CcPricingRule.TieringPropertyOutputReference(this, "tiering");
    public get tiering() {
        return this._tiering;
    }
    public putTiering(value: CcPricingRule.TieringProperty) {
        this._tiering.internalValue = value;
    }
    public resetTiering() {
        this._tiering.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tieringInput() {
        return this._tiering.internalValue;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // usage_type - computed: true, optional: true, required: false
    private _usageType?: string; 
    public get usageType() {
        return this.getStringAttribute('usage_type');
    }
    public set usageType(value: string) {
        this._usageType = value;
    }
    public resetUsageType() {
        this._usageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usageTypeInput() {
        return this._usageType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            billing_entity: cdktn.stringToTerraform(this._billingEntity),
            description: cdktn.stringToTerraform(this._description),
            modifier_percentage: cdktn.numberToTerraform(this._modifierPercentage),
            name: cdktn.stringToTerraform(this._name),
            operation: cdktn.stringToTerraform(this._operation),
            scope: cdktn.stringToTerraform(this._scope),
            service: cdktn.stringToTerraform(this._service),
            tags: cdktn.listMapper(ccPricingRuleTagPropertyToTerraform, false)(this._tags.internalValue),
            tiering: ccPricingRuleTieringPropertyToTerraform(this._tiering.internalValue),
            type: cdktn.stringToTerraform(this._type),
            usage_type: cdktn.stringToTerraform(this._usageType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            billing_entity: {
                value: cdktn.stringToHclTerraform(this._billingEntity),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            modifier_percentage: {
                value: cdktn.numberToHclTerraform(this._modifierPercentage),
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
            operation: {
                value: cdktn.stringToHclTerraform(this._operation),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scope: {
                value: cdktn.stringToHclTerraform(this._scope),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service: {
                value: cdktn.stringToHclTerraform(this._service),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPricingRuleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcPricingRule.TagPropertyList",
            },
            tiering: {
                value: ccPricingRuleTieringPropertyToHclTerraform(this._tiering.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPricingRule.TieringProperty",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            usage_type: {
                value: cdktn.stringToHclTerraform(this._usageType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPricingRuleTagPropertyToTerraform(struct?: CcPricingRule.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPricingRuleTagPropertyToHclTerraform(struct?: CcPricingRule.TagProperty | cdktn.IResolvable): any {
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


export function ccPricingRuleFreeTierPropertyToTerraform(struct?: CcPricingRule.FreeTierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        activated: cdktn.booleanToTerraform(struct!.activated),
    }
}


export function ccPricingRuleFreeTierPropertyToHclTerraform(struct?: CcPricingRule.FreeTierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        activated: {
            value: cdktn.booleanToHclTerraform(struct!.activated),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPricingRuleTieringPropertyToTerraform(struct?: CcPricingRule.TieringProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        free_tier: ccPricingRuleFreeTierPropertyToTerraform(struct!.freeTier),
    }
}


export function ccPricingRuleTieringPropertyToHclTerraform(struct?: CcPricingRule.TieringProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        free_tier: {
            value: ccPricingRuleFreeTierPropertyToHclTerraform(struct!.freeTier),
            isBlock: true,
            type: "struct",
            storageClassType: "FreeTierProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcPricingRule {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#key CcPricingRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#value CcPricingRule#value}
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
export interface FreeTierProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#activated CcPricingRule#activated}
    */
    readonly activated?: boolean | cdktn.IResolvable;
}
export class FreeTierPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FreeTierProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._activated !== undefined) {
            hasAnyValues = true;
            internalValueResult.activated = this._activated;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FreeTierProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._activated = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._activated = value.activated;
        }
    }

    // activated - computed: true, optional: true, required: false
    private _activated?: boolean | cdktn.IResolvable; 
    public get activated() {
        return this.getBooleanAttribute('activated');
    }
    public set activated(value: boolean | cdktn.IResolvable) {
        this._activated = value;
    }
    public resetActivated() {
        this._activated = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activatedInput() {
        return this._activated;
    }
}
export interface TieringProperty {
    /**
    * The possible customizable free tier configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#free_tier CcPricingRule#free_tier}
    */
    readonly freeTier?: FreeTierProperty;
}
export class TieringPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TieringProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._freeTier?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.freeTier = this._freeTier?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TieringProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._freeTier.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._freeTier.internalValue = value.freeTier;
        }
    }

    // free_tier - computed: true, optional: true, required: false
    private _freeTier = new FreeTierPropertyOutputReference(this, "free_tier");
    public get freeTier() {
        return this._freeTier;
    }
    public putFreeTier(value: FreeTierProperty) {
        this._freeTier.internalValue = value;
    }
    public resetFreeTier() {
        this._freeTier.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get freeTierInput() {
        return this._freeTier.internalValue;
    }
}
}
