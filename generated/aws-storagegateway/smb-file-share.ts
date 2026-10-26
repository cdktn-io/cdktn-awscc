// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSmbFileShareProps extends cdktn.TerraformMetaArguments {
    /**
    * Whether clients see only the files and folders they may access.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#access_based_enumeration CcSmbFileShare#access_based_enumeration}
    */
    readonly accessBasedEnumeration?: boolean | cdktn.IResolvable;
    /**
    * Users and groups granted administrative privileges on the SMB share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#admin_user_list CcSmbFileShare#admin_user_list}
    */
    readonly adminUserList?: string[];
    /**
    * The ARN of the CloudWatch log group that receives the share's audit logs. Removing this property from a template detaches audit logging: the update sends the empty string, which the service treats as the reset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#audit_destination_arn CcSmbFileShare#audit_destination_arn}
    */
    readonly auditDestinationArn?: string;
    /**
    * The authentication the SMB share uses. The service accepts ActiveDirectory and GuestAccess; it is a length-bounded string in the API model rather than an enumeration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#authentication CcSmbFileShare#authentication}
    */
    readonly authentication?: string;
    /**
    * The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#bucket_region CcSmbFileShare#bucket_region}
    */
    readonly bucketRegion?: string;
    /**
    * Refresh cache information for the file share. Removing this property from a template leaves the share's current value: the service documents no value that resets it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#cache_attributes CcSmbFileShare#cache_attributes}
    */
    readonly cacheAttributes?: CcSmbFileShare.CacheAttributesProperty;
    /**
    * Whether the SMB share is case sensitive or defers to the client.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#case_sensitivity CcSmbFileShare#case_sensitivity}
    */
    readonly caseSensitivity?: string;
    /**
    * The S3 storage class for new objects. The service accepts S3_STANDARD, S3_INTELLIGENT_TIERING, S3_STANDARD_IA and S3_ONEZONE_IA; it is a length-bounded string in the API model rather than an enumeration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#default_storage_class CcSmbFileShare#default_storage_class}
    */
    readonly defaultStorageClass?: string;
    /**
    * The server-side encryption the gateway applies to objects it writes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#encryption_type CcSmbFileShare#encryption_type}
    */
    readonly encryptionType?: string;
    /**
    * The name of the file share, which defaults to the bucket name when omitted. Removing this property from a template leaves the share's current value: the service documents no value that resets it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#file_share_name CcSmbFileShare#file_share_name}
    */
    readonly fileShareName?: string;
    /**
    * The ARN of the S3 File Gateway that hosts the share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#gateway_arn CcSmbFileShare#gateway_arn}
    */
    readonly gatewayArn: string;
    /**
    * Whether the gateway infers the MIME type of uploaded objects from their extension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#guess_mime_type_enabled CcSmbFileShare#guess_mime_type_enabled}
    */
    readonly guessMimeTypeEnabled?: boolean | cdktn.IResolvable;
    /**
    * Users and groups denied access to the SMB share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#invalid_user_list CcSmbFileShare#invalid_user_list}
    */
    readonly invalidUserList?: string[];
    /**
    * Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#kms_encrypted CcSmbFileShare#kms_encrypted}
    */
    readonly kmsEncrypted?: boolean | cdktn.IResolvable;
    /**
    * The KMS key used for encryption, when EncryptionType selects KMS. Removing this property from a template leaves the share's current value: the service documents no value that resets it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#kms_key CcSmbFileShare#kms_key}
    */
    readonly kmsKey?: string;
    /**
    * The ARN of the S3 bucket, or bucket prefix, the share exposes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#location_arn CcSmbFileShare#location_arn}
    */
    readonly locationArn: string;
    /**
    * The upload-notification settling period, as a JSON document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#notification_policy CcSmbFileShare#notification_policy}
    */
    readonly notificationPolicy?: string;
    /**
    * The canned S3 ACL applied to objects the gateway writes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#object_acl CcSmbFileShare#object_acl}
    */
    readonly objectAcl?: string;
    /**
    * Whether the SMB share grants opportunistic locks. Removing this property from a template leaves the live value unchanged rather than restoring the created default, because that default depends on the gateway's software version -- opportunistic locking is enabled by default only on appliances at 1.19.0.0 or above -- and the version is not part of this resource. Set the value explicitly rather than relying on removal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#oplocks_enabled CcSmbFileShare#oplocks_enabled}
    */
    readonly oplocksEnabled?: boolean | cdktn.IResolvable;
    /**
    * Whether clients may write to the share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#read_only CcSmbFileShare#read_only}
    */
    readonly readOnly?: boolean | cdktn.IResolvable;
    /**
    * Whether the bucket is a Requester Pays bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#requester_pays CcSmbFileShare#requester_pays}
    */
    readonly requesterPays?: boolean | cdktn.IResolvable;
    /**
    * The ARN of the IAM role the gateway assumes when it accesses the S3 location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#role CcSmbFileShare#role}
    */
    readonly role: string;
    /**
    * Whether the SMB share uses Windows ACLs rather than POSIX permissions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#smbacl_enabled CcSmbFileShare#smbacl_enabled}
    */
    readonly smbaclEnabled?: boolean | cdktn.IResolvable;
    /**
    * Tags assigned to the file share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#tags CcSmbFileShare#tags}
    */
    readonly tags?: CcSmbFileShare.TagsProperty[] | cdktn.IResolvable;
    /**
    * Users and groups permitted to access the SMB share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#valid_user_list CcSmbFileShare#valid_user_list}
    */
    readonly validUserList?: string[];
    /**
    * The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#vpc_endpoint_dns_name CcSmbFileShare#vpc_endpoint_dns_name}
    */
    readonly vpcEndpointDnsName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share awscc_storagegateway_smb_file_share}
