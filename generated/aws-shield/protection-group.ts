// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_protection_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcProtectionGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * Defines how AWS Shield combines resource data for the group in order to detect, mitigate, and report events.
    * * Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.
    * * Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.
    * * Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include Amazon CloudFront and origin resources for CloudFront distributions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_protection_group#aggregation CcProtectionGroup#aggregation}
    */
    readonly aggregation: string;
    /**
    * The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set `Pattern` to `ARBITRARY` and you must not set it for any other `Pattern` setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_protection_group#members CcProtectionGroup#members}
    */
    readonly members?: string[];
    /**
    * The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource Amazon Resource Names (ARNs), or include all resources of a specified resource type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_protection_group#pattern CcProtectionGroup#pattern}
    */
    readonly pattern: string;
    /**
    * The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_protection_group#protection_group_id CcProtectionGroup#protection_group_id}
    */
    readonly protectionGroupId: string;
    /**
    * The resource type to include in the protection group. All protected resources of this type are included in the protection group. Newly protected resources of this type are automatically added to the group. You must set this when you set `Pattern` to `BY_RESOURCE_TYPE` and you must not set it for any other `Pattern` setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_protection_group#resource_type CcProtectionGroup#resource_type}
    */
    readonly resourceType?: string;
    /**
    * One or more tag key-value pairs for the Protection object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_protection_group#tags CcProtectionGroup#tags}
    */
    readonly tags?: CcProtectionGroup.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_protection_group awscc_shield_protection_group}
*/
export class CcProtectionGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_shield_protection_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcProtectionGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcProtectionGroup to import
    * @param importFromId The id of the existing CcProtectionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_protection_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcProtectionGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_shield_protection_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_protection_group awscc_shield_protection_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcProtectionGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcProtectionGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_shield_protection_group',
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
        this._aggregation = config.aggregation;
        this._members = config.members;
        this._pattern = config.pattern;
        this._protectionGroupId = config.protectionGroupId;
        this._resourceType = config.resourceType;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // aggregation - computed: false, optional: false, required: true
    private _aggregation?: string; 
    public get aggregation() {
        return this.getStringAttribute('aggregation');
    }
    public set aggregation(value: string) {
        this._aggregation = value;
    }
    // Temporarily expose input value. Use with caution.
    public get aggregationInput() {
        return this._aggregation;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // members - computed: true, optional: true, required: false
    private _members?: string[]; 
    public get members() {
        return this.getListAttribute('members');
    }
    public set members(value: string[]) {
        this._members = value;
    }
    public resetMembers() {
        this._members = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get membersInput() {
        return this._members;
    }

    // pattern - computed: false, optional: false, required: true
    private _pattern?: string; 
    public get pattern() {
        return this.getStringAttribute('pattern');
    }
    public set pattern(value: string) {
        this._pattern = value;
    }
    // Temporarily expose input value. Use with caution.
    public get patternInput() {
        return this._pattern;
    }

    // protection_group_arn - computed: true, optional: false, required: false
    public get protectionGroupArn() {
        return this.getStringAttribute('protection_group_arn');
    }

    // protection_group_id - computed: false, optional: false, required: true
    private _protectionGroupId?: string; 
    public get protectionGroupId() {
        return this.getStringAttribute('protection_group_id');
    }
    public set protectionGroupId(value: string) {
        this._protectionGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protectionGroupIdInput() {
        return this._protectionGroupId;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcProtectionGroup.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcProtectionGroup.TagProperty[] | cdktn.IResolvable) {
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
            aggregation: cdktn.stringToTerraform(this._aggregation),
            members: cdktn.listMapper(cdktn.stringToTerraform, false)(this._members),
            pattern: cdktn.stringToTerraform(this._pattern),
            protection_group_id: cdktn.stringToTerraform(this._protectionGroupId),
            resource_type: cdktn.stringToTerraform(this._resourceType),
            tags: cdktn.listMapper(ccProtectionGroupTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            aggregation: {
                value: cdktn.stringToHclTerraform(this._aggregation),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            members: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._members),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            pattern: {
                value: cdktn.stringToHclTerraform(this._pattern),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            protection_group_id: {
                value: cdktn.stringToHclTerraform(this._protectionGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_type: {
                value: cdktn.stringToHclTerraform(this._resourceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccProtectionGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcProtectionGroup.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccProtectionGroupTagPropertyToTerraform(struct?: CcProtectionGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccProtectionGroupTagPropertyToHclTerraform(struct?: CcProtectionGroup.TagProperty | cdktn.IResolvable): any {
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


export namespace CcProtectionGroup {
export interface TagProperty {
    /**
    * Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_protection_group#key CcProtectionGroup#key}
    */
    readonly key?: string;
    /**
    * Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_protection_group#value CcProtectionGroup#value}
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
