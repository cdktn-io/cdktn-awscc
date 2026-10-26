// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStorageVirtualMachineProps extends cdktn.TerraformMetaArguments {
    /**
    * Describes the Microsoft Active Directory configuration to which the SVM is joined, if applicable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#active_directory_configuration CcStorageVirtualMachine#active_directory_configuration}
    */
    readonly activeDirectoryConfiguration?: CcStorageVirtualMachine.ActiveDirectoryConfigurationProperty;
    /**
    * Specifies the FSx for ONTAP file system on which to create the SVM.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#file_system_id CcStorageVirtualMachine#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * The name of the SVM. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,47}$`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#name CcStorageVirtualMachine#name}
    */
    readonly name: string;
    /**
    * The security style of the root volume of the SVM. Allowed values: UNIX | NTFS | MIXED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#root_volume_security_style CcStorageVirtualMachine#root_volume_security_style}
    */
    readonly rootVolumeSecurityStyle?: string;
    /**
    * Specifies the password to use when logging on to the SVM using a secure shell (SSH) connection to the SVM's management endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#svm_admin_password CcStorageVirtualMachine#svm_admin_password}
    */
    readonly svmAdminPassword?: string;
    /**
    * A list of Tag values, with a maximum of 50 elements.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#tags CcStorageVirtualMachine#tags}
    */
    readonly tags?: CcStorageVirtualMachine.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine awscc_fsx_storage_virtual_machine}
