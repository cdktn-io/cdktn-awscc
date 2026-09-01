// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMailManagerRuleSetProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#rule_set_name CcMailManagerRuleSet#rule_set_name}
    */
    readonly ruleSetName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#rules CcMailManagerRuleSet#rules}
    */
    readonly rules: CcMailManagerRuleSet.RuleProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#tags CcMailManagerRuleSet#tags}
    */
    readonly tags?: CcMailManagerRuleSet.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set awscc_ses_mail_manager_rule_set}
*/
export class CcMailManagerRuleSet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ses_mail_manager_rule_set";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMailManagerRuleSet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMailManagerRuleSet to import
    * @param importFromId The id of the existing CcMailManagerRuleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMailManagerRuleSet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_mail_manager_rule_set", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set awscc_ses_mail_manager_rule_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMailManagerRuleSetProps
    */
    public constructor(scope: Construct, id: string, config: CcMailManagerRuleSetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ses_mail_manager_rule_set',
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
        this._ruleSetName = config.ruleSetName;
        this._rules.internalValue = config.rules;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // rule_set_arn - computed: true, optional: false, required: false
    public get ruleSetArn() {
        return this.getStringAttribute('rule_set_arn');
    }

    // rule_set_id - computed: true, optional: false, required: false
    public get ruleSetId() {
        return this.getStringAttribute('rule_set_id');
    }

    // rule_set_name - computed: true, optional: true, required: false
    private _ruleSetName?: string; 
    public get ruleSetName() {
        return this.getStringAttribute('rule_set_name');
    }
    public set ruleSetName(value: string) {
        this._ruleSetName = value;
    }
    public resetRuleSetName() {
        this._ruleSetName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleSetNameInput() {
        return this._ruleSetName;
    }

    // rules - computed: false, optional: false, required: true
    private _rules = new CcMailManagerRuleSet.RulePropertyList(this, "rules", false);
    public get rules() {
        return this._rules;
    }
    public putRules(value: CcMailManagerRuleSet.RuleProperty[] | cdktn.IResolvable) {
        this._rules.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
        return this._rules.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcMailManagerRuleSet.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcMailManagerRuleSet.TagProperty[] | cdktn.IResolvable) {
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
            rule_set_name: cdktn.stringToTerraform(this._ruleSetName),
            rules: cdktn.listMapper(ccMailManagerRuleSetRulePropertyToTerraform, false)(this._rules.internalValue),
            tags: cdktn.listMapper(ccMailManagerRuleSetTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            rule_set_name: {
                value: cdktn.stringToHclTerraform(this._ruleSetName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rules: {
                value: cdktn.listMapperHcl(ccMailManagerRuleSetRulePropertyToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMailManagerRuleSet.RulePropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccMailManagerRuleSetTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMailManagerRuleSet.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMailManagerRuleSetAddHeaderActionPropertyToTerraform(struct?: CcMailManagerRuleSet.AddHeaderActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header_name: cdktn.stringToTerraform(struct!.headerName),
        header_value: cdktn.stringToTerraform(struct!.headerValue),
    }
}


export function ccMailManagerRuleSetAddHeaderActionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.AddHeaderActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header_name: {
            value: cdktn.stringToHclTerraform(struct!.headerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header_value: {
            value: cdktn.stringToHclTerraform(struct!.headerValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRuleSetArchiveActionPropertyToTerraform(struct?: CcMailManagerRuleSet.ArchiveActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
        target_archive: cdktn.stringToTerraform(struct!.targetArchive),
    }
}


export function ccMailManagerRuleSetArchiveActionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.ArchiveActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action_failure_policy: {
            value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_archive: {
            value: cdktn.stringToHclTerraform(struct!.targetArchive),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRuleSetBounceActionPropertyToTerraform(struct?: CcMailManagerRuleSet.BounceActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
        diagnostic_message: cdktn.stringToTerraform(struct!.diagnosticMessage),
        message: cdktn.stringToTerraform(struct!.message),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        sender: cdktn.stringToTerraform(struct!.sender),
        smtp_reply_code: cdktn.stringToTerraform(struct!.smtpReplyCode),
        status_code: cdktn.stringToTerraform(struct!.statusCode),
    }
}


export function ccMailManagerRuleSetBounceActionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.BounceActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action_failure_policy: {
            value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        diagnostic_message: {
            value: cdktn.stringToHclTerraform(struct!.diagnosticMessage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message: {
            value: cdktn.stringToHclTerraform(struct!.message),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sender: {
            value: cdktn.stringToHclTerraform(struct!.sender),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        smtp_reply_code: {
            value: cdktn.stringToHclTerraform(struct!.smtpReplyCode),
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


export function ccMailManagerRuleSetDeliverToMailboxActionPropertyToTerraform(struct?: CcMailManagerRuleSet.DeliverToMailboxActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
        mailbox_arn: cdktn.stringToTerraform(struct!.mailboxArn),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccMailManagerRuleSetDeliverToMailboxActionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.DeliverToMailboxActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action_failure_policy: {
            value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mailbox_arn: {
            value: cdktn.stringToHclTerraform(struct!.mailboxArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRuleSetDeliverToQBusinessActionPropertyToTerraform(struct?: CcMailManagerRuleSet.DeliverToQBusinessActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
        application_id: cdktn.stringToTerraform(struct!.applicationId),
        index_id: cdktn.stringToTerraform(struct!.indexId),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccMailManagerRuleSetDeliverToQBusinessActionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.DeliverToQBusinessActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action_failure_policy: {
            value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        application_id: {
            value: cdktn.stringToHclTerraform(struct!.applicationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        index_id: {
            value: cdktn.stringToHclTerraform(struct!.indexId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRuleSetInvokeLambdaActionPropertyToTerraform(struct?: CcMailManagerRuleSet.InvokeLambdaActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
        function_arn: cdktn.stringToTerraform(struct!.functionArn),
        invocation_type: cdktn.stringToTerraform(struct!.invocationType),
        retry_time_minutes: cdktn.numberToTerraform(struct!.retryTimeMinutes),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccMailManagerRuleSetInvokeLambdaActionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.InvokeLambdaActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action_failure_policy: {
            value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        function_arn: {
            value: cdktn.stringToHclTerraform(struct!.functionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        invocation_type: {
            value: cdktn.stringToHclTerraform(struct!.invocationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        retry_time_minutes: {
            value: cdktn.numberToHclTerraform(struct!.retryTimeMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRuleSetSnsActionPropertyToTerraform(struct?: CcMailManagerRuleSet.SnsActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
        encoding: cdktn.stringToTerraform(struct!.encoding),
        payload_type: cdktn.stringToTerraform(struct!.payloadType),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        topic_arn: cdktn.stringToTerraform(struct!.topicArn),
    }
}


export function ccMailManagerRuleSetSnsActionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.SnsActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action_failure_policy: {
            value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encoding: {
            value: cdktn.stringToHclTerraform(struct!.encoding),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload_type: {
            value: cdktn.stringToHclTerraform(struct!.payloadType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        topic_arn: {
            value: cdktn.stringToHclTerraform(struct!.topicArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRuleSetRelayActionPropertyToTerraform(struct?: CcMailManagerRuleSet.RelayActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
        mail_from: cdktn.stringToTerraform(struct!.mailFrom),
        relay: cdktn.stringToTerraform(struct!.relay),
    }
}


export function ccMailManagerRuleSetRelayActionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.RelayActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action_failure_policy: {
            value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mail_from: {
            value: cdktn.stringToHclTerraform(struct!.mailFrom),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        relay: {
            value: cdktn.stringToHclTerraform(struct!.relay),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRuleSetReplaceRecipientActionPropertyToTerraform(struct?: CcMailManagerRuleSet.ReplaceRecipientActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        replace_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.replaceWith),
    }
}


export function ccMailManagerRuleSetReplaceRecipientActionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.ReplaceRecipientActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        replace_with: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.replaceWith),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRuleSetSendActionPropertyToTerraform(struct?: CcMailManagerRuleSet.SendActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccMailManagerRuleSetSendActionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.SendActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action_failure_policy: {
            value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRuleSetS3ActionPropertyToTerraform(struct?: CcMailManagerRuleSet.S3ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
        s3_prefix: cdktn.stringToTerraform(struct!.s3Prefix),
        s3_sse_kms_key_id: cdktn.stringToTerraform(struct!.s3SseKmsKeyId),
    }
}


export function ccMailManagerRuleSetS3ActionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.S3ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action_failure_policy: {
            value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_bucket: {
            value: cdktn.stringToHclTerraform(struct!.s3Bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_prefix: {
            value: cdktn.stringToHclTerraform(struct!.s3Prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_sse_kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.s3SseKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRuleSetRuleActionPropertyToTerraform(struct?: CcMailManagerRuleSet.RuleActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        add_header: ccMailManagerRuleSetAddHeaderActionPropertyToTerraform(struct!.addHeader),
        archive: ccMailManagerRuleSetArchiveActionPropertyToTerraform(struct!.archive),
        bounce: ccMailManagerRuleSetBounceActionPropertyToTerraform(struct!.bounce),
        deliver_to_mailbox: ccMailManagerRuleSetDeliverToMailboxActionPropertyToTerraform(struct!.deliverToMailbox),
        deliver_to_q_business: ccMailManagerRuleSetDeliverToQBusinessActionPropertyToTerraform(struct!.deliverToQBusiness),
        drop: cdktn.stringToTerraform(struct!.drop),
        invoke_lambda: ccMailManagerRuleSetInvokeLambdaActionPropertyToTerraform(struct!.invokeLambda),
        publish_to_sns: ccMailManagerRuleSetSnsActionPropertyToTerraform(struct!.publishToSns),
        relay: ccMailManagerRuleSetRelayActionPropertyToTerraform(struct!.relay),
        replace_recipient: ccMailManagerRuleSetReplaceRecipientActionPropertyToTerraform(struct!.replaceRecipient),
        send: ccMailManagerRuleSetSendActionPropertyToTerraform(struct!.send),
        write_to_s3: ccMailManagerRuleSetS3ActionPropertyToTerraform(struct!.writeToS3),
    }
}


export function ccMailManagerRuleSetRuleActionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.RuleActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        add_header: {
            value: ccMailManagerRuleSetAddHeaderActionPropertyToHclTerraform(struct!.addHeader),
            isBlock: true,
            type: "struct",
            storageClassType: "AddHeaderActionProperty",
        },
        archive: {
            value: ccMailManagerRuleSetArchiveActionPropertyToHclTerraform(struct!.archive),
            isBlock: true,
            type: "struct",
            storageClassType: "ArchiveActionProperty",
        },
        bounce: {
            value: ccMailManagerRuleSetBounceActionPropertyToHclTerraform(struct!.bounce),
            isBlock: true,
            type: "struct",
            storageClassType: "BounceActionProperty",
        },
        deliver_to_mailbox: {
            value: ccMailManagerRuleSetDeliverToMailboxActionPropertyToHclTerraform(struct!.deliverToMailbox),
            isBlock: true,
            type: "struct",
            storageClassType: "DeliverToMailboxActionProperty",
        },
        deliver_to_q_business: {
            value: ccMailManagerRuleSetDeliverToQBusinessActionPropertyToHclTerraform(struct!.deliverToQBusiness),
            isBlock: true,
            type: "struct",
            storageClassType: "DeliverToQBusinessActionProperty",
        },
        drop: {
            value: cdktn.stringToHclTerraform(struct!.drop),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        invoke_lambda: {
            value: ccMailManagerRuleSetInvokeLambdaActionPropertyToHclTerraform(struct!.invokeLambda),
            isBlock: true,
            type: "struct",
            storageClassType: "InvokeLambdaActionProperty",
        },
        publish_to_sns: {
            value: ccMailManagerRuleSetSnsActionPropertyToHclTerraform(struct!.publishToSns),
            isBlock: true,
            type: "struct",
            storageClassType: "SnsActionProperty",
        },
        relay: {
            value: ccMailManagerRuleSetRelayActionPropertyToHclTerraform(struct!.relay),
            isBlock: true,
            type: "struct",
            storageClassType: "RelayActionProperty",
        },
        replace_recipient: {
            value: ccMailManagerRuleSetReplaceRecipientActionPropertyToHclTerraform(struct!.replaceRecipient),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplaceRecipientActionProperty",
        },
        send: {
            value: ccMailManagerRuleSetSendActionPropertyToHclTerraform(struct!.send),
            isBlock: true,
            type: "struct",
            storageClassType: "SendActionProperty",
        },
        write_to_s3: {
            value: ccMailManagerRuleSetS3ActionPropertyToHclTerraform(struct!.writeToS3),
            isBlock: true,
            type: "struct",
            storageClassType: "S3ActionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRuleSetAnalysisPropertyToTerraform(struct?: CcMailManagerRuleSet.AnalysisProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analyzer: cdktn.stringToTerraform(struct!.analyzer),
        result_field: cdktn.stringToTerraform(struct!.resultField),
    }
}


export function ccMailManagerRuleSetAnalysisPropertyToHclTerraform(struct?: CcMailManagerRuleSet.AnalysisProperty | cdktn.IResolvable): any {
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


export function ccMailManagerRuleSetRuleIsInAddressListPropertyToTerraform(struct?: CcMailManagerRuleSet.RuleIsInAddressListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        address_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.addressLists),
        attribute: cdktn.stringToTerraform(struct!.attribute),
    }
}


export function ccMailManagerRuleSetRuleIsInAddressListPropertyToHclTerraform(struct?: CcMailManagerRuleSet.RuleIsInAddressListProperty | cdktn.IResolvable): any {
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


export function ccMailManagerRuleSetRuleBooleanToEvaluatePropertyToTerraform(struct?: CcMailManagerRuleSet.RuleBooleanToEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analysis: ccMailManagerRuleSetAnalysisPropertyToTerraform(struct!.analysis),
        attribute: cdktn.stringToTerraform(struct!.attribute),
        is_in_address_list: ccMailManagerRuleSetRuleIsInAddressListPropertyToTerraform(struct!.isInAddressList),
    }
}


export function ccMailManagerRuleSetRuleBooleanToEvaluatePropertyToHclTerraform(struct?: CcMailManagerRuleSet.RuleBooleanToEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        analysis: {
            value: ccMailManagerRuleSetAnalysisPropertyToHclTerraform(struct!.analysis),
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
        is_in_address_list: {
            value: ccMailManagerRuleSetRuleIsInAddressListPropertyToHclTerraform(struct!.isInAddressList),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleIsInAddressListProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRuleSetRuleBooleanExpressionPropertyToTerraform(struct?: CcMailManagerRuleSet.RuleBooleanExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        evaluate: ccMailManagerRuleSetRuleBooleanToEvaluatePropertyToTerraform(struct!.evaluate),
        operator: cdktn.stringToTerraform(struct!.operator),
    }
}


export function ccMailManagerRuleSetRuleBooleanExpressionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.RuleBooleanExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        evaluate: {
            value: ccMailManagerRuleSetRuleBooleanToEvaluatePropertyToHclTerraform(struct!.evaluate),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleBooleanToEvaluateProperty",
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


export function ccMailManagerRuleSetRuleDmarcExpressionPropertyToTerraform(struct?: CcMailManagerRuleSet.RuleDmarcExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        operator: cdktn.stringToTerraform(struct!.operator),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccMailManagerRuleSetRuleDmarcExpressionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.RuleDmarcExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccMailManagerRuleSetRuleIpToEvaluatePropertyToTerraform(struct?: CcMailManagerRuleSet.RuleIpToEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute: cdktn.stringToTerraform(struct!.attribute),
    }
}


export function ccMailManagerRuleSetRuleIpToEvaluatePropertyToHclTerraform(struct?: CcMailManagerRuleSet.RuleIpToEvaluateProperty | cdktn.IResolvable): any {
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


export function ccMailManagerRuleSetRuleIpExpressionPropertyToTerraform(struct?: CcMailManagerRuleSet.RuleIpExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        evaluate: ccMailManagerRuleSetRuleIpToEvaluatePropertyToTerraform(struct!.evaluate),
        operator: cdktn.stringToTerraform(struct!.operator),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccMailManagerRuleSetRuleIpExpressionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.RuleIpExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        evaluate: {
            value: ccMailManagerRuleSetRuleIpToEvaluatePropertyToHclTerraform(struct!.evaluate),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleIpToEvaluateProperty",
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


export function ccMailManagerRuleSetRuleNumberToEvaluatePropertyToTerraform(struct?: CcMailManagerRuleSet.RuleNumberToEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute: cdktn.stringToTerraform(struct!.attribute),
    }
}


export function ccMailManagerRuleSetRuleNumberToEvaluatePropertyToHclTerraform(struct?: CcMailManagerRuleSet.RuleNumberToEvaluateProperty | cdktn.IResolvable): any {
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


export function ccMailManagerRuleSetRuleNumberExpressionPropertyToTerraform(struct?: CcMailManagerRuleSet.RuleNumberExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        evaluate: ccMailManagerRuleSetRuleNumberToEvaluatePropertyToTerraform(struct!.evaluate),
        operator: cdktn.stringToTerraform(struct!.operator),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccMailManagerRuleSetRuleNumberExpressionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.RuleNumberExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        evaluate: {
            value: ccMailManagerRuleSetRuleNumberToEvaluatePropertyToHclTerraform(struct!.evaluate),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleNumberToEvaluateProperty",
        },
        operator: {
            value: cdktn.stringToHclTerraform(struct!.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisPropertyToTerraform(struct?: CcMailManagerRuleSet.RulesConditionsStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analyzer: cdktn.stringToTerraform(struct!.analyzer),
        result_field: cdktn.stringToTerraform(struct!.resultField),
    }
}


export function ccMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisPropertyToHclTerraform(struct?: CcMailManagerRuleSet.RulesConditionsStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
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


export function ccMailManagerRuleSetRuleStringToEvaluatePropertyToTerraform(struct?: CcMailManagerRuleSet.RuleStringToEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analysis: ccMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisPropertyToTerraform(struct!.analysis),
        attribute: cdktn.stringToTerraform(struct!.attribute),
        client_certificate_attribute: cdktn.stringToTerraform(struct!.clientCertificateAttribute),
        mime_header_attribute: cdktn.stringToTerraform(struct!.mimeHeaderAttribute),
    }
}


export function ccMailManagerRuleSetRuleStringToEvaluatePropertyToHclTerraform(struct?: CcMailManagerRuleSet.RuleStringToEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        analysis: {
            value: ccMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisPropertyToHclTerraform(struct!.analysis),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesConditionsStringExpressionEvaluateAnalysisProperty",
        },
        attribute: {
            value: cdktn.stringToHclTerraform(struct!.attribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_certificate_attribute: {
            value: cdktn.stringToHclTerraform(struct!.clientCertificateAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mime_header_attribute: {
            value: cdktn.stringToHclTerraform(struct!.mimeHeaderAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRuleSetRuleStringExpressionPropertyToTerraform(struct?: CcMailManagerRuleSet.RuleStringExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        evaluate: ccMailManagerRuleSetRuleStringToEvaluatePropertyToTerraform(struct!.evaluate),
        operator: cdktn.stringToTerraform(struct!.operator),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccMailManagerRuleSetRuleStringExpressionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.RuleStringExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        evaluate: {
            value: ccMailManagerRuleSetRuleStringToEvaluatePropertyToHclTerraform(struct!.evaluate),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleStringToEvaluateProperty",
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


export function ccMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisPropertyToTerraform(struct?: CcMailManagerRuleSet.RulesConditionsVerdictExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analyzer: cdktn.stringToTerraform(struct!.analyzer),
        result_field: cdktn.stringToTerraform(struct!.resultField),
    }
}


export function ccMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisPropertyToHclTerraform(struct?: CcMailManagerRuleSet.RulesConditionsVerdictExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
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


export function ccMailManagerRuleSetRuleVerdictToEvaluatePropertyToTerraform(struct?: CcMailManagerRuleSet.RuleVerdictToEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analysis: ccMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisPropertyToTerraform(struct!.analysis),
        attribute: cdktn.stringToTerraform(struct!.attribute),
    }
}


export function ccMailManagerRuleSetRuleVerdictToEvaluatePropertyToHclTerraform(struct?: CcMailManagerRuleSet.RuleVerdictToEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        analysis: {
            value: ccMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisPropertyToHclTerraform(struct!.analysis),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesConditionsVerdictExpressionEvaluateAnalysisProperty",
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


export function ccMailManagerRuleSetRuleVerdictExpressionPropertyToTerraform(struct?: CcMailManagerRuleSet.RuleVerdictExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        evaluate: ccMailManagerRuleSetRuleVerdictToEvaluatePropertyToTerraform(struct!.evaluate),
        operator: cdktn.stringToTerraform(struct!.operator),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccMailManagerRuleSetRuleVerdictExpressionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.RuleVerdictExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        evaluate: {
            value: ccMailManagerRuleSetRuleVerdictToEvaluatePropertyToHclTerraform(struct!.evaluate),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleVerdictToEvaluateProperty",
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


export function ccMailManagerRuleSetRuleConditionPropertyToTerraform(struct?: CcMailManagerRuleSet.RuleConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        boolean_expression: ccMailManagerRuleSetRuleBooleanExpressionPropertyToTerraform(struct!.booleanExpression),
        dmarc_expression: ccMailManagerRuleSetRuleDmarcExpressionPropertyToTerraform(struct!.dmarcExpression),
        ip_expression: ccMailManagerRuleSetRuleIpExpressionPropertyToTerraform(struct!.ipExpression),
        number_expression: ccMailManagerRuleSetRuleNumberExpressionPropertyToTerraform(struct!.numberExpression),
        string_expression: ccMailManagerRuleSetRuleStringExpressionPropertyToTerraform(struct!.stringExpression),
        verdict_expression: ccMailManagerRuleSetRuleVerdictExpressionPropertyToTerraform(struct!.verdictExpression),
    }
}


export function ccMailManagerRuleSetRuleConditionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.RuleConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        boolean_expression: {
            value: ccMailManagerRuleSetRuleBooleanExpressionPropertyToHclTerraform(struct!.booleanExpression),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleBooleanExpressionProperty",
        },
        dmarc_expression: {
            value: ccMailManagerRuleSetRuleDmarcExpressionPropertyToHclTerraform(struct!.dmarcExpression),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleDmarcExpressionProperty",
        },
        ip_expression: {
            value: ccMailManagerRuleSetRuleIpExpressionPropertyToHclTerraform(struct!.ipExpression),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleIpExpressionProperty",
        },
        number_expression: {
            value: ccMailManagerRuleSetRuleNumberExpressionPropertyToHclTerraform(struct!.numberExpression),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleNumberExpressionProperty",
        },
        string_expression: {
            value: ccMailManagerRuleSetRuleStringExpressionPropertyToHclTerraform(struct!.stringExpression),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleStringExpressionProperty",
        },
        verdict_expression: {
            value: ccMailManagerRuleSetRuleVerdictExpressionPropertyToHclTerraform(struct!.verdictExpression),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleVerdictExpressionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisPropertyToTerraform(struct?: CcMailManagerRuleSet.RulesUnlessBooleanExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analyzer: cdktn.stringToTerraform(struct!.analyzer),
        result_field: cdktn.stringToTerraform(struct!.resultField),
    }
}


export function ccMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisPropertyToHclTerraform(struct?: CcMailManagerRuleSet.RulesUnlessBooleanExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
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


export function ccMailManagerRuleSetIsInAddressListPropertyToTerraform(struct?: CcMailManagerRuleSet.IsInAddressListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        address_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.addressLists),
        attribute: cdktn.stringToTerraform(struct!.attribute),
    }
}


export function ccMailManagerRuleSetIsInAddressListPropertyToHclTerraform(struct?: CcMailManagerRuleSet.IsInAddressListProperty | cdktn.IResolvable): any {
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


export function ccMailManagerRuleSetRulesUnlessBooleanExpressionEvaluatePropertyToTerraform(struct?: CcMailManagerRuleSet.RulesUnlessBooleanExpressionEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analysis: ccMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisPropertyToTerraform(struct!.analysis),
        attribute: cdktn.stringToTerraform(struct!.attribute),
        is_in_address_list: ccMailManagerRuleSetIsInAddressListPropertyToTerraform(struct!.isInAddressList),
    }
}


export function ccMailManagerRuleSetRulesUnlessBooleanExpressionEvaluatePropertyToHclTerraform(struct?: CcMailManagerRuleSet.RulesUnlessBooleanExpressionEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        analysis: {
            value: ccMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisPropertyToHclTerraform(struct!.analysis),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesUnlessBooleanExpressionEvaluateAnalysisProperty",
        },
        attribute: {
            value: cdktn.stringToHclTerraform(struct!.attribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        is_in_address_list: {
            value: ccMailManagerRuleSetIsInAddressListPropertyToHclTerraform(struct!.isInAddressList),
            isBlock: true,
            type: "struct",
            storageClassType: "IsInAddressListProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRuleSetBooleanExpressionPropertyToTerraform(struct?: CcMailManagerRuleSet.BooleanExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        evaluate: ccMailManagerRuleSetRulesUnlessBooleanExpressionEvaluatePropertyToTerraform(struct!.evaluate),
        operator: cdktn.stringToTerraform(struct!.operator),
    }
}


export function ccMailManagerRuleSetBooleanExpressionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.BooleanExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        evaluate: {
            value: ccMailManagerRuleSetRulesUnlessBooleanExpressionEvaluatePropertyToHclTerraform(struct!.evaluate),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesUnlessBooleanExpressionEvaluateProperty",
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


export function ccMailManagerRuleSetDmarcExpressionPropertyToTerraform(struct?: CcMailManagerRuleSet.DmarcExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        operator: cdktn.stringToTerraform(struct!.operator),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccMailManagerRuleSetDmarcExpressionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.DmarcExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccMailManagerRuleSetRulesUnlessIpExpressionEvaluatePropertyToTerraform(struct?: CcMailManagerRuleSet.RulesUnlessIpExpressionEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute: cdktn.stringToTerraform(struct!.attribute),
    }
}


export function ccMailManagerRuleSetRulesUnlessIpExpressionEvaluatePropertyToHclTerraform(struct?: CcMailManagerRuleSet.RulesUnlessIpExpressionEvaluateProperty | cdktn.IResolvable): any {
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


export function ccMailManagerRuleSetIpExpressionPropertyToTerraform(struct?: CcMailManagerRuleSet.IpExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        evaluate: ccMailManagerRuleSetRulesUnlessIpExpressionEvaluatePropertyToTerraform(struct!.evaluate),
        operator: cdktn.stringToTerraform(struct!.operator),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccMailManagerRuleSetIpExpressionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.IpExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        evaluate: {
            value: ccMailManagerRuleSetRulesUnlessIpExpressionEvaluatePropertyToHclTerraform(struct!.evaluate),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesUnlessIpExpressionEvaluateProperty",
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


export function ccMailManagerRuleSetRulesUnlessNumberExpressionEvaluatePropertyToTerraform(struct?: CcMailManagerRuleSet.RulesUnlessNumberExpressionEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute: cdktn.stringToTerraform(struct!.attribute),
    }
}


export function ccMailManagerRuleSetRulesUnlessNumberExpressionEvaluatePropertyToHclTerraform(struct?: CcMailManagerRuleSet.RulesUnlessNumberExpressionEvaluateProperty | cdktn.IResolvable): any {
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


export function ccMailManagerRuleSetNumberExpressionPropertyToTerraform(struct?: CcMailManagerRuleSet.NumberExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        evaluate: ccMailManagerRuleSetRulesUnlessNumberExpressionEvaluatePropertyToTerraform(struct!.evaluate),
        operator: cdktn.stringToTerraform(struct!.operator),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccMailManagerRuleSetNumberExpressionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.NumberExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        evaluate: {
            value: ccMailManagerRuleSetRulesUnlessNumberExpressionEvaluatePropertyToHclTerraform(struct!.evaluate),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesUnlessNumberExpressionEvaluateProperty",
        },
        operator: {
            value: cdktn.stringToHclTerraform(struct!.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisPropertyToTerraform(struct?: CcMailManagerRuleSet.RulesUnlessStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analyzer: cdktn.stringToTerraform(struct!.analyzer),
        result_field: cdktn.stringToTerraform(struct!.resultField),
    }
}


export function ccMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisPropertyToHclTerraform(struct?: CcMailManagerRuleSet.RulesUnlessStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
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


export function ccMailManagerRuleSetRulesUnlessStringExpressionEvaluatePropertyToTerraform(struct?: CcMailManagerRuleSet.RulesUnlessStringExpressionEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analysis: ccMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisPropertyToTerraform(struct!.analysis),
        attribute: cdktn.stringToTerraform(struct!.attribute),
        client_certificate_attribute: cdktn.stringToTerraform(struct!.clientCertificateAttribute),
        mime_header_attribute: cdktn.stringToTerraform(struct!.mimeHeaderAttribute),
    }
}


export function ccMailManagerRuleSetRulesUnlessStringExpressionEvaluatePropertyToHclTerraform(struct?: CcMailManagerRuleSet.RulesUnlessStringExpressionEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        analysis: {
            value: ccMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisPropertyToHclTerraform(struct!.analysis),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesUnlessStringExpressionEvaluateAnalysisProperty",
        },
        attribute: {
            value: cdktn.stringToHclTerraform(struct!.attribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_certificate_attribute: {
            value: cdktn.stringToHclTerraform(struct!.clientCertificateAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mime_header_attribute: {
            value: cdktn.stringToHclTerraform(struct!.mimeHeaderAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRuleSetStringExpressionPropertyToTerraform(struct?: CcMailManagerRuleSet.StringExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        evaluate: ccMailManagerRuleSetRulesUnlessStringExpressionEvaluatePropertyToTerraform(struct!.evaluate),
        operator: cdktn.stringToTerraform(struct!.operator),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccMailManagerRuleSetStringExpressionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.StringExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        evaluate: {
            value: ccMailManagerRuleSetRulesUnlessStringExpressionEvaluatePropertyToHclTerraform(struct!.evaluate),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesUnlessStringExpressionEvaluateProperty",
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


export function ccMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisPropertyToTerraform(struct?: CcMailManagerRuleSet.RulesUnlessVerdictExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analyzer: cdktn.stringToTerraform(struct!.analyzer),
        result_field: cdktn.stringToTerraform(struct!.resultField),
    }
}


export function ccMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisPropertyToHclTerraform(struct?: CcMailManagerRuleSet.RulesUnlessVerdictExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
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


export function ccMailManagerRuleSetRulesUnlessVerdictExpressionEvaluatePropertyToTerraform(struct?: CcMailManagerRuleSet.RulesUnlessVerdictExpressionEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analysis: ccMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisPropertyToTerraform(struct!.analysis),
        attribute: cdktn.stringToTerraform(struct!.attribute),
    }
}


export function ccMailManagerRuleSetRulesUnlessVerdictExpressionEvaluatePropertyToHclTerraform(struct?: CcMailManagerRuleSet.RulesUnlessVerdictExpressionEvaluateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        analysis: {
            value: ccMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisPropertyToHclTerraform(struct!.analysis),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesUnlessVerdictExpressionEvaluateAnalysisProperty",
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


export function ccMailManagerRuleSetVerdictExpressionPropertyToTerraform(struct?: CcMailManagerRuleSet.VerdictExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        evaluate: ccMailManagerRuleSetRulesUnlessVerdictExpressionEvaluatePropertyToTerraform(struct!.evaluate),
        operator: cdktn.stringToTerraform(struct!.operator),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccMailManagerRuleSetVerdictExpressionPropertyToHclTerraform(struct?: CcMailManagerRuleSet.VerdictExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        evaluate: {
            value: ccMailManagerRuleSetRulesUnlessVerdictExpressionEvaluatePropertyToHclTerraform(struct!.evaluate),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesUnlessVerdictExpressionEvaluateProperty",
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


export function ccMailManagerRuleSetUnlessPropertyToTerraform(struct?: CcMailManagerRuleSet.UnlessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        boolean_expression: ccMailManagerRuleSetBooleanExpressionPropertyToTerraform(struct!.booleanExpression),
        dmarc_expression: ccMailManagerRuleSetDmarcExpressionPropertyToTerraform(struct!.dmarcExpression),
        ip_expression: ccMailManagerRuleSetIpExpressionPropertyToTerraform(struct!.ipExpression),
        number_expression: ccMailManagerRuleSetNumberExpressionPropertyToTerraform(struct!.numberExpression),
        string_expression: ccMailManagerRuleSetStringExpressionPropertyToTerraform(struct!.stringExpression),
        verdict_expression: ccMailManagerRuleSetVerdictExpressionPropertyToTerraform(struct!.verdictExpression),
    }
}


export function ccMailManagerRuleSetUnlessPropertyToHclTerraform(struct?: CcMailManagerRuleSet.UnlessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        boolean_expression: {
            value: ccMailManagerRuleSetBooleanExpressionPropertyToHclTerraform(struct!.booleanExpression),
            isBlock: true,
            type: "struct",
            storageClassType: "BooleanExpressionProperty",
        },
        dmarc_expression: {
            value: ccMailManagerRuleSetDmarcExpressionPropertyToHclTerraform(struct!.dmarcExpression),
            isBlock: true,
            type: "struct",
            storageClassType: "DmarcExpressionProperty",
        },
        ip_expression: {
            value: ccMailManagerRuleSetIpExpressionPropertyToHclTerraform(struct!.ipExpression),
            isBlock: true,
            type: "struct",
            storageClassType: "IpExpressionProperty",
        },
        number_expression: {
            value: ccMailManagerRuleSetNumberExpressionPropertyToHclTerraform(struct!.numberExpression),
            isBlock: true,
            type: "struct",
            storageClassType: "NumberExpressionProperty",
        },
        string_expression: {
            value: ccMailManagerRuleSetStringExpressionPropertyToHclTerraform(struct!.stringExpression),
            isBlock: true,
            type: "struct",
            storageClassType: "StringExpressionProperty",
        },
        verdict_expression: {
            value: ccMailManagerRuleSetVerdictExpressionPropertyToHclTerraform(struct!.verdictExpression),
            isBlock: true,
            type: "struct",
            storageClassType: "VerdictExpressionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRuleSetRulePropertyToTerraform(struct?: CcMailManagerRuleSet.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(ccMailManagerRuleSetRuleActionPropertyToTerraform, false)(struct!.actions),
        conditions: cdktn.listMapper(ccMailManagerRuleSetRuleConditionPropertyToTerraform, false)(struct!.conditions),
        name: cdktn.stringToTerraform(struct!.name),
        unless: cdktn.listMapper(ccMailManagerRuleSetUnlessPropertyToTerraform, false)(struct!.unless),
    }
}


export function ccMailManagerRuleSetRulePropertyToHclTerraform(struct?: CcMailManagerRuleSet.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: cdktn.listMapperHcl(ccMailManagerRuleSetRuleActionPropertyToHclTerraform, false)(struct!.actions),
            isBlock: true,
            type: "list",
            storageClassType: "RuleActionPropertyList",
        },
        conditions: {
            value: cdktn.listMapperHcl(ccMailManagerRuleSetRuleConditionPropertyToHclTerraform, false)(struct!.conditions),
            isBlock: true,
            type: "list",
            storageClassType: "RuleConditionPropertyList",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unless: {
            value: cdktn.listMapperHcl(ccMailManagerRuleSetUnlessPropertyToHclTerraform, false)(struct!.unless),
            isBlock: true,
            type: "list",
            storageClassType: "UnlessPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRuleSetTagPropertyToTerraform(struct?: CcMailManagerRuleSet.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMailManagerRuleSetTagPropertyToHclTerraform(struct?: CcMailManagerRuleSet.TagProperty | cdktn.IResolvable): any {
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


export namespace CcMailManagerRuleSet {
export interface AddHeaderActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#header_name CcMailManagerRuleSet#header_name}
    */
    readonly headerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#header_value CcMailManagerRuleSet#header_value}
    */
    readonly headerValue?: string;
}
export class AddHeaderActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AddHeaderActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._headerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        if (this._headerValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerValue = this._headerValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AddHeaderActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._headerName = undefined;
            this._headerValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._headerName = value.headerName;
            this._headerValue = value.headerValue;
        }
    }

    // header_name - computed: true, optional: true, required: false
    private _headerName?: string; 
    public get headerName() {
        return this.getStringAttribute('header_name');
    }
    public set headerName(value: string) {
        this._headerName = value;
    }
    public resetHeaderName() {
        this._headerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerNameInput() {
        return this._headerName;
    }

    // header_value - computed: true, optional: true, required: false
    private _headerValue?: string; 
    public get headerValue() {
        return this.getStringAttribute('header_value');
    }
    public set headerValue(value: string) {
        this._headerValue = value;
    }
    public resetHeaderValue() {
        this._headerValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerValueInput() {
        return this._headerValue;
    }
}
export interface ArchiveActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#action_failure_policy CcMailManagerRuleSet#action_failure_policy}
    */
    readonly actionFailurePolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#target_archive CcMailManagerRuleSet#target_archive}
    */
    readonly targetArchive?: string;
}
export class ArchiveActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ArchiveActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actionFailurePolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
        }
        if (this._targetArchive !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetArchive = this._targetArchive;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ArchiveActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionFailurePolicy = undefined;
            this._targetArchive = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionFailurePolicy = value.actionFailurePolicy;
            this._targetArchive = value.targetArchive;
        }
    }

    // action_failure_policy - computed: true, optional: true, required: false
    private _actionFailurePolicy?: string; 
    public get actionFailurePolicy() {
        return this.getStringAttribute('action_failure_policy');
    }
    public set actionFailurePolicy(value: string) {
        this._actionFailurePolicy = value;
    }
    public resetActionFailurePolicy() {
        this._actionFailurePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionFailurePolicyInput() {
        return this._actionFailurePolicy;
    }

    // target_archive - computed: true, optional: true, required: false
    private _targetArchive?: string; 
    public get targetArchive() {
        return this.getStringAttribute('target_archive');
    }
    public set targetArchive(value: string) {
        this._targetArchive = value;
    }
    public resetTargetArchive() {
        this._targetArchive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetArchiveInput() {
        return this._targetArchive;
    }
}
export interface BounceActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#action_failure_policy CcMailManagerRuleSet#action_failure_policy}
    */
    readonly actionFailurePolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#diagnostic_message CcMailManagerRuleSet#diagnostic_message}
    */
    readonly diagnosticMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#message CcMailManagerRuleSet#message}
    */
    readonly message?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#role_arn CcMailManagerRuleSet#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#sender CcMailManagerRuleSet#sender}
    */
    readonly sender?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#smtp_reply_code CcMailManagerRuleSet#smtp_reply_code}
    */
    readonly smtpReplyCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#status_code CcMailManagerRuleSet#status_code}
    */
    readonly statusCode?: string;
}
export class BounceActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BounceActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actionFailurePolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
        }
        if (this._diagnosticMessage !== undefined) {
            hasAnyValues = true;
            internalValueResult.diagnosticMessage = this._diagnosticMessage;
        }
        if (this._message !== undefined) {
            hasAnyValues = true;
            internalValueResult.message = this._message;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._sender !== undefined) {
            hasAnyValues = true;
            internalValueResult.sender = this._sender;
        }
        if (this._smtpReplyCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.smtpReplyCode = this._smtpReplyCode;
        }
        if (this._statusCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BounceActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionFailurePolicy = undefined;
            this._diagnosticMessage = undefined;
            this._message = undefined;
            this._roleArn = undefined;
            this._sender = undefined;
            this._smtpReplyCode = undefined;
            this._statusCode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionFailurePolicy = value.actionFailurePolicy;
            this._diagnosticMessage = value.diagnosticMessage;
            this._message = value.message;
            this._roleArn = value.roleArn;
            this._sender = value.sender;
            this._smtpReplyCode = value.smtpReplyCode;
            this._statusCode = value.statusCode;
        }
    }

    // action_failure_policy - computed: true, optional: true, required: false
    private _actionFailurePolicy?: string; 
    public get actionFailurePolicy() {
        return this.getStringAttribute('action_failure_policy');
    }
    public set actionFailurePolicy(value: string) {
        this._actionFailurePolicy = value;
    }
    public resetActionFailurePolicy() {
        this._actionFailurePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionFailurePolicyInput() {
        return this._actionFailurePolicy;
    }

    // diagnostic_message - computed: true, optional: true, required: false
    private _diagnosticMessage?: string; 
    public get diagnosticMessage() {
        return this.getStringAttribute('diagnostic_message');
    }
    public set diagnosticMessage(value: string) {
        this._diagnosticMessage = value;
    }
    public resetDiagnosticMessage() {
        this._diagnosticMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get diagnosticMessageInput() {
        return this._diagnosticMessage;
    }

    // message - computed: true, optional: true, required: false
    private _message?: string; 
    public get message() {
        return this.getStringAttribute('message');
    }
    public set message(value: string) {
        this._message = value;
    }
    public resetMessage() {
        this._message = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageInput() {
        return this._message;
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

    // sender - computed: true, optional: true, required: false
    private _sender?: string; 
    public get sender() {
        return this.getStringAttribute('sender');
    }
    public set sender(value: string) {
        this._sender = value;
    }
    public resetSender() {
        this._sender = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get senderInput() {
        return this._sender;
    }

    // smtp_reply_code - computed: true, optional: true, required: false
    private _smtpReplyCode?: string; 
    public get smtpReplyCode() {
        return this.getStringAttribute('smtp_reply_code');
    }
    public set smtpReplyCode(value: string) {
        this._smtpReplyCode = value;
    }
    public resetSmtpReplyCode() {
        this._smtpReplyCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smtpReplyCodeInput() {
        return this._smtpReplyCode;
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
export interface DeliverToMailboxActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#action_failure_policy CcMailManagerRuleSet#action_failure_policy}
    */
    readonly actionFailurePolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#mailbox_arn CcMailManagerRuleSet#mailbox_arn}
    */
    readonly mailboxArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#role_arn CcMailManagerRuleSet#role_arn}
    */
    readonly roleArn?: string;
}
export class DeliverToMailboxActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeliverToMailboxActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actionFailurePolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
        }
        if (this._mailboxArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.mailboxArn = this._mailboxArn;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeliverToMailboxActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionFailurePolicy = undefined;
            this._mailboxArn = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionFailurePolicy = value.actionFailurePolicy;
            this._mailboxArn = value.mailboxArn;
            this._roleArn = value.roleArn;
        }
    }

    // action_failure_policy - computed: true, optional: true, required: false
    private _actionFailurePolicy?: string; 
    public get actionFailurePolicy() {
        return this.getStringAttribute('action_failure_policy');
    }
    public set actionFailurePolicy(value: string) {
        this._actionFailurePolicy = value;
    }
    public resetActionFailurePolicy() {
        this._actionFailurePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionFailurePolicyInput() {
        return this._actionFailurePolicy;
    }

    // mailbox_arn - computed: true, optional: true, required: false
    private _mailboxArn?: string; 
    public get mailboxArn() {
        return this.getStringAttribute('mailbox_arn');
    }
    public set mailboxArn(value: string) {
        this._mailboxArn = value;
    }
    public resetMailboxArn() {
        this._mailboxArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mailboxArnInput() {
        return this._mailboxArn;
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
}
export interface DeliverToQBusinessActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#action_failure_policy CcMailManagerRuleSet#action_failure_policy}
    */
    readonly actionFailurePolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#application_id CcMailManagerRuleSet#application_id}
    */
    readonly applicationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#index_id CcMailManagerRuleSet#index_id}
    */
    readonly indexId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#role_arn CcMailManagerRuleSet#role_arn}
    */
    readonly roleArn?: string;
}
export class DeliverToQBusinessActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeliverToQBusinessActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actionFailurePolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
        }
        if (this._applicationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationId = this._applicationId;
        }
        if (this._indexId !== undefined) {
            hasAnyValues = true;
            internalValueResult.indexId = this._indexId;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeliverToQBusinessActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionFailurePolicy = undefined;
            this._applicationId = undefined;
            this._indexId = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionFailurePolicy = value.actionFailurePolicy;
            this._applicationId = value.applicationId;
            this._indexId = value.indexId;
            this._roleArn = value.roleArn;
        }
    }

    // action_failure_policy - computed: true, optional: true, required: false
    private _actionFailurePolicy?: string; 
    public get actionFailurePolicy() {
        return this.getStringAttribute('action_failure_policy');
    }
    public set actionFailurePolicy(value: string) {
        this._actionFailurePolicy = value;
    }
    public resetActionFailurePolicy() {
        this._actionFailurePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionFailurePolicyInput() {
        return this._actionFailurePolicy;
    }

    // application_id - computed: true, optional: true, required: false
    private _applicationId?: string; 
    public get applicationId() {
        return this.getStringAttribute('application_id');
    }
    public set applicationId(value: string) {
        this._applicationId = value;
    }
    public resetApplicationId() {
        this._applicationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationIdInput() {
        return this._applicationId;
    }

    // index_id - computed: true, optional: true, required: false
    private _indexId?: string; 
    public get indexId() {
        return this.getStringAttribute('index_id');
    }
    public set indexId(value: string) {
        this._indexId = value;
    }
    public resetIndexId() {
        this._indexId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get indexIdInput() {
        return this._indexId;
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
}
export interface InvokeLambdaActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#action_failure_policy CcMailManagerRuleSet#action_failure_policy}
    */
    readonly actionFailurePolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#function_arn CcMailManagerRuleSet#function_arn}
    */
    readonly functionArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#invocation_type CcMailManagerRuleSet#invocation_type}
    */
    readonly invocationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#retry_time_minutes CcMailManagerRuleSet#retry_time_minutes}
    */
    readonly retryTimeMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#role_arn CcMailManagerRuleSet#role_arn}
    */
    readonly roleArn?: string;
}
export class InvokeLambdaActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InvokeLambdaActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actionFailurePolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
        }
        if (this._functionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.functionArn = this._functionArn;
        }
        if (this._invocationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.invocationType = this._invocationType;
        }
        if (this._retryTimeMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.retryTimeMinutes = this._retryTimeMinutes;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InvokeLambdaActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionFailurePolicy = undefined;
            this._functionArn = undefined;
            this._invocationType = undefined;
            this._retryTimeMinutes = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionFailurePolicy = value.actionFailurePolicy;
            this._functionArn = value.functionArn;
            this._invocationType = value.invocationType;
            this._retryTimeMinutes = value.retryTimeMinutes;
            this._roleArn = value.roleArn;
        }
    }

    // action_failure_policy - computed: true, optional: true, required: false
    private _actionFailurePolicy?: string; 
    public get actionFailurePolicy() {
        return this.getStringAttribute('action_failure_policy');
    }
    public set actionFailurePolicy(value: string) {
        this._actionFailurePolicy = value;
    }
    public resetActionFailurePolicy() {
        this._actionFailurePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionFailurePolicyInput() {
        return this._actionFailurePolicy;
    }

    // function_arn - computed: true, optional: true, required: false
    private _functionArn?: string; 
    public get functionArn() {
        return this.getStringAttribute('function_arn');
    }
    public set functionArn(value: string) {
        this._functionArn = value;
    }
    public resetFunctionArn() {
        this._functionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionArnInput() {
        return this._functionArn;
    }

    // invocation_type - computed: true, optional: true, required: false
    private _invocationType?: string; 
    public get invocationType() {
        return this.getStringAttribute('invocation_type');
    }
    public set invocationType(value: string) {
        this._invocationType = value;
    }
    public resetInvocationType() {
        this._invocationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationTypeInput() {
        return this._invocationType;
    }

    // retry_time_minutes - computed: true, optional: true, required: false
    private _retryTimeMinutes?: number; 
    public get retryTimeMinutes() {
        return this.getNumberAttribute('retry_time_minutes');
    }
    public set retryTimeMinutes(value: number) {
        this._retryTimeMinutes = value;
    }
    public resetRetryTimeMinutes() {
        this._retryTimeMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryTimeMinutesInput() {
        return this._retryTimeMinutes;
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
}
export interface SnsActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#action_failure_policy CcMailManagerRuleSet#action_failure_policy}
    */
    readonly actionFailurePolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#encoding CcMailManagerRuleSet#encoding}
    */
    readonly encoding?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#payload_type CcMailManagerRuleSet#payload_type}
    */
    readonly payloadType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#role_arn CcMailManagerRuleSet#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#topic_arn CcMailManagerRuleSet#topic_arn}
    */
    readonly topicArn?: string;
}
export class SnsActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnsActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actionFailurePolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
        }
        if (this._encoding !== undefined) {
            hasAnyValues = true;
            internalValueResult.encoding = this._encoding;
        }
        if (this._payloadType !== undefined) {
            hasAnyValues = true;
            internalValueResult.payloadType = this._payloadType;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._topicArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.topicArn = this._topicArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnsActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionFailurePolicy = undefined;
            this._encoding = undefined;
            this._payloadType = undefined;
            this._roleArn = undefined;
            this._topicArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionFailurePolicy = value.actionFailurePolicy;
            this._encoding = value.encoding;
            this._payloadType = value.payloadType;
            this._roleArn = value.roleArn;
            this._topicArn = value.topicArn;
        }
    }

    // action_failure_policy - computed: true, optional: true, required: false
    private _actionFailurePolicy?: string; 
    public get actionFailurePolicy() {
        return this.getStringAttribute('action_failure_policy');
    }
    public set actionFailurePolicy(value: string) {
        this._actionFailurePolicy = value;
    }
    public resetActionFailurePolicy() {
        this._actionFailurePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionFailurePolicyInput() {
        return this._actionFailurePolicy;
    }

    // encoding - computed: true, optional: true, required: false
    private _encoding?: string; 
    public get encoding() {
        return this.getStringAttribute('encoding');
    }
    public set encoding(value: string) {
        this._encoding = value;
    }
    public resetEncoding() {
        this._encoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encodingInput() {
        return this._encoding;
    }

    // payload_type - computed: true, optional: true, required: false
    private _payloadType?: string; 
    public get payloadType() {
        return this.getStringAttribute('payload_type');
    }
    public set payloadType(value: string) {
        this._payloadType = value;
    }
    public resetPayloadType() {
        this._payloadType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadTypeInput() {
        return this._payloadType;
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

    // topic_arn - computed: true, optional: true, required: false
    private _topicArn?: string; 
    public get topicArn() {
        return this.getStringAttribute('topic_arn');
    }
    public set topicArn(value: string) {
        this._topicArn = value;
    }
    public resetTopicArn() {
        this._topicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicArnInput() {
        return this._topicArn;
    }
}
export interface RelayActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#action_failure_policy CcMailManagerRuleSet#action_failure_policy}
    */
    readonly actionFailurePolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#mail_from CcMailManagerRuleSet#mail_from}
    */
    readonly mailFrom?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#relay CcMailManagerRuleSet#relay}
    */
    readonly relay?: string;
}
export class RelayActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RelayActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actionFailurePolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
        }
        if (this._mailFrom !== undefined) {
            hasAnyValues = true;
            internalValueResult.mailFrom = this._mailFrom;
        }
        if (this._relay !== undefined) {
            hasAnyValues = true;
            internalValueResult.relay = this._relay;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RelayActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionFailurePolicy = undefined;
            this._mailFrom = undefined;
            this._relay = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionFailurePolicy = value.actionFailurePolicy;
            this._mailFrom = value.mailFrom;
            this._relay = value.relay;
        }
    }

    // action_failure_policy - computed: true, optional: true, required: false
    private _actionFailurePolicy?: string; 
    public get actionFailurePolicy() {
        return this.getStringAttribute('action_failure_policy');
    }
    public set actionFailurePolicy(value: string) {
        this._actionFailurePolicy = value;
    }
    public resetActionFailurePolicy() {
        this._actionFailurePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionFailurePolicyInput() {
        return this._actionFailurePolicy;
    }

    // mail_from - computed: true, optional: true, required: false
    private _mailFrom?: string; 
    public get mailFrom() {
        return this.getStringAttribute('mail_from');
    }
    public set mailFrom(value: string) {
        this._mailFrom = value;
    }
    public resetMailFrom() {
        this._mailFrom = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mailFromInput() {
        return this._mailFrom;
    }

    // relay - computed: true, optional: true, required: false
    private _relay?: string; 
    public get relay() {
        return this.getStringAttribute('relay');
    }
    public set relay(value: string) {
        this._relay = value;
    }
    public resetRelay() {
        this._relay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relayInput() {
        return this._relay;
    }
}
export interface ReplaceRecipientActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#replace_with CcMailManagerRuleSet#replace_with}
    */
    readonly replaceWith?: string[];
}
export class ReplaceRecipientActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplaceRecipientActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._replaceWith !== undefined) {
            hasAnyValues = true;
            internalValueResult.replaceWith = this._replaceWith;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplaceRecipientActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._replaceWith = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._replaceWith = value.replaceWith;
        }
    }

    // replace_with - computed: true, optional: true, required: false
    private _replaceWith?: string[]; 
    public get replaceWith() {
        return this.getListAttribute('replace_with');
    }
    public set replaceWith(value: string[]) {
        this._replaceWith = value;
    }
    public resetReplaceWith() {
        this._replaceWith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replaceWithInput() {
        return this._replaceWith;
    }
}
export interface SendActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#action_failure_policy CcMailManagerRuleSet#action_failure_policy}
    */
    readonly actionFailurePolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#role_arn CcMailManagerRuleSet#role_arn}
    */
    readonly roleArn?: string;
}
export class SendActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SendActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actionFailurePolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SendActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionFailurePolicy = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionFailurePolicy = value.actionFailurePolicy;
            this._roleArn = value.roleArn;
        }
    }

    // action_failure_policy - computed: true, optional: true, required: false
    private _actionFailurePolicy?: string; 
    public get actionFailurePolicy() {
        return this.getStringAttribute('action_failure_policy');
    }
    public set actionFailurePolicy(value: string) {
        this._actionFailurePolicy = value;
    }
    public resetActionFailurePolicy() {
        this._actionFailurePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionFailurePolicyInput() {
        return this._actionFailurePolicy;
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
}
export interface S3ActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#action_failure_policy CcMailManagerRuleSet#action_failure_policy}
    */
    readonly actionFailurePolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#role_arn CcMailManagerRuleSet#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#s3_bucket CcMailManagerRuleSet#s3_bucket}
    */
    readonly s3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#s3_prefix CcMailManagerRuleSet#s3_prefix}
    */
    readonly s3Prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#s3_sse_kms_key_id CcMailManagerRuleSet#s3_sse_kms_key_id}
    */
    readonly s3SseKmsKeyId?: string;
}
export class S3ActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3ActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actionFailurePolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._s3Bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Bucket = this._s3Bucket;
        }
        if (this._s3Prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Prefix = this._s3Prefix;
        }
        if (this._s3SseKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3SseKmsKeyId = this._s3SseKmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3ActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionFailurePolicy = undefined;
            this._roleArn = undefined;
            this._s3Bucket = undefined;
            this._s3Prefix = undefined;
            this._s3SseKmsKeyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionFailurePolicy = value.actionFailurePolicy;
            this._roleArn = value.roleArn;
            this._s3Bucket = value.s3Bucket;
            this._s3Prefix = value.s3Prefix;
            this._s3SseKmsKeyId = value.s3SseKmsKeyId;
        }
    }

    // action_failure_policy - computed: true, optional: true, required: false
    private _actionFailurePolicy?: string; 
    public get actionFailurePolicy() {
        return this.getStringAttribute('action_failure_policy');
    }
    public set actionFailurePolicy(value: string) {
        this._actionFailurePolicy = value;
    }
    public resetActionFailurePolicy() {
        this._actionFailurePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionFailurePolicyInput() {
        return this._actionFailurePolicy;
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

    // s3_bucket - computed: true, optional: true, required: false
    private _s3Bucket?: string; 
    public get s3Bucket() {
        return this.getStringAttribute('s3_bucket');
    }
    public set s3Bucket(value: string) {
        this._s3Bucket = value;
    }
    public resetS3Bucket() {
        this._s3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketInput() {
        return this._s3Bucket;
    }

    // s3_prefix - computed: true, optional: true, required: false
    private _s3Prefix?: string; 
    public get s3Prefix() {
        return this.getStringAttribute('s3_prefix');
    }
    public set s3Prefix(value: string) {
        this._s3Prefix = value;
    }
    public resetS3Prefix() {
        this._s3Prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3PrefixInput() {
        return this._s3Prefix;
    }

    // s3_sse_kms_key_id - computed: true, optional: true, required: false
    private _s3SseKmsKeyId?: string; 
    public get s3SseKmsKeyId() {
        return this.getStringAttribute('s3_sse_kms_key_id');
    }
    public set s3SseKmsKeyId(value: string) {
        this._s3SseKmsKeyId = value;
    }
    public resetS3SseKmsKeyId() {
        this._s3SseKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3SseKmsKeyIdInput() {
        return this._s3SseKmsKeyId;
    }
}
export interface RuleActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#add_header CcMailManagerRuleSet#add_header}
    */
    readonly addHeader?: AddHeaderActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#archive CcMailManagerRuleSet#archive}
    */
    readonly archive?: ArchiveActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#bounce CcMailManagerRuleSet#bounce}
    */
    readonly bounce?: BounceActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#deliver_to_mailbox CcMailManagerRuleSet#deliver_to_mailbox}
    */
    readonly deliverToMailbox?: DeliverToMailboxActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#deliver_to_q_business CcMailManagerRuleSet#deliver_to_q_business}
    */
    readonly deliverToQBusiness?: DeliverToQBusinessActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#drop CcMailManagerRuleSet#drop}
    */
    readonly drop?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#invoke_lambda CcMailManagerRuleSet#invoke_lambda}
    */
    readonly invokeLambda?: InvokeLambdaActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#publish_to_sns CcMailManagerRuleSet#publish_to_sns}
    */
    readonly publishToSns?: SnsActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#relay CcMailManagerRuleSet#relay}
    */
    readonly relay?: RelayActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#replace_recipient CcMailManagerRuleSet#replace_recipient}
    */
    readonly replaceRecipient?: ReplaceRecipientActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#send CcMailManagerRuleSet#send}
    */
    readonly send?: SendActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#write_to_s3 CcMailManagerRuleSet#write_to_s3}
    */
    readonly writeToS3?: S3ActionProperty;
}
export class RuleActionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RuleActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._addHeader?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.addHeader = this._addHeader?.internalValue;
        }
        if (this._archive?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.archive = this._archive?.internalValue;
        }
        if (this._bounce?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bounce = this._bounce?.internalValue;
        }
        if (this._deliverToMailbox?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliverToMailbox = this._deliverToMailbox?.internalValue;
        }
        if (this._deliverToQBusiness?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliverToQBusiness = this._deliverToQBusiness?.internalValue;
        }
        if (this._drop !== undefined) {
            hasAnyValues = true;
            internalValueResult.drop = this._drop;
        }
        if (this._invokeLambda?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.invokeLambda = this._invokeLambda?.internalValue;
        }
        if (this._publishToSns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.publishToSns = this._publishToSns?.internalValue;
        }
        if (this._relay?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.relay = this._relay?.internalValue;
        }
        if (this._replaceRecipient?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.replaceRecipient = this._replaceRecipient?.internalValue;
        }
        if (this._send?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.send = this._send?.internalValue;
        }
        if (this._writeToS3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeToS3 = this._writeToS3?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addHeader.internalValue = undefined;
            this._archive.internalValue = undefined;
            this._bounce.internalValue = undefined;
            this._deliverToMailbox.internalValue = undefined;
            this._deliverToQBusiness.internalValue = undefined;
            this._drop = undefined;
            this._invokeLambda.internalValue = undefined;
            this._publishToSns.internalValue = undefined;
            this._relay.internalValue = undefined;
            this._replaceRecipient.internalValue = undefined;
            this._send.internalValue = undefined;
            this._writeToS3.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addHeader.internalValue = value.addHeader;
            this._archive.internalValue = value.archive;
            this._bounce.internalValue = value.bounce;
            this._deliverToMailbox.internalValue = value.deliverToMailbox;
            this._deliverToQBusiness.internalValue = value.deliverToQBusiness;
            this._drop = value.drop;
            this._invokeLambda.internalValue = value.invokeLambda;
            this._publishToSns.internalValue = value.publishToSns;
            this._relay.internalValue = value.relay;
            this._replaceRecipient.internalValue = value.replaceRecipient;
            this._send.internalValue = value.send;
            this._writeToS3.internalValue = value.writeToS3;
        }
    }

    // add_header - computed: true, optional: true, required: false
    private _addHeader = new AddHeaderActionPropertyOutputReference(this, "add_header");
    public get addHeader() {
        return this._addHeader;
    }
    public putAddHeader(value: AddHeaderActionProperty) {
        this._addHeader.internalValue = value;
    }
    public resetAddHeader() {
        this._addHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addHeaderInput() {
        return this._addHeader.internalValue;
    }

    // archive - computed: true, optional: true, required: false
    private _archive = new ArchiveActionPropertyOutputReference(this, "archive");
    public get archive() {
        return this._archive;
    }
    public putArchive(value: ArchiveActionProperty) {
        this._archive.internalValue = value;
    }
    public resetArchive() {
        this._archive.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get archiveInput() {
        return this._archive.internalValue;
    }

    // bounce - computed: true, optional: true, required: false
    private _bounce = new BounceActionPropertyOutputReference(this, "bounce");
    public get bounce() {
        return this._bounce;
    }
    public putBounce(value: BounceActionProperty) {
        this._bounce.internalValue = value;
    }
    public resetBounce() {
        this._bounce.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bounceInput() {
        return this._bounce.internalValue;
    }

    // deliver_to_mailbox - computed: true, optional: true, required: false
    private _deliverToMailbox = new DeliverToMailboxActionPropertyOutputReference(this, "deliver_to_mailbox");
    public get deliverToMailbox() {
        return this._deliverToMailbox;
    }
    public putDeliverToMailbox(value: DeliverToMailboxActionProperty) {
        this._deliverToMailbox.internalValue = value;
    }
    public resetDeliverToMailbox() {
        this._deliverToMailbox.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliverToMailboxInput() {
        return this._deliverToMailbox.internalValue;
    }

    // deliver_to_q_business - computed: true, optional: true, required: false
    private _deliverToQBusiness = new DeliverToQBusinessActionPropertyOutputReference(this, "deliver_to_q_business");
    public get deliverToQBusiness() {
        return this._deliverToQBusiness;
    }
    public putDeliverToQBusiness(value: DeliverToQBusinessActionProperty) {
        this._deliverToQBusiness.internalValue = value;
    }
    public resetDeliverToQBusiness() {
        this._deliverToQBusiness.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliverToQBusinessInput() {
        return this._deliverToQBusiness.internalValue;
    }

    // drop - computed: true, optional: true, required: false
    private _drop?: string; 
    public get drop() {
        return this.getStringAttribute('drop');
    }
    public set drop(value: string) {
        this._drop = value;
    }
    public resetDrop() {
        this._drop = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dropInput() {
        return this._drop;
    }

    // invoke_lambda - computed: true, optional: true, required: false
    private _invokeLambda = new InvokeLambdaActionPropertyOutputReference(this, "invoke_lambda");
    public get invokeLambda() {
        return this._invokeLambda;
    }
    public putInvokeLambda(value: InvokeLambdaActionProperty) {
        this._invokeLambda.internalValue = value;
    }
    public resetInvokeLambda() {
        this._invokeLambda.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invokeLambdaInput() {
        return this._invokeLambda.internalValue;
    }

    // publish_to_sns - computed: true, optional: true, required: false
    private _publishToSns = new SnsActionPropertyOutputReference(this, "publish_to_sns");
    public get publishToSns() {
        return this._publishToSns;
    }
    public putPublishToSns(value: SnsActionProperty) {
        this._publishToSns.internalValue = value;
    }
    public resetPublishToSns() {
        this._publishToSns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publishToSnsInput() {
        return this._publishToSns.internalValue;
    }

    // relay - computed: true, optional: true, required: false
    private _relay = new RelayActionPropertyOutputReference(this, "relay");
    public get relay() {
        return this._relay;
    }
    public putRelay(value: RelayActionProperty) {
        this._relay.internalValue = value;
    }
    public resetRelay() {
        this._relay.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relayInput() {
        return this._relay.internalValue;
    }

    // replace_recipient - computed: true, optional: true, required: false
    private _replaceRecipient = new ReplaceRecipientActionPropertyOutputReference(this, "replace_recipient");
    public get replaceRecipient() {
        return this._replaceRecipient;
    }
    public putReplaceRecipient(value: ReplaceRecipientActionProperty) {
        this._replaceRecipient.internalValue = value;
    }
    public resetReplaceRecipient() {
        this._replaceRecipient.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replaceRecipientInput() {
        return this._replaceRecipient.internalValue;
    }

    // send - computed: true, optional: true, required: false
    private _send = new SendActionPropertyOutputReference(this, "send");
    public get send() {
        return this._send;
    }
    public putSend(value: SendActionProperty) {
        this._send.internalValue = value;
    }
    public resetSend() {
        this._send.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sendInput() {
        return this._send.internalValue;
    }

    // write_to_s3 - computed: true, optional: true, required: false
    private _writeToS3 = new S3ActionPropertyOutputReference(this, "write_to_s3");
    public get writeToS3() {
        return this._writeToS3;
    }
    public putWriteToS3(value: S3ActionProperty) {
        this._writeToS3.internalValue = value;
    }
    public resetWriteToS3() {
        this._writeToS3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeToS3Input() {
        return this._writeToS3.internalValue;
    }
}

export class RuleActionPropertyList extends cdktn.ComplexList {
    public internalValue? : RuleActionProperty[] | cdktn.IResolvable

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
    public get(index: number): RuleActionPropertyOutputReference {
        return new RuleActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AnalysisProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#analyzer CcMailManagerRuleSet#analyzer}
    */
    readonly analyzer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#result_field CcMailManagerRuleSet#result_field}
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
export interface RuleIsInAddressListProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#address_lists CcMailManagerRuleSet#address_lists}
    */
    readonly addressLists?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#attribute CcMailManagerRuleSet#attribute}
    */
    readonly attribute?: string;
}
export class RuleIsInAddressListPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleIsInAddressListProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RuleIsInAddressListProperty | cdktn.IResolvable | undefined) {
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
export interface RuleBooleanToEvaluateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#analysis CcMailManagerRuleSet#analysis}
    */
    readonly analysis?: AnalysisProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#attribute CcMailManagerRuleSet#attribute}
    */
    readonly attribute?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#is_in_address_list CcMailManagerRuleSet#is_in_address_list}
    */
    readonly isInAddressList?: RuleIsInAddressListProperty;
}
export class RuleBooleanToEvaluatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleBooleanToEvaluateProperty | cdktn.IResolvable | undefined {
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
        if (this._isInAddressList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.isInAddressList = this._isInAddressList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleBooleanToEvaluateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._analysis.internalValue = undefined;
            this._attribute = undefined;
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
            this._attribute = value.attribute;
            this._isInAddressList.internalValue = value.isInAddressList;
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

    // is_in_address_list - computed: true, optional: true, required: false
    private _isInAddressList = new RuleIsInAddressListPropertyOutputReference(this, "is_in_address_list");
    public get isInAddressList() {
        return this._isInAddressList;
    }
    public putIsInAddressList(value: RuleIsInAddressListProperty) {
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
export interface RuleBooleanExpressionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#evaluate CcMailManagerRuleSet#evaluate}
    */
    readonly evaluate?: RuleBooleanToEvaluateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#operator CcMailManagerRuleSet#operator}
    */
    readonly operator?: string;
}
export class RuleBooleanExpressionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleBooleanExpressionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RuleBooleanExpressionProperty | cdktn.IResolvable | undefined) {
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
    private _evaluate = new RuleBooleanToEvaluatePropertyOutputReference(this, "evaluate");
    public get evaluate() {
        return this._evaluate;
    }
    public putEvaluate(value: RuleBooleanToEvaluateProperty) {
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
export interface RuleDmarcExpressionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#operator CcMailManagerRuleSet#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#values CcMailManagerRuleSet#values}
    */
    readonly values?: string[];
}
export class RuleDmarcExpressionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleDmarcExpressionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
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

    public set internalValue(value: RuleDmarcExpressionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
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
            this._operator = value.operator;
            this._values = value.values;
        }
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
export interface RuleIpToEvaluateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#attribute CcMailManagerRuleSet#attribute}
    */
    readonly attribute?: string;
}
export class RuleIpToEvaluatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleIpToEvaluateProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RuleIpToEvaluateProperty | cdktn.IResolvable | undefined) {
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
export interface RuleIpExpressionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#evaluate CcMailManagerRuleSet#evaluate}
    */
    readonly evaluate?: RuleIpToEvaluateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#operator CcMailManagerRuleSet#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#values CcMailManagerRuleSet#values}
    */
    readonly values?: string[];
}
export class RuleIpExpressionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleIpExpressionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RuleIpExpressionProperty | cdktn.IResolvable | undefined) {
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
    private _evaluate = new RuleIpToEvaluatePropertyOutputReference(this, "evaluate");
    public get evaluate() {
        return this._evaluate;
    }
    public putEvaluate(value: RuleIpToEvaluateProperty) {
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
export interface RuleNumberToEvaluateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#attribute CcMailManagerRuleSet#attribute}
    */
    readonly attribute?: string;
}
export class RuleNumberToEvaluatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleNumberToEvaluateProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RuleNumberToEvaluateProperty | cdktn.IResolvable | undefined) {
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
export interface RuleNumberExpressionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#evaluate CcMailManagerRuleSet#evaluate}
    */
    readonly evaluate?: RuleNumberToEvaluateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#operator CcMailManagerRuleSet#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#value CcMailManagerRuleSet#value}
    */
    readonly value?: number;
}
export class RuleNumberExpressionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleNumberExpressionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RuleNumberExpressionProperty | cdktn.IResolvable | undefined) {
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
    private _evaluate = new RuleNumberToEvaluatePropertyOutputReference(this, "evaluate");
    public get evaluate() {
        return this._evaluate;
    }
    public putEvaluate(value: RuleNumberToEvaluateProperty) {
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
export interface RulesConditionsStringExpressionEvaluateAnalysisProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#analyzer CcMailManagerRuleSet#analyzer}
    */
    readonly analyzer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#result_field CcMailManagerRuleSet#result_field}
    */
    readonly resultField?: string;
}
export class RulesConditionsStringExpressionEvaluateAnalysisPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesConditionsStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RulesConditionsStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined) {
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
export interface RuleStringToEvaluateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#analysis CcMailManagerRuleSet#analysis}
    */
    readonly analysis?: RulesConditionsStringExpressionEvaluateAnalysisProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#attribute CcMailManagerRuleSet#attribute}
    */
    readonly attribute?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#client_certificate_attribute CcMailManagerRuleSet#client_certificate_attribute}
    */
    readonly clientCertificateAttribute?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#mime_header_attribute CcMailManagerRuleSet#mime_header_attribute}
    */
    readonly mimeHeaderAttribute?: string;
}
export class RuleStringToEvaluatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleStringToEvaluateProperty | cdktn.IResolvable | undefined {
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
        if (this._clientCertificateAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientCertificateAttribute = this._clientCertificateAttribute;
        }
        if (this._mimeHeaderAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.mimeHeaderAttribute = this._mimeHeaderAttribute;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleStringToEvaluateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._analysis.internalValue = undefined;
            this._attribute = undefined;
            this._clientCertificateAttribute = undefined;
            this._mimeHeaderAttribute = undefined;
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
            this._clientCertificateAttribute = value.clientCertificateAttribute;
            this._mimeHeaderAttribute = value.mimeHeaderAttribute;
        }
    }

    // analysis - computed: true, optional: true, required: false
    private _analysis = new RulesConditionsStringExpressionEvaluateAnalysisPropertyOutputReference(this, "analysis");
    public get analysis() {
        return this._analysis;
    }
    public putAnalysis(value: RulesConditionsStringExpressionEvaluateAnalysisProperty) {
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

    // client_certificate_attribute - computed: true, optional: true, required: false
    private _clientCertificateAttribute?: string; 
    public get clientCertificateAttribute() {
        return this.getStringAttribute('client_certificate_attribute');
    }
    public set clientCertificateAttribute(value: string) {
        this._clientCertificateAttribute = value;
    }
    public resetClientCertificateAttribute() {
        this._clientCertificateAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientCertificateAttributeInput() {
        return this._clientCertificateAttribute;
    }

    // mime_header_attribute - computed: true, optional: true, required: false
    private _mimeHeaderAttribute?: string; 
    public get mimeHeaderAttribute() {
        return this.getStringAttribute('mime_header_attribute');
    }
    public set mimeHeaderAttribute(value: string) {
        this._mimeHeaderAttribute = value;
    }
    public resetMimeHeaderAttribute() {
        this._mimeHeaderAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mimeHeaderAttributeInput() {
        return this._mimeHeaderAttribute;
    }
}
export interface RuleStringExpressionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#evaluate CcMailManagerRuleSet#evaluate}
    */
    readonly evaluate?: RuleStringToEvaluateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#operator CcMailManagerRuleSet#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#values CcMailManagerRuleSet#values}
    */
    readonly values?: string[];
}
export class RuleStringExpressionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleStringExpressionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RuleStringExpressionProperty | cdktn.IResolvable | undefined) {
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
    private _evaluate = new RuleStringToEvaluatePropertyOutputReference(this, "evaluate");
    public get evaluate() {
        return this._evaluate;
    }
    public putEvaluate(value: RuleStringToEvaluateProperty) {
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
export interface RulesConditionsVerdictExpressionEvaluateAnalysisProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#analyzer CcMailManagerRuleSet#analyzer}
    */
    readonly analyzer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#result_field CcMailManagerRuleSet#result_field}
    */
    readonly resultField?: string;
}
export class RulesConditionsVerdictExpressionEvaluateAnalysisPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesConditionsVerdictExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RulesConditionsVerdictExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined) {
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
export interface RuleVerdictToEvaluateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#analysis CcMailManagerRuleSet#analysis}
    */
    readonly analysis?: RulesConditionsVerdictExpressionEvaluateAnalysisProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#attribute CcMailManagerRuleSet#attribute}
    */
    readonly attribute?: string;
}
export class RuleVerdictToEvaluatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleVerdictToEvaluateProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RuleVerdictToEvaluateProperty | cdktn.IResolvable | undefined) {
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
    private _analysis = new RulesConditionsVerdictExpressionEvaluateAnalysisPropertyOutputReference(this, "analysis");
    public get analysis() {
        return this._analysis;
    }
    public putAnalysis(value: RulesConditionsVerdictExpressionEvaluateAnalysisProperty) {
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
export interface RuleVerdictExpressionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#evaluate CcMailManagerRuleSet#evaluate}
    */
    readonly evaluate?: RuleVerdictToEvaluateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#operator CcMailManagerRuleSet#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#values CcMailManagerRuleSet#values}
    */
    readonly values?: string[];
}
export class RuleVerdictExpressionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleVerdictExpressionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RuleVerdictExpressionProperty | cdktn.IResolvable | undefined) {
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
    private _evaluate = new RuleVerdictToEvaluatePropertyOutputReference(this, "evaluate");
    public get evaluate() {
        return this._evaluate;
    }
    public putEvaluate(value: RuleVerdictToEvaluateProperty) {
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
export interface RuleConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#boolean_expression CcMailManagerRuleSet#boolean_expression}
    */
    readonly booleanExpression?: RuleBooleanExpressionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#dmarc_expression CcMailManagerRuleSet#dmarc_expression}
    */
    readonly dmarcExpression?: RuleDmarcExpressionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#ip_expression CcMailManagerRuleSet#ip_expression}
    */
    readonly ipExpression?: RuleIpExpressionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#number_expression CcMailManagerRuleSet#number_expression}
    */
    readonly numberExpression?: RuleNumberExpressionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#string_expression CcMailManagerRuleSet#string_expression}
    */
    readonly stringExpression?: RuleStringExpressionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#verdict_expression CcMailManagerRuleSet#verdict_expression}
    */
    readonly verdictExpression?: RuleVerdictExpressionProperty;
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
        if (this._booleanExpression?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.booleanExpression = this._booleanExpression?.internalValue;
        }
        if (this._dmarcExpression?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dmarcExpression = this._dmarcExpression?.internalValue;
        }
        if (this._ipExpression?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipExpression = this._ipExpression?.internalValue;
        }
        if (this._numberExpression?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberExpression = this._numberExpression?.internalValue;
        }
        if (this._stringExpression?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringExpression = this._stringExpression?.internalValue;
        }
        if (this._verdictExpression?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.verdictExpression = this._verdictExpression?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._booleanExpression.internalValue = undefined;
            this._dmarcExpression.internalValue = undefined;
            this._ipExpression.internalValue = undefined;
            this._numberExpression.internalValue = undefined;
            this._stringExpression.internalValue = undefined;
            this._verdictExpression.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._booleanExpression.internalValue = value.booleanExpression;
            this._dmarcExpression.internalValue = value.dmarcExpression;
            this._ipExpression.internalValue = value.ipExpression;
            this._numberExpression.internalValue = value.numberExpression;
            this._stringExpression.internalValue = value.stringExpression;
            this._verdictExpression.internalValue = value.verdictExpression;
        }
    }

    // boolean_expression - computed: true, optional: true, required: false
    private _booleanExpression = new RuleBooleanExpressionPropertyOutputReference(this, "boolean_expression");
    public get booleanExpression() {
        return this._booleanExpression;
    }
    public putBooleanExpression(value: RuleBooleanExpressionProperty) {
        this._booleanExpression.internalValue = value;
    }
    public resetBooleanExpression() {
        this._booleanExpression.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get booleanExpressionInput() {
        return this._booleanExpression.internalValue;
    }

    // dmarc_expression - computed: true, optional: true, required: false
    private _dmarcExpression = new RuleDmarcExpressionPropertyOutputReference(this, "dmarc_expression");
    public get dmarcExpression() {
        return this._dmarcExpression;
    }
    public putDmarcExpression(value: RuleDmarcExpressionProperty) {
        this._dmarcExpression.internalValue = value;
    }
    public resetDmarcExpression() {
        this._dmarcExpression.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dmarcExpressionInput() {
        return this._dmarcExpression.internalValue;
    }

    // ip_expression - computed: true, optional: true, required: false
    private _ipExpression = new RuleIpExpressionPropertyOutputReference(this, "ip_expression");
    public get ipExpression() {
        return this._ipExpression;
    }
    public putIpExpression(value: RuleIpExpressionProperty) {
        this._ipExpression.internalValue = value;
    }
    public resetIpExpression() {
        this._ipExpression.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipExpressionInput() {
        return this._ipExpression.internalValue;
    }

    // number_expression - computed: true, optional: true, required: false
    private _numberExpression = new RuleNumberExpressionPropertyOutputReference(this, "number_expression");
    public get numberExpression() {
        return this._numberExpression;
    }
    public putNumberExpression(value: RuleNumberExpressionProperty) {
        this._numberExpression.internalValue = value;
    }
    public resetNumberExpression() {
        this._numberExpression.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberExpressionInput() {
        return this._numberExpression.internalValue;
    }

    // string_expression - computed: true, optional: true, required: false
    private _stringExpression = new RuleStringExpressionPropertyOutputReference(this, "string_expression");
    public get stringExpression() {
        return this._stringExpression;
    }
    public putStringExpression(value: RuleStringExpressionProperty) {
        this._stringExpression.internalValue = value;
    }
    public resetStringExpression() {
        this._stringExpression.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringExpressionInput() {
        return this._stringExpression.internalValue;
    }

    // verdict_expression - computed: true, optional: true, required: false
    private _verdictExpression = new RuleVerdictExpressionPropertyOutputReference(this, "verdict_expression");
    public get verdictExpression() {
        return this._verdictExpression;
    }
    public putVerdictExpression(value: RuleVerdictExpressionProperty) {
        this._verdictExpression.internalValue = value;
    }
    public resetVerdictExpression() {
        this._verdictExpression.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get verdictExpressionInput() {
        return this._verdictExpression.internalValue;
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
export interface RulesUnlessBooleanExpressionEvaluateAnalysisProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#analyzer CcMailManagerRuleSet#analyzer}
    */
    readonly analyzer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#result_field CcMailManagerRuleSet#result_field}
    */
    readonly resultField?: string;
}
export class RulesUnlessBooleanExpressionEvaluateAnalysisPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesUnlessBooleanExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RulesUnlessBooleanExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined) {
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
export interface IsInAddressListProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#address_lists CcMailManagerRuleSet#address_lists}
    */
    readonly addressLists?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#attribute CcMailManagerRuleSet#attribute}
    */
    readonly attribute?: string;
}
export class IsInAddressListPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IsInAddressListProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: IsInAddressListProperty | cdktn.IResolvable | undefined) {
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
export interface RulesUnlessBooleanExpressionEvaluateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#analysis CcMailManagerRuleSet#analysis}
    */
    readonly analysis?: RulesUnlessBooleanExpressionEvaluateAnalysisProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#attribute CcMailManagerRuleSet#attribute}
    */
    readonly attribute?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#is_in_address_list CcMailManagerRuleSet#is_in_address_list}
    */
    readonly isInAddressList?: IsInAddressListProperty;
}
export class RulesUnlessBooleanExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesUnlessBooleanExpressionEvaluateProperty | cdktn.IResolvable | undefined {
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
        if (this._isInAddressList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.isInAddressList = this._isInAddressList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesUnlessBooleanExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._analysis.internalValue = undefined;
            this._attribute = undefined;
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
            this._attribute = value.attribute;
            this._isInAddressList.internalValue = value.isInAddressList;
        }
    }

    // analysis - computed: true, optional: true, required: false
    private _analysis = new RulesUnlessBooleanExpressionEvaluateAnalysisPropertyOutputReference(this, "analysis");
    public get analysis() {
        return this._analysis;
    }
    public putAnalysis(value: RulesUnlessBooleanExpressionEvaluateAnalysisProperty) {
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

    // is_in_address_list - computed: true, optional: true, required: false
    private _isInAddressList = new IsInAddressListPropertyOutputReference(this, "is_in_address_list");
    public get isInAddressList() {
        return this._isInAddressList;
    }
    public putIsInAddressList(value: IsInAddressListProperty) {
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
export interface BooleanExpressionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#evaluate CcMailManagerRuleSet#evaluate}
    */
    readonly evaluate?: RulesUnlessBooleanExpressionEvaluateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#operator CcMailManagerRuleSet#operator}
    */
    readonly operator?: string;
}
export class BooleanExpressionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BooleanExpressionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: BooleanExpressionProperty | cdktn.IResolvable | undefined) {
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
    private _evaluate = new RulesUnlessBooleanExpressionEvaluatePropertyOutputReference(this, "evaluate");
    public get evaluate() {
        return this._evaluate;
    }
    public putEvaluate(value: RulesUnlessBooleanExpressionEvaluateProperty) {
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
export interface DmarcExpressionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#operator CcMailManagerRuleSet#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#values CcMailManagerRuleSet#values}
    */
    readonly values?: string[];
}
export class DmarcExpressionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DmarcExpressionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
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

    public set internalValue(value: DmarcExpressionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
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
            this._operator = value.operator;
            this._values = value.values;
        }
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
export interface RulesUnlessIpExpressionEvaluateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#attribute CcMailManagerRuleSet#attribute}
    */
    readonly attribute?: string;
}
export class RulesUnlessIpExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesUnlessIpExpressionEvaluateProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RulesUnlessIpExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
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
export interface IpExpressionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#evaluate CcMailManagerRuleSet#evaluate}
    */
    readonly evaluate?: RulesUnlessIpExpressionEvaluateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#operator CcMailManagerRuleSet#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#values CcMailManagerRuleSet#values}
    */
    readonly values?: string[];
}
export class IpExpressionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IpExpressionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: IpExpressionProperty | cdktn.IResolvable | undefined) {
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
    private _evaluate = new RulesUnlessIpExpressionEvaluatePropertyOutputReference(this, "evaluate");
    public get evaluate() {
        return this._evaluate;
    }
    public putEvaluate(value: RulesUnlessIpExpressionEvaluateProperty) {
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
export interface RulesUnlessNumberExpressionEvaluateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#attribute CcMailManagerRuleSet#attribute}
    */
    readonly attribute?: string;
}
export class RulesUnlessNumberExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesUnlessNumberExpressionEvaluateProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RulesUnlessNumberExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
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
export interface NumberExpressionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#evaluate CcMailManagerRuleSet#evaluate}
    */
    readonly evaluate?: RulesUnlessNumberExpressionEvaluateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#operator CcMailManagerRuleSet#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#value CcMailManagerRuleSet#value}
    */
    readonly value?: number;
}
export class NumberExpressionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NumberExpressionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: NumberExpressionProperty | cdktn.IResolvable | undefined) {
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
    private _evaluate = new RulesUnlessNumberExpressionEvaluatePropertyOutputReference(this, "evaluate");
    public get evaluate() {
        return this._evaluate;
    }
    public putEvaluate(value: RulesUnlessNumberExpressionEvaluateProperty) {
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
export interface RulesUnlessStringExpressionEvaluateAnalysisProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#analyzer CcMailManagerRuleSet#analyzer}
    */
    readonly analyzer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#result_field CcMailManagerRuleSet#result_field}
    */
    readonly resultField?: string;
}
export class RulesUnlessStringExpressionEvaluateAnalysisPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesUnlessStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RulesUnlessStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined) {
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
export interface RulesUnlessStringExpressionEvaluateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#analysis CcMailManagerRuleSet#analysis}
    */
    readonly analysis?: RulesUnlessStringExpressionEvaluateAnalysisProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#attribute CcMailManagerRuleSet#attribute}
    */
    readonly attribute?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#client_certificate_attribute CcMailManagerRuleSet#client_certificate_attribute}
    */
    readonly clientCertificateAttribute?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#mime_header_attribute CcMailManagerRuleSet#mime_header_attribute}
    */
    readonly mimeHeaderAttribute?: string;
}
export class RulesUnlessStringExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesUnlessStringExpressionEvaluateProperty | cdktn.IResolvable | undefined {
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
        if (this._clientCertificateAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientCertificateAttribute = this._clientCertificateAttribute;
        }
        if (this._mimeHeaderAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.mimeHeaderAttribute = this._mimeHeaderAttribute;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesUnlessStringExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._analysis.internalValue = undefined;
            this._attribute = undefined;
            this._clientCertificateAttribute = undefined;
            this._mimeHeaderAttribute = undefined;
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
            this._clientCertificateAttribute = value.clientCertificateAttribute;
            this._mimeHeaderAttribute = value.mimeHeaderAttribute;
        }
    }

    // analysis - computed: true, optional: true, required: false
    private _analysis = new RulesUnlessStringExpressionEvaluateAnalysisPropertyOutputReference(this, "analysis");
    public get analysis() {
        return this._analysis;
    }
    public putAnalysis(value: RulesUnlessStringExpressionEvaluateAnalysisProperty) {
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

    // client_certificate_attribute - computed: true, optional: true, required: false
    private _clientCertificateAttribute?: string; 
    public get clientCertificateAttribute() {
        return this.getStringAttribute('client_certificate_attribute');
    }
    public set clientCertificateAttribute(value: string) {
        this._clientCertificateAttribute = value;
    }
    public resetClientCertificateAttribute() {
        this._clientCertificateAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientCertificateAttributeInput() {
        return this._clientCertificateAttribute;
    }

    // mime_header_attribute - computed: true, optional: true, required: false
    private _mimeHeaderAttribute?: string; 
    public get mimeHeaderAttribute() {
        return this.getStringAttribute('mime_header_attribute');
    }
    public set mimeHeaderAttribute(value: string) {
        this._mimeHeaderAttribute = value;
    }
    public resetMimeHeaderAttribute() {
        this._mimeHeaderAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mimeHeaderAttributeInput() {
        return this._mimeHeaderAttribute;
    }
}
export interface StringExpressionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#evaluate CcMailManagerRuleSet#evaluate}
    */
    readonly evaluate?: RulesUnlessStringExpressionEvaluateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#operator CcMailManagerRuleSet#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#values CcMailManagerRuleSet#values}
    */
    readonly values?: string[];
}
export class StringExpressionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StringExpressionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: StringExpressionProperty | cdktn.IResolvable | undefined) {
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
    private _evaluate = new RulesUnlessStringExpressionEvaluatePropertyOutputReference(this, "evaluate");
    public get evaluate() {
        return this._evaluate;
    }
    public putEvaluate(value: RulesUnlessStringExpressionEvaluateProperty) {
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
export interface RulesUnlessVerdictExpressionEvaluateAnalysisProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#analyzer CcMailManagerRuleSet#analyzer}
    */
    readonly analyzer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#result_field CcMailManagerRuleSet#result_field}
    */
    readonly resultField?: string;
}
export class RulesUnlessVerdictExpressionEvaluateAnalysisPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesUnlessVerdictExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RulesUnlessVerdictExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined) {
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
export interface RulesUnlessVerdictExpressionEvaluateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#analysis CcMailManagerRuleSet#analysis}
    */
    readonly analysis?: RulesUnlessVerdictExpressionEvaluateAnalysisProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#attribute CcMailManagerRuleSet#attribute}
    */
    readonly attribute?: string;
}
export class RulesUnlessVerdictExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesUnlessVerdictExpressionEvaluateProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RulesUnlessVerdictExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
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
    private _analysis = new RulesUnlessVerdictExpressionEvaluateAnalysisPropertyOutputReference(this, "analysis");
    public get analysis() {
        return this._analysis;
    }
    public putAnalysis(value: RulesUnlessVerdictExpressionEvaluateAnalysisProperty) {
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
export interface VerdictExpressionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#evaluate CcMailManagerRuleSet#evaluate}
    */
    readonly evaluate?: RulesUnlessVerdictExpressionEvaluateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#operator CcMailManagerRuleSet#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#values CcMailManagerRuleSet#values}
    */
    readonly values?: string[];
}
export class VerdictExpressionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VerdictExpressionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: VerdictExpressionProperty | cdktn.IResolvable | undefined) {
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
    private _evaluate = new RulesUnlessVerdictExpressionEvaluatePropertyOutputReference(this, "evaluate");
    public get evaluate() {
        return this._evaluate;
    }
    public putEvaluate(value: RulesUnlessVerdictExpressionEvaluateProperty) {
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
export interface UnlessProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#boolean_expression CcMailManagerRuleSet#boolean_expression}
    */
    readonly booleanExpression?: BooleanExpressionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#dmarc_expression CcMailManagerRuleSet#dmarc_expression}
    */
    readonly dmarcExpression?: DmarcExpressionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#ip_expression CcMailManagerRuleSet#ip_expression}
    */
    readonly ipExpression?: IpExpressionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#number_expression CcMailManagerRuleSet#number_expression}
    */
    readonly numberExpression?: NumberExpressionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#string_expression CcMailManagerRuleSet#string_expression}
    */
    readonly stringExpression?: StringExpressionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#verdict_expression CcMailManagerRuleSet#verdict_expression}
    */
    readonly verdictExpression?: VerdictExpressionProperty;
}
export class UnlessPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): UnlessProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._booleanExpression?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.booleanExpression = this._booleanExpression?.internalValue;
        }
        if (this._dmarcExpression?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dmarcExpression = this._dmarcExpression?.internalValue;
        }
        if (this._ipExpression?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipExpression = this._ipExpression?.internalValue;
        }
        if (this._numberExpression?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberExpression = this._numberExpression?.internalValue;
        }
        if (this._stringExpression?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringExpression = this._stringExpression?.internalValue;
        }
        if (this._verdictExpression?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.verdictExpression = this._verdictExpression?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UnlessProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._booleanExpression.internalValue = undefined;
            this._dmarcExpression.internalValue = undefined;
            this._ipExpression.internalValue = undefined;
            this._numberExpression.internalValue = undefined;
            this._stringExpression.internalValue = undefined;
            this._verdictExpression.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._booleanExpression.internalValue = value.booleanExpression;
            this._dmarcExpression.internalValue = value.dmarcExpression;
            this._ipExpression.internalValue = value.ipExpression;
            this._numberExpression.internalValue = value.numberExpression;
            this._stringExpression.internalValue = value.stringExpression;
            this._verdictExpression.internalValue = value.verdictExpression;
        }
    }

    // boolean_expression - computed: true, optional: true, required: false
    private _booleanExpression = new BooleanExpressionPropertyOutputReference(this, "boolean_expression");
    public get booleanExpression() {
        return this._booleanExpression;
    }
    public putBooleanExpression(value: BooleanExpressionProperty) {
        this._booleanExpression.internalValue = value;
    }
    public resetBooleanExpression() {
        this._booleanExpression.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get booleanExpressionInput() {
        return this._booleanExpression.internalValue;
    }

    // dmarc_expression - computed: true, optional: true, required: false
    private _dmarcExpression = new DmarcExpressionPropertyOutputReference(this, "dmarc_expression");
    public get dmarcExpression() {
        return this._dmarcExpression;
    }
    public putDmarcExpression(value: DmarcExpressionProperty) {
        this._dmarcExpression.internalValue = value;
    }
    public resetDmarcExpression() {
        this._dmarcExpression.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dmarcExpressionInput() {
        return this._dmarcExpression.internalValue;
    }

    // ip_expression - computed: true, optional: true, required: false
    private _ipExpression = new IpExpressionPropertyOutputReference(this, "ip_expression");
    public get ipExpression() {
        return this._ipExpression;
    }
    public putIpExpression(value: IpExpressionProperty) {
        this._ipExpression.internalValue = value;
    }
    public resetIpExpression() {
        this._ipExpression.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipExpressionInput() {
        return this._ipExpression.internalValue;
    }

    // number_expression - computed: true, optional: true, required: false
    private _numberExpression = new NumberExpressionPropertyOutputReference(this, "number_expression");
    public get numberExpression() {
        return this._numberExpression;
    }
    public putNumberExpression(value: NumberExpressionProperty) {
        this._numberExpression.internalValue = value;
    }
    public resetNumberExpression() {
        this._numberExpression.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberExpressionInput() {
        return this._numberExpression.internalValue;
    }

    // string_expression - computed: true, optional: true, required: false
    private _stringExpression = new StringExpressionPropertyOutputReference(this, "string_expression");
    public get stringExpression() {
        return this._stringExpression;
    }
    public putStringExpression(value: StringExpressionProperty) {
        this._stringExpression.internalValue = value;
    }
    public resetStringExpression() {
        this._stringExpression.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringExpressionInput() {
        return this._stringExpression.internalValue;
    }

    // verdict_expression - computed: true, optional: true, required: false
    private _verdictExpression = new VerdictExpressionPropertyOutputReference(this, "verdict_expression");
    public get verdictExpression() {
        return this._verdictExpression;
    }
    public putVerdictExpression(value: VerdictExpressionProperty) {
        this._verdictExpression.internalValue = value;
    }
    public resetVerdictExpression() {
        this._verdictExpression.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get verdictExpressionInput() {
        return this._verdictExpression.internalValue;
    }
}

export class UnlessPropertyList extends cdktn.ComplexList {
    public internalValue? : UnlessProperty[] | cdktn.IResolvable

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
    public get(index: number): UnlessPropertyOutputReference {
        return new UnlessPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#actions CcMailManagerRuleSet#actions}
    */
    readonly actions: RuleActionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#conditions CcMailManagerRuleSet#conditions}
    */
    readonly conditions?: RuleConditionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#name CcMailManagerRuleSet#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#unless CcMailManagerRuleSet#unless}
    */
    readonly unless?: UnlessProperty[] | cdktn.IResolvable;
}
export class RulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions?.internalValue;
        }
        if (this._conditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditions = this._conditions?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._unless?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.unless = this._unless?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions.internalValue = undefined;
            this._conditions.internalValue = undefined;
            this._name = undefined;
            this._unless.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions.internalValue = value.actions;
            this._conditions.internalValue = value.conditions;
            this._name = value.name;
            this._unless.internalValue = value.unless;
        }
    }

    // actions - computed: false, optional: false, required: true
    private _actions = new RuleActionPropertyList(this, "actions", false);
    public get actions() {
        return this._actions;
    }
    public putActions(value: RuleActionProperty[] | cdktn.IResolvable) {
        this._actions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
    }

    // conditions - computed: true, optional: true, required: false
    private _conditions = new RuleConditionPropertyList(this, "conditions", false);
    public get conditions() {
        return this._conditions;
    }
    public putConditions(value: RuleConditionProperty[] | cdktn.IResolvable) {
        this._conditions.internalValue = value;
    }
    public resetConditions() {
        this._conditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
        return this._conditions.internalValue;
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

    // unless - computed: true, optional: true, required: false
    private _unless = new UnlessPropertyList(this, "unless", false);
    public get unless() {
        return this._unless;
    }
    public putUnless(value: UnlessProperty[] | cdktn.IResolvable) {
        this._unless.internalValue = value;
    }
    public resetUnless() {
        this._unless.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unlessInput() {
        return this._unless.internalValue;
    }
}

export class RulePropertyList extends cdktn.ComplexList {
    public internalValue? : RuleProperty[] | cdktn.IResolvable

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
    public get(index: number): RulePropertyOutputReference {
        return new RulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#key CcMailManagerRuleSet#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_rule_set#value CcMailManagerRuleSet#value}
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
