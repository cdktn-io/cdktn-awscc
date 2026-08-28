// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcScheduleProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the schedule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#description CcSchedule#description}
    */
    readonly description?: string;
    /**
    * The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the EndDate you specify.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#end_date CcSchedule#end_date}
    */
    readonly endDate?: string;
    /**
    * Flexible time window allows configuration of a window within which a schedule can be invoked
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#flexible_time_window CcSchedule#flexible_time_window}
    */
    readonly flexibleTimeWindow: CcSchedule.FlexibleTimeWindowProperty;
    /**
    * The name of the schedule group to associate with this schedule. If you omit this, the default schedule group is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#group_name CcSchedule#group_name}
    */
    readonly groupName?: string;
    /**
    * The ARN for a KMS Key that will be used to encrypt customer data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#kms_key_arn CcSchedule#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#name CcSchedule#name}
    */
    readonly name?: string;
    /**
    * The scheduling expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#schedule_expression CcSchedule#schedule_expression}
    */
    readonly scheduleExpression: string;
    /**
    * The timezone in which the scheduling expression is evaluated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#schedule_expression_timezone CcSchedule#schedule_expression_timezone}
    */
    readonly scheduleExpressionTimezone?: string;
    /**
    * The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the StartDate you specify.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#start_date CcSchedule#start_date}
    */
    readonly startDate?: string;
    /**
    * Specifies whether the schedule is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#state CcSchedule#state}
    */
    readonly state?: string;
    /**
    * The schedule target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#target CcSchedule#target}
    */
    readonly target: CcSchedule.TargetProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule awscc_scheduler_schedule}
