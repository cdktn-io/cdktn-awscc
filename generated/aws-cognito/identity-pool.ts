// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIdentityPoolProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#allow_classic_flow CcIdentityPool#allow_classic_flow}
    */
    readonly allowClassicFlow?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#allow_unauthenticated_identities CcIdentityPool#allow_unauthenticated_identities}
    */
    readonly allowUnauthenticatedIdentities: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#cognito_events CcIdentityPool#cognito_events}
    */
    readonly cognitoEvents?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#cognito_identity_providers CcIdentityPool#cognito_identity_providers}
    */
    readonly cognitoIdentityProviders?: CcIdentityPool.CognitoIdentityProviderProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#cognito_streams CcIdentityPool#cognito_streams}
    */
    readonly cognitoStreams?: CcIdentityPool.CognitoStreamsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#developer_provider_name CcIdentityPool#developer_provider_name}
    */
    readonly developerProviderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#identity_pool_name CcIdentityPool#identity_pool_name}
    */
    readonly identityPoolName?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#identity_pool_tags CcIdentityPool#identity_pool_tags}
    */
    readonly identityPoolTags?: CcIdentityPool.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#open_id_connect_provider_ar_ns CcIdentityPool#open_id_connect_provider_ar_ns}
    */
    readonly openIdConnectProviderArNs?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#push_sync CcIdentityPool#push_sync}
    */
    readonly pushSync?: CcIdentityPool.PushSyncProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#saml_provider_ar_ns CcIdentityPool#saml_provider_ar_ns}
    */
    readonly samlProviderArNs?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#supported_login_providers CcIdentityPool#supported_login_providers}
    */
    readonly supportedLoginProviders?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool awscc_cognito_identity_pool}
