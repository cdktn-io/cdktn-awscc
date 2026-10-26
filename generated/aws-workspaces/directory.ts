// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDirectoryProps extends cdktn.TerraformMetaArguments {
    /**
    * Information about the Active Directory config.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#active_directory_config CcDirectory#active_directory_config}
    */
    readonly activeDirectoryConfig?: CcDirectory.ActiveDirectoryConfigProperty;
    /**
    * Describes the properties of the certificate-based authentication you want to use with your WorkSpaces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#certificate_based_auth_properties CcDirectory#certificate_based_auth_properties}
    */
    readonly certificateBasedAuthProperties?: CcDirectory.CertificateBasedAuthPropertiesProperty;
    /**
    * Indicates whether self-service capabilities are enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#enable_self_service CcDirectory#enable_self_service}
    */
    readonly enableSelfService?: boolean | cdktn.IResolvable;
    /**
    * Endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#endpoint_encryption_mode CcDirectory#endpoint_encryption_mode}
    */
    readonly endpointEncryptionMode?: string;
    /**
    * The Amazon Resource Name (ARN) of the identity center instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#idc_instance_arn CcDirectory#idc_instance_arn}
    */
    readonly idcInstanceArn?: string;
    /**
    * The identifiers of the IP access control groups associated with the directory.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#ip_group_ids CcDirectory#ip_group_ids}
    */
    readonly ipGroupIds?: string[];
    /**
    * Specifies the configurations of the Microsoft Entra.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#microsoft_entra_config CcDirectory#microsoft_entra_config}
    */
    readonly microsoftEntraConfig?: CcDirectory.MicrosoftEntraConfigProperty;
    /**
    * Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#saml_properties CcDirectory#saml_properties}
    */
    readonly samlProperties?: CcDirectory.SamlPropertiesProperty;
    /**
    * Describes the self-service permissions for a directory.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#selfservice_permissions CcDirectory#selfservice_permissions}
    */
    readonly selfservicePermissions?: CcDirectory.SelfservicePermissionsProperty;
    /**
    * Describes the streaming properties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#streaming_properties CcDirectory#streaming_properties}
    */
    readonly streamingProperties?: CcDirectory.StreamingPropertiesProperty;
    /**
    * The identifiers of the subnets for your virtual private cloud (VPC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#subnet_ids CcDirectory#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * The tags associated with the directory.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#tags CcDirectory#tags}
    */
    readonly tags?: CcDirectory.TagsProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether your WorkSpace directory is dedicated or shared.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#tenancy CcDirectory#tenancy}
    */
    readonly tenancy?: string;
    /**
    * The type of identity management the user is using.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#user_identity_type CcDirectory#user_identity_type}
    */
    readonly userIdentityType?: string;
    /**
    * The device types and operating systems that can be used to access a WorkSpace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#workspace_access_properties CcDirectory#workspace_access_properties}
    */
    readonly workspaceAccessProperties?: CcDirectory.WorkspaceAccessPropertiesProperty;
    /**
    * The default values that are used to create WorkSpaces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#workspace_creation_properties CcDirectory#workspace_creation_properties}
    */
    readonly workspaceCreationProperties?: CcDirectory.WorkspaceCreationPropertiesProperty;
    /**
    * Description of the directory to register.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#workspace_directory_description CcDirectory#workspace_directory_description}
    */
    readonly workspaceDirectoryDescription?: string;
    /**
    * The name of the directory to register.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#workspace_directory_name CcDirectory#workspace_directory_name}
    */
    readonly workspaceDirectoryName?: string;
    /**
    * Indicates whether the directory's WorkSpace type is personal or pools.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#workspace_type CcDirectory#workspace_type}
    */
    readonly workspaceType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory awscc_workspaces_directory}
