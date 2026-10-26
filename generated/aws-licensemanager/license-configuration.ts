// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLicenseConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Description of the license configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#description CcLicenseConfiguration#description}
    */
    readonly description?: string;
    /**
    * When true, disassociates a resource when software is uninstalled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#disassociate_when_not_found CcLicenseConfiguration#disassociate_when_not_found}
    */
    readonly disassociateWhenNotFound?: boolean | cdktn.IResolvable;
    /**
    * Number of licenses managed by the license configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#license_count CcLicenseConfiguration#license_count}
    */
    readonly licenseCount?: number;
    /**
    * Indicates whether hard or soft license enforcement is used. Exceeding a hard limit blocks the launch of new instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#license_count_hard_limit CcLicenseConfiguration#license_count_hard_limit}
    */
    readonly licenseCountHardLimit?: boolean | cdktn.IResolvable;
    /**
    * Dimension used to track the license inventory.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#license_counting_type CcLicenseConfiguration#license_counting_type}
    */
    readonly licenseCountingType: string;
    /**
    * License configuration expiry as an epoch timestamp (seconds since 1970-01-01T00:00:00Z).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#license_expiry CcLicenseConfiguration#license_expiry}
    */
    readonly licenseExpiry?: number;
    /**
    * License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#license_rules CcLicenseConfiguration#license_rules}
    */
    readonly licenseRules?: string[];
    /**
    * Name of the license configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#name CcLicenseConfiguration#name}
    */
    readonly name: string;
    /**
    * Product information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#product_information_list CcLicenseConfiguration#product_information_list}
    */
    readonly productInformationList?: CcLicenseConfiguration.ProductInformationListProperty[] | cdktn.IResolvable;
    /**
    * Tags to add to the license configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#tags CcLicenseConfiguration#tags}
    */
    readonly tags?: CcLicenseConfiguration.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration awscc_licensemanager_license_configuration}