*/
export class CcIdentityPool extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cognito_identity_pool";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIdentityPool resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIdentityPool to import
    * @param importFromId The id of the existing CcIdentityPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIdentityPool to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_identity_pool", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool awscc_cognito_identity_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIdentityPoolProps
    */
    public constructor(scope: Construct, id: string, config: CcIdentityPoolProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cognito_identity_pool',
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
        this._allowClassicFlow = config.allowClassicFlow;
        this._allowUnauthenticatedIdentities = config.allowUnauthenticatedIdentities;
        this._cognitoEvents = config.cognitoEvents;
        this._cognitoIdentityProviders.internalValue = config.cognitoIdentityProviders;
        this._cognitoStreams.internalValue = config.cognitoStreams;
        this._developerProviderName = config.developerProviderName;
        this._identityPoolName = config.identityPoolName;
        this._identityPoolTags.internalValue = config.identityPoolTags;
        this._openIdConnectProviderArNs = config.openIdConnectProviderArNs;
        this._pushSync.internalValue = config.pushSync;
        this._samlProviderArNs = config.samlProviderArNs;
        this._supportedLoginProviders = config.supportedLoginProviders;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allow_classic_flow - computed: true, optional: true, required: false
    private _allowClassicFlow?: boolean | cdktn.IResolvable; 
    public get allowClassicFlow() {
        return this.getBooleanAttribute('allow_classic_flow');
    }
    public set allowClassicFlow(value: boolean | cdktn.IResolvable) {
        this._allowClassicFlow = value;
    }
    public resetAllowClassicFlow() {
        this._allowClassicFlow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowClassicFlowInput() {
        return this._allowClassicFlow;
    }

    // allow_unauthenticated_identities - computed: false, optional: false, required: true
    private _allowUnauthenticatedIdentities?: boolean | cdktn.IResolvable; 
    public get allowUnauthenticatedIdentities() {
        return this.getBooleanAttribute('allow_unauthenticated_identities');
    }
    public set allowUnauthenticatedIdentities(value: boolean | cdktn.IResolvable) {
        this._allowUnauthenticatedIdentities = value;
    }
    // Temporarily expose input value. Use with caution.
    public get allowUnauthenticatedIdentitiesInput() {
        return this._allowUnauthenticatedIdentities;
    }

    // cognito_events - computed: true, optional: true, required: false
    private _cognitoEvents?: string; 
    public get cognitoEvents() {
        return this.getStringAttribute('cognito_events');
    }
    public set cognitoEvents(value: string) {
        this._cognitoEvents = value;
    }
    public resetCognitoEvents() {
        this._cognitoEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cognitoEventsInput() {
        return this._cognitoEvents;
    }

    // cognito_identity_providers - computed: true, optional: true, required: false
    private _cognitoIdentityProviders = new CcIdentityPool.CognitoIdentityProviderPropertyList(this, "cognito_identity_providers", false);
    public get cognitoIdentityProviders() {
        return this._cognitoIdentityProviders;
    }
    public putCognitoIdentityProviders(value: CcIdentityPool.CognitoIdentityProviderProperty[] | cdktn.IResolvable) {
        this._cognitoIdentityProviders.internalValue = value;
    }
    public resetCognitoIdentityProviders() {
        this._cognitoIdentityProviders.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cognitoIdentityProvidersInput() {
        return this._cognitoIdentityProviders.internalValue;
    }

    // cognito_streams - computed: true, optional: true, required: false
    private _cognitoStreams = new CcIdentityPool.CognitoStreamsPropertyOutputReference(this, "cognito_streams");
    public get cognitoStreams() {
        return this._cognitoStreams;
    }
    public putCognitoStreams(value: CcIdentityPool.CognitoStreamsProperty) {
        this._cognitoStreams.internalValue = value;
    }
    public resetCognitoStreams() {
        this._cognitoStreams.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cognitoStreamsInput() {
        return this._cognitoStreams.internalValue;
    }

    // developer_provider_name - computed: true, optional: true, required: false
    private _developerProviderName?: string; 
    public get developerProviderName() {
        return this.getStringAttribute('developer_provider_name');
    }
    public set developerProviderName(value: string) {
        this._developerProviderName = value;
    }
    public resetDeveloperProviderName() {
        this._developerProviderName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get developerProviderNameInput() {
        return this._developerProviderName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_pool_id - computed: true, optional: false, required: false
    public get identityPoolId() {
        return this.getStringAttribute('identity_pool_id');
    }

    // identity_pool_name - computed: true, optional: true, required: false
    private _identityPoolName?: string; 
    public get identityPoolName() {
        return this.getStringAttribute('identity_pool_name');
    }
    public set identityPoolName(value: string) {
        this._identityPoolName = value;
    }
    public resetIdentityPoolName() {
        this._identityPoolName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityPoolNameInput() {
        return this._identityPoolName;
    }

    // identity_pool_tags - computed: true, optional: true, required: false
    private _identityPoolTags = new CcIdentityPool.TagPropertyList(this, "identity_pool_tags", true);
    public get identityPoolTags() {
        return this._identityPoolTags;
    }
    public putIdentityPoolTags(value: CcIdentityPool.TagProperty[] | cdktn.IResolvable) {
        this._identityPoolTags.internalValue = value;
    }
    public resetIdentityPoolTags() {
        this._identityPoolTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityPoolTagsInput() {
        return this._identityPoolTags.internalValue;
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // open_id_connect_provider_ar_ns - computed: true, optional: true, required: false
    private _openIdConnectProviderArNs?: string[]; 
    public get openIdConnectProviderArNs() {
        return this.getListAttribute('open_id_connect_provider_ar_ns');
    }
    public set openIdConnectProviderArNs(value: string[]) {
        this._openIdConnectProviderArNs = value;
    }
    public resetOpenIdConnectProviderArNs() {
        this._openIdConnectProviderArNs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openIdConnectProviderArNsInput() {
        return this._openIdConnectProviderArNs;
    }

    // push_sync - computed: true, optional: true, required: false
    private _pushSync = new CcIdentityPool.PushSyncPropertyOutputReference(this, "push_sync");
    public get pushSync() {
        return this._pushSync;
    }
    public putPushSync(value: CcIdentityPool.PushSyncProperty) {
        this._pushSync.internalValue = value;
    }
    public resetPushSync() {
        this._pushSync.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pushSyncInput() {
        return this._pushSync.internalValue;
    }

    // saml_provider_ar_ns - computed: true, optional: true, required: false
    private _samlProviderArNs?: string[]; 
    public get samlProviderArNs() {
        return this.getListAttribute('saml_provider_ar_ns');
    }
    public set samlProviderArNs(value: string[]) {
        this._samlProviderArNs = value;
    }
    public resetSamlProviderArNs() {
        this._samlProviderArNs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samlProviderArNsInput() {
        return this._samlProviderArNs;
    }

    // supported_login_providers - computed: true, optional: true, required: false
    private _supportedLoginProviders?: string; 
    public get supportedLoginProviders() {
        return this.getStringAttribute('supported_login_providers');
    }
    public set supportedLoginProviders(value: string) {
        this._supportedLoginProviders = value;
    }
    public resetSupportedLoginProviders() {
        this._supportedLoginProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedLoginProvidersInput() {
        return this._supportedLoginProviders;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            allow_classic_flow: cdktn.booleanToTerraform(this._allowClassicFlow),
            allow_unauthenticated_identities: cdktn.booleanToTerraform(this._allowUnauthenticatedIdentities),
            cognito_events: cdktn.stringToTerraform(this._cognitoEvents),
            cognito_identity_providers: cdktn.listMapper(ccIdentityPoolCognitoIdentityProviderPropertyToTerraform, false)(this._cognitoIdentityProviders.internalValue),
            cognito_streams: ccIdentityPoolCognitoStreamsPropertyToTerraform(this._cognitoStreams.internalValue),
            developer_provider_name: cdktn.stringToTerraform(this._developerProviderName),
            identity_pool_name: cdktn.stringToTerraform(this._identityPoolName),
            identity_pool_tags: cdktn.listMapper(ccIdentityPoolTagPropertyToTerraform, false)(this._identityPoolTags.internalValue),
            open_id_connect_provider_ar_ns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._openIdConnectProviderArNs),
            push_sync: ccIdentityPoolPushSyncPropertyToTerraform(this._pushSync.internalValue),
            saml_provider_ar_ns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._samlProviderArNs),
            supported_login_providers: cdktn.stringToTerraform(this._supportedLoginProviders),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allow_classic_flow: {
                value: cdktn.booleanToHclTerraform(this._allowClassicFlow),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allow_unauthenticated_identities: {
                value: cdktn.booleanToHclTerraform(this._allowUnauthenticatedIdentities),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            cognito_events: {
                value: cdktn.stringToHclTerraform(this._cognitoEvents),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cognito_identity_providers: {
                value: cdktn.listMapperHcl(ccIdentityPoolCognitoIdentityProviderPropertyToHclTerraform, false)(this._cognitoIdentityProviders.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcIdentityPool.CognitoIdentityProviderPropertyList",
            },
            cognito_streams: {
                value: ccIdentityPoolCognitoStreamsPropertyToHclTerraform(this._cognitoStreams.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIdentityPool.CognitoStreamsProperty",
            },
            developer_provider_name: {
                value: cdktn.stringToHclTerraform(this._developerProviderName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_pool_name: {
                value: cdktn.stringToHclTerraform(this._identityPoolName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_pool_tags: {
                value: cdktn.listMapperHcl(ccIdentityPoolTagPropertyToHclTerraform, false)(this._identityPoolTags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIdentityPool.TagPropertyList",
            },
            open_id_connect_provider_ar_ns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._openIdConnectProviderArNs),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            push_sync: {
                value: ccIdentityPoolPushSyncPropertyToHclTerraform(this._pushSync.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIdentityPool.PushSyncProperty",
            },
            saml_provider_ar_ns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._samlProviderArNs),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            supported_login_providers: {
                value: cdktn.stringToHclTerraform(this._supportedLoginProviders),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIdentityPoolCognitoIdentityProviderPropertyToTerraform(struct?: CcIdentityPool.CognitoIdentityProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: cdktn.stringToTerraform(struct!.clientId),
        provider_name: cdktn.stringToTerraform(struct!.providerName),
        server_side_token_check: cdktn.booleanToTerraform(struct!.serverSideTokenCheck),
    }
}


export function ccIdentityPoolCognitoIdentityProviderPropertyToHclTerraform(struct?: CcIdentityPool.CognitoIdentityProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_id: {
            value: cdktn.stringToHclTerraform(struct!.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        provider_name: {
            value: cdktn.stringToHclTerraform(struct!.providerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        server_side_token_check: {
            value: cdktn.booleanToHclTerraform(struct!.serverSideTokenCheck),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIdentityPoolCognitoStreamsPropertyToTerraform(struct?: CcIdentityPool.CognitoStreamsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        stream_name: cdktn.stringToTerraform(struct!.streamName),
        streaming_status: cdktn.stringToTerraform(struct!.streamingStatus),
    }
}


export function ccIdentityPoolCognitoStreamsPropertyToHclTerraform(struct?: CcIdentityPool.CognitoStreamsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stream_name: {
            value: cdktn.stringToHclTerraform(struct!.streamName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        streaming_status: {
            value: cdktn.stringToHclTerraform(struct!.streamingStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIdentityPoolTagPropertyToTerraform(struct?: CcIdentityPool.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIdentityPoolTagPropertyToHclTerraform(struct?: CcIdentityPool.TagProperty | cdktn.IResolvable): any {
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


export function ccIdentityPoolPushSyncPropertyToTerraform(struct?: CcIdentityPool.PushSyncProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        application_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.applicationArns),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccIdentityPoolPushSyncPropertyToHclTerraform(struct?: CcIdentityPool.PushSyncProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        application_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.applicationArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
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


export namespace CcIdentityPool {
export interface CognitoIdentityProviderProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#client_id CcIdentityPool#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#provider_name CcIdentityPool#provider_name}
    */
    readonly providerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#server_side_token_check CcIdentityPool#server_side_token_check}
    */
    readonly serverSideTokenCheck?: boolean | cdktn.IResolvable;
}
export class CognitoIdentityProviderPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CognitoIdentityProviderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._providerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.providerName = this._providerName;
        }
        if (this._serverSideTokenCheck !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverSideTokenCheck = this._serverSideTokenCheck;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CognitoIdentityProviderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._providerName = undefined;
            this._serverSideTokenCheck = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientId = value.clientId;
            this._providerName = value.providerName;
            this._serverSideTokenCheck = value.serverSideTokenCheck;
        }
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

    // provider_name - computed: true, optional: true, required: false
    private _providerName?: string; 
    public get providerName() {
        return this.getStringAttribute('provider_name');
    }
    public set providerName(value: string) {
        this._providerName = value;
    }
    public resetProviderName() {
        this._providerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerNameInput() {
        return this._providerName;
    }

    // server_side_token_check - computed: true, optional: true, required: false
    private _serverSideTokenCheck?: boolean | cdktn.IResolvable; 
    public get serverSideTokenCheck() {
        return this.getBooleanAttribute('server_side_token_check');
    }
    public set serverSideTokenCheck(value: boolean | cdktn.IResolvable) {
        this._serverSideTokenCheck = value;
    }
    public resetServerSideTokenCheck() {
        this._serverSideTokenCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverSideTokenCheckInput() {
        return this._serverSideTokenCheck;
    }
}

export class CognitoIdentityProviderPropertyList extends cdktn.ComplexList {
    public internalValue? : CognitoIdentityProviderProperty[] | cdktn.IResolvable

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
    public get(index: number): CognitoIdentityProviderPropertyOutputReference {
        return new CognitoIdentityProviderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CognitoStreamsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#role_arn CcIdentityPool#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#stream_name CcIdentityPool#stream_name}
    */
    readonly streamName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#streaming_status CcIdentityPool#streaming_status}
    */
    readonly streamingStatus?: string;
}
export class CognitoStreamsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CognitoStreamsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._streamName !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamName = this._streamName;
        }
        if (this._streamingStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamingStatus = this._streamingStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CognitoStreamsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
            this._streamName = undefined;
            this._streamingStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
            this._streamName = value.streamName;
            this._streamingStatus = value.streamingStatus;
        }
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

    // stream_name - computed: true, optional: true, required: false
    private _streamName?: string; 
    public get streamName() {
        return this.getStringAttribute('stream_name');
    }
    public set streamName(value: string) {
        this._streamName = value;
    }
    public resetStreamName() {
        this._streamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamNameInput() {
        return this._streamName;
    }

    // streaming_status - computed: true, optional: true, required: false
    private _streamingStatus?: string; 
    public get streamingStatus() {
        return this.getStringAttribute('streaming_status');
    }
    public set streamingStatus(value: string) {
        this._streamingStatus = value;
    }
    public resetStreamingStatus() {
        this._streamingStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamingStatusInput() {
        return this._streamingStatus;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#key CcIdentityPool#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#value CcIdentityPool#value}
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
export interface PushSyncProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#application_arns CcIdentityPool#application_arns}
    */
    readonly applicationArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool#role_arn CcIdentityPool#role_arn}
    */
    readonly roleArn?: string;
}
export class PushSyncPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PushSyncProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applicationArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationArns = this._applicationArns;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PushSyncProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applicationArns = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applicationArns = value.applicationArns;
            this._roleArn = value.roleArn;
        }
    }

    // application_arns - computed: true, optional: true, required: false
    private _applicationArns?: string[]; 
    public get applicationArns() {
        return this.getListAttribute('application_arns');
    }
    public set applicationArns(value: string[]) {
        this._applicationArns = value;
    }
    public resetApplicationArns() {
        this._applicationArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationArnsInput() {
        return this._applicationArns;
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
}
