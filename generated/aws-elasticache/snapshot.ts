// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSnapshotProps extends cdktn.TerraformMetaArguments {
    /**
    * The identifier of an existing cluster to create a snapshot from. The snapshot is created from this cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#cache_cluster_id CcSnapshot#cache_cluster_id}
    */
    readonly cacheClusterId?: string;
    /**
    * The ID of the KMS key used to encrypt the snapshot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#kms_key_id CcSnapshot#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The identifier of an existing replication group to create a snapshot from. The snapshot is created from this replication group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#replication_group_id CcSnapshot#replication_group_id}
    */
    readonly replicationGroupId?: string;
    /**
    * The name of a snapshot. Must be unique within the customer account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#snapshot_name CcSnapshot#snapshot_name}
    */
    readonly snapshotName: string;
    /**
    * A list of tags to be added to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#tags CcSnapshot#tags}
    */
    readonly tags?: CcSnapshot.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot awscc_elasticache_snapshot}
*/
export class CcSnapshot extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_elasticache_snapshot";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSnapshot resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSnapshot to import
    * @param importFromId The id of the existing CcSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSnapshot to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticache_snapshot", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot awscc_elasticache_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSnapshotProps
    */
    public constructor(scope: Construct, id: string, config: CcSnapshotProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_elasticache_snapshot',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._cacheClusterId = config.cacheClusterId;
        this._kmsKeyId = config.kmsKeyId;
        this._replicationGroupId = config.replicationGroupId;
        this._snapshotName = config.snapshotName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // auto_minor_version_upgrade - computed: true, optional: false, required: false
    public get autoMinorVersionUpgrade() {
        return this.getBooleanAttribute('auto_minor_version_upgrade');
    }

    // automatic_failover - computed: true, optional: false, required: false
    public get automaticFailover() {
        return this.getStringAttribute('automatic_failover');
    }

    // cache_cluster_create_time - computed: true, optional: false, required: false
    public get cacheClusterCreateTime() {
        return this.getStringAttribute('cache_cluster_create_time');
    }

    // cache_cluster_id - computed: true, optional: true, required: false
    private _cacheClusterId?: string; 
    public get cacheClusterId() {
        return this.getStringAttribute('cache_cluster_id');
    }
    public set cacheClusterId(value: string) {
        this._cacheClusterId = value;
    }
    public resetCacheClusterId() {
        this._cacheClusterId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheClusterIdInput() {
        return this._cacheClusterId;
    }

    // cache_node_type - computed: true, optional: false, required: false
    public get cacheNodeType() {
        return this.getStringAttribute('cache_node_type');
    }

    // cache_parameter_group_name - computed: true, optional: false, required: false
    public get cacheParameterGroupName() {
        return this.getStringAttribute('cache_parameter_group_name');
    }

    // cache_subnet_group_name - computed: true, optional: false, required: false
    public get cacheSubnetGroupName() {
        return this.getStringAttribute('cache_subnet_group_name');
    }

    // data_tiering - computed: true, optional: false, required: false
    public get dataTiering() {
        return this.getStringAttribute('data_tiering');
    }

    // engine - computed: true, optional: false, required: false
    public get engine() {
        return this.getStringAttribute('engine');
    }

    // engine_version - computed: true, optional: false, required: false
    public get engineVersion() {
        return this.getStringAttribute('engine_version');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // node_snapshots - computed: true, optional: false, required: false
    private _nodeSnapshots = new CcSnapshot.NodeSnapshotsPropertyList(this, "node_snapshots", false);
    public get nodeSnapshots() {
        return this._nodeSnapshots;
    }

    // num_cache_nodes - computed: true, optional: false, required: false
    public get numCacheNodes() {
        return this.getNumberAttribute('num_cache_nodes');
    }

    // num_node_groups - computed: true, optional: false, required: false
    public get numNodeGroups() {
        return this.getNumberAttribute('num_node_groups');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
        return this.getNumberAttribute('port');
    }

    // preferred_availability_zone - computed: true, optional: false, required: false
    public get preferredAvailabilityZone() {
        return this.getStringAttribute('preferred_availability_zone');
    }

    // preferred_maintenance_window - computed: true, optional: false, required: false
    public get preferredMaintenanceWindow() {
        return this.getStringAttribute('preferred_maintenance_window');
    }

    // replication_group_description - computed: true, optional: false, required: false
    public get replicationGroupDescription() {
        return this.getStringAttribute('replication_group_description');
    }

    // replication_group_id - computed: true, optional: true, required: false
    private _replicationGroupId?: string; 
    public get replicationGroupId() {
        return this.getStringAttribute('replication_group_id');
    }
    public set replicationGroupId(value: string) {
        this._replicationGroupId = value;
    }
    public resetReplicationGroupId() {
        this._replicationGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationGroupIdInput() {
        return this._replicationGroupId;
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

    // snapshot_retention_limit - computed: true, optional: false, required: false
    public get snapshotRetentionLimit() {
        return this.getNumberAttribute('snapshot_retention_limit');
    }

    // snapshot_source - computed: true, optional: false, required: false
    public get snapshotSource() {
        return this.getStringAttribute('snapshot_source');
    }

    // snapshot_status - computed: true, optional: false, required: false
    public get snapshotStatus() {
        return this.getStringAttribute('snapshot_status');
    }

    // snapshot_window - computed: true, optional: false, required: false
    public get snapshotWindow() {
        return this.getStringAttribute('snapshot_window');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSnapshot.TagsPropertyList(this, "tags", true);
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

    // topic_arn - computed: true, optional: false, required: false
    public get topicArn() {
        return this.getStringAttribute('topic_arn');
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
            cache_cluster_id: cdktn.stringToTerraform(this._cacheClusterId),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            replication_group_id: cdktn.stringToTerraform(this._replicationGroupId),
            snapshot_name: cdktn.stringToTerraform(this._snapshotName),
            tags: cdktn.listMapper(ccSnapshotTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cache_cluster_id: {
                value: cdktn.stringToHclTerraform(this._cacheClusterId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            replication_group_id: {
                value: cdktn.stringToHclTerraform(this._replicationGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            snapshot_name: {
                value: cdktn.stringToHclTerraform(this._snapshotName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSnapshotTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcSnapshot.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSnapshotNodeSnapshotsPropertyToTerraform(struct?: CcSnapshot.NodeSnapshotsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccSnapshotNodeSnapshotsPropertyToHclTerraform(struct?: CcSnapshot.NodeSnapshotsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
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
export interface NodeSnapshotsProperty {
}
export class NodeSnapshotsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): NodeSnapshotsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NodeSnapshotsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // cache_cluster_id - computed: true, optional: false, required: false
    public get cacheClusterId() {
        return this.getStringAttribute('cache_cluster_id');
    }

    // cache_node_create_time - computed: true, optional: false, required: false
    public get cacheNodeCreateTime() {
        return this.getStringAttribute('cache_node_create_time');
    }

    // cache_node_id - computed: true, optional: false, required: false
    public get cacheNodeId() {
        return this.getStringAttribute('cache_node_id');
    }

    // cache_size - computed: true, optional: false, required: false
    public get cacheSize() {
        return this.getStringAttribute('cache_size');
    }

    // node_group_id - computed: true, optional: false, required: false
    public get nodeGroupId() {
        return this.getStringAttribute('node_group_id');
    }

    // snapshot_create_time - computed: true, optional: false, required: false
    public get snapshotCreateTime() {
        return this.getStringAttribute('snapshot_create_time');
    }
}

export class NodeSnapshotsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): NodeSnapshotsPropertyOutputReference {
        return new NodeSnapshotsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#key CcSnapshot#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/elasticache_snapshot#value CcSnapshot#value}
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
