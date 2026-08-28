// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEventTriggerProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the event trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#description CcEventTrigger#description}
    */
    readonly description?: string;
    /**
    * The unique name of the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#domain_name CcEventTrigger#domain_name}
    */
    readonly domainName: string;
    /**
    * A list of conditions that determine when an event should trigger the destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#event_trigger_conditions CcEventTrigger#event_trigger_conditions}
    */
    readonly eventTriggerConditions: CcEventTrigger.EventTriggerConditionProperty[] | cdktn.IResolvable;
    /**
    * Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#event_trigger_limits CcEventTrigger#event_trigger_limits}
    */
    readonly eventTriggerLimits?: CcEventTrigger.EventTriggerLimitsProperty;
    /**
    * The unique name of the event trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#event_trigger_name CcEventTrigger#event_trigger_name}
    */
    readonly eventTriggerName: string;
    /**
    * The unique name of the object type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#object_type_name CcEventTrigger#object_type_name}
    */
    readonly objectTypeName: string;
    /**
    * The destination is triggered only for profiles that meet the criteria of a segment definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#segment_filter CcEventTrigger#segment_filter}
    */
    readonly segmentFilter?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#tags CcEventTrigger#tags}
    */
    readonly tags?: CcEventTrigger.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger awscc_customerprofiles_event_trigger}
