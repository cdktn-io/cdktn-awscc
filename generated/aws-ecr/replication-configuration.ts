// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcReplicationConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The replication configuration for a registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration#replication_configuration CcReplicationConfiguration#replication_configuration}
    */
    readonly replicationConfiguration: CcReplicationConfiguration.ReplicationConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration awscc_ecr_replication_configuration}
*/
export class CcReplicationConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ecr_replication_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcReplicationConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcReplicationConfiguration to import
    * @param importFromId The id of the existing CcReplicationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcReplicationConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecr_replication_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration awscc_ecr_replication_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcReplicationConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcReplicationConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecr_replication_configuration',
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
        this._replicationConfiguration.internalValue = config.replicationConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // registry_id - computed: true, optional: false, required: false
    public get registryId() {
        return this.getStringAttribute('registry_id');
    }

    // replication_configuration - computed: false, optional: false, required: true
    private _replicationConfiguration = new CcReplicationConfiguration.ReplicationConfigurationPropertyOutputReference(this, "replication_configuration");
    public get replicationConfiguration() {
        return this._replicationConfiguration;
    }
    public putReplicationConfiguration(value: CcReplicationConfiguration.ReplicationConfigurationProperty) {
        this._replicationConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationConfigurationInput() {
        return this._replicationConfiguration.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            replication_configuration: ccReplicationConfigurationReplicationConfigurationPropertyToTerraform(this._replicationConfiguration.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            replication_configuration: {
                value: ccReplicationConfigurationReplicationConfigurationPropertyToHclTerraform(this._replicationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcReplicationConfiguration.ReplicationConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccReplicationConfigurationReplicationDestinationPropertyToTerraform(struct?: CcReplicationConfiguration.ReplicationDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        region: cdktn.stringToTerraform(struct!.region),
        registry_id: cdktn.stringToTerraform(struct!.registryId),
    }
}


export function ccReplicationConfigurationReplicationDestinationPropertyToHclTerraform(struct?: CcReplicationConfiguration.ReplicationDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        registry_id: {
            value: cdktn.stringToHclTerraform(struct!.registryId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicationConfigurationRepositoryFilterPropertyToTerraform(struct?: CcReplicationConfiguration.RepositoryFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filter: cdktn.stringToTerraform(struct!.filter),
        filter_type: cdktn.stringToTerraform(struct!.filterType),
    }
}


export function ccReplicationConfigurationRepositoryFilterPropertyToHclTerraform(struct?: CcReplicationConfiguration.RepositoryFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filter: {
            value: cdktn.stringToHclTerraform(struct!.filter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter_type: {
            value: cdktn.stringToHclTerraform(struct!.filterType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicationConfigurationReplicationRulePropertyToTerraform(struct?: CcReplicationConfiguration.ReplicationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destinations: cdktn.listMapper(ccReplicationConfigurationReplicationDestinationPropertyToTerraform, false)(struct!.destinations),
        repository_filters: cdktn.listMapper(ccReplicationConfigurationRepositoryFilterPropertyToTerraform, false)(struct!.repositoryFilters),
    }
}


export function ccReplicationConfigurationReplicationRulePropertyToHclTerraform(struct?: CcReplicationConfiguration.ReplicationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destinations: {
            value: cdktn.listMapperHcl(ccReplicationConfigurationReplicationDestinationPropertyToHclTerraform, false)(struct!.destinations),
            isBlock: true,
            type: "list",
            storageClassType: "ReplicationDestinationPropertyList",
        },
        repository_filters: {
            value: cdktn.listMapperHcl(ccReplicationConfigurationRepositoryFilterPropertyToHclTerraform, false)(struct!.repositoryFilters),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryFilterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicationConfigurationReplicationConfigurationPropertyToTerraform(struct?: CcReplicationConfiguration.ReplicationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rules: cdktn.listMapper(ccReplicationConfigurationReplicationRulePropertyToTerraform, false)(struct!.rules),
    }
}


export function ccReplicationConfigurationReplicationConfigurationPropertyToHclTerraform(struct?: CcReplicationConfiguration.ReplicationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rules: {
            value: cdktn.listMapperHcl(ccReplicationConfigurationReplicationRulePropertyToHclTerraform, false)(struct!.rules),
            isBlock: true,
            type: "list",
            storageClassType: "ReplicationRulePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcReplicationConfiguration {
export interface ReplicationDestinationProperty {
    /**
    * The Region to replicate to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration#region CcReplicationConfiguration#region}
    */
    readonly region: string;
    /**
    * The AWS account ID of the Amazon ECR private registry to replicate to. When configuring cross-Region replication within your own registry, specify your own account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration#registry_id CcReplicationConfiguration#registry_id}
    */
    readonly registryId: string;
}
export class ReplicationDestinationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ReplicationDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._registryId !== undefined) {
            hasAnyValues = true;
            internalValueResult.registryId = this._registryId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicationDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._region = undefined;
            this._registryId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._region = value.region;
            this._registryId = value.registryId;
        }
    }

    // region - computed: false, optional: false, required: true
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }

    // registry_id - computed: false, optional: false, required: true
    private _registryId?: string; 
    public get registryId() {
        return this.getStringAttribute('registry_id');
    }
    public set registryId(value: string) {
        this._registryId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get registryIdInput() {
        return this._registryId;
    }
}

export class ReplicationDestinationPropertyList extends cdktn.ComplexList {
    public internalValue? : ReplicationDestinationProperty[] | cdktn.IResolvable

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
    public get(index: number): ReplicationDestinationPropertyOutputReference {
        return new ReplicationDestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RepositoryFilterProperty {
    /**
    * The repository filter details. When the ``PREFIX_MATCH`` filter type is specified, this value is required and should be the repository name prefix to configure replication for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration#filter CcReplicationConfiguration#filter}
    */
    readonly filter?: string;
    /**
    * The repository filter type. The only supported value is ``PREFIX_MATCH``, which is a repository name prefix specified with the ``filter`` parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration#filter_type CcReplicationConfiguration#filter_type}
    */
    readonly filterType?: string;
}
export class RepositoryFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RepositoryFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filter !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter;
        }
        if (this._filterType !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterType = this._filterType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RepositoryFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filter = undefined;
            this._filterType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filter = value.filter;
            this._filterType = value.filterType;
        }
    }

    // filter - computed: true, optional: true, required: false
    private _filter?: string; 
    public get filter() {
        return this.getStringAttribute('filter');
    }
    public set filter(value: string) {
        this._filter = value;
    }
    public resetFilter() {
        this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter;
    }

    // filter_type - computed: true, optional: true, required: false
    private _filterType?: string; 
    public get filterType() {
        return this.getStringAttribute('filter_type');
    }
    public set filterType(value: string) {
        this._filterType = value;
    }
    public resetFilterType() {
        this._filterType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterTypeInput() {
        return this._filterType;
    }
}

export class RepositoryFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : RepositoryFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): RepositoryFilterPropertyOutputReference {
        return new RepositoryFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ReplicationRuleProperty {
    /**
    * An array of objects representing the destination for a replication rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration#destinations CcReplicationConfiguration#destinations}
    */
    readonly destinations: ReplicationDestinationProperty[] | cdktn.IResolvable;
    /**
    * An array of objects representing the filters for a replication rule. Specifying a repository filter for a replication rule provides a method for controlling which repositories in a private registry are replicated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration#repository_filters CcReplicationConfiguration#repository_filters}
    */
    readonly repositoryFilters?: RepositoryFilterProperty[] | cdktn.IResolvable;
}
export class ReplicationRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ReplicationRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinations = this._destinations?.internalValue;
        }
        if (this._repositoryFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryFilters = this._repositoryFilters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicationRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinations.internalValue = undefined;
            this._repositoryFilters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinations.internalValue = value.destinations;
            this._repositoryFilters.internalValue = value.repositoryFilters;
        }
    }

    // destinations - computed: false, optional: false, required: true
    private _destinations = new ReplicationDestinationPropertyList(this, "destinations", false);
    public get destinations() {
        return this._destinations;
    }
    public putDestinations(value: ReplicationDestinationProperty[] | cdktn.IResolvable) {
        this._destinations.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationsInput() {
        return this._destinations.internalValue;
    }

    // repository_filters - computed: true, optional: true, required: false
    private _repositoryFilters = new RepositoryFilterPropertyList(this, "repository_filters", false);
    public get repositoryFilters() {
        return this._repositoryFilters;
    }
    public putRepositoryFilters(value: RepositoryFilterProperty[] | cdktn.IResolvable) {
        this._repositoryFilters.internalValue = value;
    }
    public resetRepositoryFilters() {
        this._repositoryFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryFiltersInput() {
        return this._repositoryFilters.internalValue;
    }
}

export class ReplicationRulePropertyList extends cdktn.ComplexList {
    public internalValue? : ReplicationRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): ReplicationRulePropertyOutputReference {
        return new ReplicationRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ReplicationConfigurationProperty {
    /**
    * An array of objects representing the replication destinations and repository filters for a replication configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration#rules CcReplicationConfiguration#rules}
    */
    readonly rules: ReplicationRuleProperty[] | cdktn.IResolvable;
}
export class ReplicationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rules = this._rules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rules.internalValue = value.rules;
        }
    }

    // rules - computed: false, optional: false, required: true
    private _rules = new ReplicationRulePropertyList(this, "rules", false);
    public get rules() {
        return this._rules;
    }
    public putRules(value: ReplicationRuleProperty[] | cdktn.IResolvable) {
        this._rules.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
        return this._rules.internalValue;
    }
}
}
