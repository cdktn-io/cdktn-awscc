// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTapeProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the Tape Gateway that hosts the virtual tape.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#gateway_arn CcTape#gateway_arn}
    */
    readonly gatewayArn: string;
    /**
    * Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3. Optional.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#kms_encrypted CcTape#kms_encrypted}
    */
    readonly kmsEncrypted?: boolean | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. This value must be set if KMSEncrypted is true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#kms_key CcTape#kms_key}
    */
    readonly kmsKey?: string;
    /**
    * The ID of the pool that you want to add your tape to for archiving. Tapes in this pool are archived in the S3 storage class that is associated with the pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#pool_id CcTape#pool_id}
    */
    readonly poolId?: string;
    /**
    * A list of up to 50 tags to assign to the virtual tape.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#tags CcTape#tags}
    */
    readonly tags?: CcTape.TagsProperty[] | cdktn.IResolvable;
    /**
    * The barcode that you want to assign to the virtual tape. Barcodes cannot be reused, even after a tape is deleted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#tape_barcode CcTape#tape_barcode}
    */
    readonly tapeBarcode?: string;
    /**
    * The size, in bytes, of the virtual tape that you want to create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#tape_size_in_bytes CcTape#tape_size_in_bytes}
    */
    readonly tapeSizeInBytes: number;
    /**
    * Set to true to create a write-once-read-many (WORM) virtual tape.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#worm CcTape#worm}
    */
    readonly worm?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape awscc_storagegateway_tape}
*/
export class CcTape extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_storagegateway_tape";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTape resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTape to import
    * @param importFromId The id of the existing CcTape that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTape to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_storagegateway_tape", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape awscc_storagegateway_tape} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTapeProps
    */
    public constructor(scope: Construct, id: string, config: CcTapeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_storagegateway_tape',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.102.0'
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
        this._poolId = config.poolId;
        this._tags.internalValue = config.tags;
        this._tapeBarcode = config.tapeBarcode;
        this._tapeSizeInBytes = config.tapeSizeInBytes;
        this._worm = config.worm;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // pool_id - computed: true, optional: true, required: false
    private _poolId?: string; 
    public get poolId() {
        return this.getStringAttribute('pool_id');
    }
    public set poolId(value: string) {
        this._poolId = value;
    }
    public resetPoolId() {
        this._poolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get poolIdInput() {
        return this._poolId;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTape.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTape.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tape_arn - computed: true, optional: false, required: false
    public get tapeArn() {
        return this.getStringAttribute('tape_arn');
    }

    // tape_barcode - computed: true, optional: true, required: false
    private _tapeBarcode?: string; 
    public get tapeBarcode() {
        return this.getStringAttribute('tape_barcode');
    }
    public set tapeBarcode(value: string) {
        this._tapeBarcode = value;
    }
    public resetTapeBarcode() {
        this._tapeBarcode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tapeBarcodeInput() {
        return this._tapeBarcode;
    }

    // tape_created_date - computed: true, optional: false, required: false
    public get tapeCreatedDate() {
        return this.getStringAttribute('tape_created_date');
    }

    // tape_size_in_bytes - computed: false, optional: false, required: true
    private _tapeSizeInBytes?: number; 
    public get tapeSizeInBytes() {
        return this.getNumberAttribute('tape_size_in_bytes');
    }
    public set tapeSizeInBytes(value: number) {
        this._tapeSizeInBytes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tapeSizeInBytesInput() {
        return this._tapeSizeInBytes;
    }

    // tape_status - computed: true, optional: false, required: false
    public get tapeStatus() {
        return this.getStringAttribute('tape_status');
    }

    // tape_used_in_bytes - computed: true, optional: false, required: false
    public get tapeUsedInBytes() {
        return this.getNumberAttribute('tape_used_in_bytes');
    }

    // worm - computed: true, optional: true, required: false
    private _worm?: boolean | cdktn.IResolvable; 
    public get worm() {
        return this.getBooleanAttribute('worm');
    }
    public set worm(value: boolean | cdktn.IResolvable) {
        this._worm = value;
    }
    public resetWorm() {
        this._worm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wormInput() {
        return this._worm;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            gateway_arn: cdktn.stringToTerraform(this._gatewayArn),
            kms_encrypted: cdktn.booleanToTerraform(this._kmsEncrypted),
            kms_key: cdktn.stringToTerraform(this._kmsKey),
            pool_id: cdktn.stringToTerraform(this._poolId),
            tags: cdktn.listMapper(ccTapeTagsPropertyToTerraform, false)(this._tags.internalValue),
            tape_barcode: cdktn.stringToTerraform(this._tapeBarcode),
            tape_size_in_bytes: cdktn.numberToTerraform(this._tapeSizeInBytes),
            worm: cdktn.booleanToTerraform(this._worm),
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
            pool_id: {
                value: cdktn.stringToHclTerraform(this._poolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTapeTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcTape.TagsPropertyList",
            },
            tape_barcode: {
                value: cdktn.stringToHclTerraform(this._tapeBarcode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tape_size_in_bytes: {
                value: cdktn.numberToHclTerraform(this._tapeSizeInBytes),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            worm: {
                value: cdktn.booleanToHclTerraform(this._worm),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTapeTagsPropertyToTerraform(struct?: CcTape.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTapeTagsPropertyToHclTerraform(struct?: CcTape.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcTape {
export interface TagsProperty {
    /**
    * The tag key. Cannot be prefixed with aws:.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#key CcTape#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#value CcTape#value}
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
