// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEmailIdentityProps extends cdktn.TerraformMetaArguments {
    /**
    * Used to associate a configuration set with an email identity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity#configuration_set_attributes CcEmailIdentity#configuration_set_attributes}
    */
    readonly configurationSetAttributes?: CcEmailIdentity.ConfigurationSetAttributesProperty;
    /**
    * Used to enable or disable DKIM authentication for an email identity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity#dkim_attributes CcEmailIdentity#dkim_attributes}
    */
    readonly dkimAttributes?: CcEmailIdentity.DkimAttributesProperty;
    /**
    * If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for Easy DKIM.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity#dkim_signing_attributes CcEmailIdentity#dkim_signing_attributes}
    */
    readonly dkimSigningAttributes?: CcEmailIdentity.DkimSigningAttributesProperty;
    /**
    * The email address or domain to verify.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity#email_identity CcEmailIdentity#email_identity}
    */
    readonly emailIdentity: string;
    /**
    * Used to enable or disable feedback forwarding for an identity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity#feedback_attributes CcEmailIdentity#feedback_attributes}
    */
    readonly feedbackAttributes?: CcEmailIdentity.FeedbackAttributesProperty;
    /**
    * Used to enable or disable the custom Mail-From domain configuration for an email identity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity#mail_from_attributes CcEmailIdentity#mail_from_attributes}
    */
    readonly mailFromAttributes?: CcEmailIdentity.MailFromAttributesProperty;
    /**
    * The tags (keys and values) associated with the email identity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity#tags CcEmailIdentity#tags}
    */
    readonly tags?: CcEmailIdentity.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity awscc_ses_email_identity}
