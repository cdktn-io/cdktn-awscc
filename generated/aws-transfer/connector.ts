// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectorProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies the access role for the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#access_role CcConnector#access_role}
    */
    readonly accessRole: string;
    /**
    * Configuration for an AS2 connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#as_2_config CcConnector#as_2_config}
    */
    readonly as2Config?: CcConnector.As2ConfigProperty;
    /**
    * Egress configuration for the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#egress_config CcConnector#egress_config}
    */
    readonly egressConfig?: CcConnector.ConnectorEgressConfigProperty;
    /**
    * Specifies the egress type for the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#egress_type CcConnector#egress_type}
    */
    readonly egressType?: string;
    /**
    * IP address type for Connector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#ip_address_type CcConnector#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Specifies the logging role for the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#logging_role CcConnector#logging_role}
    */
    readonly loggingRole?: string;
    /**
    * Security policy for SFTP Connector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#security_policy_name CcConnector#security_policy_name}
    */
    readonly securityPolicyName?: string;
    /**
    * Configuration for an SFTP connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#sftp_config CcConnector#sftp_config}
    */
    readonly sftpConfig?: CcConnector.SftpConfigProperty;
    /**
    * Key-value pairs that can be used to group and search for connectors. Tags are metadata attached to connectors for any purpose.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#tags CcConnector#tags}
    */
    readonly tags?: CcConnector.TagProperty[] | cdktn.IResolvable;
    /**
    * URL for Connector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#url CcConnector#url}
    */
    readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector awscc_transfer_connector}