*/
export class CcStorageVirtualMachine extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_fsx_storage_virtual_machine";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStorageVirtualMachine resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStorageVirtualMachine to import
    * @param importFromId The id of the existing CcStorageVirtualMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStorageVirtualMachine to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_fsx_storage_virtual_machine", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine awscc_fsx_storage_virtual_machine} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStorageVirtualMachineProps
    */
    public constructor(scope: Construct, id: string, config: CcStorageVirtualMachineProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_fsx_storage_virtual_machine',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._activeDirectoryConfiguration.internalValue = config.activeDirectoryConfiguration;
        this._fileSystemId = config.fileSystemId;
        this._name = config.name;
        this._rootVolumeSecurityStyle = config.rootVolumeSecurityStyle;
        this._svmAdminPassword = config.svmAdminPassword;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // active_directory_configuration - computed: true, optional: true, required: false
    private _activeDirectoryConfiguration = new CcStorageVirtualMachine.ActiveDirectoryConfigurationPropertyOutputReference(this, "active_directory_configuration");
    public get activeDirectoryConfiguration() {
        return this._activeDirectoryConfiguration;
    }
    public putActiveDirectoryConfiguration(value: CcStorageVirtualMachine.ActiveDirectoryConfigurationProperty) {
        this._activeDirectoryConfiguration.internalValue = value;
    }
    public resetActiveDirectoryConfiguration() {
        this._activeDirectoryConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activeDirectoryConfigurationInput() {
        return this._activeDirectoryConfiguration.internalValue;
    }

    // file_system_id - computed: false, optional: false, required: true
    private _fileSystemId?: string; 
    public get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
        this._fileSystemId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
        return this._fileSystemId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // resource_arn - computed: true, optional: false, required: false
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }

    // root_volume_security_style - computed: true, optional: true, required: false
    private _rootVolumeSecurityStyle?: string; 
    public get rootVolumeSecurityStyle() {
        return this.getStringAttribute('root_volume_security_style');
    }
    public set rootVolumeSecurityStyle(value: string) {
        this._rootVolumeSecurityStyle = value;
    }
    public resetRootVolumeSecurityStyle() {
        this._rootVolumeSecurityStyle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootVolumeSecurityStyleInput() {
        return this._rootVolumeSecurityStyle;
    }

    // storage_virtual_machine_id - computed: true, optional: false, required: false
    public get storageVirtualMachineId() {
        return this.getStringAttribute('storage_virtual_machine_id');
    }

    // svm_admin_password - computed: true, optional: true, required: false
    private _svmAdminPassword?: string; 
    public get svmAdminPassword() {
        return this.getStringAttribute('svm_admin_password');
    }
    public set svmAdminPassword(value: string) {
        this._svmAdminPassword = value;
    }
    public resetSvmAdminPassword() {
        this._svmAdminPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get svmAdminPasswordInput() {
        return this._svmAdminPassword;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcStorageVirtualMachine.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcStorageVirtualMachine.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // uuid - computed: true, optional: false, required: false
    public get uuid() {
        return this.getStringAttribute('uuid');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            active_directory_configuration: ccStorageVirtualMachineActiveDirectoryConfigurationPropertyToTerraform(this._activeDirectoryConfiguration.internalValue),
            file_system_id: cdktn.stringToTerraform(this._fileSystemId),
            name: cdktn.stringToTerraform(this._name),
            root_volume_security_style: cdktn.stringToTerraform(this._rootVolumeSecurityStyle),
            svm_admin_password: cdktn.stringToTerraform(this._svmAdminPassword),
            tags: cdktn.listMapper(ccStorageVirtualMachineTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            active_directory_configuration: {
                value: ccStorageVirtualMachineActiveDirectoryConfigurationPropertyToHclTerraform(this._activeDirectoryConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStorageVirtualMachine.ActiveDirectoryConfigurationProperty",
            },
            file_system_id: {
                value: cdktn.stringToHclTerraform(this._fileSystemId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            root_volume_security_style: {
                value: cdktn.stringToHclTerraform(this._rootVolumeSecurityStyle),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            svm_admin_password: {
                value: cdktn.stringToHclTerraform(this._svmAdminPassword),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccStorageVirtualMachineTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcStorageVirtualMachine.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccStorageVirtualMachineSelfManagedActiveDirectoryConfigurationPropertyToTerraform(struct?: CcStorageVirtualMachine.SelfManagedActiveDirectoryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dns_ips: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dnsIps),
        domain_join_service_account_secret: cdktn.stringToTerraform(struct!.domainJoinServiceAccountSecret),
        domain_name: cdktn.stringToTerraform(struct!.domainName),
        file_system_administrators_group: cdktn.stringToTerraform(struct!.fileSystemAdministratorsGroup),
        organizational_unit_distinguished_name: cdktn.stringToTerraform(struct!.organizationalUnitDistinguishedName),
        password: cdktn.stringToTerraform(struct!.password),
        user_name: cdktn.stringToTerraform(struct!.userName),
    }
}


export function ccStorageVirtualMachineSelfManagedActiveDirectoryConfigurationPropertyToHclTerraform(struct?: CcStorageVirtualMachine.SelfManagedActiveDirectoryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dns_ips: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dnsIps),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        domain_join_service_account_secret: {
            value: cdktn.stringToHclTerraform(struct!.domainJoinServiceAccountSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        domain_name: {
            value: cdktn.stringToHclTerraform(struct!.domainName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_system_administrators_group: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemAdministratorsGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        organizational_unit_distinguished_name: {
            value: cdktn.stringToHclTerraform(struct!.organizationalUnitDistinguishedName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        password: {
            value: cdktn.stringToHclTerraform(struct!.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_name: {
            value: cdktn.stringToHclTerraform(struct!.userName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageVirtualMachineActiveDirectoryConfigurationPropertyToTerraform(struct?: CcStorageVirtualMachine.ActiveDirectoryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        net_bios_name: cdktn.stringToTerraform(struct!.netBiosName),
        self_managed_active_directory_configuration: ccStorageVirtualMachineSelfManagedActiveDirectoryConfigurationPropertyToTerraform(struct!.selfManagedActiveDirectoryConfiguration),
    }
}


export function ccStorageVirtualMachineActiveDirectoryConfigurationPropertyToHclTerraform(struct?: CcStorageVirtualMachine.ActiveDirectoryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        net_bios_name: {
            value: cdktn.stringToHclTerraform(struct!.netBiosName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        self_managed_active_directory_configuration: {
            value: ccStorageVirtualMachineSelfManagedActiveDirectoryConfigurationPropertyToHclTerraform(struct!.selfManagedActiveDirectoryConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SelfManagedActiveDirectoryConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageVirtualMachineTagPropertyToTerraform(struct?: CcStorageVirtualMachine.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStorageVirtualMachineTagPropertyToHclTerraform(struct?: CcStorageVirtualMachine.TagProperty | cdktn.IResolvable): any {
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


export namespace CcStorageVirtualMachine {
export interface SelfManagedActiveDirectoryConfigurationProperty {
    /**
    * A list of IP addresses of DNS servers or domain controllers in the self-managed AD directory. Minimum: 1. Maximum: 3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#dns_ips CcStorageVirtualMachine#dns_ips}
    */
    readonly dnsIps?: string[];
    /**
    * The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the self-managed Active Directory domain join service account credentials. Minimum: 64. Maximum: 1024.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#domain_join_service_account_secret CcStorageVirtualMachine#domain_join_service_account_secret}
    */
    readonly domainJoinServiceAccountSecret?: string;
    /**
    * The fully qualified domain name of the self-managed AD directory, such as corp.example.com. Minimum: 1. Maximum: 255. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#domain_name CcStorageVirtualMachine#domain_name}
    */
    readonly domainName?: string;
    /**
    * The name of the domain group whose members are granted administrative privileges for the file system. Minimum: 1. Maximum: 256. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,256}$`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#file_system_administrators_group CcStorageVirtualMachine#file_system_administrators_group}
    */
    readonly fileSystemAdministratorsGroup?: string;
    /**
    * The fully qualified distinguished name of the organizational unit within your self-managed AD directory. Minimum: 1. Maximum: 2000. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,2000}$`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#organizational_unit_distinguished_name CcStorageVirtualMachine#organizational_unit_distinguished_name}
    */
    readonly organizationalUnitDistinguishedName?: string;
    /**
    * The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. Minimum: 1. Maximum: 256. Pattern: `^.{1,256}$`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#password CcStorageVirtualMachine#password}
    */
    readonly password?: string;
    /**
    * The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. Minimum: 1. Maximum: 256. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,256}$`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#user_name CcStorageVirtualMachine#user_name}
    */
    readonly userName?: string;
}
export class SelfManagedActiveDirectoryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SelfManagedActiveDirectoryConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dnsIps !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsIps = this._dnsIps;
        }
        if (this._domainJoinServiceAccountSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainJoinServiceAccountSecret = this._domainJoinServiceAccountSecret;
        }
        if (this._domainName !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainName = this._domainName;
        }
        if (this._fileSystemAdministratorsGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemAdministratorsGroup = this._fileSystemAdministratorsGroup;
        }
        if (this._organizationalUnitDistinguishedName !== undefined) {
            hasAnyValues = true;
            internalValueResult.organizationalUnitDistinguishedName = this._organizationalUnitDistinguishedName;
        }
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._userName !== undefined) {
            hasAnyValues = true;
            internalValueResult.userName = this._userName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SelfManagedActiveDirectoryConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dnsIps = undefined;
            this._domainJoinServiceAccountSecret = undefined;
            this._domainName = undefined;
            this._fileSystemAdministratorsGroup = undefined;
            this._organizationalUnitDistinguishedName = undefined;
            this._password = undefined;
            this._userName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dnsIps = value.dnsIps;
            this._domainJoinServiceAccountSecret = value.domainJoinServiceAccountSecret;
            this._domainName = value.domainName;
            this._fileSystemAdministratorsGroup = value.fileSystemAdministratorsGroup;
            this._organizationalUnitDistinguishedName = value.organizationalUnitDistinguishedName;
            this._password = value.password;
            this._userName = value.userName;
        }
    }

    // dns_ips - computed: true, optional: true, required: false
    private _dnsIps?: string[]; 
    public get dnsIps() {
        return this.getListAttribute('dns_ips');
    }
    public set dnsIps(value: string[]) {
        this._dnsIps = value;
    }
    public resetDnsIps() {
        this._dnsIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsIpsInput() {
        return this._dnsIps;
    }

    // domain_join_service_account_secret - computed: true, optional: true, required: false
    private _domainJoinServiceAccountSecret?: string; 
    public get domainJoinServiceAccountSecret() {
        return this.getStringAttribute('domain_join_service_account_secret');
    }
    public set domainJoinServiceAccountSecret(value: string) {
        this._domainJoinServiceAccountSecret = value;
    }
    public resetDomainJoinServiceAccountSecret() {
        this._domainJoinServiceAccountSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainJoinServiceAccountSecretInput() {
        return this._domainJoinServiceAccountSecret;
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

    // file_system_administrators_group - computed: true, optional: true, required: false
    private _fileSystemAdministratorsGroup?: string; 
    public get fileSystemAdministratorsGroup() {
        return this.getStringAttribute('file_system_administrators_group');
    }
    public set fileSystemAdministratorsGroup(value: string) {
        this._fileSystemAdministratorsGroup = value;
    }
    public resetFileSystemAdministratorsGroup() {
        this._fileSystemAdministratorsGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemAdministratorsGroupInput() {
        return this._fileSystemAdministratorsGroup;
    }

    // organizational_unit_distinguished_name - computed: true, optional: true, required: false
    private _organizationalUnitDistinguishedName?: string; 
    public get organizationalUnitDistinguishedName() {
        return this.getStringAttribute('organizational_unit_distinguished_name');
    }
    public set organizationalUnitDistinguishedName(value: string) {
        this._organizationalUnitDistinguishedName = value;
    }
    public resetOrganizationalUnitDistinguishedName() {
        this._organizationalUnitDistinguishedName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationalUnitDistinguishedNameInput() {
        return this._organizationalUnitDistinguishedName;
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

    // user_name - computed: true, optional: true, required: false
    private _userName?: string; 
    public get userName() {
        return this.getStringAttribute('user_name');
    }
    public set userName(value: string) {
        this._userName = value;
    }
    public resetUserName() {
        this._userName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userNameInput() {
        return this._userName;
    }
}
export interface ActiveDirectoryConfigurationProperty {
    /**
    * The NetBIOS name of the Active Directory computer object that will be created for your SVM. Minimum values: 1. Maximum values: 15. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#net_bios_name CcStorageVirtualMachine#net_bios_name}
    */
    readonly netBiosName?: string;
    /**
    * The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory directory.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#self_managed_active_directory_configuration CcStorageVirtualMachine#self_managed_active_directory_configuration}
    */
    readonly selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationProperty;
}
export class ActiveDirectoryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ActiveDirectoryConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._netBiosName !== undefined) {
            hasAnyValues = true;
            internalValueResult.netBiosName = this._netBiosName;
        }
        if (this._selfManagedActiveDirectoryConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.selfManagedActiveDirectoryConfiguration = this._selfManagedActiveDirectoryConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActiveDirectoryConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._netBiosName = undefined;
            this._selfManagedActiveDirectoryConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._netBiosName = value.netBiosName;
            this._selfManagedActiveDirectoryConfiguration.internalValue = value.selfManagedActiveDirectoryConfiguration;
        }
    }

    // net_bios_name - computed: true, optional: true, required: false
    private _netBiosName?: string; 
    public get netBiosName() {
        return this.getStringAttribute('net_bios_name');
    }
    public set netBiosName(value: string) {
        this._netBiosName = value;
    }
    public resetNetBiosName() {
        this._netBiosName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get netBiosNameInput() {
        return this._netBiosName;
    }

    // self_managed_active_directory_configuration - computed: true, optional: true, required: false
    private _selfManagedActiveDirectoryConfiguration = new SelfManagedActiveDirectoryConfigurationPropertyOutputReference(this, "self_managed_active_directory_configuration");
    public get selfManagedActiveDirectoryConfiguration() {
        return this._selfManagedActiveDirectoryConfiguration;
    }
    public putSelfManagedActiveDirectoryConfiguration(value: SelfManagedActiveDirectoryConfigurationProperty) {
        this._selfManagedActiveDirectoryConfiguration.internalValue = value;
    }
    public resetSelfManagedActiveDirectoryConfiguration() {
        this._selfManagedActiveDirectoryConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfManagedActiveDirectoryConfigurationInput() {
        return this._selfManagedActiveDirectoryConfiguration.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#key CcStorageVirtualMachine#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#value CcStorageVirtualMachine#value}
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
