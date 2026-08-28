// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcS3AccessPointAttachmentProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the S3 access point attachment; also used for the name of the S3 access point.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#name CcS3AccessPointAttachment#name}
    */
    readonly name: string;
    /**
    * The OntapConfiguration of the S3 access point attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#ontap_configuration CcS3AccessPointAttachment#ontap_configuration}
    */
    readonly ontapConfiguration?: CcS3AccessPointAttachment.S3AccessPointOntapConfigurationProperty;
    /**
    * The OpenZFSConfiguration of the S3 access point attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#open_zfs_configuration CcS3AccessPointAttachment#open_zfs_configuration}
    */
    readonly openZfsConfiguration?: CcS3AccessPointAttachment.S3AccessPointOpenZFSConfigurationProperty;
    /**
    * The S3 access point configuration of the S3 access point attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#s3_access_point CcS3AccessPointAttachment#s3_access_point}
    */
    readonly s3AccessPoint?: CcS3AccessPointAttachment.S3AccessPointProperty;
    /**
    * The type of Amazon FSx volume that the S3 access point is attached to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#type CcS3AccessPointAttachment#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment awscc_fsx_s3_access_point_attachment}
*/
export class CcS3AccessPointAttachment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_fsx_s3_access_point_attachment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcS3AccessPointAttachment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcS3AccessPointAttachment to import
    * @param importFromId The id of the existing CcS3AccessPointAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcS3AccessPointAttachment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_fsx_s3_access_point_attachment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment awscc_fsx_s3_access_point_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcS3AccessPointAttachmentProps
    */
    public constructor(scope: Construct, id: string, config: CcS3AccessPointAttachmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_fsx_s3_access_point_attachment',
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
        this._name = config.name;
        this._ontapConfiguration.internalValue = config.ontapConfiguration;
        this._openZfsConfiguration.internalValue = config.openZfsConfiguration;
        this._s3AccessPoint.internalValue = config.s3AccessPoint;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // ontap_configuration - computed: true, optional: true, required: false
    private _ontapConfiguration = new CcS3AccessPointAttachment.S3AccessPointOntapConfigurationPropertyOutputReference(this, "ontap_configuration");
    public get ontapConfiguration() {
        return this._ontapConfiguration;
    }
    public putOntapConfiguration(value: CcS3AccessPointAttachment.S3AccessPointOntapConfigurationProperty) {
        this._ontapConfiguration.internalValue = value;
    }
    public resetOntapConfiguration() {
        this._ontapConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ontapConfigurationInput() {
        return this._ontapConfiguration.internalValue;
    }

    // open_zfs_configuration - computed: true, optional: true, required: false
    private _openZfsConfiguration = new CcS3AccessPointAttachment.S3AccessPointOpenZFSConfigurationPropertyOutputReference(this, "open_zfs_configuration");
    public get openZfsConfiguration() {
        return this._openZfsConfiguration;
    }
    public putOpenZfsConfiguration(value: CcS3AccessPointAttachment.S3AccessPointOpenZFSConfigurationProperty) {
        this._openZfsConfiguration.internalValue = value;
    }
    public resetOpenZfsConfiguration() {
        this._openZfsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openZfsConfigurationInput() {
        return this._openZfsConfiguration.internalValue;
    }

    // s3_access_point - computed: true, optional: true, required: false
    private _s3AccessPoint = new CcS3AccessPointAttachment.S3AccessPointPropertyOutputReference(this, "s3_access_point");
    public get s3AccessPoint() {
        return this._s3AccessPoint;
    }
    public putS3AccessPoint(value: CcS3AccessPointAttachment.S3AccessPointProperty) {
        this._s3AccessPoint.internalValue = value;
    }
    public resetS3AccessPoint() {
        this._s3AccessPoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3AccessPointInput() {
        return this._s3AccessPoint.internalValue;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            name: cdktn.stringToTerraform(this._name),
            ontap_configuration: ccS3AccessPointAttachmentS3AccessPointOntapConfigurationPropertyToTerraform(this._ontapConfiguration.internalValue),
            open_zfs_configuration: ccS3AccessPointAttachmentS3AccessPointOpenZFSConfigurationPropertyToTerraform(this._openZfsConfiguration.internalValue),
            s3_access_point: ccS3AccessPointAttachmentS3AccessPointPropertyToTerraform(this._s3AccessPoint.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ontap_configuration: {
                value: ccS3AccessPointAttachmentS3AccessPointOntapConfigurationPropertyToHclTerraform(this._ontapConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcS3AccessPointAttachment.S3AccessPointOntapConfigurationProperty",
            },
            open_zfs_configuration: {
                value: ccS3AccessPointAttachmentS3AccessPointOpenZFSConfigurationPropertyToHclTerraform(this._openZfsConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcS3AccessPointAttachment.S3AccessPointOpenZFSConfigurationProperty",
            },
            s3_access_point: {
                value: ccS3AccessPointAttachmentS3AccessPointPropertyToHclTerraform(this._s3AccessPoint.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcS3AccessPointAttachment.S3AccessPointProperty",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccS3AccessPointAttachmentOntapUnixFileSystemUserPropertyToTerraform(struct?: CcS3AccessPointAttachment.OntapUnixFileSystemUserProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccS3AccessPointAttachmentOntapUnixFileSystemUserPropertyToHclTerraform(struct?: CcS3AccessPointAttachment.OntapUnixFileSystemUserProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccS3AccessPointAttachmentOntapWindowsFileSystemUserPropertyToTerraform(struct?: CcS3AccessPointAttachment.OntapWindowsFileSystemUserProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccS3AccessPointAttachmentOntapWindowsFileSystemUserPropertyToHclTerraform(struct?: CcS3AccessPointAttachment.OntapWindowsFileSystemUserProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccS3AccessPointAttachmentOntapFileSystemIdentityPropertyToTerraform(struct?: CcS3AccessPointAttachment.OntapFileSystemIdentityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        unix_user: ccS3AccessPointAttachmentOntapUnixFileSystemUserPropertyToTerraform(struct!.unixUser),
        windows_user: ccS3AccessPointAttachmentOntapWindowsFileSystemUserPropertyToTerraform(struct!.windowsUser),
    }
}


export function ccS3AccessPointAttachmentOntapFileSystemIdentityPropertyToHclTerraform(struct?: CcS3AccessPointAttachment.OntapFileSystemIdentityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unix_user: {
            value: ccS3AccessPointAttachmentOntapUnixFileSystemUserPropertyToHclTerraform(struct!.unixUser),
            isBlock: true,
            type: "struct",
            storageClassType: "OntapUnixFileSystemUserProperty",
        },
        windows_user: {
            value: ccS3AccessPointAttachmentOntapWindowsFileSystemUserPropertyToHclTerraform(struct!.windowsUser),
            isBlock: true,
            type: "struct",
            storageClassType: "OntapWindowsFileSystemUserProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccS3AccessPointAttachmentS3AccessPointOntapConfigurationPropertyToTerraform(struct?: CcS3AccessPointAttachment.S3AccessPointOntapConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        file_system_identity: ccS3AccessPointAttachmentOntapFileSystemIdentityPropertyToTerraform(struct!.fileSystemIdentity),
        volume_id: cdktn.stringToTerraform(struct!.volumeId),
    }
}


export function ccS3AccessPointAttachmentS3AccessPointOntapConfigurationPropertyToHclTerraform(struct?: CcS3AccessPointAttachment.S3AccessPointOntapConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        file_system_identity: {
            value: ccS3AccessPointAttachmentOntapFileSystemIdentityPropertyToHclTerraform(struct!.fileSystemIdentity),
            isBlock: true,
            type: "struct",
            storageClassType: "OntapFileSystemIdentityProperty",
        },
        volume_id: {
            value: cdktn.stringToHclTerraform(struct!.volumeId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccS3AccessPointAttachmentFileSystemGIDPropertyToTerraform(struct?: CcS3AccessPointAttachment.FileSystemGIDProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        gid: cdktn.numberToTerraform(struct!.gid),
    }
}


export function ccS3AccessPointAttachmentFileSystemGIDPropertyToHclTerraform(struct?: CcS3AccessPointAttachment.FileSystemGIDProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccS3AccessPointAttachmentOpenZFSPosixFileSystemUserPropertyToTerraform(struct?: CcS3AccessPointAttachment.OpenZFSPosixFileSystemUserProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        gid: cdktn.numberToTerraform(struct!.gid),
        secondary_gids: cdktn.listMapper(ccS3AccessPointAttachmentFileSystemGIDPropertyToTerraform, false)(struct!.secondaryGids),
        uid: cdktn.numberToTerraform(struct!.uid),
    }
}


export function ccS3AccessPointAttachmentOpenZFSPosixFileSystemUserPropertyToHclTerraform(struct?: CcS3AccessPointAttachment.OpenZFSPosixFileSystemUserProperty | cdktn.IResolvable): any {
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
        secondary_gids: {
            value: cdktn.listMapperHcl(ccS3AccessPointAttachmentFileSystemGIDPropertyToHclTerraform, false)(struct!.secondaryGids),
            isBlock: true,
            type: "list",
            storageClassType: "FileSystemGIDPropertyList",
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


export function ccS3AccessPointAttachmentOpenZFSFileSystemIdentityPropertyToTerraform(struct?: CcS3AccessPointAttachment.OpenZFSFileSystemIdentityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        posix_user: ccS3AccessPointAttachmentOpenZFSPosixFileSystemUserPropertyToTerraform(struct!.posixUser),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccS3AccessPointAttachmentOpenZFSFileSystemIdentityPropertyToHclTerraform(struct?: CcS3AccessPointAttachment.OpenZFSFileSystemIdentityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        posix_user: {
            value: ccS3AccessPointAttachmentOpenZFSPosixFileSystemUserPropertyToHclTerraform(struct!.posixUser),
            isBlock: true,
            type: "struct",
            storageClassType: "OpenZFSPosixFileSystemUserProperty",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccS3AccessPointAttachmentS3AccessPointOpenZFSConfigurationPropertyToTerraform(struct?: CcS3AccessPointAttachment.S3AccessPointOpenZFSConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        file_system_identity: ccS3AccessPointAttachmentOpenZFSFileSystemIdentityPropertyToTerraform(struct!.fileSystemIdentity),
        volume_id: cdktn.stringToTerraform(struct!.volumeId),
    }
}


export function ccS3AccessPointAttachmentS3AccessPointOpenZFSConfigurationPropertyToHclTerraform(struct?: CcS3AccessPointAttachment.S3AccessPointOpenZFSConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        file_system_identity: {
            value: ccS3AccessPointAttachmentOpenZFSFileSystemIdentityPropertyToHclTerraform(struct!.fileSystemIdentity),
            isBlock: true,
            type: "struct",
            storageClassType: "OpenZFSFileSystemIdentityProperty",
        },
        volume_id: {
            value: cdktn.stringToHclTerraform(struct!.volumeId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccS3AccessPointAttachmentS3AccessPointVpcConfigurationPropertyToTerraform(struct?: CcS3AccessPointAttachment.S3AccessPointVpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpc_id: cdktn.stringToTerraform(struct!.vpcId),
    }
}


export function ccS3AccessPointAttachmentS3AccessPointVpcConfigurationPropertyToHclTerraform(struct?: CcS3AccessPointAttachment.S3AccessPointVpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        vpc_id: {
            value: cdktn.stringToHclTerraform(struct!.vpcId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccS3AccessPointAttachmentS3AccessPointPropertyToTerraform(struct?: CcS3AccessPointAttachment.S3AccessPointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy: cdktn.stringToTerraform(struct!.policy),
        vpc_configuration: ccS3AccessPointAttachmentS3AccessPointVpcConfigurationPropertyToTerraform(struct!.vpcConfiguration),
    }
}


export function ccS3AccessPointAttachmentS3AccessPointPropertyToHclTerraform(struct?: CcS3AccessPointAttachment.S3AccessPointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        policy: {
            value: cdktn.stringToHclTerraform(struct!.policy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_configuration: {
            value: ccS3AccessPointAttachmentS3AccessPointVpcConfigurationPropertyToHclTerraform(struct!.vpcConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "S3AccessPointVpcConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcS3AccessPointAttachment {
export interface OntapUnixFileSystemUserProperty {
    /**
    * The name of the UNIX user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#name CcS3AccessPointAttachment#name}
    */
    readonly name?: string;
}
export class OntapUnixFileSystemUserPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OntapUnixFileSystemUserProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OntapUnixFileSystemUserProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }
}
export interface OntapWindowsFileSystemUserProperty {
    /**
    * The name of the Windows user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#name CcS3AccessPointAttachment#name}
    */
    readonly name?: string;
}
export class OntapWindowsFileSystemUserPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OntapWindowsFileSystemUserProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OntapWindowsFileSystemUserProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }
}
export interface OntapFileSystemIdentityProperty {
    /**
    * Specifies the FSx for ONTAP user identity type, accepts either UNIX or WINDOWS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#type CcS3AccessPointAttachment#type}
    */
    readonly type?: string;
    /**
    * Specifies the properties of the file system UNIX user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#unix_user CcS3AccessPointAttachment#unix_user}
    */
    readonly unixUser?: OntapUnixFileSystemUserProperty;
    /**
    * Specifies the properties of the file system Windows user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#windows_user CcS3AccessPointAttachment#windows_user}
    */
    readonly windowsUser?: OntapWindowsFileSystemUserProperty;
}
export class OntapFileSystemIdentityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OntapFileSystemIdentityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._unixUser?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.unixUser = this._unixUser?.internalValue;
        }
        if (this._windowsUser?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.windowsUser = this._windowsUser?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OntapFileSystemIdentityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._unixUser.internalValue = undefined;
            this._windowsUser.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._unixUser.internalValue = value.unixUser;
            this._windowsUser.internalValue = value.windowsUser;
        }
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // unix_user - computed: true, optional: true, required: false
    private _unixUser = new OntapUnixFileSystemUserPropertyOutputReference(this, "unix_user");
    public get unixUser() {
        return this._unixUser;
    }
    public putUnixUser(value: OntapUnixFileSystemUserProperty) {
        this._unixUser.internalValue = value;
    }
    public resetUnixUser() {
        this._unixUser.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unixUserInput() {
        return this._unixUser.internalValue;
    }

    // windows_user - computed: true, optional: true, required: false
    private _windowsUser = new OntapWindowsFileSystemUserPropertyOutputReference(this, "windows_user");
    public get windowsUser() {
        return this._windowsUser;
    }
    public putWindowsUser(value: OntapWindowsFileSystemUserProperty) {
        this._windowsUser.internalValue = value;
    }
    public resetWindowsUser() {
        this._windowsUser.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get windowsUserInput() {
        return this._windowsUser.internalValue;
    }
}
export interface S3AccessPointOntapConfigurationProperty {
    /**
    * The file system identity used to authorize file access requests made using the S3 access point.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#file_system_identity CcS3AccessPointAttachment#file_system_identity}
    */
    readonly fileSystemIdentity?: OntapFileSystemIdentityProperty;
    /**
    * The ID of the FSx for ONTAP volume that the S3 access point is attached to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#volume_id CcS3AccessPointAttachment#volume_id}
    */
    readonly volumeId?: string;
}
export class S3AccessPointOntapConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3AccessPointOntapConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fileSystemIdentity?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemIdentity = this._fileSystemIdentity?.internalValue;
        }
        if (this._volumeId !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeId = this._volumeId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3AccessPointOntapConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileSystemIdentity.internalValue = undefined;
            this._volumeId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileSystemIdentity.internalValue = value.fileSystemIdentity;
            this._volumeId = value.volumeId;
        }
    }

    // file_system_identity - computed: true, optional: true, required: false
    private _fileSystemIdentity = new OntapFileSystemIdentityPropertyOutputReference(this, "file_system_identity");
    public get fileSystemIdentity() {
        return this._fileSystemIdentity;
    }
    public putFileSystemIdentity(value: OntapFileSystemIdentityProperty) {
        this._fileSystemIdentity.internalValue = value;
    }
    public resetFileSystemIdentity() {
        this._fileSystemIdentity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdentityInput() {
        return this._fileSystemIdentity.internalValue;
    }

    // volume_id - computed: true, optional: true, required: false
    private _volumeId?: string; 
    public get volumeId() {
        return this.getStringAttribute('volume_id');
    }
    public set volumeId(value: string) {
        this._volumeId = value;
    }
    public resetVolumeId() {
        this._volumeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeIdInput() {
        return this._volumeId;
    }
}
export interface FileSystemGIDProperty {
    /**
    * The GID of the file system user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#gid CcS3AccessPointAttachment#gid}
    */
    readonly gid?: number;
}
export class FileSystemGIDPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FileSystemGIDProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._gid !== undefined) {
            hasAnyValues = true;
            internalValueResult.gid = this._gid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FileSystemGIDProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._gid = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._gid = value.gid;
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
}

export class FileSystemGIDPropertyList extends cdktn.ComplexList {
    public internalValue? : FileSystemGIDProperty[] | cdktn.IResolvable

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
    public get(index: number): FileSystemGIDPropertyOutputReference {
        return new FileSystemGIDPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OpenZFSPosixFileSystemUserProperty {
    /**
    * The GID of the file system user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#gid CcS3AccessPointAttachment#gid}
    */
    readonly gid?: number;
    /**
    * The list of secondary GIDs for the file system user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#secondary_gids CcS3AccessPointAttachment#secondary_gids}
    */
    readonly secondaryGids?: FileSystemGIDProperty[] | cdktn.IResolvable;
    /**
    * The UID of the file system user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#uid CcS3AccessPointAttachment#uid}
    */
    readonly uid?: number;
}
export class OpenZFSPosixFileSystemUserPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenZFSPosixFileSystemUserProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._gid !== undefined) {
            hasAnyValues = true;
            internalValueResult.gid = this._gid;
        }
        if (this._secondaryGids?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.secondaryGids = this._secondaryGids?.internalValue;
        }
        if (this._uid !== undefined) {
            hasAnyValues = true;
            internalValueResult.uid = this._uid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenZFSPosixFileSystemUserProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._gid = undefined;
            this._secondaryGids.internalValue = undefined;
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
            this._secondaryGids.internalValue = value.secondaryGids;
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

    // secondary_gids - computed: true, optional: true, required: false
    private _secondaryGids = new FileSystemGIDPropertyList(this, "secondary_gids", false);
    public get secondaryGids() {
        return this._secondaryGids;
    }
    public putSecondaryGids(value: FileSystemGIDProperty[] | cdktn.IResolvable) {
        this._secondaryGids.internalValue = value;
    }
    public resetSecondaryGids() {
        this._secondaryGids.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryGidsInput() {
        return this._secondaryGids.internalValue;
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
export interface OpenZFSFileSystemIdentityProperty {
    /**
    * Specifies the UID and GIDs of the file system POSIX user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#posix_user CcS3AccessPointAttachment#posix_user}
    */
    readonly posixUser?: OpenZFSPosixFileSystemUserProperty;
    /**
    * Specifies the FSx for OpenZFS user identity type, accepts only POSIX.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#type CcS3AccessPointAttachment#type}
    */
    readonly type?: string;
}
export class OpenZFSFileSystemIdentityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenZFSFileSystemIdentityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._posixUser?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.posixUser = this._posixUser?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenZFSFileSystemIdentityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._posixUser.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._posixUser.internalValue = value.posixUser;
            this._type = value.type;
        }
    }

    // posix_user - computed: true, optional: true, required: false
    private _posixUser = new OpenZFSPosixFileSystemUserPropertyOutputReference(this, "posix_user");
    public get posixUser() {
        return this._posixUser;
    }
    public putPosixUser(value: OpenZFSPosixFileSystemUserProperty) {
        this._posixUser.internalValue = value;
    }
    public resetPosixUser() {
        this._posixUser.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get posixUserInput() {
        return this._posixUser.internalValue;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface S3AccessPointOpenZFSConfigurationProperty {
    /**
    * The file system identity used to authorize file access requests made using the S3 access point.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#file_system_identity CcS3AccessPointAttachment#file_system_identity}
    */
    readonly fileSystemIdentity?: OpenZFSFileSystemIdentityProperty;
    /**
    * The ID of the FSx for OpenZFS volume that the S3 access point is attached to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#volume_id CcS3AccessPointAttachment#volume_id}
    */
    readonly volumeId?: string;
}
export class S3AccessPointOpenZFSConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3AccessPointOpenZFSConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fileSystemIdentity?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemIdentity = this._fileSystemIdentity?.internalValue;
        }
        if (this._volumeId !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeId = this._volumeId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3AccessPointOpenZFSConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileSystemIdentity.internalValue = undefined;
            this._volumeId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileSystemIdentity.internalValue = value.fileSystemIdentity;
            this._volumeId = value.volumeId;
        }
    }

    // file_system_identity - computed: true, optional: true, required: false
    private _fileSystemIdentity = new OpenZFSFileSystemIdentityPropertyOutputReference(this, "file_system_identity");
    public get fileSystemIdentity() {
        return this._fileSystemIdentity;
    }
    public putFileSystemIdentity(value: OpenZFSFileSystemIdentityProperty) {
        this._fileSystemIdentity.internalValue = value;
    }
    public resetFileSystemIdentity() {
        this._fileSystemIdentity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdentityInput() {
        return this._fileSystemIdentity.internalValue;
    }

    // volume_id - computed: true, optional: true, required: false
    private _volumeId?: string; 
    public get volumeId() {
        return this.getStringAttribute('volume_id');
    }
    public set volumeId(value: string) {
        this._volumeId = value;
    }
    public resetVolumeId() {
        this._volumeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeIdInput() {
        return this._volumeId;
    }
}
export interface S3AccessPointVpcConfigurationProperty {
    /**
    * Specifies the virtual private cloud (VPC) for the S3 access point VPC configuration, if one exists.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#vpc_id CcS3AccessPointAttachment#vpc_id}
    */
    readonly vpcId?: string;
}
export class S3AccessPointVpcConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3AccessPointVpcConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._vpcId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcId = this._vpcId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3AccessPointVpcConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._vpcId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._vpcId = value.vpcId;
        }
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
}
export interface S3AccessPointProperty {
    /**
    * The S3 access point's policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#policy CcS3AccessPointAttachment#policy}
    */
    readonly policy?: string;
    /**
    * The S3 access point's virtual private cloud (VPC) configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fsx_s3_access_point_attachment#vpc_configuration CcS3AccessPointAttachment#vpc_configuration}
    */
    readonly vpcConfiguration?: S3AccessPointVpcConfigurationProperty;
}
export class S3AccessPointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3AccessPointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._policy !== undefined) {
            hasAnyValues = true;
            internalValueResult.policy = this._policy;
        }
        if (this._vpcConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConfiguration = this._vpcConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3AccessPointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._policy = undefined;
            this._vpcConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._policy = value.policy;
            this._vpcConfiguration.internalValue = value.vpcConfiguration;
        }
    }

    // alias - computed: true, optional: false, required: false
    public get alias() {
        return this.getStringAttribute('alias');
    }

    // policy - computed: true, optional: true, required: false
    private _policy?: string; 
    public get policy() {
        return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
        this._policy = value;
    }
    public resetPolicy() {
        this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy;
    }

    // resource_arn - computed: true, optional: false, required: false
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }

    // vpc_configuration - computed: true, optional: true, required: false
    private _vpcConfiguration = new S3AccessPointVpcConfigurationPropertyOutputReference(this, "vpc_configuration");
    public get vpcConfiguration() {
        return this._vpcConfiguration;
    }
    public putVpcConfiguration(value: S3AccessPointVpcConfigurationProperty) {
        this._vpcConfiguration.internalValue = value;
    }
    public resetVpcConfiguration() {
        this._vpcConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigurationInput() {
        return this._vpcConfiguration.internalValue;
    }
}
}
