// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVerifiedAccessTrustProviderProps extends cdktn.TerraformMetaArguments {
    /**
    * A description for the Amazon Web Services Verified Access trust provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#description CcVerifiedAccessTrustProvider#description}
    */
    readonly description?: string;
    /**
    * The options for device identity based trust providers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#device_options CcVerifiedAccessTrustProvider#device_options}
    */
    readonly deviceOptions?: CcVerifiedAccessTrustProvider.DeviceOptionsProperty;
    /**
    * The type of device-based trust provider. Possible values: jamf|crowdstrike
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#device_trust_provider_type CcVerifiedAccessTrustProvider#device_trust_provider_type}
    */
    readonly deviceTrustProviderType?: string;
    /**
    * The OpenID Connect details for an oidc -type, user-identity based trust provider for L4.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#native_application_oidc_options CcVerifiedAccessTrustProvider#native_application_oidc_options}
    */
    readonly nativeApplicationOidcOptions?: CcVerifiedAccessTrustProvider.NativeApplicationOidcOptionsProperty;
    /**
    * The OpenID Connect details for an oidc -type, user-identity based trust provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#oidc_options CcVerifiedAccessTrustProvider#oidc_options}
    */
    readonly oidcOptions?: CcVerifiedAccessTrustProvider.OidcOptionsProperty;
    /**
    * The identifier to be used when working with policy rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#policy_reference_name CcVerifiedAccessTrustProvider#policy_reference_name}
    */
    readonly policyReferenceName: string;
    /**
    * The configuration options for customer provided KMS encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#sse_specification CcVerifiedAccessTrustProvider#sse_specification}
    */
    readonly sseSpecification?: CcVerifiedAccessTrustProvider.SseSpecificationProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#tags CcVerifiedAccessTrustProvider#tags}
    */
    readonly tags?: CcVerifiedAccessTrustProvider.TagProperty[] | cdktn.IResolvable;
    /**
    * Type of trust provider. Possible values: user|device
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#trust_provider_type CcVerifiedAccessTrustProvider#trust_provider_type}
    */
    readonly trustProviderType: string;
    /**
    * The type of device-based trust provider. Possible values: oidc|iam-identity-center
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#user_trust_provider_type CcVerifiedAccessTrustProvider#user_trust_provider_type}
    */
    readonly userTrustProviderType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider awscc_ec2_verified_access_trust_provider}
