// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/memorydb_multi_region_cluster

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMultiRegionClusterProps extends cdktn.TerraformMetaArguments {
    /**
    * Description of the multi region cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/memorydb_multi_region_cluster#description CcMultiRegionCluster#description}
    */
    readonly description?: string;
    /**
    * The engine type used by the multi region cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/memorydb_multi_region_cluster#engine CcMultiRegionCluster#engine}
    */
    readonly engine?: string;
    /**
    * The Redis engine version used by the multi region cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/memorydb_multi_region_cluster#engine_version CcMultiRegionCluster#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * The name of the Multi Region cluster. This value must be unique as it also serves as the multi region cluster identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/memorydb_multi_region_cluster#multi_region_cluster_name_suffix CcMultiRegionCluster#multi_region_cluster_name_suffix}
    */
    readonly multiRegionClusterNameSuffix?: string;
    /**
    * The name of the parameter group associated with the multi region cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/memorydb_multi_region_cluster#multi_region_parameter_group_name CcMultiRegionCluster#multi_region_parameter_group_name}
    */
    readonly multiRegionParameterGroupName?: string;
    /**
    * The compute and memory capacity of the nodes in the multi region cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/memorydb_multi_region_cluster#node_type CcMultiRegionCluster#node_type}
    */
    readonly nodeType: string;
    /**
    * The number of shards the multi region cluster will contain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/memorydb_multi_region_cluster#num_shards CcMultiRegionCluster#num_shards}
    */
    readonly numShards?: number;
    /**
    * An array of key-value pairs to apply to this multi region cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/memorydb_multi_region_cluster#tags CcMultiRegionCluster#tags}
    */
    readonly tags?: CcMultiRegionCluster.TagProperty[] | cdktn.IResolvable;
    /**
    * A flag that enables in-transit encryption when set to true.
    * 
    * You cannot modify the value of TransitEncryptionEnabled after the cluster is created. To enable in-transit encryption on a cluster you must set TransitEncryptionEnabled to true when you create a cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/memorydb_multi_region_cluster#tls_enabled CcMultiRegionCluster#tls_enabled}
    */
    readonly tlsEnabled?: boolean | cdktn.IResolvable;
    /**
    * An enum string value that determines the update strategy for scaling. Possible values are 'COORDINATED' and 'UNCOORDINATED'. Default is 'COORDINATED'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/memorydb_multi_region_cluster#update_strategy CcMultiRegionCluster#update_strategy}
    */
    readonly updateStrategy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/memorydb_multi_region_cluster awscc_memorydb_multi_region_cluster}