*/
export class CcEventTrigger extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_customerprofiles_event_trigger";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEventTrigger resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEventTrigger to import
    * @param importFromId The id of the existing CcEventTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEventTrigger to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_customerprofiles_event_trigger", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger awscc_customerprofiles_event_trigger} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEventTriggerProps
    */
    public constructor(scope: Construct, id: string, config: CcEventTriggerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_customerprofiles_event_trigger',
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
        this._domainName = config.domainName;
        this._eventTriggerConditions.internalValue = config.eventTriggerConditions;
        this._eventTriggerLimits.internalValue = config.eventTriggerLimits;
        this._eventTriggerName = config.eventTriggerName;
        this._objectTypeName = config.objectTypeName;
        this._segmentFilter = config.segmentFilter;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
        return this._domainName;
    }

    // event_trigger_conditions - computed: false, optional: false, required: true
    private _eventTriggerConditions = new CcEventTrigger.EventTriggerConditionPropertyList(this, "event_trigger_conditions", false);
    public get eventTriggerConditions() {
        return this._eventTriggerConditions;
    }
    public putEventTriggerConditions(value: CcEventTrigger.EventTriggerConditionProperty[] | cdktn.IResolvable) {
        this._eventTriggerConditions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventTriggerConditionsInput() {
        return this._eventTriggerConditions.internalValue;
    }

    // event_trigger_limits - computed: true, optional: true, required: false
    private _eventTriggerLimits = new CcEventTrigger.EventTriggerLimitsPropertyOutputReference(this, "event_trigger_limits");
    public get eventTriggerLimits() {
        return this._eventTriggerLimits;
    }
    public putEventTriggerLimits(value: CcEventTrigger.EventTriggerLimitsProperty) {
        this._eventTriggerLimits.internalValue = value;
    }
    public resetEventTriggerLimits() {
        this._eventTriggerLimits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventTriggerLimitsInput() {
        return this._eventTriggerLimits.internalValue;
    }

    // event_trigger_name - computed: false, optional: false, required: true
    private _eventTriggerName?: string; 
    public get eventTriggerName() {
        return this.getStringAttribute('event_trigger_name');
    }
    public set eventTriggerName(value: string) {
        this._eventTriggerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventTriggerNameInput() {
        return this._eventTriggerName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_at - computed: true, optional: false, required: false
    public get lastUpdatedAt() {
        return this.getStringAttribute('last_updated_at');
    }

    // object_type_name - computed: false, optional: false, required: true
    private _objectTypeName?: string; 
    public get objectTypeName() {
        return this.getStringAttribute('object_type_name');
    }
    public set objectTypeName(value: string) {
        this._objectTypeName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get objectTypeNameInput() {
        return this._objectTypeName;
    }

    // segment_filter - computed: true, optional: true, required: false
    private _segmentFilter?: string; 
    public get segmentFilter() {
        return this.getStringAttribute('segment_filter');
    }
    public set segmentFilter(value: string) {
        this._segmentFilter = value;
    }
    public resetSegmentFilter() {
        this._segmentFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentFilterInput() {
        return this._segmentFilter;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEventTrigger.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEventTrigger.TagProperty[] | cdktn.IResolvable) {
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
            description: cdktn.stringToTerraform(this._description),
            domain_name: cdktn.stringToTerraform(this._domainName),
            event_trigger_conditions: cdktn.listMapper(ccEventTriggerEventTriggerConditionPropertyToTerraform, false)(this._eventTriggerConditions.internalValue),
            event_trigger_limits: ccEventTriggerEventTriggerLimitsPropertyToTerraform(this._eventTriggerLimits.internalValue),
            event_trigger_name: cdktn.stringToTerraform(this._eventTriggerName),
            object_type_name: cdktn.stringToTerraform(this._objectTypeName),
            segment_filter: cdktn.stringToTerraform(this._segmentFilter),
            tags: cdktn.listMapper(ccEventTriggerTagPropertyToTerraform, false)(this._tags.internalValue),
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
            domain_name: {
                value: cdktn.stringToHclTerraform(this._domainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_trigger_conditions: {
                value: cdktn.listMapperHcl(ccEventTriggerEventTriggerConditionPropertyToHclTerraform, false)(this._eventTriggerConditions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEventTrigger.EventTriggerConditionPropertyList",
            },
            event_trigger_limits: {
                value: ccEventTriggerEventTriggerLimitsPropertyToHclTerraform(this._eventTriggerLimits.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventTrigger.EventTriggerLimitsProperty",
            },
            event_trigger_name: {
                value: cdktn.stringToHclTerraform(this._eventTriggerName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            object_type_name: {
                value: cdktn.stringToHclTerraform(this._objectTypeName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            segment_filter: {
                value: cdktn.stringToHclTerraform(this._segmentFilter),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEventTriggerTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcEventTrigger.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEventTriggerObjectAttributePropertyToTerraform(struct?: CcEventTrigger.ObjectAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
        field_name: cdktn.stringToTerraform(struct!.fieldName),
        source: cdktn.stringToTerraform(struct!.source),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccEventTriggerObjectAttributePropertyToHclTerraform(struct?: CcEventTrigger.ObjectAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison_operator: {
            value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        field_name: {
            value: cdktn.stringToHclTerraform(struct!.fieldName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source: {
            value: cdktn.stringToHclTerraform(struct!.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventTriggerEventTriggerDimensionPropertyToTerraform(struct?: CcEventTrigger.EventTriggerDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object_attributes: cdktn.listMapper(ccEventTriggerObjectAttributePropertyToTerraform, false)(struct!.objectAttributes),
    }
}


export function ccEventTriggerEventTriggerDimensionPropertyToHclTerraform(struct?: CcEventTrigger.EventTriggerDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object_attributes: {
            value: cdktn.listMapperHcl(ccEventTriggerObjectAttributePropertyToHclTerraform, false)(struct!.objectAttributes),
            isBlock: true,
            type: "list",
            storageClassType: "ObjectAttributePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventTriggerEventTriggerConditionPropertyToTerraform(struct?: CcEventTrigger.EventTriggerConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_trigger_dimensions: cdktn.listMapper(ccEventTriggerEventTriggerDimensionPropertyToTerraform, false)(struct!.eventTriggerDimensions),
        logical_operator: cdktn.stringToTerraform(struct!.logicalOperator),
    }
}


export function ccEventTriggerEventTriggerConditionPropertyToHclTerraform(struct?: CcEventTrigger.EventTriggerConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_trigger_dimensions: {
            value: cdktn.listMapperHcl(ccEventTriggerEventTriggerDimensionPropertyToHclTerraform, false)(struct!.eventTriggerDimensions),
            isBlock: true,
            type: "list",
            storageClassType: "EventTriggerDimensionPropertyList",
        },
        logical_operator: {
            value: cdktn.stringToHclTerraform(struct!.logicalOperator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventTriggerPeriodPropertyToTerraform(struct?: CcEventTrigger.PeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_invocations_per_profile: cdktn.numberToTerraform(struct!.maxInvocationsPerProfile),
        unit: cdktn.stringToTerraform(struct!.unit),
        unlimited: cdktn.booleanToTerraform(struct!.unlimited),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccEventTriggerPeriodPropertyToHclTerraform(struct?: CcEventTrigger.PeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_invocations_per_profile: {
            value: cdktn.numberToHclTerraform(struct!.maxInvocationsPerProfile),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unlimited: {
            value: cdktn.booleanToHclTerraform(struct!.unlimited),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventTriggerEventTriggerLimitsPropertyToTerraform(struct?: CcEventTrigger.EventTriggerLimitsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_expiration: cdktn.numberToTerraform(struct!.eventExpiration),
        periods: cdktn.listMapper(ccEventTriggerPeriodPropertyToTerraform, false)(struct!.periods),
    }
}


export function ccEventTriggerEventTriggerLimitsPropertyToHclTerraform(struct?: CcEventTrigger.EventTriggerLimitsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_expiration: {
            value: cdktn.numberToHclTerraform(struct!.eventExpiration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        periods: {
            value: cdktn.listMapperHcl(ccEventTriggerPeriodPropertyToHclTerraform, false)(struct!.periods),
            isBlock: true,
            type: "list",
            storageClassType: "PeriodPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventTriggerTagPropertyToTerraform(struct?: CcEventTrigger.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEventTriggerTagPropertyToHclTerraform(struct?: CcEventTrigger.TagProperty | cdktn.IResolvable): any {
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


export namespace CcEventTrigger {
export interface ObjectAttributeProperty {
    /**
    * The operator used to compare an attribute against a list of values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#comparison_operator CcEventTrigger#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * A field defined within an object type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#field_name CcEventTrigger#field_name}
    */
    readonly fieldName?: string;
    /**
    * An attribute contained within a source object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#source CcEventTrigger#source}
    */
    readonly source?: string;
    /**
    * A list of attribute values used for comparison.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#values CcEventTrigger#values}
    */
    readonly values: string[];
}
export class ObjectAttributePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ObjectAttributeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparisonOperator !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._fieldName !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldName = this._fieldName;
        }
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ObjectAttributeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparisonOperator = undefined;
            this._fieldName = undefined;
            this._source = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparisonOperator = value.comparisonOperator;
            this._fieldName = value.fieldName;
            this._source = value.source;
            this._values = value.values;
        }
    }

    // comparison_operator - computed: false, optional: false, required: true
    private _comparisonOperator?: string; 
    public get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    public set comparisonOperator(value: string) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonOperatorInput() {
        return this._comparisonOperator;
    }

    // field_name - computed: true, optional: true, required: false
    private _fieldName?: string; 
    public get fieldName() {
        return this.getStringAttribute('field_name');
    }
    public set fieldName(value: string) {
        this._fieldName = value;
    }
    public resetFieldName() {
        this._fieldName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldNameInput() {
        return this._fieldName;
    }

    // source - computed: true, optional: true, required: false
    private _source?: string; 
    public get source() {
        return this.getStringAttribute('source');
    }
    public set source(value: string) {
        this._source = value;
    }
    public resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source;
    }

    // values - computed: false, optional: false, required: true
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class ObjectAttributePropertyList extends cdktn.ComplexList {
    public internalValue? : ObjectAttributeProperty[] | cdktn.IResolvable

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
    public get(index: number): ObjectAttributePropertyOutputReference {
        return new ObjectAttributePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EventTriggerDimensionProperty {
    /**
    * A list of object attributes to be evaluated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#object_attributes CcEventTrigger#object_attributes}
    */
    readonly objectAttributes: ObjectAttributeProperty[] | cdktn.IResolvable;
}
export class EventTriggerDimensionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EventTriggerDimensionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._objectAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectAttributes = this._objectAttributes?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventTriggerDimensionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._objectAttributes.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._objectAttributes.internalValue = value.objectAttributes;
        }
    }

    // object_attributes - computed: false, optional: false, required: true
    private _objectAttributes = new ObjectAttributePropertyList(this, "object_attributes", false);
    public get objectAttributes() {
        return this._objectAttributes;
    }
    public putObjectAttributes(value: ObjectAttributeProperty[] | cdktn.IResolvable) {
        this._objectAttributes.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get objectAttributesInput() {
        return this._objectAttributes.internalValue;
    }
}

export class EventTriggerDimensionPropertyList extends cdktn.ComplexList {
    public internalValue? : EventTriggerDimensionProperty[] | cdktn.IResolvable

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
    public get(index: number): EventTriggerDimensionPropertyOutputReference {
        return new EventTriggerDimensionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EventTriggerConditionProperty {
    /**
    * A list of dimensions to be evaluated for the event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#event_trigger_dimensions CcEventTrigger#event_trigger_dimensions}
    */
    readonly eventTriggerDimensions: EventTriggerDimensionProperty[] | cdktn.IResolvable;
    /**
    * The operator used to combine multiple dimensions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#logical_operator CcEventTrigger#logical_operator}
    */
    readonly logicalOperator: string;
}
export class EventTriggerConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EventTriggerConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventTriggerDimensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventTriggerDimensions = this._eventTriggerDimensions?.internalValue;
        }
        if (this._logicalOperator !== undefined) {
            hasAnyValues = true;
            internalValueResult.logicalOperator = this._logicalOperator;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventTriggerConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventTriggerDimensions.internalValue = undefined;
            this._logicalOperator = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventTriggerDimensions.internalValue = value.eventTriggerDimensions;
            this._logicalOperator = value.logicalOperator;
        }
    }

    // event_trigger_dimensions - computed: false, optional: false, required: true
    private _eventTriggerDimensions = new EventTriggerDimensionPropertyList(this, "event_trigger_dimensions", false);
    public get eventTriggerDimensions() {
        return this._eventTriggerDimensions;
    }
    public putEventTriggerDimensions(value: EventTriggerDimensionProperty[] | cdktn.IResolvable) {
        this._eventTriggerDimensions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventTriggerDimensionsInput() {
        return this._eventTriggerDimensions.internalValue;
    }

    // logical_operator - computed: false, optional: false, required: true
    private _logicalOperator?: string; 
    public get logicalOperator() {
        return this.getStringAttribute('logical_operator');
    }
    public set logicalOperator(value: string) {
        this._logicalOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logicalOperatorInput() {
        return this._logicalOperator;
    }
}

export class EventTriggerConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : EventTriggerConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): EventTriggerConditionPropertyOutputReference {
        return new EventTriggerConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PeriodProperty {
    /**
    * The maximum allowed number of destination invocations per profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#max_invocations_per_profile CcEventTrigger#max_invocations_per_profile}
    */
    readonly maxInvocationsPerProfile?: number;
    /**
    * The unit of time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#unit CcEventTrigger#unit}
    */
    readonly unit?: string;
    /**
    * If set to true, there is no limit on the number of destination invocations per profile. The default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#unlimited CcEventTrigger#unlimited}
    */
    readonly unlimited?: boolean | cdktn.IResolvable;
    /**
    * The amount of time of the specified unit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#value CcEventTrigger#value}
    */
    readonly value?: number;
}
export class PeriodPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PeriodProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxInvocationsPerProfile !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxInvocationsPerProfile = this._maxInvocationsPerProfile;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._unlimited !== undefined) {
            hasAnyValues = true;
            internalValueResult.unlimited = this._unlimited;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PeriodProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxInvocationsPerProfile = undefined;
            this._unit = undefined;
            this._unlimited = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxInvocationsPerProfile = value.maxInvocationsPerProfile;
            this._unit = value.unit;
            this._unlimited = value.unlimited;
            this._value = value.value;
        }
    }

    // max_invocations_per_profile - computed: true, optional: true, required: false
    private _maxInvocationsPerProfile?: number; 
    public get maxInvocationsPerProfile() {
        return this.getNumberAttribute('max_invocations_per_profile');
    }
    public set maxInvocationsPerProfile(value: number) {
        this._maxInvocationsPerProfile = value;
    }
    public resetMaxInvocationsPerProfile() {
        this._maxInvocationsPerProfile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInvocationsPerProfileInput() {
        return this._maxInvocationsPerProfile;
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }

    // unlimited - computed: true, optional: true, required: false
    private _unlimited?: boolean | cdktn.IResolvable; 
    public get unlimited() {
        return this.getBooleanAttribute('unlimited');
    }
    public set unlimited(value: boolean | cdktn.IResolvable) {
        this._unlimited = value;
    }
    public resetUnlimited() {
        this._unlimited = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unlimitedInput() {
        return this._unlimited;
    }

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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

export class PeriodPropertyList extends cdktn.ComplexList {
    public internalValue? : PeriodProperty[] | cdktn.IResolvable

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
    public get(index: number): PeriodPropertyOutputReference {
        return new PeriodPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EventTriggerLimitsProperty {
    /**
    * Specifies that an event will only trigger the destination if it is processed within a certain latency period.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#event_expiration CcEventTrigger#event_expiration}
    */
    readonly eventExpiration?: number;
    /**
    * A list of time periods during which the limits apply.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#periods CcEventTrigger#periods}
    */
    readonly periods?: PeriodProperty[] | cdktn.IResolvable;
}
export class EventTriggerLimitsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EventTriggerLimitsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventExpiration !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventExpiration = this._eventExpiration;
        }
        if (this._periods?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.periods = this._periods?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventTriggerLimitsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventExpiration = undefined;
            this._periods.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventExpiration = value.eventExpiration;
            this._periods.internalValue = value.periods;
        }
    }

    // event_expiration - computed: true, optional: true, required: false
    private _eventExpiration?: number; 
    public get eventExpiration() {
        return this.getNumberAttribute('event_expiration');
    }
    public set eventExpiration(value: number) {
        this._eventExpiration = value;
    }
    public resetEventExpiration() {
        this._eventExpiration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventExpirationInput() {
        return this._eventExpiration;
    }

    // periods - computed: true, optional: true, required: false
    private _periods = new PeriodPropertyList(this, "periods", false);
    public get periods() {
        return this._periods;
    }
    public putPeriods(value: PeriodProperty[] | cdktn.IResolvable) {
        this._periods.internalValue = value;
    }
    public resetPeriods() {
        this._periods.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodsInput() {
        return this._periods.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#key CcEventTrigger#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_event_trigger#value CcEventTrigger#value}
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
