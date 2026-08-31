// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLicenseAssetRuleSetProps extends cdktn.TerraformMetaArguments {
    /**
    * License asset ruleset description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#description CcLicenseAssetRuleSet#description}
    */
    readonly description?: string;
    /**
    * License asset ruleset name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#name CcLicenseAssetRuleSet#name}
    */
    readonly name: string;
    /**
    * License asset rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#rules CcLicenseAssetRuleSet#rules}
    */
    readonly rules: CcLicenseAssetRuleSet.LicenseAssetRuleProperty[] | cdktn.IResolvable;
    /**
    * Tags to add to the license asset ruleset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#tags CcLicenseAssetRuleSet#tags}
    */
    readonly tags?: CcLicenseAssetRuleSet.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set awscc_licensemanager_license_asset_rule_set}
*/
export class CcLicenseAssetRuleSet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_licensemanager_license_asset_rule_set";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLicenseAssetRuleSet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLicenseAssetRuleSet to import
    * @param importFromId The id of the existing CcLicenseAssetRuleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLicenseAssetRuleSet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_licensemanager_license_asset_rule_set", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set awscc_licensemanager_license_asset_rule_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLicenseAssetRuleSetProps
    */
    public constructor(scope: Construct, id: string, config: CcLicenseAssetRuleSetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_licensemanager_license_asset_rule_set',
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
        this._name = config.name;
        this._rules.internalValue = config.rules;
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

    // license_asset_ruleset_arn - computed: true, optional: false, required: false
    public get licenseAssetRulesetArn() {
        return this.getStringAttribute('license_asset_ruleset_arn');
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

    // rules - computed: false, optional: false, required: true
    private _rules = new CcLicenseAssetRuleSet.LicenseAssetRulePropertyList(this, "rules", false);
    public get rules() {
        return this._rules;
    }
    public putRules(value: CcLicenseAssetRuleSet.LicenseAssetRuleProperty[] | cdktn.IResolvable) {
        this._rules.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
        return this._rules.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLicenseAssetRuleSet.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLicenseAssetRuleSet.TagProperty[] | cdktn.IResolvable) {
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
            rules: cdktn.listMapper(ccLicenseAssetRuleSetLicenseAssetRulePropertyToTerraform, false)(this._rules.internalValue),
            tags: cdktn.listMapper(ccLicenseAssetRuleSetTagPropertyToTerraform, false)(this._tags.internalValue),
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
            rules: {
                value: cdktn.listMapperHcl(ccLicenseAssetRuleSetLicenseAssetRulePropertyToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLicenseAssetRuleSet.LicenseAssetRulePropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLicenseAssetRuleSetTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLicenseAssetRuleSet.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLicenseAssetRuleSetMatchingRuleStatementPropertyToTerraform(struct?: CcLicenseAssetRuleSet.MatchingRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        constraint: cdktn.stringToTerraform(struct!.constraint),
        key_to_match: cdktn.stringToTerraform(struct!.keyToMatch),
        value_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueToMatch),
    }
}


export function ccLicenseAssetRuleSetMatchingRuleStatementPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.MatchingRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        constraint: {
            value: cdktn.stringToHclTerraform(struct!.constraint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_to_match: {
            value: cdktn.stringToHclTerraform(struct!.keyToMatch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value_to_match: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueToMatch),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetAndRuleStatementPropertyToTerraform(struct?: CcLicenseAssetRuleSet.AndRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        matching_rule_statements: cdktn.listMapper(ccLicenseAssetRuleSetMatchingRuleStatementPropertyToTerraform, false)(struct!.matchingRuleStatements),
    }
}


export function ccLicenseAssetRuleSetAndRuleStatementPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.AndRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        matching_rule_statements: {
            value: cdktn.listMapperHcl(ccLicenseAssetRuleSetMatchingRuleStatementPropertyToHclTerraform, false)(struct!.matchingRuleStatements),
            isBlock: true,
            type: "list",
            storageClassType: "MatchingRuleStatementPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementPropertyToTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementInstanceRuleStatementMatchingRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        constraint: cdktn.stringToTerraform(struct!.constraint),
        key_to_match: cdktn.stringToTerraform(struct!.keyToMatch),
        value_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueToMatch),
    }
}


export function ccLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementInstanceRuleStatementMatchingRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        constraint: {
            value: cdktn.stringToHclTerraform(struct!.constraint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_to_match: {
            value: cdktn.stringToHclTerraform(struct!.keyToMatch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value_to_match: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueToMatch),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsPropertyToTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        constraint: cdktn.stringToTerraform(struct!.constraint),
        key_to_match: cdktn.stringToTerraform(struct!.keyToMatch),
        value_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueToMatch),
    }
}


export function ccLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        constraint: {
            value: cdktn.stringToHclTerraform(struct!.constraint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_to_match: {
            value: cdktn.stringToHclTerraform(struct!.keyToMatch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value_to_match: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueToMatch),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetOrRuleStatementPropertyToTerraform(struct?: CcLicenseAssetRuleSet.OrRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        matching_rule_statements: cdktn.listMapper(ccLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsPropertyToTerraform, false)(struct!.matchingRuleStatements),
    }
}


export function ccLicenseAssetRuleSetOrRuleStatementPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.OrRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        matching_rule_statements: {
            value: cdktn.listMapperHcl(ccLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsPropertyToHclTerraform, false)(struct!.matchingRuleStatements),
            isBlock: true,
            type: "list",
            storageClassType: "RulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetInstanceRuleStatementPropertyToTerraform(struct?: CcLicenseAssetRuleSet.InstanceRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        and_rule_statement: ccLicenseAssetRuleSetAndRuleStatementPropertyToTerraform(struct!.andRuleStatement),
        matching_rule_statement: ccLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementPropertyToTerraform(struct!.matchingRuleStatement),
        or_rule_statement: ccLicenseAssetRuleSetOrRuleStatementPropertyToTerraform(struct!.orRuleStatement),
    }
}


export function ccLicenseAssetRuleSetInstanceRuleStatementPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.InstanceRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        and_rule_statement: {
            value: ccLicenseAssetRuleSetAndRuleStatementPropertyToHclTerraform(struct!.andRuleStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "AndRuleStatementProperty",
        },
        matching_rule_statement: {
            value: ccLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementPropertyToHclTerraform(struct!.matchingRuleStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesRuleStatementInstanceRuleStatementMatchingRuleStatementProperty",
        },
        or_rule_statement: {
            value: ccLicenseAssetRuleSetOrRuleStatementPropertyToHclTerraform(struct!.orRuleStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "OrRuleStatementProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsPropertyToTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        constraint: cdktn.stringToTerraform(struct!.constraint),
        key_to_match: cdktn.stringToTerraform(struct!.keyToMatch),
        value_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueToMatch),
    }
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        constraint: {
            value: cdktn.stringToHclTerraform(struct!.constraint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_to_match: {
            value: cdktn.stringToHclTerraform(struct!.keyToMatch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value_to_match: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueToMatch),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementPropertyToTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        matching_rule_statements: cdktn.listMapper(ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsPropertyToTerraform, false)(struct!.matchingRuleStatements),
    }
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        matching_rule_statements: {
            value: cdktn.listMapperHcl(ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsPropertyToHclTerraform, false)(struct!.matchingRuleStatements),
            isBlock: true,
            type: "list",
            storageClassType: "RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementPropertyToTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        constraint: cdktn.stringToTerraform(struct!.constraint),
        key_to_match: cdktn.stringToTerraform(struct!.keyToMatch),
        value_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueToMatch),
    }
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        constraint: {
            value: cdktn.stringToHclTerraform(struct!.constraint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_to_match: {
            value: cdktn.stringToHclTerraform(struct!.keyToMatch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value_to_match: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueToMatch),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsPropertyToTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        constraint: cdktn.stringToTerraform(struct!.constraint),
        key_to_match: cdktn.stringToTerraform(struct!.keyToMatch),
        value_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueToMatch),
    }
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        constraint: {
            value: cdktn.stringToHclTerraform(struct!.constraint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_to_match: {
            value: cdktn.stringToHclTerraform(struct!.keyToMatch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value_to_match: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueToMatch),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementPropertyToTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        matching_rule_statements: cdktn.listMapper(ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsPropertyToTerraform, false)(struct!.matchingRuleStatements),
    }
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        matching_rule_statements: {
            value: cdktn.listMapperHcl(ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsPropertyToHclTerraform, false)(struct!.matchingRuleStatements),
            isBlock: true,
            type: "list",
            storageClassType: "RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetLicenseConfigurationRuleStatementPropertyToTerraform(struct?: CcLicenseAssetRuleSet.LicenseConfigurationRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        and_rule_statement: ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementPropertyToTerraform(struct!.andRuleStatement),
        matching_rule_statement: ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementPropertyToTerraform(struct!.matchingRuleStatement),
        or_rule_statement: ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementPropertyToTerraform(struct!.orRuleStatement),
    }
}


export function ccLicenseAssetRuleSetLicenseConfigurationRuleStatementPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.LicenseConfigurationRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        and_rule_statement: {
            value: ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementPropertyToHclTerraform(struct!.andRuleStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementProperty",
        },
        matching_rule_statement: {
            value: ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementPropertyToHclTerraform(struct!.matchingRuleStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementProperty",
        },
        or_rule_statement: {
            value: ccLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementPropertyToHclTerraform(struct!.orRuleStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsPropertyToTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        constraint: cdktn.stringToTerraform(struct!.constraint),
        key_to_match: cdktn.stringToTerraform(struct!.keyToMatch),
        value_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueToMatch),
    }
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        constraint: {
            value: cdktn.stringToHclTerraform(struct!.constraint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_to_match: {
            value: cdktn.stringToHclTerraform(struct!.keyToMatch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value_to_match: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueToMatch),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementPropertyToTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseRuleStatementAndRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        matching_rule_statements: cdktn.listMapper(ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsPropertyToTerraform, false)(struct!.matchingRuleStatements),
    }
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseRuleStatementAndRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        matching_rule_statements: {
            value: cdktn.listMapperHcl(ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsPropertyToHclTerraform, false)(struct!.matchingRuleStatements),
            isBlock: true,
            type: "list",
            storageClassType: "RulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementPropertyToTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseRuleStatementMatchingRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        constraint: cdktn.stringToTerraform(struct!.constraint),
        key_to_match: cdktn.stringToTerraform(struct!.keyToMatch),
        value_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueToMatch),
    }
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseRuleStatementMatchingRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        constraint: {
            value: cdktn.stringToHclTerraform(struct!.constraint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_to_match: {
            value: cdktn.stringToHclTerraform(struct!.keyToMatch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value_to_match: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueToMatch),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsPropertyToTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        constraint: cdktn.stringToTerraform(struct!.constraint),
        key_to_match: cdktn.stringToTerraform(struct!.keyToMatch),
        value_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueToMatch),
    }
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        constraint: {
            value: cdktn.stringToHclTerraform(struct!.constraint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_to_match: {
            value: cdktn.stringToHclTerraform(struct!.keyToMatch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value_to_match: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueToMatch),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementPropertyToTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseRuleStatementOrRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        matching_rule_statements: cdktn.listMapper(ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsPropertyToTerraform, false)(struct!.matchingRuleStatements),
    }
}


export function ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.RulesRuleStatementLicenseRuleStatementOrRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        matching_rule_statements: {
            value: cdktn.listMapperHcl(ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsPropertyToHclTerraform, false)(struct!.matchingRuleStatements),
            isBlock: true,
            type: "list",
            storageClassType: "RulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetLicenseRuleStatementPropertyToTerraform(struct?: CcLicenseAssetRuleSet.LicenseRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        and_rule_statement: ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementPropertyToTerraform(struct!.andRuleStatement),
        matching_rule_statement: ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementPropertyToTerraform(struct!.matchingRuleStatement),
        or_rule_statement: ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementPropertyToTerraform(struct!.orRuleStatement),
    }
}


export function ccLicenseAssetRuleSetLicenseRuleStatementPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.LicenseRuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        and_rule_statement: {
            value: ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementPropertyToHclTerraform(struct!.andRuleStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesRuleStatementLicenseRuleStatementAndRuleStatementProperty",
        },
        matching_rule_statement: {
            value: ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementPropertyToHclTerraform(struct!.matchingRuleStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesRuleStatementLicenseRuleStatementMatchingRuleStatementProperty",
        },
        or_rule_statement: {
            value: ccLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementPropertyToHclTerraform(struct!.orRuleStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesRuleStatementLicenseRuleStatementOrRuleStatementProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetRuleStatementPropertyToTerraform(struct?: CcLicenseAssetRuleSet.RuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_rule_statement: ccLicenseAssetRuleSetInstanceRuleStatementPropertyToTerraform(struct!.instanceRuleStatement),
        license_configuration_rule_statement: ccLicenseAssetRuleSetLicenseConfigurationRuleStatementPropertyToTerraform(struct!.licenseConfigurationRuleStatement),
        license_rule_statement: ccLicenseAssetRuleSetLicenseRuleStatementPropertyToTerraform(struct!.licenseRuleStatement),
    }
}


export function ccLicenseAssetRuleSetRuleStatementPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.RuleStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_rule_statement: {
            value: ccLicenseAssetRuleSetInstanceRuleStatementPropertyToHclTerraform(struct!.instanceRuleStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceRuleStatementProperty",
        },
        license_configuration_rule_statement: {
            value: ccLicenseAssetRuleSetLicenseConfigurationRuleStatementPropertyToHclTerraform(struct!.licenseConfigurationRuleStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "LicenseConfigurationRuleStatementProperty",
        },
        license_rule_statement: {
            value: ccLicenseAssetRuleSetLicenseRuleStatementPropertyToHclTerraform(struct!.licenseRuleStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "LicenseRuleStatementProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetLicenseAssetRulePropertyToTerraform(struct?: CcLicenseAssetRuleSet.LicenseAssetRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rule_statement: ccLicenseAssetRuleSetRuleStatementPropertyToTerraform(struct!.ruleStatement),
    }
}


export function ccLicenseAssetRuleSetLicenseAssetRulePropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.LicenseAssetRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rule_statement: {
            value: ccLicenseAssetRuleSetRuleStatementPropertyToHclTerraform(struct!.ruleStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleStatementProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseAssetRuleSetTagPropertyToTerraform(struct?: CcLicenseAssetRuleSet.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLicenseAssetRuleSetTagPropertyToHclTerraform(struct?: CcLicenseAssetRuleSet.TagProperty | cdktn.IResolvable): any {
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


export namespace CcLicenseAssetRuleSet {
export interface MatchingRuleStatementProperty {
    /**
    * Constraint (e.g. Equals, Not_Equals).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#constraint CcLicenseAssetRuleSet#constraint}
    */
    readonly constraint?: string;
    /**
    * Key to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match CcLicenseAssetRuleSet#key_to_match}
    */
    readonly keyToMatch?: string;
    /**
    * Values to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match CcLicenseAssetRuleSet#value_to_match}
    */
    readonly valueToMatch?: string[];
}
export class MatchingRuleStatementPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MatchingRuleStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._constraint !== undefined) {
            hasAnyValues = true;
            internalValueResult.constraint = this._constraint;
        }
        if (this._keyToMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyToMatch = this._keyToMatch;
        }
        if (this._valueToMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueToMatch = this._valueToMatch;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MatchingRuleStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._constraint = undefined;
            this._keyToMatch = undefined;
            this._valueToMatch = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._constraint = value.constraint;
            this._keyToMatch = value.keyToMatch;
            this._valueToMatch = value.valueToMatch;
        }
    }

    // constraint - computed: true, optional: true, required: false
    private _constraint?: string; 
    public get constraint() {
        return this.getStringAttribute('constraint');
    }
    public set constraint(value: string) {
        this._constraint = value;
    }
    public resetConstraint() {
        this._constraint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constraintInput() {
        return this._constraint;
    }

    // key_to_match - computed: true, optional: true, required: false
    private _keyToMatch?: string; 
    public get keyToMatch() {
        return this.getStringAttribute('key_to_match');
    }
    public set keyToMatch(value: string) {
        this._keyToMatch = value;
    }
    public resetKeyToMatch() {
        this._keyToMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyToMatchInput() {
        return this._keyToMatch;
    }

    // value_to_match - computed: true, optional: true, required: false
    private _valueToMatch?: string[]; 
    public get valueToMatch() {
        return this.getListAttribute('value_to_match');
    }
    public set valueToMatch(value: string[]) {
        this._valueToMatch = value;
    }
    public resetValueToMatch() {
        this._valueToMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueToMatchInput() {
        return this._valueToMatch;
    }
}

export class MatchingRuleStatementPropertyList extends cdktn.ComplexList {
    public internalValue? : MatchingRuleStatementProperty[] | cdktn.IResolvable

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
    public get(index: number): MatchingRuleStatementPropertyOutputReference {
        return new MatchingRuleStatementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AndRuleStatementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements CcLicenseAssetRuleSet#matching_rule_statements}
    */
    readonly matchingRuleStatements?: MatchingRuleStatementProperty[] | cdktn.IResolvable;
}
export class AndRuleStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AndRuleStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._matchingRuleStatements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchingRuleStatements = this._matchingRuleStatements?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AndRuleStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._matchingRuleStatements.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._matchingRuleStatements.internalValue = value.matchingRuleStatements;
        }
    }

    // matching_rule_statements - computed: true, optional: true, required: false
    private _matchingRuleStatements = new MatchingRuleStatementPropertyList(this, "matching_rule_statements", false);
    public get matchingRuleStatements() {
        return this._matchingRuleStatements;
    }
    public putMatchingRuleStatements(value: MatchingRuleStatementProperty[] | cdktn.IResolvable) {
        this._matchingRuleStatements.internalValue = value;
    }
    public resetMatchingRuleStatements() {
        this._matchingRuleStatements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchingRuleStatementsInput() {
        return this._matchingRuleStatements.internalValue;
    }
}
export interface RulesRuleStatementInstanceRuleStatementMatchingRuleStatementProperty {
    /**
    * Constraint (e.g. Equals, Not_Equals).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#constraint CcLicenseAssetRuleSet#constraint}
    */
    readonly constraint?: string;
    /**
    * Key to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match CcLicenseAssetRuleSet#key_to_match}
    */
    readonly keyToMatch?: string;
    /**
    * Values to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match CcLicenseAssetRuleSet#value_to_match}
    */
    readonly valueToMatch?: string[];
}
export class RulesRuleStatementInstanceRuleStatementMatchingRuleStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesRuleStatementInstanceRuleStatementMatchingRuleStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._constraint !== undefined) {
            hasAnyValues = true;
            internalValueResult.constraint = this._constraint;
        }
        if (this._keyToMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyToMatch = this._keyToMatch;
        }
        if (this._valueToMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueToMatch = this._valueToMatch;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesRuleStatementInstanceRuleStatementMatchingRuleStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._constraint = undefined;
            this._keyToMatch = undefined;
            this._valueToMatch = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._constraint = value.constraint;
            this._keyToMatch = value.keyToMatch;
            this._valueToMatch = value.valueToMatch;
        }
    }

    // constraint - computed: true, optional: true, required: false
    private _constraint?: string; 
    public get constraint() {
        return this.getStringAttribute('constraint');
    }
    public set constraint(value: string) {
        this._constraint = value;
    }
    public resetConstraint() {
        this._constraint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constraintInput() {
        return this._constraint;
    }

    // key_to_match - computed: true, optional: true, required: false
    private _keyToMatch?: string; 
    public get keyToMatch() {
        return this.getStringAttribute('key_to_match');
    }
    public set keyToMatch(value: string) {
        this._keyToMatch = value;
    }
    public resetKeyToMatch() {
        this._keyToMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyToMatchInput() {
        return this._keyToMatch;
    }

    // value_to_match - computed: true, optional: true, required: false
    private _valueToMatch?: string[]; 
    public get valueToMatch() {
        return this.getListAttribute('value_to_match');
    }
    public set valueToMatch(value: string[]) {
        this._valueToMatch = value;
    }
    public resetValueToMatch() {
        this._valueToMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueToMatchInput() {
        return this._valueToMatch;
    }
}
export interface RulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsProperty {
    /**
    * Constraint (e.g. Equals, Not_Equals).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#constraint CcLicenseAssetRuleSet#constraint}
    */
    readonly constraint?: string;
    /**
    * Key to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match CcLicenseAssetRuleSet#key_to_match}
    */
    readonly keyToMatch?: string;
    /**
    * Values to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match CcLicenseAssetRuleSet#value_to_match}
    */
    readonly valueToMatch?: string[];
}
export class RulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._constraint !== undefined) {
            hasAnyValues = true;
            internalValueResult.constraint = this._constraint;
        }
        if (this._keyToMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyToMatch = this._keyToMatch;
        }
        if (this._valueToMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueToMatch = this._valueToMatch;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._constraint = undefined;
            this._keyToMatch = undefined;
            this._valueToMatch = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._constraint = value.constraint;
            this._keyToMatch = value.keyToMatch;
            this._valueToMatch = value.valueToMatch;
        }
    }

    // constraint - computed: true, optional: true, required: false
    private _constraint?: string; 
    public get constraint() {
        return this.getStringAttribute('constraint');
    }
    public set constraint(value: string) {
        this._constraint = value;
    }
    public resetConstraint() {
        this._constraint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constraintInput() {
        return this._constraint;
    }

    // key_to_match - computed: true, optional: true, required: false
    private _keyToMatch?: string; 
    public get keyToMatch() {
        return this.getStringAttribute('key_to_match');
    }
    public set keyToMatch(value: string) {
        this._keyToMatch = value;
    }
    public resetKeyToMatch() {
        this._keyToMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyToMatchInput() {
        return this._keyToMatch;
    }

    // value_to_match - computed: true, optional: true, required: false
    private _valueToMatch?: string[]; 
    public get valueToMatch() {
        return this.getListAttribute('value_to_match');
    }
    public set valueToMatch(value: string[]) {
        this._valueToMatch = value;
    }
    public resetValueToMatch() {
        this._valueToMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueToMatchInput() {
        return this._valueToMatch;
    }
}

export class RulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsPropertyList extends cdktn.ComplexList {
    public internalValue? : RulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsProperty[] | cdktn.IResolvable

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
    public get(index: number): RulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsPropertyOutputReference {
        return new RulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OrRuleStatementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements CcLicenseAssetRuleSet#matching_rule_statements}
    */
    readonly matchingRuleStatements?: RulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsProperty[] | cdktn.IResolvable;
}
export class OrRuleStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OrRuleStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._matchingRuleStatements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchingRuleStatements = this._matchingRuleStatements?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OrRuleStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._matchingRuleStatements.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._matchingRuleStatements.internalValue = value.matchingRuleStatements;
        }
    }

    // matching_rule_statements - computed: true, optional: true, required: false
    private _matchingRuleStatements = new RulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsPropertyList(this, "matching_rule_statements", false);
    public get matchingRuleStatements() {
        return this._matchingRuleStatements;
    }
    public putMatchingRuleStatements(value: RulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsProperty[] | cdktn.IResolvable) {
        this._matchingRuleStatements.internalValue = value;
    }
    public resetMatchingRuleStatements() {
        this._matchingRuleStatements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchingRuleStatementsInput() {
        return this._matchingRuleStatements.internalValue;
    }
}
export interface InstanceRuleStatementProperty {
    /**
    * AND rule statement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#and_rule_statement CcLicenseAssetRuleSet#and_rule_statement}
    */
    readonly andRuleStatement?: AndRuleStatementProperty;
    /**
    * Matching rule statement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statement CcLicenseAssetRuleSet#matching_rule_statement}
    */
    readonly matchingRuleStatement?: RulesRuleStatementInstanceRuleStatementMatchingRuleStatementProperty;
    /**
    * OR rule statement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#or_rule_statement CcLicenseAssetRuleSet#or_rule_statement}
    */
    readonly orRuleStatement?: OrRuleStatementProperty;
}
export class InstanceRuleStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceRuleStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._andRuleStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.andRuleStatement = this._andRuleStatement?.internalValue;
        }
        if (this._matchingRuleStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchingRuleStatement = this._matchingRuleStatement?.internalValue;
        }
        if (this._orRuleStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.orRuleStatement = this._orRuleStatement?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceRuleStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._andRuleStatement.internalValue = undefined;
            this._matchingRuleStatement.internalValue = undefined;
            this._orRuleStatement.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._andRuleStatement.internalValue = value.andRuleStatement;
            this._matchingRuleStatement.internalValue = value.matchingRuleStatement;
            this._orRuleStatement.internalValue = value.orRuleStatement;
        }
    }

    // and_rule_statement - computed: true, optional: true, required: false
    private _andRuleStatement = new AndRuleStatementPropertyOutputReference(this, "and_rule_statement");
    public get andRuleStatement() {
        return this._andRuleStatement;
    }
    public putAndRuleStatement(value: AndRuleStatementProperty) {
        this._andRuleStatement.internalValue = value;
    }
    public resetAndRuleStatement() {
        this._andRuleStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get andRuleStatementInput() {
        return this._andRuleStatement.internalValue;
    }

    // matching_rule_statement - computed: true, optional: true, required: false
    private _matchingRuleStatement = new RulesRuleStatementInstanceRuleStatementMatchingRuleStatementPropertyOutputReference(this, "matching_rule_statement");
    public get matchingRuleStatement() {
        return this._matchingRuleStatement;
    }
    public putMatchingRuleStatement(value: RulesRuleStatementInstanceRuleStatementMatchingRuleStatementProperty) {
        this._matchingRuleStatement.internalValue = value;
    }
    public resetMatchingRuleStatement() {
        this._matchingRuleStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchingRuleStatementInput() {
        return this._matchingRuleStatement.internalValue;
    }

    // or_rule_statement - computed: true, optional: true, required: false
    private _orRuleStatement = new OrRuleStatementPropertyOutputReference(this, "or_rule_statement");
    public get orRuleStatement() {
        return this._orRuleStatement;
    }
    public putOrRuleStatement(value: OrRuleStatementProperty) {
        this._orRuleStatement.internalValue = value;
    }
    public resetOrRuleStatement() {
        this._orRuleStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orRuleStatementInput() {
        return this._orRuleStatement.internalValue;
    }
}
export interface RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsProperty {
    /**
    * Constraint (e.g. Equals, Not_Equals).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#constraint CcLicenseAssetRuleSet#constraint}
    */
    readonly constraint?: string;
    /**
    * Key to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match CcLicenseAssetRuleSet#key_to_match}
    */
    readonly keyToMatch?: string;
    /**
    * Values to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match CcLicenseAssetRuleSet#value_to_match}
    */
    readonly valueToMatch?: string[];
}
export class RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._constraint !== undefined) {
            hasAnyValues = true;
            internalValueResult.constraint = this._constraint;
        }
        if (this._keyToMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyToMatch = this._keyToMatch;
        }
        if (this._valueToMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueToMatch = this._valueToMatch;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._constraint = undefined;
            this._keyToMatch = undefined;
            this._valueToMatch = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._constraint = value.constraint;
            this._keyToMatch = value.keyToMatch;
            this._valueToMatch = value.valueToMatch;
        }
    }

    // constraint - computed: true, optional: true, required: false
    private _constraint?: string; 
    public get constraint() {
        return this.getStringAttribute('constraint');
    }
    public set constraint(value: string) {
        this._constraint = value;
    }
    public resetConstraint() {
        this._constraint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constraintInput() {
        return this._constraint;
    }

    // key_to_match - computed: true, optional: true, required: false
    private _keyToMatch?: string; 
    public get keyToMatch() {
        return this.getStringAttribute('key_to_match');
    }
    public set keyToMatch(value: string) {
        this._keyToMatch = value;
    }
    public resetKeyToMatch() {
        this._keyToMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyToMatchInput() {
        return this._keyToMatch;
    }

    // value_to_match - computed: true, optional: true, required: false
    private _valueToMatch?: string[]; 
    public get valueToMatch() {
        return this.getListAttribute('value_to_match');
    }
    public set valueToMatch(value: string[]) {
        this._valueToMatch = value;
    }
    public resetValueToMatch() {
        this._valueToMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueToMatchInput() {
        return this._valueToMatch;
    }
}

export class RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsPropertyList extends cdktn.ComplexList {
    public internalValue? : RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsProperty[] | cdktn.IResolvable

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
    public get(index: number): RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsPropertyOutputReference {
        return new RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements CcLicenseAssetRuleSet#matching_rule_statements}
    */
    readonly matchingRuleStatements?: RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsProperty[] | cdktn.IResolvable;
}
export class RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._matchingRuleStatements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchingRuleStatements = this._matchingRuleStatements?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._matchingRuleStatements.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._matchingRuleStatements.internalValue = value.matchingRuleStatements;
        }
    }

    // matching_rule_statements - computed: true, optional: true, required: false
    private _matchingRuleStatements = new RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsPropertyList(this, "matching_rule_statements", false);
    public get matchingRuleStatements() {
        return this._matchingRuleStatements;
    }
    public putMatchingRuleStatements(value: RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsProperty[] | cdktn.IResolvable) {
        this._matchingRuleStatements.internalValue = value;
    }
    public resetMatchingRuleStatements() {
        this._matchingRuleStatements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchingRuleStatementsInput() {
        return this._matchingRuleStatements.internalValue;
    }
}
export interface RulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementProperty {
    /**
    * Constraint (e.g. Equals, Not_Equals).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#constraint CcLicenseAssetRuleSet#constraint}
    */
    readonly constraint?: string;
    /**
    * Key to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match CcLicenseAssetRuleSet#key_to_match}
    */
    readonly keyToMatch?: string;
    /**
    * Values to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match CcLicenseAssetRuleSet#value_to_match}
    */
    readonly valueToMatch?: string[];
}
export class RulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._constraint !== undefined) {
            hasAnyValues = true;
            internalValueResult.constraint = this._constraint;
        }
        if (this._keyToMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyToMatch = this._keyToMatch;
        }
        if (this._valueToMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueToMatch = this._valueToMatch;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._constraint = undefined;
            this._keyToMatch = undefined;
            this._valueToMatch = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._constraint = value.constraint;
            this._keyToMatch = value.keyToMatch;
            this._valueToMatch = value.valueToMatch;
        }
    }

    // constraint - computed: true, optional: true, required: false
    private _constraint?: string; 
    public get constraint() {
        return this.getStringAttribute('constraint');
    }
    public set constraint(value: string) {
        this._constraint = value;
    }
    public resetConstraint() {
        this._constraint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constraintInput() {
        return this._constraint;
    }

    // key_to_match - computed: true, optional: true, required: false
    private _keyToMatch?: string; 
    public get keyToMatch() {
        return this.getStringAttribute('key_to_match');
    }
    public set keyToMatch(value: string) {
        this._keyToMatch = value;
    }
    public resetKeyToMatch() {
        this._keyToMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyToMatchInput() {
        return this._keyToMatch;
    }

    // value_to_match - computed: true, optional: true, required: false
    private _valueToMatch?: string[]; 
    public get valueToMatch() {
        return this.getListAttribute('value_to_match');
    }
    public set valueToMatch(value: string[]) {
        this._valueToMatch = value;
    }
    public resetValueToMatch() {
        this._valueToMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueToMatchInput() {
        return this._valueToMatch;
    }
}
export interface RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsProperty {
    /**
    * Constraint (e.g. Equals, Not_Equals).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#constraint CcLicenseAssetRuleSet#constraint}
    */
    readonly constraint?: string;
    /**
    * Key to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match CcLicenseAssetRuleSet#key_to_match}
    */
    readonly keyToMatch?: string;
    /**
    * Values to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match CcLicenseAssetRuleSet#value_to_match}
    */
    readonly valueToMatch?: string[];
}
export class RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._constraint !== undefined) {
            hasAnyValues = true;
            internalValueResult.constraint = this._constraint;
        }
        if (this._keyToMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyToMatch = this._keyToMatch;
        }
        if (this._valueToMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueToMatch = this._valueToMatch;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._constraint = undefined;
            this._keyToMatch = undefined;
            this._valueToMatch = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._constraint = value.constraint;
            this._keyToMatch = value.keyToMatch;
            this._valueToMatch = value.valueToMatch;
        }
    }

    // constraint - computed: true, optional: true, required: false
    private _constraint?: string; 
    public get constraint() {
        return this.getStringAttribute('constraint');
    }
    public set constraint(value: string) {
        this._constraint = value;
    }
    public resetConstraint() {
        this._constraint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constraintInput() {
        return this._constraint;
    }

    // key_to_match - computed: true, optional: true, required: false
    private _keyToMatch?: string; 
    public get keyToMatch() {
        return this.getStringAttribute('key_to_match');
    }
    public set keyToMatch(value: string) {
        this._keyToMatch = value;
    }
    public resetKeyToMatch() {
        this._keyToMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyToMatchInput() {
        return this._keyToMatch;
    }

    // value_to_match - computed: true, optional: true, required: false
    private _valueToMatch?: string[]; 
    public get valueToMatch() {
        return this.getListAttribute('value_to_match');
    }
    public set valueToMatch(value: string[]) {
        this._valueToMatch = value;
    }
    public resetValueToMatch() {
        this._valueToMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueToMatchInput() {
        return this._valueToMatch;
    }
}

export class RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsPropertyList extends cdktn.ComplexList {
    public internalValue? : RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsProperty[] | cdktn.IResolvable

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
    public get(index: number): RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsPropertyOutputReference {
        return new RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements CcLicenseAssetRuleSet#matching_rule_statements}
    */
    readonly matchingRuleStatements?: RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsProperty[] | cdktn.IResolvable;
}
export class RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._matchingRuleStatements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchingRuleStatements = this._matchingRuleStatements?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._matchingRuleStatements.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._matchingRuleStatements.internalValue = value.matchingRuleStatements;
        }
    }

    // matching_rule_statements - computed: true, optional: true, required: false
    private _matchingRuleStatements = new RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsPropertyList(this, "matching_rule_statements", false);
    public get matchingRuleStatements() {
        return this._matchingRuleStatements;
    }
    public putMatchingRuleStatements(value: RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsProperty[] | cdktn.IResolvable) {
        this._matchingRuleStatements.internalValue = value;
    }
    public resetMatchingRuleStatements() {
        this._matchingRuleStatements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchingRuleStatementsInput() {
        return this._matchingRuleStatements.internalValue;
    }
}
export interface LicenseConfigurationRuleStatementProperty {
    /**
    * AND rule statement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#and_rule_statement CcLicenseAssetRuleSet#and_rule_statement}
    */
    readonly andRuleStatement?: RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementProperty;
    /**
    * Matching rule statement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statement CcLicenseAssetRuleSet#matching_rule_statement}
    */
    readonly matchingRuleStatement?: RulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementProperty;
    /**
    * OR rule statement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#or_rule_statement CcLicenseAssetRuleSet#or_rule_statement}
    */
    readonly orRuleStatement?: RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementProperty;
}
export class LicenseConfigurationRuleStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LicenseConfigurationRuleStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._andRuleStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.andRuleStatement = this._andRuleStatement?.internalValue;
        }
        if (this._matchingRuleStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchingRuleStatement = this._matchingRuleStatement?.internalValue;
        }
        if (this._orRuleStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.orRuleStatement = this._orRuleStatement?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LicenseConfigurationRuleStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._andRuleStatement.internalValue = undefined;
            this._matchingRuleStatement.internalValue = undefined;
            this._orRuleStatement.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._andRuleStatement.internalValue = value.andRuleStatement;
            this._matchingRuleStatement.internalValue = value.matchingRuleStatement;
            this._orRuleStatement.internalValue = value.orRuleStatement;
        }
    }

    // and_rule_statement - computed: true, optional: true, required: false
    private _andRuleStatement = new RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementPropertyOutputReference(this, "and_rule_statement");
    public get andRuleStatement() {
        return this._andRuleStatement;
    }
    public putAndRuleStatement(value: RulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementProperty) {
        this._andRuleStatement.internalValue = value;
    }
    public resetAndRuleStatement() {
        this._andRuleStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get andRuleStatementInput() {
        return this._andRuleStatement.internalValue;
    }

    // matching_rule_statement - computed: true, optional: true, required: false
    private _matchingRuleStatement = new RulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementPropertyOutputReference(this, "matching_rule_statement");
    public get matchingRuleStatement() {
        return this._matchingRuleStatement;
    }
    public putMatchingRuleStatement(value: RulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementProperty) {
        this._matchingRuleStatement.internalValue = value;
    }
    public resetMatchingRuleStatement() {
        this._matchingRuleStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchingRuleStatementInput() {
        return this._matchingRuleStatement.internalValue;
    }

    // or_rule_statement - computed: true, optional: true, required: false
    private _orRuleStatement = new RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementPropertyOutputReference(this, "or_rule_statement");
    public get orRuleStatement() {
        return this._orRuleStatement;
    }
    public putOrRuleStatement(value: RulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementProperty) {
        this._orRuleStatement.internalValue = value;
    }
    public resetOrRuleStatement() {
        this._orRuleStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orRuleStatementInput() {
        return this._orRuleStatement.internalValue;
    }
}
export interface RulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsProperty {
    /**
    * Constraint (e.g. Equals, Not_Equals).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#constraint CcLicenseAssetRuleSet#constraint}
    */
    readonly constraint?: string;
    /**
    * Key to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match CcLicenseAssetRuleSet#key_to_match}
    */
    readonly keyToMatch?: string;
    /**
    * Values to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match CcLicenseAssetRuleSet#value_to_match}
    */
    readonly valueToMatch?: string[];
}
export class RulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._constraint !== undefined) {
            hasAnyValues = true;
            internalValueResult.constraint = this._constraint;
        }
        if (this._keyToMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyToMatch = this._keyToMatch;
        }
        if (this._valueToMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueToMatch = this._valueToMatch;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._constraint = undefined;
            this._keyToMatch = undefined;
            this._valueToMatch = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._constraint = value.constraint;
            this._keyToMatch = value.keyToMatch;
            this._valueToMatch = value.valueToMatch;
        }
    }

    // constraint - computed: true, optional: true, required: false
    private _constraint?: string; 
    public get constraint() {
        return this.getStringAttribute('constraint');
    }
    public set constraint(value: string) {
        this._constraint = value;
    }
    public resetConstraint() {
        this._constraint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constraintInput() {
        return this._constraint;
    }

    // key_to_match - computed: true, optional: true, required: false
    private _keyToMatch?: string; 
    public get keyToMatch() {
        return this.getStringAttribute('key_to_match');
    }
    public set keyToMatch(value: string) {
        this._keyToMatch = value;
    }
    public resetKeyToMatch() {
        this._keyToMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyToMatchInput() {
        return this._keyToMatch;
    }

    // value_to_match - computed: true, optional: true, required: false
    private _valueToMatch?: string[]; 
    public get valueToMatch() {
        return this.getListAttribute('value_to_match');
    }
    public set valueToMatch(value: string[]) {
        this._valueToMatch = value;
    }
    public resetValueToMatch() {
        this._valueToMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueToMatchInput() {
        return this._valueToMatch;
    }
}

export class RulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsPropertyList extends cdktn.ComplexList {
    public internalValue? : RulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsProperty[] | cdktn.IResolvable

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
    public get(index: number): RulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsPropertyOutputReference {
        return new RulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RulesRuleStatementLicenseRuleStatementAndRuleStatementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements CcLicenseAssetRuleSet#matching_rule_statements}
    */
    readonly matchingRuleStatements?: RulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsProperty[] | cdktn.IResolvable;
}
export class RulesRuleStatementLicenseRuleStatementAndRuleStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesRuleStatementLicenseRuleStatementAndRuleStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._matchingRuleStatements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchingRuleStatements = this._matchingRuleStatements?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesRuleStatementLicenseRuleStatementAndRuleStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._matchingRuleStatements.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._matchingRuleStatements.internalValue = value.matchingRuleStatements;
        }
    }

    // matching_rule_statements - computed: true, optional: true, required: false
    private _matchingRuleStatements = new RulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsPropertyList(this, "matching_rule_statements", false);
    public get matchingRuleStatements() {
        return this._matchingRuleStatements;
    }
    public putMatchingRuleStatements(value: RulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsProperty[] | cdktn.IResolvable) {
        this._matchingRuleStatements.internalValue = value;
    }
    public resetMatchingRuleStatements() {
        this._matchingRuleStatements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchingRuleStatementsInput() {
        return this._matchingRuleStatements.internalValue;
    }
}
export interface RulesRuleStatementLicenseRuleStatementMatchingRuleStatementProperty {
    /**
    * Constraint (e.g. Equals, Not_Equals).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#constraint CcLicenseAssetRuleSet#constraint}
    */
    readonly constraint?: string;
    /**
    * Key to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match CcLicenseAssetRuleSet#key_to_match}
    */
    readonly keyToMatch?: string;
    /**
    * Values to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match CcLicenseAssetRuleSet#value_to_match}
    */
    readonly valueToMatch?: string[];
}
export class RulesRuleStatementLicenseRuleStatementMatchingRuleStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesRuleStatementLicenseRuleStatementMatchingRuleStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._constraint !== undefined) {
            hasAnyValues = true;
            internalValueResult.constraint = this._constraint;
        }
        if (this._keyToMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyToMatch = this._keyToMatch;
        }
        if (this._valueToMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueToMatch = this._valueToMatch;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesRuleStatementLicenseRuleStatementMatchingRuleStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._constraint = undefined;
            this._keyToMatch = undefined;
            this._valueToMatch = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._constraint = value.constraint;
            this._keyToMatch = value.keyToMatch;
            this._valueToMatch = value.valueToMatch;
        }
    }

    // constraint - computed: true, optional: true, required: false
    private _constraint?: string; 
    public get constraint() {
        return this.getStringAttribute('constraint');
    }
    public set constraint(value: string) {
        this._constraint = value;
    }
    public resetConstraint() {
        this._constraint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constraintInput() {
        return this._constraint;
    }

    // key_to_match - computed: true, optional: true, required: false
    private _keyToMatch?: string; 
    public get keyToMatch() {
        return this.getStringAttribute('key_to_match');
    }
    public set keyToMatch(value: string) {
        this._keyToMatch = value;
    }
    public resetKeyToMatch() {
        this._keyToMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyToMatchInput() {
        return this._keyToMatch;
    }

    // value_to_match - computed: true, optional: true, required: false
    private _valueToMatch?: string[]; 
    public get valueToMatch() {
        return this.getListAttribute('value_to_match');
    }
    public set valueToMatch(value: string[]) {
        this._valueToMatch = value;
    }
    public resetValueToMatch() {
        this._valueToMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueToMatchInput() {
        return this._valueToMatch;
    }
}
export interface RulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsProperty {
    /**
    * Constraint (e.g. Equals, Not_Equals).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#constraint CcLicenseAssetRuleSet#constraint}
    */
    readonly constraint?: string;
    /**
    * Key to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match CcLicenseAssetRuleSet#key_to_match}
    */
    readonly keyToMatch?: string;
    /**
    * Values to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match CcLicenseAssetRuleSet#value_to_match}
    */
    readonly valueToMatch?: string[];
}
export class RulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._constraint !== undefined) {
            hasAnyValues = true;
            internalValueResult.constraint = this._constraint;
        }
        if (this._keyToMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyToMatch = this._keyToMatch;
        }
        if (this._valueToMatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueToMatch = this._valueToMatch;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._constraint = undefined;
            this._keyToMatch = undefined;
            this._valueToMatch = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._constraint = value.constraint;
            this._keyToMatch = value.keyToMatch;
            this._valueToMatch = value.valueToMatch;
        }
    }

    // constraint - computed: true, optional: true, required: false
    private _constraint?: string; 
    public get constraint() {
        return this.getStringAttribute('constraint');
    }
    public set constraint(value: string) {
        this._constraint = value;
    }
    public resetConstraint() {
        this._constraint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constraintInput() {
        return this._constraint;
    }

    // key_to_match - computed: true, optional: true, required: false
    private _keyToMatch?: string; 
    public get keyToMatch() {
        return this.getStringAttribute('key_to_match');
    }
    public set keyToMatch(value: string) {
        this._keyToMatch = value;
    }
    public resetKeyToMatch() {
        this._keyToMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyToMatchInput() {
        return this._keyToMatch;
    }

    // value_to_match - computed: true, optional: true, required: false
    private _valueToMatch?: string[]; 
    public get valueToMatch() {
        return this.getListAttribute('value_to_match');
    }
    public set valueToMatch(value: string[]) {
        this._valueToMatch = value;
    }
    public resetValueToMatch() {
        this._valueToMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueToMatchInput() {
        return this._valueToMatch;
    }
}

export class RulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsPropertyList extends cdktn.ComplexList {
    public internalValue? : RulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsProperty[] | cdktn.IResolvable

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
    public get(index: number): RulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsPropertyOutputReference {
        return new RulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RulesRuleStatementLicenseRuleStatementOrRuleStatementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements CcLicenseAssetRuleSet#matching_rule_statements}
    */
    readonly matchingRuleStatements?: RulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsProperty[] | cdktn.IResolvable;
}
export class RulesRuleStatementLicenseRuleStatementOrRuleStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesRuleStatementLicenseRuleStatementOrRuleStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._matchingRuleStatements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchingRuleStatements = this._matchingRuleStatements?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesRuleStatementLicenseRuleStatementOrRuleStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._matchingRuleStatements.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._matchingRuleStatements.internalValue = value.matchingRuleStatements;
        }
    }

    // matching_rule_statements - computed: true, optional: true, required: false
    private _matchingRuleStatements = new RulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsPropertyList(this, "matching_rule_statements", false);
    public get matchingRuleStatements() {
        return this._matchingRuleStatements;
    }
    public putMatchingRuleStatements(value: RulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsProperty[] | cdktn.IResolvable) {
        this._matchingRuleStatements.internalValue = value;
    }
    public resetMatchingRuleStatements() {
        this._matchingRuleStatements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchingRuleStatementsInput() {
        return this._matchingRuleStatements.internalValue;
    }
}
export interface LicenseRuleStatementProperty {
    /**
    * AND rule statement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#and_rule_statement CcLicenseAssetRuleSet#and_rule_statement}
    */
    readonly andRuleStatement?: RulesRuleStatementLicenseRuleStatementAndRuleStatementProperty;
    /**
    * Matching rule statement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statement CcLicenseAssetRuleSet#matching_rule_statement}
    */
    readonly matchingRuleStatement?: RulesRuleStatementLicenseRuleStatementMatchingRuleStatementProperty;
    /**
    * OR rule statement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#or_rule_statement CcLicenseAssetRuleSet#or_rule_statement}
    */
    readonly orRuleStatement?: RulesRuleStatementLicenseRuleStatementOrRuleStatementProperty;
}
export class LicenseRuleStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LicenseRuleStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._andRuleStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.andRuleStatement = this._andRuleStatement?.internalValue;
        }
        if (this._matchingRuleStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchingRuleStatement = this._matchingRuleStatement?.internalValue;
        }
        if (this._orRuleStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.orRuleStatement = this._orRuleStatement?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LicenseRuleStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._andRuleStatement.internalValue = undefined;
            this._matchingRuleStatement.internalValue = undefined;
            this._orRuleStatement.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._andRuleStatement.internalValue = value.andRuleStatement;
            this._matchingRuleStatement.internalValue = value.matchingRuleStatement;
            this._orRuleStatement.internalValue = value.orRuleStatement;
        }
    }

    // and_rule_statement - computed: true, optional: true, required: false
    private _andRuleStatement = new RulesRuleStatementLicenseRuleStatementAndRuleStatementPropertyOutputReference(this, "and_rule_statement");
    public get andRuleStatement() {
        return this._andRuleStatement;
    }
    public putAndRuleStatement(value: RulesRuleStatementLicenseRuleStatementAndRuleStatementProperty) {
        this._andRuleStatement.internalValue = value;
    }
    public resetAndRuleStatement() {
        this._andRuleStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get andRuleStatementInput() {
        return this._andRuleStatement.internalValue;
    }

    // matching_rule_statement - computed: true, optional: true, required: false
    private _matchingRuleStatement = new RulesRuleStatementLicenseRuleStatementMatchingRuleStatementPropertyOutputReference(this, "matching_rule_statement");
    public get matchingRuleStatement() {
        return this._matchingRuleStatement;
    }
    public putMatchingRuleStatement(value: RulesRuleStatementLicenseRuleStatementMatchingRuleStatementProperty) {
        this._matchingRuleStatement.internalValue = value;
    }
    public resetMatchingRuleStatement() {
        this._matchingRuleStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchingRuleStatementInput() {
        return this._matchingRuleStatement.internalValue;
    }

    // or_rule_statement - computed: true, optional: true, required: false
    private _orRuleStatement = new RulesRuleStatementLicenseRuleStatementOrRuleStatementPropertyOutputReference(this, "or_rule_statement");
    public get orRuleStatement() {
        return this._orRuleStatement;
    }
    public putOrRuleStatement(value: RulesRuleStatementLicenseRuleStatementOrRuleStatementProperty) {
        this._orRuleStatement.internalValue = value;
    }
    public resetOrRuleStatement() {
        this._orRuleStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orRuleStatementInput() {
        return this._orRuleStatement.internalValue;
    }
}
export interface RuleStatementProperty {
    /**
    * Instance rule statement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#instance_rule_statement CcLicenseAssetRuleSet#instance_rule_statement}
    */
    readonly instanceRuleStatement?: InstanceRuleStatementProperty;
    /**
    * License configuration rule statement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#license_configuration_rule_statement CcLicenseAssetRuleSet#license_configuration_rule_statement}
    */
    readonly licenseConfigurationRuleStatement?: LicenseConfigurationRuleStatementProperty;
    /**
    * License rule statement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#license_rule_statement CcLicenseAssetRuleSet#license_rule_statement}
    */
    readonly licenseRuleStatement?: LicenseRuleStatementProperty;
}
export class RuleStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceRuleStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceRuleStatement = this._instanceRuleStatement?.internalValue;
        }
        if (this._licenseConfigurationRuleStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.licenseConfigurationRuleStatement = this._licenseConfigurationRuleStatement?.internalValue;
        }
        if (this._licenseRuleStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.licenseRuleStatement = this._licenseRuleStatement?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceRuleStatement.internalValue = undefined;
            this._licenseConfigurationRuleStatement.internalValue = undefined;
            this._licenseRuleStatement.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceRuleStatement.internalValue = value.instanceRuleStatement;
            this._licenseConfigurationRuleStatement.internalValue = value.licenseConfigurationRuleStatement;
            this._licenseRuleStatement.internalValue = value.licenseRuleStatement;
        }
    }

    // instance_rule_statement - computed: true, optional: true, required: false
    private _instanceRuleStatement = new InstanceRuleStatementPropertyOutputReference(this, "instance_rule_statement");
    public get instanceRuleStatement() {
        return this._instanceRuleStatement;
    }
    public putInstanceRuleStatement(value: InstanceRuleStatementProperty) {
        this._instanceRuleStatement.internalValue = value;
    }
    public resetInstanceRuleStatement() {
        this._instanceRuleStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceRuleStatementInput() {
        return this._instanceRuleStatement.internalValue;
    }

    // license_configuration_rule_statement - computed: true, optional: true, required: false
    private _licenseConfigurationRuleStatement = new LicenseConfigurationRuleStatementPropertyOutputReference(this, "license_configuration_rule_statement");
    public get licenseConfigurationRuleStatement() {
        return this._licenseConfigurationRuleStatement;
    }
    public putLicenseConfigurationRuleStatement(value: LicenseConfigurationRuleStatementProperty) {
        this._licenseConfigurationRuleStatement.internalValue = value;
    }
    public resetLicenseConfigurationRuleStatement() {
        this._licenseConfigurationRuleStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseConfigurationRuleStatementInput() {
        return this._licenseConfigurationRuleStatement.internalValue;
    }

    // license_rule_statement - computed: true, optional: true, required: false
    private _licenseRuleStatement = new LicenseRuleStatementPropertyOutputReference(this, "license_rule_statement");
    public get licenseRuleStatement() {
        return this._licenseRuleStatement;
    }
    public putLicenseRuleStatement(value: LicenseRuleStatementProperty) {
        this._licenseRuleStatement.internalValue = value;
    }
    public resetLicenseRuleStatement() {
        this._licenseRuleStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseRuleStatementInput() {
        return this._licenseRuleStatement.internalValue;
    }
}
export interface LicenseAssetRuleProperty {
    /**
    * Rule statement. Specify exactly one of InstanceRuleStatement, LicenseRuleStatement, or LicenseConfigurationRuleStatement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#rule_statement CcLicenseAssetRuleSet#rule_statement}
    */
    readonly ruleStatement: RuleStatementProperty;
}
export class LicenseAssetRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LicenseAssetRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ruleStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleStatement = this._ruleStatement?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LicenseAssetRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ruleStatement.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ruleStatement.internalValue = value.ruleStatement;
        }
    }

    // rule_statement - computed: false, optional: false, required: true
    private _ruleStatement = new RuleStatementPropertyOutputReference(this, "rule_statement");
    public get ruleStatement() {
        return this._ruleStatement;
    }
    public putRuleStatement(value: RuleStatementProperty) {
        this._ruleStatement.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleStatementInput() {
        return this._ruleStatement.internalValue;
    }
}

export class LicenseAssetRulePropertyList extends cdktn.ComplexList {
    public internalValue? : LicenseAssetRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): LicenseAssetRulePropertyOutputReference {
        return new LicenseAssetRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key CcLicenseAssetRuleSet#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value CcLicenseAssetRuleSet#value}
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
