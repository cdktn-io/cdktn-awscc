// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDomainProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies the VPC used for non-EFS traffic. The default value is PublicInternetOnly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#app_network_access_type CcDomain#app_network_access_type}
    */
    readonly appNetworkAccessType?: string;
    /**
    * The entity that creates and manages the required security groups for inter-app communication in VPCOnly mode. Required when CreateDomain.AppNetworkAccessType is VPCOnly and DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn is provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#app_security_group_management CcDomain#app_security_group_management}
    */
    readonly appSecurityGroupManagement?: string;
    /**
    * The mode of authentication that members use to access the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#auth_mode CcDomain#auth_mode}
    */
    readonly authMode: string;
    /**
    * The default space settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#default_space_settings CcDomain#default_space_settings}
    */
    readonly defaultSpaceSettings?: CcDomain.DefaultSpaceSettingsProperty;
    /**
    * The default user settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#default_user_settings CcDomain#default_user_settings}
    */
    readonly defaultUserSettings: CcDomain.UserSettingsProperty;
    /**
    * A name for the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#domain_name CcDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * A collection of Domain settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#domain_settings CcDomain#domain_settings}
    */
    readonly domainSettings?: CcDomain.DomainSettingsProperty;
    /**
    * Indicates whether a home EFS file system is created for the domain. Set to Disabled to skip EFS creation and reduce domain creation time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#home_efs_file_system_creation CcDomain#home_efs_file_system_creation}
    */
    readonly homeEfsFileSystemCreation?: string;
    /**
    * SageMaker uses AWS KMS to encrypt the EFS volume attached to the domain with an AWS managed customer master key (CMK) by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#kms_key_id CcDomain#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The VPC subnets that Studio uses for communication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#subnet_ids CcDomain#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Indicates whether the tags added to Domain, User Profile and Space entity is propagated to all SageMaker resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#tag_propagation CcDomain#tag_propagation}
    */
    readonly tagPropagation?: string;
    /**
    * A list of tags to apply to the user profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#tags CcDomain#tags}
    */
    readonly tags?: CcDomain.TagProperty[] | cdktn.IResolvable;
    /**
    * The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#vpc_id CcDomain#vpc_id}
    */
    readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain awscc_sagemaker_domain}
