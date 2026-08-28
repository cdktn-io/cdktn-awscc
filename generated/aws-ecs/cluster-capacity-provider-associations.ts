// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster_capacity_provider_associations

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcClusterCapacityProviderAssociationsProps extends cdktn.TerraformMetaArguments {
    /**
    * List of capacity providers to associate with the cluster
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster_capacity_provider_associations#capacity_providers CcClusterCapacityProviderAssociations#capacity_providers}
    */
    readonly capacityProviders?: string[];
    /**
    * The name of the cluster
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster_capacity_provider_associations#cluster CcClusterCapacityProviderAssociations#cluster}
    */
    readonly cluster: string;
    /**
    * List of capacity providers to associate with the cluster
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster_capacity_provider_associations#default_capacity_provider_strategy CcClusterCapacityProviderAssociations#default_capacity_provider_strategy}
    */
    readonly defaultCapacityProviderStrategy: CcClusterCapacityProviderAssociations.CapacityProviderStrategyProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster_capacity_provider_associations awscc_ecs_cluster_capacity_provider_associations}
*/
export class CcClusterCapacityProviderAssociations extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ecs_cluster_capacity_provider_associations";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcClusterCapacityProviderAssociations resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcClusterCapacityProviderAssociations to import
    * @param importFromId The id of the existing CcClusterCapacityProviderAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster_capacity_provider_associations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcClusterCapacityProviderAssociations to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecs_cluster_capacity_provider_associations", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster_capacity_provider_associations awscc_ecs_cluster_capacity_provider_associations} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcClusterCapacityProviderAssociationsProps
    */
    public constructor(scope: Construct, id: string, config: CcClusterCapacityProviderAssociationsProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecs_cluster_capacity_provider_associations',
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
        this._capacityProviders = config.capacityProviders;
        this._cluster = config.cluster;
        this._defaultCapacityProviderStrategy.internalValue = config.defaultCapacityProviderStrategy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // capacity_providers - computed: true, optional: true, required: false
    private _capacityProviders?: string[]; 
    public get capacityProviders() {
        return this.getListAttribute('capacity_providers');
    }
    public set capacityProviders(value: string[]) {
        this._capacityProviders = value;
    }
    public resetCapacityProviders() {
        this._capacityProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProvidersInput() {
        return this._capacityProviders;
    }

    // cluster - computed: false, optional: false, required: true
    private _cluster?: string; 
    public get cluster() {
        return this.getStringAttribute('cluster');
    }
    public set cluster(value: string) {
        this._cluster = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterInput() {
        return this._cluster;
    }

    // default_capacity_provider_strategy - computed: false, optional: false, required: true
    private _defaultCapacityProviderStrategy = new CcClusterCapacityProviderAssociations.CapacityProviderStrategyPropertyList(this, "default_capacity_provider_strategy", false);
    public get defaultCapacityProviderStrategy() {
        return this._defaultCapacityProviderStrategy;
    }
    public putDefaultCapacityProviderStrategy(value: CcClusterCapacityProviderAssociations.CapacityProviderStrategyProperty[] | cdktn.IResolvable) {
        this._defaultCapacityProviderStrategy.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultCapacityProviderStrategyInput() {
        return this._defaultCapacityProviderStrategy.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            capacity_providers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._capacityProviders),
            cluster: cdktn.stringToTerraform(this._cluster),
            default_capacity_provider_strategy: cdktn.listMapper(ccClusterCapacityProviderAssociationsCapacityProviderStrategyPropertyToTerraform, false)(this._defaultCapacityProviderStrategy.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            capacity_providers: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._capacityProviders),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            cluster: {
                value: cdktn.stringToHclTerraform(this._cluster),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_capacity_provider_strategy: {
                value: cdktn.listMapperHcl(ccClusterCapacityProviderAssociationsCapacityProviderStrategyPropertyToHclTerraform, false)(this._defaultCapacityProviderStrategy.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcClusterCapacityProviderAssociations.CapacityProviderStrategyPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccClusterCapacityProviderAssociationsCapacityProviderStrategyPropertyToTerraform(struct?: CcClusterCapacityProviderAssociations.CapacityProviderStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        base: cdktn.numberToTerraform(struct!.base),
        capacity_provider: cdktn.stringToTerraform(struct!.capacityProvider),
        weight: cdktn.numberToTerraform(struct!.weight),
    }
}


export function ccClusterCapacityProviderAssociationsCapacityProviderStrategyPropertyToHclTerraform(struct?: CcClusterCapacityProviderAssociations.CapacityProviderStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        base: {
            value: cdktn.numberToHclTerraform(struct!.base),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        capacity_provider: {
            value: cdktn.stringToHclTerraform(struct!.capacityProvider),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weight: {
            value: cdktn.numberToHclTerraform(struct!.weight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcClusterCapacityProviderAssociations {
export interface CapacityProviderStrategyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster_capacity_provider_associations#base CcClusterCapacityProviderAssociations#base}
    */
    readonly base?: number;
    /**
    * If using ec2 auto-scaling, the name of the associated capacity provider. Otherwise FARGATE, FARGATE_SPOT.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster_capacity_provider_associations#capacity_provider CcClusterCapacityProviderAssociations#capacity_provider}
    */
    readonly capacityProvider: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster_capacity_provider_associations#weight CcClusterCapacityProviderAssociations#weight}
    */
    readonly weight?: number;
}
export class CapacityProviderStrategyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CapacityProviderStrategyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._base !== undefined) {
            hasAnyValues = true;
            internalValueResult.base = this._base;
        }
        if (this._capacityProvider !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityProvider = this._capacityProvider;
        }
        if (this._weight !== undefined) {
            hasAnyValues = true;
            internalValueResult.weight = this._weight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityProviderStrategyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._base = undefined;
            this._capacityProvider = undefined;
            this._weight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._base = value.base;
            this._capacityProvider = value.capacityProvider;
            this._weight = value.weight;
        }
    }

    // base - computed: true, optional: true, required: false
    private _base?: number; 
    public get base() {
        return this.getNumberAttribute('base');
    }
    public set base(value: number) {
        this._base = value;
    }
    public resetBase() {
        this._base = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseInput() {
        return this._base;
    }

    // capacity_provider - computed: false, optional: false, required: true
    private _capacityProvider?: string; 
    public get capacityProvider() {
        return this.getStringAttribute('capacity_provider');
    }
    public set capacityProvider(value: string) {
        this._capacityProvider = value;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProviderInput() {
        return this._capacityProvider;
    }

    // weight - computed: true, optional: true, required: false
    private _weight?: number; 
    public get weight() {
        return this.getNumberAttribute('weight');
    }
    public set weight(value: number) {
        this._weight = value;
    }
    public resetWeight() {
        this._weight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weightInput() {
        return this._weight;
    }
}

export class CapacityProviderStrategyPropertyList extends cdktn.ComplexList {
    public internalValue? : CapacityProviderStrategyProperty[] | cdktn.IResolvable

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
    public get(index: number): CapacityProviderStrategyPropertyOutputReference {
        return new CapacityProviderStrategyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
