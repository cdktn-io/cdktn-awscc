// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSnapshotProps extends cdktn.TerraformMetaArguments {
    /**
    * The cluster identifier for which you want a snapshot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot#cluster_identifier CcSnapshot#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3653.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot#manual_snapshot_retention_period CcSnapshot#manual_snapshot_retention_period}
    */
    readonly manualSnapshotRetentionPeriod?: number;
    /**
    * A unique identifier for the snapshot that you are requesting. This identifier must be unique for all snapshots within the Amazon Web Services account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot#snapshot_identifier CcSnapshot#snapshot_identifier}
    */
    readonly snapshotIdentifier: string;
    /**
    * A list of tag instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot#tags CcSnapshot#tags}
    */
    readonly tags?: CcSnapshot.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot awscc_redshift_snapshot}
*/
export class CcSnapshot extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_redshift_snapshot";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSnapshot resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSnapshot to import
    * @param importFromId The id of the existing CcSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSnapshot to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshift_snapshot", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot awscc_redshift_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSnapshotProps
    */
    public constructor(scope: Construct, id: string, config: CcSnapshotProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_redshift_snapshot',
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
        this._clusterIdentifier = config.clusterIdentifier;
        this._manualSnapshotRetentionPeriod = config.manualSnapshotRetentionPeriod;
        this._snapshotIdentifier = config.snapshotIdentifier;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }

    // cluster_create_time - computed: true, optional: false, required: false
    public get clusterCreateTime() {
        return this.getStringAttribute('cluster_create_time');
    }

    // cluster_identifier - computed: false, optional: false, required: true
    private _clusterIdentifier?: string; 
    public get clusterIdentifier() {
        return this.getStringAttribute('cluster_identifier');
    }
    public set clusterIdentifier(value: string) {
        this._clusterIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdentifierInput() {
        return this._clusterIdentifier;
    }

    // cluster_version - computed: true, optional: false, required: false
    public get clusterVersion() {
        return this.getStringAttribute('cluster_version');
    }

    // db_name - computed: true, optional: false, required: false
    public get dbName() {
        return this.getStringAttribute('db_name');
    }

    // encrypted - computed: true, optional: false, required: false
    public get encrypted() {
        return this.getBooleanAttribute('encrypted');
    }

    // encrypted_with_hsm - computed: true, optional: false, required: false
    public get encryptedWithHsm() {
        return this.getBooleanAttribute('encrypted_with_hsm');
    }

    // engine_full_version - computed: true, optional: false, required: false
    public get engineFullVersion() {
        return this.getStringAttribute('engine_full_version');
    }

    // enhanced_vpc_routing - computed: true, optional: false, required: false
    public get enhancedVpcRouting() {
        return this.getBooleanAttribute('enhanced_vpc_routing');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }

    // maintenance_track_name - computed: true, optional: false, required: false
    public get maintenanceTrackName() {
        return this.getStringAttribute('maintenance_track_name');
    }

    // manual_snapshot_retention_period - computed: true, optional: true, required: false
    private _manualSnapshotRetentionPeriod?: number; 
    public get manualSnapshotRetentionPeriod() {
        return this.getNumberAttribute('manual_snapshot_retention_period');
    }
    public set manualSnapshotRetentionPeriod(value: number) {
        this._manualSnapshotRetentionPeriod = value;
    }
    public resetManualSnapshotRetentionPeriod() {
        this._manualSnapshotRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manualSnapshotRetentionPeriodInput() {
        return this._manualSnapshotRetentionPeriod;
    }

    // master_username - computed: true, optional: false, required: false
    public get masterUsername() {
        return this.getStringAttribute('master_username');
    }

    // node_type - computed: true, optional: false, required: false
    public get nodeType() {
        return this.getStringAttribute('node_type');
    }

    // number_of_nodes - computed: true, optional: false, required: false
    public get numberOfNodes() {
        return this.getNumberAttribute('number_of_nodes');
    }

    // owner_account - computed: true, optional: false, required: false
    public get ownerAccount() {
        return this.getStringAttribute('owner_account');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
        return this.getNumberAttribute('port');
    }

    // snapshot_arn - computed: true, optional: false, required: false
    public get snapshotArn() {
        return this.getStringAttribute('snapshot_arn');
    }

    // snapshot_create_time - computed: true, optional: false, required: false
    public get snapshotCreateTime() {
        return this.getStringAttribute('snapshot_create_time');
    }

    // snapshot_identifier - computed: false, optional: false, required: true
    private _snapshotIdentifier?: string; 
    public get snapshotIdentifier() {
        return this.getStringAttribute('snapshot_identifier');
    }
    public set snapshotIdentifier(value: string) {
        this._snapshotIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotIdentifierInput() {
        return this._snapshotIdentifier;
    }

    // snapshot_type - computed: true, optional: false, required: false
    public get snapshotType() {
        return this.getStringAttribute('snapshot_type');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSnapshot.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSnapshot.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cluster_identifier: cdktn.stringToTerraform(this._clusterIdentifier),
            manual_snapshot_retention_period: cdktn.numberToTerraform(this._manualSnapshotRetentionPeriod),
            snapshot_identifier: cdktn.stringToTerraform(this._snapshotIdentifier),
            tags: cdktn.listMapper(ccSnapshotTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cluster_identifier: {
                value: cdktn.stringToHclTerraform(this._clusterIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            manual_snapshot_retention_period: {
                value: cdktn.numberToHclTerraform(this._manualSnapshotRetentionPeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            snapshot_identifier: {
                value: cdktn.stringToHclTerraform(this._snapshotIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSnapshotTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSnapshot.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSnapshotTagsPropertyToTerraform(struct?: CcSnapshot.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSnapshotTagsPropertyToHclTerraform(struct?: CcSnapshot.TagsProperty | cdktn.IResolvable): any {
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
export interface TagsProperty {
    /**
    * The key, or name, for the resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot#key CcSnapshot#key}
    */
    readonly key?: string;
    /**
    * The value for the resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot#value CcSnapshot#value}
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
