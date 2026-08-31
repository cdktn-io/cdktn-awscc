// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServerProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#certificate CcServer#certificate}
    */
    readonly certificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#domain CcServer#domain}
    */
    readonly domain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#endpoint_details CcServer#endpoint_details}
    */
    readonly endpointDetails?: CcServer.EndpointDetailsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#endpoint_type CcServer#endpoint_type}
    */
    readonly endpointType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#identity_provider_details CcServer#identity_provider_details}
    */
    readonly identityProviderDetails?: CcServer.IdentityProviderDetailsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#identity_provider_type CcServer#identity_provider_type}
    */
    readonly identityProviderType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#ip_address_type CcServer#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#logging_role CcServer#logging_role}
    */
    readonly loggingRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#post_authentication_login_banner CcServer#post_authentication_login_banner}
    */
    readonly postAuthenticationLoginBanner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#pre_authentication_login_banner CcServer#pre_authentication_login_banner}
    */
    readonly preAuthenticationLoginBanner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#protocol_details CcServer#protocol_details}
    */
    readonly protocolDetails?: CcServer.ProtocolDetailsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#protocols CcServer#protocols}
    */
    readonly protocols?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#s3_storage_options CcServer#s3_storage_options}
    */
    readonly s3StorageOptions?: CcServer.S3StorageOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#security_policy_name CcServer#security_policy_name}
    */
    readonly securityPolicyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#structured_log_destinations CcServer#structured_log_destinations}
    */
    readonly structuredLogDestinations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#tags CcServer#tags}
    */
    readonly tags?: CcServer.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#workflow_details CcServer#workflow_details}
    */
    readonly workflowDetails?: CcServer.WorkflowDetailsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server awscc_transfer_server}
