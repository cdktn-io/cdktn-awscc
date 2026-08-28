// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUserPoolRiskConfigurationAttachmentProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#account_takeover_risk_configuration CcUserPoolRiskConfigurationAttachment#account_takeover_risk_configuration}
    */
    readonly accountTakeoverRiskConfiguration?: CcUserPoolRiskConfigurationAttachment.AccountTakeoverRiskConfigurationTypeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#client_id CcUserPoolRiskConfigurationAttachment#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#compromised_credentials_risk_configuration CcUserPoolRiskConfigurationAttachment#compromised_credentials_risk_configuration}
    */
    readonly compromisedCredentialsRiskConfiguration?: CcUserPoolRiskConfigurationAttachment.CompromisedCredentialsRiskConfigurationTypeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#risk_exception_configuration CcUserPoolRiskConfigurationAttachment#risk_exception_configuration}
    */
    readonly riskExceptionConfiguration?: CcUserPoolRiskConfigurationAttachment.RiskExceptionConfigurationTypeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#user_pool_id CcUserPoolRiskConfigurationAttachment#user_pool_id}
    */
    readonly userPoolId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment awscc_cognito_user_pool_risk_configuration_attachment}
*/
export class CcUserPoolRiskConfigurationAttachment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cognito_user_pool_risk_configuration_attachment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUserPoolRiskConfigurationAttachment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUserPoolRiskConfigurationAttachment to import
    * @param importFromId The id of the existing CcUserPoolRiskConfigurationAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUserPoolRiskConfigurationAttachment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_user_pool_risk_configuration_attachment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment awscc_cognito_user_pool_risk_configuration_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUserPoolRiskConfigurationAttachmentProps
    */
    public constructor(scope: Construct, id: string, config: CcUserPoolRiskConfigurationAttachmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cognito_user_pool_risk_configuration_attachment',
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
        this._accountTakeoverRiskConfiguration.internalValue = config.accountTakeoverRiskConfiguration;
        this._clientId = config.clientId;
        this._compromisedCredentialsRiskConfiguration.internalValue = config.compromisedCredentialsRiskConfiguration;
        this._riskExceptionConfiguration.internalValue = config.riskExceptionConfiguration;
        this._userPoolId = config.userPoolId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_takeover_risk_configuration - computed: true, optional: true, required: false
    private _accountTakeoverRiskConfiguration = new CcUserPoolRiskConfigurationAttachment.AccountTakeoverRiskConfigurationTypePropertyOutputReference(this, "account_takeover_risk_configuration");
    public get accountTakeoverRiskConfiguration() {
        return this._accountTakeoverRiskConfiguration;
    }
    public putAccountTakeoverRiskConfiguration(value: CcUserPoolRiskConfigurationAttachment.AccountTakeoverRiskConfigurationTypeProperty) {
        this._accountTakeoverRiskConfiguration.internalValue = value;
    }
    public resetAccountTakeoverRiskConfiguration() {
        this._accountTakeoverRiskConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountTakeoverRiskConfigurationInput() {
        return this._accountTakeoverRiskConfiguration.internalValue;
    }

    // client_id - computed: false, optional: false, required: true
    private _clientId?: string; 
    public get clientId() {
        return this.getStringAttribute('client_id');
    }
    public set clientId(value: string) {
        this._clientId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
        return this._clientId;
    }

    // compromised_credentials_risk_configuration - computed: true, optional: true, required: false
    private _compromisedCredentialsRiskConfiguration = new CcUserPoolRiskConfigurationAttachment.CompromisedCredentialsRiskConfigurationTypePropertyOutputReference(this, "compromised_credentials_risk_configuration");
    public get compromisedCredentialsRiskConfiguration() {
        return this._compromisedCredentialsRiskConfiguration;
    }
    public putCompromisedCredentialsRiskConfiguration(value: CcUserPoolRiskConfigurationAttachment.CompromisedCredentialsRiskConfigurationTypeProperty) {
        this._compromisedCredentialsRiskConfiguration.internalValue = value;
    }
    public resetCompromisedCredentialsRiskConfiguration() {
        this._compromisedCredentialsRiskConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compromisedCredentialsRiskConfigurationInput() {
        return this._compromisedCredentialsRiskConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // risk_exception_configuration - computed: true, optional: true, required: false
    private _riskExceptionConfiguration = new CcUserPoolRiskConfigurationAttachment.RiskExceptionConfigurationTypePropertyOutputReference(this, "risk_exception_configuration");
    public get riskExceptionConfiguration() {
        return this._riskExceptionConfiguration;
    }
    public putRiskExceptionConfiguration(value: CcUserPoolRiskConfigurationAttachment.RiskExceptionConfigurationTypeProperty) {
        this._riskExceptionConfiguration.internalValue = value;
    }
    public resetRiskExceptionConfiguration() {
        this._riskExceptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get riskExceptionConfigurationInput() {
        return this._riskExceptionConfiguration.internalValue;
    }

    // user_pool_id - computed: false, optional: false, required: true
    private _userPoolId?: string; 
    public get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
        this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
        return this._userPoolId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            account_takeover_risk_configuration: ccUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationTypePropertyToTerraform(this._accountTakeoverRiskConfiguration.internalValue),
            client_id: cdktn.stringToTerraform(this._clientId),
            compromised_credentials_risk_configuration: ccUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationTypePropertyToTerraform(this._compromisedCredentialsRiskConfiguration.internalValue),
            risk_exception_configuration: ccUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationTypePropertyToTerraform(this._riskExceptionConfiguration.internalValue),
            user_pool_id: cdktn.stringToTerraform(this._userPoolId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            account_takeover_risk_configuration: {
                value: ccUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationTypePropertyToHclTerraform(this._accountTakeoverRiskConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUserPoolRiskConfigurationAttachment.AccountTakeoverRiskConfigurationTypeProperty",
            },
            client_id: {
                value: cdktn.stringToHclTerraform(this._clientId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            compromised_credentials_risk_configuration: {
                value: ccUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationTypePropertyToHclTerraform(this._compromisedCredentialsRiskConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUserPoolRiskConfigurationAttachment.CompromisedCredentialsRiskConfigurationTypeProperty",
            },
            risk_exception_configuration: {
                value: ccUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationTypePropertyToHclTerraform(this._riskExceptionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUserPoolRiskConfigurationAttachment.RiskExceptionConfigurationTypeProperty",
            },
            user_pool_id: {
                value: cdktn.stringToHclTerraform(this._userPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccUserPoolRiskConfigurationAttachmentAccountTakeoverActionTypePropertyToTerraform(struct?: CcUserPoolRiskConfigurationAttachment.AccountTakeoverActionTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_action: cdktn.stringToTerraform(struct!.eventAction),
        notify: cdktn.booleanToTerraform(struct!.notify),
    }
}


export function ccUserPoolRiskConfigurationAttachmentAccountTakeoverActionTypePropertyToHclTerraform(struct?: CcUserPoolRiskConfigurationAttachment.AccountTakeoverActionTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_action: {
            value: cdktn.stringToHclTerraform(struct!.eventAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        notify: {
            value: cdktn.booleanToHclTerraform(struct!.notify),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolRiskConfigurationAttachmentLowActionPropertyToTerraform(struct?: CcUserPoolRiskConfigurationAttachment.LowActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_action: cdktn.stringToTerraform(struct!.eventAction),
        notify: cdktn.booleanToTerraform(struct!.notify),
    }
}


export function ccUserPoolRiskConfigurationAttachmentLowActionPropertyToHclTerraform(struct?: CcUserPoolRiskConfigurationAttachment.LowActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_action: {
            value: cdktn.stringToHclTerraform(struct!.eventAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        notify: {
            value: cdktn.booleanToHclTerraform(struct!.notify),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolRiskConfigurationAttachmentMediumActionPropertyToTerraform(struct?: CcUserPoolRiskConfigurationAttachment.MediumActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_action: cdktn.stringToTerraform(struct!.eventAction),
        notify: cdktn.booleanToTerraform(struct!.notify),
    }
}


export function ccUserPoolRiskConfigurationAttachmentMediumActionPropertyToHclTerraform(struct?: CcUserPoolRiskConfigurationAttachment.MediumActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_action: {
            value: cdktn.stringToHclTerraform(struct!.eventAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        notify: {
            value: cdktn.booleanToHclTerraform(struct!.notify),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolRiskConfigurationAttachmentAccountTakeoverActionsTypePropertyToTerraform(struct?: CcUserPoolRiskConfigurationAttachment.AccountTakeoverActionsTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        high_action: ccUserPoolRiskConfigurationAttachmentAccountTakeoverActionTypePropertyToTerraform(struct!.highAction),
        low_action: ccUserPoolRiskConfigurationAttachmentLowActionPropertyToTerraform(struct!.lowAction),
        medium_action: ccUserPoolRiskConfigurationAttachmentMediumActionPropertyToTerraform(struct!.mediumAction),
    }
}


export function ccUserPoolRiskConfigurationAttachmentAccountTakeoverActionsTypePropertyToHclTerraform(struct?: CcUserPoolRiskConfigurationAttachment.AccountTakeoverActionsTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        high_action: {
            value: ccUserPoolRiskConfigurationAttachmentAccountTakeoverActionTypePropertyToHclTerraform(struct!.highAction),
            isBlock: true,
            type: "struct",
            storageClassType: "AccountTakeoverActionTypeProperty",
        },
        low_action: {
            value: ccUserPoolRiskConfigurationAttachmentLowActionPropertyToHclTerraform(struct!.lowAction),
            isBlock: true,
            type: "struct",
            storageClassType: "LowActionProperty",
        },
        medium_action: {
            value: ccUserPoolRiskConfigurationAttachmentMediumActionPropertyToHclTerraform(struct!.mediumAction),
            isBlock: true,
            type: "struct",
            storageClassType: "MediumActionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolRiskConfigurationAttachmentNotifyEmailTypePropertyToTerraform(struct?: CcUserPoolRiskConfigurationAttachment.NotifyEmailTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        html_body: cdktn.stringToTerraform(struct!.htmlBody),
        subject: cdktn.stringToTerraform(struct!.subject),
        text_body: cdktn.stringToTerraform(struct!.textBody),
    }
}


export function ccUserPoolRiskConfigurationAttachmentNotifyEmailTypePropertyToHclTerraform(struct?: CcUserPoolRiskConfigurationAttachment.NotifyEmailTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        html_body: {
            value: cdktn.stringToHclTerraform(struct!.htmlBody),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subject: {
            value: cdktn.stringToHclTerraform(struct!.subject),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_body: {
            value: cdktn.stringToHclTerraform(struct!.textBody),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolRiskConfigurationAttachmentMfaEmailPropertyToTerraform(struct?: CcUserPoolRiskConfigurationAttachment.MfaEmailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        html_body: cdktn.stringToTerraform(struct!.htmlBody),
        subject: cdktn.stringToTerraform(struct!.subject),
        text_body: cdktn.stringToTerraform(struct!.textBody),
    }
}


export function ccUserPoolRiskConfigurationAttachmentMfaEmailPropertyToHclTerraform(struct?: CcUserPoolRiskConfigurationAttachment.MfaEmailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        html_body: {
            value: cdktn.stringToHclTerraform(struct!.htmlBody),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subject: {
            value: cdktn.stringToHclTerraform(struct!.subject),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_body: {
            value: cdktn.stringToHclTerraform(struct!.textBody),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolRiskConfigurationAttachmentNoActionEmailPropertyToTerraform(struct?: CcUserPoolRiskConfigurationAttachment.NoActionEmailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        html_body: cdktn.stringToTerraform(struct!.htmlBody),
        subject: cdktn.stringToTerraform(struct!.subject),
        text_body: cdktn.stringToTerraform(struct!.textBody),
    }
}


export function ccUserPoolRiskConfigurationAttachmentNoActionEmailPropertyToHclTerraform(struct?: CcUserPoolRiskConfigurationAttachment.NoActionEmailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        html_body: {
            value: cdktn.stringToHclTerraform(struct!.htmlBody),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subject: {
            value: cdktn.stringToHclTerraform(struct!.subject),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_body: {
            value: cdktn.stringToHclTerraform(struct!.textBody),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolRiskConfigurationAttachmentNotifyConfigurationTypePropertyToTerraform(struct?: CcUserPoolRiskConfigurationAttachment.NotifyConfigurationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        block_email: ccUserPoolRiskConfigurationAttachmentNotifyEmailTypePropertyToTerraform(struct!.blockEmail),
        from: cdktn.stringToTerraform(struct!.from),
        mfa_email: ccUserPoolRiskConfigurationAttachmentMfaEmailPropertyToTerraform(struct!.mfaEmail),
        no_action_email: ccUserPoolRiskConfigurationAttachmentNoActionEmailPropertyToTerraform(struct!.noActionEmail),
        reply_to: cdktn.stringToTerraform(struct!.replyTo),
        source_arn: cdktn.stringToTerraform(struct!.sourceArn),
    }
}


export function ccUserPoolRiskConfigurationAttachmentNotifyConfigurationTypePropertyToHclTerraform(struct?: CcUserPoolRiskConfigurationAttachment.NotifyConfigurationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        block_email: {
            value: ccUserPoolRiskConfigurationAttachmentNotifyEmailTypePropertyToHclTerraform(struct!.blockEmail),
            isBlock: true,
            type: "struct",
            storageClassType: "NotifyEmailTypeProperty",
        },
        from: {
            value: cdktn.stringToHclTerraform(struct!.from),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mfa_email: {
            value: ccUserPoolRiskConfigurationAttachmentMfaEmailPropertyToHclTerraform(struct!.mfaEmail),
            isBlock: true,
            type: "struct",
            storageClassType: "MfaEmailProperty",
        },
        no_action_email: {
            value: ccUserPoolRiskConfigurationAttachmentNoActionEmailPropertyToHclTerraform(struct!.noActionEmail),
            isBlock: true,
            type: "struct",
            storageClassType: "NoActionEmailProperty",
        },
        reply_to: {
            value: cdktn.stringToHclTerraform(struct!.replyTo),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_arn: {
            value: cdktn.stringToHclTerraform(struct!.sourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationTypePropertyToTerraform(struct?: CcUserPoolRiskConfigurationAttachment.AccountTakeoverRiskConfigurationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: ccUserPoolRiskConfigurationAttachmentAccountTakeoverActionsTypePropertyToTerraform(struct!.actions),
        notify_configuration: ccUserPoolRiskConfigurationAttachmentNotifyConfigurationTypePropertyToTerraform(struct!.notifyConfiguration),
    }
}


export function ccUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationTypePropertyToHclTerraform(struct?: CcUserPoolRiskConfigurationAttachment.AccountTakeoverRiskConfigurationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: ccUserPoolRiskConfigurationAttachmentAccountTakeoverActionsTypePropertyToHclTerraform(struct!.actions),
            isBlock: true,
            type: "struct",
            storageClassType: "AccountTakeoverActionsTypeProperty",
        },
        notify_configuration: {
            value: ccUserPoolRiskConfigurationAttachmentNotifyConfigurationTypePropertyToHclTerraform(struct!.notifyConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "NotifyConfigurationTypeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolRiskConfigurationAttachmentCompromisedCredentialsActionsTypePropertyToTerraform(struct?: CcUserPoolRiskConfigurationAttachment.CompromisedCredentialsActionsTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_action: cdktn.stringToTerraform(struct!.eventAction),
    }
}


export function ccUserPoolRiskConfigurationAttachmentCompromisedCredentialsActionsTypePropertyToHclTerraform(struct?: CcUserPoolRiskConfigurationAttachment.CompromisedCredentialsActionsTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_action: {
            value: cdktn.stringToHclTerraform(struct!.eventAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationTypePropertyToTerraform(struct?: CcUserPoolRiskConfigurationAttachment.CompromisedCredentialsRiskConfigurationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: ccUserPoolRiskConfigurationAttachmentCompromisedCredentialsActionsTypePropertyToTerraform(struct!.actions),
        event_filter: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.eventFilter),
    }
}


export function ccUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationTypePropertyToHclTerraform(struct?: CcUserPoolRiskConfigurationAttachment.CompromisedCredentialsRiskConfigurationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: ccUserPoolRiskConfigurationAttachmentCompromisedCredentialsActionsTypePropertyToHclTerraform(struct!.actions),
            isBlock: true,
            type: "struct",
            storageClassType: "CompromisedCredentialsActionsTypeProperty",
        },
        event_filter: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.eventFilter),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationTypePropertyToTerraform(struct?: CcUserPoolRiskConfigurationAttachment.RiskExceptionConfigurationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        blocked_ip_range_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.blockedIpRangeList),
        skipped_ip_range_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.skippedIpRangeList),
    }
}


export function ccUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationTypePropertyToHclTerraform(struct?: CcUserPoolRiskConfigurationAttachment.RiskExceptionConfigurationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        blocked_ip_range_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.blockedIpRangeList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        skipped_ip_range_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.skippedIpRangeList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcUserPoolRiskConfigurationAttachment {
export interface AccountTakeoverActionTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CcUserPoolRiskConfigurationAttachment#event_action}
    */
    readonly eventAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#notify CcUserPoolRiskConfigurationAttachment#notify}
    */
    readonly notify?: boolean | cdktn.IResolvable;
}
export class AccountTakeoverActionTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccountTakeoverActionTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventAction = this._eventAction;
        }
        if (this._notify !== undefined) {
            hasAnyValues = true;
            internalValueResult.notify = this._notify;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccountTakeoverActionTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventAction = undefined;
            this._notify = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventAction = value.eventAction;
            this._notify = value.notify;
        }
    }

    // event_action - computed: true, optional: true, required: false
    private _eventAction?: string; 
    public get eventAction() {
        return this.getStringAttribute('event_action');
    }
    public set eventAction(value: string) {
        this._eventAction = value;
    }
    public resetEventAction() {
        this._eventAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventActionInput() {
        return this._eventAction;
    }

    // notify - computed: true, optional: true, required: false
    private _notify?: boolean | cdktn.IResolvable; 
    public get notify() {
        return this.getBooleanAttribute('notify');
    }
    public set notify(value: boolean | cdktn.IResolvable) {
        this._notify = value;
    }
    public resetNotify() {
        this._notify = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notifyInput() {
        return this._notify;
    }
}
export interface LowActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CcUserPoolRiskConfigurationAttachment#event_action}
    */
    readonly eventAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#notify CcUserPoolRiskConfigurationAttachment#notify}
    */
    readonly notify?: boolean | cdktn.IResolvable;
}
export class LowActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LowActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventAction = this._eventAction;
        }
        if (this._notify !== undefined) {
            hasAnyValues = true;
            internalValueResult.notify = this._notify;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LowActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventAction = undefined;
            this._notify = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventAction = value.eventAction;
            this._notify = value.notify;
        }
    }

    // event_action - computed: true, optional: true, required: false
    private _eventAction?: string; 
    public get eventAction() {
        return this.getStringAttribute('event_action');
    }
    public set eventAction(value: string) {
        this._eventAction = value;
    }
    public resetEventAction() {
        this._eventAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventActionInput() {
        return this._eventAction;
    }

    // notify - computed: true, optional: true, required: false
    private _notify?: boolean | cdktn.IResolvable; 
    public get notify() {
        return this.getBooleanAttribute('notify');
    }
    public set notify(value: boolean | cdktn.IResolvable) {
        this._notify = value;
    }
    public resetNotify() {
        this._notify = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notifyInput() {
        return this._notify;
    }
}
export interface MediumActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CcUserPoolRiskConfigurationAttachment#event_action}
    */
    readonly eventAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#notify CcUserPoolRiskConfigurationAttachment#notify}
    */
    readonly notify?: boolean | cdktn.IResolvable;
}
export class MediumActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MediumActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventAction = this._eventAction;
        }
        if (this._notify !== undefined) {
            hasAnyValues = true;
            internalValueResult.notify = this._notify;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MediumActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventAction = undefined;
            this._notify = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventAction = value.eventAction;
            this._notify = value.notify;
        }
    }

    // event_action - computed: true, optional: true, required: false
    private _eventAction?: string; 
    public get eventAction() {
        return this.getStringAttribute('event_action');
    }
    public set eventAction(value: string) {
        this._eventAction = value;
    }
    public resetEventAction() {
        this._eventAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventActionInput() {
        return this._eventAction;
    }

    // notify - computed: true, optional: true, required: false
    private _notify?: boolean | cdktn.IResolvable; 
    public get notify() {
        return this.getBooleanAttribute('notify');
    }
    public set notify(value: boolean | cdktn.IResolvable) {
        this._notify = value;
    }
    public resetNotify() {
        this._notify = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notifyInput() {
        return this._notify;
    }
}
export interface AccountTakeoverActionsTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#high_action CcUserPoolRiskConfigurationAttachment#high_action}
    */
    readonly highAction?: AccountTakeoverActionTypeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#low_action CcUserPoolRiskConfigurationAttachment#low_action}
    */
    readonly lowAction?: LowActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#medium_action CcUserPoolRiskConfigurationAttachment#medium_action}
    */
    readonly mediumAction?: MediumActionProperty;
}
export class AccountTakeoverActionsTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccountTakeoverActionsTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._highAction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.highAction = this._highAction?.internalValue;
        }
        if (this._lowAction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lowAction = this._lowAction?.internalValue;
        }
        if (this._mediumAction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mediumAction = this._mediumAction?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccountTakeoverActionsTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._highAction.internalValue = undefined;
            this._lowAction.internalValue = undefined;
            this._mediumAction.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._highAction.internalValue = value.highAction;
            this._lowAction.internalValue = value.lowAction;
            this._mediumAction.internalValue = value.mediumAction;
        }
    }

    // high_action - computed: true, optional: true, required: false
    private _highAction = new AccountTakeoverActionTypePropertyOutputReference(this, "high_action");
    public get highAction() {
        return this._highAction;
    }
    public putHighAction(value: AccountTakeoverActionTypeProperty) {
        this._highAction.internalValue = value;
    }
    public resetHighAction() {
        this._highAction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get highActionInput() {
        return this._highAction.internalValue;
    }

    // low_action - computed: true, optional: true, required: false
    private _lowAction = new LowActionPropertyOutputReference(this, "low_action");
    public get lowAction() {
        return this._lowAction;
    }
    public putLowAction(value: LowActionProperty) {
        this._lowAction.internalValue = value;
    }
    public resetLowAction() {
        this._lowAction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lowActionInput() {
        return this._lowAction.internalValue;
    }

    // medium_action - computed: true, optional: true, required: false
    private _mediumAction = new MediumActionPropertyOutputReference(this, "medium_action");
    public get mediumAction() {
        return this._mediumAction;
    }
    public putMediumAction(value: MediumActionProperty) {
        this._mediumAction.internalValue = value;
    }
    public resetMediumAction() {
        this._mediumAction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediumActionInput() {
        return this._mediumAction.internalValue;
    }
}
export interface NotifyEmailTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#html_body CcUserPoolRiskConfigurationAttachment#html_body}
    */
    readonly htmlBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#subject CcUserPoolRiskConfigurationAttachment#subject}
    */
    readonly subject?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#text_body CcUserPoolRiskConfigurationAttachment#text_body}
    */
    readonly textBody?: string;
}
export class NotifyEmailTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NotifyEmailTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._htmlBody !== undefined) {
            hasAnyValues = true;
            internalValueResult.htmlBody = this._htmlBody;
        }
        if (this._subject !== undefined) {
            hasAnyValues = true;
            internalValueResult.subject = this._subject;
        }
        if (this._textBody !== undefined) {
            hasAnyValues = true;
            internalValueResult.textBody = this._textBody;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotifyEmailTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._htmlBody = undefined;
            this._subject = undefined;
            this._textBody = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._htmlBody = value.htmlBody;
            this._subject = value.subject;
            this._textBody = value.textBody;
        }
    }

    // html_body - computed: true, optional: true, required: false
    private _htmlBody?: string; 
    public get htmlBody() {
        return this.getStringAttribute('html_body');
    }
    public set htmlBody(value: string) {
        this._htmlBody = value;
    }
    public resetHtmlBody() {
        this._htmlBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get htmlBodyInput() {
        return this._htmlBody;
    }

    // subject - computed: true, optional: true, required: false
    private _subject?: string; 
    public get subject() {
        return this.getStringAttribute('subject');
    }
    public set subject(value: string) {
        this._subject = value;
    }
    public resetSubject() {
        this._subject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectInput() {
        return this._subject;
    }

    // text_body - computed: true, optional: true, required: false
    private _textBody?: string; 
    public get textBody() {
        return this.getStringAttribute('text_body');
    }
    public set textBody(value: string) {
        this._textBody = value;
    }
    public resetTextBody() {
        this._textBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textBodyInput() {
        return this._textBody;
    }
}
export interface MfaEmailProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#html_body CcUserPoolRiskConfigurationAttachment#html_body}
    */
    readonly htmlBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#subject CcUserPoolRiskConfigurationAttachment#subject}
    */
    readonly subject?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#text_body CcUserPoolRiskConfigurationAttachment#text_body}
    */
    readonly textBody?: string;
}
export class MfaEmailPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MfaEmailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._htmlBody !== undefined) {
            hasAnyValues = true;
            internalValueResult.htmlBody = this._htmlBody;
        }
        if (this._subject !== undefined) {
            hasAnyValues = true;
            internalValueResult.subject = this._subject;
        }
        if (this._textBody !== undefined) {
            hasAnyValues = true;
            internalValueResult.textBody = this._textBody;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MfaEmailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._htmlBody = undefined;
            this._subject = undefined;
            this._textBody = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._htmlBody = value.htmlBody;
            this._subject = value.subject;
            this._textBody = value.textBody;
        }
    }

    // html_body - computed: true, optional: true, required: false
    private _htmlBody?: string; 
    public get htmlBody() {
        return this.getStringAttribute('html_body');
    }
    public set htmlBody(value: string) {
        this._htmlBody = value;
    }
    public resetHtmlBody() {
        this._htmlBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get htmlBodyInput() {
        return this._htmlBody;
    }

    // subject - computed: true, optional: true, required: false
    private _subject?: string; 
    public get subject() {
        return this.getStringAttribute('subject');
    }
    public set subject(value: string) {
        this._subject = value;
    }
    public resetSubject() {
        this._subject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectInput() {
        return this._subject;
    }

    // text_body - computed: true, optional: true, required: false
    private _textBody?: string; 
    public get textBody() {
        return this.getStringAttribute('text_body');
    }
    public set textBody(value: string) {
        this._textBody = value;
    }
    public resetTextBody() {
        this._textBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textBodyInput() {
        return this._textBody;
    }
}
export interface NoActionEmailProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#html_body CcUserPoolRiskConfigurationAttachment#html_body}
    */
    readonly htmlBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#subject CcUserPoolRiskConfigurationAttachment#subject}
    */
    readonly subject?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#text_body CcUserPoolRiskConfigurationAttachment#text_body}
    */
    readonly textBody?: string;
}
export class NoActionEmailPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NoActionEmailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._htmlBody !== undefined) {
            hasAnyValues = true;
            internalValueResult.htmlBody = this._htmlBody;
        }
        if (this._subject !== undefined) {
            hasAnyValues = true;
            internalValueResult.subject = this._subject;
        }
        if (this._textBody !== undefined) {
            hasAnyValues = true;
            internalValueResult.textBody = this._textBody;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NoActionEmailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._htmlBody = undefined;
            this._subject = undefined;
            this._textBody = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._htmlBody = value.htmlBody;
            this._subject = value.subject;
            this._textBody = value.textBody;
        }
    }

    // html_body - computed: true, optional: true, required: false
    private _htmlBody?: string; 
    public get htmlBody() {
        return this.getStringAttribute('html_body');
    }
    public set htmlBody(value: string) {
        this._htmlBody = value;
    }
    public resetHtmlBody() {
        this._htmlBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get htmlBodyInput() {
        return this._htmlBody;
    }

    // subject - computed: true, optional: true, required: false
    private _subject?: string; 
    public get subject() {
        return this.getStringAttribute('subject');
    }
    public set subject(value: string) {
        this._subject = value;
    }
    public resetSubject() {
        this._subject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectInput() {
        return this._subject;
    }

    // text_body - computed: true, optional: true, required: false
    private _textBody?: string; 
    public get textBody() {
        return this.getStringAttribute('text_body');
    }
    public set textBody(value: string) {
        this._textBody = value;
    }
    public resetTextBody() {
        this._textBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textBodyInput() {
        return this._textBody;
    }
}
export interface NotifyConfigurationTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#block_email CcUserPoolRiskConfigurationAttachment#block_email}
    */
    readonly blockEmail?: NotifyEmailTypeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#from CcUserPoolRiskConfigurationAttachment#from}
    */
    readonly from?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#mfa_email CcUserPoolRiskConfigurationAttachment#mfa_email}
    */
    readonly mfaEmail?: MfaEmailProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#no_action_email CcUserPoolRiskConfigurationAttachment#no_action_email}
    */
    readonly noActionEmail?: NoActionEmailProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#reply_to CcUserPoolRiskConfigurationAttachment#reply_to}
    */
    readonly replyTo?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#source_arn CcUserPoolRiskConfigurationAttachment#source_arn}
    */
    readonly sourceArn?: string;
}
export class NotifyConfigurationTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NotifyConfigurationTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._blockEmail?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockEmail = this._blockEmail?.internalValue;
        }
        if (this._from !== undefined) {
            hasAnyValues = true;
            internalValueResult.from = this._from;
        }
        if (this._mfaEmail?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mfaEmail = this._mfaEmail?.internalValue;
        }
        if (this._noActionEmail?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.noActionEmail = this._noActionEmail?.internalValue;
        }
        if (this._replyTo !== undefined) {
            hasAnyValues = true;
            internalValueResult.replyTo = this._replyTo;
        }
        if (this._sourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceArn = this._sourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotifyConfigurationTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._blockEmail.internalValue = undefined;
            this._from = undefined;
            this._mfaEmail.internalValue = undefined;
            this._noActionEmail.internalValue = undefined;
            this._replyTo = undefined;
            this._sourceArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._blockEmail.internalValue = value.blockEmail;
            this._from = value.from;
            this._mfaEmail.internalValue = value.mfaEmail;
            this._noActionEmail.internalValue = value.noActionEmail;
            this._replyTo = value.replyTo;
            this._sourceArn = value.sourceArn;
        }
    }

    // block_email - computed: true, optional: true, required: false
    private _blockEmail = new NotifyEmailTypePropertyOutputReference(this, "block_email");
    public get blockEmail() {
        return this._blockEmail;
    }
    public putBlockEmail(value: NotifyEmailTypeProperty) {
        this._blockEmail.internalValue = value;
    }
    public resetBlockEmail() {
        this._blockEmail.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockEmailInput() {
        return this._blockEmail.internalValue;
    }

    // from - computed: true, optional: true, required: false
    private _from?: string; 
    public get from() {
        return this.getStringAttribute('from');
    }
    public set from(value: string) {
        this._from = value;
    }
    public resetFrom() {
        this._from = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromInput() {
        return this._from;
    }

    // mfa_email - computed: true, optional: true, required: false
    private _mfaEmail = new MfaEmailPropertyOutputReference(this, "mfa_email");
    public get mfaEmail() {
        return this._mfaEmail;
    }
    public putMfaEmail(value: MfaEmailProperty) {
        this._mfaEmail.internalValue = value;
    }
    public resetMfaEmail() {
        this._mfaEmail.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mfaEmailInput() {
        return this._mfaEmail.internalValue;
    }

    // no_action_email - computed: true, optional: true, required: false
    private _noActionEmail = new NoActionEmailPropertyOutputReference(this, "no_action_email");
    public get noActionEmail() {
        return this._noActionEmail;
    }
    public putNoActionEmail(value: NoActionEmailProperty) {
        this._noActionEmail.internalValue = value;
    }
    public resetNoActionEmail() {
        this._noActionEmail.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noActionEmailInput() {
        return this._noActionEmail.internalValue;
    }

    // reply_to - computed: true, optional: true, required: false
    private _replyTo?: string; 
    public get replyTo() {
        return this.getStringAttribute('reply_to');
    }
    public set replyTo(value: string) {
        this._replyTo = value;
    }
    public resetReplyTo() {
        this._replyTo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replyToInput() {
        return this._replyTo;
    }

    // source_arn - computed: true, optional: true, required: false
    private _sourceArn?: string; 
    public get sourceArn() {
        return this.getStringAttribute('source_arn');
    }
    public set sourceArn(value: string) {
        this._sourceArn = value;
    }
    public resetSourceArn() {
        this._sourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceArnInput() {
        return this._sourceArn;
    }
}
export interface AccountTakeoverRiskConfigurationTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#actions CcUserPoolRiskConfigurationAttachment#actions}
    */
    readonly actions?: AccountTakeoverActionsTypeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#notify_configuration CcUserPoolRiskConfigurationAttachment#notify_configuration}
    */
    readonly notifyConfiguration?: NotifyConfigurationTypeProperty;
}
export class AccountTakeoverRiskConfigurationTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccountTakeoverRiskConfigurationTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions?.internalValue;
        }
        if (this._notifyConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.notifyConfiguration = this._notifyConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccountTakeoverRiskConfigurationTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions.internalValue = undefined;
            this._notifyConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions.internalValue = value.actions;
            this._notifyConfiguration.internalValue = value.notifyConfiguration;
        }
    }

    // actions - computed: true, optional: true, required: false
    private _actions = new AccountTakeoverActionsTypePropertyOutputReference(this, "actions");
    public get actions() {
        return this._actions;
    }
    public putActions(value: AccountTakeoverActionsTypeProperty) {
        this._actions.internalValue = value;
    }
    public resetActions() {
        this._actions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
    }

    // notify_configuration - computed: true, optional: true, required: false
    private _notifyConfiguration = new NotifyConfigurationTypePropertyOutputReference(this, "notify_configuration");
    public get notifyConfiguration() {
        return this._notifyConfiguration;
    }
    public putNotifyConfiguration(value: NotifyConfigurationTypeProperty) {
        this._notifyConfiguration.internalValue = value;
    }
    public resetNotifyConfiguration() {
        this._notifyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notifyConfigurationInput() {
        return this._notifyConfiguration.internalValue;
    }
}
export interface CompromisedCredentialsActionsTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CcUserPoolRiskConfigurationAttachment#event_action}
    */
    readonly eventAction?: string;
}
export class CompromisedCredentialsActionsTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CompromisedCredentialsActionsTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventAction = this._eventAction;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CompromisedCredentialsActionsTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventAction = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventAction = value.eventAction;
        }
    }

    // event_action - computed: true, optional: true, required: false
    private _eventAction?: string; 
    public get eventAction() {
        return this.getStringAttribute('event_action');
    }
    public set eventAction(value: string) {
        this._eventAction = value;
    }
    public resetEventAction() {
        this._eventAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventActionInput() {
        return this._eventAction;
    }
}
export interface CompromisedCredentialsRiskConfigurationTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#actions CcUserPoolRiskConfigurationAttachment#actions}
    */
    readonly actions?: CompromisedCredentialsActionsTypeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#event_filter CcUserPoolRiskConfigurationAttachment#event_filter}
    */
    readonly eventFilter?: string[];
}
export class CompromisedCredentialsRiskConfigurationTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CompromisedCredentialsRiskConfigurationTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions?.internalValue;
        }
        if (this._eventFilter !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventFilter = this._eventFilter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CompromisedCredentialsRiskConfigurationTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions.internalValue = undefined;
            this._eventFilter = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions.internalValue = value.actions;
            this._eventFilter = value.eventFilter;
        }
    }

    // actions - computed: true, optional: true, required: false
    private _actions = new CompromisedCredentialsActionsTypePropertyOutputReference(this, "actions");
    public get actions() {
        return this._actions;
    }
    public putActions(value: CompromisedCredentialsActionsTypeProperty) {
        this._actions.internalValue = value;
    }
    public resetActions() {
        this._actions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
    }

    // event_filter - computed: true, optional: true, required: false
    private _eventFilter?: string[]; 
    public get eventFilter() {
        return this.getListAttribute('event_filter');
    }
    public set eventFilter(value: string[]) {
        this._eventFilter = value;
    }
    public resetEventFilter() {
        this._eventFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventFilterInput() {
        return this._eventFilter;
    }
}
export interface RiskExceptionConfigurationTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#blocked_ip_range_list CcUserPoolRiskConfigurationAttachment#blocked_ip_range_list}
    */
    readonly blockedIpRangeList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_risk_configuration_attachment#skipped_ip_range_list CcUserPoolRiskConfigurationAttachment#skipped_ip_range_list}
    */
    readonly skippedIpRangeList?: string[];
}
export class RiskExceptionConfigurationTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RiskExceptionConfigurationTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._blockedIpRangeList !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockedIpRangeList = this._blockedIpRangeList;
        }
        if (this._skippedIpRangeList !== undefined) {
            hasAnyValues = true;
            internalValueResult.skippedIpRangeList = this._skippedIpRangeList;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RiskExceptionConfigurationTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._blockedIpRangeList = undefined;
            this._skippedIpRangeList = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._blockedIpRangeList = value.blockedIpRangeList;
            this._skippedIpRangeList = value.skippedIpRangeList;
        }
    }

    // blocked_ip_range_list - computed: true, optional: true, required: false
    private _blockedIpRangeList?: string[]; 
    public get blockedIpRangeList() {
        return this.getListAttribute('blocked_ip_range_list');
    }
    public set blockedIpRangeList(value: string[]) {
        this._blockedIpRangeList = value;
    }
    public resetBlockedIpRangeList() {
        this._blockedIpRangeList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockedIpRangeListInput() {
        return this._blockedIpRangeList;
    }

    // skipped_ip_range_list - computed: true, optional: true, required: false
    private _skippedIpRangeList?: string[]; 
    public get skippedIpRangeList() {
        return this.getListAttribute('skipped_ip_range_list');
    }
    public set skippedIpRangeList(value: string[]) {
        this._skippedIpRangeList = value;
    }
    public resetSkippedIpRangeList() {
        this._skippedIpRangeList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skippedIpRangeListInput() {
        return this._skippedIpRangeList;
    }
}
}
