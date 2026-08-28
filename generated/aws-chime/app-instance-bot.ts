// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAppInstanceBotProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the AppInstance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot#app_instance_arn CcAppInstanceBot#app_instance_arn}
    */
    readonly appInstanceArn: string;
    /**
    * A structure that contains configuration data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot#configuration CcAppInstanceBot#configuration}
    */
    readonly configuration: CcAppInstanceBot.ConfigurationProperty;
    /**
    * The metadata of the AppInstanceBot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot#metadata CcAppInstanceBot#metadata}
    */
    readonly metadata?: string;
    /**
    * The name of the AppInstanceBot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot#name CcAppInstanceBot#name}
    */
    readonly name?: string;
    /**
    * The tags assigned to the AppInstanceBot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot#tags CcAppInstanceBot#tags}
    */
    readonly tags?: CcAppInstanceBot.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot awscc_chime_app_instance_bot}
*/
export class CcAppInstanceBot extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_chime_app_instance_bot";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAppInstanceBot resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAppInstanceBot to import
    * @param importFromId The id of the existing CcAppInstanceBot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAppInstanceBot to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_chime_app_instance_bot", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot awscc_chime_app_instance_bot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAppInstanceBotProps
    */
    public constructor(scope: Construct, id: string, config: CcAppInstanceBotProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_chime_app_instance_bot',
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
        this._appInstanceArn = config.appInstanceArn;
        this._configuration.internalValue = config.configuration;
        this._metadata = config.metadata;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_instance_arn - computed: false, optional: false, required: true
    private _appInstanceArn?: string; 
    public get appInstanceArn() {
        return this.getStringAttribute('app_instance_arn');
    }
    public set appInstanceArn(value: string) {
        this._appInstanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appInstanceArnInput() {
        return this._appInstanceArn;
    }

    // app_instance_bot_arn - computed: true, optional: false, required: false
    public get appInstanceBotArn() {
        return this.getStringAttribute('app_instance_bot_arn');
    }

    // configuration - computed: false, optional: false, required: true
    private _configuration = new CcAppInstanceBot.ConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcAppInstanceBot.ConfigurationProperty) {
        this._configuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
    }

    // created_timestamp - computed: true, optional: false, required: false
    public get createdTimestamp() {
        return this.getNumberAttribute('created_timestamp');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_timestamp - computed: true, optional: false, required: false
    public get lastUpdatedTimestamp() {
        return this.getNumberAttribute('last_updated_timestamp');
    }

    // metadata - computed: true, optional: true, required: false
    private _metadata?: string; 
    public get metadata() {
        return this.getStringAttribute('metadata');
    }
    public set metadata(value: string) {
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAppInstanceBot.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAppInstanceBot.TagProperty[] | cdktn.IResolvable) {
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
            app_instance_arn: cdktn.stringToTerraform(this._appInstanceArn),
            configuration: ccAppInstanceBotConfigurationPropertyToTerraform(this._configuration.internalValue),
            metadata: cdktn.stringToTerraform(this._metadata),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccAppInstanceBotTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            app_instance_arn: {
                value: cdktn.stringToHclTerraform(this._appInstanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configuration: {
                value: ccAppInstanceBotConfigurationPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAppInstanceBot.ConfigurationProperty",
            },
            metadata: {
                value: cdktn.stringToHclTerraform(this._metadata),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAppInstanceBotTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAppInstanceBot.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAppInstanceBotInvokedByPropertyToTerraform(struct?: CcAppInstanceBot.InvokedByProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        standard_messages: cdktn.stringToTerraform(struct!.standardMessages),
        targeted_messages: cdktn.stringToTerraform(struct!.targetedMessages),
    }
}


export function ccAppInstanceBotInvokedByPropertyToHclTerraform(struct?: CcAppInstanceBot.InvokedByProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        standard_messages: {
            value: cdktn.stringToHclTerraform(struct!.standardMessages),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        targeted_messages: {
            value: cdktn.stringToHclTerraform(struct!.targetedMessages),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppInstanceBotLexConfigurationPropertyToTerraform(struct?: CcAppInstanceBot.LexConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        invoked_by: ccAppInstanceBotInvokedByPropertyToTerraform(struct!.invokedBy),
        lex_bot_alias_arn: cdktn.stringToTerraform(struct!.lexBotAliasArn),
        locale_id: cdktn.stringToTerraform(struct!.localeId),
        responds_to: cdktn.stringToTerraform(struct!.respondsTo),
        welcome_intent: cdktn.stringToTerraform(struct!.welcomeIntent),
    }
}


export function ccAppInstanceBotLexConfigurationPropertyToHclTerraform(struct?: CcAppInstanceBot.LexConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        invoked_by: {
            value: ccAppInstanceBotInvokedByPropertyToHclTerraform(struct!.invokedBy),
            isBlock: true,
            type: "struct",
            storageClassType: "InvokedByProperty",
        },
        lex_bot_alias_arn: {
            value: cdktn.stringToHclTerraform(struct!.lexBotAliasArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        locale_id: {
            value: cdktn.stringToHclTerraform(struct!.localeId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        responds_to: {
            value: cdktn.stringToHclTerraform(struct!.respondsTo),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        welcome_intent: {
            value: cdktn.stringToHclTerraform(struct!.welcomeIntent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppInstanceBotConfigurationPropertyToTerraform(struct?: CcAppInstanceBot.ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lex: ccAppInstanceBotLexConfigurationPropertyToTerraform(struct!.lex),
    }
}


export function ccAppInstanceBotConfigurationPropertyToHclTerraform(struct?: CcAppInstanceBot.ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lex: {
            value: ccAppInstanceBotLexConfigurationPropertyToHclTerraform(struct!.lex),
            isBlock: true,
            type: "struct",
            storageClassType: "LexConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppInstanceBotTagPropertyToTerraform(struct?: CcAppInstanceBot.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAppInstanceBotTagPropertyToHclTerraform(struct?: CcAppInstanceBot.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAppInstanceBot {
export interface InvokedByProperty {
    /**
    * Sets standard messages as the bot trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot#standard_messages CcAppInstanceBot#standard_messages}
    */
    readonly standardMessages?: string;
    /**
    * Sets targeted messages as the bot trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot#targeted_messages CcAppInstanceBot#targeted_messages}
    */
    readonly targetedMessages?: string;
}
export class InvokedByPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InvokedByProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._standardMessages !== undefined) {
            hasAnyValues = true;
            internalValueResult.standardMessages = this._standardMessages;
        }
        if (this._targetedMessages !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetedMessages = this._targetedMessages;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InvokedByProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._standardMessages = undefined;
            this._targetedMessages = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._standardMessages = value.standardMessages;
            this._targetedMessages = value.targetedMessages;
        }
    }

    // standard_messages - computed: true, optional: true, required: false
    private _standardMessages?: string; 
    public get standardMessages() {
        return this.getStringAttribute('standard_messages');
    }
    public set standardMessages(value: string) {
        this._standardMessages = value;
    }
    public resetStandardMessages() {
        this._standardMessages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get standardMessagesInput() {
        return this._standardMessages;
    }

    // targeted_messages - computed: true, optional: true, required: false
    private _targetedMessages?: string; 
    public get targetedMessages() {
        return this.getStringAttribute('targeted_messages');
    }
    public set targetedMessages(value: string) {
        this._targetedMessages = value;
    }
    public resetTargetedMessages() {
        this._targetedMessages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetedMessagesInput() {
        return this._targetedMessages;
    }
}
export interface LexConfigurationProperty {
    /**
    * Specifies the type of message that triggers a bot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot#invoked_by CcAppInstanceBot#invoked_by}
    */
    readonly invokedBy?: InvokedByProperty;
    /**
    * The ARN of the Amazon Lex V2 bot's alias.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot#lex_bot_alias_arn CcAppInstanceBot#lex_bot_alias_arn}
    */
    readonly lexBotAliasArn: string;
    /**
    * Identifies the Amazon Lex V2 bot's language and locale.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot#locale_id CcAppInstanceBot#locale_id}
    */
    readonly localeId: string;
    /**
    * Determines whether the Amazon Lex V2 bot responds to all standard messages. Control messages are not supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot#responds_to CcAppInstanceBot#responds_to}
    */
    readonly respondsTo?: string;
    /**
    * The name of the welcome intent configured in the Amazon Lex V2 bot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot#welcome_intent CcAppInstanceBot#welcome_intent}
    */
    readonly welcomeIntent?: string;
}
export class LexConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LexConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._invokedBy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.invokedBy = this._invokedBy?.internalValue;
        }
        if (this._lexBotAliasArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lexBotAliasArn = this._lexBotAliasArn;
        }
        if (this._localeId !== undefined) {
            hasAnyValues = true;
            internalValueResult.localeId = this._localeId;
        }
        if (this._respondsTo !== undefined) {
            hasAnyValues = true;
            internalValueResult.respondsTo = this._respondsTo;
        }
        if (this._welcomeIntent !== undefined) {
            hasAnyValues = true;
            internalValueResult.welcomeIntent = this._welcomeIntent;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LexConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._invokedBy.internalValue = undefined;
            this._lexBotAliasArn = undefined;
            this._localeId = undefined;
            this._respondsTo = undefined;
            this._welcomeIntent = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._invokedBy.internalValue = value.invokedBy;
            this._lexBotAliasArn = value.lexBotAliasArn;
            this._localeId = value.localeId;
            this._respondsTo = value.respondsTo;
            this._welcomeIntent = value.welcomeIntent;
        }
    }

    // invoked_by - computed: true, optional: true, required: false
    private _invokedBy = new InvokedByPropertyOutputReference(this, "invoked_by");
    public get invokedBy() {
        return this._invokedBy;
    }
    public putInvokedBy(value: InvokedByProperty) {
        this._invokedBy.internalValue = value;
    }
    public resetInvokedBy() {
        this._invokedBy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invokedByInput() {
        return this._invokedBy.internalValue;
    }

    // lex_bot_alias_arn - computed: false, optional: false, required: true
    private _lexBotAliasArn?: string; 
    public get lexBotAliasArn() {
        return this.getStringAttribute('lex_bot_alias_arn');
    }
    public set lexBotAliasArn(value: string) {
        this._lexBotAliasArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get lexBotAliasArnInput() {
        return this._lexBotAliasArn;
    }

    // locale_id - computed: false, optional: false, required: true
    private _localeId?: string; 
    public get localeId() {
        return this.getStringAttribute('locale_id');
    }
    public set localeId(value: string) {
        this._localeId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get localeIdInput() {
        return this._localeId;
    }

    // responds_to - computed: true, optional: true, required: false
    private _respondsTo?: string; 
    public get respondsTo() {
        return this.getStringAttribute('responds_to');
    }
    public set respondsTo(value: string) {
        this._respondsTo = value;
    }
    public resetRespondsTo() {
        this._respondsTo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get respondsToInput() {
        return this._respondsTo;
    }

    // welcome_intent - computed: true, optional: true, required: false
    private _welcomeIntent?: string; 
    public get welcomeIntent() {
        return this.getStringAttribute('welcome_intent');
    }
    public set welcomeIntent(value: string) {
        this._welcomeIntent = value;
    }
    public resetWelcomeIntent() {
        this._welcomeIntent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get welcomeIntentInput() {
        return this._welcomeIntent;
    }
}
export interface ConfigurationProperty {
    /**
    * The configuration for an Amazon Lex V2 bot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot#lex CcAppInstanceBot#lex}
    */
    readonly lex: LexConfigurationProperty;
}
export class ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lex?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lex = this._lex?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lex.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lex.internalValue = value.lex;
        }
    }

    // lex - computed: false, optional: false, required: true
    private _lex = new LexConfigurationPropertyOutputReference(this, "lex");
    public get lex() {
        return this._lex;
    }
    public putLex(value: LexConfigurationProperty) {
        this._lex.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get lexInput() {
        return this._lex.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key in a tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot#key CcAppInstanceBot#key}
    */
    readonly key?: string;
    /**
    * The value in a tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chime_app_instance_bot#value CcAppInstanceBot#value}
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
