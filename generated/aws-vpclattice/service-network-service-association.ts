// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_service_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServiceNetworkServiceAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_service_association#dns_entry CcServiceNetworkServiceAssociation#dns_entry}
    */
    readonly dnsEntry?: CcServiceNetworkServiceAssociation.DnsEntryProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_service_association#service_identifier CcServiceNetworkServiceAssociation#service_identifier}
    */
    readonly serviceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_service_association#service_network_identifier CcServiceNetworkServiceAssociation#service_network_identifier}
    */
    readonly serviceNetworkIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_service_association#tags CcServiceNetworkServiceAssociation#tags}
    */
    readonly tags?: CcServiceNetworkServiceAssociation.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_service_association awscc_vpclattice_service_network_service_association}
*/
export class CcServiceNetworkServiceAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_vpclattice_service_network_service_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcServiceNetworkServiceAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcServiceNetworkServiceAssociation to import
    * @param importFromId The id of the existing CcServiceNetworkServiceAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_service_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcServiceNetworkServiceAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_vpclattice_service_network_service_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_service_association awscc_vpclattice_service_network_service_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServiceNetworkServiceAssociationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcServiceNetworkServiceAssociationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_vpclattice_service_network_service_association',
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
        this._dnsEntry.internalValue = config.dnsEntry;
        this._serviceIdentifier = config.serviceIdentifier;
        this._serviceNetworkIdentifier = config.serviceNetworkIdentifier;
        this._tags.internalValue = config.tags;
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

    // dns_entry - computed: true, optional: true, required: false
    private _dnsEntry = new CcServiceNetworkServiceAssociation.DnsEntryPropertyOutputReference(this, "dns_entry");
    public get dnsEntry() {
        return this._dnsEntry;
    }
    public putDnsEntry(value: CcServiceNetworkServiceAssociation.DnsEntryProperty) {
        this._dnsEntry.internalValue = value;
    }
    public resetDnsEntry() {
        this._dnsEntry.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsEntryInput() {
        return this._dnsEntry.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // service_arn - computed: true, optional: false, required: false
    public get serviceArn() {
        return this.getStringAttribute('service_arn');
    }

    // service_id - computed: true, optional: false, required: false
    public get serviceId() {
        return this.getStringAttribute('service_id');
    }

    // service_identifier - computed: true, optional: true, required: false
    private _serviceIdentifier?: string; 
    public get serviceIdentifier() {
        return this.getStringAttribute('service_identifier');
    }
    public set serviceIdentifier(value: string) {
        this._serviceIdentifier = value;
    }
    public resetServiceIdentifier() {
        this._serviceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceIdentifierInput() {
        return this._serviceIdentifier;
    }

    // service_name - computed: true, optional: false, required: false
    public get serviceName() {
        return this.getStringAttribute('service_name');
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

    // service_network_service_association_id - computed: true, optional: false, required: false
    public get serviceNetworkServiceAssociationId() {
        return this.getStringAttribute('service_network_service_association_id');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcServiceNetworkServiceAssociation.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcServiceNetworkServiceAssociation.TagProperty[] | cdktn.IResolvable) {
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
            dns_entry: ccServiceNetworkServiceAssociationDnsEntryPropertyToTerraform(this._dnsEntry.internalValue),
            service_identifier: cdktn.stringToTerraform(this._serviceIdentifier),
            service_network_identifier: cdktn.stringToTerraform(this._serviceNetworkIdentifier),
            tags: cdktn.listMapper(ccServiceNetworkServiceAssociationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            dns_entry: {
                value: ccServiceNetworkServiceAssociationDnsEntryPropertyToHclTerraform(this._dnsEntry.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcServiceNetworkServiceAssociation.DnsEntryProperty",
            },
            service_identifier: {
                value: cdktn.stringToHclTerraform(this._serviceIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_network_identifier: {
                value: cdktn.stringToHclTerraform(this._serviceNetworkIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccServiceNetworkServiceAssociationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcServiceNetworkServiceAssociation.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccServiceNetworkServiceAssociationDnsEntryPropertyToTerraform(struct?: CcServiceNetworkServiceAssociation.DnsEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceNetworkServiceAssociationDnsEntryPropertyToHclTerraform(struct?: CcServiceNetworkServiceAssociation.DnsEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceNetworkServiceAssociationTagPropertyToTerraform(struct?: CcServiceNetworkServiceAssociation.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceNetworkServiceAssociationTagPropertyToHclTerraform(struct?: CcServiceNetworkServiceAssociation.TagProperty | cdktn.IResolvable): any {
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


export namespace CcServiceNetworkServiceAssociation {
export interface DnsEntryProperty {
}
export class DnsEntryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DnsEntryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DnsEntryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }

    // domain_name - computed: true, optional: false, required: false
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }

    // hosted_zone_id - computed: true, optional: false, required: false
    public get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_service_association#key CcServiceNetworkServiceAssociation#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_service_association#value CcServiceNetworkServiceAssociation#value}
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