*/
export class CcServer extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_transfer_server";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcServer resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcServer to import
    * @param importFromId The id of the existing CcServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcServer to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_transfer_server", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server awscc_transfer_server} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServerProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcServerProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_transfer_server',
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
        this._certificate = config.certificate;
        this._domain = config.domain;
        this._endpointDetails.internalValue = config.endpointDetails;
        this._endpointType = config.endpointType;
        this._identityProviderDetails.internalValue = config.identityProviderDetails;
        this._identityProviderType = config.identityProviderType;
        this._ipAddressType = config.ipAddressType;
        this._loggingRole = config.loggingRole;
        this._postAuthenticationLoginBanner = config.postAuthenticationLoginBanner;
        this._preAuthenticationLoginBanner = config.preAuthenticationLoginBanner;
        this._protocolDetails.internalValue = config.protocolDetails;
        this._protocols = config.protocols;
        this._s3StorageOptions.internalValue = config.s3StorageOptions;
        this._securityPolicyName = config.securityPolicyName;
        this._structuredLogDestinations = config.structuredLogDestinations;
        this._tags.internalValue = config.tags;
        this._workflowDetails.internalValue = config.workflowDetails;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // as_2_service_managed_egress_ip_addresses - computed: true, optional: false, required: false
    public get as2ServiceManagedEgressIpAddresses() {
        return this.getListAttribute('as_2_service_managed_egress_ip_addresses');
    }

    // certificate - computed: true, optional: true, required: false
    private _certificate?: string; 
    public get certificate() {
        return this.getStringAttribute('certificate');
    }
    public set certificate(value: string) {
        this._certificate = value;
    }
    public resetCertificate() {
        this._certificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateInput() {
        return this._certificate;
    }

    // domain - computed: true, optional: true, required: false
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    public resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
    }

    // endpoint_details - computed: true, optional: true, required: false
    private _endpointDetails = new CcServer.EndpointDetailsPropertyOutputReference(this, "endpoint_details");
    public get endpointDetails() {
        return this._endpointDetails;
    }
    public putEndpointDetails(value: CcServer.EndpointDetailsProperty) {
        this._endpointDetails.internalValue = value;
    }
    public resetEndpointDetails() {
        this._endpointDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointDetailsInput() {
        return this._endpointDetails.internalValue;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_provider_details - computed: true, optional: true, required: false
    private _identityProviderDetails = new CcServer.IdentityProviderDetailsPropertyOutputReference(this, "identity_provider_details");
    public get identityProviderDetails() {
        return this._identityProviderDetails;
    }
    public putIdentityProviderDetails(value: CcServer.IdentityProviderDetailsProperty) {
        this._identityProviderDetails.internalValue = value;
    }
    public resetIdentityProviderDetails() {
        this._identityProviderDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderDetailsInput() {
        return this._identityProviderDetails.internalValue;
    }

    // identity_provider_type - computed: true, optional: true, required: false
    private _identityProviderType?: string; 
    public get identityProviderType() {
        return this.getStringAttribute('identity_provider_type');
    }
    public set identityProviderType(value: string) {
        this._identityProviderType = value;
    }
    public resetIdentityProviderType() {
        this._identityProviderType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderTypeInput() {
        return this._identityProviderType;
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

    // logging_role - computed: true, optional: true, required: false
    private _loggingRole?: string; 
    public get loggingRole() {
        return this.getStringAttribute('logging_role');
    }
    public set loggingRole(value: string) {
        this._loggingRole = value;
    }
    public resetLoggingRole() {
        this._loggingRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingRoleInput() {
        return this._loggingRole;
    }

    // post_authentication_login_banner - computed: true, optional: true, required: false
    private _postAuthenticationLoginBanner?: string; 
    public get postAuthenticationLoginBanner() {
        return this.getStringAttribute('post_authentication_login_banner');
    }
    public set postAuthenticationLoginBanner(value: string) {
        this._postAuthenticationLoginBanner = value;
    }
    public resetPostAuthenticationLoginBanner() {
        this._postAuthenticationLoginBanner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postAuthenticationLoginBannerInput() {
        return this._postAuthenticationLoginBanner;
    }

    // pre_authentication_login_banner - computed: true, optional: true, required: false
    private _preAuthenticationLoginBanner?: string; 
    public get preAuthenticationLoginBanner() {
        return this.getStringAttribute('pre_authentication_login_banner');
    }
    public set preAuthenticationLoginBanner(value: string) {
        this._preAuthenticationLoginBanner = value;
    }
    public resetPreAuthenticationLoginBanner() {
        this._preAuthenticationLoginBanner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preAuthenticationLoginBannerInput() {
        return this._preAuthenticationLoginBanner;
    }

    // protocol_details - computed: true, optional: true, required: false
    private _protocolDetails = new CcServer.ProtocolDetailsPropertyOutputReference(this, "protocol_details");
    public get protocolDetails() {
        return this._protocolDetails;
    }
    public putProtocolDetails(value: CcServer.ProtocolDetailsProperty) {
        this._protocolDetails.internalValue = value;
    }
    public resetProtocolDetails() {
        this._protocolDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolDetailsInput() {
        return this._protocolDetails.internalValue;
    }

    // protocols - computed: true, optional: true, required: false
    private _protocols?: string[]; 
    public get protocols() {
        return this.getListAttribute('protocols');
    }
    public set protocols(value: string[]) {
        this._protocols = value;
    }
    public resetProtocols() {
        this._protocols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolsInput() {
        return this._protocols;
    }

    // s3_storage_options - computed: true, optional: true, required: false
    private _s3StorageOptions = new CcServer.S3StorageOptionsPropertyOutputReference(this, "s3_storage_options");
    public get s3StorageOptions() {
        return this._s3StorageOptions;
    }
    public putS3StorageOptions(value: CcServer.S3StorageOptionsProperty) {
        this._s3StorageOptions.internalValue = value;
    }
    public resetS3StorageOptions() {
        this._s3StorageOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3StorageOptionsInput() {
        return this._s3StorageOptions.internalValue;
    }

    // security_policy_name - computed: true, optional: true, required: false
    private _securityPolicyName?: string; 
    public get securityPolicyName() {
        return this.getStringAttribute('security_policy_name');
    }
    public set securityPolicyName(value: string) {
        this._securityPolicyName = value;
    }
    public resetSecurityPolicyName() {
        this._securityPolicyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityPolicyNameInput() {
        return this._securityPolicyName;
    }

    // server_id - computed: true, optional: false, required: false
    public get serverId() {
        return this.getStringAttribute('server_id');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // structured_log_destinations - computed: true, optional: true, required: false
    private _structuredLogDestinations?: string[]; 
    public get structuredLogDestinations() {
        return this.getListAttribute('structured_log_destinations');
    }
    public set structuredLogDestinations(value: string[]) {
        this._structuredLogDestinations = value;
    }
    public resetStructuredLogDestinations() {
        this._structuredLogDestinations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get structuredLogDestinationsInput() {
        return this._structuredLogDestinations;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcServer.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcServer.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // workflow_details - computed: true, optional: true, required: false
    private _workflowDetails = new CcServer.WorkflowDetailsPropertyOutputReference(this, "workflow_details");
    public get workflowDetails() {
        return this._workflowDetails;
    }
    public putWorkflowDetails(value: CcServer.WorkflowDetailsProperty) {
        this._workflowDetails.internalValue = value;
    }
    public resetWorkflowDetails() {
        this._workflowDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workflowDetailsInput() {
        return this._workflowDetails.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            certificate: cdktn.stringToTerraform(this._certificate),
            domain: cdktn.stringToTerraform(this._domain),
            endpoint_details: ccServerEndpointDetailsPropertyToTerraform(this._endpointDetails.internalValue),
            endpoint_type: cdktn.stringToTerraform(this._endpointType),
            identity_provider_details: ccServerIdentityProviderDetailsPropertyToTerraform(this._identityProviderDetails.internalValue),
            identity_provider_type: cdktn.stringToTerraform(this._identityProviderType),
            ip_address_type: cdktn.stringToTerraform(this._ipAddressType),
            logging_role: cdktn.stringToTerraform(this._loggingRole),
            post_authentication_login_banner: cdktn.stringToTerraform(this._postAuthenticationLoginBanner),
            pre_authentication_login_banner: cdktn.stringToTerraform(this._preAuthenticationLoginBanner),
            protocol_details: ccServerProtocolDetailsPropertyToTerraform(this._protocolDetails.internalValue),
            protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(this._protocols),
            s3_storage_options: ccServerS3StorageOptionsPropertyToTerraform(this._s3StorageOptions.internalValue),
            security_policy_name: cdktn.stringToTerraform(this._securityPolicyName),
            structured_log_destinations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._structuredLogDestinations),
            tags: cdktn.listMapper(ccServerTagPropertyToTerraform, false)(this._tags.internalValue),
            workflow_details: ccServerWorkflowDetailsPropertyToTerraform(this._workflowDetails.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            certificate: {
                value: cdktn.stringToHclTerraform(this._certificate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain: {
                value: cdktn.stringToHclTerraform(this._domain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint_details: {
                value: ccServerEndpointDetailsPropertyToHclTerraform(this._endpointDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcServer.EndpointDetailsProperty",
            },
            endpoint_type: {
                value: cdktn.stringToHclTerraform(this._endpointType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_provider_details: {
                value: ccServerIdentityProviderDetailsPropertyToHclTerraform(this._identityProviderDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcServer.IdentityProviderDetailsProperty",
            },
            identity_provider_type: {
                value: cdktn.stringToHclTerraform(this._identityProviderType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_address_type: {
                value: cdktn.stringToHclTerraform(this._ipAddressType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logging_role: {
                value: cdktn.stringToHclTerraform(this._loggingRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            post_authentication_login_banner: {
                value: cdktn.stringToHclTerraform(this._postAuthenticationLoginBanner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pre_authentication_login_banner: {
                value: cdktn.stringToHclTerraform(this._preAuthenticationLoginBanner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            protocol_details: {
                value: ccServerProtocolDetailsPropertyToHclTerraform(this._protocolDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcServer.ProtocolDetailsProperty",
            },
            protocols: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._protocols),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            s3_storage_options: {
                value: ccServerS3StorageOptionsPropertyToHclTerraform(this._s3StorageOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcServer.S3StorageOptionsProperty",
            },
            security_policy_name: {
                value: cdktn.stringToHclTerraform(this._securityPolicyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            structured_log_destinations: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._structuredLogDestinations),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccServerTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcServer.TagPropertyList",
            },
            workflow_details: {
                value: ccServerWorkflowDetailsPropertyToHclTerraform(this._workflowDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcServer.WorkflowDetailsProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccServerEndpointDetailsPropertyToTerraform(struct?: CcServer.EndpointDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        address_allocation_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.addressAllocationIds),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
        vpc_endpoint_id: cdktn.stringToTerraform(struct!.vpcEndpointId),
        vpc_id: cdktn.stringToTerraform(struct!.vpcId),
    }
}


export function ccServerEndpointDetailsPropertyToHclTerraform(struct?: CcServer.EndpointDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        address_allocation_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.addressAllocationIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        vpc_endpoint_id: {
            value: cdktn.stringToHclTerraform(struct!.vpcEndpointId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccServerIdentityProviderDetailsPropertyToTerraform(struct?: CcServer.IdentityProviderDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        directory_id: cdktn.stringToTerraform(struct!.directoryId),
        function: cdktn.stringToTerraform(struct!.function),
        invocation_role: cdktn.stringToTerraform(struct!.invocationRole),
        sftp_authentication_methods: cdktn.stringToTerraform(struct!.sftpAuthenticationMethods),
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccServerIdentityProviderDetailsPropertyToHclTerraform(struct?: CcServer.IdentityProviderDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        directory_id: {
            value: cdktn.stringToHclTerraform(struct!.directoryId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        function: {
            value: cdktn.stringToHclTerraform(struct!.function),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        invocation_role: {
            value: cdktn.stringToHclTerraform(struct!.invocationRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sftp_authentication_methods: {
            value: cdktn.stringToHclTerraform(struct!.sftpAuthenticationMethods),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        url: {
            value: cdktn.stringToHclTerraform(struct!.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServerProtocolDetailsPropertyToTerraform(struct?: CcServer.ProtocolDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        as_2_transports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.as2Transports),
        passive_ip: cdktn.stringToTerraform(struct!.passiveIp),
        set_stat_option: cdktn.stringToTerraform(struct!.setStatOption),
        tls_session_resumption_mode: cdktn.stringToTerraform(struct!.tlsSessionResumptionMode),
    }
}


export function ccServerProtocolDetailsPropertyToHclTerraform(struct?: CcServer.ProtocolDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        as_2_transports: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.as2Transports),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        passive_ip: {
            value: cdktn.stringToHclTerraform(struct!.passiveIp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        set_stat_option: {
            value: cdktn.stringToHclTerraform(struct!.setStatOption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tls_session_resumption_mode: {
            value: cdktn.stringToHclTerraform(struct!.tlsSessionResumptionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServerS3StorageOptionsPropertyToTerraform(struct?: CcServer.S3StorageOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        directory_listing_optimization: cdktn.stringToTerraform(struct!.directoryListingOptimization),
    }
}


export function ccServerS3StorageOptionsPropertyToHclTerraform(struct?: CcServer.S3StorageOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        directory_listing_optimization: {
            value: cdktn.stringToHclTerraform(struct!.directoryListingOptimization),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServerTagPropertyToTerraform(struct?: CcServer.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServerTagPropertyToHclTerraform(struct?: CcServer.TagProperty | cdktn.IResolvable): any {
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


export function ccServerWorkflowDetailPropertyToTerraform(struct?: CcServer.WorkflowDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        execution_role: cdktn.stringToTerraform(struct!.executionRole),
        workflow_id: cdktn.stringToTerraform(struct!.workflowId),
    }
}


export function ccServerWorkflowDetailPropertyToHclTerraform(struct?: CcServer.WorkflowDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        execution_role: {
            value: cdktn.stringToHclTerraform(struct!.executionRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        workflow_id: {
            value: cdktn.stringToHclTerraform(struct!.workflowId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServerOnUploadPropertyToTerraform(struct?: CcServer.OnUploadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        execution_role: cdktn.stringToTerraform(struct!.executionRole),
        workflow_id: cdktn.stringToTerraform(struct!.workflowId),
    }
}


export function ccServerOnUploadPropertyToHclTerraform(struct?: CcServer.OnUploadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        execution_role: {
            value: cdktn.stringToHclTerraform(struct!.executionRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        workflow_id: {
            value: cdktn.stringToHclTerraform(struct!.workflowId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServerWorkflowDetailsPropertyToTerraform(struct?: CcServer.WorkflowDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        on_partial_upload: cdktn.listMapper(ccServerWorkflowDetailPropertyToTerraform, false)(struct!.onPartialUpload),
        on_upload: cdktn.listMapper(ccServerOnUploadPropertyToTerraform, false)(struct!.onUpload),
    }
}


export function ccServerWorkflowDetailsPropertyToHclTerraform(struct?: CcServer.WorkflowDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        on_partial_upload: {
            value: cdktn.listMapperHcl(ccServerWorkflowDetailPropertyToHclTerraform, false)(struct!.onPartialUpload),
            isBlock: true,
            type: "list",
            storageClassType: "WorkflowDetailPropertyList",
        },
        on_upload: {
            value: cdktn.listMapperHcl(ccServerOnUploadPropertyToHclTerraform, false)(struct!.onUpload),
            isBlock: true,
            type: "list",
            storageClassType: "OnUploadPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcServer {
export interface EndpointDetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#address_allocation_ids CcServer#address_allocation_ids}
    */
    readonly addressAllocationIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#security_group_ids CcServer#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#subnet_ids CcServer#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#vpc_endpoint_id CcServer#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#vpc_id CcServer#vpc_id}
    */
    readonly vpcId?: string;
}
export class EndpointDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._addressAllocationIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.addressAllocationIds = this._addressAllocationIds;
        }
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        if (this._vpcEndpointId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcEndpointId = this._vpcEndpointId;
        }
        if (this._vpcId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcId = this._vpcId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addressAllocationIds = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
            this._vpcEndpointId = undefined;
            this._vpcId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addressAllocationIds = value.addressAllocationIds;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
            this._vpcEndpointId = value.vpcEndpointId;
            this._vpcId = value.vpcId;
        }
    }

    // address_allocation_ids - computed: true, optional: true, required: false
    private _addressAllocationIds?: string[]; 
    public get addressAllocationIds() {
        return this.getListAttribute('address_allocation_ids');
    }
    public set addressAllocationIds(value: string[]) {
        this._addressAllocationIds = value;
    }
    public resetAddressAllocationIds() {
        this._addressAllocationIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressAllocationIdsInput() {
        return this._addressAllocationIds;
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

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }

    // vpc_endpoint_id - computed: true, optional: true, required: false
    private _vpcEndpointId?: string; 
    public get vpcEndpointId() {
        return this.getStringAttribute('vpc_endpoint_id');
    }
    public set vpcEndpointId(value: string) {
        this._vpcEndpointId = value;
    }
    public resetVpcEndpointId() {
        this._vpcEndpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointIdInput() {
        return this._vpcEndpointId;
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
export interface IdentityProviderDetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#directory_id CcServer#directory_id}
    */
    readonly directoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#function CcServer#function}
    */
    readonly function?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#invocation_role CcServer#invocation_role}
    */
    readonly invocationRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#sftp_authentication_methods CcServer#sftp_authentication_methods}
    */
    readonly sftpAuthenticationMethods?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#url CcServer#url}
    */
    readonly url?: string;
}
export class IdentityProviderDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IdentityProviderDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._directoryId !== undefined) {
            hasAnyValues = true;
            internalValueResult.directoryId = this._directoryId;
        }
        if (this._function !== undefined) {
            hasAnyValues = true;
            internalValueResult.function = this._function;
        }
        if (this._invocationRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.invocationRole = this._invocationRole;
        }
        if (this._sftpAuthenticationMethods !== undefined) {
            hasAnyValues = true;
            internalValueResult.sftpAuthenticationMethods = this._sftpAuthenticationMethods;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdentityProviderDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._directoryId = undefined;
            this._function = undefined;
            this._invocationRole = undefined;
            this._sftpAuthenticationMethods = undefined;
            this._url = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._directoryId = value.directoryId;
            this._function = value.function;
            this._invocationRole = value.invocationRole;
            this._sftpAuthenticationMethods = value.sftpAuthenticationMethods;
            this._url = value.url;
        }
    }

    // directory_id - computed: true, optional: true, required: false
    private _directoryId?: string; 
    public get directoryId() {
        return this.getStringAttribute('directory_id');
    }
    public set directoryId(value: string) {
        this._directoryId = value;
    }
    public resetDirectoryId() {
        this._directoryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryIdInput() {
        return this._directoryId;
    }

    // function - computed: true, optional: true, required: false
    private _function?: string; 
    public get function() {
        return this.getStringAttribute('function');
    }
    public set function(value: string) {
        this._function = value;
    }
    public resetFunction() {
        this._function = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionInput() {
        return this._function;
    }

    // invocation_role - computed: true, optional: true, required: false
    private _invocationRole?: string; 
    public get invocationRole() {
        return this.getStringAttribute('invocation_role');
    }
    public set invocationRole(value: string) {
        this._invocationRole = value;
    }
    public resetInvocationRole() {
        this._invocationRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationRoleInput() {
        return this._invocationRole;
    }

    // sftp_authentication_methods - computed: true, optional: true, required: false
    private _sftpAuthenticationMethods?: string; 
    public get sftpAuthenticationMethods() {
        return this.getStringAttribute('sftp_authentication_methods');
    }
    public set sftpAuthenticationMethods(value: string) {
        this._sftpAuthenticationMethods = value;
    }
    public resetSftpAuthenticationMethods() {
        this._sftpAuthenticationMethods = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sftpAuthenticationMethodsInput() {
        return this._sftpAuthenticationMethods;
    }

    // url - computed: true, optional: true, required: false
    private _url?: string; 
    public get url() {
        return this.getStringAttribute('url');
    }
    public set url(value: string) {
        this._url = value;
    }
    public resetUrl() {
        this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
        return this._url;
    }
}
export interface ProtocolDetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#as_2_transports CcServer#as_2_transports}
    */
    readonly as2Transports?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#passive_ip CcServer#passive_ip}
    */
    readonly passiveIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#set_stat_option CcServer#set_stat_option}
    */
    readonly setStatOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#tls_session_resumption_mode CcServer#tls_session_resumption_mode}
    */
    readonly tlsSessionResumptionMode?: string;
}
export class ProtocolDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProtocolDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._as2Transports !== undefined) {
            hasAnyValues = true;
            internalValueResult.as2Transports = this._as2Transports;
        }
        if (this._passiveIp !== undefined) {
            hasAnyValues = true;
            internalValueResult.passiveIp = this._passiveIp;
        }
        if (this._setStatOption !== undefined) {
            hasAnyValues = true;
            internalValueResult.setStatOption = this._setStatOption;
        }
        if (this._tlsSessionResumptionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.tlsSessionResumptionMode = this._tlsSessionResumptionMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProtocolDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._as2Transports = undefined;
            this._passiveIp = undefined;
            this._setStatOption = undefined;
            this._tlsSessionResumptionMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._as2Transports = value.as2Transports;
            this._passiveIp = value.passiveIp;
            this._setStatOption = value.setStatOption;
            this._tlsSessionResumptionMode = value.tlsSessionResumptionMode;
        }
    }

    // as_2_transports - computed: true, optional: true, required: false
    private _as2Transports?: string[]; 
    public get as2Transports() {
        return this.getListAttribute('as_2_transports');
    }
    public set as2Transports(value: string[]) {
        this._as2Transports = value;
    }
    public resetAs2Transports() {
        this._as2Transports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get as2TransportsInput() {
        return this._as2Transports;
    }

    // passive_ip - computed: true, optional: true, required: false
    private _passiveIp?: string; 
    public get passiveIp() {
        return this.getStringAttribute('passive_ip');
    }
    public set passiveIp(value: string) {
        this._passiveIp = value;
    }
    public resetPassiveIp() {
        this._passiveIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passiveIpInput() {
        return this._passiveIp;
    }

    // set_stat_option - computed: true, optional: true, required: false
    private _setStatOption?: string; 
    public get setStatOption() {
        return this.getStringAttribute('set_stat_option');
    }
    public set setStatOption(value: string) {
        this._setStatOption = value;
    }
    public resetSetStatOption() {
        this._setStatOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get setStatOptionInput() {
        return this._setStatOption;
    }

    // tls_session_resumption_mode - computed: true, optional: true, required: false
    private _tlsSessionResumptionMode?: string; 
    public get tlsSessionResumptionMode() {
        return this.getStringAttribute('tls_session_resumption_mode');
    }
    public set tlsSessionResumptionMode(value: string) {
        this._tlsSessionResumptionMode = value;
    }
    public resetTlsSessionResumptionMode() {
        this._tlsSessionResumptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsSessionResumptionModeInput() {
        return this._tlsSessionResumptionMode;
    }
}
export interface S3StorageOptionsProperty {
    /**
    * Indicates whether optimization to directory listing on S3 servers is used. Disabled by default for compatibility.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#directory_listing_optimization CcServer#directory_listing_optimization}
    */
    readonly directoryListingOptimization?: string;
}
export class S3StorageOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3StorageOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._directoryListingOptimization !== undefined) {
            hasAnyValues = true;
            internalValueResult.directoryListingOptimization = this._directoryListingOptimization;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3StorageOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._directoryListingOptimization = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._directoryListingOptimization = value.directoryListingOptimization;
        }
    }

    // directory_listing_optimization - computed: true, optional: true, required: false
    private _directoryListingOptimization?: string; 
    public get directoryListingOptimization() {
        return this.getStringAttribute('directory_listing_optimization');
    }
    public set directoryListingOptimization(value: string) {
        this._directoryListingOptimization = value;
    }
    public resetDirectoryListingOptimization() {
        this._directoryListingOptimization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryListingOptimizationInput() {
        return this._directoryListingOptimization;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#key CcServer#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#value CcServer#value}
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
export interface WorkflowDetailProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#execution_role CcServer#execution_role}
    */
    readonly executionRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#workflow_id CcServer#workflow_id}
    */
    readonly workflowId?: string;
}
export class WorkflowDetailPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): WorkflowDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._executionRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionRole = this._executionRole;
        }
        if (this._workflowId !== undefined) {
            hasAnyValues = true;
            internalValueResult.workflowId = this._workflowId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkflowDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._executionRole = undefined;
            this._workflowId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._executionRole = value.executionRole;
            this._workflowId = value.workflowId;
        }
    }

    // execution_role - computed: true, optional: true, required: false
    private _executionRole?: string; 
    public get executionRole() {
        return this.getStringAttribute('execution_role');
    }
    public set executionRole(value: string) {
        this._executionRole = value;
    }
    public resetExecutionRole() {
        this._executionRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleInput() {
        return this._executionRole;
    }

    // workflow_id - computed: true, optional: true, required: false
    private _workflowId?: string; 
    public get workflowId() {
        return this.getStringAttribute('workflow_id');
    }
    public set workflowId(value: string) {
        this._workflowId = value;
    }
    public resetWorkflowId() {
        this._workflowId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workflowIdInput() {
        return this._workflowId;
    }
}

export class WorkflowDetailPropertyList extends cdktn.ComplexList {
    public internalValue? : WorkflowDetailProperty[] | cdktn.IResolvable

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
    public get(index: number): WorkflowDetailPropertyOutputReference {
        return new WorkflowDetailPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OnUploadProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#execution_role CcServer#execution_role}
    */
    readonly executionRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#workflow_id CcServer#workflow_id}
    */
    readonly workflowId?: string;
}
export class OnUploadPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): OnUploadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._executionRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionRole = this._executionRole;
        }
        if (this._workflowId !== undefined) {
            hasAnyValues = true;
            internalValueResult.workflowId = this._workflowId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnUploadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._executionRole = undefined;
            this._workflowId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._executionRole = value.executionRole;
            this._workflowId = value.workflowId;
        }
    }

    // execution_role - computed: true, optional: true, required: false
    private _executionRole?: string; 
    public get executionRole() {
        return this.getStringAttribute('execution_role');
    }
    public set executionRole(value: string) {
        this._executionRole = value;
    }
    public resetExecutionRole() {
        this._executionRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleInput() {
        return this._executionRole;
    }

    // workflow_id - computed: true, optional: true, required: false
    private _workflowId?: string; 
    public get workflowId() {
        return this.getStringAttribute('workflow_id');
    }
    public set workflowId(value: string) {
        this._workflowId = value;
    }
    public resetWorkflowId() {
        this._workflowId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workflowIdInput() {
        return this._workflowId;
    }
}

export class OnUploadPropertyList extends cdktn.ComplexList {
    public internalValue? : OnUploadProperty[] | cdktn.IResolvable

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
    public get(index: number): OnUploadPropertyOutputReference {
        return new OnUploadPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface WorkflowDetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#on_partial_upload CcServer#on_partial_upload}
    */
    readonly onPartialUpload?: WorkflowDetailProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_server#on_upload CcServer#on_upload}
    */
    readonly onUpload?: OnUploadProperty[] | cdktn.IResolvable;
}
export class WorkflowDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkflowDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._onPartialUpload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.onPartialUpload = this._onPartialUpload?.internalValue;
        }
        if (this._onUpload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.onUpload = this._onUpload?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkflowDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._onPartialUpload.internalValue = undefined;
            this._onUpload.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._onPartialUpload.internalValue = value.onPartialUpload;
            this._onUpload.internalValue = value.onUpload;
        }
    }

    // on_partial_upload - computed: true, optional: true, required: false
    private _onPartialUpload = new WorkflowDetailPropertyList(this, "on_partial_upload", false);
    public get onPartialUpload() {
        return this._onPartialUpload;
    }
    public putOnPartialUpload(value: WorkflowDetailProperty[] | cdktn.IResolvable) {
        this._onPartialUpload.internalValue = value;
    }
    public resetOnPartialUpload() {
        this._onPartialUpload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onPartialUploadInput() {
        return this._onPartialUpload.internalValue;
    }

    // on_upload - computed: true, optional: true, required: false
    private _onUpload = new OnUploadPropertyList(this, "on_upload", false);
    public get onUpload() {
        return this._onUpload;
    }
    public putOnUpload(value: OnUploadProperty[] | cdktn.IResolvable) {
        this._onUpload.internalValue = value;
    }
    public resetOnUpload() {
        this._onUpload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onUploadInput() {
        return this._onUpload.internalValue;
    }
}
}
