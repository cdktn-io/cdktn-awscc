// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPlaybackRestrictionPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of country codes that control geoblocking restriction. Allowed values are the officially assigned ISO 3166-1 alpha-2 codes. Default: All countries (an empty array).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#allowed_countries CcPlaybackRestrictionPolicy#allowed_countries}
    */
    readonly allowedCountries?: string[];
    /**
    * A list of origin sites that control CORS restriction. Allowed values are the same as valid values of the Origin header defined at https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#allowed_origins CcPlaybackRestrictionPolicy#allowed_origins}
    */
    readonly allowedOrigins?: string[];
    /**
    * Whether channel playback is constrained by origin site.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#enable_strict_origin_enforcement CcPlaybackRestrictionPolicy#enable_strict_origin_enforcement}
    */
    readonly enableStrictOriginEnforcement?: boolean | cdktn.IResolvable;
    /**
    * Playback-restriction-policy name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#name CcPlaybackRestrictionPolicy#name}
    */
    readonly name?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#tags CcPlaybackRestrictionPolicy#tags}
    */
    readonly tags?: CcPlaybackRestrictionPolicy.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy awscc_ivs_playback_restriction_policy}
*/
export class CcPlaybackRestrictionPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ivs_playback_restriction_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPlaybackRestrictionPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPlaybackRestrictionPolicy to import
    * @param importFromId The id of the existing CcPlaybackRestrictionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPlaybackRestrictionPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ivs_playback_restriction_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy awscc_ivs_playback_restriction_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPlaybackRestrictionPolicyProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcPlaybackRestrictionPolicyProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ivs_playback_restriction_policy',
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
        this._allowedCountries = config.allowedCountries;
        this._allowedOrigins = config.allowedOrigins;
        this._enableStrictOriginEnforcement = config.enableStrictOriginEnforcement;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allowed_countries - computed: true, optional: true, required: false
    private _allowedCountries?: string[]; 
    public get allowedCountries() {
        return cdktn.Fn.tolist(this.getListAttribute('allowed_countries'));
    }
    public set allowedCountries(value: string[]) {
        this._allowedCountries = value;
    }
    public resetAllowedCountries() {
        this._allowedCountries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedCountriesInput() {
        return this._allowedCountries;
    }

    // allowed_origins - computed: true, optional: true, required: false
    private _allowedOrigins?: string[]; 
    public get allowedOrigins() {
        return this.getListAttribute('allowed_origins');
    }
    public set allowedOrigins(value: string[]) {
        this._allowedOrigins = value;
    }
    public resetAllowedOrigins() {
        this._allowedOrigins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedOriginsInput() {
        return this._allowedOrigins;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // enable_strict_origin_enforcement - computed: true, optional: true, required: false
    private _enableStrictOriginEnforcement?: boolean | cdktn.IResolvable; 
    public get enableStrictOriginEnforcement() {
        return this.getBooleanAttribute('enable_strict_origin_enforcement');
    }
    public set enableStrictOriginEnforcement(value: boolean | cdktn.IResolvable) {
        this._enableStrictOriginEnforcement = value;
    }
    public resetEnableStrictOriginEnforcement() {
        this._enableStrictOriginEnforcement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableStrictOriginEnforcementInput() {
        return this._enableStrictOriginEnforcement;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPlaybackRestrictionPolicy.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPlaybackRestrictionPolicy.TagProperty[] | cdktn.IResolvable) {
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
            allowed_countries: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedCountries),
            allowed_origins: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedOrigins),
            enable_strict_origin_enforcement: cdktn.booleanToTerraform(this._enableStrictOriginEnforcement),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccPlaybackRestrictionPolicyTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allowed_countries: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedCountries),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            allowed_origins: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedOrigins),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            enable_strict_origin_enforcement: {
                value: cdktn.booleanToHclTerraform(this._enableStrictOriginEnforcement),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPlaybackRestrictionPolicyTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcPlaybackRestrictionPolicy.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPlaybackRestrictionPolicyTagPropertyToTerraform(struct?: CcPlaybackRestrictionPolicy.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPlaybackRestrictionPolicyTagPropertyToHclTerraform(struct?: CcPlaybackRestrictionPolicy.TagProperty | cdktn.IResolvable): any {
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


export namespace CcPlaybackRestrictionPolicy {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#key CcPlaybackRestrictionPolicy#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#value CcPlaybackRestrictionPolicy#value}
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
