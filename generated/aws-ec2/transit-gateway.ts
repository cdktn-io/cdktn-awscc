// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTransitGatewayProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway#amazon_side_asn CcTransitGateway#amazon_side_asn}
    */
    readonly amazonSideAsn?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway#association_default_route_table_id CcTransitGateway#association_default_route_table_id}
    */
    readonly associationDefaultRouteTableId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway#auto_accept_shared_attachments CcTransitGateway#auto_accept_shared_attachments}
    */
    readonly autoAcceptSharedAttachments?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway#default_route_table_association CcTransitGateway#default_route_table_association}
    */
    readonly defaultRouteTableAssociation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway#default_route_table_propagation CcTransitGateway#default_route_table_propagation}
    */
    readonly defaultRouteTablePropagation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway#description CcTransitGateway#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway#dns_support CcTransitGateway#dns_support}
    */
    readonly dnsSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway#encryption_support CcTransitGateway#encryption_support}
    */
    readonly encryptionSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway#multicast_support CcTransitGateway#multicast_support}
    */
    readonly multicastSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway#propagation_default_route_table_id CcTransitGateway#propagation_default_route_table_id}
    */
    readonly propagationDefaultRouteTableId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway#security_group_referencing_support CcTransitGateway#security_group_referencing_support}
    */
    readonly securityGroupReferencingSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway#tags CcTransitGateway#tags}
    */
    readonly tags?: CcTransitGateway.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway#transit_gateway_cidr_blocks CcTransitGateway#transit_gateway_cidr_blocks}
    */
    readonly transitGatewayCidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway#vpn_ecmp_support CcTransitGateway#vpn_ecmp_support}
    */
    readonly vpnEcmpSupport?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway awscc_ec2_transit_gateway}