*/
export class CcSmbFileShare extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_storagegateway_smb_file_share";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSmbFileShare resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSmbFileShare to import
    * @param importFromId The id of the existing CcSmbFileShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSmbFileShare to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_storagegateway_smb_file_share", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share awscc_storagegateway_smb_file_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSmbFileShareProps
    */
    public constructor(scope: Construct, id: string, config: CcSmbFileShareProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_storagegateway_smb_file_share',
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
        this._accessBasedEnumeration = config.accessBasedEnumeration;
        this._adminUserList = config.adminUserList;
        this._auditDestinationArn = config.auditDestinationArn;
        this._authentication = config.authentication;
        this._bucketRegion = config.bucketRegion;
        this._cacheAttributes.internalValue = config.cacheAttributes;
        this._caseSensitivity = config.caseSensitivity;
        this._defaultStorageClass = config.defaultStorageClass;
        this._encryptionType = config.encryptionType;
        this._fileShareName = config.fileShareName;
        this._gatewayArn = config.gatewayArn;
        this._guessMimeTypeEnabled = config.guessMimeTypeEnabled;
        this._invalidUserList = config.invalidUserList;
        this._kmsEncrypted = config.kmsEncrypted;
        this._kmsKey = config.kmsKey;
        this._locationArn = config.locationArn;
        this._notificationPolicy = config.notificationPolicy;
        this._objectAcl = config.objectAcl;
        this._oplocksEnabled = config.oplocksEnabled;
        this._readOnly = config.readOnly;
        this._requesterPays = config.requesterPays;
        this._role = config.role;
        this._smbaclEnabled = config.smbaclEnabled;
        this._tags.internalValue = config.tags;
        this._validUserList = config.validUserList;
        this._vpcEndpointDnsName = config.vpcEndpointDnsName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_based_enumeration - computed: true, optional: true, required: false
    private _accessBasedEnumeration?: boolean | cdktn.IResolvable; 
    public get accessBasedEnumeration() {
        return this.getBooleanAttribute('access_based_enumeration');
    }
    public set accessBasedEnumeration(value: boolean | cdktn.IResolvable) {
        this._accessBasedEnumeration = value;
    }
    public resetAccessBasedEnumeration() {
        this._accessBasedEnumeration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessBasedEnumerationInput() {
        return this._accessBasedEnumeration;
    }

    // admin_user_list - computed: true, optional: true, required: false
    private _adminUserList?: string[]; 
    public get adminUserList() {
        return cdktn.Fn.tolist(this.getListAttribute('admin_user_list'));
    }
    public set adminUserList(value: string[]) {
        this._adminUserList = value;
    }
    public resetAdminUserList() {
        this._adminUserList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adminUserListInput() {
        return this._adminUserList;
    }

    // audit_destination_arn - computed: true, optional: true, required: false
    private _auditDestinationArn?: string; 
    public get auditDestinationArn() {
        return this.getStringAttribute('audit_destination_arn');
    }
    public set auditDestinationArn(value: string) {
        this._auditDestinationArn = value;
    }
    public resetAuditDestinationArn() {
        this._auditDestinationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get auditDestinationArnInput() {
        return this._auditDestinationArn;
    }

    // authentication - computed: true, optional: true, required: false
    private _authentication?: string; 
    public get authentication() {
        return this.getStringAttribute('authentication');
    }
    public set authentication(value: string) {
        this._authentication = value;
    }
    public resetAuthentication() {
        this._authentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationInput() {
        return this._authentication;
    }

    // bucket_region - computed: true, optional: true, required: false
    private _bucketRegion?: string; 
    public get bucketRegion() {
        return this.getStringAttribute('bucket_region');
    }
    public set bucketRegion(value: string) {
        this._bucketRegion = value;
    }
    public resetBucketRegion() {
        this._bucketRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketRegionInput() {
        return this._bucketRegion;
    }

    // cache_attributes - computed: true, optional: true, required: false
    private _cacheAttributes = new CcSmbFileShare.CacheAttributesPropertyOutputReference(this, "cache_attributes");
    public get cacheAttributes() {
        return this._cacheAttributes;
    }
    public putCacheAttributes(value: CcSmbFileShare.CacheAttributesProperty) {
        this._cacheAttributes.internalValue = value;
    }
    public resetCacheAttributes() {
        this._cacheAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheAttributesInput() {
        return this._cacheAttributes.internalValue;
    }

    // case_sensitivity - computed: true, optional: true, required: false
    private _caseSensitivity?: string; 
    public get caseSensitivity() {
        return this.getStringAttribute('case_sensitivity');
    }
    public set caseSensitivity(value: string) {
        this._caseSensitivity = value;
    }
    public resetCaseSensitivity() {
        this._caseSensitivity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caseSensitivityInput() {
        return this._caseSensitivity;
    }

    // default_storage_class - computed: true, optional: true, required: false
    private _defaultStorageClass?: string; 
    public get defaultStorageClass() {
        return this.getStringAttribute('default_storage_class');
    }
    public set defaultStorageClass(value: string) {
        this._defaultStorageClass = value;
    }
    public resetDefaultStorageClass() {
        this._defaultStorageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultStorageClassInput() {
        return this._defaultStorageClass;
    }

    // encryption_type - computed: true, optional: true, required: false
    private _encryptionType?: string; 
    public get encryptionType() {
        return this.getStringAttribute('encryption_type');
    }
    public set encryptionType(value: string) {
        this._encryptionType = value;
    }
    public resetEncryptionType() {
        this._encryptionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionTypeInput() {
        return this._encryptionType;
    }

    // file_share_arn - computed: true, optional: false, required: false
    public get fileShareArn() {
        return this.getStringAttribute('file_share_arn');
    }

    // file_share_id - computed: true, optional: false, required: false
    public get fileShareId() {
        return this.getStringAttribute('file_share_id');
    }

    // file_share_name - computed: true, optional: true, required: false
    private _fileShareName?: string; 
    public get fileShareName() {
        return this.getStringAttribute('file_share_name');
    }
    public set fileShareName(value: string) {
        this._fileShareName = value;
    }
    public resetFileShareName() {
        this._fileShareName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileShareNameInput() {
        return this._fileShareName;
    }

    // file_share_status - computed: true, optional: false, required: false
    public get fileShareStatus() {
        return this.getStringAttribute('file_share_status');
    }

    // gateway_arn - computed: false, optional: false, required: true
    private _gatewayArn?: string; 
    public get gatewayArn() {
        return this.getStringAttribute('gateway_arn');
    }
    public set gatewayArn(value: string) {
        this._gatewayArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayArnInput() {
        return this._gatewayArn;
    }

    // guess_mime_type_enabled - computed: true, optional: true, required: false
    private _guessMimeTypeEnabled?: boolean | cdktn.IResolvable; 
    public get guessMimeTypeEnabled() {
        return this.getBooleanAttribute('guess_mime_type_enabled');
    }
    public set guessMimeTypeEnabled(value: boolean | cdktn.IResolvable) {
        this._guessMimeTypeEnabled = value;
    }
    public resetGuessMimeTypeEnabled() {
        this._guessMimeTypeEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get guessMimeTypeEnabledInput() {
        return this._guessMimeTypeEnabled;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // invalid_user_list - computed: true, optional: true, required: false
    private _invalidUserList?: string[]; 
    public get invalidUserList() {
        return cdktn.Fn.tolist(this.getListAttribute('invalid_user_list'));
    }
    public set invalidUserList(value: string[]) {
        this._invalidUserList = value;
    }
    public resetInvalidUserList() {
        this._invalidUserList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invalidUserListInput() {
        return this._invalidUserList;
    }

    // kms_encrypted - computed: true, optional: true, required: false
    private _kmsEncrypted?: boolean | cdktn.IResolvable; 
    public get kmsEncrypted() {
        return this.getBooleanAttribute('kms_encrypted');
    }
    public set kmsEncrypted(value: boolean | cdktn.IResolvable) {
        this._kmsEncrypted = value;
    }
    public resetKmsEncrypted() {
        this._kmsEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsEncryptedInput() {
        return this._kmsEncrypted;
    }

    // kms_key - computed: true, optional: true, required: false
    private _kmsKey?: string; 
    public get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string) {
        this._kmsKey = value;
    }
    public resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
        return this._kmsKey;
    }

    // location_arn - computed: false, optional: false, required: true
    private _locationArn?: string; 
    public get locationArn() {
        return this.getStringAttribute('location_arn');
    }
    public set locationArn(value: string) {
        this._locationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get locationArnInput() {
        return this._locationArn;
    }

    // notification_policy - computed: true, optional: true, required: false
    private _notificationPolicy?: string; 
    public get notificationPolicy() {
        return this.getStringAttribute('notification_policy');
    }
    public set notificationPolicy(value: string) {
        this._notificationPolicy = value;
    }
    public resetNotificationPolicy() {
        this._notificationPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationPolicyInput() {
        return this._notificationPolicy;
    }

    // object_acl - computed: true, optional: true, required: false
    private _objectAcl?: string; 
    public get objectAcl() {
        return this.getStringAttribute('object_acl');
    }
    public set objectAcl(value: string) {
        this._objectAcl = value;
    }
    public resetObjectAcl() {
        this._objectAcl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectAclInput() {
        return this._objectAcl;
    }

    // oplocks_enabled - computed: true, optional: true, required: false
    private _oplocksEnabled?: boolean | cdktn.IResolvable; 
    public get oplocksEnabled() {
        return this.getBooleanAttribute('oplocks_enabled');
    }
    public set oplocksEnabled(value: boolean | cdktn.IResolvable) {
        this._oplocksEnabled = value;
    }
    public resetOplocksEnabled() {
        this._oplocksEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oplocksEnabledInput() {
        return this._oplocksEnabled;
    }

    // path - computed: true, optional: false, required: false
    public get path() {
        return this.getStringAttribute('path');
    }

    // read_only - computed: true, optional: true, required: false
    private _readOnly?: boolean | cdktn.IResolvable; 
    public get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    public set readOnly(value: boolean | cdktn.IResolvable) {
        this._readOnly = value;
    }
    public resetReadOnly() {
        this._readOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readOnlyInput() {
        return this._readOnly;
    }

    // requester_pays - computed: true, optional: true, required: false
    private _requesterPays?: boolean | cdktn.IResolvable; 
    public get requesterPays() {
        return this.getBooleanAttribute('requester_pays');
    }
    public set requesterPays(value: boolean | cdktn.IResolvable) {
        this._requesterPays = value;
    }
    public resetRequesterPays() {
        this._requesterPays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requesterPaysInput() {
        return this._requesterPays;
    }

    // role - computed: false, optional: false, required: true
    private _role?: string; 
    public get role() {
        return this.getStringAttribute('role');
    }
    public set role(value: string) {
        this._role = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
        return this._role;
    }

    // smbacl_enabled - computed: true, optional: true, required: false
    private _smbaclEnabled?: boolean | cdktn.IResolvable; 
    public get smbaclEnabled() {
        return this.getBooleanAttribute('smbacl_enabled');
    }
    public set smbaclEnabled(value: boolean | cdktn.IResolvable) {
        this._smbaclEnabled = value;
    }
    public resetSmbaclEnabled() {
        this._smbaclEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smbaclEnabledInput() {
        return this._smbaclEnabled;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSmbFileShare.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSmbFileShare.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // valid_user_list - computed: true, optional: true, required: false
    private _validUserList?: string[]; 
    public get validUserList() {
        return cdktn.Fn.tolist(this.getListAttribute('valid_user_list'));
    }
    public set validUserList(value: string[]) {
        this._validUserList = value;
    }
    public resetValidUserList() {
        this._validUserList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validUserListInput() {
        return this._validUserList;
    }

    // vpc_endpoint_dns_name - computed: true, optional: true, required: false
    private _vpcEndpointDnsName?: string; 
    public get vpcEndpointDnsName() {
        return this.getStringAttribute('vpc_endpoint_dns_name');
    }
    public set vpcEndpointDnsName(value: string) {
        this._vpcEndpointDnsName = value;
    }
    public resetVpcEndpointDnsName() {
        this._vpcEndpointDnsName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointDnsNameInput() {
        return this._vpcEndpointDnsName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            access_based_enumeration: cdktn.booleanToTerraform(this._accessBasedEnumeration),
            admin_user_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._adminUserList),
            audit_destination_arn: cdktn.stringToTerraform(this._auditDestinationArn),
            authentication: cdktn.stringToTerraform(this._authentication),
            bucket_region: cdktn.stringToTerraform(this._bucketRegion),
            cache_attributes: ccSmbFileShareCacheAttributesPropertyToTerraform(this._cacheAttributes.internalValue),
            case_sensitivity: cdktn.stringToTerraform(this._caseSensitivity),
            default_storage_class: cdktn.stringToTerraform(this._defaultStorageClass),
            encryption_type: cdktn.stringToTerraform(this._encryptionType),
            file_share_name: cdktn.stringToTerraform(this._fileShareName),
            gateway_arn: cdktn.stringToTerraform(this._gatewayArn),
            guess_mime_type_enabled: cdktn.booleanToTerraform(this._guessMimeTypeEnabled),
            invalid_user_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._invalidUserList),
            kms_encrypted: cdktn.booleanToTerraform(this._kmsEncrypted),
            kms_key: cdktn.stringToTerraform(this._kmsKey),
            location_arn: cdktn.stringToTerraform(this._locationArn),
            notification_policy: cdktn.stringToTerraform(this._notificationPolicy),
            object_acl: cdktn.stringToTerraform(this._objectAcl),
            oplocks_enabled: cdktn.booleanToTerraform(this._oplocksEnabled),
            read_only: cdktn.booleanToTerraform(this._readOnly),
            requester_pays: cdktn.booleanToTerraform(this._requesterPays),
            role: cdktn.stringToTerraform(this._role),
            smbacl_enabled: cdktn.booleanToTerraform(this._smbaclEnabled),
            tags: cdktn.listMapper(ccSmbFileShareTagsPropertyToTerraform, false)(this._tags.internalValue),
            valid_user_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._validUserList),
            vpc_endpoint_dns_name: cdktn.stringToTerraform(this._vpcEndpointDnsName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_based_enumeration: {
                value: cdktn.booleanToHclTerraform(this._accessBasedEnumeration),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            admin_user_list: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._adminUserList),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            audit_destination_arn: {
                value: cdktn.stringToHclTerraform(this._auditDestinationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            authentication: {
                value: cdktn.stringToHclTerraform(this._authentication),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bucket_region: {
                value: cdktn.stringToHclTerraform(this._bucketRegion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cache_attributes: {
                value: ccSmbFileShareCacheAttributesPropertyToHclTerraform(this._cacheAttributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSmbFileShare.CacheAttributesProperty",
            },
            case_sensitivity: {
                value: cdktn.stringToHclTerraform(this._caseSensitivity),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_storage_class: {
                value: cdktn.stringToHclTerraform(this._defaultStorageClass),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption_type: {
                value: cdktn.stringToHclTerraform(this._encryptionType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            file_share_name: {
                value: cdktn.stringToHclTerraform(this._fileShareName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gateway_arn: {
                value: cdktn.stringToHclTerraform(this._gatewayArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            guess_mime_type_enabled: {
                value: cdktn.booleanToHclTerraform(this._guessMimeTypeEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            invalid_user_list: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._invalidUserList),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            kms_encrypted: {
                value: cdktn.booleanToHclTerraform(this._kmsEncrypted),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            kms_key: {
                value: cdktn.stringToHclTerraform(this._kmsKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            location_arn: {
                value: cdktn.stringToHclTerraform(this._locationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notification_policy: {
                value: cdktn.stringToHclTerraform(this._notificationPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            object_acl: {
                value: cdktn.stringToHclTerraform(this._objectAcl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            oplocks_enabled: {
                value: cdktn.booleanToHclTerraform(this._oplocksEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            read_only: {
                value: cdktn.booleanToHclTerraform(this._readOnly),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            requester_pays: {
                value: cdktn.booleanToHclTerraform(this._requesterPays),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            role: {
                value: cdktn.stringToHclTerraform(this._role),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            smbacl_enabled: {
                value: cdktn.booleanToHclTerraform(this._smbaclEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSmbFileShareTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcSmbFileShare.TagsPropertyList",
            },
            valid_user_list: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._validUserList),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            vpc_endpoint_dns_name: {
                value: cdktn.stringToHclTerraform(this._vpcEndpointDnsName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSmbFileShareCacheAttributesPropertyToTerraform(struct?: CcSmbFileShare.CacheAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cache_stale_timeout_in_seconds: cdktn.numberToTerraform(struct!.cacheStaleTimeoutInSeconds),
    }
}


export function ccSmbFileShareCacheAttributesPropertyToHclTerraform(struct?: CcSmbFileShare.CacheAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cache_stale_timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.cacheStaleTimeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSmbFileShareTagsPropertyToTerraform(struct?: CcSmbFileShare.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSmbFileShareTagsPropertyToHclTerraform(struct?: CcSmbFileShare.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcSmbFileShare {
export interface CacheAttributesProperty {
    /**
    * How long the directory contents cached by the gateway are considered valid.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#cache_stale_timeout_in_seconds CcSmbFileShare#cache_stale_timeout_in_seconds}
    */
    readonly cacheStaleTimeoutInSeconds?: number;
}
export class CacheAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CacheAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cacheStaleTimeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheStaleTimeoutInSeconds = this._cacheStaleTimeoutInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CacheAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cacheStaleTimeoutInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cacheStaleTimeoutInSeconds = value.cacheStaleTimeoutInSeconds;
        }
    }

    // cache_stale_timeout_in_seconds - computed: true, optional: true, required: false
    private _cacheStaleTimeoutInSeconds?: number; 
    public get cacheStaleTimeoutInSeconds() {
        return this.getNumberAttribute('cache_stale_timeout_in_seconds');
    }
    public set cacheStaleTimeoutInSeconds(value: number) {
        this._cacheStaleTimeoutInSeconds = value;
    }
    public resetCacheStaleTimeoutInSeconds() {
        this._cacheStaleTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheStaleTimeoutInSecondsInput() {
        return this._cacheStaleTimeoutInSeconds;
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#key CcSmbFileShare#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#value CcSmbFileShare#value}
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
}
