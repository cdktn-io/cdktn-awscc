// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer_tls_certificate

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLoadBalancerTlsCertificateProps extends cdktn.TerraformMetaArguments {
    /**
    * An array of strings listing alternative domains and subdomains for your SSL/TLS certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer_tls_certificate#certificate_alternative_names CcLoadBalancerTlsCertificate#certificate_alternative_names}
    */
    readonly certificateAlternativeNames?: string[];
    /**
    * The domain name (e.g., example.com ) for your SSL/TLS certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer_tls_certificate#certificate_domain_name CcLoadBalancerTlsCertificate#certificate_domain_name}
    */
    readonly certificateDomainName: string;
    /**
    * The SSL/TLS certificate name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer_tls_certificate#certificate_name CcLoadBalancerTlsCertificate#certificate_name}
    */
    readonly certificateName: string;
    /**
    * A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer_tls_certificate#https_redirection_enabled CcLoadBalancerTlsCertificate#https_redirection_enabled}
    */
    readonly httpsRedirectionEnabled?: boolean | cdktn.IResolvable;
    /**
    * When true, the SSL/TLS certificate is attached to the Lightsail load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer_tls_certificate#is_attached CcLoadBalancerTlsCertificate#is_attached}
    */
    readonly isAttached?: boolean | cdktn.IResolvable;
    /**
    * The name of your load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer_tls_certificate#load_balancer_name CcLoadBalancerTlsCertificate#load_balancer_name}
    */
    readonly loadBalancerName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer_tls_certificate awscc_lightsail_load_balancer_tls_certificate}
*/
export class CcLoadBalancerTlsCertificate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lightsail_load_balancer_tls_certificate";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLoadBalancerTlsCertificate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLoadBalancerTlsCertificate to import
    * @param importFromId The id of the existing CcLoadBalancerTlsCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer_tls_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLoadBalancerTlsCertificate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lightsail_load_balancer_tls_certificate", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer_tls_certificate awscc_lightsail_load_balancer_tls_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLoadBalancerTlsCertificateProps
    */
    public constructor(scope: Construct, id: string, config: CcLoadBalancerTlsCertificateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lightsail_load_balancer_tls_certificate',
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
        this._certificateAlternativeNames = config.certificateAlternativeNames;
        this._certificateDomainName = config.certificateDomainName;
        this._certificateName = config.certificateName;
        this._httpsRedirectionEnabled = config.httpsRedirectionEnabled;
        this._isAttached = config.isAttached;
        this._loadBalancerName = config.loadBalancerName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // certificate_alternative_names - computed: true, optional: true, required: false
    private _certificateAlternativeNames?: string[]; 
    public get certificateAlternativeNames() {
        return cdktn.Fn.tolist(this.getListAttribute('certificate_alternative_names'));
    }
    public set certificateAlternativeNames(value: string[]) {
        this._certificateAlternativeNames = value;
    }
    public resetCertificateAlternativeNames() {
        this._certificateAlternativeNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateAlternativeNamesInput() {
        return this._certificateAlternativeNames;
    }

    // certificate_domain_name - computed: false, optional: false, required: true
    private _certificateDomainName?: string; 
    public get certificateDomainName() {
        return this.getStringAttribute('certificate_domain_name');
    }
    public set certificateDomainName(value: string) {
        this._certificateDomainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateDomainNameInput() {
        return this._certificateDomainName;
    }

    // certificate_name - computed: false, optional: false, required: true
    private _certificateName?: string; 
    public get certificateName() {
        return this.getStringAttribute('certificate_name');
    }
    public set certificateName(value: string) {
        this._certificateName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateNameInput() {
        return this._certificateName;
    }

    // https_redirection_enabled - computed: true, optional: true, required: false
    private _httpsRedirectionEnabled?: boolean | cdktn.IResolvable; 
    public get httpsRedirectionEnabled() {
        return this.getBooleanAttribute('https_redirection_enabled');
    }
    public set httpsRedirectionEnabled(value: boolean | cdktn.IResolvable) {
        this._httpsRedirectionEnabled = value;
    }
    public resetHttpsRedirectionEnabled() {
        this._httpsRedirectionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpsRedirectionEnabledInput() {
        return this._httpsRedirectionEnabled;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // is_attached - computed: true, optional: true, required: false
    private _isAttached?: boolean | cdktn.IResolvable; 
    public get isAttached() {
        return this.getBooleanAttribute('is_attached');
    }
    public set isAttached(value: boolean | cdktn.IResolvable) {
        this._isAttached = value;
    }
    public resetIsAttached() {
        this._isAttached = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isAttachedInput() {
        return this._isAttached;
    }

    // load_balancer_name - computed: false, optional: false, required: true
    private _loadBalancerName?: string; 
    public get loadBalancerName() {
        return this.getStringAttribute('load_balancer_name');
    }
    public set loadBalancerName(value: string) {
        this._loadBalancerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerNameInput() {
        return this._loadBalancerName;
    }

    // load_balancer_tls_certificate_arn - computed: true, optional: false, required: false
    public get loadBalancerTlsCertificateArn() {
        return this.getStringAttribute('load_balancer_tls_certificate_arn');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            certificate_alternative_names: cdktn.listMapper(cdktn.stringToTerraform, false)(this._certificateAlternativeNames),
            certificate_domain_name: cdktn.stringToTerraform(this._certificateDomainName),
            certificate_name: cdktn.stringToTerraform(this._certificateName),
            https_redirection_enabled: cdktn.booleanToTerraform(this._httpsRedirectionEnabled),
            is_attached: cdktn.booleanToTerraform(this._isAttached),
            load_balancer_name: cdktn.stringToTerraform(this._loadBalancerName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            certificate_alternative_names: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._certificateAlternativeNames),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            certificate_domain_name: {
                value: cdktn.stringToHclTerraform(this._certificateDomainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate_name: {
                value: cdktn.stringToHclTerraform(this._certificateName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            https_redirection_enabled: {
                value: cdktn.booleanToHclTerraform(this._httpsRedirectionEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_attached: {
                value: cdktn.booleanToHclTerraform(this._isAttached),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            load_balancer_name: {
                value: cdktn.stringToHclTerraform(this._loadBalancerName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcLoadBalancerTlsCertificate {
}
