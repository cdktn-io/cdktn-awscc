// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_snapshot

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSnapshotProps extends cdktn.TerraformMetaArguments {
    /**
    * The namespace the snapshot is associated with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_snapshot#namespace_name CcSnapshot#namespace_name}
    */
    readonly namespaceName?: string;
    /**
    * The retention period of the snapshot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_snapshot#retention_period CcSnapshot#retention_period}
    */
    readonly retentionPeriod?: number;
    /**
    * The name of the snapshot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_snapshot#snapshot_name CcSnapshot#snapshot_name}
    */
    readonly snapshotName: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_snapshot#tags CcSnapshot#tags}
    */
    readonly tags?: CcSnapshot.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_snapshot awscc_redshiftserverless_snapshot}
*/
export class CcSnapshot extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_redshiftserverless_snapshot";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSnapshot resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSnapshot to import
    * @param importFromId The id of the existing CcSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_snapshot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSnapshot to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshiftserverless_snapshot", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_snapshot awscc_redshiftserverless_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSnapshotProps
    */
    public constructor(scope: Construct, id: string, config: CcSnapshotProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_redshiftserverless_snapshot',
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
        this._namespaceName = config.namespaceName;
        this._retentionPeriod = config.retentionPeriod;
        this._snapshotName = config.snapshotName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // namespace_name - computed: true, optional: true, required: false
    private _namespaceName?: string; 
    public get namespaceName() {
        return this.getStringAttribute('namespace_name');
    }
    public set namespaceName(value: string) {
        this._namespaceName = value;
    }
    public resetNamespaceName() {
        this._namespaceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceNameInput() {
        return this._namespaceName;
    }

    // owner_account - computed: true, optional: false, required: false
    public get ownerAccount() {
        return this.getStringAttribute('owner_account');
    }

    // retention_period - computed: true, optional: true, required: false
    private _retentionPeriod?: number; 
    public get retentionPeriod() {
        return this.getNumberAttribute('retention_period');
    }
    public set retentionPeriod(value: number) {
        this._retentionPeriod = value;
    }
    public resetRetentionPeriod() {
        this._retentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionPeriodInput() {
        return this._retentionPeriod;
    }

    // snapshot - computed: true, optional: false, required: false
    private _snapshot = new CcSnapshot.SnapshotPropertyOutputReference(this, "snapshot");
    public get snapshot() {
        return this._snapshot;
    }

    // snapshot_name - computed: false, optional: false, required: true
    private _snapshotName?: string; 
    public get snapshotName() {
        return this.getStringAttribute('snapshot_name');
    }
    public set snapshotName(value: string) {
        this._snapshotName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotNameInput() {
        return this._snapshotName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSnapshot.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSnapshot.TagProperty[] | cdktn.IResolvable) {
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
            namespace_name: cdktn.stringToTerraform(this._namespaceName),
            retention_period: cdktn.numberToTerraform(this._retentionPeriod),
            snapshot_name: cdktn.stringToTerraform(this._snapshotName),
            tags: cdktn.listMapper(ccSnapshotTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            namespace_name: {
                value: cdktn.stringToHclTerraform(this._namespaceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            retention_period: {
                value: cdktn.numberToHclTerraform(this._retentionPeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            snapshot_name: {
                value: cdktn.stringToHclTerraform(this._snapshotName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSnapshotTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSnapshot.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSnapshotSnapshotPropertyToTerraform(struct?: CcSnapshot.SnapshotProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccSnapshotSnapshotPropertyToHclTerraform(struct?: CcSnapshot.SnapshotProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccSnapshotTagPropertyToTerraform(struct?: CcSnapshot.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSnapshotTagPropertyToHclTerraform(struct?: CcSnapshot.TagProperty | cdktn.IResolvable): any {
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


export namespace CcSnapshot {
export interface SnapshotProperty {
}
export class SnapshotPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnapshotProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnapshotProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // admin_username - computed: true, optional: false, required: false
    public get adminUsername() {
        return this.getStringAttribute('admin_username');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }

    // namespace_arn - computed: true, optional: false, required: false
    public get namespaceArn() {
        return this.getStringAttribute('namespace_arn');
    }

    // namespace_name - computed: true, optional: false, required: false
    public get namespaceName() {
        return this.getStringAttribute('namespace_name');
    }

    // owner_account - computed: true, optional: false, required: false
    public get ownerAccount() {
        return this.getStringAttribute('owner_account');
    }

    // retention_period - computed: true, optional: false, required: false
    public get retentionPeriod() {
        return this.getNumberAttribute('retention_period');
    }

    // snapshot_arn - computed: true, optional: false, required: false
    public get snapshotArn() {
        return this.getStringAttribute('snapshot_arn');
    }

    // snapshot_create_time - computed: true, optional: false, required: false
    public get snapshotCreateTime() {
        return this.getStringAttribute('snapshot_create_time');
    }

    // snapshot_name - computed: true, optional: false, required: false
    public get snapshotName() {
        return this.getStringAttribute('snapshot_name');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_snapshot#key CcSnapshot#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_snapshot#value CcSnapshot#value}
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
