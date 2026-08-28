// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIdentityProviderConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the identity provider configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config#cluster_name CcIdentityProviderConfig#cluster_name}
    */
    readonly clusterName: string;
    /**
    * The name of the OIDC provider configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config#identity_provider_config_name CcIdentityProviderConfig#identity_provider_config_name}
    */
    readonly identityProviderConfigName?: string;
    /**
    * An object representing an OpenID Connect (OIDC) configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config#oidc CcIdentityProviderConfig#oidc}
    */
    readonly oidc?: CcIdentityProviderConfig.OidcIdentityProviderConfigProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config#tags CcIdentityProviderConfig#tags}
    */
    readonly tags?: CcIdentityProviderConfig.TagProperty[] | cdktn.IResolvable;
    /**
    * The type of the identity provider configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config#type CcIdentityProviderConfig#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config awscc_eks_identity_provider_config}
*/
export class CcIdentityProviderConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_eks_identity_provider_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIdentityProviderConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIdentityProviderConfig to import
    * @param importFromId The id of the existing CcIdentityProviderConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIdentityProviderConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_eks_identity_provider_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config awscc_eks_identity_provider_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIdentityProviderConfigProps
    */
    public constructor(scope: Construct, id: string, config: CcIdentityProviderConfigProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_eks_identity_provider_config',
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
        this._clusterName = config.clusterName;
        this._identityProviderConfigName = config.identityProviderConfigName;
        this._oidc.internalValue = config.oidc;
        this._tags.internalValue = config.tags;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName?: string; 
    public get clusterName() {
        return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
        this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
        return this._clusterName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_provider_config_arn - computed: true, optional: false, required: false
    public get identityProviderConfigArn() {
        return this.getStringAttribute('identity_provider_config_arn');
    }

    // identity_provider_config_name - computed: true, optional: true, required: false
    private _identityProviderConfigName?: string; 
    public get identityProviderConfigName() {
        return this.getStringAttribute('identity_provider_config_name');
    }
    public set identityProviderConfigName(value: string) {
        this._identityProviderConfigName = value;
    }
    public resetIdentityProviderConfigName() {
        this._identityProviderConfigName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderConfigNameInput() {
        return this._identityProviderConfigName;
    }

    // oidc - computed: true, optional: true, required: false
    private _oidc = new CcIdentityProviderConfig.OidcIdentityProviderConfigPropertyOutputReference(this, "oidc");
    public get oidc() {
        return this._oidc;
    }
    public putOidc(value: CcIdentityProviderConfig.OidcIdentityProviderConfigProperty) {
        this._oidc.internalValue = value;
    }
    public resetOidc() {
        this._oidc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oidcInput() {
        return this._oidc.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIdentityProviderConfig.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIdentityProviderConfig.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cluster_name: cdktn.stringToTerraform(this._clusterName),
            identity_provider_config_name: cdktn.stringToTerraform(this._identityProviderConfigName),
            oidc: ccIdentityProviderConfigOidcIdentityProviderConfigPropertyToTerraform(this._oidc.internalValue),
            tags: cdktn.listMapper(ccIdentityProviderConfigTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cluster_name: {
                value: cdktn.stringToHclTerraform(this._clusterName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_provider_config_name: {
                value: cdktn.stringToHclTerraform(this._identityProviderConfigName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            oidc: {
                value: ccIdentityProviderConfigOidcIdentityProviderConfigPropertyToHclTerraform(this._oidc.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIdentityProviderConfig.OidcIdentityProviderConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIdentityProviderConfigTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIdentityProviderConfig.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIdentityProviderConfigRequiredClaimPropertyToTerraform(struct?: CcIdentityProviderConfig.RequiredClaimProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIdentityProviderConfigRequiredClaimPropertyToHclTerraform(struct?: CcIdentityProviderConfig.RequiredClaimProperty | cdktn.IResolvable): any {
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


export function ccIdentityProviderConfigOidcIdentityProviderConfigPropertyToTerraform(struct?: CcIdentityProviderConfig.OidcIdentityProviderConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: cdktn.stringToTerraform(struct!.clientId),
        groups_claim: cdktn.stringToTerraform(struct!.groupsClaim),
        groups_prefix: cdktn.stringToTerraform(struct!.groupsPrefix),
        issuer_url: cdktn.stringToTerraform(struct!.issuerUrl),
        required_claims: cdktn.listMapper(ccIdentityProviderConfigRequiredClaimPropertyToTerraform, false)(struct!.requiredClaims),
        username_claim: cdktn.stringToTerraform(struct!.usernameClaim),
        username_prefix: cdktn.stringToTerraform(struct!.usernamePrefix),
    }
}


export function ccIdentityProviderConfigOidcIdentityProviderConfigPropertyToHclTerraform(struct?: CcIdentityProviderConfig.OidcIdentityProviderConfigProperty | cdktn.IResolvable): any {
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
        groups_claim: {
            value: cdktn.stringToHclTerraform(struct!.groupsClaim),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        groups_prefix: {
            value: cdktn.stringToHclTerraform(struct!.groupsPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        issuer_url: {
            value: cdktn.stringToHclTerraform(struct!.issuerUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required_claims: {
            value: cdktn.listMapperHcl(ccIdentityProviderConfigRequiredClaimPropertyToHclTerraform, false)(struct!.requiredClaims),
            isBlock: true,
            type: "set",
            storageClassType: "RequiredClaimPropertyList",
        },
        username_claim: {
            value: cdktn.stringToHclTerraform(struct!.usernameClaim),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username_prefix: {
            value: cdktn.stringToHclTerraform(struct!.usernamePrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIdentityProviderConfigTagPropertyToTerraform(struct?: CcIdentityProviderConfig.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIdentityProviderConfigTagPropertyToHclTerraform(struct?: CcIdentityProviderConfig.TagProperty | cdktn.IResolvable): any {
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


export namespace CcIdentityProviderConfig {
export interface RequiredClaimProperty {
    /**
    * The key of the requiredClaims.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config#key CcIdentityProviderConfig#key}
    */
    readonly key?: string;
    /**
    * The value for the requiredClaims.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config#value CcIdentityProviderConfig#value}
    */
    readonly value?: string;
}
export class RequiredClaimPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RequiredClaimProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RequiredClaimProperty | cdktn.IResolvable | undefined) {
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

export class RequiredClaimPropertyList extends cdktn.ComplexList {
    public internalValue? : RequiredClaimProperty[] | cdktn.IResolvable

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
    public get(index: number): RequiredClaimPropertyOutputReference {
        return new RequiredClaimPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OidcIdentityProviderConfigProperty {
    /**
    * This is also known as audience. The ID for the client application that makes authentication requests to the OpenID identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config#client_id CcIdentityProviderConfig#client_id}
    */
    readonly clientId?: string;
    /**
    * The JWT claim that the provider uses to return your groups.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config#groups_claim CcIdentityProviderConfig#groups_claim}
    */
    readonly groupsClaim?: string;
    /**
    * The prefix that is prepended to group claims to prevent clashes with existing names (such as system: groups).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config#groups_prefix CcIdentityProviderConfig#groups_prefix}
    */
    readonly groupsPrefix?: string;
    /**
    * The URL of the OpenID identity provider that allows the API server to discover public signing keys for verifying tokens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config#issuer_url CcIdentityProviderConfig#issuer_url}
    */
    readonly issuerUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config#required_claims CcIdentityProviderConfig#required_claims}
    */
    readonly requiredClaims?: RequiredClaimProperty[] | cdktn.IResolvable;
    /**
    * The JSON Web Token (JWT) claim to use as the username. The default is sub, which is expected to be a unique identifier of the end user. You can choose other claims, such as email or name, depending on the OpenID identity provider. Claims other than email are prefixed with the issuer URL to prevent naming clashes with other plug-ins.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config#username_claim CcIdentityProviderConfig#username_claim}
    */
    readonly usernameClaim?: string;
    /**
    * The prefix that is prepended to username claims to prevent clashes with existing names. If you do not provide this field, and username is a value other than email, the prefix defaults to issuerurl#. You can use the value - to disable all prefixing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config#username_prefix CcIdentityProviderConfig#username_prefix}
    */
    readonly usernamePrefix?: string;
}
export class OidcIdentityProviderConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OidcIdentityProviderConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._groupsClaim !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupsClaim = this._groupsClaim;
        }
        if (this._groupsPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupsPrefix = this._groupsPrefix;
        }
        if (this._issuerUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.issuerUrl = this._issuerUrl;
        }
        if (this._requiredClaims?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.requiredClaims = this._requiredClaims?.internalValue;
        }
        if (this._usernameClaim !== undefined) {
            hasAnyValues = true;
            internalValueResult.usernameClaim = this._usernameClaim;
        }
        if (this._usernamePrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.usernamePrefix = this._usernamePrefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OidcIdentityProviderConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._groupsClaim = undefined;
            this._groupsPrefix = undefined;
            this._issuerUrl = undefined;
            this._requiredClaims.internalValue = undefined;
            this._usernameClaim = undefined;
            this._usernamePrefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientId = value.clientId;
            this._groupsClaim = value.groupsClaim;
            this._groupsPrefix = value.groupsPrefix;
            this._issuerUrl = value.issuerUrl;
            this._requiredClaims.internalValue = value.requiredClaims;
            this._usernameClaim = value.usernameClaim;
            this._usernamePrefix = value.usernamePrefix;
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

    // groups_claim - computed: true, optional: true, required: false
    private _groupsClaim?: string; 
    public get groupsClaim() {
        return this.getStringAttribute('groups_claim');
    }
    public set groupsClaim(value: string) {
        this._groupsClaim = value;
    }
    public resetGroupsClaim() {
        this._groupsClaim = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupsClaimInput() {
        return this._groupsClaim;
    }

    // groups_prefix - computed: true, optional: true, required: false
    private _groupsPrefix?: string; 
    public get groupsPrefix() {
        return this.getStringAttribute('groups_prefix');
    }
    public set groupsPrefix(value: string) {
        this._groupsPrefix = value;
    }
    public resetGroupsPrefix() {
        this._groupsPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupsPrefixInput() {
        return this._groupsPrefix;
    }

    // issuer_url - computed: true, optional: true, required: false
    private _issuerUrl?: string; 
    public get issuerUrl() {
        return this.getStringAttribute('issuer_url');
    }
    public set issuerUrl(value: string) {
        this._issuerUrl = value;
    }
    public resetIssuerUrl() {
        this._issuerUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get issuerUrlInput() {
        return this._issuerUrl;
    }

    // required_claims - computed: true, optional: true, required: false
    private _requiredClaims = new RequiredClaimPropertyList(this, "required_claims", true);
    public get requiredClaims() {
        return this._requiredClaims;
    }
    public putRequiredClaims(value: RequiredClaimProperty[] | cdktn.IResolvable) {
        this._requiredClaims.internalValue = value;
    }
    public resetRequiredClaims() {
        this._requiredClaims.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredClaimsInput() {
        return this._requiredClaims.internalValue;
    }

    // username_claim - computed: true, optional: true, required: false
    private _usernameClaim?: string; 
    public get usernameClaim() {
        return this.getStringAttribute('username_claim');
    }
    public set usernameClaim(value: string) {
        this._usernameClaim = value;
    }
    public resetUsernameClaim() {
        this._usernameClaim = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameClaimInput() {
        return this._usernameClaim;
    }

    // username_prefix - computed: true, optional: true, required: false
    private _usernamePrefix?: string; 
    public get usernamePrefix() {
        return this.getStringAttribute('username_prefix');
    }
    public set usernamePrefix(value: string) {
        this._usernamePrefix = value;
    }
    public resetUsernamePrefix() {
        this._usernamePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernamePrefixInput() {
        return this._usernamePrefix;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config#key CcIdentityProviderConfig#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_identity_provider_config#value CcIdentityProviderConfig#value}
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
