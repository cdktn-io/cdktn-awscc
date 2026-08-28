// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDomainConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#application_protocol CcDomainConfiguration#application_protocol}
    */
    readonly applicationProtocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#authentication_type CcDomainConfiguration#authentication_type}
    */
    readonly authenticationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#authorizer_config CcDomainConfiguration#authorizer_config}
    */
    readonly authorizerConfig?: CcDomainConfiguration.AuthorizerConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#client_certificate_config CcDomainConfiguration#client_certificate_config}
    */
    readonly clientCertificateConfig?: CcDomainConfiguration.ClientCertificateConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#domain_configuration_name CcDomainConfiguration#domain_configuration_name}
    */
    readonly domainConfigurationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#domain_configuration_status CcDomainConfiguration#domain_configuration_status}
    */
    readonly domainConfigurationStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#domain_name CcDomainConfiguration#domain_name}
    */
    readonly domainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#server_certificate_arns CcDomainConfiguration#server_certificate_arns}
    */
    readonly serverCertificateArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#server_certificate_config CcDomainConfiguration#server_certificate_config}
    */
    readonly serverCertificateConfig?: CcDomainConfiguration.ServerCertificateConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#service_type CcDomainConfiguration#service_type}
    */
    readonly serviceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#tags CcDomainConfiguration#tags}
    */
    readonly tags?: CcDomainConfiguration.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#tls_config CcDomainConfiguration#tls_config}
    */
    readonly tlsConfig?: CcDomainConfiguration.TlsConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#validation_certificate_arn CcDomainConfiguration#validation_certificate_arn}
    */
    readonly validationCertificateArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration awscc_iot_domain_configuration}
