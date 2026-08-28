// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWebhookProps extends cdktn.TerraformMetaArguments {
    /**
    * Supported options are GITHUB_HMAC, IP, and UNAUTHENTICATED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook#authentication CcWebhook#authentication}
    */
    readonly authentication: string;
    /**
    * Properties that configure the authentication applied to incoming webhook trigger requests
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook#authentication_configuration CcWebhook#authentication_configuration}
    */
    readonly authenticationConfiguration: CcWebhook.WebhookAuthConfigurationProperty;
    /**
    * A list of rules applied to the body/payload sent in the POST request to a webhook URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook#filters CcWebhook#filters}
    */
    readonly filters: CcWebhook.WebhookFilterRuleProperty[] | cdktn.IResolvable;
    /**
    * The name of the webhook
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook#name CcWebhook#name}
    */
    readonly name?: string;
    /**
    * Configures a connection between the webhook that was created and the external tool with events to be detected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook#register_with_third_party CcWebhook#register_with_third_party}
    */
    readonly registerWithThirdParty?: boolean | cdktn.IResolvable;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook#tags CcWebhook#tags}
    */
    readonly tags?: CcWebhook.TagProperty[] | cdktn.IResolvable;
    /**
    * The name of the action in a pipeline you want to connect to the webhook.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook#target_action CcWebhook#target_action}
    */
    readonly targetAction: string;
    /**
    * The name of the pipeline you want to connect to the webhook.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook#target_pipeline CcWebhook#target_pipeline}
    */
    readonly targetPipeline: string;
    /**
    * The version number of the pipeline to be connected to the trigger request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook#target_pipeline_version CcWebhook#target_pipeline_version}
    */
    readonly targetPipelineVersion?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook awscc_codepipeline_webhook}
