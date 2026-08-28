// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDomainNameProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name#certificate_arn CcDomainName#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name#domain_name CcDomainName#domain_name}
    */
    readonly domainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name#endpoint_access_mode CcDomainName#endpoint_access_mode}
    */
    readonly endpointAccessMode?: string;
    /**
    * The endpoint configuration of this DomainName showing the endpoint types and IP address types of the domain name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name#endpoint_configuration CcDomainName#endpoint_configuration}
    */
    readonly endpointConfiguration?: CcDomainName.EndpointConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name#mutual_tls_authentication CcDomainName#mutual_tls_authentication}
    */
    readonly mutualTlsAuthentication?: CcDomainName.MutualTlsAuthenticationProperty;
    /**
    * The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the RegionalCertificateArn.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name#ownership_verification_certificate_arn CcDomainName#ownership_verification_certificate_arn}
    */
    readonly ownershipVerificationCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name#regional_certificate_arn CcDomainName#regional_certificate_arn}
    */
    readonly regionalCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name#routing_mode CcDomainName#routing_mode}
    */
    readonly routingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name#security_policy CcDomainName#security_policy}
    */
    readonly securityPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name#tags CcDomainName#tags}
    */
    readonly tags?: CcDomainName.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name awscc_apigateway_domain_name}
