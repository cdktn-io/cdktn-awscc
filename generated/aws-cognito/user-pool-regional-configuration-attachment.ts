// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUserPoolRegionalConfigurationAttachmentProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_configuration CcUserPoolRegionalConfigurationAttachment#email_configuration}
    */
    readonly emailConfiguration?: CcUserPoolRegionalConfigurationAttachment.EmailConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_config CcUserPoolRegionalConfigurationAttachment#lambda_config}
    */
    readonly lambdaConfig?: CcUserPoolRegionalConfigurationAttachment.LambdaConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sms_configuration CcUserPoolRegionalConfigurationAttachment#sms_configuration}
    */
    readonly smsConfiguration?: CcUserPoolRegionalConfigurationAttachment.SmsConfigurationProperty;
    /**
    * The status of the replica. Set to ACTIVE or INACTIVE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#status CcUserPoolRegionalConfigurationAttachment#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_id CcUserPoolRegionalConfigurationAttachment#user_pool_id}
    */
    readonly userPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_tags CcUserPoolRegionalConfigurationAttachment#user_pool_tags}
    */
    readonly userPoolTags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment awscc_cognito_user_pool_regional_configuration_attachment}
*/
export class CcUserPoolRegionalConfigurationAttachment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cognito_user_pool_regional_configuration_attachment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUserPoolRegionalConfigurationAttachment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUserPoolRegionalConfigurationAttachment to import
    * @param importFromId The id of the existing CcUserPoolRegionalConfigurationAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUserPoolRegionalConfigurationAttachment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_user_pool_regional_configuration_attachment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment awscc_cognito_user_pool_regional_configuration_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUserPoolRegionalConfigurationAttachmentProps
    */
    public constructor(scope: Construct, id: string, config: CcUserPoolRegionalConfigurationAttachmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cognito_user_pool_regional_configuration_attachment',
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
        this._emailConfiguration.internalValue = config.emailConfiguration;
        this._lambdaConfig.internalValue = config.lambdaConfig;
        this._smsConfiguration.internalValue = config.smsConfiguration;
        this._status = config.status;
        this._userPoolId = config.userPoolId;
        this._userPoolTags = config.userPoolTags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // email_configuration - computed: true, optional: true, required: false
    private _emailConfiguration = new CcUserPoolRegionalConfigurationAttachment.EmailConfigurationPropertyOutputReference(this, "email_configuration");
    public get emailConfiguration() {
        return this._emailConfiguration;
    }
    public putEmailConfiguration(value: CcUserPoolRegionalConfigurationAttachment.EmailConfigurationProperty) {
        this._emailConfiguration.internalValue = value;
    }
    public resetEmailConfiguration() {
        this._emailConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailConfigurationInput() {
        return this._emailConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // lambda_config - computed: true, optional: true, required: false
    private _lambdaConfig = new CcUserPoolRegionalConfigurationAttachment.LambdaConfigPropertyOutputReference(this, "lambda_config");
    public get lambdaConfig() {
        return this._lambdaConfig;
    }
    public putLambdaConfig(value: CcUserPoolRegionalConfigurationAttachment.LambdaConfigProperty) {
        this._lambdaConfig.internalValue = value;
    }
    public resetLambdaConfig() {
        this._lambdaConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaConfigInput() {
        return this._lambdaConfig.internalValue;
    }

    // sms_configuration - computed: true, optional: true, required: false
    private _smsConfiguration = new CcUserPoolRegionalConfigurationAttachment.SmsConfigurationPropertyOutputReference(this, "sms_configuration");
    public get smsConfiguration() {
        return this._smsConfiguration;
    }
    public putSmsConfiguration(value: CcUserPoolRegionalConfigurationAttachment.SmsConfigurationProperty) {
        this._smsConfiguration.internalValue = value;
    }
    public resetSmsConfiguration() {
        this._smsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smsConfigurationInput() {
        return this._smsConfiguration.internalValue;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
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

    // user_pool_tags - computed: true, optional: true, required: false
    private _userPoolTags?: { [key: string]: string }; 
    public get userPoolTags() {
        return this.getStringMapAttribute('user_pool_tags');
    }
    public set userPoolTags(value: { [key: string]: string }) {
        this._userPoolTags = value;
    }
    public resetUserPoolTags() {
        this._userPoolTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolTagsInput() {
        return this._userPoolTags;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            email_configuration: ccUserPoolRegionalConfigurationAttachmentEmailConfigurationPropertyToTerraform(this._emailConfiguration.internalValue),
            lambda_config: ccUserPoolRegionalConfigurationAttachmentLambdaConfigPropertyToTerraform(this._lambdaConfig.internalValue),
            sms_configuration: ccUserPoolRegionalConfigurationAttachmentSmsConfigurationPropertyToTerraform(this._smsConfiguration.internalValue),
            status: cdktn.stringToTerraform(this._status),
            user_pool_id: cdktn.stringToTerraform(this._userPoolId),
            user_pool_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._userPoolTags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            email_configuration: {
                value: ccUserPoolRegionalConfigurationAttachmentEmailConfigurationPropertyToHclTerraform(this._emailConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUserPoolRegionalConfigurationAttachment.EmailConfigurationProperty",
            },
            lambda_config: {
                value: ccUserPoolRegionalConfigurationAttachmentLambdaConfigPropertyToHclTerraform(this._lambdaConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUserPoolRegionalConfigurationAttachment.LambdaConfigProperty",
            },
            sms_configuration: {
                value: ccUserPoolRegionalConfigurationAttachmentSmsConfigurationPropertyToHclTerraform(this._smsConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUserPoolRegionalConfigurationAttachment.SmsConfigurationProperty",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_pool_id: {
                value: cdktn.stringToHclTerraform(this._userPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_pool_tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._userPoolTags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccUserPoolRegionalConfigurationAttachmentEmailConfigurationPropertyToTerraform(struct?: CcUserPoolRegionalConfigurationAttachment.EmailConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        configuration_set: cdktn.stringToTerraform(struct!.configurationSet),
        email_sending_account: cdktn.stringToTerraform(struct!.emailSendingAccount),
        from: cdktn.stringToTerraform(struct!.from),
        reply_to_email_address: cdktn.stringToTerraform(struct!.replyToEmailAddress),
        source_arn: cdktn.stringToTerraform(struct!.sourceArn),
    }
}


export function ccUserPoolRegionalConfigurationAttachmentEmailConfigurationPropertyToHclTerraform(struct?: CcUserPoolRegionalConfigurationAttachment.EmailConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        configuration_set: {
            value: cdktn.stringToHclTerraform(struct!.configurationSet),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        email_sending_account: {
            value: cdktn.stringToHclTerraform(struct!.emailSendingAccount),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        from: {
            value: cdktn.stringToHclTerraform(struct!.from),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        reply_to_email_address: {
            value: cdktn.stringToHclTerraform(struct!.replyToEmailAddress),
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


export function ccUserPoolRegionalConfigurationAttachmentCustomEmailSenderPropertyToTerraform(struct?: CcUserPoolRegionalConfigurationAttachment.CustomEmailSenderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
        lambda_version: cdktn.stringToTerraform(struct!.lambdaVersion),
    }
}


export function ccUserPoolRegionalConfigurationAttachmentCustomEmailSenderPropertyToHclTerraform(struct?: CcUserPoolRegionalConfigurationAttachment.CustomEmailSenderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lambda_arn: {
            value: cdktn.stringToHclTerraform(struct!.lambdaArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lambda_version: {
            value: cdktn.stringToHclTerraform(struct!.lambdaVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolRegionalConfigurationAttachmentCustomSMSSenderPropertyToTerraform(struct?: CcUserPoolRegionalConfigurationAttachment.CustomSMSSenderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
        lambda_version: cdktn.stringToTerraform(struct!.lambdaVersion),
    }
}


export function ccUserPoolRegionalConfigurationAttachmentCustomSMSSenderPropertyToHclTerraform(struct?: CcUserPoolRegionalConfigurationAttachment.CustomSMSSenderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lambda_arn: {
            value: cdktn.stringToHclTerraform(struct!.lambdaArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lambda_version: {
            value: cdktn.stringToHclTerraform(struct!.lambdaVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolRegionalConfigurationAttachmentInboundFederationPropertyToTerraform(struct?: CcUserPoolRegionalConfigurationAttachment.InboundFederationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
        lambda_version: cdktn.stringToTerraform(struct!.lambdaVersion),
    }
}


export function ccUserPoolRegionalConfigurationAttachmentInboundFederationPropertyToHclTerraform(struct?: CcUserPoolRegionalConfigurationAttachment.InboundFederationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lambda_arn: {
            value: cdktn.stringToHclTerraform(struct!.lambdaArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lambda_version: {
            value: cdktn.stringToHclTerraform(struct!.lambdaVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolRegionalConfigurationAttachmentPreTokenGenerationConfigPropertyToTerraform(struct?: CcUserPoolRegionalConfigurationAttachment.PreTokenGenerationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
        lambda_version: cdktn.stringToTerraform(struct!.lambdaVersion),
    }
}


export function ccUserPoolRegionalConfigurationAttachmentPreTokenGenerationConfigPropertyToHclTerraform(struct?: CcUserPoolRegionalConfigurationAttachment.PreTokenGenerationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lambda_arn: {
            value: cdktn.stringToHclTerraform(struct!.lambdaArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lambda_version: {
            value: cdktn.stringToHclTerraform(struct!.lambdaVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolRegionalConfigurationAttachmentLambdaConfigPropertyToTerraform(struct?: CcUserPoolRegionalConfigurationAttachment.LambdaConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        create_auth_challenge: cdktn.stringToTerraform(struct!.createAuthChallenge),
        custom_email_sender: ccUserPoolRegionalConfigurationAttachmentCustomEmailSenderPropertyToTerraform(struct!.customEmailSender),
        custom_message: cdktn.stringToTerraform(struct!.customMessage),
        custom_sms_sender: ccUserPoolRegionalConfigurationAttachmentCustomSMSSenderPropertyToTerraform(struct!.customSmsSender),
        define_auth_challenge: cdktn.stringToTerraform(struct!.defineAuthChallenge),
        inbound_federation: ccUserPoolRegionalConfigurationAttachmentInboundFederationPropertyToTerraform(struct!.inboundFederation),
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        post_authentication: cdktn.stringToTerraform(struct!.postAuthentication),
        post_confirmation: cdktn.stringToTerraform(struct!.postConfirmation),
        pre_authentication: cdktn.stringToTerraform(struct!.preAuthentication),
        pre_sign_up: cdktn.stringToTerraform(struct!.preSignUp),
        pre_token_generation: cdktn.stringToTerraform(struct!.preTokenGeneration),
        pre_token_generation_config: ccUserPoolRegionalConfigurationAttachmentPreTokenGenerationConfigPropertyToTerraform(struct!.preTokenGenerationConfig),
        user_migration: cdktn.stringToTerraform(struct!.userMigration),
        verify_auth_challenge_response: cdktn.stringToTerraform(struct!.verifyAuthChallengeResponse),
    }
}


export function ccUserPoolRegionalConfigurationAttachmentLambdaConfigPropertyToHclTerraform(struct?: CcUserPoolRegionalConfigurationAttachment.LambdaConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        create_auth_challenge: {
            value: cdktn.stringToHclTerraform(struct!.createAuthChallenge),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_email_sender: {
            value: ccUserPoolRegionalConfigurationAttachmentCustomEmailSenderPropertyToHclTerraform(struct!.customEmailSender),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomEmailSenderProperty",
        },
        custom_message: {
            value: cdktn.stringToHclTerraform(struct!.customMessage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_sms_sender: {
            value: ccUserPoolRegionalConfigurationAttachmentCustomSMSSenderPropertyToHclTerraform(struct!.customSmsSender),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomSMSSenderProperty",
        },
        define_auth_challenge: {
            value: cdktn.stringToHclTerraform(struct!.defineAuthChallenge),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inbound_federation: {
            value: ccUserPoolRegionalConfigurationAttachmentInboundFederationPropertyToHclTerraform(struct!.inboundFederation),
            isBlock: true,
            type: "struct",
            storageClassType: "InboundFederationProperty",
        },
        kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        post_authentication: {
            value: cdktn.stringToHclTerraform(struct!.postAuthentication),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        post_confirmation: {
            value: cdktn.stringToHclTerraform(struct!.postConfirmation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pre_authentication: {
            value: cdktn.stringToHclTerraform(struct!.preAuthentication),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pre_sign_up: {
            value: cdktn.stringToHclTerraform(struct!.preSignUp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pre_token_generation: {
            value: cdktn.stringToHclTerraform(struct!.preTokenGeneration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pre_token_generation_config: {
            value: ccUserPoolRegionalConfigurationAttachmentPreTokenGenerationConfigPropertyToHclTerraform(struct!.preTokenGenerationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "PreTokenGenerationConfigProperty",
        },
        user_migration: {
            value: cdktn.stringToHclTerraform(struct!.userMigration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        verify_auth_challenge_response: {
            value: cdktn.stringToHclTerraform(struct!.verifyAuthChallengeResponse),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolRegionalConfigurationAttachmentEumsSmsConfigurationPropertyToTerraform(struct?: CcUserPoolRegionalConfigurationAttachment.EumsSmsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        caller_arn: cdktn.stringToTerraform(struct!.callerArn),
        configuration_set_name: cdktn.stringToTerraform(struct!.configurationSetName),
        external_id: cdktn.stringToTerraform(struct!.externalId),
        in_entity_id: cdktn.stringToTerraform(struct!.inEntityId),
        in_template_id: cdktn.stringToTerraform(struct!.inTemplateId),
        origination_identity: cdktn.stringToTerraform(struct!.originationIdentity),
        region: cdktn.stringToTerraform(struct!.region),
    }
}


export function ccUserPoolRegionalConfigurationAttachmentEumsSmsConfigurationPropertyToHclTerraform(struct?: CcUserPoolRegionalConfigurationAttachment.EumsSmsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        caller_arn: {
            value: cdktn.stringToHclTerraform(struct!.callerArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        configuration_set_name: {
            value: cdktn.stringToHclTerraform(struct!.configurationSetName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        external_id: {
            value: cdktn.stringToHclTerraform(struct!.externalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        in_entity_id: {
            value: cdktn.stringToHclTerraform(struct!.inEntityId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        in_template_id: {
            value: cdktn.stringToHclTerraform(struct!.inTemplateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        origination_identity: {
            value: cdktn.stringToHclTerraform(struct!.originationIdentity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolRegionalConfigurationAttachmentSmsConfigurationPropertyToTerraform(struct?: CcUserPoolRegionalConfigurationAttachment.SmsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        eums_sms: ccUserPoolRegionalConfigurationAttachmentEumsSmsConfigurationPropertyToTerraform(struct!.eumsSms),
        external_id: cdktn.stringToTerraform(struct!.externalId),
        sns_caller_arn: cdktn.stringToTerraform(struct!.snsCallerArn),
        sns_region: cdktn.stringToTerraform(struct!.snsRegion),
    }
}


export function ccUserPoolRegionalConfigurationAttachmentSmsConfigurationPropertyToHclTerraform(struct?: CcUserPoolRegionalConfigurationAttachment.SmsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        eums_sms: {
            value: ccUserPoolRegionalConfigurationAttachmentEumsSmsConfigurationPropertyToHclTerraform(struct!.eumsSms),
            isBlock: true,
            type: "struct",
            storageClassType: "EumsSmsConfigurationProperty",
        },
        external_id: {
            value: cdktn.stringToHclTerraform(struct!.externalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sns_caller_arn: {
            value: cdktn.stringToHclTerraform(struct!.snsCallerArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sns_region: {
            value: cdktn.stringToHclTerraform(struct!.snsRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcUserPoolRegionalConfigurationAttachment {
export interface EmailConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set CcUserPoolRegionalConfigurationAttachment#configuration_set}
    */
    readonly configurationSet?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_sending_account CcUserPoolRegionalConfigurationAttachment#email_sending_account}
    */
    readonly emailSendingAccount?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#from CcUserPoolRegionalConfigurationAttachment#from}
    */
    readonly from?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#reply_to_email_address CcUserPoolRegionalConfigurationAttachment#reply_to_email_address}
    */
    readonly replyToEmailAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#source_arn CcUserPoolRegionalConfigurationAttachment#source_arn}
    */
    readonly sourceArn?: string;
}
export class EmailConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EmailConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._configurationSet !== undefined) {
            hasAnyValues = true;
            internalValueResult.configurationSet = this._configurationSet;
        }
        if (this._emailSendingAccount !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailSendingAccount = this._emailSendingAccount;
        }
        if (this._from !== undefined) {
            hasAnyValues = true;
            internalValueResult.from = this._from;
        }
        if (this._replyToEmailAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.replyToEmailAddress = this._replyToEmailAddress;
        }
        if (this._sourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceArn = this._sourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EmailConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._configurationSet = undefined;
            this._emailSendingAccount = undefined;
            this._from = undefined;
            this._replyToEmailAddress = undefined;
            this._sourceArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._configurationSet = value.configurationSet;
            this._emailSendingAccount = value.emailSendingAccount;
            this._from = value.from;
            this._replyToEmailAddress = value.replyToEmailAddress;
            this._sourceArn = value.sourceArn;
        }
    }

    // configuration_set - computed: true, optional: true, required: false
    private _configurationSet?: string; 
    public get configurationSet() {
        return this.getStringAttribute('configuration_set');
    }
    public set configurationSet(value: string) {
        this._configurationSet = value;
    }
    public resetConfigurationSet() {
        this._configurationSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationSetInput() {
        return this._configurationSet;
    }

    // email_sending_account - computed: true, optional: true, required: false
    private _emailSendingAccount?: string; 
    public get emailSendingAccount() {
        return this.getStringAttribute('email_sending_account');
    }
    public set emailSendingAccount(value: string) {
        this._emailSendingAccount = value;
    }
    public resetEmailSendingAccount() {
        this._emailSendingAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailSendingAccountInput() {
        return this._emailSendingAccount;
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

    // reply_to_email_address - computed: true, optional: true, required: false
    private _replyToEmailAddress?: string; 
    public get replyToEmailAddress() {
        return this.getStringAttribute('reply_to_email_address');
    }
    public set replyToEmailAddress(value: string) {
        this._replyToEmailAddress = value;
    }
    public resetReplyToEmailAddress() {
        this._replyToEmailAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replyToEmailAddressInput() {
        return this._replyToEmailAddress;
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
export interface CustomEmailSenderProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CcUserPoolRegionalConfigurationAttachment#lambda_arn}
    */
    readonly lambdaArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CcUserPoolRegionalConfigurationAttachment#lambda_version}
    */
    readonly lambdaVersion?: string;
}
export class CustomEmailSenderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomEmailSenderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lambdaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaArn = this._lambdaArn;
        }
        if (this._lambdaVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaVersion = this._lambdaVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomEmailSenderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lambdaArn = undefined;
            this._lambdaVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lambdaArn = value.lambdaArn;
            this._lambdaVersion = value.lambdaVersion;
        }
    }

    // lambda_arn - computed: true, optional: true, required: false
    private _lambdaArn?: string; 
    public get lambdaArn() {
        return this.getStringAttribute('lambda_arn');
    }
    public set lambdaArn(value: string) {
        this._lambdaArn = value;
    }
    public resetLambdaArn() {
        this._lambdaArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaArnInput() {
        return this._lambdaArn;
    }

    // lambda_version - computed: true, optional: true, required: false
    private _lambdaVersion?: string; 
    public get lambdaVersion() {
        return this.getStringAttribute('lambda_version');
    }
    public set lambdaVersion(value: string) {
        this._lambdaVersion = value;
    }
    public resetLambdaVersion() {
        this._lambdaVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaVersionInput() {
        return this._lambdaVersion;
    }
}
export interface CustomSMSSenderProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CcUserPoolRegionalConfigurationAttachment#lambda_arn}
    */
    readonly lambdaArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CcUserPoolRegionalConfigurationAttachment#lambda_version}
    */
    readonly lambdaVersion?: string;
}
export class CustomSMSSenderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomSMSSenderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lambdaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaArn = this._lambdaArn;
        }
        if (this._lambdaVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaVersion = this._lambdaVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomSMSSenderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lambdaArn = undefined;
            this._lambdaVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lambdaArn = value.lambdaArn;
            this._lambdaVersion = value.lambdaVersion;
        }
    }

    // lambda_arn - computed: true, optional: true, required: false
    private _lambdaArn?: string; 
    public get lambdaArn() {
        return this.getStringAttribute('lambda_arn');
    }
    public set lambdaArn(value: string) {
        this._lambdaArn = value;
    }
    public resetLambdaArn() {
        this._lambdaArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaArnInput() {
        return this._lambdaArn;
    }

    // lambda_version - computed: true, optional: true, required: false
    private _lambdaVersion?: string; 
    public get lambdaVersion() {
        return this.getStringAttribute('lambda_version');
    }
    public set lambdaVersion(value: string) {
        this._lambdaVersion = value;
    }
    public resetLambdaVersion() {
        this._lambdaVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaVersionInput() {
        return this._lambdaVersion;
    }
}
export interface InboundFederationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CcUserPoolRegionalConfigurationAttachment#lambda_arn}
    */
    readonly lambdaArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CcUserPoolRegionalConfigurationAttachment#lambda_version}
    */
    readonly lambdaVersion?: string;
}
export class InboundFederationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InboundFederationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lambdaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaArn = this._lambdaArn;
        }
        if (this._lambdaVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaVersion = this._lambdaVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InboundFederationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lambdaArn = undefined;
            this._lambdaVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lambdaArn = value.lambdaArn;
            this._lambdaVersion = value.lambdaVersion;
        }
    }

    // lambda_arn - computed: true, optional: true, required: false
    private _lambdaArn?: string; 
    public get lambdaArn() {
        return this.getStringAttribute('lambda_arn');
    }
    public set lambdaArn(value: string) {
        this._lambdaArn = value;
    }
    public resetLambdaArn() {
        this._lambdaArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaArnInput() {
        return this._lambdaArn;
    }

    // lambda_version - computed: true, optional: true, required: false
    private _lambdaVersion?: string; 
    public get lambdaVersion() {
        return this.getStringAttribute('lambda_version');
    }
    public set lambdaVersion(value: string) {
        this._lambdaVersion = value;
    }
    public resetLambdaVersion() {
        this._lambdaVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaVersionInput() {
        return this._lambdaVersion;
    }
}
export interface PreTokenGenerationConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CcUserPoolRegionalConfigurationAttachment#lambda_arn}
    */
    readonly lambdaArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CcUserPoolRegionalConfigurationAttachment#lambda_version}
    */
    readonly lambdaVersion?: string;
}
export class PreTokenGenerationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PreTokenGenerationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lambdaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaArn = this._lambdaArn;
        }
        if (this._lambdaVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaVersion = this._lambdaVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PreTokenGenerationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lambdaArn = undefined;
            this._lambdaVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lambdaArn = value.lambdaArn;
            this._lambdaVersion = value.lambdaVersion;
        }
    }

    // lambda_arn - computed: true, optional: true, required: false
    private _lambdaArn?: string; 
    public get lambdaArn() {
        return this.getStringAttribute('lambda_arn');
    }
    public set lambdaArn(value: string) {
        this._lambdaArn = value;
    }
    public resetLambdaArn() {
        this._lambdaArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaArnInput() {
        return this._lambdaArn;
    }

    // lambda_version - computed: true, optional: true, required: false
    private _lambdaVersion?: string; 
    public get lambdaVersion() {
        return this.getStringAttribute('lambda_version');
    }
    public set lambdaVersion(value: string) {
        this._lambdaVersion = value;
    }
    public resetLambdaVersion() {
        this._lambdaVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaVersionInput() {
        return this._lambdaVersion;
    }
}
export interface LambdaConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#create_auth_challenge CcUserPoolRegionalConfigurationAttachment#create_auth_challenge}
    */
    readonly createAuthChallenge?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_email_sender CcUserPoolRegionalConfigurationAttachment#custom_email_sender}
    */
    readonly customEmailSender?: CustomEmailSenderProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_message CcUserPoolRegionalConfigurationAttachment#custom_message}
    */
    readonly customMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_sms_sender CcUserPoolRegionalConfigurationAttachment#custom_sms_sender}
    */
    readonly customSmsSender?: CustomSMSSenderProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#define_auth_challenge CcUserPoolRegionalConfigurationAttachment#define_auth_challenge}
    */
    readonly defineAuthChallenge?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#inbound_federation CcUserPoolRegionalConfigurationAttachment#inbound_federation}
    */
    readonly inboundFederation?: InboundFederationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#kms_key_id CcUserPoolRegionalConfigurationAttachment#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_authentication CcUserPoolRegionalConfigurationAttachment#post_authentication}
    */
    readonly postAuthentication?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_confirmation CcUserPoolRegionalConfigurationAttachment#post_confirmation}
    */
    readonly postConfirmation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_authentication CcUserPoolRegionalConfigurationAttachment#pre_authentication}
    */
    readonly preAuthentication?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_sign_up CcUserPoolRegionalConfigurationAttachment#pre_sign_up}
    */
    readonly preSignUp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation CcUserPoolRegionalConfigurationAttachment#pre_token_generation}
    */
    readonly preTokenGeneration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation_config CcUserPoolRegionalConfigurationAttachment#pre_token_generation_config}
    */
    readonly preTokenGenerationConfig?: PreTokenGenerationConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_migration CcUserPoolRegionalConfigurationAttachment#user_migration}
    */
    readonly userMigration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#verify_auth_challenge_response CcUserPoolRegionalConfigurationAttachment#verify_auth_challenge_response}
    */
    readonly verifyAuthChallengeResponse?: string;
}
export class LambdaConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._createAuthChallenge !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAuthChallenge = this._createAuthChallenge;
        }
        if (this._customEmailSender?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customEmailSender = this._customEmailSender?.internalValue;
        }
        if (this._customMessage !== undefined) {
            hasAnyValues = true;
            internalValueResult.customMessage = this._customMessage;
        }
        if (this._customSmsSender?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customSmsSender = this._customSmsSender?.internalValue;
        }
        if (this._defineAuthChallenge !== undefined) {
            hasAnyValues = true;
            internalValueResult.defineAuthChallenge = this._defineAuthChallenge;
        }
        if (this._inboundFederation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inboundFederation = this._inboundFederation?.internalValue;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._postAuthentication !== undefined) {
            hasAnyValues = true;
            internalValueResult.postAuthentication = this._postAuthentication;
        }
        if (this._postConfirmation !== undefined) {
            hasAnyValues = true;
            internalValueResult.postConfirmation = this._postConfirmation;
        }
        if (this._preAuthentication !== undefined) {
            hasAnyValues = true;
            internalValueResult.preAuthentication = this._preAuthentication;
        }
        if (this._preSignUp !== undefined) {
            hasAnyValues = true;
            internalValueResult.preSignUp = this._preSignUp;
        }
        if (this._preTokenGeneration !== undefined) {
            hasAnyValues = true;
            internalValueResult.preTokenGeneration = this._preTokenGeneration;
        }
        if (this._preTokenGenerationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.preTokenGenerationConfig = this._preTokenGenerationConfig?.internalValue;
        }
        if (this._userMigration !== undefined) {
            hasAnyValues = true;
            internalValueResult.userMigration = this._userMigration;
        }
        if (this._verifyAuthChallengeResponse !== undefined) {
            hasAnyValues = true;
            internalValueResult.verifyAuthChallengeResponse = this._verifyAuthChallengeResponse;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._createAuthChallenge = undefined;
            this._customEmailSender.internalValue = undefined;
            this._customMessage = undefined;
            this._customSmsSender.internalValue = undefined;
            this._defineAuthChallenge = undefined;
            this._inboundFederation.internalValue = undefined;
            this._kmsKeyId = undefined;
            this._postAuthentication = undefined;
            this._postConfirmation = undefined;
            this._preAuthentication = undefined;
            this._preSignUp = undefined;
            this._preTokenGeneration = undefined;
            this._preTokenGenerationConfig.internalValue = undefined;
            this._userMigration = undefined;
            this._verifyAuthChallengeResponse = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._createAuthChallenge = value.createAuthChallenge;
            this._customEmailSender.internalValue = value.customEmailSender;
            this._customMessage = value.customMessage;
            this._customSmsSender.internalValue = value.customSmsSender;
            this._defineAuthChallenge = value.defineAuthChallenge;
            this._inboundFederation.internalValue = value.inboundFederation;
            this._kmsKeyId = value.kmsKeyId;
            this._postAuthentication = value.postAuthentication;
            this._postConfirmation = value.postConfirmation;
            this._preAuthentication = value.preAuthentication;
            this._preSignUp = value.preSignUp;
            this._preTokenGeneration = value.preTokenGeneration;
            this._preTokenGenerationConfig.internalValue = value.preTokenGenerationConfig;
            this._userMigration = value.userMigration;
            this._verifyAuthChallengeResponse = value.verifyAuthChallengeResponse;
        }
    }

    // create_auth_challenge - computed: true, optional: true, required: false
    private _createAuthChallenge?: string; 
    public get createAuthChallenge() {
        return this.getStringAttribute('create_auth_challenge');
    }
    public set createAuthChallenge(value: string) {
        this._createAuthChallenge = value;
    }
    public resetCreateAuthChallenge() {
        this._createAuthChallenge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAuthChallengeInput() {
        return this._createAuthChallenge;
    }

    // custom_email_sender - computed: true, optional: true, required: false
    private _customEmailSender = new CustomEmailSenderPropertyOutputReference(this, "custom_email_sender");
    public get customEmailSender() {
        return this._customEmailSender;
    }
    public putCustomEmailSender(value: CustomEmailSenderProperty) {
        this._customEmailSender.internalValue = value;
    }
    public resetCustomEmailSender() {
        this._customEmailSender.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customEmailSenderInput() {
        return this._customEmailSender.internalValue;
    }

    // custom_message - computed: true, optional: true, required: false
    private _customMessage?: string; 
    public get customMessage() {
        return this.getStringAttribute('custom_message');
    }
    public set customMessage(value: string) {
        this._customMessage = value;
    }
    public resetCustomMessage() {
        this._customMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customMessageInput() {
        return this._customMessage;
    }

    // custom_sms_sender - computed: true, optional: true, required: false
    private _customSmsSender = new CustomSMSSenderPropertyOutputReference(this, "custom_sms_sender");
    public get customSmsSender() {
        return this._customSmsSender;
    }
    public putCustomSmsSender(value: CustomSMSSenderProperty) {
        this._customSmsSender.internalValue = value;
    }
    public resetCustomSmsSender() {
        this._customSmsSender.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSmsSenderInput() {
        return this._customSmsSender.internalValue;
    }

    // define_auth_challenge - computed: true, optional: true, required: false
    private _defineAuthChallenge?: string; 
    public get defineAuthChallenge() {
        return this.getStringAttribute('define_auth_challenge');
    }
    public set defineAuthChallenge(value: string) {
        this._defineAuthChallenge = value;
    }
    public resetDefineAuthChallenge() {
        this._defineAuthChallenge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defineAuthChallengeInput() {
        return this._defineAuthChallenge;
    }

    // inbound_federation - computed: true, optional: true, required: false
    private _inboundFederation = new InboundFederationPropertyOutputReference(this, "inbound_federation");
    public get inboundFederation() {
        return this._inboundFederation;
    }
    public putInboundFederation(value: InboundFederationProperty) {
        this._inboundFederation.internalValue = value;
    }
    public resetInboundFederation() {
        this._inboundFederation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inboundFederationInput() {
        return this._inboundFederation.internalValue;
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // post_authentication - computed: true, optional: true, required: false
    private _postAuthentication?: string; 
    public get postAuthentication() {
        return this.getStringAttribute('post_authentication');
    }
    public set postAuthentication(value: string) {
        this._postAuthentication = value;
    }
    public resetPostAuthentication() {
        this._postAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postAuthenticationInput() {
        return this._postAuthentication;
    }

    // post_confirmation - computed: true, optional: true, required: false
    private _postConfirmation?: string; 
    public get postConfirmation() {
        return this.getStringAttribute('post_confirmation');
    }
    public set postConfirmation(value: string) {
        this._postConfirmation = value;
    }
    public resetPostConfirmation() {
        this._postConfirmation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postConfirmationInput() {
        return this._postConfirmation;
    }

    // pre_authentication - computed: true, optional: true, required: false
    private _preAuthentication?: string; 
    public get preAuthentication() {
        return this.getStringAttribute('pre_authentication');
    }
    public set preAuthentication(value: string) {
        this._preAuthentication = value;
    }
    public resetPreAuthentication() {
        this._preAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preAuthenticationInput() {
        return this._preAuthentication;
    }

    // pre_sign_up - computed: true, optional: true, required: false
    private _preSignUp?: string; 
    public get preSignUp() {
        return this.getStringAttribute('pre_sign_up');
    }
    public set preSignUp(value: string) {
        this._preSignUp = value;
    }
    public resetPreSignUp() {
        this._preSignUp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preSignUpInput() {
        return this._preSignUp;
    }

    // pre_token_generation - computed: true, optional: true, required: false
    private _preTokenGeneration?: string; 
    public get preTokenGeneration() {
        return this.getStringAttribute('pre_token_generation');
    }
    public set preTokenGeneration(value: string) {
        this._preTokenGeneration = value;
    }
    public resetPreTokenGeneration() {
        this._preTokenGeneration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preTokenGenerationInput() {
        return this._preTokenGeneration;
    }

    // pre_token_generation_config - computed: true, optional: true, required: false
    private _preTokenGenerationConfig = new PreTokenGenerationConfigPropertyOutputReference(this, "pre_token_generation_config");
    public get preTokenGenerationConfig() {
        return this._preTokenGenerationConfig;
    }
    public putPreTokenGenerationConfig(value: PreTokenGenerationConfigProperty) {
        this._preTokenGenerationConfig.internalValue = value;
    }
    public resetPreTokenGenerationConfig() {
        this._preTokenGenerationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preTokenGenerationConfigInput() {
        return this._preTokenGenerationConfig.internalValue;
    }

    // user_migration - computed: true, optional: true, required: false
    private _userMigration?: string; 
    public get userMigration() {
        return this.getStringAttribute('user_migration');
    }
    public set userMigration(value: string) {
        this._userMigration = value;
    }
    public resetUserMigration() {
        this._userMigration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userMigrationInput() {
        return this._userMigration;
    }

    // verify_auth_challenge_response - computed: true, optional: true, required: false
    private _verifyAuthChallengeResponse?: string; 
    public get verifyAuthChallengeResponse() {
        return this.getStringAttribute('verify_auth_challenge_response');
    }
    public set verifyAuthChallengeResponse(value: string) {
        this._verifyAuthChallengeResponse = value;
    }
    public resetVerifyAuthChallengeResponse() {
        this._verifyAuthChallengeResponse = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get verifyAuthChallengeResponseInput() {
        return this._verifyAuthChallengeResponse;
    }
}
export interface EumsSmsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#caller_arn CcUserPoolRegionalConfigurationAttachment#caller_arn}
    */
    readonly callerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set_name CcUserPoolRegionalConfigurationAttachment#configuration_set_name}
    */
    readonly configurationSetName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CcUserPoolRegionalConfigurationAttachment#external_id}
    */
    readonly externalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_entity_id CcUserPoolRegionalConfigurationAttachment#in_entity_id}
    */
    readonly inEntityId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_template_id CcUserPoolRegionalConfigurationAttachment#in_template_id}
    */
    readonly inTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#origination_identity CcUserPoolRegionalConfigurationAttachment#origination_identity}
    */
    readonly originationIdentity?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#region CcUserPoolRegionalConfigurationAttachment#region}
    */
    readonly region?: string;
}
export class EumsSmsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EumsSmsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._callerArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.callerArn = this._callerArn;
        }
        if (this._configurationSetName !== undefined) {
            hasAnyValues = true;
            internalValueResult.configurationSetName = this._configurationSetName;
        }
        if (this._externalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalId = this._externalId;
        }
        if (this._inEntityId !== undefined) {
            hasAnyValues = true;
            internalValueResult.inEntityId = this._inEntityId;
        }
        if (this._inTemplateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.inTemplateId = this._inTemplateId;
        }
        if (this._originationIdentity !== undefined) {
            hasAnyValues = true;
            internalValueResult.originationIdentity = this._originationIdentity;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EumsSmsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._callerArn = undefined;
            this._configurationSetName = undefined;
            this._externalId = undefined;
            this._inEntityId = undefined;
            this._inTemplateId = undefined;
            this._originationIdentity = undefined;
            this._region = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._callerArn = value.callerArn;
            this._configurationSetName = value.configurationSetName;
            this._externalId = value.externalId;
            this._inEntityId = value.inEntityId;
            this._inTemplateId = value.inTemplateId;
            this._originationIdentity = value.originationIdentity;
            this._region = value.region;
        }
    }

    // caller_arn - computed: true, optional: true, required: false
    private _callerArn?: string; 
    public get callerArn() {
        return this.getStringAttribute('caller_arn');
    }
    public set callerArn(value: string) {
        this._callerArn = value;
    }
    public resetCallerArn() {
        this._callerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get callerArnInput() {
        return this._callerArn;
    }

    // configuration_set_name - computed: true, optional: true, required: false
    private _configurationSetName?: string; 
    public get configurationSetName() {
        return this.getStringAttribute('configuration_set_name');
    }
    public set configurationSetName(value: string) {
        this._configurationSetName = value;
    }
    public resetConfigurationSetName() {
        this._configurationSetName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationSetNameInput() {
        return this._configurationSetName;
    }

    // external_id - computed: true, optional: true, required: false
    private _externalId?: string; 
    public get externalId() {
        return this.getStringAttribute('external_id');
    }
    public set externalId(value: string) {
        this._externalId = value;
    }
    public resetExternalId() {
        this._externalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get externalIdInput() {
        return this._externalId;
    }

    // in_entity_id - computed: true, optional: true, required: false
    private _inEntityId?: string; 
    public get inEntityId() {
        return this.getStringAttribute('in_entity_id');
    }
    public set inEntityId(value: string) {
        this._inEntityId = value;
    }
    public resetInEntityId() {
        this._inEntityId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inEntityIdInput() {
        return this._inEntityId;
    }

    // in_template_id - computed: true, optional: true, required: false
    private _inTemplateId?: string; 
    public get inTemplateId() {
        return this.getStringAttribute('in_template_id');
    }
    public set inTemplateId(value: string) {
        this._inTemplateId = value;
    }
    public resetInTemplateId() {
        this._inTemplateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inTemplateIdInput() {
        return this._inTemplateId;
    }

    // origination_identity - computed: true, optional: true, required: false
    private _originationIdentity?: string; 
    public get originationIdentity() {
        return this.getStringAttribute('origination_identity');
    }
    public set originationIdentity(value: string) {
        this._originationIdentity = value;
    }
    public resetOriginationIdentity() {
        this._originationIdentity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get originationIdentityInput() {
        return this._originationIdentity;
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }
}
export interface SmsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#eums_sms CcUserPoolRegionalConfigurationAttachment#eums_sms}
    */
    readonly eumsSms?: EumsSmsConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CcUserPoolRegionalConfigurationAttachment#external_id}
    */
    readonly externalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_caller_arn CcUserPoolRegionalConfigurationAttachment#sns_caller_arn}
    */
    readonly snsCallerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_region CcUserPoolRegionalConfigurationAttachment#sns_region}
    */
    readonly snsRegion?: string;
}
export class SmsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SmsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eumsSms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eumsSms = this._eumsSms?.internalValue;
        }
        if (this._externalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalId = this._externalId;
        }
        if (this._snsCallerArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.snsCallerArn = this._snsCallerArn;
        }
        if (this._snsRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.snsRegion = this._snsRegion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SmsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eumsSms.internalValue = undefined;
            this._externalId = undefined;
            this._snsCallerArn = undefined;
            this._snsRegion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eumsSms.internalValue = value.eumsSms;
            this._externalId = value.externalId;
            this._snsCallerArn = value.snsCallerArn;
            this._snsRegion = value.snsRegion;
        }
    }

    // eums_sms - computed: true, optional: true, required: false
    private _eumsSms = new EumsSmsConfigurationPropertyOutputReference(this, "eums_sms");
    public get eumsSms() {
        return this._eumsSms;
    }
    public putEumsSms(value: EumsSmsConfigurationProperty) {
        this._eumsSms.internalValue = value;
    }
    public resetEumsSms() {
        this._eumsSms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eumsSmsInput() {
        return this._eumsSms.internalValue;
    }

    // external_id - computed: true, optional: true, required: false
    private _externalId?: string; 
    public get externalId() {
        return this.getStringAttribute('external_id');
    }
    public set externalId(value: string) {
        this._externalId = value;
    }
    public resetExternalId() {
        this._externalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get externalIdInput() {
        return this._externalId;
    }

    // sns_caller_arn - computed: true, optional: true, required: false
    private _snsCallerArn?: string; 
    public get snsCallerArn() {
        return this.getStringAttribute('sns_caller_arn');
    }
    public set snsCallerArn(value: string) {
        this._snsCallerArn = value;
    }
    public resetSnsCallerArn() {
        this._snsCallerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsCallerArnInput() {
        return this._snsCallerArn;
    }

    // sns_region - computed: true, optional: true, required: false
    private _snsRegion?: string; 
    public get snsRegion() {
        return this.getStringAttribute('sns_region');
    }
    public set snsRegion(value: string) {
        this._snsRegion = value;
    }
    public resetSnsRegion() {
        this._snsRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsRegionInput() {
        return this._snsRegion;
    }
}
}
