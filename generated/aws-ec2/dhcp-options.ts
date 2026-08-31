// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDHCPOptionsProps extends cdktn.TerraformMetaArguments {
    /**
    * This value is used to complete unqualified DNS hostnames.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#domain_name CcDHCPOptions#domain_name}
    */
    readonly domainName?: string;
    /**
    * The IPv4 addresses of up to four domain name servers, or AmazonProvidedDNS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#domain_name_servers CcDHCPOptions#domain_name_servers}
    */
    readonly domainNameServers?: string[];
    /**
    * The preferred Lease Time for ipV6 address in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#ipv_6_address_preferred_lease_time CcDHCPOptions#ipv_6_address_preferred_lease_time}
    */
    readonly ipv6AddressPreferredLeaseTime?: number;
    /**
    * The IPv4 addresses of up to four NetBIOS name servers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#netbios_name_servers CcDHCPOptions#netbios_name_servers}
    */
    readonly netbiosNameServers?: string[];
    /**
    * The NetBIOS node type (1, 2, 4, or 8).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#netbios_node_type CcDHCPOptions#netbios_node_type}
    */
    readonly netbiosNodeType?: number;
    /**
    * The IPv4 addresses of up to four Network Time Protocol (NTP) servers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#ntp_servers CcDHCPOptions#ntp_servers}
    */
    readonly ntpServers?: string[];
    /**
    * Any tags assigned to the DHCP options set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#tags CcDHCPOptions#tags}
    */
    readonly tags?: CcDHCPOptions.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options awscc_ec2_dhcp_options}
*/
export class CcDHCPOptions extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_dhcp_options";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDHCPOptions resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDHCPOptions to import
    * @param importFromId The id of the existing CcDHCPOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDHCPOptions to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_dhcp_options", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options awscc_ec2_dhcp_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDHCPOptionsProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcDHCPOptionsProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_dhcp_options',
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
        this._domainName = config.domainName;
        this._domainNameServers = config.domainNameServers;
        this._ipv6AddressPreferredLeaseTime = config.ipv6AddressPreferredLeaseTime;
        this._netbiosNameServers = config.netbiosNameServers;
        this._netbiosNodeType = config.netbiosNodeType;
        this._ntpServers = config.ntpServers;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // dhcp_options_id - computed: true, optional: false, required: false
    public get dhcpOptionsId() {
        return this.getStringAttribute('dhcp_options_id');
    }

    // domain_name - computed: true, optional: true, required: false
    private _domainName?: string; 
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
        this._domainName = value;
    }
    public resetDomainName() {
        this._domainName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
        return this._domainName;
    }

    // domain_name_servers - computed: true, optional: true, required: false
    private _domainNameServers?: string[]; 
    public get domainNameServers() {
        return this.getListAttribute('domain_name_servers');
    }
    public set domainNameServers(value: string[]) {
        this._domainNameServers = value;
    }
    public resetDomainNameServers() {
        this._domainNameServers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameServersInput() {
        return this._domainNameServers;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ipv_6_address_preferred_lease_time - computed: true, optional: true, required: false
    private _ipv6AddressPreferredLeaseTime?: number; 
    public get ipv6AddressPreferredLeaseTime() {
        return this.getNumberAttribute('ipv_6_address_preferred_lease_time');
    }
    public set ipv6AddressPreferredLeaseTime(value: number) {
        this._ipv6AddressPreferredLeaseTime = value;
    }
    public resetIpv6AddressPreferredLeaseTime() {
        this._ipv6AddressPreferredLeaseTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6AddressPreferredLeaseTimeInput() {
        return this._ipv6AddressPreferredLeaseTime;
    }

    // netbios_name_servers - computed: true, optional: true, required: false
    private _netbiosNameServers?: string[]; 
    public get netbiosNameServers() {
        return this.getListAttribute('netbios_name_servers');
    }
    public set netbiosNameServers(value: string[]) {
        this._netbiosNameServers = value;
    }
    public resetNetbiosNameServers() {
        this._netbiosNameServers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get netbiosNameServersInput() {
        return this._netbiosNameServers;
    }

    // netbios_node_type - computed: true, optional: true, required: false
    private _netbiosNodeType?: number; 
    public get netbiosNodeType() {
        return this.getNumberAttribute('netbios_node_type');
    }
    public set netbiosNodeType(value: number) {
        this._netbiosNodeType = value;
    }
    public resetNetbiosNodeType() {
        this._netbiosNodeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get netbiosNodeTypeInput() {
        return this._netbiosNodeType;
    }

    // ntp_servers - computed: true, optional: true, required: false
    private _ntpServers?: string[]; 
    public get ntpServers() {
        return this.getListAttribute('ntp_servers');
    }
    public set ntpServers(value: string[]) {
        this._ntpServers = value;
    }
    public resetNtpServers() {
        this._ntpServers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ntpServersInput() {
        return this._ntpServers;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDHCPOptions.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDHCPOptions.TagProperty[] | cdktn.IResolvable) {
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
            domain_name: cdktn.stringToTerraform(this._domainName),
            domain_name_servers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._domainNameServers),
            ipv_6_address_preferred_lease_time: cdktn.numberToTerraform(this._ipv6AddressPreferredLeaseTime),
            netbios_name_servers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._netbiosNameServers),
            netbios_node_type: cdktn.numberToTerraform(this._netbiosNodeType),
            ntp_servers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._ntpServers),
            tags: cdktn.listMapper(ccDHCPOptionsTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            domain_name: {
                value: cdktn.stringToHclTerraform(this._domainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_name_servers: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._domainNameServers),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            ipv_6_address_preferred_lease_time: {
                value: cdktn.numberToHclTerraform(this._ipv6AddressPreferredLeaseTime),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            netbios_name_servers: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._netbiosNameServers),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            netbios_node_type: {
                value: cdktn.numberToHclTerraform(this._netbiosNodeType),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ntp_servers: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._ntpServers),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDHCPOptionsTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDHCPOptions.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDHCPOptionsTagPropertyToTerraform(struct?: CcDHCPOptions.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDHCPOptionsTagPropertyToHclTerraform(struct?: CcDHCPOptions.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDHCPOptions {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#key CcDHCPOptions#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#value CcDHCPOptions#value}
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
