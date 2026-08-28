// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcListenerProps extends cdktn.TerraformMetaArguments {
    /**
    * [TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#alpn_policy CcListener#alpn_policy}
    */
    readonly alpnPolicy?: string[];
    /**
    * The default SSL server certificate for a secure listener. You must provide exactly one certificate if the listener protocol is HTTPS or TLS.
    *  For an HTTPS listener, update requires some interruptions. For a TLS listener, update requires no interruption.
    *  To create a certificate list for a secure listener, use [AWS::ElasticLoadBalancingV2::ListenerCertificate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#certificates CcListener#certificates}
    */
    readonly certificates?: CcListener.CertificateProperty[] | cdktn.IResolvable;
    /**
    * The actions for the default rule. You cannot define a condition for a default rule.
    *  To create additional rules for an Application Load Balancer, use [AWS::ElasticLoadBalancingV2::ListenerRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#default_actions CcListener#default_actions}
    */
    readonly defaultActions: CcListener.ActionProperty[] | cdktn.IResolvable;
    /**
    * The listener attributes. Attributes that you do not modify retain their current values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#listener_attributes CcListener#listener_attributes}
    */
    readonly listenerAttributes?: CcListener.ListenerAttributeProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#load_balancer_arn CcListener#load_balancer_arn}
    */
    readonly loadBalancerArn: string;
    /**
    * The mutual authentication configuration information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#mutual_authentication CcListener#mutual_authentication}
    */
    readonly mutualAuthentication?: CcListener.MutualAuthenticationProperty;
    /**
    * The port on which the load balancer is listening. You can't specify a port for a Gateway Load Balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#port CcListener#port}
    */
    readonly port?: number;
    /**
    * The protocol for connections from clients to the load balancer. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, TCP_UDP, QUIC, and TCP_QUIC. You can’t specify the UDP, TCP_UDP, QUIC, or TCP_QUIC protocol if dual-stack mode is enabled. You can't specify a protocol for a Gateway Load Balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#protocol CcListener#protocol}
    */
    readonly protocol?: string;
    /**
    * [HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported. For more information, see [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/describe-ssl-policies.html) in the *Application Load Balancers Guide* and [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/describe-ssl-policies.html) in the *Network Load Balancers Guide*.
    *  [HTTPS listeners] Updating the security policy can result in interruptions if the load balancer is handling a high volume of traffic. To decrease the possibility of an interruption if your load balancer is handling a high volume of traffic, create an additional load balancer or request an LCU reservation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#ssl_policy CcListener#ssl_policy}
    */
    readonly sslPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#tags CcListener#tags}
    */
    readonly tags?: CcListener.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener awscc_elasticloadbalancingv2_listener}
