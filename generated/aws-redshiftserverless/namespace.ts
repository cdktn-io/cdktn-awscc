// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNamespaceProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret. You can only use this parameter if manageAdminPassword is true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#admin_password_secret_kms_key_id CcNamespace#admin_password_secret_kms_key_id}
    */
    readonly adminPasswordSecretKmsKeyId?: string;
    /**
    * The password associated with the admin user for the namespace that is being created. Password must be at least 8 characters in length, should be any printable ASCII character. Must contain at least one lowercase letter, one uppercase letter and one decimal digit. You can't use adminUserPassword if manageAdminPassword is true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#admin_user_password CcNamespace#admin_user_password}
    */
    readonly adminUserPassword?: string;
    /**
    * The user name associated with the admin user for the namespace that is being created. Only alphanumeric characters and underscores are allowed. It should start with an alphabet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#admin_username CcNamespace#admin_username}
    */
    readonly adminUsername?: string;
    /**
    * The database name associated for the namespace that is being created. Only alphanumeric characters and underscores are allowed. It should start with an alphabet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#db_name CcNamespace#db_name}
    */
    readonly dbName?: string;
    /**
    * The default IAM role ARN for the namespace that is being created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#default_iam_role_arn CcNamespace#default_iam_role_arn}
    */
    readonly defaultIamRoleArn?: string;
    /**
    * The name of the namespace the source snapshot was created from. Please specify the name if needed before deleting namespace
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#final_snapshot_name CcNamespace#final_snapshot_name}
    */
    readonly finalSnapshotName?: string;
    /**
    * The number of days to retain automated snapshot in the destination region after they are copied from the source region. If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#final_snapshot_retention_period CcNamespace#final_snapshot_retention_period}
    */
    readonly finalSnapshotRetentionPeriod?: number;
    /**
    * A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. The Default role limit for each request is 10.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#iam_roles CcNamespace#iam_roles}
    */
    readonly iamRoles?: string[];
    /**
    * The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#kms_key_id CcNamespace#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The collection of log types to be exported provided by the customer. Should only be one of the three supported log types: userlog, useractivitylog and connectionlog
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#log_exports CcNamespace#log_exports}
    */
    readonly logExports?: string[];
    /**
    * If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials. You can't use adminUserPassword if manageAdminPassword is true. If manageAdminPassword is false or not set, Amazon Redshift uses adminUserPassword for the admin user account's password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#manage_admin_password CcNamespace#manage_admin_password}
    */
    readonly manageAdminPassword?: boolean | cdktn.IResolvable;
    /**
    * A unique identifier for the namespace. You use this identifier to refer to the namespace for any subsequent namespace operations such as deleting or modifying. All alphabetical characters must be lower case. Namespace name should be unique for all namespaces within an AWS account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#namespace_name CcNamespace#namespace_name}
    */
    readonly namespaceName: string;
    /**
    * The resource policy document that will be attached to the namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#namespace_resource_policy CcNamespace#namespace_resource_policy}
    */
    readonly namespaceResourcePolicy?: string;
    /**
    * The ARN for the Redshift application that integrates with IAM Identity Center.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#redshift_idc_application_arn CcNamespace#redshift_idc_application_arn}
    */
    readonly redshiftIdcApplicationArn?: string;
    /**
    * The snapshot copy configurations for the namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#snapshot_copy_configurations CcNamespace#snapshot_copy_configurations}
    */
    readonly snapshotCopyConfigurations?: CcNamespace.SnapshotCopyConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The list of tags for the namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#tags CcNamespace#tags}
    */
    readonly tags?: CcNamespace.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace awscc_redshiftserverless_namespace}