*/
export class CcEmailIdentity extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ses_email_identity";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEmailIdentity resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEmailIdentity to import
    * @param importFromId The id of the existing CcEmailIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEmailIdentity to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_email_identity", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity awscc_ses_email_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEmailIdentityProps
    */
    public constructor(scope: Construct, id: string, config: CcEmailIdentityProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ses_email_identity',
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
        this._configurationSetAttributes.internalValue = config.configurationSetAttributes;
        this._dkimAttributes.internalValue = config.dkimAttributes;
        this._dkimSigningAttributes.internalValue = config.dkimSigningAttributes;
        this._emailIdentity = config.emailIdentity;
        this._feedbackAttributes.internalValue = config.feedbackAttributes;
        this._mailFromAttributes.internalValue = config.mailFromAttributes;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // configuration_set_attributes - computed: true, optional: true, required: false
    private _configurationSetAttributes = new CcEmailIdentity.ConfigurationSetAttributesPropertyOutputReference(this, "configuration_set_attributes");
    public get configurationSetAttributes() {
        return this._configurationSetAttributes;
    }
    public putConfigurationSetAttributes(value: CcEmailIdentity.ConfigurationSetAttributesProperty) {
        this._configurationSetAttributes.internalValue = value;
    }
    public resetConfigurationSetAttributes() {
        this._configurationSetAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationSetAttributesInput() {
        return this._configurationSetAttributes.internalValue;
    }

    // dkim_attributes - computed: true, optional: true, required: false
    private _dkimAttributes = new CcEmailIdentity.DkimAttributesPropertyOutputReference(this, "dkim_attributes");
    public get dkimAttributes() {
        return this._dkimAttributes;
    }
    public putDkimAttributes(value: CcEmailIdentity.DkimAttributesProperty) {
        this._dkimAttributes.internalValue = value;
    }
    public resetDkimAttributes() {
        this._dkimAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dkimAttributesInput() {
        return this._dkimAttributes.internalValue;
    }

    // dkim_dns_token_name_1 - computed: true, optional: false, required: false
    public get dkimDnsTokenName1() {
        return this.getStringAttribute('dkim_dns_token_name_1');
    }

    // dkim_dns_token_name_2 - computed: true, optional: false, required: false
    public get dkimDnsTokenName2() {
        return this.getStringAttribute('dkim_dns_token_name_2');
    }

    // dkim_dns_token_name_3 - computed: true, optional: false, required: false
    public get dkimDnsTokenName3() {
        return this.getStringAttribute('dkim_dns_token_name_3');
    }

    // dkim_dns_token_value_1 - computed: true, optional: false, required: false
    public get dkimDnsTokenValue1() {
        return this.getStringAttribute('dkim_dns_token_value_1');
    }

    // dkim_dns_token_value_2 - computed: true, optional: false, required: false
    public get dkimDnsTokenValue2() {
        return this.getStringAttribute('dkim_dns_token_value_2');
    }

    // dkim_dns_token_value_3 - computed: true, optional: false, required: false
    public get dkimDnsTokenValue3() {
        return this.getStringAttribute('dkim_dns_token_value_3');
    }

    // dkim_signing_attributes - computed: true, optional: true, required: false
    private _dkimSigningAttributes = new CcEmailIdentity.DkimSigningAttributesPropertyOutputReference(this, "dkim_signing_attributes");
    public get dkimSigningAttributes() {
        return this._dkimSigningAttributes;
    }
    public putDkimSigningAttributes(value: CcEmailIdentity.DkimSigningAttributesProperty) {
        this._dkimSigningAttributes.internalValue = value;
    }
    public resetDkimSigningAttributes() {
        this._dkimSigningAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dkimSigningAttributesInput() {
        return this._dkimSigningAttributes.internalValue;
    }

    // email_identity - computed: false, optional: false, required: true
    private _emailIdentity?: string; 
    public get emailIdentity() {
        return this.getStringAttribute('email_identity');
    }
    public set emailIdentity(value: string) {
        this._emailIdentity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get emailIdentityInput() {
        return this._emailIdentity;
    }

    // feedback_attributes - computed: true, optional: true, required: false
    private _feedbackAttributes = new CcEmailIdentity.FeedbackAttributesPropertyOutputReference(this, "feedback_attributes");
    public get feedbackAttributes() {
        return this._feedbackAttributes;
    }
    public putFeedbackAttributes(value: CcEmailIdentity.FeedbackAttributesProperty) {
        this._feedbackAttributes.internalValue = value;
    }
    public resetFeedbackAttributes() {
        this._feedbackAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get feedbackAttributesInput() {
        return this._feedbackAttributes.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // mail_from_attributes - computed: true, optional: true, required: false
    private _mailFromAttributes = new CcEmailIdentity.MailFromAttributesPropertyOutputReference(this, "mail_from_attributes");
    public get mailFromAttributes() {
        return this._mailFromAttributes;
    }
    public putMailFromAttributes(value: CcEmailIdentity.MailFromAttributesProperty) {
        this._mailFromAttributes.internalValue = value;
    }
    public resetMailFromAttributes() {
        this._mailFromAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mailFromAttributesInput() {
        return this._mailFromAttributes.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEmailIdentity.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEmailIdentity.TagProperty[] | cdktn.IResolvable) {
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
            configuration_set_attributes: ccEmailIdentityConfigurationSetAttributesPropertyToTerraform(this._configurationSetAttributes.internalValue),
            dkim_attributes: ccEmailIdentityDkimAttributesPropertyToTerraform(this._dkimAttributes.internalValue),
            dkim_signing_attributes: ccEmailIdentityDkimSigningAttributesPropertyToTerraform(this._dkimSigningAttributes.internalValue),
            email_identity: cdktn.stringToTerraform(this._emailIdentity),
            feedback_attributes: ccEmailIdentityFeedbackAttributesPropertyToTerraform(this._feedbackAttributes.internalValue),
            mail_from_attributes: ccEmailIdentityMailFromAttributesPropertyToTerraform(this._mailFromAttributes.internalValue),
            tags: cdktn.listMapper(ccEmailIdentityTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            configuration_set_attributes: {
                value: ccEmailIdentityConfigurationSetAttributesPropertyToHclTerraform(this._configurationSetAttributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEmailIdentity.ConfigurationSetAttributesProperty",
            },
            dkim_attributes: {
                value: ccEmailIdentityDkimAttributesPropertyToHclTerraform(this._dkimAttributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEmailIdentity.DkimAttributesProperty",
            },
            dkim_signing_attributes: {
                value: ccEmailIdentityDkimSigningAttributesPropertyToHclTerraform(this._dkimSigningAttributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEmailIdentity.DkimSigningAttributesProperty",
            },
            email_identity: {
                value: cdktn.stringToHclTerraform(this._emailIdentity),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            feedback_attributes: {
                value: ccEmailIdentityFeedbackAttributesPropertyToHclTerraform(this._feedbackAttributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEmailIdentity.FeedbackAttributesProperty",
            },
            mail_from_attributes: {
                value: ccEmailIdentityMailFromAttributesPropertyToHclTerraform(this._mailFromAttributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEmailIdentity.MailFromAttributesProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEmailIdentityTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEmailIdentity.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEmailIdentityConfigurationSetAttributesPropertyToTerraform(struct?: CcEmailIdentity.ConfigurationSetAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        configuration_set_name: cdktn.stringToTerraform(struct!.configurationSetName),
    }
}


export function ccEmailIdentityConfigurationSetAttributesPropertyToHclTerraform(struct?: CcEmailIdentity.ConfigurationSetAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        configuration_set_name: {
            value: cdktn.stringToHclTerraform(struct!.configurationSetName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEmailIdentityDkimAttributesPropertyToTerraform(struct?: CcEmailIdentity.DkimAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        signing_enabled: cdktn.booleanToTerraform(struct!.signingEnabled),
    }
}


export function ccEmailIdentityDkimAttributesPropertyToHclTerraform(struct?: CcEmailIdentity.DkimAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        signing_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.signingEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEmailIdentityDkimSigningAttributesPropertyToTerraform(struct?: CcEmailIdentity.DkimSigningAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain_signing_private_key: cdktn.stringToTerraform(struct!.domainSigningPrivateKey),
        domain_signing_selector: cdktn.stringToTerraform(struct!.domainSigningSelector),
        next_signing_key_length: cdktn.stringToTerraform(struct!.nextSigningKeyLength),
    }
}


export function ccEmailIdentityDkimSigningAttributesPropertyToHclTerraform(struct?: CcEmailIdentity.DkimSigningAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain_signing_private_key: {
            value: cdktn.stringToHclTerraform(struct!.domainSigningPrivateKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        domain_signing_selector: {
            value: cdktn.stringToHclTerraform(struct!.domainSigningSelector),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        next_signing_key_length: {
            value: cdktn.stringToHclTerraform(struct!.nextSigningKeyLength),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEmailIdentityFeedbackAttributesPropertyToTerraform(struct?: CcEmailIdentity.FeedbackAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        email_forwarding_enabled: cdktn.booleanToTerraform(struct!.emailForwardingEnabled),
    }
}


export function ccEmailIdentityFeedbackAttributesPropertyToHclTerraform(struct?: CcEmailIdentity.FeedbackAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        email_forwarding_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.emailForwardingEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEmailIdentityMailFromAttributesPropertyToTerraform(struct?: CcEmailIdentity.MailFromAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        behavior_on_mx_failure: cdktn.stringToTerraform(struct!.behaviorOnMxFailure),
        mail_from_domain: cdktn.stringToTerraform(struct!.mailFromDomain),
    }
}


export function ccEmailIdentityMailFromAttributesPropertyToHclTerraform(struct?: CcEmailIdentity.MailFromAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        behavior_on_mx_failure: {
            value: cdktn.stringToHclTerraform(struct!.behaviorOnMxFailure),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mail_from_domain: {
            value: cdktn.stringToHclTerraform(struct!.mailFromDomain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEmailIdentityTagPropertyToTerraform(struct?: CcEmailIdentity.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEmailIdentityTagPropertyToHclTerraform(struct?: CcEmailIdentity.TagProperty | cdktn.IResolvable): any {
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


export namespace CcEmailIdentity {
export interface ConfigurationSetAttributesProperty {
    /**
    * The configuration set to use by default when sending from this identity. Note that any configuration set defined in the email sending request takes precedence.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity#configuration_set_name CcEmailIdentity#configuration_set_name}
    */
    readonly configurationSetName?: string;
}
export class ConfigurationSetAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationSetAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._configurationSetName !== undefined) {
            hasAnyValues = true;
            internalValueResult.configurationSetName = this._configurationSetName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationSetAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._configurationSetName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._configurationSetName = value.configurationSetName;
        }
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
}
export interface DkimAttributesProperty {
    /**
    * Sets the DKIM signing configuration for the identity. When you set this value true, then the messages that are sent from the identity are signed using DKIM. If you set this value to false, your messages are sent without DKIM signing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity#signing_enabled CcEmailIdentity#signing_enabled}
    */
    readonly signingEnabled?: boolean | cdktn.IResolvable;
}
export class DkimAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DkimAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._signingEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.signingEnabled = this._signingEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DkimAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._signingEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._signingEnabled = value.signingEnabled;
        }
    }

    // signing_enabled - computed: true, optional: true, required: false
    private _signingEnabled?: boolean | cdktn.IResolvable; 
    public get signingEnabled() {
        return this.getBooleanAttribute('signing_enabled');
    }
    public set signingEnabled(value: boolean | cdktn.IResolvable) {
        this._signingEnabled = value;
    }
    public resetSigningEnabled() {
        this._signingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get signingEnabledInput() {
        return this._signingEnabled;
    }
}
export interface DkimSigningAttributesProperty {
    /**
    * [Bring Your Own DKIM] A private key that's used to generate a DKIM signature. The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity#domain_signing_private_key CcEmailIdentity#domain_signing_private_key}
    */
    readonly domainSigningPrivateKey?: string;
    /**
    * [Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity#domain_signing_selector CcEmailIdentity#domain_signing_selector}
    */
    readonly domainSigningSelector?: string;
    /**
    * [Easy DKIM] The key length of the future DKIM key pair to be generated. This can be changed at most once per day.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity#next_signing_key_length CcEmailIdentity#next_signing_key_length}
    */
    readonly nextSigningKeyLength?: string;
}
export class DkimSigningAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DkimSigningAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domainSigningPrivateKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainSigningPrivateKey = this._domainSigningPrivateKey;
        }
        if (this._domainSigningSelector !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainSigningSelector = this._domainSigningSelector;
        }
        if (this._nextSigningKeyLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.nextSigningKeyLength = this._nextSigningKeyLength;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DkimSigningAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domainSigningPrivateKey = undefined;
            this._domainSigningSelector = undefined;
            this._nextSigningKeyLength = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domainSigningPrivateKey = value.domainSigningPrivateKey;
            this._domainSigningSelector = value.domainSigningSelector;
            this._nextSigningKeyLength = value.nextSigningKeyLength;
        }
    }

    // domain_signing_private_key - computed: true, optional: true, required: false
    private _domainSigningPrivateKey?: string; 
    public get domainSigningPrivateKey() {
        return this.getStringAttribute('domain_signing_private_key');
    }
    public set domainSigningPrivateKey(value: string) {
        this._domainSigningPrivateKey = value;
    }
    public resetDomainSigningPrivateKey() {
        this._domainSigningPrivateKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainSigningPrivateKeyInput() {
        return this._domainSigningPrivateKey;
    }

    // domain_signing_selector - computed: true, optional: true, required: false
    private _domainSigningSelector?: string; 
    public get domainSigningSelector() {
        return this.getStringAttribute('domain_signing_selector');
    }
    public set domainSigningSelector(value: string) {
        this._domainSigningSelector = value;
    }
    public resetDomainSigningSelector() {
        this._domainSigningSelector = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainSigningSelectorInput() {
        return this._domainSigningSelector;
    }

    // next_signing_key_length - computed: true, optional: true, required: false
    private _nextSigningKeyLength?: string; 
    public get nextSigningKeyLength() {
        return this.getStringAttribute('next_signing_key_length');
    }
    public set nextSigningKeyLength(value: string) {
        this._nextSigningKeyLength = value;
    }
    public resetNextSigningKeyLength() {
        this._nextSigningKeyLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nextSigningKeyLengthInput() {
        return this._nextSigningKeyLength;
    }
}
export interface FeedbackAttributesProperty {
    /**
    * If the value is true, you receive email notifications when bounce or complaint events occur
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity#email_forwarding_enabled CcEmailIdentity#email_forwarding_enabled}
    */
    readonly emailForwardingEnabled?: boolean | cdktn.IResolvable;
}
export class FeedbackAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FeedbackAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._emailForwardingEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailForwardingEnabled = this._emailForwardingEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FeedbackAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._emailForwardingEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._emailForwardingEnabled = value.emailForwardingEnabled;
        }
    }

    // email_forwarding_enabled - computed: true, optional: true, required: false
    private _emailForwardingEnabled?: boolean | cdktn.IResolvable; 
    public get emailForwardingEnabled() {
        return this.getBooleanAttribute('email_forwarding_enabled');
    }
    public set emailForwardingEnabled(value: boolean | cdktn.IResolvable) {
        this._emailForwardingEnabled = value;
    }
    public resetEmailForwardingEnabled() {
        this._emailForwardingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailForwardingEnabledInput() {
        return this._emailForwardingEnabled;
    }
}
export interface MailFromAttributesProperty {
    /**
    * The action to take if the required MX record isn't found when you send an email. When you set this value to UseDefaultValue , the mail is sent using amazonses.com as the MAIL FROM domain. When you set this value to RejectMessage , the Amazon SES API v2 returns a MailFromDomainNotVerified error, and doesn't attempt to deliver the email.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity#behavior_on_mx_failure CcEmailIdentity#behavior_on_mx_failure}
    */
    readonly behaviorOnMxFailure?: string;
    /**
    * The custom MAIL FROM domain that you want the verified identity to use
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity#mail_from_domain CcEmailIdentity#mail_from_domain}
    */
    readonly mailFromDomain?: string;
}
export class MailFromAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MailFromAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._behaviorOnMxFailure !== undefined) {
            hasAnyValues = true;
            internalValueResult.behaviorOnMxFailure = this._behaviorOnMxFailure;
        }
        if (this._mailFromDomain !== undefined) {
            hasAnyValues = true;
            internalValueResult.mailFromDomain = this._mailFromDomain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MailFromAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._behaviorOnMxFailure = undefined;
            this._mailFromDomain = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._behaviorOnMxFailure = value.behaviorOnMxFailure;
            this._mailFromDomain = value.mailFromDomain;
        }
    }

    // behavior_on_mx_failure - computed: true, optional: true, required: false
    private _behaviorOnMxFailure?: string; 
    public get behaviorOnMxFailure() {
        return this.getStringAttribute('behavior_on_mx_failure');
    }
    public set behaviorOnMxFailure(value: string) {
        this._behaviorOnMxFailure = value;
    }
    public resetBehaviorOnMxFailure() {
        this._behaviorOnMxFailure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get behaviorOnMxFailureInput() {
        return this._behaviorOnMxFailure;
    }

    // mail_from_domain - computed: true, optional: true, required: false
    private _mailFromDomain?: string; 
    public get mailFromDomain() {
        return this.getStringAttribute('mail_from_domain');
    }
    public set mailFromDomain(value: string) {
        this._mailFromDomain = value;
    }
    public resetMailFromDomain() {
        this._mailFromDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mailFromDomainInput() {
        return this._mailFromDomain;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity#key CcEmailIdentity#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_email_identity#value CcEmailIdentity#value}
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