*/
export class CcLicenseConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_licensemanager_license_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLicenseConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLicenseConfiguration to import
    * @param importFromId The id of the existing CcLicenseConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLicenseConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_licensemanager_license_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration awscc_licensemanager_license_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLicenseConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcLicenseConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_licensemanager_license_configuration',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
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
        this._disassociateWhenNotFound = config.disassociateWhenNotFound;
        this._licenseCount = config.licenseCount;
        this._licenseCountHardLimit = config.licenseCountHardLimit;
        this._licenseCountingType = config.licenseCountingType;
        this._licenseExpiry = config.licenseExpiry;
        this._licenseRules = config.licenseRules;
        this._name = config.name;
        this._productInformationList.internalValue = config.productInformationList;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // disassociate_when_not_found - computed: true, optional: true, required: false
    private _disassociateWhenNotFound?: boolean | cdktn.IResolvable; 
    public get disassociateWhenNotFound() {
        return this.getBooleanAttribute('disassociate_when_not_found');
    }
    public set disassociateWhenNotFound(value: boolean | cdktn.IResolvable) {
        this._disassociateWhenNotFound = value;
    }
    public resetDisassociateWhenNotFound() {
        this._disassociateWhenNotFound = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disassociateWhenNotFoundInput() {
        return this._disassociateWhenNotFound;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // license_configuration_arn - computed: true, optional: false, required: false
    public get licenseConfigurationArn() {
        return this.getStringAttribute('license_configuration_arn');
    }

    // license_configuration_id - computed: true, optional: false, required: false
    public get licenseConfigurationId() {
        return this.getStringAttribute('license_configuration_id');
    }

    // license_count - computed: true, optional: true, required: false
    private _licenseCount?: number; 
    public get licenseCount() {
        return this.getNumberAttribute('license_count');
    }
    public set licenseCount(value: number) {
        this._licenseCount = value;
    }
    public resetLicenseCount() {
        this._licenseCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseCountInput() {
        return this._licenseCount;
    }

    // license_count_hard_limit - computed: true, optional: true, required: false
    private _licenseCountHardLimit?: boolean | cdktn.IResolvable; 
    public get licenseCountHardLimit() {
        return this.getBooleanAttribute('license_count_hard_limit');
    }
    public set licenseCountHardLimit(value: boolean | cdktn.IResolvable) {
        this._licenseCountHardLimit = value;
    }
    public resetLicenseCountHardLimit() {
        this._licenseCountHardLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseCountHardLimitInput() {
        return this._licenseCountHardLimit;
    }

    // license_counting_type - computed: false, optional: false, required: true
    private _licenseCountingType?: string; 
    public get licenseCountingType() {
        return this.getStringAttribute('license_counting_type');
    }
    public set licenseCountingType(value: string) {
        this._licenseCountingType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseCountingTypeInput() {
        return this._licenseCountingType;
    }

    // license_expiry - computed: true, optional: true, required: false
    private _licenseExpiry?: number; 
    public get licenseExpiry() {
        return this.getNumberAttribute('license_expiry');
    }
    public set licenseExpiry(value: number) {
        this._licenseExpiry = value;
    }
    public resetLicenseExpiry() {
        this._licenseExpiry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseExpiryInput() {
        return this._licenseExpiry;
    }

    // license_rules - computed: true, optional: true, required: false
    private _licenseRules?: string[]; 
    public get licenseRules() {
        return this.getListAttribute('license_rules');
    }
    public set licenseRules(value: string[]) {
        this._licenseRules = value;
    }
    public resetLicenseRules() {
        this._licenseRules = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseRulesInput() {
        return this._licenseRules;
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // owner_account_id - computed: true, optional: false, required: false
    public get ownerAccountId() {
        return this.getStringAttribute('owner_account_id');
    }

    // product_information_list - computed: true, optional: true, required: false
    private _productInformationList = new CcLicenseConfiguration.ProductInformationListPropertyList(this, "product_information_list", false);
    public get productInformationList() {
        return this._productInformationList;
    }
    public putProductInformationList(value: CcLicenseConfiguration.ProductInformationListProperty[] | cdktn.IResolvable) {
        this._productInformationList.internalValue = value;
    }
    public resetProductInformationList() {
        this._productInformationList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productInformationListInput() {
        return this._productInformationList.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLicenseConfiguration.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLicenseConfiguration.TagsProperty[] | cdktn.IResolvable) {
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
            description: cdktn.stringToTerraform(this._description),
            disassociate_when_not_found: cdktn.booleanToTerraform(this._disassociateWhenNotFound),
            license_count: cdktn.numberToTerraform(this._licenseCount),
            license_count_hard_limit: cdktn.booleanToTerraform(this._licenseCountHardLimit),
            license_counting_type: cdktn.stringToTerraform(this._licenseCountingType),
            license_expiry: cdktn.numberToTerraform(this._licenseExpiry),
            license_rules: cdktn.listMapper(cdktn.stringToTerraform, false)(this._licenseRules),
            name: cdktn.stringToTerraform(this._name),
            product_information_list: cdktn.listMapper(ccLicenseConfigurationProductInformationListPropertyToTerraform, false)(this._productInformationList.internalValue),
            tags: cdktn.listMapper(ccLicenseConfigurationTagsPropertyToTerraform, false)(this._tags.internalValue),
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
            disassociate_when_not_found: {
                value: cdktn.booleanToHclTerraform(this._disassociateWhenNotFound),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            license_count: {
                value: cdktn.numberToHclTerraform(this._licenseCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            license_count_hard_limit: {
                value: cdktn.booleanToHclTerraform(this._licenseCountHardLimit),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            license_counting_type: {
                value: cdktn.stringToHclTerraform(this._licenseCountingType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            license_expiry: {
                value: cdktn.numberToHclTerraform(this._licenseExpiry),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            license_rules: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._licenseRules),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            product_information_list: {
                value: cdktn.listMapperHcl(ccLicenseConfigurationProductInformationListPropertyToHclTerraform, false)(this._productInformationList.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLicenseConfiguration.ProductInformationListPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLicenseConfigurationTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLicenseConfiguration.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLicenseConfigurationProductInformationFilterListPropertyToTerraform(struct?: CcLicenseConfiguration.ProductInformationFilterListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        product_information_filter_comparator: cdktn.stringToTerraform(struct!.productInformationFilterComparator),
        product_information_filter_name: cdktn.stringToTerraform(struct!.productInformationFilterName),
        product_information_filter_value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.productInformationFilterValue),
    }
}


export function ccLicenseConfigurationProductInformationFilterListPropertyToHclTerraform(struct?: CcLicenseConfiguration.ProductInformationFilterListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        product_information_filter_comparator: {
            value: cdktn.stringToHclTerraform(struct!.productInformationFilterComparator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        product_information_filter_name: {
            value: cdktn.stringToHclTerraform(struct!.productInformationFilterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        product_information_filter_value: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.productInformationFilterValue),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseConfigurationProductInformationListPropertyToTerraform(struct?: CcLicenseConfiguration.ProductInformationListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        product_information_filter_list: cdktn.listMapper(ccLicenseConfigurationProductInformationFilterListPropertyToTerraform, false)(struct!.productInformationFilterList),
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
    }
}


export function ccLicenseConfigurationProductInformationListPropertyToHclTerraform(struct?: CcLicenseConfiguration.ProductInformationListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        product_information_filter_list: {
            value: cdktn.listMapperHcl(ccLicenseConfigurationProductInformationFilterListPropertyToHclTerraform, false)(struct!.productInformationFilterList),
            isBlock: true,
            type: "list",
            storageClassType: "ProductInformationFilterListPropertyList",
        },
        resource_type: {
            value: cdktn.stringToHclTerraform(struct!.resourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseConfigurationTagsPropertyToTerraform(struct?: CcLicenseConfiguration.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLicenseConfigurationTagsPropertyToHclTerraform(struct?: CcLicenseConfiguration.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcLicenseConfiguration {
export interface ProductInformationFilterListProperty {
    /**
    * Logical operator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#product_information_filter_comparator CcLicenseConfiguration#product_information_filter_comparator}
    */
    readonly productInformationFilterComparator?: string;
    /**
    * Filter name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#product_information_filter_name CcLicenseConfiguration#product_information_filter_name}
    */
    readonly productInformationFilterName?: string;
    /**
    * Filter value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#product_information_filter_value CcLicenseConfiguration#product_information_filter_value}
    */
    readonly productInformationFilterValue?: string[];
}
export class ProductInformationFilterListPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProductInformationFilterListProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._productInformationFilterComparator !== undefined) {
            hasAnyValues = true;
            internalValueResult.productInformationFilterComparator = this._productInformationFilterComparator;
        }
        if (this._productInformationFilterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.productInformationFilterName = this._productInformationFilterName;
        }
        if (this._productInformationFilterValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.productInformationFilterValue = this._productInformationFilterValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProductInformationFilterListProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._productInformationFilterComparator = undefined;
            this._productInformationFilterName = undefined;
            this._productInformationFilterValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._productInformationFilterComparator = value.productInformationFilterComparator;
            this._productInformationFilterName = value.productInformationFilterName;
            this._productInformationFilterValue = value.productInformationFilterValue;
        }
    }

    // product_information_filter_comparator - computed: true, optional: true, required: false
    private _productInformationFilterComparator?: string; 
    public get productInformationFilterComparator() {
        return this.getStringAttribute('product_information_filter_comparator');
    }
    public set productInformationFilterComparator(value: string) {
        this._productInformationFilterComparator = value;
    }
    public resetProductInformationFilterComparator() {
        this._productInformationFilterComparator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productInformationFilterComparatorInput() {
        return this._productInformationFilterComparator;
    }

    // product_information_filter_name - computed: true, optional: true, required: false
    private _productInformationFilterName?: string; 
    public get productInformationFilterName() {
        return this.getStringAttribute('product_information_filter_name');
    }
    public set productInformationFilterName(value: string) {
        this._productInformationFilterName = value;
    }
    public resetProductInformationFilterName() {
        this._productInformationFilterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productInformationFilterNameInput() {
        return this._productInformationFilterName;
    }

    // product_information_filter_value - computed: true, optional: true, required: false
    private _productInformationFilterValue?: string[]; 
    public get productInformationFilterValue() {
        return this.getListAttribute('product_information_filter_value');
    }
    public set productInformationFilterValue(value: string[]) {
        this._productInformationFilterValue = value;
    }
    public resetProductInformationFilterValue() {
        this._productInformationFilterValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productInformationFilterValueInput() {
        return this._productInformationFilterValue;
    }
}

export class ProductInformationFilterListPropertyList extends cdktn.ComplexList {
    public internalValue? : ProductInformationFilterListProperty[] | cdktn.IResolvable

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
    public get(index: number): ProductInformationFilterListPropertyOutputReference {
        return new ProductInformationFilterListPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ProductInformationListProperty {
    /**
    * A product information filter list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#product_information_filter_list CcLicenseConfiguration#product_information_filter_list}
    */
    readonly productInformationFilterList?: ProductInformationFilterListProperty[] | cdktn.IResolvable;
    /**
    * Resource type. The possible values are SSM_MANAGED | RDS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#resource_type CcLicenseConfiguration#resource_type}
    */
    readonly resourceType?: string;
}
export class ProductInformationListPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProductInformationListProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._productInformationFilterList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.productInformationFilterList = this._productInformationFilterList?.internalValue;
        }
        if (this._resourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProductInformationListProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._productInformationFilterList.internalValue = undefined;
            this._resourceType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._productInformationFilterList.internalValue = value.productInformationFilterList;
            this._resourceType = value.resourceType;
        }
    }

    // product_information_filter_list - computed: true, optional: true, required: false
    private _productInformationFilterList = new ProductInformationFilterListPropertyList(this, "product_information_filter_list", false);
    public get productInformationFilterList() {
        return this._productInformationFilterList;
    }
    public putProductInformationFilterList(value: ProductInformationFilterListProperty[] | cdktn.IResolvable) {
        this._productInformationFilterList.internalValue = value;
    }
    public resetProductInformationFilterList() {
        this._productInformationFilterList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productInformationFilterListInput() {
        return this._productInformationFilterList.internalValue;
    }

    // resource_type - computed: true, optional: true, required: false
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    public resetResourceType() {
        this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }
}

export class ProductInformationListPropertyList extends cdktn.ComplexList {
    public internalValue? : ProductInformationListProperty[] | cdktn.IResolvable

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
    public get(index: number): ProductInformationListPropertyOutputReference {
        return new ProductInformationListPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#key CcLicenseConfiguration#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#value CcLicenseConfiguration#value}
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
