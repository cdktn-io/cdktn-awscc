// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcListenerRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * The actions.
    *  The rule must include exactly one of the following types of actions: ``forward``, ``fixed-response``, or ``redirect``, and it must be the last action to be performed. If the rule is for an HTTPS listener, it can also optionally include an authentication action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#actions CcListenerRule#actions}
    */
    readonly actions: CcListenerRule.ActionProperty[] | cdktn.IResolvable;
    /**
    * The conditions.
    *  The rule can optionally include up to one of each of the following conditions: ``http-request-method``, ``host-header``, ``path-pattern``, and ``source-ip``. A rule can also optionally include one or more of each of the following conditions: ``http-header`` and ``query-string``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#conditions CcListenerRule#conditions}
    */
    readonly conditions: CcListenerRule.RuleConditionProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the listener.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#listener_arn CcListenerRule#listener_arn}
    */
    readonly listenerArn?: string;
    /**
    * The rule priority. A listener can't have multiple rules with the same priority.
    *  If you try to reorder rules by updating their priorities, do not specify a new priority if an existing rule already uses this priority, as this can cause an error. If you need to reuse a priority with a different rule, you must remove it as a priority first, and then specify it in a subsequent update.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#priority CcListenerRule#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#tags CcListenerRule#tags}
    */
    readonly tags?: CcListenerRule.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#transforms CcListenerRule#transforms}
    */
    readonly transforms?: CcListenerRule.TransformProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule awscc_elasticloadbalancingv2_listener_rule}
