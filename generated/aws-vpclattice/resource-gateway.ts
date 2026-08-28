// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_resource_gateway

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResourceGatewayProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_resource_gateway#ip_address_type CcResourceGateway#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * The number of IPv4 addresses to allocate per ENI for the resource gateway
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_resource_gateway#ipv_4_addresses_per_eni CcResourceGateway#ipv_4_addresses_per_eni}
    */
    readonly ipv4AddressesPerEni?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_resource_gateway#name CcResourceGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_resource_gateway#resource_config_dns_resolution CcResourceGateway#resource_config_dns_resolution}
    */
    readonly resourceConfigDnsResolution?: string;
    /**
    * The ID of one or more security groups to associate with the endpoint network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_resource_gateway#security_group_ids CcResourceGateway#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The ID of one or more subnets in which to create an endpoint network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_resource_gateway#subnet_ids CcResourceGateway#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_resource_gateway#tags CcResourceGateway#tags}
    */
    readonly tags?: CcResourceGateway.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_resource_gateway#vpc_identifier CcResourceGateway#vpc_identifier}
    */
    readonly vpcIdentifier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_resource_gateway awscc_vpclattice_resource_gateway}
*/
export class CcResourceGateway extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_vpclattice_resource_gateway";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResourceGateway resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResourceGateway to import
    * @param importFromId The id of the existing CcResourceGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_resource_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResourceGateway to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_vpclattice_resource_gateway", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_resource_gateway awscc_vpclattice_resource_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResourceGatewayProps
    */
    public constructor(scope: Construct, id: string, config: CcResourceGatewayProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_vpclattice_resource_gateway',
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
        this._ipAddressType = config.ipAddressType;
        this._ipv4AddressesPerEni = config.ipv4AddressesPerEni;
        this._name = config.name;
        this._resourceConfigDnsResolution = config.resourceConfigDnsResolution;
        this._securityGroupIds = config.securityGroupIds;
        this._subnetIds = config.subnetIds;
        this._tags.internalValue = config.tags;
        this._vpcIdentifier = config.vpcIdentifier;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ip_address_type - computed: true, optional: true, required: false
    private _ipAddressType?: string; 
    public get ipAddressType() {
        return this.getStringAttribute('ip_address_type');
    }
    public set ipAddressType(value: string) {
        this._ipAddressType = value;
    }
    public resetIpAddressType() {
        this._ipAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressTypeInput() {
        return this._ipAddressType;
    }

    // ipv_4_addresses_per_eni - computed: true, optional: true, required: false
    private _ipv4AddressesPerEni?: number; 
    public get ipv4AddressesPerEni() {
        return this.getNumberAttribute('ipv_4_addresses_per_eni');
    }
    public set ipv4AddressesPerEni(value: number) {
        this._ipv4AddressesPerEni = value;
    }
    public resetIpv4AddressesPerEni() {
        this._ipv4AddressesPerEni = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv4AddressesPerEniInput() {
        return this._ipv4AddressesPerEni;
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

    // resource_config_dns_resolution - computed: true, optional: true, required: false
    private _resourceConfigDnsResolution?: string; 
    public get resourceConfigDnsResolution() {
        return this.getStringAttribute('resource_config_dns_resolution');
    }
    public set resourceConfigDnsResolution(value: string) {
        this._resourceConfigDnsResolution = value;
    }
    public resetResourceConfigDnsResolution() {
        this._resourceConfigDnsResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceConfigDnsResolutionInput() {
        return this._resourceConfigDnsResolution;
    }

    // resource_gateway_id - computed: true, optional: false, required: false
    public get resourceGatewayId() {
        return this.getStringAttribute('resource_gateway_id');
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcResourceGateway.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcResourceGateway.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_identifier - computed: false, optional: false, required: true
    private _vpcIdentifier?: string; 
    public get vpcIdentifier() {
        return this.getStringAttribute('vpc_identifier');
    }
    public set vpcIdentifier(value: string) {
        this._vpcIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdentifierInput() {
        return this._vpcIdentifier;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            ip_address_type: cdktn.stringToTerraform(this._ipAddressType),
            ipv_4_addresses_per_eni: cdktn.numberToTerraform(this._ipv4AddressesPerEni),
            name: cdktn.stringToTerraform(this._name),
            resource_config_dns_resolution: cdktn.stringToTerraform(this._resourceConfigDnsResolution),
            security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
            subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
            tags: cdktn.listMapper(ccResourceGatewayTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_identifier: cdktn.stringToTerraform(this._vpcIdentifier),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            ip_address_type: {
                value: cdktn.stringToHclTerraform(this._ipAddressType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipv_4_addresses_per_eni: {
                value: cdktn.numberToHclTerraform(this._ipv4AddressesPerEni),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_config_dns_resolution: {
                value: cdktn.stringToHclTerraform(this._resourceConfigDnsResolution),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            subnet_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccResourceGatewayTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcResourceGateway.TagPropertyList",
            },
            vpc_identifier: {
                value: cdktn.stringToHclTerraform(this._vpcIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccResourceGatewayTagPropertyToTerraform(struct?: CcResourceGateway.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccResourceGatewayTagPropertyToHclTerraform(struct?: CcResourceGateway.TagProperty | cdktn.IResolvable): any {
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


export namespace CcResourceGateway {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_resource_gateway#key CcResourceGateway#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_resource_gateway#value CcResourceGateway#value}
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
