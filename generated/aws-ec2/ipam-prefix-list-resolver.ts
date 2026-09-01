// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIPAMPrefixListResolverProps extends cdktn.TerraformMetaArguments {
    /**
    * The address family of the address space in this Prefix List Resolver. Either IPv4 or IPv6.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#address_family CcIPAMPrefixListResolver#address_family}
    */
    readonly addressFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#description CcIPAMPrefixListResolver#description}
    */
    readonly description?: string;
    /**
    * The Id of the IPAM this Prefix List Resolver is a part of.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#ipam_id CcIPAMPrefixListResolver#ipam_id}
    */
    readonly ipamId?: string;
    /**
    * Rules define the business logic for selecting CIDRs from IPAM.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#rules CcIPAMPrefixListResolver#rules}
    */
    readonly rules?: CcIPAMPrefixListResolver.IpamPrefixListResolverRuleProperty[] | cdktn.IResolvable;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#tags CcIPAMPrefixListResolver#tags}
    */
    readonly tags?: CcIPAMPrefixListResolver.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver awscc_ec2_ipam_prefix_list_resolver}
*/
export class CcIPAMPrefixListResolver extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_ipam_prefix_list_resolver";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIPAMPrefixListResolver resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIPAMPrefixListResolver to import
    * @param importFromId The id of the existing CcIPAMPrefixListResolver that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIPAMPrefixListResolver to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_ipam_prefix_list_resolver", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver awscc_ec2_ipam_prefix_list_resolver} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIPAMPrefixListResolverProps
    */
    public constructor(scope: Construct, id: string, config: CcIPAMPrefixListResolverProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_ipam_prefix_list_resolver',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._addressFamily = config.addressFamily;
        this._description = config.description;
        this._ipamId = config.ipamId;
        this._rules.internalValue = config.rules;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // address_family - computed: false, optional: false, required: true
    private _addressFamily?: string; 
    public get addressFamily() {
        return this.getStringAttribute('address_family');
    }
    public set addressFamily(value: string) {
        this._addressFamily = value;
    }
    // Temporarily expose input value. Use with caution.
    public get addressFamilyInput() {
        return this._addressFamily;
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

    // ipam_arn - computed: true, optional: false, required: false
    public get ipamArn() {
        return this.getStringAttribute('ipam_arn');
    }

    // ipam_id - computed: true, optional: true, required: false
    private _ipamId?: string; 
    public get ipamId() {
        return this.getStringAttribute('ipam_id');
    }
    public set ipamId(value: string) {
        this._ipamId = value;
    }
    public resetIpamId() {
        this._ipamId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipamIdInput() {
        return this._ipamId;
    }

    // ipam_prefix_list_resolver_arn - computed: true, optional: false, required: false
    public get ipamPrefixListResolverArn() {
        return this.getStringAttribute('ipam_prefix_list_resolver_arn');
    }

    // ipam_prefix_list_resolver_id - computed: true, optional: false, required: false
    public get ipamPrefixListResolverId() {
        return this.getStringAttribute('ipam_prefix_list_resolver_id');
    }

    // rules - computed: true, optional: true, required: false
    private _rules = new CcIPAMPrefixListResolver.IpamPrefixListResolverRulePropertyList(this, "rules", false);
    public get rules() {
        return this._rules;
    }
    public putRules(value: CcIPAMPrefixListResolver.IpamPrefixListResolverRuleProperty[] | cdktn.IResolvable) {
        this._rules.internalValue = value;
    }
    public resetRules() {
        this._rules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
        return this._rules.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIPAMPrefixListResolver.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIPAMPrefixListResolver.TagsProperty[] | cdktn.IResolvable) {
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
            address_family: cdktn.stringToTerraform(this._addressFamily),
            description: cdktn.stringToTerraform(this._description),
            ipam_id: cdktn.stringToTerraform(this._ipamId),
            rules: cdktn.listMapper(ccIPAMPrefixListResolverIpamPrefixListResolverRulePropertyToTerraform, false)(this._rules.internalValue),
            tags: cdktn.listMapper(ccIPAMPrefixListResolverTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            address_family: {
                value: cdktn.stringToHclTerraform(this._addressFamily),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipam_id: {
                value: cdktn.stringToHclTerraform(this._ipamId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rules: {
                value: cdktn.listMapperHcl(ccIPAMPrefixListResolverIpamPrefixListResolverRulePropertyToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcIPAMPrefixListResolver.IpamPrefixListResolverRulePropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIPAMPrefixListResolverTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIPAMPrefixListResolver.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIPAMPrefixListResolverTagPropertyToTerraform(struct?: CcIPAMPrefixListResolver.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIPAMPrefixListResolverTagPropertyToHclTerraform(struct?: CcIPAMPrefixListResolver.TagProperty | cdktn.IResolvable): any {
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


export function ccIPAMPrefixListResolverIpamPrefixListResolverRuleConditionPropertyToTerraform(struct?: CcIPAMPrefixListResolver.IpamPrefixListResolverRuleConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
        ipam_pool_id: cdktn.stringToTerraform(struct!.ipamPoolId),
        operation: cdktn.stringToTerraform(struct!.operation),
        resource_id: cdktn.stringToTerraform(struct!.resourceId),
        resource_owner: cdktn.stringToTerraform(struct!.resourceOwner),
        resource_region: cdktn.stringToTerraform(struct!.resourceRegion),
        resource_tag: ccIPAMPrefixListResolverTagPropertyToTerraform(struct!.resourceTag),
    }
}


export function ccIPAMPrefixListResolverIpamPrefixListResolverRuleConditionPropertyToHclTerraform(struct?: CcIPAMPrefixListResolver.IpamPrefixListResolverRuleConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipam_pool_id: {
            value: cdktn.stringToHclTerraform(struct!.ipamPoolId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operation: {
            value: cdktn.stringToHclTerraform(struct!.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_id: {
            value: cdktn.stringToHclTerraform(struct!.resourceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_owner: {
            value: cdktn.stringToHclTerraform(struct!.resourceOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_region: {
            value: cdktn.stringToHclTerraform(struct!.resourceRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_tag: {
            value: ccIPAMPrefixListResolverTagPropertyToHclTerraform(struct!.resourceTag),
            isBlock: true,
            type: "struct",
            storageClassType: "TagProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIPAMPrefixListResolverIpamPrefixListResolverRulePropertyToTerraform(struct?: CcIPAMPrefixListResolver.IpamPrefixListResolverRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        conditions: cdktn.listMapper(ccIPAMPrefixListResolverIpamPrefixListResolverRuleConditionPropertyToTerraform, false)(struct!.conditions),
        ipam_scope_id: cdktn.stringToTerraform(struct!.ipamScopeId),
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
        rule_type: cdktn.stringToTerraform(struct!.ruleType),
        static_cidr: cdktn.stringToTerraform(struct!.staticCidr),
    }
}


export function ccIPAMPrefixListResolverIpamPrefixListResolverRulePropertyToHclTerraform(struct?: CcIPAMPrefixListResolver.IpamPrefixListResolverRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        conditions: {
            value: cdktn.listMapperHcl(ccIPAMPrefixListResolverIpamPrefixListResolverRuleConditionPropertyToHclTerraform, false)(struct!.conditions),
            isBlock: true,
            type: "list",
            storageClassType: "IpamPrefixListResolverRuleConditionPropertyList",
        },
        ipam_scope_id: {
            value: cdktn.stringToHclTerraform(struct!.ipamScopeId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_type: {
            value: cdktn.stringToHclTerraform(struct!.resourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rule_type: {
            value: cdktn.stringToHclTerraform(struct!.ruleType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        static_cidr: {
            value: cdktn.stringToHclTerraform(struct!.staticCidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIPAMPrefixListResolverTagsPropertyToTerraform(struct?: CcIPAMPrefixListResolver.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIPAMPrefixListResolverTagsPropertyToHclTerraform(struct?: CcIPAMPrefixListResolver.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcIPAMPrefixListResolver {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#key CcIPAMPrefixListResolver#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#value CcIPAMPrefixListResolver#value}
    */
    readonly value?: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
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
export interface IpamPrefixListResolverRuleConditionProperty {
    /**
    * Condition for the IPAM Resource CIDR rule type.  CIDR (like 10.24.34.0/23).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#cidr CcIPAMPrefixListResolver#cidr}
    */
    readonly cidr?: string;
    /**
    * Condition for the IPAM Pool CIDR rule type.  If not chosen, the resolver applies to all IPAM Pool CIDRs in the scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#ipam_pool_id CcIPAMPrefixListResolver#ipam_pool_id}
    */
    readonly ipamPoolId?: string;
    /**
    * Equals, Not equals, or Subnet Of.  The subnet-of operation only applies to cidr conditions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#operation CcIPAMPrefixListResolver#operation}
    */
    readonly operation?: string;
    /**
    * Condition for the IPAM Resource CIDR rule type.  The unique ID of a resource (like vpc-1234567890abcdef0).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#resource_id CcIPAMPrefixListResolver#resource_id}
    */
    readonly resourceId?: string;
    /**
    * Condition for the IPAM Resource CIDR rule type.  Resource owner (like 111122223333).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#resource_owner CcIPAMPrefixListResolver#resource_owner}
    */
    readonly resourceOwner?: string;
    /**
    * Condition for the IPAM Resource CIDR rule type.  Resource region (like us-east-1).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#resource_region CcIPAMPrefixListResolver#resource_region}
    */
    readonly resourceRegion?: string;
    /**
    * Condition for the IPAM Resource CIDR rule type.  Resource Tag (like dev-vpc-1).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#resource_tag CcIPAMPrefixListResolver#resource_tag}
    */
    readonly resourceTag?: TagProperty;
}
export class IpamPrefixListResolverRuleConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IpamPrefixListResolverRuleConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        if (this._ipamPoolId !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipamPoolId = this._ipamPoolId;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        if (this._resourceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceId = this._resourceId;
        }
        if (this._resourceOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceOwner = this._resourceOwner;
        }
        if (this._resourceRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceRegion = this._resourceRegion;
        }
        if (this._resourceTag?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTag = this._resourceTag?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IpamPrefixListResolverRuleConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
            this._ipamPoolId = undefined;
            this._operation = undefined;
            this._resourceId = undefined;
            this._resourceOwner = undefined;
            this._resourceRegion = undefined;
            this._resourceTag.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
            this._ipamPoolId = value.ipamPoolId;
            this._operation = value.operation;
            this._resourceId = value.resourceId;
            this._resourceOwner = value.resourceOwner;
            this._resourceRegion = value.resourceRegion;
            this._resourceTag.internalValue = value.resourceTag;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }

    // ipam_pool_id - computed: true, optional: true, required: false
    private _ipamPoolId?: string; 
    public get ipamPoolId() {
        return this.getStringAttribute('ipam_pool_id');
    }
    public set ipamPoolId(value: string) {
        this._ipamPoolId = value;
    }
    public resetIpamPoolId() {
        this._ipamPoolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipamPoolIdInput() {
        return this._ipamPoolId;
    }

    // operation - computed: true, optional: true, required: false
    private _operation?: string; 
    public get operation() {
        return this.getStringAttribute('operation');
    }
    public set operation(value: string) {
        this._operation = value;
    }
    public resetOperation() {
        this._operation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operationInput() {
        return this._operation;
    }

    // resource_id - computed: true, optional: true, required: false
    private _resourceId?: string; 
    public get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
        this._resourceId = value;
    }
    public resetResourceId() {
        this._resourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
        return this._resourceId;
    }

    // resource_owner - computed: true, optional: true, required: false
    private _resourceOwner?: string; 
    public get resourceOwner() {
        return this.getStringAttribute('resource_owner');
    }
    public set resourceOwner(value: string) {
        this._resourceOwner = value;
    }
    public resetResourceOwner() {
        this._resourceOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceOwnerInput() {
        return this._resourceOwner;
    }

    // resource_region - computed: true, optional: true, required: false
    private _resourceRegion?: string; 
    public get resourceRegion() {
        return this.getStringAttribute('resource_region');
    }
    public set resourceRegion(value: string) {
        this._resourceRegion = value;
    }
    public resetResourceRegion() {
        this._resourceRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceRegionInput() {
        return this._resourceRegion;
    }

    // resource_tag - computed: true, optional: true, required: false
    private _resourceTag = new TagPropertyOutputReference(this, "resource_tag");
    public get resourceTag() {
        return this._resourceTag;
    }
    public putResourceTag(value: TagProperty) {
        this._resourceTag.internalValue = value;
    }
    public resetResourceTag() {
        this._resourceTag.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagInput() {
        return this._resourceTag.internalValue;
    }
}

export class IpamPrefixListResolverRuleConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : IpamPrefixListResolverRuleConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): IpamPrefixListResolverRuleConditionPropertyOutputReference {
        return new IpamPrefixListResolverRuleConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IpamPrefixListResolverRuleProperty {
    /**
    * Two of the rule types allow you to add conditions to the rules. (1) For IPAM Pool CIDR rules, you can specify an ipamPoolId; if not specified, the rule will apply to all IPAM Pool CIDRs in the scope.  (2) For IPAM Resource CIDR rules, you can specify resourceId, resourceOwner, resourceRegion, cidr, or resourceTag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#conditions CcIPAMPrefixListResolver#conditions}
    */
    readonly conditions?: IpamPrefixListResolverRuleConditionProperty[] | cdktn.IResolvable;
    /**
    * This rule will only match resources that are in this IPAM Scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#ipam_scope_id CcIPAMPrefixListResolver#ipam_scope_id}
    */
    readonly ipamScopeId?: string;
    /**
    * The resourceType property only applies to ipam-resource-cidr rules; this property specifies what type of resources this rule will apply to, such as VPCs or Subnets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#resource_type CcIPAMPrefixListResolver#resource_type}
    */
    readonly resourceType?: string;
    /**
    * There are three rule types: (1) Static CIDR: A fixed list of CIDRs that don't change (like a manual list replicated across Regions). (2) IPAM pool CIDR: CIDRs from specific IPAM pools (like all CIDRs from your IPAM production pool).  (3) IPAM resource CIDR: CIDRs for AWS resources like VPCs, subnets, and EIPs within a specific IPAM scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#rule_type CcIPAMPrefixListResolver#rule_type}
    */
    readonly ruleType?: string;
    /**
    * A fixed CIDR that doesn't change
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#static_cidr CcIPAMPrefixListResolver#static_cidr}
    */
    readonly staticCidr?: string;
}
export class IpamPrefixListResolverRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IpamPrefixListResolverRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._conditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditions = this._conditions?.internalValue;
        }
        if (this._ipamScopeId !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipamScopeId = this._ipamScopeId;
        }
        if (this._resourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType;
        }
        if (this._ruleType !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleType = this._ruleType;
        }
        if (this._staticCidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.staticCidr = this._staticCidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IpamPrefixListResolverRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._conditions.internalValue = undefined;
            this._ipamScopeId = undefined;
            this._resourceType = undefined;
            this._ruleType = undefined;
            this._staticCidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._conditions.internalValue = value.conditions;
            this._ipamScopeId = value.ipamScopeId;
            this._resourceType = value.resourceType;
            this._ruleType = value.ruleType;
            this._staticCidr = value.staticCidr;
        }
    }

    // conditions - computed: true, optional: true, required: false
    private _conditions = new IpamPrefixListResolverRuleConditionPropertyList(this, "conditions", false);
    public get conditions() {
        return this._conditions;
    }
    public putConditions(value: IpamPrefixListResolverRuleConditionProperty[] | cdktn.IResolvable) {
        this._conditions.internalValue = value;
    }
    public resetConditions() {
        this._conditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
        return this._conditions.internalValue;
    }

    // ipam_scope_id - computed: true, optional: true, required: false
    private _ipamScopeId?: string; 
    public get ipamScopeId() {
        return this.getStringAttribute('ipam_scope_id');
    }
    public set ipamScopeId(value: string) {
        this._ipamScopeId = value;
    }
    public resetIpamScopeId() {
        this._ipamScopeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipamScopeIdInput() {
        return this._ipamScopeId;
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

    // static_cidr - computed: true, optional: true, required: false
    private _staticCidr?: string; 
    public get staticCidr() {
        return this.getStringAttribute('static_cidr');
    }
    public set staticCidr(value: string) {
        this._staticCidr = value;
    }
    public resetStaticCidr() {
        this._staticCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get staticCidrInput() {
        return this._staticCidr;
    }
}

export class IpamPrefixListResolverRulePropertyList extends cdktn.ComplexList {
    public internalValue? : IpamPrefixListResolverRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): IpamPrefixListResolverRulePropertyOutputReference {
        return new IpamPrefixListResolverRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#key CcIPAMPrefixListResolver#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver#value CcIPAMPrefixListResolver#value}
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
