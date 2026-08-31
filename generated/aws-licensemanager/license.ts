// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLicenseProps extends cdktn.TerraformMetaArguments {
    /**
    * Beneficiary of the license.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#beneficiary CcLicense#beneficiary}
    */
    readonly beneficiary: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#consumption_configuration CcLicense#consumption_configuration}
    */
    readonly consumptionConfiguration: CcLicense.ConsumptionConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#entitlements CcLicense#entitlements}
    */
    readonly entitlements: CcLicense.EntitlementProperty[] | cdktn.IResolvable;
    /**
    * Home region for the created license.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#home_region CcLicense#home_region}
    */
    readonly homeRegion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#issuer CcLicense#issuer}
    */
    readonly issuer: CcLicense.IssuerDataProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#license_metadata CcLicense#license_metadata}
    */
    readonly licenseMetadata?: CcLicense.MetadataProperty[] | cdktn.IResolvable;
    /**
    * Name for the created license.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#license_name CcLicense#license_name}
    */
    readonly licenseName: string;
    /**
    * Product name for the created license.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#product_name CcLicense#product_name}
    */
    readonly productName: string;
    /**
    * ProductSKU of the license.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#product_sku CcLicense#product_sku}
    */
    readonly productSku: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#status CcLicense#status}
    */
    readonly status?: string;
    /**
    * A list of tags to attach.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#tags CcLicense#tags}
    */
    readonly tags?: CcLicense.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#validity CcLicense#validity}
    */
    readonly validity: CcLicense.ValidityDateFormatProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license awscc_licensemanager_license}