*/
export class CcVerifiedAccessTrustProvider extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_verified_access_trust_provider";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVerifiedAccessTrustProvider resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVerifiedAccessTrustProvider to import
    * @param importFromId The id of the existing CcVerifiedAccessTrustProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVerifiedAccessTrustProvider to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_verified_access_trust_provider", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider awscc_ec2_verified_access_trust_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVerifiedAccessTrustProviderProps
    */
    public constructor(scope: Construct, id: string, config: CcVerifiedAccessTrustProviderProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_verified_access_trust_provider',
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
        this._description = config.description;
        this._deviceOptions.internalValue = config.deviceOptions;
        this._deviceTrustProviderType = config.deviceTrustProviderType;
        this._nativeApplicationOidcOptions.internalValue = config.nativeApplicationOidcOptions;
        this._oidcOptions.internalValue = config.oidcOptions;
        this._policyReferenceName = config.policyReferenceName;
        this._sseSpecification.internalValue = config.sseSpecification;
        this._tags.internalValue = config.tags;
        this._trustProviderType = config.trustProviderType;
        this._userTrustProviderType = config.userTrustProviderType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // device_options - computed: true, optional: true, required: false
    private _deviceOptions = new CcVerifiedAccessTrustProvider.DeviceOptionsPropertyOutputReference(this, "device_options");
    public get deviceOptions() {
        return this._deviceOptions;
    }
    public putDeviceOptions(value: CcVerifiedAccessTrustProvider.DeviceOptionsProperty) {
        this._deviceOptions.internalValue = value;
    }
    public resetDeviceOptions() {
        this._deviceOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceOptionsInput() {
        return this._deviceOptions.internalValue;
    }

    // device_trust_provider_type - computed: true, optional: true, required: false
    private _deviceTrustProviderType?: string; 
    public get deviceTrustProviderType() {
        return this.getStringAttribute('device_trust_provider_type');
    }
    public set deviceTrustProviderType(value: string) {
        this._deviceTrustProviderType = value;
    }
    public resetDeviceTrustProviderType() {
        this._deviceTrustProviderType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceTrustProviderTypeInput() {
        return this._deviceTrustProviderType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }

    // native_application_oidc_options - computed: true, optional: true, required: false
    private _nativeApplicationOidcOptions = new CcVerifiedAccessTrustProvider.NativeApplicationOidcOptionsPropertyOutputReference(this, "native_application_oidc_options");
    public get nativeApplicationOidcOptions() {
        return this._nativeApplicationOidcOptions;
    }
    public putNativeApplicationOidcOptions(value: CcVerifiedAccessTrustProvider.NativeApplicationOidcOptionsProperty) {
        this._nativeApplicationOidcOptions.internalValue = value;
    }
    public resetNativeApplicationOidcOptions() {
        this._nativeApplicationOidcOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nativeApplicationOidcOptionsInput() {
        return this._nativeApplicationOidcOptions.internalValue;
    }

    // oidc_options - computed: true, optional: true, required: false
    private _oidcOptions = new CcVerifiedAccessTrustProvider.OidcOptionsPropertyOutputReference(this, "oidc_options");
    public get oidcOptions() {
        return this._oidcOptions;
    }
    public putOidcOptions(value: CcVerifiedAccessTrustProvider.OidcOptionsProperty) {
        this._oidcOptions.internalValue = value;
    }
    public resetOidcOptions() {
        this._oidcOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oidcOptionsInput() {
        return this._oidcOptions.internalValue;
    }

    // policy_reference_name - computed: false, optional: false, required: true
    private _policyReferenceName?: string; 
    public get policyReferenceName() {
        return this.getStringAttribute('policy_reference_name');
    }
    public set policyReferenceName(value: string) {
        this._policyReferenceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyReferenceNameInput() {
        return this._policyReferenceName;
    }

    // sse_specification - computed: true, optional: true, required: false
    private _sseSpecification = new CcVerifiedAccessTrustProvider.SseSpecificationPropertyOutputReference(this, "sse_specification");
    public get sseSpecification() {
        return this._sseSpecification;
    }
    public putSseSpecification(value: CcVerifiedAccessTrustProvider.SseSpecificationProperty) {
        this._sseSpecification.internalValue = value;
    }
    public resetSseSpecification() {
        this._sseSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseSpecificationInput() {
        return this._sseSpecification.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcVerifiedAccessTrustProvider.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcVerifiedAccessTrustProvider.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // trust_provider_type - computed: false, optional: false, required: true
    private _trustProviderType?: string; 
    public get trustProviderType() {
        return this.getStringAttribute('trust_provider_type');
    }
    public set trustProviderType(value: string) {
        this._trustProviderType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trustProviderTypeInput() {
        return this._trustProviderType;
    }

    // user_trust_provider_type - computed: true, optional: true, required: false
    private _userTrustProviderType?: string; 
    public get userTrustProviderType() {
        return this.getStringAttribute('user_trust_provider_type');
    }
    public set userTrustProviderType(value: string) {
        this._userTrustProviderType = value;
    }
    public resetUserTrustProviderType() {
        this._userTrustProviderType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userTrustProviderTypeInput() {
        return this._userTrustProviderType;
    }

    // verified_access_trust_provider_id - computed: true, optional: false, required: false
    public get verifiedAccessTrustProviderId() {
        return this.getStringAttribute('verified_access_trust_provider_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            device_options: ccVerifiedAccessTrustProviderDeviceOptionsPropertyToTerraform(this._deviceOptions.internalValue),
            device_trust_provider_type: cdktn.stringToTerraform(this._deviceTrustProviderType),
            native_application_oidc_options: ccVerifiedAccessTrustProviderNativeApplicationOidcOptionsPropertyToTerraform(this._nativeApplicationOidcOptions.internalValue),
            oidc_options: ccVerifiedAccessTrustProviderOidcOptionsPropertyToTerraform(this._oidcOptions.internalValue),
            policy_reference_name: cdktn.stringToTerraform(this._policyReferenceName),
            sse_specification: ccVerifiedAccessTrustProviderSseSpecificationPropertyToTerraform(this._sseSpecification.internalValue),
            tags: cdktn.listMapper(ccVerifiedAccessTrustProviderTagPropertyToTerraform, false)(this._tags.internalValue),
            trust_provider_type: cdktn.stringToTerraform(this._trustProviderType),
            user_trust_provider_type: cdktn.stringToTerraform(this._userTrustProviderType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            device_options: {
                value: ccVerifiedAccessTrustProviderDeviceOptionsPropertyToHclTerraform(this._deviceOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVerifiedAccessTrustProvider.DeviceOptionsProperty",
            },
            device_trust_provider_type: {
                value: cdktn.stringToHclTerraform(this._deviceTrustProviderType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            native_application_oidc_options: {
                value: ccVerifiedAccessTrustProviderNativeApplicationOidcOptionsPropertyToHclTerraform(this._nativeApplicationOidcOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVerifiedAccessTrustProvider.NativeApplicationOidcOptionsProperty",
            },
            oidc_options: {
                value: ccVerifiedAccessTrustProviderOidcOptionsPropertyToHclTerraform(this._oidcOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVerifiedAccessTrustProvider.OidcOptionsProperty",
            },
            policy_reference_name: {
                value: cdktn.stringToHclTerraform(this._policyReferenceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sse_specification: {
                value: ccVerifiedAccessTrustProviderSseSpecificationPropertyToHclTerraform(this._sseSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVerifiedAccessTrustProvider.SseSpecificationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccVerifiedAccessTrustProviderTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcVerifiedAccessTrustProvider.TagPropertyList",
            },
            trust_provider_type: {
                value: cdktn.stringToHclTerraform(this._trustProviderType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_trust_provider_type: {
                value: cdktn.stringToHclTerraform(this._userTrustProviderType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVerifiedAccessTrustProviderDeviceOptionsPropertyToTerraform(struct?: CcVerifiedAccessTrustProvider.DeviceOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        public_signing_key_url: cdktn.stringToTerraform(struct!.publicSigningKeyUrl),
        tenant_id: cdktn.stringToTerraform(struct!.tenantId),
    }
}


export function ccVerifiedAccessTrustProviderDeviceOptionsPropertyToHclTerraform(struct?: CcVerifiedAccessTrustProvider.DeviceOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        public_signing_key_url: {
            value: cdktn.stringToHclTerraform(struct!.publicSigningKeyUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tenant_id: {
            value: cdktn.stringToHclTerraform(struct!.tenantId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVerifiedAccessTrustProviderNativeApplicationOidcOptionsPropertyToTerraform(struct?: CcVerifiedAccessTrustProvider.NativeApplicationOidcOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_endpoint: cdktn.stringToTerraform(struct!.authorizationEndpoint),
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        issuer: cdktn.stringToTerraform(struct!.issuer),
        public_signing_key_endpoint: cdktn.stringToTerraform(struct!.publicSigningKeyEndpoint),
        scope: cdktn.stringToTerraform(struct!.scope),
        token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
        user_info_endpoint: cdktn.stringToTerraform(struct!.userInfoEndpoint),
    }
}


export function ccVerifiedAccessTrustProviderNativeApplicationOidcOptionsPropertyToHclTerraform(struct?: CcVerifiedAccessTrustProvider.NativeApplicationOidcOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.authorizationEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_id: {
            value: cdktn.stringToHclTerraform(struct!.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_secret: {
            value: cdktn.stringToHclTerraform(struct!.clientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        issuer: {
            value: cdktn.stringToHclTerraform(struct!.issuer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        public_signing_key_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.publicSigningKeyEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope: {
            value: cdktn.stringToHclTerraform(struct!.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_info_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.userInfoEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVerifiedAccessTrustProviderOidcOptionsPropertyToTerraform(struct?: CcVerifiedAccessTrustProvider.OidcOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_endpoint: cdktn.stringToTerraform(struct!.authorizationEndpoint),
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        issuer: cdktn.stringToTerraform(struct!.issuer),
        scope: cdktn.stringToTerraform(struct!.scope),
        token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
        user_info_endpoint: cdktn.stringToTerraform(struct!.userInfoEndpoint),
    }
}


export function ccVerifiedAccessTrustProviderOidcOptionsPropertyToHclTerraform(struct?: CcVerifiedAccessTrustProvider.OidcOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.authorizationEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_id: {
            value: cdktn.stringToHclTerraform(struct!.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_secret: {
            value: cdktn.stringToHclTerraform(struct!.clientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        issuer: {
            value: cdktn.stringToHclTerraform(struct!.issuer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope: {
            value: cdktn.stringToHclTerraform(struct!.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_info_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.userInfoEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVerifiedAccessTrustProviderSseSpecificationPropertyToTerraform(struct?: CcVerifiedAccessTrustProvider.SseSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        customer_managed_key_enabled: cdktn.booleanToTerraform(struct!.customerManagedKeyEnabled),
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    }
}


export function ccVerifiedAccessTrustProviderSseSpecificationPropertyToHclTerraform(struct?: CcVerifiedAccessTrustProvider.SseSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        customer_managed_key_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.customerManagedKeyEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVerifiedAccessTrustProviderTagPropertyToTerraform(struct?: CcVerifiedAccessTrustProvider.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVerifiedAccessTrustProviderTagPropertyToHclTerraform(struct?: CcVerifiedAccessTrustProvider.TagProperty | cdktn.IResolvable): any {
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


export namespace CcVerifiedAccessTrustProvider {
export interface DeviceOptionsProperty {
    /**
    * URL Verified Access will use to verify authenticity of the device tokens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#public_signing_key_url CcVerifiedAccessTrustProvider#public_signing_key_url}
    */
    readonly publicSigningKeyUrl?: string;
    /**
    * The ID of the tenant application with the device-identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#tenant_id CcVerifiedAccessTrustProvider#tenant_id}
    */
    readonly tenantId?: string;
}
export class DeviceOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeviceOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._publicSigningKeyUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.publicSigningKeyUrl = this._publicSigningKeyUrl;
        }
        if (this._tenantId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tenantId = this._tenantId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeviceOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._publicSigningKeyUrl = undefined;
            this._tenantId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._publicSigningKeyUrl = value.publicSigningKeyUrl;
            this._tenantId = value.tenantId;
        }
    }

    // public_signing_key_url - computed: true, optional: true, required: false
    private _publicSigningKeyUrl?: string; 
    public get publicSigningKeyUrl() {
        return this.getStringAttribute('public_signing_key_url');
    }
    public set publicSigningKeyUrl(value: string) {
        this._publicSigningKeyUrl = value;
    }
    public resetPublicSigningKeyUrl() {
        this._publicSigningKeyUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicSigningKeyUrlInput() {
        return this._publicSigningKeyUrl;
    }

    // tenant_id - computed: true, optional: true, required: false
    private _tenantId?: string; 
    public get tenantId() {
        return this.getStringAttribute('tenant_id');
    }
    public set tenantId(value: string) {
        this._tenantId = value;
    }
    public resetTenantId() {
        this._tenantId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenantIdInput() {
        return this._tenantId;
    }
}
export interface NativeApplicationOidcOptionsProperty {
    /**
    * The OIDC authorization endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#authorization_endpoint CcVerifiedAccessTrustProvider#authorization_endpoint}
    */
    readonly authorizationEndpoint?: string;
    /**
    * The client identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#client_id CcVerifiedAccessTrustProvider#client_id}
    */
    readonly clientId?: string;
    /**
    * The client secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#client_secret CcVerifiedAccessTrustProvider#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * The OIDC issuer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#issuer CcVerifiedAccessTrustProvider#issuer}
    */
    readonly issuer?: string;
    /**
    * The public signing key for endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#public_signing_key_endpoint CcVerifiedAccessTrustProvider#public_signing_key_endpoint}
    */
    readonly publicSigningKeyEndpoint?: string;
    /**
    * OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user. Each scope returns a specific set of user attributes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#scope CcVerifiedAccessTrustProvider#scope}
    */
    readonly scope?: string;
    /**
    * The OIDC token endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#token_endpoint CcVerifiedAccessTrustProvider#token_endpoint}
    */
    readonly tokenEndpoint?: string;
    /**
    * The OIDC user info endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#user_info_endpoint CcVerifiedAccessTrustProvider#user_info_endpoint}
    */
    readonly userInfoEndpoint?: string;
}
export class NativeApplicationOidcOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NativeApplicationOidcOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._issuer !== undefined) {
            hasAnyValues = true;
            internalValueResult.issuer = this._issuer;
        }
        if (this._publicSigningKeyEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.publicSigningKeyEndpoint = this._publicSigningKeyEndpoint;
        }
        if (this._scope !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        if (this._tokenEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenEndpoint = this._tokenEndpoint;
        }
        if (this._userInfoEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.userInfoEndpoint = this._userInfoEndpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NativeApplicationOidcOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationEndpoint = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._issuer = undefined;
            this._publicSigningKeyEndpoint = undefined;
            this._scope = undefined;
            this._tokenEndpoint = undefined;
            this._userInfoEndpoint = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationEndpoint = value.authorizationEndpoint;
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
            this._issuer = value.issuer;
            this._publicSigningKeyEndpoint = value.publicSigningKeyEndpoint;
            this._scope = value.scope;
            this._tokenEndpoint = value.tokenEndpoint;
            this._userInfoEndpoint = value.userInfoEndpoint;
        }
    }

    // authorization_endpoint - computed: true, optional: true, required: false
    private _authorizationEndpoint?: string; 
    public get authorizationEndpoint() {
        return this.getStringAttribute('authorization_endpoint');
    }
    public set authorizationEndpoint(value: string) {
        this._authorizationEndpoint = value;
    }
    public resetAuthorizationEndpoint() {
        this._authorizationEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationEndpointInput() {
        return this._authorizationEndpoint;
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

    // client_secret - computed: true, optional: true, required: false
    private _clientSecret?: string; 
    public get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    public set clientSecret(value: string) {
        this._clientSecret = value;
    }
    public resetClientSecret() {
        this._clientSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretInput() {
        return this._clientSecret;
    }

    // issuer - computed: true, optional: true, required: false
    private _issuer?: string; 
    public get issuer() {
        return this.getStringAttribute('issuer');
    }
    public set issuer(value: string) {
        this._issuer = value;
    }
    public resetIssuer() {
        this._issuer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get issuerInput() {
        return this._issuer;
    }

    // public_signing_key_endpoint - computed: true, optional: true, required: false
    private _publicSigningKeyEndpoint?: string; 
    public get publicSigningKeyEndpoint() {
        return this.getStringAttribute('public_signing_key_endpoint');
    }
    public set publicSigningKeyEndpoint(value: string) {
        this._publicSigningKeyEndpoint = value;
    }
    public resetPublicSigningKeyEndpoint() {
        this._publicSigningKeyEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicSigningKeyEndpointInput() {
        return this._publicSigningKeyEndpoint;
    }

    // scope - computed: true, optional: true, required: false
    private _scope?: string; 
    public get scope() {
        return this.getStringAttribute('scope');
    }
    public set scope(value: string) {
        this._scope = value;
    }
    public resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
        return this._scope;
    }

    // token_endpoint - computed: true, optional: true, required: false
    private _tokenEndpoint?: string; 
    public get tokenEndpoint() {
        return this.getStringAttribute('token_endpoint');
    }
    public set tokenEndpoint(value: string) {
        this._tokenEndpoint = value;
    }
    public resetTokenEndpoint() {
        this._tokenEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenEndpointInput() {
        return this._tokenEndpoint;
    }

    // user_info_endpoint - computed: true, optional: true, required: false
    private _userInfoEndpoint?: string; 
    public get userInfoEndpoint() {
        return this.getStringAttribute('user_info_endpoint');
    }
    public set userInfoEndpoint(value: string) {
        this._userInfoEndpoint = value;
    }
    public resetUserInfoEndpoint() {
        this._userInfoEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userInfoEndpointInput() {
        return this._userInfoEndpoint;
    }
}
export interface OidcOptionsProperty {
    /**
    * The OIDC authorization endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#authorization_endpoint CcVerifiedAccessTrustProvider#authorization_endpoint}
    */
    readonly authorizationEndpoint?: string;
    /**
    * The client identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#client_id CcVerifiedAccessTrustProvider#client_id}
    */
    readonly clientId?: string;
    /**
    * The client secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#client_secret CcVerifiedAccessTrustProvider#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * The OIDC issuer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#issuer CcVerifiedAccessTrustProvider#issuer}
    */
    readonly issuer?: string;
    /**
    * OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user. Each scope returns a specific set of user attributes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#scope CcVerifiedAccessTrustProvider#scope}
    */
    readonly scope?: string;
    /**
    * The OIDC token endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#token_endpoint CcVerifiedAccessTrustProvider#token_endpoint}
    */
    readonly tokenEndpoint?: string;
    /**
    * The OIDC user info endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#user_info_endpoint CcVerifiedAccessTrustProvider#user_info_endpoint}
    */
    readonly userInfoEndpoint?: string;
}
export class OidcOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OidcOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._issuer !== undefined) {
            hasAnyValues = true;
            internalValueResult.issuer = this._issuer;
        }
        if (this._scope !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        if (this._tokenEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenEndpoint = this._tokenEndpoint;
        }
        if (this._userInfoEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.userInfoEndpoint = this._userInfoEndpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OidcOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationEndpoint = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._issuer = undefined;
            this._scope = undefined;
            this._tokenEndpoint = undefined;
            this._userInfoEndpoint = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationEndpoint = value.authorizationEndpoint;
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
            this._issuer = value.issuer;
            this._scope = value.scope;
            this._tokenEndpoint = value.tokenEndpoint;
            this._userInfoEndpoint = value.userInfoEndpoint;
        }
    }

    // authorization_endpoint - computed: true, optional: true, required: false
    private _authorizationEndpoint?: string; 
    public get authorizationEndpoint() {
        return this.getStringAttribute('authorization_endpoint');
    }
    public set authorizationEndpoint(value: string) {
        this._authorizationEndpoint = value;
    }
    public resetAuthorizationEndpoint() {
        this._authorizationEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationEndpointInput() {
        return this._authorizationEndpoint;
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

    // client_secret - computed: true, optional: true, required: false
    private _clientSecret?: string; 
    public get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    public set clientSecret(value: string) {
        this._clientSecret = value;
    }
    public resetClientSecret() {
        this._clientSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretInput() {
        return this._clientSecret;
    }

    // issuer - computed: true, optional: true, required: false
    private _issuer?: string; 
    public get issuer() {
        return this.getStringAttribute('issuer');
    }
    public set issuer(value: string) {
        this._issuer = value;
    }
    public resetIssuer() {
        this._issuer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get issuerInput() {
        return this._issuer;
    }

    // scope - computed: true, optional: true, required: false
    private _scope?: string; 
    public get scope() {
        return this.getStringAttribute('scope');
    }
    public set scope(value: string) {
        this._scope = value;
    }
    public resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
        return this._scope;
    }

    // token_endpoint - computed: true, optional: true, required: false
    private _tokenEndpoint?: string; 
    public get tokenEndpoint() {
        return this.getStringAttribute('token_endpoint');
    }
    public set tokenEndpoint(value: string) {
        this._tokenEndpoint = value;
    }
    public resetTokenEndpoint() {
        this._tokenEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenEndpointInput() {
        return this._tokenEndpoint;
    }

    // user_info_endpoint - computed: true, optional: true, required: false
    private _userInfoEndpoint?: string; 
    public get userInfoEndpoint() {
        return this.getStringAttribute('user_info_endpoint');
    }
    public set userInfoEndpoint(value: string) {
        this._userInfoEndpoint = value;
    }
    public resetUserInfoEndpoint() {
        this._userInfoEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userInfoEndpointInput() {
        return this._userInfoEndpoint;
    }
}
export interface SseSpecificationProperty {
    /**
    * Whether to encrypt the policy with the provided key or disable encryption
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#customer_managed_key_enabled CcVerifiedAccessTrustProvider#customer_managed_key_enabled}
    */
    readonly customerManagedKeyEnabled?: boolean | cdktn.IResolvable;
    /**
    * KMS Key Arn used to encrypt the group policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#kms_key_arn CcVerifiedAccessTrustProvider#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export class SseSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SseSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customerManagedKeyEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.customerManagedKeyEnabled = this._customerManagedKeyEnabled;
        }
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SseSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customerManagedKeyEnabled = undefined;
            this._kmsKeyArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customerManagedKeyEnabled = value.customerManagedKeyEnabled;
            this._kmsKeyArn = value.kmsKeyArn;
        }
    }

    // customer_managed_key_enabled - computed: true, optional: true, required: false
    private _customerManagedKeyEnabled?: boolean | cdktn.IResolvable; 
    public get customerManagedKeyEnabled() {
        return this.getBooleanAttribute('customer_managed_key_enabled');
    }
    public set customerManagedKeyEnabled(value: boolean | cdktn.IResolvable) {
        this._customerManagedKeyEnabled = value;
    }
    public resetCustomerManagedKeyEnabled() {
        this._customerManagedKeyEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerManagedKeyEnabledInput() {
        return this._customerManagedKeyEnabled;
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#key CcVerifiedAccessTrustProvider#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_trust_provider#value CcVerifiedAccessTrustProvider#value}
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