*/
export class CcMultiRegionCluster extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_memorydb_multi_region_cluster";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMultiRegionCluster resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMultiRegionCluster to import
    * @param importFromId The id of the existing CcMultiRegionCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/memorydb_multi_region_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMultiRegionCluster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_memorydb_multi_region_cluster", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/memorydb_multi_region_cluster awscc_memorydb_multi_region_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMultiRegionClusterProps
    */
    public constructor(scope: Construct, id: string, config: CcMultiRegionClusterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_memorydb_multi_region_cluster',
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
        this._description = config.description;
        this._engine = config.engine;
        this._engineVersion = config.engineVersion;
        this._multiRegionClusterNameSuffix = config.multiRegionClusterNameSuffix;
        this._multiRegionParameterGroupName = config.multiRegionParameterGroupName;
        this._nodeType = config.nodeType;
        this._numShards = config.numShards;
        this._tags.internalValue = config.tags;
        this._tlsEnabled = config.tlsEnabled;
        this._updateStrategy = config.updateStrategy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // engine - computed: true, optional: true, required: false
    private _engine?: string; 
    public get engine() {
        return this.getStringAttribute('engine');
    }
    public set engine(value: string) {
        this._engine = value;
    }
    public resetEngine() {
        this._engine = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineInput() {
        return this._engine;
    }

    // engine_version - computed: true, optional: true, required: false
    private _engineVersion?: string; 
    public get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    public set engineVersion(value: string) {
        this._engineVersion = value;
    }
    public resetEngineVersion() {
        this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineVersionInput() {
        return this._engineVersion;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // multi_region_cluster_name - computed: true, optional: false, required: false
    public get multiRegionClusterName() {
        return this.getStringAttribute('multi_region_cluster_name');
    }

    // multi_region_cluster_name_suffix - computed: true, optional: true, required: false
    private _multiRegionClusterNameSuffix?: string; 
    public get multiRegionClusterNameSuffix() {
        return this.getStringAttribute('multi_region_cluster_name_suffix');
    }
    public set multiRegionClusterNameSuffix(value: string) {
        this._multiRegionClusterNameSuffix = value;
    }
    public resetMultiRegionClusterNameSuffix() {
        this._multiRegionClusterNameSuffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiRegionClusterNameSuffixInput() {
        return this._multiRegionClusterNameSuffix;
    }

    // multi_region_parameter_group_name - computed: true, optional: true, required: false
    private _multiRegionParameterGroupName?: string; 
    public get multiRegionParameterGroupName() {
        return this.getStringAttribute('multi_region_parameter_group_name');
    }
    public set multiRegionParameterGroupName(value: string) {
        this._multiRegionParameterGroupName = value;
    }
    public resetMultiRegionParameterGroupName() {
        this._multiRegionParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiRegionParameterGroupNameInput() {
        return this._multiRegionParameterGroupName;
    }

    // node_type - computed: false, optional: false, required: true
    private _nodeType?: string; 
    public get nodeType() {
        return this.getStringAttribute('node_type');
    }
    public set nodeType(value: string) {
        this._nodeType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeTypeInput() {
        return this._nodeType;
    }

    // num_shards - computed: true, optional: true, required: false
    private _numShards?: number; 
    public get numShards() {
        return this.getNumberAttribute('num_shards');
    }
    public set numShards(value: number) {
        this._numShards = value;
    }
    public resetNumShards() {
        this._numShards = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numShardsInput() {
        return this._numShards;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcMultiRegionCluster.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcMultiRegionCluster.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tls_enabled - computed: true, optional: true, required: false
    private _tlsEnabled?: boolean | cdktn.IResolvable; 
    public get tlsEnabled() {
        return this.getBooleanAttribute('tls_enabled');
    }
    public set tlsEnabled(value: boolean | cdktn.IResolvable) {
        this._tlsEnabled = value;
    }
    public resetTlsEnabled() {
        this._tlsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsEnabledInput() {
        return this._tlsEnabled;
    }

    // update_strategy - computed: true, optional: true, required: false
    private _updateStrategy?: string; 
    public get updateStrategy() {
        return this.getStringAttribute('update_strategy');
    }
    public set updateStrategy(value: string) {
        this._updateStrategy = value;
    }
    public resetUpdateStrategy() {
        this._updateStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateStrategyInput() {
        return this._updateStrategy;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            engine: cdktn.stringToTerraform(this._engine),
            engine_version: cdktn.stringToTerraform(this._engineVersion),
            multi_region_cluster_name_suffix: cdktn.stringToTerraform(this._multiRegionClusterNameSuffix),
            multi_region_parameter_group_name: cdktn.stringToTerraform(this._multiRegionParameterGroupName),
            node_type: cdktn.stringToTerraform(this._nodeType),
            num_shards: cdktn.numberToTerraform(this._numShards),
            tags: cdktn.listMapper(ccMultiRegionClusterTagPropertyToTerraform, false)(this._tags.internalValue),
            tls_enabled: cdktn.booleanToTerraform(this._tlsEnabled),
            update_strategy: cdktn.stringToTerraform(this._updateStrategy),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine: {
                value: cdktn.stringToHclTerraform(this._engine),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine_version: {
                value: cdktn.stringToHclTerraform(this._engineVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            multi_region_cluster_name_suffix: {
                value: cdktn.stringToHclTerraform(this._multiRegionClusterNameSuffix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            multi_region_parameter_group_name: {
                value: cdktn.stringToHclTerraform(this._multiRegionParameterGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            node_type: {
                value: cdktn.stringToHclTerraform(this._nodeType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            num_shards: {
                value: cdktn.numberToHclTerraform(this._numShards),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccMultiRegionClusterTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcMultiRegionCluster.TagPropertyList",
            },
            tls_enabled: {
                value: cdktn.booleanToHclTerraform(this._tlsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            update_strategy: {
                value: cdktn.stringToHclTerraform(this._updateStrategy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMultiRegionClusterTagPropertyToTerraform(struct?: CcMultiRegionCluster.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMultiRegionClusterTagPropertyToHclTerraform(struct?: CcMultiRegionCluster.TagProperty | cdktn.IResolvable): any {
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


export namespace CcMultiRegionCluster {
export interface TagProperty {
    /**
    * The key for the tag. May not be null.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/memorydb_multi_region_cluster#key CcMultiRegionCluster#key}
    */
    readonly key?: string;
    /**
    * The tag's value. May be null.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/memorydb_multi_region_cluster#value CcMultiRegionCluster#value}
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
