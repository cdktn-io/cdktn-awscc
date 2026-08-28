// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCustomDBEngineVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version#database_installation_files CcCustomDBEngineVersion#database_installation_files}
    */
    readonly databaseInstallationFiles?: string[];
    /**
    * The name of an Amazon S3 bucket that contains database installation files for your CEV. For example, a valid bucket name is ``my-custom-installation-files``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_bucket_name CcCustomDBEngineVersion#database_installation_files_s3_bucket_name}
    */
    readonly databaseInstallationFilesS3BucketName?: string;
    /**
    * The Amazon S3 directory that contains the database installation files for your CEV. For example, a valid bucket name is ``123456789012/cev1``. If this setting isn't specified, no prefix is assumed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_prefix CcCustomDBEngineVersion#database_installation_files_s3_prefix}
    */
    readonly databaseInstallationFilesS3Prefix?: string;
    /**
    * An optional description of your CEV.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version#description CcCustomDBEngineVersion#description}
    */
    readonly description?: string;
    /**
    * The database engine to use for your custom engine version (CEV).
    *  Valid values:
    *   +   ``custom-oracle-ee`` 
    *   +   ``custom-oracle-ee-cdb`` 
    *   +   ``sqlserver-dev-ee`` 
    *   +   ``sqlserver-ee`` 
    *   +   ``sqlserver-se``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version#engine CcCustomDBEngineVersion#engine}
    */
    readonly engine: string;
    /**
    * The name of your CEV. The name format is ``major version.customized_string``. For example, a valid CEV name is ``19.my_cev1``. This setting is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of ``Engine`` and ``EngineVersion`` is unique per customer per Region.
    *  *Constraints:* Minimum length is 1. Maximum length is 60.
    *  *Pattern:*``^[a-z0-9_.-]{1,60$``}
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version#engine_version CcCustomDBEngineVersion#engine_version}
    */
    readonly engineVersion: string;
    /**
    * A value that indicates the ID of the AMI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version#image_id CcCustomDBEngineVersion#image_id}
    */
    readonly imageId?: string;
    /**
    * The AWS KMS key identifier for an encrypted CEV. A symmetric encryption KMS key is required for RDS Custom, but optional for Amazon RDS.
    *  If you have an existing symmetric encryption KMS key in your account, you can use it with RDS Custom. No further action is necessary. If you don't already have a symmetric encryption KMS key in your account, follow the instructions in [Creating a symmetric encryption KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html#create-symmetric-cmk) in the *Key Management Service Developer Guide*.
    *  You can choose the same symmetric encryption key when you create a CEV and a DB instance, or choose different keys.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version#kms_key_id CcCustomDBEngineVersion#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.
    *  The following JSON fields are valid:
    *   + MediaImportTemplateVersion Version of the CEV manifest. The date is in the format YYYY-MM-DD. + databaseInstallationFileNames Ordered list of installation files for the CEV. + opatchFileNames Ordered list of OPatch installers used for the Oracle DB engine. + psuRuPatchFileNames The PSU and RU patches for this CEV. + OtherPatchFileNames The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches. 
    *  For more information, see [Creating the CEV manifest](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.preparing.manifest) in the *Amazon RDS User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version#manifest CcCustomDBEngineVersion#manifest}
    */
    readonly manifest?: string;
    /**
    * The ARN of a CEV to use as a source for creating a new CEV. You can specify a different Amazon Machine Imagine (AMI) by using either ``Source`` or ``UseAwsProvidedLatestImage``. You can't specify a different JSON manifest when you specify ``SourceCustomDbEngineVersionIdentifier``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version#source_custom_db_engine_version_identifier CcCustomDBEngineVersion#source_custom_db_engine_version_identifier}
    */
    readonly sourceCustomDbEngineVersionIdentifier?: string;
    /**
    * A value that indicates the status of a custom engine version (CEV).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version#status CcCustomDBEngineVersion#status}
    */
    readonly status?: string;
    /**
    * A list of tags. For more information, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide.*
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version#tags CcCustomDBEngineVersion#tags}
    */
    readonly tags?: CcCustomDBEngineVersion.TagProperty[] | cdktn.IResolvable;
    /**
    * Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV. If you specify ``UseAwsProvidedLatestImage``, you can't also specify ``ImageId``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version#use_aws_provided_latest_image CcCustomDBEngineVersion#use_aws_provided_latest_image}
    */
    readonly useAwsProvidedLatestImage?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version awscc_rds_custom_db_engine_version}
