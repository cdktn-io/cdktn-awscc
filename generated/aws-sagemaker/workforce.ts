// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWorkforceProps extends cdktn.TerraformMetaArguments {
    /**
    * The configuration of an Amazon Cognito workforce. A single Cognito workforce is created using and corresponds to a single Amazon Cognito user pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#cognito_config CcWorkforce#cognito_config}
    */
    readonly cognitoConfig?: CcWorkforce.CognitoConfigProperty;
    /**
    * The IP address type for the workforce. IPv4 only or dualstack (IPv4 and IPv6).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#ip_address_type CcWorkforce#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * The configuration of an OIDC Identity Provider (IdP) private workforce.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#oidc_config CcWorkforce#oidc_config}
    */
    readonly oidcConfig?: CcWorkforce.OidcConfigProperty;
    /**
    * A list of IP address ranges used to access your training data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#source_ip_config CcWorkforce#source_ip_config}
    */
    readonly sourceIpConfig?: CcWorkforce.SourceIpConfigProperty;
    /**
    * An array of key-value pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#tags CcWorkforce#tags}
    */
    readonly tags?: CcWorkforce.TagProperty[] | cdktn.IResolvable;
    /**
    * The name of the private workforce.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#workforce_name CcWorkforce#workforce_name}
    */
    readonly workforceName: string;
    /**
    * The VPC configuration for the workforce.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#workforce_vpc_config CcWorkforce#workforce_vpc_config}
    */
    readonly workforceVpcConfig?: CcWorkforce.WorkforceVpcConfigRequestProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce awscc_sagemaker_workforce}
