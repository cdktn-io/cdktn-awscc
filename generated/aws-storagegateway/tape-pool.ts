// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/storagegateway_tape_pool

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTapePoolProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the custom tape pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/storagegateway_tape_pool#pool_name CcTapePool#pool_name}
    */
    readonly poolName: string;
    /**
    * Tape retention lock time in days (up to 36,500 days / 100 years).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/storagegateway_tape_pool#retention_lock_time_in_days CcTapePool#retention_lock_time_in_days}
    */
    readonly retentionLockTimeInDays?: number;
    /**
    * Tape retention lock type. Governance mode allows authorized removal; compliance mode prevents all removal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/storagegateway_tape_pool#retention_lock_type CcTapePool#retention_lock_type}
    */
    readonly retentionLockType?: string;
    /**
    * The storage class associated with the custom pool (S3 Glacier or S3 Glacier Deep Archive).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/storagegateway_tape_pool#storage_class CcTapePool#storage_class}
    */
    readonly storageClass: string;
    /**
    * A list of up to 50 tags for the tape pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/storagegateway_tape_pool#tags CcTapePool#tags}
    */
    readonly tags?: CcTapePool.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/storagegateway_tape_pool awscc_storagegateway_tape_pool}
*/
export class CcTapePool extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_storagegateway_tape_pool";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTapePool resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTapePool to import
    * @param importFromId The id of the existing CcTapePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/storagegateway_tape_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTapePool to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_storagegateway_tape_pool", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/storagegateway_tape_pool awscc_storagegateway_tape_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTapePoolProps
    */
    public constructor(scope: Construct, id: string, config: CcTapePoolProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_storagegateway_tape_pool',
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
        this._poolName = config.poolName;
        this._retentionLockTimeInDays = config.retentionLockTimeInDays;
        this._retentionLockType = config.retentionLockType;
        this._storageClass = config.storageClass;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // pool_arn - computed: true, optional: false, required: false
    public get poolArn() {
        return this.getStringAttribute('pool_arn');
    }

    // pool_id - computed: true, optional: false, required: false
    public get poolId() {
        return this.getStringAttribute('pool_id');
    }

    // pool_name - computed: false, optional: false, required: true
    private _poolName?: string; 
    public get poolName() {
        return this.getStringAttribute('pool_name');
    }
    public set poolName(value: string) {
        this._poolName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get poolNameInput() {
        return this._poolName;
    }

    // retention_lock_time_in_days - computed: true, optional: true, required: false
    private _retentionLockTimeInDays?: number; 
    public get retentionLockTimeInDays() {
        return this.getNumberAttribute('retention_lock_time_in_days');
    }
    public set retentionLockTimeInDays(value: number) {
        this._retentionLockTimeInDays = value;
    }
    public resetRetentionLockTimeInDays() {
        this._retentionLockTimeInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionLockTimeInDaysInput() {
        return this._retentionLockTimeInDays;
    }

    // retention_lock_type - computed: true, optional: true, required: false
    private _retentionLockType?: string; 
    public get retentionLockType() {
        return this.getStringAttribute('retention_lock_type');
    }
    public set retentionLockType(value: string) {
        this._retentionLockType = value;
    }
    public resetRetentionLockType() {
        this._retentionLockType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionLockTypeInput() {
        return this._retentionLockType;
    }

    // storage_class - computed: false, optional: false, required: true
    private _storageClass?: string; 
    public get storageClass() {
        return this.getStringAttribute('storage_class');
    }
    public set storageClass(value: string) {
        this._storageClass = value;
    }
    // Temporarily expose input value. Use with caution.
    public get storageClassInput() {
        return this._storageClass;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTapePool.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTapePool.TagProperty[] | cdktn.IResolvable) {
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
            pool_name: cdktn.stringToTerraform(this._poolName),
            retention_lock_time_in_days: cdktn.numberToTerraform(this._retentionLockTimeInDays),
            retention_lock_type: cdktn.stringToTerraform(this._retentionLockType),
            storage_class: cdktn.stringToTerraform(this._storageClass),
            tags: cdktn.listMapper(ccTapePoolTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            pool_name: {
                value: cdktn.stringToHclTerraform(this._poolName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            retention_lock_time_in_days: {
                value: cdktn.numberToHclTerraform(this._retentionLockTimeInDays),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            retention_lock_type: {
                value: cdktn.stringToHclTerraform(this._retentionLockType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            storage_class: {
                value: cdktn.stringToHclTerraform(this._storageClass),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTapePoolTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTapePool.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTapePoolTagPropertyToTerraform(struct?: CcTapePool.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTapePoolTagPropertyToHclTerraform(struct?: CcTapePool.TagProperty | cdktn.IResolvable): any {
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


export namespace CcTapePool {
export interface TagProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/storagegateway_tape_pool#key CcTapePool#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/storagegateway_tape_pool#value CcTapePool#value}
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