*/
export class CcDomain extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_domain";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDomain resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDomain to import
    * @param importFromId The id of the existing CcDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDomain to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_domain", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain awscc_sagemaker_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDomainProps
    */
    public constructor(scope: Construct, id: string, config: CcDomainProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_domain',
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
        this._appNetworkAccessType = config.appNetworkAccessType;
        this._appSecurityGroupManagement = config.appSecurityGroupManagement;
        this._authMode = config.authMode;
        this._defaultSpaceSettings.internalValue = config.defaultSpaceSettings;
        this._defaultUserSettings.internalValue = config.defaultUserSettings;
        this._domainName = config.domainName;
        this._domainSettings.internalValue = config.domainSettings;
        this._homeEfsFileSystemCreation = config.homeEfsFileSystemCreation;
        this._kmsKeyId = config.kmsKeyId;
        this._subnetIds = config.subnetIds;
        this._tagPropagation = config.tagPropagation;
        this._tags.internalValue = config.tags;
        this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_network_access_type - computed: true, optional: true, required: false
    private _appNetworkAccessType?: string; 
    public get appNetworkAccessType() {
        return this.getStringAttribute('app_network_access_type');
    }
    public set appNetworkAccessType(value: string) {
        this._appNetworkAccessType = value;
    }
    public resetAppNetworkAccessType() {
        this._appNetworkAccessType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appNetworkAccessTypeInput() {
        return this._appNetworkAccessType;
    }

    // app_security_group_management - computed: true, optional: true, required: false
    private _appSecurityGroupManagement?: string; 
    public get appSecurityGroupManagement() {
        return this.getStringAttribute('app_security_group_management');
    }
    public set appSecurityGroupManagement(value: string) {
        this._appSecurityGroupManagement = value;
    }
    public resetAppSecurityGroupManagement() {
        this._appSecurityGroupManagement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appSecurityGroupManagementInput() {
        return this._appSecurityGroupManagement;
    }

    // auth_mode - computed: false, optional: false, required: true
    private _authMode?: string; 
    public get authMode() {
        return this.getStringAttribute('auth_mode');
    }
    public set authMode(value: string) {
        this._authMode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authModeInput() {
        return this._authMode;
    }

    // default_space_settings - computed: true, optional: true, required: false
    private _defaultSpaceSettings = new CcDomain.DefaultSpaceSettingsPropertyOutputReference(this, "default_space_settings");
    public get defaultSpaceSettings() {
        return this._defaultSpaceSettings;
    }
    public putDefaultSpaceSettings(value: CcDomain.DefaultSpaceSettingsProperty) {
        this._defaultSpaceSettings.internalValue = value;
    }
    public resetDefaultSpaceSettings() {
        this._defaultSpaceSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultSpaceSettingsInput() {
        return this._defaultSpaceSettings.internalValue;
    }

    // default_user_settings - computed: false, optional: false, required: true
    private _defaultUserSettings = new CcDomain.UserSettingsPropertyOutputReference(this, "default_user_settings");
    public get defaultUserSettings() {
        return this._defaultUserSettings;
    }
    public putDefaultUserSettings(value: CcDomain.UserSettingsProperty) {
        this._defaultUserSettings.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultUserSettingsInput() {
        return this._defaultUserSettings.internalValue;
    }

    // domain_arn - computed: true, optional: false, required: false
    public get domainArn() {
        return this.getStringAttribute('domain_arn');
    }

    // domain_id - computed: true, optional: false, required: false
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }

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

    // domain_settings - computed: true, optional: true, required: false
    private _domainSettings = new CcDomain.DomainSettingsPropertyOutputReference(this, "domain_settings");
    public get domainSettings() {
        return this._domainSettings;
    }
    public putDomainSettings(value: CcDomain.DomainSettingsProperty) {
        this._domainSettings.internalValue = value;
    }
    public resetDomainSettings() {
        this._domainSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainSettingsInput() {
        return this._domainSettings.internalValue;
    }

    // home_efs_file_system_creation - computed: true, optional: true, required: false
    private _homeEfsFileSystemCreation?: string; 
    public get homeEfsFileSystemCreation() {
        return this.getStringAttribute('home_efs_file_system_creation');
    }
    public set homeEfsFileSystemCreation(value: string) {
        this._homeEfsFileSystemCreation = value;
    }
    public resetHomeEfsFileSystemCreation() {
        this._homeEfsFileSystemCreation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get homeEfsFileSystemCreationInput() {
        return this._homeEfsFileSystemCreation;
    }

    // home_efs_file_system_id - computed: true, optional: false, required: false
    public get homeEfsFileSystemId() {
        return this.getStringAttribute('home_efs_file_system_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // security_group_id_for_domain_boundary - computed: true, optional: false, required: false
    public get securityGroupIdForDomainBoundary() {
        return this.getStringAttribute('security_group_id_for_domain_boundary');
    }

    // single_sign_on_application_arn - computed: true, optional: false, required: false
    public get singleSignOnApplicationArn() {
        return this.getStringAttribute('single_sign_on_application_arn');
    }

    // single_sign_on_managed_application_instance_id - computed: true, optional: false, required: false
    public get singleSignOnManagedApplicationInstanceId() {
        return this.getStringAttribute('single_sign_on_managed_application_instance_id');
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

    // tag_propagation - computed: true, optional: true, required: false
    private _tagPropagation?: string; 
    public get tagPropagation() {
        return this.getStringAttribute('tag_propagation');
    }
    public set tagPropagation(value: string) {
        this._tagPropagation = value;
    }
    public resetTagPropagation() {
        this._tagPropagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagPropagationInput() {
        return this._tagPropagation;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDomain.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDomain.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // url - computed: true, optional: false, required: false
    public get url() {
        return this.getStringAttribute('url');
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            app_network_access_type: cdktn.stringToTerraform(this._appNetworkAccessType),
            app_security_group_management: cdktn.stringToTerraform(this._appSecurityGroupManagement),
            auth_mode: cdktn.stringToTerraform(this._authMode),
            default_space_settings: ccDomainDefaultSpaceSettingsPropertyToTerraform(this._defaultSpaceSettings.internalValue),
            default_user_settings: ccDomainUserSettingsPropertyToTerraform(this._defaultUserSettings.internalValue),
            domain_name: cdktn.stringToTerraform(this._domainName),
            domain_settings: ccDomainDomainSettingsPropertyToTerraform(this._domainSettings.internalValue),
            home_efs_file_system_creation: cdktn.stringToTerraform(this._homeEfsFileSystemCreation),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
            tag_propagation: cdktn.stringToTerraform(this._tagPropagation),
            tags: cdktn.listMapper(ccDomainTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            app_network_access_type: {
                value: cdktn.stringToHclTerraform(this._appNetworkAccessType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            app_security_group_management: {
                value: cdktn.stringToHclTerraform(this._appSecurityGroupManagement),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auth_mode: {
                value: cdktn.stringToHclTerraform(this._authMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_space_settings: {
                value: ccDomainDefaultSpaceSettingsPropertyToHclTerraform(this._defaultSpaceSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.DefaultSpaceSettingsProperty",
            },
            default_user_settings: {
                value: ccDomainUserSettingsPropertyToHclTerraform(this._defaultUserSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.UserSettingsProperty",
            },
            domain_name: {
                value: cdktn.stringToHclTerraform(this._domainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_settings: {
                value: ccDomainDomainSettingsPropertyToHclTerraform(this._domainSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.DomainSettingsProperty",
            },
            home_efs_file_system_creation: {
                value: cdktn.stringToHclTerraform(this._homeEfsFileSystemCreation),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subnet_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tag_propagation: {
                value: cdktn.stringToHclTerraform(this._tagPropagation),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDomainTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDomain.TagPropertyList",
            },
            vpc_id: {
                value: cdktn.stringToHclTerraform(this._vpcId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDomainEFSFileSystemConfigPropertyToTerraform(struct?: CcDomain.EFSFileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
        file_system_path: cdktn.stringToTerraform(struct!.fileSystemPath),
    }
}


export function ccDomainEFSFileSystemConfigPropertyToHclTerraform(struct?: CcDomain.EFSFileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        file_system_id: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_system_path: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainFSxLustreFileSystemConfigPropertyToTerraform(struct?: CcDomain.FSxLustreFileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
        file_system_path: cdktn.stringToTerraform(struct!.fileSystemPath),
    }
}


export function ccDomainFSxLustreFileSystemConfigPropertyToHclTerraform(struct?: CcDomain.FSxLustreFileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        file_system_id: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_system_path: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainS3FileSystemConfigPropertyToTerraform(struct?: CcDomain.S3FileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mount_path: cdktn.stringToTerraform(struct!.mountPath),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccDomainS3FileSystemConfigPropertyToHclTerraform(struct?: CcDomain.S3FileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mount_path: {
            value: cdktn.stringToHclTerraform(struct!.mountPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainCustomFileSystemConfigPropertyToTerraform(struct?: CcDomain.CustomFileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        efs_file_system_config: ccDomainEFSFileSystemConfigPropertyToTerraform(struct!.efsFileSystemConfig),
        fsx_lustre_file_system_config: ccDomainFSxLustreFileSystemConfigPropertyToTerraform(struct!.fsxLustreFileSystemConfig),
        s3_file_system_config: ccDomainS3FileSystemConfigPropertyToTerraform(struct!.s3FileSystemConfig),
    }
}


export function ccDomainCustomFileSystemConfigPropertyToHclTerraform(struct?: CcDomain.CustomFileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        efs_file_system_config: {
            value: ccDomainEFSFileSystemConfigPropertyToHclTerraform(struct!.efsFileSystemConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "EFSFileSystemConfigProperty",
        },
        fsx_lustre_file_system_config: {
            value: ccDomainFSxLustreFileSystemConfigPropertyToHclTerraform(struct!.fsxLustreFileSystemConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "FSxLustreFileSystemConfigProperty",
        },
        s3_file_system_config: {
            value: ccDomainS3FileSystemConfigPropertyToHclTerraform(struct!.s3FileSystemConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "S3FileSystemConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainCustomPosixUserConfigPropertyToTerraform(struct?: CcDomain.CustomPosixUserConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        gid: cdktn.numberToTerraform(struct!.gid),
        uid: cdktn.numberToTerraform(struct!.uid),
    }
}


export function ccDomainCustomPosixUserConfigPropertyToHclTerraform(struct?: CcDomain.CustomPosixUserConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        gid: {
            value: cdktn.numberToHclTerraform(struct!.gid),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        uid: {
            value: cdktn.numberToHclTerraform(struct!.uid),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainIdleSettingsPropertyToTerraform(struct?: CcDomain.IdleSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.idleTimeoutInMinutes),
        lifecycle_management: cdktn.stringToTerraform(struct!.lifecycleManagement),
        max_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.maxIdleTimeoutInMinutes),
        min_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.minIdleTimeoutInMinutes),
    }
}


export function ccDomainIdleSettingsPropertyToHclTerraform(struct?: CcDomain.IdleSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.idleTimeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lifecycle_management: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleManagement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_idle_timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.maxIdleTimeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_idle_timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.minIdleTimeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainAppLifecycleManagementPropertyToTerraform(struct?: CcDomain.AppLifecycleManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_settings: ccDomainIdleSettingsPropertyToTerraform(struct!.idleSettings),
    }
}


export function ccDomainAppLifecycleManagementPropertyToHclTerraform(struct?: CcDomain.AppLifecycleManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_settings: {
            value: ccDomainIdleSettingsPropertyToHclTerraform(struct!.idleSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "IdleSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainCodeRepositoryPropertyToTerraform(struct?: CcDomain.CodeRepositoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        repository_url: cdktn.stringToTerraform(struct!.repositoryUrl),
    }
}


export function ccDomainCodeRepositoryPropertyToHclTerraform(struct?: CcDomain.CodeRepositoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        repository_url: {
            value: cdktn.stringToHclTerraform(struct!.repositoryUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainCustomImagePropertyToTerraform(struct?: CcDomain.CustomImageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_image_config_name: cdktn.stringToTerraform(struct!.appImageConfigName),
        image_name: cdktn.stringToTerraform(struct!.imageName),
        image_version_number: cdktn.numberToTerraform(struct!.imageVersionNumber),
    }
}


export function ccDomainCustomImagePropertyToHclTerraform(struct?: CcDomain.CustomImageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_image_config_name: {
            value: cdktn.stringToHclTerraform(struct!.appImageConfigName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_name: {
            value: cdktn.stringToHclTerraform(struct!.imageName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_version_number: {
            value: cdktn.numberToHclTerraform(struct!.imageVersionNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainResourceSpecPropertyToTerraform(struct?: CcDomain.ResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
        sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
        sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
        training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    }
}


export function ccDomainResourceSpecPropertyToHclTerraform(struct?: CcDomain.ResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_version_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        training_plan_arn: {
            value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainJupyterLabAppSettingsPropertyToTerraform(struct?: CcDomain.JupyterLabAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_lifecycle_management: ccDomainAppLifecycleManagementPropertyToTerraform(struct!.appLifecycleManagement),
        built_in_lifecycle_config_arn: cdktn.stringToTerraform(struct!.builtInLifecycleConfigArn),
        code_repositories: cdktn.listMapper(ccDomainCodeRepositoryPropertyToTerraform, false)(struct!.codeRepositories),
        custom_images: cdktn.listMapper(ccDomainCustomImagePropertyToTerraform, false)(struct!.customImages),
        default_resource_spec: ccDomainResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
        lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    }
}


export function ccDomainJupyterLabAppSettingsPropertyToHclTerraform(struct?: CcDomain.JupyterLabAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_lifecycle_management: {
            value: ccDomainAppLifecycleManagementPropertyToHclTerraform(struct!.appLifecycleManagement),
            isBlock: true,
            type: "struct",
            storageClassType: "AppLifecycleManagementProperty",
        },
        built_in_lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.builtInLifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        code_repositories: {
            value: cdktn.listMapperHcl(ccDomainCodeRepositoryPropertyToHclTerraform, false)(struct!.codeRepositories),
            isBlock: true,
            type: "list",
            storageClassType: "CodeRepositoryPropertyList",
        },
        custom_images: {
            value: cdktn.listMapperHcl(ccDomainCustomImagePropertyToHclTerraform, false)(struct!.customImages),
            isBlock: true,
            type: "list",
            storageClassType: "CustomImagePropertyList",
        },
        default_resource_spec: {
            value: ccDomainResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "ResourceSpecProperty",
        },
        lifecycle_config_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: CcDomain.DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
        sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
        sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
        training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    }
}


export function ccDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: CcDomain.DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_version_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        training_plan_arn: {
            value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainJupyterServerAppSettingsPropertyToTerraform(struct?: CcDomain.JupyterServerAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_resource_spec: ccDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
        lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    }
}


export function ccDomainJupyterServerAppSettingsPropertyToHclTerraform(struct?: CcDomain.JupyterServerAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_resource_spec: {
            value: ccDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty",
        },
        lifecycle_config_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesPropertyToTerraform(struct?: CcDomain.DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_image_config_name: cdktn.stringToTerraform(struct!.appImageConfigName),
        image_name: cdktn.stringToTerraform(struct!.imageName),
        image_version_number: cdktn.numberToTerraform(struct!.imageVersionNumber),
    }
}


export function ccDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesPropertyToHclTerraform(struct?: CcDomain.DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_image_config_name: {
            value: cdktn.stringToHclTerraform(struct!.appImageConfigName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_name: {
            value: cdktn.stringToHclTerraform(struct!.imageName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_version_number: {
            value: cdktn.numberToHclTerraform(struct!.imageVersionNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: CcDomain.DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
        sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
        sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
        training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    }
}


export function ccDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: CcDomain.DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_version_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        training_plan_arn: {
            value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainKernelGatewayAppSettingsPropertyToTerraform(struct?: CcDomain.KernelGatewayAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_images: cdktn.listMapper(ccDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesPropertyToTerraform, false)(struct!.customImages),
        default_resource_spec: ccDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
        lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    }
}


export function ccDomainKernelGatewayAppSettingsPropertyToHclTerraform(struct?: CcDomain.KernelGatewayAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_images: {
            value: cdktn.listMapperHcl(ccDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesPropertyToHclTerraform, false)(struct!.customImages),
            isBlock: true,
            type: "list",
            storageClassType: "DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesPropertyList",
        },
        default_resource_spec: {
            value: ccDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty",
        },
        lifecycle_config_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultEbsStorageSettingsPropertyToTerraform(struct?: CcDomain.DefaultEbsStorageSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.defaultEbsVolumeSizeInGb),
        maximum_ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.maximumEbsVolumeSizeInGb),
    }
}


export function ccDomainDefaultEbsStorageSettingsPropertyToHclTerraform(struct?: CcDomain.DefaultEbsStorageSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_ebs_volume_size_in_gb: {
            value: cdktn.numberToHclTerraform(struct!.defaultEbsVolumeSizeInGb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        maximum_ebs_volume_size_in_gb: {
            value: cdktn.numberToHclTerraform(struct!.maximumEbsVolumeSizeInGb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultSpaceStorageSettingsPropertyToTerraform(struct?: CcDomain.DefaultSpaceStorageSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_ebs_storage_settings: ccDomainDefaultEbsStorageSettingsPropertyToTerraform(struct!.defaultEbsStorageSettings),
    }
}


export function ccDomainDefaultSpaceStorageSettingsPropertyToHclTerraform(struct?: CcDomain.DefaultSpaceStorageSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_ebs_storage_settings: {
            value: ccDomainDefaultEbsStorageSettingsPropertyToHclTerraform(struct!.defaultEbsStorageSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultEbsStorageSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultSpaceSettingsPropertyToTerraform(struct?: CcDomain.DefaultSpaceSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_file_system_configs: cdktn.listMapper(ccDomainCustomFileSystemConfigPropertyToTerraform, false)(struct!.customFileSystemConfigs),
        custom_posix_user_config: ccDomainCustomPosixUserConfigPropertyToTerraform(struct!.customPosixUserConfig),
        execution_role: cdktn.stringToTerraform(struct!.executionRole),
        jupyter_lab_app_settings: ccDomainJupyterLabAppSettingsPropertyToTerraform(struct!.jupyterLabAppSettings),
        jupyter_server_app_settings: ccDomainJupyterServerAppSettingsPropertyToTerraform(struct!.jupyterServerAppSettings),
        kernel_gateway_app_settings: ccDomainKernelGatewayAppSettingsPropertyToTerraform(struct!.kernelGatewayAppSettings),
        security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
        space_storage_settings: ccDomainDefaultSpaceStorageSettingsPropertyToTerraform(struct!.spaceStorageSettings),
    }
}


export function ccDomainDefaultSpaceSettingsPropertyToHclTerraform(struct?: CcDomain.DefaultSpaceSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_file_system_configs: {
            value: cdktn.listMapperHcl(ccDomainCustomFileSystemConfigPropertyToHclTerraform, false)(struct!.customFileSystemConfigs),
            isBlock: true,
            type: "list",
            storageClassType: "CustomFileSystemConfigPropertyList",
        },
        custom_posix_user_config: {
            value: ccDomainCustomPosixUserConfigPropertyToHclTerraform(struct!.customPosixUserConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomPosixUserConfigProperty",
        },
        execution_role: {
            value: cdktn.stringToHclTerraform(struct!.executionRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        jupyter_lab_app_settings: {
            value: ccDomainJupyterLabAppSettingsPropertyToHclTerraform(struct!.jupyterLabAppSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "JupyterLabAppSettingsProperty",
        },
        jupyter_server_app_settings: {
            value: ccDomainJupyterServerAppSettingsPropertyToHclTerraform(struct!.jupyterServerAppSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "JupyterServerAppSettingsProperty",
        },
        kernel_gateway_app_settings: {
            value: ccDomainKernelGatewayAppSettingsPropertyToHclTerraform(struct!.kernelGatewayAppSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "KernelGatewayAppSettingsProperty",
        },
        security_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        space_storage_settings: {
            value: ccDomainDefaultSpaceStorageSettingsPropertyToHclTerraform(struct!.spaceStorageSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultSpaceStorageSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.idleTimeoutInMinutes),
        lifecycle_management: cdktn.stringToTerraform(struct!.lifecycleManagement),
        max_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.maxIdleTimeoutInMinutes),
        min_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.minIdleTimeoutInMinutes),
    }
}


export function ccDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.idleTimeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lifecycle_management: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleManagement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_idle_timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.maxIdleTimeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_idle_timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.minIdleTimeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_settings: ccDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyToTerraform(struct!.idleSettings),
    }
}


export function ccDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_settings: {
            value: ccDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyToHclTerraform(struct!.idleSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsCodeEditorAppSettingsCustomImagesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_image_config_name: cdktn.stringToTerraform(struct!.appImageConfigName),
        image_name: cdktn.stringToTerraform(struct!.imageName),
        image_version_number: cdktn.numberToTerraform(struct!.imageVersionNumber),
    }
}


export function ccDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsCodeEditorAppSettingsCustomImagesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_image_config_name: {
            value: cdktn.stringToHclTerraform(struct!.appImageConfigName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_name: {
            value: cdktn.stringToHclTerraform(struct!.imageName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_version_number: {
            value: cdktn.numberToHclTerraform(struct!.imageVersionNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
        sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
        sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
        training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    }
}


export function ccDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_version_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        training_plan_arn: {
            value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainCodeEditorAppSettingsPropertyToTerraform(struct?: CcDomain.CodeEditorAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_lifecycle_management: ccDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyToTerraform(struct!.appLifecycleManagement),
        built_in_lifecycle_config_arn: cdktn.stringToTerraform(struct!.builtInLifecycleConfigArn),
        custom_images: cdktn.listMapper(ccDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesPropertyToTerraform, false)(struct!.customImages),
        default_resource_spec: ccDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
        lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    }
}


export function ccDomainCodeEditorAppSettingsPropertyToHclTerraform(struct?: CcDomain.CodeEditorAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_lifecycle_management: {
            value: ccDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyToHclTerraform(struct!.appLifecycleManagement),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty",
        },
        built_in_lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.builtInLifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_images: {
            value: cdktn.listMapperHcl(ccDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesPropertyToHclTerraform, false)(struct!.customImages),
            isBlock: true,
            type: "list",
            storageClassType: "DefaultUserSettingsCodeEditorAppSettingsCustomImagesPropertyList",
        },
        default_resource_spec: {
            value: ccDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty",
        },
        lifecycle_config_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainEfsFileSystemConfigPropertyToTerraform(struct?: CcDomain.EfsFileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
        file_system_path: cdktn.stringToTerraform(struct!.fileSystemPath),
    }
}


export function ccDomainEfsFileSystemConfigPropertyToHclTerraform(struct?: CcDomain.EfsFileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        file_system_id: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_system_path: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainFsxLustreFileSystemConfigPropertyToTerraform(struct?: CcDomain.FsxLustreFileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
        file_system_path: cdktn.stringToTerraform(struct!.fileSystemPath),
    }
}


export function ccDomainFsxLustreFileSystemConfigPropertyToHclTerraform(struct?: CcDomain.FsxLustreFileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        file_system_id: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_system_path: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mount_path: cdktn.stringToTerraform(struct!.mountPath),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mount_path: {
            value: cdktn.stringToHclTerraform(struct!.mountPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainCustomFileSystemConfigsPropertyToTerraform(struct?: CcDomain.CustomFileSystemConfigsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        efs_file_system_config: ccDomainEfsFileSystemConfigPropertyToTerraform(struct!.efsFileSystemConfig),
        fsx_lustre_file_system_config: ccDomainFsxLustreFileSystemConfigPropertyToTerraform(struct!.fsxLustreFileSystemConfig),
        s3_file_system_config: ccDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigPropertyToTerraform(struct!.s3FileSystemConfig),
    }
}


export function ccDomainCustomFileSystemConfigsPropertyToHclTerraform(struct?: CcDomain.CustomFileSystemConfigsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        efs_file_system_config: {
            value: ccDomainEfsFileSystemConfigPropertyToHclTerraform(struct!.efsFileSystemConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "EfsFileSystemConfigProperty",
        },
        fsx_lustre_file_system_config: {
            value: ccDomainFsxLustreFileSystemConfigPropertyToHclTerraform(struct!.fsxLustreFileSystemConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "FsxLustreFileSystemConfigProperty",
        },
        s3_file_system_config: {
            value: ccDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigPropertyToHclTerraform(struct!.s3FileSystemConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsCustomPosixUserConfigPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsCustomPosixUserConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        gid: cdktn.numberToTerraform(struct!.gid),
        uid: cdktn.numberToTerraform(struct!.uid),
    }
}


export function ccDomainDefaultUserSettingsCustomPosixUserConfigPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsCustomPosixUserConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        gid: {
            value: cdktn.numberToHclTerraform(struct!.gid),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        uid: {
            value: cdktn.numberToHclTerraform(struct!.uid),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.idleTimeoutInMinutes),
        lifecycle_management: cdktn.stringToTerraform(struct!.lifecycleManagement),
        max_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.maxIdleTimeoutInMinutes),
        min_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.minIdleTimeoutInMinutes),
    }
}


export function ccDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.idleTimeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lifecycle_management: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleManagement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_idle_timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.maxIdleTimeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_idle_timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.minIdleTimeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_settings: ccDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToTerraform(struct!.idleSettings),
    }
}


export function ccDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_settings: {
            value: ccDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToHclTerraform(struct!.idleSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainCodeRepositoriesPropertyToTerraform(struct?: CcDomain.CodeRepositoriesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        repository_url: cdktn.stringToTerraform(struct!.repositoryUrl),
    }
}


export function ccDomainCodeRepositoriesPropertyToHclTerraform(struct?: CcDomain.CodeRepositoriesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        repository_url: {
            value: cdktn.stringToHclTerraform(struct!.repositoryUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsJupyterLabAppSettingsCustomImagesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_image_config_name: cdktn.stringToTerraform(struct!.appImageConfigName),
        image_name: cdktn.stringToTerraform(struct!.imageName),
        image_version_number: cdktn.numberToTerraform(struct!.imageVersionNumber),
    }
}


export function ccDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsJupyterLabAppSettingsCustomImagesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_image_config_name: {
            value: cdktn.stringToHclTerraform(struct!.appImageConfigName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_name: {
            value: cdktn.stringToHclTerraform(struct!.imageName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_version_number: {
            value: cdktn.numberToHclTerraform(struct!.imageVersionNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
        sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
        sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
        training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    }
}


export function ccDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_version_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        training_plan_arn: {
            value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsJupyterLabAppSettingsPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsJupyterLabAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_lifecycle_management: ccDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToTerraform(struct!.appLifecycleManagement),
        built_in_lifecycle_config_arn: cdktn.stringToTerraform(struct!.builtInLifecycleConfigArn),
        code_repositories: cdktn.listMapper(ccDomainCodeRepositoriesPropertyToTerraform, false)(struct!.codeRepositories),
        custom_images: cdktn.listMapper(ccDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesPropertyToTerraform, false)(struct!.customImages),
        default_resource_spec: ccDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
        lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    }
}


export function ccDomainDefaultUserSettingsJupyterLabAppSettingsPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsJupyterLabAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_lifecycle_management: {
            value: ccDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToHclTerraform(struct!.appLifecycleManagement),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty",
        },
        built_in_lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.builtInLifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        code_repositories: {
            value: cdktn.listMapperHcl(ccDomainCodeRepositoriesPropertyToHclTerraform, false)(struct!.codeRepositories),
            isBlock: true,
            type: "list",
            storageClassType: "CodeRepositoriesPropertyList",
        },
        custom_images: {
            value: cdktn.listMapperHcl(ccDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesPropertyToHclTerraform, false)(struct!.customImages),
            isBlock: true,
            type: "list",
            storageClassType: "DefaultUserSettingsJupyterLabAppSettingsCustomImagesPropertyList",
        },
        default_resource_spec: {
            value: ccDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty",
        },
        lifecycle_config_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
        sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
        sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
        training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    }
}


export function ccDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_version_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        training_plan_arn: {
            value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsJupyterServerAppSettingsPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsJupyterServerAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_resource_spec: ccDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
        lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    }
}


export function ccDomainDefaultUserSettingsJupyterServerAppSettingsPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsJupyterServerAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_resource_spec: {
            value: ccDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty",
        },
        lifecycle_config_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsKernelGatewayAppSettingsCustomImagesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_image_config_name: cdktn.stringToTerraform(struct!.appImageConfigName),
        image_name: cdktn.stringToTerraform(struct!.imageName),
        image_version_number: cdktn.numberToTerraform(struct!.imageVersionNumber),
    }
}


export function ccDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsKernelGatewayAppSettingsCustomImagesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_image_config_name: {
            value: cdktn.stringToHclTerraform(struct!.appImageConfigName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_name: {
            value: cdktn.stringToHclTerraform(struct!.imageName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_version_number: {
            value: cdktn.numberToHclTerraform(struct!.imageVersionNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
        sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
        sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
        training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    }
}


export function ccDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_version_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        training_plan_arn: {
            value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsKernelGatewayAppSettingsPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsKernelGatewayAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_images: cdktn.listMapper(ccDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesPropertyToTerraform, false)(struct!.customImages),
        default_resource_spec: ccDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
        lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    }
}


export function ccDomainDefaultUserSettingsKernelGatewayAppSettingsPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsKernelGatewayAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_images: {
            value: cdktn.listMapperHcl(ccDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesPropertyToHclTerraform, false)(struct!.customImages),
            isBlock: true,
            type: "list",
            storageClassType: "DefaultUserSettingsKernelGatewayAppSettingsCustomImagesPropertyList",
        },
        default_resource_spec: {
            value: ccDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty",
        },
        lifecycle_config_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsRSessionAppSettingsCustomImagesPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsRSessionAppSettingsCustomImagesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_image_config_name: cdktn.stringToTerraform(struct!.appImageConfigName),
        image_name: cdktn.stringToTerraform(struct!.imageName),
        image_version_number: cdktn.numberToTerraform(struct!.imageVersionNumber),
    }
}


export function ccDomainDefaultUserSettingsRSessionAppSettingsCustomImagesPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsRSessionAppSettingsCustomImagesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_image_config_name: {
            value: cdktn.stringToHclTerraform(struct!.appImageConfigName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_name: {
            value: cdktn.stringToHclTerraform(struct!.imageName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_version_number: {
            value: cdktn.numberToHclTerraform(struct!.imageVersionNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
        sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
        sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
        training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    }
}


export function ccDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_version_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        training_plan_arn: {
            value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainRSessionAppSettingsPropertyToTerraform(struct?: CcDomain.RSessionAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_images: cdktn.listMapper(ccDomainDefaultUserSettingsRSessionAppSettingsCustomImagesPropertyToTerraform, false)(struct!.customImages),
        default_resource_spec: ccDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
    }
}


export function ccDomainRSessionAppSettingsPropertyToHclTerraform(struct?: CcDomain.RSessionAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_images: {
            value: cdktn.listMapperHcl(ccDomainDefaultUserSettingsRSessionAppSettingsCustomImagesPropertyToHclTerraform, false)(struct!.customImages),
            isBlock: true,
            type: "list",
            storageClassType: "DefaultUserSettingsRSessionAppSettingsCustomImagesPropertyList",
        },
        default_resource_spec: {
            value: ccDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainRStudioServerProAppSettingsPropertyToTerraform(struct?: CcDomain.RStudioServerProAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_status: cdktn.stringToTerraform(struct!.accessStatus),
        user_group: cdktn.stringToTerraform(struct!.userGroup),
    }
}


export function ccDomainRStudioServerProAppSettingsPropertyToHclTerraform(struct?: CcDomain.RStudioServerProAppSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_status: {
            value: cdktn.stringToHclTerraform(struct!.accessStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_group: {
            value: cdktn.stringToHclTerraform(struct!.userGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainSharingSettingsPropertyToTerraform(struct?: CcDomain.SharingSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        notebook_output_option: cdktn.stringToTerraform(struct!.notebookOutputOption),
        s3_kms_key_id: cdktn.stringToTerraform(struct!.s3KmsKeyId),
        s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
    }
}


export function ccDomainSharingSettingsPropertyToHclTerraform(struct?: CcDomain.SharingSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        notebook_output_option: {
            value: cdktn.stringToHclTerraform(struct!.notebookOutputOption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.s3KmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_output_path: {
            value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyToTerraform(struct?: CcDomain.DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.defaultEbsVolumeSizeInGb),
        maximum_ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.maximumEbsVolumeSizeInGb),
    }
}


export function ccDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyToHclTerraform(struct?: CcDomain.DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_ebs_volume_size_in_gb: {
            value: cdktn.numberToHclTerraform(struct!.defaultEbsVolumeSizeInGb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        maximum_ebs_volume_size_in_gb: {
            value: cdktn.numberToHclTerraform(struct!.maximumEbsVolumeSizeInGb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainSpaceStorageSettingsPropertyToTerraform(struct?: CcDomain.SpaceStorageSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_ebs_storage_settings: ccDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyToTerraform(struct!.defaultEbsStorageSettings),
    }
}


export function ccDomainSpaceStorageSettingsPropertyToHclTerraform(struct?: CcDomain.SpaceStorageSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_ebs_storage_settings: {
            value: ccDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyToHclTerraform(struct!.defaultEbsStorageSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainHiddenSageMakerImagePropertyToTerraform(struct?: CcDomain.HiddenSageMakerImageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sage_maker_image_name: cdktn.stringToTerraform(struct!.sageMakerImageName),
        version_aliases: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.versionAliases),
    }
}


export function ccDomainHiddenSageMakerImagePropertyToHclTerraform(struct?: CcDomain.HiddenSageMakerImageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sage_maker_image_name: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version_aliases: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.versionAliases),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainStudioWebPortalSettingsPropertyToTerraform(struct?: CcDomain.StudioWebPortalSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hidden_app_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.hiddenAppTypes),
        hidden_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.hiddenInstanceTypes),
        hidden_ml_tools: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.hiddenMlTools),
        hidden_sage_maker_image_version_aliases: cdktn.listMapper(ccDomainHiddenSageMakerImagePropertyToTerraform, false)(struct!.hiddenSageMakerImageVersionAliases),
    }
}


export function ccDomainStudioWebPortalSettingsPropertyToHclTerraform(struct?: CcDomain.StudioWebPortalSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hidden_app_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.hiddenAppTypes),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        hidden_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.hiddenInstanceTypes),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        hidden_ml_tools: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.hiddenMlTools),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        hidden_sage_maker_image_version_aliases: {
            value: cdktn.listMapperHcl(ccDomainHiddenSageMakerImagePropertyToHclTerraform, false)(struct!.hiddenSageMakerImageVersionAliases),
            isBlock: true,
            type: "set",
            storageClassType: "HiddenSageMakerImagePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainUserSettingsPropertyToTerraform(struct?: CcDomain.UserSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_mount_home_efs: cdktn.stringToTerraform(struct!.autoMountHomeEfs),
        code_editor_app_settings: ccDomainCodeEditorAppSettingsPropertyToTerraform(struct!.codeEditorAppSettings),
        custom_file_system_configs: cdktn.listMapper(ccDomainCustomFileSystemConfigsPropertyToTerraform, false)(struct!.customFileSystemConfigs),
        custom_posix_user_config: ccDomainDefaultUserSettingsCustomPosixUserConfigPropertyToTerraform(struct!.customPosixUserConfig),
        default_landing_uri: cdktn.stringToTerraform(struct!.defaultLandingUri),
        execution_role: cdktn.stringToTerraform(struct!.executionRole),
        jupyter_lab_app_settings: ccDomainDefaultUserSettingsJupyterLabAppSettingsPropertyToTerraform(struct!.jupyterLabAppSettings),
        jupyter_server_app_settings: ccDomainDefaultUserSettingsJupyterServerAppSettingsPropertyToTerraform(struct!.jupyterServerAppSettings),
        kernel_gateway_app_settings: ccDomainDefaultUserSettingsKernelGatewayAppSettingsPropertyToTerraform(struct!.kernelGatewayAppSettings),
        r_session_app_settings: ccDomainRSessionAppSettingsPropertyToTerraform(struct!.rSessionAppSettings),
        r_studio_server_pro_app_settings: ccDomainRStudioServerProAppSettingsPropertyToTerraform(struct!.rStudioServerProAppSettings),
        security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
        sharing_settings: ccDomainSharingSettingsPropertyToTerraform(struct!.sharingSettings),
        space_storage_settings: ccDomainSpaceStorageSettingsPropertyToTerraform(struct!.spaceStorageSettings),
        studio_web_portal: cdktn.stringToTerraform(struct!.studioWebPortal),
        studio_web_portal_settings: ccDomainStudioWebPortalSettingsPropertyToTerraform(struct!.studioWebPortalSettings),
    }
}


export function ccDomainUserSettingsPropertyToHclTerraform(struct?: CcDomain.UserSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_mount_home_efs: {
            value: cdktn.stringToHclTerraform(struct!.autoMountHomeEfs),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        code_editor_app_settings: {
            value: ccDomainCodeEditorAppSettingsPropertyToHclTerraform(struct!.codeEditorAppSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "CodeEditorAppSettingsProperty",
        },
        custom_file_system_configs: {
            value: cdktn.listMapperHcl(ccDomainCustomFileSystemConfigsPropertyToHclTerraform, false)(struct!.customFileSystemConfigs),
            isBlock: true,
            type: "list",
            storageClassType: "CustomFileSystemConfigsPropertyList",
        },
        custom_posix_user_config: {
            value: ccDomainDefaultUserSettingsCustomPosixUserConfigPropertyToHclTerraform(struct!.customPosixUserConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultUserSettingsCustomPosixUserConfigProperty",
        },
        default_landing_uri: {
            value: cdktn.stringToHclTerraform(struct!.defaultLandingUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        execution_role: {
            value: cdktn.stringToHclTerraform(struct!.executionRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        jupyter_lab_app_settings: {
            value: ccDomainDefaultUserSettingsJupyterLabAppSettingsPropertyToHclTerraform(struct!.jupyterLabAppSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultUserSettingsJupyterLabAppSettingsProperty",
        },
        jupyter_server_app_settings: {
            value: ccDomainDefaultUserSettingsJupyterServerAppSettingsPropertyToHclTerraform(struct!.jupyterServerAppSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultUserSettingsJupyterServerAppSettingsProperty",
        },
        kernel_gateway_app_settings: {
            value: ccDomainDefaultUserSettingsKernelGatewayAppSettingsPropertyToHclTerraform(struct!.kernelGatewayAppSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultUserSettingsKernelGatewayAppSettingsProperty",
        },
        r_session_app_settings: {
            value: ccDomainRSessionAppSettingsPropertyToHclTerraform(struct!.rSessionAppSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "RSessionAppSettingsProperty",
        },
        r_studio_server_pro_app_settings: {
            value: ccDomainRStudioServerProAppSettingsPropertyToHclTerraform(struct!.rStudioServerProAppSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "RStudioServerProAppSettingsProperty",
        },
        security_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        sharing_settings: {
            value: ccDomainSharingSettingsPropertyToHclTerraform(struct!.sharingSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "SharingSettingsProperty",
        },
        space_storage_settings: {
            value: ccDomainSpaceStorageSettingsPropertyToHclTerraform(struct!.spaceStorageSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "SpaceStorageSettingsProperty",
        },
        studio_web_portal: {
            value: cdktn.stringToHclTerraform(struct!.studioWebPortal),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        studio_web_portal_settings: {
            value: ccDomainStudioWebPortalSettingsPropertyToHclTerraform(struct!.studioWebPortalSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "StudioWebPortalSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDockerSettingsPropertyToTerraform(struct?: CcDomain.DockerSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_docker_access: cdktn.stringToTerraform(struct!.enableDockerAccess),
        vpc_only_trusted_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.vpcOnlyTrustedAccounts),
    }
}


export function ccDomainDockerSettingsPropertyToHclTerraform(struct?: CcDomain.DockerSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_docker_access: {
            value: cdktn.stringToHclTerraform(struct!.enableDockerAccess),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_only_trusted_accounts: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.vpcOnlyTrustedAccounts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecPropertyToTerraform(struct?: CcDomain.DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
        sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
        sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
        training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    }
}


export function ccDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: CcDomain.DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_version_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        training_plan_arn: {
            value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainRStudioServerProDomainSettingsPropertyToTerraform(struct?: CcDomain.RStudioServerProDomainSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_resource_spec: ccDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
        domain_execution_role_arn: cdktn.stringToTerraform(struct!.domainExecutionRoleArn),
        r_studio_connect_url: cdktn.stringToTerraform(struct!.rStudioConnectUrl),
        r_studio_package_manager_url: cdktn.stringToTerraform(struct!.rStudioPackageManagerUrl),
    }
}


export function ccDomainRStudioServerProDomainSettingsPropertyToHclTerraform(struct?: CcDomain.RStudioServerProDomainSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_resource_spec: {
            value: ccDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecProperty",
        },
        domain_execution_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.domainExecutionRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        r_studio_connect_url: {
            value: cdktn.stringToHclTerraform(struct!.rStudioConnectUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        r_studio_package_manager_url: {
            value: cdktn.stringToHclTerraform(struct!.rStudioPackageManagerUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainUnifiedStudioSettingsPropertyToTerraform(struct?: CcDomain.UnifiedStudioSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain_account_id: cdktn.stringToTerraform(struct!.domainAccountId),
        domain_id: cdktn.stringToTerraform(struct!.domainId),
        domain_region: cdktn.stringToTerraform(struct!.domainRegion),
        environment_id: cdktn.stringToTerraform(struct!.environmentId),
        project_id: cdktn.stringToTerraform(struct!.projectId),
        project_s3_path: cdktn.stringToTerraform(struct!.projectS3Path),
        studio_web_portal_access: cdktn.stringToTerraform(struct!.studioWebPortalAccess),
    }
}


export function ccDomainUnifiedStudioSettingsPropertyToHclTerraform(struct?: CcDomain.UnifiedStudioSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain_account_id: {
            value: cdktn.stringToHclTerraform(struct!.domainAccountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        domain_id: {
            value: cdktn.stringToHclTerraform(struct!.domainId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        domain_region: {
            value: cdktn.stringToHclTerraform(struct!.domainRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        environment_id: {
            value: cdktn.stringToHclTerraform(struct!.environmentId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        project_id: {
            value: cdktn.stringToHclTerraform(struct!.projectId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        project_s3_path: {
            value: cdktn.stringToHclTerraform(struct!.projectS3Path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        studio_web_portal_access: {
            value: cdktn.stringToHclTerraform(struct!.studioWebPortalAccess),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDomainSettingsPropertyToTerraform(struct?: CcDomain.DomainSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        docker_settings: ccDomainDockerSettingsPropertyToTerraform(struct!.dockerSettings),
        execution_role_identity_config: cdktn.stringToTerraform(struct!.executionRoleIdentityConfig),
        ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
        r_studio_server_pro_domain_settings: ccDomainRStudioServerProDomainSettingsPropertyToTerraform(struct!.rStudioServerProDomainSettings),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        unified_studio_settings: ccDomainUnifiedStudioSettingsPropertyToTerraform(struct!.unifiedStudioSettings),
    }
}


export function ccDomainDomainSettingsPropertyToHclTerraform(struct?: CcDomain.DomainSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        docker_settings: {
            value: ccDomainDockerSettingsPropertyToHclTerraform(struct!.dockerSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "DockerSettingsProperty",
        },
        execution_role_identity_config: {
            value: cdktn.stringToHclTerraform(struct!.executionRoleIdentityConfig),
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
        r_studio_server_pro_domain_settings: {
            value: ccDomainRStudioServerProDomainSettingsPropertyToHclTerraform(struct!.rStudioServerProDomainSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "RStudioServerProDomainSettingsProperty",
        },
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        unified_studio_settings: {
            value: ccDomainUnifiedStudioSettingsPropertyToHclTerraform(struct!.unifiedStudioSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "UnifiedStudioSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainTagPropertyToTerraform(struct?: CcDomain.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDomainTagPropertyToHclTerraform(struct?: CcDomain.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDomain {
export interface EFSFileSystemConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#file_system_id CcDomain#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#file_system_path CcDomain#file_system_path}
    */
    readonly fileSystemPath?: string;
}
export class EFSFileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EFSFileSystemConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fileSystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        if (this._fileSystemPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemPath = this._fileSystemPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EFSFileSystemConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileSystemId = undefined;
            this._fileSystemPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileSystemId = value.fileSystemId;
            this._fileSystemPath = value.fileSystemPath;
        }
    }

    // file_system_id - computed: true, optional: true, required: false
    private _fileSystemId?: string; 
    public get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
        this._fileSystemId = value;
    }
    public resetFileSystemId() {
        this._fileSystemId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
        return this._fileSystemId;
    }

    // file_system_path - computed: true, optional: true, required: false
    private _fileSystemPath?: string; 
    public get fileSystemPath() {
        return this.getStringAttribute('file_system_path');
    }
    public set fileSystemPath(value: string) {
        this._fileSystemPath = value;
    }
    public resetFileSystemPath() {
        this._fileSystemPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemPathInput() {
        return this._fileSystemPath;
    }
}
export interface FSxLustreFileSystemConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#file_system_id CcDomain#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#file_system_path CcDomain#file_system_path}
    */
    readonly fileSystemPath?: string;
}
export class FSxLustreFileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FSxLustreFileSystemConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fileSystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        if (this._fileSystemPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemPath = this._fileSystemPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FSxLustreFileSystemConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileSystemId = undefined;
            this._fileSystemPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileSystemId = value.fileSystemId;
            this._fileSystemPath = value.fileSystemPath;
        }
    }

    // file_system_id - computed: true, optional: true, required: false
    private _fileSystemId?: string; 
    public get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
        this._fileSystemId = value;
    }
    public resetFileSystemId() {
        this._fileSystemId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
        return this._fileSystemId;
    }

    // file_system_path - computed: true, optional: true, required: false
    private _fileSystemPath?: string; 
    public get fileSystemPath() {
        return this.getStringAttribute('file_system_path');
    }
    public set fileSystemPath(value: string) {
        this._fileSystemPath = value;
    }
    public resetFileSystemPath() {
        this._fileSystemPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemPathInput() {
        return this._fileSystemPath;
    }
}
export interface S3FileSystemConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#mount_path CcDomain#mount_path}
    */
    readonly mountPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#s3_uri CcDomain#s3_uri}
    */
    readonly s3Uri?: string;
}
export class S3FileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3FileSystemConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mountPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountPath = this._mountPath;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3FileSystemConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mountPath = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mountPath = value.mountPath;
            this._s3Uri = value.s3Uri;
        }
    }

    // mount_path - computed: true, optional: true, required: false
    private _mountPath?: string; 
    public get mountPath() {
        return this.getStringAttribute('mount_path');
    }
    public set mountPath(value: string) {
        this._mountPath = value;
    }
    public resetMountPath() {
        this._mountPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountPathInput() {
        return this._mountPath;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface CustomFileSystemConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#efs_file_system_config CcDomain#efs_file_system_config}
    */
    readonly efsFileSystemConfig?: EFSFileSystemConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#fsx_lustre_file_system_config CcDomain#fsx_lustre_file_system_config}
    */
    readonly fsxLustreFileSystemConfig?: FSxLustreFileSystemConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#s3_file_system_config CcDomain#s3_file_system_config}
    */
    readonly s3FileSystemConfig?: S3FileSystemConfigProperty;
}
export class CustomFileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CustomFileSystemConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._efsFileSystemConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.efsFileSystemConfig = this._efsFileSystemConfig?.internalValue;
        }
        if (this._fsxLustreFileSystemConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fsxLustreFileSystemConfig = this._fsxLustreFileSystemConfig?.internalValue;
        }
        if (this._s3FileSystemConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3FileSystemConfig = this._s3FileSystemConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomFileSystemConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._efsFileSystemConfig.internalValue = undefined;
            this._fsxLustreFileSystemConfig.internalValue = undefined;
            this._s3FileSystemConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._efsFileSystemConfig.internalValue = value.efsFileSystemConfig;
            this._fsxLustreFileSystemConfig.internalValue = value.fsxLustreFileSystemConfig;
            this._s3FileSystemConfig.internalValue = value.s3FileSystemConfig;
        }
    }

    // efs_file_system_config - computed: true, optional: true, required: false
    private _efsFileSystemConfig = new EFSFileSystemConfigPropertyOutputReference(this, "efs_file_system_config");
    public get efsFileSystemConfig() {
        return this._efsFileSystemConfig;
    }
    public putEfsFileSystemConfig(value: EFSFileSystemConfigProperty) {
        this._efsFileSystemConfig.internalValue = value;
    }
    public resetEfsFileSystemConfig() {
        this._efsFileSystemConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get efsFileSystemConfigInput() {
        return this._efsFileSystemConfig.internalValue;
    }

    // fsx_lustre_file_system_config - computed: true, optional: true, required: false
    private _fsxLustreFileSystemConfig = new FSxLustreFileSystemConfigPropertyOutputReference(this, "fsx_lustre_file_system_config");
    public get fsxLustreFileSystemConfig() {
        return this._fsxLustreFileSystemConfig;
    }
    public putFsxLustreFileSystemConfig(value: FSxLustreFileSystemConfigProperty) {
        this._fsxLustreFileSystemConfig.internalValue = value;
    }
    public resetFsxLustreFileSystemConfig() {
        this._fsxLustreFileSystemConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fsxLustreFileSystemConfigInput() {
        return this._fsxLustreFileSystemConfig.internalValue;
    }

    // s3_file_system_config - computed: true, optional: true, required: false
    private _s3FileSystemConfig = new S3FileSystemConfigPropertyOutputReference(this, "s3_file_system_config");
    public get s3FileSystemConfig() {
        return this._s3FileSystemConfig;
    }
    public putS3FileSystemConfig(value: S3FileSystemConfigProperty) {
        this._s3FileSystemConfig.internalValue = value;
    }
    public resetS3FileSystemConfig() {
        this._s3FileSystemConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3FileSystemConfigInput() {
        return this._s3FileSystemConfig.internalValue;
    }
}

export class CustomFileSystemConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : CustomFileSystemConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): CustomFileSystemConfigPropertyOutputReference {
        return new CustomFileSystemConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomPosixUserConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#gid CcDomain#gid}
    */
    readonly gid?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#uid CcDomain#uid}
    */
    readonly uid?: number;
}
export class CustomPosixUserConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomPosixUserConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._gid !== undefined) {
            hasAnyValues = true;
            internalValueResult.gid = this._gid;
        }
        if (this._uid !== undefined) {
            hasAnyValues = true;
            internalValueResult.uid = this._uid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomPosixUserConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._gid = undefined;
            this._uid = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._gid = value.gid;
            this._uid = value.uid;
        }
    }

    // gid - computed: true, optional: true, required: false
    private _gid?: number; 
    public get gid() {
        return this.getNumberAttribute('gid');
    }
    public set gid(value: number) {
        this._gid = value;
    }
    public resetGid() {
        this._gid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gidInput() {
        return this._gid;
    }

    // uid - computed: true, optional: true, required: false
    private _uid?: number; 
    public get uid() {
        return this.getNumberAttribute('uid');
    }
    public set uid(value: number) {
        this._uid = value;
    }
    public resetUid() {
        this._uid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uidInput() {
        return this._uid;
    }
}
export interface IdleSettingsProperty {
    /**
    * The idle timeout value set in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#idle_timeout_in_minutes CcDomain#idle_timeout_in_minutes}
    */
    readonly idleTimeoutInMinutes?: number;
    /**
    * A flag to enable/disable AppLifecycleManagement settings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_management CcDomain#lifecycle_management}
    */
    readonly lifecycleManagement?: string;
    /**
    * The maximum idle timeout value set in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#max_idle_timeout_in_minutes CcDomain#max_idle_timeout_in_minutes}
    */
    readonly maxIdleTimeoutInMinutes?: number;
    /**
    * The minimum idle timeout value set in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#min_idle_timeout_in_minutes CcDomain#min_idle_timeout_in_minutes}
    */
    readonly minIdleTimeoutInMinutes?: number;
}
export class IdleSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IdleSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleTimeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
        }
        if (this._lifecycleManagement !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleManagement = this._lifecycleManagement;
        }
        if (this._maxIdleTimeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxIdleTimeoutInMinutes = this._maxIdleTimeoutInMinutes;
        }
        if (this._minIdleTimeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.minIdleTimeoutInMinutes = this._minIdleTimeoutInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdleSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleTimeoutInMinutes = undefined;
            this._lifecycleManagement = undefined;
            this._maxIdleTimeoutInMinutes = undefined;
            this._minIdleTimeoutInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
            this._lifecycleManagement = value.lifecycleManagement;
            this._maxIdleTimeoutInMinutes = value.maxIdleTimeoutInMinutes;
            this._minIdleTimeoutInMinutes = value.minIdleTimeoutInMinutes;
        }
    }

    // idle_timeout_in_minutes - computed: true, optional: true, required: false
    private _idleTimeoutInMinutes?: number; 
    public get idleTimeoutInMinutes() {
        return this.getNumberAttribute('idle_timeout_in_minutes');
    }
    public set idleTimeoutInMinutes(value: number) {
        this._idleTimeoutInMinutes = value;
    }
    public resetIdleTimeoutInMinutes() {
        this._idleTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleTimeoutInMinutesInput() {
        return this._idleTimeoutInMinutes;
    }

    // lifecycle_management - computed: true, optional: true, required: false
    private _lifecycleManagement?: string; 
    public get lifecycleManagement() {
        return this.getStringAttribute('lifecycle_management');
    }
    public set lifecycleManagement(value: string) {
        this._lifecycleManagement = value;
    }
    public resetLifecycleManagement() {
        this._lifecycleManagement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleManagementInput() {
        return this._lifecycleManagement;
    }

    // max_idle_timeout_in_minutes - computed: true, optional: true, required: false
    private _maxIdleTimeoutInMinutes?: number; 
    public get maxIdleTimeoutInMinutes() {
        return this.getNumberAttribute('max_idle_timeout_in_minutes');
    }
    public set maxIdleTimeoutInMinutes(value: number) {
        this._maxIdleTimeoutInMinutes = value;
    }
    public resetMaxIdleTimeoutInMinutes() {
        this._maxIdleTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxIdleTimeoutInMinutesInput() {
        return this._maxIdleTimeoutInMinutes;
    }

    // min_idle_timeout_in_minutes - computed: true, optional: true, required: false
    private _minIdleTimeoutInMinutes?: number; 
    public get minIdleTimeoutInMinutes() {
        return this.getNumberAttribute('min_idle_timeout_in_minutes');
    }
    public set minIdleTimeoutInMinutes(value: number) {
        this._minIdleTimeoutInMinutes = value;
    }
    public resetMinIdleTimeoutInMinutes() {
        this._minIdleTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minIdleTimeoutInMinutesInput() {
        return this._minIdleTimeoutInMinutes;
    }
}
export interface AppLifecycleManagementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#idle_settings CcDomain#idle_settings}
    */
    readonly idleSettings?: IdleSettingsProperty;
}
export class AppLifecycleManagementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AppLifecycleManagementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleSettings = this._idleSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AppLifecycleManagementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleSettings.internalValue = value.idleSettings;
        }
    }

    // idle_settings - computed: true, optional: true, required: false
    private _idleSettings = new IdleSettingsPropertyOutputReference(this, "idle_settings");
    public get idleSettings() {
        return this._idleSettings;
    }
    public putIdleSettings(value: IdleSettingsProperty) {
        this._idleSettings.internalValue = value;
    }
    public resetIdleSettings() {
        this._idleSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleSettingsInput() {
        return this._idleSettings.internalValue;
    }
}
export interface CodeRepositoryProperty {
    /**
    * A CodeRepository (valid URL) to be used within Jupyter's Git extension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#repository_url CcDomain#repository_url}
    */
    readonly repositoryUrl?: string;
}
export class CodeRepositoryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CodeRepositoryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._repositoryUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryUrl = this._repositoryUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeRepositoryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._repositoryUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._repositoryUrl = value.repositoryUrl;
        }
    }

    // repository_url - computed: true, optional: true, required: false
    private _repositoryUrl?: string; 
    public get repositoryUrl() {
        return this.getStringAttribute('repository_url');
    }
    public set repositoryUrl(value: string) {
        this._repositoryUrl = value;
    }
    public resetRepositoryUrl() {
        this._repositoryUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryUrlInput() {
        return this._repositoryUrl;
    }
}

export class CodeRepositoryPropertyList extends cdktn.ComplexList {
    public internalValue? : CodeRepositoryProperty[] | cdktn.IResolvable

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
    public get(index: number): CodeRepositoryPropertyOutputReference {
        return new CodeRepositoryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomImageProperty {
    /**
    * The Name of the AppImageConfig.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#app_image_config_name CcDomain#app_image_config_name}
    */
    readonly appImageConfigName?: string;
    /**
    * The name of the CustomImage. Must be unique to your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#image_name CcDomain#image_name}
    */
    readonly imageName?: string;
    /**
    * The version number of the CustomImage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#image_version_number CcDomain#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export class CustomImagePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CustomImageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appImageConfigName !== undefined) {
            hasAnyValues = true;
            internalValueResult.appImageConfigName = this._appImageConfigName;
        }
        if (this._imageName !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageName = this._imageName;
        }
        if (this._imageVersionNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageVersionNumber = this._imageVersionNumber;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomImageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appImageConfigName = undefined;
            this._imageName = undefined;
            this._imageVersionNumber = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appImageConfigName = value.appImageConfigName;
            this._imageName = value.imageName;
            this._imageVersionNumber = value.imageVersionNumber;
        }
    }

    // app_image_config_name - computed: true, optional: true, required: false
    private _appImageConfigName?: string; 
    public get appImageConfigName() {
        return this.getStringAttribute('app_image_config_name');
    }
    public set appImageConfigName(value: string) {
        this._appImageConfigName = value;
    }
    public resetAppImageConfigName() {
        this._appImageConfigName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appImageConfigNameInput() {
        return this._appImageConfigName;
    }

    // image_name - computed: true, optional: true, required: false
    private _imageName?: string; 
    public get imageName() {
        return this.getStringAttribute('image_name');
    }
    public set imageName(value: string) {
        this._imageName = value;
    }
    public resetImageName() {
        this._imageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageNameInput() {
        return this._imageName;
    }

    // image_version_number - computed: true, optional: true, required: false
    private _imageVersionNumber?: number; 
    public get imageVersionNumber() {
        return this.getNumberAttribute('image_version_number');
    }
    public set imageVersionNumber(value: number) {
        this._imageVersionNumber = value;
    }
    public resetImageVersionNumber() {
        this._imageVersionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageVersionNumberInput() {
        return this._imageVersionNumber;
    }
}

export class CustomImagePropertyList extends cdktn.ComplexList {
    public internalValue? : CustomImageProperty[] | cdktn.IResolvable

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
    public get(index: number): CustomImagePropertyOutputReference {
        return new CustomImagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceSpecProperty {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#instance_type CcDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_config_arn CcDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_arn CcDomain#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_version_arn CcDomain#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#training_plan_arn CcDomain#training_plan_arn}
    */
    readonly trainingPlanArn?: string;
}
export class ResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourceSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._lifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
        }
        if (this._sageMakerImageArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
        }
        if (this._sageMakerImageVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
        }
        if (this._trainingPlanArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingPlanArn = this._trainingPlanArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sageMakerImageArn = undefined;
            this._sageMakerImageVersionArn = undefined;
            this._trainingPlanArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceType = value.instanceType;
            this._lifecycleConfigArn = value.lifecycleConfigArn;
            this._sageMakerImageArn = value.sageMakerImageArn;
            this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
            this._trainingPlanArn = value.trainingPlanArn;
        }
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // lifecycle_config_arn - computed: true, optional: true, required: false
    private _lifecycleConfigArn?: string; 
    public get lifecycleConfigArn() {
        return this.getStringAttribute('lifecycle_config_arn');
    }
    public set lifecycleConfigArn(value: string) {
        this._lifecycleConfigArn = value;
    }
    public resetLifecycleConfigArn() {
        this._lifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnInput() {
        return this._lifecycleConfigArn;
    }

    // sage_maker_image_arn - computed: true, optional: true, required: false
    private _sageMakerImageArn?: string; 
    public get sageMakerImageArn() {
        return this.getStringAttribute('sage_maker_image_arn');
    }
    public set sageMakerImageArn(value: string) {
        this._sageMakerImageArn = value;
    }
    public resetSageMakerImageArn() {
        this._sageMakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageArnInput() {
        return this._sageMakerImageArn;
    }

    // sage_maker_image_version_arn - computed: true, optional: true, required: false
    private _sageMakerImageVersionArn?: string; 
    public get sageMakerImageVersionArn() {
        return this.getStringAttribute('sage_maker_image_version_arn');
    }
    public set sageMakerImageVersionArn(value: string) {
        this._sageMakerImageVersionArn = value;
    }
    public resetSageMakerImageVersionArn() {
        this._sageMakerImageVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageVersionArnInput() {
        return this._sageMakerImageVersionArn;
    }

    // training_plan_arn - computed: true, optional: true, required: false
    private _trainingPlanArn?: string; 
    public get trainingPlanArn() {
        return this.getStringAttribute('training_plan_arn');
    }
    public set trainingPlanArn(value: string) {
        this._trainingPlanArn = value;
    }
    public resetTrainingPlanArn() {
        this._trainingPlanArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingPlanArnInput() {
        return this._trainingPlanArn;
    }
}
export interface JupyterLabAppSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#app_lifecycle_management CcDomain#app_lifecycle_management}
    */
    readonly appLifecycleManagement?: AppLifecycleManagementProperty;
    /**
    * The lifecycle configuration that runs before the default lifecycle configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#built_in_lifecycle_config_arn CcDomain#built_in_lifecycle_config_arn}
    */
    readonly builtInLifecycleConfigArn?: string;
    /**
    * A list of CodeRepositories available for use with JupyterLab apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#code_repositories CcDomain#code_repositories}
    */
    readonly codeRepositories?: CodeRepositoryProperty[] | cdktn.IResolvable;
    /**
    * A list of custom images for use for JupyterLab apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#custom_images CcDomain#custom_images}
    */
    readonly customImages?: CustomImageProperty[] | cdktn.IResolvable;
    /**
    * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#default_resource_spec CcDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: ResourceSpecProperty;
    /**
    * A list of LifecycleConfigArns available for use with JupyterLab apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_config_arns CcDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
}
export class JupyterLabAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JupyterLabAppSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appLifecycleManagement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.appLifecycleManagement = this._appLifecycleManagement?.internalValue;
        }
        if (this._builtInLifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.builtInLifecycleConfigArn = this._builtInLifecycleConfigArn;
        }
        if (this._codeRepositories?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeRepositories = this._codeRepositories?.internalValue;
        }
        if (this._customImages?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customImages = this._customImages?.internalValue;
        }
        if (this._defaultResourceSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        if (this._lifecycleConfigArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JupyterLabAppSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appLifecycleManagement.internalValue = undefined;
            this._builtInLifecycleConfigArn = undefined;
            this._codeRepositories.internalValue = undefined;
            this._customImages.internalValue = undefined;
            this._defaultResourceSpec.internalValue = undefined;
            this._lifecycleConfigArns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appLifecycleManagement.internalValue = value.appLifecycleManagement;
            this._builtInLifecycleConfigArn = value.builtInLifecycleConfigArn;
            this._codeRepositories.internalValue = value.codeRepositories;
            this._customImages.internalValue = value.customImages;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
            this._lifecycleConfigArns = value.lifecycleConfigArns;
        }
    }

    // app_lifecycle_management - computed: true, optional: true, required: false
    private _appLifecycleManagement = new AppLifecycleManagementPropertyOutputReference(this, "app_lifecycle_management");
    public get appLifecycleManagement() {
        return this._appLifecycleManagement;
    }
    public putAppLifecycleManagement(value: AppLifecycleManagementProperty) {
        this._appLifecycleManagement.internalValue = value;
    }
    public resetAppLifecycleManagement() {
        this._appLifecycleManagement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appLifecycleManagementInput() {
        return this._appLifecycleManagement.internalValue;
    }

    // built_in_lifecycle_config_arn - computed: true, optional: true, required: false
    private _builtInLifecycleConfigArn?: string; 
    public get builtInLifecycleConfigArn() {
        return this.getStringAttribute('built_in_lifecycle_config_arn');
    }
    public set builtInLifecycleConfigArn(value: string) {
        this._builtInLifecycleConfigArn = value;
    }
    public resetBuiltInLifecycleConfigArn() {
        this._builtInLifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get builtInLifecycleConfigArnInput() {
        return this._builtInLifecycleConfigArn;
    }

    // code_repositories - computed: true, optional: true, required: false
    private _codeRepositories = new CodeRepositoryPropertyList(this, "code_repositories", false);
    public get codeRepositories() {
        return this._codeRepositories;
    }
    public putCodeRepositories(value: CodeRepositoryProperty[] | cdktn.IResolvable) {
        this._codeRepositories.internalValue = value;
    }
    public resetCodeRepositories() {
        this._codeRepositories.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeRepositoriesInput() {
        return this._codeRepositories.internalValue;
    }

    // custom_images - computed: true, optional: true, required: false
    private _customImages = new CustomImagePropertyList(this, "custom_images", false);
    public get customImages() {
        return this._customImages;
    }
    public putCustomImages(value: CustomImageProperty[] | cdktn.IResolvable) {
        this._customImages.internalValue = value;
    }
    public resetCustomImages() {
        this._customImages.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customImagesInput() {
        return this._customImages.internalValue;
    }

    // default_resource_spec - computed: true, optional: true, required: false
    private _defaultResourceSpec = new ResourceSpecPropertyOutputReference(this, "default_resource_spec");
    public get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    public putDefaultResourceSpec(value: ResourceSpecProperty) {
        this._defaultResourceSpec.internalValue = value;
    }
    public resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }

    // lifecycle_config_arns - computed: true, optional: true, required: false
    private _lifecycleConfigArns?: string[]; 
    public get lifecycleConfigArns() {
        return this.getListAttribute('lifecycle_config_arns');
    }
    public set lifecycleConfigArns(value: string[]) {
        this._lifecycleConfigArns = value;
    }
    public resetLifecycleConfigArns() {
        this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnsInput() {
        return this._lifecycleConfigArns;
    }
}
export interface DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#instance_type CcDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_config_arn CcDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_arn CcDomain#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_version_arn CcDomain#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#training_plan_arn CcDomain#training_plan_arn}
    */
    readonly trainingPlanArn?: string;
}
export class DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._lifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
        }
        if (this._sageMakerImageArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
        }
        if (this._sageMakerImageVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
        }
        if (this._trainingPlanArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingPlanArn = this._trainingPlanArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sageMakerImageArn = undefined;
            this._sageMakerImageVersionArn = undefined;
            this._trainingPlanArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceType = value.instanceType;
            this._lifecycleConfigArn = value.lifecycleConfigArn;
            this._sageMakerImageArn = value.sageMakerImageArn;
            this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
            this._trainingPlanArn = value.trainingPlanArn;
        }
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // lifecycle_config_arn - computed: true, optional: true, required: false
    private _lifecycleConfigArn?: string; 
    public get lifecycleConfigArn() {
        return this.getStringAttribute('lifecycle_config_arn');
    }
    public set lifecycleConfigArn(value: string) {
        this._lifecycleConfigArn = value;
    }
    public resetLifecycleConfigArn() {
        this._lifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnInput() {
        return this._lifecycleConfigArn;
    }

    // sage_maker_image_arn - computed: true, optional: true, required: false
    private _sageMakerImageArn?: string; 
    public get sageMakerImageArn() {
        return this.getStringAttribute('sage_maker_image_arn');
    }
    public set sageMakerImageArn(value: string) {
        this._sageMakerImageArn = value;
    }
    public resetSageMakerImageArn() {
        this._sageMakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageArnInput() {
        return this._sageMakerImageArn;
    }

    // sage_maker_image_version_arn - computed: true, optional: true, required: false
    private _sageMakerImageVersionArn?: string; 
    public get sageMakerImageVersionArn() {
        return this.getStringAttribute('sage_maker_image_version_arn');
    }
    public set sageMakerImageVersionArn(value: string) {
        this._sageMakerImageVersionArn = value;
    }
    public resetSageMakerImageVersionArn() {
        this._sageMakerImageVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageVersionArnInput() {
        return this._sageMakerImageVersionArn;
    }

    // training_plan_arn - computed: true, optional: true, required: false
    private _trainingPlanArn?: string; 
    public get trainingPlanArn() {
        return this.getStringAttribute('training_plan_arn');
    }
    public set trainingPlanArn(value: string) {
        this._trainingPlanArn = value;
    }
    public resetTrainingPlanArn() {
        this._trainingPlanArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingPlanArnInput() {
        return this._trainingPlanArn;
    }
}
export interface JupyterServerAppSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#default_resource_spec CcDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty;
    /**
    * A list of LifecycleConfigArns available for use with JupyterServer apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_config_arns CcDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
}
export class JupyterServerAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JupyterServerAppSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultResourceSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        if (this._lifecycleConfigArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JupyterServerAppSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultResourceSpec.internalValue = undefined;
            this._lifecycleConfigArns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
            this._lifecycleConfigArns = value.lifecycleConfigArns;
        }
    }

    // default_resource_spec - computed: true, optional: true, required: false
    private _defaultResourceSpec = new DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
    public get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    public putDefaultResourceSpec(value: DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty) {
        this._defaultResourceSpec.internalValue = value;
    }
    public resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }

    // lifecycle_config_arns - computed: true, optional: true, required: false
    private _lifecycleConfigArns?: string[]; 
    public get lifecycleConfigArns() {
        return this.getListAttribute('lifecycle_config_arns');
    }
    public set lifecycleConfigArns(value: string[]) {
        this._lifecycleConfigArns = value;
    }
    public resetLifecycleConfigArns() {
        this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnsInput() {
        return this._lifecycleConfigArns;
    }
}
export interface DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesProperty {
    /**
    * The Name of the AppImageConfig.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#app_image_config_name CcDomain#app_image_config_name}
    */
    readonly appImageConfigName?: string;
    /**
    * The name of the CustomImage. Must be unique to your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#image_name CcDomain#image_name}
    */
    readonly imageName?: string;
    /**
    * The version number of the CustomImage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#image_version_number CcDomain#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export class DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appImageConfigName !== undefined) {
            hasAnyValues = true;
            internalValueResult.appImageConfigName = this._appImageConfigName;
        }
        if (this._imageName !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageName = this._imageName;
        }
        if (this._imageVersionNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageVersionNumber = this._imageVersionNumber;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appImageConfigName = undefined;
            this._imageName = undefined;
            this._imageVersionNumber = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appImageConfigName = value.appImageConfigName;
            this._imageName = value.imageName;
            this._imageVersionNumber = value.imageVersionNumber;
        }
    }

    // app_image_config_name - computed: true, optional: true, required: false
    private _appImageConfigName?: string; 
    public get appImageConfigName() {
        return this.getStringAttribute('app_image_config_name');
    }
    public set appImageConfigName(value: string) {
        this._appImageConfigName = value;
    }
    public resetAppImageConfigName() {
        this._appImageConfigName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appImageConfigNameInput() {
        return this._appImageConfigName;
    }

    // image_name - computed: true, optional: true, required: false
    private _imageName?: string; 
    public get imageName() {
        return this.getStringAttribute('image_name');
    }
    public set imageName(value: string) {
        this._imageName = value;
    }
    public resetImageName() {
        this._imageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageNameInput() {
        return this._imageName;
    }

    // image_version_number - computed: true, optional: true, required: false
    private _imageVersionNumber?: number; 
    public get imageVersionNumber() {
        return this.getNumberAttribute('image_version_number');
    }
    public set imageVersionNumber(value: number) {
        this._imageVersionNumber = value;
    }
    public resetImageVersionNumber() {
        this._imageVersionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageVersionNumberInput() {
        return this._imageVersionNumber;
    }
}

export class DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesPropertyList extends cdktn.ComplexList {
    public internalValue? : DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesProperty[] | cdktn.IResolvable

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
    public get(index: number): DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesPropertyOutputReference {
        return new DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#instance_type CcDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_config_arn CcDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_arn CcDomain#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_version_arn CcDomain#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#training_plan_arn CcDomain#training_plan_arn}
    */
    readonly trainingPlanArn?: string;
}
export class DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._lifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
        }
        if (this._sageMakerImageArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
        }
        if (this._sageMakerImageVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
        }
        if (this._trainingPlanArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingPlanArn = this._trainingPlanArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sageMakerImageArn = undefined;
            this._sageMakerImageVersionArn = undefined;
            this._trainingPlanArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceType = value.instanceType;
            this._lifecycleConfigArn = value.lifecycleConfigArn;
            this._sageMakerImageArn = value.sageMakerImageArn;
            this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
            this._trainingPlanArn = value.trainingPlanArn;
        }
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // lifecycle_config_arn - computed: true, optional: true, required: false
    private _lifecycleConfigArn?: string; 
    public get lifecycleConfigArn() {
        return this.getStringAttribute('lifecycle_config_arn');
    }
    public set lifecycleConfigArn(value: string) {
        this._lifecycleConfigArn = value;
    }
    public resetLifecycleConfigArn() {
        this._lifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnInput() {
        return this._lifecycleConfigArn;
    }

    // sage_maker_image_arn - computed: true, optional: true, required: false
    private _sageMakerImageArn?: string; 
    public get sageMakerImageArn() {
        return this.getStringAttribute('sage_maker_image_arn');
    }
    public set sageMakerImageArn(value: string) {
        this._sageMakerImageArn = value;
    }
    public resetSageMakerImageArn() {
        this._sageMakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageArnInput() {
        return this._sageMakerImageArn;
    }

    // sage_maker_image_version_arn - computed: true, optional: true, required: false
    private _sageMakerImageVersionArn?: string; 
    public get sageMakerImageVersionArn() {
        return this.getStringAttribute('sage_maker_image_version_arn');
    }
    public set sageMakerImageVersionArn(value: string) {
        this._sageMakerImageVersionArn = value;
    }
    public resetSageMakerImageVersionArn() {
        this._sageMakerImageVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageVersionArnInput() {
        return this._sageMakerImageVersionArn;
    }

    // training_plan_arn - computed: true, optional: true, required: false
    private _trainingPlanArn?: string; 
    public get trainingPlanArn() {
        return this.getStringAttribute('training_plan_arn');
    }
    public set trainingPlanArn(value: string) {
        this._trainingPlanArn = value;
    }
    public resetTrainingPlanArn() {
        this._trainingPlanArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingPlanArnInput() {
        return this._trainingPlanArn;
    }
}
export interface KernelGatewayAppSettingsProperty {
    /**
    * A list of custom SageMaker images that are configured to run as a KernelGateway app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#custom_images CcDomain#custom_images}
    */
    readonly customImages?: DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesProperty[] | cdktn.IResolvable;
    /**
    * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#default_resource_spec CcDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty;
    /**
    * A list of LifecycleConfigArns available for use with KernelGateway apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_config_arns CcDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
}
export class KernelGatewayAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KernelGatewayAppSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customImages?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customImages = this._customImages?.internalValue;
        }
        if (this._defaultResourceSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        if (this._lifecycleConfigArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KernelGatewayAppSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customImages.internalValue = undefined;
            this._defaultResourceSpec.internalValue = undefined;
            this._lifecycleConfigArns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customImages.internalValue = value.customImages;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
            this._lifecycleConfigArns = value.lifecycleConfigArns;
        }
    }

    // custom_images - computed: true, optional: true, required: false
    private _customImages = new DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesPropertyList(this, "custom_images", false);
    public get customImages() {
        return this._customImages;
    }
    public putCustomImages(value: DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesProperty[] | cdktn.IResolvable) {
        this._customImages.internalValue = value;
    }
    public resetCustomImages() {
        this._customImages.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customImagesInput() {
        return this._customImages.internalValue;
    }

    // default_resource_spec - computed: true, optional: true, required: false
    private _defaultResourceSpec = new DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
    public get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    public putDefaultResourceSpec(value: DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty) {
        this._defaultResourceSpec.internalValue = value;
    }
    public resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }

    // lifecycle_config_arns - computed: true, optional: true, required: false
    private _lifecycleConfigArns?: string[]; 
    public get lifecycleConfigArns() {
        return this.getListAttribute('lifecycle_config_arns');
    }
    public set lifecycleConfigArns(value: string[]) {
        this._lifecycleConfigArns = value;
    }
    public resetLifecycleConfigArns() {
        this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnsInput() {
        return this._lifecycleConfigArns;
    }
}
export interface DefaultEbsStorageSettingsProperty {
    /**
    * Default size of the Amazon EBS volume in Gb
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#default_ebs_volume_size_in_gb CcDomain#default_ebs_volume_size_in_gb}
    */
    readonly defaultEbsVolumeSizeInGb?: number;
    /**
    * Maximum size of the Amazon EBS volume in Gb. Must be greater than or equal to the DefaultEbsVolumeSizeInGb.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#maximum_ebs_volume_size_in_gb CcDomain#maximum_ebs_volume_size_in_gb}
    */
    readonly maximumEbsVolumeSizeInGb?: number;
}
export class DefaultEbsStorageSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultEbsStorageSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultEbsVolumeSizeInGb !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultEbsVolumeSizeInGb = this._defaultEbsVolumeSizeInGb;
        }
        if (this._maximumEbsVolumeSizeInGb !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumEbsVolumeSizeInGb = this._maximumEbsVolumeSizeInGb;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultEbsStorageSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultEbsVolumeSizeInGb = undefined;
            this._maximumEbsVolumeSizeInGb = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultEbsVolumeSizeInGb = value.defaultEbsVolumeSizeInGb;
            this._maximumEbsVolumeSizeInGb = value.maximumEbsVolumeSizeInGb;
        }
    }

    // default_ebs_volume_size_in_gb - computed: true, optional: true, required: false
    private _defaultEbsVolumeSizeInGb?: number; 
    public get defaultEbsVolumeSizeInGb() {
        return this.getNumberAttribute('default_ebs_volume_size_in_gb');
    }
    public set defaultEbsVolumeSizeInGb(value: number) {
        this._defaultEbsVolumeSizeInGb = value;
    }
    public resetDefaultEbsVolumeSizeInGb() {
        this._defaultEbsVolumeSizeInGb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultEbsVolumeSizeInGbInput() {
        return this._defaultEbsVolumeSizeInGb;
    }

    // maximum_ebs_volume_size_in_gb - computed: true, optional: true, required: false
    private _maximumEbsVolumeSizeInGb?: number; 
    public get maximumEbsVolumeSizeInGb() {
        return this.getNumberAttribute('maximum_ebs_volume_size_in_gb');
    }
    public set maximumEbsVolumeSizeInGb(value: number) {
        this._maximumEbsVolumeSizeInGb = value;
    }
    public resetMaximumEbsVolumeSizeInGb() {
        this._maximumEbsVolumeSizeInGb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumEbsVolumeSizeInGbInput() {
        return this._maximumEbsVolumeSizeInGb;
    }
}
export interface DefaultSpaceStorageSettingsProperty {
    /**
    * Properties related to the Amazon Elastic Block Store volume. Must be provided if storage type is Amazon EBS and must not be provided if storage type is not Amazon EBS
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#default_ebs_storage_settings CcDomain#default_ebs_storage_settings}
    */
    readonly defaultEbsStorageSettings?: DefaultEbsStorageSettingsProperty;
}
export class DefaultSpaceStorageSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultSpaceStorageSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultEbsStorageSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultEbsStorageSettings = this._defaultEbsStorageSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultSpaceStorageSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultEbsStorageSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultEbsStorageSettings.internalValue = value.defaultEbsStorageSettings;
        }
    }

    // default_ebs_storage_settings - computed: true, optional: true, required: false
    private _defaultEbsStorageSettings = new DefaultEbsStorageSettingsPropertyOutputReference(this, "default_ebs_storage_settings");
    public get defaultEbsStorageSettings() {
        return this._defaultEbsStorageSettings;
    }
    public putDefaultEbsStorageSettings(value: DefaultEbsStorageSettingsProperty) {
        this._defaultEbsStorageSettings.internalValue = value;
    }
    public resetDefaultEbsStorageSettings() {
        this._defaultEbsStorageSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultEbsStorageSettingsInput() {
        return this._defaultEbsStorageSettings.internalValue;
    }
}
export interface DefaultSpaceSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#custom_file_system_configs CcDomain#custom_file_system_configs}
    */
    readonly customFileSystemConfigs?: CustomFileSystemConfigProperty[] | cdktn.IResolvable;
    /**
    * The Jupyter lab's custom posix user configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#custom_posix_user_config CcDomain#custom_posix_user_config}
    */
    readonly customPosixUserConfig?: CustomPosixUserConfigProperty;
    /**
    * The execution role for the space.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#execution_role CcDomain#execution_role}
    */
    readonly executionRole?: string;
    /**
    * The Jupyter lab's app settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#jupyter_lab_app_settings CcDomain#jupyter_lab_app_settings}
    */
    readonly jupyterLabAppSettings?: JupyterLabAppSettingsProperty;
    /**
    * The Jupyter server's app settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#jupyter_server_app_settings CcDomain#jupyter_server_app_settings}
    */
    readonly jupyterServerAppSettings?: JupyterServerAppSettingsProperty;
    /**
    * The kernel gateway app settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#kernel_gateway_app_settings CcDomain#kernel_gateway_app_settings}
    */
    readonly kernelGatewayAppSettings?: KernelGatewayAppSettingsProperty;
    /**
    * The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#security_groups CcDomain#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * The Jupyter lab's space storage settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#space_storage_settings CcDomain#space_storage_settings}
    */
    readonly spaceStorageSettings?: DefaultSpaceStorageSettingsProperty;
}
export class DefaultSpaceSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultSpaceSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customFileSystemConfigs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customFileSystemConfigs = this._customFileSystemConfigs?.internalValue;
        }
        if (this._customPosixUserConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customPosixUserConfig = this._customPosixUserConfig?.internalValue;
        }
        if (this._executionRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionRole = this._executionRole;
        }
        if (this._jupyterLabAppSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jupyterLabAppSettings = this._jupyterLabAppSettings?.internalValue;
        }
        if (this._jupyterServerAppSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jupyterServerAppSettings = this._jupyterServerAppSettings?.internalValue;
        }
        if (this._kernelGatewayAppSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kernelGatewayAppSettings = this._kernelGatewayAppSettings?.internalValue;
        }
        if (this._securityGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        if (this._spaceStorageSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.spaceStorageSettings = this._spaceStorageSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultSpaceSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customFileSystemConfigs.internalValue = undefined;
            this._customPosixUserConfig.internalValue = undefined;
            this._executionRole = undefined;
            this._jupyterLabAppSettings.internalValue = undefined;
            this._jupyterServerAppSettings.internalValue = undefined;
            this._kernelGatewayAppSettings.internalValue = undefined;
            this._securityGroups = undefined;
            this._spaceStorageSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customFileSystemConfigs.internalValue = value.customFileSystemConfigs;
            this._customPosixUserConfig.internalValue = value.customPosixUserConfig;
            this._executionRole = value.executionRole;
            this._jupyterLabAppSettings.internalValue = value.jupyterLabAppSettings;
            this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
            this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
            this._securityGroups = value.securityGroups;
            this._spaceStorageSettings.internalValue = value.spaceStorageSettings;
        }
    }

    // custom_file_system_configs - computed: true, optional: true, required: false
    private _customFileSystemConfigs = new CustomFileSystemConfigPropertyList(this, "custom_file_system_configs", false);
    public get customFileSystemConfigs() {
        return this._customFileSystemConfigs;
    }
    public putCustomFileSystemConfigs(value: CustomFileSystemConfigProperty[] | cdktn.IResolvable) {
        this._customFileSystemConfigs.internalValue = value;
    }
    public resetCustomFileSystemConfigs() {
        this._customFileSystemConfigs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customFileSystemConfigsInput() {
        return this._customFileSystemConfigs.internalValue;
    }

    // custom_posix_user_config - computed: true, optional: true, required: false
    private _customPosixUserConfig = new CustomPosixUserConfigPropertyOutputReference(this, "custom_posix_user_config");
    public get customPosixUserConfig() {
        return this._customPosixUserConfig;
    }
    public putCustomPosixUserConfig(value: CustomPosixUserConfigProperty) {
        this._customPosixUserConfig.internalValue = value;
    }
    public resetCustomPosixUserConfig() {
        this._customPosixUserConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customPosixUserConfigInput() {
        return this._customPosixUserConfig.internalValue;
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

    // jupyter_lab_app_settings - computed: true, optional: true, required: false
    private _jupyterLabAppSettings = new JupyterLabAppSettingsPropertyOutputReference(this, "jupyter_lab_app_settings");
    public get jupyterLabAppSettings() {
        return this._jupyterLabAppSettings;
    }
    public putJupyterLabAppSettings(value: JupyterLabAppSettingsProperty) {
        this._jupyterLabAppSettings.internalValue = value;
    }
    public resetJupyterLabAppSettings() {
        this._jupyterLabAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jupyterLabAppSettingsInput() {
        return this._jupyterLabAppSettings.internalValue;
    }

    // jupyter_server_app_settings - computed: true, optional: true, required: false
    private _jupyterServerAppSettings = new JupyterServerAppSettingsPropertyOutputReference(this, "jupyter_server_app_settings");
    public get jupyterServerAppSettings() {
        return this._jupyterServerAppSettings;
    }
    public putJupyterServerAppSettings(value: JupyterServerAppSettingsProperty) {
        this._jupyterServerAppSettings.internalValue = value;
    }
    public resetJupyterServerAppSettings() {
        this._jupyterServerAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jupyterServerAppSettingsInput() {
        return this._jupyterServerAppSettings.internalValue;
    }

    // kernel_gateway_app_settings - computed: true, optional: true, required: false
    private _kernelGatewayAppSettings = new KernelGatewayAppSettingsPropertyOutputReference(this, "kernel_gateway_app_settings");
    public get kernelGatewayAppSettings() {
        return this._kernelGatewayAppSettings;
    }
    public putKernelGatewayAppSettings(value: KernelGatewayAppSettingsProperty) {
        this._kernelGatewayAppSettings.internalValue = value;
    }
    public resetKernelGatewayAppSettings() {
        this._kernelGatewayAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kernelGatewayAppSettingsInput() {
        return this._kernelGatewayAppSettings.internalValue;
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[]; 
    public get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[]) {
        this._securityGroups = value;
    }
    public resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
        return this._securityGroups;
    }

    // space_storage_settings - computed: true, optional: true, required: false
    private _spaceStorageSettings = new DefaultSpaceStorageSettingsPropertyOutputReference(this, "space_storage_settings");
    public get spaceStorageSettings() {
        return this._spaceStorageSettings;
    }
    public putSpaceStorageSettings(value: DefaultSpaceStorageSettingsProperty) {
        this._spaceStorageSettings.internalValue = value;
    }
    public resetSpaceStorageSettings() {
        this._spaceStorageSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spaceStorageSettingsInput() {
        return this._spaceStorageSettings.internalValue;
    }
}
export interface DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty {
    /**
    * The idle timeout value set in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#idle_timeout_in_minutes CcDomain#idle_timeout_in_minutes}
    */
    readonly idleTimeoutInMinutes?: number;
    /**
    * A flag to enable/disable AppLifecycleManagement settings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_management CcDomain#lifecycle_management}
    */
    readonly lifecycleManagement?: string;
    /**
    * The maximum idle timeout value set in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#max_idle_timeout_in_minutes CcDomain#max_idle_timeout_in_minutes}
    */
    readonly maxIdleTimeoutInMinutes?: number;
    /**
    * The minimum idle timeout value set in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#min_idle_timeout_in_minutes CcDomain#min_idle_timeout_in_minutes}
    */
    readonly minIdleTimeoutInMinutes?: number;
}
export class DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleTimeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
        }
        if (this._lifecycleManagement !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleManagement = this._lifecycleManagement;
        }
        if (this._maxIdleTimeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxIdleTimeoutInMinutes = this._maxIdleTimeoutInMinutes;
        }
        if (this._minIdleTimeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.minIdleTimeoutInMinutes = this._minIdleTimeoutInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleTimeoutInMinutes = undefined;
            this._lifecycleManagement = undefined;
            this._maxIdleTimeoutInMinutes = undefined;
            this._minIdleTimeoutInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
            this._lifecycleManagement = value.lifecycleManagement;
            this._maxIdleTimeoutInMinutes = value.maxIdleTimeoutInMinutes;
            this._minIdleTimeoutInMinutes = value.minIdleTimeoutInMinutes;
        }
    }

    // idle_timeout_in_minutes - computed: true, optional: true, required: false
    private _idleTimeoutInMinutes?: number; 
    public get idleTimeoutInMinutes() {
        return this.getNumberAttribute('idle_timeout_in_minutes');
    }
    public set idleTimeoutInMinutes(value: number) {
        this._idleTimeoutInMinutes = value;
    }
    public resetIdleTimeoutInMinutes() {
        this._idleTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleTimeoutInMinutesInput() {
        return this._idleTimeoutInMinutes;
    }

    // lifecycle_management - computed: true, optional: true, required: false
    private _lifecycleManagement?: string; 
    public get lifecycleManagement() {
        return this.getStringAttribute('lifecycle_management');
    }
    public set lifecycleManagement(value: string) {
        this._lifecycleManagement = value;
    }
    public resetLifecycleManagement() {
        this._lifecycleManagement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleManagementInput() {
        return this._lifecycleManagement;
    }

    // max_idle_timeout_in_minutes - computed: true, optional: true, required: false
    private _maxIdleTimeoutInMinutes?: number; 
    public get maxIdleTimeoutInMinutes() {
        return this.getNumberAttribute('max_idle_timeout_in_minutes');
    }
    public set maxIdleTimeoutInMinutes(value: number) {
        this._maxIdleTimeoutInMinutes = value;
    }
    public resetMaxIdleTimeoutInMinutes() {
        this._maxIdleTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxIdleTimeoutInMinutesInput() {
        return this._maxIdleTimeoutInMinutes;
    }

    // min_idle_timeout_in_minutes - computed: true, optional: true, required: false
    private _minIdleTimeoutInMinutes?: number; 
    public get minIdleTimeoutInMinutes() {
        return this.getNumberAttribute('min_idle_timeout_in_minutes');
    }
    public set minIdleTimeoutInMinutes(value: number) {
        this._minIdleTimeoutInMinutes = value;
    }
    public resetMinIdleTimeoutInMinutes() {
        this._minIdleTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minIdleTimeoutInMinutesInput() {
        return this._minIdleTimeoutInMinutes;
    }
}
export interface DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#idle_settings CcDomain#idle_settings}
    */
    readonly idleSettings?: DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty;
}
export class DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleSettings = this._idleSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleSettings.internalValue = value.idleSettings;
        }
    }

    // idle_settings - computed: true, optional: true, required: false
    private _idleSettings = new DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference(this, "idle_settings");
    public get idleSettings() {
        return this._idleSettings;
    }
    public putIdleSettings(value: DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty) {
        this._idleSettings.internalValue = value;
    }
    public resetIdleSettings() {
        this._idleSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleSettingsInput() {
        return this._idleSettings.internalValue;
    }
}
export interface DefaultUserSettingsCodeEditorAppSettingsCustomImagesProperty {
    /**
    * The Name of the AppImageConfig.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#app_image_config_name CcDomain#app_image_config_name}
    */
    readonly appImageConfigName?: string;
    /**
    * The name of the CustomImage. Must be unique to your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#image_name CcDomain#image_name}
    */
    readonly imageName?: string;
    /**
    * The version number of the CustomImage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#image_version_number CcDomain#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export class DefaultUserSettingsCodeEditorAppSettingsCustomImagesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DefaultUserSettingsCodeEditorAppSettingsCustomImagesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appImageConfigName !== undefined) {
            hasAnyValues = true;
            internalValueResult.appImageConfigName = this._appImageConfigName;
        }
        if (this._imageName !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageName = this._imageName;
        }
        if (this._imageVersionNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageVersionNumber = this._imageVersionNumber;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsCodeEditorAppSettingsCustomImagesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appImageConfigName = undefined;
            this._imageName = undefined;
            this._imageVersionNumber = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appImageConfigName = value.appImageConfigName;
            this._imageName = value.imageName;
            this._imageVersionNumber = value.imageVersionNumber;
        }
    }

    // app_image_config_name - computed: true, optional: true, required: false
    private _appImageConfigName?: string; 
    public get appImageConfigName() {
        return this.getStringAttribute('app_image_config_name');
    }
    public set appImageConfigName(value: string) {
        this._appImageConfigName = value;
    }
    public resetAppImageConfigName() {
        this._appImageConfigName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appImageConfigNameInput() {
        return this._appImageConfigName;
    }

    // image_name - computed: true, optional: true, required: false
    private _imageName?: string; 
    public get imageName() {
        return this.getStringAttribute('image_name');
    }
    public set imageName(value: string) {
        this._imageName = value;
    }
    public resetImageName() {
        this._imageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageNameInput() {
        return this._imageName;
    }

    // image_version_number - computed: true, optional: true, required: false
    private _imageVersionNumber?: number; 
    public get imageVersionNumber() {
        return this.getNumberAttribute('image_version_number');
    }
    public set imageVersionNumber(value: number) {
        this._imageVersionNumber = value;
    }
    public resetImageVersionNumber() {
        this._imageVersionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageVersionNumberInput() {
        return this._imageVersionNumber;
    }
}

export class DefaultUserSettingsCodeEditorAppSettingsCustomImagesPropertyList extends cdktn.ComplexList {
    public internalValue? : DefaultUserSettingsCodeEditorAppSettingsCustomImagesProperty[] | cdktn.IResolvable

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
    public get(index: number): DefaultUserSettingsCodeEditorAppSettingsCustomImagesPropertyOutputReference {
        return new DefaultUserSettingsCodeEditorAppSettingsCustomImagesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#instance_type CcDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_config_arn CcDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_arn CcDomain#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_version_arn CcDomain#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#training_plan_arn CcDomain#training_plan_arn}
    */
    readonly trainingPlanArn?: string;
}
export class DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._lifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
        }
        if (this._sageMakerImageArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
        }
        if (this._sageMakerImageVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
        }
        if (this._trainingPlanArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingPlanArn = this._trainingPlanArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sageMakerImageArn = undefined;
            this._sageMakerImageVersionArn = undefined;
            this._trainingPlanArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceType = value.instanceType;
            this._lifecycleConfigArn = value.lifecycleConfigArn;
            this._sageMakerImageArn = value.sageMakerImageArn;
            this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
            this._trainingPlanArn = value.trainingPlanArn;
        }
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // lifecycle_config_arn - computed: true, optional: true, required: false
    private _lifecycleConfigArn?: string; 
    public get lifecycleConfigArn() {
        return this.getStringAttribute('lifecycle_config_arn');
    }
    public set lifecycleConfigArn(value: string) {
        this._lifecycleConfigArn = value;
    }
    public resetLifecycleConfigArn() {
        this._lifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnInput() {
        return this._lifecycleConfigArn;
    }

    // sage_maker_image_arn - computed: true, optional: true, required: false
    private _sageMakerImageArn?: string; 
    public get sageMakerImageArn() {
        return this.getStringAttribute('sage_maker_image_arn');
    }
    public set sageMakerImageArn(value: string) {
        this._sageMakerImageArn = value;
    }
    public resetSageMakerImageArn() {
        this._sageMakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageArnInput() {
        return this._sageMakerImageArn;
    }

    // sage_maker_image_version_arn - computed: true, optional: true, required: false
    private _sageMakerImageVersionArn?: string; 
    public get sageMakerImageVersionArn() {
        return this.getStringAttribute('sage_maker_image_version_arn');
    }
    public set sageMakerImageVersionArn(value: string) {
        this._sageMakerImageVersionArn = value;
    }
    public resetSageMakerImageVersionArn() {
        this._sageMakerImageVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageVersionArnInput() {
        return this._sageMakerImageVersionArn;
    }

    // training_plan_arn - computed: true, optional: true, required: false
    private _trainingPlanArn?: string; 
    public get trainingPlanArn() {
        return this.getStringAttribute('training_plan_arn');
    }
    public set trainingPlanArn(value: string) {
        this._trainingPlanArn = value;
    }
    public resetTrainingPlanArn() {
        this._trainingPlanArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingPlanArnInput() {
        return this._trainingPlanArn;
    }
}
export interface CodeEditorAppSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#app_lifecycle_management CcDomain#app_lifecycle_management}
    */
    readonly appLifecycleManagement?: DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty;
    /**
    * The lifecycle configuration that runs before the default lifecycle configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#built_in_lifecycle_config_arn CcDomain#built_in_lifecycle_config_arn}
    */
    readonly builtInLifecycleConfigArn?: string;
    /**
    * A list of custom images for use for CodeEditor apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#custom_images CcDomain#custom_images}
    */
    readonly customImages?: DefaultUserSettingsCodeEditorAppSettingsCustomImagesProperty[] | cdktn.IResolvable;
    /**
    * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the CodeEditor app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#default_resource_spec CcDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty;
    /**
    * A list of LifecycleConfigArns available for use with CodeEditor apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_config_arns CcDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
}
export class CodeEditorAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CodeEditorAppSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appLifecycleManagement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.appLifecycleManagement = this._appLifecycleManagement?.internalValue;
        }
        if (this._builtInLifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.builtInLifecycleConfigArn = this._builtInLifecycleConfigArn;
        }
        if (this._customImages?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customImages = this._customImages?.internalValue;
        }
        if (this._defaultResourceSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        if (this._lifecycleConfigArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeEditorAppSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appLifecycleManagement.internalValue = undefined;
            this._builtInLifecycleConfigArn = undefined;
            this._customImages.internalValue = undefined;
            this._defaultResourceSpec.internalValue = undefined;
            this._lifecycleConfigArns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appLifecycleManagement.internalValue = value.appLifecycleManagement;
            this._builtInLifecycleConfigArn = value.builtInLifecycleConfigArn;
            this._customImages.internalValue = value.customImages;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
            this._lifecycleConfigArns = value.lifecycleConfigArns;
        }
    }

    // app_lifecycle_management - computed: true, optional: true, required: false
    private _appLifecycleManagement = new DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyOutputReference(this, "app_lifecycle_management");
    public get appLifecycleManagement() {
        return this._appLifecycleManagement;
    }
    public putAppLifecycleManagement(value: DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty) {
        this._appLifecycleManagement.internalValue = value;
    }
    public resetAppLifecycleManagement() {
        this._appLifecycleManagement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appLifecycleManagementInput() {
        return this._appLifecycleManagement.internalValue;
    }

    // built_in_lifecycle_config_arn - computed: true, optional: true, required: false
    private _builtInLifecycleConfigArn?: string; 
    public get builtInLifecycleConfigArn() {
        return this.getStringAttribute('built_in_lifecycle_config_arn');
    }
    public set builtInLifecycleConfigArn(value: string) {
        this._builtInLifecycleConfigArn = value;
    }
    public resetBuiltInLifecycleConfigArn() {
        this._builtInLifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get builtInLifecycleConfigArnInput() {
        return this._builtInLifecycleConfigArn;
    }

    // custom_images - computed: true, optional: true, required: false
    private _customImages = new DefaultUserSettingsCodeEditorAppSettingsCustomImagesPropertyList(this, "custom_images", false);
    public get customImages() {
        return this._customImages;
    }
    public putCustomImages(value: DefaultUserSettingsCodeEditorAppSettingsCustomImagesProperty[] | cdktn.IResolvable) {
        this._customImages.internalValue = value;
    }
    public resetCustomImages() {
        this._customImages.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customImagesInput() {
        return this._customImages.internalValue;
    }

    // default_resource_spec - computed: true, optional: true, required: false
    private _defaultResourceSpec = new DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
    public get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    public putDefaultResourceSpec(value: DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty) {
        this._defaultResourceSpec.internalValue = value;
    }
    public resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }

    // lifecycle_config_arns - computed: true, optional: true, required: false
    private _lifecycleConfigArns?: string[]; 
    public get lifecycleConfigArns() {
        return this.getListAttribute('lifecycle_config_arns');
    }
    public set lifecycleConfigArns(value: string[]) {
        this._lifecycleConfigArns = value;
    }
    public resetLifecycleConfigArns() {
        this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnsInput() {
        return this._lifecycleConfigArns;
    }
}
export interface EfsFileSystemConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#file_system_id CcDomain#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#file_system_path CcDomain#file_system_path}
    */
    readonly fileSystemPath?: string;
}
export class EfsFileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EfsFileSystemConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fileSystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        if (this._fileSystemPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemPath = this._fileSystemPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EfsFileSystemConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileSystemId = undefined;
            this._fileSystemPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileSystemId = value.fileSystemId;
            this._fileSystemPath = value.fileSystemPath;
        }
    }

    // file_system_id - computed: true, optional: true, required: false
    private _fileSystemId?: string; 
    public get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
        this._fileSystemId = value;
    }
    public resetFileSystemId() {
        this._fileSystemId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
        return this._fileSystemId;
    }

    // file_system_path - computed: true, optional: true, required: false
    private _fileSystemPath?: string; 
    public get fileSystemPath() {
        return this.getStringAttribute('file_system_path');
    }
    public set fileSystemPath(value: string) {
        this._fileSystemPath = value;
    }
    public resetFileSystemPath() {
        this._fileSystemPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemPathInput() {
        return this._fileSystemPath;
    }
}
export interface FsxLustreFileSystemConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#file_system_id CcDomain#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#file_system_path CcDomain#file_system_path}
    */
    readonly fileSystemPath?: string;
}
export class FsxLustreFileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FsxLustreFileSystemConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fileSystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        if (this._fileSystemPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemPath = this._fileSystemPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FsxLustreFileSystemConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileSystemId = undefined;
            this._fileSystemPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileSystemId = value.fileSystemId;
            this._fileSystemPath = value.fileSystemPath;
        }
    }

    // file_system_id - computed: true, optional: true, required: false
    private _fileSystemId?: string; 
    public get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
        this._fileSystemId = value;
    }
    public resetFileSystemId() {
        this._fileSystemId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
        return this._fileSystemId;
    }

    // file_system_path - computed: true, optional: true, required: false
    private _fileSystemPath?: string; 
    public get fileSystemPath() {
        return this.getStringAttribute('file_system_path');
    }
    public set fileSystemPath(value: string) {
        this._fileSystemPath = value;
    }
    public resetFileSystemPath() {
        this._fileSystemPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemPathInput() {
        return this._fileSystemPath;
    }
}
export interface DefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#mount_path CcDomain#mount_path}
    */
    readonly mountPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#s3_uri CcDomain#s3_uri}
    */
    readonly s3Uri?: string;
}
export class DefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mountPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountPath = this._mountPath;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mountPath = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mountPath = value.mountPath;
            this._s3Uri = value.s3Uri;
        }
    }

    // mount_path - computed: true, optional: true, required: false
    private _mountPath?: string; 
    public get mountPath() {
        return this.getStringAttribute('mount_path');
    }
    public set mountPath(value: string) {
        this._mountPath = value;
    }
    public resetMountPath() {
        this._mountPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountPathInput() {
        return this._mountPath;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface CustomFileSystemConfigsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#efs_file_system_config CcDomain#efs_file_system_config}
    */
    readonly efsFileSystemConfig?: EfsFileSystemConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#fsx_lustre_file_system_config CcDomain#fsx_lustre_file_system_config}
    */
    readonly fsxLustreFileSystemConfig?: FsxLustreFileSystemConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#s3_file_system_config CcDomain#s3_file_system_config}
    */
    readonly s3FileSystemConfig?: DefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigProperty;
}
export class CustomFileSystemConfigsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CustomFileSystemConfigsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._efsFileSystemConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.efsFileSystemConfig = this._efsFileSystemConfig?.internalValue;
        }
        if (this._fsxLustreFileSystemConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fsxLustreFileSystemConfig = this._fsxLustreFileSystemConfig?.internalValue;
        }
        if (this._s3FileSystemConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3FileSystemConfig = this._s3FileSystemConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomFileSystemConfigsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._efsFileSystemConfig.internalValue = undefined;
            this._fsxLustreFileSystemConfig.internalValue = undefined;
            this._s3FileSystemConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._efsFileSystemConfig.internalValue = value.efsFileSystemConfig;
            this._fsxLustreFileSystemConfig.internalValue = value.fsxLustreFileSystemConfig;
            this._s3FileSystemConfig.internalValue = value.s3FileSystemConfig;
        }
    }

    // efs_file_system_config - computed: true, optional: true, required: false
    private _efsFileSystemConfig = new EfsFileSystemConfigPropertyOutputReference(this, "efs_file_system_config");
    public get efsFileSystemConfig() {
        return this._efsFileSystemConfig;
    }
    public putEfsFileSystemConfig(value: EfsFileSystemConfigProperty) {
        this._efsFileSystemConfig.internalValue = value;
    }
    public resetEfsFileSystemConfig() {
        this._efsFileSystemConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get efsFileSystemConfigInput() {
        return this._efsFileSystemConfig.internalValue;
    }

    // fsx_lustre_file_system_config - computed: true, optional: true, required: false
    private _fsxLustreFileSystemConfig = new FsxLustreFileSystemConfigPropertyOutputReference(this, "fsx_lustre_file_system_config");
    public get fsxLustreFileSystemConfig() {
        return this._fsxLustreFileSystemConfig;
    }
    public putFsxLustreFileSystemConfig(value: FsxLustreFileSystemConfigProperty) {
        this._fsxLustreFileSystemConfig.internalValue = value;
    }
    public resetFsxLustreFileSystemConfig() {
        this._fsxLustreFileSystemConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fsxLustreFileSystemConfigInput() {
        return this._fsxLustreFileSystemConfig.internalValue;
    }

    // s3_file_system_config - computed: true, optional: true, required: false
    private _s3FileSystemConfig = new DefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigPropertyOutputReference(this, "s3_file_system_config");
    public get s3FileSystemConfig() {
        return this._s3FileSystemConfig;
    }
    public putS3FileSystemConfig(value: DefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigProperty) {
        this._s3FileSystemConfig.internalValue = value;
    }
    public resetS3FileSystemConfig() {
        this._s3FileSystemConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3FileSystemConfigInput() {
        return this._s3FileSystemConfig.internalValue;
    }
}

export class CustomFileSystemConfigsPropertyList extends cdktn.ComplexList {
    public internalValue? : CustomFileSystemConfigsProperty[] | cdktn.IResolvable

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
    public get(index: number): CustomFileSystemConfigsPropertyOutputReference {
        return new CustomFileSystemConfigsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DefaultUserSettingsCustomPosixUserConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#gid CcDomain#gid}
    */
    readonly gid?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#uid CcDomain#uid}
    */
    readonly uid?: number;
}
export class DefaultUserSettingsCustomPosixUserConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultUserSettingsCustomPosixUserConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._gid !== undefined) {
            hasAnyValues = true;
            internalValueResult.gid = this._gid;
        }
        if (this._uid !== undefined) {
            hasAnyValues = true;
            internalValueResult.uid = this._uid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsCustomPosixUserConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._gid = undefined;
            this._uid = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._gid = value.gid;
            this._uid = value.uid;
        }
    }

    // gid - computed: true, optional: true, required: false
    private _gid?: number; 
    public get gid() {
        return this.getNumberAttribute('gid');
    }
    public set gid(value: number) {
        this._gid = value;
    }
    public resetGid() {
        this._gid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gidInput() {
        return this._gid;
    }

    // uid - computed: true, optional: true, required: false
    private _uid?: number; 
    public get uid() {
        return this.getNumberAttribute('uid');
    }
    public set uid(value: number) {
        this._uid = value;
    }
    public resetUid() {
        this._uid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uidInput() {
        return this._uid;
    }
}
export interface DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty {
    /**
    * The idle timeout value set in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#idle_timeout_in_minutes CcDomain#idle_timeout_in_minutes}
    */
    readonly idleTimeoutInMinutes?: number;
    /**
    * A flag to enable/disable AppLifecycleManagement settings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_management CcDomain#lifecycle_management}
    */
    readonly lifecycleManagement?: string;
    /**
    * The maximum idle timeout value set in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#max_idle_timeout_in_minutes CcDomain#max_idle_timeout_in_minutes}
    */
    readonly maxIdleTimeoutInMinutes?: number;
    /**
    * The minimum idle timeout value set in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#min_idle_timeout_in_minutes CcDomain#min_idle_timeout_in_minutes}
    */
    readonly minIdleTimeoutInMinutes?: number;
}
export class DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleTimeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
        }
        if (this._lifecycleManagement !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleManagement = this._lifecycleManagement;
        }
        if (this._maxIdleTimeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxIdleTimeoutInMinutes = this._maxIdleTimeoutInMinutes;
        }
        if (this._minIdleTimeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.minIdleTimeoutInMinutes = this._minIdleTimeoutInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleTimeoutInMinutes = undefined;
            this._lifecycleManagement = undefined;
            this._maxIdleTimeoutInMinutes = undefined;
            this._minIdleTimeoutInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
            this._lifecycleManagement = value.lifecycleManagement;
            this._maxIdleTimeoutInMinutes = value.maxIdleTimeoutInMinutes;
            this._minIdleTimeoutInMinutes = value.minIdleTimeoutInMinutes;
        }
    }

    // idle_timeout_in_minutes - computed: true, optional: true, required: false
    private _idleTimeoutInMinutes?: number; 
    public get idleTimeoutInMinutes() {
        return this.getNumberAttribute('idle_timeout_in_minutes');
    }
    public set idleTimeoutInMinutes(value: number) {
        this._idleTimeoutInMinutes = value;
    }
    public resetIdleTimeoutInMinutes() {
        this._idleTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleTimeoutInMinutesInput() {
        return this._idleTimeoutInMinutes;
    }

    // lifecycle_management - computed: true, optional: true, required: false
    private _lifecycleManagement?: string; 
    public get lifecycleManagement() {
        return this.getStringAttribute('lifecycle_management');
    }
    public set lifecycleManagement(value: string) {
        this._lifecycleManagement = value;
    }
    public resetLifecycleManagement() {
        this._lifecycleManagement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleManagementInput() {
        return this._lifecycleManagement;
    }

    // max_idle_timeout_in_minutes - computed: true, optional: true, required: false
    private _maxIdleTimeoutInMinutes?: number; 
    public get maxIdleTimeoutInMinutes() {
        return this.getNumberAttribute('max_idle_timeout_in_minutes');
    }
    public set maxIdleTimeoutInMinutes(value: number) {
        this._maxIdleTimeoutInMinutes = value;
    }
    public resetMaxIdleTimeoutInMinutes() {
        this._maxIdleTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxIdleTimeoutInMinutesInput() {
        return this._maxIdleTimeoutInMinutes;
    }

    // min_idle_timeout_in_minutes - computed: true, optional: true, required: false
    private _minIdleTimeoutInMinutes?: number; 
    public get minIdleTimeoutInMinutes() {
        return this.getNumberAttribute('min_idle_timeout_in_minutes');
    }
    public set minIdleTimeoutInMinutes(value: number) {
        this._minIdleTimeoutInMinutes = value;
    }
    public resetMinIdleTimeoutInMinutes() {
        this._minIdleTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minIdleTimeoutInMinutesInput() {
        return this._minIdleTimeoutInMinutes;
    }
}
export interface DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#idle_settings CcDomain#idle_settings}
    */
    readonly idleSettings?: DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty;
}
export class DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleSettings = this._idleSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleSettings.internalValue = value.idleSettings;
        }
    }

    // idle_settings - computed: true, optional: true, required: false
    private _idleSettings = new DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference(this, "idle_settings");
    public get idleSettings() {
        return this._idleSettings;
    }
    public putIdleSettings(value: DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty) {
        this._idleSettings.internalValue = value;
    }
    public resetIdleSettings() {
        this._idleSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleSettingsInput() {
        return this._idleSettings.internalValue;
    }
}
export interface CodeRepositoriesProperty {
    /**
    * A CodeRepository (valid URL) to be used within Jupyter's Git extension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#repository_url CcDomain#repository_url}
    */
    readonly repositoryUrl?: string;
}
export class CodeRepositoriesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CodeRepositoriesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._repositoryUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryUrl = this._repositoryUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeRepositoriesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._repositoryUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._repositoryUrl = value.repositoryUrl;
        }
    }

    // repository_url - computed: true, optional: true, required: false
    private _repositoryUrl?: string; 
    public get repositoryUrl() {
        return this.getStringAttribute('repository_url');
    }
    public set repositoryUrl(value: string) {
        this._repositoryUrl = value;
    }
    public resetRepositoryUrl() {
        this._repositoryUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryUrlInput() {
        return this._repositoryUrl;
    }
}

export class CodeRepositoriesPropertyList extends cdktn.ComplexList {
    public internalValue? : CodeRepositoriesProperty[] | cdktn.IResolvable

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
    public get(index: number): CodeRepositoriesPropertyOutputReference {
        return new CodeRepositoriesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DefaultUserSettingsJupyterLabAppSettingsCustomImagesProperty {
    /**
    * The Name of the AppImageConfig.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#app_image_config_name CcDomain#app_image_config_name}
    */
    readonly appImageConfigName?: string;
    /**
    * The name of the CustomImage. Must be unique to your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#image_name CcDomain#image_name}
    */
    readonly imageName?: string;
    /**
    * The version number of the CustomImage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#image_version_number CcDomain#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export class DefaultUserSettingsJupyterLabAppSettingsCustomImagesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DefaultUserSettingsJupyterLabAppSettingsCustomImagesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appImageConfigName !== undefined) {
            hasAnyValues = true;
            internalValueResult.appImageConfigName = this._appImageConfigName;
        }
        if (this._imageName !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageName = this._imageName;
        }
        if (this._imageVersionNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageVersionNumber = this._imageVersionNumber;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsJupyterLabAppSettingsCustomImagesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appImageConfigName = undefined;
            this._imageName = undefined;
            this._imageVersionNumber = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appImageConfigName = value.appImageConfigName;
            this._imageName = value.imageName;
            this._imageVersionNumber = value.imageVersionNumber;
        }
    }

    // app_image_config_name - computed: true, optional: true, required: false
    private _appImageConfigName?: string; 
    public get appImageConfigName() {
        return this.getStringAttribute('app_image_config_name');
    }
    public set appImageConfigName(value: string) {
        this._appImageConfigName = value;
    }
    public resetAppImageConfigName() {
        this._appImageConfigName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appImageConfigNameInput() {
        return this._appImageConfigName;
    }

    // image_name - computed: true, optional: true, required: false
    private _imageName?: string; 
    public get imageName() {
        return this.getStringAttribute('image_name');
    }
    public set imageName(value: string) {
        this._imageName = value;
    }
    public resetImageName() {
        this._imageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageNameInput() {
        return this._imageName;
    }

    // image_version_number - computed: true, optional: true, required: false
    private _imageVersionNumber?: number; 
    public get imageVersionNumber() {
        return this.getNumberAttribute('image_version_number');
    }
    public set imageVersionNumber(value: number) {
        this._imageVersionNumber = value;
    }
    public resetImageVersionNumber() {
        this._imageVersionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageVersionNumberInput() {
        return this._imageVersionNumber;
    }
}

export class DefaultUserSettingsJupyterLabAppSettingsCustomImagesPropertyList extends cdktn.ComplexList {
    public internalValue? : DefaultUserSettingsJupyterLabAppSettingsCustomImagesProperty[] | cdktn.IResolvable

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
    public get(index: number): DefaultUserSettingsJupyterLabAppSettingsCustomImagesPropertyOutputReference {
        return new DefaultUserSettingsJupyterLabAppSettingsCustomImagesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#instance_type CcDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_config_arn CcDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_arn CcDomain#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_version_arn CcDomain#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#training_plan_arn CcDomain#training_plan_arn}
    */
    readonly trainingPlanArn?: string;
}
export class DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._lifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
        }
        if (this._sageMakerImageArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
        }
        if (this._sageMakerImageVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
        }
        if (this._trainingPlanArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingPlanArn = this._trainingPlanArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sageMakerImageArn = undefined;
            this._sageMakerImageVersionArn = undefined;
            this._trainingPlanArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceType = value.instanceType;
            this._lifecycleConfigArn = value.lifecycleConfigArn;
            this._sageMakerImageArn = value.sageMakerImageArn;
            this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
            this._trainingPlanArn = value.trainingPlanArn;
        }
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // lifecycle_config_arn - computed: true, optional: true, required: false
    private _lifecycleConfigArn?: string; 
    public get lifecycleConfigArn() {
        return this.getStringAttribute('lifecycle_config_arn');
    }
    public set lifecycleConfigArn(value: string) {
        this._lifecycleConfigArn = value;
    }
    public resetLifecycleConfigArn() {
        this._lifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnInput() {
        return this._lifecycleConfigArn;
    }

    // sage_maker_image_arn - computed: true, optional: true, required: false
    private _sageMakerImageArn?: string; 
    public get sageMakerImageArn() {
        return this.getStringAttribute('sage_maker_image_arn');
    }
    public set sageMakerImageArn(value: string) {
        this._sageMakerImageArn = value;
    }
    public resetSageMakerImageArn() {
        this._sageMakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageArnInput() {
        return this._sageMakerImageArn;
    }

    // sage_maker_image_version_arn - computed: true, optional: true, required: false
    private _sageMakerImageVersionArn?: string; 
    public get sageMakerImageVersionArn() {
        return this.getStringAttribute('sage_maker_image_version_arn');
    }
    public set sageMakerImageVersionArn(value: string) {
        this._sageMakerImageVersionArn = value;
    }
    public resetSageMakerImageVersionArn() {
        this._sageMakerImageVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageVersionArnInput() {
        return this._sageMakerImageVersionArn;
    }

    // training_plan_arn - computed: true, optional: true, required: false
    private _trainingPlanArn?: string; 
    public get trainingPlanArn() {
        return this.getStringAttribute('training_plan_arn');
    }
    public set trainingPlanArn(value: string) {
        this._trainingPlanArn = value;
    }
    public resetTrainingPlanArn() {
        this._trainingPlanArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingPlanArnInput() {
        return this._trainingPlanArn;
    }
}
export interface DefaultUserSettingsJupyterLabAppSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#app_lifecycle_management CcDomain#app_lifecycle_management}
    */
    readonly appLifecycleManagement?: DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty;
    /**
    * The lifecycle configuration that runs before the default lifecycle configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#built_in_lifecycle_config_arn CcDomain#built_in_lifecycle_config_arn}
    */
    readonly builtInLifecycleConfigArn?: string;
    /**
    * A list of CodeRepositories available for use with JupyterLab apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#code_repositories CcDomain#code_repositories}
    */
    readonly codeRepositories?: CodeRepositoriesProperty[] | cdktn.IResolvable;
    /**
    * A list of custom images for use for JupyterLab apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#custom_images CcDomain#custom_images}
    */
    readonly customImages?: DefaultUserSettingsJupyterLabAppSettingsCustomImagesProperty[] | cdktn.IResolvable;
    /**
    * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#default_resource_spec CcDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty;
    /**
    * A list of LifecycleConfigArns available for use with JupyterLab apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_config_arns CcDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
}
export class DefaultUserSettingsJupyterLabAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultUserSettingsJupyterLabAppSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appLifecycleManagement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.appLifecycleManagement = this._appLifecycleManagement?.internalValue;
        }
        if (this._builtInLifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.builtInLifecycleConfigArn = this._builtInLifecycleConfigArn;
        }
        if (this._codeRepositories?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeRepositories = this._codeRepositories?.internalValue;
        }
        if (this._customImages?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customImages = this._customImages?.internalValue;
        }
        if (this._defaultResourceSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        if (this._lifecycleConfigArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsJupyterLabAppSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appLifecycleManagement.internalValue = undefined;
            this._builtInLifecycleConfigArn = undefined;
            this._codeRepositories.internalValue = undefined;
            this._customImages.internalValue = undefined;
            this._defaultResourceSpec.internalValue = undefined;
            this._lifecycleConfigArns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appLifecycleManagement.internalValue = value.appLifecycleManagement;
            this._builtInLifecycleConfigArn = value.builtInLifecycleConfigArn;
            this._codeRepositories.internalValue = value.codeRepositories;
            this._customImages.internalValue = value.customImages;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
            this._lifecycleConfigArns = value.lifecycleConfigArns;
        }
    }

    // app_lifecycle_management - computed: true, optional: true, required: false
    private _appLifecycleManagement = new DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyOutputReference(this, "app_lifecycle_management");
    public get appLifecycleManagement() {
        return this._appLifecycleManagement;
    }
    public putAppLifecycleManagement(value: DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty) {
        this._appLifecycleManagement.internalValue = value;
    }
    public resetAppLifecycleManagement() {
        this._appLifecycleManagement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appLifecycleManagementInput() {
        return this._appLifecycleManagement.internalValue;
    }

    // built_in_lifecycle_config_arn - computed: true, optional: true, required: false
    private _builtInLifecycleConfigArn?: string; 
    public get builtInLifecycleConfigArn() {
        return this.getStringAttribute('built_in_lifecycle_config_arn');
    }
    public set builtInLifecycleConfigArn(value: string) {
        this._builtInLifecycleConfigArn = value;
    }
    public resetBuiltInLifecycleConfigArn() {
        this._builtInLifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get builtInLifecycleConfigArnInput() {
        return this._builtInLifecycleConfigArn;
    }

    // code_repositories - computed: true, optional: true, required: false
    private _codeRepositories = new CodeRepositoriesPropertyList(this, "code_repositories", false);
    public get codeRepositories() {
        return this._codeRepositories;
    }
    public putCodeRepositories(value: CodeRepositoriesProperty[] | cdktn.IResolvable) {
        this._codeRepositories.internalValue = value;
    }
    public resetCodeRepositories() {
        this._codeRepositories.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeRepositoriesInput() {
        return this._codeRepositories.internalValue;
    }

    // custom_images - computed: true, optional: true, required: false
    private _customImages = new DefaultUserSettingsJupyterLabAppSettingsCustomImagesPropertyList(this, "custom_images", false);
    public get customImages() {
        return this._customImages;
    }
    public putCustomImages(value: DefaultUserSettingsJupyterLabAppSettingsCustomImagesProperty[] | cdktn.IResolvable) {
        this._customImages.internalValue = value;
    }
    public resetCustomImages() {
        this._customImages.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customImagesInput() {
        return this._customImages.internalValue;
    }

    // default_resource_spec - computed: true, optional: true, required: false
    private _defaultResourceSpec = new DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
    public get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    public putDefaultResourceSpec(value: DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty) {
        this._defaultResourceSpec.internalValue = value;
    }
    public resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }

    // lifecycle_config_arns - computed: true, optional: true, required: false
    private _lifecycleConfigArns?: string[]; 
    public get lifecycleConfigArns() {
        return this.getListAttribute('lifecycle_config_arns');
    }
    public set lifecycleConfigArns(value: string[]) {
        this._lifecycleConfigArns = value;
    }
    public resetLifecycleConfigArns() {
        this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnsInput() {
        return this._lifecycleConfigArns;
    }
}
export interface DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#instance_type CcDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_config_arn CcDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_arn CcDomain#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_version_arn CcDomain#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#training_plan_arn CcDomain#training_plan_arn}
    */
    readonly trainingPlanArn?: string;
}
export class DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._lifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
        }
        if (this._sageMakerImageArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
        }
        if (this._sageMakerImageVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
        }
        if (this._trainingPlanArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingPlanArn = this._trainingPlanArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sageMakerImageArn = undefined;
            this._sageMakerImageVersionArn = undefined;
            this._trainingPlanArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceType = value.instanceType;
            this._lifecycleConfigArn = value.lifecycleConfigArn;
            this._sageMakerImageArn = value.sageMakerImageArn;
            this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
            this._trainingPlanArn = value.trainingPlanArn;
        }
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // lifecycle_config_arn - computed: true, optional: true, required: false
    private _lifecycleConfigArn?: string; 
    public get lifecycleConfigArn() {
        return this.getStringAttribute('lifecycle_config_arn');
    }
    public set lifecycleConfigArn(value: string) {
        this._lifecycleConfigArn = value;
    }
    public resetLifecycleConfigArn() {
        this._lifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnInput() {
        return this._lifecycleConfigArn;
    }

    // sage_maker_image_arn - computed: true, optional: true, required: false
    private _sageMakerImageArn?: string; 
    public get sageMakerImageArn() {
        return this.getStringAttribute('sage_maker_image_arn');
    }
    public set sageMakerImageArn(value: string) {
        this._sageMakerImageArn = value;
    }
    public resetSageMakerImageArn() {
        this._sageMakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageArnInput() {
        return this._sageMakerImageArn;
    }

    // sage_maker_image_version_arn - computed: true, optional: true, required: false
    private _sageMakerImageVersionArn?: string; 
    public get sageMakerImageVersionArn() {
        return this.getStringAttribute('sage_maker_image_version_arn');
    }
    public set sageMakerImageVersionArn(value: string) {
        this._sageMakerImageVersionArn = value;
    }
    public resetSageMakerImageVersionArn() {
        this._sageMakerImageVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageVersionArnInput() {
        return this._sageMakerImageVersionArn;
    }

    // training_plan_arn - computed: true, optional: true, required: false
    private _trainingPlanArn?: string; 
    public get trainingPlanArn() {
        return this.getStringAttribute('training_plan_arn');
    }
    public set trainingPlanArn(value: string) {
        this._trainingPlanArn = value;
    }
    public resetTrainingPlanArn() {
        this._trainingPlanArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingPlanArnInput() {
        return this._trainingPlanArn;
    }
}
export interface DefaultUserSettingsJupyterServerAppSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#default_resource_spec CcDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty;
    /**
    * A list of LifecycleConfigArns available for use with JupyterServer apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_config_arns CcDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
}
export class DefaultUserSettingsJupyterServerAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultUserSettingsJupyterServerAppSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultResourceSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        if (this._lifecycleConfigArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsJupyterServerAppSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultResourceSpec.internalValue = undefined;
            this._lifecycleConfigArns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
            this._lifecycleConfigArns = value.lifecycleConfigArns;
        }
    }

    // default_resource_spec - computed: true, optional: true, required: false
    private _defaultResourceSpec = new DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
    public get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    public putDefaultResourceSpec(value: DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty) {
        this._defaultResourceSpec.internalValue = value;
    }
    public resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }

    // lifecycle_config_arns - computed: true, optional: true, required: false
    private _lifecycleConfigArns?: string[]; 
    public get lifecycleConfigArns() {
        return this.getListAttribute('lifecycle_config_arns');
    }
    public set lifecycleConfigArns(value: string[]) {
        this._lifecycleConfigArns = value;
    }
    public resetLifecycleConfigArns() {
        this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnsInput() {
        return this._lifecycleConfigArns;
    }
}
export interface DefaultUserSettingsKernelGatewayAppSettingsCustomImagesProperty {
    /**
    * The Name of the AppImageConfig.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#app_image_config_name CcDomain#app_image_config_name}
    */
    readonly appImageConfigName?: string;
    /**
    * The name of the CustomImage. Must be unique to your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#image_name CcDomain#image_name}
    */
    readonly imageName?: string;
    /**
    * The version number of the CustomImage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#image_version_number CcDomain#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export class DefaultUserSettingsKernelGatewayAppSettingsCustomImagesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DefaultUserSettingsKernelGatewayAppSettingsCustomImagesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appImageConfigName !== undefined) {
            hasAnyValues = true;
            internalValueResult.appImageConfigName = this._appImageConfigName;
        }
        if (this._imageName !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageName = this._imageName;
        }
        if (this._imageVersionNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageVersionNumber = this._imageVersionNumber;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsKernelGatewayAppSettingsCustomImagesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appImageConfigName = undefined;
            this._imageName = undefined;
            this._imageVersionNumber = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appImageConfigName = value.appImageConfigName;
            this._imageName = value.imageName;
            this._imageVersionNumber = value.imageVersionNumber;
        }
    }

    // app_image_config_name - computed: true, optional: true, required: false
    private _appImageConfigName?: string; 
    public get appImageConfigName() {
        return this.getStringAttribute('app_image_config_name');
    }
    public set appImageConfigName(value: string) {
        this._appImageConfigName = value;
    }
    public resetAppImageConfigName() {
        this._appImageConfigName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appImageConfigNameInput() {
        return this._appImageConfigName;
    }

    // image_name - computed: true, optional: true, required: false
    private _imageName?: string; 
    public get imageName() {
        return this.getStringAttribute('image_name');
    }
    public set imageName(value: string) {
        this._imageName = value;
    }
    public resetImageName() {
        this._imageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageNameInput() {
        return this._imageName;
    }

    // image_version_number - computed: true, optional: true, required: false
    private _imageVersionNumber?: number; 
    public get imageVersionNumber() {
        return this.getNumberAttribute('image_version_number');
    }
    public set imageVersionNumber(value: number) {
        this._imageVersionNumber = value;
    }
    public resetImageVersionNumber() {
        this._imageVersionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageVersionNumberInput() {
        return this._imageVersionNumber;
    }
}

export class DefaultUserSettingsKernelGatewayAppSettingsCustomImagesPropertyList extends cdktn.ComplexList {
    public internalValue? : DefaultUserSettingsKernelGatewayAppSettingsCustomImagesProperty[] | cdktn.IResolvable

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
    public get(index: number): DefaultUserSettingsKernelGatewayAppSettingsCustomImagesPropertyOutputReference {
        return new DefaultUserSettingsKernelGatewayAppSettingsCustomImagesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#instance_type CcDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_config_arn CcDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_arn CcDomain#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_version_arn CcDomain#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#training_plan_arn CcDomain#training_plan_arn}
    */
    readonly trainingPlanArn?: string;
}
export class DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._lifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
        }
        if (this._sageMakerImageArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
        }
        if (this._sageMakerImageVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
        }
        if (this._trainingPlanArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingPlanArn = this._trainingPlanArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sageMakerImageArn = undefined;
            this._sageMakerImageVersionArn = undefined;
            this._trainingPlanArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceType = value.instanceType;
            this._lifecycleConfigArn = value.lifecycleConfigArn;
            this._sageMakerImageArn = value.sageMakerImageArn;
            this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
            this._trainingPlanArn = value.trainingPlanArn;
        }
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // lifecycle_config_arn - computed: true, optional: true, required: false
    private _lifecycleConfigArn?: string; 
    public get lifecycleConfigArn() {
        return this.getStringAttribute('lifecycle_config_arn');
    }
    public set lifecycleConfigArn(value: string) {
        this._lifecycleConfigArn = value;
    }
    public resetLifecycleConfigArn() {
        this._lifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnInput() {
        return this._lifecycleConfigArn;
    }

    // sage_maker_image_arn - computed: true, optional: true, required: false
    private _sageMakerImageArn?: string; 
    public get sageMakerImageArn() {
        return this.getStringAttribute('sage_maker_image_arn');
    }
    public set sageMakerImageArn(value: string) {
        this._sageMakerImageArn = value;
    }
    public resetSageMakerImageArn() {
        this._sageMakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageArnInput() {
        return this._sageMakerImageArn;
    }

    // sage_maker_image_version_arn - computed: true, optional: true, required: false
    private _sageMakerImageVersionArn?: string; 
    public get sageMakerImageVersionArn() {
        return this.getStringAttribute('sage_maker_image_version_arn');
    }
    public set sageMakerImageVersionArn(value: string) {
        this._sageMakerImageVersionArn = value;
    }
    public resetSageMakerImageVersionArn() {
        this._sageMakerImageVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageVersionArnInput() {
        return this._sageMakerImageVersionArn;
    }

    // training_plan_arn - computed: true, optional: true, required: false
    private _trainingPlanArn?: string; 
    public get trainingPlanArn() {
        return this.getStringAttribute('training_plan_arn');
    }
    public set trainingPlanArn(value: string) {
        this._trainingPlanArn = value;
    }
    public resetTrainingPlanArn() {
        this._trainingPlanArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingPlanArnInput() {
        return this._trainingPlanArn;
    }
}
export interface DefaultUserSettingsKernelGatewayAppSettingsProperty {
    /**
    * A list of custom SageMaker images that are configured to run as a KernelGateway app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#custom_images CcDomain#custom_images}
    */
    readonly customImages?: DefaultUserSettingsKernelGatewayAppSettingsCustomImagesProperty[] | cdktn.IResolvable;
    /**
    * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#default_resource_spec CcDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty;
    /**
    * A list of LifecycleConfigArns available for use with KernelGateway apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_config_arns CcDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
}
export class DefaultUserSettingsKernelGatewayAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultUserSettingsKernelGatewayAppSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customImages?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customImages = this._customImages?.internalValue;
        }
        if (this._defaultResourceSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        if (this._lifecycleConfigArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsKernelGatewayAppSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customImages.internalValue = undefined;
            this._defaultResourceSpec.internalValue = undefined;
            this._lifecycleConfigArns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customImages.internalValue = value.customImages;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
            this._lifecycleConfigArns = value.lifecycleConfigArns;
        }
    }

    // custom_images - computed: true, optional: true, required: false
    private _customImages = new DefaultUserSettingsKernelGatewayAppSettingsCustomImagesPropertyList(this, "custom_images", false);
    public get customImages() {
        return this._customImages;
    }
    public putCustomImages(value: DefaultUserSettingsKernelGatewayAppSettingsCustomImagesProperty[] | cdktn.IResolvable) {
        this._customImages.internalValue = value;
    }
    public resetCustomImages() {
        this._customImages.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customImagesInput() {
        return this._customImages.internalValue;
    }

    // default_resource_spec - computed: true, optional: true, required: false
    private _defaultResourceSpec = new DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
    public get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    public putDefaultResourceSpec(value: DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty) {
        this._defaultResourceSpec.internalValue = value;
    }
    public resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }

    // lifecycle_config_arns - computed: true, optional: true, required: false
    private _lifecycleConfigArns?: string[]; 
    public get lifecycleConfigArns() {
        return this.getListAttribute('lifecycle_config_arns');
    }
    public set lifecycleConfigArns(value: string[]) {
        this._lifecycleConfigArns = value;
    }
    public resetLifecycleConfigArns() {
        this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnsInput() {
        return this._lifecycleConfigArns;
    }
}
export interface DefaultUserSettingsRSessionAppSettingsCustomImagesProperty {
    /**
    * The Name of the AppImageConfig.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#app_image_config_name CcDomain#app_image_config_name}
    */
    readonly appImageConfigName?: string;
    /**
    * The name of the CustomImage. Must be unique to your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#image_name CcDomain#image_name}
    */
    readonly imageName?: string;
    /**
    * The version number of the CustomImage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#image_version_number CcDomain#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export class DefaultUserSettingsRSessionAppSettingsCustomImagesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DefaultUserSettingsRSessionAppSettingsCustomImagesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appImageConfigName !== undefined) {
            hasAnyValues = true;
            internalValueResult.appImageConfigName = this._appImageConfigName;
        }
        if (this._imageName !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageName = this._imageName;
        }
        if (this._imageVersionNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageVersionNumber = this._imageVersionNumber;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsRSessionAppSettingsCustomImagesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appImageConfigName = undefined;
            this._imageName = undefined;
            this._imageVersionNumber = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appImageConfigName = value.appImageConfigName;
            this._imageName = value.imageName;
            this._imageVersionNumber = value.imageVersionNumber;
        }
    }

    // app_image_config_name - computed: true, optional: true, required: false
    private _appImageConfigName?: string; 
    public get appImageConfigName() {
        return this.getStringAttribute('app_image_config_name');
    }
    public set appImageConfigName(value: string) {
        this._appImageConfigName = value;
    }
    public resetAppImageConfigName() {
        this._appImageConfigName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appImageConfigNameInput() {
        return this._appImageConfigName;
    }

    // image_name - computed: true, optional: true, required: false
    private _imageName?: string; 
    public get imageName() {
        return this.getStringAttribute('image_name');
    }
    public set imageName(value: string) {
        this._imageName = value;
    }
    public resetImageName() {
        this._imageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageNameInput() {
        return this._imageName;
    }

    // image_version_number - computed: true, optional: true, required: false
    private _imageVersionNumber?: number; 
    public get imageVersionNumber() {
        return this.getNumberAttribute('image_version_number');
    }
    public set imageVersionNumber(value: number) {
        this._imageVersionNumber = value;
    }
    public resetImageVersionNumber() {
        this._imageVersionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageVersionNumberInput() {
        return this._imageVersionNumber;
    }
}

export class DefaultUserSettingsRSessionAppSettingsCustomImagesPropertyList extends cdktn.ComplexList {
    public internalValue? : DefaultUserSettingsRSessionAppSettingsCustomImagesProperty[] | cdktn.IResolvable

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
    public get(index: number): DefaultUserSettingsRSessionAppSettingsCustomImagesPropertyOutputReference {
        return new DefaultUserSettingsRSessionAppSettingsCustomImagesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecProperty {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#instance_type CcDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_config_arn CcDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_arn CcDomain#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_version_arn CcDomain#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#training_plan_arn CcDomain#training_plan_arn}
    */
    readonly trainingPlanArn?: string;
}
export class DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._lifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
        }
        if (this._sageMakerImageArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
        }
        if (this._sageMakerImageVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
        }
        if (this._trainingPlanArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingPlanArn = this._trainingPlanArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sageMakerImageArn = undefined;
            this._sageMakerImageVersionArn = undefined;
            this._trainingPlanArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceType = value.instanceType;
            this._lifecycleConfigArn = value.lifecycleConfigArn;
            this._sageMakerImageArn = value.sageMakerImageArn;
            this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
            this._trainingPlanArn = value.trainingPlanArn;
        }
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // lifecycle_config_arn - computed: true, optional: true, required: false
    private _lifecycleConfigArn?: string; 
    public get lifecycleConfigArn() {
        return this.getStringAttribute('lifecycle_config_arn');
    }
    public set lifecycleConfigArn(value: string) {
        this._lifecycleConfigArn = value;
    }
    public resetLifecycleConfigArn() {
        this._lifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnInput() {
        return this._lifecycleConfigArn;
    }

    // sage_maker_image_arn - computed: true, optional: true, required: false
    private _sageMakerImageArn?: string; 
    public get sageMakerImageArn() {
        return this.getStringAttribute('sage_maker_image_arn');
    }
    public set sageMakerImageArn(value: string) {
        this._sageMakerImageArn = value;
    }
    public resetSageMakerImageArn() {
        this._sageMakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageArnInput() {
        return this._sageMakerImageArn;
    }

    // sage_maker_image_version_arn - computed: true, optional: true, required: false
    private _sageMakerImageVersionArn?: string; 
    public get sageMakerImageVersionArn() {
        return this.getStringAttribute('sage_maker_image_version_arn');
    }
    public set sageMakerImageVersionArn(value: string) {
        this._sageMakerImageVersionArn = value;
    }
    public resetSageMakerImageVersionArn() {
        this._sageMakerImageVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageVersionArnInput() {
        return this._sageMakerImageVersionArn;
    }

    // training_plan_arn - computed: true, optional: true, required: false
    private _trainingPlanArn?: string; 
    public get trainingPlanArn() {
        return this.getStringAttribute('training_plan_arn');
    }
    public set trainingPlanArn(value: string) {
        this._trainingPlanArn = value;
    }
    public resetTrainingPlanArn() {
        this._trainingPlanArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingPlanArnInput() {
        return this._trainingPlanArn;
    }
}
export interface RSessionAppSettingsProperty {
    /**
    * A list of custom SageMaker images that are configured to run as a KernelGateway app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#custom_images CcDomain#custom_images}
    */
    readonly customImages?: DefaultUserSettingsRSessionAppSettingsCustomImagesProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#default_resource_spec CcDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecProperty;
}
export class RSessionAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RSessionAppSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customImages?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customImages = this._customImages?.internalValue;
        }
        if (this._defaultResourceSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RSessionAppSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customImages.internalValue = undefined;
            this._defaultResourceSpec.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customImages.internalValue = value.customImages;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
        }
    }

    // custom_images - computed: true, optional: true, required: false
    private _customImages = new DefaultUserSettingsRSessionAppSettingsCustomImagesPropertyList(this, "custom_images", false);
    public get customImages() {
        return this._customImages;
    }
    public putCustomImages(value: DefaultUserSettingsRSessionAppSettingsCustomImagesProperty[] | cdktn.IResolvable) {
        this._customImages.internalValue = value;
    }
    public resetCustomImages() {
        this._customImages.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customImagesInput() {
        return this._customImages.internalValue;
    }

    // default_resource_spec - computed: true, optional: true, required: false
    private _defaultResourceSpec = new DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
    public get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    public putDefaultResourceSpec(value: DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecProperty) {
        this._defaultResourceSpec.internalValue = value;
    }
    public resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }
}
export interface RStudioServerProAppSettingsProperty {
    /**
    * Indicates whether the current user has access to the RStudioServerPro app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#access_status CcDomain#access_status}
    */
    readonly accessStatus?: string;
    /**
    * The level of permissions that the user has within the RStudioServerPro app. This value defaults to User. The Admin value allows the user access to the RStudio Administrative Dashboard.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#user_group CcDomain#user_group}
    */
    readonly userGroup?: string;
}
export class RStudioServerProAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RStudioServerProAppSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessStatus = this._accessStatus;
        }
        if (this._userGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.userGroup = this._userGroup;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RStudioServerProAppSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessStatus = undefined;
            this._userGroup = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessStatus = value.accessStatus;
            this._userGroup = value.userGroup;
        }
    }

    // access_status - computed: true, optional: true, required: false
    private _accessStatus?: string; 
    public get accessStatus() {
        return this.getStringAttribute('access_status');
    }
    public set accessStatus(value: string) {
        this._accessStatus = value;
    }
    public resetAccessStatus() {
        this._accessStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessStatusInput() {
        return this._accessStatus;
    }

    // user_group - computed: true, optional: true, required: false
    private _userGroup?: string; 
    public get userGroup() {
        return this.getStringAttribute('user_group');
    }
    public set userGroup(value: string) {
        this._userGroup = value;
    }
    public resetUserGroup() {
        this._userGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userGroupInput() {
        return this._userGroup;
    }
}
export interface SharingSettingsProperty {
    /**
    * Whether to include the notebook cell output when sharing the notebook. The default is Disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#notebook_output_option CcDomain#notebook_output_option}
    */
    readonly notebookOutputOption?: string;
    /**
    * When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#s3_kms_key_id CcDomain#s3_kms_key_id}
    */
    readonly s3KmsKeyId?: string;
    /**
    * When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#s3_output_path CcDomain#s3_output_path}
    */
    readonly s3OutputPath?: string;
}
export class SharingSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SharingSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._notebookOutputOption !== undefined) {
            hasAnyValues = true;
            internalValueResult.notebookOutputOption = this._notebookOutputOption;
        }
        if (this._s3KmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3KmsKeyId = this._s3KmsKeyId;
        }
        if (this._s3OutputPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3OutputPath = this._s3OutputPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SharingSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._notebookOutputOption = undefined;
            this._s3KmsKeyId = undefined;
            this._s3OutputPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._notebookOutputOption = value.notebookOutputOption;
            this._s3KmsKeyId = value.s3KmsKeyId;
            this._s3OutputPath = value.s3OutputPath;
        }
    }

    // notebook_output_option - computed: true, optional: true, required: false
    private _notebookOutputOption?: string; 
    public get notebookOutputOption() {
        return this.getStringAttribute('notebook_output_option');
    }
    public set notebookOutputOption(value: string) {
        this._notebookOutputOption = value;
    }
    public resetNotebookOutputOption() {
        this._notebookOutputOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notebookOutputOptionInput() {
        return this._notebookOutputOption;
    }

    // s3_kms_key_id - computed: true, optional: true, required: false
    private _s3KmsKeyId?: string; 
    public get s3KmsKeyId() {
        return this.getStringAttribute('s3_kms_key_id');
    }
    public set s3KmsKeyId(value: string) {
        this._s3KmsKeyId = value;
    }
    public resetS3KmsKeyId() {
        this._s3KmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KmsKeyIdInput() {
        return this._s3KmsKeyId;
    }

    // s3_output_path - computed: true, optional: true, required: false
    private _s3OutputPath?: string; 
    public get s3OutputPath() {
        return this.getStringAttribute('s3_output_path');
    }
    public set s3OutputPath(value: string) {
        this._s3OutputPath = value;
    }
    public resetS3OutputPath() {
        this._s3OutputPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3OutputPathInput() {
        return this._s3OutputPath;
    }
}
export interface DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty {
    /**
    * Default size of the Amazon EBS volume in Gb
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#default_ebs_volume_size_in_gb CcDomain#default_ebs_volume_size_in_gb}
    */
    readonly defaultEbsVolumeSizeInGb?: number;
    /**
    * Maximum size of the Amazon EBS volume in Gb. Must be greater than or equal to the DefaultEbsVolumeSizeInGb.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#maximum_ebs_volume_size_in_gb CcDomain#maximum_ebs_volume_size_in_gb}
    */
    readonly maximumEbsVolumeSizeInGb?: number;
}
export class DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultEbsVolumeSizeInGb !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultEbsVolumeSizeInGb = this._defaultEbsVolumeSizeInGb;
        }
        if (this._maximumEbsVolumeSizeInGb !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumEbsVolumeSizeInGb = this._maximumEbsVolumeSizeInGb;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultEbsVolumeSizeInGb = undefined;
            this._maximumEbsVolumeSizeInGb = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultEbsVolumeSizeInGb = value.defaultEbsVolumeSizeInGb;
            this._maximumEbsVolumeSizeInGb = value.maximumEbsVolumeSizeInGb;
        }
    }

    // default_ebs_volume_size_in_gb - computed: true, optional: true, required: false
    private _defaultEbsVolumeSizeInGb?: number; 
    public get defaultEbsVolumeSizeInGb() {
        return this.getNumberAttribute('default_ebs_volume_size_in_gb');
    }
    public set defaultEbsVolumeSizeInGb(value: number) {
        this._defaultEbsVolumeSizeInGb = value;
    }
    public resetDefaultEbsVolumeSizeInGb() {
        this._defaultEbsVolumeSizeInGb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultEbsVolumeSizeInGbInput() {
        return this._defaultEbsVolumeSizeInGb;
    }

    // maximum_ebs_volume_size_in_gb - computed: true, optional: true, required: false
    private _maximumEbsVolumeSizeInGb?: number; 
    public get maximumEbsVolumeSizeInGb() {
        return this.getNumberAttribute('maximum_ebs_volume_size_in_gb');
    }
    public set maximumEbsVolumeSizeInGb(value: number) {
        this._maximumEbsVolumeSizeInGb = value;
    }
    public resetMaximumEbsVolumeSizeInGb() {
        this._maximumEbsVolumeSizeInGb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumEbsVolumeSizeInGbInput() {
        return this._maximumEbsVolumeSizeInGb;
    }
}
export interface SpaceStorageSettingsProperty {
    /**
    * Properties related to the Amazon Elastic Block Store volume. Must be provided if storage type is Amazon EBS and must not be provided if storage type is not Amazon EBS
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#default_ebs_storage_settings CcDomain#default_ebs_storage_settings}
    */
    readonly defaultEbsStorageSettings?: DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty;
}
export class SpaceStorageSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpaceStorageSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultEbsStorageSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultEbsStorageSettings = this._defaultEbsStorageSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpaceStorageSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultEbsStorageSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultEbsStorageSettings.internalValue = value.defaultEbsStorageSettings;
        }
    }

    // default_ebs_storage_settings - computed: true, optional: true, required: false
    private _defaultEbsStorageSettings = new DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyOutputReference(this, "default_ebs_storage_settings");
    public get defaultEbsStorageSettings() {
        return this._defaultEbsStorageSettings;
    }
    public putDefaultEbsStorageSettings(value: DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty) {
        this._defaultEbsStorageSettings.internalValue = value;
    }
    public resetDefaultEbsStorageSettings() {
        this._defaultEbsStorageSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultEbsStorageSettingsInput() {
        return this._defaultEbsStorageSettings.internalValue;
    }
}
export interface HiddenSageMakerImageProperty {
    /**
    * The SageMaker image name that you are hiding from the Studio user interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_name CcDomain#sage_maker_image_name}
    */
    readonly sageMakerImageName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#version_aliases CcDomain#version_aliases}
    */
    readonly versionAliases?: string[];
}
export class HiddenSageMakerImagePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HiddenSageMakerImageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sageMakerImageName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageName = this._sageMakerImageName;
        }
        if (this._versionAliases !== undefined) {
            hasAnyValues = true;
            internalValueResult.versionAliases = this._versionAliases;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HiddenSageMakerImageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sageMakerImageName = undefined;
            this._versionAliases = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sageMakerImageName = value.sageMakerImageName;
            this._versionAliases = value.versionAliases;
        }
    }

    // sage_maker_image_name - computed: true, optional: true, required: false
    private _sageMakerImageName?: string; 
    public get sageMakerImageName() {
        return this.getStringAttribute('sage_maker_image_name');
    }
    public set sageMakerImageName(value: string) {
        this._sageMakerImageName = value;
    }
    public resetSageMakerImageName() {
        this._sageMakerImageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageNameInput() {
        return this._sageMakerImageName;
    }

    // version_aliases - computed: true, optional: true, required: false
    private _versionAliases?: string[]; 
    public get versionAliases() {
        return this.getListAttribute('version_aliases');
    }
    public set versionAliases(value: string[]) {
        this._versionAliases = value;
    }
    public resetVersionAliases() {
        this._versionAliases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionAliasesInput() {
        return this._versionAliases;
    }
}

export class HiddenSageMakerImagePropertyList extends cdktn.ComplexList {
    public internalValue? : HiddenSageMakerImageProperty[] | cdktn.IResolvable

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
    public get(index: number): HiddenSageMakerImagePropertyOutputReference {
        return new HiddenSageMakerImagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StudioWebPortalSettingsProperty {
    /**
    * Applications supported in Studio that are hidden from the Studio left navigation pane.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#hidden_app_types CcDomain#hidden_app_types}
    */
    readonly hiddenAppTypes?: string[];
    /**
    * The instance types you are hiding from the Studio user interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#hidden_instance_types CcDomain#hidden_instance_types}
    */
    readonly hiddenInstanceTypes?: string[];
    /**
    * The machine learning tools that are hidden from the Studio left navigation pane.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#hidden_ml_tools CcDomain#hidden_ml_tools}
    */
    readonly hiddenMlTools?: string[];
    /**
    * The version aliases you are hiding from the Studio user interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#hidden_sage_maker_image_version_aliases CcDomain#hidden_sage_maker_image_version_aliases}
    */
    readonly hiddenSageMakerImageVersionAliases?: HiddenSageMakerImageProperty[] | cdktn.IResolvable;
}
export class StudioWebPortalSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StudioWebPortalSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hiddenAppTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.hiddenAppTypes = this._hiddenAppTypes;
        }
        if (this._hiddenInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.hiddenInstanceTypes = this._hiddenInstanceTypes;
        }
        if (this._hiddenMlTools !== undefined) {
            hasAnyValues = true;
            internalValueResult.hiddenMlTools = this._hiddenMlTools;
        }
        if (this._hiddenSageMakerImageVersionAliases?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hiddenSageMakerImageVersionAliases = this._hiddenSageMakerImageVersionAliases?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StudioWebPortalSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hiddenAppTypes = undefined;
            this._hiddenInstanceTypes = undefined;
            this._hiddenMlTools = undefined;
            this._hiddenSageMakerImageVersionAliases.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hiddenAppTypes = value.hiddenAppTypes;
            this._hiddenInstanceTypes = value.hiddenInstanceTypes;
            this._hiddenMlTools = value.hiddenMlTools;
            this._hiddenSageMakerImageVersionAliases.internalValue = value.hiddenSageMakerImageVersionAliases;
        }
    }

    // hidden_app_types - computed: true, optional: true, required: false
    private _hiddenAppTypes?: string[]; 
    public get hiddenAppTypes() {
        return cdktn.Fn.tolist(this.getListAttribute('hidden_app_types'));
    }
    public set hiddenAppTypes(value: string[]) {
        this._hiddenAppTypes = value;
    }
    public resetHiddenAppTypes() {
        this._hiddenAppTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hiddenAppTypesInput() {
        return this._hiddenAppTypes;
    }

    // hidden_instance_types - computed: true, optional: true, required: false
    private _hiddenInstanceTypes?: string[]; 
    public get hiddenInstanceTypes() {
        return cdktn.Fn.tolist(this.getListAttribute('hidden_instance_types'));
    }
    public set hiddenInstanceTypes(value: string[]) {
        this._hiddenInstanceTypes = value;
    }
    public resetHiddenInstanceTypes() {
        this._hiddenInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hiddenInstanceTypesInput() {
        return this._hiddenInstanceTypes;
    }

    // hidden_ml_tools - computed: true, optional: true, required: false
    private _hiddenMlTools?: string[]; 
    public get hiddenMlTools() {
        return cdktn.Fn.tolist(this.getListAttribute('hidden_ml_tools'));
    }
    public set hiddenMlTools(value: string[]) {
        this._hiddenMlTools = value;
    }
    public resetHiddenMlTools() {
        this._hiddenMlTools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hiddenMlToolsInput() {
        return this._hiddenMlTools;
    }

    // hidden_sage_maker_image_version_aliases - computed: true, optional: true, required: false
    private _hiddenSageMakerImageVersionAliases = new HiddenSageMakerImagePropertyList(this, "hidden_sage_maker_image_version_aliases", true);
    public get hiddenSageMakerImageVersionAliases() {
        return this._hiddenSageMakerImageVersionAliases;
    }
    public putHiddenSageMakerImageVersionAliases(value: HiddenSageMakerImageProperty[] | cdktn.IResolvable) {
        this._hiddenSageMakerImageVersionAliases.internalValue = value;
    }
    public resetHiddenSageMakerImageVersionAliases() {
        this._hiddenSageMakerImageVersionAliases.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hiddenSageMakerImageVersionAliasesInput() {
        return this._hiddenSageMakerImageVersionAliases.internalValue;
    }
}
export interface UserSettingsProperty {
    /**
    * Indicates whether auto-mounting of an EFS volume is supported for the user profile. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#auto_mount_home_efs CcDomain#auto_mount_home_efs}
    */
    readonly autoMountHomeEfs?: string;
    /**
    * The CodeEditor app settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#code_editor_app_settings CcDomain#code_editor_app_settings}
    */
    readonly codeEditorAppSettings?: CodeEditorAppSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#custom_file_system_configs CcDomain#custom_file_system_configs}
    */
    readonly customFileSystemConfigs?: CustomFileSystemConfigsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#custom_posix_user_config CcDomain#custom_posix_user_config}
    */
    readonly customPosixUserConfig?: DefaultUserSettingsCustomPosixUserConfigProperty;
    /**
    * Defines which Amazon SageMaker application users are directed to by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#default_landing_uri CcDomain#default_landing_uri}
    */
    readonly defaultLandingUri?: string;
    /**
    * The execution role for the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#execution_role CcDomain#execution_role}
    */
    readonly executionRole: string;
    /**
    * The JupyterLab app settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#jupyter_lab_app_settings CcDomain#jupyter_lab_app_settings}
    */
    readonly jupyterLabAppSettings?: DefaultUserSettingsJupyterLabAppSettingsProperty;
    /**
    * The Jupyter server's app settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#jupyter_server_app_settings CcDomain#jupyter_server_app_settings}
    */
    readonly jupyterServerAppSettings?: DefaultUserSettingsJupyterServerAppSettingsProperty;
    /**
    * The kernel gateway app settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#kernel_gateway_app_settings CcDomain#kernel_gateway_app_settings}
    */
    readonly kernelGatewayAppSettings?: DefaultUserSettingsKernelGatewayAppSettingsProperty;
    /**
    * A collection of settings that apply to an RSessionGateway app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#r_session_app_settings CcDomain#r_session_app_settings}
    */
    readonly rSessionAppSettings?: RSessionAppSettingsProperty;
    /**
    * A collection of settings that configure user interaction with the RStudioServerPro app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#r_studio_server_pro_app_settings CcDomain#r_studio_server_pro_app_settings}
    */
    readonly rStudioServerProAppSettings?: RStudioServerProAppSettingsProperty;
    /**
    * The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#security_groups CcDomain#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * The sharing settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sharing_settings CcDomain#sharing_settings}
    */
    readonly sharingSettings?: SharingSettingsProperty;
    /**
    * Default storage settings for a space.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#space_storage_settings CcDomain#space_storage_settings}
    */
    readonly spaceStorageSettings?: SpaceStorageSettingsProperty;
    /**
    * Indicates whether the Studio experience is available to users. If not, users cannot access Studio.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#studio_web_portal CcDomain#studio_web_portal}
    */
    readonly studioWebPortal?: string;
    /**
    * Studio settings. If these settings are applied on a user level, they take priority over the settings applied on a domain level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#studio_web_portal_settings CcDomain#studio_web_portal_settings}
    */
    readonly studioWebPortalSettings?: StudioWebPortalSettingsProperty;
}
export class UserSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UserSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoMountHomeEfs !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoMountHomeEfs = this._autoMountHomeEfs;
        }
        if (this._codeEditorAppSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeEditorAppSettings = this._codeEditorAppSettings?.internalValue;
        }
        if (this._customFileSystemConfigs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customFileSystemConfigs = this._customFileSystemConfigs?.internalValue;
        }
        if (this._customPosixUserConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customPosixUserConfig = this._customPosixUserConfig?.internalValue;
        }
        if (this._defaultLandingUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultLandingUri = this._defaultLandingUri;
        }
        if (this._executionRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionRole = this._executionRole;
        }
        if (this._jupyterLabAppSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jupyterLabAppSettings = this._jupyterLabAppSettings?.internalValue;
        }
        if (this._jupyterServerAppSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jupyterServerAppSettings = this._jupyterServerAppSettings?.internalValue;
        }
        if (this._kernelGatewayAppSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kernelGatewayAppSettings = this._kernelGatewayAppSettings?.internalValue;
        }
        if (this._rSessionAppSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rSessionAppSettings = this._rSessionAppSettings?.internalValue;
        }
        if (this._rStudioServerProAppSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rStudioServerProAppSettings = this._rStudioServerProAppSettings?.internalValue;
        }
        if (this._securityGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        if (this._sharingSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sharingSettings = this._sharingSettings?.internalValue;
        }
        if (this._spaceStorageSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.spaceStorageSettings = this._spaceStorageSettings?.internalValue;
        }
        if (this._studioWebPortal !== undefined) {
            hasAnyValues = true;
            internalValueResult.studioWebPortal = this._studioWebPortal;
        }
        if (this._studioWebPortalSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.studioWebPortalSettings = this._studioWebPortalSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoMountHomeEfs = undefined;
            this._codeEditorAppSettings.internalValue = undefined;
            this._customFileSystemConfigs.internalValue = undefined;
            this._customPosixUserConfig.internalValue = undefined;
            this._defaultLandingUri = undefined;
            this._executionRole = undefined;
            this._jupyterLabAppSettings.internalValue = undefined;
            this._jupyterServerAppSettings.internalValue = undefined;
            this._kernelGatewayAppSettings.internalValue = undefined;
            this._rSessionAppSettings.internalValue = undefined;
            this._rStudioServerProAppSettings.internalValue = undefined;
            this._securityGroups = undefined;
            this._sharingSettings.internalValue = undefined;
            this._spaceStorageSettings.internalValue = undefined;
            this._studioWebPortal = undefined;
            this._studioWebPortalSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoMountHomeEfs = value.autoMountHomeEfs;
            this._codeEditorAppSettings.internalValue = value.codeEditorAppSettings;
            this._customFileSystemConfigs.internalValue = value.customFileSystemConfigs;
            this._customPosixUserConfig.internalValue = value.customPosixUserConfig;
            this._defaultLandingUri = value.defaultLandingUri;
            this._executionRole = value.executionRole;
            this._jupyterLabAppSettings.internalValue = value.jupyterLabAppSettings;
            this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
            this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
            this._rSessionAppSettings.internalValue = value.rSessionAppSettings;
            this._rStudioServerProAppSettings.internalValue = value.rStudioServerProAppSettings;
            this._securityGroups = value.securityGroups;
            this._sharingSettings.internalValue = value.sharingSettings;
            this._spaceStorageSettings.internalValue = value.spaceStorageSettings;
            this._studioWebPortal = value.studioWebPortal;
            this._studioWebPortalSettings.internalValue = value.studioWebPortalSettings;
        }
    }

    // auto_mount_home_efs - computed: true, optional: true, required: false
    private _autoMountHomeEfs?: string; 
    public get autoMountHomeEfs() {
        return this.getStringAttribute('auto_mount_home_efs');
    }
    public set autoMountHomeEfs(value: string) {
        this._autoMountHomeEfs = value;
    }
    public resetAutoMountHomeEfs() {
        this._autoMountHomeEfs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoMountHomeEfsInput() {
        return this._autoMountHomeEfs;
    }

    // code_editor_app_settings - computed: true, optional: true, required: false
    private _codeEditorAppSettings = new CodeEditorAppSettingsPropertyOutputReference(this, "code_editor_app_settings");
    public get codeEditorAppSettings() {
        return this._codeEditorAppSettings;
    }
    public putCodeEditorAppSettings(value: CodeEditorAppSettingsProperty) {
        this._codeEditorAppSettings.internalValue = value;
    }
    public resetCodeEditorAppSettings() {
        this._codeEditorAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeEditorAppSettingsInput() {
        return this._codeEditorAppSettings.internalValue;
    }

    // custom_file_system_configs - computed: true, optional: true, required: false
    private _customFileSystemConfigs = new CustomFileSystemConfigsPropertyList(this, "custom_file_system_configs", false);
    public get customFileSystemConfigs() {
        return this._customFileSystemConfigs;
    }
    public putCustomFileSystemConfigs(value: CustomFileSystemConfigsProperty[] | cdktn.IResolvable) {
        this._customFileSystemConfigs.internalValue = value;
    }
    public resetCustomFileSystemConfigs() {
        this._customFileSystemConfigs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customFileSystemConfigsInput() {
        return this._customFileSystemConfigs.internalValue;
    }

    // custom_posix_user_config - computed: true, optional: true, required: false
    private _customPosixUserConfig = new DefaultUserSettingsCustomPosixUserConfigPropertyOutputReference(this, "custom_posix_user_config");
    public get customPosixUserConfig() {
        return this._customPosixUserConfig;
    }
    public putCustomPosixUserConfig(value: DefaultUserSettingsCustomPosixUserConfigProperty) {
        this._customPosixUserConfig.internalValue = value;
    }
    public resetCustomPosixUserConfig() {
        this._customPosixUserConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customPosixUserConfigInput() {
        return this._customPosixUserConfig.internalValue;
    }

    // default_landing_uri - computed: true, optional: true, required: false
    private _defaultLandingUri?: string; 
    public get defaultLandingUri() {
        return this.getStringAttribute('default_landing_uri');
    }
    public set defaultLandingUri(value: string) {
        this._defaultLandingUri = value;
    }
    public resetDefaultLandingUri() {
        this._defaultLandingUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultLandingUriInput() {
        return this._defaultLandingUri;
    }

    // execution_role - computed: false, optional: false, required: true
    private _executionRole?: string; 
    public get executionRole() {
        return this.getStringAttribute('execution_role');
    }
    public set executionRole(value: string) {
        this._executionRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleInput() {
        return this._executionRole;
    }

    // jupyter_lab_app_settings - computed: true, optional: true, required: false
    private _jupyterLabAppSettings = new DefaultUserSettingsJupyterLabAppSettingsPropertyOutputReference(this, "jupyter_lab_app_settings");
    public get jupyterLabAppSettings() {
        return this._jupyterLabAppSettings;
    }
    public putJupyterLabAppSettings(value: DefaultUserSettingsJupyterLabAppSettingsProperty) {
        this._jupyterLabAppSettings.internalValue = value;
    }
    public resetJupyterLabAppSettings() {
        this._jupyterLabAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jupyterLabAppSettingsInput() {
        return this._jupyterLabAppSettings.internalValue;
    }

    // jupyter_server_app_settings - computed: true, optional: true, required: false
    private _jupyterServerAppSettings = new DefaultUserSettingsJupyterServerAppSettingsPropertyOutputReference(this, "jupyter_server_app_settings");
    public get jupyterServerAppSettings() {
        return this._jupyterServerAppSettings;
    }
    public putJupyterServerAppSettings(value: DefaultUserSettingsJupyterServerAppSettingsProperty) {
        this._jupyterServerAppSettings.internalValue = value;
    }
    public resetJupyterServerAppSettings() {
        this._jupyterServerAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jupyterServerAppSettingsInput() {
        return this._jupyterServerAppSettings.internalValue;
    }

    // kernel_gateway_app_settings - computed: true, optional: true, required: false
    private _kernelGatewayAppSettings = new DefaultUserSettingsKernelGatewayAppSettingsPropertyOutputReference(this, "kernel_gateway_app_settings");
    public get kernelGatewayAppSettings() {
        return this._kernelGatewayAppSettings;
    }
    public putKernelGatewayAppSettings(value: DefaultUserSettingsKernelGatewayAppSettingsProperty) {
        this._kernelGatewayAppSettings.internalValue = value;
    }
    public resetKernelGatewayAppSettings() {
        this._kernelGatewayAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kernelGatewayAppSettingsInput() {
        return this._kernelGatewayAppSettings.internalValue;
    }

    // r_session_app_settings - computed: true, optional: true, required: false
    private _rSessionAppSettings = new RSessionAppSettingsPropertyOutputReference(this, "r_session_app_settings");
    public get rSessionAppSettings() {
        return this._rSessionAppSettings;
    }
    public putRSessionAppSettings(value: RSessionAppSettingsProperty) {
        this._rSessionAppSettings.internalValue = value;
    }
    public resetRSessionAppSettings() {
        this._rSessionAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rSessionAppSettingsInput() {
        return this._rSessionAppSettings.internalValue;
    }

    // r_studio_server_pro_app_settings - computed: true, optional: true, required: false
    private _rStudioServerProAppSettings = new RStudioServerProAppSettingsPropertyOutputReference(this, "r_studio_server_pro_app_settings");
    public get rStudioServerProAppSettings() {
        return this._rStudioServerProAppSettings;
    }
    public putRStudioServerProAppSettings(value: RStudioServerProAppSettingsProperty) {
        this._rStudioServerProAppSettings.internalValue = value;
    }
    public resetRStudioServerProAppSettings() {
        this._rStudioServerProAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rStudioServerProAppSettingsInput() {
        return this._rStudioServerProAppSettings.internalValue;
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[]; 
    public get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[]) {
        this._securityGroups = value;
    }
    public resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
        return this._securityGroups;
    }

    // sharing_settings - computed: true, optional: true, required: false
    private _sharingSettings = new SharingSettingsPropertyOutputReference(this, "sharing_settings");
    public get sharingSettings() {
        return this._sharingSettings;
    }
    public putSharingSettings(value: SharingSettingsProperty) {
        this._sharingSettings.internalValue = value;
    }
    public resetSharingSettings() {
        this._sharingSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sharingSettingsInput() {
        return this._sharingSettings.internalValue;
    }

    // space_storage_settings - computed: true, optional: true, required: false
    private _spaceStorageSettings = new SpaceStorageSettingsPropertyOutputReference(this, "space_storage_settings");
    public get spaceStorageSettings() {
        return this._spaceStorageSettings;
    }
    public putSpaceStorageSettings(value: SpaceStorageSettingsProperty) {
        this._spaceStorageSettings.internalValue = value;
    }
    public resetSpaceStorageSettings() {
        this._spaceStorageSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spaceStorageSettingsInput() {
        return this._spaceStorageSettings.internalValue;
    }

    // studio_web_portal - computed: true, optional: true, required: false
    private _studioWebPortal?: string; 
    public get studioWebPortal() {
        return this.getStringAttribute('studio_web_portal');
    }
    public set studioWebPortal(value: string) {
        this._studioWebPortal = value;
    }
    public resetStudioWebPortal() {
        this._studioWebPortal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get studioWebPortalInput() {
        return this._studioWebPortal;
    }

    // studio_web_portal_settings - computed: true, optional: true, required: false
    private _studioWebPortalSettings = new StudioWebPortalSettingsPropertyOutputReference(this, "studio_web_portal_settings");
    public get studioWebPortalSettings() {
        return this._studioWebPortalSettings;
    }
    public putStudioWebPortalSettings(value: StudioWebPortalSettingsProperty) {
        this._studioWebPortalSettings.internalValue = value;
    }
    public resetStudioWebPortalSettings() {
        this._studioWebPortalSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get studioWebPortalSettingsInput() {
        return this._studioWebPortalSettings.internalValue;
    }
}
export interface DockerSettingsProperty {
    /**
    * The flag to enable/disable docker-proxy server
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#enable_docker_access CcDomain#enable_docker_access}
    */
    readonly enableDockerAccess?: string;
    /**
    * A list of account id's that would be used to pull images from in VpcOnly mode
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#vpc_only_trusted_accounts CcDomain#vpc_only_trusted_accounts}
    */
    readonly vpcOnlyTrustedAccounts?: string[];
}
export class DockerSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DockerSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableDockerAccess !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableDockerAccess = this._enableDockerAccess;
        }
        if (this._vpcOnlyTrustedAccounts !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcOnlyTrustedAccounts = this._vpcOnlyTrustedAccounts;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DockerSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableDockerAccess = undefined;
            this._vpcOnlyTrustedAccounts = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableDockerAccess = value.enableDockerAccess;
            this._vpcOnlyTrustedAccounts = value.vpcOnlyTrustedAccounts;
        }
    }

    // enable_docker_access - computed: true, optional: true, required: false
    private _enableDockerAccess?: string; 
    public get enableDockerAccess() {
        return this.getStringAttribute('enable_docker_access');
    }
    public set enableDockerAccess(value: string) {
        this._enableDockerAccess = value;
    }
    public resetEnableDockerAccess() {
        this._enableDockerAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableDockerAccessInput() {
        return this._enableDockerAccess;
    }

    // vpc_only_trusted_accounts - computed: true, optional: true, required: false
    private _vpcOnlyTrustedAccounts?: string[]; 
    public get vpcOnlyTrustedAccounts() {
        return this.getListAttribute('vpc_only_trusted_accounts');
    }
    public set vpcOnlyTrustedAccounts(value: string[]) {
        this._vpcOnlyTrustedAccounts = value;
    }
    public resetVpcOnlyTrustedAccounts() {
        this._vpcOnlyTrustedAccounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcOnlyTrustedAccountsInput() {
        return this._vpcOnlyTrustedAccounts;
    }
}
export interface DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecProperty {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#instance_type CcDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#lifecycle_config_arn CcDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_arn CcDomain#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#sage_maker_image_version_arn CcDomain#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#training_plan_arn CcDomain#training_plan_arn}
    */
    readonly trainingPlanArn?: string;
}
export class DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._lifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
        }
        if (this._sageMakerImageArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
        }
        if (this._sageMakerImageVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
        }
        if (this._trainingPlanArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingPlanArn = this._trainingPlanArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sageMakerImageArn = undefined;
            this._sageMakerImageVersionArn = undefined;
            this._trainingPlanArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceType = value.instanceType;
            this._lifecycleConfigArn = value.lifecycleConfigArn;
            this._sageMakerImageArn = value.sageMakerImageArn;
            this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
            this._trainingPlanArn = value.trainingPlanArn;
        }
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // lifecycle_config_arn - computed: true, optional: true, required: false
    private _lifecycleConfigArn?: string; 
    public get lifecycleConfigArn() {
        return this.getStringAttribute('lifecycle_config_arn');
    }
    public set lifecycleConfigArn(value: string) {
        this._lifecycleConfigArn = value;
    }
    public resetLifecycleConfigArn() {
        this._lifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnInput() {
        return this._lifecycleConfigArn;
    }

    // sage_maker_image_arn - computed: true, optional: true, required: false
    private _sageMakerImageArn?: string; 
    public get sageMakerImageArn() {
        return this.getStringAttribute('sage_maker_image_arn');
    }
    public set sageMakerImageArn(value: string) {
        this._sageMakerImageArn = value;
    }
    public resetSageMakerImageArn() {
        this._sageMakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageArnInput() {
        return this._sageMakerImageArn;
    }

    // sage_maker_image_version_arn - computed: true, optional: true, required: false
    private _sageMakerImageVersionArn?: string; 
    public get sageMakerImageVersionArn() {
        return this.getStringAttribute('sage_maker_image_version_arn');
    }
    public set sageMakerImageVersionArn(value: string) {
        this._sageMakerImageVersionArn = value;
    }
    public resetSageMakerImageVersionArn() {
        this._sageMakerImageVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageVersionArnInput() {
        return this._sageMakerImageVersionArn;
    }

    // training_plan_arn - computed: true, optional: true, required: false
    private _trainingPlanArn?: string; 
    public get trainingPlanArn() {
        return this.getStringAttribute('training_plan_arn');
    }
    public set trainingPlanArn(value: string) {
        this._trainingPlanArn = value;
    }
    public resetTrainingPlanArn() {
        this._trainingPlanArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingPlanArnInput() {
        return this._trainingPlanArn;
    }
}
export interface RStudioServerProDomainSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#default_resource_spec CcDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecProperty;
    /**
    * The ARN of the execution role for the RStudioServerPro Domain-level app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#domain_execution_role_arn CcDomain#domain_execution_role_arn}
    */
    readonly domainExecutionRoleArn?: string;
    /**
    * A URL pointing to an RStudio Connect server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#r_studio_connect_url CcDomain#r_studio_connect_url}
    */
    readonly rStudioConnectUrl?: string;
    /**
    * A URL pointing to an RStudio Package Manager server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#r_studio_package_manager_url CcDomain#r_studio_package_manager_url}
    */
    readonly rStudioPackageManagerUrl?: string;
}
export class RStudioServerProDomainSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RStudioServerProDomainSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultResourceSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        if (this._domainExecutionRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainExecutionRoleArn = this._domainExecutionRoleArn;
        }
        if (this._rStudioConnectUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.rStudioConnectUrl = this._rStudioConnectUrl;
        }
        if (this._rStudioPackageManagerUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.rStudioPackageManagerUrl = this._rStudioPackageManagerUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RStudioServerProDomainSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultResourceSpec.internalValue = undefined;
            this._domainExecutionRoleArn = undefined;
            this._rStudioConnectUrl = undefined;
            this._rStudioPackageManagerUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
            this._domainExecutionRoleArn = value.domainExecutionRoleArn;
            this._rStudioConnectUrl = value.rStudioConnectUrl;
            this._rStudioPackageManagerUrl = value.rStudioPackageManagerUrl;
        }
    }

    // default_resource_spec - computed: true, optional: true, required: false
    private _defaultResourceSpec = new DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
    public get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    public putDefaultResourceSpec(value: DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecProperty) {
        this._defaultResourceSpec.internalValue = value;
    }
    public resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }

    // domain_execution_role_arn - computed: true, optional: true, required: false
    private _domainExecutionRoleArn?: string; 
    public get domainExecutionRoleArn() {
        return this.getStringAttribute('domain_execution_role_arn');
    }
    public set domainExecutionRoleArn(value: string) {
        this._domainExecutionRoleArn = value;
    }
    public resetDomainExecutionRoleArn() {
        this._domainExecutionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainExecutionRoleArnInput() {
        return this._domainExecutionRoleArn;
    }

    // r_studio_connect_url - computed: true, optional: true, required: false
    private _rStudioConnectUrl?: string; 
    public get rStudioConnectUrl() {
        return this.getStringAttribute('r_studio_connect_url');
    }
    public set rStudioConnectUrl(value: string) {
        this._rStudioConnectUrl = value;
    }
    public resetRStudioConnectUrl() {
        this._rStudioConnectUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rStudioConnectUrlInput() {
        return this._rStudioConnectUrl;
    }

    // r_studio_package_manager_url - computed: true, optional: true, required: false
    private _rStudioPackageManagerUrl?: string; 
    public get rStudioPackageManagerUrl() {
        return this.getStringAttribute('r_studio_package_manager_url');
    }
    public set rStudioPackageManagerUrl(value: string) {
        this._rStudioPackageManagerUrl = value;
    }
    public resetRStudioPackageManagerUrl() {
        this._rStudioPackageManagerUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rStudioPackageManagerUrlInput() {
        return this._rStudioPackageManagerUrl;
    }
}
export interface UnifiedStudioSettingsProperty {
    /**
    * The ID of the AWS account that has the Amazon SageMaker Unified Studio domain. The default value, if you don't specify an ID, is the ID of the account that has the Amazon SageMaker AI domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#domain_account_id CcDomain#domain_account_id}
    */
    readonly domainAccountId?: string;
    /**
    * The ID of the Amazon SageMaker Unified Studio domain associated with this domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#domain_id CcDomain#domain_id}
    */
    readonly domainId?: string;
    /**
    * The AWS Region where the domain is located in Amazon SageMaker Unified Studio. The default value, if you don't specify a Region, is the Region where the Amazon SageMaker AI domain is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#domain_region CcDomain#domain_region}
    */
    readonly domainRegion?: string;
    /**
    * The ID of the environment that Amazon SageMaker Unified Studio associates with the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#environment_id CcDomain#environment_id}
    */
    readonly environmentId?: string;
    /**
    * The ID of the Amazon SageMaker Unified Studio project that corresponds to the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#project_id CcDomain#project_id}
    */
    readonly projectId?: string;
    /**
    * The location where Amazon S3 stores temporary execution data and other artifacts for the project that corresponds to the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#project_s3_path CcDomain#project_s3_path}
    */
    readonly projectS3Path?: string;
    /**
    * Sets whether you can access the domain in Amazon SageMaker Studio:
    * 
    * ENABLED
    * You can access the domain in Amazon SageMaker Studio. If you migrate the domain to Amazon SageMaker Unified Studio, you can access it in both studio interfaces.
    * DISABLED
    * You can't access the domain in Amazon SageMaker Studio. If you migrate the domain to Amazon SageMaker Unified Studio, you can access it only in that studio interface.
    * 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#studio_web_portal_access CcDomain#studio_web_portal_access}
    */
    readonly studioWebPortalAccess?: string;
}
export class UnifiedStudioSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UnifiedStudioSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domainAccountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainAccountId = this._domainAccountId;
        }
        if (this._domainId !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainId = this._domainId;
        }
        if (this._domainRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainRegion = this._domainRegion;
        }
        if (this._environmentId !== undefined) {
            hasAnyValues = true;
            internalValueResult.environmentId = this._environmentId;
        }
        if (this._projectId !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectId = this._projectId;
        }
        if (this._projectS3Path !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectS3Path = this._projectS3Path;
        }
        if (this._studioWebPortalAccess !== undefined) {
            hasAnyValues = true;
            internalValueResult.studioWebPortalAccess = this._studioWebPortalAccess;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UnifiedStudioSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domainAccountId = undefined;
            this._domainId = undefined;
            this._domainRegion = undefined;
            this._environmentId = undefined;
            this._projectId = undefined;
            this._projectS3Path = undefined;
            this._studioWebPortalAccess = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domainAccountId = value.domainAccountId;
            this._domainId = value.domainId;
            this._domainRegion = value.domainRegion;
            this._environmentId = value.environmentId;
            this._projectId = value.projectId;
            this._projectS3Path = value.projectS3Path;
            this._studioWebPortalAccess = value.studioWebPortalAccess;
        }
    }

    // domain_account_id - computed: true, optional: true, required: false
    private _domainAccountId?: string; 
    public get domainAccountId() {
        return this.getStringAttribute('domain_account_id');
    }
    public set domainAccountId(value: string) {
        this._domainAccountId = value;
    }
    public resetDomainAccountId() {
        this._domainAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainAccountIdInput() {
        return this._domainAccountId;
    }

    // domain_id - computed: true, optional: true, required: false
    private _domainId?: string; 
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }
    public set domainId(value: string) {
        this._domainId = value;
    }
    public resetDomainId() {
        this._domainId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIdInput() {
        return this._domainId;
    }

    // domain_region - computed: true, optional: true, required: false
    private _domainRegion?: string; 
    public get domainRegion() {
        return this.getStringAttribute('domain_region');
    }
    public set domainRegion(value: string) {
        this._domainRegion = value;
    }
    public resetDomainRegion() {
        this._domainRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainRegionInput() {
        return this._domainRegion;
    }

    // environment_id - computed: true, optional: true, required: false
    private _environmentId?: string; 
    public get environmentId() {
        return this.getStringAttribute('environment_id');
    }
    public set environmentId(value: string) {
        this._environmentId = value;
    }
    public resetEnvironmentId() {
        this._environmentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentIdInput() {
        return this._environmentId;
    }

    // project_id - computed: true, optional: true, required: false
    private _projectId?: string; 
    public get projectId() {
        return this.getStringAttribute('project_id');
    }
    public set projectId(value: string) {
        this._projectId = value;
    }
    public resetProjectId() {
        this._projectId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectIdInput() {
        return this._projectId;
    }

    // project_s3_path - computed: true, optional: true, required: false
    private _projectS3Path?: string; 
    public get projectS3Path() {
        return this.getStringAttribute('project_s3_path');
    }
    public set projectS3Path(value: string) {
        this._projectS3Path = value;
    }
    public resetProjectS3Path() {
        this._projectS3Path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectS3PathInput() {
        return this._projectS3Path;
    }

    // studio_web_portal_access - computed: true, optional: true, required: false
    private _studioWebPortalAccess?: string; 
    public get studioWebPortalAccess() {
        return this.getStringAttribute('studio_web_portal_access');
    }
    public set studioWebPortalAccess(value: string) {
        this._studioWebPortalAccess = value;
    }
    public resetStudioWebPortalAccess() {
        this._studioWebPortalAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get studioWebPortalAccessInput() {
        return this._studioWebPortalAccess;
    }
}
export interface DomainSettingsProperty {
    /**
    * A collection of settings that are required to start docker-proxy server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#docker_settings CcDomain#docker_settings}
    */
    readonly dockerSettings?: DockerSettingsProperty;
    /**
    * The configuration for attaching a SageMaker user profile name to the execution role as a sts:SourceIdentity key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#execution_role_identity_config CcDomain#execution_role_identity_config}
    */
    readonly executionRoleIdentityConfig?: string;
    /**
    * A setting to indicate if IPv6 routing should be enabled along with IPv4 or not
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#ip_address_type CcDomain#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * A collection of settings that update the current configuration for the RStudioServerPro Domain-level app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#r_studio_server_pro_domain_settings CcDomain#r_studio_server_pro_domain_settings}
    */
    readonly rStudioServerProDomainSettings?: RStudioServerProDomainSettingsProperty;
    /**
    * The security groups for the Amazon Virtual Private Cloud that the Domain uses for communication between Domain-level apps and user apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#security_group_ids CcDomain#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * A collection of settings that apply to an Amazon SageMaker AI domain when you use it in Amazon SageMaker Unified Studio.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#unified_studio_settings CcDomain#unified_studio_settings}
    */
    readonly unifiedStudioSettings?: UnifiedStudioSettingsProperty;
}
export class DomainSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DomainSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dockerSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dockerSettings = this._dockerSettings?.internalValue;
        }
        if (this._executionRoleIdentityConfig !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionRoleIdentityConfig = this._executionRoleIdentityConfig;
        }
        if (this._ipAddressType !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddressType = this._ipAddressType;
        }
        if (this._rStudioServerProDomainSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rStudioServerProDomainSettings = this._rStudioServerProDomainSettings?.internalValue;
        }
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._unifiedStudioSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.unifiedStudioSettings = this._unifiedStudioSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DomainSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dockerSettings.internalValue = undefined;
            this._executionRoleIdentityConfig = undefined;
            this._ipAddressType = undefined;
            this._rStudioServerProDomainSettings.internalValue = undefined;
            this._securityGroupIds = undefined;
            this._unifiedStudioSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dockerSettings.internalValue = value.dockerSettings;
            this._executionRoleIdentityConfig = value.executionRoleIdentityConfig;
            this._ipAddressType = value.ipAddressType;
            this._rStudioServerProDomainSettings.internalValue = value.rStudioServerProDomainSettings;
            this._securityGroupIds = value.securityGroupIds;
            this._unifiedStudioSettings.internalValue = value.unifiedStudioSettings;
        }
    }

    // docker_settings - computed: true, optional: true, required: false
    private _dockerSettings = new DockerSettingsPropertyOutputReference(this, "docker_settings");
    public get dockerSettings() {
        return this._dockerSettings;
    }
    public putDockerSettings(value: DockerSettingsProperty) {
        this._dockerSettings.internalValue = value;
    }
    public resetDockerSettings() {
        this._dockerSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dockerSettingsInput() {
        return this._dockerSettings.internalValue;
    }

    // execution_role_identity_config - computed: true, optional: true, required: false
    private _executionRoleIdentityConfig?: string; 
    public get executionRoleIdentityConfig() {
        return this.getStringAttribute('execution_role_identity_config');
    }
    public set executionRoleIdentityConfig(value: string) {
        this._executionRoleIdentityConfig = value;
    }
    public resetExecutionRoleIdentityConfig() {
        this._executionRoleIdentityConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleIdentityConfigInput() {
        return this._executionRoleIdentityConfig;
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

    // r_studio_server_pro_domain_settings - computed: true, optional: true, required: false
    private _rStudioServerProDomainSettings = new RStudioServerProDomainSettingsPropertyOutputReference(this, "r_studio_server_pro_domain_settings");
    public get rStudioServerProDomainSettings() {
        return this._rStudioServerProDomainSettings;
    }
    public putRStudioServerProDomainSettings(value: RStudioServerProDomainSettingsProperty) {
        this._rStudioServerProDomainSettings.internalValue = value;
    }
    public resetRStudioServerProDomainSettings() {
        this._rStudioServerProDomainSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rStudioServerProDomainSettingsInput() {
        return this._rStudioServerProDomainSettings.internalValue;
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

    // unified_studio_settings - computed: true, optional: true, required: false
    private _unifiedStudioSettings = new UnifiedStudioSettingsPropertyOutputReference(this, "unified_studio_settings");
    public get unifiedStudioSettings() {
        return this._unifiedStudioSettings;
    }
    public putUnifiedStudioSettings(value: UnifiedStudioSettingsProperty) {
        this._unifiedStudioSettings.internalValue = value;
    }
    public resetUnifiedStudioSettings() {
        this._unifiedStudioSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unifiedStudioSettingsInput() {
        return this._unifiedStudioSettings.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#key CcDomain#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_domain#value CcDomain#value}
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
