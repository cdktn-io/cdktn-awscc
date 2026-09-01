// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cluster

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcClusterProps extends cdktn.TerraformMetaArguments {
    /**
    * The hardware type for the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cluster#cluster_type CcCluster#cluster_type}
    */
    readonly clusterType?: string;
    /**
    * The IAM role your nodes will use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cluster#instance_role_arn CcCluster#instance_role_arn}
    */
    readonly instanceRoleArn?: string;
    /**
    * The user-specified name of the Cluster to be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cluster#name CcCluster#name}
    */
    readonly name?: string;
    /**
    * On premises settings which will have the interface network mappings and default Output logical interface
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cluster#network_settings CcCluster#network_settings}
    */
    readonly networkSettings?: CcCluster.ClusterNetworkSettingsProperty;
    /**
    * A collection of key-value pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cluster#tags CcCluster#tags}
    */
    readonly tags?: CcCluster.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cluster awscc_medialive_cluster}
*/
export class CcCluster extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_medialive_cluster";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCluster resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCluster to import
    * @param importFromId The id of the existing CcCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCluster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_medialive_cluster", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cluster awscc_medialive_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcClusterProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcClusterProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_medialive_cluster',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._clusterType = config.clusterType;
        this._instanceRoleArn = config.instanceRoleArn;
        this._name = config.name;
        this._networkSettings.internalValue = config.networkSettings;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // channel_ids - computed: true, optional: false, required: false
    public get channelIds() {
        return this.getListAttribute('channel_ids');
    }

    // cluster_id - computed: true, optional: false, required: false
    public get clusterId() {
        return this.getStringAttribute('cluster_id');
    }

    // cluster_type - computed: true, optional: true, required: false
    private _clusterType?: string; 
    public get clusterType() {
        return this.getStringAttribute('cluster_type');
    }
    public set clusterType(value: string) {
        this._clusterType = value;
    }
    public resetClusterType() {
        this._clusterType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterTypeInput() {
        return this._clusterType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_role_arn - computed: true, optional: true, required: false
    private _instanceRoleArn?: string; 
    public get instanceRoleArn() {
        return this.getStringAttribute('instance_role_arn');
    }
    public set instanceRoleArn(value: string) {
        this._instanceRoleArn = value;
    }
    public resetInstanceRoleArn() {
        this._instanceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceRoleArnInput() {
        return this._instanceRoleArn;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // network_settings - computed: true, optional: true, required: false
    private _networkSettings = new CcCluster.ClusterNetworkSettingsPropertyOutputReference(this, "network_settings");
    public get networkSettings() {
        return this._networkSettings;
    }
    public putNetworkSettings(value: CcCluster.ClusterNetworkSettingsProperty) {
        this._networkSettings.internalValue = value;
    }
    public resetNetworkSettings() {
        this._networkSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkSettingsInput() {
        return this._networkSettings.internalValue;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCluster.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCluster.TagProperty[] | cdktn.IResolvable) {
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
            cluster_type: cdktn.stringToTerraform(this._clusterType),
            instance_role_arn: cdktn.stringToTerraform(this._instanceRoleArn),
            name: cdktn.stringToTerraform(this._name),
            network_settings: ccClusterClusterNetworkSettingsPropertyToTerraform(this._networkSettings.internalValue),
            tags: cdktn.listMapper(ccClusterTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cluster_type: {
                value: cdktn.stringToHclTerraform(this._clusterType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_role_arn: {
                value: cdktn.stringToHclTerraform(this._instanceRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            network_settings: {
                value: ccClusterClusterNetworkSettingsPropertyToHclTerraform(this._networkSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.ClusterNetworkSettingsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccClusterTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCluster.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccClusterInterfaceMappingPropertyToTerraform(struct?: CcCluster.InterfaceMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        logical_interface_name: cdktn.stringToTerraform(struct!.logicalInterfaceName),
        network_id: cdktn.stringToTerraform(struct!.networkId),
    }
}


export function ccClusterInterfaceMappingPropertyToHclTerraform(struct?: CcCluster.InterfaceMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        logical_interface_name: {
            value: cdktn.stringToHclTerraform(struct!.logicalInterfaceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network_id: {
            value: cdktn.stringToHclTerraform(struct!.networkId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterClusterNetworkSettingsPropertyToTerraform(struct?: CcCluster.ClusterNetworkSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_route: cdktn.stringToTerraform(struct!.defaultRoute),
        interface_mappings: cdktn.listMapper(ccClusterInterfaceMappingPropertyToTerraform, false)(struct!.interfaceMappings),
    }
}


export function ccClusterClusterNetworkSettingsPropertyToHclTerraform(struct?: CcCluster.ClusterNetworkSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_route: {
            value: cdktn.stringToHclTerraform(struct!.defaultRoute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        interface_mappings: {
            value: cdktn.listMapperHcl(ccClusterInterfaceMappingPropertyToHclTerraform, false)(struct!.interfaceMappings),
            isBlock: true,
            type: "list",
            storageClassType: "InterfaceMappingPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterTagPropertyToTerraform(struct?: CcCluster.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccClusterTagPropertyToHclTerraform(struct?: CcCluster.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCluster {
export interface InterfaceMappingProperty {
    /**
    * logical interface name, unique in the list
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cluster#logical_interface_name CcCluster#logical_interface_name}
    */
    readonly logicalInterfaceName?: string;
    /**
    * Network Id to be associated with the logical interface name, can be duplicated in list
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cluster#network_id CcCluster#network_id}
    */
    readonly networkId?: string;
}
export class InterfaceMappingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InterfaceMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logicalInterfaceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logicalInterfaceName = this._logicalInterfaceName;
        }
        if (this._networkId !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkId = this._networkId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InterfaceMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logicalInterfaceName = undefined;
            this._networkId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logicalInterfaceName = value.logicalInterfaceName;
            this._networkId = value.networkId;
        }
    }

    // logical_interface_name - computed: true, optional: true, required: false
    private _logicalInterfaceName?: string; 
    public get logicalInterfaceName() {
        return this.getStringAttribute('logical_interface_name');
    }
    public set logicalInterfaceName(value: string) {
        this._logicalInterfaceName = value;
    }
    public resetLogicalInterfaceName() {
        this._logicalInterfaceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logicalInterfaceNameInput() {
        return this._logicalInterfaceName;
    }

    // network_id - computed: true, optional: true, required: false
    private _networkId?: string; 
    public get networkId() {
        return this.getStringAttribute('network_id');
    }
    public set networkId(value: string) {
        this._networkId = value;
    }
    public resetNetworkId() {
        this._networkId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkIdInput() {
        return this._networkId;
    }
}

export class InterfaceMappingPropertyList extends cdktn.ComplexList {
    public internalValue? : InterfaceMappingProperty[] | cdktn.IResolvable

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
    public get(index: number): InterfaceMappingPropertyOutputReference {
        return new InterfaceMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ClusterNetworkSettingsProperty {
    /**
    * Default value if the customer does not define it in channel Output API
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cluster#default_route CcCluster#default_route}
    */
    readonly defaultRoute?: string;
    /**
    * Network mappings for the cluster
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cluster#interface_mappings CcCluster#interface_mappings}
    */
    readonly interfaceMappings?: InterfaceMappingProperty[] | cdktn.IResolvable;
}
export class ClusterNetworkSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusterNetworkSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultRoute !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultRoute = this._defaultRoute;
        }
        if (this._interfaceMappings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.interfaceMappings = this._interfaceMappings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterNetworkSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultRoute = undefined;
            this._interfaceMappings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultRoute = value.defaultRoute;
            this._interfaceMappings.internalValue = value.interfaceMappings;
        }
    }

    // default_route - computed: true, optional: true, required: false
    private _defaultRoute?: string; 
    public get defaultRoute() {
        return this.getStringAttribute('default_route');
    }
    public set defaultRoute(value: string) {
        this._defaultRoute = value;
    }
    public resetDefaultRoute() {
        this._defaultRoute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultRouteInput() {
        return this._defaultRoute;
    }

    // interface_mappings - computed: true, optional: true, required: false
    private _interfaceMappings = new InterfaceMappingPropertyList(this, "interface_mappings", false);
    public get interfaceMappings() {
        return this._interfaceMappings;
    }
    public putInterfaceMappings(value: InterfaceMappingProperty[] | cdktn.IResolvable) {
        this._interfaceMappings.internalValue = value;
    }
    public resetInterfaceMappings() {
        this._interfaceMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get interfaceMappingsInput() {
        return this._interfaceMappings.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cluster#key CcCluster#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cluster#value CcCluster#value}
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