*/
export class CcLicense extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_licensemanager_license";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLicense resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLicense to import
    * @param importFromId The id of the existing CcLicense that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLicense to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_licensemanager_license", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license awscc_licensemanager_license} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLicenseProps
    */
    public constructor(scope: Construct, id: string, config: CcLicenseProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_licensemanager_license',
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
        this._beneficiary = config.beneficiary;
        this._consumptionConfiguration.internalValue = config.consumptionConfiguration;
        this._entitlements.internalValue = config.entitlements;
        this._homeRegion = config.homeRegion;
        this._issuer.internalValue = config.issuer;
        this._licenseMetadata.internalValue = config.licenseMetadata;
        this._licenseName = config.licenseName;
        this._productName = config.productName;
        this._productSku = config.productSku;
        this._status = config.status;
        this._tags.internalValue = config.tags;
        this._validity.internalValue = config.validity;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // beneficiary - computed: false, optional: false, required: true
    private _beneficiary?: string; 
    public get beneficiary() {
        return this.getStringAttribute('beneficiary');
    }
    public set beneficiary(value: string) {
        this._beneficiary = value;
    }
    // Temporarily expose input value. Use with caution.
    public get beneficiaryInput() {
        return this._beneficiary;
    }

    // consumption_configuration - computed: false, optional: false, required: true
    private _consumptionConfiguration = new CcLicense.ConsumptionConfigurationPropertyOutputReference(this, "consumption_configuration");
    public get consumptionConfiguration() {
        return this._consumptionConfiguration;
    }
    public putConsumptionConfiguration(value: CcLicense.ConsumptionConfigurationProperty) {
        this._consumptionConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get consumptionConfigurationInput() {
        return this._consumptionConfiguration.internalValue;
    }

    // entitlements - computed: false, optional: false, required: true
    private _entitlements = new CcLicense.EntitlementPropertyList(this, "entitlements", false);
    public get entitlements() {
        return this._entitlements;
    }
    public putEntitlements(value: CcLicense.EntitlementProperty[] | cdktn.IResolvable) {
        this._entitlements.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get entitlementsInput() {
        return this._entitlements.internalValue;
    }

    // home_region - computed: false, optional: false, required: true
    private _homeRegion?: string; 
    public get homeRegion() {
        return this.getStringAttribute('home_region');
    }
    public set homeRegion(value: string) {
        this._homeRegion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get homeRegionInput() {
        return this._homeRegion;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // issuer - computed: false, optional: false, required: true
    private _issuer = new CcLicense.IssuerDataPropertyOutputReference(this, "issuer");
    public get issuer() {
        return this._issuer;
    }
    public putIssuer(value: CcLicense.IssuerDataProperty) {
        this._issuer.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get issuerInput() {
        return this._issuer.internalValue;
    }

    // license_arn - computed: true, optional: false, required: false
    public get licenseArn() {
        return this.getStringAttribute('license_arn');
    }

    // license_metadata - computed: true, optional: true, required: false
    private _licenseMetadata = new CcLicense.MetadataPropertyList(this, "license_metadata", false);
    public get licenseMetadata() {
        return this._licenseMetadata;
    }
    public putLicenseMetadata(value: CcLicense.MetadataProperty[] | cdktn.IResolvable) {
        this._licenseMetadata.internalValue = value;
    }
    public resetLicenseMetadata() {
        this._licenseMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseMetadataInput() {
        return this._licenseMetadata.internalValue;
    }

    // license_name - computed: false, optional: false, required: true
    private _licenseName?: string; 
    public get licenseName() {
        return this.getStringAttribute('license_name');
    }
    public set licenseName(value: string) {
        this._licenseName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseNameInput() {
        return this._licenseName;
    }

    // product_name - computed: false, optional: false, required: true
    private _productName?: string; 
    public get productName() {
        return this.getStringAttribute('product_name');
    }
    public set productName(value: string) {
        this._productName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get productNameInput() {
        return this._productName;
    }

    // product_sku - computed: false, optional: false, required: true
    private _productSku?: string; 
    public get productSku() {
        return this.getStringAttribute('product_sku');
    }
    public set productSku(value: string) {
        this._productSku = value;
    }
    // Temporarily expose input value. Use with caution.
    public get productSkuInput() {
        return this._productSku;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLicense.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLicense.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // validity - computed: false, optional: false, required: true
    private _validity = new CcLicense.ValidityDateFormatPropertyOutputReference(this, "validity");
    public get validity() {
        return this._validity;
    }
    public putValidity(value: CcLicense.ValidityDateFormatProperty) {
        this._validity.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get validityInput() {
        return this._validity.internalValue;
    }

    // version - computed: true, optional: false, required: false
    public get version() {
        return this.getStringAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            beneficiary: cdktn.stringToTerraform(this._beneficiary),
            consumption_configuration: ccLicenseConsumptionConfigurationPropertyToTerraform(this._consumptionConfiguration.internalValue),
            entitlements: cdktn.listMapper(ccLicenseEntitlementPropertyToTerraform, false)(this._entitlements.internalValue),
            home_region: cdktn.stringToTerraform(this._homeRegion),
            issuer: ccLicenseIssuerDataPropertyToTerraform(this._issuer.internalValue),
            license_metadata: cdktn.listMapper(ccLicenseMetadataPropertyToTerraform, false)(this._licenseMetadata.internalValue),
            license_name: cdktn.stringToTerraform(this._licenseName),
            product_name: cdktn.stringToTerraform(this._productName),
            product_sku: cdktn.stringToTerraform(this._productSku),
            status: cdktn.stringToTerraform(this._status),
            tags: cdktn.listMapper(ccLicenseTagPropertyToTerraform, false)(this._tags.internalValue),
            validity: ccLicenseValidityDateFormatPropertyToTerraform(this._validity.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            beneficiary: {
                value: cdktn.stringToHclTerraform(this._beneficiary),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            consumption_configuration: {
                value: ccLicenseConsumptionConfigurationPropertyToHclTerraform(this._consumptionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLicense.ConsumptionConfigurationProperty",
            },
            entitlements: {
                value: cdktn.listMapperHcl(ccLicenseEntitlementPropertyToHclTerraform, false)(this._entitlements.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLicense.EntitlementPropertyList",
            },
            home_region: {
                value: cdktn.stringToHclTerraform(this._homeRegion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            issuer: {
                value: ccLicenseIssuerDataPropertyToHclTerraform(this._issuer.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLicense.IssuerDataProperty",
            },
            license_metadata: {
                value: cdktn.listMapperHcl(ccLicenseMetadataPropertyToHclTerraform, false)(this._licenseMetadata.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLicense.MetadataPropertyList",
            },
            license_name: {
                value: cdktn.stringToHclTerraform(this._licenseName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            product_name: {
                value: cdktn.stringToHclTerraform(this._productName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            product_sku: {
                value: cdktn.stringToHclTerraform(this._productSku),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLicenseTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLicense.TagPropertyList",
            },
            validity: {
                value: ccLicenseValidityDateFormatPropertyToHclTerraform(this._validity.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLicense.ValidityDateFormatProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLicenseBorrowConfigurationPropertyToTerraform(struct?: CcLicense.BorrowConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allow_early_check_in: cdktn.booleanToTerraform(struct!.allowEarlyCheckIn),
        max_time_to_live_in_minutes: cdktn.numberToTerraform(struct!.maxTimeToLiveInMinutes),
    }
}


export function ccLicenseBorrowConfigurationPropertyToHclTerraform(struct?: CcLicense.BorrowConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allow_early_check_in: {
            value: cdktn.booleanToHclTerraform(struct!.allowEarlyCheckIn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        max_time_to_live_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.maxTimeToLiveInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseProvisionalConfigurationPropertyToTerraform(struct?: CcLicense.ProvisionalConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_time_to_live_in_minutes: cdktn.numberToTerraform(struct!.maxTimeToLiveInMinutes),
    }
}


export function ccLicenseProvisionalConfigurationPropertyToHclTerraform(struct?: CcLicense.ProvisionalConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_time_to_live_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.maxTimeToLiveInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseConsumptionConfigurationPropertyToTerraform(struct?: CcLicense.ConsumptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        borrow_configuration: ccLicenseBorrowConfigurationPropertyToTerraform(struct!.borrowConfiguration),
        provisional_configuration: ccLicenseProvisionalConfigurationPropertyToTerraform(struct!.provisionalConfiguration),
        renew_type: cdktn.stringToTerraform(struct!.renewType),
    }
}


export function ccLicenseConsumptionConfigurationPropertyToHclTerraform(struct?: CcLicense.ConsumptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        borrow_configuration: {
            value: ccLicenseBorrowConfigurationPropertyToHclTerraform(struct!.borrowConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "BorrowConfigurationProperty",
        },
        provisional_configuration: {
            value: ccLicenseProvisionalConfigurationPropertyToHclTerraform(struct!.provisionalConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ProvisionalConfigurationProperty",
        },
        renew_type: {
            value: cdktn.stringToHclTerraform(struct!.renewType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseEntitlementPropertyToTerraform(struct?: CcLicense.EntitlementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allow_check_in: cdktn.booleanToTerraform(struct!.allowCheckIn),
        max_count: cdktn.numberToTerraform(struct!.maxCount),
        name: cdktn.stringToTerraform(struct!.name),
        overage: cdktn.booleanToTerraform(struct!.overage),
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLicenseEntitlementPropertyToHclTerraform(struct?: CcLicense.EntitlementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allow_check_in: {
            value: cdktn.booleanToHclTerraform(struct!.allowCheckIn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        max_count: {
            value: cdktn.numberToHclTerraform(struct!.maxCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        overage: {
            value: cdktn.booleanToHclTerraform(struct!.overage),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
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


export function ccLicenseIssuerDataPropertyToTerraform(struct?: CcLicense.IssuerDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        sign_key: cdktn.stringToTerraform(struct!.signKey),
    }
}


export function ccLicenseIssuerDataPropertyToHclTerraform(struct?: CcLicense.IssuerDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sign_key: {
            value: cdktn.stringToHclTerraform(struct!.signKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseMetadataPropertyToTerraform(struct?: CcLicense.MetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLicenseMetadataPropertyToHclTerraform(struct?: CcLicense.MetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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


export function ccLicenseTagPropertyToTerraform(struct?: CcLicense.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLicenseTagPropertyToHclTerraform(struct?: CcLicense.TagProperty | cdktn.IResolvable): any {
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


export function ccLicenseValidityDateFormatPropertyToTerraform(struct?: CcLicense.ValidityDateFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        begin: cdktn.stringToTerraform(struct!.begin),
        end: cdktn.stringToTerraform(struct!.end),
    }
}


export function ccLicenseValidityDateFormatPropertyToHclTerraform(struct?: CcLicense.ValidityDateFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        begin: {
            value: cdktn.stringToHclTerraform(struct!.begin),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        end: {
            value: cdktn.stringToHclTerraform(struct!.end),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcLicense {
export interface BorrowConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#allow_early_check_in CcLicense#allow_early_check_in}
    */
    readonly allowEarlyCheckIn?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes CcLicense#max_time_to_live_in_minutes}
    */
    readonly maxTimeToLiveInMinutes?: number;
}
export class BorrowConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BorrowConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowEarlyCheckIn !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowEarlyCheckIn = this._allowEarlyCheckIn;
        }
        if (this._maxTimeToLiveInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxTimeToLiveInMinutes = this._maxTimeToLiveInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BorrowConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowEarlyCheckIn = undefined;
            this._maxTimeToLiveInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowEarlyCheckIn = value.allowEarlyCheckIn;
            this._maxTimeToLiveInMinutes = value.maxTimeToLiveInMinutes;
        }
    }

    // allow_early_check_in - computed: true, optional: true, required: false
    private _allowEarlyCheckIn?: boolean | cdktn.IResolvable; 
    public get allowEarlyCheckIn() {
        return this.getBooleanAttribute('allow_early_check_in');
    }
    public set allowEarlyCheckIn(value: boolean | cdktn.IResolvable) {
        this._allowEarlyCheckIn = value;
    }
    public resetAllowEarlyCheckIn() {
        this._allowEarlyCheckIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowEarlyCheckInInput() {
        return this._allowEarlyCheckIn;
    }

    // max_time_to_live_in_minutes - computed: true, optional: true, required: false
    private _maxTimeToLiveInMinutes?: number; 
    public get maxTimeToLiveInMinutes() {
        return this.getNumberAttribute('max_time_to_live_in_minutes');
    }
    public set maxTimeToLiveInMinutes(value: number) {
        this._maxTimeToLiveInMinutes = value;
    }
    public resetMaxTimeToLiveInMinutes() {
        this._maxTimeToLiveInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxTimeToLiveInMinutesInput() {
        return this._maxTimeToLiveInMinutes;
    }
}
export interface ProvisionalConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes CcLicense#max_time_to_live_in_minutes}
    */
    readonly maxTimeToLiveInMinutes?: number;
}
export class ProvisionalConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProvisionalConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxTimeToLiveInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxTimeToLiveInMinutes = this._maxTimeToLiveInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProvisionalConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxTimeToLiveInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxTimeToLiveInMinutes = value.maxTimeToLiveInMinutes;
        }
    }

    // max_time_to_live_in_minutes - computed: true, optional: true, required: false
    private _maxTimeToLiveInMinutes?: number; 
    public get maxTimeToLiveInMinutes() {
        return this.getNumberAttribute('max_time_to_live_in_minutes');
    }
    public set maxTimeToLiveInMinutes(value: number) {
        this._maxTimeToLiveInMinutes = value;
    }
    public resetMaxTimeToLiveInMinutes() {
        this._maxTimeToLiveInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxTimeToLiveInMinutesInput() {
        return this._maxTimeToLiveInMinutes;
    }
}
export interface ConsumptionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#borrow_configuration CcLicense#borrow_configuration}
    */
    readonly borrowConfiguration?: BorrowConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#provisional_configuration CcLicense#provisional_configuration}
    */
    readonly provisionalConfiguration?: ProvisionalConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#renew_type CcLicense#renew_type}
    */
    readonly renewType?: string;
}
export class ConsumptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConsumptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._borrowConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.borrowConfiguration = this._borrowConfiguration?.internalValue;
        }
        if (this._provisionalConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.provisionalConfiguration = this._provisionalConfiguration?.internalValue;
        }
        if (this._renewType !== undefined) {
            hasAnyValues = true;
            internalValueResult.renewType = this._renewType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConsumptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._borrowConfiguration.internalValue = undefined;
            this._provisionalConfiguration.internalValue = undefined;
            this._renewType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._borrowConfiguration.internalValue = value.borrowConfiguration;
            this._provisionalConfiguration.internalValue = value.provisionalConfiguration;
            this._renewType = value.renewType;
        }
    }

    // borrow_configuration - computed: true, optional: true, required: false
    private _borrowConfiguration = new BorrowConfigurationPropertyOutputReference(this, "borrow_configuration");
    public get borrowConfiguration() {
        return this._borrowConfiguration;
    }
    public putBorrowConfiguration(value: BorrowConfigurationProperty) {
        this._borrowConfiguration.internalValue = value;
    }
    public resetBorrowConfiguration() {
        this._borrowConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get borrowConfigurationInput() {
        return this._borrowConfiguration.internalValue;
    }

    // provisional_configuration - computed: true, optional: true, required: false
    private _provisionalConfiguration = new ProvisionalConfigurationPropertyOutputReference(this, "provisional_configuration");
    public get provisionalConfiguration() {
        return this._provisionalConfiguration;
    }
    public putProvisionalConfiguration(value: ProvisionalConfigurationProperty) {
        this._provisionalConfiguration.internalValue = value;
    }
    public resetProvisionalConfiguration() {
        this._provisionalConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionalConfigurationInput() {
        return this._provisionalConfiguration.internalValue;
    }

    // renew_type - computed: true, optional: true, required: false
    private _renewType?: string; 
    public get renewType() {
        return this.getStringAttribute('renew_type');
    }
    public set renewType(value: string) {
        this._renewType = value;
    }
    public resetRenewType() {
        this._renewType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get renewTypeInput() {
        return this._renewType;
    }
}
export interface EntitlementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#allow_check_in CcLicense#allow_check_in}
    */
    readonly allowCheckIn?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#max_count CcLicense#max_count}
    */
    readonly maxCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#name CcLicense#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#overage CcLicense#overage}
    */
    readonly overage?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#unit CcLicense#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#value CcLicense#value}
    */
    readonly value?: string;
}
export class EntitlementPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EntitlementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowCheckIn !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowCheckIn = this._allowCheckIn;
        }
        if (this._maxCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCount = this._maxCount;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._overage !== undefined) {
            hasAnyValues = true;
            internalValueResult.overage = this._overage;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EntitlementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowCheckIn = undefined;
            this._maxCount = undefined;
            this._name = undefined;
            this._overage = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowCheckIn = value.allowCheckIn;
            this._maxCount = value.maxCount;
            this._name = value.name;
            this._overage = value.overage;
            this._unit = value.unit;
            this._value = value.value;
        }
    }

    // allow_check_in - computed: true, optional: true, required: false
    private _allowCheckIn?: boolean | cdktn.IResolvable; 
    public get allowCheckIn() {
        return this.getBooleanAttribute('allow_check_in');
    }
    public set allowCheckIn(value: boolean | cdktn.IResolvable) {
        this._allowCheckIn = value;
    }
    public resetAllowCheckIn() {
        this._allowCheckIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowCheckInInput() {
        return this._allowCheckIn;
    }

    // max_count - computed: true, optional: true, required: false
    private _maxCount?: number; 
    public get maxCount() {
        return this.getNumberAttribute('max_count');
    }
    public set maxCount(value: number) {
        this._maxCount = value;
    }
    public resetMaxCount() {
        this._maxCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCountInput() {
        return this._maxCount;
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

    // overage - computed: true, optional: true, required: false
    private _overage?: boolean | cdktn.IResolvable; 
    public get overage() {
        return this.getBooleanAttribute('overage');
    }
    public set overage(value: boolean | cdktn.IResolvable) {
        this._overage = value;
    }
    public resetOverage() {
        this._overage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overageInput() {
        return this._overage;
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
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

export class EntitlementPropertyList extends cdktn.ComplexList {
    public internalValue? : EntitlementProperty[] | cdktn.IResolvable

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
    public get(index: number): EntitlementPropertyOutputReference {
        return new EntitlementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IssuerDataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#name CcLicense#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#sign_key CcLicense#sign_key}
    */
    readonly signKey?: string;
}
export class IssuerDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IssuerDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._signKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.signKey = this._signKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IssuerDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._signKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._signKey = value.signKey;
        }
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

    // sign_key - computed: true, optional: true, required: false
    private _signKey?: string; 
    public get signKey() {
        return this.getStringAttribute('sign_key');
    }
    public set signKey(value: string) {
        this._signKey = value;
    }
    public resetSignKey() {
        this._signKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get signKeyInput() {
        return this._signKey;
    }
}
export interface MetadataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#name CcLicense#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#value CcLicense#value}
    */
    readonly value?: string;
}
export class MetadataPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetadataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetadataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
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

export class MetadataPropertyList extends cdktn.ComplexList {
    public internalValue? : MetadataProperty[] | cdktn.IResolvable

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
    public get(index: number): MetadataPropertyOutputReference {
        return new MetadataPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#key CcLicense#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#value CcLicense#value}
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
export interface ValidityDateFormatProperty {
    /**
    * Validity begin date for the license.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#begin CcLicense#begin}
    */
    readonly begin: string;
    /**
    * Validity begin date for the license.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#end CcLicense#end}
    */
    readonly end: string;
}
export class ValidityDateFormatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ValidityDateFormatProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._begin !== undefined) {
            hasAnyValues = true;
            internalValueResult.begin = this._begin;
        }
        if (this._end !== undefined) {
            hasAnyValues = true;
            internalValueResult.end = this._end;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValidityDateFormatProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._begin = undefined;
            this._end = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._begin = value.begin;
            this._end = value.end;
        }
    }

    // begin - computed: false, optional: false, required: true
    private _begin?: string; 
    public get begin() {
        return this.getStringAttribute('begin');
    }
    public set begin(value: string) {
        this._begin = value;
    }
    // Temporarily expose input value. Use with caution.
    public get beginInput() {
        return this._begin;
    }

    // end - computed: false, optional: false, required: true
    private _end?: string; 
    public get end() {
        return this.getStringAttribute('end');
    }
    public set end(value: string) {
        this._end = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endInput() {
        return this._end;
    }
}
}