*/
export class CcListenerRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_elasticloadbalancingv2_listener_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcListenerRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcListenerRule to import
    * @param importFromId The id of the existing CcListenerRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcListenerRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticloadbalancingv2_listener_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule awscc_elasticloadbalancingv2_listener_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcListenerRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcListenerRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_elasticloadbalancingv2_listener_rule',
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
        this._listenerArn = config.listenerArn;
        this._priority = config.priority;
        this._tags.internalValue = config.tags;
        this._transforms.internalValue = config.transforms;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // actions - computed: false, optional: false, required: true
    private _actions = new CcListenerRule.ActionPropertyList(this, "actions", true);
    public get actions() {
        return this._actions;
    }
    public putActions(value: CcListenerRule.ActionProperty[] | cdktn.IResolvable) {
        this._actions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
    }

    // conditions - computed: false, optional: false, required: true
    private _conditions = new CcListenerRule.RuleConditionPropertyList(this, "conditions", true);
    public get conditions() {
        return this._conditions;
    }
    public putConditions(value: CcListenerRule.RuleConditionProperty[] | cdktn.IResolvable) {
        this._conditions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
        return this._conditions.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // is_default - computed: true, optional: false, required: false
    public get isDefault() {
        return this.getBooleanAttribute('is_default');
    }

    // listener_arn - computed: true, optional: true, required: false
    private _listenerArn?: string; 
    public get listenerArn() {
        return this.getStringAttribute('listener_arn');
    }
    public set listenerArn(value: string) {
        this._listenerArn = value;
    }
    public resetListenerArn() {
        this._listenerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get listenerArnInput() {
        return this._listenerArn;
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

    // rule_arn - computed: true, optional: false, required: false
    public get ruleArn() {
        return this.getStringAttribute('rule_arn');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcListenerRule.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcListenerRule.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // transforms - computed: true, optional: true, required: false
    private _transforms = new CcListenerRule.TransformPropertyList(this, "transforms", true);
    public get transforms() {
        return this._transforms;
    }
    public putTransforms(value: CcListenerRule.TransformProperty[] | cdktn.IResolvable) {
        this._transforms.internalValue = value;
    }
    public resetTransforms() {
        this._transforms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transformsInput() {
        return this._transforms.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            actions: cdktn.listMapper(ccListenerRuleActionPropertyToTerraform, false)(this._actions.internalValue),
            conditions: cdktn.listMapper(ccListenerRuleRuleConditionPropertyToTerraform, false)(this._conditions.internalValue),
            listener_arn: cdktn.stringToTerraform(this._listenerArn),
            priority: cdktn.numberToTerraform(this._priority),
            tags: cdktn.listMapper(ccListenerRuleTagPropertyToTerraform, false)(this._tags.internalValue),
            transforms: cdktn.listMapper(ccListenerRuleTransformPropertyToTerraform, false)(this._transforms.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            actions: {
                value: cdktn.listMapperHcl(ccListenerRuleActionPropertyToHclTerraform, false)(this._actions.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcListenerRule.ActionPropertyList",
            },
            conditions: {
                value: cdktn.listMapperHcl(ccListenerRuleRuleConditionPropertyToHclTerraform, false)(this._conditions.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcListenerRule.RuleConditionPropertyList",
            },
            listener_arn: {
                value: cdktn.stringToHclTerraform(this._listenerArn),
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
            tags: {
                value: cdktn.listMapperHcl(ccListenerRuleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcListenerRule.TagPropertyList",
            },
            transforms: {
                value: cdktn.listMapperHcl(ccListenerRuleTransformPropertyToHclTerraform, false)(this._transforms.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcListenerRule.TransformPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccListenerRuleAuthenticateCognitoConfigPropertyToTerraform(struct?: CcListenerRule.AuthenticateCognitoConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_request_extra_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.authenticationRequestExtraParams),
        on_unauthenticated_request: cdktn.stringToTerraform(struct!.onUnauthenticatedRequest),
        scope: cdktn.stringToTerraform(struct!.scope),
        session_cookie_name: cdktn.stringToTerraform(struct!.sessionCookieName),
        session_timeout: cdktn.numberToTerraform(struct!.sessionTimeout),
        user_pool_arn: cdktn.stringToTerraform(struct!.userPoolArn),
        user_pool_client_id: cdktn.stringToTerraform(struct!.userPoolClientId),
        user_pool_domain: cdktn.stringToTerraform(struct!.userPoolDomain),
    }
}


export function ccListenerRuleAuthenticateCognitoConfigPropertyToHclTerraform(struct?: CcListenerRule.AuthenticateCognitoConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authentication_request_extra_params: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.authenticationRequestExtraParams),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        on_unauthenticated_request: {
            value: cdktn.stringToHclTerraform(struct!.onUnauthenticatedRequest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope: {
            value: cdktn.stringToHclTerraform(struct!.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_cookie_name: {
            value: cdktn.stringToHclTerraform(struct!.sessionCookieName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_timeout: {
            value: cdktn.numberToHclTerraform(struct!.sessionTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        user_pool_arn: {
            value: cdktn.stringToHclTerraform(struct!.userPoolArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_pool_client_id: {
            value: cdktn.stringToHclTerraform(struct!.userPoolClientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_pool_domain: {
            value: cdktn.stringToHclTerraform(struct!.userPoolDomain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRuleAuthenticateOidcConfigPropertyToTerraform(struct?: CcListenerRule.AuthenticateOidcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_request_extra_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.authenticationRequestExtraParams),
        authorization_endpoint: cdktn.stringToTerraform(struct!.authorizationEndpoint),
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        issuer: cdktn.stringToTerraform(struct!.issuer),
        on_unauthenticated_request: cdktn.stringToTerraform(struct!.onUnauthenticatedRequest),
        scope: cdktn.stringToTerraform(struct!.scope),
        session_cookie_name: cdktn.stringToTerraform(struct!.sessionCookieName),
        session_timeout: cdktn.numberToTerraform(struct!.sessionTimeout),
        token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
        use_existing_client_secret: cdktn.booleanToTerraform(struct!.useExistingClientSecret),
        user_info_endpoint: cdktn.stringToTerraform(struct!.userInfoEndpoint),
    }
}


export function ccListenerRuleAuthenticateOidcConfigPropertyToHclTerraform(struct?: CcListenerRule.AuthenticateOidcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authentication_request_extra_params: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.authenticationRequestExtraParams),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        authorization_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.authorizationEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_id: {
            value: cdktn.stringToHclTerraform(struct!.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_secret: {
            value: cdktn.stringToHclTerraform(struct!.clientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        issuer: {
            value: cdktn.stringToHclTerraform(struct!.issuer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        on_unauthenticated_request: {
            value: cdktn.stringToHclTerraform(struct!.onUnauthenticatedRequest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope: {
            value: cdktn.stringToHclTerraform(struct!.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_cookie_name: {
            value: cdktn.stringToHclTerraform(struct!.sessionCookieName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_timeout: {
            value: cdktn.numberToHclTerraform(struct!.sessionTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        token_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_existing_client_secret: {
            value: cdktn.booleanToHclTerraform(struct!.useExistingClientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        user_info_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.userInfoEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRuleFixedResponseConfigPropertyToTerraform(struct?: CcListenerRule.FixedResponseConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_type: cdktn.stringToTerraform(struct!.contentType),
        message_body: cdktn.stringToTerraform(struct!.messageBody),
        status_code: cdktn.stringToTerraform(struct!.statusCode),
    }
}


export function ccListenerRuleFixedResponseConfigPropertyToHclTerraform(struct?: CcListenerRule.FixedResponseConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_body: {
            value: cdktn.stringToHclTerraform(struct!.messageBody),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status_code: {
            value: cdktn.stringToHclTerraform(struct!.statusCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRuleTargetGroupStickinessConfigPropertyToTerraform(struct?: CcListenerRule.TargetGroupStickinessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        duration_seconds: cdktn.numberToTerraform(struct!.durationSeconds),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccListenerRuleTargetGroupStickinessConfigPropertyToHclTerraform(struct?: CcListenerRule.TargetGroupStickinessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        duration_seconds: {
            value: cdktn.numberToHclTerraform(struct!.durationSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRuleTargetGroupTuplePropertyToTerraform(struct?: CcListenerRule.TargetGroupTupleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_group_arn: cdktn.stringToTerraform(struct!.targetGroupArn),
        weight: cdktn.numberToTerraform(struct!.weight),
    }
}


export function ccListenerRuleTargetGroupTuplePropertyToHclTerraform(struct?: CcListenerRule.TargetGroupTupleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetGroupArn),
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


export function ccListenerRuleForwardConfigPropertyToTerraform(struct?: CcListenerRule.ForwardConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_group_stickiness_config: ccListenerRuleTargetGroupStickinessConfigPropertyToTerraform(struct!.targetGroupStickinessConfig),
        target_groups: cdktn.listMapper(ccListenerRuleTargetGroupTuplePropertyToTerraform, false)(struct!.targetGroups),
    }
}


export function ccListenerRuleForwardConfigPropertyToHclTerraform(struct?: CcListenerRule.ForwardConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_group_stickiness_config: {
            value: ccListenerRuleTargetGroupStickinessConfigPropertyToHclTerraform(struct!.targetGroupStickinessConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "TargetGroupStickinessConfigProperty",
        },
        target_groups: {
            value: cdktn.listMapperHcl(ccListenerRuleTargetGroupTuplePropertyToHclTerraform, false)(struct!.targetGroups),
            isBlock: true,
            type: "set",
            storageClassType: "TargetGroupTuplePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRuleJwtValidationActionAdditionalClaimPropertyToTerraform(struct?: CcListenerRule.JwtValidationActionAdditionalClaimProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        format: cdktn.stringToTerraform(struct!.format),
        name: cdktn.stringToTerraform(struct!.name),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccListenerRuleJwtValidationActionAdditionalClaimPropertyToHclTerraform(struct?: CcListenerRule.JwtValidationActionAdditionalClaimProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        format: {
            value: cdktn.stringToHclTerraform(struct!.format),
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


export function ccListenerRuleJwtValidationConfigPropertyToTerraform(struct?: CcListenerRule.JwtValidationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_claims: cdktn.listMapper(ccListenerRuleJwtValidationActionAdditionalClaimPropertyToTerraform, false)(struct!.additionalClaims),
        issuer: cdktn.stringToTerraform(struct!.issuer),
        jwks_endpoint: cdktn.stringToTerraform(struct!.jwksEndpoint),
    }
}


export function ccListenerRuleJwtValidationConfigPropertyToHclTerraform(struct?: CcListenerRule.JwtValidationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_claims: {
            value: cdktn.listMapperHcl(ccListenerRuleJwtValidationActionAdditionalClaimPropertyToHclTerraform, false)(struct!.additionalClaims),
            isBlock: true,
            type: "list",
            storageClassType: "JwtValidationActionAdditionalClaimPropertyList",
        },
        issuer: {
            value: cdktn.stringToHclTerraform(struct!.issuer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        jwks_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.jwksEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRuleRedirectConfigPropertyToTerraform(struct?: CcListenerRule.RedirectConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        host: cdktn.stringToTerraform(struct!.host),
        path: cdktn.stringToTerraform(struct!.path),
        port: cdktn.stringToTerraform(struct!.port),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        query: cdktn.stringToTerraform(struct!.query),
        status_code: cdktn.stringToTerraform(struct!.statusCode),
    }
}


export function ccListenerRuleRedirectConfigPropertyToHclTerraform(struct?: CcListenerRule.RedirectConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.stringToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        query: {
            value: cdktn.stringToHclTerraform(struct!.query),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status_code: {
            value: cdktn.stringToHclTerraform(struct!.statusCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRuleActionPropertyToTerraform(struct?: CcListenerRule.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authenticate_cognito_config: ccListenerRuleAuthenticateCognitoConfigPropertyToTerraform(struct!.authenticateCognitoConfig),
        authenticate_oidc_config: ccListenerRuleAuthenticateOidcConfigPropertyToTerraform(struct!.authenticateOidcConfig),
        fixed_response_config: ccListenerRuleFixedResponseConfigPropertyToTerraform(struct!.fixedResponseConfig),
        forward_config: ccListenerRuleForwardConfigPropertyToTerraform(struct!.forwardConfig),
        jwt_validation_config: ccListenerRuleJwtValidationConfigPropertyToTerraform(struct!.jwtValidationConfig),
        order: cdktn.numberToTerraform(struct!.order),
        redirect_config: ccListenerRuleRedirectConfigPropertyToTerraform(struct!.redirectConfig),
        target_group_arn: cdktn.stringToTerraform(struct!.targetGroupArn),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccListenerRuleActionPropertyToHclTerraform(struct?: CcListenerRule.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authenticate_cognito_config: {
            value: ccListenerRuleAuthenticateCognitoConfigPropertyToHclTerraform(struct!.authenticateCognitoConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthenticateCognitoConfigProperty",
        },
        authenticate_oidc_config: {
            value: ccListenerRuleAuthenticateOidcConfigPropertyToHclTerraform(struct!.authenticateOidcConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthenticateOidcConfigProperty",
        },
        fixed_response_config: {
            value: ccListenerRuleFixedResponseConfigPropertyToHclTerraform(struct!.fixedResponseConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "FixedResponseConfigProperty",
        },
        forward_config: {
            value: ccListenerRuleForwardConfigPropertyToHclTerraform(struct!.forwardConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ForwardConfigProperty",
        },
        jwt_validation_config: {
            value: ccListenerRuleJwtValidationConfigPropertyToHclTerraform(struct!.jwtValidationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "JwtValidationConfigProperty",
        },
        order: {
            value: cdktn.numberToHclTerraform(struct!.order),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        redirect_config: {
            value: ccListenerRuleRedirectConfigPropertyToHclTerraform(struct!.redirectConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "RedirectConfigProperty",
        },
        target_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetGroupArn),
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


export function ccListenerRuleHostHeaderConfigPropertyToTerraform(struct?: CcListenerRule.HostHeaderConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        regex_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regexValues),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccListenerRuleHostHeaderConfigPropertyToHclTerraform(struct?: CcListenerRule.HostHeaderConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        regex_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regexValues),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRuleHttpHeaderConfigPropertyToTerraform(struct?: CcListenerRule.HttpHeaderConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        http_header_name: cdktn.stringToTerraform(struct!.httpHeaderName),
        regex_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regexValues),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccListenerRuleHttpHeaderConfigPropertyToHclTerraform(struct?: CcListenerRule.HttpHeaderConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        http_header_name: {
            value: cdktn.stringToHclTerraform(struct!.httpHeaderName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        regex_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regexValues),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRuleHttpRequestMethodConfigPropertyToTerraform(struct?: CcListenerRule.HttpRequestMethodConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccListenerRuleHttpRequestMethodConfigPropertyToHclTerraform(struct?: CcListenerRule.HttpRequestMethodConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRulePathPatternConfigPropertyToTerraform(struct?: CcListenerRule.PathPatternConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        regex_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regexValues),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccListenerRulePathPatternConfigPropertyToHclTerraform(struct?: CcListenerRule.PathPatternConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        regex_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regexValues),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRuleQueryStringKeyValuePropertyToTerraform(struct?: CcListenerRule.QueryStringKeyValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccListenerRuleQueryStringKeyValuePropertyToHclTerraform(struct?: CcListenerRule.QueryStringKeyValueProperty | cdktn.IResolvable): any {
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


export function ccListenerRuleQueryStringConfigPropertyToTerraform(struct?: CcListenerRule.QueryStringConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        values: cdktn.listMapper(ccListenerRuleQueryStringKeyValuePropertyToTerraform, false)(struct!.values),
    }
}


export function ccListenerRuleQueryStringConfigPropertyToHclTerraform(struct?: CcListenerRule.QueryStringConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        values: {
            value: cdktn.listMapperHcl(ccListenerRuleQueryStringKeyValuePropertyToHclTerraform, false)(struct!.values),
            isBlock: true,
            type: "set",
            storageClassType: "QueryStringKeyValuePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRuleSourceIpConfigPropertyToTerraform(struct?: CcListenerRule.SourceIpConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccListenerRuleSourceIpConfigPropertyToHclTerraform(struct?: CcListenerRule.SourceIpConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ip_address_type: {
            value: cdktn.stringToHclTerraform(struct!.ipAddressType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRuleRuleConditionPropertyToTerraform(struct?: CcListenerRule.RuleConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field: cdktn.stringToTerraform(struct!.field),
        host_header_config: ccListenerRuleHostHeaderConfigPropertyToTerraform(struct!.hostHeaderConfig),
        http_header_config: ccListenerRuleHttpHeaderConfigPropertyToTerraform(struct!.httpHeaderConfig),
        http_request_method_config: ccListenerRuleHttpRequestMethodConfigPropertyToTerraform(struct!.httpRequestMethodConfig),
        path_pattern_config: ccListenerRulePathPatternConfigPropertyToTerraform(struct!.pathPatternConfig),
        query_string_config: ccListenerRuleQueryStringConfigPropertyToTerraform(struct!.queryStringConfig),
        regex_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regexValues),
        source_ip_config: ccListenerRuleSourceIpConfigPropertyToTerraform(struct!.sourceIpConfig),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccListenerRuleRuleConditionPropertyToHclTerraform(struct?: CcListenerRule.RuleConditionProperty | cdktn.IResolvable): any {
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
        host_header_config: {
            value: ccListenerRuleHostHeaderConfigPropertyToHclTerraform(struct!.hostHeaderConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "HostHeaderConfigProperty",
        },
        http_header_config: {
            value: ccListenerRuleHttpHeaderConfigPropertyToHclTerraform(struct!.httpHeaderConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "HttpHeaderConfigProperty",
        },
        http_request_method_config: {
            value: ccListenerRuleHttpRequestMethodConfigPropertyToHclTerraform(struct!.httpRequestMethodConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "HttpRequestMethodConfigProperty",
        },
        path_pattern_config: {
            value: ccListenerRulePathPatternConfigPropertyToHclTerraform(struct!.pathPatternConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "PathPatternConfigProperty",
        },
        query_string_config: {
            value: ccListenerRuleQueryStringConfigPropertyToHclTerraform(struct!.queryStringConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "QueryStringConfigProperty",
        },
        regex_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regexValues),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        source_ip_config: {
            value: ccListenerRuleSourceIpConfigPropertyToHclTerraform(struct!.sourceIpConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SourceIpConfigProperty",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRuleTagPropertyToTerraform(struct?: CcListenerRule.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccListenerRuleTagPropertyToHclTerraform(struct?: CcListenerRule.TagProperty | cdktn.IResolvable): any {
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


export function ccListenerRuleRewriteConfigPropertyToTerraform(struct?: CcListenerRule.RewriteConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        regex: cdktn.stringToTerraform(struct!.regex),
        replace: cdktn.stringToTerraform(struct!.replace),
    }
}


export function ccListenerRuleRewriteConfigPropertyToHclTerraform(struct?: CcListenerRule.RewriteConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        regex: {
            value: cdktn.stringToHclTerraform(struct!.regex),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        replace: {
            value: cdktn.stringToHclTerraform(struct!.replace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRuleRewriteConfigObjectPropertyToTerraform(struct?: CcListenerRule.RewriteConfigObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rewrites: cdktn.listMapper(ccListenerRuleRewriteConfigPropertyToTerraform, false)(struct!.rewrites),
    }
}


export function ccListenerRuleRewriteConfigObjectPropertyToHclTerraform(struct?: CcListenerRule.RewriteConfigObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rewrites: {
            value: cdktn.listMapperHcl(ccListenerRuleRewriteConfigPropertyToHclTerraform, false)(struct!.rewrites),
            isBlock: true,
            type: "set",
            storageClassType: "RewriteConfigPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRuleRewritesPropertyToTerraform(struct?: CcListenerRule.RewritesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        regex: cdktn.stringToTerraform(struct!.regex),
        replace: cdktn.stringToTerraform(struct!.replace),
    }
}


export function ccListenerRuleRewritesPropertyToHclTerraform(struct?: CcListenerRule.RewritesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        regex: {
            value: cdktn.stringToHclTerraform(struct!.regex),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        replace: {
            value: cdktn.stringToHclTerraform(struct!.replace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRuleUrlRewriteConfigPropertyToTerraform(struct?: CcListenerRule.UrlRewriteConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rewrites: cdktn.listMapper(ccListenerRuleRewritesPropertyToTerraform, false)(struct!.rewrites),
    }
}


export function ccListenerRuleUrlRewriteConfigPropertyToHclTerraform(struct?: CcListenerRule.UrlRewriteConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rewrites: {
            value: cdktn.listMapperHcl(ccListenerRuleRewritesPropertyToHclTerraform, false)(struct!.rewrites),
            isBlock: true,
            type: "set",
            storageClassType: "RewritesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRuleTransformPropertyToTerraform(struct?: CcListenerRule.TransformProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        host_header_rewrite_config: ccListenerRuleRewriteConfigObjectPropertyToTerraform(struct!.hostHeaderRewriteConfig),
        type: cdktn.stringToTerraform(struct!.type),
        url_rewrite_config: ccListenerRuleUrlRewriteConfigPropertyToTerraform(struct!.urlRewriteConfig),
    }
}


export function ccListenerRuleTransformPropertyToHclTerraform(struct?: CcListenerRule.TransformProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        host_header_rewrite_config: {
            value: ccListenerRuleRewriteConfigObjectPropertyToHclTerraform(struct!.hostHeaderRewriteConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "RewriteConfigObjectProperty",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        url_rewrite_config: {
            value: ccListenerRuleUrlRewriteConfigPropertyToHclTerraform(struct!.urlRewriteConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "UrlRewriteConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcListenerRule {
export interface AuthenticateCognitoConfigProperty {
    /**
    * The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#authentication_request_extra_params CcListenerRule#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: { [key: string]: string };
    /**
    * The behavior if the user is not authenticated. The following are possible values:
    *   +  deny```` - Return an HTTP 401 Unauthorized error.
    *   +  allow```` - Allow the request to be forwarded to the target.
    *   +  authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#on_unauthenticated_request CcListenerRule#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * The set of user claims to be requested from the IdP. The default is ``openid``.
    *  To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#scope CcListenerRule#scope}
    */
    readonly scope?: string;
    /**
    * The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#session_cookie_name CcListenerRule#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#session_timeout CcListenerRule#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * The Amazon Resource Name (ARN) of the Amazon Cognito user pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#user_pool_arn CcListenerRule#user_pool_arn}
    */
    readonly userPoolArn?: string;
    /**
    * The ID of the Amazon Cognito user pool client.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#user_pool_client_id CcListenerRule#user_pool_client_id}
    */
    readonly userPoolClientId?: string;
    /**
    * The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#user_pool_domain CcListenerRule#user_pool_domain}
    */
    readonly userPoolDomain?: string;
}
export class AuthenticateCognitoConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthenticateCognitoConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationRequestExtraParams !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
        }
        if (this._onUnauthenticatedRequest !== undefined) {
            hasAnyValues = true;
            internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
        }
        if (this._scope !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        if (this._sessionCookieName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionCookieName = this._sessionCookieName;
        }
        if (this._sessionTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionTimeout = this._sessionTimeout;
        }
        if (this._userPoolArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPoolArn = this._userPoolArn;
        }
        if (this._userPoolClientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPoolClientId = this._userPoolClientId;
        }
        if (this._userPoolDomain !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPoolDomain = this._userPoolDomain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthenticateCognitoConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationRequestExtraParams = undefined;
            this._onUnauthenticatedRequest = undefined;
            this._scope = undefined;
            this._sessionCookieName = undefined;
            this._sessionTimeout = undefined;
            this._userPoolArn = undefined;
            this._userPoolClientId = undefined;
            this._userPoolDomain = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
            this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
            this._scope = value.scope;
            this._sessionCookieName = value.sessionCookieName;
            this._sessionTimeout = value.sessionTimeout;
            this._userPoolArn = value.userPoolArn;
            this._userPoolClientId = value.userPoolClientId;
            this._userPoolDomain = value.userPoolDomain;
        }
    }

    // authentication_request_extra_params - computed: true, optional: true, required: false
    private _authenticationRequestExtraParams?: { [key: string]: string }; 
    public get authenticationRequestExtraParams() {
        return this.getStringMapAttribute('authentication_request_extra_params');
    }
    public set authenticationRequestExtraParams(value: { [key: string]: string }) {
        this._authenticationRequestExtraParams = value;
    }
    public resetAuthenticationRequestExtraParams() {
        this._authenticationRequestExtraParams = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationRequestExtraParamsInput() {
        return this._authenticationRequestExtraParams;
    }

    // on_unauthenticated_request - computed: true, optional: true, required: false
    private _onUnauthenticatedRequest?: string; 
    public get onUnauthenticatedRequest() {
        return this.getStringAttribute('on_unauthenticated_request');
    }
    public set onUnauthenticatedRequest(value: string) {
        this._onUnauthenticatedRequest = value;
    }
    public resetOnUnauthenticatedRequest() {
        this._onUnauthenticatedRequest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onUnauthenticatedRequestInput() {
        return this._onUnauthenticatedRequest;
    }

    // scope - computed: true, optional: true, required: false
    private _scope?: string; 
    public get scope() {
        return this.getStringAttribute('scope');
    }
    public set scope(value: string) {
        this._scope = value;
    }
    public resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
        return this._scope;
    }

    // session_cookie_name - computed: true, optional: true, required: false
    private _sessionCookieName?: string; 
    public get sessionCookieName() {
        return this.getStringAttribute('session_cookie_name');
    }
    public set sessionCookieName(value: string) {
        this._sessionCookieName = value;
    }
    public resetSessionCookieName() {
        this._sessionCookieName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionCookieNameInput() {
        return this._sessionCookieName;
    }

    // session_timeout - computed: true, optional: true, required: false
    private _sessionTimeout?: number; 
    public get sessionTimeout() {
        return this.getNumberAttribute('session_timeout');
    }
    public set sessionTimeout(value: number) {
        this._sessionTimeout = value;
    }
    public resetSessionTimeout() {
        this._sessionTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionTimeoutInput() {
        return this._sessionTimeout;
    }

    // user_pool_arn - computed: true, optional: true, required: false
    private _userPoolArn?: string; 
    public get userPoolArn() {
        return this.getStringAttribute('user_pool_arn');
    }
    public set userPoolArn(value: string) {
        this._userPoolArn = value;
    }
    public resetUserPoolArn() {
        this._userPoolArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolArnInput() {
        return this._userPoolArn;
    }

    // user_pool_client_id - computed: true, optional: true, required: false
    private _userPoolClientId?: string; 
    public get userPoolClientId() {
        return this.getStringAttribute('user_pool_client_id');
    }
    public set userPoolClientId(value: string) {
        this._userPoolClientId = value;
    }
    public resetUserPoolClientId() {
        this._userPoolClientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolClientIdInput() {
        return this._userPoolClientId;
    }

    // user_pool_domain - computed: true, optional: true, required: false
    private _userPoolDomain?: string; 
    public get userPoolDomain() {
        return this.getStringAttribute('user_pool_domain');
    }
    public set userPoolDomain(value: string) {
        this._userPoolDomain = value;
    }
    public resetUserPoolDomain() {
        this._userPoolDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolDomainInput() {
        return this._userPoolDomain;
    }
}
export interface AuthenticateOidcConfigProperty {
    /**
    * The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#authentication_request_extra_params CcListenerRule#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: { [key: string]: string };
    /**
    * The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#authorization_endpoint CcListenerRule#authorization_endpoint}
    */
    readonly authorizationEndpoint?: string;
    /**
    * The OAuth 2.0 client identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#client_id CcListenerRule#client_id}
    */
    readonly clientId?: string;
    /**
    * The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#client_secret CcListenerRule#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#issuer CcListenerRule#issuer}
    */
    readonly issuer?: string;
    /**
    * The behavior if the user is not authenticated. The following are possible values:
    *   +  deny```` - Return an HTTP 401 Unauthorized error.
    *   +  allow```` - Allow the request to be forwarded to the target.
    *   +  authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#on_unauthenticated_request CcListenerRule#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * The set of user claims to be requested from the IdP. The default is ``openid``.
    *  To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#scope CcListenerRule#scope}
    */
    readonly scope?: string;
    /**
    * The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#session_cookie_name CcListenerRule#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#session_timeout CcListenerRule#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#token_endpoint CcListenerRule#token_endpoint}
    */
    readonly tokenEndpoint?: string;
    /**
    * Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#use_existing_client_secret CcListenerRule#use_existing_client_secret}
    */
    readonly useExistingClientSecret?: boolean | cdktn.IResolvable;
    /**
    * The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#user_info_endpoint CcListenerRule#user_info_endpoint}
    */
    readonly userInfoEndpoint?: string;
}
export class AuthenticateOidcConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthenticateOidcConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationRequestExtraParams !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
        }
        if (this._authorizationEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._issuer !== undefined) {
            hasAnyValues = true;
            internalValueResult.issuer = this._issuer;
        }
        if (this._onUnauthenticatedRequest !== undefined) {
            hasAnyValues = true;
            internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
        }
        if (this._scope !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        if (this._sessionCookieName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionCookieName = this._sessionCookieName;
        }
        if (this._sessionTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionTimeout = this._sessionTimeout;
        }
        if (this._tokenEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenEndpoint = this._tokenEndpoint;
        }
        if (this._useExistingClientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.useExistingClientSecret = this._useExistingClientSecret;
        }
        if (this._userInfoEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.userInfoEndpoint = this._userInfoEndpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthenticateOidcConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationRequestExtraParams = undefined;
            this._authorizationEndpoint = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._issuer = undefined;
            this._onUnauthenticatedRequest = undefined;
            this._scope = undefined;
            this._sessionCookieName = undefined;
            this._sessionTimeout = undefined;
            this._tokenEndpoint = undefined;
            this._useExistingClientSecret = undefined;
            this._userInfoEndpoint = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
            this._authorizationEndpoint = value.authorizationEndpoint;
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
            this._issuer = value.issuer;
            this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
            this._scope = value.scope;
            this._sessionCookieName = value.sessionCookieName;
            this._sessionTimeout = value.sessionTimeout;
            this._tokenEndpoint = value.tokenEndpoint;
            this._useExistingClientSecret = value.useExistingClientSecret;
            this._userInfoEndpoint = value.userInfoEndpoint;
        }
    }

    // authentication_request_extra_params - computed: true, optional: true, required: false
    private _authenticationRequestExtraParams?: { [key: string]: string }; 
    public get authenticationRequestExtraParams() {
        return this.getStringMapAttribute('authentication_request_extra_params');
    }
    public set authenticationRequestExtraParams(value: { [key: string]: string }) {
        this._authenticationRequestExtraParams = value;
    }
    public resetAuthenticationRequestExtraParams() {
        this._authenticationRequestExtraParams = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationRequestExtraParamsInput() {
        return this._authenticationRequestExtraParams;
    }

    // authorization_endpoint - computed: true, optional: true, required: false
    private _authorizationEndpoint?: string; 
    public get authorizationEndpoint() {
        return this.getStringAttribute('authorization_endpoint');
    }
    public set authorizationEndpoint(value: string) {
        this._authorizationEndpoint = value;
    }
    public resetAuthorizationEndpoint() {
        this._authorizationEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationEndpointInput() {
        return this._authorizationEndpoint;
    }

    // client_id - computed: true, optional: true, required: false
    private _clientId?: string; 
    public get clientId() {
        return this.getStringAttribute('client_id');
    }
    public set clientId(value: string) {
        this._clientId = value;
    }
    public resetClientId() {
        this._clientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
        return this._clientId;
    }

    // client_secret - computed: true, optional: true, required: false
    private _clientSecret?: string; 
    public get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    public set clientSecret(value: string) {
        this._clientSecret = value;
    }
    public resetClientSecret() {
        this._clientSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretInput() {
        return this._clientSecret;
    }

    // issuer - computed: true, optional: true, required: false
    private _issuer?: string; 
    public get issuer() {
        return this.getStringAttribute('issuer');
    }
    public set issuer(value: string) {
        this._issuer = value;
    }
    public resetIssuer() {
        this._issuer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get issuerInput() {
        return this._issuer;
    }

    // on_unauthenticated_request - computed: true, optional: true, required: false
    private _onUnauthenticatedRequest?: string; 
    public get onUnauthenticatedRequest() {
        return this.getStringAttribute('on_unauthenticated_request');
    }
    public set onUnauthenticatedRequest(value: string) {
        this._onUnauthenticatedRequest = value;
    }
    public resetOnUnauthenticatedRequest() {
        this._onUnauthenticatedRequest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onUnauthenticatedRequestInput() {
        return this._onUnauthenticatedRequest;
    }

    // scope - computed: true, optional: true, required: false
    private _scope?: string; 
    public get scope() {
        return this.getStringAttribute('scope');
    }
    public set scope(value: string) {
        this._scope = value;
    }
    public resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
        return this._scope;
    }

    // session_cookie_name - computed: true, optional: true, required: false
    private _sessionCookieName?: string; 
    public get sessionCookieName() {
        return this.getStringAttribute('session_cookie_name');
    }
    public set sessionCookieName(value: string) {
        this._sessionCookieName = value;
    }
    public resetSessionCookieName() {
        this._sessionCookieName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionCookieNameInput() {
        return this._sessionCookieName;
    }

    // session_timeout - computed: true, optional: true, required: false
    private _sessionTimeout?: number; 
    public get sessionTimeout() {
        return this.getNumberAttribute('session_timeout');
    }
    public set sessionTimeout(value: number) {
        this._sessionTimeout = value;
    }
    public resetSessionTimeout() {
        this._sessionTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionTimeoutInput() {
        return this._sessionTimeout;
    }

    // token_endpoint - computed: true, optional: true, required: false
    private _tokenEndpoint?: string; 
    public get tokenEndpoint() {
        return this.getStringAttribute('token_endpoint');
    }
    public set tokenEndpoint(value: string) {
        this._tokenEndpoint = value;
    }
    public resetTokenEndpoint() {
        this._tokenEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenEndpointInput() {
        return this._tokenEndpoint;
    }

    // use_existing_client_secret - computed: true, optional: true, required: false
    private _useExistingClientSecret?: boolean | cdktn.IResolvable; 
    public get useExistingClientSecret() {
        return this.getBooleanAttribute('use_existing_client_secret');
    }
    public set useExistingClientSecret(value: boolean | cdktn.IResolvable) {
        this._useExistingClientSecret = value;
    }
    public resetUseExistingClientSecret() {
        this._useExistingClientSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useExistingClientSecretInput() {
        return this._useExistingClientSecret;
    }

    // user_info_endpoint - computed: true, optional: true, required: false
    private _userInfoEndpoint?: string; 
    public get userInfoEndpoint() {
        return this.getStringAttribute('user_info_endpoint');
    }
    public set userInfoEndpoint(value: string) {
        this._userInfoEndpoint = value;
    }
    public resetUserInfoEndpoint() {
        this._userInfoEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userInfoEndpointInput() {
        return this._userInfoEndpoint;
    }
}
export interface FixedResponseConfigProperty {
    /**
    * The content type.
    *  Valid Values: text/plain | text/css | text/html | application/javascript | application/json
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#content_type CcListenerRule#content_type}
    */
    readonly contentType?: string;
    /**
    * The message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#message_body CcListenerRule#message_body}
    */
    readonly messageBody?: string;
    /**
    * The HTTP response code (2XX, 4XX, or 5XX).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#status_code CcListenerRule#status_code}
    */
    readonly statusCode?: string;
}
export class FixedResponseConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FixedResponseConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._messageBody !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageBody = this._messageBody;
        }
        if (this._statusCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FixedResponseConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentType = undefined;
            this._messageBody = undefined;
            this._statusCode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentType = value.contentType;
            this._messageBody = value.messageBody;
            this._statusCode = value.statusCode;
        }
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // message_body - computed: true, optional: true, required: false
    private _messageBody?: string; 
    public get messageBody() {
        return this.getStringAttribute('message_body');
    }
    public set messageBody(value: string) {
        this._messageBody = value;
    }
    public resetMessageBody() {
        this._messageBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageBodyInput() {
        return this._messageBody;
    }

    // status_code - computed: true, optional: true, required: false
    private _statusCode?: string; 
    public get statusCode() {
        return this.getStringAttribute('status_code');
    }
    public set statusCode(value: string) {
        this._statusCode = value;
    }
    public resetStatusCode() {
        this._statusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusCodeInput() {
        return this._statusCode;
    }
}
export interface TargetGroupStickinessConfigProperty {
    /**
    * [Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days). You must specify this value when enabling target group stickiness.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#duration_seconds CcListenerRule#duration_seconds}
    */
    readonly durationSeconds?: number;
    /**
    * Indicates whether target group stickiness is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#enabled CcListenerRule#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class TargetGroupStickinessConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetGroupStickinessConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._durationSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.durationSeconds = this._durationSeconds;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetGroupStickinessConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._durationSeconds = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._durationSeconds = value.durationSeconds;
            this._enabled = value.enabled;
        }
    }

    // duration_seconds - computed: true, optional: true, required: false
    private _durationSeconds?: number; 
    public get durationSeconds() {
        return this.getNumberAttribute('duration_seconds');
    }
    public set durationSeconds(value: number) {
        this._durationSeconds = value;
    }
    public resetDurationSeconds() {
        this._durationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationSecondsInput() {
        return this._durationSeconds;
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface TargetGroupTupleProperty {
    /**
    * The Amazon Resource Name (ARN) of the target group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#target_group_arn CcListenerRule#target_group_arn}
    */
    readonly targetGroupArn?: string;
    /**
    * The weight. The range is 0 to 999.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#weight CcListenerRule#weight}
    */
    readonly weight?: number;
}
export class TargetGroupTuplePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetGroupTupleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroupArn = this._targetGroupArn;
        }
        if (this._weight !== undefined) {
            hasAnyValues = true;
            internalValueResult.weight = this._weight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetGroupTupleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetGroupArn = undefined;
            this._weight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetGroupArn = value.targetGroupArn;
            this._weight = value.weight;
        }
    }

    // target_group_arn - computed: true, optional: true, required: false
    private _targetGroupArn?: string; 
    public get targetGroupArn() {
        return this.getStringAttribute('target_group_arn');
    }
    public set targetGroupArn(value: string) {
        this._targetGroupArn = value;
    }
    public resetTargetGroupArn() {
        this._targetGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupArnInput() {
        return this._targetGroupArn;
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

export class TargetGroupTuplePropertyList extends cdktn.ComplexList {
    public internalValue? : TargetGroupTupleProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetGroupTuplePropertyOutputReference {
        return new TargetGroupTuplePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ForwardConfigProperty {
    /**
    * Information about the target group stickiness for a rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#target_group_stickiness_config CcListenerRule#target_group_stickiness_config}
    */
    readonly targetGroupStickinessConfig?: TargetGroupStickinessConfigProperty;
    /**
    * Information about how traffic will be distributed between multiple target groups in a forward rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#target_groups CcListenerRule#target_groups}
    */
    readonly targetGroups?: TargetGroupTupleProperty[] | cdktn.IResolvable;
}
export class ForwardConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ForwardConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetGroupStickinessConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroupStickinessConfig = this._targetGroupStickinessConfig?.internalValue;
        }
        if (this._targetGroups?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroups = this._targetGroups?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetGroupStickinessConfig.internalValue = undefined;
            this._targetGroups.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetGroupStickinessConfig.internalValue = value.targetGroupStickinessConfig;
            this._targetGroups.internalValue = value.targetGroups;
        }
    }

    // target_group_stickiness_config - computed: true, optional: true, required: false
    private _targetGroupStickinessConfig = new TargetGroupStickinessConfigPropertyOutputReference(this, "target_group_stickiness_config");
    public get targetGroupStickinessConfig() {
        return this._targetGroupStickinessConfig;
    }
    public putTargetGroupStickinessConfig(value: TargetGroupStickinessConfigProperty) {
        this._targetGroupStickinessConfig.internalValue = value;
    }
    public resetTargetGroupStickinessConfig() {
        this._targetGroupStickinessConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupStickinessConfigInput() {
        return this._targetGroupStickinessConfig.internalValue;
    }

    // target_groups - computed: true, optional: true, required: false
    private _targetGroups = new TargetGroupTuplePropertyList(this, "target_groups", true);
    public get targetGroups() {
        return this._targetGroups;
    }
    public putTargetGroups(value: TargetGroupTupleProperty[] | cdktn.IResolvable) {
        this._targetGroups.internalValue = value;
    }
    public resetTargetGroups() {
        this._targetGroups.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupsInput() {
        return this._targetGroups.internalValue;
    }
}
export interface JwtValidationActionAdditionalClaimProperty {
    /**
    * The format of the claim value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#format CcListenerRule#format}
    */
    readonly format?: string;
    /**
    * The name of the claim. You can't specify ``exp``, ``iss``, ``nbf``, or ``iat`` because we validate them by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#name CcListenerRule#name}
    */
    readonly name?: string;
    /**
    * The claim value. The maximum size of the list is 10. Each value can be up to 256 characters in length. If the format is ``space-separated-values``, the values can't include spaces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#values CcListenerRule#values}
    */
    readonly values?: string[];
}
export class JwtValidationActionAdditionalClaimPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): JwtValidationActionAdditionalClaimProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JwtValidationActionAdditionalClaimProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._format = undefined;
            this._name = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._format = value.format;
            this._name = value.name;
            this._values = value.values;
        }
    }

    // format - computed: true, optional: true, required: false
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    public resetFormat() {
        this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
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

export class JwtValidationActionAdditionalClaimPropertyList extends cdktn.ComplexList {
    public internalValue? : JwtValidationActionAdditionalClaimProperty[] | cdktn.IResolvable

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
    public get(index: number): JwtValidationActionAdditionalClaimPropertyOutputReference {
        return new JwtValidationActionAdditionalClaimPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface JwtValidationConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#additional_claims CcListenerRule#additional_claims}
    */
    readonly additionalClaims?: JwtValidationActionAdditionalClaimProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#issuer CcListenerRule#issuer}
    */
    readonly issuer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#jwks_endpoint CcListenerRule#jwks_endpoint}
    */
    readonly jwksEndpoint?: string;
}
export class JwtValidationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JwtValidationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalClaims?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalClaims = this._additionalClaims?.internalValue;
        }
        if (this._issuer !== undefined) {
            hasAnyValues = true;
            internalValueResult.issuer = this._issuer;
        }
        if (this._jwksEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.jwksEndpoint = this._jwksEndpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JwtValidationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalClaims.internalValue = undefined;
            this._issuer = undefined;
            this._jwksEndpoint = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalClaims.internalValue = value.additionalClaims;
            this._issuer = value.issuer;
            this._jwksEndpoint = value.jwksEndpoint;
        }
    }

    // additional_claims - computed: true, optional: true, required: false
    private _additionalClaims = new JwtValidationActionAdditionalClaimPropertyList(this, "additional_claims", false);
    public get additionalClaims() {
        return this._additionalClaims;
    }
    public putAdditionalClaims(value: JwtValidationActionAdditionalClaimProperty[] | cdktn.IResolvable) {
        this._additionalClaims.internalValue = value;
    }
    public resetAdditionalClaims() {
        this._additionalClaims.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalClaimsInput() {
        return this._additionalClaims.internalValue;
    }

    // issuer - computed: true, optional: true, required: false
    private _issuer?: string; 
    public get issuer() {
        return this.getStringAttribute('issuer');
    }
    public set issuer(value: string) {
        this._issuer = value;
    }
    public resetIssuer() {
        this._issuer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get issuerInput() {
        return this._issuer;
    }

    // jwks_endpoint - computed: true, optional: true, required: false
    private _jwksEndpoint?: string; 
    public get jwksEndpoint() {
        return this.getStringAttribute('jwks_endpoint');
    }
    public set jwksEndpoint(value: string) {
        this._jwksEndpoint = value;
    }
    public resetJwksEndpoint() {
        this._jwksEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jwksEndpointInput() {
        return this._jwksEndpoint;
    }
}
export interface RedirectConfigProperty {
    /**
    * The hostname. This component is not percent-encoded. The hostname can contain #{host}.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#host CcListenerRule#host}
    */
    readonly host?: string;
    /**
    * The absolute path, starting with the leading "/". This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#path CcListenerRule#path}
    */
    readonly path?: string;
    /**
    * The port. You can specify a value from 1 to 65535 or #{port}.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#port CcListenerRule#port}
    */
    readonly port?: string;
    /**
    * The protocol. You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You can't redirect HTTPS to HTTP.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#protocol CcListenerRule#protocol}
    */
    readonly protocol?: string;
    /**
    * The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#query CcListenerRule#query}
    */
    readonly query?: string;
    /**
    * The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#status_code CcListenerRule#status_code}
    */
    readonly statusCode?: string;
}
export class RedirectConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedirectConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._query !== undefined) {
            hasAnyValues = true;
            internalValueResult.query = this._query;
        }
        if (this._statusCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedirectConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._host = undefined;
            this._path = undefined;
            this._port = undefined;
            this._protocol = undefined;
            this._query = undefined;
            this._statusCode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._host = value.host;
            this._path = value.path;
            this._port = value.port;
            this._protocol = value.protocol;
            this._query = value.query;
            this._statusCode = value.statusCode;
        }
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }

    // port - computed: true, optional: true, required: false
    private _port?: string; 
    public get port() {
        return this.getStringAttribute('port');
    }
    public set port(value: string) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // query - computed: true, optional: true, required: false
    private _query?: string; 
    public get query() {
        return this.getStringAttribute('query');
    }
    public set query(value: string) {
        this._query = value;
    }
    public resetQuery() {
        this._query = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryInput() {
        return this._query;
    }

    // status_code - computed: true, optional: true, required: false
    private _statusCode?: string; 
    public get statusCode() {
        return this.getStringAttribute('status_code');
    }
    public set statusCode(value: string) {
        this._statusCode = value;
    }
    public resetStatusCode() {
        this._statusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusCodeInput() {
        return this._statusCode;
    }
}
export interface ActionProperty {
    /**
    * [HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#authenticate_cognito_config CcListenerRule#authenticate_cognito_config}
    */
    readonly authenticateCognitoConfig?: AuthenticateCognitoConfigProperty;
    /**
    * [HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when ``Type`` is ``authenticate-oidc``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#authenticate_oidc_config CcListenerRule#authenticate_oidc_config}
    */
    readonly authenticateOidcConfig?: AuthenticateOidcConfigProperty;
    /**
    * [Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when ``Type`` is ``fixed-response``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#fixed_response_config CcListenerRule#fixed_response_config}
    */
    readonly fixedResponseConfig?: FixedResponseConfigProperty;
    /**
    * Information for creating an action that distributes requests among multiple target groups. Specify only when ``Type`` is ``forward``.
    *  If you specify both ``ForwardConfig`` and ``TargetGroupArn``, you can specify only one target group using ``ForwardConfig`` and it must be the same target group specified in ``TargetGroupArn``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#forward_config CcListenerRule#forward_config}
    */
    readonly forwardConfig?: ForwardConfigProperty;
    /**
    * [HTTPS listeners] Information for validating JWT access tokens in client requests. Specify only when ``Type`` is ``jwt-validation``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#jwt_validation_config CcListenerRule#jwt_validation_config}
    */
    readonly jwtValidationConfig?: JwtValidationConfigProperty;
    /**
    * The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#order CcListenerRule#order}
    */
    readonly order?: number;
    /**
    * [Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#redirect_config CcListenerRule#redirect_config}
    */
    readonly redirectConfig?: RedirectConfigProperty;
    /**
    * The Amazon Resource Name (ARN) of the target group. Specify only when ``Type`` is ``forward`` and you want to route to a single target group. To route to multiple target groups, you must use ``ForwardConfig`` instead.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#target_group_arn CcListenerRule#target_group_arn}
    */
    readonly targetGroupArn?: string;
    /**
    * The type of action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#type CcListenerRule#type}
    */
    readonly type: string;
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
        if (this._authenticateCognitoConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticateCognitoConfig = this._authenticateCognitoConfig?.internalValue;
        }
        if (this._authenticateOidcConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticateOidcConfig = this._authenticateOidcConfig?.internalValue;
        }
        if (this._fixedResponseConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fixedResponseConfig = this._fixedResponseConfig?.internalValue;
        }
        if (this._forwardConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.forwardConfig = this._forwardConfig?.internalValue;
        }
        if (this._jwtValidationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jwtValidationConfig = this._jwtValidationConfig?.internalValue;
        }
        if (this._order !== undefined) {
            hasAnyValues = true;
            internalValueResult.order = this._order;
        }
        if (this._redirectConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirectConfig = this._redirectConfig?.internalValue;
        }
        if (this._targetGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroupArn = this._targetGroupArn;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticateCognitoConfig.internalValue = undefined;
            this._authenticateOidcConfig.internalValue = undefined;
            this._fixedResponseConfig.internalValue = undefined;
            this._forwardConfig.internalValue = undefined;
            this._jwtValidationConfig.internalValue = undefined;
            this._order = undefined;
            this._redirectConfig.internalValue = undefined;
            this._targetGroupArn = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticateCognitoConfig.internalValue = value.authenticateCognitoConfig;
            this._authenticateOidcConfig.internalValue = value.authenticateOidcConfig;
            this._fixedResponseConfig.internalValue = value.fixedResponseConfig;
            this._forwardConfig.internalValue = value.forwardConfig;
            this._jwtValidationConfig.internalValue = value.jwtValidationConfig;
            this._order = value.order;
            this._redirectConfig.internalValue = value.redirectConfig;
            this._targetGroupArn = value.targetGroupArn;
            this._type = value.type;
        }
    }

    // authenticate_cognito_config - computed: true, optional: true, required: false
    private _authenticateCognitoConfig = new AuthenticateCognitoConfigPropertyOutputReference(this, "authenticate_cognito_config");
    public get authenticateCognitoConfig() {
        return this._authenticateCognitoConfig;
    }
    public putAuthenticateCognitoConfig(value: AuthenticateCognitoConfigProperty) {
        this._authenticateCognitoConfig.internalValue = value;
    }
    public resetAuthenticateCognitoConfig() {
        this._authenticateCognitoConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticateCognitoConfigInput() {
        return this._authenticateCognitoConfig.internalValue;
    }

    // authenticate_oidc_config - computed: true, optional: true, required: false
    private _authenticateOidcConfig = new AuthenticateOidcConfigPropertyOutputReference(this, "authenticate_oidc_config");
    public get authenticateOidcConfig() {
        return this._authenticateOidcConfig;
    }
    public putAuthenticateOidcConfig(value: AuthenticateOidcConfigProperty) {
        this._authenticateOidcConfig.internalValue = value;
    }
    public resetAuthenticateOidcConfig() {
        this._authenticateOidcConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticateOidcConfigInput() {
        return this._authenticateOidcConfig.internalValue;
    }

    // fixed_response_config - computed: true, optional: true, required: false
    private _fixedResponseConfig = new FixedResponseConfigPropertyOutputReference(this, "fixed_response_config");
    public get fixedResponseConfig() {
        return this._fixedResponseConfig;
    }
    public putFixedResponseConfig(value: FixedResponseConfigProperty) {
        this._fixedResponseConfig.internalValue = value;
    }
    public resetFixedResponseConfig() {
        this._fixedResponseConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fixedResponseConfigInput() {
        return this._fixedResponseConfig.internalValue;
    }

    // forward_config - computed: true, optional: true, required: false
    private _forwardConfig = new ForwardConfigPropertyOutputReference(this, "forward_config");
    public get forwardConfig() {
        return this._forwardConfig;
    }
    public putForwardConfig(value: ForwardConfigProperty) {
        this._forwardConfig.internalValue = value;
    }
    public resetForwardConfig() {
        this._forwardConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forwardConfigInput() {
        return this._forwardConfig.internalValue;
    }

    // jwt_validation_config - computed: true, optional: true, required: false
    private _jwtValidationConfig = new JwtValidationConfigPropertyOutputReference(this, "jwt_validation_config");
    public get jwtValidationConfig() {
        return this._jwtValidationConfig;
    }
    public putJwtValidationConfig(value: JwtValidationConfigProperty) {
        this._jwtValidationConfig.internalValue = value;
    }
    public resetJwtValidationConfig() {
        this._jwtValidationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jwtValidationConfigInput() {
        return this._jwtValidationConfig.internalValue;
    }

    // order - computed: true, optional: true, required: false
    private _order?: number; 
    public get order() {
        return this.getNumberAttribute('order');
    }
    public set order(value: number) {
        this._order = value;
    }
    public resetOrder() {
        this._order = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orderInput() {
        return this._order;
    }

    // redirect_config - computed: true, optional: true, required: false
    private _redirectConfig = new RedirectConfigPropertyOutputReference(this, "redirect_config");
    public get redirectConfig() {
        return this._redirectConfig;
    }
    public putRedirectConfig(value: RedirectConfigProperty) {
        this._redirectConfig.internalValue = value;
    }
    public resetRedirectConfig() {
        this._redirectConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redirectConfigInput() {
        return this._redirectConfig.internalValue;
    }

    // target_group_arn - computed: true, optional: true, required: false
    private _targetGroupArn?: string; 
    public get targetGroupArn() {
        return this.getStringAttribute('target_group_arn');
    }
    public set targetGroupArn(value: string) {
        this._targetGroupArn = value;
    }
    public resetTargetGroupArn() {
        this._targetGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupArnInput() {
        return this._targetGroupArn;
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
export interface HostHeaderConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#regex_values CcListenerRule#regex_values}
    */
    readonly regexValues?: string[];
    /**
    * The host names. The maximum length of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). You must include at least one "." character. You can include only alphabetical characters after the final "." character.
    *  If you specify multiple strings, the condition is satisfied if one of the strings matches the host name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#values CcListenerRule#values}
    */
    readonly values?: string[];
}
export class HostHeaderConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HostHeaderConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._regexValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.regexValues = this._regexValues;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HostHeaderConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._regexValues = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._regexValues = value.regexValues;
            this._values = value.values;
        }
    }

    // regex_values - computed: true, optional: true, required: false
    private _regexValues?: string[]; 
    public get regexValues() {
        return cdktn.Fn.tolist(this.getListAttribute('regex_values'));
    }
    public set regexValues(value: string[]) {
        this._regexValues = value;
    }
    public resetRegexValues() {
        this._regexValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexValuesInput() {
        return this._regexValues;
    }

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return cdktn.Fn.tolist(this.getListAttribute('values'));
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
export interface HttpHeaderConfigProperty {
    /**
    * The name of the HTTP header field. The maximum size is 40 characters. The header name is case insensitive. The allowed characters are specified by RFC 7230. Wildcards are not supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#http_header_name CcListenerRule#http_header_name}
    */
    readonly httpHeaderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#regex_values CcListenerRule#regex_values}
    */
    readonly regexValues?: string[];
    /**
    * The strings to compare against the value of the HTTP header. The maximum length of each string is 128 characters. The comparison strings are case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
    *  If the same header appears multiple times in the request, we search them in order until a match is found.
    *  If you specify multiple strings, the condition is satisfied if one of the strings matches the value of the HTTP header. To require that all of the strings are a match, create one condition per string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#values CcListenerRule#values}
    */
    readonly values?: string[];
}
export class HttpHeaderConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HttpHeaderConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._httpHeaderName !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpHeaderName = this._httpHeaderName;
        }
        if (this._regexValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.regexValues = this._regexValues;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HttpHeaderConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._httpHeaderName = undefined;
            this._regexValues = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._httpHeaderName = value.httpHeaderName;
            this._regexValues = value.regexValues;
            this._values = value.values;
        }
    }

    // http_header_name - computed: true, optional: true, required: false
    private _httpHeaderName?: string; 
    public get httpHeaderName() {
        return this.getStringAttribute('http_header_name');
    }
    public set httpHeaderName(value: string) {
        this._httpHeaderName = value;
    }
    public resetHttpHeaderName() {
        this._httpHeaderName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpHeaderNameInput() {
        return this._httpHeaderName;
    }

    // regex_values - computed: true, optional: true, required: false
    private _regexValues?: string[]; 
    public get regexValues() {
        return cdktn.Fn.tolist(this.getListAttribute('regex_values'));
    }
    public set regexValues(value: string[]) {
        this._regexValues = value;
    }
    public resetRegexValues() {
        this._regexValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexValuesInput() {
        return this._regexValues;
    }

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return cdktn.Fn.tolist(this.getListAttribute('values'));
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
export interface HttpRequestMethodConfigProperty {
    /**
    * The name of the request method. The maximum length is 40 characters. The allowed characters are A-Z, hyphen (-), and underscore (_). The comparison is case sensitive. Wildcards are not supported; therefore, the method name must be an exact match.
    *  If you specify multiple strings, the condition is satisfied if one of the strings matches the HTTP request method. We recommend that you route GET and HEAD requests in the same way, because the response to a HEAD request may be cached.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#values CcListenerRule#values}
    */
    readonly values?: string[];
}
export class HttpRequestMethodConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HttpRequestMethodConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HttpRequestMethodConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._values = value.values;
        }
    }

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return cdktn.Fn.tolist(this.getListAttribute('values'));
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
export interface PathPatternConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#regex_values CcListenerRule#regex_values}
    */
    readonly regexValues?: string[];
    /**
    * The path patterns to compare against the request URL. The maximum size of each string is 128 characters. The comparison is case sensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
    *  If you specify multiple strings, the condition is satisfied if one of them matches the request URL. The path pattern is compared only to the path of the URL, not to its query string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#values CcListenerRule#values}
    */
    readonly values?: string[];
}
export class PathPatternConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PathPatternConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._regexValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.regexValues = this._regexValues;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PathPatternConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._regexValues = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._regexValues = value.regexValues;
            this._values = value.values;
        }
    }

    // regex_values - computed: true, optional: true, required: false
    private _regexValues?: string[]; 
    public get regexValues() {
        return cdktn.Fn.tolist(this.getListAttribute('regex_values'));
    }
    public set regexValues(value: string[]) {
        this._regexValues = value;
    }
    public resetRegexValues() {
        this._regexValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexValuesInput() {
        return this._regexValues;
    }

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return cdktn.Fn.tolist(this.getListAttribute('values'));
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
export interface QueryStringKeyValueProperty {
    /**
    * The key. You can omit the key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#key CcListenerRule#key}
    */
    readonly key?: string;
    /**
    * The value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#value CcListenerRule#value}
    */
    readonly value?: string;
}
export class QueryStringKeyValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): QueryStringKeyValueProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: QueryStringKeyValueProperty | cdktn.IResolvable | undefined) {
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

export class QueryStringKeyValuePropertyList extends cdktn.ComplexList {
    public internalValue? : QueryStringKeyValueProperty[] | cdktn.IResolvable

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
    public get(index: number): QueryStringKeyValuePropertyOutputReference {
        return new QueryStringKeyValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface QueryStringConfigProperty {
    /**
    * The key/value pairs or values to find in the query string. The maximum length of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). To search for a literal '*' or '?' character in a query string, you must escape these characters in ``Values`` using a '\' character.
    *  If you specify multiple key/value pairs or values, the condition is satisfied if one of them is found in the query string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#values CcListenerRule#values}
    */
    readonly values?: QueryStringKeyValueProperty[] | cdktn.IResolvable;
}
export class QueryStringConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QueryStringConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._values?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QueryStringConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._values.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._values.internalValue = value.values;
        }
    }

    // values - computed: true, optional: true, required: false
    private _values = new QueryStringKeyValuePropertyList(this, "values", true);
    public get values() {
        return this._values;
    }
    public putValues(value: QueryStringKeyValueProperty[] | cdktn.IResolvable) {
        this._values.internalValue = value;
    }
    public resetValues() {
        this._values.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values.internalValue;
    }
}
export interface SourceIpConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#ip_address_type CcListenerRule#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * The source IP addresses, in CIDR format. You can use both IPv4 and IPv6 addresses. Wildcards are not supported.
    *  If you specify multiple addresses, the condition is satisfied if the source IP address of the request matches one of the CIDR blocks. This condition is not satisfied by the addresses in the X-Forwarded-For header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#values CcListenerRule#values}
    */
    readonly values?: string[];
}
export class SourceIpConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceIpConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ipAddressType !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddressType = this._ipAddressType;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceIpConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipAddressType = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipAddressType = value.ipAddressType;
            this._values = value.values;
        }
    }

    // ip_address_type - computed: true, optional: true, required: false
    private _ipAddressType?: string; 
    public get ipAddressType() {
        return this.getStringAttribute('ip_address_type');
    }
    public set ipAddressType(value: string) {
        this._ipAddressType = value;
    }
    public resetIpAddressType() {
        this._ipAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressTypeInput() {
        return this._ipAddressType;
    }

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return cdktn.Fn.tolist(this.getListAttribute('values'));
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
export interface RuleConditionProperty {
    /**
    * The name of the field. The possible values are:
    *   +  ``http-header`` ? [ALB] Matches on an HTTP header field.
    *   +  ``http-request-method`` ? [ALB] Matches on the HTTP request method.
    *   +  ``host-header`` ? [ALB] Matches on the host header.
    *   +  ``path-pattern`` ? [ALB] Matches on the URL path of the request.
    *   +  ``query-string`` ? [ALB] Matches on a query string parameter.
    *   +  ``source-ip`` ? [ALB, NLB] Matches on the source IP address. For ALB, use ``SourceIpConfig`` with ``Values`` to specify CIDR ranges. For NLB, use ``SourceIpConfig`` with ``IpAddressType`` to match the IP address type (``ipv4`` or ``ipv6``).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#field CcListenerRule#field}
    */
    readonly field?: string;
    /**
    * Information for a host header condition. Specify only when ``Field`` is ``host-header``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#host_header_config CcListenerRule#host_header_config}
    */
    readonly hostHeaderConfig?: HostHeaderConfigProperty;
    /**
    * Information for an HTTP header condition. Specify only when ``Field`` is ``http-header``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#http_header_config CcListenerRule#http_header_config}
    */
    readonly httpHeaderConfig?: HttpHeaderConfigProperty;
    /**
    * Information for an HTTP method condition. Specify only when ``Field`` is ``http-request-method``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#http_request_method_config CcListenerRule#http_request_method_config}
    */
    readonly httpRequestMethodConfig?: HttpRequestMethodConfigProperty;
    /**
    * Information for a path pattern condition. Specify only when ``Field`` is ``path-pattern``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#path_pattern_config CcListenerRule#path_pattern_config}
    */
    readonly pathPatternConfig?: PathPatternConfigProperty;
    /**
    * Information for a query string condition. Specify only when ``Field`` is ``query-string``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#query_string_config CcListenerRule#query_string_config}
    */
    readonly queryStringConfig?: QueryStringConfigProperty;
    /**
    * The regular expressions to match against the condition field. The maximum length of each string is 128 characters. Specify only when ``Field`` is ``http-header``, ``host-header``, or ``path-pattern``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#regex_values CcListenerRule#regex_values}
    */
    readonly regexValues?: string[];
    /**
    * Information for a source IP condition. Specify only when ``Field`` is ``source-ip``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#source_ip_config CcListenerRule#source_ip_config}
    */
    readonly sourceIpConfig?: SourceIpConfigProperty;
    /**
    * The condition value. Specify only when ``Field`` is ``host-header`` or ``path-pattern``. Alternatively, to specify multiple host names or multiple path patterns, use ``HostHeaderConfig`` or ``PathPatternConfig``.
    *  If ``Field`` is ``host-header`` and you're not using ``HostHeaderConfig``, you can specify a single host name (for example, my.example.com). A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters.
    *   +  A-Z, a-z, 0-9
    *   +  - .
    *   +  * (matches 0 or more characters)
    *   +  ? (matches exactly 1 character)
    *   
    *  If ``Field`` is ``path-pattern`` and you're not using ``PathPatternConfig``, you can specify a single path pattern (for example, /img/*). A path pattern is case-sensitive, can be up to 128 characters in length, and can contain any of the following characters.
    *   +  A-Z, a-z, 0-9
    *   +  _ - . $ / ~ " ' @ : +
    *   +  & (using &amp;)
    *   +  * (matches 0 or more characters)
    *   +  ? (matches exactly 1 character)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#values CcListenerRule#values}
    */
    readonly values?: string[];
}
export class RuleConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RuleConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._field !== undefined) {
            hasAnyValues = true;
            internalValueResult.field = this._field;
        }
        if (this._hostHeaderConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostHeaderConfig = this._hostHeaderConfig?.internalValue;
        }
        if (this._httpHeaderConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpHeaderConfig = this._httpHeaderConfig?.internalValue;
        }
        if (this._httpRequestMethodConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpRequestMethodConfig = this._httpRequestMethodConfig?.internalValue;
        }
        if (this._pathPatternConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pathPatternConfig = this._pathPatternConfig?.internalValue;
        }
        if (this._queryStringConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryStringConfig = this._queryStringConfig?.internalValue;
        }
        if (this._regexValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.regexValues = this._regexValues;
        }
        if (this._sourceIpConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceIpConfig = this._sourceIpConfig?.internalValue;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._field = undefined;
            this._hostHeaderConfig.internalValue = undefined;
            this._httpHeaderConfig.internalValue = undefined;
            this._httpRequestMethodConfig.internalValue = undefined;
            this._pathPatternConfig.internalValue = undefined;
            this._queryStringConfig.internalValue = undefined;
            this._regexValues = undefined;
            this._sourceIpConfig.internalValue = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._field = value.field;
            this._hostHeaderConfig.internalValue = value.hostHeaderConfig;
            this._httpHeaderConfig.internalValue = value.httpHeaderConfig;
            this._httpRequestMethodConfig.internalValue = value.httpRequestMethodConfig;
            this._pathPatternConfig.internalValue = value.pathPatternConfig;
            this._queryStringConfig.internalValue = value.queryStringConfig;
            this._regexValues = value.regexValues;
            this._sourceIpConfig.internalValue = value.sourceIpConfig;
            this._values = value.values;
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

    // host_header_config - computed: true, optional: true, required: false
    private _hostHeaderConfig = new HostHeaderConfigPropertyOutputReference(this, "host_header_config");
    public get hostHeaderConfig() {
        return this._hostHeaderConfig;
    }
    public putHostHeaderConfig(value: HostHeaderConfigProperty) {
        this._hostHeaderConfig.internalValue = value;
    }
    public resetHostHeaderConfig() {
        this._hostHeaderConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostHeaderConfigInput() {
        return this._hostHeaderConfig.internalValue;
    }

    // http_header_config - computed: true, optional: true, required: false
    private _httpHeaderConfig = new HttpHeaderConfigPropertyOutputReference(this, "http_header_config");
    public get httpHeaderConfig() {
        return this._httpHeaderConfig;
    }
    public putHttpHeaderConfig(value: HttpHeaderConfigProperty) {
        this._httpHeaderConfig.internalValue = value;
    }
    public resetHttpHeaderConfig() {
        this._httpHeaderConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpHeaderConfigInput() {
        return this._httpHeaderConfig.internalValue;
    }

    // http_request_method_config - computed: true, optional: true, required: false
    private _httpRequestMethodConfig = new HttpRequestMethodConfigPropertyOutputReference(this, "http_request_method_config");
    public get httpRequestMethodConfig() {
        return this._httpRequestMethodConfig;
    }
    public putHttpRequestMethodConfig(value: HttpRequestMethodConfigProperty) {
        this._httpRequestMethodConfig.internalValue = value;
    }
    public resetHttpRequestMethodConfig() {
        this._httpRequestMethodConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpRequestMethodConfigInput() {
        return this._httpRequestMethodConfig.internalValue;
    }

    // path_pattern_config - computed: true, optional: true, required: false
    private _pathPatternConfig = new PathPatternConfigPropertyOutputReference(this, "path_pattern_config");
    public get pathPatternConfig() {
        return this._pathPatternConfig;
    }
    public putPathPatternConfig(value: PathPatternConfigProperty) {
        this._pathPatternConfig.internalValue = value;
    }
    public resetPathPatternConfig() {
        this._pathPatternConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathPatternConfigInput() {
        return this._pathPatternConfig.internalValue;
    }

    // query_string_config - computed: true, optional: true, required: false
    private _queryStringConfig = new QueryStringConfigPropertyOutputReference(this, "query_string_config");
    public get queryStringConfig() {
        return this._queryStringConfig;
    }
    public putQueryStringConfig(value: QueryStringConfigProperty) {
        this._queryStringConfig.internalValue = value;
    }
    public resetQueryStringConfig() {
        this._queryStringConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringConfigInput() {
        return this._queryStringConfig.internalValue;
    }

    // regex_values - computed: true, optional: true, required: false
    private _regexValues?: string[]; 
    public get regexValues() {
        return cdktn.Fn.tolist(this.getListAttribute('regex_values'));
    }
    public set regexValues(value: string[]) {
        this._regexValues = value;
    }
    public resetRegexValues() {
        this._regexValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexValuesInput() {
        return this._regexValues;
    }

    // source_ip_config - computed: true, optional: true, required: false
    private _sourceIpConfig = new SourceIpConfigPropertyOutputReference(this, "source_ip_config");
    public get sourceIpConfig() {
        return this._sourceIpConfig;
    }
    public putSourceIpConfig(value: SourceIpConfigProperty) {
        this._sourceIpConfig.internalValue = value;
    }
    public resetSourceIpConfig() {
        this._sourceIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceIpConfigInput() {
        return this._sourceIpConfig.internalValue;
    }

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return cdktn.Fn.tolist(this.getListAttribute('values'));
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

export class RuleConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : RuleConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): RuleConditionPropertyOutputReference {
        return new RuleConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#key CcListenerRule#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#value CcListenerRule#value}
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
export interface RewriteConfigProperty {
    /**
    * The regular expression to match in the input string. The maximum length of the string is 1,024 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#regex CcListenerRule#regex}
    */
    readonly regex?: string;
    /**
    * The replacement string to use when rewriting the matched input. The maximum length of the string is 1,024 characters. You can specify capture groups in the regular expression (for example, $1 and $2).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#replace CcListenerRule#replace}
    */
    readonly replace?: string;
}
export class RewriteConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RewriteConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._regex !== undefined) {
            hasAnyValues = true;
            internalValueResult.regex = this._regex;
        }
        if (this._replace !== undefined) {
            hasAnyValues = true;
            internalValueResult.replace = this._replace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RewriteConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._regex = undefined;
            this._replace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._regex = value.regex;
            this._replace = value.replace;
        }
    }

    // regex - computed: true, optional: true, required: false
    private _regex?: string; 
    public get regex() {
        return this.getStringAttribute('regex');
    }
    public set regex(value: string) {
        this._regex = value;
    }
    public resetRegex() {
        this._regex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexInput() {
        return this._regex;
    }

    // replace - computed: true, optional: true, required: false
    private _replace?: string; 
    public get replace() {
        return this.getStringAttribute('replace');
    }
    public set replace(value: string) {
        this._replace = value;
    }
    public resetReplace() {
        this._replace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replaceInput() {
        return this._replace;
    }
}

export class RewriteConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : RewriteConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): RewriteConfigPropertyOutputReference {
        return new RewriteConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RewriteConfigObjectProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#rewrites CcListenerRule#rewrites}
    */
    readonly rewrites?: RewriteConfigProperty[] | cdktn.IResolvable;
}
export class RewriteConfigObjectPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RewriteConfigObjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rewrites?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rewrites = this._rewrites?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RewriteConfigObjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rewrites.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rewrites.internalValue = value.rewrites;
        }
    }

    // rewrites - computed: true, optional: true, required: false
    private _rewrites = new RewriteConfigPropertyList(this, "rewrites", true);
    public get rewrites() {
        return this._rewrites;
    }
    public putRewrites(value: RewriteConfigProperty[] | cdktn.IResolvable) {
        this._rewrites.internalValue = value;
    }
    public resetRewrites() {
        this._rewrites.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rewritesInput() {
        return this._rewrites.internalValue;
    }
}
export interface RewritesProperty {
    /**
    * The regular expression to match in the input string. The maximum length of the string is 1,024 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#regex CcListenerRule#regex}
    */
    readonly regex?: string;
    /**
    * The replacement string to use when rewriting the matched input. The maximum length of the string is 1,024 characters. You can specify capture groups in the regular expression (for example, $1 and $2).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#replace CcListenerRule#replace}
    */
    readonly replace?: string;
}
export class RewritesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RewritesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._regex !== undefined) {
            hasAnyValues = true;
            internalValueResult.regex = this._regex;
        }
        if (this._replace !== undefined) {
            hasAnyValues = true;
            internalValueResult.replace = this._replace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RewritesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._regex = undefined;
            this._replace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._regex = value.regex;
            this._replace = value.replace;
        }
    }

    // regex - computed: true, optional: true, required: false
    private _regex?: string; 
    public get regex() {
        return this.getStringAttribute('regex');
    }
    public set regex(value: string) {
        this._regex = value;
    }
    public resetRegex() {
        this._regex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexInput() {
        return this._regex;
    }

    // replace - computed: true, optional: true, required: false
    private _replace?: string; 
    public get replace() {
        return this.getStringAttribute('replace');
    }
    public set replace(value: string) {
        this._replace = value;
    }
    public resetReplace() {
        this._replace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replaceInput() {
        return this._replace;
    }
}

export class RewritesPropertyList extends cdktn.ComplexList {
    public internalValue? : RewritesProperty[] | cdktn.IResolvable

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
    public get(index: number): RewritesPropertyOutputReference {
        return new RewritesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface UrlRewriteConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#rewrites CcListenerRule#rewrites}
    */
    readonly rewrites?: RewritesProperty[] | cdktn.IResolvable;
}
export class UrlRewriteConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UrlRewriteConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rewrites?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rewrites = this._rewrites?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UrlRewriteConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rewrites.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rewrites.internalValue = value.rewrites;
        }
    }

    // rewrites - computed: true, optional: true, required: false
    private _rewrites = new RewritesPropertyList(this, "rewrites", true);
    public get rewrites() {
        return this._rewrites;
    }
    public putRewrites(value: RewritesProperty[] | cdktn.IResolvable) {
        this._rewrites.internalValue = value;
    }
    public resetRewrites() {
        this._rewrites.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rewritesInput() {
        return this._rewrites.internalValue;
    }
}
export interface TransformProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#host_header_rewrite_config CcListenerRule#host_header_rewrite_config}
    */
    readonly hostHeaderRewriteConfig?: RewriteConfigObjectProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#type CcListenerRule#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener_rule#url_rewrite_config CcListenerRule#url_rewrite_config}
    */
    readonly urlRewriteConfig?: UrlRewriteConfigProperty;
}
export class TransformPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TransformProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hostHeaderRewriteConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostHeaderRewriteConfig = this._hostHeaderRewriteConfig?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._urlRewriteConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.urlRewriteConfig = this._urlRewriteConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransformProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hostHeaderRewriteConfig.internalValue = undefined;
            this._type = undefined;
            this._urlRewriteConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hostHeaderRewriteConfig.internalValue = value.hostHeaderRewriteConfig;
            this._type = value.type;
            this._urlRewriteConfig.internalValue = value.urlRewriteConfig;
        }
    }

    // host_header_rewrite_config - computed: true, optional: true, required: false
    private _hostHeaderRewriteConfig = new RewriteConfigObjectPropertyOutputReference(this, "host_header_rewrite_config");
    public get hostHeaderRewriteConfig() {
        return this._hostHeaderRewriteConfig;
    }
    public putHostHeaderRewriteConfig(value: RewriteConfigObjectProperty) {
        this._hostHeaderRewriteConfig.internalValue = value;
    }
    public resetHostHeaderRewriteConfig() {
        this._hostHeaderRewriteConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostHeaderRewriteConfigInput() {
        return this._hostHeaderRewriteConfig.internalValue;
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

    // url_rewrite_config - computed: true, optional: true, required: false
    private _urlRewriteConfig = new UrlRewriteConfigPropertyOutputReference(this, "url_rewrite_config");
    public get urlRewriteConfig() {
        return this._urlRewriteConfig;
    }
    public putUrlRewriteConfig(value: UrlRewriteConfigProperty) {
        this._urlRewriteConfig.internalValue = value;
    }
    public resetUrlRewriteConfig() {
        this._urlRewriteConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlRewriteConfigInput() {
        return this._urlRewriteConfig.internalValue;
    }
}

export class TransformPropertyList extends cdktn.ComplexList {
    public internalValue? : TransformProperty[] | cdktn.IResolvable

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
    public get(index: number): TransformPropertyOutputReference {
        return new TransformPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