*/
export class CcDomainConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_domain_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDomainConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDomainConfiguration to import
    * @param importFromId The id of the existing CcDomainConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDomainConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_domain_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration awscc_iot_domain_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDomainConfigurationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcDomainConfigurationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_domain_configuration',
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
        this._applicationProtocol = config.applicationProtocol;
        this._authenticationType = config.authenticationType;
        this._authorizerConfig.internalValue = config.authorizerConfig;
        this._clientCertificateConfig.internalValue = config.clientCertificateConfig;
        this._domainConfigurationName = config.domainConfigurationName;
        this._domainConfigurationStatus = config.domainConfigurationStatus;
        this._domainName = config.domainName;
        this._serverCertificateArns = config.serverCertificateArns;
        this._serverCertificateConfig.internalValue = config.serverCertificateConfig;
        this._serviceType = config.serviceType;
        this._tags.internalValue = config.tags;
        this._tlsConfig.internalValue = config.tlsConfig;
        this._validationCertificateArn = config.validationCertificateArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_protocol - computed: true, optional: true, required: false
    private _applicationProtocol?: string; 
    public get applicationProtocol() {
        return this.getStringAttribute('application_protocol');
    }
    public set applicationProtocol(value: string) {
        this._applicationProtocol = value;
    }
    public resetApplicationProtocol() {
        this._applicationProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationProtocolInput() {
        return this._applicationProtocol;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // authentication_type - computed: true, optional: true, required: false
    private _authenticationType?: string; 
    public get authenticationType() {
        return this.getStringAttribute('authentication_type');
    }
    public set authenticationType(value: string) {
        this._authenticationType = value;
    }
    public resetAuthenticationType() {
        this._authenticationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationTypeInput() {
        return this._authenticationType;
    }

    // authorizer_config - computed: true, optional: true, required: false
    private _authorizerConfig = new CcDomainConfiguration.AuthorizerConfigPropertyOutputReference(this, "authorizer_config");
    public get authorizerConfig() {
        return this._authorizerConfig;
    }
    public putAuthorizerConfig(value: CcDomainConfiguration.AuthorizerConfigProperty) {
        this._authorizerConfig.internalValue = value;
    }
    public resetAuthorizerConfig() {
        this._authorizerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerConfigInput() {
        return this._authorizerConfig.internalValue;
    }

    // client_certificate_config - computed: true, optional: true, required: false
    private _clientCertificateConfig = new CcDomainConfiguration.ClientCertificateConfigPropertyOutputReference(this, "client_certificate_config");
    public get clientCertificateConfig() {
        return this._clientCertificateConfig;
    }
    public putClientCertificateConfig(value: CcDomainConfiguration.ClientCertificateConfigProperty) {
        this._clientCertificateConfig.internalValue = value;
    }
    public resetClientCertificateConfig() {
        this._clientCertificateConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientCertificateConfigInput() {
        return this._clientCertificateConfig.internalValue;
    }

    // domain_configuration_name - computed: true, optional: true, required: false
    private _domainConfigurationName?: string; 
    public get domainConfigurationName() {
        return this.getStringAttribute('domain_configuration_name');
    }
    public set domainConfigurationName(value: string) {
        this._domainConfigurationName = value;
    }
    public resetDomainConfigurationName() {
        this._domainConfigurationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainConfigurationNameInput() {
        return this._domainConfigurationName;
    }

    // domain_configuration_status - computed: true, optional: true, required: false
    private _domainConfigurationStatus?: string; 
    public get domainConfigurationStatus() {
        return this.getStringAttribute('domain_configuration_status');
    }
    public set domainConfigurationStatus(value: string) {
        this._domainConfigurationStatus = value;
    }
    public resetDomainConfigurationStatus() {
        this._domainConfigurationStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainConfigurationStatusInput() {
        return this._domainConfigurationStatus;
    }

    // domain_name - computed: true, optional: true, required: false
    private _domainName?: string; 
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
        this._domainName = value;
    }
    public resetDomainName() {
        this._domainName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
        return this._domainName;
    }

    // domain_type - computed: true, optional: false, required: false
    public get domainType() {
        return this.getStringAttribute('domain_type');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // server_certificate_arns - computed: true, optional: true, required: false
    private _serverCertificateArns?: string[]; 
    public get serverCertificateArns() {
        return this.getListAttribute('server_certificate_arns');
    }
    public set serverCertificateArns(value: string[]) {
        this._serverCertificateArns = value;
    }
    public resetServerCertificateArns() {
        this._serverCertificateArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverCertificateArnsInput() {
        return this._serverCertificateArns;
    }

    // server_certificate_config - computed: true, optional: true, required: false
    private _serverCertificateConfig = new CcDomainConfiguration.ServerCertificateConfigPropertyOutputReference(this, "server_certificate_config");
    public get serverCertificateConfig() {
        return this._serverCertificateConfig;
    }
    public putServerCertificateConfig(value: CcDomainConfiguration.ServerCertificateConfigProperty) {
        this._serverCertificateConfig.internalValue = value;
    }
    public resetServerCertificateConfig() {
        this._serverCertificateConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverCertificateConfigInput() {
        return this._serverCertificateConfig.internalValue;
    }

    // server_certificates - computed: true, optional: false, required: false
    private _serverCertificates = new CcDomainConfiguration.ServerCertificatesPropertyList(this, "server_certificates", false);
    public get serverCertificates() {
        return this._serverCertificates;
    }

    // service_type - computed: true, optional: true, required: false
    private _serviceType?: string; 
    public get serviceType() {
        return this.getStringAttribute('service_type');
    }
    public set serviceType(value: string) {
        this._serviceType = value;
    }
    public resetServiceType() {
        this._serviceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceTypeInput() {
        return this._serviceType;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDomainConfiguration.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDomainConfiguration.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tls_config - computed: true, optional: true, required: false
    private _tlsConfig = new CcDomainConfiguration.TlsConfigPropertyOutputReference(this, "tls_config");
    public get tlsConfig() {
        return this._tlsConfig;
    }
    public putTlsConfig(value: CcDomainConfiguration.TlsConfigProperty) {
        this._tlsConfig.internalValue = value;
    }
    public resetTlsConfig() {
        this._tlsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsConfigInput() {
        return this._tlsConfig.internalValue;
    }

    // validation_certificate_arn - computed: true, optional: true, required: false
    private _validationCertificateArn?: string; 
    public get validationCertificateArn() {
        return this.getStringAttribute('validation_certificate_arn');
    }
    public set validationCertificateArn(value: string) {
        this._validationCertificateArn = value;
    }
    public resetValidationCertificateArn() {
        this._validationCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationCertificateArnInput() {
        return this._validationCertificateArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application_protocol: cdktn.stringToTerraform(this._applicationProtocol),
            authentication_type: cdktn.stringToTerraform(this._authenticationType),
            authorizer_config: ccDomainConfigurationAuthorizerConfigPropertyToTerraform(this._authorizerConfig.internalValue),
            client_certificate_config: ccDomainConfigurationClientCertificateConfigPropertyToTerraform(this._clientCertificateConfig.internalValue),
            domain_configuration_name: cdktn.stringToTerraform(this._domainConfigurationName),
            domain_configuration_status: cdktn.stringToTerraform(this._domainConfigurationStatus),
            domain_name: cdktn.stringToTerraform(this._domainName),
            server_certificate_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._serverCertificateArns),
            server_certificate_config: ccDomainConfigurationServerCertificateConfigPropertyToTerraform(this._serverCertificateConfig.internalValue),
            service_type: cdktn.stringToTerraform(this._serviceType),
            tags: cdktn.listMapper(ccDomainConfigurationTagPropertyToTerraform, false)(this._tags.internalValue),
            tls_config: ccDomainConfigurationTlsConfigPropertyToTerraform(this._tlsConfig.internalValue),
            validation_certificate_arn: cdktn.stringToTerraform(this._validationCertificateArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_protocol: {
                value: cdktn.stringToHclTerraform(this._applicationProtocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            authentication_type: {
                value: cdktn.stringToHclTerraform(this._authenticationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            authorizer_config: {
                value: ccDomainConfigurationAuthorizerConfigPropertyToHclTerraform(this._authorizerConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomainConfiguration.AuthorizerConfigProperty",
            },
            client_certificate_config: {
                value: ccDomainConfigurationClientCertificateConfigPropertyToHclTerraform(this._clientCertificateConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomainConfiguration.ClientCertificateConfigProperty",
            },
            domain_configuration_name: {
                value: cdktn.stringToHclTerraform(this._domainConfigurationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_configuration_status: {
                value: cdktn.stringToHclTerraform(this._domainConfigurationStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_name: {
                value: cdktn.stringToHclTerraform(this._domainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            server_certificate_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._serverCertificateArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            server_certificate_config: {
                value: ccDomainConfigurationServerCertificateConfigPropertyToHclTerraform(this._serverCertificateConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomainConfiguration.ServerCertificateConfigProperty",
            },
            service_type: {
                value: cdktn.stringToHclTerraform(this._serviceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDomainConfigurationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDomainConfiguration.TagPropertyList",
            },
            tls_config: {
                value: ccDomainConfigurationTlsConfigPropertyToHclTerraform(this._tlsConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomainConfiguration.TlsConfigProperty",
            },
            validation_certificate_arn: {
                value: cdktn.stringToHclTerraform(this._validationCertificateArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDomainConfigurationAuthorizerConfigPropertyToTerraform(struct?: CcDomainConfiguration.AuthorizerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allow_authorizer_override: cdktn.booleanToTerraform(struct!.allowAuthorizerOverride),
        default_authorizer_name: cdktn.stringToTerraform(struct!.defaultAuthorizerName),
    }
}


export function ccDomainConfigurationAuthorizerConfigPropertyToHclTerraform(struct?: CcDomainConfiguration.AuthorizerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allow_authorizer_override: {
            value: cdktn.booleanToHclTerraform(struct!.allowAuthorizerOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        default_authorizer_name: {
            value: cdktn.stringToHclTerraform(struct!.defaultAuthorizerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainConfigurationClientCertificateConfigPropertyToTerraform(struct?: CcDomainConfiguration.ClientCertificateConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_certificate_callback_arn: cdktn.stringToTerraform(struct!.clientCertificateCallbackArn),
    }
}


export function ccDomainConfigurationClientCertificateConfigPropertyToHclTerraform(struct?: CcDomainConfiguration.ClientCertificateConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_certificate_callback_arn: {
            value: cdktn.stringToHclTerraform(struct!.clientCertificateCallbackArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainConfigurationServerCertificateConfigPropertyToTerraform(struct?: CcDomainConfiguration.ServerCertificateConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_ocsp_check: cdktn.booleanToTerraform(struct!.enableOcspCheck),
        ocsp_authorized_responder_arn: cdktn.stringToTerraform(struct!.ocspAuthorizedResponderArn),
        ocsp_lambda_arn: cdktn.stringToTerraform(struct!.ocspLambdaArn),
    }
}


export function ccDomainConfigurationServerCertificateConfigPropertyToHclTerraform(struct?: CcDomainConfiguration.ServerCertificateConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_ocsp_check: {
            value: cdktn.booleanToHclTerraform(struct!.enableOcspCheck),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ocsp_authorized_responder_arn: {
            value: cdktn.stringToHclTerraform(struct!.ocspAuthorizedResponderArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ocsp_lambda_arn: {
            value: cdktn.stringToHclTerraform(struct!.ocspLambdaArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainConfigurationServerCertificatesPropertyToTerraform(struct?: CcDomainConfiguration.ServerCertificatesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDomainConfigurationServerCertificatesPropertyToHclTerraform(struct?: CcDomainConfiguration.ServerCertificatesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDomainConfigurationTagPropertyToTerraform(struct?: CcDomainConfiguration.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDomainConfigurationTagPropertyToHclTerraform(struct?: CcDomainConfiguration.TagProperty | cdktn.IResolvable): any {
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


export function ccDomainConfigurationTlsConfigPropertyToTerraform(struct?: CcDomainConfiguration.TlsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_policy: cdktn.stringToTerraform(struct!.securityPolicy),
    }
}


export function ccDomainConfigurationTlsConfigPropertyToHclTerraform(struct?: CcDomainConfiguration.TlsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_policy: {
            value: cdktn.stringToHclTerraform(struct!.securityPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDomainConfiguration {
export interface AuthorizerConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#allow_authorizer_override CcDomainConfiguration#allow_authorizer_override}
    */
    readonly allowAuthorizerOverride?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#default_authorizer_name CcDomainConfiguration#default_authorizer_name}
    */
    readonly defaultAuthorizerName?: string;
}
export class AuthorizerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowAuthorizerOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowAuthorizerOverride = this._allowAuthorizerOverride;
        }
        if (this._defaultAuthorizerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultAuthorizerName = this._defaultAuthorizerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowAuthorizerOverride = undefined;
            this._defaultAuthorizerName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowAuthorizerOverride = value.allowAuthorizerOverride;
            this._defaultAuthorizerName = value.defaultAuthorizerName;
        }
    }

    // allow_authorizer_override - computed: true, optional: true, required: false
    private _allowAuthorizerOverride?: boolean | cdktn.IResolvable; 
    public get allowAuthorizerOverride() {
        return this.getBooleanAttribute('allow_authorizer_override');
    }
    public set allowAuthorizerOverride(value: boolean | cdktn.IResolvable) {
        this._allowAuthorizerOverride = value;
    }
    public resetAllowAuthorizerOverride() {
        this._allowAuthorizerOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowAuthorizerOverrideInput() {
        return this._allowAuthorizerOverride;
    }

    // default_authorizer_name - computed: true, optional: true, required: false
    private _defaultAuthorizerName?: string; 
    public get defaultAuthorizerName() {
        return this.getStringAttribute('default_authorizer_name');
    }
    public set defaultAuthorizerName(value: string) {
        this._defaultAuthorizerName = value;
    }
    public resetDefaultAuthorizerName() {
        this._defaultAuthorizerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultAuthorizerNameInput() {
        return this._defaultAuthorizerName;
    }
}
export interface ClientCertificateConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#client_certificate_callback_arn CcDomainConfiguration#client_certificate_callback_arn}
    */
    readonly clientCertificateCallbackArn?: string;
}
export class ClientCertificateConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClientCertificateConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientCertificateCallbackArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientCertificateCallbackArn = this._clientCertificateCallbackArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClientCertificateConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientCertificateCallbackArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientCertificateCallbackArn = value.clientCertificateCallbackArn;
        }
    }

    // client_certificate_callback_arn - computed: true, optional: true, required: false
    private _clientCertificateCallbackArn?: string; 
    public get clientCertificateCallbackArn() {
        return this.getStringAttribute('client_certificate_callback_arn');
    }
    public set clientCertificateCallbackArn(value: string) {
        this._clientCertificateCallbackArn = value;
    }
    public resetClientCertificateCallbackArn() {
        this._clientCertificateCallbackArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientCertificateCallbackArnInput() {
        return this._clientCertificateCallbackArn;
    }
}
export interface ServerCertificateConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#enable_ocsp_check CcDomainConfiguration#enable_ocsp_check}
    */
    readonly enableOcspCheck?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#ocsp_authorized_responder_arn CcDomainConfiguration#ocsp_authorized_responder_arn}
    */
    readonly ocspAuthorizedResponderArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#ocsp_lambda_arn CcDomainConfiguration#ocsp_lambda_arn}
    */
    readonly ocspLambdaArn?: string;
}
export class ServerCertificateConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServerCertificateConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableOcspCheck !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableOcspCheck = this._enableOcspCheck;
        }
        if (this._ocspAuthorizedResponderArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.ocspAuthorizedResponderArn = this._ocspAuthorizedResponderArn;
        }
        if (this._ocspLambdaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.ocspLambdaArn = this._ocspLambdaArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerCertificateConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableOcspCheck = undefined;
            this._ocspAuthorizedResponderArn = undefined;
            this._ocspLambdaArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableOcspCheck = value.enableOcspCheck;
            this._ocspAuthorizedResponderArn = value.ocspAuthorizedResponderArn;
            this._ocspLambdaArn = value.ocspLambdaArn;
        }
    }

    // enable_ocsp_check - computed: true, optional: true, required: false
    private _enableOcspCheck?: boolean | cdktn.IResolvable; 
    public get enableOcspCheck() {
        return this.getBooleanAttribute('enable_ocsp_check');
    }
    public set enableOcspCheck(value: boolean | cdktn.IResolvable) {
        this._enableOcspCheck = value;
    }
    public resetEnableOcspCheck() {
        this._enableOcspCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableOcspCheckInput() {
        return this._enableOcspCheck;
    }

    // ocsp_authorized_responder_arn - computed: true, optional: true, required: false
    private _ocspAuthorizedResponderArn?: string; 
    public get ocspAuthorizedResponderArn() {
        return this.getStringAttribute('ocsp_authorized_responder_arn');
    }
    public set ocspAuthorizedResponderArn(value: string) {
        this._ocspAuthorizedResponderArn = value;
    }
    public resetOcspAuthorizedResponderArn() {
        this._ocspAuthorizedResponderArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ocspAuthorizedResponderArnInput() {
        return this._ocspAuthorizedResponderArn;
    }

    // ocsp_lambda_arn - computed: true, optional: true, required: false
    private _ocspLambdaArn?: string; 
    public get ocspLambdaArn() {
        return this.getStringAttribute('ocsp_lambda_arn');
    }
    public set ocspLambdaArn(value: string) {
        this._ocspLambdaArn = value;
    }
    public resetOcspLambdaArn() {
        this._ocspLambdaArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ocspLambdaArnInput() {
        return this._ocspLambdaArn;
    }
}
export interface ServerCertificatesProperty {
}
export class ServerCertificatesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ServerCertificatesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerCertificatesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // server_certificate_arn - computed: true, optional: false, required: false
    public get serverCertificateArn() {
        return this.getStringAttribute('server_certificate_arn');
    }

    // server_certificate_status - computed: true, optional: false, required: false
    public get serverCertificateStatus() {
        return this.getStringAttribute('server_certificate_status');
    }

    // server_certificate_status_detail - computed: true, optional: false, required: false
    public get serverCertificateStatusDetail() {
        return this.getStringAttribute('server_certificate_status_detail');
    }
}

export class ServerCertificatesPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ServerCertificatesPropertyOutputReference {
        return new ServerCertificatesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#key CcDomainConfiguration#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#value CcDomainConfiguration#value}
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
export interface TlsConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_domain_configuration#security_policy CcDomainConfiguration#security_policy}
    */
    readonly securityPolicy?: string;
}
export class TlsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TlsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityPolicy = this._securityPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TlsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityPolicy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityPolicy = value.securityPolicy;
        }
    }

    // security_policy - computed: true, optional: true, required: false
    private _securityPolicy?: string; 
    public get securityPolicy() {
        return this.getStringAttribute('security_policy');
    }
    public set securityPolicy(value: string) {
        this._securityPolicy = value;
    }
    public resetSecurityPolicy() {
        this._securityPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityPolicyInput() {
        return this._securityPolicy;
    }
}
}
