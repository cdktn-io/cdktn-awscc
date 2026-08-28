// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFindingsFilterProps extends cdktn.TerraformMetaArguments {
    /**
    * Findings filter action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter#action CcFindingsFilter#action}
    */
    readonly action?: string;
    /**
    * Findings filter description
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter#description CcFindingsFilter#description}
    */
    readonly description?: string;
    /**
    * Findings filter criteria.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter#finding_criteria CcFindingsFilter#finding_criteria}
    */
    readonly findingCriteria: CcFindingsFilter.FindingCriteriaProperty;
    /**
    * Findings filter name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter#name CcFindingsFilter#name}
    */
    readonly name: string;
    /**
    * Findings filter position.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter#position CcFindingsFilter#position}
    */
    readonly position?: number;
    /**
    * A collection of tags associated with a resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter#tags CcFindingsFilter#tags}
    */
    readonly tags?: CcFindingsFilter.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter awscc_macie_findings_filter}
*/
export class CcFindingsFilter extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_macie_findings_filter";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFindingsFilter resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFindingsFilter to import
    * @param importFromId The id of the existing CcFindingsFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFindingsFilter to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_macie_findings_filter", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter awscc_macie_findings_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFindingsFilterProps
    */
    public constructor(scope: Construct, id: string, config: CcFindingsFilterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_macie_findings_filter',
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
        this._findingCriteria.internalValue = config.findingCriteria;
        this._name = config.name;
        this._position = config.position;
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

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // finding_criteria - computed: false, optional: false, required: true
    private _findingCriteria = new CcFindingsFilter.FindingCriteriaPropertyOutputReference(this, "finding_criteria");
    public get findingCriteria() {
        return this._findingCriteria;
    }
    public putFindingCriteria(value: CcFindingsFilter.FindingCriteriaProperty) {
        this._findingCriteria.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get findingCriteriaInput() {
        return this._findingCriteria.internalValue;
    }

    // findings_filter_id - computed: true, optional: false, required: false
    public get findingsFilterId() {
        return this.getStringAttribute('findings_filter_id');
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

    // position - computed: true, optional: true, required: false
    private _position?: number; 
    public get position() {
        return this.getNumberAttribute('position');
    }
    public set position(value: number) {
        this._position = value;
    }
    public resetPosition() {
        this._position = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get positionInput() {
        return this._position;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFindingsFilter.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFindingsFilter.TagProperty[] | cdktn.IResolvable) {
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
            finding_criteria: ccFindingsFilterFindingCriteriaPropertyToTerraform(this._findingCriteria.internalValue),
            name: cdktn.stringToTerraform(this._name),
            position: cdktn.numberToTerraform(this._position),
            tags: cdktn.listMapper(ccFindingsFilterTagPropertyToTerraform, false)(this._tags.internalValue),
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
            finding_criteria: {
                value: ccFindingsFilterFindingCriteriaPropertyToHclTerraform(this._findingCriteria.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFindingsFilter.FindingCriteriaProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            position: {
                value: cdktn.numberToHclTerraform(this._position),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFindingsFilterTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFindingsFilter.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFindingsFilterCriterionAdditionalPropertiesPropertyToTerraform(struct?: CcFindingsFilter.CriterionAdditionalPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        eq: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.eq),
        gt: cdktn.numberToTerraform(struct!.gt),
        gte: cdktn.numberToTerraform(struct!.gte),
        lt: cdktn.numberToTerraform(struct!.lt),
        lte: cdktn.numberToTerraform(struct!.lte),
        neq: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.neq),
    }
}


export function ccFindingsFilterCriterionAdditionalPropertiesPropertyToHclTerraform(struct?: CcFindingsFilter.CriterionAdditionalPropertiesProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFindingsFilterFindingCriteriaPropertyToTerraform(struct?: CcFindingsFilter.FindingCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        criterion: cdktn.hashMapper(ccFindingsFilterCriterionAdditionalPropertiesPropertyToTerraform)(struct!.criterion),
    }
}


export function ccFindingsFilterFindingCriteriaPropertyToHclTerraform(struct?: CcFindingsFilter.FindingCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        criterion: {
            value: cdktn.hashMapperHcl(ccFindingsFilterCriterionAdditionalPropertiesPropertyToHclTerraform)(struct!.criterion),
            isBlock: true,
            type: "map",
            storageClassType: "CriterionAdditionalPropertiesPropertyMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFindingsFilterTagPropertyToTerraform(struct?: CcFindingsFilter.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFindingsFilterTagPropertyToHclTerraform(struct?: CcFindingsFilter.TagProperty | cdktn.IResolvable): any {
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


export namespace CcFindingsFilter {
export interface CriterionAdditionalPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter#eq CcFindingsFilter#eq}
    */
    readonly eq?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter#gt CcFindingsFilter#gt}
    */
    readonly gt?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter#gte CcFindingsFilter#gte}
    */
    readonly gte?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter#lt CcFindingsFilter#lt}
    */
    readonly lt?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter#lte CcFindingsFilter#lte}
    */
    readonly lte?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter#neq CcFindingsFilter#neq}
    */
    readonly neq?: string[];
}
export class CriterionAdditionalPropertiesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CriterionAdditionalPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eq !== undefined) {
            hasAnyValues = true;
            internalValueResult.eq = this._eq;
        }
        if (this._gt !== undefined) {
            hasAnyValues = true;
            internalValueResult.gt = this._gt;
        }
        if (this._gte !== undefined) {
            hasAnyValues = true;
            internalValueResult.gte = this._gte;
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
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CriterionAdditionalPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eq = undefined;
            this._gt = undefined;
            this._gte = undefined;
            this._lt = undefined;
            this._lte = undefined;
            this._neq = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eq = value.eq;
            this._gt = value.gt;
            this._gte = value.gte;
            this._lt = value.lt;
            this._lte = value.lte;
            this._neq = value.neq;
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
}

export class CriterionAdditionalPropertiesPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: CriterionAdditionalPropertiesProperty } | cdktn.IResolvable

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
    public get(key: string): CriterionAdditionalPropertiesPropertyOutputReference {
        return new CriterionAdditionalPropertiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface FindingCriteriaProperty {
    /**
    * Map of filter criteria.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter#criterion CcFindingsFilter#criterion}
    */
    readonly criterion?: { [key: string]: CriterionAdditionalPropertiesProperty } | cdktn.IResolvable;
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
    private _criterion = new CriterionAdditionalPropertiesPropertyMap(this, "criterion");
    public get criterion() {
        return this._criterion;
    }
    public putCriterion(value: { [key: string]: CriterionAdditionalPropertiesProperty } | cdktn.IResolvable) {
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
export interface TagProperty {
    /**
    * The tag's key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter#key CcFindingsFilter#key}
    */
    readonly key?: string;
    /**
    * The tag's value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_findings_filter#value CcFindingsFilter#value}
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
