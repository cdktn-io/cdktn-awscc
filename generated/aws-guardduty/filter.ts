// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFilterProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#action CcFilter#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#description CcFilter#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#detector_id CcFilter#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#finding_criteria CcFilter#finding_criteria}
    */
    readonly findingCriteria: CcFilter.FindingCriteriaProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#name CcFilter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#rank CcFilter#rank}
    */
    readonly rank?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#tags CcFilter#tags}
    */
    readonly tags?: CcFilter.TagItemProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter awscc_guardduty_filter}
*/
export class CcFilter extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_guardduty_filter";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFilter resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFilter to import
    * @param importFromId The id of the existing CcFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFilter to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_guardduty_filter", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter awscc_guardduty_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFilterProps
    */
    public constructor(scope: Construct, id: string, config: CcFilterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_guardduty_filter',
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
        this._action = config.action;
        this._description = config.description;
        this._detectorId = config.detectorId;
        this._findingCriteria.internalValue = config.findingCriteria;
        this._name = config.name;
        this._rank = config.rank;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action - computed: true, optional: true, required: false
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    public resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
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

    // detector_id - computed: false, optional: false, required: true
    private _detectorId?: string; 
    public get detectorId() {
        return this.getStringAttribute('detector_id');
    }
    public set detectorId(value: string) {
        this._detectorId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get detectorIdInput() {
        return this._detectorId;
    }

    // finding_criteria - computed: false, optional: false, required: true
    private _findingCriteria = new CcFilter.FindingCriteriaPropertyOutputReference(this, "finding_criteria");
    public get findingCriteria() {
        return this._findingCriteria;
    }
    public putFindingCriteria(value: CcFilter.FindingCriteriaProperty) {
        this._findingCriteria.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get findingCriteriaInput() {
        return this._findingCriteria.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // rank - computed: true, optional: true, required: false
    private _rank?: number; 
    public get rank() {
        return this.getNumberAttribute('rank');
    }
    public set rank(value: number) {
        this._rank = value;
    }
    public resetRank() {
        this._rank = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rankInput() {
        return this._rank;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFilter.TagItemPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFilter.TagItemProperty[] | cdktn.IResolvable) {
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
            action: cdktn.stringToTerraform(this._action),
            description: cdktn.stringToTerraform(this._description),
            detector_id: cdktn.stringToTerraform(this._detectorId),
            finding_criteria: ccFilterFindingCriteriaPropertyToTerraform(this._findingCriteria.internalValue),
            name: cdktn.stringToTerraform(this._name),
            rank: cdktn.numberToTerraform(this._rank),
            tags: cdktn.listMapper(ccFilterTagItemPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action: {
                value: cdktn.stringToHclTerraform(this._action),
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
            detector_id: {
                value: cdktn.stringToHclTerraform(this._detectorId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            finding_criteria: {
                value: ccFilterFindingCriteriaPropertyToHclTerraform(this._findingCriteria.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFilter.FindingCriteriaProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rank: {
                value: cdktn.numberToHclTerraform(this._rank),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFilterTagItemPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFilter.TagItemPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFilterConditionPropertyToTerraform(struct?: CcFilter.ConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        eq: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.eq),
        equals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.equalTo),
        greater_than: cdktn.numberToTerraform(struct!.greaterThan),
        greater_than_or_equal: cdktn.numberToTerraform(struct!.greaterThanOrEqual),
        gt: cdktn.numberToTerraform(struct!.gt),
        gte: cdktn.numberToTerraform(struct!.gte),
        less_than: cdktn.numberToTerraform(struct!.lessThan),
        less_than_or_equal: cdktn.numberToTerraform(struct!.lessThanOrEqual),
        lt: cdktn.numberToTerraform(struct!.lt),
        lte: cdktn.numberToTerraform(struct!.lte),
        neq: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.neq),
        not_equals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notEquals),
    }
}


export function ccFilterConditionPropertyToHclTerraform(struct?: CcFilter.ConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        eq: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.eq),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        equals: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.equalTo),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        greater_than: {
            value: cdktn.numberToHclTerraform(struct!.greaterThan),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        greater_than_or_equal: {
            value: cdktn.numberToHclTerraform(struct!.greaterThanOrEqual),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        gt: {
            value: cdktn.numberToHclTerraform(struct!.gt),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        gte: {
            value: cdktn.numberToHclTerraform(struct!.gte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        less_than: {
            value: cdktn.numberToHclTerraform(struct!.lessThan),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        less_than_or_equal: {
            value: cdktn.numberToHclTerraform(struct!.lessThanOrEqual),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lt: {
            value: cdktn.numberToHclTerraform(struct!.lt),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lte: {
            value: cdktn.numberToHclTerraform(struct!.lte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        neq: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.neq),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        not_equals: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notEquals),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFilterFindingCriteriaPropertyToTerraform(struct?: CcFilter.FindingCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        criterion: cdktn.hashMapper(ccFilterConditionPropertyToTerraform)(struct!.criterion),
    }
}


export function ccFilterFindingCriteriaPropertyToHclTerraform(struct?: CcFilter.FindingCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        criterion: {
            value: cdktn.hashMapperHcl(ccFilterConditionPropertyToHclTerraform)(struct!.criterion),
            isBlock: true,
            type: "map",
            storageClassType: "ConditionPropertyMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFilterTagItemPropertyToTerraform(struct?: CcFilter.TagItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterTagItemPropertyToHclTerraform(struct?: CcFilter.TagItemProperty | cdktn.IResolvable): any {
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


export namespace CcFilter {
export interface ConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#eq CcFilter#eq}
    */
    readonly eq?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#equals CcFilter#equals}
    */
    readonly equalTo?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#greater_than CcFilter#greater_than}
    */
    readonly greaterThan?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#greater_than_or_equal CcFilter#greater_than_or_equal}
    */
    readonly greaterThanOrEqual?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#gt CcFilter#gt}
    */
    readonly gt?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#gte CcFilter#gte}
    */
    readonly gte?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#less_than CcFilter#less_than}
    */
    readonly lessThan?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#less_than_or_equal CcFilter#less_than_or_equal}
    */
    readonly lessThanOrEqual?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#lt CcFilter#lt}
    */
    readonly lt?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#lte CcFilter#lte}
    */
    readonly lte?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#neq CcFilter#neq}
    */
    readonly neq?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#not_equals CcFilter#not_equals}
    */
    readonly notEquals?: string[];
}
export class ConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): ConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eq !== undefined) {
            hasAnyValues = true;
            internalValueResult.eq = this._eq;
        }
        if (this._equals !== undefined) {
            hasAnyValues = true;
            internalValueResult.equalTo = this._equals;
        }
        if (this._greaterThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.greaterThan = this._greaterThan;
        }
        if (this._greaterThanOrEqual !== undefined) {
            hasAnyValues = true;
            internalValueResult.greaterThanOrEqual = this._greaterThanOrEqual;
        }
        if (this._gt !== undefined) {
            hasAnyValues = true;
            internalValueResult.gt = this._gt;
        }
        if (this._gte !== undefined) {
            hasAnyValues = true;
            internalValueResult.gte = this._gte;
        }
        if (this._lessThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.lessThan = this._lessThan;
        }
        if (this._lessThanOrEqual !== undefined) {
            hasAnyValues = true;
            internalValueResult.lessThanOrEqual = this._lessThanOrEqual;
        }
        if (this._lt !== undefined) {
            hasAnyValues = true;
            internalValueResult.lt = this._lt;
        }
        if (this._lte !== undefined) {
            hasAnyValues = true;
            internalValueResult.lte = this._lte;
        }
        if (this._neq !== undefined) {
            hasAnyValues = true;
            internalValueResult.neq = this._neq;
        }
        if (this._notEquals !== undefined) {
            hasAnyValues = true;
            internalValueResult.notEquals = this._notEquals;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eq = undefined;
            this._equals = undefined;
            this._greaterThan = undefined;
            this._greaterThanOrEqual = undefined;
            this._gt = undefined;
            this._gte = undefined;
            this._lessThan = undefined;
            this._lessThanOrEqual = undefined;
            this._lt = undefined;
            this._lte = undefined;
            this._neq = undefined;
            this._notEquals = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eq = value.eq;
            this._equals = value.equalTo;
            this._greaterThan = value.greaterThan;
            this._greaterThanOrEqual = value.greaterThanOrEqual;
            this._gt = value.gt;
            this._gte = value.gte;
            this._lessThan = value.lessThan;
            this._lessThanOrEqual = value.lessThanOrEqual;
            this._lt = value.lt;
            this._lte = value.lte;
            this._neq = value.neq;
            this._notEquals = value.notEquals;
        }
    }

    // eq - computed: true, optional: true, required: false
    private _eq?: string[]; 
    public get eq() {
        return this.getListAttribute('eq');
    }
    public set eq(value: string[]) {
        this._eq = value;
    }
    public resetEq() {
        this._eq = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eqInput() {
        return this._eq;
    }

    // equals - computed: true, optional: true, required: false
    private _equals?: string[]; 
    public get equalTo() {
        return this.getListAttribute('equals');
    }
    public set equalTo(value: string[]) {
        this._equals = value;
    }
    public resetEqualTo() {
        this._equals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get equalToInput() {
        return this._equals;
    }

    // greater_than - computed: true, optional: true, required: false
    private _greaterThan?: number; 
    public get greaterThan() {
        return this.getNumberAttribute('greater_than');
    }
    public set greaterThan(value: number) {
        this._greaterThan = value;
    }
    public resetGreaterThan() {
        this._greaterThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get greaterThanInput() {
        return this._greaterThan;
    }

    // greater_than_or_equal - computed: true, optional: true, required: false
    private _greaterThanOrEqual?: number; 
    public get greaterThanOrEqual() {
        return this.getNumberAttribute('greater_than_or_equal');
    }
    public set greaterThanOrEqual(value: number) {
        this._greaterThanOrEqual = value;
    }
    public resetGreaterThanOrEqual() {
        this._greaterThanOrEqual = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get greaterThanOrEqualInput() {
        return this._greaterThanOrEqual;
    }

    // gt - computed: true, optional: true, required: false
    private _gt?: number; 
    public get gt() {
        return this.getNumberAttribute('gt');
    }
    public set gt(value: number) {
        this._gt = value;
    }
    public resetGt() {
        this._gt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gtInput() {
        return this._gt;
    }

    // gte - computed: true, optional: true, required: false
    private _gte?: number; 
    public get gte() {
        return this.getNumberAttribute('gte');
    }
    public set gte(value: number) {
        this._gte = value;
    }
    public resetGte() {
        this._gte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gteInput() {
        return this._gte;
    }

    // less_than - computed: true, optional: true, required: false
    private _lessThan?: number; 
    public get lessThan() {
        return this.getNumberAttribute('less_than');
    }
    public set lessThan(value: number) {
        this._lessThan = value;
    }
    public resetLessThan() {
        this._lessThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lessThanInput() {
        return this._lessThan;
    }

    // less_than_or_equal - computed: true, optional: true, required: false
    private _lessThanOrEqual?: number; 
    public get lessThanOrEqual() {
        return this.getNumberAttribute('less_than_or_equal');
    }
    public set lessThanOrEqual(value: number) {
        this._lessThanOrEqual = value;
    }
    public resetLessThanOrEqual() {
        this._lessThanOrEqual = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lessThanOrEqualInput() {
        return this._lessThanOrEqual;
    }

    // lt - computed: true, optional: true, required: false
    private _lt?: number; 
    public get lt() {
        return this.getNumberAttribute('lt');
    }
    public set lt(value: number) {
        this._lt = value;
    }
    public resetLt() {
        this._lt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ltInput() {
        return this._lt;
    }

    // lte - computed: true, optional: true, required: false
    private _lte?: number; 
    public get lte() {
        return this.getNumberAttribute('lte');
    }
    public set lte(value: number) {
        this._lte = value;
    }
    public resetLte() {
        this._lte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lteInput() {
        return this._lte;
    }

    // neq - computed: true, optional: true, required: false
    private _neq?: string[]; 
    public get neq() {
        return this.getListAttribute('neq');
    }
    public set neq(value: string[]) {
        this._neq = value;
    }
    public resetNeq() {
        this._neq = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get neqInput() {
        return this._neq;
    }

    // not_equals - computed: true, optional: true, required: false
    private _notEquals?: string[]; 
    public get notEquals() {
        return this.getListAttribute('not_equals');
    }
    public set notEquals(value: string[]) {
        this._notEquals = value;
    }
    public resetNotEquals() {
        this._notEquals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notEqualsInput() {
        return this._notEquals;
    }
}

export class ConditionPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: ConditionProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): ConditionPropertyOutputReference {
        return new ConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface FindingCriteriaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#criterion CcFilter#criterion}
    */
    readonly criterion?: { [key: string]: ConditionProperty } | cdktn.IResolvable;
}
export class FindingCriteriaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FindingCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._criterion?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.criterion = this._criterion?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FindingCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._criterion.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._criterion.internalValue = value.criterion;
        }
    }

    // criterion - computed: true, optional: true, required: false
    private _criterion = new ConditionPropertyMap(this, "criterion");
    public get criterion() {
        return this._criterion;
    }
    public putCriterion(value: { [key: string]: ConditionProperty } | cdktn.IResolvable) {
        this._criterion.internalValue = value;
    }
    public resetCriterion() {
        this._criterion.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get criterionInput() {
        return this._criterion.internalValue;
    }
}
export interface TagItemProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#key CcFilter#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class TagItemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagItemProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagItemProperty | cdktn.IResolvable | undefined) {
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

export class TagItemPropertyList extends cdktn.ComplexList {
    public internalValue? : TagItemProperty[] | cdktn.IResolvable

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
    public get(index: number): TagItemPropertyOutputReference {
        return new TagItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
