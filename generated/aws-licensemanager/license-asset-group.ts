// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/licensemanager_license_asset_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLicenseAssetGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * ARNs of associated license asset rulesets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/licensemanager_license_asset_group#associated_license_asset_ruleset_ar_ns CcLicenseAssetGroup#associated_license_asset_ruleset_ar_ns}
    */
    readonly associatedLicenseAssetRulesetArNs: string[];
    /**
    * License asset group description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/licensemanager_license_asset_group#description CcLicenseAssetGroup#description}
    */
    readonly description?: string;
    /**
    * License asset group configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/licensemanager_license_asset_group#license_asset_group_configurations CcLicenseAssetGroup#license_asset_group_configurations}
    */
    readonly licenseAssetGroupConfigurations: CcLicenseAssetGroup.LicenseAssetGroupConfigurationsProperty[] | cdktn.IResolvable;
    /**
    * License asset group name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/licensemanager_license_asset_group#name CcLicenseAssetGroup#name}
    */
    readonly name: string;
    /**
    * License asset group properties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/licensemanager_license_asset_group#properties CcLicenseAssetGroup#properties}
    */
    readonly properties?: CcLicenseAssetGroup.PropertiesProperty[] | cdktn.IResolvable;
    /**
    * Tags to add to the license asset group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/licensemanager_license_asset_group#tags CcLicenseAssetGroup#tags}
    */
    readonly tags?: CcLicenseAssetGroup.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/licensemanager_license_asset_group awscc_licensemanager_license_asset_group}