*/
export class CcDomainName extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigateway_domain_name";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDomainName resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDomainName to import
    * @param importFromId The id of the existing CcDomainName that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDomainName to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_domain_name", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name awscc_apigateway_domain_name} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDomainNameProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcDomainNameProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigateway_domain_name',
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
        this._certificateArn = config.certificateArn;
        this._domainName = config.domainName;
        this._endpointAccessMode = config.endpointAccessMode;
        this._endpointConfiguration.internalValue = config.endpointConfiguration;
        this._mutualTlsAuthentication.internalValue = config.mutualTlsAuthentication;
        this._ownershipVerificationCertificateArn = config.ownershipVerificationCertificateArn;
        this._regionalCertificateArn = config.regionalCertificateArn;
        this._routingMode = config.routingMode;
        this._securityPolicy = config.securityPolicy;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // distribution_domain_name - computed: true, optional: false, required: false
    public get distributionDomainName() {
        return this.getStringAttribute('distribution_domain_name');
    }

    // distribution_hosted_zone_id - computed: true, optional: false, required: false
    public get distributionHostedZoneId() {
        return this.getStringAttribute('distribution_hosted_zone_id');
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

    // domain_name_arn - computed: true, optional: false, required: false
    public get domainNameArn() {
        return this.getStringAttribute('domain_name_arn');
    }

    // endpoint_access_mode - computed: true, optional: true, required: false
    private _endpointAccessMode?: string; 
    public get endpointAccessMode() {
        return this.getStringAttribute('endpoint_access_mode');
    }
    public set endpointAccessMode(value: string) {
        this._endpointAccessMode = value;
    }
    public resetEndpointAccessMode() {
        this._endpointAccessMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointAccessModeInput() {
        return this._endpointAccessMode;
    }

    // endpoint_configuration - computed: true, optional: true, required: false
    private _endpointConfiguration = new CcDomainName.EndpointConfigurationPropertyOutputReference(this, "endpoint_configuration");
    public get endpointConfiguration() {
        return this._endpointConfiguration;
    }
    public putEndpointConfiguration(value: CcDomainName.EndpointConfigurationProperty) {
        this._endpointConfiguration.internalValue = value;
    }
    public resetEndpointConfiguration() {
        this._endpointConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointConfigurationInput() {
        return this._endpointConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // mutual_tls_authentication - computed: true, optional: true, required: false
    private _mutualTlsAuthentication = new CcDomainName.MutualTlsAuthenticationPropertyOutputReference(this, "mutual_tls_authentication");
    public get mutualTlsAuthentication() {
        return this._mutualTlsAuthentication;
    }
    public putMutualTlsAuthentication(value: CcDomainName.MutualTlsAuthenticationProperty) {
        this._mutualTlsAuthentication.internalValue = value;
    }
    public resetMutualTlsAuthentication() {
        this._mutualTlsAuthentication.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mutualTlsAuthenticationInput() {
        return this._mutualTlsAuthentication.internalValue;
    }

    // ownership_verification_certificate_arn - computed: true, optional: true, required: false
    private _ownershipVerificationCertificateArn?: string; 
    public get ownershipVerificationCertificateArn() {
        return this.getStringAttribute('ownership_verification_certificate_arn');
    }
    public set ownershipVerificationCertificateArn(value: string) {
        this._ownershipVerificationCertificateArn = value;
    }
    public resetOwnershipVerificationCertificateArn() {
        this._ownershipVerificationCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownershipVerificationCertificateArnInput() {
        return this._ownershipVerificationCertificateArn;
    }

    // regional_certificate_arn - computed: true, optional: true, required: false
    private _regionalCertificateArn?: string; 
    public get regionalCertificateArn() {
        return this.getStringAttribute('regional_certificate_arn');
    }
    public set regionalCertificateArn(value: string) {
        this._regionalCertificateArn = value;
    }
    public resetRegionalCertificateArn() {
        this._regionalCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionalCertificateArnInput() {
        return this._regionalCertificateArn;
    }

    // regional_domain_name - computed: true, optional: false, required: false
    public get regionalDomainName() {
        return this.getStringAttribute('regional_domain_name');
    }

    // regional_hosted_zone_id - computed: true, optional: false, required: false
    public get regionalHostedZoneId() {
        return this.getStringAttribute('regional_hosted_zone_id');
    }

    // routing_mode - computed: true, optional: true, required: false
    private _routingMode?: string; 
    public get routingMode() {
        return this.getStringAttribute('routing_mode');
    }
    public set routingMode(value: string) {
        this._routingMode = value;
    }
    public resetRoutingMode() {
        this._routingMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingModeInput() {
        return this._routingMode;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDomainName.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDomainName.TagProperty[] | cdktn.IResolvable) {
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
            certificate_arn: cdktn.stringToTerraform(this._certificateArn),
            domain_name: cdktn.stringToTerraform(this._domainName),
            endpoint_access_mode: cdktn.stringToTerraform(this._endpointAccessMode),
            endpoint_configuration: ccDomainNameEndpointConfigurationPropertyToTerraform(this._endpointConfiguration.internalValue),
            mutual_tls_authentication: ccDomainNameMutualTlsAuthenticationPropertyToTerraform(this._mutualTlsAuthentication.internalValue),
            ownership_verification_certificate_arn: cdktn.stringToTerraform(this._ownershipVerificationCertificateArn),
            regional_certificate_arn: cdktn.stringToTerraform(this._regionalCertificateArn),
            routing_mode: cdktn.stringToTerraform(this._routingMode),
            security_policy: cdktn.stringToTerraform(this._securityPolicy),
            tags: cdktn.listMapper(ccDomainNameTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            certificate_arn: {
                value: cdktn.stringToHclTerraform(this._certificateArn),
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
            endpoint_access_mode: {
                value: cdktn.stringToHclTerraform(this._endpointAccessMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint_configuration: {
                value: ccDomainNameEndpointConfigurationPropertyToHclTerraform(this._endpointConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomainName.EndpointConfigurationProperty",
            },
            mutual_tls_authentication: {
                value: ccDomainNameMutualTlsAuthenticationPropertyToHclTerraform(this._mutualTlsAuthentication.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomainName.MutualTlsAuthenticationProperty",
            },
            ownership_verification_certificate_arn: {
                value: cdktn.stringToHclTerraform(this._ownershipVerificationCertificateArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            regional_certificate_arn: {
                value: cdktn.stringToHclTerraform(this._regionalCertificateArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            routing_mode: {
                value: cdktn.stringToHclTerraform(this._routingMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_policy: {
                value: cdktn.stringToHclTerraform(this._securityPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDomainNameTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDomainName.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDomainNameEndpointConfigurationPropertyToTerraform(struct?: CcDomainName.EndpointConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
        types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
    }
}


export function ccDomainNameEndpointConfigurationPropertyToHclTerraform(struct?: CcDomainName.EndpointConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ip_address_type: {
            value: cdktn.stringToHclTerraform(struct!.ipAddressType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainNameMutualTlsAuthenticationPropertyToTerraform(struct?: CcDomainName.MutualTlsAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        truststore_uri: cdktn.stringToTerraform(struct!.truststoreUri),
        truststore_version: cdktn.stringToTerraform(struct!.truststoreVersion),
    }
}


export function ccDomainNameMutualTlsAuthenticationPropertyToHclTerraform(struct?: CcDomainName.MutualTlsAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        truststore_uri: {
            value: cdktn.stringToHclTerraform(struct!.truststoreUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        truststore_version: {
            value: cdktn.stringToHclTerraform(struct!.truststoreVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainNameTagPropertyToTerraform(struct?: CcDomainName.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDomainNameTagPropertyToHclTerraform(struct?: CcDomainName.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDomainName {
export interface EndpointConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name#ip_address_type CcDomainName#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name#types CcDomainName#types}
    */
    readonly types?: string[];
}
export class EndpointConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ipAddressType !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddressType = this._ipAddressType;
        }
        if (this._types !== undefined) {
            hasAnyValues = true;
            internalValueResult.types = this._types;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipAddressType = undefined;
            this._types = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipAddressType = value.ipAddressType;
            this._types = value.types;
        }
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

    // types - computed: true, optional: true, required: false
    private _types?: string[]; 
    public get types() {
        return this.getListAttribute('types');
    }
    public set types(value: string[]) {
        this._types = value;
    }
    public resetTypes() {
        this._types = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typesInput() {
        return this._types;
    }
}
export interface MutualTlsAuthenticationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name#truststore_uri CcDomainName#truststore_uri}
    */
    readonly truststoreUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name#truststore_version CcDomainName#truststore_version}
    */
    readonly truststoreVersion?: string;
}
export class MutualTlsAuthenticationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MutualTlsAuthenticationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._truststoreUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.truststoreUri = this._truststoreUri;
        }
        if (this._truststoreVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.truststoreVersion = this._truststoreVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MutualTlsAuthenticationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._truststoreUri = undefined;
            this._truststoreVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._truststoreUri = value.truststoreUri;
            this._truststoreVersion = value.truststoreVersion;
        }
    }

    // truststore_uri - computed: true, optional: true, required: false
    private _truststoreUri?: string; 
    public get truststoreUri() {
        return this.getStringAttribute('truststore_uri');
    }
    public set truststoreUri(value: string) {
        this._truststoreUri = value;
    }
    public resetTruststoreUri() {
        this._truststoreUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get truststoreUriInput() {
        return this._truststoreUri;
    }

    // truststore_version - computed: true, optional: true, required: false
    private _truststoreVersion?: string; 
    public get truststoreVersion() {
        return this.getStringAttribute('truststore_version');
    }
    public set truststoreVersion(value: string) {
        this._truststoreVersion = value;
    }
    public resetTruststoreVersion() {
        this._truststoreVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get truststoreVersionInput() {
        return this._truststoreVersion;
    }
}
export interface TagProperty {
    /**
    * A string you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name#key CcDomainName#key}
    */
    readonly key?: string;
    /**
    * The value for the specified tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_domain_name#value CcDomainName#value}
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