*/
export class CcWebhook extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_codepipeline_webhook";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWebhook resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWebhook to import
    * @param importFromId The id of the existing CcWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWebhook to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codepipeline_webhook", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook awscc_codepipeline_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWebhookProps
    */
    public constructor(scope: Construct, id: string, config: CcWebhookProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_codepipeline_webhook',
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
        this._authentication = config.authentication;
        this._authenticationConfiguration.internalValue = config.authenticationConfiguration;
        this._filters.internalValue = config.filters;
        this._name = config.name;
        this._registerWithThirdParty = config.registerWithThirdParty;
        this._tags.internalValue = config.tags;
        this._targetAction = config.targetAction;
        this._targetPipeline = config.targetPipeline;
        this._targetPipelineVersion = config.targetPipelineVersion;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // authentication - computed: false, optional: false, required: true
    private _authentication?: string; 
    public get authentication() {
        return this.getStringAttribute('authentication');
    }
    public set authentication(value: string) {
        this._authentication = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationInput() {
        return this._authentication;
    }

    // authentication_configuration - computed: false, optional: false, required: true
    private _authenticationConfiguration = new CcWebhook.WebhookAuthConfigurationPropertyOutputReference(this, "authentication_configuration");
    public get authenticationConfiguration() {
        return this._authenticationConfiguration;
    }
    public putAuthenticationConfiguration(value: CcWebhook.WebhookAuthConfigurationProperty) {
        this._authenticationConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationConfigurationInput() {
        return this._authenticationConfiguration.internalValue;
    }

    // filters - computed: false, optional: false, required: true
    private _filters = new CcWebhook.WebhookFilterRulePropertyList(this, "filters", false);
    public get filters() {
        return this._filters;
    }
    public putFilters(value: CcWebhook.WebhookFilterRuleProperty[] | cdktn.IResolvable) {
        this._filters.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get filtersInput() {
        return this._filters.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // register_with_third_party - computed: true, optional: true, required: false
    private _registerWithThirdParty?: boolean | cdktn.IResolvable; 
    public get registerWithThirdParty() {
        return this.getBooleanAttribute('register_with_third_party');
    }
    public set registerWithThirdParty(value: boolean | cdktn.IResolvable) {
        this._registerWithThirdParty = value;
    }
    public resetRegisterWithThirdParty() {
        this._registerWithThirdParty = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get registerWithThirdPartyInput() {
        return this._registerWithThirdParty;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcWebhook.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcWebhook.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_action - computed: false, optional: false, required: true
    private _targetAction?: string; 
    public get targetAction() {
        return this.getStringAttribute('target_action');
    }
    public set targetAction(value: string) {
        this._targetAction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetActionInput() {
        return this._targetAction;
    }

    // target_pipeline - computed: false, optional: false, required: true
    private _targetPipeline?: string; 
    public get targetPipeline() {
        return this.getStringAttribute('target_pipeline');
    }
    public set targetPipeline(value: string) {
        this._targetPipeline = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetPipelineInput() {
        return this._targetPipeline;
    }

    // target_pipeline_version - computed: true, optional: true, required: false
    private _targetPipelineVersion?: number; 
    public get targetPipelineVersion() {
        return this.getNumberAttribute('target_pipeline_version');
    }
    public set targetPipelineVersion(value: number) {
        this._targetPipelineVersion = value;
    }
    public resetTargetPipelineVersion() {
        this._targetPipelineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetPipelineVersionInput() {
        return this._targetPipelineVersion;
    }

    // url - computed: true, optional: false, required: false
    public get url() {
        return this.getStringAttribute('url');
    }

    // webhook_id - computed: true, optional: false, required: false
    public get webhookId() {
        return this.getStringAttribute('webhook_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            authentication: cdktn.stringToTerraform(this._authentication),
            authentication_configuration: ccWebhookWebhookAuthConfigurationPropertyToTerraform(this._authenticationConfiguration.internalValue),
            filters: cdktn.listMapper(ccWebhookWebhookFilterRulePropertyToTerraform, false)(this._filters.internalValue),
            name: cdktn.stringToTerraform(this._name),
            register_with_third_party: cdktn.booleanToTerraform(this._registerWithThirdParty),
            tags: cdktn.listMapper(ccWebhookTagPropertyToTerraform, false)(this._tags.internalValue),
            target_action: cdktn.stringToTerraform(this._targetAction),
            target_pipeline: cdktn.stringToTerraform(this._targetPipeline),
            target_pipeline_version: cdktn.numberToTerraform(this._targetPipelineVersion),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            authentication: {
                value: cdktn.stringToHclTerraform(this._authentication),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            authentication_configuration: {
                value: ccWebhookWebhookAuthConfigurationPropertyToHclTerraform(this._authenticationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWebhook.WebhookAuthConfigurationProperty",
            },
            filters: {
                value: cdktn.listMapperHcl(ccWebhookWebhookFilterRulePropertyToHclTerraform, false)(this._filters.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcWebhook.WebhookFilterRulePropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            register_with_third_party: {
                value: cdktn.booleanToHclTerraform(this._registerWithThirdParty),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.listMapperHcl(ccWebhookTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcWebhook.TagPropertyList",
            },
            target_action: {
                value: cdktn.stringToHclTerraform(this._targetAction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_pipeline: {
                value: cdktn.stringToHclTerraform(this._targetPipeline),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_pipeline_version: {
                value: cdktn.numberToHclTerraform(this._targetPipelineVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccWebhookWebhookAuthConfigurationPropertyToTerraform(struct?: CcWebhook.WebhookAuthConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_ip_range: cdktn.stringToTerraform(struct!.allowedIpRange),
        secret_token: cdktn.stringToTerraform(struct!.secretToken),
    }
}


export function ccWebhookWebhookAuthConfigurationPropertyToHclTerraform(struct?: CcWebhook.WebhookAuthConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_ip_range: {
            value: cdktn.stringToHclTerraform(struct!.allowedIpRange),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_token: {
            value: cdktn.stringToHclTerraform(struct!.secretToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWebhookWebhookFilterRulePropertyToTerraform(struct?: CcWebhook.WebhookFilterRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_path: cdktn.stringToTerraform(struct!.jsonPath),
        match_equals: cdktn.stringToTerraform(struct!.matchEquals),
    }
}


export function ccWebhookWebhookFilterRulePropertyToHclTerraform(struct?: CcWebhook.WebhookFilterRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        json_path: {
            value: cdktn.stringToHclTerraform(struct!.jsonPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        match_equals: {
            value: cdktn.stringToHclTerraform(struct!.matchEquals),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWebhookTagPropertyToTerraform(struct?: CcWebhook.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWebhookTagPropertyToHclTerraform(struct?: CcWebhook.TagProperty | cdktn.IResolvable): any {
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


export namespace CcWebhook {
export interface WebhookAuthConfigurationProperty {
    /**
    * The property used to configure acceptance of webhooks in an IP address range. For IP, only the AllowedIPRange property must be set. This property must be set to a valid CIDR range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook#allowed_ip_range CcWebhook#allowed_ip_range}
    */
    readonly allowedIpRange?: string;
    /**
    * The property used to configure GitHub authentication. For GITHUB_HMAC, only the SecretToken property must be set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook#secret_token CcWebhook#secret_token}
    */
    readonly secretToken?: string;
}
export class WebhookAuthConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WebhookAuthConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedIpRange !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedIpRange = this._allowedIpRange;
        }
        if (this._secretToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretToken = this._secretToken;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WebhookAuthConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedIpRange = undefined;
            this._secretToken = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedIpRange = value.allowedIpRange;
            this._secretToken = value.secretToken;
        }
    }

    // allowed_ip_range - computed: true, optional: true, required: false
    private _allowedIpRange?: string; 
    public get allowedIpRange() {
        return this.getStringAttribute('allowed_ip_range');
    }
    public set allowedIpRange(value: string) {
        this._allowedIpRange = value;
    }
    public resetAllowedIpRange() {
        this._allowedIpRange = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedIpRangeInput() {
        return this._allowedIpRange;
    }

    // secret_token - computed: true, optional: true, required: false
    private _secretToken?: string; 
    public get secretToken() {
        return this.getStringAttribute('secret_token');
    }
    public set secretToken(value: string) {
        this._secretToken = value;
    }
    public resetSecretToken() {
        this._secretToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretTokenInput() {
        return this._secretToken;
    }
}
export interface WebhookFilterRuleProperty {
    /**
    * A JsonPath expression that is applied to the body/payload of the webhook. The value selected by the JsonPath expression must match the value specified in the MatchEquals field. Otherwise, the request is ignored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook#json_path CcWebhook#json_path}
    */
    readonly jsonPath: string;
    /**
    * The value selected by the JsonPath expression must match what is supplied in the MatchEquals field. Otherwise, the request is ignored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook#match_equals CcWebhook#match_equals}
    */
    readonly matchEquals?: string;
}
export class WebhookFilterRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): WebhookFilterRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jsonPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonPath = this._jsonPath;
        }
        if (this._matchEquals !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchEquals = this._matchEquals;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WebhookFilterRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jsonPath = undefined;
            this._matchEquals = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jsonPath = value.jsonPath;
            this._matchEquals = value.matchEquals;
        }
    }

    // json_path - computed: false, optional: false, required: true
    private _jsonPath?: string; 
    public get jsonPath() {
        return this.getStringAttribute('json_path');
    }
    public set jsonPath(value: string) {
        this._jsonPath = value;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonPathInput() {
        return this._jsonPath;
    }

    // match_equals - computed: true, optional: true, required: false
    private _matchEquals?: string; 
    public get matchEquals() {
        return this.getStringAttribute('match_equals');
    }
    public set matchEquals(value: string) {
        this._matchEquals = value;
    }
    public resetMatchEquals() {
        this._matchEquals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchEqualsInput() {
        return this._matchEquals;
    }
}

export class WebhookFilterRulePropertyList extends cdktn.ComplexList {
    public internalValue? : WebhookFilterRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): WebhookFilterRulePropertyOutputReference {
        return new WebhookFilterRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook#key CcWebhook#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codepipeline_webhook#value CcWebhook#value}
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
