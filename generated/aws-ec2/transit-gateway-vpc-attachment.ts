// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_vpc_attachment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTransitGatewayVpcAttachmentProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_vpc_attachment#add_subnet_ids CcTransitGatewayVpcAttachment#add_subnet_ids}
    */
    readonly addSubnetIds?: string[];
    /**
    * The options for the transit gateway vpc attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_vpc_attachment#options CcTransitGatewayVpcAttachment#options}
    */
    readonly options?: CcTransitGatewayVpcAttachment.OptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_vpc_attachment#remove_subnet_ids CcTransitGatewayVpcAttachment#remove_subnet_ids}
    */
    readonly removeSubnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_vpc_attachment#subnet_ids CcTransitGatewayVpcAttachment#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_vpc_attachment#tags CcTransitGatewayVpcAttachment#tags}
    */
    readonly tags?: CcTransitGatewayVpcAttachment.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_vpc_attachment#transit_gateway_id CcTransitGatewayVpcAttachment#transit_gateway_id}
    */
    readonly transitGatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_vpc_attachment#vpc_id CcTransitGatewayVpcAttachment#vpc_id}
    */
    readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_vpc_attachment awscc_ec2_transit_gateway_vpc_attachment}
*/
export class CcTransitGatewayVpcAttachment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_transit_gateway_vpc_attachment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTransitGatewayVpcAttachment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTransitGatewayVpcAttachment to import
    * @param importFromId The id of the existing CcTransitGatewayVpcAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_vpc_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTransitGatewayVpcAttachment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_transit_gateway_vpc_attachment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_vpc_attachment awscc_ec2_transit_gateway_vpc_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTransitGatewayVpcAttachmentProps
    */
    public constructor(scope: Construct, id: string, config: CcTransitGatewayVpcAttachmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_transit_gateway_vpc_attachment',
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
        this._addSubnetIds = config.addSubnetIds;
        this._options.internalValue = config.options;
        this._removeSubnetIds = config.removeSubnetIds;
        this._subnetIds = config.subnetIds;
        this._tags.internalValue = config.tags;
        this._transitGatewayId = config.transitGatewayId;
        this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // add_subnet_ids - computed: true, optional: true, required: false
    private _addSubnetIds?: string[]; 
    public get addSubnetIds() {
        return this.getListAttribute('add_subnet_ids');
    }
    public set addSubnetIds(value: string[]) {
        this._addSubnetIds = value;
    }
    public resetAddSubnetIds() {
        this._addSubnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addSubnetIdsInput() {
        return this._addSubnetIds;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // options - computed: true, optional: true, required: false
    private _options = new CcTransitGatewayVpcAttachment.OptionsPropertyOutputReference(this, "options");
    public get options() {
        return this._options;
    }
    public putOptions(value: CcTransitGatewayVpcAttachment.OptionsProperty) {
        this._options.internalValue = value;
    }
    public resetOptions() {
        this._options.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionsInput() {
        return this._options.internalValue;
    }

    // remove_subnet_ids - computed: true, optional: true, required: false
    private _removeSubnetIds?: string[]; 
    public get removeSubnetIds() {
        return this.getListAttribute('remove_subnet_ids');
    }
    public set removeSubnetIds(value: string[]) {
        this._removeSubnetIds = value;
    }
    public resetRemoveSubnetIds() {
        this._removeSubnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get removeSubnetIdsInput() {
        return this._removeSubnetIds;
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTransitGatewayVpcAttachment.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTransitGatewayVpcAttachment.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // transit_gateway_id - computed: false, optional: false, required: true
    private _transitGatewayId?: string; 
    public get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }
    public set transitGatewayId(value: string) {
        this._transitGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayIdInput() {
        return this._transitGatewayId;
    }

    // transit_gateway_vpc_attachment_id - computed: true, optional: false, required: false
    public get transitGatewayVpcAttachmentId() {
        return this.getStringAttribute('transit_gateway_vpc_attachment_id');
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
        return this._vpcId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            add_subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._addSubnetIds),
            options: ccTransitGatewayVpcAttachmentOptionsPropertyToTerraform(this._options.internalValue),
            remove_subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._removeSubnetIds),
            subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
            tags: cdktn.listMapper(ccTransitGatewayVpcAttachmentTagPropertyToTerraform, false)(this._tags.internalValue),
            transit_gateway_id: cdktn.stringToTerraform(this._transitGatewayId),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            add_subnet_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._addSubnetIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            options: {
                value: ccTransitGatewayVpcAttachmentOptionsPropertyToHclTerraform(this._options.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTransitGatewayVpcAttachment.OptionsProperty",
            },
            remove_subnet_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._removeSubnetIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            subnet_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTransitGatewayVpcAttachmentTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTransitGatewayVpcAttachment.TagPropertyList",
            },
            transit_gateway_id: {
                value: cdktn.stringToHclTerraform(this._transitGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_id: {
                value: cdktn.stringToHclTerraform(this._vpcId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTransitGatewayVpcAttachmentOptionsPropertyToTerraform(struct?: CcTransitGatewayVpcAttachment.OptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        appliance_mode_support: cdktn.stringToTerraform(struct!.applianceModeSupport),
        dns_support: cdktn.stringToTerraform(struct!.dnsSupport),
        ipv_6_support: cdktn.stringToTerraform(struct!.ipv6Support),
        security_group_referencing_support: cdktn.stringToTerraform(struct!.securityGroupReferencingSupport),
    }
}


export function ccTransitGatewayVpcAttachmentOptionsPropertyToHclTerraform(struct?: CcTransitGatewayVpcAttachment.OptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        appliance_mode_support: {
            value: cdktn.stringToHclTerraform(struct!.applianceModeSupport),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dns_support: {
            value: cdktn.stringToHclTerraform(struct!.dnsSupport),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv_6_support: {
            value: cdktn.stringToHclTerraform(struct!.ipv6Support),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_group_referencing_support: {
            value: cdktn.stringToHclTerraform(struct!.securityGroupReferencingSupport),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransitGatewayVpcAttachmentTagPropertyToTerraform(struct?: CcTransitGatewayVpcAttachment.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTransitGatewayVpcAttachmentTagPropertyToHclTerraform(struct?: CcTransitGatewayVpcAttachment.TagProperty | cdktn.IResolvable): any {
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


export namespace CcTransitGatewayVpcAttachment {
export interface OptionsProperty {
    /**
    * Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_vpc_attachment#appliance_mode_support CcTransitGatewayVpcAttachment#appliance_mode_support}
    */
    readonly applianceModeSupport?: string;
    /**
    * Indicates whether to enable DNS Support for Vpc Attachment. Valid Values: enable | disable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_vpc_attachment#dns_support CcTransitGatewayVpcAttachment#dns_support}
    */
    readonly dnsSupport?: string;
    /**
    * Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_vpc_attachment#ipv_6_support CcTransitGatewayVpcAttachment#ipv_6_support}
    */
    readonly ipv6Support?: string;
    /**
    * Indicates whether to enable Security Group referencing support for Vpc Attachment. Valid values: enable | disable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_vpc_attachment#security_group_referencing_support CcTransitGatewayVpcAttachment#security_group_referencing_support}
    */
    readonly securityGroupReferencingSupport?: string;
}
export class OptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applianceModeSupport !== undefined) {
            hasAnyValues = true;
            internalValueResult.applianceModeSupport = this._applianceModeSupport;
        }
        if (this._dnsSupport !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsSupport = this._dnsSupport;
        }
        if (this._ipv6Support !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6Support = this._ipv6Support;
        }
        if (this._securityGroupReferencingSupport !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupReferencingSupport = this._securityGroupReferencingSupport;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applianceModeSupport = undefined;
            this._dnsSupport = undefined;
            this._ipv6Support = undefined;
            this._securityGroupReferencingSupport = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applianceModeSupport = value.applianceModeSupport;
            this._dnsSupport = value.dnsSupport;
            this._ipv6Support = value.ipv6Support;
            this._securityGroupReferencingSupport = value.securityGroupReferencingSupport;
        }
    }

    // appliance_mode_support - computed: true, optional: true, required: false
    private _applianceModeSupport?: string; 
    public get applianceModeSupport() {
        return this.getStringAttribute('appliance_mode_support');
    }
    public set applianceModeSupport(value: string) {
        this._applianceModeSupport = value;
    }
    public resetApplianceModeSupport() {
        this._applianceModeSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applianceModeSupportInput() {
        return this._applianceModeSupport;
    }

    // dns_support - computed: true, optional: true, required: false
    private _dnsSupport?: string; 
    public get dnsSupport() {
        return this.getStringAttribute('dns_support');
    }
    public set dnsSupport(value: string) {
        this._dnsSupport = value;
    }
    public resetDnsSupport() {
        this._dnsSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsSupportInput() {
        return this._dnsSupport;
    }

    // ipv_6_support - computed: true, optional: true, required: false
    private _ipv6Support?: string; 
    public get ipv6Support() {
        return this.getStringAttribute('ipv_6_support');
    }
    public set ipv6Support(value: string) {
        this._ipv6Support = value;
    }
    public resetIpv6Support() {
        this._ipv6Support = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6SupportInput() {
        return this._ipv6Support;
    }

    // security_group_referencing_support - computed: true, optional: true, required: false
    private _securityGroupReferencingSupport?: string; 
    public get securityGroupReferencingSupport() {
        return this.getStringAttribute('security_group_referencing_support');
    }
    public set securityGroupReferencingSupport(value: string) {
        this._securityGroupReferencingSupport = value;
    }
    public resetSecurityGroupReferencingSupport() {
        this._securityGroupReferencingSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupReferencingSupportInput() {
        return this._securityGroupReferencingSupport;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_vpc_attachment#key CcTransitGatewayVpcAttachment#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_vpc_attachment#value CcTransitGatewayVpcAttachment#value}
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
