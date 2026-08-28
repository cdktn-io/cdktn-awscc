// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAgreementProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies the access role for the agreement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#access_role CcAgreement#access_role}
    */
    readonly accessRole: string;
    /**
    * Specifies the base directory for the agreement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#base_directory CcAgreement#base_directory}
    */
    readonly baseDirectory?: string;
    /**
    * Specifies a separate directory for each type of file to store for an AS2 message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#custom_directories CcAgreement#custom_directories}
    */
    readonly customDirectories?: CcAgreement.CustomDirectoriesProperty;
    /**
    * A textual description for the agreement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#description CcAgreement#description}
    */
    readonly description?: string;
    /**
    * Specifies whether to enforce an AS2 message is signed for this agreement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#enforce_message_signing CcAgreement#enforce_message_signing}
    */
    readonly enforceMessageSigning?: string;
    /**
    * A unique identifier for the local profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#local_profile_id CcAgreement#local_profile_id}
    */
    readonly localProfileId: string;
    /**
    * A unique identifier for the partner profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#partner_profile_id CcAgreement#partner_profile_id}
    */
    readonly partnerProfileId: string;
    /**
    * Specifies whether to preserve the filename received for this agreement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#preserve_filename CcAgreement#preserve_filename}
    */
    readonly preserveFilename?: string;
    /**
    * A unique identifier for the server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#server_id CcAgreement#server_id}
    */
    readonly serverId: string;
    /**
    * Specifies the status of the agreement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#status CcAgreement#status}
    */
    readonly status?: string;
    /**
    * Key-value pairs that can be used to group and search for agreements. Tags are metadata attached to agreements for any purpose.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#tags CcAgreement#tags}
    */
    readonly tags?: CcAgreement.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement awscc_transfer_agreement}