*/
export class CcDirectory extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_workspaces_directory";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDirectory resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDirectory to import
    * @param importFromId The id of the existing CcDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDirectory to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspaces_directory", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory awscc_workspaces_directory} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDirectoryProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcDirectoryProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_workspaces_directory',
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
        this._activeDirectoryConfig.internalValue = config.activeDirectoryConfig;
        this._certificateBasedAuthProperties.internalValue = config.certificateBasedAuthProperties;
        this._enableSelfService = config.enableSelfService;
        this._endpointEncryptionMode = config.endpointEncryptionMode;
        this._idcInstanceArn = config.idcInstanceArn;
        this._ipGroupIds = config.ipGroupIds;
        this._microsoftEntraConfig.internalValue = config.microsoftEntraConfig;
        this._samlProperties.internalValue = config.samlProperties;
        this._selfservicePermissions.internalValue = config.selfservicePermissions;
        this._streamingProperties.internalValue = config.streamingProperties;
        this._subnetIds = config.subnetIds;
        this._tags.internalValue = config.tags;
        this._tenancy = config.tenancy;
        this._userIdentityType = config.userIdentityType;
        this._workspaceAccessProperties.internalValue = config.workspaceAccessProperties;
        this._workspaceCreationProperties.internalValue = config.workspaceCreationProperties;
        this._workspaceDirectoryDescription = config.workspaceDirectoryDescription;
        this._workspaceDirectoryName = config.workspaceDirectoryName;
        this._workspaceType = config.workspaceType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // active_directory_config - computed: true, optional: true, required: false
    private _activeDirectoryConfig = new CcDirectory.ActiveDirectoryConfigPropertyOutputReference(this, "active_directory_config");
    public get activeDirectoryConfig() {
        return this._activeDirectoryConfig;
    }
    public putActiveDirectoryConfig(value: CcDirectory.ActiveDirectoryConfigProperty) {
        this._activeDirectoryConfig.internalValue = value;
    }
    public resetActiveDirectoryConfig() {
        this._activeDirectoryConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activeDirectoryConfigInput() {
        return this._activeDirectoryConfig.internalValue;
    }

    // alias - computed: true, optional: false, required: false
    public get alias() {
        return this.getStringAttribute('alias');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // certificate_based_auth_properties - computed: true, optional: true, required: false
    private _certificateBasedAuthProperties = new CcDirectory.CertificateBasedAuthPropertiesPropertyOutputReference(this, "certificate_based_auth_properties");
    public get certificateBasedAuthProperties() {
        return this._certificateBasedAuthProperties;
    }
    public putCertificateBasedAuthProperties(value: CcDirectory.CertificateBasedAuthPropertiesProperty) {
        this._certificateBasedAuthProperties.internalValue = value;
    }
    public resetCertificateBasedAuthProperties() {
        this._certificateBasedAuthProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateBasedAuthPropertiesInput() {
        return this._certificateBasedAuthProperties.internalValue;
    }

    // customer_user_name - computed: true, optional: false, required: false
    public get customerUserName() {
        return this.getStringAttribute('customer_user_name');
    }

    // directory_id - computed: true, optional: false, required: false
    public get directoryId() {
        return this.getStringAttribute('directory_id');
    }

    // directory_name - computed: true, optional: false, required: false
    public get directoryName() {
        return this.getStringAttribute('directory_name');
    }

    // directory_type - computed: true, optional: false, required: false
    public get directoryType() {
        return this.getStringAttribute('directory_type');
    }

    // dns_ip_addresses - computed: true, optional: false, required: false
    public get dnsIpAddresses() {
        return this.getListAttribute('dns_ip_addresses');
    }

    // dns_ipv_6_addresses - computed: true, optional: false, required: false
    public get dnsIpv6Addresses() {
        return this.getListAttribute('dns_ipv_6_addresses');
    }

    // enable_self_service - computed: true, optional: true, required: false
    private _enableSelfService?: boolean | cdktn.IResolvable; 
    public get enableSelfService() {
        return this.getBooleanAttribute('enable_self_service');
    }
    public set enableSelfService(value: boolean | cdktn.IResolvable) {
        this._enableSelfService = value;
    }
    public resetEnableSelfService() {
        this._enableSelfService = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableSelfServiceInput() {
        return this._enableSelfService;
    }

    // endpoint_encryption_mode - computed: true, optional: true, required: false
    private _endpointEncryptionMode?: string; 
    public get endpointEncryptionMode() {
        return this.getStringAttribute('endpoint_encryption_mode');
    }
    public set endpointEncryptionMode(value: string) {
        this._endpointEncryptionMode = value;
    }
    public resetEndpointEncryptionMode() {
        this._endpointEncryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointEncryptionModeInput() {
        return this._endpointEncryptionMode;
    }

    // iam_role_id - computed: true, optional: false, required: false
    public get iamRoleId() {
        return this.getStringAttribute('iam_role_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // idc_config - computed: true, optional: false, required: false
    private _idcConfig = new CcDirectory.IdcConfigPropertyOutputReference(this, "idc_config");
    public get idcConfig() {
        return this._idcConfig;
    }

    // idc_instance_arn - computed: true, optional: true, required: false
    private _idcInstanceArn?: string; 
    public get idcInstanceArn() {
        return this.getStringAttribute('idc_instance_arn');
    }
    public set idcInstanceArn(value: string) {
        this._idcInstanceArn = value;
    }
    public resetIdcInstanceArn() {
        this._idcInstanceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idcInstanceArnInput() {
        return this._idcInstanceArn;
    }

    // ip_group_ids - computed: true, optional: true, required: false
    private _ipGroupIds?: string[]; 
    public get ipGroupIds() {
        return this.getListAttribute('ip_group_ids');
    }
    public set ipGroupIds(value: string[]) {
        this._ipGroupIds = value;
    }
    public resetIpGroupIds() {
        this._ipGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipGroupIdsInput() {
        return this._ipGroupIds;
    }

    // microsoft_entra_config - computed: true, optional: true, required: false
    private _microsoftEntraConfig = new CcDirectory.MicrosoftEntraConfigPropertyOutputReference(this, "microsoft_entra_config");
    public get microsoftEntraConfig() {
        return this._microsoftEntraConfig;
    }
    public putMicrosoftEntraConfig(value: CcDirectory.MicrosoftEntraConfigProperty) {
        this._microsoftEntraConfig.internalValue = value;
    }
    public resetMicrosoftEntraConfig() {
        this._microsoftEntraConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get microsoftEntraConfigInput() {
        return this._microsoftEntraConfig.internalValue;
    }

    // registration_code - computed: true, optional: false, required: false
    public get registrationCode() {
        return this.getStringAttribute('registration_code');
    }

    // saml_properties - computed: true, optional: true, required: false
    private _samlProperties = new CcDirectory.SamlPropertiesPropertyOutputReference(this, "saml_properties");
    public get samlProperties() {
        return this._samlProperties;
    }
    public putSamlProperties(value: CcDirectory.SamlPropertiesProperty) {
        this._samlProperties.internalValue = value;
    }
    public resetSamlProperties() {
        this._samlProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samlPropertiesInput() {
        return this._samlProperties.internalValue;
    }

    // selfservice_permissions - computed: true, optional: true, required: false
    private _selfservicePermissions = new CcDirectory.SelfservicePermissionsPropertyOutputReference(this, "selfservice_permissions");
    public get selfservicePermissions() {
        return this._selfservicePermissions;
    }
    public putSelfservicePermissions(value: CcDirectory.SelfservicePermissionsProperty) {
        this._selfservicePermissions.internalValue = value;
    }
    public resetSelfservicePermissions() {
        this._selfservicePermissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfservicePermissionsInput() {
        return this._selfservicePermissions.internalValue;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // streaming_properties - computed: true, optional: true, required: false
    private _streamingProperties = new CcDirectory.StreamingPropertiesPropertyOutputReference(this, "streaming_properties");
    public get streamingProperties() {
        return this._streamingProperties;
    }
    public putStreamingProperties(value: CcDirectory.StreamingPropertiesProperty) {
        this._streamingProperties.internalValue = value;
    }
    public resetStreamingProperties() {
        this._streamingProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamingPropertiesInput() {
        return this._streamingProperties.internalValue;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDirectory.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDirectory.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tenancy - computed: true, optional: true, required: false
    private _tenancy?: string; 
    public get tenancy() {
        return this.getStringAttribute('tenancy');
    }
    public set tenancy(value: string) {
        this._tenancy = value;
    }
    public resetTenancy() {
        this._tenancy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenancyInput() {
        return this._tenancy;
    }

    // user_identity_type - computed: true, optional: true, required: false
    private _userIdentityType?: string; 
    public get userIdentityType() {
        return this.getStringAttribute('user_identity_type');
    }
    public set userIdentityType(value: string) {
        this._userIdentityType = value;
    }
    public resetUserIdentityType() {
        this._userIdentityType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userIdentityTypeInput() {
        return this._userIdentityType;
    }

    // workspace_access_properties - computed: true, optional: true, required: false
    private _workspaceAccessProperties = new CcDirectory.WorkspaceAccessPropertiesPropertyOutputReference(this, "workspace_access_properties");
    public get workspaceAccessProperties() {
        return this._workspaceAccessProperties;
    }
    public putWorkspaceAccessProperties(value: CcDirectory.WorkspaceAccessPropertiesProperty) {
        this._workspaceAccessProperties.internalValue = value;
    }
    public resetWorkspaceAccessProperties() {
        this._workspaceAccessProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceAccessPropertiesInput() {
        return this._workspaceAccessProperties.internalValue;
    }

    // workspace_creation_properties - computed: true, optional: true, required: false
    private _workspaceCreationProperties = new CcDirectory.WorkspaceCreationPropertiesPropertyOutputReference(this, "workspace_creation_properties");
    public get workspaceCreationProperties() {
        return this._workspaceCreationProperties;
    }
    public putWorkspaceCreationProperties(value: CcDirectory.WorkspaceCreationPropertiesProperty) {
        this._workspaceCreationProperties.internalValue = value;
    }
    public resetWorkspaceCreationProperties() {
        this._workspaceCreationProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceCreationPropertiesInput() {
        return this._workspaceCreationProperties.internalValue;
    }

    // workspace_directory_description - computed: true, optional: true, required: false
    private _workspaceDirectoryDescription?: string; 
    public get workspaceDirectoryDescription() {
        return this.getStringAttribute('workspace_directory_description');
    }
    public set workspaceDirectoryDescription(value: string) {
        this._workspaceDirectoryDescription = value;
    }
    public resetWorkspaceDirectoryDescription() {
        this._workspaceDirectoryDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceDirectoryDescriptionInput() {
        return this._workspaceDirectoryDescription;
    }

    // workspace_directory_name - computed: true, optional: true, required: false
    private _workspaceDirectoryName?: string; 
    public get workspaceDirectoryName() {
        return this.getStringAttribute('workspace_directory_name');
    }
    public set workspaceDirectoryName(value: string) {
        this._workspaceDirectoryName = value;
    }
    public resetWorkspaceDirectoryName() {
        this._workspaceDirectoryName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceDirectoryNameInput() {
        return this._workspaceDirectoryName;
    }

    // workspace_security_group_id - computed: true, optional: false, required: false
    public get workspaceSecurityGroupId() {
        return this.getStringAttribute('workspace_security_group_id');
    }

    // workspace_type - computed: true, optional: true, required: false
    private _workspaceType?: string; 
    public get workspaceType() {
        return this.getStringAttribute('workspace_type');
    }
    public set workspaceType(value: string) {
        this._workspaceType = value;
    }
    public resetWorkspaceType() {
        this._workspaceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceTypeInput() {
        return this._workspaceType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            active_directory_config: ccDirectoryActiveDirectoryConfigPropertyToTerraform(this._activeDirectoryConfig.internalValue),
            certificate_based_auth_properties: ccDirectoryCertificateBasedAuthPropertiesPropertyToTerraform(this._certificateBasedAuthProperties.internalValue),
            enable_self_service: cdktn.booleanToTerraform(this._enableSelfService),
            endpoint_encryption_mode: cdktn.stringToTerraform(this._endpointEncryptionMode),
            idc_instance_arn: cdktn.stringToTerraform(this._idcInstanceArn),
            ip_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._ipGroupIds),
            microsoft_entra_config: ccDirectoryMicrosoftEntraConfigPropertyToTerraform(this._microsoftEntraConfig.internalValue),
            saml_properties: ccDirectorySamlPropertiesPropertyToTerraform(this._samlProperties.internalValue),
            selfservice_permissions: ccDirectorySelfservicePermissionsPropertyToTerraform(this._selfservicePermissions.internalValue),
            streaming_properties: ccDirectoryStreamingPropertiesPropertyToTerraform(this._streamingProperties.internalValue),
            subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
            tags: cdktn.listMapper(ccDirectoryTagsPropertyToTerraform, false)(this._tags.internalValue),
            tenancy: cdktn.stringToTerraform(this._tenancy),
            user_identity_type: cdktn.stringToTerraform(this._userIdentityType),
            workspace_access_properties: ccDirectoryWorkspaceAccessPropertiesPropertyToTerraform(this._workspaceAccessProperties.internalValue),
            workspace_creation_properties: ccDirectoryWorkspaceCreationPropertiesPropertyToTerraform(this._workspaceCreationProperties.internalValue),
            workspace_directory_description: cdktn.stringToTerraform(this._workspaceDirectoryDescription),
            workspace_directory_name: cdktn.stringToTerraform(this._workspaceDirectoryName),
            workspace_type: cdktn.stringToTerraform(this._workspaceType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            active_directory_config: {
                value: ccDirectoryActiveDirectoryConfigPropertyToHclTerraform(this._activeDirectoryConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDirectory.ActiveDirectoryConfigProperty",
            },
            certificate_based_auth_properties: {
                value: ccDirectoryCertificateBasedAuthPropertiesPropertyToHclTerraform(this._certificateBasedAuthProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDirectory.CertificateBasedAuthPropertiesProperty",
            },
            enable_self_service: {
                value: cdktn.booleanToHclTerraform(this._enableSelfService),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            endpoint_encryption_mode: {
                value: cdktn.stringToHclTerraform(this._endpointEncryptionMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            idc_instance_arn: {
                value: cdktn.stringToHclTerraform(this._idcInstanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._ipGroupIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            microsoft_entra_config: {
                value: ccDirectoryMicrosoftEntraConfigPropertyToHclTerraform(this._microsoftEntraConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDirectory.MicrosoftEntraConfigProperty",
            },
            saml_properties: {
                value: ccDirectorySamlPropertiesPropertyToHclTerraform(this._samlProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDirectory.SamlPropertiesProperty",
            },
            selfservice_permissions: {
                value: ccDirectorySelfservicePermissionsPropertyToHclTerraform(this._selfservicePermissions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDirectory.SelfservicePermissionsProperty",
            },
            streaming_properties: {
                value: ccDirectoryStreamingPropertiesPropertyToHclTerraform(this._streamingProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDirectory.StreamingPropertiesProperty",
            },
            subnet_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDirectoryTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDirectory.TagsPropertyList",
            },
            tenancy: {
                value: cdktn.stringToHclTerraform(this._tenancy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_identity_type: {
                value: cdktn.stringToHclTerraform(this._userIdentityType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            workspace_access_properties: {
                value: ccDirectoryWorkspaceAccessPropertiesPropertyToHclTerraform(this._workspaceAccessProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDirectory.WorkspaceAccessPropertiesProperty",
            },
            workspace_creation_properties: {
                value: ccDirectoryWorkspaceCreationPropertiesPropertyToHclTerraform(this._workspaceCreationProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDirectory.WorkspaceCreationPropertiesProperty",
            },
            workspace_directory_description: {
                value: cdktn.stringToHclTerraform(this._workspaceDirectoryDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            workspace_directory_name: {
                value: cdktn.stringToHclTerraform(this._workspaceDirectoryName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            workspace_type: {
                value: cdktn.stringToHclTerraform(this._workspaceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDirectoryActiveDirectoryConfigPropertyToTerraform(struct?: CcDirectory.ActiveDirectoryConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain_name: cdktn.stringToTerraform(struct!.domainName),
        service_account_secret_arn: cdktn.stringToTerraform(struct!.serviceAccountSecretArn),
    }
}


export function ccDirectoryActiveDirectoryConfigPropertyToHclTerraform(struct?: CcDirectory.ActiveDirectoryConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain_name: {
            value: cdktn.stringToHclTerraform(struct!.domainName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_account_secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.serviceAccountSecretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDirectoryCertificateBasedAuthPropertiesPropertyToTerraform(struct?: CcDirectory.CertificateBasedAuthPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_authority_arn: cdktn.stringToTerraform(struct!.certificateAuthorityArn),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccDirectoryCertificateBasedAuthPropertiesPropertyToHclTerraform(struct?: CcDirectory.CertificateBasedAuthPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_authority_arn: {
            value: cdktn.stringToHclTerraform(struct!.certificateAuthorityArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDirectoryIdcConfigPropertyToTerraform(struct?: CcDirectory.IdcConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDirectoryIdcConfigPropertyToHclTerraform(struct?: CcDirectory.IdcConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDirectoryMicrosoftEntraConfigPropertyToTerraform(struct?: CcDirectory.MicrosoftEntraConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        application_config_secret_arn: cdktn.stringToTerraform(struct!.applicationConfigSecretArn),
        tenant_id: cdktn.stringToTerraform(struct!.tenantId),
    }
}


export function ccDirectoryMicrosoftEntraConfigPropertyToHclTerraform(struct?: CcDirectory.MicrosoftEntraConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        application_config_secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.applicationConfigSecretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tenant_id: {
            value: cdktn.stringToHclTerraform(struct!.tenantId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDirectorySamlPropertiesPropertyToTerraform(struct?: CcDirectory.SamlPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        relay_state_parameter_name: cdktn.stringToTerraform(struct!.relayStateParameterName),
        status: cdktn.stringToTerraform(struct!.status),
        user_access_url: cdktn.stringToTerraform(struct!.userAccessUrl),
    }
}


export function ccDirectorySamlPropertiesPropertyToHclTerraform(struct?: CcDirectory.SamlPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        relay_state_parameter_name: {
            value: cdktn.stringToHclTerraform(struct!.relayStateParameterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_access_url: {
            value: cdktn.stringToHclTerraform(struct!.userAccessUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDirectorySelfservicePermissionsPropertyToTerraform(struct?: CcDirectory.SelfservicePermissionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        change_compute_type: cdktn.stringToTerraform(struct!.changeComputeType),
        increase_volume_size: cdktn.stringToTerraform(struct!.increaseVolumeSize),
        rebuild_workspace: cdktn.stringToTerraform(struct!.rebuildWorkspace),
        restart_workspace: cdktn.stringToTerraform(struct!.restartWorkspace),
        switch_running_mode: cdktn.stringToTerraform(struct!.switchRunningMode),
    }
}


export function ccDirectorySelfservicePermissionsPropertyToHclTerraform(struct?: CcDirectory.SelfservicePermissionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        change_compute_type: {
            value: cdktn.stringToHclTerraform(struct!.changeComputeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        increase_volume_size: {
            value: cdktn.stringToHclTerraform(struct!.increaseVolumeSize),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rebuild_workspace: {
            value: cdktn.stringToHclTerraform(struct!.rebuildWorkspace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        restart_workspace: {
            value: cdktn.stringToHclTerraform(struct!.restartWorkspace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        switch_running_mode: {
            value: cdktn.stringToHclTerraform(struct!.switchRunningMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDirectoryGlobalAcceleratorPropertyToTerraform(struct?: CcDirectory.GlobalAcceleratorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mode: cdktn.stringToTerraform(struct!.mode),
        preferred_protocol: cdktn.stringToTerraform(struct!.preferredProtocol),
    }
}


export function ccDirectoryGlobalAcceleratorPropertyToHclTerraform(struct?: CcDirectory.GlobalAcceleratorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        preferred_protocol: {
            value: cdktn.stringToHclTerraform(struct!.preferredProtocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDirectoryStorageConnectorsPropertyToTerraform(struct?: CcDirectory.StorageConnectorsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connector_type: cdktn.stringToTerraform(struct!.connectorType),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccDirectoryStorageConnectorsPropertyToHclTerraform(struct?: CcDirectory.StorageConnectorsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connector_type: {
            value: cdktn.stringToHclTerraform(struct!.connectorType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDirectoryUserSettingsPropertyToTerraform(struct?: CcDirectory.UserSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
        maximum_length: cdktn.numberToTerraform(struct!.maximumLength),
        permission: cdktn.stringToTerraform(struct!.permission),
    }
}


export function ccDirectoryUserSettingsPropertyToHclTerraform(struct?: CcDirectory.UserSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action: {
            value: cdktn.stringToHclTerraform(struct!.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        maximum_length: {
            value: cdktn.numberToHclTerraform(struct!.maximumLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        permission: {
            value: cdktn.stringToHclTerraform(struct!.permission),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDirectoryStreamingPropertiesPropertyToTerraform(struct?: CcDirectory.StreamingPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        global_accelerator: ccDirectoryGlobalAcceleratorPropertyToTerraform(struct!.globalAccelerator),
        storage_connectors: cdktn.listMapper(ccDirectoryStorageConnectorsPropertyToTerraform, false)(struct!.storageConnectors),
        streaming_experience_preferred_protocol: cdktn.stringToTerraform(struct!.streamingExperiencePreferredProtocol),
        user_settings: cdktn.listMapper(ccDirectoryUserSettingsPropertyToTerraform, false)(struct!.userSettings),
    }
}


export function ccDirectoryStreamingPropertiesPropertyToHclTerraform(struct?: CcDirectory.StreamingPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        global_accelerator: {
            value: ccDirectoryGlobalAcceleratorPropertyToHclTerraform(struct!.globalAccelerator),
            isBlock: true,
            type: "struct",
            storageClassType: "GlobalAcceleratorProperty",
        },
        storage_connectors: {
            value: cdktn.listMapperHcl(ccDirectoryStorageConnectorsPropertyToHclTerraform, false)(struct!.storageConnectors),
            isBlock: true,
            type: "list",
            storageClassType: "StorageConnectorsPropertyList",
        },
        streaming_experience_preferred_protocol: {
            value: cdktn.stringToHclTerraform(struct!.streamingExperiencePreferredProtocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_settings: {
            value: cdktn.listMapperHcl(ccDirectoryUserSettingsPropertyToHclTerraform, false)(struct!.userSettings),
            isBlock: true,
            type: "list",
            storageClassType: "UserSettingsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDirectoryTagsPropertyToTerraform(struct?: CcDirectory.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDirectoryTagsPropertyToHclTerraform(struct?: CcDirectory.TagsProperty | cdktn.IResolvable): any {
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


export function ccDirectoryAccessEndpointsPropertyToTerraform(struct?: CcDirectory.AccessEndpointsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_endpoint_type: cdktn.stringToTerraform(struct!.accessEndpointType),
        vpc_endpoint_id: cdktn.stringToTerraform(struct!.vpcEndpointId),
    }
}


export function ccDirectoryAccessEndpointsPropertyToHclTerraform(struct?: CcDirectory.AccessEndpointsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_endpoint_type: {
            value: cdktn.stringToHclTerraform(struct!.accessEndpointType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_endpoint_id: {
            value: cdktn.stringToHclTerraform(struct!.vpcEndpointId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDirectoryAccessEndpointConfigPropertyToTerraform(struct?: CcDirectory.AccessEndpointConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_endpoints: cdktn.listMapper(ccDirectoryAccessEndpointsPropertyToTerraform, false)(struct!.accessEndpoints),
        internet_fallback_protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.internetFallbackProtocols),
    }
}


export function ccDirectoryAccessEndpointConfigPropertyToHclTerraform(struct?: CcDirectory.AccessEndpointConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_endpoints: {
            value: cdktn.listMapperHcl(ccDirectoryAccessEndpointsPropertyToHclTerraform, false)(struct!.accessEndpoints),
            isBlock: true,
            type: "list",
            storageClassType: "AccessEndpointsPropertyList",
        },
        internet_fallback_protocols: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.internetFallbackProtocols),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDirectoryWorkspaceAccessPropertiesPropertyToTerraform(struct?: CcDirectory.WorkspaceAccessPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_endpoint_config: ccDirectoryAccessEndpointConfigPropertyToTerraform(struct!.accessEndpointConfig),
        device_type_android: cdktn.stringToTerraform(struct!.deviceTypeAndroid),
        device_type_chrome_os: cdktn.stringToTerraform(struct!.deviceTypeChromeOs),
        device_type_ios: cdktn.stringToTerraform(struct!.deviceTypeIos),
        device_type_linux: cdktn.stringToTerraform(struct!.deviceTypeLinux),
        device_type_osx: cdktn.stringToTerraform(struct!.deviceTypeOsx),
        device_type_web: cdktn.stringToTerraform(struct!.deviceTypeWeb),
        device_type_windows: cdktn.stringToTerraform(struct!.deviceTypeWindows),
        device_type_work_spaces_thin_client: cdktn.stringToTerraform(struct!.deviceTypeWorkSpacesThinClient),
        device_type_zero_client: cdktn.stringToTerraform(struct!.deviceTypeZeroClient),
    }
}


export function ccDirectoryWorkspaceAccessPropertiesPropertyToHclTerraform(struct?: CcDirectory.WorkspaceAccessPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_endpoint_config: {
            value: ccDirectoryAccessEndpointConfigPropertyToHclTerraform(struct!.accessEndpointConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AccessEndpointConfigProperty",
        },
        device_type_android: {
            value: cdktn.stringToHclTerraform(struct!.deviceTypeAndroid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_type_chrome_os: {
            value: cdktn.stringToHclTerraform(struct!.deviceTypeChromeOs),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_type_ios: {
            value: cdktn.stringToHclTerraform(struct!.deviceTypeIos),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_type_linux: {
            value: cdktn.stringToHclTerraform(struct!.deviceTypeLinux),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_type_osx: {
            value: cdktn.stringToHclTerraform(struct!.deviceTypeOsx),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_type_web: {
            value: cdktn.stringToHclTerraform(struct!.deviceTypeWeb),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_type_windows: {
            value: cdktn.stringToHclTerraform(struct!.deviceTypeWindows),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_type_work_spaces_thin_client: {
            value: cdktn.stringToHclTerraform(struct!.deviceTypeWorkSpacesThinClient),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_type_zero_client: {
            value: cdktn.stringToHclTerraform(struct!.deviceTypeZeroClient),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDirectoryWorkspaceCreationPropertiesPropertyToTerraform(struct?: CcDirectory.WorkspaceCreationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_security_group_id: cdktn.stringToTerraform(struct!.customSecurityGroupId),
        default_ou: cdktn.stringToTerraform(struct!.defaultOu),
        enable_internet_access: cdktn.booleanToTerraform(struct!.enableInternetAccess),
        enable_maintenance_mode: cdktn.booleanToTerraform(struct!.enableMaintenanceMode),
        instance_iam_role_arn: cdktn.stringToTerraform(struct!.instanceIamRoleArn),
        user_enabled_as_local_administrator: cdktn.booleanToTerraform(struct!.userEnabledAsLocalAdministrator),
    }
}


export function ccDirectoryWorkspaceCreationPropertiesPropertyToHclTerraform(struct?: CcDirectory.WorkspaceCreationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_security_group_id: {
            value: cdktn.stringToHclTerraform(struct!.customSecurityGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        default_ou: {
            value: cdktn.stringToHclTerraform(struct!.defaultOu),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enable_internet_access: {
            value: cdktn.booleanToHclTerraform(struct!.enableInternetAccess),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enable_maintenance_mode: {
            value: cdktn.booleanToHclTerraform(struct!.enableMaintenanceMode),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        instance_iam_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.instanceIamRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_enabled_as_local_administrator: {
            value: cdktn.booleanToHclTerraform(struct!.userEnabledAsLocalAdministrator),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDirectory {
export interface ActiveDirectoryConfigProperty {
    /**
    * The name of the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#domain_name CcDirectory#domain_name}
    */
    readonly domainName?: string;
    /**
    * Indicates the secret ARN on the service account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#service_account_secret_arn CcDirectory#service_account_secret_arn}
    */
    readonly serviceAccountSecretArn?: string;
}
export class ActiveDirectoryConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ActiveDirectoryConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domainName !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainName = this._domainName;
        }
        if (this._serviceAccountSecretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceAccountSecretArn = this._serviceAccountSecretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActiveDirectoryConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domainName = undefined;
            this._serviceAccountSecretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domainName = value.domainName;
            this._serviceAccountSecretArn = value.serviceAccountSecretArn;
        }
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

    // service_account_secret_arn - computed: true, optional: true, required: false
    private _serviceAccountSecretArn?: string; 
    public get serviceAccountSecretArn() {
        return this.getStringAttribute('service_account_secret_arn');
    }
    public set serviceAccountSecretArn(value: string) {
        this._serviceAccountSecretArn = value;
    }
    public resetServiceAccountSecretArn() {
        this._serviceAccountSecretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccountSecretArnInput() {
        return this._serviceAccountSecretArn;
    }
}
export interface CertificateBasedAuthPropertiesProperty {
    /**
    * The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#certificate_authority_arn CcDirectory#certificate_authority_arn}
    */
    readonly certificateAuthorityArn?: string;
    /**
    * The status of the certificate-based authentication properties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#status CcDirectory#status}
    */
    readonly status?: string;
}
export class CertificateBasedAuthPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CertificateBasedAuthPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateAuthorityArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateAuthorityArn = this._certificateAuthorityArn;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CertificateBasedAuthPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateAuthorityArn = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateAuthorityArn = value.certificateAuthorityArn;
            this._status = value.status;
        }
    }

    // certificate_authority_arn - computed: true, optional: true, required: false
    private _certificateAuthorityArn?: string; 
    public get certificateAuthorityArn() {
        return this.getStringAttribute('certificate_authority_arn');
    }
    public set certificateAuthorityArn(value: string) {
        this._certificateAuthorityArn = value;
    }
    public resetCertificateAuthorityArn() {
        this._certificateAuthorityArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateAuthorityArnInput() {
        return this._certificateAuthorityArn;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }
}
export interface IdcConfigProperty {
}
export class IdcConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IdcConfigProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdcConfigProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // application_arn - computed: true, optional: false, required: false
    public get applicationArn() {
        return this.getStringAttribute('application_arn');
    }

    // instance_arn - computed: true, optional: false, required: false
    public get instanceArn() {
        return this.getStringAttribute('instance_arn');
    }
}
export interface MicrosoftEntraConfigProperty {
    /**
    * The Amazon Resource Name (ARN) of the application config.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#application_config_secret_arn CcDirectory#application_config_secret_arn}
    */
    readonly applicationConfigSecretArn?: string;
    /**
    * The identifier of the tenant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#tenant_id CcDirectory#tenant_id}
    */
    readonly tenantId?: string;
}
export class MicrosoftEntraConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MicrosoftEntraConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applicationConfigSecretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationConfigSecretArn = this._applicationConfigSecretArn;
        }
        if (this._tenantId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tenantId = this._tenantId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MicrosoftEntraConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applicationConfigSecretArn = undefined;
            this._tenantId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applicationConfigSecretArn = value.applicationConfigSecretArn;
            this._tenantId = value.tenantId;
        }
    }

    // application_config_secret_arn - computed: true, optional: true, required: false
    private _applicationConfigSecretArn?: string; 
    public get applicationConfigSecretArn() {
        return this.getStringAttribute('application_config_secret_arn');
    }
    public set applicationConfigSecretArn(value: string) {
        this._applicationConfigSecretArn = value;
    }
    public resetApplicationConfigSecretArn() {
        this._applicationConfigSecretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationConfigSecretArnInput() {
        return this._applicationConfigSecretArn;
    }

    // tenant_id - computed: true, optional: true, required: false
    private _tenantId?: string; 
    public get tenantId() {
        return this.getStringAttribute('tenant_id');
    }
    public set tenantId(value: string) {
        this._tenantId = value;
    }
    public resetTenantId() {
        this._tenantId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenantIdInput() {
        return this._tenantId;
    }
}
export interface SamlPropertiesProperty {
    /**
    * The relay state parameter name supported by the SAML 2.0 identity provider (IdP).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#relay_state_parameter_name CcDirectory#relay_state_parameter_name}
    */
    readonly relayStateParameterName?: string;
    /**
    * Indicates the status of SAML 2.0 authentication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#status CcDirectory#status}
    */
    readonly status?: string;
    /**
    * The SAML 2.0 identity provider (IdP) user access URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#user_access_url CcDirectory#user_access_url}
    */
    readonly userAccessUrl?: string;
}
export class SamlPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SamlPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._relayStateParameterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.relayStateParameterName = this._relayStateParameterName;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._userAccessUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.userAccessUrl = this._userAccessUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SamlPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._relayStateParameterName = undefined;
            this._status = undefined;
            this._userAccessUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._relayStateParameterName = value.relayStateParameterName;
            this._status = value.status;
            this._userAccessUrl = value.userAccessUrl;
        }
    }

    // relay_state_parameter_name - computed: true, optional: true, required: false
    private _relayStateParameterName?: string; 
    public get relayStateParameterName() {
        return this.getStringAttribute('relay_state_parameter_name');
    }
    public set relayStateParameterName(value: string) {
        this._relayStateParameterName = value;
    }
    public resetRelayStateParameterName() {
        this._relayStateParameterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relayStateParameterNameInput() {
        return this._relayStateParameterName;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // user_access_url - computed: true, optional: true, required: false
    private _userAccessUrl?: string; 
    public get userAccessUrl() {
        return this.getStringAttribute('user_access_url');
    }
    public set userAccessUrl(value: string) {
        this._userAccessUrl = value;
    }
    public resetUserAccessUrl() {
        this._userAccessUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userAccessUrlInput() {
        return this._userAccessUrl;
    }
}
export interface SelfservicePermissionsProperty {
    /**
    * Specifies whether users can change the compute type (bundle) for their WorkSpace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#change_compute_type CcDirectory#change_compute_type}
    */
    readonly changeComputeType?: string;
    /**
    * Specifies whether users can increase the volume size of the drives on their WorkSpace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#increase_volume_size CcDirectory#increase_volume_size}
    */
    readonly increaseVolumeSize?: string;
    /**
    * Specifies whether users can rebuild the operating system of a WorkSpace to its original state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#rebuild_workspace CcDirectory#rebuild_workspace}
    */
    readonly rebuildWorkspace?: string;
    /**
    * Specifies whether users can restart their WorkSpace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#restart_workspace CcDirectory#restart_workspace}
    */
    readonly restartWorkspace?: string;
    /**
    * Specifies whether users can switch the running mode of their WorkSpace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#switch_running_mode CcDirectory#switch_running_mode}
    */
    readonly switchRunningMode?: string;
}
export class SelfservicePermissionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SelfservicePermissionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._changeComputeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.changeComputeType = this._changeComputeType;
        }
        if (this._increaseVolumeSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.increaseVolumeSize = this._increaseVolumeSize;
        }
        if (this._rebuildWorkspace !== undefined) {
            hasAnyValues = true;
            internalValueResult.rebuildWorkspace = this._rebuildWorkspace;
        }
        if (this._restartWorkspace !== undefined) {
            hasAnyValues = true;
            internalValueResult.restartWorkspace = this._restartWorkspace;
        }
        if (this._switchRunningMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.switchRunningMode = this._switchRunningMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SelfservicePermissionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._changeComputeType = undefined;
            this._increaseVolumeSize = undefined;
            this._rebuildWorkspace = undefined;
            this._restartWorkspace = undefined;
            this._switchRunningMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._changeComputeType = value.changeComputeType;
            this._increaseVolumeSize = value.increaseVolumeSize;
            this._rebuildWorkspace = value.rebuildWorkspace;
            this._restartWorkspace = value.restartWorkspace;
            this._switchRunningMode = value.switchRunningMode;
        }
    }

    // change_compute_type - computed: true, optional: true, required: false
    private _changeComputeType?: string; 
    public get changeComputeType() {
        return this.getStringAttribute('change_compute_type');
    }
    public set changeComputeType(value: string) {
        this._changeComputeType = value;
    }
    public resetChangeComputeType() {
        this._changeComputeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get changeComputeTypeInput() {
        return this._changeComputeType;
    }

    // increase_volume_size - computed: true, optional: true, required: false
    private _increaseVolumeSize?: string; 
    public get increaseVolumeSize() {
        return this.getStringAttribute('increase_volume_size');
    }
    public set increaseVolumeSize(value: string) {
        this._increaseVolumeSize = value;
    }
    public resetIncreaseVolumeSize() {
        this._increaseVolumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get increaseVolumeSizeInput() {
        return this._increaseVolumeSize;
    }

    // rebuild_workspace - computed: true, optional: true, required: false
    private _rebuildWorkspace?: string; 
    public get rebuildWorkspace() {
        return this.getStringAttribute('rebuild_workspace');
    }
    public set rebuildWorkspace(value: string) {
        this._rebuildWorkspace = value;
    }
    public resetRebuildWorkspace() {
        this._rebuildWorkspace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rebuildWorkspaceInput() {
        return this._rebuildWorkspace;
    }

    // restart_workspace - computed: true, optional: true, required: false
    private _restartWorkspace?: string; 
    public get restartWorkspace() {
        return this.getStringAttribute('restart_workspace');
    }
    public set restartWorkspace(value: string) {
        this._restartWorkspace = value;
    }
    public resetRestartWorkspace() {
        this._restartWorkspace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restartWorkspaceInput() {
        return this._restartWorkspace;
    }

    // switch_running_mode - computed: true, optional: true, required: false
    private _switchRunningMode?: string; 
    public get switchRunningMode() {
        return this.getStringAttribute('switch_running_mode');
    }
    public set switchRunningMode(value: string) {
        this._switchRunningMode = value;
    }
    public resetSwitchRunningMode() {
        this._switchRunningMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get switchRunningModeInput() {
        return this._switchRunningMode;
    }
}
export interface GlobalAcceleratorProperty {
    /**
    * Indicates if Global Accelerator for directory is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#mode CcDirectory#mode}
    */
    readonly mode?: string;
    /**
    * Indicates the preferred protocol for Global Accelerator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#preferred_protocol CcDirectory#preferred_protocol}
    */
    readonly preferredProtocol?: string;
}
export class GlobalAcceleratorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GlobalAcceleratorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._preferredProtocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.preferredProtocol = this._preferredProtocol;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlobalAcceleratorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mode = undefined;
            this._preferredProtocol = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mode = value.mode;
            this._preferredProtocol = value.preferredProtocol;
        }
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

    // preferred_protocol - computed: true, optional: true, required: false
    private _preferredProtocol?: string; 
    public get preferredProtocol() {
        return this.getStringAttribute('preferred_protocol');
    }
    public set preferredProtocol(value: string) {
        this._preferredProtocol = value;
    }
    public resetPreferredProtocol() {
        this._preferredProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredProtocolInput() {
        return this._preferredProtocol;
    }
}
export interface StorageConnectorsProperty {
    /**
    * The type of connector used to save user files.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#connector_type CcDirectory#connector_type}
    */
    readonly connectorType?: string;
    /**
    * Indicates if the storage connector is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#status CcDirectory#status}
    */
    readonly status?: string;
}
export class StorageConnectorsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StorageConnectorsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectorType !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectorType = this._connectorType;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageConnectorsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectorType = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectorType = value.connectorType;
            this._status = value.status;
        }
    }

    // connector_type - computed: true, optional: true, required: false
    private _connectorType?: string; 
    public get connectorType() {
        return this.getStringAttribute('connector_type');
    }
    public set connectorType(value: string) {
        this._connectorType = value;
    }
    public resetConnectorType() {
        this._connectorType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorTypeInput() {
        return this._connectorType;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }
}

export class StorageConnectorsPropertyList extends cdktn.ComplexList {
    public internalValue? : StorageConnectorsProperty[] | cdktn.IResolvable

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
    public get(index: number): StorageConnectorsPropertyOutputReference {
        return new StorageConnectorsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface UserSettingsProperty {
    /**
    * Indicates the type of action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#action CcDirectory#action}
    */
    readonly action?: string;
    /**
    * Indicates the maximum character length for the specified user setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#maximum_length CcDirectory#maximum_length}
    */
    readonly maximumLength?: number;
    /**
    * Indicates if the setting is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#permission CcDirectory#permission}
    */
    readonly permission?: string;
}
export class UserSettingsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): UserSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._maximumLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumLength = this._maximumLength;
        }
        if (this._permission !== undefined) {
            hasAnyValues = true;
            internalValueResult.permission = this._permission;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._maximumLength = undefined;
            this._permission = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._maximumLength = value.maximumLength;
            this._permission = value.permission;
        }
    }

    // action - computed: true, optional: true, required: false
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    public resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }

    // maximum_length - computed: true, optional: true, required: false
    private _maximumLength?: number; 
    public get maximumLength() {
        return this.getNumberAttribute('maximum_length');
    }
    public set maximumLength(value: number) {
        this._maximumLength = value;
    }
    public resetMaximumLength() {
        this._maximumLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumLengthInput() {
        return this._maximumLength;
    }

    // permission - computed: true, optional: true, required: false
    private _permission?: string; 
    public get permission() {
        return this.getStringAttribute('permission');
    }
    public set permission(value: string) {
        this._permission = value;
    }
    public resetPermission() {
        this._permission = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionInput() {
        return this._permission;
    }
}

export class UserSettingsPropertyList extends cdktn.ComplexList {
    public internalValue? : UserSettingsProperty[] | cdktn.IResolvable

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
    public get(index: number): UserSettingsPropertyOutputReference {
        return new UserSettingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StreamingPropertiesProperty {
    /**
    * Describes the Global Accelerator for directory.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#global_accelerator CcDirectory#global_accelerator}
    */
    readonly globalAccelerator?: GlobalAcceleratorProperty;
    /**
    * Indicates the storage connector used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#storage_connectors CcDirectory#storage_connectors}
    */
    readonly storageConnectors?: StorageConnectorsProperty[] | cdktn.IResolvable;
    /**
    * Indicates the type of preferred protocol for the streaming experience.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#streaming_experience_preferred_protocol CcDirectory#streaming_experience_preferred_protocol}
    */
    readonly streamingExperiencePreferredProtocol?: string;
    /**
    * Indicates the permission settings associated with the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#user_settings CcDirectory#user_settings}
    */
    readonly userSettings?: UserSettingsProperty[] | cdktn.IResolvable;
}
export class StreamingPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StreamingPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._globalAccelerator?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.globalAccelerator = this._globalAccelerator?.internalValue;
        }
        if (this._storageConnectors?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageConnectors = this._storageConnectors?.internalValue;
        }
        if (this._streamingExperiencePreferredProtocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamingExperiencePreferredProtocol = this._streamingExperiencePreferredProtocol;
        }
        if (this._userSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.userSettings = this._userSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StreamingPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._globalAccelerator.internalValue = undefined;
            this._storageConnectors.internalValue = undefined;
            this._streamingExperiencePreferredProtocol = undefined;
            this._userSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._globalAccelerator.internalValue = value.globalAccelerator;
            this._storageConnectors.internalValue = value.storageConnectors;
            this._streamingExperiencePreferredProtocol = value.streamingExperiencePreferredProtocol;
            this._userSettings.internalValue = value.userSettings;
        }
    }

    // global_accelerator - computed: true, optional: true, required: false
    private _globalAccelerator = new GlobalAcceleratorPropertyOutputReference(this, "global_accelerator");
    public get globalAccelerator() {
        return this._globalAccelerator;
    }
    public putGlobalAccelerator(value: GlobalAcceleratorProperty) {
        this._globalAccelerator.internalValue = value;
    }
    public resetGlobalAccelerator() {
        this._globalAccelerator.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalAcceleratorInput() {
        return this._globalAccelerator.internalValue;
    }

    // storage_connectors - computed: true, optional: true, required: false
    private _storageConnectors = new StorageConnectorsPropertyList(this, "storage_connectors", false);
    public get storageConnectors() {
        return this._storageConnectors;
    }
    public putStorageConnectors(value: StorageConnectorsProperty[] | cdktn.IResolvable) {
        this._storageConnectors.internalValue = value;
    }
    public resetStorageConnectors() {
        this._storageConnectors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageConnectorsInput() {
        return this._storageConnectors.internalValue;
    }

    // streaming_experience_preferred_protocol - computed: true, optional: true, required: false
    private _streamingExperiencePreferredProtocol?: string; 
    public get streamingExperiencePreferredProtocol() {
        return this.getStringAttribute('streaming_experience_preferred_protocol');
    }
    public set streamingExperiencePreferredProtocol(value: string) {
        this._streamingExperiencePreferredProtocol = value;
    }
    public resetStreamingExperiencePreferredProtocol() {
        this._streamingExperiencePreferredProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamingExperiencePreferredProtocolInput() {
        return this._streamingExperiencePreferredProtocol;
    }

    // user_settings - computed: true, optional: true, required: false
    private _userSettings = new UserSettingsPropertyList(this, "user_settings", false);
    public get userSettings() {
        return this._userSettings;
    }
    public putUserSettings(value: UserSettingsProperty[] | cdktn.IResolvable) {
        this._userSettings.internalValue = value;
    }
    public resetUserSettings() {
        this._userSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userSettingsInput() {
        return this._userSettings.internalValue;
    }
}
export interface TagsProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#key CcDirectory#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#value CcDirectory#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AccessEndpointsProperty {
    /**
    * Indicates the type of access endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#access_endpoint_type CcDirectory#access_endpoint_type}
    */
    readonly accessEndpointType?: string;
    /**
    * Indicates the VPC endpoint to use for access.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#vpc_endpoint_id CcDirectory#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
}
export class AccessEndpointsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AccessEndpointsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessEndpointType !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessEndpointType = this._accessEndpointType;
        }
        if (this._vpcEndpointId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcEndpointId = this._vpcEndpointId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessEndpointsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessEndpointType = undefined;
            this._vpcEndpointId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessEndpointType = value.accessEndpointType;
            this._vpcEndpointId = value.vpcEndpointId;
        }
    }

    // access_endpoint_type - computed: true, optional: true, required: false
    private _accessEndpointType?: string; 
    public get accessEndpointType() {
        return this.getStringAttribute('access_endpoint_type');
    }
    public set accessEndpointType(value: string) {
        this._accessEndpointType = value;
    }
    public resetAccessEndpointType() {
        this._accessEndpointType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessEndpointTypeInput() {
        return this._accessEndpointType;
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
}

export class AccessEndpointsPropertyList extends cdktn.ComplexList {
    public internalValue? : AccessEndpointsProperty[] | cdktn.IResolvable

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
    public get(index: number): AccessEndpointsPropertyOutputReference {
        return new AccessEndpointsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AccessEndpointConfigProperty {
    /**
    * Indicates a list of access endpoints associated with this directory.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#access_endpoints CcDirectory#access_endpoints}
    */
    readonly accessEndpoints?: AccessEndpointsProperty[] | cdktn.IResolvable;
    /**
    * Indicates a list of protocols that fallback to using the public Internet when streaming over a VPC endpoint is not available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#internet_fallback_protocols CcDirectory#internet_fallback_protocols}
    */
    readonly internetFallbackProtocols?: string[];
}
export class AccessEndpointConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccessEndpointConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessEndpoints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessEndpoints = this._accessEndpoints?.internalValue;
        }
        if (this._internetFallbackProtocols !== undefined) {
            hasAnyValues = true;
            internalValueResult.internetFallbackProtocols = this._internetFallbackProtocols;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessEndpointConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessEndpoints.internalValue = undefined;
            this._internetFallbackProtocols = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessEndpoints.internalValue = value.accessEndpoints;
            this._internetFallbackProtocols = value.internetFallbackProtocols;
        }
    }

    // access_endpoints - computed: true, optional: true, required: false
    private _accessEndpoints = new AccessEndpointsPropertyList(this, "access_endpoints", false);
    public get accessEndpoints() {
        return this._accessEndpoints;
    }
    public putAccessEndpoints(value: AccessEndpointsProperty[] | cdktn.IResolvable) {
        this._accessEndpoints.internalValue = value;
    }
    public resetAccessEndpoints() {
        this._accessEndpoints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessEndpointsInput() {
        return this._accessEndpoints.internalValue;
    }

    // internet_fallback_protocols - computed: true, optional: true, required: false
    private _internetFallbackProtocols?: string[]; 
    public get internetFallbackProtocols() {
        return this.getListAttribute('internet_fallback_protocols');
    }
    public set internetFallbackProtocols(value: string[]) {
        this._internetFallbackProtocols = value;
    }
    public resetInternetFallbackProtocols() {
        this._internetFallbackProtocols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get internetFallbackProtocolsInput() {
        return this._internetFallbackProtocols;
    }
}
export interface WorkspaceAccessPropertiesProperty {
    /**
    * Describes the access endpoint configuration for a WorkSpace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#access_endpoint_config CcDirectory#access_endpoint_config}
    */
    readonly accessEndpointConfig?: AccessEndpointConfigProperty;
    /**
    * Indicates whether users can use Android and Android-compatible Chrome OS devices to access their WorkSpaces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#device_type_android CcDirectory#device_type_android}
    */
    readonly deviceTypeAndroid?: string;
    /**
    * Indicates whether users can use Chromebooks to access their WorkSpaces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#device_type_chrome_os CcDirectory#device_type_chrome_os}
    */
    readonly deviceTypeChromeOs?: string;
    /**
    * Indicates whether users can use iOS devices to access their WorkSpaces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#device_type_ios CcDirectory#device_type_ios}
    */
    readonly deviceTypeIos?: string;
    /**
    * Indicates whether users can use Linux clients to access their WorkSpaces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#device_type_linux CcDirectory#device_type_linux}
    */
    readonly deviceTypeLinux?: string;
    /**
    * Indicates whether users can use macOS clients to access their WorkSpaces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#device_type_osx CcDirectory#device_type_osx}
    */
    readonly deviceTypeOsx?: string;
    /**
    * Indicates whether users can access their WorkSpaces through a web browser.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#device_type_web CcDirectory#device_type_web}
    */
    readonly deviceTypeWeb?: string;
    /**
    * Indicates whether users can use Windows clients to access their WorkSpaces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#device_type_windows CcDirectory#device_type_windows}
    */
    readonly deviceTypeWindows?: string;
    /**
    * Indicates whether users can access their WorkSpaces through a WorkSpaces Thin Client.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#device_type_work_spaces_thin_client CcDirectory#device_type_work_spaces_thin_client}
    */
    readonly deviceTypeWorkSpacesThinClient?: string;
    /**
    * Indicates whether users can use zero client devices to access their WorkSpaces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#device_type_zero_client CcDirectory#device_type_zero_client}
    */
    readonly deviceTypeZeroClient?: string;
}
export class WorkspaceAccessPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkspaceAccessPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessEndpointConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessEndpointConfig = this._accessEndpointConfig?.internalValue;
        }
        if (this._deviceTypeAndroid !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceTypeAndroid = this._deviceTypeAndroid;
        }
        if (this._deviceTypeChromeOs !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceTypeChromeOs = this._deviceTypeChromeOs;
        }
        if (this._deviceTypeIos !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceTypeIos = this._deviceTypeIos;
        }
        if (this._deviceTypeLinux !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceTypeLinux = this._deviceTypeLinux;
        }
        if (this._deviceTypeOsx !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceTypeOsx = this._deviceTypeOsx;
        }
        if (this._deviceTypeWeb !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceTypeWeb = this._deviceTypeWeb;
        }
        if (this._deviceTypeWindows !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceTypeWindows = this._deviceTypeWindows;
        }
        if (this._deviceTypeWorkSpacesThinClient !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceTypeWorkSpacesThinClient = this._deviceTypeWorkSpacesThinClient;
        }
        if (this._deviceTypeZeroClient !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceTypeZeroClient = this._deviceTypeZeroClient;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkspaceAccessPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessEndpointConfig.internalValue = undefined;
            this._deviceTypeAndroid = undefined;
            this._deviceTypeChromeOs = undefined;
            this._deviceTypeIos = undefined;
            this._deviceTypeLinux = undefined;
            this._deviceTypeOsx = undefined;
            this._deviceTypeWeb = undefined;
            this._deviceTypeWindows = undefined;
            this._deviceTypeWorkSpacesThinClient = undefined;
            this._deviceTypeZeroClient = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessEndpointConfig.internalValue = value.accessEndpointConfig;
            this._deviceTypeAndroid = value.deviceTypeAndroid;
            this._deviceTypeChromeOs = value.deviceTypeChromeOs;
            this._deviceTypeIos = value.deviceTypeIos;
            this._deviceTypeLinux = value.deviceTypeLinux;
            this._deviceTypeOsx = value.deviceTypeOsx;
            this._deviceTypeWeb = value.deviceTypeWeb;
            this._deviceTypeWindows = value.deviceTypeWindows;
            this._deviceTypeWorkSpacesThinClient = value.deviceTypeWorkSpacesThinClient;
            this._deviceTypeZeroClient = value.deviceTypeZeroClient;
        }
    }

    // access_endpoint_config - computed: true, optional: true, required: false
    private _accessEndpointConfig = new AccessEndpointConfigPropertyOutputReference(this, "access_endpoint_config");
    public get accessEndpointConfig() {
        return this._accessEndpointConfig;
    }
    public putAccessEndpointConfig(value: AccessEndpointConfigProperty) {
        this._accessEndpointConfig.internalValue = value;
    }
    public resetAccessEndpointConfig() {
        this._accessEndpointConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessEndpointConfigInput() {
        return this._accessEndpointConfig.internalValue;
    }

    // device_type_android - computed: true, optional: true, required: false
    private _deviceTypeAndroid?: string; 
    public get deviceTypeAndroid() {
        return this.getStringAttribute('device_type_android');
    }
    public set deviceTypeAndroid(value: string) {
        this._deviceTypeAndroid = value;
    }
    public resetDeviceTypeAndroid() {
        this._deviceTypeAndroid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceTypeAndroidInput() {
        return this._deviceTypeAndroid;
    }

    // device_type_chrome_os - computed: true, optional: true, required: false
    private _deviceTypeChromeOs?: string; 
    public get deviceTypeChromeOs() {
        return this.getStringAttribute('device_type_chrome_os');
    }
    public set deviceTypeChromeOs(value: string) {
        this._deviceTypeChromeOs = value;
    }
    public resetDeviceTypeChromeOs() {
        this._deviceTypeChromeOs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceTypeChromeOsInput() {
        return this._deviceTypeChromeOs;
    }

    // device_type_ios - computed: true, optional: true, required: false
    private _deviceTypeIos?: string; 
    public get deviceTypeIos() {
        return this.getStringAttribute('device_type_ios');
    }
    public set deviceTypeIos(value: string) {
        this._deviceTypeIos = value;
    }
    public resetDeviceTypeIos() {
        this._deviceTypeIos = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceTypeIosInput() {
        return this._deviceTypeIos;
    }

    // device_type_linux - computed: true, optional: true, required: false
    private _deviceTypeLinux?: string; 
    public get deviceTypeLinux() {
        return this.getStringAttribute('device_type_linux');
    }
    public set deviceTypeLinux(value: string) {
        this._deviceTypeLinux = value;
    }
    public resetDeviceTypeLinux() {
        this._deviceTypeLinux = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceTypeLinuxInput() {
        return this._deviceTypeLinux;
    }

    // device_type_osx - computed: true, optional: true, required: false
    private _deviceTypeOsx?: string; 
    public get deviceTypeOsx() {
        return this.getStringAttribute('device_type_osx');
    }
    public set deviceTypeOsx(value: string) {
        this._deviceTypeOsx = value;
    }
    public resetDeviceTypeOsx() {
        this._deviceTypeOsx = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceTypeOsxInput() {
        return this._deviceTypeOsx;
    }

    // device_type_web - computed: true, optional: true, required: false
    private _deviceTypeWeb?: string; 
    public get deviceTypeWeb() {
        return this.getStringAttribute('device_type_web');
    }
    public set deviceTypeWeb(value: string) {
        this._deviceTypeWeb = value;
    }
    public resetDeviceTypeWeb() {
        this._deviceTypeWeb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceTypeWebInput() {
        return this._deviceTypeWeb;
    }

    // device_type_windows - computed: true, optional: true, required: false
    private _deviceTypeWindows?: string; 
    public get deviceTypeWindows() {
        return this.getStringAttribute('device_type_windows');
    }
    public set deviceTypeWindows(value: string) {
        this._deviceTypeWindows = value;
    }
    public resetDeviceTypeWindows() {
        this._deviceTypeWindows = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceTypeWindowsInput() {
        return this._deviceTypeWindows;
    }

    // device_type_work_spaces_thin_client - computed: true, optional: true, required: false
    private _deviceTypeWorkSpacesThinClient?: string; 
    public get deviceTypeWorkSpacesThinClient() {
        return this.getStringAttribute('device_type_work_spaces_thin_client');
    }
    public set deviceTypeWorkSpacesThinClient(value: string) {
        this._deviceTypeWorkSpacesThinClient = value;
    }
    public resetDeviceTypeWorkSpacesThinClient() {
        this._deviceTypeWorkSpacesThinClient = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceTypeWorkSpacesThinClientInput() {
        return this._deviceTypeWorkSpacesThinClient;
    }

    // device_type_zero_client - computed: true, optional: true, required: false
    private _deviceTypeZeroClient?: string; 
    public get deviceTypeZeroClient() {
        return this.getStringAttribute('device_type_zero_client');
    }
    public set deviceTypeZeroClient(value: string) {
        this._deviceTypeZeroClient = value;
    }
    public resetDeviceTypeZeroClient() {
        this._deviceTypeZeroClient = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceTypeZeroClientInput() {
        return this._deviceTypeZeroClient;
    }
}
export interface WorkspaceCreationPropertiesProperty {
    /**
    * The identifier of the default security group to apply to WorkSpaces when they are created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#custom_security_group_id CcDirectory#custom_security_group_id}
    */
    readonly customSecurityGroupId?: string;
    /**
    * The organizational unit (OU) in the directory for the WorkSpace machine accounts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#default_ou CcDirectory#default_ou}
    */
    readonly defaultOu?: string;
    /**
    * Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in this directory by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#enable_internet_access CcDirectory#enable_internet_access}
    */
    readonly enableInternetAccess?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether maintenance mode is enabled for WorkSpaces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#enable_maintenance_mode CcDirectory#enable_maintenance_mode}
    */
    readonly enableMaintenanceMode?: boolean | cdktn.IResolvable;
    /**
    * Indicates the IAM role ARN of the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#instance_iam_role_arn CcDirectory#instance_iam_role_arn}
    */
    readonly instanceIamRoleArn?: string;
    /**
    * Specifies whether WorkSpace users are local administrators on their WorkSpaces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/workspaces_directory#user_enabled_as_local_administrator CcDirectory#user_enabled_as_local_administrator}
    */
    readonly userEnabledAsLocalAdministrator?: boolean | cdktn.IResolvable;
}
export class WorkspaceCreationPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkspaceCreationPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customSecurityGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.customSecurityGroupId = this._customSecurityGroupId;
        }
        if (this._defaultOu !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultOu = this._defaultOu;
        }
        if (this._enableInternetAccess !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableInternetAccess = this._enableInternetAccess;
        }
        if (this._enableMaintenanceMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableMaintenanceMode = this._enableMaintenanceMode;
        }
        if (this._instanceIamRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceIamRoleArn = this._instanceIamRoleArn;
        }
        if (this._userEnabledAsLocalAdministrator !== undefined) {
            hasAnyValues = true;
            internalValueResult.userEnabledAsLocalAdministrator = this._userEnabledAsLocalAdministrator;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkspaceCreationPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customSecurityGroupId = undefined;
            this._defaultOu = undefined;
            this._enableInternetAccess = undefined;
            this._enableMaintenanceMode = undefined;
            this._instanceIamRoleArn = undefined;
            this._userEnabledAsLocalAdministrator = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customSecurityGroupId = value.customSecurityGroupId;
            this._defaultOu = value.defaultOu;
            this._enableInternetAccess = value.enableInternetAccess;
            this._enableMaintenanceMode = value.enableMaintenanceMode;
            this._instanceIamRoleArn = value.instanceIamRoleArn;
            this._userEnabledAsLocalAdministrator = value.userEnabledAsLocalAdministrator;
        }
    }

    // custom_security_group_id - computed: true, optional: true, required: false
    private _customSecurityGroupId?: string; 
    public get customSecurityGroupId() {
        return this.getStringAttribute('custom_security_group_id');
    }
    public set customSecurityGroupId(value: string) {
        this._customSecurityGroupId = value;
    }
    public resetCustomSecurityGroupId() {
        this._customSecurityGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSecurityGroupIdInput() {
        return this._customSecurityGroupId;
    }

    // default_ou - computed: true, optional: true, required: false
    private _defaultOu?: string; 
    public get defaultOu() {
        return this.getStringAttribute('default_ou');
    }
    public set defaultOu(value: string) {
        this._defaultOu = value;
    }
    public resetDefaultOu() {
        this._defaultOu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultOuInput() {
        return this._defaultOu;
    }

    // enable_internet_access - computed: true, optional: true, required: false
    private _enableInternetAccess?: boolean | cdktn.IResolvable; 
    public get enableInternetAccess() {
        return this.getBooleanAttribute('enable_internet_access');
    }
    public set enableInternetAccess(value: boolean | cdktn.IResolvable) {
        this._enableInternetAccess = value;
    }
    public resetEnableInternetAccess() {
        this._enableInternetAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableInternetAccessInput() {
        return this._enableInternetAccess;
    }

    // enable_maintenance_mode - computed: true, optional: true, required: false
    private _enableMaintenanceMode?: boolean | cdktn.IResolvable; 
    public get enableMaintenanceMode() {
        return this.getBooleanAttribute('enable_maintenance_mode');
    }
    public set enableMaintenanceMode(value: boolean | cdktn.IResolvable) {
        this._enableMaintenanceMode = value;
    }
    public resetEnableMaintenanceMode() {
        this._enableMaintenanceMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableMaintenanceModeInput() {
        return this._enableMaintenanceMode;
    }

    // instance_iam_role_arn - computed: true, optional: true, required: false
    private _instanceIamRoleArn?: string; 
    public get instanceIamRoleArn() {
        return this.getStringAttribute('instance_iam_role_arn');
    }
    public set instanceIamRoleArn(value: string) {
        this._instanceIamRoleArn = value;
    }
    public resetInstanceIamRoleArn() {
        this._instanceIamRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIamRoleArnInput() {
        return this._instanceIamRoleArn;
    }

    // user_enabled_as_local_administrator - computed: true, optional: true, required: false
    private _userEnabledAsLocalAdministrator?: boolean | cdktn.IResolvable; 
    public get userEnabledAsLocalAdministrator() {
        return this.getBooleanAttribute('user_enabled_as_local_administrator');
    }
    public set userEnabledAsLocalAdministrator(value: boolean | cdktn.IResolvable) {
        this._userEnabledAsLocalAdministrator = value;
    }
    public resetUserEnabledAsLocalAdministrator() {
        this._userEnabledAsLocalAdministrator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userEnabledAsLocalAdministratorInput() {
        return this._userEnabledAsLocalAdministrator;
    }
}
}
