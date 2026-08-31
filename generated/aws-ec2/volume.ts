// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVolumeProps extends cdktn.TerraformMetaArguments {
    /**
    * Indicates whether the volume is auto-enabled for I/O operations. By default, EBS disables I/O to the volume from attached EC2 instances when it determines that a volume's data is potentially inconsistent. If the consistency of the volume is not a concern, and you prefer that the volume be made available immediately if it's impaired, you can configure the volume to automatically enable I/O.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume#auto_enable_io CcVolume#auto_enable_io}
    */
    readonly autoEnableIo?: boolean | cdktn.IResolvable;
    /**
    * The ID of the Availability Zone in which to create the volume. For example, ``us-east-1a``.
    *  Either ``AvailabilityZone`` or ``AvailabilityZoneId`` must be specified, but not both.
    *  If you are creating a volume copy, omit this parameter. The volume copy is created in the same Availability Zone as the source volume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume#availability_zone CcVolume#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * The ID of the Availability Zone in which to create the volume. For example, ``use1-az1``.
    *  Either ``AvailabilityZone`` or ``AvailabilityZoneId`` must be specified, but not both.
    *  If you are creating a volume copy, omit this parameter. The volume copy is created in the same Availability Zone as the source volume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume#availability_zone_id CcVolume#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
    /**
    * Indicates whether the volume should be encrypted. The effect of setting the encryption state to ``true`` depends on the volume origin (new, from a snapshot, or from an existing volume), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see [Encryption by default](https://docs.aws.amazon.com/ebs/latest/userguide/work-with-ebs-encr.html#encryption-by-default) in the *Amazon EBS User Guide*.
    *  If you are creating a volume copy, omit this parameter. The volume is automatically encrypted with the same KMS key as the source volume. You can't copy unencrypted volumes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume#encrypted CcVolume#encrypted}
    */
    readonly encrypted?: boolean | cdktn.IResolvable;
    /**
    * The number of I/O operations per second (IOPS) to provision for the volume. Required for ``io1`` and ``io2`` volumes. Optional for ``gp3`` volumes. Omit for all other volume types. 
    *  Valid ranges:
    *   +  gp3: ``3,000``(*default*)``- 80,000`` IOPS
    *   +  io1: ``100 - 64,000`` IOPS
    *   +  io2: ``100 - 256,000`` IOPS
    *   
    *   [Instances built on the Nitro System](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html) can support up to 256,000 IOPS. Other instances can support up to 32,000 IOPS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume#iops CcVolume#iops}
    */
    readonly iops?: number;
    /**
    * The identifier of the kms-key-long to use for Amazon EBS encryption. If ``KmsKeyId`` is specified, the encrypted state must be ``true``.
    *  If you omit this property and your account is enabled for encryption by default, or *Encrypted* is set to ``true``, then the volume is encrypted using the default key specified for your account. If your account does not have a default key, then the volume is encrypted using the aws-managed-key.
    *  Alternatively, if you want to specify a different key, you can specify one of the following:
    *   +  Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.
    *   +  Key alias. Specify the alias for the key, prefixed with ``alias/``. For example, for a key with the alias ``my_cmk``, use ``alias/my_cmk``. Or to specify the aws-managed-key, use ``alias/aws/ebs``.
    *   +  Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.
    *   +  Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.
    *   
    *  If you are creating a volume copy, omit this parameter. The volume is automatically encrypted with the same KMS key as the source volume. You can't copy unencrypted volumes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume#kms_key_id CcVolume#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Indicates whether Amazon EBS Multi-Attach is enabled.
    *  CFNlong does not currently support updating a single-attach volume to be multi-attach enabled, updating a multi-attach enabled volume to be single-attach, or updating the size or number of I/O operations per second (IOPS) of a multi-attach enabled volume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume#multi_attach_enabled CcVolume#multi_attach_enabled}
    */
    readonly multiAttachEnabled?: boolean | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the Outpost on which to create the volume.
    *  If you intend to use a volume with an instance running on an outpost, then you must create the volume on the same outpost as the instance. You can't use a volume created in an AWS Region with an instance on an AWS outpost, or the other way around.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume#outpost_arn CcVolume#outpost_arn}
    */
    readonly outpostArn?: string;
    /**
    * The size of the volume, in GiBs.
    *   +  Required for new empty volumes.
    *   +  Optional for volumes created from snapshots and volume copies. In this case, the size defaults to the size of the snapshot or source volume. You can optionally specify a size that is equal to or larger than the size of the source snapshot or volume.
    *   
    *  Supported volume sizes:
    *   +  gp2: ``1 - 16,384`` GiB
    *   +  gp3: ``1 - 65,536`` GiB
    *   +  io1: ``4 - 16,384`` GiB
    *   +  io2: ``4 - 65,536`` GiB
    *   +  st1 and sc1: ``125 - 16,384`` GiB
    *   +  standard: ``1 - 1024`` GiB
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume#size CcVolume#size}
    */
    readonly size?: number;
    /**
    * The snapshot from which to create the volume. Only specify to create a volume from a snapshot. To create a new empty volume, omit this parameter and specify a value for ``Size`` instead. To create a volume copy, omit this parameter and specify ``SourceVolumeId`` instead.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume#snapshot_id CcVolume#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * The ID of the source EBS volume to copy. When specified, the volume is created as an exact copy of the specified volume. Only specify to create a volume copy. To create a new empty volume or to create a volume from a snapshot, omit this parameter,
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume#source_volume_id CcVolume#source_volume_id}
    */
    readonly sourceVolumeId?: string;
    /**
    * The tags to apply to the volume during creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume#tags CcVolume#tags}
    */
    readonly tags?: CcVolume.TagProperty[] | cdktn.IResolvable;
    /**
    * The throughput to provision for a volume, with a maximum of 2,000 MiB/s.
    *  This parameter is valid only for ``gp3`` volumes. The default value is 125.
    *  Valid Range: Minimum value of 125. Maximum value of 2000.
    *  The maximum ratio of throughput to IOPS is 0.25 MiB/s per IOPS. For example, a volume with 3,000 IOPS can have a maximum throughput of 750 MiB/s (3,000 x 0.25).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume#throughput CcVolume#throughput}
    */
    readonly throughput?: number;
    /**
    * Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume. This is also known as *volume initialization*. Specifying a volume initialization rate ensures that the volume is initialized at a predictable and consistent rate after creation.
    *  This parameter is supported only for volumes created from snapshots. Omit this parameter if:
    *   +  You want to create the volume using fast snapshot restore. You must specify a snapshot that is enabled for fast snapshot restore. In this case, the volume is fully initialized at creation.
    *   If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate, the volume will be initialized at the specified rate instead of fast snapshot restore.
    *    +  You want to create a volume that is initialized at the default rate.
    *   
    *  For more information, see [Initialize Amazon EBS volumes](https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html) in the *Amazon EC2 User Guide*.
    *  Valid range: 100 - 300 MiB/s
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume#volume_initialization_rate CcVolume#volume_initialization_rate}
    */
    readonly volumeInitializationRate?: number;
    /**
    * The volume type. This parameter can be one of the following values:
    *   +  General Purpose SSD: ``gp2`` | ``gp3``
    *   +  Provisioned IOPS SSD: ``io1`` | ``io2``
    *   +  Throughput Optimized HDD: ``st1``
    *   +  Cold HDD: ``sc1``
    *   +  Magnetic: ``standard``
    *   
    *   Throughput Optimized HDD (``st1``) and Cold HDD (``sc1``) volumes can't be used as boot volumes.
    *   For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html) in the *Amazon EBS User Guide*.
    *  Default: ``gp2``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume#volume_type CcVolume#volume_type}
    */
    readonly volumeType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume awscc_ec2_volume}
