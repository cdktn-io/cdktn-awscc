// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAccessPointProps extends cdktn.TerraformMetaArguments {
    /**
    * (optional) A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point#client_token CcAccessPoint#client_token}
    */
    readonly clientToken?: string;
    /**
    * The ID of the S3 Files file system that the access point provides access to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point#file_system_id CcAccessPoint#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * The operating system user and group applied to all compute drive requests made using the access point.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point#posix_user CcAccessPoint#posix_user}
    */
    readonly posixUser?: CcAccessPoint.PosixUserProperty;
    /**
    * Specifies the directory on the Amazon EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point. The clients using the access point can only access the root directory and below. If the RootDirectory>Path specified does not exist, EFS creates it and applies the CreationPermissions settings when a client connects to an access point. When specifying a RootDirectory, you need to provide the Path, and the CreationPermissions is optional.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point#root_directory CcAccessPoint#root_directory}
    */
    readonly rootDirectory?: CcAccessPoint.RootDirectoryProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point#tags CcAccessPoint#tags}
    */
    readonly tags?: CcAccessPoint.AccessPointTagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point awscc_s3files_access_point}
*/
export class CcAccessPoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_s3files_access_point";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAccessPoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAccessPoint to import
    * @param importFromId The id of the existing CcAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAccessPoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3files_access_point", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point awscc_s3files_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAccessPointProps
    */
    public constructor(scope: Construct, id: string, config: CcAccessPointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3files_access_point',
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
        this._clientToken = config.clientToken;
        this._fileSystemId = config.fileSystemId;
        this._posixUser.internalValue = config.posixUser;
        this._rootDirectory.internalValue = config.rootDirectory;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_point_arn - computed: true, optional: false, required: false
    public get accessPointArn() {
        return this.getStringAttribute('access_point_arn');
    }

    // access_point_id - computed: true, optional: false, required: false
    public get accessPointId() {
        return this.getStringAttribute('access_point_id');
    }

    // client_token - computed: true, optional: true, required: false
    private _clientToken?: string; 
    public get clientToken() {
        return this.getStringAttribute('client_token');
    }
    public set clientToken(value: string) {
        this._clientToken = value;
    }
    public resetClientToken() {
        this._clientToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientTokenInput() {
        return this._clientToken;
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

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
        return this.getStringAttribute('owner_id');
    }

    // posix_user - computed: true, optional: true, required: false
    private _posixUser = new CcAccessPoint.PosixUserPropertyOutputReference(this, "posix_user");
    public get posixUser() {
        return this._posixUser;
    }
    public putPosixUser(value: CcAccessPoint.PosixUserProperty) {
        this._posixUser.internalValue = value;
    }
    public resetPosixUser() {
        this._posixUser.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get posixUserInput() {
        return this._posixUser.internalValue;
    }

    // root_directory - computed: true, optional: true, required: false
    private _rootDirectory = new CcAccessPoint.RootDirectoryPropertyOutputReference(this, "root_directory");
    public get rootDirectory() {
        return this._rootDirectory;
    }
    public putRootDirectory(value: CcAccessPoint.RootDirectoryProperty) {
        this._rootDirectory.internalValue = value;
    }
    public resetRootDirectory() {
        this._rootDirectory.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootDirectoryInput() {
        return this._rootDirectory.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAccessPoint.AccessPointTagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAccessPoint.AccessPointTagProperty[] | cdktn.IResolvable) {
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
            client_token: cdktn.stringToTerraform(this._clientToken),
            file_system_id: cdktn.stringToTerraform(this._fileSystemId),
            posix_user: ccAccessPointPosixUserPropertyToTerraform(this._posixUser.internalValue),
            root_directory: ccAccessPointRootDirectoryPropertyToTerraform(this._rootDirectory.internalValue),
            tags: cdktn.listMapper(ccAccessPointAccessPointTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            client_token: {
                value: cdktn.stringToHclTerraform(this._clientToken),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            file_system_id: {
                value: cdktn.stringToHclTerraform(this._fileSystemId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            posix_user: {
                value: ccAccessPointPosixUserPropertyToHclTerraform(this._posixUser.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAccessPoint.PosixUserProperty",
            },
            root_directory: {
                value: ccAccessPointRootDirectoryPropertyToHclTerraform(this._rootDirectory.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAccessPoint.RootDirectoryProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAccessPointAccessPointTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAccessPoint.AccessPointTagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAccessPointPosixUserPropertyToTerraform(struct?: CcAccessPoint.PosixUserProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        gid: cdktn.stringToTerraform(struct!.gid),
        secondary_gids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.secondaryGids),
        uid: cdktn.stringToTerraform(struct!.uid),
    }
}


export function ccAccessPointPosixUserPropertyToHclTerraform(struct?: CcAccessPoint.PosixUserProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        gid: {
            value: cdktn.stringToHclTerraform(struct!.gid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secondary_gids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.secondaryGids),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        uid: {
            value: cdktn.stringToHclTerraform(struct!.uid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccessPointCreationPermissionsPropertyToTerraform(struct?: CcAccessPoint.CreationPermissionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        owner_gid: cdktn.stringToTerraform(struct!.ownerGid),
        owner_uid: cdktn.stringToTerraform(struct!.ownerUid),
        permissions: cdktn.stringToTerraform(struct!.permissions),
    }
}


export function ccAccessPointCreationPermissionsPropertyToHclTerraform(struct?: CcAccessPoint.CreationPermissionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        owner_gid: {
            value: cdktn.stringToHclTerraform(struct!.ownerGid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        owner_uid: {
            value: cdktn.stringToHclTerraform(struct!.ownerUid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permissions: {
            value: cdktn.stringToHclTerraform(struct!.permissions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccessPointRootDirectoryPropertyToTerraform(struct?: CcAccessPoint.RootDirectoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        creation_permissions: ccAccessPointCreationPermissionsPropertyToTerraform(struct!.creationPermissions),
        path: cdktn.stringToTerraform(struct!.path),
    }
}


export function ccAccessPointRootDirectoryPropertyToHclTerraform(struct?: CcAccessPoint.RootDirectoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        creation_permissions: {
            value: ccAccessPointCreationPermissionsPropertyToHclTerraform(struct!.creationPermissions),
            isBlock: true,
            type: "struct",
            storageClassType: "CreationPermissionsProperty",
        },
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccessPointAccessPointTagPropertyToTerraform(struct?: CcAccessPoint.AccessPointTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAccessPointAccessPointTagPropertyToHclTerraform(struct?: CcAccessPoint.AccessPointTagProperty | cdktn.IResolvable): any {
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


export namespace CcAccessPoint {
export interface PosixUserProperty {
    /**
    * The POSIX group ID used for all file system operations using this access point.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point#gid CcAccessPoint#gid}
    */
    readonly gid?: string;
    /**
    * Secondary POSIX group IDs used for all file system operations using this access point.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point#secondary_gids CcAccessPoint#secondary_gids}
    */
    readonly secondaryGids?: string[];
    /**
    * The POSIX user ID used for all file system operations using this access point.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point#uid CcAccessPoint#uid}
    */
    readonly uid?: string;
}
export class PosixUserPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PosixUserProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._gid !== undefined) {
            hasAnyValues = true;
            internalValueResult.gid = this._gid;
        }
        if (this._secondaryGids !== undefined) {
            hasAnyValues = true;
            internalValueResult.secondaryGids = this._secondaryGids;
        }
        if (this._uid !== undefined) {
            hasAnyValues = true;
            internalValueResult.uid = this._uid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PosixUserProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._gid = undefined;
            this._secondaryGids = undefined;
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
            this._secondaryGids = value.secondaryGids;
            this._uid = value.uid;
        }
    }

    // gid - computed: true, optional: true, required: false
    private _gid?: string; 
    public get gid() {
        return this.getStringAttribute('gid');
    }
    public set gid(value: string) {
        this._gid = value;
    }
    public resetGid() {
        this._gid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gidInput() {
        return this._gid;
    }

    // secondary_gids - computed: true, optional: true, required: false
    private _secondaryGids?: string[]; 
    public get secondaryGids() {
        return this.getListAttribute('secondary_gids');
    }
    public set secondaryGids(value: string[]) {
        this._secondaryGids = value;
    }
    public resetSecondaryGids() {
        this._secondaryGids = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryGidsInput() {
        return this._secondaryGids;
    }

    // uid - computed: true, optional: true, required: false
    private _uid?: string; 
    public get uid() {
        return this.getStringAttribute('uid');
    }
    public set uid(value: string) {
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
export interface CreationPermissionsProperty {
    /**
    * Specifies the POSIX group ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point#owner_gid CcAccessPoint#owner_gid}
    */
    readonly ownerGid?: string;
    /**
    * Specifies the POSIX user ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point#owner_uid CcAccessPoint#owner_uid}
    */
    readonly ownerUid?: string;
    /**
    * Specifies the POSIX permissions to apply to the RootDirectory, in the format of an octal number representing the file's mode bits.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point#permissions CcAccessPoint#permissions}
    */
    readonly permissions?: string;
}
export class CreationPermissionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CreationPermissionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ownerGid !== undefined) {
            hasAnyValues = true;
            internalValueResult.ownerGid = this._ownerGid;
        }
        if (this._ownerUid !== undefined) {
            hasAnyValues = true;
            internalValueResult.ownerUid = this._ownerUid;
        }
        if (this._permissions !== undefined) {
            hasAnyValues = true;
            internalValueResult.permissions = this._permissions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CreationPermissionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ownerGid = undefined;
            this._ownerUid = undefined;
            this._permissions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ownerGid = value.ownerGid;
            this._ownerUid = value.ownerUid;
            this._permissions = value.permissions;
        }
    }

    // owner_gid - computed: true, optional: true, required: false
    private _ownerGid?: string; 
    public get ownerGid() {
        return this.getStringAttribute('owner_gid');
    }
    public set ownerGid(value: string) {
        this._ownerGid = value;
    }
    public resetOwnerGid() {
        this._ownerGid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerGidInput() {
        return this._ownerGid;
    }

    // owner_uid - computed: true, optional: true, required: false
    private _ownerUid?: string; 
    public get ownerUid() {
        return this.getStringAttribute('owner_uid');
    }
    public set ownerUid(value: string) {
        this._ownerUid = value;
    }
    public resetOwnerUid() {
        this._ownerUid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerUidInput() {
        return this._ownerUid;
    }

    // permissions - computed: true, optional: true, required: false
    private _permissions?: string; 
    public get permissions() {
        return this.getStringAttribute('permissions');
    }
    public set permissions(value: string) {
        this._permissions = value;
    }
    public resetPermissions() {
        this._permissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsInput() {
        return this._permissions;
    }
}
export interface RootDirectoryProperty {
    /**
    * (Optional) Specifies the POSIX IDs and permissions to apply to the access point's RootDirectory. If the RootDirectory>Path specified does not exist, EFS creates the root directory using the CreationPermissions settings when a client connects to an access point. When specifying the CreationPermissions, you must provide values for all properties.   If you do not provide CreationPermissions and the specified RootDirectory>Path does not exist, attempts to mount the file system using the access point will fail. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point#creation_permissions CcAccessPoint#creation_permissions}
    */
    readonly creationPermissions?: CreationPermissionsProperty;
    /**
    * Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the CreationPermissions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point#path CcAccessPoint#path}
    */
    readonly path?: string;
}
export class RootDirectoryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RootDirectoryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._creationPermissions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.creationPermissions = this._creationPermissions?.internalValue;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RootDirectoryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._creationPermissions.internalValue = undefined;
            this._path = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._creationPermissions.internalValue = value.creationPermissions;
            this._path = value.path;
        }
    }

    // creation_permissions - computed: true, optional: true, required: false
    private _creationPermissions = new CreationPermissionsPropertyOutputReference(this, "creation_permissions");
    public get creationPermissions() {
        return this._creationPermissions;
    }
    public putCreationPermissions(value: CreationPermissionsProperty) {
        this._creationPermissions.internalValue = value;
    }
    public resetCreationPermissions() {
        this._creationPermissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get creationPermissionsInput() {
        return this._creationPermissions.internalValue;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }
}
export interface AccessPointTagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point#key CcAccessPoint#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3files_access_point#value CcAccessPoint#value}
    */
    readonly value?: string;
}
export class AccessPointTagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AccessPointTagProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: AccessPointTagProperty | cdktn.IResolvable | undefined) {
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

export class AccessPointTagPropertyList extends cdktn.ComplexList {
    public internalValue? : AccessPointTagProperty[] | cdktn.IResolvable

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
    public get(index: number): AccessPointTagPropertyOutputReference {
        return new AccessPointTagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
