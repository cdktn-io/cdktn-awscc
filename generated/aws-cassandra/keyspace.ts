// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cassandra_keyspace

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcKeyspaceProps extends cdktn.TerraformMetaArguments {
    /**
    * Indicates whether client-side timestamps are enabled (true) or disabled (false) for all tables in the keyspace. To add a Region to a single-Region keyspace with at least one table, the value must be set to true. After you enabled client-side timestamps for a table, you can?t disable it again.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cassandra_keyspace#client_side_timestamps_enabled CcKeyspace#client_side_timestamps_enabled}
    */
    readonly clientSideTimestampsEnabled?: boolean | cdktn.IResolvable;
    /**
    * Name for Cassandra keyspace
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cassandra_keyspace#keyspace_name CcKeyspace#keyspace_name}
    */
    readonly keyspaceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cassandra_keyspace#replication_specification CcKeyspace#replication_specification}
    */
    readonly replicationSpecification?: CcKeyspace.ReplicationSpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cassandra_keyspace#tags CcKeyspace#tags}
    */
    readonly tags?: CcKeyspace.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cassandra_keyspace awscc_cassandra_keyspace}
*/
export class CcKeyspace extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cassandra_keyspace";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcKeyspace resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcKeyspace to import
    * @param importFromId The id of the existing CcKeyspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cassandra_keyspace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcKeyspace to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cassandra_keyspace", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cassandra_keyspace awscc_cassandra_keyspace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcKeyspaceProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcKeyspaceProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_cassandra_keyspace',
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
        this._clientSideTimestampsEnabled = config.clientSideTimestampsEnabled;
        this._keyspaceName = config.keyspaceName;
        this._replicationSpecification.internalValue = config.replicationSpecification;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // client_side_timestamps_enabled - computed: true, optional: true, required: false
    private _clientSideTimestampsEnabled?: boolean | cdktn.IResolvable; 
    public get clientSideTimestampsEnabled() {
        return this.getBooleanAttribute('client_side_timestamps_enabled');
    }
    public set clientSideTimestampsEnabled(value: boolean | cdktn.IResolvable) {
        this._clientSideTimestampsEnabled = value;
    }
    public resetClientSideTimestampsEnabled() {
        this._clientSideTimestampsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSideTimestampsEnabledInput() {
        return this._clientSideTimestampsEnabled;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // keyspace_name - computed: true, optional: true, required: false
    private _keyspaceName?: string; 
    public get keyspaceName() {
        return this.getStringAttribute('keyspace_name');
    }
    public set keyspaceName(value: string) {
        this._keyspaceName = value;
    }
    public resetKeyspaceName() {
        this._keyspaceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyspaceNameInput() {
        return this._keyspaceName;
    }

    // replication_specification - computed: true, optional: true, required: false
    private _replicationSpecification = new CcKeyspace.ReplicationSpecificationPropertyOutputReference(this, "replication_specification");
    public get replicationSpecification() {
        return this._replicationSpecification;
    }
    public putReplicationSpecification(value: CcKeyspace.ReplicationSpecificationProperty) {
        this._replicationSpecification.internalValue = value;
    }
    public resetReplicationSpecification() {
        this._replicationSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationSpecificationInput() {
        return this._replicationSpecification.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcKeyspace.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcKeyspace.TagProperty[] | cdktn.IResolvable) {
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
            client_side_timestamps_enabled: cdktn.booleanToTerraform(this._clientSideTimestampsEnabled),
            keyspace_name: cdktn.stringToTerraform(this._keyspaceName),
            replication_specification: ccKeyspaceReplicationSpecificationPropertyToTerraform(this._replicationSpecification.internalValue),
            tags: cdktn.listMapper(ccKeyspaceTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            client_side_timestamps_enabled: {
                value: cdktn.booleanToHclTerraform(this._clientSideTimestampsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            keyspace_name: {
                value: cdktn.stringToHclTerraform(this._keyspaceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            replication_specification: {
                value: ccKeyspaceReplicationSpecificationPropertyToHclTerraform(this._replicationSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcKeyspace.ReplicationSpecificationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccKeyspaceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcKeyspace.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccKeyspaceReplicationSpecificationPropertyToTerraform(struct?: CcKeyspace.ReplicationSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        region_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regionList),
        replication_strategy: cdktn.stringToTerraform(struct!.replicationStrategy),
    }
}


export function ccKeyspaceReplicationSpecificationPropertyToHclTerraform(struct?: CcKeyspace.ReplicationSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        region_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regionList),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        replication_strategy: {
            value: cdktn.stringToHclTerraform(struct!.replicationStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKeyspaceTagPropertyToTerraform(struct?: CcKeyspace.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccKeyspaceTagPropertyToHclTerraform(struct?: CcKeyspace.TagProperty | cdktn.IResolvable): any {
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


export namespace CcKeyspace {
export interface ReplicationSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cassandra_keyspace#region_list CcKeyspace#region_list}
    */
    readonly regionList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cassandra_keyspace#replication_strategy CcKeyspace#replication_strategy}
    */
    readonly replicationStrategy?: string;
}
export class ReplicationSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicationSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._regionList !== undefined) {
            hasAnyValues = true;
            internalValueResult.regionList = this._regionList;
        }
        if (this._replicationStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.replicationStrategy = this._replicationStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicationSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._regionList = undefined;
            this._replicationStrategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._regionList = value.regionList;
            this._replicationStrategy = value.replicationStrategy;
        }
    }

    // region_list - computed: true, optional: true, required: false
    private _regionList?: string[]; 
    public get regionList() {
        return cdktn.Fn.tolist(this.getListAttribute('region_list'));
    }
    public set regionList(value: string[]) {
        this._regionList = value;
    }
    public resetRegionList() {
        this._regionList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionListInput() {
        return this._regionList;
    }

    // replication_strategy - computed: true, optional: true, required: false
    private _replicationStrategy?: string; 
    public get replicationStrategy() {
        return this.getStringAttribute('replication_strategy');
    }
    public set replicationStrategy(value: string) {
        this._replicationStrategy = value;
    }
    public resetReplicationStrategy() {
        this._replicationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationStrategyInput() {
        return this._replicationStrategy;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cassandra_keyspace#key CcKeyspace#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cassandra_keyspace#value CcKeyspace#value}
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
