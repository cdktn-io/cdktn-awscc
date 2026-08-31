// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_resource_discovery

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIPAMResourceDiscoveryProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_resource_discovery#description CcIPAMResourceDiscovery#description}
    */
    readonly description?: string;
    /**
    * The regions Resource Discovery is enabled for. Allows resource discoveries to be created in these regions, as well as enabling monitoring
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_resource_discovery#operating_regions CcIPAMResourceDiscovery#operating_regions}
    */
    readonly operatingRegions?: CcIPAMResourceDiscovery.IpamOperatingRegionProperty[] | cdktn.IResolvable;
    /**
    * A set of organizational unit (OU) exclusions for this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_resource_discovery#organizational_unit_exclusions CcIPAMResourceDiscovery#organizational_unit_exclusions}
    */
    readonly organizationalUnitExclusions?: CcIPAMResourceDiscovery.IpamResourceDiscoveryOrganizationalUnitExclusionProperty[] | cdktn.IResolvable;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_resource_discovery#tags CcIPAMResourceDiscovery#tags}
    */
    readonly tags?: CcIPAMResourceDiscovery.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_resource_discovery awscc_ec2_ipam_resource_discovery}
*/
export class CcIPAMResourceDiscovery extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_ipam_resource_discovery";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIPAMResourceDiscovery resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIPAMResourceDiscovery to import
    * @param importFromId The id of the existing CcIPAMResourceDiscovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_resource_discovery#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIPAMResourceDiscovery to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_ipam_resource_discovery", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_resource_discovery awscc_ec2_ipam_resource_discovery} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIPAMResourceDiscoveryProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcIPAMResourceDiscoveryProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_ipam_resource_discovery',
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
        this._description = config.description;
        this._operatingRegions.internalValue = config.operatingRegions;
        this._organizationalUnitExclusions.internalValue = config.organizationalUnitExclusions;
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

    // ipam_resource_discovery_arn - computed: true, optional: false, required: false
    public get ipamResourceDiscoveryArn() {
        return this.getStringAttribute('ipam_resource_discovery_arn');
    }

    // ipam_resource_discovery_id - computed: true, optional: false, required: false
    public get ipamResourceDiscoveryId() {
        return this.getStringAttribute('ipam_resource_discovery_id');
    }

    // ipam_resource_discovery_region - computed: true, optional: false, required: false
    public get ipamResourceDiscoveryRegion() {
        return this.getStringAttribute('ipam_resource_discovery_region');
    }

    // is_default - computed: true, optional: false, required: false
    public get isDefault() {
        return this.getBooleanAttribute('is_default');
    }

    // operating_regions - computed: true, optional: true, required: false
    private _operatingRegions = new CcIPAMResourceDiscovery.IpamOperatingRegionPropertyList(this, "operating_regions", true);
    public get operatingRegions() {
        return this._operatingRegions;
    }
    public putOperatingRegions(value: CcIPAMResourceDiscovery.IpamOperatingRegionProperty[] | cdktn.IResolvable) {
        this._operatingRegions.internalValue = value;
    }
    public resetOperatingRegions() {
        this._operatingRegions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatingRegionsInput() {
        return this._operatingRegions.internalValue;
    }

    // organizational_unit_exclusions - computed: true, optional: true, required: false
    private _organizationalUnitExclusions = new CcIPAMResourceDiscovery.IpamResourceDiscoveryOrganizationalUnitExclusionPropertyList(this, "organizational_unit_exclusions", true);
    public get organizationalUnitExclusions() {
        return this._organizationalUnitExclusions;
    }
    public putOrganizationalUnitExclusions(value: CcIPAMResourceDiscovery.IpamResourceDiscoveryOrganizationalUnitExclusionProperty[] | cdktn.IResolvable) {
        this._organizationalUnitExclusions.internalValue = value;
    }
    public resetOrganizationalUnitExclusions() {
        this._organizationalUnitExclusions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationalUnitExclusionsInput() {
        return this._organizationalUnitExclusions.internalValue;
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
        return this.getStringAttribute('owner_id');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIPAMResourceDiscovery.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIPAMResourceDiscovery.TagProperty[] | cdktn.IResolvable) {
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
            operating_regions: cdktn.listMapper(ccIPAMResourceDiscoveryIpamOperatingRegionPropertyToTerraform, false)(this._operatingRegions.internalValue),
            organizational_unit_exclusions: cdktn.listMapper(ccIPAMResourceDiscoveryIpamResourceDiscoveryOrganizationalUnitExclusionPropertyToTerraform, false)(this._organizationalUnitExclusions.internalValue),
            tags: cdktn.listMapper(ccIPAMResourceDiscoveryTagPropertyToTerraform, false)(this._tags.internalValue),
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
            operating_regions: {
                value: cdktn.listMapperHcl(ccIPAMResourceDiscoveryIpamOperatingRegionPropertyToHclTerraform, false)(this._operatingRegions.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIPAMResourceDiscovery.IpamOperatingRegionPropertyList",
            },
            organizational_unit_exclusions: {
                value: cdktn.listMapperHcl(ccIPAMResourceDiscoveryIpamResourceDiscoveryOrganizationalUnitExclusionPropertyToHclTerraform, false)(this._organizationalUnitExclusions.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIPAMResourceDiscovery.IpamResourceDiscoveryOrganizationalUnitExclusionPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIPAMResourceDiscoveryTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIPAMResourceDiscovery.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIPAMResourceDiscoveryIpamOperatingRegionPropertyToTerraform(struct?: CcIPAMResourceDiscovery.IpamOperatingRegionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        region_name: cdktn.stringToTerraform(struct!.regionName),
    }
}


export function ccIPAMResourceDiscoveryIpamOperatingRegionPropertyToHclTerraform(struct?: CcIPAMResourceDiscovery.IpamOperatingRegionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        region_name: {
            value: cdktn.stringToHclTerraform(struct!.regionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIPAMResourceDiscoveryIpamResourceDiscoveryOrganizationalUnitExclusionPropertyToTerraform(struct?: CcIPAMResourceDiscovery.IpamResourceDiscoveryOrganizationalUnitExclusionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        organizations_entity_path: cdktn.stringToTerraform(struct!.organizationsEntityPath),
    }
}


export function ccIPAMResourceDiscoveryIpamResourceDiscoveryOrganizationalUnitExclusionPropertyToHclTerraform(struct?: CcIPAMResourceDiscovery.IpamResourceDiscoveryOrganizationalUnitExclusionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        organizations_entity_path: {
            value: cdktn.stringToHclTerraform(struct!.organizationsEntityPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIPAMResourceDiscoveryTagPropertyToTerraform(struct?: CcIPAMResourceDiscovery.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIPAMResourceDiscoveryTagPropertyToHclTerraform(struct?: CcIPAMResourceDiscovery.TagProperty | cdktn.IResolvable): any {
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


export namespace CcIPAMResourceDiscovery {
export interface IpamOperatingRegionProperty {
    /**
    * The name of the region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_resource_discovery#region_name CcIPAMResourceDiscovery#region_name}
    */
    readonly regionName?: string;
}
export class IpamOperatingRegionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IpamOperatingRegionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._regionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.regionName = this._regionName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IpamOperatingRegionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._regionName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._regionName = value.regionName;
        }
    }

    // region_name - computed: true, optional: true, required: false
    private _regionName?: string; 
    public get regionName() {
        return this.getStringAttribute('region_name');
    }
    public set regionName(value: string) {
        this._regionName = value;
    }
    public resetRegionName() {
        this._regionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionNameInput() {
        return this._regionName;
    }
}

export class IpamOperatingRegionPropertyList extends cdktn.ComplexList {
    public internalValue? : IpamOperatingRegionProperty[] | cdktn.IResolvable

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
    public get(index: number): IpamOperatingRegionPropertyOutputReference {
        return new IpamOperatingRegionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IpamResourceDiscoveryOrganizationalUnitExclusionProperty {
    /**
    * An AWS Organizations entity path. Build the path for the OU(s) using AWS Organizations IDs separated by a '/'. Include all child OUs by ending the path with '/*'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_resource_discovery#organizations_entity_path CcIPAMResourceDiscovery#organizations_entity_path}
    */
    readonly organizationsEntityPath?: string;
}
export class IpamResourceDiscoveryOrganizationalUnitExclusionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IpamResourceDiscoveryOrganizationalUnitExclusionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._organizationsEntityPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.organizationsEntityPath = this._organizationsEntityPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IpamResourceDiscoveryOrganizationalUnitExclusionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._organizationsEntityPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._organizationsEntityPath = value.organizationsEntityPath;
        }
    }

    // organizations_entity_path - computed: true, optional: true, required: false
    private _organizationsEntityPath?: string; 
    public get organizationsEntityPath() {
        return this.getStringAttribute('organizations_entity_path');
    }
    public set organizationsEntityPath(value: string) {
        this._organizationsEntityPath = value;
    }
    public resetOrganizationsEntityPath() {
        this._organizationsEntityPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationsEntityPathInput() {
        return this._organizationsEntityPath;
    }
}

export class IpamResourceDiscoveryOrganizationalUnitExclusionPropertyList extends cdktn.ComplexList {
    public internalValue? : IpamResourceDiscoveryOrganizationalUnitExclusionProperty[] | cdktn.IResolvable

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
    public get(index: number): IpamResourceDiscoveryOrganizationalUnitExclusionPropertyOutputReference {
        return new IpamResourceDiscoveryOrganizationalUnitExclusionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_resource_discovery#key CcIPAMResourceDiscovery#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_resource_discovery#value CcIPAMResourceDiscovery#value}
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
