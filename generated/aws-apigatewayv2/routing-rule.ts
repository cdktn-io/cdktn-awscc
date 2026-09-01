// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRoutingRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * The resulting action based on matching a routing rules condition. Only InvokeApi is supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#actions CcRoutingRule#actions}
    */
    readonly actions: CcRoutingRule.ActionProperty[] | cdktn.IResolvable;
    /**
    * The conditions of the routing rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#conditions CcRoutingRule#conditions}
    */
    readonly conditions: CcRoutingRule.ConditionProperty[] | cdktn.IResolvable;
    /**
    * The ARN of the domain name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#domain_name_arn CcRoutingRule#domain_name_arn}
    */
    readonly domainNameArn: string;
    /**
    * The order in which API Gateway evaluates a rule. Priority is evaluated from the lowest value to the highest value. Rules can't have the same priority. Priority values 1-1,000,000 are supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#priority CcRoutingRule#priority}
    */
    readonly priority: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule awscc_apigatewayv2_routing_rule}
*/
export class CcRoutingRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigatewayv2_routing_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRoutingRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRoutingRule to import
    * @param importFromId The id of the existing CcRoutingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRoutingRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigatewayv2_routing_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule awscc_apigatewayv2_routing_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRoutingRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcRoutingRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigatewayv2_routing_rule',
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
        this._actions.internalValue = config.actions;
        this._conditions.internalValue = config.conditions;
        this._domainNameArn = config.domainNameArn;
        this._priority = config.priority;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // actions - computed: false, optional: false, required: true
    private _actions = new CcRoutingRule.ActionPropertyList(this, "actions", false);
    public get actions() {
        return this._actions;
    }
    public putActions(value: CcRoutingRule.ActionProperty[] | cdktn.IResolvable) {
        this._actions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
    }

    // conditions - computed: false, optional: false, required: true
    private _conditions = new CcRoutingRule.ConditionPropertyList(this, "conditions", false);
    public get conditions() {
        return this._conditions;
    }
    public putConditions(value: CcRoutingRule.ConditionProperty[] | cdktn.IResolvable) {
        this._conditions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
        return this._conditions.internalValue;
    }

    // domain_name_arn - computed: false, optional: false, required: true
    private _domainNameArn?: string; 
    public get domainNameArn() {
        return this.getStringAttribute('domain_name_arn');
    }
    public set domainNameArn(value: string) {
        this._domainNameArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameArnInput() {
        return this._domainNameArn;
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

    // routing_rule_arn - computed: true, optional: false, required: false
    public get routingRuleArn() {
        return this.getStringAttribute('routing_rule_arn');
    }

    // routing_rule_id - computed: true, optional: false, required: false
    public get routingRuleId() {
        return this.getStringAttribute('routing_rule_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            actions: cdktn.listMapper(ccRoutingRuleActionPropertyToTerraform, false)(this._actions.internalValue),
            conditions: cdktn.listMapper(ccRoutingRuleConditionPropertyToTerraform, false)(this._conditions.internalValue),
            domain_name_arn: cdktn.stringToTerraform(this._domainNameArn),
            priority: cdktn.numberToTerraform(this._priority),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            actions: {
                value: cdktn.listMapperHcl(ccRoutingRuleActionPropertyToHclTerraform, false)(this._actions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRoutingRule.ActionPropertyList",
            },
            conditions: {
                value: cdktn.listMapperHcl(ccRoutingRuleConditionPropertyToHclTerraform, false)(this._conditions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRoutingRule.ConditionPropertyList",
            },
            domain_name_arn: {
                value: cdktn.stringToHclTerraform(this._domainNameArn),
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

export function ccRoutingRuleActionInvokeApiPropertyToTerraform(struct?: CcRoutingRule.ActionInvokeApiProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_id: cdktn.stringToTerraform(struct!.apiId),
        stage: cdktn.stringToTerraform(struct!.stage),
        strip_base_path: cdktn.booleanToTerraform(struct!.stripBasePath),
    }
}


export function ccRoutingRuleActionInvokeApiPropertyToHclTerraform(struct?: CcRoutingRule.ActionInvokeApiProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        api_id: {
            value: cdktn.stringToHclTerraform(struct!.apiId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stage: {
            value: cdktn.stringToHclTerraform(struct!.stage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        strip_base_path: {
            value: cdktn.booleanToHclTerraform(struct!.stripBasePath),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRoutingRuleActionPropertyToTerraform(struct?: CcRoutingRule.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        invoke_api: ccRoutingRuleActionInvokeApiPropertyToTerraform(struct!.invokeApi),
    }
}


export function ccRoutingRuleActionPropertyToHclTerraform(struct?: CcRoutingRule.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        invoke_api: {
            value: ccRoutingRuleActionInvokeApiPropertyToHclTerraform(struct!.invokeApi),
            isBlock: true,
            type: "struct",
            storageClassType: "ActionInvokeApiProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRoutingRuleMatchBasePathsPropertyToTerraform(struct?: CcRoutingRule.MatchBasePathsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        any_of: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.anyOf),
    }
}


export function ccRoutingRuleMatchBasePathsPropertyToHclTerraform(struct?: CcRoutingRule.MatchBasePathsProperty | cdktn.IResolvable): any {
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


export function ccRoutingRuleMatchHeaderValuePropertyToTerraform(struct?: CcRoutingRule.MatchHeaderValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header: cdktn.stringToTerraform(struct!.header),
        value_glob: cdktn.stringToTerraform(struct!.valueGlob),
    }
}


export function ccRoutingRuleMatchHeaderValuePropertyToHclTerraform(struct?: CcRoutingRule.MatchHeaderValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header: {
            value: cdktn.stringToHclTerraform(struct!.header),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value_glob: {
            value: cdktn.stringToHclTerraform(struct!.valueGlob),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRoutingRuleMatchHeadersPropertyToTerraform(struct?: CcRoutingRule.MatchHeadersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        any_of: cdktn.listMapper(ccRoutingRuleMatchHeaderValuePropertyToTerraform, false)(struct!.anyOf),
    }
}


export function ccRoutingRuleMatchHeadersPropertyToHclTerraform(struct?: CcRoutingRule.MatchHeadersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        any_of: {
            value: cdktn.listMapperHcl(ccRoutingRuleMatchHeaderValuePropertyToHclTerraform, false)(struct!.anyOf),
            isBlock: true,
            type: "list",
            storageClassType: "MatchHeaderValuePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRoutingRuleConditionPropertyToTerraform(struct?: CcRoutingRule.ConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        match_base_paths: ccRoutingRuleMatchBasePathsPropertyToTerraform(struct!.matchBasePaths),
        match_headers: ccRoutingRuleMatchHeadersPropertyToTerraform(struct!.matchHeaders),
    }
}


export function ccRoutingRuleConditionPropertyToHclTerraform(struct?: CcRoutingRule.ConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        match_base_paths: {
            value: ccRoutingRuleMatchBasePathsPropertyToHclTerraform(struct!.matchBasePaths),
            isBlock: true,
            type: "struct",
            storageClassType: "MatchBasePathsProperty",
        },
        match_headers: {
            value: ccRoutingRuleMatchHeadersPropertyToHclTerraform(struct!.matchHeaders),
            isBlock: true,
            type: "struct",
            storageClassType: "MatchHeadersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcRoutingRule {
export interface ActionInvokeApiProperty {
    /**
    * The API identifier of the target API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#api_id CcRoutingRule#api_id}
    */
    readonly apiId: string;
    /**
    * The name of the target stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#stage CcRoutingRule#stage}
    */
    readonly stage: string;
    /**
    * The strip base path setting. When true, API Gateway strips the incoming matched base path when forwarding the request to the target API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#strip_base_path CcRoutingRule#strip_base_path}
    */
    readonly stripBasePath?: boolean | cdktn.IResolvable;
}
export class ActionInvokeApiPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ActionInvokeApiProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiId !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiId = this._apiId;
        }
        if (this._stage !== undefined) {
            hasAnyValues = true;
            internalValueResult.stage = this._stage;
        }
        if (this._stripBasePath !== undefined) {
            hasAnyValues = true;
            internalValueResult.stripBasePath = this._stripBasePath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionInvokeApiProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiId = undefined;
            this._stage = undefined;
            this._stripBasePath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiId = value.apiId;
            this._stage = value.stage;
            this._stripBasePath = value.stripBasePath;
        }
    }

    // api_id - computed: false, optional: false, required: true
    private _apiId?: string; 
    public get apiId() {
        return this.getStringAttribute('api_id');
    }
    public set apiId(value: string) {
        this._apiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get apiIdInput() {
        return this._apiId;
    }

    // stage - computed: false, optional: false, required: true
    private _stage?: string; 
    public get stage() {
        return this.getStringAttribute('stage');
    }
    public set stage(value: string) {
        this._stage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stageInput() {
        return this._stage;
    }

    // strip_base_path - computed: true, optional: true, required: false
    private _stripBasePath?: boolean | cdktn.IResolvable; 
    public get stripBasePath() {
        return this.getBooleanAttribute('strip_base_path');
    }
    public set stripBasePath(value: boolean | cdktn.IResolvable) {
        this._stripBasePath = value;
    }
    public resetStripBasePath() {
        this._stripBasePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stripBasePathInput() {
        return this._stripBasePath;
    }
}
export interface ActionProperty {
    /**
    * Represents an InvokeApi action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#invoke_api CcRoutingRule#invoke_api}
    */
    readonly invokeApi: ActionInvokeApiProperty;
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
        if (this._invokeApi?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.invokeApi = this._invokeApi?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._invokeApi.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._invokeApi.internalValue = value.invokeApi;
        }
    }

    // invoke_api - computed: false, optional: false, required: true
    private _invokeApi = new ActionInvokeApiPropertyOutputReference(this, "invoke_api");
    public get invokeApi() {
        return this._invokeApi;
    }
    public putInvokeApi(value: ActionInvokeApiProperty) {
        this._invokeApi.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get invokeApiInput() {
        return this._invokeApi.internalValue;
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
export interface MatchBasePathsProperty {
    /**
    * The string of the case sensitive base path to be matched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#any_of CcRoutingRule#any_of}
    */
    readonly anyOf?: string[];
}
export class MatchBasePathsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MatchBasePathsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: MatchBasePathsProperty | cdktn.IResolvable | undefined) {
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
export interface MatchHeaderValueProperty {
    /**
    * The case insensitive header name to be matched. The header name must be less than 40 characters and the only allowed characters are ``a-z``, ``A-Z``, ``0-9``, and the following special characters: ``*?-!#$%&'.^_`|~.``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#header CcRoutingRule#header}
    */
    readonly header?: string;
    /**
    * The case sensitive header glob value to be matched against entire header value. The header glob value must be less than 128 characters and the only allowed characters are ``a-z``, ``A-Z``, ``0-9``, and the following special characters: ``*?-!#$%&'.^_`|~``. Wildcard matching is supported for header glob values but must be for ``*prefix-match``, ``suffix-match*``, or ``*infix*-match``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#value_glob CcRoutingRule#value_glob}
    */
    readonly valueGlob?: string;
}
export class MatchHeaderValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MatchHeaderValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._header !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header;
        }
        if (this._valueGlob !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueGlob = this._valueGlob;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MatchHeaderValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._header = undefined;
            this._valueGlob = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._header = value.header;
            this._valueGlob = value.valueGlob;
        }
    }

    // header - computed: true, optional: true, required: false
    private _header?: string; 
    public get header() {
        return this.getStringAttribute('header');
    }
    public set header(value: string) {
        this._header = value;
    }
    public resetHeader() {
        this._header = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
        return this._header;
    }

    // value_glob - computed: true, optional: true, required: false
    private _valueGlob?: string; 
    public get valueGlob() {
        return this.getStringAttribute('value_glob');
    }
    public set valueGlob(value: string) {
        this._valueGlob = value;
    }
    public resetValueGlob() {
        this._valueGlob = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueGlobInput() {
        return this._valueGlob;
    }
}

export class MatchHeaderValuePropertyList extends cdktn.ComplexList {
    public internalValue? : MatchHeaderValueProperty[] | cdktn.IResolvable

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
    public get(index: number): MatchHeaderValuePropertyOutputReference {
        return new MatchHeaderValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MatchHeadersProperty {
    /**
    * The header name and header value glob to be matched. The matchHeaders condition is matched if any of the header name and header value globs are matched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#any_of CcRoutingRule#any_of}
    */
    readonly anyOf?: MatchHeaderValueProperty[] | cdktn.IResolvable;
}
export class MatchHeadersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MatchHeadersProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: MatchHeadersProperty | cdktn.IResolvable | undefined) {
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
    private _anyOf = new MatchHeaderValuePropertyList(this, "any_of", false);
    public get anyOf() {
        return this._anyOf;
    }
    public putAnyOf(value: MatchHeaderValueProperty[] | cdktn.IResolvable) {
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
    * The base path to be matched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#match_base_paths CcRoutingRule#match_base_paths}
    */
    readonly matchBasePaths?: MatchBasePathsProperty;
    /**
    * The headers to be matched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#match_headers CcRoutingRule#match_headers}
    */
    readonly matchHeaders?: MatchHeadersProperty;
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
        if (this._matchBasePaths?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchBasePaths = this._matchBasePaths?.internalValue;
        }
        if (this._matchHeaders?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchHeaders = this._matchHeaders?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._matchBasePaths.internalValue = undefined;
            this._matchHeaders.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._matchBasePaths.internalValue = value.matchBasePaths;
            this._matchHeaders.internalValue = value.matchHeaders;
        }
    }

    // match_base_paths - computed: true, optional: true, required: false
    private _matchBasePaths = new MatchBasePathsPropertyOutputReference(this, "match_base_paths");
    public get matchBasePaths() {
        return this._matchBasePaths;
    }
    public putMatchBasePaths(value: MatchBasePathsProperty) {
        this._matchBasePaths.internalValue = value;
    }
    public resetMatchBasePaths() {
        this._matchBasePaths.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchBasePathsInput() {
        return this._matchBasePaths.internalValue;
    }

    // match_headers - computed: true, optional: true, required: false
    private _matchHeaders = new MatchHeadersPropertyOutputReference(this, "match_headers");
    public get matchHeaders() {
        return this._matchHeaders;
    }
    public putMatchHeaders(value: MatchHeadersProperty) {
        this._matchHeaders.internalValue = value;
    }
    public resetMatchHeaders() {
        this._matchHeaders.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchHeadersInput() {
        return this._matchHeaders.internalValue;
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
