// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_registry_scanning_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRegistryScanningConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The scanning rules associated with the registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_registry_scanning_configuration#rules CcRegistryScanningConfiguration#rules}
    */
    readonly rules: CcRegistryScanningConfiguration.ScanningRuleProperty[] | cdktn.IResolvable;
    /**
    * The type of scanning configured for the registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_registry_scanning_configuration#scan_type CcRegistryScanningConfiguration#scan_type}
    */
    readonly scanType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_registry_scanning_configuration awscc_ecr_registry_scanning_configuration}
*/
export class CcRegistryScanningConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ecr_registry_scanning_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRegistryScanningConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRegistryScanningConfiguration to import
    * @param importFromId The id of the existing CcRegistryScanningConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_registry_scanning_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRegistryScanningConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecr_registry_scanning_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_registry_scanning_configuration awscc_ecr_registry_scanning_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRegistryScanningConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcRegistryScanningConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecr_registry_scanning_configuration',
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
        this._rules.internalValue = config.rules;
        this._scanType = config.scanType;
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

    // rules - computed: false, optional: false, required: true
    private _rules = new CcRegistryScanningConfiguration.ScanningRulePropertyList(this, "rules", false);
    public get rules() {
        return this._rules;
    }
    public putRules(value: CcRegistryScanningConfiguration.ScanningRuleProperty[] | cdktn.IResolvable) {
        this._rules.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
        return this._rules.internalValue;
    }

    // scan_type - computed: false, optional: false, required: true
    private _scanType?: string; 
    public get scanType() {
        return this.getStringAttribute('scan_type');
    }
    public set scanType(value: string) {
        this._scanType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scanTypeInput() {
        return this._scanType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            rules: cdktn.listMapper(ccRegistryScanningConfigurationScanningRulePropertyToTerraform, false)(this._rules.internalValue),
            scan_type: cdktn.stringToTerraform(this._scanType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            rules: {
                value: cdktn.listMapperHcl(ccRegistryScanningConfigurationScanningRulePropertyToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRegistryScanningConfiguration.ScanningRulePropertyList",
            },
            scan_type: {
                value: cdktn.stringToHclTerraform(this._scanType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRegistryScanningConfigurationRepositoryFilterPropertyToTerraform(struct?: CcRegistryScanningConfiguration.RepositoryFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filter: cdktn.stringToTerraform(struct!.filter),
        filter_type: cdktn.stringToTerraform(struct!.filterType),
    }
}


export function ccRegistryScanningConfigurationRepositoryFilterPropertyToHclTerraform(struct?: CcRegistryScanningConfiguration.RepositoryFilterProperty | cdktn.IResolvable): any {
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


export function ccRegistryScanningConfigurationScanningRulePropertyToTerraform(struct?: CcRegistryScanningConfiguration.ScanningRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        repository_filters: cdktn.listMapper(ccRegistryScanningConfigurationRepositoryFilterPropertyToTerraform, false)(struct!.repositoryFilters),
        scan_frequency: cdktn.stringToTerraform(struct!.scanFrequency),
    }
}


export function ccRegistryScanningConfigurationScanningRulePropertyToHclTerraform(struct?: CcRegistryScanningConfiguration.ScanningRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        repository_filters: {
            value: cdktn.listMapperHcl(ccRegistryScanningConfigurationRepositoryFilterPropertyToHclTerraform, false)(struct!.repositoryFilters),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryFilterPropertyList",
        },
        scan_frequency: {
            value: cdktn.stringToHclTerraform(struct!.scanFrequency),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcRegistryScanningConfiguration {
export interface RepositoryFilterProperty {
    /**
    * The filter to use when scanning.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_registry_scanning_configuration#filter CcRegistryScanningConfiguration#filter}
    */
    readonly filter: string;
    /**
    * The type associated with the filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_registry_scanning_configuration#filter_type CcRegistryScanningConfiguration#filter_type}
    */
    readonly filterType: string;
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

    // filter - computed: false, optional: false, required: true
    private _filter?: string; 
    public get filter() {
        return this.getStringAttribute('filter');
    }
    public set filter(value: string) {
        this._filter = value;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter;
    }

    // filter_type - computed: false, optional: false, required: true
    private _filterType?: string; 
    public get filterType() {
        return this.getStringAttribute('filter_type');
    }
    public set filterType(value: string) {
        this._filterType = value;
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
export interface ScanningRuleProperty {
    /**
    * The details of a scanning repository filter. For more information on how to use filters, see [Using filters](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#image-scanning-filters) in the *Amazon Elastic Container Registry User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_registry_scanning_configuration#repository_filters CcRegistryScanningConfiguration#repository_filters}
    */
    readonly repositoryFilters: RepositoryFilterProperty[] | cdktn.IResolvable;
    /**
    * The frequency that scans are performed at for a private registry. When the ``ENHANCED`` scan type is specified, the supported scan frequencies are ``CONTINUOUS_SCAN`` and ``SCAN_ON_PUSH``. When the ``BASIC`` scan type is specified, the ``SCAN_ON_PUSH`` scan frequency is supported. If scan on push is not specified, then the ``MANUAL`` scan frequency is set by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_registry_scanning_configuration#scan_frequency CcRegistryScanningConfiguration#scan_frequency}
    */
    readonly scanFrequency: string;
}
export class ScanningRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ScanningRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._repositoryFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryFilters = this._repositoryFilters?.internalValue;
        }
        if (this._scanFrequency !== undefined) {
            hasAnyValues = true;
            internalValueResult.scanFrequency = this._scanFrequency;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScanningRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._repositoryFilters.internalValue = undefined;
            this._scanFrequency = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._repositoryFilters.internalValue = value.repositoryFilters;
            this._scanFrequency = value.scanFrequency;
        }
    }

    // repository_filters - computed: false, optional: false, required: true
    private _repositoryFilters = new RepositoryFilterPropertyList(this, "repository_filters", false);
    public get repositoryFilters() {
        return this._repositoryFilters;
    }
    public putRepositoryFilters(value: RepositoryFilterProperty[] | cdktn.IResolvable) {
        this._repositoryFilters.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryFiltersInput() {
        return this._repositoryFilters.internalValue;
    }

    // scan_frequency - computed: false, optional: false, required: true
    private _scanFrequency?: string; 
    public get scanFrequency() {
        return this.getStringAttribute('scan_frequency');
    }
    public set scanFrequency(value: string) {
        this._scanFrequency = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scanFrequencyInput() {
        return this._scanFrequency;
    }
}

export class ScanningRulePropertyList extends cdktn.ComplexList {
    public internalValue? : ScanningRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): ScanningRulePropertyOutputReference {
        return new ScanningRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
