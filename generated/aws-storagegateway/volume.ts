// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVolumeProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the gateway on which to create the volume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#gateway_arn CcVolume#gateway_arn}
    */
    readonly gatewayArn: string;
    /**
    * Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#kms_encrypted CcVolume#kms_encrypted}
    */
    readonly kmsEncrypted?: boolean | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#kms_key CcVolume#kms_key}
    */
    readonly kmsKey?: string;
    /**
    * The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#network_interface_id CcVolume#network_interface_id}
    */
    readonly networkInterfaceId: string;
    /**
    * The snapshot ID of the snapshot to restore as the new cached volume (e.g., snap-1122aabb).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#snapshot_id CcVolume#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * The ARN of an existing volume from which to create the new volume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#source_volume_arn CcVolume#source_volume_arn}
    */
    readonly sourceVolumeArn?: string;
    /**
    * A list of up to 50 tags to assign to the volume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#tags CcVolume#tags}
    */
    readonly tags?: CcVolume.TagsProperty[] | cdktn.IResolvable;
    /**
    * The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#target_name CcVolume#target_name}
    */
    readonly targetName: string;
    /**
    * The size of the volume in bytes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#volume_size_in_bytes CcVolume#volume_size_in_bytes}
    */
    readonly volumeSizeInBytes: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume awscc_storagegateway_volume}
*/
export class CcVolume extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_storagegateway_volume";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVolume resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVolume to import
    * @param importFromId The id of the existing CcVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVolume to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_storagegateway_volume", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume awscc_storagegateway_volume} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVolumeProps
    */
    public constructor(scope: Construct, id: string, config: CcVolumeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_storagegateway_volume',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.103.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._gatewayArn = config.gatewayArn;
        this._kmsEncrypted = config.kmsEncrypted;
        this._kmsKey = config.kmsKey;
        this._networkInterfaceId = config.networkInterfaceId;
        this._snapshotId = config.snapshotId;
        this._sourceVolumeArn = config.sourceVolumeArn;
        this._tags.internalValue = config.tags;
        this._targetName = config.targetName;
        this._volumeSizeInBytes = config.volumeSizeInBytes;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
        return this.getStringAttribute('created_date');
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // network_interface_id - computed: false, optional: false, required: true
    private _networkInterfaceId?: string; 
    public get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    public set networkInterfaceId(value: string) {
        this._networkInterfaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceIdInput() {
        return this._networkInterfaceId;
    }

    // snapshot_id - computed: true, optional: true, required: false
    private _snapshotId?: string; 
    public get snapshotId() {
        return this.getStringAttribute('snapshot_id');
    }
    public set snapshotId(value: string) {
        this._snapshotId = value;
    }
    public resetSnapshotId() {
        this._snapshotId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotIdInput() {
        return this._snapshotId;
    }

    // source_volume_arn - computed: true, optional: true, required: false
    private _sourceVolumeArn?: string; 
    public get sourceVolumeArn() {
        return this.getStringAttribute('source_volume_arn');
    }
    public set sourceVolumeArn(value: string) {
        this._sourceVolumeArn = value;
    }
    public resetSourceVolumeArn() {
        this._sourceVolumeArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceVolumeArnInput() {
        return this._sourceVolumeArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcVolume.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcVolume.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_arn - computed: true, optional: false, required: false
    public get targetArn() {
        return this.getStringAttribute('target_arn');
    }

    // target_name - computed: false, optional: false, required: true
    private _targetName?: string; 
    public get targetName() {
        return this.getStringAttribute('target_name');
    }
    public set targetName(value: string) {
        this._targetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetNameInput() {
        return this._targetName;
    }

    // volume_arn - computed: true, optional: false, required: false
    public get volumeArn() {
        return this.getStringAttribute('volume_arn');
    }

    // volume_attachment_status - computed: true, optional: false, required: false
    public get volumeAttachmentStatus() {
        return this.getStringAttribute('volume_attachment_status');
    }

    // volume_id - computed: true, optional: false, required: false
    public get volumeId() {
        return this.getStringAttribute('volume_id');
    }

    // volume_size_in_bytes - computed: false, optional: false, required: true
    private _volumeSizeInBytes?: number; 
    public get volumeSizeInBytes() {
        return this.getNumberAttribute('volume_size_in_bytes');
    }
    public set volumeSizeInBytes(value: number) {
        this._volumeSizeInBytes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeSizeInBytesInput() {
        return this._volumeSizeInBytes;
    }

    // volume_status - computed: true, optional: false, required: false
    public get volumeStatus() {
        return this.getStringAttribute('volume_status');
    }

    // volume_type - computed: true, optional: false, required: false
    public get volumeType() {
        return this.getStringAttribute('volume_type');
    }

    // volume_used_in_bytes - computed: true, optional: false, required: false
    public get volumeUsedInBytes() {
        return this.getNumberAttribute('volume_used_in_bytes');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            gateway_arn: cdktn.stringToTerraform(this._gatewayArn),
            kms_encrypted: cdktn.booleanToTerraform(this._kmsEncrypted),
            kms_key: cdktn.stringToTerraform(this._kmsKey),
            network_interface_id: cdktn.stringToTerraform(this._networkInterfaceId),
            snapshot_id: cdktn.stringToTerraform(this._snapshotId),
            source_volume_arn: cdktn.stringToTerraform(this._sourceVolumeArn),
            tags: cdktn.listMapper(ccVolumeTagsPropertyToTerraform, false)(this._tags.internalValue),
            target_name: cdktn.stringToTerraform(this._targetName),
            volume_size_in_bytes: cdktn.numberToTerraform(this._volumeSizeInBytes),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            gateway_arn: {
                value: cdktn.stringToHclTerraform(this._gatewayArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
            network_interface_id: {
                value: cdktn.stringToHclTerraform(this._networkInterfaceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            snapshot_id: {
                value: cdktn.stringToHclTerraform(this._snapshotId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_volume_arn: {
                value: cdktn.stringToHclTerraform(this._sourceVolumeArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccVolumeTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcVolume.TagsPropertyList",
            },
            target_name: {
                value: cdktn.stringToHclTerraform(this._targetName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            volume_size_in_bytes: {
                value: cdktn.numberToHclTerraform(this._volumeSizeInBytes),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVolumeTagsPropertyToTerraform(struct?: CcVolume.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVolumeTagsPropertyToHclTerraform(struct?: CcVolume.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcVolume {
export interface TagsProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#key CcVolume#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#value CcVolume#value}
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