*/
export class CcConnector extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_transfer_connector";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnector resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnector to import
    * @param importFromId The id of the existing CcConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnector to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_transfer_connector", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector awscc_transfer_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectorProps
    */
    public constructor(scope: Construct, id: string, config: CcConnectorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_transfer_connector',
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
        this._accessRole = config.accessRole;
        this._as2Config.internalValue = config.as2Config;
        this._egressConfig.internalValue = config.egressConfig;
        this._egressType = config.egressType;
        this._ipAddressType = config.ipAddressType;
        this._loggingRole = config.loggingRole;
        this._securityPolicyName = config.securityPolicyName;
        this._sftpConfig.internalValue = config.sftpConfig;
        this._tags.internalValue = config.tags;
        this._url = config.url;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_role - computed: false, optional: false, required: true
    private _accessRole?: string; 
    public get accessRole() {
        return this.getStringAttribute('access_role');
    }
    public set accessRole(value: string) {
        this._accessRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accessRoleInput() {
        return this._accessRole;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // as_2_config - computed: true, optional: true, required: false
    private _as2Config = new CcConnector.As2ConfigPropertyOutputReference(this, "as_2_config");
    public get as2Config() {
        return this._as2Config;
    }
    public putAs2Config(value: CcConnector.As2ConfigProperty) {
        this._as2Config.internalValue = value;
    }
    public resetAs2Config() {
        this._as2Config.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get as2ConfigInput() {
        return this._as2Config.internalValue;
    }

    // connector_id - computed: true, optional: false, required: false
    public get connectorId() {
        return this.getStringAttribute('connector_id');
    }

    // egress_config - computed: true, optional: true, required: false
    private _egressConfig = new CcConnector.ConnectorEgressConfigPropertyOutputReference(this, "egress_config");
    public get egressConfig() {
        return this._egressConfig;
    }
    public putEgressConfig(value: CcConnector.ConnectorEgressConfigProperty) {
        this._egressConfig.internalValue = value;
    }
    public resetEgressConfig() {
        this._egressConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressConfigInput() {
        return this._egressConfig.internalValue;
    }

    // egress_type - computed: true, optional: true, required: false
    private _egressType?: string; 
    public get egressType() {
        return this.getStringAttribute('egress_type');
    }
    public set egressType(value: string) {
        this._egressType = value;
    }
    public resetEgressType() {
        this._egressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressTypeInput() {
        return this._egressType;
    }

    // error_message - computed: true, optional: false, required: false
    public get errorMessage() {
        return this.getStringAttribute('error_message');
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

    // service_managed_egress_ip_addresses - computed: true, optional: false, required: false
    public get serviceManagedEgressIpAddresses() {
        return this.getListAttribute('service_managed_egress_ip_addresses');
    }

    // sftp_config - computed: true, optional: true, required: false
    private _sftpConfig = new CcConnector.SftpConfigPropertyOutputReference(this, "sftp_config");
    public get sftpConfig() {
        return this._sftpConfig;
    }
    public putSftpConfig(value: CcConnector.SftpConfigProperty) {
        this._sftpConfig.internalValue = value;
    }
    public resetSftpConfig() {
        this._sftpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sftpConfigInput() {
        return this._sftpConfig.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConnector.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConnector.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            access_role: cdktn.stringToTerraform(this._accessRole),
            as_2_config: ccConnectorAs2ConfigPropertyToTerraform(this._as2Config.internalValue),
            egress_config: ccConnectorConnectorEgressConfigPropertyToTerraform(this._egressConfig.internalValue),
            egress_type: cdktn.stringToTerraform(this._egressType),
            ip_address_type: cdktn.stringToTerraform(this._ipAddressType),
            logging_role: cdktn.stringToTerraform(this._loggingRole),
            security_policy_name: cdktn.stringToTerraform(this._securityPolicyName),
            sftp_config: ccConnectorSftpConfigPropertyToTerraform(this._sftpConfig.internalValue),
            tags: cdktn.listMapper(ccConnectorTagPropertyToTerraform, false)(this._tags.internalValue),
            url: cdktn.stringToTerraform(this._url),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_role: {
                value: cdktn.stringToHclTerraform(this._accessRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            as_2_config: {
                value: ccConnectorAs2ConfigPropertyToHclTerraform(this._as2Config.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnector.As2ConfigProperty",
            },
            egress_config: {
                value: ccConnectorConnectorEgressConfigPropertyToHclTerraform(this._egressConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnector.ConnectorEgressConfigProperty",
            },
            egress_type: {
                value: cdktn.stringToHclTerraform(this._egressType),
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
            security_policy_name: {
                value: cdktn.stringToHclTerraform(this._securityPolicyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sftp_config: {
                value: ccConnectorSftpConfigPropertyToHclTerraform(this._sftpConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnector.SftpConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConnectorTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcConnector.TagPropertyList",
            },
            url: {
                value: cdktn.stringToHclTerraform(this._url),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConnectorConnectorAsyncMdnConfigPropertyToTerraform(struct?: CcConnector.ConnectorAsyncMdnConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        server_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.serverIds),
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccConnectorConnectorAsyncMdnConfigPropertyToHclTerraform(struct?: CcConnector.ConnectorAsyncMdnConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        server_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.serverIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
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


export function ccConnectorAs2ConfigPropertyToTerraform(struct?: CcConnector.As2ConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        async_mdn_config: ccConnectorConnectorAsyncMdnConfigPropertyToTerraform(struct!.asyncMdnConfig),
        basic_auth_secret_id: cdktn.stringToTerraform(struct!.basicAuthSecretId),
        compression: cdktn.stringToTerraform(struct!.compression),
        encryption_algorithm: cdktn.stringToTerraform(struct!.encryptionAlgorithm),
        local_profile_id: cdktn.stringToTerraform(struct!.localProfileId),
        mdn_response: cdktn.stringToTerraform(struct!.mdnResponse),
        mdn_signing_algorithm: cdktn.stringToTerraform(struct!.mdnSigningAlgorithm),
        message_subject: cdktn.stringToTerraform(struct!.messageSubject),
        partner_profile_id: cdktn.stringToTerraform(struct!.partnerProfileId),
        preserve_content_type: cdktn.stringToTerraform(struct!.preserveContentType),
        signing_algorithm: cdktn.stringToTerraform(struct!.signingAlgorithm),
    }
}


export function ccConnectorAs2ConfigPropertyToHclTerraform(struct?: CcConnector.As2ConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        async_mdn_config: {
            value: ccConnectorConnectorAsyncMdnConfigPropertyToHclTerraform(struct!.asyncMdnConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorAsyncMdnConfigProperty",
        },
        basic_auth_secret_id: {
            value: cdktn.stringToHclTerraform(struct!.basicAuthSecretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        compression: {
            value: cdktn.stringToHclTerraform(struct!.compression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encryption_algorithm: {
            value: cdktn.stringToHclTerraform(struct!.encryptionAlgorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        local_profile_id: {
            value: cdktn.stringToHclTerraform(struct!.localProfileId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mdn_response: {
            value: cdktn.stringToHclTerraform(struct!.mdnResponse),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mdn_signing_algorithm: {
            value: cdktn.stringToHclTerraform(struct!.mdnSigningAlgorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_subject: {
            value: cdktn.stringToHclTerraform(struct!.messageSubject),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        partner_profile_id: {
            value: cdktn.stringToHclTerraform(struct!.partnerProfileId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        preserve_content_type: {
            value: cdktn.stringToHclTerraform(struct!.preserveContentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        signing_algorithm: {
            value: cdktn.stringToHclTerraform(struct!.signingAlgorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorConnectorVpcLatticeEgressConfigPropertyToTerraform(struct?: CcConnector.ConnectorVpcLatticeEgressConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        port_number: cdktn.numberToTerraform(struct!.portNumber),
        resource_configuration_arn: cdktn.stringToTerraform(struct!.resourceConfigurationArn),
    }
}


export function ccConnectorConnectorVpcLatticeEgressConfigPropertyToHclTerraform(struct?: CcConnector.ConnectorVpcLatticeEgressConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        port_number: {
            value: cdktn.numberToHclTerraform(struct!.portNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        resource_configuration_arn: {
            value: cdktn.stringToHclTerraform(struct!.resourceConfigurationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorConnectorEgressConfigPropertyToTerraform(struct?: CcConnector.ConnectorEgressConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpc_lattice: ccConnectorConnectorVpcLatticeEgressConfigPropertyToTerraform(struct!.vpcLattice),
    }
}


export function ccConnectorConnectorEgressConfigPropertyToHclTerraform(struct?: CcConnector.ConnectorEgressConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        vpc_lattice: {
            value: ccConnectorConnectorVpcLatticeEgressConfigPropertyToHclTerraform(struct!.vpcLattice),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorVpcLatticeEgressConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorSftpConfigPropertyToTerraform(struct?: CcConnector.SftpConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_concurrent_connections: cdktn.numberToTerraform(struct!.maxConcurrentConnections),
        trusted_host_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.trustedHostKeys),
        user_secret_id: cdktn.stringToTerraform(struct!.userSecretId),
    }
}


export function ccConnectorSftpConfigPropertyToHclTerraform(struct?: CcConnector.SftpConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_concurrent_connections: {
            value: cdktn.numberToHclTerraform(struct!.maxConcurrentConnections),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        trusted_host_keys: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.trustedHostKeys),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        user_secret_id: {
            value: cdktn.stringToHclTerraform(struct!.userSecretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorTagPropertyToTerraform(struct?: CcConnector.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConnectorTagPropertyToHclTerraform(struct?: CcConnector.TagProperty | cdktn.IResolvable): any {
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


export namespace CcConnector {
export interface ConnectorAsyncMdnConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#server_ids CcConnector#server_ids}
    */
    readonly serverIds?: string[];
    /**
    * URL of the server to receive the MDN response on
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#url CcConnector#url}
    */
    readonly url?: string;
}
export class ConnectorAsyncMdnConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorAsyncMdnConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._serverIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverIds = this._serverIds;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorAsyncMdnConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._serverIds = undefined;
            this._url = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._serverIds = value.serverIds;
            this._url = value.url;
        }
    }

    // server_ids - computed: true, optional: true, required: false
    private _serverIds?: string[]; 
    public get serverIds() {
        return cdktn.Fn.tolist(this.getListAttribute('server_ids'));
    }
    public set serverIds(value: string[]) {
        this._serverIds = value;
    }
    public resetServerIds() {
        this._serverIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverIdsInput() {
        return this._serverIds;
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
export interface As2ConfigProperty {
    /**
    * Configuration for an AS2 connector with ASYNC MDN Response
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#async_mdn_config CcConnector#async_mdn_config}
    */
    readonly asyncMdnConfig?: ConnectorAsyncMdnConfigProperty;
    /**
    * ARN or name of the secret in AWS Secrets Manager which contains the credentials for Basic authentication. If empty, Basic authentication is disabled for the AS2 connector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#basic_auth_secret_id CcConnector#basic_auth_secret_id}
    */
    readonly basicAuthSecretId?: string;
    /**
    * Compression setting for this AS2 connector configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#compression CcConnector#compression}
    */
    readonly compression?: string;
    /**
    * Encryption algorithm for this AS2 connector configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#encryption_algorithm CcConnector#encryption_algorithm}
    */
    readonly encryptionAlgorithm?: string;
    /**
    * A unique identifier for the local profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#local_profile_id CcConnector#local_profile_id}
    */
    readonly localProfileId?: string;
    /**
    * MDN Response setting for this AS2 connector configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#mdn_response CcConnector#mdn_response}
    */
    readonly mdnResponse?: string;
    /**
    * MDN Signing algorithm for this AS2 connector configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#mdn_signing_algorithm CcConnector#mdn_signing_algorithm}
    */
    readonly mdnSigningAlgorithm?: string;
    /**
    * The message subject for this AS2 connector configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#message_subject CcConnector#message_subject}
    */
    readonly messageSubject?: string;
    /**
    * A unique identifier for the partner profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#partner_profile_id CcConnector#partner_profile_id}
    */
    readonly partnerProfileId?: string;
    /**
    * Specifies whether to use the AWS S3 object content-type as the content-type for the AS2 message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#preserve_content_type CcConnector#preserve_content_type}
    */
    readonly preserveContentType?: string;
    /**
    * Signing algorithm for this AS2 connector configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#signing_algorithm CcConnector#signing_algorithm}
    */
    readonly signingAlgorithm?: string;
}
export class As2ConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): As2ConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._asyncMdnConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.asyncMdnConfig = this._asyncMdnConfig?.internalValue;
        }
        if (this._basicAuthSecretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.basicAuthSecretId = this._basicAuthSecretId;
        }
        if (this._compression !== undefined) {
            hasAnyValues = true;
            internalValueResult.compression = this._compression;
        }
        if (this._encryptionAlgorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
        }
        if (this._localProfileId !== undefined) {
            hasAnyValues = true;
            internalValueResult.localProfileId = this._localProfileId;
        }
        if (this._mdnResponse !== undefined) {
            hasAnyValues = true;
            internalValueResult.mdnResponse = this._mdnResponse;
        }
        if (this._mdnSigningAlgorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.mdnSigningAlgorithm = this._mdnSigningAlgorithm;
        }
        if (this._messageSubject !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageSubject = this._messageSubject;
        }
        if (this._partnerProfileId !== undefined) {
            hasAnyValues = true;
            internalValueResult.partnerProfileId = this._partnerProfileId;
        }
        if (this._preserveContentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.preserveContentType = this._preserveContentType;
        }
        if (this._signingAlgorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.signingAlgorithm = this._signingAlgorithm;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: As2ConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._asyncMdnConfig.internalValue = undefined;
            this._basicAuthSecretId = undefined;
            this._compression = undefined;
            this._encryptionAlgorithm = undefined;
            this._localProfileId = undefined;
            this._mdnResponse = undefined;
            this._mdnSigningAlgorithm = undefined;
            this._messageSubject = undefined;
            this._partnerProfileId = undefined;
            this._preserveContentType = undefined;
            this._signingAlgorithm = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._asyncMdnConfig.internalValue = value.asyncMdnConfig;
            this._basicAuthSecretId = value.basicAuthSecretId;
            this._compression = value.compression;
            this._encryptionAlgorithm = value.encryptionAlgorithm;
            this._localProfileId = value.localProfileId;
            this._mdnResponse = value.mdnResponse;
            this._mdnSigningAlgorithm = value.mdnSigningAlgorithm;
            this._messageSubject = value.messageSubject;
            this._partnerProfileId = value.partnerProfileId;
            this._preserveContentType = value.preserveContentType;
            this._signingAlgorithm = value.signingAlgorithm;
        }
    }

    // async_mdn_config - computed: true, optional: true, required: false
    private _asyncMdnConfig = new ConnectorAsyncMdnConfigPropertyOutputReference(this, "async_mdn_config");
    public get asyncMdnConfig() {
        return this._asyncMdnConfig;
    }
    public putAsyncMdnConfig(value: ConnectorAsyncMdnConfigProperty) {
        this._asyncMdnConfig.internalValue = value;
    }
    public resetAsyncMdnConfig() {
        this._asyncMdnConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get asyncMdnConfigInput() {
        return this._asyncMdnConfig.internalValue;
    }

    // basic_auth_secret_id - computed: true, optional: true, required: false
    private _basicAuthSecretId?: string; 
    public get basicAuthSecretId() {
        return this.getStringAttribute('basic_auth_secret_id');
    }
    public set basicAuthSecretId(value: string) {
        this._basicAuthSecretId = value;
    }
    public resetBasicAuthSecretId() {
        this._basicAuthSecretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basicAuthSecretIdInput() {
        return this._basicAuthSecretId;
    }

    // compression - computed: true, optional: true, required: false
    private _compression?: string; 
    public get compression() {
        return this.getStringAttribute('compression');
    }
    public set compression(value: string) {
        this._compression = value;
    }
    public resetCompression() {
        this._compression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionInput() {
        return this._compression;
    }

    // encryption_algorithm - computed: true, optional: true, required: false
    private _encryptionAlgorithm?: string; 
    public get encryptionAlgorithm() {
        return this.getStringAttribute('encryption_algorithm');
    }
    public set encryptionAlgorithm(value: string) {
        this._encryptionAlgorithm = value;
    }
    public resetEncryptionAlgorithm() {
        this._encryptionAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionAlgorithmInput() {
        return this._encryptionAlgorithm;
    }

    // local_profile_id - computed: true, optional: true, required: false
    private _localProfileId?: string; 
    public get localProfileId() {
        return this.getStringAttribute('local_profile_id');
    }
    public set localProfileId(value: string) {
        this._localProfileId = value;
    }
    public resetLocalProfileId() {
        this._localProfileId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localProfileIdInput() {
        return this._localProfileId;
    }

    // mdn_response - computed: true, optional: true, required: false
    private _mdnResponse?: string; 
    public get mdnResponse() {
        return this.getStringAttribute('mdn_response');
    }
    public set mdnResponse(value: string) {
        this._mdnResponse = value;
    }
    public resetMdnResponse() {
        this._mdnResponse = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mdnResponseInput() {
        return this._mdnResponse;
    }

    // mdn_signing_algorithm - computed: true, optional: true, required: false
    private _mdnSigningAlgorithm?: string; 
    public get mdnSigningAlgorithm() {
        return this.getStringAttribute('mdn_signing_algorithm');
    }
    public set mdnSigningAlgorithm(value: string) {
        this._mdnSigningAlgorithm = value;
    }
    public resetMdnSigningAlgorithm() {
        this._mdnSigningAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mdnSigningAlgorithmInput() {
        return this._mdnSigningAlgorithm;
    }

    // message_subject - computed: true, optional: true, required: false
    private _messageSubject?: string; 
    public get messageSubject() {
        return this.getStringAttribute('message_subject');
    }
    public set messageSubject(value: string) {
        this._messageSubject = value;
    }
    public resetMessageSubject() {
        this._messageSubject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageSubjectInput() {
        return this._messageSubject;
    }

    // partner_profile_id - computed: true, optional: true, required: false
    private _partnerProfileId?: string; 
    public get partnerProfileId() {
        return this.getStringAttribute('partner_profile_id');
    }
    public set partnerProfileId(value: string) {
        this._partnerProfileId = value;
    }
    public resetPartnerProfileId() {
        this._partnerProfileId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partnerProfileIdInput() {
        return this._partnerProfileId;
    }

    // preserve_content_type - computed: true, optional: true, required: false
    private _preserveContentType?: string; 
    public get preserveContentType() {
        return this.getStringAttribute('preserve_content_type');
    }
    public set preserveContentType(value: string) {
        this._preserveContentType = value;
    }
    public resetPreserveContentType() {
        this._preserveContentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preserveContentTypeInput() {
        return this._preserveContentType;
    }

    // signing_algorithm - computed: true, optional: true, required: false
    private _signingAlgorithm?: string; 
    public get signingAlgorithm() {
        return this.getStringAttribute('signing_algorithm');
    }
    public set signingAlgorithm(value: string) {
        this._signingAlgorithm = value;
    }
    public resetSigningAlgorithm() {
        this._signingAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get signingAlgorithmInput() {
        return this._signingAlgorithm;
    }
}
export interface ConnectorVpcLatticeEgressConfigProperty {
    /**
    * Port to connect to on the target VPC Lattice resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#port_number CcConnector#port_number}
    */
    readonly portNumber?: number;
    /**
    * ARN of the VPC Lattice resource configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#resource_configuration_arn CcConnector#resource_configuration_arn}
    */
    readonly resourceConfigurationArn?: string;
}
export class ConnectorVpcLatticeEgressConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorVpcLatticeEgressConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._portNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.portNumber = this._portNumber;
        }
        if (this._resourceConfigurationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceConfigurationArn = this._resourceConfigurationArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorVpcLatticeEgressConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._portNumber = undefined;
            this._resourceConfigurationArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._portNumber = value.portNumber;
            this._resourceConfigurationArn = value.resourceConfigurationArn;
        }
    }

    // port_number - computed: true, optional: true, required: false
    private _portNumber?: number; 
    public get portNumber() {
        return this.getNumberAttribute('port_number');
    }
    public set portNumber(value: number) {
        this._portNumber = value;
    }
    public resetPortNumber() {
        this._portNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portNumberInput() {
        return this._portNumber;
    }

    // resource_configuration_arn - computed: true, optional: true, required: false
    private _resourceConfigurationArn?: string; 
    public get resourceConfigurationArn() {
        return this.getStringAttribute('resource_configuration_arn');
    }
    public set resourceConfigurationArn(value: string) {
        this._resourceConfigurationArn = value;
    }
    public resetResourceConfigurationArn() {
        this._resourceConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceConfigurationArnInput() {
        return this._resourceConfigurationArn;
    }
}
export interface ConnectorEgressConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#vpc_lattice CcConnector#vpc_lattice}
    */
    readonly vpcLattice?: ConnectorVpcLatticeEgressConfigProperty;
}
export class ConnectorEgressConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorEgressConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._vpcLattice?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcLattice = this._vpcLattice?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorEgressConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._vpcLattice.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._vpcLattice.internalValue = value.vpcLattice;
        }
    }

    // vpc_lattice - computed: true, optional: true, required: false
    private _vpcLattice = new ConnectorVpcLatticeEgressConfigPropertyOutputReference(this, "vpc_lattice");
    public get vpcLattice() {
        return this._vpcLattice;
    }
    public putVpcLattice(value: ConnectorVpcLatticeEgressConfigProperty) {
        this._vpcLattice.internalValue = value;
    }
    public resetVpcLattice() {
        this._vpcLattice.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcLatticeInput() {
        return this._vpcLattice.internalValue;
    }
}
export interface SftpConfigProperty {
    /**
    * Specifies the number of active connections that your connector can establish with the remote server at the same time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#max_concurrent_connections CcConnector#max_concurrent_connections}
    */
    readonly maxConcurrentConnections?: number;
    /**
    * List of public host keys, for the external server to which you are connecting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#trusted_host_keys CcConnector#trusted_host_keys}
    */
    readonly trustedHostKeys?: string[];
    /**
    * ARN or name of the secret in AWS Secrets Manager which contains the SFTP user's private keys or passwords.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#user_secret_id CcConnector#user_secret_id}
    */
    readonly userSecretId?: string;
}
export class SftpConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SftpConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxConcurrentConnections !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxConcurrentConnections = this._maxConcurrentConnections;
        }
        if (this._trustedHostKeys !== undefined) {
            hasAnyValues = true;
            internalValueResult.trustedHostKeys = this._trustedHostKeys;
        }
        if (this._userSecretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.userSecretId = this._userSecretId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SftpConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxConcurrentConnections = undefined;
            this._trustedHostKeys = undefined;
            this._userSecretId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxConcurrentConnections = value.maxConcurrentConnections;
            this._trustedHostKeys = value.trustedHostKeys;
            this._userSecretId = value.userSecretId;
        }
    }

    // max_concurrent_connections - computed: true, optional: true, required: false
    private _maxConcurrentConnections?: number; 
    public get maxConcurrentConnections() {
        return this.getNumberAttribute('max_concurrent_connections');
    }
    public set maxConcurrentConnections(value: number) {
        this._maxConcurrentConnections = value;
    }
    public resetMaxConcurrentConnections() {
        this._maxConcurrentConnections = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrentConnectionsInput() {
        return this._maxConcurrentConnections;
    }

    // trusted_host_keys - computed: true, optional: true, required: false
    private _trustedHostKeys?: string[]; 
    public get trustedHostKeys() {
        return this.getListAttribute('trusted_host_keys');
    }
    public set trustedHostKeys(value: string[]) {
        this._trustedHostKeys = value;
    }
    public resetTrustedHostKeys() {
        this._trustedHostKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trustedHostKeysInput() {
        return this._trustedHostKeys;
    }

    // user_secret_id - computed: true, optional: true, required: false
    private _userSecretId?: string; 
    public get userSecretId() {
        return this.getStringAttribute('user_secret_id');
    }
    public set userSecretId(value: string) {
        this._userSecretId = value;
    }
    public resetUserSecretId() {
        this._userSecretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userSecretIdInput() {
        return this._userSecretId;
    }
}
export interface TagProperty {
    /**
    * The name assigned to the tag that you create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#key CcConnector#key}
    */
    readonly key?: string;
    /**
    * Contains one or more values that you assigned to the key name you create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#value CcConnector#value}
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
