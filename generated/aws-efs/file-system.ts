// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFileSystemProps extends cdktn.TerraformMetaArguments {
    /**
    * For One Zone file systems, specify the AWS Availability Zone in which to create the file system. Use the format ``us-east-1a`` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html#file-system-type) in the *Amazon EFS User Guide*.
    *   One Zone file systems are not available in all Availability Zones in AWS-Regions where Amazon EFS is available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#availability_zone_name CcFileSystem#availability_zone_name}
    */
    readonly availabilityZoneName?: string;
    /**
    * Use the ``BackupPolicy`` to turn automatic backups on or off for the file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#backup_policy CcFileSystem#backup_policy}
    */
    readonly backupPolicy?: CcFileSystem.BackupPolicyProperty;
    /**
    * (Optional) A boolean that specifies whether or not to bypass the ``FileSystemPolicy`` lockout safety check. The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future ``PutFileSystemPolicy`` requests on this file system. Set ``BypassPolicyLockoutSafetyCheck`` to ``True`` only when you intend to prevent the IAM principal that is making the request from making subsequent ``PutFileSystemPolicy`` requests on this file system. The default value is ``False``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#bypass_policy_lockout_safety_check CcFileSystem#bypass_policy_lockout_safety_check}
    */
    readonly bypassPolicyLockoutSafetyCheck?: boolean | cdktn.IResolvable;
    /**
    * A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying a KmsKeyId for an existing kms-key-long. If you don't specify a kms-key, then the default kms-key for EFS, ``/aws/elasticfilesystem``, is used to protect the encrypted file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#encrypted CcFileSystem#encrypted}
    */
    readonly encrypted?: boolean | cdktn.IResolvable;
    /**
    * The ``FileSystemPolicy`` for the EFS file system. A file system policy is an IAM resource policy used to control NFS access to an EFS file system. For more information, see [Using to control NFS access to Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html) in the *Amazon EFS User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#file_system_policy CcFileSystem#file_system_policy}
    */
    readonly fileSystemPolicy?: string;
    /**
    * Describes the protection on the file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#file_system_protection CcFileSystem#file_system_protection}
    */
    readonly fileSystemProtection?: CcFileSystem.FileSystemProtectionProperty;
    /**
    * Use to create one or more tags associated with the file system. Each tag is a user-defined key-value pair. Name your file system on creation by including a ``"Key":"Name","Value":"{value}"`` key-value pair. Each key must be unique. For more information, see [Tagging resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *General Reference Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#file_system_tags CcFileSystem#file_system_tags}
    */
    readonly fileSystemTags?: CcFileSystem.ElasticFileSystemTagProperty[] | cdktn.IResolvable;
    /**
    * The ID of the kms-key-long to be used to protect the encrypted file system. This parameter is only required if you want to use a nondefault kms-key. If this parameter is not specified, the default kms-key for EFS is used. This ID can be in one of the following formats:
    *   +  Key ID - A unique identifier of the key, for example ``1234abcd-12ab-34cd-56ef-1234567890ab``.
    *   +  ARN - An Amazon Resource Name (ARN) for the key, for example ``arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab``.
    *   +  Key alias - A previously created display name for a key, for example ``alias/projectKey1``.
    *   +  Key alias ARN - An ARN for a key alias, for example ``arn:aws:kms:us-west-2:444455556666:alias/projectKey1``.
    *   
    *  If ``KmsKeyId`` is specified, the ``Encrypted`` parameter must be set to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#kms_key_id CcFileSystem#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * An array of ``LifecyclePolicy`` objects that define the file system's ``LifecycleConfiguration`` object. A ``LifecycleConfiguration`` object informs Lifecycle management of the following:
    *   +  When to move files in the file system from primary storage to IA storage.
    *   +  When to move files in the file system from primary storage or IA storage to Archive storage.
    *   +  When to move files that are in IA or Archive storage to primary storage.
    *   
    *   EFS requires that each ``LifecyclePolicy`` object have only a single transition. This means that in a request body, ``LifecyclePolicies`` needs to be structured as an array of ``LifecyclePolicy`` objects, one object for each transition, ``TransitionToIA``, ``TransitionToArchive````TransitionToPrimaryStorageClass``. See the example requests in the following section for more information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#lifecycle_policies CcFileSystem#lifecycle_policies}
    */
    readonly lifecyclePolicies?: CcFileSystem.LifecyclePolicyProperty[] | cdktn.IResolvable;
    /**
    * The performance mode of the file system. We recommend ``generalPurpose`` performance mode for all file systems. File systems using the ``maxIO`` performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. The ``maxIO`` mode is not supported on One Zone file systems.
    *   Due to the higher per-operation latencies with Max I/O, we recommend using General Purpose performance mode for all file systems.
    *   Default is ``generalPurpose``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#performance_mode CcFileSystem#performance_mode}
    */
    readonly performanceMode?: string;
    /**
    * The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating. Required if ``ThroughputMode`` is set to ``provisioned``. Valid values are 1-3414 MiBps, with the upper limit depending on Region. To increase this limit, contact SUP. For more information, see [Amazon EFS quotas that you can increase](https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits) in the *Amazon EFS User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#provisioned_throughput_in_mibps CcFileSystem#provisioned_throughput_in_mibps}
    */
    readonly provisionedThroughputInMibps?: number;
    /**
    * Describes the replication configuration for a specific file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#replication_configuration CcFileSystem#replication_configuration}
    */
    readonly replicationConfiguration?: CcFileSystem.ReplicationConfigurationProperty;
    /**
    * Specifies the throughput mode for the file system. The mode can be ``bursting``, ``provisioned``, or ``elastic``. If you set ``ThroughputMode`` to ``provisioned``, you must also set a value for ``ProvisionedThroughputInMibps``. After you create the file system, you can decrease your file system's Provisioned throughput or change between the throughput modes, with certain time restrictions. For more information, see [Specifying throughput with provisioned mode](https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput) in the *Amazon EFS User Guide*. 
    *  Default is ``bursting``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#throughput_mode CcFileSystem#throughput_mode}
    */
    readonly throughputMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system awscc_efs_file_system}