*/
export class CcVolume extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_volume";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVolume resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVolume to import
    * @param importFromId The id of the existing CcVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVolume to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_volume", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume awscc_ec2_volume} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVolumeProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcVolumeProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_volume',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._autoEnableIo = config.autoEnableIo;
        this._availabilityZone = config.availabilityZone;
        this._availabilityZoneId = config.availabilityZoneId;
        this._encrypted = config.encrypted;
        this._iops = config.iops;
        this._kmsKeyId = config.kmsKeyId;
        this._multiAttachEnabled = config.multiAttachEnabled;
        this._outpostArn = config.outpostArn;
        this._size = config.size;
        this._snapshotId = config.snapshotId;
        this._sourceVolumeId = config.sourceVolumeId;
        this._tags.internalValue = config.tags;
        this._throughput = config.throughput;
        this._volumeInitializationRate = config.volumeInitializationRate;
        this._volumeType = config.volumeType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // auto_enable_io - computed: true, optional: true, required: false
    private _autoEnableIo?: boolean | cdktn.IResolvable; 
    public get autoEnableIo() {
        return this.getBooleanAttribute('auto_enable_io');
    }
    public set autoEnableIo(value: boolean | cdktn.IResolvable) {
        this._autoEnableIo = value;
    }
    public resetAutoEnableIo() {
        this._autoEnableIo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoEnableIoInput() {
        return this._autoEnableIo;
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string; 
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
        this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
        return this._availabilityZone;
    }

    // availability_zone_id - computed: true, optional: true, required: false
    private _availabilityZoneId?: string; 
    public get availabilityZoneId() {
        return this.getStringAttribute('availability_zone_id');
    }
    public set availabilityZoneId(value: string) {
        this._availabilityZoneId = value;
    }
    public resetAvailabilityZoneId() {
        this._availabilityZoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneIdInput() {
        return this._availabilityZoneId;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // iops - computed: true, optional: true, required: false
    private _iops?: number; 
    public get iops() {
        return this.getNumberAttribute('iops');
    }
    public set iops(value: number) {
        this._iops = value;
    }
    public resetIops() {
        this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iopsInput() {
        return this._iops;
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

    // multi_attach_enabled - computed: true, optional: true, required: false
    private _multiAttachEnabled?: boolean | cdktn.IResolvable; 
    public get multiAttachEnabled() {
        return this.getBooleanAttribute('multi_attach_enabled');
    }
    public set multiAttachEnabled(value: boolean | cdktn.IResolvable) {
        this._multiAttachEnabled = value;
    }
    public resetMultiAttachEnabled() {
        this._multiAttachEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiAttachEnabledInput() {
        return this._multiAttachEnabled;
    }

    // outpost_arn - computed: true, optional: true, required: false
    private _outpostArn?: string; 
    public get outpostArn() {
        return this.getStringAttribute('outpost_arn');
    }
    public set outpostArn(value: string) {
        this._outpostArn = value;
    }
    public resetOutpostArn() {
        this._outpostArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outpostArnInput() {
        return this._outpostArn;
    }

    // size - computed: true, optional: true, required: false
    private _size?: number; 
    public get size() {
        return this.getNumberAttribute('size');
    }
    public set size(value: number) {
        this._size = value;
    }
    public resetSize() {
        this._size = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeInput() {
        return this._size;
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

    // source_volume_id - computed: true, optional: true, required: false
    private _sourceVolumeId?: string; 
    public get sourceVolumeId() {
        return this.getStringAttribute('source_volume_id');
    }
    public set sourceVolumeId(value: string) {
        this._sourceVolumeId = value;
    }
    public resetSourceVolumeId() {
        this._sourceVolumeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceVolumeIdInput() {
        return this._sourceVolumeId;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcVolume.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcVolume.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // throughput - computed: true, optional: true, required: false
    private _throughput?: number; 
    public get throughput() {
        return this.getNumberAttribute('throughput');
    }
    public set throughput(value: number) {
        this._throughput = value;
    }
    public resetThroughput() {
        this._throughput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throughputInput() {
        return this._throughput;
    }

    // volume_id - computed: true, optional: false, required: false
    public get volumeId() {
        return this.getStringAttribute('volume_id');
    }

    // volume_initialization_rate - computed: true, optional: true, required: false
    private _volumeInitializationRate?: number; 
    public get volumeInitializationRate() {
        return this.getNumberAttribute('volume_initialization_rate');
    }
    public set volumeInitializationRate(value: number) {
        this._volumeInitializationRate = value;
    }
    public resetVolumeInitializationRate() {
        this._volumeInitializationRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeInitializationRateInput() {
        return this._volumeInitializationRate;
    }

    // volume_type - computed: true, optional: true, required: false
    private _volumeType?: string; 
    public get volumeType() {
        return this.getStringAttribute('volume_type');
    }
    public set volumeType(value: string) {
        this._volumeType = value;
    }
    public resetVolumeType() {
        this._volumeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeTypeInput() {
        return this._volumeType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auto_enable_io: cdktn.booleanToTerraform(this._autoEnableIo),
            availability_zone: cdktn.stringToTerraform(this._availabilityZone),
            availability_zone_id: cdktn.stringToTerraform(this._availabilityZoneId),
            encrypted: cdktn.booleanToTerraform(this._encrypted),
            iops: cdktn.numberToTerraform(this._iops),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            multi_attach_enabled: cdktn.booleanToTerraform(this._multiAttachEnabled),
            outpost_arn: cdktn.stringToTerraform(this._outpostArn),
            size: cdktn.numberToTerraform(this._size),
            snapshot_id: cdktn.stringToTerraform(this._snapshotId),
            source_volume_id: cdktn.stringToTerraform(this._sourceVolumeId),
            tags: cdktn.listMapper(ccVolumeTagPropertyToTerraform, false)(this._tags.internalValue),
            throughput: cdktn.numberToTerraform(this._throughput),
            volume_initialization_rate: cdktn.numberToTerraform(this._volumeInitializationRate),
            volume_type: cdktn.stringToTerraform(this._volumeType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auto_enable_io: {
                value: cdktn.booleanToHclTerraform(this._autoEnableIo),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            availability_zone: {
                value: cdktn.stringToHclTerraform(this._availabilityZone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            availability_zone_id: {
                value: cdktn.stringToHclTerraform(this._availabilityZoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encrypted: {
                value: cdktn.booleanToHclTerraform(this._encrypted),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            iops: {
                value: cdktn.numberToHclTerraform(this._iops),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            multi_attach_enabled: {
                value: cdktn.booleanToHclTerraform(this._multiAttachEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            outpost_arn: {
                value: cdktn.stringToHclTerraform(this._outpostArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            size: {
                value: cdktn.numberToHclTerraform(this._size),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            snapshot_id: {
                value: cdktn.stringToHclTerraform(this._snapshotId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_volume_id: {
                value: cdktn.stringToHclTerraform(this._sourceVolumeId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccVolumeTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcVolume.TagPropertyList",
            },
            throughput: {
                value: cdktn.numberToHclTerraform(this._throughput),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            volume_initialization_rate: {
                value: cdktn.numberToHclTerraform(this._volumeInitializationRate),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            volume_type: {
                value: cdktn.stringToHclTerraform(this._volumeType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVolumeTagPropertyToTerraform(struct?: CcVolume.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVolumeTagPropertyToHclTerraform(struct?: CcVolume.TagProperty | cdktn.IResolvable): any {
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
export interface TagProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume#key CcVolume#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_volume#value CcVolume#value}
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
