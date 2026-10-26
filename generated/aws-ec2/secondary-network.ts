// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_secondary_network

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSecondaryNetworkProps extends cdktn.TerraformMetaArguments {
    /**
    * The IPv4 CIDR block for the secondary network. The CIDR block size must be between /12 and /28.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_secondary_network#ipv_4_cidr_block CcSecondaryNetwork#ipv_4_cidr_block}
    */
    readonly ipv4CidrBlock: string;
    /**
    * The type of secondary network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_secondary_network#network_type CcSecondaryNetwork#network_type}
    */
    readonly networkType: string;
    /**
    * The tags for the secondary network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_secondary_network#tags CcSecondaryNetwork#tags}
    */
    readonly tags?: CcSecondaryNetwork.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_secondary_network awscc_ec2_secondary_network}
*/
export class CcSecondaryNetwork extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_secondary_network";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSecondaryNetwork resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSecondaryNetwork to import
    * @param importFromId The id of the existing CcSecondaryNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_secondary_network#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSecondaryNetwork to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_secondary_network", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_secondary_network awscc_ec2_secondary_network} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSecondaryNetworkProps
    */
    public constructor(scope: Construct, id: string, config: CcSecondaryNetworkProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_secondary_network',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._ipv4CidrBlock = config.ipv4CidrBlock;
        this._networkType = config.networkType;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ipv_4_cidr_block - computed: false, optional: false, required: true
    private _ipv4CidrBlock?: string; 
    public get ipv4CidrBlock() {
        return this.getStringAttribute('ipv_4_cidr_block');
    }
    public set ipv4CidrBlock(value: string) {
        this._ipv4CidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv4CidrBlockInput() {
        return this._ipv4CidrBlock;
    }

    // ipv_4_cidr_block_associations - computed: true, optional: false, required: false
    private _ipv4CidrBlockAssociations = new CcSecondaryNetwork.Ipv4CidrBlockAssociationsPropertyList(this, "ipv_4_cidr_block_associations", false);
    public get ipv4CidrBlockAssociations() {
        return this._ipv4CidrBlockAssociations;
    }

    // network_type - computed: false, optional: false, required: true
    private _networkType?: string; 
    public get networkType() {
        return this.getStringAttribute('network_type');
    }
    public set networkType(value: string) {
        this._networkType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networkTypeInput() {
        return this._networkType;
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
        return this.getStringAttribute('owner_id');
    }

    // secondary_network_arn - computed: true, optional: false, required: false
    public get secondaryNetworkArn() {
        return this.getStringAttribute('secondary_network_arn');
    }

    // secondary_network_id - computed: true, optional: false, required: false
    public get secondaryNetworkId() {
        return this.getStringAttribute('secondary_network_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSecondaryNetwork.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSecondaryNetwork.TagsProperty[] | cdktn.IResolvable) {
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
            ipv_4_cidr_block: cdktn.stringToTerraform(this._ipv4CidrBlock),
            network_type: cdktn.stringToTerraform(this._networkType),
            tags: cdktn.listMapper(ccSecondaryNetworkTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            ipv_4_cidr_block: {
                value: cdktn.stringToHclTerraform(this._ipv4CidrBlock),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            network_type: {
                value: cdktn.stringToHclTerraform(this._networkType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSecondaryNetworkTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcSecondaryNetwork.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSecondaryNetworkIpv4CidrBlockAssociationsPropertyToTerraform(struct?: CcSecondaryNetwork.Ipv4CidrBlockAssociationsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccSecondaryNetworkIpv4CidrBlockAssociationsPropertyToHclTerraform(struct?: CcSecondaryNetwork.Ipv4CidrBlockAssociationsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccSecondaryNetworkTagsPropertyToTerraform(struct?: CcSecondaryNetwork.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSecondaryNetworkTagsPropertyToHclTerraform(struct?: CcSecondaryNetwork.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcSecondaryNetwork {
export interface Ipv4CidrBlockAssociationsProperty {
}
export class Ipv4CidrBlockAssociationsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): Ipv4CidrBlockAssociationsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Ipv4CidrBlockAssociationsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // association_id - computed: true, optional: false, required: false
    public get associationId() {
        return this.getStringAttribute('association_id');
    }

    // cidr_block - computed: true, optional: false, required: false
    public get cidrBlock() {
        return this.getStringAttribute('cidr_block');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }
}

export class Ipv4CidrBlockAssociationsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): Ipv4CidrBlockAssociationsPropertyOutputReference {
        return new Ipv4CidrBlockAssociationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_secondary_network#key CcSecondaryNetwork#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_secondary_network#value CcSecondaryNetwork#value}
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
