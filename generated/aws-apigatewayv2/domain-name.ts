// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_domain_name

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDomainNameProps extends cdktn.TerraformMetaArguments {
    /**
    * The custom domain name for your API in Amazon API Gateway. Uppercase letters and the underscore (``_``) character are not supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_domain_name#domain_name CcDomainName#domain_name}
    */
    readonly domainName: string;
    /**
    * The domain name configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_domain_name#domain_name_configurations CcDomainName#domain_name_configurations}
    */
    readonly domainNameConfigurations?: CcDomainName.DomainNameConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The mutual TLS authentication configuration for a custom domain name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_domain_name#mutual_tls_authentication CcDomainName#mutual_tls_authentication}
    */
    readonly mutualTlsAuthentication?: CcDomainName.MutualTlsAuthenticationProperty;
    /**
    * The routing mode API Gateway uses to route traffic to your APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_domain_name#routing_mode CcDomainName#routing_mode}
    */
    readonly routingMode?: string;
    /**
    * The collection of tags associated with a domain name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_domain_name#tags CcDomainName#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_domain_name awscc_apigatewayv2_domain_name}
*/
export class CcDomainName extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigatewayv2_domain_name";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDomainName resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDomainName to import
    * @param importFromId The id of the existing CcDomainName that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_domain_name#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDomainName to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigatewayv2_domain_name", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_domain_name awscc_apigatewayv2_domain_name} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDomainNameProps
    */
    public constructor(scope: Construct, id: string, config: CcDomainNameProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigatewayv2_domain_name',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._domainName = config.domainName;
        this._domainNameConfigurations.internalValue = config.domainNameConfigurations;
        this._mutualTlsAuthentication.internalValue = config.mutualTlsAuthentication;
        this._routingMode = config.routingMode;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
        return this._domainName;
    }

    // domain_name_arn - computed: true, optional: false, required: false
    public get domainNameArn() {
        return this.getStringAttribute('domain_name_arn');
    }

    // domain_name_configurations - computed: true, optional: true, required: false
    private _domainNameConfigurations = new CcDomainName.DomainNameConfigurationPropertyList(this, "domain_name_configurations", false);
    public get domainNameConfigurations() {
        return this._domainNameConfigurations;
    }
    public putDomainNameConfigurations(value: CcDomainName.DomainNameConfigurationProperty[] | cdktn.IResolvable) {
        this._domainNameConfigurations.internalValue = value;
    }
    public resetDomainNameConfigurations() {
        this._domainNameConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameConfigurationsInput() {
        return this._domainNameConfigurations.internalValue;
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

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            domain_name: cdktn.stringToTerraform(this._domainName),
            domain_name_configurations: cdktn.listMapper(ccDomainNameDomainNameConfigurationPropertyToTerraform, false)(this._domainNameConfigurations.internalValue),
            mutual_tls_authentication: ccDomainNameMutualTlsAuthenticationPropertyToTerraform(this._mutualTlsAuthentication.internalValue),
            routing_mode: cdktn.stringToTerraform(this._routingMode),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            domain_name: {
                value: cdktn.stringToHclTerraform(this._domainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_name_configurations: {
                value: cdktn.listMapperHcl(ccDomainNameDomainNameConfigurationPropertyToHclTerraform, false)(this._domainNameConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDomainName.DomainNameConfigurationPropertyList",
            },
            mutual_tls_authentication: {
                value: ccDomainNameMutualTlsAuthenticationPropertyToHclTerraform(this._mutualTlsAuthentication.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomainName.MutualTlsAuthenticationProperty",
            },
            routing_mode: {
                value: cdktn.stringToHclTerraform(this._routingMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDomainNameDomainNameConfigurationPropertyToTerraform(struct?: CcDomainName.DomainNameConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
        certificate_name: cdktn.stringToTerraform(struct!.certificateName),
        endpoint_type: cdktn.stringToTerraform(struct!.endpointType),
        ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
        ownership_verification_certificate_arn: cdktn.stringToTerraform(struct!.ownershipVerificationCertificateArn),
        security_policy: cdktn.stringToTerraform(struct!.securityPolicy),
    }
}


export function ccDomainNameDomainNameConfigurationPropertyToHclTerraform(struct?: CcDomainName.DomainNameConfigurationProperty | cdktn.IResolvable): any {
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
        certificate_name: {
            value: cdktn.stringToHclTerraform(struct!.certificateName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoint_type: {
            value: cdktn.stringToHclTerraform(struct!.endpointType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_address_type: {
            value: cdktn.stringToHclTerraform(struct!.ipAddressType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ownership_verification_certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.ownershipVerificationCertificateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export namespace CcDomainName {
export interface DomainNameConfigurationProperty {
    /**
    * An AWS-managed certificate that will be used by the edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_domain_name#certificate_arn CcDomainName#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_domain_name#certificate_name CcDomainName#certificate_name}
    */
    readonly certificateName?: string;
    /**
    * The endpoint type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_domain_name#endpoint_type CcDomainName#endpoint_type}
    */
    readonly endpointType?: string;
    /**
    * The IP address types that can invoke the domain name. Use ``ipv4`` to allow only IPv4 addresses to invoke your domain name, or use ``dualstack`` to allow both IPv4 and IPv6 addresses to invoke your domain name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_domain_name#ip_address_type CcDomainName#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * The Amazon resource name (ARN) for the public certificate issued by ACMlong. This ARN is used to validate custom domain ownership. It's required only if you configure mutual TLS and use either an ACM-imported or a private CA certificate ARN as the regionalCertificateArn.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_domain_name#ownership_verification_certificate_arn CcDomainName#ownership_verification_certificate_arn}
    */
    readonly ownershipVerificationCertificateArn?: string;
    /**
    * The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are ``TLS_1_0`` and ``TLS_1_2``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_domain_name#security_policy CcDomainName#security_policy}
    */
    readonly securityPolicy?: string;
}
export class DomainNameConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DomainNameConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateArn = this._certificateArn;
        }
        if (this._certificateName !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateName = this._certificateName;
        }
        if (this._endpointType !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointType = this._endpointType;
        }
        if (this._ipAddressType !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddressType = this._ipAddressType;
        }
        if (this._ownershipVerificationCertificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.ownershipVerificationCertificateArn = this._ownershipVerificationCertificateArn;
        }
        if (this._securityPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityPolicy = this._securityPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DomainNameConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateArn = undefined;
            this._certificateName = undefined;
            this._endpointType = undefined;
            this._ipAddressType = undefined;
            this._ownershipVerificationCertificateArn = undefined;
            this._securityPolicy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateArn = value.certificateArn;
            this._certificateName = value.certificateName;
            this._endpointType = value.endpointType;
            this._ipAddressType = value.ipAddressType;
            this._ownershipVerificationCertificateArn = value.ownershipVerificationCertificateArn;
            this._securityPolicy = value.securityPolicy;
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

    // certificate_name - computed: true, optional: true, required: false
    private _certificateName?: string; 
    public get certificateName() {
        return this.getStringAttribute('certificate_name');
    }
    public set certificateName(value: string) {
        this._certificateName = value;
    }
    public resetCertificateName() {
        this._certificateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateNameInput() {
        return this._certificateName;
    }

    // endpoint_type - computed: true, optional: true, required: false
    private _endpointType?: string; 
    public get endpointType() {
        return this.getStringAttribute('endpoint_type');
    }
    public set endpointType(value: string) {
        this._endpointType = value;
    }
    public resetEndpointType() {
        this._endpointType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointTypeInput() {
        return this._endpointType;
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

export class DomainNameConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : DomainNameConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): DomainNameConfigurationPropertyOutputReference {
        return new DomainNameConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MutualTlsAuthenticationProperty {
    /**
    * An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, ``s3://bucket-name/key-name``. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_domain_name#truststore_uri CcDomainName#truststore_uri}
    */
    readonly truststoreUri?: string;
    /**
    * The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_domain_name#truststore_version CcDomainName#truststore_version}
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
}
