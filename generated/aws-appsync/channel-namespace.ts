// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcChannelNamespaceProps extends cdktn.TerraformMetaArguments {
    /**
    * AppSync Api Id that this Channel Namespace belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#api_id CcChannelNamespace#api_id}
    */
    readonly apiId: string;
    /**
    * String of APPSYNC_JS code to be used by the handlers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#code_handlers CcChannelNamespace#code_handlers}
    */
    readonly codeHandlers?: string;
    /**
    * The Amazon S3 endpoint where the code is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#code_s3_location CcChannelNamespace#code_s3_location}
    */
    readonly codeS3Location?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#handler_configs CcChannelNamespace#handler_configs}
    */
    readonly handlerConfigs?: CcChannelNamespace.HandlerConfigsProperty;
    /**
    * Namespace indentifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#name CcChannelNamespace#name}
    */
    readonly name: string;
    /**
    * List of AuthModes supported for Publish operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#publish_auth_modes CcChannelNamespace#publish_auth_modes}
    */
    readonly publishAuthModes?: CcChannelNamespace.AuthModeProperty[] | cdktn.IResolvable;
    /**
    * List of AuthModes supported for Subscribe operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#subscribe_auth_modes CcChannelNamespace#subscribe_auth_modes}
    */
    readonly subscribeAuthModes?: CcChannelNamespace.SubscribeAuthModesProperty[] | cdktn.IResolvable;
    /**
    * An arbitrary set of tags (key-value pairs) for this AppSync API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#tags CcChannelNamespace#tags}
    */
    readonly tags?: CcChannelNamespace.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace awscc_appsync_channel_namespace}