*/
export class CcFileSystem extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_efs_file_system";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFileSystem resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFileSystem to import
    * @param importFromId The id of the existing CcFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFileSystem to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_efs_file_system", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system awscc_efs_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFileSystemProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcFileSystemProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_efs_file_system',
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
        this._availabilityZoneName = config.availabilityZoneName;
        this._backupPolicy.internalValue = config.backupPolicy;
        this._bypassPolicyLockoutSafetyCheck = config.bypassPolicyLockoutSafetyCheck;
        this._encrypted = config.encrypted;
        this._fileSystemPolicy = config.fileSystemPolicy;
        this._fileSystemProtection.internalValue = config.fileSystemProtection;
        this._fileSystemTags.internalValue = config.fileSystemTags;
        this._kmsKeyId = config.kmsKeyId;
        this._lifecyclePolicies.internalValue = config.lifecyclePolicies;
        this._performanceMode = config.performanceMode;
        this._provisionedThroughputInMibps = config.provisionedThroughputInMibps;
        this._replicationConfiguration.internalValue = config.replicationConfiguration;
        this._throughputMode = config.throughputMode;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // availability_zone_name - computed: true, optional: true, required: false
    private _availabilityZoneName?: string; 
    public get availabilityZoneName() {
        return this.getStringAttribute('availability_zone_name');
    }
    public set availabilityZoneName(value: string) {
        this._availabilityZoneName = value;
    }
    public resetAvailabilityZoneName() {
        this._availabilityZoneName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneNameInput() {
        return this._availabilityZoneName;
    }

    // backup_policy - computed: true, optional: true, required: false
    private _backupPolicy = new CcFileSystem.BackupPolicyPropertyOutputReference(this, "backup_policy");
    public get backupPolicy() {
        return this._backupPolicy;
    }
    public putBackupPolicy(value: CcFileSystem.BackupPolicyProperty) {
        this._backupPolicy.internalValue = value;
    }
    public resetBackupPolicy() {
        this._backupPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupPolicyInput() {
        return this._backupPolicy.internalValue;
    }

    // bypass_policy_lockout_safety_check - computed: true, optional: true, required: false
    private _bypassPolicyLockoutSafetyCheck?: boolean | cdktn.IResolvable; 
    public get bypassPolicyLockoutSafetyCheck() {
        return this.getBooleanAttribute('bypass_policy_lockout_safety_check');
    }
    public set bypassPolicyLockoutSafetyCheck(value: boolean | cdktn.IResolvable) {
        this._bypassPolicyLockoutSafetyCheck = value;
    }
    public resetBypassPolicyLockoutSafetyCheck() {
        this._bypassPolicyLockoutSafetyCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bypassPolicyLockoutSafetyCheckInput() {
        return this._bypassPolicyLockoutSafetyCheck;
    }

    // encrypted - computed: true, optional: true, required: false
    private _encrypted?: boolean | cdktn.IResolvable; 
    public get encrypted() {
        return this.getBooleanAttribute('encrypted');
    }
    public set encrypted(value: boolean | cdktn.IResolvable) {
        this._encrypted = value;
    }
    public resetEncrypted() {
        this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptedInput() {
        return this._encrypted;
    }

    // file_system_id - computed: true, optional: false, required: false
    public get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }

    // file_system_policy - computed: true, optional: true, required: false
    private _fileSystemPolicy?: string; 
    public get fileSystemPolicy() {
        return this.getStringAttribute('file_system_policy');
    }
    public set fileSystemPolicy(value: string) {
        this._fileSystemPolicy = value;
    }
    public resetFileSystemPolicy() {
        this._fileSystemPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemPolicyInput() {
        return this._fileSystemPolicy;
    }

    // file_system_protection - computed: true, optional: true, required: false
    private _fileSystemProtection = new CcFileSystem.FileSystemProtectionPropertyOutputReference(this, "file_system_protection");
    public get fileSystemProtection() {
        return this._fileSystemProtection;
    }
    public putFileSystemProtection(value: CcFileSystem.FileSystemProtectionProperty) {
        this._fileSystemProtection.internalValue = value;
    }
    public resetFileSystemProtection() {
        this._fileSystemProtection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemProtectionInput() {
        return this._fileSystemProtection.internalValue;
    }

    // file_system_tags - computed: true, optional: true, required: false
    private _fileSystemTags = new CcFileSystem.ElasticFileSystemTagPropertyList(this, "file_system_tags", false);
    public get fileSystemTags() {
        return this._fileSystemTags;
    }
    public putFileSystemTags(value: CcFileSystem.ElasticFileSystemTagProperty[] | cdktn.IResolvable) {
        this._fileSystemTags.internalValue = value;
    }
    public resetFileSystemTags() {
        this._fileSystemTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemTagsInput() {
        return this._fileSystemTags.internalValue;
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

    // lifecycle_policies - computed: true, optional: true, required: false
    private _lifecyclePolicies = new CcFileSystem.LifecyclePolicyPropertyList(this, "lifecycle_policies", false);
    public get lifecyclePolicies() {
        return this._lifecyclePolicies;
    }
    public putLifecyclePolicies(value: CcFileSystem.LifecyclePolicyProperty[] | cdktn.IResolvable) {
        this._lifecyclePolicies.internalValue = value;
    }
    public resetLifecyclePolicies() {
        this._lifecyclePolicies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecyclePoliciesInput() {
        return this._lifecyclePolicies.internalValue;
    }

    // performance_mode - computed: true, optional: true, required: false
    private _performanceMode?: string; 
    public get performanceMode() {
        return this.getStringAttribute('performance_mode');
    }
    public set performanceMode(value: string) {
        this._performanceMode = value;
    }
    public resetPerformanceMode() {
        this._performanceMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get performanceModeInput() {
        return this._performanceMode;
    }

    // provisioned_throughput_in_mibps - computed: true, optional: true, required: false
    private _provisionedThroughputInMibps?: number; 
    public get provisionedThroughputInMibps() {
        return this.getNumberAttribute('provisioned_throughput_in_mibps');
    }
    public set provisionedThroughputInMibps(value: number) {
        this._provisionedThroughputInMibps = value;
    }
    public resetProvisionedThroughputInMibps() {
        this._provisionedThroughputInMibps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedThroughputInMibpsInput() {
        return this._provisionedThroughputInMibps;
    }

    // replication_configuration - computed: true, optional: true, required: false
    private _replicationConfiguration = new CcFileSystem.ReplicationConfigurationPropertyOutputReference(this, "replication_configuration");
    public get replicationConfiguration() {
        return this._replicationConfiguration;
    }
    public putReplicationConfiguration(value: CcFileSystem.ReplicationConfigurationProperty) {
        this._replicationConfiguration.internalValue = value;
    }
    public resetReplicationConfiguration() {
        this._replicationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationConfigurationInput() {
        return this._replicationConfiguration.internalValue;
    }

    // throughput_mode - computed: true, optional: true, required: false
    private _throughputMode?: string; 
    public get throughputMode() {
        return this.getStringAttribute('throughput_mode');
    }
    public set throughputMode(value: string) {
        this._throughputMode = value;
    }
    public resetThroughputMode() {
        this._throughputMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throughputModeInput() {
        return this._throughputMode;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            availability_zone_name: cdktn.stringToTerraform(this._availabilityZoneName),
            backup_policy: ccFileSystemBackupPolicyPropertyToTerraform(this._backupPolicy.internalValue),
            bypass_policy_lockout_safety_check: cdktn.booleanToTerraform(this._bypassPolicyLockoutSafetyCheck),
            encrypted: cdktn.booleanToTerraform(this._encrypted),
            file_system_policy: cdktn.stringToTerraform(this._fileSystemPolicy),
            file_system_protection: ccFileSystemFileSystemProtectionPropertyToTerraform(this._fileSystemProtection.internalValue),
            file_system_tags: cdktn.listMapper(ccFileSystemElasticFileSystemTagPropertyToTerraform, false)(this._fileSystemTags.internalValue),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            lifecycle_policies: cdktn.listMapper(ccFileSystemLifecyclePolicyPropertyToTerraform, false)(this._lifecyclePolicies.internalValue),
            performance_mode: cdktn.stringToTerraform(this._performanceMode),
            provisioned_throughput_in_mibps: cdktn.numberToTerraform(this._provisionedThroughputInMibps),
            replication_configuration: ccFileSystemReplicationConfigurationPropertyToTerraform(this._replicationConfiguration.internalValue),
            throughput_mode: cdktn.stringToTerraform(this._throughputMode),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            availability_zone_name: {
                value: cdktn.stringToHclTerraform(this._availabilityZoneName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            backup_policy: {
                value: ccFileSystemBackupPolicyPropertyToHclTerraform(this._backupPolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFileSystem.BackupPolicyProperty",
            },
            bypass_policy_lockout_safety_check: {
                value: cdktn.booleanToHclTerraform(this._bypassPolicyLockoutSafetyCheck),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            encrypted: {
                value: cdktn.booleanToHclTerraform(this._encrypted),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            file_system_policy: {
                value: cdktn.stringToHclTerraform(this._fileSystemPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            file_system_protection: {
                value: ccFileSystemFileSystemProtectionPropertyToHclTerraform(this._fileSystemProtection.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFileSystem.FileSystemProtectionProperty",
            },
            file_system_tags: {
                value: cdktn.listMapperHcl(ccFileSystemElasticFileSystemTagPropertyToHclTerraform, false)(this._fileSystemTags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFileSystem.ElasticFileSystemTagPropertyList",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            lifecycle_policies: {
                value: cdktn.listMapperHcl(ccFileSystemLifecyclePolicyPropertyToHclTerraform, false)(this._lifecyclePolicies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFileSystem.LifecyclePolicyPropertyList",
            },
            performance_mode: {
                value: cdktn.stringToHclTerraform(this._performanceMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            provisioned_throughput_in_mibps: {
                value: cdktn.numberToHclTerraform(this._provisionedThroughputInMibps),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            replication_configuration: {
                value: ccFileSystemReplicationConfigurationPropertyToHclTerraform(this._replicationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFileSystem.ReplicationConfigurationProperty",
            },
            throughput_mode: {
                value: cdktn.stringToHclTerraform(this._throughputMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFileSystemBackupPolicyPropertyToTerraform(struct?: CcFileSystem.BackupPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccFileSystemBackupPolicyPropertyToHclTerraform(struct?: CcFileSystem.BackupPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccFileSystemFileSystemProtectionPropertyToTerraform(struct?: CcFileSystem.FileSystemProtectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        replication_overwrite_protection: cdktn.stringToTerraform(struct!.replicationOverwriteProtection),
    }
}


export function ccFileSystemFileSystemProtectionPropertyToHclTerraform(struct?: CcFileSystem.FileSystemProtectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        replication_overwrite_protection: {
            value: cdktn.stringToHclTerraform(struct!.replicationOverwriteProtection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFileSystemElasticFileSystemTagPropertyToTerraform(struct?: CcFileSystem.ElasticFileSystemTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFileSystemElasticFileSystemTagPropertyToHclTerraform(struct?: CcFileSystem.ElasticFileSystemTagProperty | cdktn.IResolvable): any {
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


export function ccFileSystemLifecyclePolicyPropertyToTerraform(struct?: CcFileSystem.LifecyclePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        transition_to_archive: cdktn.stringToTerraform(struct!.transitionToArchive),
        transition_to_ia: cdktn.stringToTerraform(struct!.transitionToIa),
        transition_to_primary_storage_class: cdktn.stringToTerraform(struct!.transitionToPrimaryStorageClass),
    }
}


export function ccFileSystemLifecyclePolicyPropertyToHclTerraform(struct?: CcFileSystem.LifecyclePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        transition_to_archive: {
            value: cdktn.stringToHclTerraform(struct!.transitionToArchive),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transition_to_ia: {
            value: cdktn.stringToHclTerraform(struct!.transitionToIa),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transition_to_primary_storage_class: {
            value: cdktn.stringToHclTerraform(struct!.transitionToPrimaryStorageClass),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFileSystemReplicationDestinationPropertyToTerraform(struct?: CcFileSystem.ReplicationDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_zone_name: cdktn.stringToTerraform(struct!.availabilityZoneName),
        file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        region: cdktn.stringToTerraform(struct!.region),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        status: cdktn.stringToTerraform(struct!.status),
        status_message: cdktn.stringToTerraform(struct!.statusMessage),
    }
}


export function ccFileSystemReplicationDestinationPropertyToHclTerraform(struct?: CcFileSystem.ReplicationDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        availability_zone_name: {
            value: cdktn.stringToHclTerraform(struct!.availabilityZoneName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_system_id: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
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
        status_message: {
            value: cdktn.stringToHclTerraform(struct!.statusMessage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFileSystemReplicationConfigurationPropertyToTerraform(struct?: CcFileSystem.ReplicationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destinations: cdktn.listMapper(ccFileSystemReplicationDestinationPropertyToTerraform, false)(struct!.destinations),
    }
}


export function ccFileSystemReplicationConfigurationPropertyToHclTerraform(struct?: CcFileSystem.ReplicationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destinations: {
            value: cdktn.listMapperHcl(ccFileSystemReplicationDestinationPropertyToHclTerraform, false)(struct!.destinations),
            isBlock: true,
            type: "list",
            storageClassType: "ReplicationDestinationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcFileSystem {
export interface BackupPolicyProperty {
    /**
    * Set the backup policy status for the file system.
    *   +  *ENABLED* - Turns automatic backups on for the file system. 
    *   +  *DISABLED* - Turns automatic backups off for the file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#status CcFileSystem#status}
    */
    readonly status?: string;
}
export class BackupPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BackupPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BackupPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._status = value.status;
        }
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
export interface FileSystemProtectionProperty {
    /**
    * The status of the file system's replication overwrite protection.
    *   +  ``ENABLED`` ? The file system cannot be used as the destination file system in a replication configuration. The file system is writeable. Replication overwrite protection is ``ENABLED`` by default. 
    *   +  ``DISABLED`` ? The file system can be used as the destination file system in a replication configuration. The file system is read-only and can only be modified by EFS replication.
    *   +  ``REPLICATING`` ? The file system is being used as the destination file system in a replication configuration. The file system is read-only and is modified only by EFS replication.
    *   
    *  If the replication configuration is deleted, the file system's replication overwrite protection is re-enabled, the file system becomes writeable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#replication_overwrite_protection CcFileSystem#replication_overwrite_protection}
    */
    readonly replicationOverwriteProtection?: string;
}
export class FileSystemProtectionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FileSystemProtectionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._replicationOverwriteProtection !== undefined) {
            hasAnyValues = true;
            internalValueResult.replicationOverwriteProtection = this._replicationOverwriteProtection;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FileSystemProtectionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._replicationOverwriteProtection = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._replicationOverwriteProtection = value.replicationOverwriteProtection;
        }
    }

    // replication_overwrite_protection - computed: true, optional: true, required: false
    private _replicationOverwriteProtection?: string; 
    public get replicationOverwriteProtection() {
        return this.getStringAttribute('replication_overwrite_protection');
    }
    public set replicationOverwriteProtection(value: string) {
        this._replicationOverwriteProtection = value;
    }
    public resetReplicationOverwriteProtection() {
        this._replicationOverwriteProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationOverwriteProtectionInput() {
        return this._replicationOverwriteProtection;
    }
}
export interface ElasticFileSystemTagProperty {
    /**
    * The tag key (String). The key can't start with ``aws:``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#key CcFileSystem#key}
    */
    readonly key?: string;
    /**
    * The value of the tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#value CcFileSystem#value}
    */
    readonly value?: string;
}
export class ElasticFileSystemTagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ElasticFileSystemTagProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ElasticFileSystemTagProperty | cdktn.IResolvable | undefined) {
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

export class ElasticFileSystemTagPropertyList extends cdktn.ComplexList {
    public internalValue? : ElasticFileSystemTagProperty[] | cdktn.IResolvable

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
    public get(index: number): ElasticFileSystemTagPropertyOutputReference {
        return new ElasticFileSystemTagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LifecyclePolicyProperty {
    /**
    * The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage. Metadata operations such as listing the contents of a directory don't count as file access events.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#transition_to_archive CcFileSystem#transition_to_archive}
    */
    readonly transitionToArchive?: string;
    /**
    * The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Infrequent Access (IA) storage. Metadata operations such as listing the contents of a directory don't count as file access events.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#transition_to_ia CcFileSystem#transition_to_ia}
    */
    readonly transitionToIa?: string;
    /**
    * Whether to move files back to primary (Standard) storage after they are accessed in IA or Archive storage. Metadata operations such as listing the contents of a directory don't count as file access events.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#transition_to_primary_storage_class CcFileSystem#transition_to_primary_storage_class}
    */
    readonly transitionToPrimaryStorageClass?: string;
}
export class LifecyclePolicyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LifecyclePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._transitionToArchive !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitionToArchive = this._transitionToArchive;
        }
        if (this._transitionToIa !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitionToIa = this._transitionToIa;
        }
        if (this._transitionToPrimaryStorageClass !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitionToPrimaryStorageClass = this._transitionToPrimaryStorageClass;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LifecyclePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._transitionToArchive = undefined;
            this._transitionToIa = undefined;
            this._transitionToPrimaryStorageClass = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._transitionToArchive = value.transitionToArchive;
            this._transitionToIa = value.transitionToIa;
            this._transitionToPrimaryStorageClass = value.transitionToPrimaryStorageClass;
        }
    }

    // transition_to_archive - computed: true, optional: true, required: false
    private _transitionToArchive?: string; 
    public get transitionToArchive() {
        return this.getStringAttribute('transition_to_archive');
    }
    public set transitionToArchive(value: string) {
        this._transitionToArchive = value;
    }
    public resetTransitionToArchive() {
        this._transitionToArchive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitionToArchiveInput() {
        return this._transitionToArchive;
    }

    // transition_to_ia - computed: true, optional: true, required: false
    private _transitionToIa?: string; 
    public get transitionToIa() {
        return this.getStringAttribute('transition_to_ia');
    }
    public set transitionToIa(value: string) {
        this._transitionToIa = value;
    }
    public resetTransitionToIa() {
        this._transitionToIa = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitionToIaInput() {
        return this._transitionToIa;
    }

    // transition_to_primary_storage_class - computed: true, optional: true, required: false
    private _transitionToPrimaryStorageClass?: string; 
    public get transitionToPrimaryStorageClass() {
        return this.getStringAttribute('transition_to_primary_storage_class');
    }
    public set transitionToPrimaryStorageClass(value: string) {
        this._transitionToPrimaryStorageClass = value;
    }
    public resetTransitionToPrimaryStorageClass() {
        this._transitionToPrimaryStorageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitionToPrimaryStorageClassInput() {
        return this._transitionToPrimaryStorageClass;
    }
}

export class LifecyclePolicyPropertyList extends cdktn.ComplexList {
    public internalValue? : LifecyclePolicyProperty[] | cdktn.IResolvable

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
    public get(index: number): LifecyclePolicyPropertyOutputReference {
        return new LifecyclePolicyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ReplicationDestinationProperty {
    /**
    * For One Zone file systems, the replication configuration must specify the Availability Zone in which the destination file system is located. 
    *  Use the format ``us-east-1a`` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html) in the *Amazon EFS User Guide*.
    *   One Zone file system type is not available in all Availability Zones in AWS-Regions where Amazon EFS is available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#availability_zone_name CcFileSystem#availability_zone_name}
    */
    readonly availabilityZoneName?: string;
    /**
    * The ID of the destination Amazon EFS file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#file_system_id CcFileSystem#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * The ID of an kms-key-long used to protect the encrypted file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#kms_key_id CcFileSystem#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The AWS-Region in which the destination file system is located.
    *   For One Zone file systems, the replication configuration must specify the AWS-Region in which the destination file system is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#region CcFileSystem#region}
    */
    readonly region?: string;
    /**
    * The Amazon Resource Name (ARN) of the current source file system in the replication configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#role_arn CcFileSystem#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Describes the status of the replication configuration. For more information about replication status, see [Viewing replication details](https://docs.aws.amazon.com//efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html) in the *Amazon EFS User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#status CcFileSystem#status}
    */
    readonly status?: string;
    /**
    * Message that provides details about the ``PAUSED`` or ``ERRROR`` state of the replication destination configuration. For more information about replication status messages, see [Viewing replication details](https://docs.aws.amazon.com//efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html) in the *Amazon EFS User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#status_message CcFileSystem#status_message}
    */
    readonly statusMessage?: string;
}
export class ReplicationDestinationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ReplicationDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityZoneName !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZoneName = this._availabilityZoneName;
        }
        if (this._fileSystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._statusMessage !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusMessage = this._statusMessage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicationDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZoneName = undefined;
            this._fileSystemId = undefined;
            this._kmsKeyId = undefined;
            this._region = undefined;
            this._roleArn = undefined;
            this._status = undefined;
            this._statusMessage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityZoneName = value.availabilityZoneName;
            this._fileSystemId = value.fileSystemId;
            this._kmsKeyId = value.kmsKeyId;
            this._region = value.region;
            this._roleArn = value.roleArn;
            this._status = value.status;
            this._statusMessage = value.statusMessage;
        }
    }

    // availability_zone_name - computed: true, optional: true, required: false
    private _availabilityZoneName?: string; 
    public get availabilityZoneName() {
        return this.getStringAttribute('availability_zone_name');
    }
    public set availabilityZoneName(value: string) {
        this._availabilityZoneName = value;
    }
    public resetAvailabilityZoneName() {
        this._availabilityZoneName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneNameInput() {
        return this._availabilityZoneName;
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

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
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

    // status_message - computed: true, optional: true, required: false
    private _statusMessage?: string; 
    public get statusMessage() {
        return this.getStringAttribute('status_message');
    }
    public set statusMessage(value: string) {
        this._statusMessage = value;
    }
    public resetStatusMessage() {
        this._statusMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusMessageInput() {
        return this._statusMessage;
    }
}

export class ReplicationDestinationPropertyList extends cdktn.ComplexList {
    public internalValue? : ReplicationDestinationProperty[] | cdktn.IResolvable

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
    public get(index: number): ReplicationDestinationPropertyOutputReference {
        return new ReplicationDestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ReplicationConfigurationProperty {
    /**
    * An array of destination objects. Only one destination object is supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/efs_file_system#destinations CcFileSystem#destinations}
    */
    readonly destinations?: ReplicationDestinationProperty[] | cdktn.IResolvable;
}
export class ReplicationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinations = this._destinations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinations.internalValue = value.destinations;
        }
    }

    // destinations - computed: true, optional: true, required: false
    private _destinations = new ReplicationDestinationPropertyList(this, "destinations", false);
    public get destinations() {
        return this._destinations;
    }
    public putDestinations(value: ReplicationDestinationProperty[] | cdktn.IResolvable) {
        this._destinations.internalValue = value;
    }
    public resetDestinations() {
        this._destinations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationsInput() {
        return this._destinations.internalValue;
    }
}
}
