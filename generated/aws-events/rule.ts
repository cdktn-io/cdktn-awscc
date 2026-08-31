// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#description CcRule#description}
    */
    readonly description?: string;
    /**
    * The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#event_bus_name CcRule#event_bus_name}
    */
    readonly eventBusName?: string;
    /**
    * The event pattern of the rule. For more information, see Events and Event Patterns in the Amazon EventBridge User Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#event_pattern CcRule#event_pattern}
    */
    readonly eventPattern?: string;
    /**
    * The name of the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#name CcRule#name}
    */
    readonly name?: string;
    /**
    * The Amazon Resource Name (ARN) of the role that is used for target invocation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#role_arn CcRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)". For more information, see Creating an Amazon EventBridge rule that runs on a schedule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#schedule_expression CcRule#schedule_expression}
    */
    readonly scheduleExpression?: string;
    /**
    * The state of the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#state CcRule#state}
    */
    readonly state?: string;
    /**
    * Any tags assigned to the event rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#tags CcRule#tags}
    */
    readonly tags?: CcRule.TagProperty[] | cdktn.IResolvable;
    /**
    * Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.
    * Targets are the resources that are invoked when a rule is triggered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#targets CcRule#targets}
    */
    readonly targets?: CcRule.TargetProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule awscc_events_rule}