*/
export class CcSchedule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_scheduler_schedule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSchedule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSchedule to import
    * @param importFromId The id of the existing CcSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSchedule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_scheduler_schedule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule awscc_scheduler_schedule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcScheduleProps
    */
    public constructor(scope: Construct, id: string, config: CcScheduleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_scheduler_schedule',
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
        this._endDate = config.endDate;
        this._flexibleTimeWindow.internalValue = config.flexibleTimeWindow;
        this._groupName = config.groupName;
        this._kmsKeyArn = config.kmsKeyArn;
        this._name = config.name;
        this._scheduleExpression = config.scheduleExpression;
        this._scheduleExpressionTimezone = config.scheduleExpressionTimezone;
        this._startDate = config.startDate;
        this._state = config.state;
        this._target.internalValue = config.target;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // end_date - computed: true, optional: true, required: false
    private _endDate?: string; 
    public get endDate() {
        return this.getStringAttribute('end_date');
    }
    public set endDate(value: string) {
        this._endDate = value;
    }
    public resetEndDate() {
        this._endDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endDateInput() {
        return this._endDate;
    }

    // flexible_time_window - computed: false, optional: false, required: true
    private _flexibleTimeWindow = new CcSchedule.FlexibleTimeWindowPropertyOutputReference(this, "flexible_time_window");
    public get flexibleTimeWindow() {
        return this._flexibleTimeWindow;
    }
    public putFlexibleTimeWindow(value: CcSchedule.FlexibleTimeWindowProperty) {
        this._flexibleTimeWindow.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get flexibleTimeWindowInput() {
        return this._flexibleTimeWindow.internalValue;
    }

    // group_name - computed: true, optional: true, required: false
    private _groupName?: string; 
    public get groupName() {
        return this.getStringAttribute('group_name');
    }
    public set groupName(value: string) {
        this._groupName = value;
    }
    public resetGroupName() {
        this._groupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNameInput() {
        return this._groupName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
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

    // schedule_expression - computed: false, optional: false, required: true
    private _scheduleExpression?: string; 
    public get scheduleExpression() {
        return this.getStringAttribute('schedule_expression');
    }
    public set scheduleExpression(value: string) {
        this._scheduleExpression = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionInput() {
        return this._scheduleExpression;
    }

    // schedule_expression_timezone - computed: true, optional: true, required: false
    private _scheduleExpressionTimezone?: string; 
    public get scheduleExpressionTimezone() {
        return this.getStringAttribute('schedule_expression_timezone');
    }
    public set scheduleExpressionTimezone(value: string) {
        this._scheduleExpressionTimezone = value;
    }
    public resetScheduleExpressionTimezone() {
        this._scheduleExpressionTimezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionTimezoneInput() {
        return this._scheduleExpressionTimezone;
    }

    // start_date - computed: true, optional: true, required: false
    private _startDate?: string; 
    public get startDate() {
        return this.getStringAttribute('start_date');
    }
    public set startDate(value: string) {
        this._startDate = value;
    }
    public resetStartDate() {
        this._startDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startDateInput() {
        return this._startDate;
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }

    // target - computed: false, optional: false, required: true
    private _target = new CcSchedule.TargetPropertyOutputReference(this, "target");
    public get target() {
        return this._target;
    }
    public putTarget(value: CcSchedule.TargetProperty) {
        this._target.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
        return this._target.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            end_date: cdktn.stringToTerraform(this._endDate),
            flexible_time_window: ccScheduleFlexibleTimeWindowPropertyToTerraform(this._flexibleTimeWindow.internalValue),
            group_name: cdktn.stringToTerraform(this._groupName),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            name: cdktn.stringToTerraform(this._name),
            schedule_expression: cdktn.stringToTerraform(this._scheduleExpression),
            schedule_expression_timezone: cdktn.stringToTerraform(this._scheduleExpressionTimezone),
            start_date: cdktn.stringToTerraform(this._startDate),
            state: cdktn.stringToTerraform(this._state),
            target: ccScheduleTargetPropertyToTerraform(this._target.internalValue),
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
            end_date: {
                value: cdktn.stringToHclTerraform(this._endDate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            flexible_time_window: {
                value: ccScheduleFlexibleTimeWindowPropertyToHclTerraform(this._flexibleTimeWindow.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSchedule.FlexibleTimeWindowProperty",
            },
            group_name: {
                value: cdktn.stringToHclTerraform(this._groupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
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
            schedule_expression: {
                value: cdktn.stringToHclTerraform(this._scheduleExpression),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schedule_expression_timezone: {
                value: cdktn.stringToHclTerraform(this._scheduleExpressionTimezone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            start_date: {
                value: cdktn.stringToHclTerraform(this._startDate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            state: {
                value: cdktn.stringToHclTerraform(this._state),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target: {
                value: ccScheduleTargetPropertyToHclTerraform(this._target.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSchedule.TargetProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccScheduleFlexibleTimeWindowPropertyToTerraform(struct?: CcSchedule.FlexibleTimeWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        maximum_window_in_minutes: cdktn.numberToTerraform(struct!.maximumWindowInMinutes),
        mode: cdktn.stringToTerraform(struct!.mode),
    }
}


export function ccScheduleFlexibleTimeWindowPropertyToHclTerraform(struct?: CcSchedule.FlexibleTimeWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        maximum_window_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.maximumWindowInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScheduleDeadLetterConfigPropertyToTerraform(struct?: CcSchedule.DeadLetterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
    }
}


export function ccScheduleDeadLetterConfigPropertyToHclTerraform(struct?: CcSchedule.DeadLetterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScheduleCapacityProviderStrategyItemPropertyToTerraform(struct?: CcSchedule.CapacityProviderStrategyItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        base: cdktn.numberToTerraform(struct!.base),
        capacity_provider: cdktn.stringToTerraform(struct!.capacityProvider),
        weight: cdktn.numberToTerraform(struct!.weight),
    }
}


export function ccScheduleCapacityProviderStrategyItemPropertyToHclTerraform(struct?: CcSchedule.CapacityProviderStrategyItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        base: {
            value: cdktn.numberToHclTerraform(struct!.base),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        capacity_provider: {
            value: cdktn.stringToHclTerraform(struct!.capacityProvider),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weight: {
            value: cdktn.numberToHclTerraform(struct!.weight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScheduleAwsVpcConfigurationPropertyToTerraform(struct?: CcSchedule.AwsVpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        assign_public_ip: cdktn.stringToTerraform(struct!.assignPublicIp),
        security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccScheduleAwsVpcConfigurationPropertyToHclTerraform(struct?: CcSchedule.AwsVpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        assign_public_ip: {
            value: cdktn.stringToHclTerraform(struct!.assignPublicIp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScheduleNetworkConfigurationPropertyToTerraform(struct?: CcSchedule.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        awsvpc_configuration: ccScheduleAwsVpcConfigurationPropertyToTerraform(struct!.awsvpcConfiguration),
    }
}


export function ccScheduleNetworkConfigurationPropertyToHclTerraform(struct?: CcSchedule.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        awsvpc_configuration: {
            value: ccScheduleAwsVpcConfigurationPropertyToHclTerraform(struct!.awsvpcConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AwsVpcConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSchedulePlacementConstraintPropertyToTerraform(struct?: CcSchedule.PlacementConstraintProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccSchedulePlacementConstraintPropertyToHclTerraform(struct?: CcSchedule.PlacementConstraintProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccSchedulePlacementStrategyPropertyToTerraform(struct?: CcSchedule.PlacementStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field: cdktn.stringToTerraform(struct!.field),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccSchedulePlacementStrategyPropertyToHclTerraform(struct?: CcSchedule.PlacementStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field: {
            value: cdktn.stringToHclTerraform(struct!.field),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccScheduleEcsParametersPropertyToTerraform(struct?: CcSchedule.EcsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_provider_strategy: cdktn.listMapper(ccScheduleCapacityProviderStrategyItemPropertyToTerraform, false)(struct!.capacityProviderStrategy),
        enable_ecs_managed_tags: cdktn.booleanToTerraform(struct!.enableEcsManagedTags),
        enable_execute_command: cdktn.booleanToTerraform(struct!.enableExecuteCommand),
        group: cdktn.stringToTerraform(struct!.group),
        launch_type: cdktn.stringToTerraform(struct!.launchType),
        network_configuration: ccScheduleNetworkConfigurationPropertyToTerraform(struct!.networkConfiguration),
        placement_constraints: cdktn.listMapper(ccSchedulePlacementConstraintPropertyToTerraform, false)(struct!.placementConstraints),
        placement_strategy: cdktn.listMapper(ccSchedulePlacementStrategyPropertyToTerraform, false)(struct!.placementStrategy),
        platform_version: cdktn.stringToTerraform(struct!.platformVersion),
        propagate_tags: cdktn.stringToTerraform(struct!.propagateTags),
        reference_id: cdktn.stringToTerraform(struct!.referenceId),
        tags: cdktn.listMapper(cdktn.hashMapper(cdktn.stringToTerraform), false)(struct!.tags),
        task_count: cdktn.numberToTerraform(struct!.taskCount),
        task_definition_arn: cdktn.stringToTerraform(struct!.taskDefinitionArn),
    }
}


export function ccScheduleEcsParametersPropertyToHclTerraform(struct?: CcSchedule.EcsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_provider_strategy: {
            value: cdktn.listMapperHcl(ccScheduleCapacityProviderStrategyItemPropertyToHclTerraform, false)(struct!.capacityProviderStrategy),
            isBlock: true,
            type: "list",
            storageClassType: "CapacityProviderStrategyItemPropertyList",
        },
        enable_ecs_managed_tags: {
            value: cdktn.booleanToHclTerraform(struct!.enableEcsManagedTags),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enable_execute_command: {
            value: cdktn.booleanToHclTerraform(struct!.enableExecuteCommand),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        group: {
            value: cdktn.stringToHclTerraform(struct!.group),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        launch_type: {
            value: cdktn.stringToHclTerraform(struct!.launchType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network_configuration: {
            value: ccScheduleNetworkConfigurationPropertyToHclTerraform(struct!.networkConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkConfigurationProperty",
        },
        placement_constraints: {
            value: cdktn.listMapperHcl(ccSchedulePlacementConstraintPropertyToHclTerraform, false)(struct!.placementConstraints),
            isBlock: true,
            type: "list",
            storageClassType: "PlacementConstraintPropertyList",
        },
        placement_strategy: {
            value: cdktn.listMapperHcl(ccSchedulePlacementStrategyPropertyToHclTerraform, false)(struct!.placementStrategy),
            isBlock: true,
            type: "list",
            storageClassType: "PlacementStrategyPropertyList",
        },
        platform_version: {
            value: cdktn.stringToHclTerraform(struct!.platformVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        propagate_tags: {
            value: cdktn.stringToHclTerraform(struct!.propagateTags),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        reference_id: {
            value: cdktn.stringToHclTerraform(struct!.referenceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tags: {
            value: cdktn.listMapperHcl(cdktn.hashMapperHcl(cdktn.stringToHclTerraform), false)(struct!.tags),
            isBlock: false,
            type: "list",
            storageClassType: "stringMapList",
        },
        task_count: {
            value: cdktn.numberToHclTerraform(struct!.taskCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        task_definition_arn: {
            value: cdktn.stringToHclTerraform(struct!.taskDefinitionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScheduleEventBridgeParametersPropertyToTerraform(struct?: CcSchedule.EventBridgeParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        detail_type: cdktn.stringToTerraform(struct!.detailType),
        source: cdktn.stringToTerraform(struct!.source),
    }
}


export function ccScheduleEventBridgeParametersPropertyToHclTerraform(struct?: CcSchedule.EventBridgeParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        detail_type: {
            value: cdktn.stringToHclTerraform(struct!.detailType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScheduleKinesisParametersPropertyToTerraform(struct?: CcSchedule.KinesisParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        partition_key: cdktn.stringToTerraform(struct!.partitionKey),
    }
}


export function ccScheduleKinesisParametersPropertyToHclTerraform(struct?: CcSchedule.KinesisParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        partition_key: {
            value: cdktn.stringToHclTerraform(struct!.partitionKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScheduleRetryPolicyPropertyToTerraform(struct?: CcSchedule.RetryPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        maximum_event_age_in_seconds: cdktn.numberToTerraform(struct!.maximumEventAgeInSeconds),
        maximum_retry_attempts: cdktn.numberToTerraform(struct!.maximumRetryAttempts),
    }
}


export function ccScheduleRetryPolicyPropertyToHclTerraform(struct?: CcSchedule.RetryPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        maximum_event_age_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maximumEventAgeInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        maximum_retry_attempts: {
            value: cdktn.numberToHclTerraform(struct!.maximumRetryAttempts),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScheduleSageMakerPipelineParameterPropertyToTerraform(struct?: CcSchedule.SageMakerPipelineParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScheduleSageMakerPipelineParameterPropertyToHclTerraform(struct?: CcSchedule.SageMakerPipelineParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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


export function ccScheduleSageMakerPipelineParametersPropertyToTerraform(struct?: CcSchedule.SageMakerPipelineParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pipeline_parameter_list: cdktn.listMapper(ccScheduleSageMakerPipelineParameterPropertyToTerraform, false)(struct!.pipelineParameterList),
    }
}


export function ccScheduleSageMakerPipelineParametersPropertyToHclTerraform(struct?: CcSchedule.SageMakerPipelineParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pipeline_parameter_list: {
            value: cdktn.listMapperHcl(ccScheduleSageMakerPipelineParameterPropertyToHclTerraform, false)(struct!.pipelineParameterList),
            isBlock: true,
            type: "list",
            storageClassType: "SageMakerPipelineParameterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScheduleSqsParametersPropertyToTerraform(struct?: CcSchedule.SqsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        message_group_id: cdktn.stringToTerraform(struct!.messageGroupId),
    }
}


export function ccScheduleSqsParametersPropertyToHclTerraform(struct?: CcSchedule.SqsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        message_group_id: {
            value: cdktn.stringToHclTerraform(struct!.messageGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScheduleTargetPropertyToTerraform(struct?: CcSchedule.TargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
        dead_letter_config: ccScheduleDeadLetterConfigPropertyToTerraform(struct!.deadLetterConfig),
        ecs_parameters: ccScheduleEcsParametersPropertyToTerraform(struct!.ecsParameters),
        event_bridge_parameters: ccScheduleEventBridgeParametersPropertyToTerraform(struct!.eventBridgeParameters),
        input: cdktn.stringToTerraform(struct!.input),
        kinesis_parameters: ccScheduleKinesisParametersPropertyToTerraform(struct!.kinesisParameters),
        retry_policy: ccScheduleRetryPolicyPropertyToTerraform(struct!.retryPolicy),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        sage_maker_pipeline_parameters: ccScheduleSageMakerPipelineParametersPropertyToTerraform(struct!.sageMakerPipelineParameters),
        sqs_parameters: ccScheduleSqsParametersPropertyToTerraform(struct!.sqsParameters),
    }
}


export function ccScheduleTargetPropertyToHclTerraform(struct?: CcSchedule.TargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dead_letter_config: {
            value: ccScheduleDeadLetterConfigPropertyToHclTerraform(struct!.deadLetterConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DeadLetterConfigProperty",
        },
        ecs_parameters: {
            value: ccScheduleEcsParametersPropertyToHclTerraform(struct!.ecsParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "EcsParametersProperty",
        },
        event_bridge_parameters: {
            value: ccScheduleEventBridgeParametersPropertyToHclTerraform(struct!.eventBridgeParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "EventBridgeParametersProperty",
        },
        input: {
            value: cdktn.stringToHclTerraform(struct!.input),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kinesis_parameters: {
            value: ccScheduleKinesisParametersPropertyToHclTerraform(struct!.kinesisParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "KinesisParametersProperty",
        },
        retry_policy: {
            value: ccScheduleRetryPolicyPropertyToHclTerraform(struct!.retryPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "RetryPolicyProperty",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_pipeline_parameters: {
            value: ccScheduleSageMakerPipelineParametersPropertyToHclTerraform(struct!.sageMakerPipelineParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "SageMakerPipelineParametersProperty",
        },
        sqs_parameters: {
            value: ccScheduleSqsParametersPropertyToHclTerraform(struct!.sqsParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "SqsParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcSchedule {
export interface FlexibleTimeWindowProperty {
    /**
    * The maximum time window during which a schedule can be invoked.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#maximum_window_in_minutes CcSchedule#maximum_window_in_minutes}
    */
    readonly maximumWindowInMinutes?: number;
    /**
    * Determines whether the schedule is executed within a flexible time window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#mode CcSchedule#mode}
    */
    readonly mode: string;
}
export class FlexibleTimeWindowPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FlexibleTimeWindowProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maximumWindowInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumWindowInMinutes = this._maximumWindowInMinutes;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FlexibleTimeWindowProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maximumWindowInMinutes = undefined;
            this._mode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maximumWindowInMinutes = value.maximumWindowInMinutes;
            this._mode = value.mode;
        }
    }

    // maximum_window_in_minutes - computed: true, optional: true, required: false
    private _maximumWindowInMinutes?: number; 
    public get maximumWindowInMinutes() {
        return this.getNumberAttribute('maximum_window_in_minutes');
    }
    public set maximumWindowInMinutes(value: number) {
        this._maximumWindowInMinutes = value;
    }
    public resetMaximumWindowInMinutes() {
        this._maximumWindowInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumWindowInMinutesInput() {
        return this._maximumWindowInMinutes;
    }

    // mode - computed: false, optional: false, required: true
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }
}
export interface DeadLetterConfigProperty {
    /**
    * The ARN of the SQS queue specified as the target for the dead-letter queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#arn CcSchedule#arn}
    */
    readonly arn?: string;
}
export class DeadLetterConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeadLetterConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeadLetterConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
        }
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }
}
export interface CapacityProviderStrategyItemProperty {
    /**
    * The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#base CcSchedule#base}
    */
    readonly base?: number;
    /**
    * The short name of the capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#capacity_provider CcSchedule#capacity_provider}
    */
    readonly capacityProvider?: string;
    /**
    * The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#weight CcSchedule#weight}
    */
    readonly weight?: number;
}
export class CapacityProviderStrategyItemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CapacityProviderStrategyItemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._base !== undefined) {
            hasAnyValues = true;
            internalValueResult.base = this._base;
        }
        if (this._capacityProvider !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityProvider = this._capacityProvider;
        }
        if (this._weight !== undefined) {
            hasAnyValues = true;
            internalValueResult.weight = this._weight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityProviderStrategyItemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._base = undefined;
            this._capacityProvider = undefined;
            this._weight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._base = value.base;
            this._capacityProvider = value.capacityProvider;
            this._weight = value.weight;
        }
    }

    // base - computed: true, optional: true, required: false
    private _base?: number; 
    public get base() {
        return this.getNumberAttribute('base');
    }
    public set base(value: number) {
        this._base = value;
    }
    public resetBase() {
        this._base = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseInput() {
        return this._base;
    }

    // capacity_provider - computed: true, optional: true, required: false
    private _capacityProvider?: string; 
    public get capacityProvider() {
        return this.getStringAttribute('capacity_provider');
    }
    public set capacityProvider(value: string) {
        this._capacityProvider = value;
    }
    public resetCapacityProvider() {
        this._capacityProvider = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProviderInput() {
        return this._capacityProvider;
    }

    // weight - computed: true, optional: true, required: false
    private _weight?: number; 
    public get weight() {
        return this.getNumberAttribute('weight');
    }
    public set weight(value: number) {
        this._weight = value;
    }
    public resetWeight() {
        this._weight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weightInput() {
        return this._weight;
    }
}

export class CapacityProviderStrategyItemPropertyList extends cdktn.ComplexList {
    public internalValue? : CapacityProviderStrategyItemProperty[] | cdktn.IResolvable

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
    public get(index: number): CapacityProviderStrategyItemPropertyOutputReference {
        return new CapacityProviderStrategyItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AwsVpcConfigurationProperty {
    /**
    * Specifies whether the task's elastic network interface receives a public IP address. You can specify ENABLED only when LaunchType in EcsParameters is set to FARGATE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#assign_public_ip CcSchedule#assign_public_ip}
    */
    readonly assignPublicIp?: string;
    /**
    * Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#security_groups CcSchedule#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#subnets CcSchedule#subnets}
    */
    readonly subnets?: string[];
}
export class AwsVpcConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AwsVpcConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._assignPublicIp !== undefined) {
            hasAnyValues = true;
            internalValueResult.assignPublicIp = this._assignPublicIp;
        }
        if (this._securityGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AwsVpcConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._assignPublicIp = undefined;
            this._securityGroups = undefined;
            this._subnets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._assignPublicIp = value.assignPublicIp;
            this._securityGroups = value.securityGroups;
            this._subnets = value.subnets;
        }
    }

    // assign_public_ip - computed: true, optional: true, required: false
    private _assignPublicIp?: string; 
    public get assignPublicIp() {
        return this.getStringAttribute('assign_public_ip');
    }
    public set assignPublicIp(value: string) {
        this._assignPublicIp = value;
    }
    public resetAssignPublicIp() {
        this._assignPublicIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assignPublicIpInput() {
        return this._assignPublicIp;
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[]; 
    public get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[]) {
        this._securityGroups = value;
    }
    public resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
        return this._securityGroups;
    }

    // subnets - computed: true, optional: true, required: false
    private _subnets?: string[]; 
    public get subnets() {
        return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    public resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }
}
export interface NetworkConfigurationProperty {
    /**
    * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#awsvpc_configuration CcSchedule#awsvpc_configuration}
    */
    readonly awsvpcConfiguration?: AwsVpcConfigurationProperty;
}
export class NetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsvpcConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsvpcConfiguration = this._awsvpcConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsvpcConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsvpcConfiguration.internalValue = value.awsvpcConfiguration;
        }
    }

    // awsvpc_configuration - computed: true, optional: true, required: false
    private _awsvpcConfiguration = new AwsVpcConfigurationPropertyOutputReference(this, "awsvpc_configuration");
    public get awsvpcConfiguration() {
        return this._awsvpcConfiguration;
    }
    public putAwsvpcConfiguration(value: AwsVpcConfigurationProperty) {
        this._awsvpcConfiguration.internalValue = value;
    }
    public resetAwsvpcConfiguration() {
        this._awsvpcConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsvpcConfigurationInput() {
        return this._awsvpcConfiguration.internalValue;
    }
}
export interface PlacementConstraintProperty {
    /**
    * A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is distinctInstance. To learn more, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#expression CcSchedule#expression}
    */
    readonly expression?: string;
    /**
    * The type of constraint. Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#type CcSchedule#type}
    */
    readonly type?: string;
}
export class PlacementConstraintPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PlacementConstraintProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PlacementConstraintProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._type = value.type;
        }
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
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

export class PlacementConstraintPropertyList extends cdktn.ComplexList {
    public internalValue? : PlacementConstraintProperty[] | cdktn.IResolvable

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
    public get(index: number): PlacementConstraintPropertyOutputReference {
        return new PlacementConstraintPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PlacementStrategyProperty {
    /**
    * The field to apply the placement strategy against. For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#field CcSchedule#field}
    */
    readonly field?: string;
    /**
    * The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#type CcSchedule#type}
    */
    readonly type?: string;
}
export class PlacementStrategyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PlacementStrategyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._field !== undefined) {
            hasAnyValues = true;
            internalValueResult.field = this._field;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PlacementStrategyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._field = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._field = value.field;
            this._type = value.type;
        }
    }

    // field - computed: true, optional: true, required: false
    private _field?: string; 
    public get field() {
        return this.getStringAttribute('field');
    }
    public set field(value: string) {
        this._field = value;
    }
    public resetField() {
        this._field = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldInput() {
        return this._field;
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

export class PlacementStrategyPropertyList extends cdktn.ComplexList {
    public internalValue? : PlacementStrategyProperty[] | cdktn.IResolvable

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
    public get(index: number): PlacementStrategyPropertyOutputReference {
        return new PlacementStrategyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EcsParametersProperty {
    /**
    * The capacity provider strategy to use for the task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#capacity_provider_strategy CcSchedule#capacity_provider_strategy}
    */
    readonly capacityProviderStrategy?: CapacityProviderStrategyItemProperty[] | cdktn.IResolvable;
    /**
    * Specifies whether to enable Amazon ECS managed tags for the task. For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#enable_ecs_managed_tags CcSchedule#enable_ecs_managed_tags}
    */
    readonly enableEcsManagedTags?: boolean | cdktn.IResolvable;
    /**
    * Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#enable_execute_command CcSchedule#enable_execute_command}
    */
    readonly enableExecuteCommand?: boolean | cdktn.IResolvable;
    /**
    * Specifies an ECS task group for the task. The maximum length is 255 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#group CcSchedule#group}
    */
    readonly group?: string;
    /**
    * Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The FARGATE value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see AWS Fargate on Amazon ECS in the Amazon Elastic Container Service Developer Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#launch_type CcSchedule#launch_type}
    */
    readonly launchType?: string;
    /**
    * This structure specifies the network configuration for an ECS task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#network_configuration CcSchedule#network_configuration}
    */
    readonly networkConfiguration?: NetworkConfigurationProperty;
    /**
    * An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#placement_constraints CcSchedule#placement_constraints}
    */
    readonly placementConstraints?: PlacementConstraintProperty[] | cdktn.IResolvable;
    /**
    * The placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#placement_strategy CcSchedule#placement_strategy}
    */
    readonly placementStrategy?: PlacementStrategyProperty[] | cdktn.IResolvable;
    /**
    * Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as 1.1.0.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#platform_version CcSchedule#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#propagate_tags CcSchedule#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * The reference ID to use for the task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#reference_id CcSchedule#reference_id}
    */
    readonly referenceId?: string;
    /**
    * The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. To learn more, see RunTask in the Amazon ECS API Reference.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#tags CcSchedule#tags}
    */
    readonly tags?: { [key: string]: string }[] | cdktn.IResolvable;
    /**
    * The number of tasks to create based on TaskDefinition. The default is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#task_count CcSchedule#task_count}
    */
    readonly taskCount?: number;
    /**
    * The ARN of the task definition to use if the event target is an Amazon ECS task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#task_definition_arn CcSchedule#task_definition_arn}
    */
    readonly taskDefinitionArn?: string;
}
export class EcsParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EcsParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityProviderStrategy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityProviderStrategy = this._capacityProviderStrategy?.internalValue;
        }
        if (this._enableEcsManagedTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableEcsManagedTags = this._enableEcsManagedTags;
        }
        if (this._enableExecuteCommand !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableExecuteCommand = this._enableExecuteCommand;
        }
        if (this._group !== undefined) {
            hasAnyValues = true;
            internalValueResult.group = this._group;
        }
        if (this._launchType !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchType = this._launchType;
        }
        if (this._networkConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
        }
        if (this._placementConstraints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.placementConstraints = this._placementConstraints?.internalValue;
        }
        if (this._placementStrategy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.placementStrategy = this._placementStrategy?.internalValue;
        }
        if (this._platformVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.platformVersion = this._platformVersion;
        }
        if (this._propagateTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.propagateTags = this._propagateTags;
        }
        if (this._referenceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.referenceId = this._referenceId;
        }
        if (this._tags !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags;
        }
        if (this._taskCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskCount = this._taskCount;
        }
        if (this._taskDefinitionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskDefinitionArn = this._taskDefinitionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EcsParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityProviderStrategy.internalValue = undefined;
            this._enableEcsManagedTags = undefined;
            this._enableExecuteCommand = undefined;
            this._group = undefined;
            this._launchType = undefined;
            this._networkConfiguration.internalValue = undefined;
            this._placementConstraints.internalValue = undefined;
            this._placementStrategy.internalValue = undefined;
            this._platformVersion = undefined;
            this._propagateTags = undefined;
            this._referenceId = undefined;
            this._tags = undefined;
            this._taskCount = undefined;
            this._taskDefinitionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityProviderStrategy.internalValue = value.capacityProviderStrategy;
            this._enableEcsManagedTags = value.enableEcsManagedTags;
            this._enableExecuteCommand = value.enableExecuteCommand;
            this._group = value.group;
            this._launchType = value.launchType;
            this._networkConfiguration.internalValue = value.networkConfiguration;
            this._placementConstraints.internalValue = value.placementConstraints;
            this._placementStrategy.internalValue = value.placementStrategy;
            this._platformVersion = value.platformVersion;
            this._propagateTags = value.propagateTags;
            this._referenceId = value.referenceId;
            this._tags = value.tags;
            this._taskCount = value.taskCount;
            this._taskDefinitionArn = value.taskDefinitionArn;
        }
    }

    // capacity_provider_strategy - computed: true, optional: true, required: false
    private _capacityProviderStrategy = new CapacityProviderStrategyItemPropertyList(this, "capacity_provider_strategy", false);
    public get capacityProviderStrategy() {
        return this._capacityProviderStrategy;
    }
    public putCapacityProviderStrategy(value: CapacityProviderStrategyItemProperty[] | cdktn.IResolvable) {
        this._capacityProviderStrategy.internalValue = value;
    }
    public resetCapacityProviderStrategy() {
        this._capacityProviderStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProviderStrategyInput() {
        return this._capacityProviderStrategy.internalValue;
    }

    // enable_ecs_managed_tags - computed: true, optional: true, required: false
    private _enableEcsManagedTags?: boolean | cdktn.IResolvable; 
    public get enableEcsManagedTags() {
        return this.getBooleanAttribute('enable_ecs_managed_tags');
    }
    public set enableEcsManagedTags(value: boolean | cdktn.IResolvable) {
        this._enableEcsManagedTags = value;
    }
    public resetEnableEcsManagedTags() {
        this._enableEcsManagedTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableEcsManagedTagsInput() {
        return this._enableEcsManagedTags;
    }

    // enable_execute_command - computed: true, optional: true, required: false
    private _enableExecuteCommand?: boolean | cdktn.IResolvable; 
    public get enableExecuteCommand() {
        return this.getBooleanAttribute('enable_execute_command');
    }
    public set enableExecuteCommand(value: boolean | cdktn.IResolvable) {
        this._enableExecuteCommand = value;
    }
    public resetEnableExecuteCommand() {
        this._enableExecuteCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableExecuteCommandInput() {
        return this._enableExecuteCommand;
    }

    // group - computed: true, optional: true, required: false
    private _group?: string; 
    public get group() {
        return this.getStringAttribute('group');
    }
    public set group(value: string) {
        this._group = value;
    }
    public resetGroup() {
        this._group = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupInput() {
        return this._group;
    }

    // launch_type - computed: true, optional: true, required: false
    private _launchType?: string; 
    public get launchType() {
        return this.getStringAttribute('launch_type');
    }
    public set launchType(value: string) {
        this._launchType = value;
    }
    public resetLaunchType() {
        this._launchType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTypeInput() {
        return this._launchType;
    }

    // network_configuration - computed: true, optional: true, required: false
    private _networkConfiguration = new NetworkConfigurationPropertyOutputReference(this, "network_configuration");
    public get networkConfiguration() {
        return this._networkConfiguration;
    }
    public putNetworkConfiguration(value: NetworkConfigurationProperty) {
        this._networkConfiguration.internalValue = value;
    }
    public resetNetworkConfiguration() {
        this._networkConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkConfigurationInput() {
        return this._networkConfiguration.internalValue;
    }

    // placement_constraints - computed: true, optional: true, required: false
    private _placementConstraints = new PlacementConstraintPropertyList(this, "placement_constraints", false);
    public get placementConstraints() {
        return this._placementConstraints;
    }
    public putPlacementConstraints(value: PlacementConstraintProperty[] | cdktn.IResolvable) {
        this._placementConstraints.internalValue = value;
    }
    public resetPlacementConstraints() {
        this._placementConstraints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementConstraintsInput() {
        return this._placementConstraints.internalValue;
    }

    // placement_strategy - computed: true, optional: true, required: false
    private _placementStrategy = new PlacementStrategyPropertyList(this, "placement_strategy", false);
    public get placementStrategy() {
        return this._placementStrategy;
    }
    public putPlacementStrategy(value: PlacementStrategyProperty[] | cdktn.IResolvable) {
        this._placementStrategy.internalValue = value;
    }
    public resetPlacementStrategy() {
        this._placementStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementStrategyInput() {
        return this._placementStrategy.internalValue;
    }

    // platform_version - computed: true, optional: true, required: false
    private _platformVersion?: string; 
    public get platformVersion() {
        return this.getStringAttribute('platform_version');
    }
    public set platformVersion(value: string) {
        this._platformVersion = value;
    }
    public resetPlatformVersion() {
        this._platformVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get platformVersionInput() {
        return this._platformVersion;
    }

    // propagate_tags - computed: true, optional: true, required: false
    private _propagateTags?: string; 
    public get propagateTags() {
        return this.getStringAttribute('propagate_tags');
    }
    public set propagateTags(value: string) {
        this._propagateTags = value;
    }
    public resetPropagateTags() {
        this._propagateTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propagateTagsInput() {
        return this._propagateTags;
    }

    // reference_id - computed: true, optional: true, required: false
    private _referenceId?: string; 
    public get referenceId() {
        return this.getStringAttribute('reference_id');
    }
    public set referenceId(value: string) {
        this._referenceId = value;
    }
    public resetReferenceId() {
        this._referenceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get referenceIdInput() {
        return this._referenceId;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }[] | cdktn.IResolvable; 
    public get tags() {
        return this.interpolationForAttribute('tags');
    }
    public set tags(value: { [key: string]: string }[] | cdktn.IResolvable) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // task_count - computed: true, optional: true, required: false
    private _taskCount?: number; 
    public get taskCount() {
        return this.getNumberAttribute('task_count');
    }
    public set taskCount(value: number) {
        this._taskCount = value;
    }
    public resetTaskCount() {
        this._taskCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskCountInput() {
        return this._taskCount;
    }

    // task_definition_arn - computed: true, optional: true, required: false
    private _taskDefinitionArn?: string; 
    public get taskDefinitionArn() {
        return this.getStringAttribute('task_definition_arn');
    }
    public set taskDefinitionArn(value: string) {
        this._taskDefinitionArn = value;
    }
    public resetTaskDefinitionArn() {
        this._taskDefinitionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskDefinitionArnInput() {
        return this._taskDefinitionArn;
    }
}
export interface EventBridgeParametersProperty {
    /**
    * Free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#detail_type CcSchedule#detail_type}
    */
    readonly detailType?: string;
    /**
    * The source of the event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#source CcSchedule#source}
    */
    readonly source?: string;
}
export class EventBridgeParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EventBridgeParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._detailType !== undefined) {
            hasAnyValues = true;
            internalValueResult.detailType = this._detailType;
        }
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventBridgeParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._detailType = undefined;
            this._source = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._detailType = value.detailType;
            this._source = value.source;
        }
    }

    // detail_type - computed: true, optional: true, required: false
    private _detailType?: string; 
    public get detailType() {
        return this.getStringAttribute('detail_type');
    }
    public set detailType(value: string) {
        this._detailType = value;
    }
    public resetDetailType() {
        this._detailType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detailTypeInput() {
        return this._detailType;
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
}
export interface KinesisParametersProperty {
    /**
    * The custom parameter used as the Kinesis partition key. For more information, see Amazon Kinesis Streams Key Concepts in the Amazon Kinesis Streams Developer Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#partition_key CcSchedule#partition_key}
    */
    readonly partitionKey?: string;
}
export class KinesisParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KinesisParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._partitionKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionKey = this._partitionKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._partitionKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._partitionKey = value.partitionKey;
        }
    }

    // partition_key - computed: true, optional: true, required: false
    private _partitionKey?: string; 
    public get partitionKey() {
        return this.getStringAttribute('partition_key');
    }
    public set partitionKey(value: string) {
        this._partitionKey = value;
    }
    public resetPartitionKey() {
        this._partitionKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionKeyInput() {
        return this._partitionKey;
    }
}
export interface RetryPolicyProperty {
    /**
    * The maximum amount of time, in seconds, to continue to make retry attempts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#maximum_event_age_in_seconds CcSchedule#maximum_event_age_in_seconds}
    */
    readonly maximumEventAgeInSeconds?: number;
    /**
    * The maximum number of retry attempts to make before the request fails. Retry attempts with exponential backoff continue until either the maximum number of attempts is made or until the duration of the MaximumEventAgeInSeconds is reached.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#maximum_retry_attempts CcSchedule#maximum_retry_attempts}
    */
    readonly maximumRetryAttempts?: number;
}
export class RetryPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RetryPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maximumEventAgeInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumEventAgeInSeconds = this._maximumEventAgeInSeconds;
        }
        if (this._maximumRetryAttempts !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RetryPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maximumEventAgeInSeconds = undefined;
            this._maximumRetryAttempts = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maximumEventAgeInSeconds = value.maximumEventAgeInSeconds;
            this._maximumRetryAttempts = value.maximumRetryAttempts;
        }
    }

    // maximum_event_age_in_seconds - computed: true, optional: true, required: false
    private _maximumEventAgeInSeconds?: number; 
    public get maximumEventAgeInSeconds() {
        return this.getNumberAttribute('maximum_event_age_in_seconds');
    }
    public set maximumEventAgeInSeconds(value: number) {
        this._maximumEventAgeInSeconds = value;
    }
    public resetMaximumEventAgeInSeconds() {
        this._maximumEventAgeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumEventAgeInSecondsInput() {
        return this._maximumEventAgeInSeconds;
    }

    // maximum_retry_attempts - computed: true, optional: true, required: false
    private _maximumRetryAttempts?: number; 
    public get maximumRetryAttempts() {
        return this.getNumberAttribute('maximum_retry_attempts');
    }
    public set maximumRetryAttempts(value: number) {
        this._maximumRetryAttempts = value;
    }
    public resetMaximumRetryAttempts() {
        this._maximumRetryAttempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumRetryAttemptsInput() {
        return this._maximumRetryAttempts;
    }
}
export interface SageMakerPipelineParameterProperty {
    /**
    * Name of parameter to start execution of a SageMaker Model Building Pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#name CcSchedule#name}
    */
    readonly name?: string;
    /**
    * Value of parameter to start execution of a SageMaker Model Building Pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#value CcSchedule#value}
    */
    readonly value?: string;
}
export class SageMakerPipelineParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SageMakerPipelineParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SageMakerPipelineParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
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

export class SageMakerPipelineParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : SageMakerPipelineParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): SageMakerPipelineParameterPropertyOutputReference {
        return new SageMakerPipelineParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SageMakerPipelineParametersProperty {
    /**
    * List of Parameter names and values for SageMaker Model Building Pipeline execution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#pipeline_parameter_list CcSchedule#pipeline_parameter_list}
    */
    readonly pipelineParameterList?: SageMakerPipelineParameterProperty[] | cdktn.IResolvable;
}
export class SageMakerPipelineParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SageMakerPipelineParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._pipelineParameterList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pipelineParameterList = this._pipelineParameterList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SageMakerPipelineParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._pipelineParameterList.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._pipelineParameterList.internalValue = value.pipelineParameterList;
        }
    }

    // pipeline_parameter_list - computed: true, optional: true, required: false
    private _pipelineParameterList = new SageMakerPipelineParameterPropertyList(this, "pipeline_parameter_list", false);
    public get pipelineParameterList() {
        return this._pipelineParameterList;
    }
    public putPipelineParameterList(value: SageMakerPipelineParameterProperty[] | cdktn.IResolvable) {
        this._pipelineParameterList.internalValue = value;
    }
    public resetPipelineParameterList() {
        this._pipelineParameterList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pipelineParameterListInput() {
        return this._pipelineParameterList.internalValue;
    }
}
export interface SqsParametersProperty {
    /**
    * The FIFO message group ID to use as the target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#message_group_id CcSchedule#message_group_id}
    */
    readonly messageGroupId?: string;
}
export class SqsParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SqsParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._messageGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageGroupId = this._messageGroupId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SqsParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._messageGroupId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._messageGroupId = value.messageGroupId;
        }
    }

    // message_group_id - computed: true, optional: true, required: false
    private _messageGroupId?: string; 
    public get messageGroupId() {
        return this.getStringAttribute('message_group_id');
    }
    public set messageGroupId(value: string) {
        this._messageGroupId = value;
    }
    public resetMessageGroupId() {
        this._messageGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageGroupIdInput() {
        return this._messageGroupId;
    }
}
export interface TargetProperty {
    /**
    * The Amazon Resource Name (ARN) of the target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#arn CcSchedule#arn}
    */
    readonly arn: string;
    /**
    * A DeadLetterConfig object that contains information about a dead-letter queue configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#dead_letter_config CcSchedule#dead_letter_config}
    */
    readonly deadLetterConfig?: DeadLetterConfigProperty;
    /**
    * The custom parameters to be used when the target is an Amazon ECS task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#ecs_parameters CcSchedule#ecs_parameters}
    */
    readonly ecsParameters?: EcsParametersProperty;
    /**
    * EventBridge PutEvent predefined target type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#event_bridge_parameters CcSchedule#event_bridge_parameters}
    */
    readonly eventBridgeParameters?: EventBridgeParametersProperty;
    /**
    * The text, or well-formed JSON, passed to the target. If you are configuring a templated Lambda, AWS Step Functions, or Amazon EventBridge target, the input must be a well-formed JSON. For all other target types, a JSON is not required. If you do not specify anything for this field, EventBridge Scheduler delivers a default notification to the target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#input CcSchedule#input}
    */
    readonly input?: string;
    /**
    * The custom parameter you can use to control the shard to which EventBridge Scheduler sends the event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#kinesis_parameters CcSchedule#kinesis_parameters}
    */
    readonly kinesisParameters?: KinesisParametersProperty;
    /**
    * A RetryPolicy object that includes information about the retry policy settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#retry_policy CcSchedule#retry_policy}
    */
    readonly retryPolicy?: RetryPolicyProperty;
    /**
    * The Amazon Resource Name (ARN) of the IAM role to be used for this target when the schedule is triggered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#role_arn CcSchedule#role_arn}
    */
    readonly roleArn: string;
    /**
    * These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on AWS EventBridge Scheduler schedules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#sage_maker_pipeline_parameters CcSchedule#sage_maker_pipeline_parameters}
    */
    readonly sageMakerPipelineParameters?: SageMakerPipelineParametersProperty;
    /**
    * Contains the message group ID to use when the target is a FIFO queue. If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/scheduler_schedule#sqs_parameters CcSchedule#sqs_parameters}
    */
    readonly sqsParameters?: SqsParametersProperty;
}
export class TargetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._deadLetterConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deadLetterConfig = this._deadLetterConfig?.internalValue;
        }
        if (this._ecsParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ecsParameters = this._ecsParameters?.internalValue;
        }
        if (this._eventBridgeParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventBridgeParameters = this._eventBridgeParameters?.internalValue;
        }
        if (this._input !== undefined) {
            hasAnyValues = true;
            internalValueResult.input = this._input;
        }
        if (this._kinesisParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisParameters = this._kinesisParameters?.internalValue;
        }
        if (this._retryPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._sageMakerPipelineParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerPipelineParameters = this._sageMakerPipelineParameters?.internalValue;
        }
        if (this._sqsParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqsParameters = this._sqsParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
            this._deadLetterConfig.internalValue = undefined;
            this._ecsParameters.internalValue = undefined;
            this._eventBridgeParameters.internalValue = undefined;
            this._input = undefined;
            this._kinesisParameters.internalValue = undefined;
            this._retryPolicy.internalValue = undefined;
            this._roleArn = undefined;
            this._sageMakerPipelineParameters.internalValue = undefined;
            this._sqsParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
            this._deadLetterConfig.internalValue = value.deadLetterConfig;
            this._ecsParameters.internalValue = value.ecsParameters;
            this._eventBridgeParameters.internalValue = value.eventBridgeParameters;
            this._input = value.input;
            this._kinesisParameters.internalValue = value.kinesisParameters;
            this._retryPolicy.internalValue = value.retryPolicy;
            this._roleArn = value.roleArn;
            this._sageMakerPipelineParameters.internalValue = value.sageMakerPipelineParameters;
            this._sqsParameters.internalValue = value.sqsParameters;
        }
    }

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }

    // dead_letter_config - computed: true, optional: true, required: false
    private _deadLetterConfig = new DeadLetterConfigPropertyOutputReference(this, "dead_letter_config");
    public get deadLetterConfig() {
        return this._deadLetterConfig;
    }
    public putDeadLetterConfig(value: DeadLetterConfigProperty) {
        this._deadLetterConfig.internalValue = value;
    }
    public resetDeadLetterConfig() {
        this._deadLetterConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deadLetterConfigInput() {
        return this._deadLetterConfig.internalValue;
    }

    // ecs_parameters - computed: true, optional: true, required: false
    private _ecsParameters = new EcsParametersPropertyOutputReference(this, "ecs_parameters");
    public get ecsParameters() {
        return this._ecsParameters;
    }
    public putEcsParameters(value: EcsParametersProperty) {
        this._ecsParameters.internalValue = value;
    }
    public resetEcsParameters() {
        this._ecsParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ecsParametersInput() {
        return this._ecsParameters.internalValue;
    }

    // event_bridge_parameters - computed: true, optional: true, required: false
    private _eventBridgeParameters = new EventBridgeParametersPropertyOutputReference(this, "event_bridge_parameters");
    public get eventBridgeParameters() {
        return this._eventBridgeParameters;
    }
    public putEventBridgeParameters(value: EventBridgeParametersProperty) {
        this._eventBridgeParameters.internalValue = value;
    }
    public resetEventBridgeParameters() {
        this._eventBridgeParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBridgeParametersInput() {
        return this._eventBridgeParameters.internalValue;
    }

    // input - computed: true, optional: true, required: false
    private _input?: string; 
    public get input() {
        return this.getStringAttribute('input');
    }
    public set input(value: string) {
        this._input = value;
    }
    public resetInput() {
        this._input = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputInput() {
        return this._input;
    }

    // kinesis_parameters - computed: true, optional: true, required: false
    private _kinesisParameters = new KinesisParametersPropertyOutputReference(this, "kinesis_parameters");
    public get kinesisParameters() {
        return this._kinesisParameters;
    }
    public putKinesisParameters(value: KinesisParametersProperty) {
        this._kinesisParameters.internalValue = value;
    }
    public resetKinesisParameters() {
        this._kinesisParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisParametersInput() {
        return this._kinesisParameters.internalValue;
    }

    // retry_policy - computed: true, optional: true, required: false
    private _retryPolicy = new RetryPolicyPropertyOutputReference(this, "retry_policy");
    public get retryPolicy() {
        return this._retryPolicy;
    }
    public putRetryPolicy(value: RetryPolicyProperty) {
        this._retryPolicy.internalValue = value;
    }
    public resetRetryPolicy() {
        this._retryPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryPolicyInput() {
        return this._retryPolicy.internalValue;
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // sage_maker_pipeline_parameters - computed: true, optional: true, required: false
    private _sageMakerPipelineParameters = new SageMakerPipelineParametersPropertyOutputReference(this, "sage_maker_pipeline_parameters");
    public get sageMakerPipelineParameters() {
        return this._sageMakerPipelineParameters;
    }
    public putSageMakerPipelineParameters(value: SageMakerPipelineParametersProperty) {
        this._sageMakerPipelineParameters.internalValue = value;
    }
    public resetSageMakerPipelineParameters() {
        this._sageMakerPipelineParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerPipelineParametersInput() {
        return this._sageMakerPipelineParameters.internalValue;
    }

    // sqs_parameters - computed: true, optional: true, required: false
    private _sqsParameters = new SqsParametersPropertyOutputReference(this, "sqs_parameters");
    public get sqsParameters() {
        return this._sqsParameters;
    }
    public putSqsParameters(value: SqsParametersProperty) {
        this._sqsParameters.internalValue = value;
    }
    public resetSqsParameters() {
        this._sqsParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqsParametersInput() {
        return this._sqsParameters.internalValue;
    }
}
}