*/
export class CcCustomDBEngineVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_rds_custom_db_engine_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCustomDBEngineVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCustomDBEngineVersion to import
    * @param importFromId The id of the existing CcCustomDBEngineVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCustomDBEngineVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rds_custom_db_engine_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version awscc_rds_custom_db_engine_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCustomDBEngineVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcCustomDBEngineVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_rds_custom_db_engine_version',
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
        this._databaseInstallationFiles = config.databaseInstallationFiles;
        this._databaseInstallationFilesS3BucketName = config.databaseInstallationFilesS3BucketName;
        this._databaseInstallationFilesS3Prefix = config.databaseInstallationFilesS3Prefix;
        this._description = config.description;
        this._engine = config.engine;
        this._engineVersion = config.engineVersion;
        this._imageId = config.imageId;
        this._kmsKeyId = config.kmsKeyId;
        this._manifest = config.manifest;
        this._sourceCustomDbEngineVersionIdentifier = config.sourceCustomDbEngineVersionIdentifier;
        this._status = config.status;
        this._tags.internalValue = config.tags;
        this._useAwsProvidedLatestImage = config.useAwsProvidedLatestImage;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // database_installation_files - computed: true, optional: true, required: false
    private _databaseInstallationFiles?: string[]; 
    public get databaseInstallationFiles() {
        return this.getListAttribute('database_installation_files');
    }
    public set databaseInstallationFiles(value: string[]) {
        this._databaseInstallationFiles = value;
    }
    public resetDatabaseInstallationFiles() {
        this._databaseInstallationFiles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInstallationFilesInput() {
        return this._databaseInstallationFiles;
    }

    // database_installation_files_s3_bucket_name - computed: true, optional: true, required: false
    private _databaseInstallationFilesS3BucketName?: string; 
    public get databaseInstallationFilesS3BucketName() {
        return this.getStringAttribute('database_installation_files_s3_bucket_name');
    }
    public set databaseInstallationFilesS3BucketName(value: string) {
        this._databaseInstallationFilesS3BucketName = value;
    }
    public resetDatabaseInstallationFilesS3BucketName() {
        this._databaseInstallationFilesS3BucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInstallationFilesS3BucketNameInput() {
        return this._databaseInstallationFilesS3BucketName;
    }

    // database_installation_files_s3_prefix - computed: true, optional: true, required: false
    private _databaseInstallationFilesS3Prefix?: string; 
    public get databaseInstallationFilesS3Prefix() {
        return this.getStringAttribute('database_installation_files_s3_prefix');
    }
    public set databaseInstallationFilesS3Prefix(value: string) {
        this._databaseInstallationFilesS3Prefix = value;
    }
    public resetDatabaseInstallationFilesS3Prefix() {
        this._databaseInstallationFilesS3Prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInstallationFilesS3PrefixInput() {
        return this._databaseInstallationFilesS3Prefix;
    }

    // db_engine_version_arn - computed: true, optional: false, required: false
    public get dbEngineVersionArn() {
        return this.getStringAttribute('db_engine_version_arn');
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // engine - computed: false, optional: false, required: true
    private _engine?: string; 
    public get engine() {
        return this.getStringAttribute('engine');
    }
    public set engine(value: string) {
        this._engine = value;
    }
    // Temporarily expose input value. Use with caution.
    public get engineInput() {
        return this._engine;
    }

    // engine_version - computed: false, optional: false, required: true
    private _engineVersion?: string; 
    public get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    public set engineVersion(value: string) {
        this._engineVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get engineVersionInput() {
        return this._engineVersion;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // image_id - computed: true, optional: true, required: false
    private _imageId?: string; 
    public get imageId() {
        return this.getStringAttribute('image_id');
    }
    public set imageId(value: string) {
        this._imageId = value;
    }
    public resetImageId() {
        this._imageId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageIdInput() {
        return this._imageId;
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

    // manifest - computed: true, optional: true, required: false
    private _manifest?: string; 
    public get manifest() {
        return this.getStringAttribute('manifest');
    }
    public set manifest(value: string) {
        this._manifest = value;
    }
    public resetManifest() {
        this._manifest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestInput() {
        return this._manifest;
    }

    // source_custom_db_engine_version_identifier - computed: true, optional: true, required: false
    private _sourceCustomDbEngineVersionIdentifier?: string; 
    public get sourceCustomDbEngineVersionIdentifier() {
        return this.getStringAttribute('source_custom_db_engine_version_identifier');
    }
    public set sourceCustomDbEngineVersionIdentifier(value: string) {
        this._sourceCustomDbEngineVersionIdentifier = value;
    }
    public resetSourceCustomDbEngineVersionIdentifier() {
        this._sourceCustomDbEngineVersionIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceCustomDbEngineVersionIdentifierInput() {
        return this._sourceCustomDbEngineVersionIdentifier;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCustomDBEngineVersion.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCustomDBEngineVersion.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // use_aws_provided_latest_image - computed: true, optional: true, required: false
    private _useAwsProvidedLatestImage?: boolean | cdktn.IResolvable; 
    public get useAwsProvidedLatestImage() {
        return this.getBooleanAttribute('use_aws_provided_latest_image');
    }
    public set useAwsProvidedLatestImage(value: boolean | cdktn.IResolvable) {
        this._useAwsProvidedLatestImage = value;
    }
    public resetUseAwsProvidedLatestImage() {
        this._useAwsProvidedLatestImage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useAwsProvidedLatestImageInput() {
        return this._useAwsProvidedLatestImage;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            database_installation_files: cdktn.listMapper(cdktn.stringToTerraform, false)(this._databaseInstallationFiles),
            database_installation_files_s3_bucket_name: cdktn.stringToTerraform(this._databaseInstallationFilesS3BucketName),
            database_installation_files_s3_prefix: cdktn.stringToTerraform(this._databaseInstallationFilesS3Prefix),
            description: cdktn.stringToTerraform(this._description),
            engine: cdktn.stringToTerraform(this._engine),
            engine_version: cdktn.stringToTerraform(this._engineVersion),
            image_id: cdktn.stringToTerraform(this._imageId),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            manifest: cdktn.stringToTerraform(this._manifest),
            source_custom_db_engine_version_identifier: cdktn.stringToTerraform(this._sourceCustomDbEngineVersionIdentifier),
            status: cdktn.stringToTerraform(this._status),
            tags: cdktn.listMapper(ccCustomDBEngineVersionTagPropertyToTerraform, false)(this._tags.internalValue),
            use_aws_provided_latest_image: cdktn.booleanToTerraform(this._useAwsProvidedLatestImage),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            database_installation_files: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._databaseInstallationFiles),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            database_installation_files_s3_bucket_name: {
                value: cdktn.stringToHclTerraform(this._databaseInstallationFilesS3BucketName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            database_installation_files_s3_prefix: {
                value: cdktn.stringToHclTerraform(this._databaseInstallationFilesS3Prefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine: {
                value: cdktn.stringToHclTerraform(this._engine),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine_version: {
                value: cdktn.stringToHclTerraform(this._engineVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            image_id: {
                value: cdktn.stringToHclTerraform(this._imageId),
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
            manifest: {
                value: cdktn.stringToHclTerraform(this._manifest),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_custom_db_engine_version_identifier: {
                value: cdktn.stringToHclTerraform(this._sourceCustomDbEngineVersionIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCustomDBEngineVersionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCustomDBEngineVersion.TagPropertyList",
            },
            use_aws_provided_latest_image: {
                value: cdktn.booleanToHclTerraform(this._useAwsProvidedLatestImage),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCustomDBEngineVersionTagPropertyToTerraform(struct?: CcCustomDBEngineVersion.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCustomDBEngineVersionTagPropertyToHclTerraform(struct?: CcCustomDBEngineVersion.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCustomDBEngineVersion {
export interface TagProperty {
    /**
    * A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version#key CcCustomDBEngineVersion#key}
    */
    readonly key?: string;
    /**
    * A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_custom_db_engine_version#value CcCustomDBEngineVersion#value}
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
