// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * The rule configuration as a JSON string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_rule#configuration CcRule#configuration}
    */
    readonly configuration?: string;
    /**
    * The type of firewall for this rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_rule#firewall_type CcRule#firewall_type}
    */
    readonly firewallType?: string;
    /**
    * A description of the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_rule#rule_description CcRule#rule_description}
    */
    readonly ruleDescription?: string;
    /**
    * The name of the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_rule#rule_name CcRule#rule_name}
    */
    readonly ruleName: string;
    /**
    * The type of rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_rule#rule_type CcRule#rule_type}
    */
    readonly ruleType?: string;
    /**
    * The tags associated with the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_rule#tags CcRule#tags}
    */
    readonly tags?: CcRule.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_rule awscc_networksecuritymanager_rule}
*/
export class CcRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_networksecuritymanager_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRule to import
    * @param importFromId The id of the existing CcRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networksecuritymanager_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_rule awscc_networksecuritymanager_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_networksecuritymanager_rule',
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
        this._configuration = config.configuration;
        this._firewallType = config.firewallType;
        this._ruleDescription = config.ruleDescription;
        this._ruleName = config.ruleName;
        this._ruleType = config.ruleType;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // configuration - computed: true, optional: true, required: false
    private _configuration?: string; 
    public get configuration() {
        return this.getStringAttribute('configuration');
    }
    public set configuration(value: string) {
        this._configuration = value;
    }
    public resetConfiguration() {
        this._configuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration;
    }

    // firewall_type - computed: true, optional: true, required: false
    private _firewallType?: string; 
    public get firewallType() {
        return this.getStringAttribute('firewall_type');
    }
    public set firewallType(value: string) {
        this._firewallType = value;
    }
    public resetFirewallType() {
        this._firewallType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallTypeInput() {
        return this._firewallType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // rule_arn - computed: true, optional: false, required: false
    public get ruleArn() {
        return this.getStringAttribute('rule_arn');
    }

    // rule_description - computed: true, optional: true, required: false
    private _ruleDescription?: string; 
    public get ruleDescription() {
        return this.getStringAttribute('rule_description');
    }
    public set ruleDescription(value: string) {
        this._ruleDescription = value;
    }
    public resetRuleDescription() {
        this._ruleDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleDescriptionInput() {
        return this._ruleDescription;
    }

    // rule_id - computed: true, optional: false, required: false
    public get ruleId() {
        return this.getStringAttribute('rule_id');
    }

    // rule_name - computed: false, optional: false, required: true
    private _ruleName?: string; 
    public get ruleName() {
        return this.getStringAttribute('rule_name');
    }
    public set ruleName(value: string) {
        this._ruleName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleNameInput() {
        return this._ruleName;
    }

    // rule_type - computed: true, optional: true, required: false
    private _ruleType?: string; 
    public get ruleType() {
        return this.getStringAttribute('rule_type');
    }
    public set ruleType(value: string) {
        this._ruleType = value;
    }
    public resetRuleType() {
        this._ruleType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleTypeInput() {
        return this._ruleType;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRule.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRule.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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
            configuration: cdktn.stringToTerraform(this._configuration),
            firewall_type: cdktn.stringToTerraform(this._firewallType),
            rule_description: cdktn.stringToTerraform(this._ruleDescription),
            rule_name: cdktn.stringToTerraform(this._ruleName),
            rule_type: cdktn.stringToTerraform(this._ruleType),
            tags: cdktn.listMapper(ccRuleTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            configuration: {
                value: cdktn.stringToHclTerraform(this._configuration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            firewall_type: {
                value: cdktn.stringToHclTerraform(this._firewallType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule_description: {
                value: cdktn.stringToHclTerraform(this._ruleDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule_name: {
                value: cdktn.stringToHclTerraform(this._ruleName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule_type: {
                value: cdktn.stringToHclTerraform(this._ruleType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRuleTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcRule.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRuleTagsPropertyToTerraform(struct?: CcRule.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRuleTagsPropertyToHclTerraform(struct?: CcRule.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcRule {
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_rule#key CcRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_rule#value CcRule#value}
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
