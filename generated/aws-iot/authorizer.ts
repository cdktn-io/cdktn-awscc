// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_authorizer

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAuthorizerProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_authorizer#authorizer_function_arn CcAuthorizer#authorizer_function_arn}
    */
    readonly authorizerFunctionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_authorizer#authorizer_name CcAuthorizer#authorizer_name}
    */
    readonly authorizerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_authorizer#enable_caching_for_http CcAuthorizer#enable_caching_for_http}
    */
    readonly enableCachingForHttp?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_authorizer#signing_disabled CcAuthorizer#signing_disabled}
    */
    readonly signingDisabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_authorizer#status CcAuthorizer#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_authorizer#tags CcAuthorizer#tags}
    */
    readonly tags?: CcAuthorizer.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_authorizer#token_key_name CcAuthorizer#token_key_name}
    */
    readonly tokenKeyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_authorizer#token_signing_public_keys CcAuthorizer#token_signing_public_keys}
    */
    readonly tokenSigningPublicKeys?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_authorizer awscc_iot_authorizer}
*/
export class CcAuthorizer extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_authorizer";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAuthorizer resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAuthorizer to import
    * @param importFromId The id of the existing CcAuthorizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_authorizer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAuthorizer to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_authorizer", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_authorizer awscc_iot_authorizer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAuthorizerProps
    */
    public constructor(scope: Construct, id: string, config: CcAuthorizerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_authorizer',
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
        this._authorizerFunctionArn = config.authorizerFunctionArn;
        this._authorizerName = config.authorizerName;
        this._enableCachingForHttp = config.enableCachingForHttp;
        this._signingDisabled = config.signingDisabled;
        this._status = config.status;
        this._tags.internalValue = config.tags;
        this._tokenKeyName = config.tokenKeyName;
        this._tokenSigningPublicKeys = config.tokenSigningPublicKeys;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // authorizer_function_arn - computed: false, optional: false, required: true
    private _authorizerFunctionArn?: string; 
    public get authorizerFunctionArn() {
        return this.getStringAttribute('authorizer_function_arn');
    }
    public set authorizerFunctionArn(value: string) {
        this._authorizerFunctionArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerFunctionArnInput() {
        return this._authorizerFunctionArn;
    }

    // authorizer_name - computed: true, optional: true, required: false
    private _authorizerName?: string; 
    public get authorizerName() {
        return this.getStringAttribute('authorizer_name');
    }
    public set authorizerName(value: string) {
        this._authorizerName = value;
    }
    public resetAuthorizerName() {
        this._authorizerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerNameInput() {
        return this._authorizerName;
    }

    // enable_caching_for_http - computed: true, optional: true, required: false
    private _enableCachingForHttp?: boolean | cdktn.IResolvable; 
    public get enableCachingForHttp() {
        return this.getBooleanAttribute('enable_caching_for_http');
    }
    public set enableCachingForHttp(value: boolean | cdktn.IResolvable) {
        this._enableCachingForHttp = value;
    }
    public resetEnableCachingForHttp() {
        this._enableCachingForHttp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableCachingForHttpInput() {
        return this._enableCachingForHttp;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // signing_disabled - computed: true, optional: true, required: false
    private _signingDisabled?: boolean | cdktn.IResolvable; 
    public get signingDisabled() {
        return this.getBooleanAttribute('signing_disabled');
    }
    public set signingDisabled(value: boolean | cdktn.IResolvable) {
        this._signingDisabled = value;
    }
    public resetSigningDisabled() {
        this._signingDisabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get signingDisabledInput() {
        return this._signingDisabled;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAuthorizer.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAuthorizer.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // token_key_name - computed: true, optional: true, required: false
    private _tokenKeyName?: string; 
    public get tokenKeyName() {
        return this.getStringAttribute('token_key_name');
    }
    public set tokenKeyName(value: string) {
        this._tokenKeyName = value;
    }
    public resetTokenKeyName() {
        this._tokenKeyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenKeyNameInput() {
        return this._tokenKeyName;
    }

    // token_signing_public_keys - computed: true, optional: true, required: false
    private _tokenSigningPublicKeys?: { [key: string]: string }; 
    public get tokenSigningPublicKeys() {
        return this.getStringMapAttribute('token_signing_public_keys');
    }
    public set tokenSigningPublicKeys(value: { [key: string]: string }) {
        this._tokenSigningPublicKeys = value;
    }
    public resetTokenSigningPublicKeys() {
        this._tokenSigningPublicKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenSigningPublicKeysInput() {
        return this._tokenSigningPublicKeys;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            authorizer_function_arn: cdktn.stringToTerraform(this._authorizerFunctionArn),
            authorizer_name: cdktn.stringToTerraform(this._authorizerName),
            enable_caching_for_http: cdktn.booleanToTerraform(this._enableCachingForHttp),
            signing_disabled: cdktn.booleanToTerraform(this._signingDisabled),
            status: cdktn.stringToTerraform(this._status),
            tags: cdktn.listMapper(ccAuthorizerTagPropertyToTerraform, false)(this._tags.internalValue),
            token_key_name: cdktn.stringToTerraform(this._tokenKeyName),
            token_signing_public_keys: cdktn.hashMapper(cdktn.stringToTerraform)(this._tokenSigningPublicKeys),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            authorizer_function_arn: {
                value: cdktn.stringToHclTerraform(this._authorizerFunctionArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            authorizer_name: {
                value: cdktn.stringToHclTerraform(this._authorizerName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_caching_for_http: {
                value: cdktn.booleanToHclTerraform(this._enableCachingForHttp),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            signing_disabled: {
                value: cdktn.booleanToHclTerraform(this._signingDisabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAuthorizerTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAuthorizer.TagPropertyList",
            },
            token_key_name: {
                value: cdktn.stringToHclTerraform(this._tokenKeyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            token_signing_public_keys: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tokenSigningPublicKeys),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAuthorizerTagPropertyToTerraform(struct?: CcAuthorizer.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAuthorizerTagPropertyToHclTerraform(struct?: CcAuthorizer.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAuthorizer {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_authorizer#key CcAuthorizer#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_authorizer#value CcAuthorizer#value}
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