*/
export class CcNamespace extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_redshiftserverless_namespace";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNamespace resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNamespace to import
    * @param importFromId The id of the existing CcNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNamespace to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshiftserverless_namespace", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace awscc_redshiftserverless_namespace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNamespaceProps
    */
    public constructor(scope: Construct, id: string, config: CcNamespaceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_redshiftserverless_namespace',
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
        this._adminPasswordSecretKmsKeyId = config.adminPasswordSecretKmsKeyId;
        this._adminUserPassword = config.adminUserPassword;
        this._adminUsername = config.adminUsername;
        this._dbName = config.dbName;
        this._defaultIamRoleArn = config.defaultIamRoleArn;
        this._finalSnapshotName = config.finalSnapshotName;
        this._finalSnapshotRetentionPeriod = config.finalSnapshotRetentionPeriod;
        this._iamRoles = config.iamRoles;
        this._kmsKeyId = config.kmsKeyId;
        this._logExports = config.logExports;
        this._manageAdminPassword = config.manageAdminPassword;
        this._namespaceName = config.namespaceName;
        this._namespaceResourcePolicy = config.namespaceResourcePolicy;
        this._redshiftIdcApplicationArn = config.redshiftIdcApplicationArn;
        this._snapshotCopyConfigurations.internalValue = config.snapshotCopyConfigurations;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // admin_password_secret_kms_key_id - computed: true, optional: true, required: false
    private _adminPasswordSecretKmsKeyId?: string; 
    public get adminPasswordSecretKmsKeyId() {
        return this.getStringAttribute('admin_password_secret_kms_key_id');
    }
    public set adminPasswordSecretKmsKeyId(value: string) {
        this._adminPasswordSecretKmsKeyId = value;
    }
    public resetAdminPasswordSecretKmsKeyId() {
        this._adminPasswordSecretKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adminPasswordSecretKmsKeyIdInput() {
        return this._adminPasswordSecretKmsKeyId;
    }

    // admin_user_password - computed: true, optional: true, required: false
    private _adminUserPassword?: string; 
    public get adminUserPassword() {
        return this.getStringAttribute('admin_user_password');
    }
    public set adminUserPassword(value: string) {
        this._adminUserPassword = value;
    }
    public resetAdminUserPassword() {
        this._adminUserPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adminUserPasswordInput() {
        return this._adminUserPassword;
    }

    // admin_username - computed: true, optional: true, required: false
    private _adminUsername?: string; 
    public get adminUsername() {
        return this.getStringAttribute('admin_username');
    }
    public set adminUsername(value: string) {
        this._adminUsername = value;
    }
    public resetAdminUsername() {
        this._adminUsername = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adminUsernameInput() {
        return this._adminUsername;
    }

    // db_name - computed: true, optional: true, required: false
    private _dbName?: string; 
    public get dbName() {
        return this.getStringAttribute('db_name');
    }
    public set dbName(value: string) {
        this._dbName = value;
    }
    public resetDbName() {
        this._dbName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbNameInput() {
        return this._dbName;
    }

    // default_iam_role_arn - computed: true, optional: true, required: false
    private _defaultIamRoleArn?: string; 
    public get defaultIamRoleArn() {
        return this.getStringAttribute('default_iam_role_arn');
    }
    public set defaultIamRoleArn(value: string) {
        this._defaultIamRoleArn = value;
    }
    public resetDefaultIamRoleArn() {
        this._defaultIamRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultIamRoleArnInput() {
        return this._defaultIamRoleArn;
    }

    // final_snapshot_name - computed: true, optional: true, required: false
    private _finalSnapshotName?: string; 
    public get finalSnapshotName() {
        return this.getStringAttribute('final_snapshot_name');
    }
    public set finalSnapshotName(value: string) {
        this._finalSnapshotName = value;
    }
    public resetFinalSnapshotName() {
        this._finalSnapshotName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get finalSnapshotNameInput() {
        return this._finalSnapshotName;
    }

    // final_snapshot_retention_period - computed: true, optional: true, required: false
    private _finalSnapshotRetentionPeriod?: number; 
    public get finalSnapshotRetentionPeriod() {
        return this.getNumberAttribute('final_snapshot_retention_period');
    }
    public set finalSnapshotRetentionPeriod(value: number) {
        this._finalSnapshotRetentionPeriod = value;
    }
    public resetFinalSnapshotRetentionPeriod() {
        this._finalSnapshotRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get finalSnapshotRetentionPeriodInput() {
        return this._finalSnapshotRetentionPeriod;
    }

    // iam_roles - computed: true, optional: true, required: false
    private _iamRoles?: string[]; 
    public get iamRoles() {
        return this.getListAttribute('iam_roles');
    }
    public set iamRoles(value: string[]) {
        this._iamRoles = value;
    }
    public resetIamRoles() {
        this._iamRoles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRolesInput() {
        return this._iamRoles;
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

    // log_exports - computed: true, optional: true, required: false
    private _logExports?: string[]; 
    public get logExports() {
        return this.getListAttribute('log_exports');
    }
    public set logExports(value: string[]) {
        this._logExports = value;
    }
    public resetLogExports() {
        this._logExports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logExportsInput() {
        return this._logExports;
    }

    // manage_admin_password - computed: true, optional: true, required: false
    private _manageAdminPassword?: boolean | cdktn.IResolvable; 
    public get manageAdminPassword() {
        return this.getBooleanAttribute('manage_admin_password');
    }
    public set manageAdminPassword(value: boolean | cdktn.IResolvable) {
        this._manageAdminPassword = value;
    }
    public resetManageAdminPassword() {
        this._manageAdminPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manageAdminPasswordInput() {
        return this._manageAdminPassword;
    }

    // namespace - computed: true, optional: false, required: false
    private _namespace = new CcNamespace.NamespacePropertyOutputReference(this, "namespace");
    public get namespace() {
        return this._namespace;
    }

    // namespace_name - computed: false, optional: false, required: true
    private _namespaceName?: string; 
    public get namespaceName() {
        return this.getStringAttribute('namespace_name');
    }
    public set namespaceName(value: string) {
        this._namespaceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceNameInput() {
        return this._namespaceName;
    }

    // namespace_resource_policy - computed: true, optional: true, required: false
    private _namespaceResourcePolicy?: string; 
    public get namespaceResourcePolicy() {
        return this.getStringAttribute('namespace_resource_policy');
    }
    public set namespaceResourcePolicy(value: string) {
        this._namespaceResourcePolicy = value;
    }
    public resetNamespaceResourcePolicy() {
        this._namespaceResourcePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceResourcePolicyInput() {
        return this._namespaceResourcePolicy;
    }

    // redshift_idc_application_arn - computed: true, optional: true, required: false
    private _redshiftIdcApplicationArn?: string; 
    public get redshiftIdcApplicationArn() {
        return this.getStringAttribute('redshift_idc_application_arn');
    }
    public set redshiftIdcApplicationArn(value: string) {
        this._redshiftIdcApplicationArn = value;
    }
    public resetRedshiftIdcApplicationArn() {
        this._redshiftIdcApplicationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftIdcApplicationArnInput() {
        return this._redshiftIdcApplicationArn;
    }

    // snapshot_copy_configurations - computed: true, optional: true, required: false
    private _snapshotCopyConfigurations = new CcNamespace.SnapshotCopyConfigurationPropertyList(this, "snapshot_copy_configurations", false);
    public get snapshotCopyConfigurations() {
        return this._snapshotCopyConfigurations;
    }
    public putSnapshotCopyConfigurations(value: CcNamespace.SnapshotCopyConfigurationProperty[] | cdktn.IResolvable) {
        this._snapshotCopyConfigurations.internalValue = value;
    }
    public resetSnapshotCopyConfigurations() {
        this._snapshotCopyConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotCopyConfigurationsInput() {
        return this._snapshotCopyConfigurations.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcNamespace.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcNamespace.TagProperty[] | cdktn.IResolvable) {
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
            admin_password_secret_kms_key_id: cdktn.stringToTerraform(this._adminPasswordSecretKmsKeyId),
            admin_user_password: cdktn.stringToTerraform(this._adminUserPassword),
            admin_username: cdktn.stringToTerraform(this._adminUsername),
            db_name: cdktn.stringToTerraform(this._dbName),
            default_iam_role_arn: cdktn.stringToTerraform(this._defaultIamRoleArn),
            final_snapshot_name: cdktn.stringToTerraform(this._finalSnapshotName),
            final_snapshot_retention_period: cdktn.numberToTerraform(this._finalSnapshotRetentionPeriod),
            iam_roles: cdktn.listMapper(cdktn.stringToTerraform, false)(this._iamRoles),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            log_exports: cdktn.listMapper(cdktn.stringToTerraform, false)(this._logExports),
            manage_admin_password: cdktn.booleanToTerraform(this._manageAdminPassword),
            namespace_name: cdktn.stringToTerraform(this._namespaceName),
            namespace_resource_policy: cdktn.stringToTerraform(this._namespaceResourcePolicy),
            redshift_idc_application_arn: cdktn.stringToTerraform(this._redshiftIdcApplicationArn),
            snapshot_copy_configurations: cdktn.listMapper(ccNamespaceSnapshotCopyConfigurationPropertyToTerraform, false)(this._snapshotCopyConfigurations.internalValue),
            tags: cdktn.listMapper(ccNamespaceTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            admin_password_secret_kms_key_id: {
                value: cdktn.stringToHclTerraform(this._adminPasswordSecretKmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            admin_user_password: {
                value: cdktn.stringToHclTerraform(this._adminUserPassword),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            admin_username: {
                value: cdktn.stringToHclTerraform(this._adminUsername),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_name: {
                value: cdktn.stringToHclTerraform(this._dbName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_iam_role_arn: {
                value: cdktn.stringToHclTerraform(this._defaultIamRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            final_snapshot_name: {
                value: cdktn.stringToHclTerraform(this._finalSnapshotName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            final_snapshot_retention_period: {
                value: cdktn.numberToHclTerraform(this._finalSnapshotRetentionPeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            iam_roles: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._iamRoles),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_exports: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._logExports),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            manage_admin_password: {
                value: cdktn.booleanToHclTerraform(this._manageAdminPassword),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            namespace_name: {
                value: cdktn.stringToHclTerraform(this._namespaceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            namespace_resource_policy: {
                value: cdktn.stringToHclTerraform(this._namespaceResourcePolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            redshift_idc_application_arn: {
                value: cdktn.stringToHclTerraform(this._redshiftIdcApplicationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            snapshot_copy_configurations: {
                value: cdktn.listMapperHcl(ccNamespaceSnapshotCopyConfigurationPropertyToHclTerraform, false)(this._snapshotCopyConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNamespace.SnapshotCopyConfigurationPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccNamespaceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNamespace.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccNamespaceNamespacePropertyToTerraform(struct?: CcNamespace.NamespaceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNamespaceNamespacePropertyToHclTerraform(struct?: CcNamespace.NamespaceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNamespaceSnapshotCopyConfigurationPropertyToTerraform(struct?: CcNamespace.SnapshotCopyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_kms_key_id: cdktn.stringToTerraform(struct!.destinationKmsKeyId),
        destination_region: cdktn.stringToTerraform(struct!.destinationRegion),
        snapshot_retention_period: cdktn.numberToTerraform(struct!.snapshotRetentionPeriod),
    }
}


export function ccNamespaceSnapshotCopyConfigurationPropertyToHclTerraform(struct?: CcNamespace.SnapshotCopyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.destinationKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_region: {
            value: cdktn.stringToHclTerraform(struct!.destinationRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        snapshot_retention_period: {
            value: cdktn.numberToHclTerraform(struct!.snapshotRetentionPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNamespaceTagPropertyToTerraform(struct?: CcNamespace.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccNamespaceTagPropertyToHclTerraform(struct?: CcNamespace.TagProperty | cdktn.IResolvable): any {
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


export namespace CcNamespace {
export interface NamespaceProperty {
}
export class NamespacePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NamespaceProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NamespaceProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // admin_password_secret_arn - computed: true, optional: false, required: false
    public get adminPasswordSecretArn() {
        return this.getStringAttribute('admin_password_secret_arn');
    }

    // admin_password_secret_kms_key_id - computed: true, optional: false, required: false
    public get adminPasswordSecretKmsKeyId() {
        return this.getStringAttribute('admin_password_secret_kms_key_id');
    }

    // admin_username - computed: true, optional: false, required: false
    public get adminUsername() {
        return this.getStringAttribute('admin_username');
    }

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
        return this.getStringAttribute('creation_date');
    }

    // db_name - computed: true, optional: false, required: false
    public get dbName() {
        return this.getStringAttribute('db_name');
    }

    // default_iam_role_arn - computed: true, optional: false, required: false
    public get defaultIamRoleArn() {
        return this.getStringAttribute('default_iam_role_arn');
    }

    // iam_roles - computed: true, optional: false, required: false
    public get iamRoles() {
        return this.getListAttribute('iam_roles');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }

    // log_exports - computed: true, optional: false, required: false
    public get logExports() {
        return this.getListAttribute('log_exports');
    }

    // namespace_arn - computed: true, optional: false, required: false
    public get namespaceArn() {
        return this.getStringAttribute('namespace_arn');
    }

    // namespace_id - computed: true, optional: false, required: false
    public get namespaceId() {
        return this.getStringAttribute('namespace_id');
    }

    // namespace_name - computed: true, optional: false, required: false
    public get namespaceName() {
        return this.getStringAttribute('namespace_name');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }
}
export interface SnapshotCopyConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#destination_kms_key_id CcNamespace#destination_kms_key_id}
    */
    readonly destinationKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#destination_region CcNamespace#destination_region}
    */
    readonly destinationRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#snapshot_retention_period CcNamespace#snapshot_retention_period}
    */
    readonly snapshotRetentionPeriod?: number;
}
export class SnapshotCopyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SnapshotCopyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationKmsKeyId = this._destinationKmsKeyId;
        }
        if (this._destinationRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationRegion = this._destinationRegion;
        }
        if (this._snapshotRetentionPeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.snapshotRetentionPeriod = this._snapshotRetentionPeriod;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnapshotCopyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationKmsKeyId = undefined;
            this._destinationRegion = undefined;
            this._snapshotRetentionPeriod = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationKmsKeyId = value.destinationKmsKeyId;
            this._destinationRegion = value.destinationRegion;
            this._snapshotRetentionPeriod = value.snapshotRetentionPeriod;
        }
    }

    // destination_kms_key_id - computed: true, optional: true, required: false
    private _destinationKmsKeyId?: string; 
    public get destinationKmsKeyId() {
        return this.getStringAttribute('destination_kms_key_id');
    }
    public set destinationKmsKeyId(value: string) {
        this._destinationKmsKeyId = value;
    }
    public resetDestinationKmsKeyId() {
        this._destinationKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationKmsKeyIdInput() {
        return this._destinationKmsKeyId;
    }

    // destination_region - computed: true, optional: true, required: false
    private _destinationRegion?: string; 
    public get destinationRegion() {
        return this.getStringAttribute('destination_region');
    }
    public set destinationRegion(value: string) {
        this._destinationRegion = value;
    }
    public resetDestinationRegion() {
        this._destinationRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationRegionInput() {
        return this._destinationRegion;
    }

    // snapshot_retention_period - computed: true, optional: true, required: false
    private _snapshotRetentionPeriod?: number; 
    public get snapshotRetentionPeriod() {
        return this.getNumberAttribute('snapshot_retention_period');
    }
    public set snapshotRetentionPeriod(value: number) {
        this._snapshotRetentionPeriod = value;
    }
    public resetSnapshotRetentionPeriod() {
        this._snapshotRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotRetentionPeriodInput() {
        return this._snapshotRetentionPeriod;
    }
}

export class SnapshotCopyConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : SnapshotCopyConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): SnapshotCopyConfigurationPropertyOutputReference {
        return new SnapshotCopyConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#key CcNamespace#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_namespace#value CcNamespace#value}
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