*/
export class CcLicenseAssetGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_licensemanager_license_asset_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLicenseAssetGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLicenseAssetGroup to import
    * @param importFromId The id of the existing CcLicenseAssetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/licensemanager_license_asset_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLicenseAssetGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_licensemanager_license_asset_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/licensemanager_license_asset_group awscc_licensemanager_license_asset_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLicenseAssetGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcLicenseAssetGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_licensemanager_license_asset_group',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._associatedLicenseAssetRulesetArNs = config.associatedLicenseAssetRulesetArNs;
        this._description = config.description;
        this._licenseAssetGroupConfigurations.internalValue = config.licenseAssetGroupConfigurations;
        this._name = config.name;
        this._properties.internalValue = config.properties;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // associated_license_asset_ruleset_ar_ns - computed: false, optional: false, required: true
    private _associatedLicenseAssetRulesetArNs?: string[]; 
    public get associatedLicenseAssetRulesetArNs() {
        return this.getListAttribute('associated_license_asset_ruleset_ar_ns');
    }
    public set associatedLicenseAssetRulesetArNs(value: string[]) {
        this._associatedLicenseAssetRulesetArNs = value;
    }
    // Temporarily expose input value. Use with caution.
    public get associatedLicenseAssetRulesetArNsInput() {
        return this._associatedLicenseAssetRulesetArNs;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // license_asset_group_arn - computed: true, optional: false, required: false
    public get licenseAssetGroupArn() {
        return this.getStringAttribute('license_asset_group_arn');
    }

    // license_asset_group_configurations - computed: false, optional: false, required: true
    private _licenseAssetGroupConfigurations = new CcLicenseAssetGroup.LicenseAssetGroupConfigurationsPropertyList(this, "license_asset_group_configurations", false);
    public get licenseAssetGroupConfigurations() {
        return this._licenseAssetGroupConfigurations;
    }
    public putLicenseAssetGroupConfigurations(value: CcLicenseAssetGroup.LicenseAssetGroupConfigurationsProperty[] | cdktn.IResolvable) {
        this._licenseAssetGroupConfigurations.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseAssetGroupConfigurationsInput() {
        return this._licenseAssetGroupConfigurations.internalValue;
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

    // properties - computed: true, optional: true, required: false
    private _properties = new CcLicenseAssetGroup.PropertiesPropertyList(this, "properties", false);
    public get properties() {
        return this._properties;
    }
    public putProperties(value: CcLicenseAssetGroup.PropertiesProperty[] | cdktn.IResolvable) {
        this._properties.internalValue = value;
    }
    public resetProperties() {
        this._properties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertiesInput() {
        return this._properties.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLicenseAssetGroup.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLicenseAssetGroup.TagsProperty[] | cdktn.IResolvable) {
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
            associated_license_asset_ruleset_ar_ns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._associatedLicenseAssetRulesetArNs),
            description: cdktn.stringToTerraform(this._description),
            license_asset_group_configurations: cdktn.listMapper(ccLicenseAssetGroupLicenseAssetGroupConfigurationsPropertyToTerraform, false)(this._licenseAssetGroupConfigurations.internalValue),
            name: cdktn.stringToTerraform(this._name),
            properties: cdktn.listMapper(ccLicenseAssetGroupPropertiesPropertyToTerraform, false)(this._properties.internalValue),
            tags: cdktn.listMapper(ccLicenseAssetGroupTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            associated_license_asset_ruleset_ar_ns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._associatedLicenseAssetRulesetArNs),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            license_asset_group_configurations: {
                value: cdktn.listMapperHcl(ccLicenseAssetGroupLicenseAssetGroupConfigurationsPropertyToHclTerraform, false)(this._licenseAssetGroupConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLicenseAssetGroup.LicenseAssetGroupConfigurationsPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            properties: {
                value: cdktn.listMapperHcl(ccLicenseAssetGroupPropertiesPropertyToHclTerraform, false)(this._properties.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLicenseAssetGroup.PropertiesPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLicenseAssetGroupTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLicenseAssetGroup.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLicenseAssetGroupLicenseAssetGroupConfigurationsPropertyToTerraform(struct?: CcLicenseAssetGroup.LicenseAssetGroupConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        usage_dimension: cdktn.stringToTerraform(struct!.usageDimension),
    }
}


export function ccLicenseAssetGroupLicenseAssetGroupConfigurationsPropertyToHclTerraform(struct?: CcLicenseAssetGroup.LicenseAssetGroupConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        usage_dimension: {
            value: cdktn.stringToHclTerraform(struct!.usageDimension),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetGroupPropertiesPropertyToTerraform(struct?: CcLicenseAssetGroup.PropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLicenseAssetGroupPropertiesPropertyToHclTerraform(struct?: CcLicenseAssetGroup.PropertiesProperty | cdktn.IResolvable): any {
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


export function ccLicenseAssetGroupTagsPropertyToTerraform(struct?: CcLicenseAssetGroup.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLicenseAssetGroupTagsPropertyToHclTerraform(struct?: CcLicenseAssetGroup.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcLicenseAssetGroup {
export interface LicenseAssetGroupConfigurationsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/licensemanager_license_asset_group#usage_dimension CcLicenseAssetGroup#usage_dimension}
    */
    readonly usageDimension?: string;
}
export class LicenseAssetGroupConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LicenseAssetGroupConfigurationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._usageDimension !== undefined) {
            hasAnyValues = true;
            internalValueResult.usageDimension = this._usageDimension;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LicenseAssetGroupConfigurationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._usageDimension = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._usageDimension = value.usageDimension;
        }
    }

    // usage_dimension - computed: true, optional: true, required: false
    private _usageDimension?: string; 
    public get usageDimension() {
        return this.getStringAttribute('usage_dimension');
    }
    public set usageDimension(value: string) {
        this._usageDimension = value;
    }
    public resetUsageDimension() {
        this._usageDimension = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usageDimensionInput() {
        return this._usageDimension;
    }
}

export class LicenseAssetGroupConfigurationsPropertyList extends cdktn.ComplexList {
    public internalValue? : LicenseAssetGroupConfigurationsProperty[] | cdktn.IResolvable

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
    public get(index: number): LicenseAssetGroupConfigurationsPropertyOutputReference {
        return new LicenseAssetGroupConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/licensemanager_license_asset_group#key CcLicenseAssetGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/licensemanager_license_asset_group#value CcLicenseAssetGroup#value}
    */
    readonly value?: string;
}
export class PropertiesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PropertiesProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: PropertiesProperty | cdktn.IResolvable | undefined) {
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

export class PropertiesPropertyList extends cdktn.ComplexList {
    public internalValue? : PropertiesProperty[] | cdktn.IResolvable

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
    public get(index: number): PropertiesPropertyOutputReference {
        return new PropertiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/licensemanager_license_asset_group#key CcLicenseAssetGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/licensemanager_license_asset_group#value CcLicenseAssetGroup#value}
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
