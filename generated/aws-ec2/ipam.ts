// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIPAMProps extends cdktn.TerraformMetaArguments {
    /**
    * A set of organizational unit (OU) exclusions for the default resource discovery, created with this IPAM.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam#default_resource_discovery_organizational_unit_exclusions CcIPAM#default_resource_discovery_organizational_unit_exclusions}
    */
    readonly defaultResourceDiscoveryOrganizationalUnitExclusions?: CcIPAM.IpamOrganizationalUnitExclusionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam#description CcIPAM#description}
    */
    readonly description?: string;
    /**
    * Enable provisioning of GUA space in private pools.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam#enable_private_gua CcIPAM#enable_private_gua}
    */
    readonly enablePrivateGua?: boolean | cdktn.IResolvable;
    /**
    * A metered account is an account that is charged for active IP addresses managed in IPAM
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam#metered_account CcIPAM#metered_account}
    */
    readonly meteredAccount?: string;
    /**
    * The regions IPAM is enabled for. Allows pools to be created in these regions, as well as enabling monitoring
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam#operating_regions CcIPAM#operating_regions}
    */
    readonly operatingRegions?: CcIPAM.IpamOperatingRegionProperty[] | cdktn.IResolvable;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam#tags CcIPAM#tags}
    */
    readonly tags?: CcIPAM.TagProperty[] | cdktn.IResolvable;
    /**
    * The tier of the IPAM.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam#tier CcIPAM#tier}
    */
    readonly tier?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam awscc_ec2_ipam}
