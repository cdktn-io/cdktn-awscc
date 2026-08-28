// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver_target

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIPAMPrefixListResolverTargetProps extends cdktn.TerraformMetaArguments {
    /**
    * The desired version of the Prefix List Resolver that this Target should synchronize with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver_target#desired_version CcIPAMPrefixListResolverTarget#desired_version}
    */
    readonly desiredVersion?: number;
    /**
    * The Id of the IPAM Prefix List Resolver associated with this Target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver_target#ipam_prefix_list_resolver_id CcIPAMPrefixListResolverTarget#ipam_prefix_list_resolver_id}
    */
    readonly ipamPrefixListResolverId: string;
    /**
    * The Id of the Managed Prefix List.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver_target#prefix_list_id CcIPAMPrefixListResolverTarget#prefix_list_id}
    */
    readonly prefixListId: string;
    /**
    * The region that the Managed Prefix List is located in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver_target#prefix_list_region CcIPAMPrefixListResolverTarget#prefix_list_region}
    */
    readonly prefixListRegion: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver_target#tags CcIPAMPrefixListResolverTarget#tags}
    */
    readonly tags?: CcIPAMPrefixListResolverTarget.TagProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether this Target automatically tracks the latest version of the Prefix List Resolver.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver_target#track_latest_version CcIPAMPrefixListResolverTarget#track_latest_version}
    */
    readonly trackLatestVersion: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver_target awscc_ec2_ipam_prefix_list_resolver_target}
*/
export class CcIPAMPrefixListResolverTarget extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_ipam_prefix_list_resolver_target";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIPAMPrefixListResolverTarget resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIPAMPrefixListResolverTarget to import
    * @param importFromId The id of the existing CcIPAMPrefixListResolverTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIPAMPrefixListResolverTarget to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_ipam_prefix_list_resolver_target", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver_target awscc_ec2_ipam_prefix_list_resolver_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIPAMPrefixListResolverTargetProps
    */
    public constructor(scope: Construct, id: string, config: CcIPAMPrefixListResolverTargetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_ipam_prefix_list_resolver_target',
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
        this._desiredVersion = config.desiredVersion;
        this._ipamPrefixListResolverId = config.ipamPrefixListResolverId;
        this._prefixListId = config.prefixListId;
        this._prefixListRegion = config.prefixListRegion;
        this._tags.internalValue = config.tags;
        this._trackLatestVersion = config.trackLatestVersion;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // desired_version - computed: true, optional: true, required: false
    private _desiredVersion?: number; 
    public get desiredVersion() {
        return this.getNumberAttribute('desired_version');
    }
    public set desiredVersion(value: number) {
        this._desiredVersion = value;
    }
    public resetDesiredVersion() {
        this._desiredVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredVersionInput() {
        return this._desiredVersion;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ipam_prefix_list_resolver_id - computed: false, optional: false, required: true
    private _ipamPrefixListResolverId?: string; 
    public get ipamPrefixListResolverId() {
        return this.getStringAttribute('ipam_prefix_list_resolver_id');
    }
    public set ipamPrefixListResolverId(value: string) {
        this._ipamPrefixListResolverId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ipamPrefixListResolverIdInput() {
        return this._ipamPrefixListResolverId;
    }

    // ipam_prefix_list_resolver_target_arn - computed: true, optional: false, required: false
    public get ipamPrefixListResolverTargetArn() {
        return this.getStringAttribute('ipam_prefix_list_resolver_target_arn');
    }

    // ipam_prefix_list_resolver_target_id - computed: true, optional: false, required: false
    public get ipamPrefixListResolverTargetId() {
        return this.getStringAttribute('ipam_prefix_list_resolver_target_id');
    }

    // prefix_list_id - computed: false, optional: false, required: true
    private _prefixListId?: string; 
    public get prefixListId() {
        return this.getStringAttribute('prefix_list_id');
    }
    public set prefixListId(value: string) {
        this._prefixListId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixListIdInput() {
        return this._prefixListId;
    }

    // prefix_list_region - computed: false, optional: false, required: true
    private _prefixListRegion?: string; 
    public get prefixListRegion() {
        return this.getStringAttribute('prefix_list_region');
    }
    public set prefixListRegion(value: string) {
        this._prefixListRegion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixListRegionInput() {
        return this._prefixListRegion;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIPAMPrefixListResolverTarget.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIPAMPrefixListResolverTarget.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // track_latest_version - computed: false, optional: false, required: true
    private _trackLatestVersion?: boolean | cdktn.IResolvable; 
    public get trackLatestVersion() {
        return this.getBooleanAttribute('track_latest_version');
    }
    public set trackLatestVersion(value: boolean | cdktn.IResolvable) {
        this._trackLatestVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trackLatestVersionInput() {
        return this._trackLatestVersion;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            desired_version: cdktn.numberToTerraform(this._desiredVersion),
            ipam_prefix_list_resolver_id: cdktn.stringToTerraform(this._ipamPrefixListResolverId),
            prefix_list_id: cdktn.stringToTerraform(this._prefixListId),
            prefix_list_region: cdktn.stringToTerraform(this._prefixListRegion),
            tags: cdktn.listMapper(ccIPAMPrefixListResolverTargetTagPropertyToTerraform, false)(this._tags.internalValue),
            track_latest_version: cdktn.booleanToTerraform(this._trackLatestVersion),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            desired_version: {
                value: cdktn.numberToHclTerraform(this._desiredVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ipam_prefix_list_resolver_id: {
                value: cdktn.stringToHclTerraform(this._ipamPrefixListResolverId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            prefix_list_id: {
                value: cdktn.stringToHclTerraform(this._prefixListId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            prefix_list_region: {
                value: cdktn.stringToHclTerraform(this._prefixListRegion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIPAMPrefixListResolverTargetTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIPAMPrefixListResolverTarget.TagPropertyList",
            },
            track_latest_version: {
                value: cdktn.booleanToHclTerraform(this._trackLatestVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIPAMPrefixListResolverTargetTagPropertyToTerraform(struct?: CcIPAMPrefixListResolverTarget.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIPAMPrefixListResolverTargetTagPropertyToHclTerraform(struct?: CcIPAMPrefixListResolverTarget.TagProperty | cdktn.IResolvable): any {
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


export namespace CcIPAMPrefixListResolverTarget {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver_target#key CcIPAMPrefixListResolverTarget#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver_target#value CcIPAMPrefixListResolverTarget#value}
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