*/
export class CcWorkforce extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_workforce";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWorkforce resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWorkforce to import
    * @param importFromId The id of the existing CcWorkforce that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWorkforce to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_workforce", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce awscc_sagemaker_workforce} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWorkforceProps
    */
    public constructor(scope: Construct, id: string, config: CcWorkforceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_workforce',
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
        this._cognitoConfig.internalValue = config.cognitoConfig;
        this._ipAddressType = config.ipAddressType;
        this._oidcConfig.internalValue = config.oidcConfig;
        this._sourceIpConfig.internalValue = config.sourceIpConfig;
        this._tags.internalValue = config.tags;
        this._workforceName = config.workforceName;
        this._workforceVpcConfig.internalValue = config.workforceVpcConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cognito_config - computed: true, optional: true, required: false
    private _cognitoConfig = new CcWorkforce.CognitoConfigPropertyOutputReference(this, "cognito_config");
    public get cognitoConfig() {
        return this._cognitoConfig;
    }
    public putCognitoConfig(value: CcWorkforce.CognitoConfigProperty) {
        this._cognitoConfig.internalValue = value;
    }
    public resetCognitoConfig() {
        this._cognitoConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cognitoConfigInput() {
        return this._cognitoConfig.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ip_address_type - computed: true, optional: true, required: false
    private _ipAddressType?: string; 
    public get ipAddressType() {
        return this.getStringAttribute('ip_address_type');
    }
    public set ipAddressType(value: string) {
        this._ipAddressType = value;
    }
    public resetIpAddressType() {
        this._ipAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressTypeInput() {
        return this._ipAddressType;
    }

    // oidc_config - computed: true, optional: true, required: false
    private _oidcConfig = new CcWorkforce.OidcConfigPropertyOutputReference(this, "oidc_config");
    public get oidcConfig() {
        return this._oidcConfig;
    }
    public putOidcConfig(value: CcWorkforce.OidcConfigProperty) {
        this._oidcConfig.internalValue = value;
    }
    public resetOidcConfig() {
        this._oidcConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oidcConfigInput() {
        return this._oidcConfig.internalValue;
    }

    // source_ip_config - computed: true, optional: true, required: false
    private _sourceIpConfig = new CcWorkforce.SourceIpConfigPropertyOutputReference(this, "source_ip_config");
    public get sourceIpConfig() {
        return this._sourceIpConfig;
    }
    public putSourceIpConfig(value: CcWorkforce.SourceIpConfigProperty) {
        this._sourceIpConfig.internalValue = value;
    }
    public resetSourceIpConfig() {
        this._sourceIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceIpConfigInput() {
        return this._sourceIpConfig.internalValue;
    }

    // sub_domain - computed: true, optional: false, required: false
    public get subDomain() {
        return this.getStringAttribute('sub_domain');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcWorkforce.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcWorkforce.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // workforce_arn - computed: true, optional: false, required: false
    public get workforceArn() {
        return this.getStringAttribute('workforce_arn');
    }

    // workforce_name - computed: false, optional: false, required: true
    private _workforceName?: string; 
    public get workforceName() {
        return this.getStringAttribute('workforce_name');
    }
    public set workforceName(value: string) {
        this._workforceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get workforceNameInput() {
        return this._workforceName;
    }

    // workforce_vpc_config - computed: true, optional: true, required: false
    private _workforceVpcConfig = new CcWorkforce.WorkforceVpcConfigRequestPropertyOutputReference(this, "workforce_vpc_config");
    public get workforceVpcConfig() {
        return this._workforceVpcConfig;
    }
    public putWorkforceVpcConfig(value: CcWorkforce.WorkforceVpcConfigRequestProperty) {
        this._workforceVpcConfig.internalValue = value;
    }
    public resetWorkforceVpcConfig() {
        this._workforceVpcConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workforceVpcConfigInput() {
        return this._workforceVpcConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cognito_config: ccWorkforceCognitoConfigPropertyToTerraform(this._cognitoConfig.internalValue),
            ip_address_type: cdktn.stringToTerraform(this._ipAddressType),
            oidc_config: ccWorkforceOidcConfigPropertyToTerraform(this._oidcConfig.internalValue),
            source_ip_config: ccWorkforceSourceIpConfigPropertyToTerraform(this._sourceIpConfig.internalValue),
            tags: cdktn.listMapper(ccWorkforceTagPropertyToTerraform, false)(this._tags.internalValue),
            workforce_name: cdktn.stringToTerraform(this._workforceName),
            workforce_vpc_config: ccWorkforceWorkforceVpcConfigRequestPropertyToTerraform(this._workforceVpcConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cognito_config: {
                value: ccWorkforceCognitoConfigPropertyToHclTerraform(this._cognitoConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWorkforce.CognitoConfigProperty",
            },
            ip_address_type: {
                value: cdktn.stringToHclTerraform(this._ipAddressType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            oidc_config: {
                value: ccWorkforceOidcConfigPropertyToHclTerraform(this._oidcConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWorkforce.OidcConfigProperty",
            },
            source_ip_config: {
                value: ccWorkforceSourceIpConfigPropertyToHclTerraform(this._sourceIpConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWorkforce.SourceIpConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccWorkforceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcWorkforce.TagPropertyList",
            },
            workforce_name: {
                value: cdktn.stringToHclTerraform(this._workforceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            workforce_vpc_config: {
                value: ccWorkforceWorkforceVpcConfigRequestPropertyToHclTerraform(this._workforceVpcConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWorkforce.WorkforceVpcConfigRequestProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccWorkforceCognitoConfigPropertyToTerraform(struct?: CcWorkforce.CognitoConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: cdktn.stringToTerraform(struct!.clientId),
        user_pool: cdktn.stringToTerraform(struct!.userPool),
    }
}


export function ccWorkforceCognitoConfigPropertyToHclTerraform(struct?: CcWorkforce.CognitoConfigProperty | cdktn.IResolvable): any {
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
        user_pool: {
            value: cdktn.stringToHclTerraform(struct!.userPool),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkforceOidcConfigPropertyToTerraform(struct?: CcWorkforce.OidcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_request_extra_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.authenticationRequestExtraParams),
        authorization_endpoint: cdktn.stringToTerraform(struct!.authorizationEndpoint),
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        issuer: cdktn.stringToTerraform(struct!.issuer),
        jwks_uri: cdktn.stringToTerraform(struct!.jwksUri),
        logout_endpoint: cdktn.stringToTerraform(struct!.logoutEndpoint),
        scope: cdktn.stringToTerraform(struct!.scope),
        token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
        user_info_endpoint: cdktn.stringToTerraform(struct!.userInfoEndpoint),
    }
}


export function ccWorkforceOidcConfigPropertyToHclTerraform(struct?: CcWorkforce.OidcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authentication_request_extra_params: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.authenticationRequestExtraParams),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
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
        jwks_uri: {
            value: cdktn.stringToHclTerraform(struct!.jwksUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        logout_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.logoutEndpoint),
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


export function ccWorkforceSourceIpConfigPropertyToTerraform(struct?: CcWorkforce.SourceIpConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cidrs),
    }
}


export function ccWorkforceSourceIpConfigPropertyToHclTerraform(struct?: CcWorkforce.SourceIpConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidrs: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cidrs),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkforceTagPropertyToTerraform(struct?: CcWorkforce.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWorkforceTagPropertyToHclTerraform(struct?: CcWorkforce.TagProperty | cdktn.IResolvable): any {
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


export function ccWorkforceWorkforceVpcConfigRequestPropertyToTerraform(struct?: CcWorkforce.WorkforceVpcConfigRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
        vpc_id: cdktn.stringToTerraform(struct!.vpcId),
    }
}


export function ccWorkforceWorkforceVpcConfigRequestPropertyToHclTerraform(struct?: CcWorkforce.WorkforceVpcConfigRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        vpc_id: {
            value: cdktn.stringToHclTerraform(struct!.vpcId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcWorkforce {
export interface CognitoConfigProperty {
    /**
    * The client ID for your Amazon Cognito user pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#client_id CcWorkforce#client_id}
    */
    readonly clientId?: string;
    /**
    * The ID for your Amazon Cognito user pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#user_pool CcWorkforce#user_pool}
    */
    readonly userPool?: string;
}
export class CognitoConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CognitoConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._userPool !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPool = this._userPool;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CognitoConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._userPool = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientId = value.clientId;
            this._userPool = value.userPool;
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

    // user_pool - computed: true, optional: true, required: false
    private _userPool?: string; 
    public get userPool() {
        return this.getStringAttribute('user_pool');
    }
    public set userPool(value: string) {
        this._userPool = value;
    }
    public resetUserPool() {
        this._userPool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolInput() {
        return this._userPool;
    }
}
export interface OidcConfigProperty {
    /**
    * A string to string map of identifiers specific to the custom identity provider (IdP) being used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#authentication_request_extra_params CcWorkforce#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: { [key: string]: string };
    /**
    * The OIDC IdP authorization endpoint used to configure your private workforce.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#authorization_endpoint CcWorkforce#authorization_endpoint}
    */
    readonly authorizationEndpoint?: string;
    /**
    * The OIDC IdP client ID used to configure your private workforce.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#client_id CcWorkforce#client_id}
    */
    readonly clientId?: string;
    /**
    * The OIDC IdP client secret used to configure your private workforce.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#client_secret CcWorkforce#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * The OIDC IdP issuer used to configure your private workforce.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#issuer CcWorkforce#issuer}
    */
    readonly issuer?: string;
    /**
    * The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#jwks_uri CcWorkforce#jwks_uri}
    */
    readonly jwksUri?: string;
    /**
    * The OIDC IdP logout endpoint used to configure your private workforce.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#logout_endpoint CcWorkforce#logout_endpoint}
    */
    readonly logoutEndpoint?: string;
    /**
    * An array of string identifiers used to refer to the specific pieces of user data or claims that the client application wants to access.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#scope CcWorkforce#scope}
    */
    readonly scope?: string;
    /**
    * The OIDC IdP token endpoint used to configure your private workforce.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#token_endpoint CcWorkforce#token_endpoint}
    */
    readonly tokenEndpoint?: string;
    /**
    * The OIDC IdP user info endpoint used to configure your private workforce.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#user_info_endpoint CcWorkforce#user_info_endpoint}
    */
    readonly userInfoEndpoint?: string;
}
export class OidcConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OidcConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationRequestExtraParams !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
        }
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
        if (this._jwksUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.jwksUri = this._jwksUri;
        }
        if (this._logoutEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.logoutEndpoint = this._logoutEndpoint;
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

    public set internalValue(value: OidcConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationRequestExtraParams = undefined;
            this._authorizationEndpoint = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._issuer = undefined;
            this._jwksUri = undefined;
            this._logoutEndpoint = undefined;
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
            this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
            this._authorizationEndpoint = value.authorizationEndpoint;
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
            this._issuer = value.issuer;
            this._jwksUri = value.jwksUri;
            this._logoutEndpoint = value.logoutEndpoint;
            this._scope = value.scope;
            this._tokenEndpoint = value.tokenEndpoint;
            this._userInfoEndpoint = value.userInfoEndpoint;
        }
    }

    // authentication_request_extra_params - computed: true, optional: true, required: false
    private _authenticationRequestExtraParams?: { [key: string]: string }; 
    public get authenticationRequestExtraParams() {
        return this.getStringMapAttribute('authentication_request_extra_params');
    }
    public set authenticationRequestExtraParams(value: { [key: string]: string }) {
        this._authenticationRequestExtraParams = value;
    }
    public resetAuthenticationRequestExtraParams() {
        this._authenticationRequestExtraParams = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationRequestExtraParamsInput() {
        return this._authenticationRequestExtraParams;
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

    // jwks_uri - computed: true, optional: true, required: false
    private _jwksUri?: string; 
    public get jwksUri() {
        return this.getStringAttribute('jwks_uri');
    }
    public set jwksUri(value: string) {
        this._jwksUri = value;
    }
    public resetJwksUri() {
        this._jwksUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jwksUriInput() {
        return this._jwksUri;
    }

    // logout_endpoint - computed: true, optional: true, required: false
    private _logoutEndpoint?: string; 
    public get logoutEndpoint() {
        return this.getStringAttribute('logout_endpoint');
    }
    public set logoutEndpoint(value: string) {
        this._logoutEndpoint = value;
    }
    public resetLogoutEndpoint() {
        this._logoutEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logoutEndpointInput() {
        return this._logoutEndpoint;
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
export interface SourceIpConfigProperty {
    /**
    * A list of one to ten Classless Inter-Domain Routing (CIDR) values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#cidrs CcWorkforce#cidrs}
    */
    readonly cidrs?: string[];
}
export class SourceIpConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceIpConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidrs !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidrs = this._cidrs;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceIpConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidrs = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidrs = value.cidrs;
        }
    }

    // cidrs - computed: true, optional: true, required: false
    private _cidrs?: string[]; 
    public get cidrs() {
        return this.getListAttribute('cidrs');
    }
    public set cidrs(value: string[]) {
        this._cidrs = value;
    }
    public resetCidrs() {
        this._cidrs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrsInput() {
        return this._cidrs;
    }
}
export interface TagProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#key CcWorkforce#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#value CcWorkforce#value}
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
export interface WorkforceVpcConfigRequestProperty {
    /**
    * The VPC security group IDs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#security_group_ids CcWorkforce#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The VPC subnets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#subnets CcWorkforce#subnets}
    */
    readonly subnets?: string[];
    /**
    * The ID of the VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_workforce#vpc_id CcWorkforce#vpc_id}
    */
    readonly vpcId?: string;
}
export class WorkforceVpcConfigRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkforceVpcConfigRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        if (this._vpcId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcId = this._vpcId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkforceVpcConfigRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIds = undefined;
            this._subnets = undefined;
            this._vpcId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIds = value.securityGroupIds;
            this._subnets = value.subnets;
            this._vpcId = value.vpcId;
        }
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnets - computed: true, optional: true, required: false
    private _subnets?: string[]; 
    public get subnets() {
        return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    public resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }

    // vpc_id - computed: true, optional: true, required: false
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    public resetVpcId() {
        this._vpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
        return this._vpcId;
    }
}
}
