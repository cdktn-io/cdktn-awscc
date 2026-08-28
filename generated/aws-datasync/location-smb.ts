// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLocationSMBProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#agent_arns CcLocationSMB#agent_arns}
    */
    readonly agentArns: string[];
    /**
    * The authentication mode used to determine identity of user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#authentication_type CcLocationSMB#authentication_type}
    */
    readonly authenticationType?: string;
    /**
    * Specifies configuration information for a DataSync-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#cmk_secret_config CcLocationSMB#cmk_secret_config}
    */
    readonly cmkSecretConfig?: CcLocationSMB.CmkSecretConfigProperty;
    /**
    * Specifies configuration information for a customer-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#custom_secret_config CcLocationSMB#custom_secret_config}
    */
    readonly customSecretConfig?: CcLocationSMB.CustomSecretConfigProperty;
    /**
    * Specifies the IPv4 addresses for the DNS servers that your SMB file server belongs to. This parameter applies only if AuthenticationType is set to KERBEROS. If you have multiple domains in your environment, configuring this parameter makes sure that DataSync connects to the right SMB file server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#dns_ip_addresses CcLocationSMB#dns_ip_addresses}
    */
    readonly dnsIpAddresses?: string[];
    /**
    * The name of the Windows domain that the SMB server belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#domain CcLocationSMB#domain}
    */
    readonly domain?: string;
    /**
    * The Base64 string representation of the Keytab file. Specifies your Kerberos key table (keytab) file, which includes mappings between your service principal name (SPN) and encryption keys. To avoid task execution errors, make sure that the SPN in the keytab file matches exactly what you specify for KerberosPrincipal and in your krb5.conf file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#kerberos_keytab CcLocationSMB#kerberos_keytab}
    */
    readonly kerberosKeytab?: string;
    /**
    * The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket. Specifies a Kerberos configuration file (krb5.conf) that defines your Kerberos realm configuration. To avoid task execution errors, make sure that the service principal name (SPN) in the krb5.conf file matches exactly what you specify for KerberosPrincipal and in your keytab file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#kerberos_krb_5_conf CcLocationSMB#kerberos_krb_5_conf}
    */
    readonly kerberosKrb5Conf?: string;
    /**
    * Specifies a service principal name (SPN), which is an identity in your Kerberos realm that has permission to access the files, folders, and file metadata in your SMB file server. SPNs are case sensitive and must include a prepended cifs/. For example, an SPN might look like cifs/kerberosuser@EXAMPLE.COM. Your task execution will fail if the SPN that you provide for this parameter doesn't match exactly what's in your keytab or krb5.conf files.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#kerberos_principal CcLocationSMB#kerberos_principal}
    */
    readonly kerberosPrincipal?: string;
    /**
    * The mount options used by DataSync to access the SMB server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#mount_options CcLocationSMB#mount_options}
    */
    readonly mountOptions?: CcLocationSMB.MountOptionsProperty;
    /**
    * The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#password CcLocationSMB#password}
    */
    readonly password?: string;
    /**
    * The name of the SMB server. This value is the IP address or Domain Name Service (DNS) name of the SMB server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#server_hostname CcLocationSMB#server_hostname}
    */
    readonly serverHostname?: string;
    /**
    * The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#subdirectory CcLocationSMB#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#tags CcLocationSMB#tags}
    */
    readonly tags?: CcLocationSMB.TagProperty[] | cdktn.IResolvable;
    /**
    * The user who can mount the share, has the permissions to access files and folders in the SMB share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#user CcLocationSMB#user}
    */
    readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb awscc_datasync_location_smb}
