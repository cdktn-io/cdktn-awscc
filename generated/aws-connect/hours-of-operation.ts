// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcHoursOfOperationProps extends cdktn.TerraformMetaArguments {
    /**
    * List of child hours of operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#child_hours_of_operations CcHoursOfOperation#child_hours_of_operations}
    */
    readonly childHoursOfOperations?: CcHoursOfOperation.HoursOfOperationsIdentifierProperty[] | cdktn.IResolvable;
    /**
    * Configuration information for the hours of operation: day, start time, and end time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#config CcHoursOfOperation#config}
    */
    readonly config: CcHoursOfOperation.HoursOfOperationConfigProperty[] | cdktn.IResolvable;
    /**
    * The description of the hours of operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#description CcHoursOfOperation#description}
    */
    readonly description?: string;
    /**
    * One or more hours of operation overrides assigned to an hour of operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#hours_of_operation_overrides CcHoursOfOperation#hours_of_operation_overrides}
    */
    readonly hoursOfOperationOverrides?: CcHoursOfOperation.HoursOfOperationOverrideProperty[] | cdktn.IResolvable;
    /**
    * The identifier of the Amazon Connect instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#instance_arn CcHoursOfOperation#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * The name of the hours of operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#name CcHoursOfOperation#name}
    */
    readonly name: string;
    /**
    * List of parent hours of operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#parent_hours_of_operations CcHoursOfOperation#parent_hours_of_operations}
    */
    readonly parentHoursOfOperations?: CcHoursOfOperation.ParentHoursOfOperationsProperty[] | cdktn.IResolvable;
    /**
    * One or more tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#tags CcHoursOfOperation#tags}
    */
    readonly tags?: CcHoursOfOperation.TagProperty[] | cdktn.IResolvable;
    /**
    * The time zone of the hours of operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#time_zone CcHoursOfOperation#time_zone}
    */
    readonly timeZone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation awscc_connect_hours_of_operation}
