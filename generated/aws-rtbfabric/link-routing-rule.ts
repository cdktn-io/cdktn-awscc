// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLinkRoutingRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * Conditions for a routing rule. All non-null fields must match (AND logic). At least one field must be set. HostHeader and HostHeaderWildcard are mutually exclusive. PathPrefix and PathExact are mutually exclusive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#conditions CcLinkRoutingRule#conditions}
    */
    readonly conditions: CcLinkRoutingRule.RuleConditionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#gateway_id CcLinkRoutingRule#gateway_id}
    */
    readonly gatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#link_id CcLinkRoutingRule#link_id}
    */
    readonly linkId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#priority CcLinkRoutingRule#priority}
    */
    readonly priority: number;
    /**
    * Tags to assign to the LinkRoutingRule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#tags CcLinkRoutingRule#tags}
    */
    readonly tags?: CcLinkRoutingRule.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule awscc_rtbfabric_link_routing_rule}
*/
export class CcLinkRoutingRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_rtbfabric_link_routing_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLinkRoutingRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLinkRoutingRule to import
    * @param importFromId The id of the existing CcLinkRoutingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLinkRoutingRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rtbfabric_link_routing_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule awscc_rtbfabric_link_routing_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLinkRoutingRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcLinkRoutingRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_rtbfabric_link_routing_rule',
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
        this._conditions.internalValue = config.conditions;
        this._gatewayId = config.gatewayId;
        this._linkId = config.linkId;
        this._priority = config.priority;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // conditions - computed: false, optional: false, required: true
    private _conditions = new CcLinkRoutingRule.RuleConditionPropertyOutputReference(this, "conditions");
    public get conditions() {
        return this._conditions;
    }
    public putConditions(value: CcLinkRoutingRule.RuleConditionProperty) {
        this._conditions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
        return this._conditions.internalValue;
    }

    // created_timestamp - computed: true, optional: false, required: false
    public get createdTimestamp() {
        return this.getStringAttribute('created_timestamp');
    }

    // gateway_id - computed: false, optional: false, required: true
    private _gatewayId?: string; 
    public get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    public set gatewayId(value: string) {
        this._gatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayIdInput() {
        return this._gatewayId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // link_id - computed: false, optional: false, required: true
    private _linkId?: string; 
    public get linkId() {
        return this.getStringAttribute('link_id');
    }
    public set linkId(value: string) {
        this._linkId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get linkIdInput() {
        return this._linkId;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLinkRoutingRule.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLinkRoutingRule.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // updated_timestamp - computed: true, optional: false, required: false
    public get updatedTimestamp() {
        return this.getStringAttribute('updated_timestamp');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            conditions: ccLinkRoutingRuleRuleConditionPropertyToTerraform(this._conditions.internalValue),
            gateway_id: cdktn.stringToTerraform(this._gatewayId),
            link_id: cdktn.stringToTerraform(this._linkId),
            priority: cdktn.numberToTerraform(this._priority),
            tags: cdktn.listMapper(ccLinkRoutingRuleTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            conditions: {
                value: ccLinkRoutingRuleRuleConditionPropertyToHclTerraform(this._conditions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLinkRoutingRule.RuleConditionProperty",
            },
            gateway_id: {
                value: cdktn.stringToHclTerraform(this._gatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            link_id: {
                value: cdktn.stringToHclTerraform(this._linkId),
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
                value: cdktn.listMapperHcl(ccLinkRoutingRuleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLinkRoutingRule.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLinkRoutingRuleQueryStringKeyValuePairPropertyToTerraform(struct?: CcLinkRoutingRule.QueryStringKeyValuePairProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLinkRoutingRuleQueryStringKeyValuePairPropertyToHclTerraform(struct?: CcLinkRoutingRule.QueryStringKeyValuePairProperty | cdktn.IResolvable): any {
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


export function ccLinkRoutingRuleRuleConditionPropertyToTerraform(struct?: CcLinkRoutingRule.RuleConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        host_header: cdktn.stringToTerraform(struct!.hostHeader),
        host_header_wildcard: cdktn.stringToTerraform(struct!.hostHeaderWildcard),
        path_exact: cdktn.stringToTerraform(struct!.pathExact),
        path_prefix: cdktn.stringToTerraform(struct!.pathPrefix),
        query_string_equals: ccLinkRoutingRuleQueryStringKeyValuePairPropertyToTerraform(struct!.queryStringEquals),
        query_string_exists: cdktn.stringToTerraform(struct!.queryStringExists),
    }
}


export function ccLinkRoutingRuleRuleConditionPropertyToHclTerraform(struct?: CcLinkRoutingRule.RuleConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        host_header: {
            value: cdktn.stringToHclTerraform(struct!.hostHeader),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_header_wildcard: {
            value: cdktn.stringToHclTerraform(struct!.hostHeaderWildcard),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path_exact: {
            value: cdktn.stringToHclTerraform(struct!.pathExact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path_prefix: {
            value: cdktn.stringToHclTerraform(struct!.pathPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        query_string_equals: {
            value: ccLinkRoutingRuleQueryStringKeyValuePairPropertyToHclTerraform(struct!.queryStringEquals),
            isBlock: true,
            type: "struct",
            storageClassType: "QueryStringKeyValuePairProperty",
        },
        query_string_exists: {
            value: cdktn.stringToHclTerraform(struct!.queryStringExists),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLinkRoutingRuleTagPropertyToTerraform(struct?: CcLinkRoutingRule.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLinkRoutingRuleTagPropertyToHclTerraform(struct?: CcLinkRoutingRule.TagProperty | cdktn.IResolvable): any {
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


export namespace CcLinkRoutingRule {
export interface QueryStringKeyValuePairProperty {
    /**
    * Query string key ? RFC 3986 unreserved characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#key CcLinkRoutingRule#key}
    */
    readonly key?: string;
    /**
    * Query string value ? RFC 3986 unreserved characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#value CcLinkRoutingRule#value}
    */
    readonly value?: string;
}
export class QueryStringKeyValuePairPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QueryStringKeyValuePairProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: QueryStringKeyValuePairProperty | cdktn.IResolvable | undefined) {
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
export interface RuleConditionProperty {
    /**
    * Exact host match ? RFC 3986 unreserved characters. Mutually exclusive with HostHeaderWildcard.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#host_header CcLinkRoutingRule#host_header}
    */
    readonly hostHeader?: string;
    /**
    * Wildcard host pattern (e.g., *.example.com) ? RFC 3986 unreserved characters plus *. Mutually exclusive with HostHeader.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#host_header_wildcard CcLinkRoutingRule#host_header_wildcard}
    */
    readonly hostHeaderWildcard?: string;
    /**
    * Exact path match ? must start with /. Mutually exclusive with PathPrefix.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#path_exact CcLinkRoutingRule#path_exact}
    */
    readonly pathExact?: string;
    /**
    * Path prefix matching ? strict starts-with, must start with /. Mutually exclusive with PathExact.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#path_prefix CcLinkRoutingRule#path_prefix}
    */
    readonly pathPrefix?: string;
    /**
    * Query string key=value pair match (single pair).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#query_string_equals CcLinkRoutingRule#query_string_equals}
    */
    readonly queryStringEquals?: QueryStringKeyValuePairProperty;
    /**
    * Query string key presence check (any value accepted).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#query_string_exists CcLinkRoutingRule#query_string_exists}
    */
    readonly queryStringExists?: string;
}
export class RuleConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hostHeader !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostHeader = this._hostHeader;
        }
        if (this._hostHeaderWildcard !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostHeaderWildcard = this._hostHeaderWildcard;
        }
        if (this._pathExact !== undefined) {
            hasAnyValues = true;
            internalValueResult.pathExact = this._pathExact;
        }
        if (this._pathPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.pathPrefix = this._pathPrefix;
        }
        if (this._queryStringEquals?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryStringEquals = this._queryStringEquals?.internalValue;
        }
        if (this._queryStringExists !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryStringExists = this._queryStringExists;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hostHeader = undefined;
            this._hostHeaderWildcard = undefined;
            this._pathExact = undefined;
            this._pathPrefix = undefined;
            this._queryStringEquals.internalValue = undefined;
            this._queryStringExists = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hostHeader = value.hostHeader;
            this._hostHeaderWildcard = value.hostHeaderWildcard;
            this._pathExact = value.pathExact;
            this._pathPrefix = value.pathPrefix;
            this._queryStringEquals.internalValue = value.queryStringEquals;
            this._queryStringExists = value.queryStringExists;
        }
    }

    // host_header - computed: true, optional: true, required: false
    private _hostHeader?: string; 
    public get hostHeader() {
        return this.getStringAttribute('host_header');
    }
    public set hostHeader(value: string) {
        this._hostHeader = value;
    }
    public resetHostHeader() {
        this._hostHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostHeaderInput() {
        return this._hostHeader;
    }

    // host_header_wildcard - computed: true, optional: true, required: false
    private _hostHeaderWildcard?: string; 
    public get hostHeaderWildcard() {
        return this.getStringAttribute('host_header_wildcard');
    }
    public set hostHeaderWildcard(value: string) {
        this._hostHeaderWildcard = value;
    }
    public resetHostHeaderWildcard() {
        this._hostHeaderWildcard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostHeaderWildcardInput() {
        return this._hostHeaderWildcard;
    }

    // path_exact - computed: true, optional: true, required: false
    private _pathExact?: string; 
    public get pathExact() {
        return this.getStringAttribute('path_exact');
    }
    public set pathExact(value: string) {
        this._pathExact = value;
    }
    public resetPathExact() {
        this._pathExact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathExactInput() {
        return this._pathExact;
    }

    // path_prefix - computed: true, optional: true, required: false
    private _pathPrefix?: string; 
    public get pathPrefix() {
        return this.getStringAttribute('path_prefix');
    }
    public set pathPrefix(value: string) {
        this._pathPrefix = value;
    }
    public resetPathPrefix() {
        this._pathPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathPrefixInput() {
        return this._pathPrefix;
    }

    // query_string_equals - computed: true, optional: true, required: false
    private _queryStringEquals = new QueryStringKeyValuePairPropertyOutputReference(this, "query_string_equals");
    public get queryStringEquals() {
        return this._queryStringEquals;
    }
    public putQueryStringEquals(value: QueryStringKeyValuePairProperty) {
        this._queryStringEquals.internalValue = value;
    }
    public resetQueryStringEquals() {
        this._queryStringEquals.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringEqualsInput() {
        return this._queryStringEquals.internalValue;
    }

    // query_string_exists - computed: true, optional: true, required: false
    private _queryStringExists?: string; 
    public get queryStringExists() {
        return this.getStringAttribute('query_string_exists');
    }
    public set queryStringExists(value: string) {
        this._queryStringExists = value;
    }
    public resetQueryStringExists() {
        this._queryStringExists = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringExistsInput() {
        return this._queryStringExists;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#key CcLinkRoutingRule#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#value CcLinkRoutingRule#value}
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
