// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLocalGatewayVirtualInterfaceGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface_group#local_bgp_asn CcLocalGatewayVirtualInterfaceGroup#local_bgp_asn}
    */
    readonly localBgpAsn?: number;
    /**
    * The extended 32-bit ASN for the local BGP configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface_group#local_bgp_asn_extended CcLocalGatewayVirtualInterfaceGroup#local_bgp_asn_extended}
    */
    readonly localBgpAsnExtended?: number;
    /**
    * The ID of the local gateway
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface_group#local_gateway_id CcLocalGatewayVirtualInterfaceGroup#local_gateway_id}
    */
    readonly localGatewayId: string;
    /**
    * The tags assigned to the virtual interface group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface_group#tags CcLocalGatewayVirtualInterfaceGroup#tags}
    */
    readonly tags?: CcLocalGatewayVirtualInterfaceGroup.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface_group awscc_ec2_local_gateway_virtual_interface_group}
*/
export class CcLocalGatewayVirtualInterfaceGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_local_gateway_virtual_interface_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLocalGatewayVirtualInterfaceGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLocalGatewayVirtualInterfaceGroup to import
    * @param importFromId The id of the existing CcLocalGatewayVirtualInterfaceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLocalGatewayVirtualInterfaceGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_local_gateway_virtual_interface_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface_group awscc_ec2_local_gateway_virtual_interface_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLocalGatewayVirtualInterfaceGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcLocalGatewayVirtualInterfaceGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_local_gateway_virtual_interface_group',
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
        this._localBgpAsn = config.localBgpAsn;
        this._localBgpAsnExtended = config.localBgpAsnExtended;
        this._localGatewayId = config.localGatewayId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // configuration_state - computed: true, optional: false, required: false
    public get configurationState() {
        return this.getStringAttribute('configuration_state');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // local_bgp_asn - computed: true, optional: true, required: false
    private _localBgpAsn?: number; 
    public get localBgpAsn() {
        return this.getNumberAttribute('local_bgp_asn');
    }
    public set localBgpAsn(value: number) {
        this._localBgpAsn = value;
    }
    public resetLocalBgpAsn() {
        this._localBgpAsn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localBgpAsnInput() {
        return this._localBgpAsn;
    }

    // local_bgp_asn_extended - computed: true, optional: true, required: false
    private _localBgpAsnExtended?: number; 
    public get localBgpAsnExtended() {
        return this.getNumberAttribute('local_bgp_asn_extended');
    }
    public set localBgpAsnExtended(value: number) {
        this._localBgpAsnExtended = value;
    }
    public resetLocalBgpAsnExtended() {
        this._localBgpAsnExtended = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localBgpAsnExtendedInput() {
        return this._localBgpAsnExtended;
    }

    // local_gateway_id - computed: false, optional: false, required: true
    private _localGatewayId?: string; 
    public get localGatewayId() {
        return this.getStringAttribute('local_gateway_id');
    }
    public set localGatewayId(value: string) {
        this._localGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get localGatewayIdInput() {
        return this._localGatewayId;
    }

    // local_gateway_virtual_interface_group_arn - computed: true, optional: false, required: false
    public get localGatewayVirtualInterfaceGroupArn() {
        return this.getStringAttribute('local_gateway_virtual_interface_group_arn');
    }

    // local_gateway_virtual_interface_group_id - computed: true, optional: false, required: false
    public get localGatewayVirtualInterfaceGroupId() {
        return this.getStringAttribute('local_gateway_virtual_interface_group_id');
    }

    // local_gateway_virtual_interface_ids - computed: true, optional: false, required: false
    public get localGatewayVirtualInterfaceIds() {
        return cdktn.Fn.tolist(this.getListAttribute('local_gateway_virtual_interface_ids'));
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
        return this.getStringAttribute('owner_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLocalGatewayVirtualInterfaceGroup.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLocalGatewayVirtualInterfaceGroup.TagProperty[] | cdktn.IResolvable) {
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
            local_bgp_asn: cdktn.numberToTerraform(this._localBgpAsn),
            local_bgp_asn_extended: cdktn.numberToTerraform(this._localBgpAsnExtended),
            local_gateway_id: cdktn.stringToTerraform(this._localGatewayId),
            tags: cdktn.listMapper(ccLocalGatewayVirtualInterfaceGroupTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            local_bgp_asn: {
                value: cdktn.numberToHclTerraform(this._localBgpAsn),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            local_bgp_asn_extended: {
                value: cdktn.numberToHclTerraform(this._localBgpAsnExtended),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            local_gateway_id: {
                value: cdktn.stringToHclTerraform(this._localGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLocalGatewayVirtualInterfaceGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLocalGatewayVirtualInterfaceGroup.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLocalGatewayVirtualInterfaceGroupTagPropertyToTerraform(struct?: CcLocalGatewayVirtualInterfaceGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLocalGatewayVirtualInterfaceGroupTagPropertyToHclTerraform(struct?: CcLocalGatewayVirtualInterfaceGroup.TagProperty | cdktn.IResolvable): any {
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


export namespace CcLocalGatewayVirtualInterfaceGroup {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface_group#key CcLocalGatewayVirtualInterfaceGroup#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface_group#value CcLocalGatewayVirtualInterfaceGroup#value}
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
