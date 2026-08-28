// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_service_network_vpc_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServiceNetworkVpcAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_service_network_vpc_association#dns_options CcServiceNetworkVpcAssociation#dns_options}
    */
    readonly dnsOptions?: CcServiceNetworkVpcAssociation.DnsOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_service_network_vpc_association#private_dns_enabled CcServiceNetworkVpcAssociation#private_dns_enabled}
    */
    readonly privateDnsEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_service_network_vpc_association#security_group_ids CcServiceNetworkVpcAssociation#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_service_network_vpc_association#service_network_identifier CcServiceNetworkVpcAssociation#service_network_identifier}
    */
    readonly serviceNetworkIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_service_network_vpc_association#tags CcServiceNetworkVpcAssociation#tags}
    */
    readonly tags?: CcServiceNetworkVpcAssociation.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_service_network_vpc_association#vpc_identifier CcServiceNetworkVpcAssociation#vpc_identifier}
    */
    readonly vpcIdentifier?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_service_network_vpc_association awscc_vpclattice_service_network_vpc_association}
*/
export class CcServiceNetworkVpcAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_vpclattice_service_network_vpc_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcServiceNetworkVpcAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcServiceNetworkVpcAssociation to import
    * @param importFromId The id of the existing CcServiceNetworkVpcAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_service_network_vpc_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcServiceNetworkVpcAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_vpclattice_service_network_vpc_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_service_network_vpc_association awscc_vpclattice_service_network_vpc_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServiceNetworkVpcAssociationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcServiceNetworkVpcAssociationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_vpclattice_service_network_vpc_association',
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
        this._dnsOptions.internalValue = config.dnsOptions;
        this._privateDnsEnabled = config.privateDnsEnabled;
        this._securityGroupIds = config.securityGroupIds;
        this._serviceNetworkIdentifier = config.serviceNetworkIdentifier;
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

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // dns_options - computed: true, optional: true, required: false
    private _dnsOptions = new CcServiceNetworkVpcAssociation.DnsOptionsPropertyOutputReference(this, "dns_options");
    public get dnsOptions() {
        return this._dnsOptions;
    }
    public putDnsOptions(value: CcServiceNetworkVpcAssociation.DnsOptionsProperty) {
        this._dnsOptions.internalValue = value;
    }
    public resetDnsOptions() {
        this._dnsOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsOptionsInput() {
        return this._dnsOptions.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // private_dns_enabled - computed: true, optional: true, required: false
    private _privateDnsEnabled?: boolean | cdktn.IResolvable; 
    public get privateDnsEnabled() {
        return this.getBooleanAttribute('private_dns_enabled');
    }
    public set privateDnsEnabled(value: boolean | cdktn.IResolvable) {
        this._privateDnsEnabled = value;
    }
    public resetPrivateDnsEnabled() {
        this._privateDnsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateDnsEnabledInput() {
        return this._privateDnsEnabled;
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

    // service_network_arn - computed: true, optional: false, required: false
    public get serviceNetworkArn() {
        return this.getStringAttribute('service_network_arn');
    }

    // service_network_id - computed: true, optional: false, required: false
    public get serviceNetworkId() {
        return this.getStringAttribute('service_network_id');
    }

    // service_network_identifier - computed: true, optional: true, required: false
    private _serviceNetworkIdentifier?: string; 
    public get serviceNetworkIdentifier() {
        return this.getStringAttribute('service_network_identifier');
    }
    public set serviceNetworkIdentifier(value: string) {
        this._serviceNetworkIdentifier = value;
    }
    public resetServiceNetworkIdentifier() {
        this._serviceNetworkIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNetworkIdentifierInput() {
        return this._serviceNetworkIdentifier;
    }

    // service_network_name - computed: true, optional: false, required: false
    public get serviceNetworkName() {
        return this.getStringAttribute('service_network_name');
    }

    // service_network_vpc_association_id - computed: true, optional: false, required: false
    public get serviceNetworkVpcAssociationId() {
        return this.getStringAttribute('service_network_vpc_association_id');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcServiceNetworkVpcAssociation.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcServiceNetworkVpcAssociation.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }

    // vpc_identifier - computed: true, optional: true, required: false
    private _vpcIdentifier?: string; 
    public get vpcIdentifier() {
        return this.getStringAttribute('vpc_identifier');
    }
    public set vpcIdentifier(value: string) {
        this._vpcIdentifier = value;
    }
    public resetVpcIdentifier() {
        this._vpcIdentifier = undefined;
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
            dns_options: ccServiceNetworkVpcAssociationDnsOptionsPropertyToTerraform(this._dnsOptions.internalValue),
            private_dns_enabled: cdktn.booleanToTerraform(this._privateDnsEnabled),
            security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
            service_network_identifier: cdktn.stringToTerraform(this._serviceNetworkIdentifier),
            tags: cdktn.listMapper(ccServiceNetworkVpcAssociationTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_identifier: cdktn.stringToTerraform(this._vpcIdentifier),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            dns_options: {
                value: ccServiceNetworkVpcAssociationDnsOptionsPropertyToHclTerraform(this._dnsOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcServiceNetworkVpcAssociation.DnsOptionsProperty",
            },
            private_dns_enabled: {
                value: cdktn.booleanToHclTerraform(this._privateDnsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            service_network_identifier: {
                value: cdktn.stringToHclTerraform(this._serviceNetworkIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccServiceNetworkVpcAssociationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcServiceNetworkVpcAssociation.TagPropertyList",
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

export function ccServiceNetworkVpcAssociationDnsOptionsPropertyToTerraform(struct?: CcServiceNetworkVpcAssociation.DnsOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        private_dns_preference: cdktn.stringToTerraform(struct!.privateDnsPreference),
        private_dns_specified_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.privateDnsSpecifiedDomains),
    }
}


export function ccServiceNetworkVpcAssociationDnsOptionsPropertyToHclTerraform(struct?: CcServiceNetworkVpcAssociation.DnsOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        private_dns_preference: {
            value: cdktn.stringToHclTerraform(struct!.privateDnsPreference),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private_dns_specified_domains: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.privateDnsSpecifiedDomains),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceNetworkVpcAssociationTagPropertyToTerraform(struct?: CcServiceNetworkVpcAssociation.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceNetworkVpcAssociationTagPropertyToHclTerraform(struct?: CcServiceNetworkVpcAssociation.TagProperty | cdktn.IResolvable): any {
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


export namespace CcServiceNetworkVpcAssociation {
export interface DnsOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_service_network_vpc_association#private_dns_preference CcServiceNetworkVpcAssociation#private_dns_preference}
    */
    readonly privateDnsPreference?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_service_network_vpc_association#private_dns_specified_domains CcServiceNetworkVpcAssociation#private_dns_specified_domains}
    */
    readonly privateDnsSpecifiedDomains?: string[];
}
export class DnsOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DnsOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._privateDnsPreference !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateDnsPreference = this._privateDnsPreference;
        }
        if (this._privateDnsSpecifiedDomains !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateDnsSpecifiedDomains = this._privateDnsSpecifiedDomains;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DnsOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._privateDnsPreference = undefined;
            this._privateDnsSpecifiedDomains = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._privateDnsPreference = value.privateDnsPreference;
            this._privateDnsSpecifiedDomains = value.privateDnsSpecifiedDomains;
        }
    }

    // private_dns_preference - computed: true, optional: true, required: false
    private _privateDnsPreference?: string; 
    public get privateDnsPreference() {
        return this.getStringAttribute('private_dns_preference');
    }
    public set privateDnsPreference(value: string) {
        this._privateDnsPreference = value;
    }
    public resetPrivateDnsPreference() {
        this._privateDnsPreference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateDnsPreferenceInput() {
        return this._privateDnsPreference;
    }

    // private_dns_specified_domains - computed: true, optional: true, required: false
    private _privateDnsSpecifiedDomains?: string[]; 
    public get privateDnsSpecifiedDomains() {
        return cdktn.Fn.tolist(this.getListAttribute('private_dns_specified_domains'));
    }
    public set privateDnsSpecifiedDomains(value: string[]) {
        this._privateDnsSpecifiedDomains = value;
    }
    public resetPrivateDnsSpecifiedDomains() {
        this._privateDnsSpecifiedDomains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateDnsSpecifiedDomainsInput() {
        return this._privateDnsSpecifiedDomains;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_service_network_vpc_association#key CcServiceNetworkVpcAssociation#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_service_network_vpc_association#value CcServiceNetworkVpcAssociation#value}
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