*/
export class CcIPAM extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_ipam";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIPAM resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIPAM to import
    * @param importFromId The id of the existing CcIPAM that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIPAM to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_ipam", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam awscc_ec2_ipam} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIPAMProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcIPAMProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_ipam',
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
        this._defaultResourceDiscoveryOrganizationalUnitExclusions.internalValue = config.defaultResourceDiscoveryOrganizationalUnitExclusions;
        this._description = config.description;
        this._enablePrivateGua = config.enablePrivateGua;
        this._meteredAccount = config.meteredAccount;
        this._operatingRegions.internalValue = config.operatingRegions;
        this._tags.internalValue = config.tags;
        this._tier = config.tier;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // default_resource_discovery_association_id - computed: true, optional: false, required: false
    public get defaultResourceDiscoveryAssociationId() {
        return this.getStringAttribute('default_resource_discovery_association_id');
    }

    // default_resource_discovery_id - computed: true, optional: false, required: false
    public get defaultResourceDiscoveryId() {
        return this.getStringAttribute('default_resource_discovery_id');
    }

    // default_resource_discovery_organizational_unit_exclusions - computed: true, optional: true, required: false
    private _defaultResourceDiscoveryOrganizationalUnitExclusions = new CcIPAM.IpamOrganizationalUnitExclusionPropertyList(this, "default_resource_discovery_organizational_unit_exclusions", true);
    public get defaultResourceDiscoveryOrganizationalUnitExclusions() {
        return this._defaultResourceDiscoveryOrganizationalUnitExclusions;
    }
    public putDefaultResourceDiscoveryOrganizationalUnitExclusions(value: CcIPAM.IpamOrganizationalUnitExclusionProperty[] | cdktn.IResolvable) {
        this._defaultResourceDiscoveryOrganizationalUnitExclusions.internalValue = value;
    }
    public resetDefaultResourceDiscoveryOrganizationalUnitExclusions() {
        this._defaultResourceDiscoveryOrganizationalUnitExclusions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceDiscoveryOrganizationalUnitExclusionsInput() {
        return this._defaultResourceDiscoveryOrganizationalUnitExclusions.internalValue;
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

    // enable_private_gua - computed: true, optional: true, required: false
    private _enablePrivateGua?: boolean | cdktn.IResolvable; 
    public get enablePrivateGua() {
        return this.getBooleanAttribute('enable_private_gua');
    }
    public set enablePrivateGua(value: boolean | cdktn.IResolvable) {
        this._enablePrivateGua = value;
    }
    public resetEnablePrivateGua() {
        this._enablePrivateGua = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enablePrivateGuaInput() {
        return this._enablePrivateGua;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ipam_id - computed: true, optional: false, required: false
    public get ipamId() {
        return this.getStringAttribute('ipam_id');
    }

    // metered_account - computed: true, optional: true, required: false
    private _meteredAccount?: string; 
    public get meteredAccount() {
        return this.getStringAttribute('metered_account');
    }
    public set meteredAccount(value: string) {
        this._meteredAccount = value;
    }
    public resetMeteredAccount() {
        this._meteredAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get meteredAccountInput() {
        return this._meteredAccount;
    }

    // operating_regions - computed: true, optional: true, required: false
    private _operatingRegions = new CcIPAM.IpamOperatingRegionPropertyList(this, "operating_regions", true);
    public get operatingRegions() {
        return this._operatingRegions;
    }
    public putOperatingRegions(value: CcIPAM.IpamOperatingRegionProperty[] | cdktn.IResolvable) {
        this._operatingRegions.internalValue = value;
    }
    public resetOperatingRegions() {
        this._operatingRegions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatingRegionsInput() {
        return this._operatingRegions.internalValue;
    }

    // private_default_scope_id - computed: true, optional: false, required: false
    public get privateDefaultScopeId() {
        return this.getStringAttribute('private_default_scope_id');
    }

    // public_default_scope_id - computed: true, optional: false, required: false
    public get publicDefaultScopeId() {
        return this.getStringAttribute('public_default_scope_id');
    }

    // resource_discovery_association_count - computed: true, optional: false, required: false
    public get resourceDiscoveryAssociationCount() {
        return this.getNumberAttribute('resource_discovery_association_count');
    }

    // scope_count - computed: true, optional: false, required: false
    public get scopeCount() {
        return this.getNumberAttribute('scope_count');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIPAM.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIPAM.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tier - computed: true, optional: true, required: false
    private _tier?: string; 
    public get tier() {
        return this.getStringAttribute('tier');
    }
    public set tier(value: string) {
        this._tier = value;
    }
    public resetTier() {
        this._tier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tierInput() {
        return this._tier;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            default_resource_discovery_organizational_unit_exclusions: cdktn.listMapper(ccIPAMIpamOrganizationalUnitExclusionPropertyToTerraform, false)(this._defaultResourceDiscoveryOrganizationalUnitExclusions.internalValue),
            description: cdktn.stringToTerraform(this._description),
            enable_private_gua: cdktn.booleanToTerraform(this._enablePrivateGua),
            metered_account: cdktn.stringToTerraform(this._meteredAccount),
            operating_regions: cdktn.listMapper(ccIPAMIpamOperatingRegionPropertyToTerraform, false)(this._operatingRegions.internalValue),
            tags: cdktn.listMapper(ccIPAMTagPropertyToTerraform, false)(this._tags.internalValue),
            tier: cdktn.stringToTerraform(this._tier),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            default_resource_discovery_organizational_unit_exclusions: {
                value: cdktn.listMapperHcl(ccIPAMIpamOrganizationalUnitExclusionPropertyToHclTerraform, false)(this._defaultResourceDiscoveryOrganizationalUnitExclusions.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIPAM.IpamOrganizationalUnitExclusionPropertyList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_private_gua: {
                value: cdktn.booleanToHclTerraform(this._enablePrivateGua),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            metered_account: {
                value: cdktn.stringToHclTerraform(this._meteredAccount),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            operating_regions: {
                value: cdktn.listMapperHcl(ccIPAMIpamOperatingRegionPropertyToHclTerraform, false)(this._operatingRegions.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIPAM.IpamOperatingRegionPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIPAMTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIPAM.TagPropertyList",
            },
            tier: {
                value: cdktn.stringToHclTerraform(this._tier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIPAMIpamOrganizationalUnitExclusionPropertyToTerraform(struct?: CcIPAM.IpamOrganizationalUnitExclusionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        organizations_entity_path: cdktn.stringToTerraform(struct!.organizationsEntityPath),
    }
}


export function ccIPAMIpamOrganizationalUnitExclusionPropertyToHclTerraform(struct?: CcIPAM.IpamOrganizationalUnitExclusionProperty | cdktn.IResolvable): any {
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


export function ccIPAMIpamOperatingRegionPropertyToTerraform(struct?: CcIPAM.IpamOperatingRegionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        region_name: cdktn.stringToTerraform(struct!.regionName),
    }
}


export function ccIPAMIpamOperatingRegionPropertyToHclTerraform(struct?: CcIPAM.IpamOperatingRegionProperty | cdktn.IResolvable): any {
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


export function ccIPAMTagPropertyToTerraform(struct?: CcIPAM.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIPAMTagPropertyToHclTerraform(struct?: CcIPAM.TagProperty | cdktn.IResolvable): any {
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


export namespace CcIPAM {
export interface IpamOrganizationalUnitExclusionProperty {
    /**
    * An AWS Organizations entity path. Build the path for the OU(s) using AWS Organizations IDs separated by a '/'. Include all child OUs by ending the path with '/*'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam#organizations_entity_path CcIPAM#organizations_entity_path}
    */
    readonly organizationsEntityPath?: string;
}
export class IpamOrganizationalUnitExclusionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IpamOrganizationalUnitExclusionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: IpamOrganizationalUnitExclusionProperty | cdktn.IResolvable | undefined) {
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

export class IpamOrganizationalUnitExclusionPropertyList extends cdktn.ComplexList {
    public internalValue? : IpamOrganizationalUnitExclusionProperty[] | cdktn.IResolvable

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
    public get(index: number): IpamOrganizationalUnitExclusionPropertyOutputReference {
        return new IpamOrganizationalUnitExclusionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IpamOperatingRegionProperty {
    /**
    * The name of the region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam#region_name CcIPAM#region_name}
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
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam#key CcIPAM#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ipam#value CcIPAM#value}
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