*/
export class CcHoursOfOperation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_hours_of_operation";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcHoursOfOperation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcHoursOfOperation to import
    * @param importFromId The id of the existing CcHoursOfOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcHoursOfOperation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_hours_of_operation", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation awscc_connect_hours_of_operation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcHoursOfOperationProps
    */
    public constructor(scope: Construct, id: string, config: CcHoursOfOperationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_hours_of_operation',
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
        this._childHoursOfOperations.internalValue = config.childHoursOfOperations;
        this._config.internalValue = config.config;
        this._description = config.description;
        this._hoursOfOperationOverrides.internalValue = config.hoursOfOperationOverrides;
        this._instanceArn = config.instanceArn;
        this._name = config.name;
        this._parentHoursOfOperations.internalValue = config.parentHoursOfOperations;
        this._tags.internalValue = config.tags;
        this._timeZone = config.timeZone;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // child_hours_of_operations - computed: true, optional: true, required: false
    private _childHoursOfOperations = new CcHoursOfOperation.HoursOfOperationsIdentifierPropertyList(this, "child_hours_of_operations", false);
    public get childHoursOfOperations() {
        return this._childHoursOfOperations;
    }
    public putChildHoursOfOperations(value: CcHoursOfOperation.HoursOfOperationsIdentifierProperty[] | cdktn.IResolvable) {
        this._childHoursOfOperations.internalValue = value;
    }
    public resetChildHoursOfOperations() {
        this._childHoursOfOperations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get childHoursOfOperationsInput() {
        return this._childHoursOfOperations.internalValue;
    }

    // config - computed: false, optional: false, required: true
    private _config = new CcHoursOfOperation.HoursOfOperationConfigPropertyList(this, "config", true);
    public get config() {
        return this._config;
    }
    public putConfig(value: CcHoursOfOperation.HoursOfOperationConfigProperty[] | cdktn.IResolvable) {
        this._config.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configInput() {
        return this._config.internalValue;
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

    // hours_of_operation_arn - computed: true, optional: false, required: false
    public get hoursOfOperationArn() {
        return this.getStringAttribute('hours_of_operation_arn');
    }

    // hours_of_operation_overrides - computed: true, optional: true, required: false
    private _hoursOfOperationOverrides = new CcHoursOfOperation.HoursOfOperationOverridePropertyList(this, "hours_of_operation_overrides", false);
    public get hoursOfOperationOverrides() {
        return this._hoursOfOperationOverrides;
    }
    public putHoursOfOperationOverrides(value: CcHoursOfOperation.HoursOfOperationOverrideProperty[] | cdktn.IResolvable) {
        this._hoursOfOperationOverrides.internalValue = value;
    }
    public resetHoursOfOperationOverrides() {
        this._hoursOfOperationOverrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hoursOfOperationOverridesInput() {
        return this._hoursOfOperationOverrides.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_arn - computed: false, optional: false, required: true
    private _instanceArn?: string; 
    public get instanceArn() {
        return this.getStringAttribute('instance_arn');
    }
    public set instanceArn(value: string) {
        this._instanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceArnInput() {
        return this._instanceArn;
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

    // parent_hours_of_operations - computed: true, optional: true, required: false
    private _parentHoursOfOperations = new CcHoursOfOperation.ParentHoursOfOperationsPropertyList(this, "parent_hours_of_operations", false);
    public get parentHoursOfOperations() {
        return this._parentHoursOfOperations;
    }
    public putParentHoursOfOperations(value: CcHoursOfOperation.ParentHoursOfOperationsProperty[] | cdktn.IResolvable) {
        this._parentHoursOfOperations.internalValue = value;
    }
    public resetParentHoursOfOperations() {
        this._parentHoursOfOperations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parentHoursOfOperationsInput() {
        return this._parentHoursOfOperations.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcHoursOfOperation.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcHoursOfOperation.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // time_zone - computed: false, optional: false, required: true
    private _timeZone?: string; 
    public get timeZone() {
        return this.getStringAttribute('time_zone');
    }
    public set timeZone(value: string) {
        this._timeZone = value;
    }
    // Temporarily expose input value. Use with caution.
    public get timeZoneInput() {
        return this._timeZone;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            child_hours_of_operations: cdktn.listMapper(ccHoursOfOperationHoursOfOperationsIdentifierPropertyToTerraform, false)(this._childHoursOfOperations.internalValue),
            config: cdktn.listMapper(ccHoursOfOperationHoursOfOperationConfigPropertyToTerraform, false)(this._config.internalValue),
            description: cdktn.stringToTerraform(this._description),
            hours_of_operation_overrides: cdktn.listMapper(ccHoursOfOperationHoursOfOperationOverridePropertyToTerraform, false)(this._hoursOfOperationOverrides.internalValue),
            instance_arn: cdktn.stringToTerraform(this._instanceArn),
            name: cdktn.stringToTerraform(this._name),
            parent_hours_of_operations: cdktn.listMapper(ccHoursOfOperationParentHoursOfOperationsPropertyToTerraform, false)(this._parentHoursOfOperations.internalValue),
            tags: cdktn.listMapper(ccHoursOfOperationTagPropertyToTerraform, false)(this._tags.internalValue),
            time_zone: cdktn.stringToTerraform(this._timeZone),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            child_hours_of_operations: {
                value: cdktn.listMapperHcl(ccHoursOfOperationHoursOfOperationsIdentifierPropertyToHclTerraform, false)(this._childHoursOfOperations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcHoursOfOperation.HoursOfOperationsIdentifierPropertyList",
            },
            config: {
                value: cdktn.listMapperHcl(ccHoursOfOperationHoursOfOperationConfigPropertyToHclTerraform, false)(this._config.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcHoursOfOperation.HoursOfOperationConfigPropertyList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hours_of_operation_overrides: {
                value: cdktn.listMapperHcl(ccHoursOfOperationHoursOfOperationOverridePropertyToHclTerraform, false)(this._hoursOfOperationOverrides.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcHoursOfOperation.HoursOfOperationOverridePropertyList",
            },
            instance_arn: {
                value: cdktn.stringToHclTerraform(this._instanceArn),
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
            parent_hours_of_operations: {
                value: cdktn.listMapperHcl(ccHoursOfOperationParentHoursOfOperationsPropertyToHclTerraform, false)(this._parentHoursOfOperations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcHoursOfOperation.ParentHoursOfOperationsPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccHoursOfOperationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcHoursOfOperation.TagPropertyList",
            },
            time_zone: {
                value: cdktn.stringToHclTerraform(this._timeZone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccHoursOfOperationHoursOfOperationsIdentifierPropertyToTerraform(struct?: CcHoursOfOperation.HoursOfOperationsIdentifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        id: cdktn.stringToTerraform(struct!.id),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccHoursOfOperationHoursOfOperationsIdentifierPropertyToHclTerraform(struct?: CcHoursOfOperation.HoursOfOperationsIdentifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHoursOfOperationHoursOfOperationTimeSlicePropertyToTerraform(struct?: CcHoursOfOperation.HoursOfOperationTimeSliceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hours: cdktn.numberToTerraform(struct!.hours),
        minutes: cdktn.numberToTerraform(struct!.minutes),
    }
}


export function ccHoursOfOperationHoursOfOperationTimeSlicePropertyToHclTerraform(struct?: CcHoursOfOperation.HoursOfOperationTimeSliceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hours: {
            value: cdktn.numberToHclTerraform(struct!.hours),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minutes: {
            value: cdktn.numberToHclTerraform(struct!.minutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHoursOfOperationConfigStartTimePropertyToTerraform(struct?: CcHoursOfOperation.ConfigStartTimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hours: cdktn.numberToTerraform(struct!.hours),
        minutes: cdktn.numberToTerraform(struct!.minutes),
    }
}


export function ccHoursOfOperationConfigStartTimePropertyToHclTerraform(struct?: CcHoursOfOperation.ConfigStartTimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hours: {
            value: cdktn.numberToHclTerraform(struct!.hours),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minutes: {
            value: cdktn.numberToHclTerraform(struct!.minutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHoursOfOperationHoursOfOperationConfigPropertyToTerraform(struct?: CcHoursOfOperation.HoursOfOperationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        day: cdktn.stringToTerraform(struct!.day),
        end_time: ccHoursOfOperationHoursOfOperationTimeSlicePropertyToTerraform(struct!.endTime),
        start_time: ccHoursOfOperationConfigStartTimePropertyToTerraform(struct!.startTime),
    }
}


export function ccHoursOfOperationHoursOfOperationConfigPropertyToHclTerraform(struct?: CcHoursOfOperation.HoursOfOperationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        day: {
            value: cdktn.stringToHclTerraform(struct!.day),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        end_time: {
            value: ccHoursOfOperationHoursOfOperationTimeSlicePropertyToHclTerraform(struct!.endTime),
            isBlock: true,
            type: "struct",
            storageClassType: "HoursOfOperationTimeSliceProperty",
        },
        start_time: {
            value: ccHoursOfOperationConfigStartTimePropertyToHclTerraform(struct!.startTime),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigStartTimeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHoursOfOperationOverrideTimeSlicePropertyToTerraform(struct?: CcHoursOfOperation.OverrideTimeSliceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hours: cdktn.numberToTerraform(struct!.hours),
        minutes: cdktn.numberToTerraform(struct!.minutes),
    }
}


export function ccHoursOfOperationOverrideTimeSlicePropertyToHclTerraform(struct?: CcHoursOfOperation.OverrideTimeSliceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hours: {
            value: cdktn.numberToHclTerraform(struct!.hours),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minutes: {
            value: cdktn.numberToHclTerraform(struct!.minutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimePropertyToTerraform(struct?: CcHoursOfOperation.HoursOfOperationOverridesOverrideConfigStartTimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hours: cdktn.numberToTerraform(struct!.hours),
        minutes: cdktn.numberToTerraform(struct!.minutes),
    }
}


export function ccHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimePropertyToHclTerraform(struct?: CcHoursOfOperation.HoursOfOperationOverridesOverrideConfigStartTimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hours: {
            value: cdktn.numberToHclTerraform(struct!.hours),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minutes: {
            value: cdktn.numberToHclTerraform(struct!.minutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHoursOfOperationHoursOfOperationOverrideConfigPropertyToTerraform(struct?: CcHoursOfOperation.HoursOfOperationOverrideConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        day: cdktn.stringToTerraform(struct!.day),
        end_time: ccHoursOfOperationOverrideTimeSlicePropertyToTerraform(struct!.endTime),
        start_time: ccHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimePropertyToTerraform(struct!.startTime),
    }
}


export function ccHoursOfOperationHoursOfOperationOverrideConfigPropertyToHclTerraform(struct?: CcHoursOfOperation.HoursOfOperationOverrideConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        day: {
            value: cdktn.stringToHclTerraform(struct!.day),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        end_time: {
            value: ccHoursOfOperationOverrideTimeSlicePropertyToHclTerraform(struct!.endTime),
            isBlock: true,
            type: "struct",
            storageClassType: "OverrideTimeSliceProperty",
        },
        start_time: {
            value: ccHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimePropertyToHclTerraform(struct!.startTime),
            isBlock: true,
            type: "struct",
            storageClassType: "HoursOfOperationOverridesOverrideConfigStartTimeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHoursOfOperationRecurrencePatternPropertyToTerraform(struct?: CcHoursOfOperation.RecurrencePatternProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        by_month: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.byMonth),
        by_month_day: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.byMonthDay),
        by_weekday_occurrence: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.byWeekdayOccurrence),
        frequency: cdktn.stringToTerraform(struct!.frequency),
        interval: cdktn.numberToTerraform(struct!.interval),
    }
}


export function ccHoursOfOperationRecurrencePatternPropertyToHclTerraform(struct?: CcHoursOfOperation.RecurrencePatternProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        by_month: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.byMonth),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        by_month_day: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.byMonthDay),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        by_weekday_occurrence: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.byWeekdayOccurrence),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        frequency: {
            value: cdktn.stringToHclTerraform(struct!.frequency),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        interval: {
            value: cdktn.numberToHclTerraform(struct!.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHoursOfOperationRecurrenceConfigPropertyToTerraform(struct?: CcHoursOfOperation.RecurrenceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        recurrence_pattern: ccHoursOfOperationRecurrencePatternPropertyToTerraform(struct!.recurrencePattern),
    }
}


export function ccHoursOfOperationRecurrenceConfigPropertyToHclTerraform(struct?: CcHoursOfOperation.RecurrenceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        recurrence_pattern: {
            value: ccHoursOfOperationRecurrencePatternPropertyToHclTerraform(struct!.recurrencePattern),
            isBlock: true,
            type: "struct",
            storageClassType: "RecurrencePatternProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHoursOfOperationHoursOfOperationOverridePropertyToTerraform(struct?: CcHoursOfOperation.HoursOfOperationOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        effective_from: cdktn.stringToTerraform(struct!.effectiveFrom),
        effective_till: cdktn.stringToTerraform(struct!.effectiveTill),
        hours_of_operation_override_id: cdktn.stringToTerraform(struct!.hoursOfOperationOverrideId),
        override_config: cdktn.listMapper(ccHoursOfOperationHoursOfOperationOverrideConfigPropertyToTerraform, false)(struct!.overrideConfig),
        override_description: cdktn.stringToTerraform(struct!.overrideDescription),
        override_name: cdktn.stringToTerraform(struct!.overrideName),
        override_type: cdktn.stringToTerraform(struct!.overrideType),
        recurrence_config: ccHoursOfOperationRecurrenceConfigPropertyToTerraform(struct!.recurrenceConfig),
    }
}


export function ccHoursOfOperationHoursOfOperationOverridePropertyToHclTerraform(struct?: CcHoursOfOperation.HoursOfOperationOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        effective_from: {
            value: cdktn.stringToHclTerraform(struct!.effectiveFrom),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        effective_till: {
            value: cdktn.stringToHclTerraform(struct!.effectiveTill),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hours_of_operation_override_id: {
            value: cdktn.stringToHclTerraform(struct!.hoursOfOperationOverrideId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        override_config: {
            value: cdktn.listMapperHcl(ccHoursOfOperationHoursOfOperationOverrideConfigPropertyToHclTerraform, false)(struct!.overrideConfig),
            isBlock: true,
            type: "set",
            storageClassType: "HoursOfOperationOverrideConfigPropertyList",
        },
        override_description: {
            value: cdktn.stringToHclTerraform(struct!.overrideDescription),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        override_name: {
            value: cdktn.stringToHclTerraform(struct!.overrideName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        override_type: {
            value: cdktn.stringToHclTerraform(struct!.overrideType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        recurrence_config: {
            value: ccHoursOfOperationRecurrenceConfigPropertyToHclTerraform(struct!.recurrenceConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "RecurrenceConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHoursOfOperationParentHoursOfOperationsPropertyToTerraform(struct?: CcHoursOfOperation.ParentHoursOfOperationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        id: cdktn.stringToTerraform(struct!.id),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccHoursOfOperationParentHoursOfOperationsPropertyToHclTerraform(struct?: CcHoursOfOperation.ParentHoursOfOperationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHoursOfOperationTagPropertyToTerraform(struct?: CcHoursOfOperation.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccHoursOfOperationTagPropertyToHclTerraform(struct?: CcHoursOfOperation.TagProperty | cdktn.IResolvable): any {
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


export namespace CcHoursOfOperation {
export interface HoursOfOperationsIdentifierProperty {
    /**
    * The identifier for the hours of operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#id CcHoursOfOperation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the hours of operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#name CcHoursOfOperation#name}
    */
    readonly name?: string;
}
export class HoursOfOperationsIdentifierPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HoursOfOperationsIdentifierProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HoursOfOperationsIdentifierProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._name = value.name;
        }
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
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
}

export class HoursOfOperationsIdentifierPropertyList extends cdktn.ComplexList {
    public internalValue? : HoursOfOperationsIdentifierProperty[] | cdktn.IResolvable

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
    public get(index: number): HoursOfOperationsIdentifierPropertyOutputReference {
        return new HoursOfOperationsIdentifierPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface HoursOfOperationTimeSliceProperty {
    /**
    * The hours.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#hours CcHoursOfOperation#hours}
    */
    readonly hours: number;
    /**
    * The minutes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#minutes CcHoursOfOperation#minutes}
    */
    readonly minutes: number;
}
export class HoursOfOperationTimeSlicePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HoursOfOperationTimeSliceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hours !== undefined) {
            hasAnyValues = true;
            internalValueResult.hours = this._hours;
        }
        if (this._minutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.minutes = this._minutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HoursOfOperationTimeSliceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hours = undefined;
            this._minutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hours = value.hours;
            this._minutes = value.minutes;
        }
    }

    // hours - computed: false, optional: false, required: true
    private _hours?: number; 
    public get hours() {
        return this.getNumberAttribute('hours');
    }
    public set hours(value: number) {
        this._hours = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hoursInput() {
        return this._hours;
    }

    // minutes - computed: false, optional: false, required: true
    private _minutes?: number; 
    public get minutes() {
        return this.getNumberAttribute('minutes');
    }
    public set minutes(value: number) {
        this._minutes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get minutesInput() {
        return this._minutes;
    }
}
export interface ConfigStartTimeProperty {
    /**
    * The hours.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#hours CcHoursOfOperation#hours}
    */
    readonly hours: number;
    /**
    * The minutes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#minutes CcHoursOfOperation#minutes}
    */
    readonly minutes: number;
}
export class ConfigStartTimePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigStartTimeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hours !== undefined) {
            hasAnyValues = true;
            internalValueResult.hours = this._hours;
        }
        if (this._minutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.minutes = this._minutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigStartTimeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hours = undefined;
            this._minutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hours = value.hours;
            this._minutes = value.minutes;
        }
    }

    // hours - computed: false, optional: false, required: true
    private _hours?: number; 
    public get hours() {
        return this.getNumberAttribute('hours');
    }
    public set hours(value: number) {
        this._hours = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hoursInput() {
        return this._hours;
    }

    // minutes - computed: false, optional: false, required: true
    private _minutes?: number; 
    public get minutes() {
        return this.getNumberAttribute('minutes');
    }
    public set minutes(value: number) {
        this._minutes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get minutesInput() {
        return this._minutes;
    }
}
export interface HoursOfOperationConfigProperty {
    /**
    * The day that the hours of operation applies to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#day CcHoursOfOperation#day}
    */
    readonly day: string;
    /**
    * The end time that your contact center closes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#end_time CcHoursOfOperation#end_time}
    */
    readonly endTime: HoursOfOperationTimeSliceProperty;
    /**
    * The start time that your contact center opens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#start_time CcHoursOfOperation#start_time}
    */
    readonly startTime: ConfigStartTimeProperty;
}
export class HoursOfOperationConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HoursOfOperationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._day !== undefined) {
            hasAnyValues = true;
            internalValueResult.day = this._day;
        }
        if (this._endTime?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTime = this._endTime?.internalValue;
        }
        if (this._startTime?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HoursOfOperationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._day = undefined;
            this._endTime.internalValue = undefined;
            this._startTime.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._day = value.day;
            this._endTime.internalValue = value.endTime;
            this._startTime.internalValue = value.startTime;
        }
    }

    // day - computed: false, optional: false, required: true
    private _day?: string; 
    public get day() {
        return this.getStringAttribute('day');
    }
    public set day(value: string) {
        this._day = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dayInput() {
        return this._day;
    }

    // end_time - computed: false, optional: false, required: true
    private _endTime = new HoursOfOperationTimeSlicePropertyOutputReference(this, "end_time");
    public get endTime() {
        return this._endTime;
    }
    public putEndTime(value: HoursOfOperationTimeSliceProperty) {
        this._endTime.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
        return this._endTime.internalValue;
    }

    // start_time - computed: false, optional: false, required: true
    private _startTime = new ConfigStartTimePropertyOutputReference(this, "start_time");
    public get startTime() {
        return this._startTime;
    }
    public putStartTime(value: ConfigStartTimeProperty) {
        this._startTime.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime.internalValue;
    }
}

export class HoursOfOperationConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : HoursOfOperationConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): HoursOfOperationConfigPropertyOutputReference {
        return new HoursOfOperationConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OverrideTimeSliceProperty {
    /**
    * The hours.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#hours CcHoursOfOperation#hours}
    */
    readonly hours?: number;
    /**
    * The minutes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#minutes CcHoursOfOperation#minutes}
    */
    readonly minutes?: number;
}
export class OverrideTimeSlicePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OverrideTimeSliceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hours !== undefined) {
            hasAnyValues = true;
            internalValueResult.hours = this._hours;
        }
        if (this._minutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.minutes = this._minutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OverrideTimeSliceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hours = undefined;
            this._minutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hours = value.hours;
            this._minutes = value.minutes;
        }
    }

    // hours - computed: true, optional: true, required: false
    private _hours?: number; 
    public get hours() {
        return this.getNumberAttribute('hours');
    }
    public set hours(value: number) {
        this._hours = value;
    }
    public resetHours() {
        this._hours = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hoursInput() {
        return this._hours;
    }

    // minutes - computed: true, optional: true, required: false
    private _minutes?: number; 
    public get minutes() {
        return this.getNumberAttribute('minutes');
    }
    public set minutes(value: number) {
        this._minutes = value;
    }
    public resetMinutes() {
        this._minutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minutesInput() {
        return this._minutes;
    }
}
export interface HoursOfOperationOverridesOverrideConfigStartTimeProperty {
    /**
    * The hours.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#hours CcHoursOfOperation#hours}
    */
    readonly hours?: number;
    /**
    * The minutes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#minutes CcHoursOfOperation#minutes}
    */
    readonly minutes?: number;
}
export class HoursOfOperationOverridesOverrideConfigStartTimePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HoursOfOperationOverridesOverrideConfigStartTimeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hours !== undefined) {
            hasAnyValues = true;
            internalValueResult.hours = this._hours;
        }
        if (this._minutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.minutes = this._minutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HoursOfOperationOverridesOverrideConfigStartTimeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hours = undefined;
            this._minutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hours = value.hours;
            this._minutes = value.minutes;
        }
    }

    // hours - computed: true, optional: true, required: false
    private _hours?: number; 
    public get hours() {
        return this.getNumberAttribute('hours');
    }
    public set hours(value: number) {
        this._hours = value;
    }
    public resetHours() {
        this._hours = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hoursInput() {
        return this._hours;
    }

    // minutes - computed: true, optional: true, required: false
    private _minutes?: number; 
    public get minutes() {
        return this.getNumberAttribute('minutes');
    }
    public set minutes(value: number) {
        this._minutes = value;
    }
    public resetMinutes() {
        this._minutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minutesInput() {
        return this._minutes;
    }
}
export interface HoursOfOperationOverrideConfigProperty {
    /**
    * The day that the hours of operation override applies to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#day CcHoursOfOperation#day}
    */
    readonly day?: string;
    /**
    * The new end time that your contact center closes for the overriden days.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#end_time CcHoursOfOperation#end_time}
    */
    readonly endTime?: OverrideTimeSliceProperty;
    /**
    * The new start time that your contact center opens for the overriden days.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#start_time CcHoursOfOperation#start_time}
    */
    readonly startTime?: HoursOfOperationOverridesOverrideConfigStartTimeProperty;
}
export class HoursOfOperationOverrideConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HoursOfOperationOverrideConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._day !== undefined) {
            hasAnyValues = true;
            internalValueResult.day = this._day;
        }
        if (this._endTime?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTime = this._endTime?.internalValue;
        }
        if (this._startTime?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HoursOfOperationOverrideConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._day = undefined;
            this._endTime.internalValue = undefined;
            this._startTime.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._day = value.day;
            this._endTime.internalValue = value.endTime;
            this._startTime.internalValue = value.startTime;
        }
    }

    // day - computed: true, optional: true, required: false
    private _day?: string; 
    public get day() {
        return this.getStringAttribute('day');
    }
    public set day(value: string) {
        this._day = value;
    }
    public resetDay() {
        this._day = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dayInput() {
        return this._day;
    }

    // end_time - computed: true, optional: true, required: false
    private _endTime = new OverrideTimeSlicePropertyOutputReference(this, "end_time");
    public get endTime() {
        return this._endTime;
    }
    public putEndTime(value: OverrideTimeSliceProperty) {
        this._endTime.internalValue = value;
    }
    public resetEndTime() {
        this._endTime.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
        return this._endTime.internalValue;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime = new HoursOfOperationOverridesOverrideConfigStartTimePropertyOutputReference(this, "start_time");
    public get startTime() {
        return this._startTime;
    }
    public putStartTime(value: HoursOfOperationOverridesOverrideConfigStartTimeProperty) {
        this._startTime.internalValue = value;
    }
    public resetStartTime() {
        this._startTime.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime.internalValue;
    }
}

export class HoursOfOperationOverrideConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : HoursOfOperationOverrideConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): HoursOfOperationOverrideConfigPropertyOutputReference {
        return new HoursOfOperationOverrideConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RecurrencePatternProperty {
    /**
    * List of months (1-12) for recurrence pattern.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#by_month CcHoursOfOperation#by_month}
    */
    readonly byMonth?: number[];
    /**
    * List of month days (-1 to 31) for recurrence pattern.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#by_month_day CcHoursOfOperation#by_month_day}
    */
    readonly byMonthDay?: number[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#by_weekday_occurrence CcHoursOfOperation#by_weekday_occurrence}
    */
    readonly byWeekdayOccurrence?: number[];
    /**
    * The frequency of recurrence for hours of operation overrides.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#frequency CcHoursOfOperation#frequency}
    */
    readonly frequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#interval CcHoursOfOperation#interval}
    */
    readonly interval?: number;
}
export class RecurrencePatternPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RecurrencePatternProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._byMonth !== undefined) {
            hasAnyValues = true;
            internalValueResult.byMonth = this._byMonth;
        }
        if (this._byMonthDay !== undefined) {
            hasAnyValues = true;
            internalValueResult.byMonthDay = this._byMonthDay;
        }
        if (this._byWeekdayOccurrence !== undefined) {
            hasAnyValues = true;
            internalValueResult.byWeekdayOccurrence = this._byWeekdayOccurrence;
        }
        if (this._frequency !== undefined) {
            hasAnyValues = true;
            internalValueResult.frequency = this._frequency;
        }
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RecurrencePatternProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._byMonth = undefined;
            this._byMonthDay = undefined;
            this._byWeekdayOccurrence = undefined;
            this._frequency = undefined;
            this._interval = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._byMonth = value.byMonth;
            this._byMonthDay = value.byMonthDay;
            this._byWeekdayOccurrence = value.byWeekdayOccurrence;
            this._frequency = value.frequency;
            this._interval = value.interval;
        }
    }

    // by_month - computed: true, optional: true, required: false
    private _byMonth?: number[]; 
    public get byMonth() {
        return this.getNumberListAttribute('by_month');
    }
    public set byMonth(value: number[]) {
        this._byMonth = value;
    }
    public resetByMonth() {
        this._byMonth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get byMonthInput() {
        return this._byMonth;
    }

    // by_month_day - computed: true, optional: true, required: false
    private _byMonthDay?: number[]; 
    public get byMonthDay() {
        return this.getNumberListAttribute('by_month_day');
    }
    public set byMonthDay(value: number[]) {
        this._byMonthDay = value;
    }
    public resetByMonthDay() {
        this._byMonthDay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get byMonthDayInput() {
        return this._byMonthDay;
    }

    // by_weekday_occurrence - computed: true, optional: true, required: false
    private _byWeekdayOccurrence?: number[]; 
    public get byWeekdayOccurrence() {
        return this.getNumberListAttribute('by_weekday_occurrence');
    }
    public set byWeekdayOccurrence(value: number[]) {
        this._byWeekdayOccurrence = value;
    }
    public resetByWeekdayOccurrence() {
        this._byWeekdayOccurrence = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get byWeekdayOccurrenceInput() {
        return this._byWeekdayOccurrence;
    }

    // frequency - computed: true, optional: true, required: false
    private _frequency?: string; 
    public get frequency() {
        return this.getStringAttribute('frequency');
    }
    public set frequency(value: string) {
        this._frequency = value;
    }
    public resetFrequency() {
        this._frequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frequencyInput() {
        return this._frequency;
    }

    // interval - computed: true, optional: true, required: false
    private _interval?: number; 
    public get interval() {
        return this.getNumberAttribute('interval');
    }
    public set interval(value: number) {
        this._interval = value;
    }
    public resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval;
    }
}
export interface RecurrenceConfigProperty {
    /**
    * Pattern for recurring hours of operation overrides.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#recurrence_pattern CcHoursOfOperation#recurrence_pattern}
    */
    readonly recurrencePattern?: RecurrencePatternProperty;
}
export class RecurrenceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RecurrenceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._recurrencePattern?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.recurrencePattern = this._recurrencePattern?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RecurrenceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._recurrencePattern.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._recurrencePattern.internalValue = value.recurrencePattern;
        }
    }

    // recurrence_pattern - computed: true, optional: true, required: false
    private _recurrencePattern = new RecurrencePatternPropertyOutputReference(this, "recurrence_pattern");
    public get recurrencePattern() {
        return this._recurrencePattern;
    }
    public putRecurrencePattern(value: RecurrencePatternProperty) {
        this._recurrencePattern.internalValue = value;
    }
    public resetRecurrencePattern() {
        this._recurrencePattern.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recurrencePatternInput() {
        return this._recurrencePattern.internalValue;
    }
}
export interface HoursOfOperationOverrideProperty {
    /**
    * The date from which the hours of operation override would be effective.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#effective_from CcHoursOfOperation#effective_from}
    */
    readonly effectiveFrom?: string;
    /**
    * The date till which the hours of operation override would be effective.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#effective_till CcHoursOfOperation#effective_till}
    */
    readonly effectiveTill?: string;
    /**
    * The Resource Identifier for the hours of operation override.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#hours_of_operation_override_id CcHoursOfOperation#hours_of_operation_override_id}
    */
    readonly hoursOfOperationOverrideId?: string;
    /**
    * Configuration information for the hours of operation override: day, start time, and end time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#override_config CcHoursOfOperation#override_config}
    */
    readonly overrideConfig?: HoursOfOperationOverrideConfigProperty[] | cdktn.IResolvable;
    /**
    * The description of the hours of operation override.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#override_description CcHoursOfOperation#override_description}
    */
    readonly overrideDescription?: string;
    /**
    * The name of the hours of operation override.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#override_name CcHoursOfOperation#override_name}
    */
    readonly overrideName?: string;
    /**
    * The type of hours of operation override.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#override_type CcHoursOfOperation#override_type}
    */
    readonly overrideType?: string;
    /**
    * Configuration for recurring hours of operation overrides.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#recurrence_config CcHoursOfOperation#recurrence_config}
    */
    readonly recurrenceConfig?: RecurrenceConfigProperty;
}
export class HoursOfOperationOverridePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HoursOfOperationOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._effectiveFrom !== undefined) {
            hasAnyValues = true;
            internalValueResult.effectiveFrom = this._effectiveFrom;
        }
        if (this._effectiveTill !== undefined) {
            hasAnyValues = true;
            internalValueResult.effectiveTill = this._effectiveTill;
        }
        if (this._hoursOfOperationOverrideId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hoursOfOperationOverrideId = this._hoursOfOperationOverrideId;
        }
        if (this._overrideConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrideConfig = this._overrideConfig?.internalValue;
        }
        if (this._overrideDescription !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrideDescription = this._overrideDescription;
        }
        if (this._overrideName !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrideName = this._overrideName;
        }
        if (this._overrideType !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrideType = this._overrideType;
        }
        if (this._recurrenceConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.recurrenceConfig = this._recurrenceConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HoursOfOperationOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._effectiveFrom = undefined;
            this._effectiveTill = undefined;
            this._hoursOfOperationOverrideId = undefined;
            this._overrideConfig.internalValue = undefined;
            this._overrideDescription = undefined;
            this._overrideName = undefined;
            this._overrideType = undefined;
            this._recurrenceConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._effectiveFrom = value.effectiveFrom;
            this._effectiveTill = value.effectiveTill;
            this._hoursOfOperationOverrideId = value.hoursOfOperationOverrideId;
            this._overrideConfig.internalValue = value.overrideConfig;
            this._overrideDescription = value.overrideDescription;
            this._overrideName = value.overrideName;
            this._overrideType = value.overrideType;
            this._recurrenceConfig.internalValue = value.recurrenceConfig;
        }
    }

    // effective_from - computed: true, optional: true, required: false
    private _effectiveFrom?: string; 
    public get effectiveFrom() {
        return this.getStringAttribute('effective_from');
    }
    public set effectiveFrom(value: string) {
        this._effectiveFrom = value;
    }
    public resetEffectiveFrom() {
        this._effectiveFrom = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get effectiveFromInput() {
        return this._effectiveFrom;
    }

    // effective_till - computed: true, optional: true, required: false
    private _effectiveTill?: string; 
    public get effectiveTill() {
        return this.getStringAttribute('effective_till');
    }
    public set effectiveTill(value: string) {
        this._effectiveTill = value;
    }
    public resetEffectiveTill() {
        this._effectiveTill = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get effectiveTillInput() {
        return this._effectiveTill;
    }

    // hours_of_operation_override_id - computed: true, optional: true, required: false
    private _hoursOfOperationOverrideId?: string; 
    public get hoursOfOperationOverrideId() {
        return this.getStringAttribute('hours_of_operation_override_id');
    }
    public set hoursOfOperationOverrideId(value: string) {
        this._hoursOfOperationOverrideId = value;
    }
    public resetHoursOfOperationOverrideId() {
        this._hoursOfOperationOverrideId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hoursOfOperationOverrideIdInput() {
        return this._hoursOfOperationOverrideId;
    }

    // override_config - computed: true, optional: true, required: false
    private _overrideConfig = new HoursOfOperationOverrideConfigPropertyList(this, "override_config", true);
    public get overrideConfig() {
        return this._overrideConfig;
    }
    public putOverrideConfig(value: HoursOfOperationOverrideConfigProperty[] | cdktn.IResolvable) {
        this._overrideConfig.internalValue = value;
    }
    public resetOverrideConfig() {
        this._overrideConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideConfigInput() {
        return this._overrideConfig.internalValue;
    }

    // override_description - computed: true, optional: true, required: false
    private _overrideDescription?: string; 
    public get overrideDescription() {
        return this.getStringAttribute('override_description');
    }
    public set overrideDescription(value: string) {
        this._overrideDescription = value;
    }
    public resetOverrideDescription() {
        this._overrideDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideDescriptionInput() {
        return this._overrideDescription;
    }

    // override_name - computed: true, optional: true, required: false
    private _overrideName?: string; 
    public get overrideName() {
        return this.getStringAttribute('override_name');
    }
    public set overrideName(value: string) {
        this._overrideName = value;
    }
    public resetOverrideName() {
        this._overrideName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideNameInput() {
        return this._overrideName;
    }

    // override_type - computed: true, optional: true, required: false
    private _overrideType?: string; 
    public get overrideType() {
        return this.getStringAttribute('override_type');
    }
    public set overrideType(value: string) {
        this._overrideType = value;
    }
    public resetOverrideType() {
        this._overrideType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideTypeInput() {
        return this._overrideType;
    }

    // recurrence_config - computed: true, optional: true, required: false
    private _recurrenceConfig = new RecurrenceConfigPropertyOutputReference(this, "recurrence_config");
    public get recurrenceConfig() {
        return this._recurrenceConfig;
    }
    public putRecurrenceConfig(value: RecurrenceConfigProperty) {
        this._recurrenceConfig.internalValue = value;
    }
    public resetRecurrenceConfig() {
        this._recurrenceConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recurrenceConfigInput() {
        return this._recurrenceConfig.internalValue;
    }
}

export class HoursOfOperationOverridePropertyList extends cdktn.ComplexList {
    public internalValue? : HoursOfOperationOverrideProperty[] | cdktn.IResolvable

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
    public get(index: number): HoursOfOperationOverridePropertyOutputReference {
        return new HoursOfOperationOverridePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ParentHoursOfOperationsProperty {
    /**
    * The identifier for the hours of operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#id CcHoursOfOperation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the hours of operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#name CcHoursOfOperation#name}
    */
    readonly name?: string;
}
export class ParentHoursOfOperationsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ParentHoursOfOperationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParentHoursOfOperationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._name = value.name;
        }
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
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
}

export class ParentHoursOfOperationsPropertyList extends cdktn.ComplexList {
    public internalValue? : ParentHoursOfOperationsProperty[] | cdktn.IResolvable

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
    public get(index: number): ParentHoursOfOperationsPropertyOutputReference {
        return new ParentHoursOfOperationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#key CcHoursOfOperation#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_hours_of_operation#value CcHoursOfOperation#value}
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
