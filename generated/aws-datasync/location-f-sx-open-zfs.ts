// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_fsx_open_zfs

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLocationFSxOpenZFSProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) for the FSx OpenZFS file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_fsx_open_zfs#fsx_filesystem_arn CcLocationFSxOpenZFS#fsx_filesystem_arn}
    */
    readonly fsxFilesystemArn?: string;
    /**
    * Configuration settings for an NFS or SMB protocol, currently only support NFS
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_fsx_open_zfs#protocol CcLocationFSxOpenZFS#protocol}
    */
    readonly protocol: CcLocationFSxOpenZFS.ProtocolProperty;
    /**
    * The ARNs of the security groups that are to use to configure the FSx OpenZFS file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_fsx_open_zfs#security_group_arns CcLocationFSxOpenZFS#security_group_arns}
    */
    readonly securityGroupArns: string[];
    /**
    * A subdirectory in the location's path.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_fsx_open_zfs#subdirectory CcLocationFSxOpenZFS#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_fsx_open_zfs#tags CcLocationFSxOpenZFS#tags}
    */
    readonly tags?: CcLocationFSxOpenZFS.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_fsx_open_zfs awscc_datasync_location_fsx_open_zfs}
*/
export class CcLocationFSxOpenZFS extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datasync_location_fsx_open_zfs";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLocationFSxOpenZFS resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLocationFSxOpenZFS to import
    * @param importFromId The id of the existing CcLocationFSxOpenZFS that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_fsx_open_zfs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLocationFSxOpenZFS to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datasync_location_fsx_open_zfs", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_fsx_open_zfs awscc_datasync_location_fsx_open_zfs} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLocationFSxOpenZFSProps
    */
    public constructor(scope: Construct, id: string, config: CcLocationFSxOpenZFSProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datasync_location_fsx_open_zfs',
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
        this._fsxFilesystemArn = config.fsxFilesystemArn;
        this._protocol.internalValue = config.protocol;
        this._securityGroupArns = config.securityGroupArns;
        this._subdirectory = config.subdirectory;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // fsx_filesystem_arn - computed: true, optional: true, required: false
    private _fsxFilesystemArn?: string; 
    public get fsxFilesystemArn() {
        return this.getStringAttribute('fsx_filesystem_arn');
    }
    public set fsxFilesystemArn(value: string) {
        this._fsxFilesystemArn = value;
    }
    public resetFsxFilesystemArn() {
        this._fsxFilesystemArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fsxFilesystemArnInput() {
        return this._fsxFilesystemArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // location_arn - computed: true, optional: false, required: false
    public get locationArn() {
        return this.getStringAttribute('location_arn');
    }

    // location_uri - computed: true, optional: false, required: false
    public get locationUri() {
        return this.getStringAttribute('location_uri');
    }

    // protocol - computed: false, optional: false, required: true
    private _protocol = new CcLocationFSxOpenZFS.ProtocolPropertyOutputReference(this, "protocol");
    public get protocol() {
        return this._protocol;
    }
    public putProtocol(value: CcLocationFSxOpenZFS.ProtocolProperty) {
        this._protocol.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol.internalValue;
    }

    // security_group_arns - computed: false, optional: false, required: true
    private _securityGroupArns?: string[]; 
    public get securityGroupArns() {
        return this.getListAttribute('security_group_arns');
    }
    public set securityGroupArns(value: string[]) {
        this._securityGroupArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupArnsInput() {
        return this._securityGroupArns;
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
    private _tags = new CcLocationFSxOpenZFS.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLocationFSxOpenZFS.TagProperty[] | cdktn.IResolvable) {
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
            fsx_filesystem_arn: cdktn.stringToTerraform(this._fsxFilesystemArn),
            protocol: ccLocationFSxOpenZFSProtocolPropertyToTerraform(this._protocol.internalValue),
            security_group_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupArns),
            subdirectory: cdktn.stringToTerraform(this._subdirectory),
            tags: cdktn.listMapper(ccLocationFSxOpenZFSTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            fsx_filesystem_arn: {
                value: cdktn.stringToHclTerraform(this._fsxFilesystemArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            protocol: {
                value: ccLocationFSxOpenZFSProtocolPropertyToHclTerraform(this._protocol.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLocationFSxOpenZFS.ProtocolProperty",
            },
            security_group_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            subdirectory: {
                value: cdktn.stringToHclTerraform(this._subdirectory),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLocationFSxOpenZFSTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLocationFSxOpenZFS.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLocationFSxOpenZFSMountOptionsPropertyToTerraform(struct?: CcLocationFSxOpenZFS.MountOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccLocationFSxOpenZFSMountOptionsPropertyToHclTerraform(struct?: CcLocationFSxOpenZFS.MountOptionsProperty | cdktn.IResolvable): any {
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


export function ccLocationFSxOpenZFSNFSPropertyToTerraform(struct?: CcLocationFSxOpenZFS.NFSProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mount_options: ccLocationFSxOpenZFSMountOptionsPropertyToTerraform(struct!.mountOptions),
    }
}


export function ccLocationFSxOpenZFSNFSPropertyToHclTerraform(struct?: CcLocationFSxOpenZFS.NFSProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mount_options: {
            value: ccLocationFSxOpenZFSMountOptionsPropertyToHclTerraform(struct!.mountOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "MountOptionsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLocationFSxOpenZFSProtocolPropertyToTerraform(struct?: CcLocationFSxOpenZFS.ProtocolProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        nfs: ccLocationFSxOpenZFSNFSPropertyToTerraform(struct!.nfs),
    }
}


export function ccLocationFSxOpenZFSProtocolPropertyToHclTerraform(struct?: CcLocationFSxOpenZFS.ProtocolProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        nfs: {
            value: ccLocationFSxOpenZFSNFSPropertyToHclTerraform(struct!.nfs),
            isBlock: true,
            type: "struct",
            storageClassType: "NFSProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLocationFSxOpenZFSTagPropertyToTerraform(struct?: CcLocationFSxOpenZFS.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLocationFSxOpenZFSTagPropertyToHclTerraform(struct?: CcLocationFSxOpenZFS.TagProperty | cdktn.IResolvable): any {
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


export namespace CcLocationFSxOpenZFS {
export interface MountOptionsProperty {
    /**
    * The specific NFS version that you want DataSync to use to mount your NFS share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_fsx_open_zfs#version CcLocationFSxOpenZFS#version}
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
export interface NFSProperty {
    /**
    * The NFS mount options that DataSync can use to mount your NFS share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_fsx_open_zfs#mount_options CcLocationFSxOpenZFS#mount_options}
    */
    readonly mountOptions?: MountOptionsProperty;
}
export class NFSPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NFSProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mountOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountOptions = this._mountOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NFSProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mountOptions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mountOptions.internalValue = value.mountOptions;
        }
    }

    // mount_options - computed: true, optional: true, required: false
    private _mountOptions = new MountOptionsPropertyOutputReference(this, "mount_options");
    public get mountOptions() {
        return this._mountOptions;
    }
    public putMountOptions(value: MountOptionsProperty) {
        this._mountOptions.internalValue = value;
    }
    public resetMountOptions() {
        this._mountOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountOptionsInput() {
        return this._mountOptions.internalValue;
    }
}
export interface ProtocolProperty {
    /**
    * FSx OpenZFS file system NFS protocol information
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_fsx_open_zfs#nfs CcLocationFSxOpenZFS#nfs}
    */
    readonly nfs?: NFSProperty;
}
export class ProtocolPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProtocolProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._nfs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.nfs = this._nfs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProtocolProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._nfs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._nfs.internalValue = value.nfs;
        }
    }

    // nfs - computed: true, optional: true, required: false
    private _nfs = new NFSPropertyOutputReference(this, "nfs");
    public get nfs() {
        return this._nfs;
    }
    public putNfs(value: NFSProperty) {
        this._nfs.internalValue = value;
    }
    public resetNfs() {
        this._nfs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nfsInput() {
        return this._nfs.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_fsx_open_zfs#key CcLocationFSxOpenZFS#key}
    */
    readonly key?: string;
    /**
    * The value for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_fsx_open_zfs#value CcLocationFSxOpenZFS#value}
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
