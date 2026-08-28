// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#action CcRule#action}
    */
    readonly action: CcRule.ActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#listener_identifier CcRule#listener_identifier}
    */
    readonly listenerIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#match CcRule#match}
    */
    readonly match: CcRule.MatchProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#name CcRule#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#priority CcRule#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#service_identifier CcRule#service_identifier}
    */
    readonly serviceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#tags CcRule#tags}
    */
    readonly tags?: CcRule.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule awscc_vpclattice_rule}
*/
export class CcRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_vpclattice_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRule to import
    * @param importFromId The id of the existing CcRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_vpclattice_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule awscc_vpclattice_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_vpclattice_rule',
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
        this._action.internalValue = config.action;
        this._listenerIdentifier = config.listenerIdentifier;
        this._match.internalValue = config.match;
        this._name = config.name;
        this._priority = config.priority;
        this._serviceIdentifier = config.serviceIdentifier;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action - computed: false, optional: false, required: true
    private _action = new CcRule.ActionPropertyOutputReference(this, "action");
    public get action() {
        return this._action;
    }
    public putAction(value: CcRule.ActionProperty) {
        this._action.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // listener_identifier - computed: true, optional: true, required: false
    private _listenerIdentifier?: string; 
    public get listenerIdentifier() {
        return this.getStringAttribute('listener_identifier');
    }
    public set listenerIdentifier(value: string) {
        this._listenerIdentifier = value;
    }
    public resetListenerIdentifier() {
        this._listenerIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get listenerIdentifierInput() {
        return this._listenerIdentifier;
    }

    // match - computed: false, optional: false, required: true
    private _match = new CcRule.MatchPropertyOutputReference(this, "match");
    public get match() {
        return this._match;
    }
    public putMatch(value: CcRule.MatchProperty) {
        this._match.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get matchInput() {
        return this._match.internalValue;
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

    // service_identifier - computed: true, optional: true, required: false
    private _serviceIdentifier?: string; 
    public get serviceIdentifier() {
        return this.getStringAttribute('service_identifier');
    }
    public set serviceIdentifier(value: string) {
        this._serviceIdentifier = value;
    }
    public resetServiceIdentifier() {
        this._serviceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceIdentifierInput() {
        return this._serviceIdentifier;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRule.TagPropertyList(this, "tags", true);
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            action: ccRuleActionPropertyToTerraform(this._action.internalValue),
            listener_identifier: cdktn.stringToTerraform(this._listenerIdentifier),
            match: ccRuleMatchPropertyToTerraform(this._match.internalValue),
            name: cdktn.stringToTerraform(this._name),
            priority: cdktn.numberToTerraform(this._priority),
            service_identifier: cdktn.stringToTerraform(this._serviceIdentifier),
            tags: cdktn.listMapper(ccRuleTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action: {
                value: ccRuleActionPropertyToHclTerraform(this._action.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRule.ActionProperty",
            },
            listener_identifier: {
                value: cdktn.stringToHclTerraform(this._listenerIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            match: {
                value: ccRuleMatchPropertyToHclTerraform(this._match.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRule.MatchProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
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
            service_identifier: {
                value: cdktn.stringToHclTerraform(this._serviceIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRuleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcRule.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRuleFixedResponsePropertyToTerraform(struct?: CcRule.FixedResponseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        status_code: cdktn.numberToTerraform(struct!.statusCode),
    }
}


export function ccRuleFixedResponsePropertyToHclTerraform(struct?: CcRule.FixedResponseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        status_code: {
            value: cdktn.numberToHclTerraform(struct!.statusCode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleWeightedTargetGroupPropertyToTerraform(struct?: CcRule.WeightedTargetGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_group_identifier: cdktn.stringToTerraform(struct!.targetGroupIdentifier),
        weight: cdktn.numberToTerraform(struct!.weight),
    }
}


export function ccRuleWeightedTargetGroupPropertyToHclTerraform(struct?: CcRule.WeightedTargetGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_group_identifier: {
            value: cdktn.stringToHclTerraform(struct!.targetGroupIdentifier),
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


export function ccRuleForwardPropertyToTerraform(struct?: CcRule.ForwardProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_groups: cdktn.listMapper(ccRuleWeightedTargetGroupPropertyToTerraform, false)(struct!.targetGroups),
    }
}


export function ccRuleForwardPropertyToHclTerraform(struct?: CcRule.ForwardProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_groups: {
            value: cdktn.listMapperHcl(ccRuleWeightedTargetGroupPropertyToHclTerraform, false)(struct!.targetGroups),
            isBlock: true,
            type: "list",
            storageClassType: "WeightedTargetGroupPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleActionPropertyToTerraform(struct?: CcRule.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fixed_response: ccRuleFixedResponsePropertyToTerraform(struct!.fixedResponse),
        forward: ccRuleForwardPropertyToTerraform(struct!.forward),
    }
}


export function ccRuleActionPropertyToHclTerraform(struct?: CcRule.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fixed_response: {
            value: ccRuleFixedResponsePropertyToHclTerraform(struct!.fixedResponse),
            isBlock: true,
            type: "struct",
            storageClassType: "FixedResponseProperty",
        },
        forward: {
            value: ccRuleForwardPropertyToHclTerraform(struct!.forward),
            isBlock: true,
            type: "struct",
            storageClassType: "ForwardProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleHeaderMatchTypePropertyToTerraform(struct?: CcRule.HeaderMatchTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        contains: cdktn.stringToTerraform(struct!.contains),
        exact: cdktn.stringToTerraform(struct!.exact),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccRuleHeaderMatchTypePropertyToHclTerraform(struct?: CcRule.HeaderMatchTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        contains: {
            value: cdktn.stringToHclTerraform(struct!.contains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exact: {
            value: cdktn.stringToHclTerraform(struct!.exact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleHeaderMatchPropertyToTerraform(struct?: CcRule.HeaderMatchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        case_sensitive: cdktn.booleanToTerraform(struct!.caseSensitive),
        match: ccRuleHeaderMatchTypePropertyToTerraform(struct!.match),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccRuleHeaderMatchPropertyToHclTerraform(struct?: CcRule.HeaderMatchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        case_sensitive: {
            value: cdktn.booleanToHclTerraform(struct!.caseSensitive),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        match: {
            value: ccRuleHeaderMatchTypePropertyToHclTerraform(struct!.match),
            isBlock: true,
            type: "struct",
            storageClassType: "HeaderMatchTypeProperty",
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


export function ccRulePathMatchTypePropertyToTerraform(struct?: CcRule.PathMatchTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exact: cdktn.stringToTerraform(struct!.exact),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccRulePathMatchTypePropertyToHclTerraform(struct?: CcRule.PathMatchTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exact: {
            value: cdktn.stringToHclTerraform(struct!.exact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRulePathMatchPropertyToTerraform(struct?: CcRule.PathMatchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        case_sensitive: cdktn.booleanToTerraform(struct!.caseSensitive),
        match: ccRulePathMatchTypePropertyToTerraform(struct!.match),
    }
}


export function ccRulePathMatchPropertyToHclTerraform(struct?: CcRule.PathMatchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        case_sensitive: {
            value: cdktn.booleanToHclTerraform(struct!.caseSensitive),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        match: {
            value: ccRulePathMatchTypePropertyToHclTerraform(struct!.match),
            isBlock: true,
            type: "struct",
            storageClassType: "PathMatchTypeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleHttpMatchPropertyToTerraform(struct?: CcRule.HttpMatchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header_matches: cdktn.listMapper(ccRuleHeaderMatchPropertyToTerraform, false)(struct!.headerMatches),
        method: cdktn.stringToTerraform(struct!.method),
        path_match: ccRulePathMatchPropertyToTerraform(struct!.pathMatch),
    }
}


export function ccRuleHttpMatchPropertyToHclTerraform(struct?: CcRule.HttpMatchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header_matches: {
            value: cdktn.listMapperHcl(ccRuleHeaderMatchPropertyToHclTerraform, false)(struct!.headerMatches),
            isBlock: true,
            type: "list",
            storageClassType: "HeaderMatchPropertyList",
        },
        method: {
            value: cdktn.stringToHclTerraform(struct!.method),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path_match: {
            value: ccRulePathMatchPropertyToHclTerraform(struct!.pathMatch),
            isBlock: true,
            type: "struct",
            storageClassType: "PathMatchProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleMatchPropertyToTerraform(struct?: CcRule.MatchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        http_match: ccRuleHttpMatchPropertyToTerraform(struct!.httpMatch),
    }
}


export function ccRuleMatchPropertyToHclTerraform(struct?: CcRule.MatchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        http_match: {
            value: ccRuleHttpMatchPropertyToHclTerraform(struct!.httpMatch),
            isBlock: true,
            type: "struct",
            storageClassType: "HttpMatchProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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


export namespace CcRule {
export interface FixedResponseProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#status_code CcRule#status_code}
    */
    readonly statusCode?: number;
}
export class FixedResponsePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FixedResponseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._statusCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FixedResponseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._statusCode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._statusCode = value.statusCode;
        }
    }

    // status_code - computed: true, optional: true, required: false
    private _statusCode?: number; 
    public get statusCode() {
        return this.getNumberAttribute('status_code');
    }
    public set statusCode(value: number) {
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
export interface WeightedTargetGroupProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#target_group_identifier CcRule#target_group_identifier}
    */
    readonly targetGroupIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#weight CcRule#weight}
    */
    readonly weight?: number;
}
export class WeightedTargetGroupPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): WeightedTargetGroupProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetGroupIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroupIdentifier = this._targetGroupIdentifier;
        }
        if (this._weight !== undefined) {
            hasAnyValues = true;
            internalValueResult.weight = this._weight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WeightedTargetGroupProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetGroupIdentifier = undefined;
            this._weight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetGroupIdentifier = value.targetGroupIdentifier;
            this._weight = value.weight;
        }
    }

    // target_group_identifier - computed: true, optional: true, required: false
    private _targetGroupIdentifier?: string; 
    public get targetGroupIdentifier() {
        return this.getStringAttribute('target_group_identifier');
    }
    public set targetGroupIdentifier(value: string) {
        this._targetGroupIdentifier = value;
    }
    public resetTargetGroupIdentifier() {
        this._targetGroupIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupIdentifierInput() {
        return this._targetGroupIdentifier;
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

export class WeightedTargetGroupPropertyList extends cdktn.ComplexList {
    public internalValue? : WeightedTargetGroupProperty[] | cdktn.IResolvable

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
    public get(index: number): WeightedTargetGroupPropertyOutputReference {
        return new WeightedTargetGroupPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ForwardProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#target_groups CcRule#target_groups}
    */
    readonly targetGroups?: WeightedTargetGroupProperty[] | cdktn.IResolvable;
}
export class ForwardPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ForwardProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetGroups?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroups = this._targetGroups?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetGroups.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetGroups.internalValue = value.targetGroups;
        }
    }

    // target_groups - computed: true, optional: true, required: false
    private _targetGroups = new WeightedTargetGroupPropertyList(this, "target_groups", false);
    public get targetGroups() {
        return this._targetGroups;
    }
    public putTargetGroups(value: WeightedTargetGroupProperty[] | cdktn.IResolvable) {
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
export interface ActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#fixed_response CcRule#fixed_response}
    */
    readonly fixedResponse?: FixedResponseProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#forward CcRule#forward}
    */
    readonly forward?: ForwardProperty;
}
export class ActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fixedResponse?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fixedResponse = this._fixedResponse?.internalValue;
        }
        if (this._forward?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.forward = this._forward?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fixedResponse.internalValue = undefined;
            this._forward.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fixedResponse.internalValue = value.fixedResponse;
            this._forward.internalValue = value.forward;
        }
    }

    // fixed_response - computed: true, optional: true, required: false
    private _fixedResponse = new FixedResponsePropertyOutputReference(this, "fixed_response");
    public get fixedResponse() {
        return this._fixedResponse;
    }
    public putFixedResponse(value: FixedResponseProperty) {
        this._fixedResponse.internalValue = value;
    }
    public resetFixedResponse() {
        this._fixedResponse.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fixedResponseInput() {
        return this._fixedResponse.internalValue;
    }

    // forward - computed: true, optional: true, required: false
    private _forward = new ForwardPropertyOutputReference(this, "forward");
    public get forward() {
        return this._forward;
    }
    public putForward(value: ForwardProperty) {
        this._forward.internalValue = value;
    }
    public resetForward() {
        this._forward.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forwardInput() {
        return this._forward.internalValue;
    }
}
export interface HeaderMatchTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#contains CcRule#contains}
    */
    readonly contains?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#exact CcRule#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#prefix CcRule#prefix}
    */
    readonly prefix?: string;
}
export class HeaderMatchTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HeaderMatchTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contains !== undefined) {
            hasAnyValues = true;
            internalValueResult.contains = this._contains;
        }
        if (this._exact !== undefined) {
            hasAnyValues = true;
            internalValueResult.exact = this._exact;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HeaderMatchTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contains = undefined;
            this._exact = undefined;
            this._prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contains = value.contains;
            this._exact = value.exact;
            this._prefix = value.prefix;
        }
    }

    // contains - computed: true, optional: true, required: false
    private _contains?: string; 
    public get contains() {
        return this.getStringAttribute('contains');
    }
    public set contains(value: string) {
        this._contains = value;
    }
    public resetContains() {
        this._contains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containsInput() {
        return this._contains;
    }

    // exact - computed: true, optional: true, required: false
    private _exact?: string; 
    public get exact() {
        return this.getStringAttribute('exact');
    }
    public set exact(value: string) {
        this._exact = value;
    }
    public resetExact() {
        this._exact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exactInput() {
        return this._exact;
    }

    // prefix - computed: true, optional: true, required: false
    private _prefix?: string; 
    public get prefix() {
        return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
        this._prefix = value;
    }
    public resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
        return this._prefix;
    }
}
export interface HeaderMatchProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#case_sensitive CcRule#case_sensitive}
    */
    readonly caseSensitive?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#match CcRule#match}
    */
    readonly match?: HeaderMatchTypeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#name CcRule#name}
    */
    readonly name?: string;
}
export class HeaderMatchPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HeaderMatchProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._caseSensitive !== undefined) {
            hasAnyValues = true;
            internalValueResult.caseSensitive = this._caseSensitive;
        }
        if (this._match?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.match = this._match?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HeaderMatchProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._caseSensitive = undefined;
            this._match.internalValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._caseSensitive = value.caseSensitive;
            this._match.internalValue = value.match;
            this._name = value.name;
        }
    }

    // case_sensitive - computed: true, optional: true, required: false
    private _caseSensitive?: boolean | cdktn.IResolvable; 
    public get caseSensitive() {
        return this.getBooleanAttribute('case_sensitive');
    }
    public set caseSensitive(value: boolean | cdktn.IResolvable) {
        this._caseSensitive = value;
    }
    public resetCaseSensitive() {
        this._caseSensitive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caseSensitiveInput() {
        return this._caseSensitive;
    }

    // match - computed: true, optional: true, required: false
    private _match = new HeaderMatchTypePropertyOutputReference(this, "match");
    public get match() {
        return this._match;
    }
    public putMatch(value: HeaderMatchTypeProperty) {
        this._match.internalValue = value;
    }
    public resetMatch() {
        this._match.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchInput() {
        return this._match.internalValue;
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

export class HeaderMatchPropertyList extends cdktn.ComplexList {
    public internalValue? : HeaderMatchProperty[] | cdktn.IResolvable

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
    public get(index: number): HeaderMatchPropertyOutputReference {
        return new HeaderMatchPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PathMatchTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#exact CcRule#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#prefix CcRule#prefix}
    */
    readonly prefix?: string;
}
export class PathMatchTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PathMatchTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._exact !== undefined) {
            hasAnyValues = true;
            internalValueResult.exact = this._exact;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PathMatchTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exact = undefined;
            this._prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exact = value.exact;
            this._prefix = value.prefix;
        }
    }

    // exact - computed: true, optional: true, required: false
    private _exact?: string; 
    public get exact() {
        return this.getStringAttribute('exact');
    }
    public set exact(value: string) {
        this._exact = value;
    }
    public resetExact() {
        this._exact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exactInput() {
        return this._exact;
    }

    // prefix - computed: true, optional: true, required: false
    private _prefix?: string; 
    public get prefix() {
        return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
        this._prefix = value;
    }
    public resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
        return this._prefix;
    }
}
export interface PathMatchProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#case_sensitive CcRule#case_sensitive}
    */
    readonly caseSensitive?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#match CcRule#match}
    */
    readonly match?: PathMatchTypeProperty;
}
export class PathMatchPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PathMatchProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._caseSensitive !== undefined) {
            hasAnyValues = true;
            internalValueResult.caseSensitive = this._caseSensitive;
        }
        if (this._match?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.match = this._match?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PathMatchProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._caseSensitive = undefined;
            this._match.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._caseSensitive = value.caseSensitive;
            this._match.internalValue = value.match;
        }
    }

    // case_sensitive - computed: true, optional: true, required: false
    private _caseSensitive?: boolean | cdktn.IResolvable; 
    public get caseSensitive() {
        return this.getBooleanAttribute('case_sensitive');
    }
    public set caseSensitive(value: boolean | cdktn.IResolvable) {
        this._caseSensitive = value;
    }
    public resetCaseSensitive() {
        this._caseSensitive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caseSensitiveInput() {
        return this._caseSensitive;
    }

    // match - computed: true, optional: true, required: false
    private _match = new PathMatchTypePropertyOutputReference(this, "match");
    public get match() {
        return this._match;
    }
    public putMatch(value: PathMatchTypeProperty) {
        this._match.internalValue = value;
    }
    public resetMatch() {
        this._match.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchInput() {
        return this._match.internalValue;
    }
}
export interface HttpMatchProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#header_matches CcRule#header_matches}
    */
    readonly headerMatches?: HeaderMatchProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#method CcRule#method}
    */
    readonly method?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#path_match CcRule#path_match}
    */
    readonly pathMatch?: PathMatchProperty;
}
export class HttpMatchPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HttpMatchProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._headerMatches?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerMatches = this._headerMatches?.internalValue;
        }
        if (this._method !== undefined) {
            hasAnyValues = true;
            internalValueResult.method = this._method;
        }
        if (this._pathMatch?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pathMatch = this._pathMatch?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HttpMatchProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._headerMatches.internalValue = undefined;
            this._method = undefined;
            this._pathMatch.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._headerMatches.internalValue = value.headerMatches;
            this._method = value.method;
            this._pathMatch.internalValue = value.pathMatch;
        }
    }

    // header_matches - computed: true, optional: true, required: false
    private _headerMatches = new HeaderMatchPropertyList(this, "header_matches", false);
    public get headerMatches() {
        return this._headerMatches;
    }
    public putHeaderMatches(value: HeaderMatchProperty[] | cdktn.IResolvable) {
        this._headerMatches.internalValue = value;
    }
    public resetHeaderMatches() {
        this._headerMatches.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerMatchesInput() {
        return this._headerMatches.internalValue;
    }

    // method - computed: true, optional: true, required: false
    private _method?: string; 
    public get method() {
        return this.getStringAttribute('method');
    }
    public set method(value: string) {
        this._method = value;
    }
    public resetMethod() {
        this._method = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get methodInput() {
        return this._method;
    }

    // path_match - computed: true, optional: true, required: false
    private _pathMatch = new PathMatchPropertyOutputReference(this, "path_match");
    public get pathMatch() {
        return this._pathMatch;
    }
    public putPathMatch(value: PathMatchProperty) {
        this._pathMatch.internalValue = value;
    }
    public resetPathMatch() {
        this._pathMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathMatchInput() {
        return this._pathMatch.internalValue;
    }
}
export interface MatchProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#http_match CcRule#http_match}
    */
    readonly httpMatch: HttpMatchProperty;
}
export class MatchPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MatchProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._httpMatch?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpMatch = this._httpMatch?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MatchProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._httpMatch.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._httpMatch.internalValue = value.httpMatch;
        }
    }

    // http_match - computed: false, optional: false, required: true
    private _httpMatch = new HttpMatchPropertyOutputReference(this, "http_match");
    public get httpMatch() {
        return this._httpMatch;
    }
    public putHttpMatch(value: HttpMatchProperty) {
        this._httpMatch.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get httpMatchInput() {
        return this._httpMatch.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#key CcRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_rule#value CcRule#value}
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