*/
export class CcChannelNamespace extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appsync_channel_namespace";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcChannelNamespace resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcChannelNamespace to import
    * @param importFromId The id of the existing CcChannelNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcChannelNamespace to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appsync_channel_namespace", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace awscc_appsync_channel_namespace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcChannelNamespaceProps
    */
    public constructor(scope: Construct, id: string, config: CcChannelNamespaceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appsync_channel_namespace',
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
        this._apiId = config.apiId;
        this._codeHandlers = config.codeHandlers;
        this._codeS3Location = config.codeS3Location;
        this._handlerConfigs.internalValue = config.handlerConfigs;
        this._name = config.name;
        this._publishAuthModes.internalValue = config.publishAuthModes;
        this._subscribeAuthModes.internalValue = config.subscribeAuthModes;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_id - computed: false, optional: false, required: true
    private _apiId?: string; 
    public get apiId() {
        return this.getStringAttribute('api_id');
    }
    public set apiId(value: string) {
        this._apiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get apiIdInput() {
        return this._apiId;
    }

    // channel_namespace_arn - computed: true, optional: false, required: false
    public get channelNamespaceArn() {
        return this.getStringAttribute('channel_namespace_arn');
    }

    // code_handlers - computed: true, optional: true, required: false
    private _codeHandlers?: string; 
    public get codeHandlers() {
        return this.getStringAttribute('code_handlers');
    }
    public set codeHandlers(value: string) {
        this._codeHandlers = value;
    }
    public resetCodeHandlers() {
        this._codeHandlers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeHandlersInput() {
        return this._codeHandlers;
    }

    // code_s3_location - computed: true, optional: true, required: false
    private _codeS3Location?: string; 
    public get codeS3Location() {
        return this.getStringAttribute('code_s3_location');
    }
    public set codeS3Location(value: string) {
        this._codeS3Location = value;
    }
    public resetCodeS3Location() {
        this._codeS3Location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeS3LocationInput() {
        return this._codeS3Location;
    }

    // handler_configs - computed: true, optional: true, required: false
    private _handlerConfigs = new CcChannelNamespace.HandlerConfigsPropertyOutputReference(this, "handler_configs");
    public get handlerConfigs() {
        return this._handlerConfigs;
    }
    public putHandlerConfigs(value: CcChannelNamespace.HandlerConfigsProperty) {
        this._handlerConfigs.internalValue = value;
    }
    public resetHandlerConfigs() {
        this._handlerConfigs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get handlerConfigsInput() {
        return this._handlerConfigs.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // publish_auth_modes - computed: true, optional: true, required: false
    private _publishAuthModes = new CcChannelNamespace.AuthModePropertyList(this, "publish_auth_modes", false);
    public get publishAuthModes() {
        return this._publishAuthModes;
    }
    public putPublishAuthModes(value: CcChannelNamespace.AuthModeProperty[] | cdktn.IResolvable) {
        this._publishAuthModes.internalValue = value;
    }
    public resetPublishAuthModes() {
        this._publishAuthModes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publishAuthModesInput() {
        return this._publishAuthModes.internalValue;
    }

    // subscribe_auth_modes - computed: true, optional: true, required: false
    private _subscribeAuthModes = new CcChannelNamespace.SubscribeAuthModesPropertyList(this, "subscribe_auth_modes", false);
    public get subscribeAuthModes() {
        return this._subscribeAuthModes;
    }
    public putSubscribeAuthModes(value: CcChannelNamespace.SubscribeAuthModesProperty[] | cdktn.IResolvable) {
        this._subscribeAuthModes.internalValue = value;
    }
    public resetSubscribeAuthModes() {
        this._subscribeAuthModes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subscribeAuthModesInput() {
        return this._subscribeAuthModes.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcChannelNamespace.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcChannelNamespace.TagProperty[] | cdktn.IResolvable) {
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
            api_id: cdktn.stringToTerraform(this._apiId),
            code_handlers: cdktn.stringToTerraform(this._codeHandlers),
            code_s3_location: cdktn.stringToTerraform(this._codeS3Location),
            handler_configs: ccChannelNamespaceHandlerConfigsPropertyToTerraform(this._handlerConfigs.internalValue),
            name: cdktn.stringToTerraform(this._name),
            publish_auth_modes: cdktn.listMapper(ccChannelNamespaceAuthModePropertyToTerraform, false)(this._publishAuthModes.internalValue),
            subscribe_auth_modes: cdktn.listMapper(ccChannelNamespaceSubscribeAuthModesPropertyToTerraform, false)(this._subscribeAuthModes.internalValue),
            tags: cdktn.listMapper(ccChannelNamespaceTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            api_id: {
                value: cdktn.stringToHclTerraform(this._apiId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            code_handlers: {
                value: cdktn.stringToHclTerraform(this._codeHandlers),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            code_s3_location: {
                value: cdktn.stringToHclTerraform(this._codeS3Location),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            handler_configs: {
                value: ccChannelNamespaceHandlerConfigsPropertyToHclTerraform(this._handlerConfigs.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannelNamespace.HandlerConfigsProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            publish_auth_modes: {
                value: cdktn.listMapperHcl(ccChannelNamespaceAuthModePropertyToHclTerraform, false)(this._publishAuthModes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcChannelNamespace.AuthModePropertyList",
            },
            subscribe_auth_modes: {
                value: cdktn.listMapperHcl(ccChannelNamespaceSubscribeAuthModesPropertyToHclTerraform, false)(this._subscribeAuthModes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcChannelNamespace.SubscribeAuthModesPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccChannelNamespaceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcChannelNamespace.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccChannelNamespaceLambdaConfigPropertyToTerraform(struct?: CcChannelNamespace.LambdaConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        invoke_type: cdktn.stringToTerraform(struct!.invokeType),
    }
}


export function ccChannelNamespaceLambdaConfigPropertyToHclTerraform(struct?: CcChannelNamespace.LambdaConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        invoke_type: {
            value: cdktn.stringToHclTerraform(struct!.invokeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelNamespaceIntegrationPropertyToTerraform(struct?: CcChannelNamespace.IntegrationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_source_name: cdktn.stringToTerraform(struct!.dataSourceName),
        lambda_config: ccChannelNamespaceLambdaConfigPropertyToTerraform(struct!.lambdaConfig),
    }
}


export function ccChannelNamespaceIntegrationPropertyToHclTerraform(struct?: CcChannelNamespace.IntegrationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_source_name: {
            value: cdktn.stringToHclTerraform(struct!.dataSourceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lambda_config: {
            value: ccChannelNamespaceLambdaConfigPropertyToHclTerraform(struct!.lambdaConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "LambdaConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelNamespaceHandlerConfigPropertyToTerraform(struct?: CcChannelNamespace.HandlerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        behavior: cdktn.stringToTerraform(struct!.behavior),
        integration: ccChannelNamespaceIntegrationPropertyToTerraform(struct!.integration),
    }
}


export function ccChannelNamespaceHandlerConfigPropertyToHclTerraform(struct?: CcChannelNamespace.HandlerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        behavior: {
            value: cdktn.stringToHclTerraform(struct!.behavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        integration: {
            value: ccChannelNamespaceIntegrationPropertyToHclTerraform(struct!.integration),
            isBlock: true,
            type: "struct",
            storageClassType: "IntegrationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigPropertyToTerraform(struct?: CcChannelNamespace.HandlerConfigsOnSubscribeIntegrationLambdaConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        invoke_type: cdktn.stringToTerraform(struct!.invokeType),
    }
}


export function ccChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigPropertyToHclTerraform(struct?: CcChannelNamespace.HandlerConfigsOnSubscribeIntegrationLambdaConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        invoke_type: {
            value: cdktn.stringToHclTerraform(struct!.invokeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelNamespaceHandlerConfigsOnSubscribeIntegrationPropertyToTerraform(struct?: CcChannelNamespace.HandlerConfigsOnSubscribeIntegrationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_source_name: cdktn.stringToTerraform(struct!.dataSourceName),
        lambda_config: ccChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigPropertyToTerraform(struct!.lambdaConfig),
    }
}


export function ccChannelNamespaceHandlerConfigsOnSubscribeIntegrationPropertyToHclTerraform(struct?: CcChannelNamespace.HandlerConfigsOnSubscribeIntegrationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_source_name: {
            value: cdktn.stringToHclTerraform(struct!.dataSourceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lambda_config: {
            value: ccChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigPropertyToHclTerraform(struct!.lambdaConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "HandlerConfigsOnSubscribeIntegrationLambdaConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelNamespaceOnSubscribePropertyToTerraform(struct?: CcChannelNamespace.OnSubscribeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        behavior: cdktn.stringToTerraform(struct!.behavior),
        integration: ccChannelNamespaceHandlerConfigsOnSubscribeIntegrationPropertyToTerraform(struct!.integration),
    }
}


export function ccChannelNamespaceOnSubscribePropertyToHclTerraform(struct?: CcChannelNamespace.OnSubscribeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        behavior: {
            value: cdktn.stringToHclTerraform(struct!.behavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        integration: {
            value: ccChannelNamespaceHandlerConfigsOnSubscribeIntegrationPropertyToHclTerraform(struct!.integration),
            isBlock: true,
            type: "struct",
            storageClassType: "HandlerConfigsOnSubscribeIntegrationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelNamespaceHandlerConfigsPropertyToTerraform(struct?: CcChannelNamespace.HandlerConfigsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        on_publish: ccChannelNamespaceHandlerConfigPropertyToTerraform(struct!.onPublish),
        on_subscribe: ccChannelNamespaceOnSubscribePropertyToTerraform(struct!.onSubscribe),
    }
}


export function ccChannelNamespaceHandlerConfigsPropertyToHclTerraform(struct?: CcChannelNamespace.HandlerConfigsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        on_publish: {
            value: ccChannelNamespaceHandlerConfigPropertyToHclTerraform(struct!.onPublish),
            isBlock: true,
            type: "struct",
            storageClassType: "HandlerConfigProperty",
        },
        on_subscribe: {
            value: ccChannelNamespaceOnSubscribePropertyToHclTerraform(struct!.onSubscribe),
            isBlock: true,
            type: "struct",
            storageClassType: "OnSubscribeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelNamespaceAuthModePropertyToTerraform(struct?: CcChannelNamespace.AuthModeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_type: cdktn.stringToTerraform(struct!.authType),
    }
}


export function ccChannelNamespaceAuthModePropertyToHclTerraform(struct?: CcChannelNamespace.AuthModeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_type: {
            value: cdktn.stringToHclTerraform(struct!.authType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelNamespaceSubscribeAuthModesPropertyToTerraform(struct?: CcChannelNamespace.SubscribeAuthModesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_type: cdktn.stringToTerraform(struct!.authType),
    }
}


export function ccChannelNamespaceSubscribeAuthModesPropertyToHclTerraform(struct?: CcChannelNamespace.SubscribeAuthModesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_type: {
            value: cdktn.stringToHclTerraform(struct!.authType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelNamespaceTagPropertyToTerraform(struct?: CcChannelNamespace.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccChannelNamespaceTagPropertyToHclTerraform(struct?: CcChannelNamespace.TagProperty | cdktn.IResolvable): any {
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


export namespace CcChannelNamespace {
export interface LambdaConfigProperty {
    /**
    * Invocation type for direct lambda integrations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#invoke_type CcChannelNamespace#invoke_type}
    */
    readonly invokeType?: string;
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
        if (this._invokeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.invokeType = this._invokeType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._invokeType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._invokeType = value.invokeType;
        }
    }

    // invoke_type - computed: true, optional: true, required: false
    private _invokeType?: string; 
    public get invokeType() {
        return this.getStringAttribute('invoke_type');
    }
    public set invokeType(value: string) {
        this._invokeType = value;
    }
    public resetInvokeType() {
        this._invokeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invokeTypeInput() {
        return this._invokeType;
    }
}
export interface IntegrationProperty {
    /**
    * Data source to invoke for this integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#data_source_name CcChannelNamespace#data_source_name}
    */
    readonly dataSourceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#lambda_config CcChannelNamespace#lambda_config}
    */
    readonly lambdaConfig?: LambdaConfigProperty;
}
export class IntegrationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IntegrationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataSourceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSourceName = this._dataSourceName;
        }
        if (this._lambdaConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaConfig = this._lambdaConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntegrationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataSourceName = undefined;
            this._lambdaConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataSourceName = value.dataSourceName;
            this._lambdaConfig.internalValue = value.lambdaConfig;
        }
    }

    // data_source_name - computed: true, optional: true, required: false
    private _dataSourceName?: string; 
    public get dataSourceName() {
        return this.getStringAttribute('data_source_name');
    }
    public set dataSourceName(value: string) {
        this._dataSourceName = value;
    }
    public resetDataSourceName() {
        this._dataSourceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceNameInput() {
        return this._dataSourceName;
    }

    // lambda_config - computed: true, optional: true, required: false
    private _lambdaConfig = new LambdaConfigPropertyOutputReference(this, "lambda_config");
    public get lambdaConfig() {
        return this._lambdaConfig;
    }
    public putLambdaConfig(value: LambdaConfigProperty) {
        this._lambdaConfig.internalValue = value;
    }
    public resetLambdaConfig() {
        this._lambdaConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaConfigInput() {
        return this._lambdaConfig.internalValue;
    }
}
export interface HandlerConfigProperty {
    /**
    * Integration behavior for a handler configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#behavior CcChannelNamespace#behavior}
    */
    readonly behavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#integration CcChannelNamespace#integration}
    */
    readonly integration?: IntegrationProperty;
}
export class HandlerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HandlerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._behavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.behavior = this._behavior;
        }
        if (this._integration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.integration = this._integration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HandlerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._behavior = undefined;
            this._integration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._behavior = value.behavior;
            this._integration.internalValue = value.integration;
        }
    }

    // behavior - computed: true, optional: true, required: false
    private _behavior?: string; 
    public get behavior() {
        return this.getStringAttribute('behavior');
    }
    public set behavior(value: string) {
        this._behavior = value;
    }
    public resetBehavior() {
        this._behavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get behaviorInput() {
        return this._behavior;
    }

    // integration - computed: true, optional: true, required: false
    private _integration = new IntegrationPropertyOutputReference(this, "integration");
    public get integration() {
        return this._integration;
    }
    public putIntegration(value: IntegrationProperty) {
        this._integration.internalValue = value;
    }
    public resetIntegration() {
        this._integration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationInput() {
        return this._integration.internalValue;
    }
}
export interface HandlerConfigsOnSubscribeIntegrationLambdaConfigProperty {
    /**
    * Invocation type for direct lambda integrations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#invoke_type CcChannelNamespace#invoke_type}
    */
    readonly invokeType?: string;
}
export class HandlerConfigsOnSubscribeIntegrationLambdaConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HandlerConfigsOnSubscribeIntegrationLambdaConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._invokeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.invokeType = this._invokeType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HandlerConfigsOnSubscribeIntegrationLambdaConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._invokeType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._invokeType = value.invokeType;
        }
    }

    // invoke_type - computed: true, optional: true, required: false
    private _invokeType?: string; 
    public get invokeType() {
        return this.getStringAttribute('invoke_type');
    }
    public set invokeType(value: string) {
        this._invokeType = value;
    }
    public resetInvokeType() {
        this._invokeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invokeTypeInput() {
        return this._invokeType;
    }
}
export interface HandlerConfigsOnSubscribeIntegrationProperty {
    /**
    * Data source to invoke for this integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#data_source_name CcChannelNamespace#data_source_name}
    */
    readonly dataSourceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#lambda_config CcChannelNamespace#lambda_config}
    */
    readonly lambdaConfig?: HandlerConfigsOnSubscribeIntegrationLambdaConfigProperty;
}
export class HandlerConfigsOnSubscribeIntegrationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HandlerConfigsOnSubscribeIntegrationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataSourceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSourceName = this._dataSourceName;
        }
        if (this._lambdaConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaConfig = this._lambdaConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HandlerConfigsOnSubscribeIntegrationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataSourceName = undefined;
            this._lambdaConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataSourceName = value.dataSourceName;
            this._lambdaConfig.internalValue = value.lambdaConfig;
        }
    }

    // data_source_name - computed: true, optional: true, required: false
    private _dataSourceName?: string; 
    public get dataSourceName() {
        return this.getStringAttribute('data_source_name');
    }
    public set dataSourceName(value: string) {
        this._dataSourceName = value;
    }
    public resetDataSourceName() {
        this._dataSourceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceNameInput() {
        return this._dataSourceName;
    }

    // lambda_config - computed: true, optional: true, required: false
    private _lambdaConfig = new HandlerConfigsOnSubscribeIntegrationLambdaConfigPropertyOutputReference(this, "lambda_config");
    public get lambdaConfig() {
        return this._lambdaConfig;
    }
    public putLambdaConfig(value: HandlerConfigsOnSubscribeIntegrationLambdaConfigProperty) {
        this._lambdaConfig.internalValue = value;
    }
    public resetLambdaConfig() {
        this._lambdaConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaConfigInput() {
        return this._lambdaConfig.internalValue;
    }
}
export interface OnSubscribeProperty {
    /**
    * Integration behavior for a handler configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#behavior CcChannelNamespace#behavior}
    */
    readonly behavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#integration CcChannelNamespace#integration}
    */
    readonly integration?: HandlerConfigsOnSubscribeIntegrationProperty;
}
export class OnSubscribePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OnSubscribeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._behavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.behavior = this._behavior;
        }
        if (this._integration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.integration = this._integration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnSubscribeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._behavior = undefined;
            this._integration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._behavior = value.behavior;
            this._integration.internalValue = value.integration;
        }
    }

    // behavior - computed: true, optional: true, required: false
    private _behavior?: string; 
    public get behavior() {
        return this.getStringAttribute('behavior');
    }
    public set behavior(value: string) {
        this._behavior = value;
    }
    public resetBehavior() {
        this._behavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get behaviorInput() {
        return this._behavior;
    }

    // integration - computed: true, optional: true, required: false
    private _integration = new HandlerConfigsOnSubscribeIntegrationPropertyOutputReference(this, "integration");
    public get integration() {
        return this._integration;
    }
    public putIntegration(value: HandlerConfigsOnSubscribeIntegrationProperty) {
        this._integration.internalValue = value;
    }
    public resetIntegration() {
        this._integration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationInput() {
        return this._integration.internalValue;
    }
}
export interface HandlerConfigsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#on_publish CcChannelNamespace#on_publish}
    */
    readonly onPublish?: HandlerConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#on_subscribe CcChannelNamespace#on_subscribe}
    */
    readonly onSubscribe?: OnSubscribeProperty;
}
export class HandlerConfigsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HandlerConfigsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._onPublish?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.onPublish = this._onPublish?.internalValue;
        }
        if (this._onSubscribe?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.onSubscribe = this._onSubscribe?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HandlerConfigsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._onPublish.internalValue = undefined;
            this._onSubscribe.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._onPublish.internalValue = value.onPublish;
            this._onSubscribe.internalValue = value.onSubscribe;
        }
    }

    // on_publish - computed: true, optional: true, required: false
    private _onPublish = new HandlerConfigPropertyOutputReference(this, "on_publish");
    public get onPublish() {
        return this._onPublish;
    }
    public putOnPublish(value: HandlerConfigProperty) {
        this._onPublish.internalValue = value;
    }
    public resetOnPublish() {
        this._onPublish.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onPublishInput() {
        return this._onPublish.internalValue;
    }

    // on_subscribe - computed: true, optional: true, required: false
    private _onSubscribe = new OnSubscribePropertyOutputReference(this, "on_subscribe");
    public get onSubscribe() {
        return this._onSubscribe;
    }
    public putOnSubscribe(value: OnSubscribeProperty) {
        this._onSubscribe.internalValue = value;
    }
    public resetOnSubscribe() {
        this._onSubscribe.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onSubscribeInput() {
        return this._onSubscribe.internalValue;
    }
}
export interface AuthModeProperty {
    /**
    * Security configuration for your AppSync API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#auth_type CcChannelNamespace#auth_type}
    */
    readonly authType?: string;
}
export class AuthModePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AuthModeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authType = this._authType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthModeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authType = value.authType;
        }
    }

    // auth_type - computed: true, optional: true, required: false
    private _authType?: string; 
    public get authType() {
        return this.getStringAttribute('auth_type');
    }
    public set authType(value: string) {
        this._authType = value;
    }
    public resetAuthType() {
        this._authType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authTypeInput() {
        return this._authType;
    }
}

export class AuthModePropertyList extends cdktn.ComplexList {
    public internalValue? : AuthModeProperty[] | cdktn.IResolvable

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
    public get(index: number): AuthModePropertyOutputReference {
        return new AuthModePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SubscribeAuthModesProperty {
    /**
    * Security configuration for your AppSync API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#auth_type CcChannelNamespace#auth_type}
    */
    readonly authType?: string;
}
export class SubscribeAuthModesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SubscribeAuthModesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authType = this._authType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SubscribeAuthModesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authType = value.authType;
        }
    }

    // auth_type - computed: true, optional: true, required: false
    private _authType?: string; 
    public get authType() {
        return this.getStringAttribute('auth_type');
    }
    public set authType(value: string) {
        this._authType = value;
    }
    public resetAuthType() {
        this._authType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authTypeInput() {
        return this._authType;
    }
}

export class SubscribeAuthModesPropertyList extends cdktn.ComplexList {
    public internalValue? : SubscribeAuthModesProperty[] | cdktn.IResolvable

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
    public get(index: number): SubscribeAuthModesPropertyOutputReference {
        return new SubscribeAuthModesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * A string used to identify this tag. You can specify a maximum of 128 characters for a tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#key CcChannelNamespace#key}
    */
    readonly key?: string;
    /**
    * A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_channel_namespace#value CcChannelNamespace#value}
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