*/
export class CcRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_events_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRule to import
    * @param importFromId The id of the existing CcRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_events_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule awscc_events_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRuleProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcRuleProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_events_rule',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
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
        this._eventBusName = config.eventBusName;
        this._eventPattern = config.eventPattern;
        this._name = config.name;
        this._roleArn = config.roleArn;
        this._scheduleExpression = config.scheduleExpression;
        this._state = config.state;
        this._tags.internalValue = config.tags;
        this._targets.internalValue = config.targets;
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

    // event_bus_name - computed: true, optional: true, required: false
    private _eventBusName?: string; 
    public get eventBusName() {
        return this.getStringAttribute('event_bus_name');
    }
    public set eventBusName(value: string) {
        this._eventBusName = value;
    }
    public resetEventBusName() {
        this._eventBusName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBusNameInput() {
        return this._eventBusName;
    }

    // event_pattern - computed: true, optional: true, required: false
    private _eventPattern?: string; 
    public get eventPattern() {
        return this.getStringAttribute('event_pattern');
    }
    public set eventPattern(value: string) {
        this._eventPattern = value;
    }
    public resetEventPattern() {
        this._eventPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventPatternInput() {
        return this._eventPattern;
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

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // schedule_expression - computed: true, optional: true, required: false
    private _scheduleExpression?: string; 
    public get scheduleExpression() {
        return this.getStringAttribute('schedule_expression');
    }
    public set scheduleExpression(value: string) {
        this._scheduleExpression = value;
    }
    public resetScheduleExpression() {
        this._scheduleExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionInput() {
        return this._scheduleExpression;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRule.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRule.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // targets - computed: true, optional: true, required: false
    private _targets = new CcRule.TargetPropertyList(this, "targets", true);
    public get targets() {
        return this._targets;
    }
    public putTargets(value: CcRule.TargetProperty[] | cdktn.IResolvable) {
        this._targets.internalValue = value;
    }
    public resetTargets() {
        this._targets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
        return this._targets.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            event_bus_name: cdktn.stringToTerraform(this._eventBusName),
            event_pattern: cdktn.stringToTerraform(this._eventPattern),
            name: cdktn.stringToTerraform(this._name),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            schedule_expression: cdktn.stringToTerraform(this._scheduleExpression),
            state: cdktn.stringToTerraform(this._state),
            tags: cdktn.listMapper(ccRuleTagPropertyToTerraform, false)(this._tags.internalValue),
            targets: cdktn.listMapper(ccRuleTargetPropertyToTerraform, false)(this._targets.internalValue),
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
            event_bus_name: {
                value: cdktn.stringToHclTerraform(this._eventBusName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_pattern: {
                value: cdktn.stringToHclTerraform(this._eventPattern),
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
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
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
            state: {
                value: cdktn.stringToHclTerraform(this._state),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRuleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRule.TagPropertyList",
            },
            targets: {
                value: cdktn.listMapperHcl(ccRuleTargetPropertyToHclTerraform, false)(this._targets.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcRule.TargetPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRuleTagPropertyToTerraform(struct?: CcRule.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRuleTagPropertyToHclTerraform(struct?: CcRule.TagProperty | cdktn.IResolvable): any {
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


export function ccRuleAppSyncParametersPropertyToTerraform(struct?: CcRule.AppSyncParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        graph_ql_operation: cdktn.stringToTerraform(struct!.graphQlOperation),
    }
}


export function ccRuleAppSyncParametersPropertyToHclTerraform(struct?: CcRule.AppSyncParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        graph_ql_operation: {
            value: cdktn.stringToHclTerraform(struct!.graphQlOperation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleBatchArrayPropertiesPropertyToTerraform(struct?: CcRule.BatchArrayPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        size: cdktn.numberToTerraform(struct!.size),
    }
}


export function ccRuleBatchArrayPropertiesPropertyToHclTerraform(struct?: CcRule.BatchArrayPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        size: {
            value: cdktn.numberToHclTerraform(struct!.size),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleBatchRetryStrategyPropertyToTerraform(struct?: CcRule.BatchRetryStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attempts: cdktn.numberToTerraform(struct!.attempts),
    }
}


export function ccRuleBatchRetryStrategyPropertyToHclTerraform(struct?: CcRule.BatchRetryStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attempts: {
            value: cdktn.numberToHclTerraform(struct!.attempts),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleBatchParametersPropertyToTerraform(struct?: CcRule.BatchParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        array_properties: ccRuleBatchArrayPropertiesPropertyToTerraform(struct!.arrayProperties),
        job_definition: cdktn.stringToTerraform(struct!.jobDefinition),
        job_name: cdktn.stringToTerraform(struct!.jobName),
        retry_strategy: ccRuleBatchRetryStrategyPropertyToTerraform(struct!.retryStrategy),
    }
}


export function ccRuleBatchParametersPropertyToHclTerraform(struct?: CcRule.BatchParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        array_properties: {
            value: ccRuleBatchArrayPropertiesPropertyToHclTerraform(struct!.arrayProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "BatchArrayPropertiesProperty",
        },
        job_definition: {
            value: cdktn.stringToHclTerraform(struct!.jobDefinition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        job_name: {
            value: cdktn.stringToHclTerraform(struct!.jobName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        retry_strategy: {
            value: ccRuleBatchRetryStrategyPropertyToHclTerraform(struct!.retryStrategy),
            isBlock: true,
            type: "struct",
            storageClassType: "BatchRetryStrategyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleDeadLetterConfigPropertyToTerraform(struct?: CcRule.DeadLetterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
    }
}


export function ccRuleDeadLetterConfigPropertyToHclTerraform(struct?: CcRule.DeadLetterConfigProperty | cdktn.IResolvable): any {
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


export function ccRuleCapacityProviderStrategyItemPropertyToTerraform(struct?: CcRule.CapacityProviderStrategyItemProperty | cdktn.IResolvable): any {
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


export function ccRuleCapacityProviderStrategyItemPropertyToHclTerraform(struct?: CcRule.CapacityProviderStrategyItemProperty | cdktn.IResolvable): any {
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


export function ccRuleAwsVpcConfigurationPropertyToTerraform(struct?: CcRule.AwsVpcConfigurationProperty | cdktn.IResolvable): any {
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


export function ccRuleAwsVpcConfigurationPropertyToHclTerraform(struct?: CcRule.AwsVpcConfigurationProperty | cdktn.IResolvable): any {
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


export function ccRuleNetworkConfigurationPropertyToTerraform(struct?: CcRule.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_vpc_configuration: ccRuleAwsVpcConfigurationPropertyToTerraform(struct!.awsVpcConfiguration),
    }
}


export function ccRuleNetworkConfigurationPropertyToHclTerraform(struct?: CcRule.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_vpc_configuration: {
            value: ccRuleAwsVpcConfigurationPropertyToHclTerraform(struct!.awsVpcConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AwsVpcConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRulePlacementConstraintPropertyToTerraform(struct?: CcRule.PlacementConstraintProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccRulePlacementConstraintPropertyToHclTerraform(struct?: CcRule.PlacementConstraintProperty | cdktn.IResolvable): any {
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


export function ccRulePlacementStrategyPropertyToTerraform(struct?: CcRule.PlacementStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field: cdktn.stringToTerraform(struct!.field),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccRulePlacementStrategyPropertyToHclTerraform(struct?: CcRule.PlacementStrategyProperty | cdktn.IResolvable): any {
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


export function ccRuleTagListPropertyToTerraform(struct?: CcRule.TagListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRuleTagListPropertyToHclTerraform(struct?: CcRule.TagListProperty | cdktn.IResolvable): any {
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


export function ccRuleEcsParametersPropertyToTerraform(struct?: CcRule.EcsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_provider_strategy: cdktn.listMapper(ccRuleCapacityProviderStrategyItemPropertyToTerraform, false)(struct!.capacityProviderStrategy),
        enable_ecs_managed_tags: cdktn.booleanToTerraform(struct!.enableEcsManagedTags),
        enable_execute_command: cdktn.booleanToTerraform(struct!.enableExecuteCommand),
        group: cdktn.stringToTerraform(struct!.group),
        launch_type: cdktn.stringToTerraform(struct!.launchType),
        network_configuration: ccRuleNetworkConfigurationPropertyToTerraform(struct!.networkConfiguration),
        placement_constraints: cdktn.listMapper(ccRulePlacementConstraintPropertyToTerraform, false)(struct!.placementConstraints),
        placement_strategies: cdktn.listMapper(ccRulePlacementStrategyPropertyToTerraform, false)(struct!.placementStrategies),
        platform_version: cdktn.stringToTerraform(struct!.platformVersion),
        propagate_tags: cdktn.stringToTerraform(struct!.propagateTags),
        reference_id: cdktn.stringToTerraform(struct!.referenceId),
        tag_list: cdktn.listMapper(ccRuleTagListPropertyToTerraform, false)(struct!.tagList),
        task_count: cdktn.numberToTerraform(struct!.taskCount),
        task_definition_arn: cdktn.stringToTerraform(struct!.taskDefinitionArn),
    }
}


export function ccRuleEcsParametersPropertyToHclTerraform(struct?: CcRule.EcsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_provider_strategy: {
            value: cdktn.listMapperHcl(ccRuleCapacityProviderStrategyItemPropertyToHclTerraform, false)(struct!.capacityProviderStrategy),
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
            value: ccRuleNetworkConfigurationPropertyToHclTerraform(struct!.networkConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkConfigurationProperty",
        },
        placement_constraints: {
            value: cdktn.listMapperHcl(ccRulePlacementConstraintPropertyToHclTerraform, false)(struct!.placementConstraints),
            isBlock: true,
            type: "list",
            storageClassType: "PlacementConstraintPropertyList",
        },
        placement_strategies: {
            value: cdktn.listMapperHcl(ccRulePlacementStrategyPropertyToHclTerraform, false)(struct!.placementStrategies),
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
        tag_list: {
            value: cdktn.listMapperHcl(ccRuleTagListPropertyToHclTerraform, false)(struct!.tagList),
            isBlock: true,
            type: "list",
            storageClassType: "TagListPropertyList",
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


export function ccRuleHttpParametersPropertyToTerraform(struct?: CcRule.HttpParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.headerParameters),
        path_parameter_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.pathParameterValues),
        query_string_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.queryStringParameters),
    }
}


export function ccRuleHttpParametersPropertyToHclTerraform(struct?: CcRule.HttpParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header_parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.headerParameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        path_parameter_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.pathParameterValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        query_string_parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.queryStringParameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleInputTransformerPropertyToTerraform(struct?: CcRule.InputTransformerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_paths_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.inputPathsMap),
        input_template: cdktn.stringToTerraform(struct!.inputTemplate),
    }
}


export function ccRuleInputTransformerPropertyToHclTerraform(struct?: CcRule.InputTransformerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_paths_map: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.inputPathsMap),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        input_template: {
            value: cdktn.stringToHclTerraform(struct!.inputTemplate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleKinesisParametersPropertyToTerraform(struct?: CcRule.KinesisParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        partition_key_path: cdktn.stringToTerraform(struct!.partitionKeyPath),
    }
}


export function ccRuleKinesisParametersPropertyToHclTerraform(struct?: CcRule.KinesisParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        partition_key_path: {
            value: cdktn.stringToHclTerraform(struct!.partitionKeyPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleRedshiftDataParametersPropertyToTerraform(struct?: CcRule.RedshiftDataParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        db_user: cdktn.stringToTerraform(struct!.dbUser),
        secret_manager_arn: cdktn.stringToTerraform(struct!.secretManagerArn),
        sql: cdktn.stringToTerraform(struct!.sql),
        sqls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sqls),
        statement_name: cdktn.stringToTerraform(struct!.statementName),
        with_event: cdktn.booleanToTerraform(struct!.withEvent),
    }
}


export function ccRuleRedshiftDataParametersPropertyToHclTerraform(struct?: CcRule.RedshiftDataParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        db_user: {
            value: cdktn.stringToHclTerraform(struct!.dbUser),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_manager_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretManagerArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sql: {
            value: cdktn.stringToHclTerraform(struct!.sql),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sqls: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sqls),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        statement_name: {
            value: cdktn.stringToHclTerraform(struct!.statementName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        with_event: {
            value: cdktn.booleanToHclTerraform(struct!.withEvent),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleRetryPolicyPropertyToTerraform(struct?: CcRule.RetryPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        maximum_event_age_in_seconds: cdktn.numberToTerraform(struct!.maximumEventAgeInSeconds),
        maximum_retry_attempts: cdktn.numberToTerraform(struct!.maximumRetryAttempts),
    }
}


export function ccRuleRetryPolicyPropertyToHclTerraform(struct?: CcRule.RetryPolicyProperty | cdktn.IResolvable): any {
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


export function ccRuleRunCommandTargetPropertyToTerraform(struct?: CcRule.RunCommandTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccRuleRunCommandTargetPropertyToHclTerraform(struct?: CcRule.RunCommandTargetProperty | cdktn.IResolvable): any {
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


export function ccRuleRunCommandParametersPropertyToTerraform(struct?: CcRule.RunCommandParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        run_command_targets: cdktn.listMapper(ccRuleRunCommandTargetPropertyToTerraform, false)(struct!.runCommandTargets),
    }
}


export function ccRuleRunCommandParametersPropertyToHclTerraform(struct?: CcRule.RunCommandParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        run_command_targets: {
            value: cdktn.listMapperHcl(ccRuleRunCommandTargetPropertyToHclTerraform, false)(struct!.runCommandTargets),
            isBlock: true,
            type: "list",
            storageClassType: "RunCommandTargetPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleSageMakerPipelineParameterPropertyToTerraform(struct?: CcRule.SageMakerPipelineParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRuleSageMakerPipelineParameterPropertyToHclTerraform(struct?: CcRule.SageMakerPipelineParameterProperty | cdktn.IResolvable): any {
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


export function ccRuleSageMakerPipelineParametersPropertyToTerraform(struct?: CcRule.SageMakerPipelineParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pipeline_parameter_list: cdktn.listMapper(ccRuleSageMakerPipelineParameterPropertyToTerraform, false)(struct!.pipelineParameterList),
    }
}


export function ccRuleSageMakerPipelineParametersPropertyToHclTerraform(struct?: CcRule.SageMakerPipelineParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pipeline_parameter_list: {
            value: cdktn.listMapperHcl(ccRuleSageMakerPipelineParameterPropertyToHclTerraform, false)(struct!.pipelineParameterList),
            isBlock: true,
            type: "list",
            storageClassType: "SageMakerPipelineParameterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleSqsParametersPropertyToTerraform(struct?: CcRule.SqsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        message_group_id: cdktn.stringToTerraform(struct!.messageGroupId),
    }
}


export function ccRuleSqsParametersPropertyToHclTerraform(struct?: CcRule.SqsParametersProperty | cdktn.IResolvable): any {
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


export function ccRuleTargetPropertyToTerraform(struct?: CcRule.TargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_sync_parameters: ccRuleAppSyncParametersPropertyToTerraform(struct!.appSyncParameters),
        arn: cdktn.stringToTerraform(struct!.arn),
        batch_parameters: ccRuleBatchParametersPropertyToTerraform(struct!.batchParameters),
        dead_letter_config: ccRuleDeadLetterConfigPropertyToTerraform(struct!.deadLetterConfig),
        ecs_parameters: ccRuleEcsParametersPropertyToTerraform(struct!.ecsParameters),
        http_parameters: ccRuleHttpParametersPropertyToTerraform(struct!.httpParameters),
        id: cdktn.stringToTerraform(struct!.id),
        input: cdktn.stringToTerraform(struct!.input),
        input_path: cdktn.stringToTerraform(struct!.inputPath),
        input_transformer: ccRuleInputTransformerPropertyToTerraform(struct!.inputTransformer),
        kinesis_parameters: ccRuleKinesisParametersPropertyToTerraform(struct!.kinesisParameters),
        redshift_data_parameters: ccRuleRedshiftDataParametersPropertyToTerraform(struct!.redshiftDataParameters),
        retry_policy: ccRuleRetryPolicyPropertyToTerraform(struct!.retryPolicy),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        run_command_parameters: ccRuleRunCommandParametersPropertyToTerraform(struct!.runCommandParameters),
        sage_maker_pipeline_parameters: ccRuleSageMakerPipelineParametersPropertyToTerraform(struct!.sageMakerPipelineParameters),
        sqs_parameters: ccRuleSqsParametersPropertyToTerraform(struct!.sqsParameters),
    }
}


export function ccRuleTargetPropertyToHclTerraform(struct?: CcRule.TargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_sync_parameters: {
            value: ccRuleAppSyncParametersPropertyToHclTerraform(struct!.appSyncParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "AppSyncParametersProperty",
        },
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        batch_parameters: {
            value: ccRuleBatchParametersPropertyToHclTerraform(struct!.batchParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "BatchParametersProperty",
        },
        dead_letter_config: {
            value: ccRuleDeadLetterConfigPropertyToHclTerraform(struct!.deadLetterConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DeadLetterConfigProperty",
        },
        ecs_parameters: {
            value: ccRuleEcsParametersPropertyToHclTerraform(struct!.ecsParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "EcsParametersProperty",
        },
        http_parameters: {
            value: ccRuleHttpParametersPropertyToHclTerraform(struct!.httpParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "HttpParametersProperty",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input: {
            value: cdktn.stringToHclTerraform(struct!.input),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_path: {
            value: cdktn.stringToHclTerraform(struct!.inputPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_transformer: {
            value: ccRuleInputTransformerPropertyToHclTerraform(struct!.inputTransformer),
            isBlock: true,
            type: "struct",
            storageClassType: "InputTransformerProperty",
        },
        kinesis_parameters: {
            value: ccRuleKinesisParametersPropertyToHclTerraform(struct!.kinesisParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "KinesisParametersProperty",
        },
        redshift_data_parameters: {
            value: ccRuleRedshiftDataParametersPropertyToHclTerraform(struct!.redshiftDataParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftDataParametersProperty",
        },
        retry_policy: {
            value: ccRuleRetryPolicyPropertyToHclTerraform(struct!.retryPolicy),
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
        run_command_parameters: {
            value: ccRuleRunCommandParametersPropertyToHclTerraform(struct!.runCommandParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "RunCommandParametersProperty",
        },
        sage_maker_pipeline_parameters: {
            value: ccRuleSageMakerPipelineParametersPropertyToHclTerraform(struct!.sageMakerPipelineParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "SageMakerPipelineParametersProperty",
        },
        sqs_parameters: {
            value: ccRuleSqsParametersPropertyToHclTerraform(struct!.sqsParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "SqsParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcRule {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#key CcRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#value CcRule#value}
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
export interface AppSyncParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#graph_ql_operation CcRule#graph_ql_operation}
    */
    readonly graphQlOperation?: string;
}
export class AppSyncParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AppSyncParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._graphQlOperation !== undefined) {
            hasAnyValues = true;
            internalValueResult.graphQlOperation = this._graphQlOperation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AppSyncParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._graphQlOperation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._graphQlOperation = value.graphQlOperation;
        }
    }

    // graph_ql_operation - computed: true, optional: true, required: false
    private _graphQlOperation?: string; 
    public get graphQlOperation() {
        return this.getStringAttribute('graph_ql_operation');
    }
    public set graphQlOperation(value: string) {
        this._graphQlOperation = value;
    }
    public resetGraphQlOperation() {
        this._graphQlOperation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get graphQlOperationInput() {
        return this._graphQlOperation;
    }
}
export interface BatchArrayPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#size CcRule#size}
    */
    readonly size?: number;
}
export class BatchArrayPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BatchArrayPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._size !== undefined) {
            hasAnyValues = true;
            internalValueResult.size = this._size;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BatchArrayPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._size = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._size = value.size;
        }
    }

    // size - computed: true, optional: true, required: false
    private _size?: number; 
    public get size() {
        return this.getNumberAttribute('size');
    }
    public set size(value: number) {
        this._size = value;
    }
    public resetSize() {
        this._size = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeInput() {
        return this._size;
    }
}
export interface BatchRetryStrategyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#attempts CcRule#attempts}
    */
    readonly attempts?: number;
}
export class BatchRetryStrategyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BatchRetryStrategyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attempts !== undefined) {
            hasAnyValues = true;
            internalValueResult.attempts = this._attempts;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BatchRetryStrategyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attempts = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attempts = value.attempts;
        }
    }

    // attempts - computed: true, optional: true, required: false
    private _attempts?: number; 
    public get attempts() {
        return this.getNumberAttribute('attempts');
    }
    public set attempts(value: number) {
        this._attempts = value;
    }
    public resetAttempts() {
        this._attempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attemptsInput() {
        return this._attempts;
    }
}
export interface BatchParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#array_properties CcRule#array_properties}
    */
    readonly arrayProperties?: BatchArrayPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#job_definition CcRule#job_definition}
    */
    readonly jobDefinition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#job_name CcRule#job_name}
    */
    readonly jobName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#retry_strategy CcRule#retry_strategy}
    */
    readonly retryStrategy?: BatchRetryStrategyProperty;
}
export class BatchParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BatchParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arrayProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.arrayProperties = this._arrayProperties?.internalValue;
        }
        if (this._jobDefinition !== undefined) {
            hasAnyValues = true;
            internalValueResult.jobDefinition = this._jobDefinition;
        }
        if (this._jobName !== undefined) {
            hasAnyValues = true;
            internalValueResult.jobName = this._jobName;
        }
        if (this._retryStrategy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.retryStrategy = this._retryStrategy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BatchParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arrayProperties.internalValue = undefined;
            this._jobDefinition = undefined;
            this._jobName = undefined;
            this._retryStrategy.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arrayProperties.internalValue = value.arrayProperties;
            this._jobDefinition = value.jobDefinition;
            this._jobName = value.jobName;
            this._retryStrategy.internalValue = value.retryStrategy;
        }
    }

    // array_properties - computed: true, optional: true, required: false
    private _arrayProperties = new BatchArrayPropertiesPropertyOutputReference(this, "array_properties");
    public get arrayProperties() {
        return this._arrayProperties;
    }
    public putArrayProperties(value: BatchArrayPropertiesProperty) {
        this._arrayProperties.internalValue = value;
    }
    public resetArrayProperties() {
        this._arrayProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arrayPropertiesInput() {
        return this._arrayProperties.internalValue;
    }

    // job_definition - computed: true, optional: true, required: false
    private _jobDefinition?: string; 
    public get jobDefinition() {
        return this.getStringAttribute('job_definition');
    }
    public set jobDefinition(value: string) {
        this._jobDefinition = value;
    }
    public resetJobDefinition() {
        this._jobDefinition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobDefinitionInput() {
        return this._jobDefinition;
    }

    // job_name - computed: true, optional: true, required: false
    private _jobName?: string; 
    public get jobName() {
        return this.getStringAttribute('job_name');
    }
    public set jobName(value: string) {
        this._jobName = value;
    }
    public resetJobName() {
        this._jobName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobNameInput() {
        return this._jobName;
    }

    // retry_strategy - computed: true, optional: true, required: false
    private _retryStrategy = new BatchRetryStrategyPropertyOutputReference(this, "retry_strategy");
    public get retryStrategy() {
        return this._retryStrategy;
    }
    public putRetryStrategy(value: BatchRetryStrategyProperty) {
        this._retryStrategy.internalValue = value;
    }
    public resetRetryStrategy() {
        this._retryStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryStrategyInput() {
        return this._retryStrategy.internalValue;
    }
}
export interface DeadLetterConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#arn CcRule#arn}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#base CcRule#base}
    */
    readonly base?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#capacity_provider CcRule#capacity_provider}
    */
    readonly capacityProvider?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#weight CcRule#weight}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#assign_public_ip CcRule#assign_public_ip}
    */
    readonly assignPublicIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#security_groups CcRule#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#subnets CcRule#subnets}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#aws_vpc_configuration CcRule#aws_vpc_configuration}
    */
    readonly awsVpcConfiguration?: AwsVpcConfigurationProperty;
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
        if (this._awsVpcConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsVpcConfiguration = this._awsVpcConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsVpcConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsVpcConfiguration.internalValue = value.awsVpcConfiguration;
        }
    }

    // aws_vpc_configuration - computed: true, optional: true, required: false
    private _awsVpcConfiguration = new AwsVpcConfigurationPropertyOutputReference(this, "aws_vpc_configuration");
    public get awsVpcConfiguration() {
        return this._awsVpcConfiguration;
    }
    public putAwsVpcConfiguration(value: AwsVpcConfigurationProperty) {
        this._awsVpcConfiguration.internalValue = value;
    }
    public resetAwsVpcConfiguration() {
        this._awsVpcConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsVpcConfigurationInput() {
        return this._awsVpcConfiguration.internalValue;
    }
}
export interface PlacementConstraintProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#expression CcRule#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#type CcRule#type}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#field CcRule#field}
    */
    readonly field?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#type CcRule#type}
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
export interface TagListProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#key CcRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#value CcRule#value}
    */
    readonly value?: string;
}
export class TagListPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagListProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagListProperty | cdktn.IResolvable | undefined) {
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

export class TagListPropertyList extends cdktn.ComplexList {
    public internalValue? : TagListProperty[] | cdktn.IResolvable

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
    public get(index: number): TagListPropertyOutputReference {
        return new TagListPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EcsParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#capacity_provider_strategy CcRule#capacity_provider_strategy}
    */
    readonly capacityProviderStrategy?: CapacityProviderStrategyItemProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#enable_ecs_managed_tags CcRule#enable_ecs_managed_tags}
    */
    readonly enableEcsManagedTags?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#enable_execute_command CcRule#enable_execute_command}
    */
    readonly enableExecuteCommand?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#group CcRule#group}
    */
    readonly group?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#launch_type CcRule#launch_type}
    */
    readonly launchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#network_configuration CcRule#network_configuration}
    */
    readonly networkConfiguration?: NetworkConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#placement_constraints CcRule#placement_constraints}
    */
    readonly placementConstraints?: PlacementConstraintProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#placement_strategies CcRule#placement_strategies}
    */
    readonly placementStrategies?: PlacementStrategyProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#platform_version CcRule#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#propagate_tags CcRule#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#reference_id CcRule#reference_id}
    */
    readonly referenceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#tag_list CcRule#tag_list}
    */
    readonly tagList?: TagListProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#task_count CcRule#task_count}
    */
    readonly taskCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#task_definition_arn CcRule#task_definition_arn}
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
        if (this._placementStrategies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.placementStrategies = this._placementStrategies?.internalValue;
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
        if (this._tagList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagList = this._tagList?.internalValue;
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
            this._placementStrategies.internalValue = undefined;
            this._platformVersion = undefined;
            this._propagateTags = undefined;
            this._referenceId = undefined;
            this._tagList.internalValue = undefined;
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
            this._placementStrategies.internalValue = value.placementStrategies;
            this._platformVersion = value.platformVersion;
            this._propagateTags = value.propagateTags;
            this._referenceId = value.referenceId;
            this._tagList.internalValue = value.tagList;
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

    // placement_strategies - computed: true, optional: true, required: false
    private _placementStrategies = new PlacementStrategyPropertyList(this, "placement_strategies", false);
    public get placementStrategies() {
        return this._placementStrategies;
    }
    public putPlacementStrategies(value: PlacementStrategyProperty[] | cdktn.IResolvable) {
        this._placementStrategies.internalValue = value;
    }
    public resetPlacementStrategies() {
        this._placementStrategies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementStrategiesInput() {
        return this._placementStrategies.internalValue;
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

    // tag_list - computed: true, optional: true, required: false
    private _tagList = new TagListPropertyList(this, "tag_list", false);
    public get tagList() {
        return this._tagList;
    }
    public putTagList(value: TagListProperty[] | cdktn.IResolvable) {
        this._tagList.internalValue = value;
    }
    public resetTagList() {
        this._tagList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagListInput() {
        return this._tagList.internalValue;
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
export interface HttpParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#header_parameters CcRule#header_parameters}
    */
    readonly headerParameters?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#path_parameter_values CcRule#path_parameter_values}
    */
    readonly pathParameterValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#query_string_parameters CcRule#query_string_parameters}
    */
    readonly queryStringParameters?: { [key: string]: string };
}
export class HttpParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HttpParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._headerParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerParameters = this._headerParameters;
        }
        if (this._pathParameterValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.pathParameterValues = this._pathParameterValues;
        }
        if (this._queryStringParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryStringParameters = this._queryStringParameters;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HttpParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._headerParameters = undefined;
            this._pathParameterValues = undefined;
            this._queryStringParameters = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._headerParameters = value.headerParameters;
            this._pathParameterValues = value.pathParameterValues;
            this._queryStringParameters = value.queryStringParameters;
        }
    }

    // header_parameters - computed: true, optional: true, required: false
    private _headerParameters?: { [key: string]: string }; 
    public get headerParameters() {
        return this.getStringMapAttribute('header_parameters');
    }
    public set headerParameters(value: { [key: string]: string }) {
        this._headerParameters = value;
    }
    public resetHeaderParameters() {
        this._headerParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerParametersInput() {
        return this._headerParameters;
    }

    // path_parameter_values - computed: true, optional: true, required: false
    private _pathParameterValues?: string[]; 
    public get pathParameterValues() {
        return this.getListAttribute('path_parameter_values');
    }
    public set pathParameterValues(value: string[]) {
        this._pathParameterValues = value;
    }
    public resetPathParameterValues() {
        this._pathParameterValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathParameterValuesInput() {
        return this._pathParameterValues;
    }

    // query_string_parameters - computed: true, optional: true, required: false
    private _queryStringParameters?: { [key: string]: string }; 
    public get queryStringParameters() {
        return this.getStringMapAttribute('query_string_parameters');
    }
    public set queryStringParameters(value: { [key: string]: string }) {
        this._queryStringParameters = value;
    }
    public resetQueryStringParameters() {
        this._queryStringParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringParametersInput() {
        return this._queryStringParameters;
    }
}
export interface InputTransformerProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_paths_map CcRule#input_paths_map}
    */
    readonly inputPathsMap?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_template CcRule#input_template}
    */
    readonly inputTemplate?: string;
}
export class InputTransformerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InputTransformerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inputPathsMap !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputPathsMap = this._inputPathsMap;
        }
        if (this._inputTemplate !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputTemplate = this._inputTemplate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputTransformerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputPathsMap = undefined;
            this._inputTemplate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputPathsMap = value.inputPathsMap;
            this._inputTemplate = value.inputTemplate;
        }
    }

    // input_paths_map - computed: true, optional: true, required: false
    private _inputPathsMap?: { [key: string]: string }; 
    public get inputPathsMap() {
        return this.getStringMapAttribute('input_paths_map');
    }
    public set inputPathsMap(value: { [key: string]: string }) {
        this._inputPathsMap = value;
    }
    public resetInputPathsMap() {
        this._inputPathsMap = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputPathsMapInput() {
        return this._inputPathsMap;
    }

    // input_template - computed: true, optional: true, required: false
    private _inputTemplate?: string; 
    public get inputTemplate() {
        return this.getStringAttribute('input_template');
    }
    public set inputTemplate(value: string) {
        this._inputTemplate = value;
    }
    public resetInputTemplate() {
        this._inputTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputTemplateInput() {
        return this._inputTemplate;
    }
}
export interface KinesisParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#partition_key_path CcRule#partition_key_path}
    */
    readonly partitionKeyPath?: string;
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
        if (this._partitionKeyPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionKeyPath = this._partitionKeyPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._partitionKeyPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._partitionKeyPath = value.partitionKeyPath;
        }
    }

    // partition_key_path - computed: true, optional: true, required: false
    private _partitionKeyPath?: string; 
    public get partitionKeyPath() {
        return this.getStringAttribute('partition_key_path');
    }
    public set partitionKeyPath(value: string) {
        this._partitionKeyPath = value;
    }
    public resetPartitionKeyPath() {
        this._partitionKeyPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionKeyPathInput() {
        return this._partitionKeyPath;
    }
}
export interface RedshiftDataParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#database CcRule#database}
    */
    readonly database?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#db_user CcRule#db_user}
    */
    readonly dbUser?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#secret_manager_arn CcRule#secret_manager_arn}
    */
    readonly secretManagerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sql CcRule#sql}
    */
    readonly sql?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sqls CcRule#sqls}
    */
    readonly sqls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#statement_name CcRule#statement_name}
    */
    readonly statementName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#with_event CcRule#with_event}
    */
    readonly withEvent?: boolean | cdktn.IResolvable;
}
export class RedshiftDataParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftDataParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._dbUser !== undefined) {
            hasAnyValues = true;
            internalValueResult.dbUser = this._dbUser;
        }
        if (this._secretManagerArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretManagerArn = this._secretManagerArn;
        }
        if (this._sql !== undefined) {
            hasAnyValues = true;
            internalValueResult.sql = this._sql;
        }
        if (this._sqls !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqls = this._sqls;
        }
        if (this._statementName !== undefined) {
            hasAnyValues = true;
            internalValueResult.statementName = this._statementName;
        }
        if (this._withEvent !== undefined) {
            hasAnyValues = true;
            internalValueResult.withEvent = this._withEvent;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftDataParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._dbUser = undefined;
            this._secretManagerArn = undefined;
            this._sql = undefined;
            this._sqls = undefined;
            this._statementName = undefined;
            this._withEvent = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._dbUser = value.dbUser;
            this._secretManagerArn = value.secretManagerArn;
            this._sql = value.sql;
            this._sqls = value.sqls;
            this._statementName = value.statementName;
            this._withEvent = value.withEvent;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // db_user - computed: true, optional: true, required: false
    private _dbUser?: string; 
    public get dbUser() {
        return this.getStringAttribute('db_user');
    }
    public set dbUser(value: string) {
        this._dbUser = value;
    }
    public resetDbUser() {
        this._dbUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbUserInput() {
        return this._dbUser;
    }

    // secret_manager_arn - computed: true, optional: true, required: false
    private _secretManagerArn?: string; 
    public get secretManagerArn() {
        return this.getStringAttribute('secret_manager_arn');
    }
    public set secretManagerArn(value: string) {
        this._secretManagerArn = value;
    }
    public resetSecretManagerArn() {
        this._secretManagerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretManagerArnInput() {
        return this._secretManagerArn;
    }

    // sql - computed: true, optional: true, required: false
    private _sql?: string; 
    public get sql() {
        return this.getStringAttribute('sql');
    }
    public set sql(value: string) {
        this._sql = value;
    }
    public resetSql() {
        this._sql = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlInput() {
        return this._sql;
    }

    // sqls - computed: true, optional: true, required: false
    private _sqls?: string[]; 
    public get sqls() {
        return this.getListAttribute('sqls');
    }
    public set sqls(value: string[]) {
        this._sqls = value;
    }
    public resetSqls() {
        this._sqls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlsInput() {
        return this._sqls;
    }

    // statement_name - computed: true, optional: true, required: false
    private _statementName?: string; 
    public get statementName() {
        return this.getStringAttribute('statement_name');
    }
    public set statementName(value: string) {
        this._statementName = value;
    }
    public resetStatementName() {
        this._statementName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statementNameInput() {
        return this._statementName;
    }

    // with_event - computed: true, optional: true, required: false
    private _withEvent?: boolean | cdktn.IResolvable; 
    public get withEvent() {
        return this.getBooleanAttribute('with_event');
    }
    public set withEvent(value: boolean | cdktn.IResolvable) {
        this._withEvent = value;
    }
    public resetWithEvent() {
        this._withEvent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get withEventInput() {
        return this._withEvent;
    }
}
export interface RetryPolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#maximum_event_age_in_seconds CcRule#maximum_event_age_in_seconds}
    */
    readonly maximumEventAgeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#maximum_retry_attempts CcRule#maximum_retry_attempts}
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
export interface RunCommandTargetProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#key CcRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#values CcRule#values}
    */
    readonly values?: string[];
}
export class RunCommandTargetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RunCommandTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RunCommandTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._values = value.values;
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

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
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

export class RunCommandTargetPropertyList extends cdktn.ComplexList {
    public internalValue? : RunCommandTargetProperty[] | cdktn.IResolvable

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
    public get(index: number): RunCommandTargetPropertyOutputReference {
        return new RunCommandTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RunCommandParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#run_command_targets CcRule#run_command_targets}
    */
    readonly runCommandTargets?: RunCommandTargetProperty[] | cdktn.IResolvable;
}
export class RunCommandParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RunCommandParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._runCommandTargets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.runCommandTargets = this._runCommandTargets?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RunCommandParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._runCommandTargets.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._runCommandTargets.internalValue = value.runCommandTargets;
        }
    }

    // run_command_targets - computed: true, optional: true, required: false
    private _runCommandTargets = new RunCommandTargetPropertyList(this, "run_command_targets", false);
    public get runCommandTargets() {
        return this._runCommandTargets;
    }
    public putRunCommandTargets(value: RunCommandTargetProperty[] | cdktn.IResolvable) {
        this._runCommandTargets.internalValue = value;
    }
    public resetRunCommandTargets() {
        this._runCommandTargets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runCommandTargetsInput() {
        return this._runCommandTargets.internalValue;
    }
}
export interface SageMakerPipelineParameterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#name CcRule#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#value CcRule#value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#pipeline_parameter_list CcRule#pipeline_parameter_list}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#message_group_id CcRule#message_group_id}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#app_sync_parameters CcRule#app_sync_parameters}
    */
    readonly appSyncParameters?: AppSyncParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#arn CcRule#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#batch_parameters CcRule#batch_parameters}
    */
    readonly batchParameters?: BatchParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#dead_letter_config CcRule#dead_letter_config}
    */
    readonly deadLetterConfig?: DeadLetterConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#ecs_parameters CcRule#ecs_parameters}
    */
    readonly ecsParameters?: EcsParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#http_parameters CcRule#http_parameters}
    */
    readonly httpParameters?: HttpParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#id CcRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input CcRule#input}
    */
    readonly input?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_path CcRule#input_path}
    */
    readonly inputPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_transformer CcRule#input_transformer}
    */
    readonly inputTransformer?: InputTransformerProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#kinesis_parameters CcRule#kinesis_parameters}
    */
    readonly kinesisParameters?: KinesisParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#redshift_data_parameters CcRule#redshift_data_parameters}
    */
    readonly redshiftDataParameters?: RedshiftDataParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#retry_policy CcRule#retry_policy}
    */
    readonly retryPolicy?: RetryPolicyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#role_arn CcRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#run_command_parameters CcRule#run_command_parameters}
    */
    readonly runCommandParameters?: RunCommandParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sage_maker_pipeline_parameters CcRule#sage_maker_pipeline_parameters}
    */
    readonly sageMakerPipelineParameters?: SageMakerPipelineParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sqs_parameters CcRule#sqs_parameters}
    */
    readonly sqsParameters?: SqsParametersProperty;
}
export class TargetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appSyncParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.appSyncParameters = this._appSyncParameters?.internalValue;
        }
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._batchParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchParameters = this._batchParameters?.internalValue;
        }
        if (this._deadLetterConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deadLetterConfig = this._deadLetterConfig?.internalValue;
        }
        if (this._ecsParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ecsParameters = this._ecsParameters?.internalValue;
        }
        if (this._httpParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpParameters = this._httpParameters?.internalValue;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._input !== undefined) {
            hasAnyValues = true;
            internalValueResult.input = this._input;
        }
        if (this._inputPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputPath = this._inputPath;
        }
        if (this._inputTransformer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputTransformer = this._inputTransformer?.internalValue;
        }
        if (this._kinesisParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisParameters = this._kinesisParameters?.internalValue;
        }
        if (this._redshiftDataParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshiftDataParameters = this._redshiftDataParameters?.internalValue;
        }
        if (this._retryPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._runCommandParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.runCommandParameters = this._runCommandParameters?.internalValue;
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
            this._appSyncParameters.internalValue = undefined;
            this._arn = undefined;
            this._batchParameters.internalValue = undefined;
            this._deadLetterConfig.internalValue = undefined;
            this._ecsParameters.internalValue = undefined;
            this._httpParameters.internalValue = undefined;
            this._id = undefined;
            this._input = undefined;
            this._inputPath = undefined;
            this._inputTransformer.internalValue = undefined;
            this._kinesisParameters.internalValue = undefined;
            this._redshiftDataParameters.internalValue = undefined;
            this._retryPolicy.internalValue = undefined;
            this._roleArn = undefined;
            this._runCommandParameters.internalValue = undefined;
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
            this._appSyncParameters.internalValue = value.appSyncParameters;
            this._arn = value.arn;
            this._batchParameters.internalValue = value.batchParameters;
            this._deadLetterConfig.internalValue = value.deadLetterConfig;
            this._ecsParameters.internalValue = value.ecsParameters;
            this._httpParameters.internalValue = value.httpParameters;
            this._id = value.id;
            this._input = value.input;
            this._inputPath = value.inputPath;
            this._inputTransformer.internalValue = value.inputTransformer;
            this._kinesisParameters.internalValue = value.kinesisParameters;
            this._redshiftDataParameters.internalValue = value.redshiftDataParameters;
            this._retryPolicy.internalValue = value.retryPolicy;
            this._roleArn = value.roleArn;
            this._runCommandParameters.internalValue = value.runCommandParameters;
            this._sageMakerPipelineParameters.internalValue = value.sageMakerPipelineParameters;
            this._sqsParameters.internalValue = value.sqsParameters;
        }
    }

    // app_sync_parameters - computed: true, optional: true, required: false
    private _appSyncParameters = new AppSyncParametersPropertyOutputReference(this, "app_sync_parameters");
    public get appSyncParameters() {
        return this._appSyncParameters;
    }
    public putAppSyncParameters(value: AppSyncParametersProperty) {
        this._appSyncParameters.internalValue = value;
    }
    public resetAppSyncParameters() {
        this._appSyncParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appSyncParametersInput() {
        return this._appSyncParameters.internalValue;
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

    // batch_parameters - computed: true, optional: true, required: false
    private _batchParameters = new BatchParametersPropertyOutputReference(this, "batch_parameters");
    public get batchParameters() {
        return this._batchParameters;
    }
    public putBatchParameters(value: BatchParametersProperty) {
        this._batchParameters.internalValue = value;
    }
    public resetBatchParameters() {
        this._batchParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchParametersInput() {
        return this._batchParameters.internalValue;
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

    // http_parameters - computed: true, optional: true, required: false
    private _httpParameters = new HttpParametersPropertyOutputReference(this, "http_parameters");
    public get httpParameters() {
        return this._httpParameters;
    }
    public putHttpParameters(value: HttpParametersProperty) {
        this._httpParameters.internalValue = value;
    }
    public resetHttpParameters() {
        this._httpParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpParametersInput() {
        return this._httpParameters.internalValue;
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

    // input_path - computed: true, optional: true, required: false
    private _inputPath?: string; 
    public get inputPath() {
        return this.getStringAttribute('input_path');
    }
    public set inputPath(value: string) {
        this._inputPath = value;
    }
    public resetInputPath() {
        this._inputPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputPathInput() {
        return this._inputPath;
    }

    // input_transformer - computed: true, optional: true, required: false
    private _inputTransformer = new InputTransformerPropertyOutputReference(this, "input_transformer");
    public get inputTransformer() {
        return this._inputTransformer;
    }
    public putInputTransformer(value: InputTransformerProperty) {
        this._inputTransformer.internalValue = value;
    }
    public resetInputTransformer() {
        this._inputTransformer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputTransformerInput() {
        return this._inputTransformer.internalValue;
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

    // redshift_data_parameters - computed: true, optional: true, required: false
    private _redshiftDataParameters = new RedshiftDataParametersPropertyOutputReference(this, "redshift_data_parameters");
    public get redshiftDataParameters() {
        return this._redshiftDataParameters;
    }
    public putRedshiftDataParameters(value: RedshiftDataParametersProperty) {
        this._redshiftDataParameters.internalValue = value;
    }
    public resetRedshiftDataParameters() {
        this._redshiftDataParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftDataParametersInput() {
        return this._redshiftDataParameters.internalValue;
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

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // run_command_parameters - computed: true, optional: true, required: false
    private _runCommandParameters = new RunCommandParametersPropertyOutputReference(this, "run_command_parameters");
    public get runCommandParameters() {
        return this._runCommandParameters;
    }
    public putRunCommandParameters(value: RunCommandParametersProperty) {
        this._runCommandParameters.internalValue = value;
    }
    public resetRunCommandParameters() {
        this._runCommandParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runCommandParametersInput() {
        return this._runCommandParameters.internalValue;
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

export class TargetPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetPropertyOutputReference {
        return new TargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
