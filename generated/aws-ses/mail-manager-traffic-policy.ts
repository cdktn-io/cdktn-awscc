// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMailManagerTrafficPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#default_action CcMailManagerTrafficPolicy#default_action}
    */
    readonly defaultAction: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#max_message_size_bytes CcMailManagerTrafficPolicy#max_message_size_bytes}
    */
    readonly maxMessageSizeBytes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#policy_statements CcMailManagerTrafficPolicy#policy_statements}
    */
    readonly policyStatements: CcMailManagerTrafficPolicy.PolicyStatementProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#tags CcMailManagerTrafficPolicy#tags}
    */
    readonly tags?: CcMailManagerTrafficPolicy.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#traffic_policy_name CcMailManagerTrafficPolicy#traffic_policy_name}
    */
    readonly trafficPolicyName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy awscc_ses_mail_manager_traffic_policy}
*/
export class CcMailManagerTrafficPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ses_mail_manager_traffic_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMailManagerTrafficPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMailManagerTrafficPolicy to import
    * @param importFromId The id of the existing CcMailManagerTrafficPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMailManagerTrafficPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_mail_manager_traffic_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy awscc_ses_mail_manager_traffic_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMailManagerTrafficPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcMailManagerTrafficPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ses_mail_manager_traffic_policy',
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
        this._defaultAction = config.defaultAction;
        this._maxMessageSizeBytes = config.maxMessageSizeBytes;
        this._policyStatements.internalValue = config.policyStatements;
        this._tags.internalValue = config.tags;
        this._trafficPolicyName = config.trafficPolicyName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // default_action - computed: false, optional: false, required: true
    private _defaultAction?: string; 
    public get defaultAction() {
        return this.getStringAttribute('default_action');
    }
    public set defaultAction(value: string) {
        this._defaultAction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultActionInput() {
        return this._defaultAction;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // max_message_size_bytes - computed: true, optional: true, required: false
    private _maxMessageSizeBytes?: number; 
    public get maxMessageSizeBytes() {
        return this.getNumberAttribute('max_message_size_bytes');
    }
    public set maxMessageSizeBytes(value: number) {
        this._maxMessageSizeBytes = value;
    }
    public resetMaxMessageSizeBytes() {
        this._maxMessageSizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxMessageSizeBytesInput() {
        return this._maxMessageSizeBytes;
    }

    // policy_statements - computed: false, optional: false, required: true
    private _policyStatements = new CcMailManagerTrafficPolicy.PolicyStatementPropertyList(this, "policy_statements", false);
    public get policyStatements() {
        return this._policyStatements;
    }
    public putPolicyStatements(value: CcMailManagerTrafficPolicy.PolicyStatementProperty[] | cdktn.IResolvable) {
        this._policyStatements.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyStatementsInput() {
        return this._policyStatements.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcMailManagerTrafficPolicy.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcMailManagerTrafficPolicy.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // traffic_policy_arn - computed: true, optional: false, required: false
    public get trafficPolicyArn() {
        return this.getStringAttribute('traffic_policy_arn');
    }

    // traffic_policy_id - computed: true, optional: false, required: false
    public get trafficPolicyId() {
        return this.getStringAttribute('traffic_policy_id');
    }

    // traffic_policy_name - computed: true, optional: true, required: false
    private _trafficPolicyName?: string; 
    public get trafficPolicyName() {
        return this.getStringAttribute('traffic_policy_name');
    }
    public set trafficPolicyName(value: string) {
        this._trafficPolicyName = value;
    }
    public resetTrafficPolicyName() {
        this._trafficPolicyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficPolicyNameInput() {
        return this._trafficPolicyName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            default_action: cdktn.stringToTerraform(this._defaultAction),
            max_message_size_bytes: cdktn.numberToTerraform(this._maxMessageSizeBytes),
            policy_statements: cdktn.listMapper(ccMailManagerTrafficPolicyPolicyStatementPropertyToTerraform, false)(this._policyStatements.internalValue),
            tags: cdktn.listMapper(ccMailManagerTrafficPolicyTagPropertyToTerraform, false)(this._tags.internalValue),
            traffic_policy_name: cdktn.stringToTerraform(this._trafficPolicyName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            default_action: {
                value: cdktn.stringToHclTerraform(this._defaultAction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_message_size_bytes: {
                value: cdktn.numberToHclTerraform(this._maxMessageSizeBytes),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            policy_statements: {
                value: cdktn.listMapperHcl(ccMailManagerTrafficPolicyPolicyStatementPropertyToHclTerraform, false)(this._policyStatements.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMailManagerTrafficPolicy.PolicyStatementPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccMailManagerTrafficPolicyTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMailManagerTrafficPolicy.TagPropertyList",
            },
            traffic_policy_name: {
                value: cdktn.stringToHclTerraform(this._trafficPolicyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMailManagerTrafficPolicyIngressAnalysisPropertyToTerraform(struct?: CcMailManagerTrafficPolicy.IngressAnalysisProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analyzer: cdktn.stringToTerraform(struct!.analyzer),
        result_field: cdktn.stringToTerraform(struct!.resultField),
    }
}


export function ccMailManagerTrafficPolicyIngressAnalysisPropertyToHclTerraform(struct?: CcMailManagerTrafficPolicy.IngressAnalysisProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        analyzer: {
            value: cdktn.stringToHclTerraform(struct!.analyzer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        result_field: {
            value: cdktn.stringToHclTerraform(struct!.resultField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerTrafficPolicyIngressIsInAddressListPropertyToTerraform(struct?: CcMailManagerTrafficPolicy.IngressIsInAddressListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        address_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.addressLists),
        attribute: cdktn.stringToTerraform(struct!.attribute),
    }
}


export function ccMailManagerTrafficPolicyIngressIsInAddressListPropertyToHclTerraform(struct?: CcMailManagerTrafficPolicy.IngressIsInAddressListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        address_lists: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.addressLists),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        attribute: {
            value: cdktn.stringToHclTerraform(struct!.attribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerTrafficPolicyIngressBooleanToEvaluatePropertyToTerraform(struct?: CcMailManagerTrafficPolicy.IngressBooleanToEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analysis: ccMailManagerTrafficPolicyIngressAnalysisPropertyToTerraform(struct!.analysis),
        is_in_address_list: ccMailManagerTrafficPolicyIngressIsInAddressListPropertyToTerraform(struct!.isInAddressList),
    }
}


export function ccMailManagerTrafficPolicyIngressBooleanToEvaluatePropertyToHclTerraform(struct?: CcMailManagerTrafficPolicy.IngressBooleanToEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        analysis: {
            value: ccMailManagerTrafficPolicyIngressAnalysisPropertyToHclTerraform(struct!.analysis),
            isBlock: true,
            type: "struct",
            storageClassType: "IngressAnalysisProperty",
        },
        is_in_address_list: {
            value: ccMailManagerTrafficPolicyIngressIsInAddressListPropertyToHclTerraform(struct!.isInAddressList),
            isBlock: true,
            type: "struct",
            storageClassType: "IngressIsInAddressListProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerTrafficPolicyIngressBooleanExpressionPropertyToTerraform(struct?: CcMailManagerTrafficPolicy.IngressBooleanExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        evaluate: ccMailManagerTrafficPolicyIngressBooleanToEvaluatePropertyToTerraform(struct!.evaluate),
        operator: cdktn.stringToTerraform(struct!.operator),
    }
}


export function ccMailManagerTrafficPolicyIngressBooleanExpressionPropertyToHclTerraform(struct?: CcMailManagerTrafficPolicy.IngressBooleanExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        evaluate: {
            value: ccMailManagerTrafficPolicyIngressBooleanToEvaluatePropertyToHclTerraform(struct!.evaluate),
            isBlock: true,
            type: "struct",
            storageClassType: "IngressBooleanToEvaluateProperty",
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


export function ccMailManagerTrafficPolicyIngressIpToEvaluatePropertyToTerraform(struct?: CcMailManagerTrafficPolicy.IngressIpToEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute: cdktn.stringToTerraform(struct!.attribute),
    }
}


export function ccMailManagerTrafficPolicyIngressIpToEvaluatePropertyToHclTerraform(struct?: CcMailManagerTrafficPolicy.IngressIpToEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attribute: {
            value: cdktn.stringToHclTerraform(struct!.attribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerTrafficPolicyIngressIpv4ExpressionPropertyToTerraform(struct?: CcMailManagerTrafficPolicy.IngressIpv4ExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        evaluate: ccMailManagerTrafficPolicyIngressIpToEvaluatePropertyToTerraform(struct!.evaluate),
        operator: cdktn.stringToTerraform(struct!.operator),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccMailManagerTrafficPolicyIngressIpv4ExpressionPropertyToHclTerraform(struct?: CcMailManagerTrafficPolicy.IngressIpv4ExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        evaluate: {
            value: ccMailManagerTrafficPolicyIngressIpToEvaluatePropertyToHclTerraform(struct!.evaluate),
            isBlock: true,
            type: "struct",
            storageClassType: "IngressIpToEvaluateProperty",
        },
        operator: {
            value: cdktn.stringToHclTerraform(struct!.operator),
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


export function ccMailManagerTrafficPolicyIngressIpv6ToEvaluatePropertyToTerraform(struct?: CcMailManagerTrafficPolicy.IngressIpv6ToEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute: cdktn.stringToTerraform(struct!.attribute),
    }
}


export function ccMailManagerTrafficPolicyIngressIpv6ToEvaluatePropertyToHclTerraform(struct?: CcMailManagerTrafficPolicy.IngressIpv6ToEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attribute: {
            value: cdktn.stringToHclTerraform(struct!.attribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerTrafficPolicyIngressIpv6ExpressionPropertyToTerraform(struct?: CcMailManagerTrafficPolicy.IngressIpv6ExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        evaluate: ccMailManagerTrafficPolicyIngressIpv6ToEvaluatePropertyToTerraform(struct!.evaluate),
        operator: cdktn.stringToTerraform(struct!.operator),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccMailManagerTrafficPolicyIngressIpv6ExpressionPropertyToHclTerraform(struct?: CcMailManagerTrafficPolicy.IngressIpv6ExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        evaluate: {
            value: ccMailManagerTrafficPolicyIngressIpv6ToEvaluatePropertyToHclTerraform(struct!.evaluate),
            isBlock: true,
            type: "struct",
            storageClassType: "IngressIpv6ToEvaluateProperty",
        },
        operator: {
            value: cdktn.stringToHclTerraform(struct!.operator),
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


export function ccMailManagerTrafficPolicyAnalysisPropertyToTerraform(struct?: CcMailManagerTrafficPolicy.AnalysisProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analyzer: cdktn.stringToTerraform(struct!.analyzer),
        result_field: cdktn.stringToTerraform(struct!.resultField),
    }
}


export function ccMailManagerTrafficPolicyAnalysisPropertyToHclTerraform(struct?: CcMailManagerTrafficPolicy.AnalysisProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        analyzer: {
            value: cdktn.stringToHclTerraform(struct!.analyzer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        result_field: {
            value: cdktn.stringToHclTerraform(struct!.resultField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerTrafficPolicyIngressStringToEvaluatePropertyToTerraform(struct?: CcMailManagerTrafficPolicy.IngressStringToEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analysis: ccMailManagerTrafficPolicyAnalysisPropertyToTerraform(struct!.analysis),
        attribute: cdktn.stringToTerraform(struct!.attribute),
    }
}


export function ccMailManagerTrafficPolicyIngressStringToEvaluatePropertyToHclTerraform(struct?: CcMailManagerTrafficPolicy.IngressStringToEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        analysis: {
            value: ccMailManagerTrafficPolicyAnalysisPropertyToHclTerraform(struct!.analysis),
            isBlock: true,
            type: "struct",
            storageClassType: "AnalysisProperty",
        },
        attribute: {
            value: cdktn.stringToHclTerraform(struct!.attribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerTrafficPolicyIngressStringExpressionPropertyToTerraform(struct?: CcMailManagerTrafficPolicy.IngressStringExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        evaluate: ccMailManagerTrafficPolicyIngressStringToEvaluatePropertyToTerraform(struct!.evaluate),
        operator: cdktn.stringToTerraform(struct!.operator),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccMailManagerTrafficPolicyIngressStringExpressionPropertyToHclTerraform(struct?: CcMailManagerTrafficPolicy.IngressStringExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        evaluate: {
            value: ccMailManagerTrafficPolicyIngressStringToEvaluatePropertyToHclTerraform(struct!.evaluate),
            isBlock: true,
            type: "struct",
            storageClassType: "IngressStringToEvaluateProperty",
        },
        operator: {
            value: cdktn.stringToHclTerraform(struct!.operator),
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


export function ccMailManagerTrafficPolicyIngressTlsProtocolToEvaluatePropertyToTerraform(struct?: CcMailManagerTrafficPolicy.IngressTlsProtocolToEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute: cdktn.stringToTerraform(struct!.attribute),
    }
}


export function ccMailManagerTrafficPolicyIngressTlsProtocolToEvaluatePropertyToHclTerraform(struct?: CcMailManagerTrafficPolicy.IngressTlsProtocolToEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attribute: {
            value: cdktn.stringToHclTerraform(struct!.attribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerTrafficPolicyIngressTlsProtocolExpressionPropertyToTerraform(struct?: CcMailManagerTrafficPolicy.IngressTlsProtocolExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        evaluate: ccMailManagerTrafficPolicyIngressTlsProtocolToEvaluatePropertyToTerraform(struct!.evaluate),
        operator: cdktn.stringToTerraform(struct!.operator),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMailManagerTrafficPolicyIngressTlsProtocolExpressionPropertyToHclTerraform(struct?: CcMailManagerTrafficPolicy.IngressTlsProtocolExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        evaluate: {
            value: ccMailManagerTrafficPolicyIngressTlsProtocolToEvaluatePropertyToHclTerraform(struct!.evaluate),
            isBlock: true,
            type: "struct",
            storageClassType: "IngressTlsProtocolToEvaluateProperty",
        },
        operator: {
            value: cdktn.stringToHclTerraform(struct!.operator),
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


export function ccMailManagerTrafficPolicyPolicyConditionPropertyToTerraform(struct?: CcMailManagerTrafficPolicy.PolicyConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        boolean_expression: ccMailManagerTrafficPolicyIngressBooleanExpressionPropertyToTerraform(struct!.booleanExpression),
        ip_expression: ccMailManagerTrafficPolicyIngressIpv4ExpressionPropertyToTerraform(struct!.ipExpression),
        ipv_6_expression: ccMailManagerTrafficPolicyIngressIpv6ExpressionPropertyToTerraform(struct!.ipv6Expression),
        string_expression: ccMailManagerTrafficPolicyIngressStringExpressionPropertyToTerraform(struct!.stringExpression),
        tls_expression: ccMailManagerTrafficPolicyIngressTlsProtocolExpressionPropertyToTerraform(struct!.tlsExpression),
    }
}


export function ccMailManagerTrafficPolicyPolicyConditionPropertyToHclTerraform(struct?: CcMailManagerTrafficPolicy.PolicyConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        boolean_expression: {
            value: ccMailManagerTrafficPolicyIngressBooleanExpressionPropertyToHclTerraform(struct!.booleanExpression),
            isBlock: true,
            type: "struct",
            storageClassType: "IngressBooleanExpressionProperty",
        },
        ip_expression: {
            value: ccMailManagerTrafficPolicyIngressIpv4ExpressionPropertyToHclTerraform(struct!.ipExpression),
            isBlock: true,
            type: "struct",
            storageClassType: "IngressIpv4ExpressionProperty",
        },
        ipv_6_expression: {
            value: ccMailManagerTrafficPolicyIngressIpv6ExpressionPropertyToHclTerraform(struct!.ipv6Expression),
            isBlock: true,
            type: "struct",
            storageClassType: "IngressIpv6ExpressionProperty",
        },
        string_expression: {
            value: ccMailManagerTrafficPolicyIngressStringExpressionPropertyToHclTerraform(struct!.stringExpression),
            isBlock: true,
            type: "struct",
            storageClassType: "IngressStringExpressionProperty",
        },
        tls_expression: {
            value: ccMailManagerTrafficPolicyIngressTlsProtocolExpressionPropertyToHclTerraform(struct!.tlsExpression),
            isBlock: true,
            type: "struct",
            storageClassType: "IngressTlsProtocolExpressionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerTrafficPolicyPolicyStatementPropertyToTerraform(struct?: CcMailManagerTrafficPolicy.PolicyStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
        conditions: cdktn.listMapper(ccMailManagerTrafficPolicyPolicyConditionPropertyToTerraform, false)(struct!.conditions),
    }
}


export function ccMailManagerTrafficPolicyPolicyStatementPropertyToHclTerraform(struct?: CcMailManagerTrafficPolicy.PolicyStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action: {
            value: cdktn.stringToHclTerraform(struct!.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        conditions: {
            value: cdktn.listMapperHcl(ccMailManagerTrafficPolicyPolicyConditionPropertyToHclTerraform, false)(struct!.conditions),
            isBlock: true,
            type: "list",
            storageClassType: "PolicyConditionPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerTrafficPolicyTagPropertyToTerraform(struct?: CcMailManagerTrafficPolicy.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMailManagerTrafficPolicyTagPropertyToHclTerraform(struct?: CcMailManagerTrafficPolicy.TagProperty | cdktn.IResolvable): any {
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


export namespace CcMailManagerTrafficPolicy {
export interface IngressAnalysisProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analyzer CcMailManagerTrafficPolicy#analyzer}
    */
    readonly analyzer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#result_field CcMailManagerTrafficPolicy#result_field}
    */
    readonly resultField?: string;
}
export class IngressAnalysisPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IngressAnalysisProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._analyzer !== undefined) {
            hasAnyValues = true;
            internalValueResult.analyzer = this._analyzer;
        }
        if (this._resultField !== undefined) {
            hasAnyValues = true;
            internalValueResult.resultField = this._resultField;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IngressAnalysisProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._analyzer = undefined;
            this._resultField = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._analyzer = value.analyzer;
            this._resultField = value.resultField;
        }
    }

    // analyzer - computed: true, optional: true, required: false
    private _analyzer?: string; 
    public get analyzer() {
        return this.getStringAttribute('analyzer');
    }
    public set analyzer(value: string) {
        this._analyzer = value;
    }
    public resetAnalyzer() {
        this._analyzer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get analyzerInput() {
        return this._analyzer;
    }

    // result_field - computed: true, optional: true, required: false
    private _resultField?: string; 
    public get resultField() {
        return this.getStringAttribute('result_field');
    }
    public set resultField(value: string) {
        this._resultField = value;
    }
    public resetResultField() {
        this._resultField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resultFieldInput() {
        return this._resultField;
    }
}
export interface IngressIsInAddressListProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#address_lists CcMailManagerTrafficPolicy#address_lists}
    */
    readonly addressLists?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute CcMailManagerTrafficPolicy#attribute}
    */
    readonly attribute?: string;
}
export class IngressIsInAddressListPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IngressIsInAddressListProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._addressLists !== undefined) {
            hasAnyValues = true;
            internalValueResult.addressLists = this._addressLists;
        }
        if (this._attribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.attribute = this._attribute;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IngressIsInAddressListProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addressLists = undefined;
            this._attribute = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addressLists = value.addressLists;
            this._attribute = value.attribute;
        }
    }

    // address_lists - computed: true, optional: true, required: false
    private _addressLists?: string[]; 
    public get addressLists() {
        return this.getListAttribute('address_lists');
    }
    public set addressLists(value: string[]) {
        this._addressLists = value;
    }
    public resetAddressLists() {
        this._addressLists = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressListsInput() {
        return this._addressLists;
    }

    // attribute - computed: true, optional: true, required: false
    private _attribute?: string; 
    public get attribute() {
        return this.getStringAttribute('attribute');
    }
    public set attribute(value: string) {
        this._attribute = value;
    }
    public resetAttribute() {
        this._attribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeInput() {
        return this._attribute;
    }
}
export interface IngressBooleanToEvaluateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analysis CcMailManagerTrafficPolicy#analysis}
    */
    readonly analysis?: IngressAnalysisProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#is_in_address_list CcMailManagerTrafficPolicy#is_in_address_list}
    */
    readonly isInAddressList?: IngressIsInAddressListProperty;
}
export class IngressBooleanToEvaluatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IngressBooleanToEvaluateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._analysis?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.analysis = this._analysis?.internalValue;
        }
        if (this._isInAddressList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.isInAddressList = this._isInAddressList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IngressBooleanToEvaluateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._analysis.internalValue = undefined;
            this._isInAddressList.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._analysis.internalValue = value.analysis;
            this._isInAddressList.internalValue = value.isInAddressList;
        }
    }

    // analysis - computed: true, optional: true, required: false
    private _analysis = new IngressAnalysisPropertyOutputReference(this, "analysis");
    public get analysis() {
        return this._analysis;
    }
    public putAnalysis(value: IngressAnalysisProperty) {
        this._analysis.internalValue = value;
    }
    public resetAnalysis() {
        this._analysis.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get analysisInput() {
        return this._analysis.internalValue;
    }

    // is_in_address_list - computed: true, optional: true, required: false
    private _isInAddressList = new IngressIsInAddressListPropertyOutputReference(this, "is_in_address_list");
    public get isInAddressList() {
        return this._isInAddressList;
    }
    public putIsInAddressList(value: IngressIsInAddressListProperty) {
        this._isInAddressList.internalValue = value;
    }
    public resetIsInAddressList() {
        this._isInAddressList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isInAddressListInput() {
        return this._isInAddressList.internalValue;
    }
}
export interface IngressBooleanExpressionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate CcMailManagerTrafficPolicy#evaluate}
    */
    readonly evaluate?: IngressBooleanToEvaluateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator CcMailManagerTrafficPolicy#operator}
    */
    readonly operator?: string;
}
export class IngressBooleanExpressionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IngressBooleanExpressionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._evaluate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.evaluate = this._evaluate?.internalValue;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IngressBooleanExpressionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._evaluate.internalValue = undefined;
            this._operator = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._evaluate.internalValue = value.evaluate;
            this._operator = value.operator;
        }
    }

    // evaluate - computed: true, optional: true, required: false
    private _evaluate = new IngressBooleanToEvaluatePropertyOutputReference(this, "evaluate");
    public get evaluate() {
        return this._evaluate;
    }
    public putEvaluate(value: IngressBooleanToEvaluateProperty) {
        this._evaluate.internalValue = value;
    }
    public resetEvaluate() {
        this._evaluate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluateInput() {
        return this._evaluate.internalValue;
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
export interface IngressIpToEvaluateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute CcMailManagerTrafficPolicy#attribute}
    */
    readonly attribute?: string;
}
export class IngressIpToEvaluatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IngressIpToEvaluateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.attribute = this._attribute;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IngressIpToEvaluateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attribute = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attribute = value.attribute;
        }
    }

    // attribute - computed: true, optional: true, required: false
    private _attribute?: string; 
    public get attribute() {
        return this.getStringAttribute('attribute');
    }
    public set attribute(value: string) {
        this._attribute = value;
    }
    public resetAttribute() {
        this._attribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeInput() {
        return this._attribute;
    }
}
export interface IngressIpv4ExpressionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate CcMailManagerTrafficPolicy#evaluate}
    */
    readonly evaluate?: IngressIpToEvaluateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator CcMailManagerTrafficPolicy#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#values CcMailManagerTrafficPolicy#values}
    */
    readonly values?: string[];
}
export class IngressIpv4ExpressionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IngressIpv4ExpressionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._evaluate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.evaluate = this._evaluate?.internalValue;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IngressIpv4ExpressionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._evaluate.internalValue = undefined;
            this._operator = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._evaluate.internalValue = value.evaluate;
            this._operator = value.operator;
            this._values = value.values;
        }
    }

    // evaluate - computed: true, optional: true, required: false
    private _evaluate = new IngressIpToEvaluatePropertyOutputReference(this, "evaluate");
    public get evaluate() {
        return this._evaluate;
    }
    public putEvaluate(value: IngressIpToEvaluateProperty) {
        this._evaluate.internalValue = value;
    }
    public resetEvaluate() {
        this._evaluate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluateInput() {
        return this._evaluate.internalValue;
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
export interface IngressIpv6ToEvaluateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute CcMailManagerTrafficPolicy#attribute}
    */
    readonly attribute?: string;
}
export class IngressIpv6ToEvaluatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IngressIpv6ToEvaluateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.attribute = this._attribute;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IngressIpv6ToEvaluateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attribute = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attribute = value.attribute;
        }
    }

    // attribute - computed: true, optional: true, required: false
    private _attribute?: string; 
    public get attribute() {
        return this.getStringAttribute('attribute');
    }
    public set attribute(value: string) {
        this._attribute = value;
    }
    public resetAttribute() {
        this._attribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeInput() {
        return this._attribute;
    }
}
export interface IngressIpv6ExpressionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate CcMailManagerTrafficPolicy#evaluate}
    */
    readonly evaluate?: IngressIpv6ToEvaluateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator CcMailManagerTrafficPolicy#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#values CcMailManagerTrafficPolicy#values}
    */
    readonly values?: string[];
}
export class IngressIpv6ExpressionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IngressIpv6ExpressionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._evaluate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.evaluate = this._evaluate?.internalValue;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IngressIpv6ExpressionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._evaluate.internalValue = undefined;
            this._operator = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._evaluate.internalValue = value.evaluate;
            this._operator = value.operator;
            this._values = value.values;
        }
    }

    // evaluate - computed: true, optional: true, required: false
    private _evaluate = new IngressIpv6ToEvaluatePropertyOutputReference(this, "evaluate");
    public get evaluate() {
        return this._evaluate;
    }
    public putEvaluate(value: IngressIpv6ToEvaluateProperty) {
        this._evaluate.internalValue = value;
    }
    public resetEvaluate() {
        this._evaluate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluateInput() {
        return this._evaluate.internalValue;
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
export interface AnalysisProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analyzer CcMailManagerTrafficPolicy#analyzer}
    */
    readonly analyzer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#result_field CcMailManagerTrafficPolicy#result_field}
    */
    readonly resultField?: string;
}
export class AnalysisPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AnalysisProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._analyzer !== undefined) {
            hasAnyValues = true;
            internalValueResult.analyzer = this._analyzer;
        }
        if (this._resultField !== undefined) {
            hasAnyValues = true;
            internalValueResult.resultField = this._resultField;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnalysisProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._analyzer = undefined;
            this._resultField = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._analyzer = value.analyzer;
            this._resultField = value.resultField;
        }
    }

    // analyzer - computed: true, optional: true, required: false
    private _analyzer?: string; 
    public get analyzer() {
        return this.getStringAttribute('analyzer');
    }
    public set analyzer(value: string) {
        this._analyzer = value;
    }
    public resetAnalyzer() {
        this._analyzer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get analyzerInput() {
        return this._analyzer;
    }

    // result_field - computed: true, optional: true, required: false
    private _resultField?: string; 
    public get resultField() {
        return this.getStringAttribute('result_field');
    }
    public set resultField(value: string) {
        this._resultField = value;
    }
    public resetResultField() {
        this._resultField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resultFieldInput() {
        return this._resultField;
    }
}
export interface IngressStringToEvaluateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analysis CcMailManagerTrafficPolicy#analysis}
    */
    readonly analysis?: AnalysisProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute CcMailManagerTrafficPolicy#attribute}
    */
    readonly attribute?: string;
}
export class IngressStringToEvaluatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IngressStringToEvaluateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._analysis?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.analysis = this._analysis?.internalValue;
        }
        if (this._attribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.attribute = this._attribute;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IngressStringToEvaluateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._analysis.internalValue = undefined;
            this._attribute = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._analysis.internalValue = value.analysis;
            this._attribute = value.attribute;
        }
    }

    // analysis - computed: true, optional: true, required: false
    private _analysis = new AnalysisPropertyOutputReference(this, "analysis");
    public get analysis() {
        return this._analysis;
    }
    public putAnalysis(value: AnalysisProperty) {
        this._analysis.internalValue = value;
    }
    public resetAnalysis() {
        this._analysis.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get analysisInput() {
        return this._analysis.internalValue;
    }

    // attribute - computed: true, optional: true, required: false
    private _attribute?: string; 
    public get attribute() {
        return this.getStringAttribute('attribute');
    }
    public set attribute(value: string) {
        this._attribute = value;
    }
    public resetAttribute() {
        this._attribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeInput() {
        return this._attribute;
    }
}
export interface IngressStringExpressionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate CcMailManagerTrafficPolicy#evaluate}
    */
    readonly evaluate?: IngressStringToEvaluateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator CcMailManagerTrafficPolicy#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#values CcMailManagerTrafficPolicy#values}
    */
    readonly values?: string[];
}
export class IngressStringExpressionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IngressStringExpressionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._evaluate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.evaluate = this._evaluate?.internalValue;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IngressStringExpressionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._evaluate.internalValue = undefined;
            this._operator = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._evaluate.internalValue = value.evaluate;
            this._operator = value.operator;
            this._values = value.values;
        }
    }

    // evaluate - computed: true, optional: true, required: false
    private _evaluate = new IngressStringToEvaluatePropertyOutputReference(this, "evaluate");
    public get evaluate() {
        return this._evaluate;
    }
    public putEvaluate(value: IngressStringToEvaluateProperty) {
        this._evaluate.internalValue = value;
    }
    public resetEvaluate() {
        this._evaluate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluateInput() {
        return this._evaluate.internalValue;
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
export interface IngressTlsProtocolToEvaluateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute CcMailManagerTrafficPolicy#attribute}
    */
    readonly attribute?: string;
}
export class IngressTlsProtocolToEvaluatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IngressTlsProtocolToEvaluateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.attribute = this._attribute;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IngressTlsProtocolToEvaluateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attribute = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attribute = value.attribute;
        }
    }

    // attribute - computed: true, optional: true, required: false
    private _attribute?: string; 
    public get attribute() {
        return this.getStringAttribute('attribute');
    }
    public set attribute(value: string) {
        this._attribute = value;
    }
    public resetAttribute() {
        this._attribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeInput() {
        return this._attribute;
    }
}
export interface IngressTlsProtocolExpressionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate CcMailManagerTrafficPolicy#evaluate}
    */
    readonly evaluate?: IngressTlsProtocolToEvaluateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator CcMailManagerTrafficPolicy#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#value CcMailManagerTrafficPolicy#value}
    */
    readonly value?: string;
}
export class IngressTlsProtocolExpressionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IngressTlsProtocolExpressionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._evaluate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.evaluate = this._evaluate?.internalValue;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IngressTlsProtocolExpressionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._evaluate.internalValue = undefined;
            this._operator = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._evaluate.internalValue = value.evaluate;
            this._operator = value.operator;
            this._value = value.value;
        }
    }

    // evaluate - computed: true, optional: true, required: false
    private _evaluate = new IngressTlsProtocolToEvaluatePropertyOutputReference(this, "evaluate");
    public get evaluate() {
        return this._evaluate;
    }
    public putEvaluate(value: IngressTlsProtocolToEvaluateProperty) {
        this._evaluate.internalValue = value;
    }
    public resetEvaluate() {
        this._evaluate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluateInput() {
        return this._evaluate.internalValue;
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
export interface PolicyConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#boolean_expression CcMailManagerTrafficPolicy#boolean_expression}
    */
    readonly booleanExpression?: IngressBooleanExpressionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#ip_expression CcMailManagerTrafficPolicy#ip_expression}
    */
    readonly ipExpression?: IngressIpv4ExpressionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#ipv_6_expression CcMailManagerTrafficPolicy#ipv_6_expression}
    */
    readonly ipv6Expression?: IngressIpv6ExpressionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#string_expression CcMailManagerTrafficPolicy#string_expression}
    */
    readonly stringExpression?: IngressStringExpressionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#tls_expression CcMailManagerTrafficPolicy#tls_expression}
    */
    readonly tlsExpression?: IngressTlsProtocolExpressionProperty;
}
export class PolicyConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PolicyConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._booleanExpression?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.booleanExpression = this._booleanExpression?.internalValue;
        }
        if (this._ipExpression?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipExpression = this._ipExpression?.internalValue;
        }
        if (this._ipv6Expression?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6Expression = this._ipv6Expression?.internalValue;
        }
        if (this._stringExpression?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringExpression = this._stringExpression?.internalValue;
        }
        if (this._tlsExpression?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tlsExpression = this._tlsExpression?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._booleanExpression.internalValue = undefined;
            this._ipExpression.internalValue = undefined;
            this._ipv6Expression.internalValue = undefined;
            this._stringExpression.internalValue = undefined;
            this._tlsExpression.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._booleanExpression.internalValue = value.booleanExpression;
            this._ipExpression.internalValue = value.ipExpression;
            this._ipv6Expression.internalValue = value.ipv6Expression;
            this._stringExpression.internalValue = value.stringExpression;
            this._tlsExpression.internalValue = value.tlsExpression;
        }
    }

    // boolean_expression - computed: true, optional: true, required: false
    private _booleanExpression = new IngressBooleanExpressionPropertyOutputReference(this, "boolean_expression");
    public get booleanExpression() {
        return this._booleanExpression;
    }
    public putBooleanExpression(value: IngressBooleanExpressionProperty) {
        this._booleanExpression.internalValue = value;
    }
    public resetBooleanExpression() {
        this._booleanExpression.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get booleanExpressionInput() {
        return this._booleanExpression.internalValue;
    }

    // ip_expression - computed: true, optional: true, required: false
    private _ipExpression = new IngressIpv4ExpressionPropertyOutputReference(this, "ip_expression");
    public get ipExpression() {
        return this._ipExpression;
    }
    public putIpExpression(value: IngressIpv4ExpressionProperty) {
        this._ipExpression.internalValue = value;
    }
    public resetIpExpression() {
        this._ipExpression.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipExpressionInput() {
        return this._ipExpression.internalValue;
    }

    // ipv_6_expression - computed: true, optional: true, required: false
    private _ipv6Expression = new IngressIpv6ExpressionPropertyOutputReference(this, "ipv_6_expression");
    public get ipv6Expression() {
        return this._ipv6Expression;
    }
    public putIpv6Expression(value: IngressIpv6ExpressionProperty) {
        this._ipv6Expression.internalValue = value;
    }
    public resetIpv6Expression() {
        this._ipv6Expression.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6ExpressionInput() {
        return this._ipv6Expression.internalValue;
    }

    // string_expression - computed: true, optional: true, required: false
    private _stringExpression = new IngressStringExpressionPropertyOutputReference(this, "string_expression");
    public get stringExpression() {
        return this._stringExpression;
    }
    public putStringExpression(value: IngressStringExpressionProperty) {
        this._stringExpression.internalValue = value;
    }
    public resetStringExpression() {
        this._stringExpression.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringExpressionInput() {
        return this._stringExpression.internalValue;
    }

    // tls_expression - computed: true, optional: true, required: false
    private _tlsExpression = new IngressTlsProtocolExpressionPropertyOutputReference(this, "tls_expression");
    public get tlsExpression() {
        return this._tlsExpression;
    }
    public putTlsExpression(value: IngressTlsProtocolExpressionProperty) {
        this._tlsExpression.internalValue = value;
    }
    public resetTlsExpression() {
        this._tlsExpression.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsExpressionInput() {
        return this._tlsExpression.internalValue;
    }
}

export class PolicyConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : PolicyConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): PolicyConditionPropertyOutputReference {
        return new PolicyConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PolicyStatementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#action CcMailManagerTrafficPolicy#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#conditions CcMailManagerTrafficPolicy#conditions}
    */
    readonly conditions: PolicyConditionProperty[] | cdktn.IResolvable;
}
export class PolicyStatementPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PolicyStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._conditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditions = this._conditions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._conditions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._conditions.internalValue = value.conditions;
        }
    }

    // action - computed: false, optional: false, required: true
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }

    // conditions - computed: false, optional: false, required: true
    private _conditions = new PolicyConditionPropertyList(this, "conditions", false);
    public get conditions() {
        return this._conditions;
    }
    public putConditions(value: PolicyConditionProperty[] | cdktn.IResolvable) {
        this._conditions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
        return this._conditions.internalValue;
    }
}

export class PolicyStatementPropertyList extends cdktn.ComplexList {
    public internalValue? : PolicyStatementProperty[] | cdktn.IResolvable

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
    public get(index: number): PolicyStatementPropertyOutputReference {
        return new PolicyStatementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#key CcMailManagerTrafficPolicy#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#value CcMailManagerTrafficPolicy#value}
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