*/
export class CcLocationSMB extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datasync_location_smb";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLocationSMB resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLocationSMB to import
    * @param importFromId The id of the existing CcLocationSMB that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLocationSMB to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datasync_location_smb", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb awscc_datasync_location_smb} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLocationSMBProps
    */
    public constructor(scope: Construct, id: string, config: CcLocationSMBProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datasync_location_smb',
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
        this._agentArns = config.agentArns;
        this._authenticationType = config.authenticationType;
        this._cmkSecretConfig.internalValue = config.cmkSecretConfig;
        this._customSecretConfig.internalValue = config.customSecretConfig;
        this._dnsIpAddresses = config.dnsIpAddresses;
        this._domain = config.domain;
        this._kerberosKeytab = config.kerberosKeytab;
        this._kerberosKrb5Conf = config.kerberosKrb5Conf;
        this._kerberosPrincipal = config.kerberosPrincipal;
        this._mountOptions.internalValue = config.mountOptions;
        this._password = config.password;
        this._serverHostname = config.serverHostname;
        this._subdirectory = config.subdirectory;
        this._tags.internalValue = config.tags;
        this._user = config.user;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_arns - computed: false, optional: false, required: true
    private _agentArns?: string[]; 
    public get agentArns() {
        return this.getListAttribute('agent_arns');
    }
    public set agentArns(value: string[]) {
        this._agentArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get agentArnsInput() {
        return this._agentArns;
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

    // cmk_secret_config - computed: true, optional: true, required: false
    private _cmkSecretConfig = new CcLocationSMB.CmkSecretConfigPropertyOutputReference(this, "cmk_secret_config");
    public get cmkSecretConfig() {
        return this._cmkSecretConfig;
    }
    public putCmkSecretConfig(value: CcLocationSMB.CmkSecretConfigProperty) {
        this._cmkSecretConfig.internalValue = value;
    }
    public resetCmkSecretConfig() {
        this._cmkSecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cmkSecretConfigInput() {
        return this._cmkSecretConfig.internalValue;
    }

    // custom_secret_config - computed: true, optional: true, required: false
    private _customSecretConfig = new CcLocationSMB.CustomSecretConfigPropertyOutputReference(this, "custom_secret_config");
    public get customSecretConfig() {
        return this._customSecretConfig;
    }
    public putCustomSecretConfig(value: CcLocationSMB.CustomSecretConfigProperty) {
        this._customSecretConfig.internalValue = value;
    }
    public resetCustomSecretConfig() {
        this._customSecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSecretConfigInput() {
        return this._customSecretConfig.internalValue;
    }

    // dns_ip_addresses - computed: true, optional: true, required: false
    private _dnsIpAddresses?: string[]; 
    public get dnsIpAddresses() {
        return this.getListAttribute('dns_ip_addresses');
    }
    public set dnsIpAddresses(value: string[]) {
        this._dnsIpAddresses = value;
    }
    public resetDnsIpAddresses() {
        this._dnsIpAddresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsIpAddressesInput() {
        return this._dnsIpAddresses;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kerberos_keytab - computed: true, optional: true, required: false
    private _kerberosKeytab?: string; 
    public get kerberosKeytab() {
        return this.getStringAttribute('kerberos_keytab');
    }
    public set kerberosKeytab(value: string) {
        this._kerberosKeytab = value;
    }
    public resetKerberosKeytab() {
        this._kerberosKeytab = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kerberosKeytabInput() {
        return this._kerberosKeytab;
    }

    // kerberos_krb_5_conf - computed: true, optional: true, required: false
    private _kerberosKrb5Conf?: string; 
    public get kerberosKrb5Conf() {
        return this.getStringAttribute('kerberos_krb_5_conf');
    }
    public set kerberosKrb5Conf(value: string) {
        this._kerberosKrb5Conf = value;
    }
    public resetKerberosKrb5Conf() {
        this._kerberosKrb5Conf = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kerberosKrb5ConfInput() {
        return this._kerberosKrb5Conf;
    }

    // kerberos_principal - computed: true, optional: true, required: false
    private _kerberosPrincipal?: string; 
    public get kerberosPrincipal() {
        return this.getStringAttribute('kerberos_principal');
    }
    public set kerberosPrincipal(value: string) {
        this._kerberosPrincipal = value;
    }
    public resetKerberosPrincipal() {
        this._kerberosPrincipal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kerberosPrincipalInput() {
        return this._kerberosPrincipal;
    }

    // location_arn - computed: true, optional: false, required: false
    public get locationArn() {
        return this.getStringAttribute('location_arn');
    }

    // location_uri - computed: true, optional: false, required: false
    public get locationUri() {
        return this.getStringAttribute('location_uri');
    }

    // managed_secret_config - computed: true, optional: false, required: false
    private _managedSecretConfig = new CcLocationSMB.ManagedSecretConfigPropertyOutputReference(this, "managed_secret_config");
    public get managedSecretConfig() {
        return this._managedSecretConfig;
    }

    // mount_options - computed: true, optional: true, required: false
    private _mountOptions = new CcLocationSMB.MountOptionsPropertyOutputReference(this, "mount_options");
    public get mountOptions() {
        return this._mountOptions;
    }
    public putMountOptions(value: CcLocationSMB.MountOptionsProperty) {
        this._mountOptions.internalValue = value;
    }
    public resetMountOptions() {
        this._mountOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountOptionsInput() {
        return this._mountOptions.internalValue;
    }

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
    }

    // server_hostname - computed: true, optional: true, required: false
    private _serverHostname?: string; 
    public get serverHostname() {
        return this.getStringAttribute('server_hostname');
    }
    public set serverHostname(value: string) {
        this._serverHostname = value;
    }
    public resetServerHostname() {
        this._serverHostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverHostnameInput() {
        return this._serverHostname;
    }

    // subdirectory - computed: true, optional: true, required: false
    private _subdirectory?: string; 
    public get subdirectory() {
        return this.getStringAttribute('subdirectory');
    }
    public set subdirectory(value: string) {
        this._subdirectory = value;
    }
    public resetSubdirectory() {
        this._subdirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subdirectoryInput() {
        return this._subdirectory;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLocationSMB.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLocationSMB.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // user - computed: true, optional: true, required: false
    private _user?: string; 
    public get user() {
        return this.getStringAttribute('user');
    }
    public set user(value: string) {
        this._user = value;
    }
    public resetUser() {
        this._user = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userInput() {
        return this._user;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            agent_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._agentArns),
            authentication_type: cdktn.stringToTerraform(this._authenticationType),
            cmk_secret_config: ccLocationSMBCmkSecretConfigPropertyToTerraform(this._cmkSecretConfig.internalValue),
            custom_secret_config: ccLocationSMBCustomSecretConfigPropertyToTerraform(this._customSecretConfig.internalValue),
            dns_ip_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(this._dnsIpAddresses),
            domain: cdktn.stringToTerraform(this._domain),
            kerberos_keytab: cdktn.stringToTerraform(this._kerberosKeytab),
            kerberos_krb_5_conf: cdktn.stringToTerraform(this._kerberosKrb5Conf),
            kerberos_principal: cdktn.stringToTerraform(this._kerberosPrincipal),
            mount_options: ccLocationSMBMountOptionsPropertyToTerraform(this._mountOptions.internalValue),
            password: cdktn.stringToTerraform(this._password),
            server_hostname: cdktn.stringToTerraform(this._serverHostname),
            subdirectory: cdktn.stringToTerraform(this._subdirectory),
            tags: cdktn.listMapper(ccLocationSMBTagPropertyToTerraform, false)(this._tags.internalValue),
            user: cdktn.stringToTerraform(this._user),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            agent_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._agentArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            authentication_type: {
                value: cdktn.stringToHclTerraform(this._authenticationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cmk_secret_config: {
                value: ccLocationSMBCmkSecretConfigPropertyToHclTerraform(this._cmkSecretConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLocationSMB.CmkSecretConfigProperty",
            },
            custom_secret_config: {
                value: ccLocationSMBCustomSecretConfigPropertyToHclTerraform(this._customSecretConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLocationSMB.CustomSecretConfigProperty",
            },
            dns_ip_addresses: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._dnsIpAddresses),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            domain: {
                value: cdktn.stringToHclTerraform(this._domain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kerberos_keytab: {
                value: cdktn.stringToHclTerraform(this._kerberosKeytab),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kerberos_krb_5_conf: {
                value: cdktn.stringToHclTerraform(this._kerberosKrb5Conf),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kerberos_principal: {
                value: cdktn.stringToHclTerraform(this._kerberosPrincipal),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            mount_options: {
                value: ccLocationSMBMountOptionsPropertyToHclTerraform(this._mountOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLocationSMB.MountOptionsProperty",
            },
            password: {
                value: cdktn.stringToHclTerraform(this._password),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            server_hostname: {
                value: cdktn.stringToHclTerraform(this._serverHostname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subdirectory: {
                value: cdktn.stringToHclTerraform(this._subdirectory),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLocationSMBTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLocationSMB.TagPropertyList",
            },
            user: {
                value: cdktn.stringToHclTerraform(this._user),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLocationSMBCmkSecretConfigPropertyToTerraform(struct?: CcLocationSMB.CmkSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    }
}


export function ccLocationSMBCmkSecretConfigPropertyToHclTerraform(struct?: CcLocationSMB.CmkSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccLocationSMBCustomSecretConfigPropertyToTerraform(struct?: CcLocationSMB.CustomSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        secret_access_role_arn: cdktn.stringToTerraform(struct!.secretAccessRoleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccLocationSMBCustomSecretConfigPropertyToHclTerraform(struct?: CcLocationSMB.CustomSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        secret_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLocationSMBManagedSecretConfigPropertyToTerraform(struct?: CcLocationSMB.ManagedSecretConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccLocationSMBManagedSecretConfigPropertyToHclTerraform(struct?: CcLocationSMB.ManagedSecretConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccLocationSMBMountOptionsPropertyToTerraform(struct?: CcLocationSMB.MountOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccLocationSMBMountOptionsPropertyToHclTerraform(struct?: CcLocationSMB.MountOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLocationSMBTagPropertyToTerraform(struct?: CcLocationSMB.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLocationSMBTagPropertyToHclTerraform(struct?: CcLocationSMB.TagProperty | cdktn.IResolvable): any {
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


export namespace CcLocationSMB {
export interface CmkSecretConfigProperty {
    /**
    * Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. DataSync provides this key to AWS Secrets Manager.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#kms_key_arn CcLocationSMB#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export class CmkSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CmkSecretConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CmkSecretConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyArn = value.kmsKeyArn;
        }
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

    // secret_arn - computed: true, optional: false, required: false
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
}
export interface CustomSecretConfigProperty {
    /**
    * Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#secret_access_role_arn CcLocationSMB#secret_access_role_arn}
    */
    readonly secretAccessRoleArn?: string;
    /**
    * Specifies the ARN for a customer created AWS Secrets Manager secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#secret_arn CcLocationSMB#secret_arn}
    */
    readonly secretArn?: string;
}
export class CustomSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomSecretConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._secretAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretAccessRoleArn = this._secretAccessRoleArn;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomSecretConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._secretAccessRoleArn = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._secretAccessRoleArn = value.secretAccessRoleArn;
            this._secretArn = value.secretArn;
        }
    }

    // secret_access_role_arn - computed: true, optional: true, required: false
    private _secretAccessRoleArn?: string; 
    public get secretAccessRoleArn() {
        return this.getStringAttribute('secret_access_role_arn');
    }
    public set secretAccessRoleArn(value: string) {
        this._secretAccessRoleArn = value;
    }
    public resetSecretAccessRoleArn() {
        this._secretAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretAccessRoleArnInput() {
        return this._secretAccessRoleArn;
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }
}
export interface ManagedSecretConfigProperty {
}
export class ManagedSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedSecretConfigProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedSecretConfigProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // secret_arn - computed: true, optional: false, required: false
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
}
export interface MountOptionsProperty {
    /**
    * The specific SMB version that you want DataSync to use to mount your SMB share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#version CcLocationSMB#version}
    */
    readonly version?: string;
}
export class MountOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MountOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MountOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._version = value.version;
        }
    }

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface TagProperty {
    /**
    * The key for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#key CcLocationSMB#key}
    */
    readonly key?: string;
    /**
    * The value for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_smb#value CcLocationSMB#value}
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