*/
export class CcTransitGateway extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_transit_gateway";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTransitGateway resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTransitGateway to import
    * @param importFromId The id of the existing CcTransitGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTransitGateway to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_transit_gateway", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway awscc_ec2_transit_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTransitGatewayProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcTransitGatewayProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_transit_gateway',
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
        this._amazonSideAsn = config.amazonSideAsn;
        this._associationDefaultRouteTableId = config.associationDefaultRouteTableId;
        this._autoAcceptSharedAttachments = config.autoAcceptSharedAttachments;
        this._defaultRouteTableAssociation = config.defaultRouteTableAssociation;
        this._defaultRouteTablePropagation = config.defaultRouteTablePropagation;
        this._description = config.description;
        this._dnsSupport = config.dnsSupport;
        this._encryptionSupport = config.encryptionSupport;
        this._multicastSupport = config.multicastSupport;
        this._propagationDefaultRouteTableId = config.propagationDefaultRouteTableId;
        this._securityGroupReferencingSupport = config.securityGroupReferencingSupport;
        this._tags.internalValue = config.tags;
        this._transitGatewayCidrBlocks = config.transitGatewayCidrBlocks;
        this._vpnEcmpSupport = config.vpnEcmpSupport;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // amazon_side_asn - computed: true, optional: true, required: false
    private _amazonSideAsn?: number; 
    public get amazonSideAsn() {
        return this.getNumberAttribute('amazon_side_asn');
    }
    public set amazonSideAsn(value: number) {
        this._amazonSideAsn = value;
    }
    public resetAmazonSideAsn() {
        this._amazonSideAsn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonSideAsnInput() {
        return this._amazonSideAsn;
    }

    // association_default_route_table_id - computed: true, optional: true, required: false
    private _associationDefaultRouteTableId?: string; 
    public get associationDefaultRouteTableId() {
        return this.getStringAttribute('association_default_route_table_id');
    }
    public set associationDefaultRouteTableId(value: string) {
        this._associationDefaultRouteTableId = value;
    }
    public resetAssociationDefaultRouteTableId() {
        this._associationDefaultRouteTableId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationDefaultRouteTableIdInput() {
        return this._associationDefaultRouteTableId;
    }

    // auto_accept_shared_attachments - computed: true, optional: true, required: false
    private _autoAcceptSharedAttachments?: string; 
    public get autoAcceptSharedAttachments() {
        return this.getStringAttribute('auto_accept_shared_attachments');
    }
    public set autoAcceptSharedAttachments(value: string) {
        this._autoAcceptSharedAttachments = value;
    }
    public resetAutoAcceptSharedAttachments() {
        this._autoAcceptSharedAttachments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAcceptSharedAttachmentsInput() {
        return this._autoAcceptSharedAttachments;
    }

    // default_route_table_association - computed: true, optional: true, required: false
    private _defaultRouteTableAssociation?: string; 
    public get defaultRouteTableAssociation() {
        return this.getStringAttribute('default_route_table_association');
    }
    public set defaultRouteTableAssociation(value: string) {
        this._defaultRouteTableAssociation = value;
    }
    public resetDefaultRouteTableAssociation() {
        this._defaultRouteTableAssociation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultRouteTableAssociationInput() {
        return this._defaultRouteTableAssociation;
    }

    // default_route_table_propagation - computed: true, optional: true, required: false
    private _defaultRouteTablePropagation?: string; 
    public get defaultRouteTablePropagation() {
        return this.getStringAttribute('default_route_table_propagation');
    }
    public set defaultRouteTablePropagation(value: string) {
        this._defaultRouteTablePropagation = value;
    }
    public resetDefaultRouteTablePropagation() {
        this._defaultRouteTablePropagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultRouteTablePropagationInput() {
        return this._defaultRouteTablePropagation;
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

    // encryption_support - computed: true, optional: true, required: false
    private _encryptionSupport?: string; 
    public get encryptionSupport() {
        return this.getStringAttribute('encryption_support');
    }
    public set encryptionSupport(value: string) {
        this._encryptionSupport = value;
    }
    public resetEncryptionSupport() {
        this._encryptionSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionSupportInput() {
        return this._encryptionSupport;
    }

    // encryption_support_state - computed: true, optional: false, required: false
    public get encryptionSupportState() {
        return this.getStringAttribute('encryption_support_state');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // multicast_support - computed: true, optional: true, required: false
    private _multicastSupport?: string; 
    public get multicastSupport() {
        return this.getStringAttribute('multicast_support');
    }
    public set multicastSupport(value: string) {
        this._multicastSupport = value;
    }
    public resetMulticastSupport() {
        this._multicastSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multicastSupportInput() {
        return this._multicastSupport;
    }

    // propagation_default_route_table_id - computed: true, optional: true, required: false
    private _propagationDefaultRouteTableId?: string; 
    public get propagationDefaultRouteTableId() {
        return this.getStringAttribute('propagation_default_route_table_id');
    }
    public set propagationDefaultRouteTableId(value: string) {
        this._propagationDefaultRouteTableId = value;
    }
    public resetPropagationDefaultRouteTableId() {
        this._propagationDefaultRouteTableId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propagationDefaultRouteTableIdInput() {
        return this._propagationDefaultRouteTableId;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTransitGateway.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTransitGateway.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // transit_gateway_arn - computed: true, optional: false, required: false
    public get transitGatewayArn() {
        return this.getStringAttribute('transit_gateway_arn');
    }

    // transit_gateway_cidr_blocks - computed: true, optional: true, required: false
    private _transitGatewayCidrBlocks?: string[]; 
    public get transitGatewayCidrBlocks() {
        return this.getListAttribute('transit_gateway_cidr_blocks');
    }
    public set transitGatewayCidrBlocks(value: string[]) {
        this._transitGatewayCidrBlocks = value;
    }
    public resetTransitGatewayCidrBlocks() {
        this._transitGatewayCidrBlocks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayCidrBlocksInput() {
        return this._transitGatewayCidrBlocks;
    }

    // transit_gateway_id - computed: true, optional: false, required: false
    public get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }

    // vpn_ecmp_support - computed: true, optional: true, required: false
    private _vpnEcmpSupport?: string; 
    public get vpnEcmpSupport() {
        return this.getStringAttribute('vpn_ecmp_support');
    }
    public set vpnEcmpSupport(value: string) {
        this._vpnEcmpSupport = value;
    }
    public resetVpnEcmpSupport() {
        this._vpnEcmpSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpnEcmpSupportInput() {
        return this._vpnEcmpSupport;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            amazon_side_asn: cdktn.numberToTerraform(this._amazonSideAsn),
            association_default_route_table_id: cdktn.stringToTerraform(this._associationDefaultRouteTableId),
            auto_accept_shared_attachments: cdktn.stringToTerraform(this._autoAcceptSharedAttachments),
            default_route_table_association: cdktn.stringToTerraform(this._defaultRouteTableAssociation),
            default_route_table_propagation: cdktn.stringToTerraform(this._defaultRouteTablePropagation),
            description: cdktn.stringToTerraform(this._description),
            dns_support: cdktn.stringToTerraform(this._dnsSupport),
            encryption_support: cdktn.stringToTerraform(this._encryptionSupport),
            multicast_support: cdktn.stringToTerraform(this._multicastSupport),
            propagation_default_route_table_id: cdktn.stringToTerraform(this._propagationDefaultRouteTableId),
            security_group_referencing_support: cdktn.stringToTerraform(this._securityGroupReferencingSupport),
            tags: cdktn.listMapper(ccTransitGatewayTagPropertyToTerraform, false)(this._tags.internalValue),
            transit_gateway_cidr_blocks: cdktn.listMapper(cdktn.stringToTerraform, false)(this._transitGatewayCidrBlocks),
            vpn_ecmp_support: cdktn.stringToTerraform(this._vpnEcmpSupport),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            amazon_side_asn: {
                value: cdktn.numberToHclTerraform(this._amazonSideAsn),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            association_default_route_table_id: {
                value: cdktn.stringToHclTerraform(this._associationDefaultRouteTableId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auto_accept_shared_attachments: {
                value: cdktn.stringToHclTerraform(this._autoAcceptSharedAttachments),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_route_table_association: {
                value: cdktn.stringToHclTerraform(this._defaultRouteTableAssociation),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_route_table_propagation: {
                value: cdktn.stringToHclTerraform(this._defaultRouteTablePropagation),
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
            dns_support: {
                value: cdktn.stringToHclTerraform(this._dnsSupport),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption_support: {
                value: cdktn.stringToHclTerraform(this._encryptionSupport),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            multicast_support: {
                value: cdktn.stringToHclTerraform(this._multicastSupport),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            propagation_default_route_table_id: {
                value: cdktn.stringToHclTerraform(this._propagationDefaultRouteTableId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_group_referencing_support: {
                value: cdktn.stringToHclTerraform(this._securityGroupReferencingSupport),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTransitGatewayTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTransitGateway.TagPropertyList",
            },
            transit_gateway_cidr_blocks: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._transitGatewayCidrBlocks),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            vpn_ecmp_support: {
                value: cdktn.stringToHclTerraform(this._vpnEcmpSupport),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTransitGatewayTagPropertyToTerraform(struct?: CcTransitGateway.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTransitGatewayTagPropertyToHclTerraform(struct?: CcTransitGateway.TagProperty | cdktn.IResolvable): any {
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


export namespace CcTransitGateway {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway#key CcTransitGateway#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway#value CcTransitGateway#value}
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