*/
export class CcAgreement extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_transfer_agreement";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAgreement resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAgreement to import
    * @param importFromId The id of the existing CcAgreement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAgreement to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_transfer_agreement", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement awscc_transfer_agreement} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAgreementProps
    */
    public constructor(scope: Construct, id: string, config: CcAgreementProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_transfer_agreement',
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
        this._accessRole = config.accessRole;
        this._baseDirectory = config.baseDirectory;
        this._customDirectories.internalValue = config.customDirectories;
        this._description = config.description;
        this._enforceMessageSigning = config.enforceMessageSigning;
        this._localProfileId = config.localProfileId;
        this._partnerProfileId = config.partnerProfileId;
        this._preserveFilename = config.preserveFilename;
        this._serverId = config.serverId;
        this._status = config.status;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_role - computed: false, optional: false, required: true
    private _accessRole?: string; 
    public get accessRole() {
        return this.getStringAttribute('access_role');
    }
    public set accessRole(value: string) {
        this._accessRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accessRoleInput() {
        return this._accessRole;
    }

    // agreement_id - computed: true, optional: false, required: false
    public get agreementId() {
        return this.getStringAttribute('agreement_id');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // base_directory - computed: true, optional: true, required: false
    private _baseDirectory?: string; 
    public get baseDirectory() {
        return this.getStringAttribute('base_directory');
    }
    public set baseDirectory(value: string) {
        this._baseDirectory = value;
    }
    public resetBaseDirectory() {
        this._baseDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseDirectoryInput() {
        return this._baseDirectory;
    }

    // custom_directories - computed: true, optional: true, required: false
    private _customDirectories = new CcAgreement.CustomDirectoriesPropertyOutputReference(this, "custom_directories");
    public get customDirectories() {
        return this._customDirectories;
    }
    public putCustomDirectories(value: CcAgreement.CustomDirectoriesProperty) {
        this._customDirectories.internalValue = value;
    }
    public resetCustomDirectories() {
        this._customDirectories.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDirectoriesInput() {
        return this._customDirectories.internalValue;
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

    // enforce_message_signing - computed: true, optional: true, required: false
    private _enforceMessageSigning?: string; 
    public get enforceMessageSigning() {
        return this.getStringAttribute('enforce_message_signing');
    }
    public set enforceMessageSigning(value: string) {
        this._enforceMessageSigning = value;
    }
    public resetEnforceMessageSigning() {
        this._enforceMessageSigning = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforceMessageSigningInput() {
        return this._enforceMessageSigning;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // local_profile_id - computed: false, optional: false, required: true
    private _localProfileId?: string; 
    public get localProfileId() {
        return this.getStringAttribute('local_profile_id');
    }
    public set localProfileId(value: string) {
        this._localProfileId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get localProfileIdInput() {
        return this._localProfileId;
    }

    // partner_profile_id - computed: false, optional: false, required: true
    private _partnerProfileId?: string; 
    public get partnerProfileId() {
        return this.getStringAttribute('partner_profile_id');
    }
    public set partnerProfileId(value: string) {
        this._partnerProfileId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get partnerProfileIdInput() {
        return this._partnerProfileId;
    }

    // preserve_filename - computed: true, optional: true, required: false
    private _preserveFilename?: string; 
    public get preserveFilename() {
        return this.getStringAttribute('preserve_filename');
    }
    public set preserveFilename(value: string) {
        this._preserveFilename = value;
    }
    public resetPreserveFilename() {
        this._preserveFilename = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preserveFilenameInput() {
        return this._preserveFilename;
    }

    // server_id - computed: false, optional: false, required: true
    private _serverId?: string; 
    public get serverId() {
        return this.getStringAttribute('server_id');
    }
    public set serverId(value: string) {
        this._serverId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverIdInput() {
        return this._serverId;
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
    private _tags = new CcAgreement.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAgreement.TagProperty[] | cdktn.IResolvable) {
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
            access_role: cdktn.stringToTerraform(this._accessRole),
            base_directory: cdktn.stringToTerraform(this._baseDirectory),
            custom_directories: ccAgreementCustomDirectoriesPropertyToTerraform(this._customDirectories.internalValue),
            description: cdktn.stringToTerraform(this._description),
            enforce_message_signing: cdktn.stringToTerraform(this._enforceMessageSigning),
            local_profile_id: cdktn.stringToTerraform(this._localProfileId),
            partner_profile_id: cdktn.stringToTerraform(this._partnerProfileId),
            preserve_filename: cdktn.stringToTerraform(this._preserveFilename),
            server_id: cdktn.stringToTerraform(this._serverId),
            status: cdktn.stringToTerraform(this._status),
            tags: cdktn.listMapper(ccAgreementTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_role: {
                value: cdktn.stringToHclTerraform(this._accessRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            base_directory: {
                value: cdktn.stringToHclTerraform(this._baseDirectory),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_directories: {
                value: ccAgreementCustomDirectoriesPropertyToHclTerraform(this._customDirectories.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAgreement.CustomDirectoriesProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enforce_message_signing: {
                value: cdktn.stringToHclTerraform(this._enforceMessageSigning),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            local_profile_id: {
                value: cdktn.stringToHclTerraform(this._localProfileId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            partner_profile_id: {
                value: cdktn.stringToHclTerraform(this._partnerProfileId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            preserve_filename: {
                value: cdktn.stringToHclTerraform(this._preserveFilename),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            server_id: {
                value: cdktn.stringToHclTerraform(this._serverId),
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
                value: cdktn.listMapperHcl(ccAgreementTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAgreement.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAgreementCustomDirectoriesPropertyToTerraform(struct?: CcAgreement.CustomDirectoriesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        failed_files_directory: cdktn.stringToTerraform(struct!.failedFilesDirectory),
        mdn_files_directory: cdktn.stringToTerraform(struct!.mdnFilesDirectory),
        payload_files_directory: cdktn.stringToTerraform(struct!.payloadFilesDirectory),
        status_files_directory: cdktn.stringToTerraform(struct!.statusFilesDirectory),
        temporary_files_directory: cdktn.stringToTerraform(struct!.temporaryFilesDirectory),
    }
}


export function ccAgreementCustomDirectoriesPropertyToHclTerraform(struct?: CcAgreement.CustomDirectoriesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        failed_files_directory: {
            value: cdktn.stringToHclTerraform(struct!.failedFilesDirectory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mdn_files_directory: {
            value: cdktn.stringToHclTerraform(struct!.mdnFilesDirectory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload_files_directory: {
            value: cdktn.stringToHclTerraform(struct!.payloadFilesDirectory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status_files_directory: {
            value: cdktn.stringToHclTerraform(struct!.statusFilesDirectory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        temporary_files_directory: {
            value: cdktn.stringToHclTerraform(struct!.temporaryFilesDirectory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgreementTagPropertyToTerraform(struct?: CcAgreement.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAgreementTagPropertyToHclTerraform(struct?: CcAgreement.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAgreement {
export interface CustomDirectoriesProperty {
    /**
    * Specifies a location to store the failed files for an AS2 message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#failed_files_directory CcAgreement#failed_files_directory}
    */
    readonly failedFilesDirectory?: string;
    /**
    * Specifies a location to store the MDN file for an AS2 message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#mdn_files_directory CcAgreement#mdn_files_directory}
    */
    readonly mdnFilesDirectory?: string;
    /**
    * Specifies a location to store the payload file for an AS2 message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#payload_files_directory CcAgreement#payload_files_directory}
    */
    readonly payloadFilesDirectory?: string;
    /**
    * Specifies a location to store the status file for an AS2 message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#status_files_directory CcAgreement#status_files_directory}
    */
    readonly statusFilesDirectory?: string;
    /**
    * Specifies a location to store the temporary processing file for an AS2 message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#temporary_files_directory CcAgreement#temporary_files_directory}
    */
    readonly temporaryFilesDirectory?: string;
}
export class CustomDirectoriesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomDirectoriesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._failedFilesDirectory !== undefined) {
            hasAnyValues = true;
            internalValueResult.failedFilesDirectory = this._failedFilesDirectory;
        }
        if (this._mdnFilesDirectory !== undefined) {
            hasAnyValues = true;
            internalValueResult.mdnFilesDirectory = this._mdnFilesDirectory;
        }
        if (this._payloadFilesDirectory !== undefined) {
            hasAnyValues = true;
            internalValueResult.payloadFilesDirectory = this._payloadFilesDirectory;
        }
        if (this._statusFilesDirectory !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusFilesDirectory = this._statusFilesDirectory;
        }
        if (this._temporaryFilesDirectory !== undefined) {
            hasAnyValues = true;
            internalValueResult.temporaryFilesDirectory = this._temporaryFilesDirectory;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomDirectoriesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._failedFilesDirectory = undefined;
            this._mdnFilesDirectory = undefined;
            this._payloadFilesDirectory = undefined;
            this._statusFilesDirectory = undefined;
            this._temporaryFilesDirectory = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._failedFilesDirectory = value.failedFilesDirectory;
            this._mdnFilesDirectory = value.mdnFilesDirectory;
            this._payloadFilesDirectory = value.payloadFilesDirectory;
            this._statusFilesDirectory = value.statusFilesDirectory;
            this._temporaryFilesDirectory = value.temporaryFilesDirectory;
        }
    }

    // failed_files_directory - computed: true, optional: true, required: false
    private _failedFilesDirectory?: string; 
    public get failedFilesDirectory() {
        return this.getStringAttribute('failed_files_directory');
    }
    public set failedFilesDirectory(value: string) {
        this._failedFilesDirectory = value;
    }
    public resetFailedFilesDirectory() {
        this._failedFilesDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failedFilesDirectoryInput() {
        return this._failedFilesDirectory;
    }

    // mdn_files_directory - computed: true, optional: true, required: false
    private _mdnFilesDirectory?: string; 
    public get mdnFilesDirectory() {
        return this.getStringAttribute('mdn_files_directory');
    }
    public set mdnFilesDirectory(value: string) {
        this._mdnFilesDirectory = value;
    }
    public resetMdnFilesDirectory() {
        this._mdnFilesDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mdnFilesDirectoryInput() {
        return this._mdnFilesDirectory;
    }

    // payload_files_directory - computed: true, optional: true, required: false
    private _payloadFilesDirectory?: string; 
    public get payloadFilesDirectory() {
        return this.getStringAttribute('payload_files_directory');
    }
    public set payloadFilesDirectory(value: string) {
        this._payloadFilesDirectory = value;
    }
    public resetPayloadFilesDirectory() {
        this._payloadFilesDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadFilesDirectoryInput() {
        return this._payloadFilesDirectory;
    }

    // status_files_directory - computed: true, optional: true, required: false
    private _statusFilesDirectory?: string; 
    public get statusFilesDirectory() {
        return this.getStringAttribute('status_files_directory');
    }
    public set statusFilesDirectory(value: string) {
        this._statusFilesDirectory = value;
    }
    public resetStatusFilesDirectory() {
        this._statusFilesDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusFilesDirectoryInput() {
        return this._statusFilesDirectory;
    }

    // temporary_files_directory - computed: true, optional: true, required: false
    private _temporaryFilesDirectory?: string; 
    public get temporaryFilesDirectory() {
        return this.getStringAttribute('temporary_files_directory');
    }
    public set temporaryFilesDirectory(value: string) {
        this._temporaryFilesDirectory = value;
    }
    public resetTemporaryFilesDirectory() {
        this._temporaryFilesDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get temporaryFilesDirectoryInput() {
        return this._temporaryFilesDirectory;
    }
}
export interface TagProperty {
    /**
    * The name assigned to the tag that you create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#key CcAgreement#key}
    */
    readonly key?: string;
    /**
    * Contains one or more values that you assigned to the key name you create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/transfer_agreement#value CcAgreement#value}
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