*/
export class CcListener extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_elasticloadbalancingv2_listener";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcListener resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcListener to import
    * @param importFromId The id of the existing CcListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcListener to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticloadbalancingv2_listener", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener awscc_elasticloadbalancingv2_listener} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcListenerProps
    */
    public constructor(scope: Construct, id: string, config: CcListenerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_elasticloadbalancingv2_listener',
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
        this._alpnPolicy = config.alpnPolicy;
        this._certificates.internalValue = config.certificates;
        this._defaultActions.internalValue = config.defaultActions;
        this._listenerAttributes.internalValue = config.listenerAttributes;
        this._loadBalancerArn = config.loadBalancerArn;
        this._mutualAuthentication.internalValue = config.mutualAuthentication;
        this._port = config.port;
        this._protocol = config.protocol;
        this._sslPolicy = config.sslPolicy;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alpn_policy - computed: true, optional: true, required: false
    private _alpnPolicy?: string[]; 
    public get alpnPolicy() {
        return this.getListAttribute('alpn_policy');
    }
    public set alpnPolicy(value: string[]) {
        this._alpnPolicy = value;
    }
    public resetAlpnPolicy() {
        this._alpnPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alpnPolicyInput() {
        return this._alpnPolicy;
    }

    // certificates - computed: true, optional: true, required: false
    private _certificates = new CcListener.CertificatePropertyList(this, "certificates", false);
    public get certificates() {
        return this._certificates;
    }
    public putCertificates(value: CcListener.CertificateProperty[] | cdktn.IResolvable) {
        this._certificates.internalValue = value;
    }
    public resetCertificates() {
        this._certificates.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificatesInput() {
        return this._certificates.internalValue;
    }

    // default_actions - computed: false, optional: false, required: true
    private _defaultActions = new CcListener.ActionPropertyList(this, "default_actions", false);
    public get defaultActions() {
        return this._defaultActions;
    }
    public putDefaultActions(value: CcListener.ActionProperty[] | cdktn.IResolvable) {
        this._defaultActions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultActionsInput() {
        return this._defaultActions.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // listener_arn - computed: true, optional: false, required: false
    public get listenerArn() {
        return this.getStringAttribute('listener_arn');
    }

    // listener_attributes - computed: true, optional: true, required: false
    private _listenerAttributes = new CcListener.ListenerAttributePropertyList(this, "listener_attributes", true);
    public get listenerAttributes() {
        return this._listenerAttributes;
    }
    public putListenerAttributes(value: CcListener.ListenerAttributeProperty[] | cdktn.IResolvable) {
        this._listenerAttributes.internalValue = value;
    }
    public resetListenerAttributes() {
        this._listenerAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get listenerAttributesInput() {
        return this._listenerAttributes.internalValue;
    }

    // load_balancer_arn - computed: false, optional: false, required: true
    private _loadBalancerArn?: string; 
    public get loadBalancerArn() {
        return this.getStringAttribute('load_balancer_arn');
    }
    public set loadBalancerArn(value: string) {
        this._loadBalancerArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerArnInput() {
        return this._loadBalancerArn;
    }

    // mutual_authentication - computed: true, optional: true, required: false
    private _mutualAuthentication = new CcListener.MutualAuthenticationPropertyOutputReference(this, "mutual_authentication");
    public get mutualAuthentication() {
        return this._mutualAuthentication;
    }
    public putMutualAuthentication(value: CcListener.MutualAuthenticationProperty) {
        this._mutualAuthentication.internalValue = value;
    }
    public resetMutualAuthentication() {
        this._mutualAuthentication.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mutualAuthenticationInput() {
        return this._mutualAuthentication.internalValue;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // ssl_policy - computed: true, optional: true, required: false
    private _sslPolicy?: string; 
    public get sslPolicy() {
        return this.getStringAttribute('ssl_policy');
    }
    public set sslPolicy(value: string) {
        this._sslPolicy = value;
    }
    public resetSslPolicy() {
        this._sslPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslPolicyInput() {
        return this._sslPolicy;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcListener.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcListener.TagProperty[] | cdktn.IResolvable) {
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
            alpn_policy: cdktn.listMapper(cdktn.stringToTerraform, false)(this._alpnPolicy),
            certificates: cdktn.listMapper(ccListenerCertificatePropertyToTerraform, false)(this._certificates.internalValue),
            default_actions: cdktn.listMapper(ccListenerActionPropertyToTerraform, false)(this._defaultActions.internalValue),
            listener_attributes: cdktn.listMapper(ccListenerListenerAttributePropertyToTerraform, false)(this._listenerAttributes.internalValue),
            load_balancer_arn: cdktn.stringToTerraform(this._loadBalancerArn),
            mutual_authentication: ccListenerMutualAuthenticationPropertyToTerraform(this._mutualAuthentication.internalValue),
            port: cdktn.numberToTerraform(this._port),
            protocol: cdktn.stringToTerraform(this._protocol),
            ssl_policy: cdktn.stringToTerraform(this._sslPolicy),
            tags: cdktn.listMapper(ccListenerTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            alpn_policy: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._alpnPolicy),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            certificates: {
                value: cdktn.listMapperHcl(ccListenerCertificatePropertyToHclTerraform, false)(this._certificates.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcListener.CertificatePropertyList",
            },
            default_actions: {
                value: cdktn.listMapperHcl(ccListenerActionPropertyToHclTerraform, false)(this._defaultActions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcListener.ActionPropertyList",
            },
            listener_attributes: {
                value: cdktn.listMapperHcl(ccListenerListenerAttributePropertyToHclTerraform, false)(this._listenerAttributes.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcListener.ListenerAttributePropertyList",
            },
            load_balancer_arn: {
                value: cdktn.stringToHclTerraform(this._loadBalancerArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            mutual_authentication: {
                value: ccListenerMutualAuthenticationPropertyToHclTerraform(this._mutualAuthentication.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcListener.MutualAuthenticationProperty",
            },
            port: {
                value: cdktn.numberToHclTerraform(this._port),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            protocol: {
                value: cdktn.stringToHclTerraform(this._protocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ssl_policy: {
                value: cdktn.stringToHclTerraform(this._sslPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccListenerTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcListener.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccListenerCertificatePropertyToTerraform(struct?: CcListener.CertificateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
    }
}


export function ccListenerCertificatePropertyToHclTerraform(struct?: CcListener.CertificateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.certificateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerAuthenticateCognitoConfigPropertyToTerraform(struct?: CcListener.AuthenticateCognitoConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_request_extra_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.authenticationRequestExtraParams),
        on_unauthenticated_request: cdktn.stringToTerraform(struct!.onUnauthenticatedRequest),
        scope: cdktn.stringToTerraform(struct!.scope),
        session_cookie_name: cdktn.stringToTerraform(struct!.sessionCookieName),
        session_timeout: cdktn.stringToTerraform(struct!.sessionTimeout),
        user_pool_arn: cdktn.stringToTerraform(struct!.userPoolArn),
        user_pool_client_id: cdktn.stringToTerraform(struct!.userPoolClientId),
        user_pool_domain: cdktn.stringToTerraform(struct!.userPoolDomain),
    }
}


export function ccListenerAuthenticateCognitoConfigPropertyToHclTerraform(struct?: CcListener.AuthenticateCognitoConfigProperty | cdktn.IResolvable): any {
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
        on_unauthenticated_request: {
            value: cdktn.stringToHclTerraform(struct!.onUnauthenticatedRequest),
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
        session_cookie_name: {
            value: cdktn.stringToHclTerraform(struct!.sessionCookieName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_timeout: {
            value: cdktn.stringToHclTerraform(struct!.sessionTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_pool_arn: {
            value: cdktn.stringToHclTerraform(struct!.userPoolArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_pool_client_id: {
            value: cdktn.stringToHclTerraform(struct!.userPoolClientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_pool_domain: {
            value: cdktn.stringToHclTerraform(struct!.userPoolDomain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerAuthenticateOidcConfigPropertyToTerraform(struct?: CcListener.AuthenticateOidcConfigProperty | cdktn.IResolvable): any {
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
        on_unauthenticated_request: cdktn.stringToTerraform(struct!.onUnauthenticatedRequest),
        scope: cdktn.stringToTerraform(struct!.scope),
        session_cookie_name: cdktn.stringToTerraform(struct!.sessionCookieName),
        session_timeout: cdktn.stringToTerraform(struct!.sessionTimeout),
        token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
        use_existing_client_secret: cdktn.booleanToTerraform(struct!.useExistingClientSecret),
        user_info_endpoint: cdktn.stringToTerraform(struct!.userInfoEndpoint),
    }
}


export function ccListenerAuthenticateOidcConfigPropertyToHclTerraform(struct?: CcListener.AuthenticateOidcConfigProperty | cdktn.IResolvable): any {
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
        on_unauthenticated_request: {
            value: cdktn.stringToHclTerraform(struct!.onUnauthenticatedRequest),
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
        session_cookie_name: {
            value: cdktn.stringToHclTerraform(struct!.sessionCookieName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_timeout: {
            value: cdktn.stringToHclTerraform(struct!.sessionTimeout),
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
        use_existing_client_secret: {
            value: cdktn.booleanToHclTerraform(struct!.useExistingClientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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


export function ccListenerFixedResponseConfigPropertyToTerraform(struct?: CcListener.FixedResponseConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_type: cdktn.stringToTerraform(struct!.contentType),
        message_body: cdktn.stringToTerraform(struct!.messageBody),
        status_code: cdktn.stringToTerraform(struct!.statusCode),
    }
}


export function ccListenerFixedResponseConfigPropertyToHclTerraform(struct?: CcListener.FixedResponseConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_body: {
            value: cdktn.stringToHclTerraform(struct!.messageBody),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status_code: {
            value: cdktn.stringToHclTerraform(struct!.statusCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerTargetGroupStickinessConfigPropertyToTerraform(struct?: CcListener.TargetGroupStickinessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        duration_seconds: cdktn.numberToTerraform(struct!.durationSeconds),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccListenerTargetGroupStickinessConfigPropertyToHclTerraform(struct?: CcListener.TargetGroupStickinessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        duration_seconds: {
            value: cdktn.numberToHclTerraform(struct!.durationSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerTargetGroupTuplePropertyToTerraform(struct?: CcListener.TargetGroupTupleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_group_arn: cdktn.stringToTerraform(struct!.targetGroupArn),
        weight: cdktn.numberToTerraform(struct!.weight),
    }
}


export function ccListenerTargetGroupTuplePropertyToHclTerraform(struct?: CcListener.TargetGroupTupleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weight: {
            value: cdktn.numberToHclTerraform(struct!.weight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerForwardConfigPropertyToTerraform(struct?: CcListener.ForwardConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_group_stickiness_config: ccListenerTargetGroupStickinessConfigPropertyToTerraform(struct!.targetGroupStickinessConfig),
        target_groups: cdktn.listMapper(ccListenerTargetGroupTuplePropertyToTerraform, false)(struct!.targetGroups),
    }
}


export function ccListenerForwardConfigPropertyToHclTerraform(struct?: CcListener.ForwardConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_group_stickiness_config: {
            value: ccListenerTargetGroupStickinessConfigPropertyToHclTerraform(struct!.targetGroupStickinessConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "TargetGroupStickinessConfigProperty",
        },
        target_groups: {
            value: cdktn.listMapperHcl(ccListenerTargetGroupTuplePropertyToHclTerraform, false)(struct!.targetGroups),
            isBlock: true,
            type: "list",
            storageClassType: "TargetGroupTuplePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerJwtValidationActionAdditionalClaimPropertyToTerraform(struct?: CcListener.JwtValidationActionAdditionalClaimProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        format: cdktn.stringToTerraform(struct!.format),
        name: cdktn.stringToTerraform(struct!.name),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccListenerJwtValidationActionAdditionalClaimPropertyToHclTerraform(struct?: CcListener.JwtValidationActionAdditionalClaimProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        format: {
            value: cdktn.stringToHclTerraform(struct!.format),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerJwtValidationConfigPropertyToTerraform(struct?: CcListener.JwtValidationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_claims: cdktn.listMapper(ccListenerJwtValidationActionAdditionalClaimPropertyToTerraform, false)(struct!.additionalClaims),
        issuer: cdktn.stringToTerraform(struct!.issuer),
        jwks_endpoint: cdktn.stringToTerraform(struct!.jwksEndpoint),
    }
}


export function ccListenerJwtValidationConfigPropertyToHclTerraform(struct?: CcListener.JwtValidationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_claims: {
            value: cdktn.listMapperHcl(ccListenerJwtValidationActionAdditionalClaimPropertyToHclTerraform, false)(struct!.additionalClaims),
            isBlock: true,
            type: "list",
            storageClassType: "JwtValidationActionAdditionalClaimPropertyList",
        },
        issuer: {
            value: cdktn.stringToHclTerraform(struct!.issuer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        jwks_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.jwksEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerRedirectConfigPropertyToTerraform(struct?: CcListener.RedirectConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        host: cdktn.stringToTerraform(struct!.host),
        path: cdktn.stringToTerraform(struct!.path),
        port: cdktn.stringToTerraform(struct!.port),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        query: cdktn.stringToTerraform(struct!.query),
        status_code: cdktn.stringToTerraform(struct!.statusCode),
    }
}


export function ccListenerRedirectConfigPropertyToHclTerraform(struct?: CcListener.RedirectConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.stringToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        query: {
            value: cdktn.stringToHclTerraform(struct!.query),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status_code: {
            value: cdktn.stringToHclTerraform(struct!.statusCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerActionPropertyToTerraform(struct?: CcListener.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authenticate_cognito_config: ccListenerAuthenticateCognitoConfigPropertyToTerraform(struct!.authenticateCognitoConfig),
        authenticate_oidc_config: ccListenerAuthenticateOidcConfigPropertyToTerraform(struct!.authenticateOidcConfig),
        fixed_response_config: ccListenerFixedResponseConfigPropertyToTerraform(struct!.fixedResponseConfig),
        forward_config: ccListenerForwardConfigPropertyToTerraform(struct!.forwardConfig),
        jwt_validation_config: ccListenerJwtValidationConfigPropertyToTerraform(struct!.jwtValidationConfig),
        order: cdktn.numberToTerraform(struct!.order),
        redirect_config: ccListenerRedirectConfigPropertyToTerraform(struct!.redirectConfig),
        target_group_arn: cdktn.stringToTerraform(struct!.targetGroupArn),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccListenerActionPropertyToHclTerraform(struct?: CcListener.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authenticate_cognito_config: {
            value: ccListenerAuthenticateCognitoConfigPropertyToHclTerraform(struct!.authenticateCognitoConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthenticateCognitoConfigProperty",
        },
        authenticate_oidc_config: {
            value: ccListenerAuthenticateOidcConfigPropertyToHclTerraform(struct!.authenticateOidcConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthenticateOidcConfigProperty",
        },
        fixed_response_config: {
            value: ccListenerFixedResponseConfigPropertyToHclTerraform(struct!.fixedResponseConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "FixedResponseConfigProperty",
        },
        forward_config: {
            value: ccListenerForwardConfigPropertyToHclTerraform(struct!.forwardConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ForwardConfigProperty",
        },
        jwt_validation_config: {
            value: ccListenerJwtValidationConfigPropertyToHclTerraform(struct!.jwtValidationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "JwtValidationConfigProperty",
        },
        order: {
            value: cdktn.numberToHclTerraform(struct!.order),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        redirect_config: {
            value: ccListenerRedirectConfigPropertyToHclTerraform(struct!.redirectConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "RedirectConfigProperty",
        },
        target_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerListenerAttributePropertyToTerraform(struct?: CcListener.ListenerAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccListenerListenerAttributePropertyToHclTerraform(struct?: CcListener.ListenerAttributeProperty | cdktn.IResolvable): any {
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


export function ccListenerMutualAuthenticationPropertyToTerraform(struct?: CcListener.MutualAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        advertise_trust_store_ca_names: cdktn.stringToTerraform(struct!.advertiseTrustStoreCaNames),
        ignore_client_certificate_expiry: cdktn.booleanToTerraform(struct!.ignoreClientCertificateExpiry),
        mode: cdktn.stringToTerraform(struct!.mode),
        trust_store_arn: cdktn.stringToTerraform(struct!.trustStoreArn),
    }
}


export function ccListenerMutualAuthenticationPropertyToHclTerraform(struct?: CcListener.MutualAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        advertise_trust_store_ca_names: {
            value: cdktn.stringToHclTerraform(struct!.advertiseTrustStoreCaNames),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ignore_client_certificate_expiry: {
            value: cdktn.booleanToHclTerraform(struct!.ignoreClientCertificateExpiry),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        trust_store_arn: {
            value: cdktn.stringToHclTerraform(struct!.trustStoreArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccListenerTagPropertyToTerraform(struct?: CcListener.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccListenerTagPropertyToHclTerraform(struct?: CcListener.TagProperty | cdktn.IResolvable): any {
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


export namespace CcListener {
export interface CertificateProperty {
    /**
    * The Amazon Resource Name (ARN) of the certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#certificate_arn CcListener#certificate_arn}
    */
    readonly certificateArn?: string;
}
export class CertificatePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CertificateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateArn = this._certificateArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CertificateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateArn = value.certificateArn;
        }
    }

    // certificate_arn - computed: true, optional: true, required: false
    private _certificateArn?: string; 
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
        this._certificateArn = value;
    }
    public resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
        return this._certificateArn;
    }
}

export class CertificatePropertyList extends cdktn.ComplexList {
    public internalValue? : CertificateProperty[] | cdktn.IResolvable

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
    public get(index: number): CertificatePropertyOutputReference {
        return new CertificatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AuthenticateCognitoConfigProperty {
    /**
    * The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#authentication_request_extra_params CcListener#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: { [key: string]: string };
    /**
    * The behavior if the user is not authenticated. The following are possible values:
    *   +  deny```` - Return an HTTP 401 Unauthorized error.
    *   +  allow```` - Allow the request to be forwarded to the target.
    *   +  authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#on_unauthenticated_request CcListener#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * The set of user claims to be requested from the IdP. The default is ``openid``.
    *  To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#scope CcListener#scope}
    */
    readonly scope?: string;
    /**
    * The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#session_cookie_name CcListener#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#session_timeout CcListener#session_timeout}
    */
    readonly sessionTimeout?: string;
    /**
    * The Amazon Resource Name (ARN) of the Amazon Cognito user pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#user_pool_arn CcListener#user_pool_arn}
    */
    readonly userPoolArn?: string;
    /**
    * The ID of the Amazon Cognito user pool client.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#user_pool_client_id CcListener#user_pool_client_id}
    */
    readonly userPoolClientId?: string;
    /**
    * The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#user_pool_domain CcListener#user_pool_domain}
    */
    readonly userPoolDomain?: string;
}
export class AuthenticateCognitoConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthenticateCognitoConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationRequestExtraParams !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
        }
        if (this._onUnauthenticatedRequest !== undefined) {
            hasAnyValues = true;
            internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
        }
        if (this._scope !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        if (this._sessionCookieName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionCookieName = this._sessionCookieName;
        }
        if (this._sessionTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionTimeout = this._sessionTimeout;
        }
        if (this._userPoolArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPoolArn = this._userPoolArn;
        }
        if (this._userPoolClientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPoolClientId = this._userPoolClientId;
        }
        if (this._userPoolDomain !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPoolDomain = this._userPoolDomain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthenticateCognitoConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationRequestExtraParams = undefined;
            this._onUnauthenticatedRequest = undefined;
            this._scope = undefined;
            this._sessionCookieName = undefined;
            this._sessionTimeout = undefined;
            this._userPoolArn = undefined;
            this._userPoolClientId = undefined;
            this._userPoolDomain = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
            this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
            this._scope = value.scope;
            this._sessionCookieName = value.sessionCookieName;
            this._sessionTimeout = value.sessionTimeout;
            this._userPoolArn = value.userPoolArn;
            this._userPoolClientId = value.userPoolClientId;
            this._userPoolDomain = value.userPoolDomain;
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

    // on_unauthenticated_request - computed: true, optional: true, required: false
    private _onUnauthenticatedRequest?: string; 
    public get onUnauthenticatedRequest() {
        return this.getStringAttribute('on_unauthenticated_request');
    }
    public set onUnauthenticatedRequest(value: string) {
        this._onUnauthenticatedRequest = value;
    }
    public resetOnUnauthenticatedRequest() {
        this._onUnauthenticatedRequest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onUnauthenticatedRequestInput() {
        return this._onUnauthenticatedRequest;
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

    // session_cookie_name - computed: true, optional: true, required: false
    private _sessionCookieName?: string; 
    public get sessionCookieName() {
        return this.getStringAttribute('session_cookie_name');
    }
    public set sessionCookieName(value: string) {
        this._sessionCookieName = value;
    }
    public resetSessionCookieName() {
        this._sessionCookieName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionCookieNameInput() {
        return this._sessionCookieName;
    }

    // session_timeout - computed: true, optional: true, required: false
    private _sessionTimeout?: string; 
    public get sessionTimeout() {
        return this.getStringAttribute('session_timeout');
    }
    public set sessionTimeout(value: string) {
        this._sessionTimeout = value;
    }
    public resetSessionTimeout() {
        this._sessionTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionTimeoutInput() {
        return this._sessionTimeout;
    }

    // user_pool_arn - computed: true, optional: true, required: false
    private _userPoolArn?: string; 
    public get userPoolArn() {
        return this.getStringAttribute('user_pool_arn');
    }
    public set userPoolArn(value: string) {
        this._userPoolArn = value;
    }
    public resetUserPoolArn() {
        this._userPoolArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolArnInput() {
        return this._userPoolArn;
    }

    // user_pool_client_id - computed: true, optional: true, required: false
    private _userPoolClientId?: string; 
    public get userPoolClientId() {
        return this.getStringAttribute('user_pool_client_id');
    }
    public set userPoolClientId(value: string) {
        this._userPoolClientId = value;
    }
    public resetUserPoolClientId() {
        this._userPoolClientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolClientIdInput() {
        return this._userPoolClientId;
    }

    // user_pool_domain - computed: true, optional: true, required: false
    private _userPoolDomain?: string; 
    public get userPoolDomain() {
        return this.getStringAttribute('user_pool_domain');
    }
    public set userPoolDomain(value: string) {
        this._userPoolDomain = value;
    }
    public resetUserPoolDomain() {
        this._userPoolDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolDomainInput() {
        return this._userPoolDomain;
    }
}
export interface AuthenticateOidcConfigProperty {
    /**
    * The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#authentication_request_extra_params CcListener#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: { [key: string]: string };
    /**
    * The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#authorization_endpoint CcListener#authorization_endpoint}
    */
    readonly authorizationEndpoint?: string;
    /**
    * The OAuth 2.0 client identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#client_id CcListener#client_id}
    */
    readonly clientId?: string;
    /**
    * The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#client_secret CcListener#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#issuer CcListener#issuer}
    */
    readonly issuer?: string;
    /**
    * The behavior if the user is not authenticated. The following are possible values:
    *   +  deny```` - Return an HTTP 401 Unauthorized error.
    *   +  allow```` - Allow the request to be forwarded to the target.
    *   +  authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#on_unauthenticated_request CcListener#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * The set of user claims to be requested from the IdP. The default is ``openid``.
    *  To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#scope CcListener#scope}
    */
    readonly scope?: string;
    /**
    * The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#session_cookie_name CcListener#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#session_timeout CcListener#session_timeout}
    */
    readonly sessionTimeout?: string;
    /**
    * The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#token_endpoint CcListener#token_endpoint}
    */
    readonly tokenEndpoint?: string;
    /**
    * Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#use_existing_client_secret CcListener#use_existing_client_secret}
    */
    readonly useExistingClientSecret?: boolean | cdktn.IResolvable;
    /**
    * The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#user_info_endpoint CcListener#user_info_endpoint}
    */
    readonly userInfoEndpoint?: string;
}
export class AuthenticateOidcConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthenticateOidcConfigProperty | cdktn.IResolvable | undefined {
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
        if (this._onUnauthenticatedRequest !== undefined) {
            hasAnyValues = true;
            internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
        }
        if (this._scope !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        if (this._sessionCookieName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionCookieName = this._sessionCookieName;
        }
        if (this._sessionTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionTimeout = this._sessionTimeout;
        }
        if (this._tokenEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenEndpoint = this._tokenEndpoint;
        }
        if (this._useExistingClientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.useExistingClientSecret = this._useExistingClientSecret;
        }
        if (this._userInfoEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.userInfoEndpoint = this._userInfoEndpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthenticateOidcConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationRequestExtraParams = undefined;
            this._authorizationEndpoint = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._issuer = undefined;
            this._onUnauthenticatedRequest = undefined;
            this._scope = undefined;
            this._sessionCookieName = undefined;
            this._sessionTimeout = undefined;
            this._tokenEndpoint = undefined;
            this._useExistingClientSecret = undefined;
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
            this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
            this._scope = value.scope;
            this._sessionCookieName = value.sessionCookieName;
            this._sessionTimeout = value.sessionTimeout;
            this._tokenEndpoint = value.tokenEndpoint;
            this._useExistingClientSecret = value.useExistingClientSecret;
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

    // on_unauthenticated_request - computed: true, optional: true, required: false
    private _onUnauthenticatedRequest?: string; 
    public get onUnauthenticatedRequest() {
        return this.getStringAttribute('on_unauthenticated_request');
    }
    public set onUnauthenticatedRequest(value: string) {
        this._onUnauthenticatedRequest = value;
    }
    public resetOnUnauthenticatedRequest() {
        this._onUnauthenticatedRequest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onUnauthenticatedRequestInput() {
        return this._onUnauthenticatedRequest;
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

    // session_cookie_name - computed: true, optional: true, required: false
    private _sessionCookieName?: string; 
    public get sessionCookieName() {
        return this.getStringAttribute('session_cookie_name');
    }
    public set sessionCookieName(value: string) {
        this._sessionCookieName = value;
    }
    public resetSessionCookieName() {
        this._sessionCookieName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionCookieNameInput() {
        return this._sessionCookieName;
    }

    // session_timeout - computed: true, optional: true, required: false
    private _sessionTimeout?: string; 
    public get sessionTimeout() {
        return this.getStringAttribute('session_timeout');
    }
    public set sessionTimeout(value: string) {
        this._sessionTimeout = value;
    }
    public resetSessionTimeout() {
        this._sessionTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionTimeoutInput() {
        return this._sessionTimeout;
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

    // use_existing_client_secret - computed: true, optional: true, required: false
    private _useExistingClientSecret?: boolean | cdktn.IResolvable; 
    public get useExistingClientSecret() {
        return this.getBooleanAttribute('use_existing_client_secret');
    }
    public set useExistingClientSecret(value: boolean | cdktn.IResolvable) {
        this._useExistingClientSecret = value;
    }
    public resetUseExistingClientSecret() {
        this._useExistingClientSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useExistingClientSecretInput() {
        return this._useExistingClientSecret;
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
export interface FixedResponseConfigProperty {
    /**
    * The content type.
    *  Valid Values: text/plain | text/css | text/html | application/javascript | application/json
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#content_type CcListener#content_type}
    */
    readonly contentType?: string;
    /**
    * The message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#message_body CcListener#message_body}
    */
    readonly messageBody?: string;
    /**
    * The HTTP response code (2XX, 4XX, or 5XX).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#status_code CcListener#status_code}
    */
    readonly statusCode?: string;
}
export class FixedResponseConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FixedResponseConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._messageBody !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageBody = this._messageBody;
        }
        if (this._statusCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FixedResponseConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentType = undefined;
            this._messageBody = undefined;
            this._statusCode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentType = value.contentType;
            this._messageBody = value.messageBody;
            this._statusCode = value.statusCode;
        }
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // message_body - computed: true, optional: true, required: false
    private _messageBody?: string; 
    public get messageBody() {
        return this.getStringAttribute('message_body');
    }
    public set messageBody(value: string) {
        this._messageBody = value;
    }
    public resetMessageBody() {
        this._messageBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageBodyInput() {
        return this._messageBody;
    }

    // status_code - computed: true, optional: true, required: false
    private _statusCode?: string; 
    public get statusCode() {
        return this.getStringAttribute('status_code');
    }
    public set statusCode(value: string) {
        this._statusCode = value;
    }
    public resetStatusCode() {
        this._statusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusCodeInput() {
        return this._statusCode;
    }
}
export interface TargetGroupStickinessConfigProperty {
    /**
    * [Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days). You must specify this value when enabling target group stickiness.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#duration_seconds CcListener#duration_seconds}
    */
    readonly durationSeconds?: number;
    /**
    * Indicates whether target group stickiness is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#enabled CcListener#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class TargetGroupStickinessConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetGroupStickinessConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._durationSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.durationSeconds = this._durationSeconds;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetGroupStickinessConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._durationSeconds = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._durationSeconds = value.durationSeconds;
            this._enabled = value.enabled;
        }
    }

    // duration_seconds - computed: true, optional: true, required: false
    private _durationSeconds?: number; 
    public get durationSeconds() {
        return this.getNumberAttribute('duration_seconds');
    }
    public set durationSeconds(value: number) {
        this._durationSeconds = value;
    }
    public resetDurationSeconds() {
        this._durationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationSecondsInput() {
        return this._durationSeconds;
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface TargetGroupTupleProperty {
    /**
    * The Amazon Resource Name (ARN) of the target group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#target_group_arn CcListener#target_group_arn}
    */
    readonly targetGroupArn?: string;
    /**
    * The weight. The range is 0 to 999.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#weight CcListener#weight}
    */
    readonly weight?: number;
}
export class TargetGroupTuplePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetGroupTupleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroupArn = this._targetGroupArn;
        }
        if (this._weight !== undefined) {
            hasAnyValues = true;
            internalValueResult.weight = this._weight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetGroupTupleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetGroupArn = undefined;
            this._weight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetGroupArn = value.targetGroupArn;
            this._weight = value.weight;
        }
    }

    // target_group_arn - computed: true, optional: true, required: false
    private _targetGroupArn?: string; 
    public get targetGroupArn() {
        return this.getStringAttribute('target_group_arn');
    }
    public set targetGroupArn(value: string) {
        this._targetGroupArn = value;
    }
    public resetTargetGroupArn() {
        this._targetGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupArnInput() {
        return this._targetGroupArn;
    }

    // weight - computed: true, optional: true, required: false
    private _weight?: number; 
    public get weight() {
        return this.getNumberAttribute('weight');
    }
    public set weight(value: number) {
        this._weight = value;
    }
    public resetWeight() {
        this._weight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weightInput() {
        return this._weight;
    }
}

export class TargetGroupTuplePropertyList extends cdktn.ComplexList {
    public internalValue? : TargetGroupTupleProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetGroupTuplePropertyOutputReference {
        return new TargetGroupTuplePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ForwardConfigProperty {
    /**
    * Information about the target group stickiness for a rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#target_group_stickiness_config CcListener#target_group_stickiness_config}
    */
    readonly targetGroupStickinessConfig?: TargetGroupStickinessConfigProperty;
    /**
    * Information about how traffic will be distributed between multiple target groups in a forward rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#target_groups CcListener#target_groups}
    */
    readonly targetGroups?: TargetGroupTupleProperty[] | cdktn.IResolvable;
}
export class ForwardConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ForwardConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetGroupStickinessConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroupStickinessConfig = this._targetGroupStickinessConfig?.internalValue;
        }
        if (this._targetGroups?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroups = this._targetGroups?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetGroupStickinessConfig.internalValue = undefined;
            this._targetGroups.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetGroupStickinessConfig.internalValue = value.targetGroupStickinessConfig;
            this._targetGroups.internalValue = value.targetGroups;
        }
    }

    // target_group_stickiness_config - computed: true, optional: true, required: false
    private _targetGroupStickinessConfig = new TargetGroupStickinessConfigPropertyOutputReference(this, "target_group_stickiness_config");
    public get targetGroupStickinessConfig() {
        return this._targetGroupStickinessConfig;
    }
    public putTargetGroupStickinessConfig(value: TargetGroupStickinessConfigProperty) {
        this._targetGroupStickinessConfig.internalValue = value;
    }
    public resetTargetGroupStickinessConfig() {
        this._targetGroupStickinessConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupStickinessConfigInput() {
        return this._targetGroupStickinessConfig.internalValue;
    }

    // target_groups - computed: true, optional: true, required: false
    private _targetGroups = new TargetGroupTuplePropertyList(this, "target_groups", false);
    public get targetGroups() {
        return this._targetGroups;
    }
    public putTargetGroups(value: TargetGroupTupleProperty[] | cdktn.IResolvable) {
        this._targetGroups.internalValue = value;
    }
    public resetTargetGroups() {
        this._targetGroups.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupsInput() {
        return this._targetGroups.internalValue;
    }
}
export interface JwtValidationActionAdditionalClaimProperty {
    /**
    * The format of the claim value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#format CcListener#format}
    */
    readonly format?: string;
    /**
    * The name of the claim. You can't specify ``exp``, ``iss``, ``nbf``, or ``iat`` because we validate them by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#name CcListener#name}
    */
    readonly name?: string;
    /**
    * The claim value. The maximum size of the list is 10. Each value can be up to 256 characters in length. If the format is ``space-separated-values``, the values can't include spaces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#values CcListener#values}
    */
    readonly values?: string[];
}
export class JwtValidationActionAdditionalClaimPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): JwtValidationActionAdditionalClaimProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JwtValidationActionAdditionalClaimProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._format = undefined;
            this._name = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._format = value.format;
            this._name = value.name;
            this._values = value.values;
        }
    }

    // format - computed: true, optional: true, required: false
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    public resetFormat() {
        this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
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

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class JwtValidationActionAdditionalClaimPropertyList extends cdktn.ComplexList {
    public internalValue? : JwtValidationActionAdditionalClaimProperty[] | cdktn.IResolvable

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
    public get(index: number): JwtValidationActionAdditionalClaimPropertyOutputReference {
        return new JwtValidationActionAdditionalClaimPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface JwtValidationConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#additional_claims CcListener#additional_claims}
    */
    readonly additionalClaims?: JwtValidationActionAdditionalClaimProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#issuer CcListener#issuer}
    */
    readonly issuer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#jwks_endpoint CcListener#jwks_endpoint}
    */
    readonly jwksEndpoint?: string;
}
export class JwtValidationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JwtValidationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalClaims?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalClaims = this._additionalClaims?.internalValue;
        }
        if (this._issuer !== undefined) {
            hasAnyValues = true;
            internalValueResult.issuer = this._issuer;
        }
        if (this._jwksEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.jwksEndpoint = this._jwksEndpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JwtValidationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalClaims.internalValue = undefined;
            this._issuer = undefined;
            this._jwksEndpoint = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalClaims.internalValue = value.additionalClaims;
            this._issuer = value.issuer;
            this._jwksEndpoint = value.jwksEndpoint;
        }
    }

    // additional_claims - computed: true, optional: true, required: false
    private _additionalClaims = new JwtValidationActionAdditionalClaimPropertyList(this, "additional_claims", false);
    public get additionalClaims() {
        return this._additionalClaims;
    }
    public putAdditionalClaims(value: JwtValidationActionAdditionalClaimProperty[] | cdktn.IResolvable) {
        this._additionalClaims.internalValue = value;
    }
    public resetAdditionalClaims() {
        this._additionalClaims.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalClaimsInput() {
        return this._additionalClaims.internalValue;
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

    // jwks_endpoint - computed: true, optional: true, required: false
    private _jwksEndpoint?: string; 
    public get jwksEndpoint() {
        return this.getStringAttribute('jwks_endpoint');
    }
    public set jwksEndpoint(value: string) {
        this._jwksEndpoint = value;
    }
    public resetJwksEndpoint() {
        this._jwksEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jwksEndpointInput() {
        return this._jwksEndpoint;
    }
}
export interface RedirectConfigProperty {
    /**
    * The hostname. This component is not percent-encoded. The hostname can contain #{host}.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#host CcListener#host}
    */
    readonly host?: string;
    /**
    * The absolute path, starting with the leading "/". This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#path CcListener#path}
    */
    readonly path?: string;
    /**
    * The port. You can specify a value from 1 to 65535 or #{port}.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#port CcListener#port}
    */
    readonly port?: string;
    /**
    * The protocol. You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You can't redirect HTTPS to HTTP.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#protocol CcListener#protocol}
    */
    readonly protocol?: string;
    /**
    * The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#query CcListener#query}
    */
    readonly query?: string;
    /**
    * The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#status_code CcListener#status_code}
    */
    readonly statusCode?: string;
}
export class RedirectConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedirectConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._query !== undefined) {
            hasAnyValues = true;
            internalValueResult.query = this._query;
        }
        if (this._statusCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedirectConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._host = undefined;
            this._path = undefined;
            this._port = undefined;
            this._protocol = undefined;
            this._query = undefined;
            this._statusCode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._host = value.host;
            this._path = value.path;
            this._port = value.port;
            this._protocol = value.protocol;
            this._query = value.query;
            this._statusCode = value.statusCode;
        }
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }

    // port - computed: true, optional: true, required: false
    private _port?: string; 
    public get port() {
        return this.getStringAttribute('port');
    }
    public set port(value: string) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // query - computed: true, optional: true, required: false
    private _query?: string; 
    public get query() {
        return this.getStringAttribute('query');
    }
    public set query(value: string) {
        this._query = value;
    }
    public resetQuery() {
        this._query = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryInput() {
        return this._query;
    }

    // status_code - computed: true, optional: true, required: false
    private _statusCode?: string; 
    public get statusCode() {
        return this.getStringAttribute('status_code');
    }
    public set statusCode(value: string) {
        this._statusCode = value;
    }
    public resetStatusCode() {
        this._statusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusCodeInput() {
        return this._statusCode;
    }
}
export interface ActionProperty {
    /**
    * [HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#authenticate_cognito_config CcListener#authenticate_cognito_config}
    */
    readonly authenticateCognitoConfig?: AuthenticateCognitoConfigProperty;
    /**
    * [HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when ``Type`` is ``authenticate-oidc``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#authenticate_oidc_config CcListener#authenticate_oidc_config}
    */
    readonly authenticateOidcConfig?: AuthenticateOidcConfigProperty;
    /**
    * [Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when ``Type`` is ``fixed-response``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#fixed_response_config CcListener#fixed_response_config}
    */
    readonly fixedResponseConfig?: FixedResponseConfigProperty;
    /**
    * Information for creating an action that distributes requests among multiple target groups. Specify only when ``Type`` is ``forward``.
    *  If you specify both ``ForwardConfig`` and ``TargetGroupArn``, you can specify only one target group using ``ForwardConfig`` and it must be the same target group specified in ``TargetGroupArn``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#forward_config CcListener#forward_config}
    */
    readonly forwardConfig?: ForwardConfigProperty;
    /**
    * [HTTPS listeners] Information for validating JWT access tokens in client requests. Specify only when ``Type`` is ``jwt-validation``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#jwt_validation_config CcListener#jwt_validation_config}
    */
    readonly jwtValidationConfig?: JwtValidationConfigProperty;
    /**
    * The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#order CcListener#order}
    */
    readonly order?: number;
    /**
    * [Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#redirect_config CcListener#redirect_config}
    */
    readonly redirectConfig?: RedirectConfigProperty;
    /**
    * The Amazon Resource Name (ARN) of the target group. Specify only when ``Type`` is ``forward`` and you want to route to a single target group. To route to multiple target groups, you must use ``ForwardConfig`` instead.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#target_group_arn CcListener#target_group_arn}
    */
    readonly targetGroupArn?: string;
    /**
    * The type of action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#type CcListener#type}
    */
    readonly type: string;
}
export class ActionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticateCognitoConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticateCognitoConfig = this._authenticateCognitoConfig?.internalValue;
        }
        if (this._authenticateOidcConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticateOidcConfig = this._authenticateOidcConfig?.internalValue;
        }
        if (this._fixedResponseConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fixedResponseConfig = this._fixedResponseConfig?.internalValue;
        }
        if (this._forwardConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.forwardConfig = this._forwardConfig?.internalValue;
        }
        if (this._jwtValidationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jwtValidationConfig = this._jwtValidationConfig?.internalValue;
        }
        if (this._order !== undefined) {
            hasAnyValues = true;
            internalValueResult.order = this._order;
        }
        if (this._redirectConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirectConfig = this._redirectConfig?.internalValue;
        }
        if (this._targetGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroupArn = this._targetGroupArn;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticateCognitoConfig.internalValue = undefined;
            this._authenticateOidcConfig.internalValue = undefined;
            this._fixedResponseConfig.internalValue = undefined;
            this._forwardConfig.internalValue = undefined;
            this._jwtValidationConfig.internalValue = undefined;
            this._order = undefined;
            this._redirectConfig.internalValue = undefined;
            this._targetGroupArn = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticateCognitoConfig.internalValue = value.authenticateCognitoConfig;
            this._authenticateOidcConfig.internalValue = value.authenticateOidcConfig;
            this._fixedResponseConfig.internalValue = value.fixedResponseConfig;
            this._forwardConfig.internalValue = value.forwardConfig;
            this._jwtValidationConfig.internalValue = value.jwtValidationConfig;
            this._order = value.order;
            this._redirectConfig.internalValue = value.redirectConfig;
            this._targetGroupArn = value.targetGroupArn;
            this._type = value.type;
        }
    }

    // authenticate_cognito_config - computed: true, optional: true, required: false
    private _authenticateCognitoConfig = new AuthenticateCognitoConfigPropertyOutputReference(this, "authenticate_cognito_config");
    public get authenticateCognitoConfig() {
        return this._authenticateCognitoConfig;
    }
    public putAuthenticateCognitoConfig(value: AuthenticateCognitoConfigProperty) {
        this._authenticateCognitoConfig.internalValue = value;
    }
    public resetAuthenticateCognitoConfig() {
        this._authenticateCognitoConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticateCognitoConfigInput() {
        return this._authenticateCognitoConfig.internalValue;
    }

    // authenticate_oidc_config - computed: true, optional: true, required: false
    private _authenticateOidcConfig = new AuthenticateOidcConfigPropertyOutputReference(this, "authenticate_oidc_config");
    public get authenticateOidcConfig() {
        return this._authenticateOidcConfig;
    }
    public putAuthenticateOidcConfig(value: AuthenticateOidcConfigProperty) {
        this._authenticateOidcConfig.internalValue = value;
    }
    public resetAuthenticateOidcConfig() {
        this._authenticateOidcConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticateOidcConfigInput() {
        return this._authenticateOidcConfig.internalValue;
    }

    // fixed_response_config - computed: true, optional: true, required: false
    private _fixedResponseConfig = new FixedResponseConfigPropertyOutputReference(this, "fixed_response_config");
    public get fixedResponseConfig() {
        return this._fixedResponseConfig;
    }
    public putFixedResponseConfig(value: FixedResponseConfigProperty) {
        this._fixedResponseConfig.internalValue = value;
    }
    public resetFixedResponseConfig() {
        this._fixedResponseConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fixedResponseConfigInput() {
        return this._fixedResponseConfig.internalValue;
    }

    // forward_config - computed: true, optional: true, required: false
    private _forwardConfig = new ForwardConfigPropertyOutputReference(this, "forward_config");
    public get forwardConfig() {
        return this._forwardConfig;
    }
    public putForwardConfig(value: ForwardConfigProperty) {
        this._forwardConfig.internalValue = value;
    }
    public resetForwardConfig() {
        this._forwardConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forwardConfigInput() {
        return this._forwardConfig.internalValue;
    }

    // jwt_validation_config - computed: true, optional: true, required: false
    private _jwtValidationConfig = new JwtValidationConfigPropertyOutputReference(this, "jwt_validation_config");
    public get jwtValidationConfig() {
        return this._jwtValidationConfig;
    }
    public putJwtValidationConfig(value: JwtValidationConfigProperty) {
        this._jwtValidationConfig.internalValue = value;
    }
    public resetJwtValidationConfig() {
        this._jwtValidationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jwtValidationConfigInput() {
        return this._jwtValidationConfig.internalValue;
    }

    // order - computed: true, optional: true, required: false
    private _order?: number; 
    public get order() {
        return this.getNumberAttribute('order');
    }
    public set order(value: number) {
        this._order = value;
    }
    public resetOrder() {
        this._order = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orderInput() {
        return this._order;
    }

    // redirect_config - computed: true, optional: true, required: false
    private _redirectConfig = new RedirectConfigPropertyOutputReference(this, "redirect_config");
    public get redirectConfig() {
        return this._redirectConfig;
    }
    public putRedirectConfig(value: RedirectConfigProperty) {
        this._redirectConfig.internalValue = value;
    }
    public resetRedirectConfig() {
        this._redirectConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redirectConfigInput() {
        return this._redirectConfig.internalValue;
    }

    // target_group_arn - computed: true, optional: true, required: false
    private _targetGroupArn?: string; 
    public get targetGroupArn() {
        return this.getStringAttribute('target_group_arn');
    }
    public set targetGroupArn(value: string) {
        this._targetGroupArn = value;
    }
    public resetTargetGroupArn() {
        this._targetGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupArnInput() {
        return this._targetGroupArn;
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
}

export class ActionPropertyList extends cdktn.ComplexList {
    public internalValue? : ActionProperty[] | cdktn.IResolvable

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
    public get(index: number): ActionPropertyOutputReference {
        return new ActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ListenerAttributeProperty {
    /**
    * The name of the attribute.
    *  The following attribute is supported by Network Load Balancers, and Gateway Load Balancers.
    *   +  ``tcp.idle_timeout.seconds`` - The tcp idle timeout value, in seconds. The valid range is 60-6000 seconds. The default is 350 seconds.
    *   
    *  The following attributes are only supported by Application Load Balancers.
    *   +  ``routing.http.request.x_amzn_mtls_clientcert_serial_number.header_name`` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Serial-Number* HTTP request header.
    *   +  ``routing.http.request.x_amzn_mtls_clientcert_issuer.header_name`` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Issuer* HTTP request header.
    *   +  ``routing.http.request.x_amzn_mtls_clientcert_subject.header_name`` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Subject* HTTP request header.
    *   +  ``routing.http.request.x_amzn_mtls_clientcert_validity.header_name`` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Validity* HTTP request header.
    *   +  ``routing.http.request.x_amzn_mtls_clientcert_leaf.header_name`` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Leaf* HTTP request header.
    *   +  ``routing.http.request.x_amzn_mtls_clientcert.header_name`` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert* HTTP request header.
    *   +  ``routing.http.request.x_amzn_tls_version.header_name`` - Enables you to modify the header name of the *X-Amzn-Tls-Version* HTTP request header.
    *   +  ``routing.http.request.x_amzn_tls_cipher_suite.header_name`` - Enables you to modify the header name of the *X-Amzn-Tls-Cipher-Suite* HTTP request header.
    *   +  ``routing.http.response.server.enabled`` - Enables you to allow or remove the HTTP response server header.
    *   +  ``routing.http.response.strict_transport_security.header_value`` - Informs browsers that the site should only be accessed using HTTPS, and that any future attempts to access it using HTTP should automatically be converted to HTTPS.
    *   +  ``routing.http.response.access_control_allow_origin.header_value`` - Specifies which origins are allowed to access the server.
    *   +  ``routing.http.response.access_control_allow_methods.header_value`` - Returns which HTTP methods are allowed when accessing the server from a different origin.
    *   +  ``routing.http.response.access_control_allow_headers.header_value`` - Specifies which headers can be used during the request.
    *   +  ``routing.http.response.access_control_allow_credentials.header_value`` - Indicates whether the browser should include credentials such as cookies or authentication when making requests.
    *   +  ``routing.http.response.access_control_expose_headers.header_value`` - Returns which headers the browser can expose to the requesting client.
    *   +  ``routing.http.response.access_control_max_age.header_value`` - Specifies how long the results of a preflight request can be cached, in seconds.
    *   +  ``routing.http.response.content_security_policy.header_value`` - Specifies restrictions enforced by the browser to help minimize the risk of certain types of security threats.
    *   +  ``routing.http.response.x_content_type_options.header_value`` - Indicates whether the MIME types advertised in the *Content-Type* headers should be followed and not be changed.
    *   +  ``routing.http.response.x_frame_options.header_value`` - Indicates whether the browser is allowed to render a page in a *frame*, *iframe*, *embed* or *object*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#key CcListener#key}
    */
    readonly key?: string;
    /**
    * The value of the attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#value CcListener#value}
    */
    readonly value?: string;
}
export class ListenerAttributePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ListenerAttributeProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ListenerAttributeProperty | cdktn.IResolvable | undefined) {
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

export class ListenerAttributePropertyList extends cdktn.ComplexList {
    public internalValue? : ListenerAttributeProperty[] | cdktn.IResolvable

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
    public get(index: number): ListenerAttributePropertyOutputReference {
        return new ListenerAttributePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MutualAuthenticationProperty {
    /**
    * Indicates whether trust store CA certificate names are advertised.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#advertise_trust_store_ca_names CcListener#advertise_trust_store_ca_names}
    */
    readonly advertiseTrustStoreCaNames?: string;
    /**
    * Indicates whether expired client certificates are ignored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#ignore_client_certificate_expiry CcListener#ignore_client_certificate_expiry}
    */
    readonly ignoreClientCertificateExpiry?: boolean | cdktn.IResolvable;
    /**
    * The client certificate handling method. Options are ``off``, ``passthrough`` or ``verify``. The default value on initial resource creation is ``off``. After mutual authentication is turned on, you must explicitly set the ``Mode`` to ``off`` to turn it off; removing the property from your template will not turn it off.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#mode CcListener#mode}
    */
    readonly mode?: string;
    /**
    * The Amazon Resource Name (ARN) of the trust store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#trust_store_arn CcListener#trust_store_arn}
    */
    readonly trustStoreArn?: string;
}
export class MutualAuthenticationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MutualAuthenticationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._advertiseTrustStoreCaNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.advertiseTrustStoreCaNames = this._advertiseTrustStoreCaNames;
        }
        if (this._ignoreClientCertificateExpiry !== undefined) {
            hasAnyValues = true;
            internalValueResult.ignoreClientCertificateExpiry = this._ignoreClientCertificateExpiry;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._trustStoreArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.trustStoreArn = this._trustStoreArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MutualAuthenticationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._advertiseTrustStoreCaNames = undefined;
            this._ignoreClientCertificateExpiry = undefined;
            this._mode = undefined;
            this._trustStoreArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._advertiseTrustStoreCaNames = value.advertiseTrustStoreCaNames;
            this._ignoreClientCertificateExpiry = value.ignoreClientCertificateExpiry;
            this._mode = value.mode;
            this._trustStoreArn = value.trustStoreArn;
        }
    }

    // advertise_trust_store_ca_names - computed: true, optional: true, required: false
    private _advertiseTrustStoreCaNames?: string; 
    public get advertiseTrustStoreCaNames() {
        return this.getStringAttribute('advertise_trust_store_ca_names');
    }
    public set advertiseTrustStoreCaNames(value: string) {
        this._advertiseTrustStoreCaNames = value;
    }
    public resetAdvertiseTrustStoreCaNames() {
        this._advertiseTrustStoreCaNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get advertiseTrustStoreCaNamesInput() {
        return this._advertiseTrustStoreCaNames;
    }

    // ignore_client_certificate_expiry - computed: true, optional: true, required: false
    private _ignoreClientCertificateExpiry?: boolean | cdktn.IResolvable; 
    public get ignoreClientCertificateExpiry() {
        return this.getBooleanAttribute('ignore_client_certificate_expiry');
    }
    public set ignoreClientCertificateExpiry(value: boolean | cdktn.IResolvable) {
        this._ignoreClientCertificateExpiry = value;
    }
    public resetIgnoreClientCertificateExpiry() {
        this._ignoreClientCertificateExpiry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ignoreClientCertificateExpiryInput() {
        return this._ignoreClientCertificateExpiry;
    }

    // mode - computed: true, optional: true, required: false
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    public resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }

    // trust_store_arn - computed: true, optional: true, required: false
    private _trustStoreArn?: string; 
    public get trustStoreArn() {
        return this.getStringAttribute('trust_store_arn');
    }
    public set trustStoreArn(value: string) {
        this._trustStoreArn = value;
    }
    public resetTrustStoreArn() {
        this._trustStoreArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trustStoreArnInput() {
        return this._trustStoreArn;
    }
}
export interface TagProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#key CcListener#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_listener#value CcListener#value}
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
