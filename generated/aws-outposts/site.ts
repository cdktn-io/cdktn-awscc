// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSiteProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#description CcSite#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#name CcSite#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#notes CcSite#notes}
    */
    readonly notes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#operating_address CcSite#operating_address}
    */
    readonly operatingAddress?: CcSite.AddressProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#rack_physical_properties CcSite#rack_physical_properties}
    */
    readonly rackPhysicalProperties?: CcSite.RackPhysicalPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#shipping_address CcSite#shipping_address}
    */
    readonly shippingAddress?: CcSite.ShippingAddressProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#tags CcSite#tags}
    */
    readonly tags?: CcSite.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site awscc_outposts_site}
*/
export class CcSite extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_outposts_site";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSite resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSite to import
    * @param importFromId The id of the existing CcSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSite to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_outposts_site", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site awscc_outposts_site} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSiteProps
    */
    public constructor(scope: Construct, id: string, config: CcSiteProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_outposts_site',
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
        this._name = config.name;
        this._notes = config.notes;
        this._operatingAddress.internalValue = config.operatingAddress;
        this._rackPhysicalProperties.internalValue = config.rackPhysicalProperties;
        this._shippingAddress.internalValue = config.shippingAddress;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // notes - computed: true, optional: true, required: false
    private _notes?: string; 
    public get notes() {
        return this.getStringAttribute('notes');
    }
    public set notes(value: string) {
        this._notes = value;
    }
    public resetNotes() {
        this._notes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notesInput() {
        return this._notes;
    }

    // operating_address - computed: true, optional: true, required: false
    private _operatingAddress = new CcSite.AddressPropertyOutputReference(this, "operating_address");
    public get operatingAddress() {
        return this._operatingAddress;
    }
    public putOperatingAddress(value: CcSite.AddressProperty) {
        this._operatingAddress.internalValue = value;
    }
    public resetOperatingAddress() {
        this._operatingAddress.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatingAddressInput() {
        return this._operatingAddress.internalValue;
    }

    // rack_physical_properties - computed: true, optional: true, required: false
    private _rackPhysicalProperties = new CcSite.RackPhysicalPropertiesPropertyOutputReference(this, "rack_physical_properties");
    public get rackPhysicalProperties() {
        return this._rackPhysicalProperties;
    }
    public putRackPhysicalProperties(value: CcSite.RackPhysicalPropertiesProperty) {
        this._rackPhysicalProperties.internalValue = value;
    }
    public resetRackPhysicalProperties() {
        this._rackPhysicalProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rackPhysicalPropertiesInput() {
        return this._rackPhysicalProperties.internalValue;
    }

    // shipping_address - computed: true, optional: true, required: false
    private _shippingAddress = new CcSite.ShippingAddressPropertyOutputReference(this, "shipping_address");
    public get shippingAddress() {
        return this._shippingAddress;
    }
    public putShippingAddress(value: CcSite.ShippingAddressProperty) {
        this._shippingAddress.internalValue = value;
    }
    public resetShippingAddress() {
        this._shippingAddress.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shippingAddressInput() {
        return this._shippingAddress.internalValue;
    }

    // site_arn - computed: true, optional: false, required: false
    public get siteArn() {
        return this.getStringAttribute('site_arn');
    }

    // site_id - computed: true, optional: false, required: false
    public get siteId() {
        return this.getStringAttribute('site_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSite.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSite.TagProperty[] | cdktn.IResolvable) {
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
            name: cdktn.stringToTerraform(this._name),
            notes: cdktn.stringToTerraform(this._notes),
            operating_address: ccSiteAddressPropertyToTerraform(this._operatingAddress.internalValue),
            rack_physical_properties: ccSiteRackPhysicalPropertiesPropertyToTerraform(this._rackPhysicalProperties.internalValue),
            shipping_address: ccSiteShippingAddressPropertyToTerraform(this._shippingAddress.internalValue),
            tags: cdktn.listMapper(ccSiteTagPropertyToTerraform, false)(this._tags.internalValue),
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notes: {
                value: cdktn.stringToHclTerraform(this._notes),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            operating_address: {
                value: ccSiteAddressPropertyToHclTerraform(this._operatingAddress.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSite.AddressProperty",
            },
            rack_physical_properties: {
                value: ccSiteRackPhysicalPropertiesPropertyToHclTerraform(this._rackPhysicalProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSite.RackPhysicalPropertiesProperty",
            },
            shipping_address: {
                value: ccSiteShippingAddressPropertyToHclTerraform(this._shippingAddress.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSite.ShippingAddressProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSiteTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSite.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSiteAddressPropertyToTerraform(struct?: CcSite.AddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        address_line_1: cdktn.stringToTerraform(struct!.addressLine1),
        address_line_2: cdktn.stringToTerraform(struct!.addressLine2),
        address_line_3: cdktn.stringToTerraform(struct!.addressLine3),
        city: cdktn.stringToTerraform(struct!.city),
        contact_name: cdktn.stringToTerraform(struct!.contactName),
        contact_phone_number: cdktn.stringToTerraform(struct!.contactPhoneNumber),
        country_code: cdktn.stringToTerraform(struct!.countryCode),
        district_or_county: cdktn.stringToTerraform(struct!.districtOrCounty),
        municipality: cdktn.stringToTerraform(struct!.municipality),
        postal_code: cdktn.stringToTerraform(struct!.postalCode),
        state_or_region: cdktn.stringToTerraform(struct!.stateOrRegion),
    }
}


export function ccSiteAddressPropertyToHclTerraform(struct?: CcSite.AddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        address_line_1: {
            value: cdktn.stringToHclTerraform(struct!.addressLine1),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        address_line_2: {
            value: cdktn.stringToHclTerraform(struct!.addressLine2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        address_line_3: {
            value: cdktn.stringToHclTerraform(struct!.addressLine3),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        city: {
            value: cdktn.stringToHclTerraform(struct!.city),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        contact_name: {
            value: cdktn.stringToHclTerraform(struct!.contactName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        contact_phone_number: {
            value: cdktn.stringToHclTerraform(struct!.contactPhoneNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        country_code: {
            value: cdktn.stringToHclTerraform(struct!.countryCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        district_or_county: {
            value: cdktn.stringToHclTerraform(struct!.districtOrCounty),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        municipality: {
            value: cdktn.stringToHclTerraform(struct!.municipality),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        postal_code: {
            value: cdktn.stringToHclTerraform(struct!.postalCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        state_or_region: {
            value: cdktn.stringToHclTerraform(struct!.stateOrRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSiteRackPhysicalPropertiesPropertyToTerraform(struct?: CcSite.RackPhysicalPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fiber_optic_cable_type: cdktn.stringToTerraform(struct!.fiberOpticCableType),
        maximum_supported_weight_lbs: cdktn.stringToTerraform(struct!.maximumSupportedWeightLbs),
        optical_standard: cdktn.stringToTerraform(struct!.opticalStandard),
        power_connector: cdktn.stringToTerraform(struct!.powerConnector),
        power_draw_kva: cdktn.stringToTerraform(struct!.powerDrawKva),
        power_feed_drop: cdktn.stringToTerraform(struct!.powerFeedDrop),
        power_phase: cdktn.stringToTerraform(struct!.powerPhase),
        uplink_count: cdktn.stringToTerraform(struct!.uplinkCount),
        uplink_gbps: cdktn.stringToTerraform(struct!.uplinkGbps),
    }
}


export function ccSiteRackPhysicalPropertiesPropertyToHclTerraform(struct?: CcSite.RackPhysicalPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fiber_optic_cable_type: {
            value: cdktn.stringToHclTerraform(struct!.fiberOpticCableType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        maximum_supported_weight_lbs: {
            value: cdktn.stringToHclTerraform(struct!.maximumSupportedWeightLbs),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        optical_standard: {
            value: cdktn.stringToHclTerraform(struct!.opticalStandard),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        power_connector: {
            value: cdktn.stringToHclTerraform(struct!.powerConnector),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        power_draw_kva: {
            value: cdktn.stringToHclTerraform(struct!.powerDrawKva),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        power_feed_drop: {
            value: cdktn.stringToHclTerraform(struct!.powerFeedDrop),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        power_phase: {
            value: cdktn.stringToHclTerraform(struct!.powerPhase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        uplink_count: {
            value: cdktn.stringToHclTerraform(struct!.uplinkCount),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        uplink_gbps: {
            value: cdktn.stringToHclTerraform(struct!.uplinkGbps),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSiteShippingAddressPropertyToTerraform(struct?: CcSite.ShippingAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        address_line_1: cdktn.stringToTerraform(struct!.addressLine1),
        address_line_2: cdktn.stringToTerraform(struct!.addressLine2),
        address_line_3: cdktn.stringToTerraform(struct!.addressLine3),
        city: cdktn.stringToTerraform(struct!.city),
        contact_name: cdktn.stringToTerraform(struct!.contactName),
        contact_phone_number: cdktn.stringToTerraform(struct!.contactPhoneNumber),
        country_code: cdktn.stringToTerraform(struct!.countryCode),
        district_or_county: cdktn.stringToTerraform(struct!.districtOrCounty),
        municipality: cdktn.stringToTerraform(struct!.municipality),
        postal_code: cdktn.stringToTerraform(struct!.postalCode),
        state_or_region: cdktn.stringToTerraform(struct!.stateOrRegion),
    }
}


export function ccSiteShippingAddressPropertyToHclTerraform(struct?: CcSite.ShippingAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        address_line_1: {
            value: cdktn.stringToHclTerraform(struct!.addressLine1),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        address_line_2: {
            value: cdktn.stringToHclTerraform(struct!.addressLine2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        address_line_3: {
            value: cdktn.stringToHclTerraform(struct!.addressLine3),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        city: {
            value: cdktn.stringToHclTerraform(struct!.city),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        contact_name: {
            value: cdktn.stringToHclTerraform(struct!.contactName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        contact_phone_number: {
            value: cdktn.stringToHclTerraform(struct!.contactPhoneNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        country_code: {
            value: cdktn.stringToHclTerraform(struct!.countryCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        district_or_county: {
            value: cdktn.stringToHclTerraform(struct!.districtOrCounty),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        municipality: {
            value: cdktn.stringToHclTerraform(struct!.municipality),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        postal_code: {
            value: cdktn.stringToHclTerraform(struct!.postalCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        state_or_region: {
            value: cdktn.stringToHclTerraform(struct!.stateOrRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSiteTagPropertyToTerraform(struct?: CcSite.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSiteTagPropertyToHclTerraform(struct?: CcSite.TagProperty | cdktn.IResolvable): any {
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


export namespace CcSite {
export interface AddressProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#address_line_1 CcSite#address_line_1}
    */
    readonly addressLine1?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#address_line_2 CcSite#address_line_2}
    */
    readonly addressLine2?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#address_line_3 CcSite#address_line_3}
    */
    readonly addressLine3?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#city CcSite#city}
    */
    readonly city?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#contact_name CcSite#contact_name}
    */
    readonly contactName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#contact_phone_number CcSite#contact_phone_number}
    */
    readonly contactPhoneNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#country_code CcSite#country_code}
    */
    readonly countryCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#district_or_county CcSite#district_or_county}
    */
    readonly districtOrCounty?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#municipality CcSite#municipality}
    */
    readonly municipality?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#postal_code CcSite#postal_code}
    */
    readonly postalCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#state_or_region CcSite#state_or_region}
    */
    readonly stateOrRegion?: string;
}
export class AddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AddressProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._addressLine1 !== undefined) {
            hasAnyValues = true;
            internalValueResult.addressLine1 = this._addressLine1;
        }
        if (this._addressLine2 !== undefined) {
            hasAnyValues = true;
            internalValueResult.addressLine2 = this._addressLine2;
        }
        if (this._addressLine3 !== undefined) {
            hasAnyValues = true;
            internalValueResult.addressLine3 = this._addressLine3;
        }
        if (this._city !== undefined) {
            hasAnyValues = true;
            internalValueResult.city = this._city;
        }
        if (this._contactName !== undefined) {
            hasAnyValues = true;
            internalValueResult.contactName = this._contactName;
        }
        if (this._contactPhoneNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.contactPhoneNumber = this._contactPhoneNumber;
        }
        if (this._countryCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.countryCode = this._countryCode;
        }
        if (this._districtOrCounty !== undefined) {
            hasAnyValues = true;
            internalValueResult.districtOrCounty = this._districtOrCounty;
        }
        if (this._municipality !== undefined) {
            hasAnyValues = true;
            internalValueResult.municipality = this._municipality;
        }
        if (this._postalCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.postalCode = this._postalCode;
        }
        if (this._stateOrRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.stateOrRegion = this._stateOrRegion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AddressProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addressLine1 = undefined;
            this._addressLine2 = undefined;
            this._addressLine3 = undefined;
            this._city = undefined;
            this._contactName = undefined;
            this._contactPhoneNumber = undefined;
            this._countryCode = undefined;
            this._districtOrCounty = undefined;
            this._municipality = undefined;
            this._postalCode = undefined;
            this._stateOrRegion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addressLine1 = value.addressLine1;
            this._addressLine2 = value.addressLine2;
            this._addressLine3 = value.addressLine3;
            this._city = value.city;
            this._contactName = value.contactName;
            this._contactPhoneNumber = value.contactPhoneNumber;
            this._countryCode = value.countryCode;
            this._districtOrCounty = value.districtOrCounty;
            this._municipality = value.municipality;
            this._postalCode = value.postalCode;
            this._stateOrRegion = value.stateOrRegion;
        }
    }

    // address_line_1 - computed: true, optional: true, required: false
    private _addressLine1?: string; 
    public get addressLine1() {
        return this.getStringAttribute('address_line_1');
    }
    public set addressLine1(value: string) {
        this._addressLine1 = value;
    }
    public resetAddressLine1() {
        this._addressLine1 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressLine1Input() {
        return this._addressLine1;
    }

    // address_line_2 - computed: true, optional: true, required: false
    private _addressLine2?: string; 
    public get addressLine2() {
        return this.getStringAttribute('address_line_2');
    }
    public set addressLine2(value: string) {
        this._addressLine2 = value;
    }
    public resetAddressLine2() {
        this._addressLine2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressLine2Input() {
        return this._addressLine2;
    }

    // address_line_3 - computed: true, optional: true, required: false
    private _addressLine3?: string; 
    public get addressLine3() {
        return this.getStringAttribute('address_line_3');
    }
    public set addressLine3(value: string) {
        this._addressLine3 = value;
    }
    public resetAddressLine3() {
        this._addressLine3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressLine3Input() {
        return this._addressLine3;
    }

    // city - computed: true, optional: true, required: false
    private _city?: string; 
    public get city() {
        return this.getStringAttribute('city');
    }
    public set city(value: string) {
        this._city = value;
    }
    public resetCity() {
        this._city = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cityInput() {
        return this._city;
    }

    // contact_name - computed: true, optional: true, required: false
    private _contactName?: string; 
    public get contactName() {
        return this.getStringAttribute('contact_name');
    }
    public set contactName(value: string) {
        this._contactName = value;
    }
    public resetContactName() {
        this._contactName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactNameInput() {
        return this._contactName;
    }

    // contact_phone_number - computed: true, optional: true, required: false
    private _contactPhoneNumber?: string; 
    public get contactPhoneNumber() {
        return this.getStringAttribute('contact_phone_number');
    }
    public set contactPhoneNumber(value: string) {
        this._contactPhoneNumber = value;
    }
    public resetContactPhoneNumber() {
        this._contactPhoneNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactPhoneNumberInput() {
        return this._contactPhoneNumber;
    }

    // country_code - computed: true, optional: true, required: false
    private _countryCode?: string; 
    public get countryCode() {
        return this.getStringAttribute('country_code');
    }
    public set countryCode(value: string) {
        this._countryCode = value;
    }
    public resetCountryCode() {
        this._countryCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countryCodeInput() {
        return this._countryCode;
    }

    // district_or_county - computed: true, optional: true, required: false
    private _districtOrCounty?: string; 
    public get districtOrCounty() {
        return this.getStringAttribute('district_or_county');
    }
    public set districtOrCounty(value: string) {
        this._districtOrCounty = value;
    }
    public resetDistrictOrCounty() {
        this._districtOrCounty = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get districtOrCountyInput() {
        return this._districtOrCounty;
    }

    // municipality - computed: true, optional: true, required: false
    private _municipality?: string; 
    public get municipality() {
        return this.getStringAttribute('municipality');
    }
    public set municipality(value: string) {
        this._municipality = value;
    }
    public resetMunicipality() {
        this._municipality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get municipalityInput() {
        return this._municipality;
    }

    // postal_code - computed: true, optional: true, required: false
    private _postalCode?: string; 
    public get postalCode() {
        return this.getStringAttribute('postal_code');
    }
    public set postalCode(value: string) {
        this._postalCode = value;
    }
    public resetPostalCode() {
        this._postalCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postalCodeInput() {
        return this._postalCode;
    }

    // state_or_region - computed: true, optional: true, required: false
    private _stateOrRegion?: string; 
    public get stateOrRegion() {
        return this.getStringAttribute('state_or_region');
    }
    public set stateOrRegion(value: string) {
        this._stateOrRegion = value;
    }
    public resetStateOrRegion() {
        this._stateOrRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateOrRegionInput() {
        return this._stateOrRegion;
    }
}
export interface RackPhysicalPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#fiber_optic_cable_type CcSite#fiber_optic_cable_type}
    */
    readonly fiberOpticCableType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#maximum_supported_weight_lbs CcSite#maximum_supported_weight_lbs}
    */
    readonly maximumSupportedWeightLbs?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#optical_standard CcSite#optical_standard}
    */
    readonly opticalStandard?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#power_connector CcSite#power_connector}
    */
    readonly powerConnector?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#power_draw_kva CcSite#power_draw_kva}
    */
    readonly powerDrawKva?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#power_feed_drop CcSite#power_feed_drop}
    */
    readonly powerFeedDrop?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#power_phase CcSite#power_phase}
    */
    readonly powerPhase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#uplink_count CcSite#uplink_count}
    */
    readonly uplinkCount?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#uplink_gbps CcSite#uplink_gbps}
    */
    readonly uplinkGbps?: string;
}
export class RackPhysicalPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RackPhysicalPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fiberOpticCableType !== undefined) {
            hasAnyValues = true;
            internalValueResult.fiberOpticCableType = this._fiberOpticCableType;
        }
        if (this._maximumSupportedWeightLbs !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumSupportedWeightLbs = this._maximumSupportedWeightLbs;
        }
        if (this._opticalStandard !== undefined) {
            hasAnyValues = true;
            internalValueResult.opticalStandard = this._opticalStandard;
        }
        if (this._powerConnector !== undefined) {
            hasAnyValues = true;
            internalValueResult.powerConnector = this._powerConnector;
        }
        if (this._powerDrawKva !== undefined) {
            hasAnyValues = true;
            internalValueResult.powerDrawKva = this._powerDrawKva;
        }
        if (this._powerFeedDrop !== undefined) {
            hasAnyValues = true;
            internalValueResult.powerFeedDrop = this._powerFeedDrop;
        }
        if (this._powerPhase !== undefined) {
            hasAnyValues = true;
            internalValueResult.powerPhase = this._powerPhase;
        }
        if (this._uplinkCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.uplinkCount = this._uplinkCount;
        }
        if (this._uplinkGbps !== undefined) {
            hasAnyValues = true;
            internalValueResult.uplinkGbps = this._uplinkGbps;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RackPhysicalPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fiberOpticCableType = undefined;
            this._maximumSupportedWeightLbs = undefined;
            this._opticalStandard = undefined;
            this._powerConnector = undefined;
            this._powerDrawKva = undefined;
            this._powerFeedDrop = undefined;
            this._powerPhase = undefined;
            this._uplinkCount = undefined;
            this._uplinkGbps = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fiberOpticCableType = value.fiberOpticCableType;
            this._maximumSupportedWeightLbs = value.maximumSupportedWeightLbs;
            this._opticalStandard = value.opticalStandard;
            this._powerConnector = value.powerConnector;
            this._powerDrawKva = value.powerDrawKva;
            this._powerFeedDrop = value.powerFeedDrop;
            this._powerPhase = value.powerPhase;
            this._uplinkCount = value.uplinkCount;
            this._uplinkGbps = value.uplinkGbps;
        }
    }

    // fiber_optic_cable_type - computed: true, optional: true, required: false
    private _fiberOpticCableType?: string; 
    public get fiberOpticCableType() {
        return this.getStringAttribute('fiber_optic_cable_type');
    }
    public set fiberOpticCableType(value: string) {
        this._fiberOpticCableType = value;
    }
    public resetFiberOpticCableType() {
        this._fiberOpticCableType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fiberOpticCableTypeInput() {
        return this._fiberOpticCableType;
    }

    // maximum_supported_weight_lbs - computed: true, optional: true, required: false
    private _maximumSupportedWeightLbs?: string; 
    public get maximumSupportedWeightLbs() {
        return this.getStringAttribute('maximum_supported_weight_lbs');
    }
    public set maximumSupportedWeightLbs(value: string) {
        this._maximumSupportedWeightLbs = value;
    }
    public resetMaximumSupportedWeightLbs() {
        this._maximumSupportedWeightLbs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumSupportedWeightLbsInput() {
        return this._maximumSupportedWeightLbs;
    }

    // optical_standard - computed: true, optional: true, required: false
    private _opticalStandard?: string; 
    public get opticalStandard() {
        return this.getStringAttribute('optical_standard');
    }
    public set opticalStandard(value: string) {
        this._opticalStandard = value;
    }
    public resetOpticalStandard() {
        this._opticalStandard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get opticalStandardInput() {
        return this._opticalStandard;
    }

    // power_connector - computed: true, optional: true, required: false
    private _powerConnector?: string; 
    public get powerConnector() {
        return this.getStringAttribute('power_connector');
    }
    public set powerConnector(value: string) {
        this._powerConnector = value;
    }
    public resetPowerConnector() {
        this._powerConnector = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get powerConnectorInput() {
        return this._powerConnector;
    }

    // power_draw_kva - computed: true, optional: true, required: false
    private _powerDrawKva?: string; 
    public get powerDrawKva() {
        return this.getStringAttribute('power_draw_kva');
    }
    public set powerDrawKva(value: string) {
        this._powerDrawKva = value;
    }
    public resetPowerDrawKva() {
        this._powerDrawKva = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get powerDrawKvaInput() {
        return this._powerDrawKva;
    }

    // power_feed_drop - computed: true, optional: true, required: false
    private _powerFeedDrop?: string; 
    public get powerFeedDrop() {
        return this.getStringAttribute('power_feed_drop');
    }
    public set powerFeedDrop(value: string) {
        this._powerFeedDrop = value;
    }
    public resetPowerFeedDrop() {
        this._powerFeedDrop = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get powerFeedDropInput() {
        return this._powerFeedDrop;
    }

    // power_phase - computed: true, optional: true, required: false
    private _powerPhase?: string; 
    public get powerPhase() {
        return this.getStringAttribute('power_phase');
    }
    public set powerPhase(value: string) {
        this._powerPhase = value;
    }
    public resetPowerPhase() {
        this._powerPhase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get powerPhaseInput() {
        return this._powerPhase;
    }

    // uplink_count - computed: true, optional: true, required: false
    private _uplinkCount?: string; 
    public get uplinkCount() {
        return this.getStringAttribute('uplink_count');
    }
    public set uplinkCount(value: string) {
        this._uplinkCount = value;
    }
    public resetUplinkCount() {
        this._uplinkCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uplinkCountInput() {
        return this._uplinkCount;
    }

    // uplink_gbps - computed: true, optional: true, required: false
    private _uplinkGbps?: string; 
    public get uplinkGbps() {
        return this.getStringAttribute('uplink_gbps');
    }
    public set uplinkGbps(value: string) {
        this._uplinkGbps = value;
    }
    public resetUplinkGbps() {
        this._uplinkGbps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uplinkGbpsInput() {
        return this._uplinkGbps;
    }
}
export interface ShippingAddressProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#address_line_1 CcSite#address_line_1}
    */
    readonly addressLine1?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#address_line_2 CcSite#address_line_2}
    */
    readonly addressLine2?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#address_line_3 CcSite#address_line_3}
    */
    readonly addressLine3?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#city CcSite#city}
    */
    readonly city?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#contact_name CcSite#contact_name}
    */
    readonly contactName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#contact_phone_number CcSite#contact_phone_number}
    */
    readonly contactPhoneNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#country_code CcSite#country_code}
    */
    readonly countryCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#district_or_county CcSite#district_or_county}
    */
    readonly districtOrCounty?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#municipality CcSite#municipality}
    */
    readonly municipality?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#postal_code CcSite#postal_code}
    */
    readonly postalCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#state_or_region CcSite#state_or_region}
    */
    readonly stateOrRegion?: string;
}
export class ShippingAddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ShippingAddressProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._addressLine1 !== undefined) {
            hasAnyValues = true;
            internalValueResult.addressLine1 = this._addressLine1;
        }
        if (this._addressLine2 !== undefined) {
            hasAnyValues = true;
            internalValueResult.addressLine2 = this._addressLine2;
        }
        if (this._addressLine3 !== undefined) {
            hasAnyValues = true;
            internalValueResult.addressLine3 = this._addressLine3;
        }
        if (this._city !== undefined) {
            hasAnyValues = true;
            internalValueResult.city = this._city;
        }
        if (this._contactName !== undefined) {
            hasAnyValues = true;
            internalValueResult.contactName = this._contactName;
        }
        if (this._contactPhoneNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.contactPhoneNumber = this._contactPhoneNumber;
        }
        if (this._countryCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.countryCode = this._countryCode;
        }
        if (this._districtOrCounty !== undefined) {
            hasAnyValues = true;
            internalValueResult.districtOrCounty = this._districtOrCounty;
        }
        if (this._municipality !== undefined) {
            hasAnyValues = true;
            internalValueResult.municipality = this._municipality;
        }
        if (this._postalCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.postalCode = this._postalCode;
        }
        if (this._stateOrRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.stateOrRegion = this._stateOrRegion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ShippingAddressProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addressLine1 = undefined;
            this._addressLine2 = undefined;
            this._addressLine3 = undefined;
            this._city = undefined;
            this._contactName = undefined;
            this._contactPhoneNumber = undefined;
            this._countryCode = undefined;
            this._districtOrCounty = undefined;
            this._municipality = undefined;
            this._postalCode = undefined;
            this._stateOrRegion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addressLine1 = value.addressLine1;
            this._addressLine2 = value.addressLine2;
            this._addressLine3 = value.addressLine3;
            this._city = value.city;
            this._contactName = value.contactName;
            this._contactPhoneNumber = value.contactPhoneNumber;
            this._countryCode = value.countryCode;
            this._districtOrCounty = value.districtOrCounty;
            this._municipality = value.municipality;
            this._postalCode = value.postalCode;
            this._stateOrRegion = value.stateOrRegion;
        }
    }

    // address_line_1 - computed: true, optional: true, required: false
    private _addressLine1?: string; 
    public get addressLine1() {
        return this.getStringAttribute('address_line_1');
    }
    public set addressLine1(value: string) {
        this._addressLine1 = value;
    }
    public resetAddressLine1() {
        this._addressLine1 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressLine1Input() {
        return this._addressLine1;
    }

    // address_line_2 - computed: true, optional: true, required: false
    private _addressLine2?: string; 
    public get addressLine2() {
        return this.getStringAttribute('address_line_2');
    }
    public set addressLine2(value: string) {
        this._addressLine2 = value;
    }
    public resetAddressLine2() {
        this._addressLine2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressLine2Input() {
        return this._addressLine2;
    }

    // address_line_3 - computed: true, optional: true, required: false
    private _addressLine3?: string; 
    public get addressLine3() {
        return this.getStringAttribute('address_line_3');
    }
    public set addressLine3(value: string) {
        this._addressLine3 = value;
    }
    public resetAddressLine3() {
        this._addressLine3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressLine3Input() {
        return this._addressLine3;
    }

    // city - computed: true, optional: true, required: false
    private _city?: string; 
    public get city() {
        return this.getStringAttribute('city');
    }
    public set city(value: string) {
        this._city = value;
    }
    public resetCity() {
        this._city = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cityInput() {
        return this._city;
    }

    // contact_name - computed: true, optional: true, required: false
    private _contactName?: string; 
    public get contactName() {
        return this.getStringAttribute('contact_name');
    }
    public set contactName(value: string) {
        this._contactName = value;
    }
    public resetContactName() {
        this._contactName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactNameInput() {
        return this._contactName;
    }

    // contact_phone_number - computed: true, optional: true, required: false
    private _contactPhoneNumber?: string; 
    public get contactPhoneNumber() {
        return this.getStringAttribute('contact_phone_number');
    }
    public set contactPhoneNumber(value: string) {
        this._contactPhoneNumber = value;
    }
    public resetContactPhoneNumber() {
        this._contactPhoneNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactPhoneNumberInput() {
        return this._contactPhoneNumber;
    }

    // country_code - computed: true, optional: true, required: false
    private _countryCode?: string; 
    public get countryCode() {
        return this.getStringAttribute('country_code');
    }
    public set countryCode(value: string) {
        this._countryCode = value;
    }
    public resetCountryCode() {
        this._countryCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countryCodeInput() {
        return this._countryCode;
    }

    // district_or_county - computed: true, optional: true, required: false
    private _districtOrCounty?: string; 
    public get districtOrCounty() {
        return this.getStringAttribute('district_or_county');
    }
    public set districtOrCounty(value: string) {
        this._districtOrCounty = value;
    }
    public resetDistrictOrCounty() {
        this._districtOrCounty = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get districtOrCountyInput() {
        return this._districtOrCounty;
    }

    // municipality - computed: true, optional: true, required: false
    private _municipality?: string; 
    public get municipality() {
        return this.getStringAttribute('municipality');
    }
    public set municipality(value: string) {
        this._municipality = value;
    }
    public resetMunicipality() {
        this._municipality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get municipalityInput() {
        return this._municipality;
    }

    // postal_code - computed: true, optional: true, required: false
    private _postalCode?: string; 
    public get postalCode() {
        return this.getStringAttribute('postal_code');
    }
    public set postalCode(value: string) {
        this._postalCode = value;
    }
    public resetPostalCode() {
        this._postalCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postalCodeInput() {
        return this._postalCode;
    }

    // state_or_region - computed: true, optional: true, required: false
    private _stateOrRegion?: string; 
    public get stateOrRegion() {
        return this.getStringAttribute('state_or_region');
    }
    public set stateOrRegion(value: string) {
        this._stateOrRegion = value;
    }
    public resetStateOrRegion() {
        this._stateOrRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateOrRegionInput() {
        return this._stateOrRegion;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#key CcSite#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/outposts_site#value CcSite#value}
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
