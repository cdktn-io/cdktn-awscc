// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGatewayRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#actions CcGatewayRule#actions}
    */
    readonly actions: CcGatewayRule.ActionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#conditions CcGatewayRule#conditions}
    */
    readonly conditions?: CcGatewayRule.ConditionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#description CcGatewayRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#gateway_identifier CcGatewayRule#gateway_identifier}
    */
    readonly gatewayIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#priority CcGatewayRule#priority}
    */
    readonly priority: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule awscc_bedrockagentcore_gateway_rule}
*/
export class CcGatewayRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrockagentcore_gateway_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGatewayRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGatewayRule to import
    * @param importFromId The id of the existing CcGatewayRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGatewayRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_gateway_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule awscc_bedrockagentcore_gateway_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGatewayRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcGatewayRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrockagentcore_gateway_rule',
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
        this._actions.internalValue = config.actions;
        this._conditions.internalValue = config.conditions;
        this._description = config.description;
        this._gatewayIdentifier = config.gatewayIdentifier;
        this._priority = config.priority;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // actions - computed: false, optional: false, required: true
    private _actions = new CcGatewayRule.ActionPropertyList(this, "actions", false);
    public get actions() {
        return this._actions;
    }
    public putActions(value: CcGatewayRule.ActionProperty[] | cdktn.IResolvable) {
        this._actions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
    }

    // conditions - computed: true, optional: true, required: false
    private _conditions = new CcGatewayRule.ConditionPropertyList(this, "conditions", false);
    public get conditions() {
        return this._conditions;
    }
    public putConditions(value: CcGatewayRule.ConditionProperty[] | cdktn.IResolvable) {
        this._conditions.internalValue = value;
    }
    public resetConditions() {
        this._conditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
        return this._conditions.internalValue;
    }

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

    // gateway_arn - computed: true, optional: false, required: false
    public get gatewayArn() {
        return this.getStringAttribute('gateway_arn');
    }

    // gateway_identifier - computed: true, optional: true, required: false
    private _gatewayIdentifier?: string; 
    public get gatewayIdentifier() {
        return this.getStringAttribute('gateway_identifier');
    }
    public set gatewayIdentifier(value: string) {
        this._gatewayIdentifier = value;
    }
    public resetGatewayIdentifier() {
        this._gatewayIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayIdentifierInput() {
        return this._gatewayIdentifier;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // priority - computed: false, optional: false, required: true
    private _priority?: number; 
    public get priority() {
        return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
        this._priority = value;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
        return this._priority;
    }

    // rule_id - computed: true, optional: false, required: false
    public get ruleId() {
        return this.getStringAttribute('rule_id');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            actions: cdktn.listMapper(ccGatewayRuleActionPropertyToTerraform, false)(this._actions.internalValue),
            conditions: cdktn.listMapper(ccGatewayRuleConditionPropertyToTerraform, false)(this._conditions.internalValue),
            description: cdktn.stringToTerraform(this._description),
            gateway_identifier: cdktn.stringToTerraform(this._gatewayIdentifier),
            priority: cdktn.numberToTerraform(this._priority),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            actions: {
                value: cdktn.listMapperHcl(ccGatewayRuleActionPropertyToHclTerraform, false)(this._actions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcGatewayRule.ActionPropertyList",
            },
            conditions: {
                value: cdktn.listMapperHcl(ccGatewayRuleConditionPropertyToHclTerraform, false)(this._conditions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcGatewayRule.ConditionPropertyList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gateway_identifier: {
                value: cdktn.stringToHclTerraform(this._gatewayIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            priority: {
                value: cdktn.numberToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccGatewayRuleStaticOverridePropertyToTerraform(struct?: CcGatewayRule.StaticOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bundle_arn: cdktn.stringToTerraform(struct!.bundleArn),
        bundle_version: cdktn.stringToTerraform(struct!.bundleVersion),
    }
}


export function ccGatewayRuleStaticOverridePropertyToHclTerraform(struct?: CcGatewayRule.StaticOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bundle_arn: {
            value: cdktn.stringToHclTerraform(struct!.bundleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bundle_version: {
            value: cdktn.stringToHclTerraform(struct!.bundleVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayRuleConfigurationBundleReferencePropertyToTerraform(struct?: CcGatewayRule.ConfigurationBundleReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bundle_arn: cdktn.stringToTerraform(struct!.bundleArn),
        bundle_version: cdktn.stringToTerraform(struct!.bundleVersion),
    }
}


export function ccGatewayRuleConfigurationBundleReferencePropertyToHclTerraform(struct?: CcGatewayRule.ConfigurationBundleReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bundle_arn: {
            value: cdktn.stringToHclTerraform(struct!.bundleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bundle_version: {
            value: cdktn.stringToHclTerraform(struct!.bundleVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayRuleTrafficSplitEntryPropertyToTerraform(struct?: CcGatewayRule.TrafficSplitEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        configuration_bundle: ccGatewayRuleConfigurationBundleReferencePropertyToTerraform(struct!.configurationBundle),
        description: cdktn.stringToTerraform(struct!.description),
        metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadata),
        name: cdktn.stringToTerraform(struct!.name),
        weight: cdktn.numberToTerraform(struct!.weight),
    }
}


export function ccGatewayRuleTrafficSplitEntryPropertyToHclTerraform(struct?: CcGatewayRule.TrafficSplitEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        configuration_bundle: {
            value: ccGatewayRuleConfigurationBundleReferencePropertyToHclTerraform(struct!.configurationBundle),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationBundleReferenceProperty",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metadata: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadata),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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


export function ccGatewayRuleWeightedOverridePropertyToTerraform(struct?: CcGatewayRule.WeightedOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        traffic_split: cdktn.listMapper(ccGatewayRuleTrafficSplitEntryPropertyToTerraform, false)(struct!.trafficSplit),
    }
}


export function ccGatewayRuleWeightedOverridePropertyToHclTerraform(struct?: CcGatewayRule.WeightedOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        traffic_split: {
            value: cdktn.listMapperHcl(ccGatewayRuleTrafficSplitEntryPropertyToHclTerraform, false)(struct!.trafficSplit),
            isBlock: true,
            type: "list",
            storageClassType: "TrafficSplitEntryPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayRuleConfigurationBundleActionPropertyToTerraform(struct?: CcGatewayRule.ConfigurationBundleActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        static_override: ccGatewayRuleStaticOverridePropertyToTerraform(struct!.staticOverride),
        weighted_override: ccGatewayRuleWeightedOverridePropertyToTerraform(struct!.weightedOverride),
    }
}


export function ccGatewayRuleConfigurationBundleActionPropertyToHclTerraform(struct?: CcGatewayRule.ConfigurationBundleActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        static_override: {
            value: ccGatewayRuleStaticOverridePropertyToHclTerraform(struct!.staticOverride),
            isBlock: true,
            type: "struct",
            storageClassType: "StaticOverrideProperty",
        },
        weighted_override: {
            value: ccGatewayRuleWeightedOverridePropertyToHclTerraform(struct!.weightedOverride),
            isBlock: true,
            type: "struct",
            storageClassType: "WeightedOverrideProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayRuleStaticRoutePropertyToTerraform(struct?: CcGatewayRule.StaticRouteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_name: cdktn.stringToTerraform(struct!.targetName),
    }
}


export function ccGatewayRuleStaticRoutePropertyToHclTerraform(struct?: CcGatewayRule.StaticRouteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_name: {
            value: cdktn.stringToHclTerraform(struct!.targetName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayRuleTargetTrafficSplitEntryPropertyToTerraform(struct?: CcGatewayRule.TargetTrafficSplitEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadata),
        name: cdktn.stringToTerraform(struct!.name),
        target_name: cdktn.stringToTerraform(struct!.targetName),
        weight: cdktn.numberToTerraform(struct!.weight),
    }
}


export function ccGatewayRuleTargetTrafficSplitEntryPropertyToHclTerraform(struct?: CcGatewayRule.TargetTrafficSplitEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metadata: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadata),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_name: {
            value: cdktn.stringToHclTerraform(struct!.targetName),
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


export function ccGatewayRuleWeightedRoutePropertyToTerraform(struct?: CcGatewayRule.WeightedRouteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        traffic_split: cdktn.listMapper(ccGatewayRuleTargetTrafficSplitEntryPropertyToTerraform, false)(struct!.trafficSplit),
    }
}


export function ccGatewayRuleWeightedRoutePropertyToHclTerraform(struct?: CcGatewayRule.WeightedRouteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        traffic_split: {
            value: cdktn.listMapperHcl(ccGatewayRuleTargetTrafficSplitEntryPropertyToHclTerraform, false)(struct!.trafficSplit),
            isBlock: true,
            type: "list",
            storageClassType: "TargetTrafficSplitEntryPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayRuleRouteToTargetActionPropertyToTerraform(struct?: CcGatewayRule.RouteToTargetActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        static_route: ccGatewayRuleStaticRoutePropertyToTerraform(struct!.staticRoute),
        weighted_route: ccGatewayRuleWeightedRoutePropertyToTerraform(struct!.weightedRoute),
    }
}


export function ccGatewayRuleRouteToTargetActionPropertyToHclTerraform(struct?: CcGatewayRule.RouteToTargetActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        static_route: {
            value: ccGatewayRuleStaticRoutePropertyToHclTerraform(struct!.staticRoute),
            isBlock: true,
            type: "struct",
            storageClassType: "StaticRouteProperty",
        },
        weighted_route: {
            value: ccGatewayRuleWeightedRoutePropertyToHclTerraform(struct!.weightedRoute),
            isBlock: true,
            type: "struct",
            storageClassType: "WeightedRouteProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayRuleActionPropertyToTerraform(struct?: CcGatewayRule.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        configuration_bundle: ccGatewayRuleConfigurationBundleActionPropertyToTerraform(struct!.configurationBundle),
        route_to_target: ccGatewayRuleRouteToTargetActionPropertyToTerraform(struct!.routeToTarget),
    }
}


export function ccGatewayRuleActionPropertyToHclTerraform(struct?: CcGatewayRule.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        configuration_bundle: {
            value: ccGatewayRuleConfigurationBundleActionPropertyToHclTerraform(struct!.configurationBundle),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationBundleActionProperty",
        },
        route_to_target: {
            value: ccGatewayRuleRouteToTargetActionPropertyToHclTerraform(struct!.routeToTarget),
            isBlock: true,
            type: "struct",
            storageClassType: "RouteToTargetActionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayRuleMatchPathsPropertyToTerraform(struct?: CcGatewayRule.MatchPathsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        any_of: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.anyOf),
    }
}


export function ccGatewayRuleMatchPathsPropertyToHclTerraform(struct?: CcGatewayRule.MatchPathsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        any_of: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.anyOf),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayRuleIamPrincipalPropertyToTerraform(struct?: CcGatewayRule.IamPrincipalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
        operator: cdktn.stringToTerraform(struct!.operator),
    }
}


export function ccGatewayRuleIamPrincipalPropertyToHclTerraform(struct?: CcGatewayRule.IamPrincipalProperty | cdktn.IResolvable): any {
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
        operator: {
            value: cdktn.stringToHclTerraform(struct!.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayRuleMatchPrincipalEntryPropertyToTerraform(struct?: CcGatewayRule.MatchPrincipalEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        iam_principal: ccGatewayRuleIamPrincipalPropertyToTerraform(struct!.iamPrincipal),
    }
}


export function ccGatewayRuleMatchPrincipalEntryPropertyToHclTerraform(struct?: CcGatewayRule.MatchPrincipalEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        iam_principal: {
            value: ccGatewayRuleIamPrincipalPropertyToHclTerraform(struct!.iamPrincipal),
            isBlock: true,
            type: "struct",
            storageClassType: "IamPrincipalProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayRuleMatchPrincipalsPropertyToTerraform(struct?: CcGatewayRule.MatchPrincipalsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        any_of: cdktn.listMapper(ccGatewayRuleMatchPrincipalEntryPropertyToTerraform, false)(struct!.anyOf),
    }
}


export function ccGatewayRuleMatchPrincipalsPropertyToHclTerraform(struct?: CcGatewayRule.MatchPrincipalsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        any_of: {
            value: cdktn.listMapperHcl(ccGatewayRuleMatchPrincipalEntryPropertyToHclTerraform, false)(struct!.anyOf),
            isBlock: true,
            type: "list",
            storageClassType: "MatchPrincipalEntryPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayRuleConditionPropertyToTerraform(struct?: CcGatewayRule.ConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        match_paths: ccGatewayRuleMatchPathsPropertyToTerraform(struct!.matchPaths),
        match_principals: ccGatewayRuleMatchPrincipalsPropertyToTerraform(struct!.matchPrincipals),
    }
}


export function ccGatewayRuleConditionPropertyToHclTerraform(struct?: CcGatewayRule.ConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        match_paths: {
            value: ccGatewayRuleMatchPathsPropertyToHclTerraform(struct!.matchPaths),
            isBlock: true,
            type: "struct",
            storageClassType: "MatchPathsProperty",
        },
        match_principals: {
            value: ccGatewayRuleMatchPrincipalsPropertyToHclTerraform(struct!.matchPrincipals),
            isBlock: true,
            type: "struct",
            storageClassType: "MatchPrincipalsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcGatewayRule {
export interface StaticOverrideProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#bundle_arn CcGatewayRule#bundle_arn}
    */
    readonly bundleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#bundle_version CcGatewayRule#bundle_version}
    */
    readonly bundleVersion?: string;
}
export class StaticOverridePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StaticOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bundleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bundleArn = this._bundleArn;
        }
        if (this._bundleVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.bundleVersion = this._bundleVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StaticOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bundleArn = undefined;
            this._bundleVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bundleArn = value.bundleArn;
            this._bundleVersion = value.bundleVersion;
        }
    }

    // bundle_arn - computed: true, optional: true, required: false
    private _bundleArn?: string; 
    public get bundleArn() {
        return this.getStringAttribute('bundle_arn');
    }
    public set bundleArn(value: string) {
        this._bundleArn = value;
    }
    public resetBundleArn() {
        this._bundleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bundleArnInput() {
        return this._bundleArn;
    }

    // bundle_version - computed: true, optional: true, required: false
    private _bundleVersion?: string; 
    public get bundleVersion() {
        return this.getStringAttribute('bundle_version');
    }
    public set bundleVersion(value: string) {
        this._bundleVersion = value;
    }
    public resetBundleVersion() {
        this._bundleVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bundleVersionInput() {
        return this._bundleVersion;
    }
}
export interface ConfigurationBundleReferenceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#bundle_arn CcGatewayRule#bundle_arn}
    */
    readonly bundleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#bundle_version CcGatewayRule#bundle_version}
    */
    readonly bundleVersion?: string;
}
export class ConfigurationBundleReferencePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationBundleReferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bundleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bundleArn = this._bundleArn;
        }
        if (this._bundleVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.bundleVersion = this._bundleVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationBundleReferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bundleArn = undefined;
            this._bundleVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bundleArn = value.bundleArn;
            this._bundleVersion = value.bundleVersion;
        }
    }

    // bundle_arn - computed: true, optional: true, required: false
    private _bundleArn?: string; 
    public get bundleArn() {
        return this.getStringAttribute('bundle_arn');
    }
    public set bundleArn(value: string) {
        this._bundleArn = value;
    }
    public resetBundleArn() {
        this._bundleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bundleArnInput() {
        return this._bundleArn;
    }

    // bundle_version - computed: true, optional: true, required: false
    private _bundleVersion?: string; 
    public get bundleVersion() {
        return this.getStringAttribute('bundle_version');
    }
    public set bundleVersion(value: string) {
        this._bundleVersion = value;
    }
    public resetBundleVersion() {
        this._bundleVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bundleVersionInput() {
        return this._bundleVersion;
    }
}
export interface TrafficSplitEntryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle CcGatewayRule#configuration_bundle}
    */
    readonly configurationBundle?: ConfigurationBundleReferenceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#description CcGatewayRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#metadata CcGatewayRule#metadata}
    */
    readonly metadata?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#name CcGatewayRule#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#weight CcGatewayRule#weight}
    */
    readonly weight?: number;
}
export class TrafficSplitEntryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TrafficSplitEntryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._configurationBundle?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.configurationBundle = this._configurationBundle?.internalValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._metadata !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadata = this._metadata;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._weight !== undefined) {
            hasAnyValues = true;
            internalValueResult.weight = this._weight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrafficSplitEntryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._configurationBundle.internalValue = undefined;
            this._description = undefined;
            this._metadata = undefined;
            this._name = undefined;
            this._weight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._configurationBundle.internalValue = value.configurationBundle;
            this._description = value.description;
            this._metadata = value.metadata;
            this._name = value.name;
            this._weight = value.weight;
        }
    }

    // configuration_bundle - computed: true, optional: true, required: false
    private _configurationBundle = new ConfigurationBundleReferencePropertyOutputReference(this, "configuration_bundle");
    public get configurationBundle() {
        return this._configurationBundle;
    }
    public putConfigurationBundle(value: ConfigurationBundleReferenceProperty) {
        this._configurationBundle.internalValue = value;
    }
    public resetConfigurationBundle() {
        this._configurationBundle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationBundleInput() {
        return this._configurationBundle.internalValue;
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

    // metadata - computed: true, optional: true, required: false
    private _metadata?: { [key: string]: string }; 
    public get metadata() {
        return this.getStringMapAttribute('metadata');
    }
    public set metadata(value: { [key: string]: string }) {
        this._metadata = value;
    }
    public resetMetadata() {
        this._metadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataInput() {
        return this._metadata;
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

export class TrafficSplitEntryPropertyList extends cdktn.ComplexList {
    public internalValue? : TrafficSplitEntryProperty[] | cdktn.IResolvable

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
    public get(index: number): TrafficSplitEntryPropertyOutputReference {
        return new TrafficSplitEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface WeightedOverrideProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#traffic_split CcGatewayRule#traffic_split}
    */
    readonly trafficSplit?: TrafficSplitEntryProperty[] | cdktn.IResolvable;
}
export class WeightedOverridePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WeightedOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._trafficSplit?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trafficSplit = this._trafficSplit?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WeightedOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._trafficSplit.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._trafficSplit.internalValue = value.trafficSplit;
        }
    }

    // traffic_split - computed: true, optional: true, required: false
    private _trafficSplit = new TrafficSplitEntryPropertyList(this, "traffic_split", false);
    public get trafficSplit() {
        return this._trafficSplit;
    }
    public putTrafficSplit(value: TrafficSplitEntryProperty[] | cdktn.IResolvable) {
        this._trafficSplit.internalValue = value;
    }
    public resetTrafficSplit() {
        this._trafficSplit.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficSplitInput() {
        return this._trafficSplit.internalValue;
    }
}
export interface ConfigurationBundleActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#static_override CcGatewayRule#static_override}
    */
    readonly staticOverride?: StaticOverrideProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#weighted_override CcGatewayRule#weighted_override}
    */
    readonly weightedOverride?: WeightedOverrideProperty;
}
export class ConfigurationBundleActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationBundleActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._staticOverride?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.staticOverride = this._staticOverride?.internalValue;
        }
        if (this._weightedOverride?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.weightedOverride = this._weightedOverride?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationBundleActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._staticOverride.internalValue = undefined;
            this._weightedOverride.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._staticOverride.internalValue = value.staticOverride;
            this._weightedOverride.internalValue = value.weightedOverride;
        }
    }

    // static_override - computed: true, optional: true, required: false
    private _staticOverride = new StaticOverridePropertyOutputReference(this, "static_override");
    public get staticOverride() {
        return this._staticOverride;
    }
    public putStaticOverride(value: StaticOverrideProperty) {
        this._staticOverride.internalValue = value;
    }
    public resetStaticOverride() {
        this._staticOverride.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get staticOverrideInput() {
        return this._staticOverride.internalValue;
    }

    // weighted_override - computed: true, optional: true, required: false
    private _weightedOverride = new WeightedOverridePropertyOutputReference(this, "weighted_override");
    public get weightedOverride() {
        return this._weightedOverride;
    }
    public putWeightedOverride(value: WeightedOverrideProperty) {
        this._weightedOverride.internalValue = value;
    }
    public resetWeightedOverride() {
        this._weightedOverride.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weightedOverrideInput() {
        return this._weightedOverride.internalValue;
    }
}
export interface StaticRouteProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#target_name CcGatewayRule#target_name}
    */
    readonly targetName?: string;
}
export class StaticRoutePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StaticRouteProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetName !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetName = this._targetName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StaticRouteProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetName = value.targetName;
        }
    }

    // target_name - computed: true, optional: true, required: false
    private _targetName?: string; 
    public get targetName() {
        return this.getStringAttribute('target_name');
    }
    public set targetName(value: string) {
        this._targetName = value;
    }
    public resetTargetName() {
        this._targetName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetNameInput() {
        return this._targetName;
    }
}
export interface TargetTrafficSplitEntryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#description CcGatewayRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#metadata CcGatewayRule#metadata}
    */
    readonly metadata?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#name CcGatewayRule#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#target_name CcGatewayRule#target_name}
    */
    readonly targetName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#weight CcGatewayRule#weight}
    */
    readonly weight?: number;
}
export class TargetTrafficSplitEntryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetTrafficSplitEntryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._metadata !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadata = this._metadata;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._targetName !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetName = this._targetName;
        }
        if (this._weight !== undefined) {
            hasAnyValues = true;
            internalValueResult.weight = this._weight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetTrafficSplitEntryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._metadata = undefined;
            this._name = undefined;
            this._targetName = undefined;
            this._weight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._metadata = value.metadata;
            this._name = value.name;
            this._targetName = value.targetName;
            this._weight = value.weight;
        }
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

    // metadata - computed: true, optional: true, required: false
    private _metadata?: { [key: string]: string }; 
    public get metadata() {
        return this.getStringMapAttribute('metadata');
    }
    public set metadata(value: { [key: string]: string }) {
        this._metadata = value;
    }
    public resetMetadata() {
        this._metadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataInput() {
        return this._metadata;
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

    // target_name - computed: true, optional: true, required: false
    private _targetName?: string; 
    public get targetName() {
        return this.getStringAttribute('target_name');
    }
    public set targetName(value: string) {
        this._targetName = value;
    }
    public resetTargetName() {
        this._targetName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetNameInput() {
        return this._targetName;
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

export class TargetTrafficSplitEntryPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetTrafficSplitEntryProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetTrafficSplitEntryPropertyOutputReference {
        return new TargetTrafficSplitEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface WeightedRouteProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#traffic_split CcGatewayRule#traffic_split}
    */
    readonly trafficSplit?: TargetTrafficSplitEntryProperty[] | cdktn.IResolvable;
}
export class WeightedRoutePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WeightedRouteProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._trafficSplit?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trafficSplit = this._trafficSplit?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WeightedRouteProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._trafficSplit.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._trafficSplit.internalValue = value.trafficSplit;
        }
    }

    // traffic_split - computed: true, optional: true, required: false
    private _trafficSplit = new TargetTrafficSplitEntryPropertyList(this, "traffic_split", false);
    public get trafficSplit() {
        return this._trafficSplit;
    }
    public putTrafficSplit(value: TargetTrafficSplitEntryProperty[] | cdktn.IResolvable) {
        this._trafficSplit.internalValue = value;
    }
    public resetTrafficSplit() {
        this._trafficSplit.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficSplitInput() {
        return this._trafficSplit.internalValue;
    }
}
export interface RouteToTargetActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#static_route CcGatewayRule#static_route}
    */
    readonly staticRoute?: StaticRouteProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#weighted_route CcGatewayRule#weighted_route}
    */
    readonly weightedRoute?: WeightedRouteProperty;
}
export class RouteToTargetActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RouteToTargetActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._staticRoute?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.staticRoute = this._staticRoute?.internalValue;
        }
        if (this._weightedRoute?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.weightedRoute = this._weightedRoute?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RouteToTargetActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._staticRoute.internalValue = undefined;
            this._weightedRoute.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._staticRoute.internalValue = value.staticRoute;
            this._weightedRoute.internalValue = value.weightedRoute;
        }
    }

    // static_route - computed: true, optional: true, required: false
    private _staticRoute = new StaticRoutePropertyOutputReference(this, "static_route");
    public get staticRoute() {
        return this._staticRoute;
    }
    public putStaticRoute(value: StaticRouteProperty) {
        this._staticRoute.internalValue = value;
    }
    public resetStaticRoute() {
        this._staticRoute.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get staticRouteInput() {
        return this._staticRoute.internalValue;
    }

    // weighted_route - computed: true, optional: true, required: false
    private _weightedRoute = new WeightedRoutePropertyOutputReference(this, "weighted_route");
    public get weightedRoute() {
        return this._weightedRoute;
    }
    public putWeightedRoute(value: WeightedRouteProperty) {
        this._weightedRoute.internalValue = value;
    }
    public resetWeightedRoute() {
        this._weightedRoute.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weightedRouteInput() {
        return this._weightedRoute.internalValue;
    }
}
export interface ActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle CcGatewayRule#configuration_bundle}
    */
    readonly configurationBundle?: ConfigurationBundleActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#route_to_target CcGatewayRule#route_to_target}
    */
    readonly routeToTarget?: RouteToTargetActionProperty;
}
export class ActionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._configurationBundle?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.configurationBundle = this._configurationBundle?.internalValue;
        }
        if (this._routeToTarget?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.routeToTarget = this._routeToTarget?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._configurationBundle.internalValue = undefined;
            this._routeToTarget.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._configurationBundle.internalValue = value.configurationBundle;
            this._routeToTarget.internalValue = value.routeToTarget;
        }
    }

    // configuration_bundle - computed: true, optional: true, required: false
    private _configurationBundle = new ConfigurationBundleActionPropertyOutputReference(this, "configuration_bundle");
    public get configurationBundle() {
        return this._configurationBundle;
    }
    public putConfigurationBundle(value: ConfigurationBundleActionProperty) {
        this._configurationBundle.internalValue = value;
    }
    public resetConfigurationBundle() {
        this._configurationBundle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationBundleInput() {
        return this._configurationBundle.internalValue;
    }

    // route_to_target - computed: true, optional: true, required: false
    private _routeToTarget = new RouteToTargetActionPropertyOutputReference(this, "route_to_target");
    public get routeToTarget() {
        return this._routeToTarget;
    }
    public putRouteToTarget(value: RouteToTargetActionProperty) {
        this._routeToTarget.internalValue = value;
    }
    public resetRouteToTarget() {
        this._routeToTarget.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routeToTargetInput() {
        return this._routeToTarget.internalValue;
    }
}

export class ActionPropertyList extends cdktn.ComplexList {
    public internalValue? : ActionProperty[] | cdktn.IResolvable

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
    public get(index: number): ActionPropertyOutputReference {
        return new ActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MatchPathsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#any_of CcGatewayRule#any_of}
    */
    readonly anyOf?: string[];
}
export class MatchPathsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MatchPathsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._anyOf !== undefined) {
            hasAnyValues = true;
            internalValueResult.anyOf = this._anyOf;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MatchPathsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._anyOf = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._anyOf = value.anyOf;
        }
    }

    // any_of - computed: true, optional: true, required: false
    private _anyOf?: string[]; 
    public get anyOf() {
        return this.getListAttribute('any_of');
    }
    public set anyOf(value: string[]) {
        this._anyOf = value;
    }
    public resetAnyOf() {
        this._anyOf = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get anyOfInput() {
        return this._anyOf;
    }
}
export interface IamPrincipalProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#arn CcGatewayRule#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#operator CcGatewayRule#operator}
    */
    readonly operator?: string;
}
export class IamPrincipalPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IamPrincipalProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IamPrincipalProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
            this._operator = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
            this._operator = value.operator;
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

    // operator - computed: true, optional: true, required: false
    private _operator?: string; 
    public get operator() {
        return this.getStringAttribute('operator');
    }
    public set operator(value: string) {
        this._operator = value;
    }
    public resetOperator() {
        this._operator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatorInput() {
        return this._operator;
    }
}
export interface MatchPrincipalEntryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#iam_principal CcGatewayRule#iam_principal}
    */
    readonly iamPrincipal?: IamPrincipalProperty;
}
export class MatchPrincipalEntryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MatchPrincipalEntryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._iamPrincipal?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamPrincipal = this._iamPrincipal?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MatchPrincipalEntryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._iamPrincipal.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._iamPrincipal.internalValue = value.iamPrincipal;
        }
    }

    // iam_principal - computed: true, optional: true, required: false
    private _iamPrincipal = new IamPrincipalPropertyOutputReference(this, "iam_principal");
    public get iamPrincipal() {
        return this._iamPrincipal;
    }
    public putIamPrincipal(value: IamPrincipalProperty) {
        this._iamPrincipal.internalValue = value;
    }
    public resetIamPrincipal() {
        this._iamPrincipal.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamPrincipalInput() {
        return this._iamPrincipal.internalValue;
    }
}

export class MatchPrincipalEntryPropertyList extends cdktn.ComplexList {
    public internalValue? : MatchPrincipalEntryProperty[] | cdktn.IResolvable

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
    public get(index: number): MatchPrincipalEntryPropertyOutputReference {
        return new MatchPrincipalEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MatchPrincipalsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#any_of CcGatewayRule#any_of}
    */
    readonly anyOf?: MatchPrincipalEntryProperty[] | cdktn.IResolvable;
}
export class MatchPrincipalsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MatchPrincipalsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._anyOf?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.anyOf = this._anyOf?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MatchPrincipalsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._anyOf.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._anyOf.internalValue = value.anyOf;
        }
    }

    // any_of - computed: true, optional: true, required: false
    private _anyOf = new MatchPrincipalEntryPropertyList(this, "any_of", false);
    public get anyOf() {
        return this._anyOf;
    }
    public putAnyOf(value: MatchPrincipalEntryProperty[] | cdktn.IResolvable) {
        this._anyOf.internalValue = value;
    }
    public resetAnyOf() {
        this._anyOf.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get anyOfInput() {
        return this._anyOf.internalValue;
    }
}
export interface ConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#match_paths CcGatewayRule#match_paths}
    */
    readonly matchPaths?: MatchPathsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway_rule#match_principals CcGatewayRule#match_principals}
    */
    readonly matchPrincipals?: MatchPrincipalsProperty;
}
export class ConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._matchPaths?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchPaths = this._matchPaths?.internalValue;
        }
        if (this._matchPrincipals?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchPrincipals = this._matchPrincipals?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._matchPaths.internalValue = undefined;
            this._matchPrincipals.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._matchPaths.internalValue = value.matchPaths;
            this._matchPrincipals.internalValue = value.matchPrincipals;
        }
    }

    // match_paths - computed: true, optional: true, required: false
    private _matchPaths = new MatchPathsPropertyOutputReference(this, "match_paths");
    public get matchPaths() {
        return this._matchPaths;
    }
    public putMatchPaths(value: MatchPathsProperty) {
        this._matchPaths.internalValue = value;
    }
    public resetMatchPaths() {
        this._matchPaths.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchPathsInput() {
        return this._matchPaths.internalValue;
    }

    // match_principals - computed: true, optional: true, required: false
    private _matchPrincipals = new MatchPrincipalsPropertyOutputReference(this, "match_principals");
    public get matchPrincipals() {
        return this._matchPrincipals;
    }
    public putMatchPrincipals(value: MatchPrincipalsProperty) {
        this._matchPrincipals.internalValue = value;
    }
    public resetMatchPrincipals() {
        this._matchPrincipals.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchPrincipalsInput() {
        return this._matchPrincipals.internalValue;
    }
}

export class ConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : ConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): ConditionPropertyOutputReference {
        return new ConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
